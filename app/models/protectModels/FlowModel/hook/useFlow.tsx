import {
	createContext,
	useCallback,
	useContext,
	useRef,
	useState,
} from "react";
import { addEdge, useEdgesState, useNodesState } from "reactflow";
import { globalStyles } from "~/client/styles";

import type {
	ReactNode,
	DragEvent,
	RefObject,
	Dispatch,
	SetStateAction,
} from "react";

import type {
	ReactFlowInstance,
	OnConnect,
	Node,
	NodeChange,
	Edge,
	EdgeChange,
} from "reactflow";
import { Drawer } from "~/client/components";
import { useFetcher, useParams } from "@remix-run/react";

type DrawerProps = { title: string; children: ReactNode; id: string };
type OnChange<ChangesType> = (changes: ChangesType[]) => void;

type FlowContextProps = {
	onOpenDrawer: (event: DrawerProps) => void;
	onCloseDrawer: () => void;

	reactFlowWrapperRef: RefObject<HTMLDivElement>;
	reactFlowInstance: ReactFlowInstance<any, any> | null;
	setReactFlowInstance: Dispatch<SetStateAction<ReactFlowInstance<any> | null>>;

	nodes: Node<any, string | undefined>[];
	setNodes: Dispatch<SetStateAction<Node<any, string | undefined>[]>>;
	onNodesChange: OnChange<NodeChange>;

	edges: Edge<any>[];
	setEdges: Dispatch<SetStateAction<Edge<any>[]>>;
	onEdgesChange: OnChange<EdgeChange>;

	onConnect: OnConnect;
	onDragOver: (event: DragEvent<HTMLDivElement>) => void;
	deleteNodeById: (id: string) => void;

	saveFlow: (url: string) => void;
	isSavingFlow: boolean;
};

type FlowContextProviderProps = {
	children: ReactNode;
};

const FlowContext = createContext({} as FlowContextProps);

const edgeStyles = {
	animated: true,
	style: { stroke: globalStyles.vars.colors.text[500] },
};

const initialFlow = [
	{
		id: "initial_node",
		data: { label: "Começe Aqui" },
		position: { x: 0, y: 0 },
		type: "initial_node",
	},
];

export function FlowContextProvider({ children }: FlowContextProviderProps) {
	const [drawerIsOpen, setDrawerIsOpen] = useState<DrawerProps | null>(null);
	const onOpenDrawer = (event: DrawerProps) => setDrawerIsOpen(event);
	const onCloseDrawer = () => setDrawerIsOpen(null);

	const reactFlowWrapperRef = useRef<HTMLDivElement>(null);
	const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance<
		any,
		any
	> | null>(null);

	const [, setRemovedNodesId] = useState<string[]>([]);
	const [nodes, setNodes, onNodesChange] = useNodesState(initialFlow);

	function nodesChange(e: any[]) {
		if (e[0].type === "remove" && e[0].id === "initial_node") return;
		if (e[0].type === "remove") setRemovedNodesId((old) => [...old, e[0].id]);
		onNodesChange(e);
	}

	function deleteNodeById(id: string) {
		setRemovedNodesId((old) => [...old, id]);
		setNodes((nds) => nds.filter((node) => node.id !== id));
	}

	const [edges, setEdges, onEdgesChange] = useEdgesState([]);

	const onConnect: OnConnect = useCallback(
		(params) => setEdges((eds) => addEdge({ ...params, ...edgeStyles }, eds)),
		[setEdges],
	);

	const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	}, []);

	const params = useParams();
	const { submit, state } = useFetcher();

	function saveFlow(url: string) {
		if (!params?.flowid) return;
		submit(
			{
				nodes: JSON.stringify(nodes),
				edges: JSON.stringify(edges),
				flowId: params?.flowid,
			},
			{ method: "post", action: url },
		);
	}

	return (
		<FlowContext.Provider
			value={{
				reactFlowWrapperRef,
				reactFlowInstance,
				setReactFlowInstance,

				nodes,
				setNodes,
				onNodesChange: nodesChange,

				edges,
				setEdges,
				onEdgesChange,
				saveFlow,

				onConnect,
				onDragOver,
				deleteNodeById,

				onOpenDrawer,
				onCloseDrawer,
				isSavingFlow: state === "submitting",
			}}
		>
			<Drawer
				position="right"
				title={drawerIsOpen?.title}
				isVisible={!!drawerIsOpen}
				makeInvisible={onCloseDrawer}
			>
				{drawerIsOpen?.children}
			</Drawer>

			{children}
		</FlowContext.Provider>
	);
}

export function useFlow() {
	const value = useContext(FlowContext);
	return value;
}

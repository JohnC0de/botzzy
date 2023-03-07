/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState, type ReactNode } from "react";
import { useActionData, useLoaderData } from "@remix-run/react";
import { toast } from "react-hot-toast";
import { useToast } from "~/client/hooks";

type openFormModalProps = {
  data?: any;
  title: string;
  justView?: true | false;
};

type CrudContextProps = {
  formModal: openFormModalProps | null;
  justView: boolean;
  openFormModal: (event: openFormModalProps) => void;
  closeFormModal: () => void;

  deleteModal: string | number | null;
  openDeleteModal: (event: number | string) => void;
  closeDeleteModal: () => void;

  filterDrawer: boolean;
  openFilterDrawer: () => void;
  closeFilterDrawer: () => void;
};

type CrudContextProviderProps = {
  children: ReactNode;
};

export const CrudContext = createContext({} as CrudContextProps);

export function CrudContextProvider({ children }: CrudContextProviderProps) {
  const { fireToast } = useToast();
  const loaderData = useLoaderData();

  // LOADER response
  useEffect(() => {
    const myToast = loaderData?.toast ? fireToast(loaderData.toast) : null;
    return () => {
      myToast && toast.remove(myToast);
    };
  }, [loaderData.toast]);

  // CREATE/UPDATE modal
  const [formModal, setFormModal] = useState<openFormModalProps | null>(null);
  const [justView, setJustView] = useState<boolean | any>(false);
  const openFormModal = (e: openFormModalProps) => {
    setFormModal(e);
    setJustView(!!e?.justView);
  };
  function closeFormModal() {
    setJustView(false);
    setFormModal(null);
  }

  // Delete modal
  const [deleteModal, setDeleteModal] = useState<string | number | null>(null);
  const openDeleteModal = (e: string | number) => setDeleteModal(e);
  const closeDeleteModal = () => setDeleteModal(null);

  // FILTER drawer
  const [filterDrawer, setFilterDrawer] = useState(false);
  const openFilterDrawer = () => setFilterDrawer(true);
  const closeFilterDrawer = () => setFilterDrawer(false);

  // Toast and modal api controll
  const actionData = useActionData();
  useEffect(() => {
    if (actionData?.toast) fireToast(actionData?.toast);
    if (actionData?.closeModal) {
      closeFormModal();
      closeDeleteModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionData]);

  return (
    <CrudContext.Provider
      value={{
        formModal,
        justView,
        openFormModal,
        closeFormModal,

        deleteModal,
        openDeleteModal,
        closeDeleteModal,

        filterDrawer,
        openFilterDrawer,
        closeFilterDrawer,
      }}
    >
      {children}
    </CrudContext.Provider>
  );
}

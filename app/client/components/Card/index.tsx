import { cardStyle } from "./styles.css";
import type { CardProps, TagProps } from "./types";

const tags = {
  section: (props: TagProps) => <section {...props} />,
  aside: (props: TagProps) => <aside {...props} />,
  div: (props: TagProps) => <div {...props} />,
};
export function Card({
  showBgColor,
  radii,
  space,
  as = "div",
  children,
  boxShadow,
  direction,
  spacing,
  justify,
  align,
  ...rest
}: CardProps) {
  const Tag = tags[as];
  return (
    <Tag
      className={cardStyle({
        showBgColor,
        boxShadow,
        direction,
        justify,
        radii,
        space,
        align,
        spacing,
      })}
      {...rest}
    >
      {children}
    </Tag>
  );
}

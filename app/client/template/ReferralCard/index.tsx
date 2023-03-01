import { Badge, Card } from "~/client/components";
import { globalStyles } from "~/client/styles";
import type { ReferralCardProps } from "./types";

const { vars } = globalStyles;
export function ReferralCard({
  badgeVariant,
  icon: Icon,
  iconBackgrundColor,
  children,
  badgeContent,
}: ReferralCardProps) {
  return (
    <Card
      direction="row"
      align="center"
      space={4}
      spacing={4}
      showBgColor
      radii="sm"
      style={{ flex: 1, border: `1px solid ${vars.colors.line}` }}
    >
      <Card
        align="center"
        justify="center"
        radii="sm"
        style={{
          width: "3rem",
          height: "3rem",
          background: iconBackgrundColor,
        }}
      >
        <Icon color="#FFF" size={28} />
      </Card>
      <Card direction="column" spacing={1} style={{ flex: 1 }}>
        {children}
      </Card>
      {badgeContent && badgeVariant && (
        <Badge variant={badgeVariant}>{badgeContent}</Badge>
      )}
    </Card>
  );
}

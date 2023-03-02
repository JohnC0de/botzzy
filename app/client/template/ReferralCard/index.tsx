import { Badge, Card } from "~/client/components";
import type { ReferralCardProps } from "./types";

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
      style={{ flex: 1, boxShadow: "3px 3px 8px rgba(0, 0, 0, 0.1)" }}
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

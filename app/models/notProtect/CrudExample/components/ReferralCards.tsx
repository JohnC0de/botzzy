import { Card } from "~/client/components";
import { Icons } from "~/client/icons";
import { globalStyles } from "~/client/styles";
import { ReferralCard } from "~/client/template";

const { vars } = globalStyles;
export function ReferralCards() {
  return (
    <Card spacing={6} justify="space-between">
      <ReferralCard
        icon={Icons.History}
        iconBackgrundColor={vars.colors.primary[500]}
        badgeContent={
          <Card align="center" spacing={1}>
            <Icons.ChevronTop size={16} />
            17.2%
          </Card>
        }
        badgeVariant="success"
      >
        <small>Total users</small>
        <h3>2,420</h3>
      </ReferralCard>
      <ReferralCard
        icon={Icons.Note}
        iconBackgrundColor={vars.colors.success[300]}
        badgeVariant="success"
        badgeContent={
          <Card align="center" spacing={1}>
            <Icons.ChevronTop size={16} />
            32.7%
          </Card>
        }
      >
        <small>Active Users</small>
        <h3>1,897</h3>
      </ReferralCard>
      <ReferralCard
        icon={Icons.Plus}
        iconBackgrundColor={vars.colors.info[500]}
        badgeVariant="danger"
        badgeContent={
          <Card align="center" spacing={1}>
            <Icons.ChevronBottom size={16} />
            2.3%
          </Card>
        }
      >
        <small>New Users</small>
        <h3>241</h3>
      </ReferralCard>
    </Card>
  );
}

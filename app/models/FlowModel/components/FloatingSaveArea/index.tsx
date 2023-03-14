import { Button, Card } from "~/client/components";
import { Icons } from "~/client/icons";
import { floatingSaveAreaContainerStyle } from "./styles.css";

export function FloatingSaveArea() {
  return (
    <div className={floatingSaveAreaContainerStyle}>
      <Card
        boxShadow="xs"
        radii="xs"
        direction="row"
        showBgColor
        space={2}
        spacing={1}
      >
        <Button
          space={2}
          variant="ghost"
          disabled
          title="Já está salvo nos cookies"
        >
          <Icons.Cookie size={20} />
        </Button>
        <Button
          space={2}
          variant="ghost"
          disabled
          title="Já está salvo na nuvem"
        >
          <Icons.CloudUpload size={20} />
        </Button>
      </Card>
    </div>
  );
}

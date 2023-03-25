import { useFetcher } from "@remix-run/react"
import { Card, Popover } from "~/client/components"

import { LenguageButton } from "./LenguageButton"
import { PopoverButton } from "./PopoverButton"

export function LenguagePopover() {
  const { state, submit } = useFetcher()

  function onChange(e: string) {
    submit({ lenguage: e }, { method: "post", action: "/api/switchlenguage" })
  }

  return (
    <Popover
      position="bottom-left"
      button={<LenguageButton isLoading={state !== "idle"} />}
    >
      <Card
        space={2}
        radii="xs"
        direction="column"
        spacing={2}
        showBgColor
        style={{ width: "210px" }}
      >
        <Card direction="column" showBgColor>
          <PopoverButton
            content="🇧🇷 Português"
            value="pt-br"
            onChange={onChange}
          />
          <PopoverButton content="🇺🇸 English" value="en" onChange={onChange} />
        </Card>
      </Card>
    </Popover>
  )
}

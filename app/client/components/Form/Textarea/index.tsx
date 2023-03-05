import { useId, useState } from "react";
import {
  inputContainerStyle,
  errorInputStyle,
  inputStyle,
  labelStyle,
} from "./styles.css";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import type { TextAreaTypes } from "./types";
import { motion } from "framer-motion";
import { Popover } from "~/client/components";
import { Button } from "../Button";
import { Icons } from "~/client/icons";

export function Textarea({
  radii,
  variant,
  fontSize,
  fontWeight,
  space,
  children,
  label,
  error,
  disabled,
  showEmoticons = false,
  emotePosition = "bottom-left",
  value,
  defaultValue,
  onChange: textareaOnChange,
  ...rest
}: TextAreaTypes) {
  const id = useId();
  const [emoticonsIsVisibled, setEmoticonsIsVisibled] = useState(false);
  const [textareaValue, setTextareaValue] = useState(
    value || defaultValue || ""
  );

  function onChange(e: string) {
    setTextareaValue(e);
    if (textareaOnChange) textareaOnChange(e);
  }

  return (
    <div className={inputContainerStyle}>
      {label && (
        <label htmlFor={id} className={labelStyle}>
          {label}
          {showEmoticons && (
            <Popover
              isOpen={emoticonsIsVisibled}
              position={emotePosition}
              button={
                <Button
                  variant="ghost"
                  onClick={() => setEmoticonsIsVisibled(true)}
                  space={1}
                  radii="full"
                >
                  <Icons.Smile size={18} />
                </Button>
              }
            >
              <Picker
                data={data}
                onEmojiSelect={(e: any) => {
                  setEmoticonsIsVisibled(false);
                  onChange(textareaValue + e.native);
                }}
              />
            </Popover>
          )}
        </label>
      )}

      <textarea
        id={id}
        className={inputStyle({
          fontSize,
          fontWeight,
          radii,
          space,
          variant,
          isError: !!error,
        })}
        value={textareaValue}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />

      {error && (
        <motion.p
          transition={{ duration: 0.1, ease: "easeIn" }}
          initial={{ opacity: 0, transform: "translateY(-5px)", height: "0px" }}
          animate={{
            opacity: 1,
            transform: "translateY(0px)",
            height: "unset",
          }}
          exit={{ opacity: 0, transform: "translateY(-5px)", height: "0px" }}
          className={errorInputStyle}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

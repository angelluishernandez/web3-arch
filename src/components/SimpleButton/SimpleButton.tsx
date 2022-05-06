import { Button } from "@mui/material";
import React from "react";
import { SimpleButtonProps } from "./SimpleButton.types";

// Creating a simple button using a component library such as Material UI
// doesn't make much sense, but I am doing it anyway to illustrate the
// Parent <=> child architecture, where the children emits an event and
// the parent captures it to execute the business logic.

export default function SimpleButton({
  buttonText,
  variant,
  onClickCallback,
}: SimpleButtonProps) {
  return (
    <Button variant={variant} onClick={onClickCallback}>
      {buttonText}
    </Button>
  );
}

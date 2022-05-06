export type SimpleButtonProps = {
  buttonText: string;
  variant: "contained" | "outlined";
  onClickCallback: React.MouseEventHandler<HTMLButtonElement>;
};

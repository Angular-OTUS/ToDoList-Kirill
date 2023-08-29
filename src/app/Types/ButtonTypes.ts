export interface ButtonProps {
  buttonStyles: ButtonStyles;
  text: string;
  isDisabled?: boolean;
}
export interface ButtonStyles {
  [key:string]: boolean;
}

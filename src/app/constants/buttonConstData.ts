import {ButtonProps} from "../Types/ButtonTypes";

export const buttonDelete: ButtonProps = {
  buttonStyles: {button: true, button__delete: true},
  text: "Delete"
}

export const buttonAdd: ButtonProps = {
  buttonStyles: {button: true, button__add: true, button__noActive: true},
  text: "Add Todo",
  isDisabled: true,
}

import Option from "../../../utilities/Option";

export {};

declare global {
  type OptionText =
    | "Include Uppercase Letters"
    | "Include Lowercase Letters"
    | "Include Numbers"
    | "Include Symbols";

  type TsetPasswordOptions = React.Dispatch<React.SetStateAction<Option[]>>;
}

import OptionClass from "../../../utilities/Option";

export {};

declare global {
  type OptionText =
    | "Include Uppercase Letters"
    | "Include Lowercase Letters"
    | "Include Numbers"
    | "Include Symbols";

  type Option = {
    text: OptionText;
    passwordOption: keyof PasswordOptions;
  };

  type TsetPasswordOptions = React.Dispatch<
    React.SetStateAction<OptionClass[]>
  >;
}

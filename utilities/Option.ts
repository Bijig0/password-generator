class OptionClass {
  public id: number;
  public text: OptionText;
  public checked: boolean;
  public characters: string;

  constructor(
    id: number,
    text: OptionText,
    checked: boolean,
    characters: string
  ) {
    this.id = id;
    this.text = text;
    this.checked = checked;
    this.characters = characters;
  }
}

export const includeUppercase = new OptionClass(
  1,
  "Include Uppercase Letters",
  false,
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
);

export const includeLowercase = new OptionClass(
  2,
  "Include Lowercase Letters",
  false,
  "abcdefghijklmnopqrstuvwxyz"
);

export const includeNumbers = new OptionClass(
  3,
  "Include Numbers",
  false,
  "123456789"
);

export const includeSymbols = new OptionClass(
  4,
  "Include Symbols",
  false,
  '!@#$%^&*()-+|=-":>?<,./'
);

export default OptionClass;

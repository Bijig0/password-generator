class Option {
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

export const includeUppercase = new Option(
  1,
  "Include Uppercase Letters",
  false,
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
);

export const includeLowercase = new Option(
  2,
  "Include Lowercase Letters",
  false,
  "abcdefghijklmnopqrstuvwxyz"
);

export const includeNumbers = new Option(
  3,
  "Include Numbers",
  false,
  "123456789"
);

export const includeSymbols = new Option(
  4,
  "Include Symbols",
  false,
  '!@#$%^&*()-+|=-":>?<,./'
);

export default Option;

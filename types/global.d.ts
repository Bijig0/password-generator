import React from "react";
import OptionClass from "../utilities/Option";

export {};

declare global {
  type PasswordOptions = {
    uppercase: boolean;
    lowercase: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
  }
  type AppContextType = {
    passwordLength: number;
    setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
    passwordOptions: OptionClass[];
    setPasswordOptions: React.Dispatch<React.SetStateAction<OptionClass[]>>;
    numberOfChecked: number;
    setNumberOfChecked: React.Dispatch<React.SetStateAction<number>>;
    handleGeneratePassword: (e: React.MouseEvent) => void;
    password: string;
    strength: Strength;
  };
}
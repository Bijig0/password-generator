import React from "react";
import Option from "../utilities/Option";

export {};

declare global {
  type PasswordOptions = {
    uppercase: boolean;
    lowercase: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
  };
  type AppContextType = {
    passwordLength: number;
    setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
    passwordOptions: Option[];
    setPasswordOptions: React.Dispatch<React.SetStateAction<Option[]>>;
    numberOfChecked: number;
    setNumberOfChecked: React.Dispatch<React.SetStateAction<number>>;
    handleGeneratePassword: (e: React.MouseEvent) => void;
    password: string;
    strength: Strength;
  };
}

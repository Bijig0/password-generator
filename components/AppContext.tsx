import { createContext, useState, useMemo } from "react";
import Option, {
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols,
} from "../utilities/Option";
import generatePassword from "../utilities/generatePassword";
import calculateStrength from "../utilities/StrengthChecker/calculateStrength";

const AppContext = createContext<AppContextType>({} as AppContextType);

type Props = {
  children: React.ReactNode;
};

export const AppProvider = (props: Props) => {
  const [numberOfChecked, setNumberOfChecked] = useState<number>(0);
  const [passwordLength, setPasswordLength] = useState(10);
  const [passwordOptions, setPasswordOptions] = useState<Option[]>([
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ]);
  const [copied, setCopied] = useState(false);
  const [password, setPassword] = useState<string>("");
  const strength: Strength = calculateStrength(numberOfChecked, passwordLength);

  // Make it so only the password field gets re-rendered every when this event is clicked
  // Instead of the entire app
  const handleGeneratePassword = () => {
    const generatedPassword = generatePassword(passwordOptions, passwordLength);
    setCopied(false)
    setPassword(generatedPassword);
  };
  return (
    <AppContext.Provider
      value={{
        passwordLength,
        setPasswordLength,
        passwordOptions,
        setPasswordOptions,
        numberOfChecked,
        setNumberOfChecked,
        handleGeneratePassword,
        password,
        strength,
        copied,
        setCopied,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;

import type { NextPage } from "next";
import StrengthChecker from "../components/StrengthChecker/StrengthChecker";
import Button from "../components/Button/Button";
import PasswordField from "../components/PasswordField/PasswordField";
import AppMarginBox from "../components/AppMarginBox";
import Title from "../components/Title/Title";
import PaddingBox from "../components/PaddingBox";
import CheckboxGroup from "../components/CheckboxGroup/CheckboxGroup";
import { AppProvider } from "../components/AppContext";
import Slider from "../components/slider/Slider";

const Home: NextPage = () => {
  return (
    <AppMarginBox className="font-mono flex flex-col">
      <Title />
      <main className="mx-auto">
        <AppProvider>
          <PasswordField />
          <PaddingBox className="max-w-md flex flex-col gap-y-4 bg-grey-dark">
            <Slider/>
            <CheckboxGroup />
            <StrengthChecker />
            <Button />
          </PaddingBox>
        </AppProvider>
      </main>
    </AppMarginBox>
  );
};

export default Home;

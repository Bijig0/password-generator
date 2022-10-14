import React, { useContext } from "react";

type ContextTypes = AppContextType;

const useNotUndefinedContext = (
  context: React.Context<ContextTypes>
): ContextTypes => {
  if (typeof context === "undefined") {
    throw new Error("This component was not wrapped in a provider!");
  }
  return useContext(context);
};

export default useNotUndefinedContext;

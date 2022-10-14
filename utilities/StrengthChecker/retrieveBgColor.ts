const retrieveBgColor = (strength: Strength, position: number): string => {
  switch (strength) {
    case "non-existent":
      return "hidden";
    case "too weak":
      if (position === 1) {
        return "bg-too-weak";
      }
      return "";
    case "weak":
      if (position <= 2) {
        return "bg-weak";
      }
      return "";
    case "moderate":
      if (position <= 3) {
        return "bg-moderate";
      }
      return "";
    case "strong":
      return "bg-strong";
  }
};

export default retrieveBgColor;

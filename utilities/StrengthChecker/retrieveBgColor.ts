const retrieveBgColor = (strength: Strength, position: number): BarBgColor => {
  switch (strength) {
    case "none":
      return "hidden";
    case "too weak":
      if (position === 1) {
        return "bg-too-weak";
      }
      return "black";
    case "weak":
      if (position <= 2) {
        return "bg-weak";
      }
      return "black";
    case "moderate":
      if (position <= 3) {
        return "bg-moderate";
      }
      return "black";
    case "strong":
      return "bg-strong";
  }
};

export default retrieveBgColor;

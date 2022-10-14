const calculateStrength = (
  numberOfChecked: number,
  length: number
): Strength => {
  if (numberOfChecked === 0) {
    return "non-existent";
  }
  switch (length) {
    case 0:
      return "non-existent";
    case 1:
    case 2:
    case 3:
      return "too weak";
    case 4:
    case 5:
      return 'weak'
    case 6:
      if (numberOfChecked < 2) {
        return "weak";
      } else if (numberOfChecked >= 2) {
        return "moderate";
      }
    case 7:
    case 8:
    case 9:
    case 10:
      if (numberOfChecked === 0) {
        return "weak";
      } else if (1 <= numberOfChecked && numberOfChecked <= 3) {
        return "moderate";
      } else if (numberOfChecked === 4) {
        return "strong";
      }
    default:
      throw new Error(`Length:${length} Checked:${numberOfChecked} is invalid`);
  }
};

export default calculateStrength;

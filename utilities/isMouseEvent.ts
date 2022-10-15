const isMouseEvent = (
  e: Event | React.MouseEvent | React.TouchEvent
): boolean => {
  return e.type.includes("mouse");
};

export default isMouseEvent;

import React from "react";

export const isReactMouseEvent = (
  e: Event | React.MouseEvent | React.TouchEvent
): e is React.MouseEvent => {
  return e.type.includes("mouse");
};

export const isDOMMouseEvent = (e: Event | React.MouseEvent | React.TouchEvent): e is MouseEvent => {
  return e.type.includes("mouse")
} 

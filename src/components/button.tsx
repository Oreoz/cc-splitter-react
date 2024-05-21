import React, { ComponentProps } from "react";
import "./button.css";

export const Button = ({ children, ...rest }: ComponentProps<"button">) => {
  return (
    <button {...rest} className="button">
      {children}
    </button>
  );
};

import React, { ComponentProps } from "react";
import "./heading.css";

export const Heading = ({ children, ...rest }: ComponentProps<"h1">) => {
  return (
    <h3 {...rest} className="heading">
      {children}
    </h3>
  );
};

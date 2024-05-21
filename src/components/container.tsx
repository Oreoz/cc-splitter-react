import React, { ComponentProps } from "react";
import "./container.css";

export const Container = ({ children, ...rest }: ComponentProps<"div">) => {
  return (
    <div {...rest} className="container">
      {children}
    </div>
  );
};

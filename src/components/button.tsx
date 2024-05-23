import classNames from "classnames";
import React, { ComponentProps } from "react";
import "./button.css";

export type ButtonProps = {
  kind?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md";
} & ComponentProps<"button">;

export const Button = ({
  children,
  className,
  kind = "primary",
  size = "md",
  ...rest
}: ButtonProps) => {
  return (
    <button {...rest} className={classNames("button", kind, size, className)}>
      {children}
    </button>
  );
};

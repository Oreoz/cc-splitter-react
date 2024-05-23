import classNames from "classnames";
import React, { ComponentProps } from "react";
import "./text.css";

export type TextProps = {
  size?: "sm" | "md" | "lg";
  weight?: "regular" | "semibold" | "bold";
} & ComponentProps<"p">;

export const Text = ({
  children,
  className,
  size = "md",
  weight = "regular",
  ...rest
}: TextProps) => {
  return (
    <p {...rest} className={classNames("text", className, size, weight)}>
      {children}
    </p>
  );
};

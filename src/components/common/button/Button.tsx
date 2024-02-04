import React, { useMemo } from "react";
import {
  ButtonProps,
  ButtonKeyProps,
  buttonStyles,
  buttonSize,
  buttonRounded,
  ButtonLinkProps,
} from "./Button.props";
import './Button.css'

const ButtonWrapper = (props: ButtonProps | ButtonLinkProps) => {
  const { variant, children, ...rest } = props;

  // return Anchor element
  if (variant === "link") {
    return <a {...(rest as ButtonLinkProps)}>{children}</a>;
  }

  // return button element
  return <button {...(rest as ButtonProps)}>{children}</button>;
};

function Button(props: ButtonProps | ButtonLinkProps) {
  const {
    children,
    className,
    variant = "contained",
    color,
    isLoading = false,
    size = "xlarge",
    fullWidth = false,
    rounded = "small",
    disabled = false,
    align = "center",
    ...rest
  } = props;

  const buttonType: ButtonKeyProps =
    variant && color ? `${variant}-${color}` : variant;

  const buttonClassName = useMemo(() => {
    let classNames = "btn";

    // add button styles
    classNames += ` ${buttonStyles[buttonType]}`;

    // add button size
    classNames += ` ${buttonSize[size]}`;

    // button width
    classNames += fullWidth ? " w-full" : "";

    // button border radius
    classNames += ` ${buttonRounded[rounded]}`;

    // add disabled class for link
    classNames += variant === "link" && disabled ? " btn-link-disabled" : "";

    // Add class name from props and make sure it will added on the last
    // so that it will overide the current button styles
    classNames += ` ${className || ""}`;

    // return the classNames
    return classNames;
  }, [
    buttonType,
    size,
    rounded,
    variant,
    fullWidth,
    className,
    disabled,
    align,
  ]);

  return (
    <ButtonWrapper
      className={buttonClassName}
      variant={variant}
      disabled={disabled}
      {...rest}
    >
      {children}
    </ButtonWrapper>
  );
}

export default Button;

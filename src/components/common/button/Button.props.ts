import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ColorProps, RoundedProps, SizeProps } from "../Common.props";

// types
export type ButtonVariant = "contained" | "outlined" | "text" | "link";

export type AlignItems =
  | "normal"
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly"
  | "stretch";

export type ButtonSizeProps = "xs" | "small" | "medium" | "large" | "xlarge";

export type ButtonRoundedProps = "none" | "small" | "medium" | "large" | "full";

export type ButtonKeyProps = `${ButtonVariant}-${ColorProps}` | ButtonVariant;

export type ButtonStylesParam = {
  [key in ButtonKeyProps]: string;
};

export const buttonStyles: ButtonStylesParam = {
  // contained
  contained: "",
  "contained-primary": "btn-primary",
  "contained-secondary": "btn-secondary",
  "contained-info": "btn-info",
  "contained-success": "btn-success",
  "contained-warning": "btn-warning",
  "contained-error": "btn-error",
  "contained-inherit": "",

  // outlined
  outlined: "btn-outlined",
  "outlined-primary": "btn-outlined-primary",
  "outlined-secondary": "btn-outlined-secondary",
  "outlined-info": "btn-outlined-info",
  "outlined-success": "btn-outlined-success",
  "outlined-warning": "btn-outlined-warning",
  "outlined-error": "btn-outlined-error",
  "outlined-inherit": "btn-outlined",

  // text
  text: "btn-text",
  "text-primary": "btn-text-primary",
  "text-secondary": "btn-text-secondary",
  "text-info": "btn-text-info",
  "text-success": "btn-text-success",
  "text-warning": "btn-text-warning",
  "text-error": "btn-text-error",
  "text-inherit": "btn-text",

  // text
  link: "btn-link",
  "link-primary": "btn-link-primary",
  "link-secondary": "btn-link-secondary",
  "link-info": "btn-link-info",
  "link-success": "btn-link-success",
  "link-warning": "btn-link-warning",
  "link-error": "btn-link-error",
  "link-inherit": "btn-link",
};

export type ButtonSizeParam = {
  [key in SizeProps]: string;
};

export const buttonSize: ButtonSizeParam = {
  xs: "px-2 py-1 text-xs",
  small: "px-2 py-1",
  medium: "px-2.5 py-1.5",
  large: "px-3 py-2",
  xlarge: "px-3.5 py-2.5",
};

export type ButtonRoundedParam = {
  [key in RoundedProps]: string;
};

export const buttonRounded: ButtonRoundedParam = {
  none: "rounded-none",
  small: "rounded",
  medium: "rounded-md",
  large: "rounded-lg",
  full: "rounded-full",
};

export const iconSize: ButtonSizeParam = {
  xs: "h-3 w-3",
  small: "h-4 w-4",
  medium: "h-5 w-5",
  large: "h-5 w-5",
  xlarge: "h-5 w-5",
};

export const alignItems: { [key in AlignItems]: string } = {
  normal: "justify-normal",
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
  stretch: "justify-stretch",
};

export interface ButtonCommonProps {
  variant?: ButtonVariant;
  className?: string;
  onClick?: (params?: any) => void;
  children?: React.ReactNode | string;
  color?: ColorProps;
  isLoading?: boolean;
  rounded?: RoundedProps;
  size?: SizeProps;
  fullWidth?: boolean;
  align?: AlignItems;
}

export type ButtonLinkProps = ButtonCommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    disabled?: boolean;
  };

export type ButtonProps = ButtonCommonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

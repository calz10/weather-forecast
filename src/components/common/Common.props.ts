export type RoundedProps = "small" | "medium" | "large" | "full" | "none";

export type ColorProps =
  | "primary"
  | "inherit"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

export type SizeProps = "xs" | "small" | "medium" | "large" | "xlarge";

export type ShadowProps =
  | "default"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "inner"
  | "none";

// Use this if you want to set the sepecific style like background and text
export const themeColors: { [key in ColorProps]: any } = {
  inherit: {
    background: "bg-inherit dark:bg-inherit",
    text: "text-inherit dark:text-inherit",
  },
  primary: {
    background: "bg-primary dark:bg-primary-400",
    text: "text-primary-600 dark:text-primary-400",
  },
  secondary: { // This must be update if the secondary collor is changed
    background: "dark:bg-secondary-400 dark:hover:bg-secondary-500",
    text: "text-secondary-600 dark:text-secondary-300",
  },
  info: {
    background: "bg-info dark:bg-info-400",
    text: "text-info-600 dark:text-info-400",
  },
  success: {
    background: "bg-success dark:bg-success-400",
    text: "text-success-600 dark:text-success-400",
  },
  warning: {
    background: "bg-warning dark:bg-warning-400",
    text: "text-warning-600 dark:text-warning-400",
  },
  error: {
    background: "bg-error dark:bg-error-400",
    text: "text-error-600 dark:text-error-400",
  },
};

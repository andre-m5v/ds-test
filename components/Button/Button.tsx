import clsx from "clsx";
import { AllHTMLAttributes, FC } from "react";

export interface Props extends Omit<AllHTMLAttributes<HTMLButtonElement>, "size" | "as" | "type"> {
  type?: "button" | "reset" | "submit";
  size?: "regular" | "small" | "icon";
  theme?: "primary" | "secondary" | "inverse" | "text" | "square";
  alignInline?: boolean;
}

export const Button: FC<Props> = ({
  children,
  className,
  size = "regular",
  label,
  alignInline,
  ...props
}) => {
  const theme: Props["theme"] = props?.theme;

  const baseStyles =
    "ds-text-center ds-font-semibold text-[1.0625rem] ds-flex ds-items-center leading-[1.1] tracking-[0.85px] ds-justify-center ds-select-none ds-transition-colors ds-duration-150 ds-gap-2";

  const sizeStyles = {
    regular: "ds-px-4 ds-py-2.5",
    small: "ds-px-4 ds-py-1.5",
    icon: "ds-p-2.5",
  };

  const themeStyles = {
    primary:
      "ds-bg-accent-default ds-text-inverse ds-rounded-default ds-border-2 ds-border-accent-default hover:ds-bg-accent-hover hover:ds-border-accent-hover active:ds-bg-accent-active active:ds-border-accent-active disabled:ds-bg-accent-disabled disabled:ds-border-accent-disabled",
    secondary:
      "ds-bg-transparent ds-text-accent-default ds-rounded-default ds-border-2 ds-border-accent-default hover:ds-bg-accent-subtle hover:ds-text-accent-hover hover:ds-border-accent-hover active:ds-text-accent-active active:ds-border-accent-active disabled:ds-text-accent-disabled disabled:ds-border-accent-disabled",
    inverse:
      "ds-bg-default ds-text-accent-default hover:ds-bg-accent-subtle hover:ds-text-accent-hover active:ds-bg-default active:ds-text-accent-active disabled:ds-text-accent-disabled",
    text: "ds-bg-transparent ds-text-accent-default hover:ds-bg-accent-subtle hover:ds-text-accent-hover active:ds-text-accent-active disabled:ds-text-accent-disabled",
    square:
      "ds-bg-transparent ds-text-accent-default ds-rounded-default ds-border-2 ds-border-accent-default hover:ds-bg-accent-subtle hover:ds-text-accent-hover hover:ds-border-accent-hover active:ds-text-accent-active active:ds-border-accent-active disabled:ds-text-accent-disabled disabled:ds-border-accent-disabled",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        sizeStyles[size],
        themeStyles[theme ?? "primary"],
        alignInline && "ds-p-0 min-h-auto outline-offset-1",
        className
      )}
      {...props}
      aria-label={label}
    >
      {children}
    </button>
  );
};

export default Button;

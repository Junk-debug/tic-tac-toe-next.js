import clsx from "clsx";

/**
 * Renders a button component with specified children, className, size, and variant.
 *
 * @param {{
 * children: any;
 * className?: string;
 * size?: "md" | "lg";
 * variant?: "filled" | "outlined";
 * }}
 */

export const UiButton = ({
  children,
  className,
  size = "md",
  variant = "filled",
}) => {
  const buttonClassName = clsx(
    "transition-colors leading-tight",
    className,
    {
      md: "rounded px-6 py-2 text-sm",
      lg: "rounded-lg px-5 py-2 text-2xl",
    }[size],
    {
      filled: "text-white bg-teal-600 hover:bg-teal-500",
      outlined: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    }[variant],
  );
  return <button className={buttonClassName}>{children}</button>;
};

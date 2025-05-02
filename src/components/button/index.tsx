import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

enum ButtonVariants {
  LIGHT = "light",
  DARK = "dark",
}

const buttonVariantStyles: Record<ButtonVariants, string> = {
  [ButtonVariants.DARK]: "bg-black text-white border-white",
  [ButtonVariants.LIGHT]: "bg-gray text-black border-black",
};

const shareStyles = "border-[1px] px-2 py-1";

type Props = PropsWithChildren & {
  variant?: ButtonVariants;
};

export const Button: FC<Props> = ({
  variant = ButtonVariants.DARK,
  children,
}) => {
  return (
    <button className={twMerge(shareStyles, buttonVariantStyles[variant])}>
      {children}
    </button>
  );
};

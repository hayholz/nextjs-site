"use client";

import { LennarLogo } from "../icons/lennarLogo";
import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = PropsWithChildren & {
  className?: string;
};

export const Toolbar: FC<Props> = ({ children, className }) => {
  return (
    <div className={twMerge("h-[48px] flex w-full px-8 py-2", className)}>
      <LennarLogo />
      <div className="flex-1" />
      {children}
    </div>
  );
};

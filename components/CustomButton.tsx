"use client"

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({ title, btnType, containerStyles, handleClick }: CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={"button" || btnType}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton;

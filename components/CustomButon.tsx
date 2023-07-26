"use client"

import { CustomButonProps } from "@/types";
import Image from "next/image";

const CustomButon = ({ title, containerStyles, handleClick }: CustomButonProps) => {
  return (
    <button
    disabled={false}
    type="button"
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButon;

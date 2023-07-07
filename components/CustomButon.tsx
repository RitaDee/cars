"use client"

import Image from "next/image";

const CustomButon = () => {
  return (
    <button
    disabled={false}
    type="button"
    className={`custom-btn`}
    onClick={() => {}}
    >
        <span className={`flex-1`}>
            title
        </span>
    </button>
  )
}

export default CustomButon;

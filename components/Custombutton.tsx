'use client'
import { CustomButtonProps } from "@/type"
import Image from "next/image"

const Custombutton = ({ title, containerStyles, btnType, textStyle, handleClick }: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            className={`custom-btn text-slate-100 rounded-md hover:translate-y-2 border-2 ease-in-out duration-150 ${containerStyles} ${textStyle}`}
            type={btnType || "button"}
            onClick={handleClick}
        >
            <span className={`p-4 ${textStyle}`}>
                {title}</span>
        </button>
    )
}

export default Custombutton
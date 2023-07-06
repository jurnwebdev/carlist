'use client'
import { CustomButtonProps } from "@/type"
import Image from "next/image"

const Custombutton = ({title, containerStyles, btnType, handleClick}: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            className={`custom-btn text-slate-100 rounded-md hover:translate-y-2 border-2 ease-in-out duration-150 ${containerStyles}`}
            type={btnType || "button"}
            onClick={handleClick}
        >
            <span className={`p-4`}></span>
            {title}
        </button>
    )
}

export default Custombutton
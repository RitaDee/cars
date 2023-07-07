import { MouseEventHandler } from "react";

export interface CustomButonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>
}
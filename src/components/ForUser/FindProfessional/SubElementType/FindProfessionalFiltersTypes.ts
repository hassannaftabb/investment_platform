import { ReactElement } from "react";

export interface FindProfessionalFilterTypes {
    icon?:ReactElement;
    title:string;
    onClick:()=>void;
    reversed?:boolean;
    classNameItem?:string;
    className?:string;
}
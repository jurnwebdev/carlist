import { MouseEventHandler } from "react"

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
    textStyle?: string;
}

export type navMenu = {
    title: string;
    url: string;
}

export interface CustomFilterProps {
    title: string;
    styleComponents?: string;

}


export interface SearchTitleProps {
    title: string;
    description: string;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer(manufacturer: string): void; //takes in manufacturer property as a value and returns void because it is returning just a state.
}

export interface Cars {
    map: any;
    city_mpg: number
    class: string
    combination_mpg: number
    cylinders: number
    displacement: string
    drive: string
    fuel_type: string
    highway_mpg: number
    make: string
    model: string
    transmission: string
    year: number
}

export interface CarCardProps {
    car: Cars
}


export interface CarDetailsProps {
    isOpen: boolean
    closeModal: () => void
    car: Cars
}
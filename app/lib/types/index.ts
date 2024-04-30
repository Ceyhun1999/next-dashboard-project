import { ReactNode } from "react";

export interface IMenuItem {
    title: string;
    list: {
        title: string;
        path: string;
        icon: ReactNode;
    }[];
}

"use client";
import Link from "next/link";
import styles from "./menuLink.module.css";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function MenuLink({
    listItem,
}: {
    listItem: {
        path: string;
        icon: ReactNode;
        title: string;
    };
}) {
    const pathname = usePathname();

    return (
        <Link href={listItem.path} className={`${styles.container} ${pathname === listItem.path && styles.active}`}>
            {listItem.icon}
            {listItem.title}
        </Link>
    );
}

import { menuItems } from "@/app/lib/utils";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import Avatar from "../avatar/avatar";
import { MdLogout } from "react-icons/md";

export default function Sidebar() {
    return (
        <div className={styles.container}>
            <Avatar />
            <ul>
                {menuItems.map((item) => (
                    <li key={item.title}>
                        <span className={item.title}>{item.title}</span>
                        {item.list.map((listItem) => (
                            <MenuLink listItem={listItem} key={listItem.title} />
                        ))}
                    </li>
                ))}
            </ul>
            <button className={styles.logout}>
                <MdLogout />
                Logout
            </button>
        </div>
    );
}

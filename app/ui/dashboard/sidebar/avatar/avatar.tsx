import Image from "next/image";
import styles from "./avatar.module.css";

export default function Avatar() {
    return (
        <div className={styles.user}>
            <Image src="/noavatar.png" alt="" width={50} height={50} />
            <div className={styles.userDetail}>
                <span className={styles.username}>John Joe</span>
                <span className={styles.userTitle}>Administrator</span>
            </div>
        </div>
    );
}

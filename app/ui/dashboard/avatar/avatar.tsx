import Image from "next/image";
import styles from "./avatar.module.css";

export default function Avatar({
    styleClass,
    nameItem,
    imageSrc,
    styleClassImage,
}: {
    styleClass: string;
    nameItem: string;
    imageSrc: string;
    styleClassImage: string;
}) {
    
    return (
        <div className={styles.styleClass}>
            <Image src={imageSrc} alt="" width={50} height={50} className={styles.styleClassImage} />
            <div className={styles.userDetail}>
                <span className={styles.username}>{nameItem}</span>
                <span className={styles.userTitle}>Administrator</span>
            </div>
        </div>
    );
}

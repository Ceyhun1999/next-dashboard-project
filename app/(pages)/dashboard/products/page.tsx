import { Avatar, Pagination, Search } from "@/app/ui";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Link from "next/link";

export default function ProductsPage() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..." />
                <Link href={"/dashboard/products/add"}>
                    <button className={styles.addButton}>Add new</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created at</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Avatar
                                styleClass="product"
                                nameItem="IPhone"
                                imageSrc="/noproduct.jpg"
                                styleClassImage="productImage"
                            />
                        </td>
                        <td>Desc</td>
                        <td>$999</td>
                        <td>13.01.2022</td>
                        <td>72</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={"/"}>
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    );
}

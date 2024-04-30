import { Card, Chart, RightBar, Transactions } from "@/app/ui";
import styles from "@/app/ui/dashboard/dashboard.module.css";

export default function DashboardPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transactions />
                <Chart />
            </div>
            <div className={styles.side}>
                <RightBar />
            </div>
        </div>
    );
}

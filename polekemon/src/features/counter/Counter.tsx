import styles from "./Counter.module.css";

export function Counter() {
    return (
        <div>
            <div className={styles.row}>
                <button className={styles.button} aria-label="Decrement value">
                    -
                </button>
                <button className={styles.button} aria-label="Increment value">
                    +
                </button>
            </div>
        </div>
    );
}

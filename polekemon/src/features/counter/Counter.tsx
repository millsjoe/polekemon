import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../state/actions";
import { IState } from "../../state/store";
import styles from "./Counter.module.css";

export function Counter() {
    const dispatch = useDispatch();
    const value = useSelector((state: IState) => state.counter.value);
    return (
        <div>
            <div>{value}</div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(Actions.decrement(1))}
                >
                    -
                </button>

                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(Actions.increment(1))}
                >
                    +
                </button>
            </div>
        </div>
    );
}

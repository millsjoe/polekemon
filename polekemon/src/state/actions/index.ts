// actions go here

export enum ActionKeys {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
}

export const Actions = {
    increment: (amount: number) => {
        return {
            type: ActionKeys.INCREMENT,
            payload: amount,
        };
    },

    decrement: (amount: number) => {
        return {
            type: ActionKeys.DECREMENT,
            payload: amount,
        };
    }
};

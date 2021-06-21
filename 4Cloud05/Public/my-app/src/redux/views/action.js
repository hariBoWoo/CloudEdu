import { ADD_VIEW } from "./types";

export const addView = (number) =>{
    return {
        type: ADD_VIEW,
        payload : Number(number)
        //숫자형으로 받겠다고 형명시
    }
}

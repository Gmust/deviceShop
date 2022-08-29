import {ChangeEvent, useState} from "react";

export const useInput = (initialValue: any) => {
    const [value, setValue] = useState<any>(initialValue)

    const reset = () => {
        setValue(initialValue);
    }


    const bind = {
        value: value,
        onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
    }

    return {
        value, reset, bind
    }

}
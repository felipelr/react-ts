import React, { useState } from "react";

function useLocalStorage<T>(key: string) {
    const [storedValue, setStoredValue] = useState<T | null>(() => {
        try {
            const item = localStorage.getItem(key);
            if (item)
                return JSON.parse(item) as T;
        } catch (error) {
            console.log(error);
        }
        return null;
    });

    const setValue = (value: T) => {
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };
    return {storedValue, setValue};
}

export default useLocalStorage;
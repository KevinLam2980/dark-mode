import React, {useState} from 'react'

const useLocalStorage = (key, initialValue) => {
    //To retrieve an item from localStorage, call localStorage.getitem('itemName')
    //If that item doesn't exist, it will return undefined
    const [storedValue, setStoredValue] = useState(() => {
        //Get from local storage by key
        const item = window.localStorage.getItem(key)
        //Parse and return stored json or, if undefined, return initial Value
        return item ? JSON.parse(item) : initialValue
    })

    const setValue = value => {
        //save state
        setStoredValue(value)
        //save to local storage
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setValue]
}
export default useLocalStorage
import { useEffect, useState } from "react"

// hook to get all the items
const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://nameless-scrubland-87121.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])
    return [items, setItems];
}

export default useItems;
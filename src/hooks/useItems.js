import { useEffect, useState } from "react"

// hook to get all the items
const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])
    return [items, setItems];
}

export default useItems;
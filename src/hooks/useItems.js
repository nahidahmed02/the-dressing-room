import { useEffect, useState } from "react"

// hook to get all the items
const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://the-dressing-room-server.onrender.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])
    return [items, setItems];
}

export default useItems;
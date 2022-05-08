import { useEffect, useState } from "react";

const useItem = id => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/items/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])
    return [item];
}

export default useItem;
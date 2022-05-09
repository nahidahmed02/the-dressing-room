import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useItem = _id => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/items/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [_id])
    return [item];
}

export default useItem;
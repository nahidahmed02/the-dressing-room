import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// to get single item
const useItem = _id => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://nameless-scrubland-87121.herokuapp.com/items/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [_id, item])
    return [item];
}

export default useItem;
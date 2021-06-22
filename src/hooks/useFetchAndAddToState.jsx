import { useEffect, useState } from "react";

function useFetchAndAddToState(fetchURL) {
const [list, setList] = useState([]);

    useEffect(() => {
            fetch(fetchURL)
                .then((resp) => resp.json())
                .then(setList);
    }, [setList]);

    return [list, setList]
}

export default useFetchAndAddToState


import { useEffect, useState } from "react";

function useFetchStatusUpdatesAndAddToState(fetchURL) {

const [newsList, setNewsList] = useState([]);

    useEffect(() => {
            fetch(fetchURL)
                .then((resp) => {
                    return resp.json()
                })
                .then(({ status_updates }) => setNewsList(status_updates));
    }, [setNewsList]);

    return [newsList, setNewsList]
}

export default useFetchStatusUpdatesAndAddToState

//{ status_updates }


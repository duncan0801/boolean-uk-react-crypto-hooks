//This hook will fetch the updated crypto every 30 seconds

function useUpdateCryptoData(id, updateRate) {

    const [counter, setCounter] = useState(30);

    useEffect(() => {
        if (counter < 0) {
        fetch(getCriptoUpdateUrl(id))
            .then((resp) => resp.json())
            .then((data) => {
            updateCryptoData(
                {
                    current_price: data[id].gbp,
                    last_updated: data[id]["last_updated_at"]
                },
                id
            );
            });
            setCounter(updateRate);
        }
        }, [id, counter, setCounter, updateCryptoData]);

        return counter

}

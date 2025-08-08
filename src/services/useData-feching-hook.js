import { useEffect, useState } from "react";

const cache = {};
export const useDataFetching = (url) => {
    const [data, setData] = useState(cache[url] || null);
    const [loading, setLoading] = useState(!cache[url]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (cache[url]) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await res.json();
                cache[url] = result;
                setData(result);
                setError(null);
            } catch (e) {
                console.error("Error fetching data:", e);
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);
    return { data, loading, error }
}
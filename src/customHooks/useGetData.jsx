import {useState, useEffect} from 'react';

const useGetData = (url) => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);
    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setStatus('fetching');
            const response = await fetch(`http://localhost:3004${url}`);
            const data = await response.json();
            setData(data);
            setStatus('fetched');
        };
        fetchData();
    }, [url]);
    return [status, data];
};
export default useGetData;
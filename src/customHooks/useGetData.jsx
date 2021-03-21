import {useState, useEffect} from 'react';
import config from '../config/env.prod'

const useGetData = (url) => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);
    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setStatus('fetching');
            const response = await fetch(`${config.apiUrl}${url}`);
            const data = await response.json();
            //const response = await Promise.resolve([{Title: "test"}]);
            setData(data);
            setStatus('fetched');
        };
        fetchData();
    }, [url]);
    return [status, data];
};
export default useGetData;
import {useState, useEffect} from 'react';

const usePostData = (url, params) => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);
    useEffect(() => {
        if (!url) return;
        async function postData(url = '', params = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(params) // body data type must match "Content-Type" header
            });
            setData(response.json());
            setStatus('posted'); // parses JSON response into native JavaScript objects
          }
          postData();
    }, [url]);
    return [status, data];
};
export default usePostData;
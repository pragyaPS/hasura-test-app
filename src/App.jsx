import React from 'react';
import useGetData from "./customHooks/useGetData";
import {FETCH_STATUS} from "./utils/constants";

const App = () => {
    const [status, data] = useGetData("/all-albums");
    if(status === FETCH_STATUS.idle) 
        return <div>idle</div>
    
    if(status === FETCH_STATUS.fetching) 
        return <div>Loading ...</div>
    
    console.log(data);

    return (
        <div>
            <code>{data[0].Title}</code>
        </div>
    )
}

export default App;

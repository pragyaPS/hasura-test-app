import {useState} from "react";
import DashBoardPage from "./components/pages/Dashboard";
import usePostData from "./customHooks/usePostData";
import apiConfig from "./config/api.config";

export const PARAM_ALBUM_TITLE = "title";
const App = () => {
  const [albumParams, setAlbumParams] = useState({})

  const handleFormSubmit = () => {
    usePostData(apiConfig.addAlbum, albumParams);
  }
  const handleChange = configVal => evt => {
    setAlbumParams({...albumParams, [configVal] : evt.target.value })
    console.log(albumParams)

  }

  return (
    <div>
        <form onSubmit={handleFormSubmit}>
        <fieldset>
          <label htmlFor="title">Album title</label>
          <input onChange={handleChange(PARAM_ALBUM_TITLE)} name="title" />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      <DashBoardPage />
    </div>
  );
};

export default App;

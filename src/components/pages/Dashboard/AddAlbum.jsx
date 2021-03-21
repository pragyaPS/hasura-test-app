import {useState} from "react";
export const PARAM_ALBUM_TITLE = "title";

const AddAlbum = ({handleAlbumSubmit}) => {
  const [albumParams, setAlbumParams] = useState({});

  const handleChange = (evt) => {
    setAlbumParams({ ...albumParams, [evt.target.name]: evt.target.value });
  };
  return (
    <>
      <fieldset>
        <label htmlFor="title">Album title</label>
        <input onChange={handleChange} name={PARAM_ALBUM_TITLE} />
      </fieldset>
      <button onClick={() => {handleAlbumSubmit(albumParams)}}>Submit</button>
    </>
  );
};

export default AddAlbum;

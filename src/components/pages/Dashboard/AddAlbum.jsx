import { useState } from "react";
import {
  FormControl,
  Label,
  Button,
  TextField,
  InputFields,
} from "./Dashboard.styles";

const PARAM_ALBUM_TITLE = "title";

const AddAlbum = ({ handleAlbumSubmit }) => {
  const [albumParams, setAlbumParams] = useState({});

  const handleChange = (evt) => {
    setAlbumParams({ ...albumParams, [evt.target.name]: evt.target.value });
  };
  return (
    <FormControl>
      <InputFields>
        <Label htmlFor={PARAM_ALBUM_TITLE}>Album title</Label>
        <TextField onChange={handleChange} name={PARAM_ALBUM_TITLE} />
      </InputFields>

      <Button
        onClick={() => {
          handleAlbumSubmit(albumParams);
        }}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default AddAlbum;

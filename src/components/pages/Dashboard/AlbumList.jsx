import Table from "../../atom/Table";
import { FETCH_STATUS, ALBUM_LOADING_TEXT } from "../../../utils/constants";
import useGetData from "../../../customHooks/useGetData";

import Progress from "../../atom/Progress";
import apiConfig from "../../../config/api.config";
const tableHeader = [
  { label: "select", columnId: "1" },
  { label: "AlbumId", columnId: "2", dataMapKey: "AlbumId" },
  { label: "Title", columnId: "3", dataMapKey: "Title" },
];
const AlbumList = () => {
  const [status, albumList] = useGetData(apiConfig.allAlbums);

  if (status === FETCH_STATUS.fetching)
    return <Progress>{ALBUM_LOADING_TEXT}</Progress>;

  return (
    <>
      <Table
        rows={albumList}
        tableHeader={tableHeader}
        handleRowSelect={(evt, row) => {
          console.info({ evt, row });
        }}
      />
    </>
  );
};
export default AlbumList;

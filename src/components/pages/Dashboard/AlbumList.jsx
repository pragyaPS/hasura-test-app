import Table from "../../atom/Table";
import { ALBUM_LOADING_TEXT } from "../../../utils/constants";
import Progress from "../../atom/Progress";

const tableHeader = [
  { label: "select", columnId: "1" },
  { label: "AlbumId", columnId: "2", dataMapKey: "AlbumId" },
  { label: "Title", columnId: "3", dataMapKey: "Title" },
];

const AlbumList = ({ isAlbumLoading, albumList }) => {
  if (isAlbumLoading) return <Progress>{ALBUM_LOADING_TEXT}</Progress>;

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

import Table from "../../atom/Table";
import { FETCH_STATUS, ALBUM_LOADING_TEXT } from "../../../utils/constants";
import useGetData from "../../../customHooks/useGetData";
import Progress from "../../atom/Progress";
const tableHeader = [
  { label: "select", columnId: "1" },
  { label: "AlbumId", columnId: "2", dataMapKey: "AlbumId" },
  { label: "Title", columnId: "3", dataMapKey: "Title" },
];
const AlbumList = () => {
  const [status, albumList] = useGetData("/all-albums");
  if (status === FETCH_STATUS.idle) return <div>idle</div>;

  if (status === FETCH_STATUS.fetching)
    return <Progress>{ALBUM_LOADING_TEXT}</Progress>;
  return (
    <>
      <Table
        rows={albumList}
        tableHeader={tableHeader}
        handleRowSelect={(evt, row) => {
          console.log({ evt, row });
        }}
      />
    </>
  );
};
export default AlbumList;

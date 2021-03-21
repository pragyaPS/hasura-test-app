import { Table as StyledTable, Th, Td } from "./table.style";
import { PARAM_NO_RECORD_FOUND } from "../../../utils/constants";
import { isEmpty } from "../../../utils/util";

const Table = ({ rows, tableHeader, handleRowSelect, className }) => (
  <StyledTable className={className}>
    <thead>
      <tr>
        {tableHeader?.map((head) => (
          <Th key={head.columnId}>{head.label}</Th>
        ))}
      </tr>
    </thead>
    <tbody>
      {!isEmpty(rows) ? (
        rows.map((row, index) => (
          <tr key={row.AlbumId}>
            <Td>
              <input
                aria-roledescription={`checkbox-${row.Title}`}
                type="checkbox"
                id={`${row.Title}-${index}`}
                onChange={(event) => {
                  handleRowSelect(event, row);
                }}
                name={`${row.AlbumId}-${index}`}
              />
            </Td>
            {/* rows mapping can be dynamic  */}
            <Td title={row.AlbumId}>{row.AlbumId}</Td>
            <Td title={row.Title}>{row.Title}</Td>
          </tr>
        ))
      ) : (
        <tr>
          <Td>{PARAM_NO_RECORD_FOUND}</Td>
        </tr>
      )}
    </tbody>
  </StyledTable>
);
export default Table;

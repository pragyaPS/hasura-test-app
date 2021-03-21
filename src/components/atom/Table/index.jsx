import { Table as StyledTable, Th, Td, checkboxCell } from "./table.style";
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
            <Td className={checkboxCell}>
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
        <div>{PARAM_NO_RECORD_FOUND}</div>
      )}
    </tbody>
  </StyledTable>
);
export default Table;

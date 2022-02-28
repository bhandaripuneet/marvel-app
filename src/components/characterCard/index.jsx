import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./characterCard.css";
import { useHistory } from "react-router-dom";
import QuickSearchToolbar from "./QuickSearch";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70
  },
  {
    field: "name",
    headerName: "Name",
    width: 300
  },
  { field: "description", headerName: "Description", width: 400 },
  {
    field: "thumbnail.path",
    headerName: "Image",
    width: 75,
    height: 75,
    renderCell: params => (
      <img
        height="75"
        width="75"
        src={`${params.row.thumbnail.path}.${params.row.thumbnail.extension}`}
      />
    )
  }
];

const CharacterCard = props => {
  const { data } = props;
  const history = useHistory();
  const [rowData, setRowData] = useState(data);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setRowData(data);
  }, [data]);

  const handleOnClick = rowData => {
    console.log("push -> /roles/" + rowData.id);
    history.push(`/characterDetail/${rowData.id}`);
  };

  const requestSearch = searchValue => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = data.filter(row => {
      return Object.keys(row).some(field => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRowData(filteredRows);
  };

  const escapeRegExp = value => {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  };

  return (
    <div style={{ height: 780, width: "100%" }}>
      <DataGrid
        components={{ Toolbar: QuickSearchToolbar }}
        rows={rowData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        onRowClick={param => handleOnClick(param.row)}
        rowHeight={75}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: event => requestSearch(event.target.value),
            clearSearch: () => requestSearch("")
          }
        }}
      />
    </div>
  );
};

export default CharacterCard;

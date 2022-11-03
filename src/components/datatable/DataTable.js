import React, { useState } from "react";
import "./datatable.scss";
import { Link, useLocation } from "react-router-dom";

// data table materia ui
import { DataGrid } from "@mui/x-data-grid";

// data
import { userColumns, userRows } from "../../utils/data/dataTableSource";

const DataTable = () => {
  // state to manage userdata
  const [data, setData] = useState(userRows);

  // function to delete user
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const { pathname } = useLocation();
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="view-btn">View</div>
            </Link>
            <div
              className="delete-btn"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="data-table">
      <div className="datatable-title">
        {pathname}
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;

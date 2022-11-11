import React, { useEffect, useState } from "react";
import "./datatable.scss";
import { Link, useLocation } from "react-router-dom";

// data table materia ui
import { DataGrid } from "@mui/x-data-grid";

// firebase
import { db } from "../../configs/firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

// data
import { userColumns, userRows } from "../../utils/data/dataTableSource";

const DataTable = () => {
  // state to manage userdata
  const [data, setData] = useState([]);

  // useEffect hook to fetch data from firebase
  useEffect(() => {
    // const fetchData = async () => {
    //   let docs = [];
    //   try {
    //     const collectionRef = collection(db, "users");
    //     const docsSnapshot = await getDocs(collectionRef);
    //     docsSnapshot.forEach((doc) => {
    //       docs.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(docs);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();

    // listening to real-time db
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        let docs = [];
        snapshot.docs.forEach((doc) => {
          docs.push({ id: doc.id, ...doc.data() });
        });
        setData(docs);
      },
      (error) => {
        console.log(error);
      }
    );

    // cleanup fn to clear snapshot to avoid memory leaks
    return () => {
      unsub();
    };
  }, []);

  // function to delete user
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
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
        autoHeight
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

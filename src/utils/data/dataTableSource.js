export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="image-cell">
          <img className="cell-img" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`status-cell ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="image-cell">
          <img className="cell-img" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 100,
  },

  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`status-cell ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "category",
    headerName: "Category",
    width: 180,
  },
];
export const orderColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="image-cell">
          <img className="cell-img" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
  },

  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`status-cell ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "category",
    headerName: "Category",
    width: 180,
  },
];

import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { FaBeer } from "react-icons/fa";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



import "./Tabel.css";

function Table() {
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },

    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Symbol",
      selector: (row) => row.weigh,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.icon,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      name: "ali",
      email: "ali@gmail.com",
      weigh: "KG",
      icon:"",
    },
    {
      id: 2,
      name: "sara",
      email: "sara@gmail.com",
      weigh: "KG",
      icon:"",
    },
    {
      id: 3,
      name: "mamad",
      email: "mamad@gmail.com",
      weigh: "KG",
      icon:"",
    },
    {
      id: 4,
      name: "akbar",
      email: "akbar@gmail.com",
      weigh: "KG",
      icon:"",
    },
    {
      id: 5,
      name: "eli",
      email: "eli@gmail.com",
      weigh: "KG",
      icon:"",
    },
  ];



  

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }

  return (
    <div
      className="container"
      style={{ borderRadius: "10px", padding:"50px" }}
    >
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        style={{ backgroundColor: "red" }}
        fixedHeader
      ></DataTable>
    </div>
  );
}

export default Table;

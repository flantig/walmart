import DialogBox from "../Components/Dialog";
import React from "react";


const Options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'vertical',
    download: false,
    selectableRows: false,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 25, 50, 100, 1000],

    setTableProps: () => {
        return {
            size: "small"
        };
    }
}

function Columns(json) {

    return ([{
        name: " ",
        options: {
            customBodyRenderLite: (rowIndex) => {
                return (
                    <DialogBox data={json[rowIndex]} user={json[rowIndex].user}/>
                )
            }
        }
    },
        {
            label: "ID",
            name: "ID",
        },
        {
            label: "Title",
            name: "Title",
        },
        {
            label: "User",
            name: "User",
        }])
}

export default {Options, Columns}
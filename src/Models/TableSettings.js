import DialogBox from "../Components/Dialog";
import React from "react";

/**
 * @const Options: Handles the general attributes of the datatable, like how many rows, whether you'd like to give the option to filter attributes, etc.
 */
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


/**
 * @const Column: Headers and a custom column that brings up the dialog box for more information
 */
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
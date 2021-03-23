const {createMuiTheme} = require("@material-ui/core");


const Theme = createMuiTheme({
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: 'white',
            },
        },
        MuiToolbar: {
            root: {
                backgroundColor: '#ffc220',
            },
        },
        MuiTableCell: {
            head: {
                backgroundColor: '#78b9e7',
            },
        },
        MuiTableFooter: {
            root: {
                '& .MuiToolbar-root': {
                    backgroundColor: 'white',
                },
            },
        },
    },
});

export default Theme
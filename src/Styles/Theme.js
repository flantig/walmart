const {createMuiTheme} = require("@material-ui/core");


const Theme = createMuiTheme({
    walmartLogo: {position: 'absolute', width: '10%', paddingLeft: '50%', paddingTop: '30%'},
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: 'white',
                zIndex: "500"
            },
        },
        MuiToolbar: {
            root: {
                backgroundColor: '#ffc220',
                zIndex: "500"
            },
        },
        MuiTableCell: {
            head: {
                backgroundColor: '#78b9e7',
                zIndex: "500"
            },
        },
        MuiTableFooter: {
            root: {
                '& .MuiToolbar-root': {
                    backgroundColor: 'white',
                    zIndex: "500"
                },
            },
        }

    },
});

export default Theme
import React, {useEffect} from 'react'
import AddIcon from "@material-ui/icons/Add";

const {DateTime} = require("luxon");
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper,
    TextField,
} from "@material-ui/core";
import Draggable from "react-draggable";

/**
 *
 *  @function DateSubstringGrabber and TimeSubstringGrabber: These are need for the dialog box when presenting information
 *  and also to reformat the datetime back to an ISO 8601 format (i.e. 2020-01-01T01:01:01.000Z) otherwise postgresql won't
 *  accept it.
 *
 *  @return: A lot of the entries are Read-Only on purpose so that users aren't allowed to change entries that shouldn't ever
 *  be changed. This prevents duplicates or changing the wrong row or adding a date/time stamp that couldn't exist.
 *
 *  @component <TextField onInput={input => setNewKW ... > : Again this just further cements my intention above. It essentially just
 *  copies over already fetched data but makes the addition of the new user input.
 *
 *  @function handleOpen/Close/Submit: These are just handlers for the dialog box, nothing too crazy.
 *
 */


function PaperComponent(props) {
    return (
        <Draggable>
            <Paper {...props}/>
        </Draggable>
    )

}


function DialogBox(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(props.data);
    const [user, setUser] = React.useState(props.user);


    function handleClickOpen() {
        setOpen(true);
    }

    function handleClickClose() {
        setOpen(false);
    }


    useEffect(() => {

        setData(props.data);
    }, [props])

    return (

        <React.Fragment>
            <Button onClick={() => {
                handleClickOpen()
            }}><AddIcon/>
            </Button>
            <Dialog open={open}
                    onClose={handleClickClose}
                    PaperComponent={PaperComponent}
            >
                <DialogTitle>{data.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Issue # {data.id}
                    </DialogContentText>
                    <TextField disabled label="User" defaultValue={user.login}
                               readOnly={false}/>
                    <TextField disabled label="Submission Date"
                               defaultValue={DateTime.fromISO(data.created_at).toFormat("f")}/>
                    <TextField disabled label="Status" defaultValue={data.state}/>
                    <DialogContent> </DialogContent>
                    <DialogContentText>
                        {data.body}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default DialogBox
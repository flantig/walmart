import React, {useEffect} from 'react'
import AddIcon from "@material-ui/icons/Add";
import ReactMarkdown from "react-markdown";


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
 *  @return: A lot of the entries are Read-Only on purpose so that users aren't allowed to change entries that shouldn't ever
 *  be changed. This is also code from another project, I easily could have just added some sort of textbox.
 *
 *  @function handleOpen/Close/Submit: These are just handlers for the dialog box, nothing too crazy.
 *
 *  @component ReactMarkdown: Formats the issue a bit more, you can pass in a renderer that can properly highlight the codeblocks based on language
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
        setUser(props.user);
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
                        <ReactMarkdown source={data.body} />
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
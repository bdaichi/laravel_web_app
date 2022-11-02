import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

function PostForm(props) {
    const classes = useStyles();

    return (
        <form>
            <TextField
                id="name"
                label="タスク名"
                variant="outlined"
                className={classes.textArea}
                name="name"
                value={props.taskName}
                onChange={(e) => props.setTaskName(e.target.value)}
            />
            <TextField
                id="content"
                label="内容"
                variant="outlined"
                className={classes.textArea}
                name="content"
                value={props.taskContent}
                onChange={(e) => props.setTaskContent(e.target.value)}
            />
            <Button
                color="primary"
                variant="contained"
                href="/"
                onClick={props.createPost}
            >
                登録
            </Button>
        </form>
    );
}

const useStyles = makeStyles((theme) =>
    createStyles({
        textArea: {
            marginRight: theme.spacing(2),
        },
    })
);

export default PostForm;

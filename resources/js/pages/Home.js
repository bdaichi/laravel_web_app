import React, { useState, useEffect } from "react"; //1行目にuseStateを変更する
import ReactDOM from "react-dom";
import { Button, Card } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import purple from "@material-ui/core/colors/purple";

import axios from "axios"; //追記する

function Home() {
    const classes = useStyles();

    const [posts, setPosts] = useState([]);

    const rows = posts.map((post) => {
        return {
            name: post.name,
            content: post.content,
            editBtn: (
                <Button color="secondary" variant="contained">
                    編集
                </Button>
            ),
            deleteBtn: (
                <Button color="primary" variant="contained">
                    完了
                </Button>
            ),
        };
    });

    useEffect(() => {
        axios
            .get("/api/posts")
            .then((response) => {
                setPosts(response.data); //バックエンドから返ってきたデータでpostsを更新する
                console.log(response.data); //取得データ確認用のconsole.log()
            })
            .catch(() => {
                console.log("通信に失敗しました");
            });
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>タスク管理</h1>
                        <Card className={classes.card}>
                            {/* テーブル部分の定義 */}
                            <TableContainer component={Paper}>
                                <Table
                                    className={classes.table}
                                    aria-label="simple table"
                                >
                                    {/* ヘッダー部分 */}
                                    <TableHead className={classes.tableHead}>
                                        <TableRow>
                                            {headerList.map((item, index) => (
                                                <TableCell
                                                    align="center"
                                                    key={index}
                                                >
                                                    {item}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    {/* ボディ部分 */}
                                    <TableBody>
                                        {rows.map((row, index) => (
                                            <TableRow key={index}>
                                                <TableCell align="center">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {row.content}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {row.editBtn}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {row.deleteBtn}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

//スタイルの定義
const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            margin: theme.spacing(5),
            padding: theme.spacing(3),
        },
        table: {
            minWidth: 650,
        },
        tableHead: {
            backgroundColor: purple["A100"],
        },
    })
);

//ヘッダーのコンテンツ用の配列定義
const headerList = ["名前", "タスク内容", "編集", "完了"];

export default Home;

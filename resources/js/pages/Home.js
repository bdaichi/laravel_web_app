import React from "react";
import ReactDOM from "react-dom";
import { Button, Card } from "@material-ui/core";

import axios from "axios"; //追記する

function Home() {
    // const [posts, setPosts] = useState([]);

    axios
        .get("/api/posts")
        .then((response) => {
            // setPosts(response.data); //バックエンドから返ってきたデータでpostsを更新する
            console.log(response.data); //取得データ確認用のconsole.log()
        })
        .catch(() => {
            console.log("通信に失敗しました");
        });

    return (
        <div className="container">
            <Card>
                <Button color="primary" variant="contained" href={`/example`}>
                    Exampleに遷移
                </Button>
            </Card>
        </div>
    );
}

export default Home;

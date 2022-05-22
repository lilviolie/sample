import { useParams } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

interface IserachInterface {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function SearchResult({ post }: { post: IpostInterface }) {
    let date: string;
    date = post.date.getFullYear().toString();
    date += " / " + (post.date.getMonth() + 1).toString();
    date += " / " + post.date.getDate().toString();

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignContent="center"
        >
            <Grid item xs={9.8}>
                <Grid container direction="column" marginLeft={2}>
                    <Grid item>
                        <Typography variant="h5">{post.title}</Typography>
                    </Grid>
                    <Grid item style={{ height: "140px" }}>
                        <Typography>{post.contents}</Typography>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row" spacing={1}>
                            <Grid item>
                                <div
                                    style={{
                                        width: "25px",
                                        height: "25px",
                                        borderRadius: "100%",
                                        backgroundImage: `url(${post.img})`,
                                        backgroundSize: "cover",
                                        backgroundRepeat: "none",
                                    }}
                                ></div>
                            </Grid>
                            <Grid item>
                                <Typography>{post.id}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>{date}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs>
                <div
                    style={{
                        width: "200px",
                        height: "200px",
                        backgroundImage: `url(${post.img})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "none",
                    }}
                ></div>
            </Grid>
        </Grid>
    );
}

function SearchBox() {
    return (
        <Grid
            container
            style={{
                width: "100%",
                height: "800px",
                overflow: "scroll",
            }}
            direction="row"
        >
            {myList.map((e, i: number) => {
                return (
                    <Grid item xs={12} key={i}>
                        <SearchResult post={e} />
                        <hr />
                    </Grid>
                );
            })}
        </Grid>
    );
}

function Search({ search, setSearch }: IserachInterface) {
    const { searchValue } = useParams<string>();

    return (
        <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs>
                <SearchBox />
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    );
}

export default Search;

const SmaplePost1: IpostInterface = {
    postNum: 1,
    id: "ryokuman",
    title: "1번 포스팅",
    contents: "안녕하세요",
    img: "https://blog.kakaocdn.net/dn/uVzcY/btrs8RnnubZ/hJVo53gyagmVG5XtkCvMB1/img.png",
    date: new Date(2022, 4, 11),
    liked: ["ryokuman", "hello", "sorry"],
    comments: [11, 5, 102],
};

const SmaplePost2: IpostInterface = {
    postNum: 2,
    id: "ryokuman",
    title: "2번 포스팅",
    contents: "안녕하세요",
    img: "https://www.sportager.net/files/attach/images/7370560/750/373/007/Dynamax%20System%20for%20AWD.jpg",
    date: new Date(2022, 4, 15),
    liked: ["ryokuman", "hello", "sorry"],
    comments: [],
};

const SmaplePost3: IpostInterface = {
    postNum: 3,
    id: "ryokuman",
    title: "3번 포스팅",
    contents: "안녕하세요",
    img: "https://pbs.twimg.com/profile_images/1525826647605518337/yOSH43wU_400x400.png",
    date: new Date(2022, 4, 17),
    liked: ["ryokuman", "hello"],
    comments: [100, 12],
};

const SmaplePost4: IpostInterface = {
    postNum: 4,
    id: "ryokuman",
    title: "4번 포스팅",
    contents: "안녕하세요",
    img: "https://pbs.twimg.com/profile_images/1525826647605518337/yOSH43wU_400x400.png",
    date: new Date(2022, 5, 12),
    liked: ["ryokuman", "hello"],
    comments: [100, 12],
};

const SmaplePost5: IpostInterface = {
    postNum: 5,
    id: "ryokuman",
    title: "5번 포스팅",
    contents: "안녕하세요",
    img: "https://pbs.twimg.com/profile_images/1525826647605518337/yOSH43wU_400x400.png",
    date: new Date(2022, 5, 17),
    liked: ["ryokuman", "hello"],
    comments: [100, 12],
};

const myList: IpostInterface[] = [
    SmaplePost1,
    SmaplePost2,
    SmaplePost3,
    SmaplePost4,
    SmaplePost5,
];

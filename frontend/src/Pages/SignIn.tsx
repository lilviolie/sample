import { Grid, styled, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

const LoginBox = styled(Grid)({
    border: "2px solid black",
    width: "400px",
});

interface IsignInInterface {
    user: IuserInterface;
    setUser: React.Dispatch<React.SetStateAction<IuserInterface>>;
}

type loginERR =
    | "아이디를 확인해 주십시오"
    | "비밀번호를 확인해 주십시오"
    | "login"
    | "";

function onLogin(
    inputPW: string,
    inputID: string,
    { user, setUser }: IsignInInterface
): loginERR {
    const idArray: string[] = [];

    users.forEach((e) => {
        idArray.push(e.id);
    });

    if (idArray.includes(inputID)) {
        const passwordIndex = users.findIndex((user: IuserInterface) => {
            return user.id === inputID;
        });
        if (inputPW === users[passwordIndex].password) {
            const sample = user;
            sample.isLogin = true;
            setUser(sample);
            return "login";
        } else return "비밀번호를 확인해 주십시오";
    } else return "아이디를 확인해 주십시오";
}

function LoginForm({ user, setUser }: IsignInInterface) {
    const [isLoginComplete, setIsLoginComplete] = useState<loginERR>("");
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <Grid
            container
            direction="column"
            justifyContent="space-between"
            style={{ width: "400px", height: "600px" }}
        >
            <Grid item>
                <LoginBox
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    height="450px"
                    spacing={2}
                >
                    <Grid item>
                        <img
                            style={{ height: "60px" }}
                            src={require("../Assets/Images/Daylog.png")}
                            alt=""
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            style={{ width: "300px", marginTop: "50px" }}
                            label="id"
                            placeholder="id를 입력해 주세요"
                            value={id}
                            onChange={(e) => {
                                setId(e.target.value);
                            }}
                        ></TextField>
                    </Grid>
                    <Grid item>
                        <TextField
                            style={{ width: "300px" }}
                            label="password"
                            placeholder="password를 입력해 주세요"
                            value={password}
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        ></TextField>
                    </Grid>
                    <Grid item textAlign="center">
                        <Typography color="red">{`${isLoginComplete}`}</Typography>
                        <Button
                            variant="contained"
                            style={{ width: "300px", marginTop: "20px" }}
                            onClick={() => {
                                setIsLoginComplete(
                                    onLogin(password, id, {
                                        user,
                                        setUser,
                                    })
                                );
                            }}
                            href={
                                isLoginComplete === "login"
                                    ? `http://localhost:3000/${id}`
                                    : ""
                            }
                        >
                            Sign In
                        </Button>
                        <Typography color="deepskyblue" marginTop="10px">
                            아이디 찾기 | 비밀번호 찾기
                        </Typography>
                    </Grid>
                </LoginBox>
            </Grid>
            <Grid item></Grid>
        </Grid>
    );
}

function SignIn({ user, setUser }: IsignInInterface) {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{
                marginTop: "13px",
                width: "1700px",
                height: "800px",
                margin: "0 auto",
            }}
        >
            <Grid item>
                <LoginForm user={user} setUser={setUser} />
            </Grid>
        </Grid>
    );
}

export default SignIn;

const simpleUser1: IuserInterface = {
    name: "권셩현",
    id: "doookong",
    password: "1234",
    follower: [],
    follow: [],
    isLogin: true,
    profilePic:
        "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1LNl/image/O9D-E-YAkuC8oh4kETCNUPTGyEA.jpeg",
    posts: [],
    likedPosts: [],
    likedComments: [],
};
const simpleUser2: IuserInterface = {
    name: "권셩현",
    id: "doookong",
    password: "1234",
    follower: [],
    follow: [],
    isLogin: true,
    profilePic:
        "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1LNl/image/O9D-E-YAkuC8oh4kETCNUPTGyEA.jpeg",
    posts: [],
    likedPosts: [],
    likedComments: [],
};
const simpleUser3: IuserInterface = {
    name: "권셩현",
    id: "doookong",
    password: "1234",
    follower: [],
    follow: [],
    isLogin: true,
    profilePic:
        "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1LNl/image/O9D-E-YAkuC8oh4kETCNUPTGyEA.jpeg",
    posts: [],
    likedPosts: [],
    likedComments: [],
};
const simpleUser4: IuserInterface = {
    name: "권셩현",
    id: "doookong",
    password: "1234",
    follower: [],
    follow: [],
    isLogin: true,
    profilePic:
        "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1LNl/image/O9D-E-YAkuC8oh4kETCNUPTGyEA.jpeg",
    posts: [],
    likedPosts: [],
    likedComments: [],
};
const users: IuserInterface[] = [
    simpleUser1,
    simpleUser2,
    simpleUser3,
    simpleUser4,
];

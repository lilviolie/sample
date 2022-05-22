import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Error from "./Pages/Error";
import FollowFollower from "./Pages/FollowFollower";
import Main from "./Pages/Main";
import Search from "./Pages/Search";
import Notification from "./Pages/Norification";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Intro from "./Pages/Intro";

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

declare global {
    interface IpostInterface {
        postNum: number;
        id: string;
        title: string;
        contents: string;
        img: string;
        date: Date;
        liked: string[];
        comments: number[];
    }

    interface IuserInterface {
        follower: string[];
        follow: string[];
        name: string;
        id: string;
        password: string;
        posts: number[];
        isLogin: boolean;
        profilePic: string;
        likedPosts: number[];
        likedComments: number[];
    }
}

function App() {
    const [user, setUser] = useState<IuserInterface>(notLogined);
    const [search, setSearch] = useState<string>("");

    return (
        <Router>
            <Header
                search={search}
                setSearch={setSearch}
                user={user}
                setUser={setUser}
            />
            <Box style={{ position: "fixed", top: "70px", width: "100%" }}>
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="search">
                        <Route
                            index
                            element={
                                <Search search={search} setSearch={setSearch} />
                            }
                        />
                        <Route
                            path=":searchValue"
                            element={
                                <Search search={search} setSearch={setSearch} />
                            }
                        />
                    </Route>
                    <Route path=":username">
                        <Route index element={<Main user={user} />} />
                        <Route path="notification" element={<Notification />} />
                        <Route path=":isfollow" element={<FollowFollower />} />
                    </Route>
                    <Route path="signIn">
                        {user === null ? (
                            <Route index element={<Intro />} />
                        ) : (
                            <Route
                                index
                                element={
                                    <SignIn user={user} setUser={setUser} />
                                }
                            />
                        )}
                    </Route>
                    <Route path="signUp" element={<SignUp />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </Box>
            <Footer />
        </Router>
    );
}

export default App;

const notLogined: IuserInterface = {
    name: "",
    id: "",
    password: "",
    follower: [],
    follow: [],
    isLogin: true,
    profilePic: "",
    posts: [],
    likedPosts: [],
    likedComments: [],
};

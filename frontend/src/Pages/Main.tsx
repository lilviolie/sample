import { Button, Grid, Link } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

import Calendar from "../Component/Calendar";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ProfileBox({ user }: { user: IuserInterface }) {
    const [isFollowed, setIsFollowed] = useState<boolean>(true);
    const [isEntered, setIseEntered] = useState<boolean>(false);

    return (
        <div style={{ width: "68%", height: "100%" }}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                <Grid item>
                    <img
                        src={user.profilePic}
                        alt=""
                        style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "100%",
                        }}
                    />
                </Grid>
                <Grid item>{user.name}</Grid>
                <Grid item>{user.id}</Grid>
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={8}
                    >
                        <Grid
                            item
                            textAlign="center"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                fontSize: "15px",
                            }}
                        >
                            <Link
                                href={`http://localhost:3000/${user.id}/follower`}
                                underline="none"
                                color="black"
                            >
                                <p style={{ margin: "0px", color: "grey" }}>
                                    {user.follower.length}
                                </p>
                                <p style={{ margin: "0px", color: "grey" }}>
                                    팔로워
                                </p>
                            </Link>
                        </Grid>
                        <Grid
                            item
                            textAlign="center"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                fontSize: "15px",
                            }}
                        >
                            <Link
                                href={`http://localhost:3000/${user.id}/follow`}
                                underline="none"
                                color="black"
                            >
                                <p style={{ margin: "0px", color: "grey" }}>
                                    {user.follow.length}
                                </p>
                                <p style={{ margin: "0px", color: "grey" }}>
                                    팔로잉
                                </p>
                            </Link>
                        </Grid>
                        <Grid
                            item
                            textAlign="center"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                fontSize: "15px",
                            }}
                        >
                            <Button
                                style={{ height: "100%", width: "100%" }}
                                onMouseEnter={() => {
                                    setIseEntered(true);
                                }}
                                onMouseLeave={() => {
                                    setIseEntered(false);
                                }}
                                onClick={() => {
                                    setIsFollowed(isFollowed ? false : true);
                                }}
                            >
                                {isFollowed ? (
                                    isEntered ? (
                                        <HeartBrokenIcon color="action" />
                                    ) : (
                                        <FavoriteIcon color="action" />
                                    )
                                ) : isEntered ? (
                                    <FavoriteIcon color="action" />
                                ) : (
                                    <FavoriteBorderIcon color="action" />
                                )}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

function Main({ user }: { user: IuserInterface }) {
    const { username } = useParams<string>();

    return (
        <Grid container direction="row" justifyContent="center">
            <Grid item xs={0.7}></Grid>
            <Grid item xs>
                <Calendar user={user} />
            </Grid>
            <Grid item xs={3} marginTop="70px">
                <ProfileBox user={user} />
            </Grid>
        </Grid>
    );
}

export default Main;

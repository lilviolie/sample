import { Grid, styled, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import ExploreIcon from "@mui/icons-material/Explore";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import "../Assets/Styles/Header.css";

interface IloginInterface {
    user: IuserInterface;
    setUser: React.Dispatch<React.SetStateAction<IuserInterface>>;
}

interface IsearchInterface {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderGridItem = styled(Grid)({
    textAlign: "center",
});

const ToolBoxContainer = styled(Box)({
    p: 2,
    border: "1px solid black",
    borderRadius: "10px",
    marginRight: "120px",
});

function SearchField({ search, setSearch }: IsearchInterface) {
    const navigate = useNavigate();

    return (
        <Grid container>
            <Grid item xs={12} marginTop="3px" marginRight="100px">
                <form
                    className="search-container"
                    style={{ margin: "0 auto" }}
                    onSubmit={() => {
                        navigate(`search/${search}`);
                    }}
                >
                    <img
                        src={require("../Assets/Images/search.png")}
                        style={{ width: "18px", marginLeft: "10px" }}
                        alt=""
                    />
                    <input
                        type="text"
                        className="search__box"
                        value={search}
                        placeholder="검색"
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                </form>
            </Grid>
        </Grid>
    );
}

function IconField({ user, setUser }: IloginInterface) {
    return (
        <div>
            <Button
                variant="text"
                style={{ marginTop: "2px" }}
                href={`http://localhost:3000/${user.id}`}
            >
                <PersonIcon color="action" />
            </Button>
            <Button
                variant="text"
                style={{ marginTop: "2px" }}
                href={`http://localhost:3000/${user.id}/notification`}
            >
                <NotificationsIcon color="action" />
            </Button>
            <Button
                variant="text"
                style={{ marginTop: "2px" }}
                href={`http://localhost:3000/search`}
            >
                <PeopleIcon color="action" />
            </Button>
            <Button
                variant="text"
                style={{ marginTop: "2px" }}
                href={`http://localhost:3000/search`}
            >
                <ExploreIcon color="action" />
            </Button>
            <Button
                variant="text"
                style={{ marginTop: "2px" }}
                onClick={() => {
                    const sample: IuserInterface = user;
                    sample.isLogin = false;
                    setUser(sample);
                }}
            >
                <LogoutIcon color="action" />
            </Button>
        </div>
    );
}

function SignUpSignIn() {
    return (
        <Grid container direction="row" justifyContent="space-around">
            <Grid item>
                <Button
                    variant="text"
                    style={{ marginTop: "2px" }}
                    href="http://localhost:3000/signup"
                >
                    SignUp
                </Button>
            </Grid>
            <Grid item>
                <Button
                    variant="text"
                    style={{ marginTop: "2px" }}
                    color="info"
                    href="http://localhost:3000/signin"
                >
                    SignIn
                </Button>
            </Grid>
        </Grid>
    );
}

function ToolBox({ user, setUser }: IloginInterface) {
    return (
        <ToolBoxContainer>
            {user.isLogin ? (
                <IconField setUser={setUser} user={user} />
            ) : (
                <SignUpSignIn />
            )}
        </ToolBoxContainer>
    );
}

function Header({
    user,
    search,
    setUser,
    setSearch,
}: {
    user: IuserInterface;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setUser: React.Dispatch<React.SetStateAction<IuserInterface>>;
}) {
    return (
        <div id="Header">
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <HeaderGridItem item xs={2.5}>
                    <a
                        href={
                            user.isLogin
                                ? `http://localhost:3000/${user.id}`
                                : "http://localhost:3000"
                        }
                    >
                        <img
                            style={{ height: "40px", marginTop: "10px" }}
                            src={require("../Assets/Images/Daylog.png")}
                            alt=""
                        />
                    </a>
                </HeaderGridItem>
                <HeaderGridItem item xs>
                    <SearchField search={search} setSearch={setSearch} />
                </HeaderGridItem>
                <HeaderGridItem item xs={3.1}>
                    <ToolBox setUser={setUser} user={user} />
                </HeaderGridItem>
            </Grid>
        </div>
    );
}

export default Header;

import { Grid, Typography, Button, Link } from "@mui/material";
import { useState } from "react";
import "../Assets/Styles/Calendar.css";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function CalendarTitle({
    date,
    setDate,
}: {
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
}) { 
    const myYear: number = date.getFullYear();
    const myMonth: number = date.getMonth();
    const myDate: number = date.getDate();

    const mothArray: string[] = [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
    ];

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "1085px" }}
        >
            <Grid item>
                <p
                    style={{ fontSize: "20px", margin: "0px" }}
                >{`${myYear}년 ${mothArray[myMonth]}`}</p>
            </Grid>
            <Grid item>
                <Button
                    onClick={() => {
                        setDate(new Date(myYear, myMonth - 1, myDate));
                    }}
                >
                    <ArrowCircleLeftIcon color="action" />
                </Button>
                <Button
                    onClick={() => {
                        setDate(new Date());
                    }}
                    style={{ color: "grey" }}
                >
                    Today
                </Button>
                <Button
                    onClick={() => {
                        setDate(new Date(myYear, myMonth + 1, myDate));
                    }}
                >
                    <ArrowCircleRightIcon color="action" />
                </Button>
            </Grid>
        </Grid>
    );
}

function ClaendarDateForm({
    date,
    day,
    isToday,
    isStart,
    isEnd,
    className,
    post,
}: {
    date: Date;
    day: number;
    isToday: boolean;
    isStart: boolean;
    isEnd: boolean;
    className: string;
    post: IpostInterface | null;
}) {
    const month = date.getMonth();
    const year = date.getFullYear();

    return (
        <Link className="date_wrapper"
            href={
                isStart && post != null
                    ? `http://localhost:3000/post/${post.postNum}`
                    : ""
            }
            underline="none"
            color="black"
        >
            <Grid item xs={12} textAlign="right" className="date_number">
                    <p style={{ fontSize: "13px", margin: "5px" }}>
                        {isEnd && isStart ? day : ""}
                    </p>
            </Grid>
            <Grid item textAlign="center" xs={12} className="date_descript">
                <Typography>{post === null ? "" : post.title}</Typography>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                id={`${year}-${month + 1}-${day}`}
                className={className+ " date_thumb"}
                style={{
                 
                    margin: "1px",
                    backgroundColor: isStart
                        ? isToday
                            ? "yellow"
                            : "white"
                        : "grey",
                   
                    backgroundImage: post === null ? "" : `url(${post.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "none",
                }}
            >
            </Grid>
        </Link>
    );
}

function ClaendarDayForm({ day }: { day: number }) {
    const week: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <div
            style={{
                width: "144.4px",
                height: "25px",
                margin: "4px",
                textAlign: "center",
            }}
        >
            <Typography
                sx={{
                    color: day === 0 ? "red" : day === 6 ? "blue" : "black",
                    fontFamily: "font1",
                    margin: "0px",
                    fontSize: "13px",
                }}
            >
                {week[day]}
            </Typography>
        </div>
    );
}

function CalendarForm({
    date,
    posts,
}: {
    date: Date;
    posts: IpostInterface[];
}) {
    const days: number[] = [0, 1, 2, 3, 4, 5, 6];
    const weeks: number[] = [0, 1, 2, 3, 4, 5, 6];
    const nowDate: Date = new Date();
    const thisMonthesPost: IpostInterface[] = [];
    const postDate: number[] = [];

    let day: number = 0;
    let seqNum: number = 0;
    let isStart: boolean = false;
    let isToday: boolean = false;
    let isEnd: boolean = true; // 끝나면 false 안끝나면 true
    let isNow: boolean =
        date.getFullYear() === nowDate.getFullYear() &&
        date.getMonth() === nowDate.getMonth();

    const newDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const dayLabel = newDate.getDay();

    const trueClass: string = "GridHoverClass";
    const falseClass: string = "false";

    posts.forEach((e) => {
        const SampleDate = e.date;
        if (
            SampleDate.getMonth() === date.getMonth() &&
            SampleDate.getFullYear() === date.getFullYear()
        )
            thisMonthesPost.push(e);
    });

    thisMonthesPost.forEach((e) => {
        postDate.push(e.date.getDate());
    });

    return (
        <Grid
            container
            style={{
                width: "1100px",
                height: "700px",
            }}
            direction="column"
        >
            {weeks.map((e, i: number) => {
                if (e === 0)
                    return (
                        <Grid item key={i}>
                            <Grid container direction="row">
                                {days.map((e, i: number) => {
                                    return (
                                        <Grid item key={i}>
                                            <ClaendarDayForm day={e} />
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    );
                else
                    return (
                        <Grid item key={i}>
                            <Grid container direction="row">
                                {days.map((e, i: number) => {
                                    if (dayLabel === e && isEnd) isStart = true;
                                    if (isStart) day++;
                                    if (day > lastDate.getDate()) {
                                        isStart = false;
                                        isEnd = false;
                                    }
                                    if (date.getDate() === day && isNow)
                                        isToday = true;
                                    else isToday = false;

                                    return (
                                        <Grid item key={i}>
                                            <ClaendarDateForm
                                                className={
                                                    isStart
                                                        ? postDate.includes(day)
                                                            ? trueClass
                                                            : falseClass
                                                        : falseClass
                                                }
                                                date={date}
                                                isStart={isStart}
                                                day={day}
                                                isToday={isToday}
                                                isEnd={isEnd}
                                                post={
                                                    postDate.includes(day)
                                                        ? thisMonthesPost[
                                                              seqNum++
                                                          ]
                                                        : null
                                                }
                                            />
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    );
            })}
        </Grid>
    );
}

function Calendar({ user }: { user: IuserInterface }) {
    const posts: IpostInterface[] = [];

    myList.forEach((e) => {
        // myList를 꼭 user.posts 로 변경해야한다.
        const samplePost = e; // 여기서 API로 받아올거임 fetch 로 꼭 변경해야만 한다.
        posts.push(samplePost);
    });

    const [date, setDate] = useState<Date>(new Date());

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
        >
            <Grid item>
                <CalendarTitle date={date} setDate={setDate} />
            </Grid>
            <Grid item>
                <CalendarForm date={date} posts={posts} />
            </Grid>
        </Grid>
    );
}

export default Calendar;

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

import React from "react";
import Post from "./Post";



export default function Posts(){
    const posts =[
        {
            id: "1",
            username: "indi",
            userImg: "https://media-exp1.licdn.com/dms/image/C4E03AQEMgk9uzDHRyg/profile-displayphoto-shrink_800_800/0/1602739338338?e=1658361600&v=beta&t=TmeVF-66cQzsPz383jN1pUA8a3wegtg8Qh0J1ggmqmc",
            img: "https://images.unsplash.com/photo-1652712691900-292e843a3a1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",
            caption: "Nice picture"
        },
        {
            id: "2",
            username: "dkjslkds",
            userImg: "https://media-exp1.licdn.com/dms/image/C4E03AQEMgk9uzDHRyg/profile-displayphoto-shrink_800_800/0/1602739338338?e=1658361600&v=beta&t=TmeVF-66cQzsPz383jN1pUA8a3wegtg8Qh0J1ggmqmc",
            img: "https://images.unsplash.com/photo-1652778550277-98939e459282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            caption: "Mew picture"
        }
    ]

    return <div>
        {posts.map(post =>(
            <Post
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}
    </div>;
}
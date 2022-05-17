import minifaker, {username} from 'minifaker';
import {useEffect, useState} from "react";
import "minifaker/locales/en";
import Story from "./Story";


export default function Stories(){
    const [storyUsers, setStoryUsers] = useState([])
    useEffect(()=>{
        const storyUsers = minifaker.array(20, (i)=>(
            {
                userName: minifaker.username({locale: "en"}).toLowerCase() ,
                img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()* 70)}`,
                id: i,
            }));
        setStoryUsers(storyUsers);
        console.log(storyUsers)
    }, [])
    return <div>
        {storyUsers.map(user=>(
            <Story key={user.id} username={user.username} img={user.img}/>
        ))}
    </div>;
}
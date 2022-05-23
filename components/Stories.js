import minifaker from 'minifaker';
import {useEffect, useState} from "react";
import Story from "./Story";
import {useSession} from "next-auth/react";


export default function Stories(){
    const [storyUsers, setStoryUsers] = useState([])
    const {data: session} = useSession();
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
    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm rounded-none">
            {session && (
                <Story img={session.user.image} username={
                    session.user.username
                } isUser="true"/>
            )}
            {storyUsers.map(user =>(
                <Story key={user.id} username={user.userName} img={user.img}/>
            ))}
        </div>
    )

}
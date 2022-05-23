import React from "react";
import Image from "next/image";
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import {useSession, signIn, signOut} from "next-auth/react";
import {useRecoilState} from "recoil";
import {modalState} from "../atom/modalAtom";

export default function Header(){
    const {data: session} = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    return (
        <div className='shadow-sm border-b sticky top-0 bg-white z-30'>
            <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
                {/*Left*/}
                <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid ">
                    <Image src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png"
                           layout='fill'
                           className="object-contain"/>
                </div>
                <div className="cursor-pointer h-24 w-10 relative  lg:hidden ">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                           layout='fill'
                           className="object-contain"/>
                </div>

                {/*Middle*/}

                <div className="relative mt-1">
                    <div className="absolute top-2 left-2">
                        <SearchIcon className="h-5 text-gray-500"/>
                    </div>
                    <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"/>
                </div>
                {/*Right*/}
                <div className="flex space-x-4 items-center">
                    <HomeIcon className="hidden md:inline-flex h-5 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"/>
                    {session ? (
                        <>
                            <PlusCircleIcon onClick={()=>setOpen(true)} className="h-5 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"/>
                            <img src={session.user.image}
                                 onClick={signOut}
                                 className='h-10 rounded-full cursor-pointer' alt='user-img'/>
                        </>

                    ):(
                        <button onClick={signIn}> Sign in</button>
                    )}
                </div>
            </div>
        </div>

    );
}
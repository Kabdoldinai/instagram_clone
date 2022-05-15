import React from "react";
import Image from "next/image"

export default function Header(){
    return <div>
        {/*Left*/}
        <div className="flex items-center justify-between max-w-6xl">
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

            <h1>Right side</h1>
        </div>
        {/*Middle*/}
        {/*Right*/}
    </div>
}
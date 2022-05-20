export default function MiniProfile(){
    return <div className="flex items-center justify-between mt-14 ml-10">
        <img className="h-16 rounded-full border p-[2px]" src="https://media-exp1.licdn.com/dms/image/C4E03AQEMgk9uzDHRyg/profile-displayphoto-shrink_800_800/0/1602739338338?e=1658361600&v=beta&t=TmeVF-66cQzsPz383jN1pUA8a3wegtg8Qh0J1ggmqmc" alt="user"/>
        <div className="flex-1 ml-4">
            <h2 className="font-bold">Indira</h2>
            <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
        </div>
        <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>;
}
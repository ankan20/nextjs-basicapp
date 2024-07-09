export default function Post ({text,index}:{text:string,index:number}){
    return (
        <>
           <div className="border border-red-500 p-4 w-[400px] mt-2 rounded-md ml-5">
                <div className="text-2xl">Post #{index+1}</div>
                <div className="pl-5 pt-2">
                    {text}
                </div>
           </div>
        </>
    )
}
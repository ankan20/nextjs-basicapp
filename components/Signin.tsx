"use client"

export const SigninComponent = ()=>{
    return (
        <div className="flex flex-col items-center justify-center  min-h-[70vh] max-h[100vh] w-full">
            <div className=" bg-slate-100 rounded-md flex flex-col gap-3 h-[40%] justify-evenly px-5">
                <div className="text-3xl font-extrabold flex justify-center">SignIn</div>
                <label htmlFor="username" className=" font-bold">Username</label>
                <input type="text" id="username" className="w-full bg-white  border border-black rounded-md" placeholder="Username"/>
                <label htmlFor="password" className=" font-bold">Password</label>
                <input type="text" id="password" className="w-full bg-white border border-black rounded-md " placeholder="Password"/>
                <button className=" py-1  bg-black text-slate-100 rounded-md" onClick={function (){
                    console.log("hi from signin submit button")
                }}>Submit</button>
            </div>
        </div>
    )
}
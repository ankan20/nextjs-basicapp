"use client"
import { useState } from "react";
import Post from "./Post";
import axios from "axios";

export default function Feed (){
    const [content,setContent] = useState("");
    const [totalFeed,setTotalFeed] = useState<string[]>([]);
    const handleOnchangle =(e:{target:{value:string}})=>{
        setContent(e.target.value);
    }
    return (
        <>
            <h3 className="text-2xl text-blue-500 font-bold text-center">Add comments and update and delete</h3>
            <div className="flex gap-10">
                <h3 className="mt-2 mb-2">Enter something you want</h3>
                <input type="text" className="border-4  border-blue-500 rounded " value={content} onChange={handleOnchangle}/>
                <button className="bg-black text-white border-2 rounded-md w-40 py-1" onClick={async function (){
                    
                    const response = await axios.post('http://localhost:3000/api/feed',{
                        content
                    });
                    setContent("");
                    const res = await axios.get("http://localhost:3000/api/feed");
                    setTotalFeed(res.data.allContent);
                    console.log(response.data);
                    console.log(res.data.allContent)
                    
                }}>Add</button>
            </div>
            
            <div className="max-w-full bg-black h-1 mt-5 mx-4">
            </div>
            <div className="flex flex-wrap ">
                {
                   totalFeed.map((feed,index)=> (<Post key={Math.random()} text={feed} index={index}/>))
                        
                    
                    
                }
            </div>
        </>
    )
}

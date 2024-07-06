import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const client =new PrismaClient();
export function GET(){
    //database logic

    return  Response.json({
        name:"ankan",
        email:"ankan@gmail.com"
    })
}

export async function POST(req:NextRequest){
    //extract the body
    const body = await req.json();
    console.log(body);

    //store the body in DB
    await client.user.create({
        data:{ 
            username:body.username,
            password:body.password
        }
    })

    return Response.json({
        message:"you are logged in",
    })
}
import { NextRequest, NextResponse } from "next/server";

export async function GET (){
    
}

export async function POST (req:NextRequest){
    const body = await req.json();
    return NextResponse.json({
        content:body.content
    })
}
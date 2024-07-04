import Image from "next/image";

import axios from "axios";

async function getData (){
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div>
      <h1 className="text-2xl text-blue-300 bg-black">Hello world of NeextJs</h1>
      <p>{data.email}</p>
      <p>{data.name}</p>
    </div>
  );
}

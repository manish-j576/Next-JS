import Link from "next/link";

export default function Home() {
  return (<div className="w-full h-screen flex justify-center items-center ">
    

    
    <div className="w-[10%] h-fit bg-cyan-800 p-2 m-2 text-center rounded-md hover:bg-cyan-300 hover:text-cyan-800">
    <Link href={"/signup"}>Signup</Link>
    </div>
    <div className="w-[10%] h-fit bg-cyan-800 p-2 m-2 text-center rounded-md hover:bg-cyan-300 hover:text-cyan-800">
    <Link href={"/signin"}>Signin</Link>
    </div>
  </div>
  );
}

  
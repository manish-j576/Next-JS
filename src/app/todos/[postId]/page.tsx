import axios from "axios"

export default async function({params}:{
    params : {
        postId : string
    }
}){

    const {postId} =  await params
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/" +postId)
    console.log(response.data)
    return <div className="w-full h-full flex bg-amber-900 ">

        id : {response.data.id}
        <br />
        title : {response.data.title}
        <br />
        completed: {response.data.completed}
    
    </div>
}
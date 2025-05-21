import axios from "axios"

export default async function({params}:any
   ){

    const postId =  (await params).courseId
    const restOfArray = (await params).moduleId
    return <div className="w-full h-full flex bg-amber-900 ">

        course page 
        <br />
        courseId {postId}
        <br />
        module array   {JSON.stringify(restOfArray)}

    
    </div>
}
import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";
async function createTodo(data:FormData){
    "use server"
    const title=data.get("title")?.valueOf()
    if(typeof title !=="string" || title.length ===0){
        throw new Error ("Invalid Title !")
    }
    await prisma.todo.create({data:{title,complete:false}})
    redirect("/")
}
export default function Page (){
    return <>
    <header className="flex justify-between items-center mb-4">
       <h1 className="text-2x1">New</h1>
    </header>
    <form action={createTodo} className="flex gap-2 flex-col">
        <input type="text" name="title" className="border border-slite-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slite-100"/>
        <div className="flex gap-1 justify-end">
            <Link className="border border-slite-300 text-slite300 px-2 py-1 rounded hover:bg-slite 700 focus within:bg-slite-700 outline-none" href="..">Cancel</Link>
            <button className="border border-slite-300 text-slite300 px-2 py-1 rounded hover:bg-slite 700 focus within:bg-slite-700 outline-none" type="submit">Create</button>
        </div>
    </form>
    </>
}
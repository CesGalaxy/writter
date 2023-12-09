"use client";
import addPost from "@/actions/addPost";
import {useRef} from "react";

export default function PostComposer() {
    const formRef = useRef<HTMLFormElement>(null);
    async function addPostHandler(formData: FormData) {
        formRef.current?.reset();
        await addPost(formData);
    }

    return (
        <form className={"group relative flex md:block bg-slate-900/50 rounded-xl p-4 text-slate-300"} action={addPostHandler} ref={formRef}>
            <h1 className={"hidden group-focus:block md:block text-xl font-semibold"}>Make a new post</h1>
            <textarea
                className={"w-full bg-slate-900 rounded-xl p-2 md:my-2 outline-none focus:outline-slate-700 transition-all"}
                placeholder={"What's on your mind?"}
                rows={3}
                name={"content"}/>
            <button
                type={"submit"}
                className={"w-fit bg-slate-700 absolute bottom-4 right-4 py-1 px-2 rounded-tl-md rounded-br-xl " +
                    "md:bg-slate-900 md:block md:w-full md:p-2 md:rounded-full md:static " +
                    "text-slate-400 font-bold hover:bg-slate-800"}>
                Send
            </button>
        </form>
    )
}
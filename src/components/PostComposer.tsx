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
        <form className={"bg-slate-900/50 rounded-xl p-4 text-slate-300"} action={addPostHandler} ref={formRef}>
            <h1 className={"text-xl font-semibold"}>Make a new post</h1>
            <textarea
                className={"w-full bg-slate-900 rounded-xl p-2 my-2 outline-none focus:outline-slate-700"}
                placeholder={"What's on your mind?"}
                rows={3}
                name={"content"}/>
            <button type={"submit"} className={"bg-slate-900 text-slate-400 font-bold w-full p-2 rounded-full hover:bg-slate-800"}>Send</button>
        </form>
    )
}
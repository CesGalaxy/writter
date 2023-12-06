import {AuthButton} from "@/app/auth/auth-button";

export default function() {
    return (
        <main className={"bg-slate-900 w-screen h-screen flex flex-col items-center justify-center text-slate-200"}>
            <div className={"bg-slate-800 p-8 flex flex-col items-center justify-center gap-8 rounded-xl"}>
                <h1 className={"font-bold text-3xl"}>Auth Page</h1>
                <AuthButton/>
            </div>
        </main>
    )
}
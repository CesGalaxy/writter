import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import PostsList from "@/components/PostsList";
import Sidebar from "@/app/sidebar";

export default async function Home() {
    const supabase = createServerComponentClient({cookies});

    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, content, created_at, profile:profiles(username, name, avatar_url)');

    if (error || !posts) {
        return <p>Something went wrong</p>
    }

    return (
        <main className="flex min-h-screen flex-row items-stretch justify-stretch bg-slate-800 text-slate-200 lg:px-24 xl:px-48 2xl:px-64">
            <Sidebar />
            <section className={"bg-slate-700 w-full h-screen p-8"}>
                <PostsList posts={posts} />
            </section>
        </main>
    )
}

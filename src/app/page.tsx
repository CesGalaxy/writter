import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import PostsList from "@/components/PostsList";
import Sidebar from "@/app/sidebar";
import {Database} from "@/types/supabase";
import {Post} from "@/types/database";

export default async function Home() {
    const supabase = createServerComponentClient<Database>({cookies});

    const { data: posts, error } = await supabase
        .from('posts')
        .select('*, profile:profiles(*)') // TODO: Use only the fields we need
        .order('created_at', { ascending: false });

    if (error || !posts || !posts.every(post => post.profile)) {
        return <p>Something went wrong</p>
    }

    return (
        <main className="flex min-h-screen flex-row items-stretch justify-stretch bg-slate-800 text-slate-200 lg:px-24 xl:px-48 2xl:px-64">
            <Sidebar />
            <section className={"bg-slate-700 w-full h-screen p-8"}>
                <PostsList posts={posts as Post[]} />
            </section>
        </main>
    )
}

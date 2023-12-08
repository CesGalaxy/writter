"use server";

import {createServerActionClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";

export default async function addPost(formData: FormData) {
    const content = formData.get("content");

    if (!content || typeof content !== "string") return;

    const supabase = createServerActionClient({ cookies });
    await supabase.from('posts').insert({ content });

    revalidatePath("/");
}
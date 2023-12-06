'use client';

import {Session, createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {GitHubIcon} from "@/theme/icons";
import { useEffect, useState } from "react";

export function AuthButton() {
    const [session, setSession] = useState<Session | null>(null);

    const supabase = createClientComponentClient();

    const handleSignIn = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: 'http://localhost:3000/auth/callback'
            }
        })
    }

    const handleSignOut = async () => {
        await supabase.auth.signOut();
    }

    useEffect(() => {
        const getSession = async () => {
            const { data } = await supabase.auth.getSession();
            setSession(data.session);
        }
    }, []);

    return session ? (
        <button type="button"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mb-2"
                onClick={handleSignIn}>
            <GitHubIcon/>
            Sign in with Github
        </button>
    ) : (
        <button type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            Sign Out
        </button>
    )
}
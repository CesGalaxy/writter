'use client';

import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import {GitHubIcon} from "@/theme/icons";

export function AuthButton() {
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

    return (
        <div>
            <button type="button"
                    className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                    onClick={handleSignIn}>
                <GitHubIcon/>
                Sign in with Github
            </button>
            <button type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Sign Out
            </button>
        </div>
    )
}
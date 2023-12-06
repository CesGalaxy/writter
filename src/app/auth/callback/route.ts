import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import {NextRequest, NextResponse} from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    const requestUrl = new URL(req.nextUrl);
    const code = requestUrl.searchParams.get('code');

    if (!code) return NextResponse.redirect('/');

    const supabase = createRouteHandlerClient({cookies});
    await supabase.auth.exchangeCodeForSession(code);

    return NextResponse.redirect(requestUrl.origin);
}
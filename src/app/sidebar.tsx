import Link from "next/link";
import {IconCompass, IconHelp, IconHome, IconSettings2, IconUser, TablerIconsProps} from "@tabler/icons-react";
import PostComposer from "@/components/PostComposer";

export default function Sidebar() {
    return (
        <aside className={"sticky md:sticky border-x border-x-slate-600 min-w-[280px] w-full md:max-w-[500px] md:w-1/3"}>
            <nav className={"md:p-4 flex flex-col md:gap-8 w-full justify-start items-stretch"}>
                <header className={"bg-slate-900 md:rounded-xl p-1 md:p-4"}>
                    <h1 className={"font-mono font-bold text-xl md:text-2xl text-center"}>[put name here]</h1>
                </header>
                <nav className={"flex justify-around md:justify-start md:block font-medium text-slate-400 w-full text-xl"}>
                    <SidebarButton href={"/"} icon={IconHome}>Home</SidebarButton>
                    <SidebarButton href={"/"} icon={IconCompass}>Explore</SidebarButton>
                    <SidebarButton href={"/"} icon={IconUser}>Profile</SidebarButton>
                    <SidebarButton href={"/"} icon={IconSettings2}>Options</SidebarButton>
                    <SidebarButton href={"/"} icon={IconHelp}>Help</SidebarButton>
                </nav>
                <PostComposer/>
            </nav>
        </aside>
    )
}

export function SidebarButton({
    href,
    children,
    icon,
}: {
    href: string;
    children: string;
    icon: (props: TablerIconsProps) => JSX.Element;
}) {
    const Icon = icon;
    return <Link
        href={href}
        className={"py-2 px-4 rounded-full hover:text-slate-300 transition-all hover:bg-slate-900 flex flex-row items-center justify-start gap-2 group md:hover:ps-6"}>
        <span><Icon/></span>
        <span className={"hidden sm:block"}>{children}</span>
    </Link>
}
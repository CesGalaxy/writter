import Link from "next/link";
import {IconCompass, IconHelp, IconHome, IconSettings2, IconUser, TablerIconsProps} from "@tabler/icons-react";

export default function Sidebar() {
    return (
        <aside className={"border-x border-x-slate-600 min-w-[280px] max-w-[500px] w-1/3"}>
            <nav className={"p-4 flex flex-col gap-8 w-full justify-start items-stretch"}>
                <header className={"bg-slate-900 rounded-xl p-4"}>
                    <h1 className={"font-mono font-bold text-2xl text-center"}>[put name here]</h1>
                </header>
                <nav className={"font-medium text-slate-400 w-full text-xl"}>
                    <SidebarButton href={"/"} icon={IconHome}>Home</SidebarButton>
                    <SidebarButton href={"/"} icon={IconCompass}>Explore</SidebarButton>
                    <SidebarButton href={"/"} icon={IconUser}>Profile</SidebarButton>
                    <SidebarButton href={"/"} icon={IconSettings2}>Options</SidebarButton>
                    <SidebarButton href={"/"} icon={IconHelp}>Help</SidebarButton>
                </nav>
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
    return <Link href={href} className={"py-2 px-4 rounded-full hover:text-slate-300 transition-all hover:bg-slate-900 flex flex-row items-center justify-start gap-2"}>
        <Icon/>
        {children}
    </Link>
}
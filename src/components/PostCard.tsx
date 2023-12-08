"use client";

import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import {useState} from "react";

export default function PostCard({
                                 name,
                                 username,
                                 avatar_url,
                                 content,
                                 created_at,
                             }: {
    name: string;
    username: string;
    avatar_url: string;
    content: string;
    created_at: string;
}) {
    const [isFollowed, setIsFollowed] = useState(false);

    return (
        <Card className="max-w-[340px]">
            <CardHeader className="justify-between gap-8">
                <div className="flex gap-4">
                    <Avatar isBordered radius="full" size="md" src={avatar_url}/>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
                        <h5 className="text-small tracking-tight text-default-400">{username}</h5>
                    </div>
                </div>
                <Button
                    className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}
                >
                    {isFollowed ? "Unfollow" : "Follow"}
                </Button>
            </CardHeader>
            <CardBody className=" text-small text-default-400">
                <p>
                    {content}
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">4</p>
                    <p className=" text-default-400 text-small">Following</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">97.1K</p>
                    <p className="text-default-400 text-small">Followers</p>
                </div>
            </CardFooter>
        </Card>
    );
}

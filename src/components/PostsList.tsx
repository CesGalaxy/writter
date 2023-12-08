import PostCard from "@/components/PostCard";
import {Post} from "@/types/database";

export default function PostsList({
                                      posts
                                  }: {
    posts: Post[];
}) {
    return <div
        className="flex flex-col items-stretch gap-4"
        children={posts.map((post) => {
            return (
                <PostCard
                    key={post.id}
                    name={post.profile.name}
                    username={post.profile.username}
                    avatar_url={post.profile.avatar_url}
                    content={post.content}
                    created_at={post.created_at}
                />
            )
        })}
    />
}
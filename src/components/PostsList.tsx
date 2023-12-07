import Post from "@/components/Post";

export default function PostsList({
                                      posts
                                  }: {
    posts: any[];
}) {
    return <div
        className="flex flex-col items-stretch gap-4"
        children={posts.map((post) => {
            return (
                <Post
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
import { getPosts } from "@/actions/post.action";
import { getDbUserID } from "@/actions/user.action";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import WhoToFollow from "@/components/WhoToFollow";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  const post = await getPosts();
  const dbUserId = await getDbUserID();

  // console.log(post);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <article className="lg:col-span-6">
        {user ? <CreatePost /> : null}
        <div className="space-y-6">
          {post.map((post) => (
            <PostCard key={post.id} post={post} dbUserId={dbUserId} />
          ))}
        </div>
      </article>
      <aside className="lg:block hidden lg:col-span-4 sticky top-20">
        <WhoToFollow />
      </aside>
    </section>
  );
}

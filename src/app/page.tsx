import CreatePost from "@/components/CreatePost";
import WhoToFollow from "@/components/WhoToFollow";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <article className="lg:col-span-6">
        {user ? <CreatePost /> : null}
      </article>
      <aside className="lg:block hidden lg:col-span-4 sticky top-20">
        <WhoToFollow />
      </aside>
    </section>
  );
}

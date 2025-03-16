import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.action";
import ProfilePage from "@/components/ProfilePage";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}) {
  const { username } = await params; // Ensure params is awaited before accessing properties
  const user = await getProfileByUsername(username);

  if (!user) return;

  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Check out ${user.username}'s profile`,
  };
}

const ProfilePageServer = async ({
  params,
}: {
  params: { username: string };
}) => {
  const { username } = await params;
  const user = await getProfileByUsername(username);

  if (!user) return redirect(`/not-found?username=${username}`);

  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user.id),
    getUserLikedPosts(user.id),
    isFollowing(user.id),
  ]);

  return (
    <ProfilePage
      user={user}
      posts={posts}
      likedPosts={likedPosts}
      isFollowing={isCurrentUserFollowing}
    />
  );
};

export default ProfilePageServer;

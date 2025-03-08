"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { toggleFollow } from "@/actions/user.action";

const FollowButton = ({ userId }: { userId: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollow = async () => {
    setIsLoading(true);

    try {
      await toggleFollow(userId);
      toast.success("user followed.");
      setIsFollowed(!isFollowed);
    } catch (error) {
      toast.error("cannot follow the user.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      size={"sm"}
      variant={"secondary"}
      onClick={handleFollow}
      disabled={isLoading}
      className="w-20"
    >
      {isLoading ? (
        <Loader2Icon className="animate-spin size-4" />
      ) : isFollowed ? (
        "Unfollow"
      ) : (
        "Follow"
      )}
    </Button>
  );
};

export default FollowButton;

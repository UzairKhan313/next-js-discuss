"use client";
import paths from "@/utils/path";
import Link from "next/link";

const PostItem = ({ post }) => {
  return (
    <div key={post.id} className="border rounded p-2">
      <Link href={paths.postShow(topicSlug, post.id)}>
        <h3 className="text-lg font-bold">{post.title}</h3>
        <div className="flex flex-row gap-8">
          <p className="text-xs text-gray-400">By {post.user.name}</p>
          <p className="text-xs text-gray-400">
            {post._count.comments} comments
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;

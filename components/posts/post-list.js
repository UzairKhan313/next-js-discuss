import { Post, User, Topic } from "@prisma/client";

import PostItem from "./post-item";

// TODO: Get list of posts into this component somehow
export default function PostList() {
  const renderedPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;

    if (!topicSlug) {
      throw new Error("Need a slug to link to a post");
    }
    return <PostItem post={post} />;
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}

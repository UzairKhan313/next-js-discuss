import PostItem from "./post-item";

// TODO: Get list of posts into this component somehow

export default async function PostList({ fetchData }) {
  const posts = await fetchData();

  if (posts.length === 0) {
    return <h2>No post found in this topic</h2>;
  }

  const renderedPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;

    if (!topicSlug) {
      throw new Error("Need a slug to link to a post");
    }
    return <PostItem post={post} />;
  });

  return <div className="space-y-2 mt-4">{renderedPosts}</div>;
}

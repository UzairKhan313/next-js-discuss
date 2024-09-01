import CreatePostForm from "@/components/posts/Create-Post-Form";
import PostList from "@/components/posts/post-list";
import { fetchPostByTopicSlug } from "@/db/queries/posts";

const SingleTopicPage = ({ params }) => {
  const { slug } = params;
  return (
    <section className="grid grid-cols-4 p-4 gap-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold m-2">All Posts in " {slug} "</h1>
        <PostList fetchData={() => fetchPostByTopicSlug(slug)} />
      </div>
      <div className="border-2 shadow py-3 px-2">
        <CreatePostForm slug={slug} />
      </div>
    </section>
  );
};

export default SingleTopicPage;

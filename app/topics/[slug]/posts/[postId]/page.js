// import Link from "next/link";
import PostShow from "@/components/posts/post-show";
import CommentList from "@/components/comments/comment-list";
import CommentCreateForm from "@/components/comments/comment-create-form";
import { fetchCommentsWithPostId } from "@/db/queries/comments";
// import paths from "@/utils/path";

const PostDetailsPage = ({ params }) => {
  const { slug, postId } = params;
  return (
    <div className="space-y-3">
      {/* <Link
        className="cursor-pointer  p-3 border-2 border-b-gray-500 rounded-md"
        href={paths.topicShowPath(slug)}
      >
        Back to {slug}
      </Link> */}
      <PostShow postId={postId} />
      <CommentCreateForm postId={postId} startOpen />
      <CommentList fetchData={() => fetchCommentsWithPostId(postId)} />
    </div>
  );
};

export default PostDetailsPage;

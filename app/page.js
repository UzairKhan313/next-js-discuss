import { Divider } from "@nextui-org/react";
import CreatTopicForm from "@/components/Create-Topic-Form";
import TopicList from "@/components/Topic-List";
import PostList from "@/components/posts/post-list";
import { fetchTopPost } from "@/db/queries/posts";

export default function Home() {
  return (
    <section className="grid grid-cols-4 p-4 gap-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold m-2"> Top Posts</h1>
        <PostList fetchData={fetchTopPost} />
      </div>
      <div className="border-2 shadow py-3 px-2">
        <CreatTopicForm />
        <Divider className="my-2" />
        <h3 className="text-lg">Topic</h3>
        <TopicList />
      </div>
    </section>
  );
}

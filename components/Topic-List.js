import { db } from "@/db";
import TopicItem from "./Topic-Item";

const TopicList = async ({ list }) => {
  const topics = await db.topic.findMany();

  if (topics.length === 0) {
    return (
      <div>
        <p>No topic added yet!.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap mt-4 flex-row gap-2">
      {topics.map((topic) => {
        return <TopicItem {...topic} />;
      })}
    </div>
  );
};

export default TopicList;

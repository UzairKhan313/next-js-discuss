import CreatTopicForm from "@/components/Create-Topic-Form";

export default function Home() {
  return (
    <section className="grid grid-cols-4 p-4 gap-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold m-2"> Top Posts</h1>
      </div>
      <div>
        <CreatTopicForm />
      </div>
    </section>
  );
}

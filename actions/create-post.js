"use server";
import { z } from "zod";
import { db } from "@/db";
import { auth } from "@/utils/auth";
import paths from "@/utils/path";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

const createPost = async (slug, formState, formData) => {
  // await new Promise((res) => setTimeout(res, 3000));
  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: { _form: ["Please sign in first to create a Post."] },
    };
  }

  const topic = await db.topic.findFirst({ where: { slug } });
  if (!topic) {
    return {
      errors: {
        _form: [`Couldn't find the topic with this ${slug}.`],
      },
    };
  }
  let post;

  try {
    post = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id,
        topicId: topic.id,
      },
    });
  } catch (error) {
    return {
      errors: {
        _form: [error.message || "Something went wrong. Faild to create poste"],
      },
    };
  }
  // TODO : revalidate the topic show page.
  revalidatePath(paths.topicShowPath(slug));
  redirect(paths.postShowPath(slug, post.id));
};

export default createPost;

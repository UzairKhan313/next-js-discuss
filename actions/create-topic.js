"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { db } from "@/db";
import { auth } from "@/utils/auth";
import paths from "@/utils/path";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/[a-z-]/, {
      message: "Name must be lower case and letter or dashes without spaces",
    }),
  description: z
    .string()
    .min(10, { message: "Description must be atleast ten character long." }),
});

const createTopic = async (fromState, formData) => {
  await new Promise((res) => setTimeout(res, 3000));
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: { _form: ["Please sign in first to create a topic."] },
    };
  }
  let topic;

  try {
    topic = await db.topic.create({
      data: { slug: result.data.name, description: result.data.description },
    });
  } catch (error) {
    return {
      errors: {
        _form: [error.message || "Something went wrong."],
      },
    };
  }

  // TODO: revalidate the home page.
  revalidatePath("/");
  redirect(paths.topicShowPath(topic.slug));
};

export default createTopic;

import { db } from "@/db";

export const fetchCommentsWithPostId = async (postId) => {
  return db.comment.findMany({
    where: { postId: postId },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
};

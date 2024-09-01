"use client";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

import paths from "@/utils/path";

const TopicItem = ({ slug }) => {
  return (
    <Link href={paths.topicShowPath(slug)}>
      <Chip color="warning" variant="shadow">
        {slug}
      </Chip>
    </Link>
  );
};

export default TopicItem;

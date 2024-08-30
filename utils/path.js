const paths = {
  homePath() {
    return `/`;
  },
  topicShowPath(topicSlug) {
    return `/topics/${topicSlug}`;
  },
  postCreatePath(topicSlug) {
    return `/topics/${topicSlug}/posts/new`;
  },
  postShowPath(topicSlug, postId) {
    return `/topics/${topicSlug}/posts/${postId}`;
  },
};

export default paths;


export type commentsType = {
  comment_author: string;
  comment_text: string;
  comment_score: number;
}

export type subredditType = {
  name: string;
  image: string;
}

export type postType = {
  id: string;
  title: string;
  post_comment: string;
  author: string;
  subreddit: subredditType;
  score: number;
  img: string;
  comments: commentsType[]
}
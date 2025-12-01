export interface AppError extends Error {
  digest?: string;
}

export interface ErrorProps {
  error: AppError;
  reset: () => void;
}
export interface User {
  id: number;
  username: string;
  fullName: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  views: number;
  reactions: { likes: number, dislikes: number }; // you can extend this later if needed
  userId: number;
  media?: Array<{
    id: number;
    link: string;
    type: "image" | "video";
  }>;
}
export interface Comment {
  id: number;
  body: string;
  postId: number;
  user: User;
}

export interface News {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string | null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface Pagination {
  total_page: number;
  per_page: number;
  total_item: number;
  current_page: number;
}

export interface PostsResponse {
  success: boolean;
  code: number;
  data: {
    posts: Post[];
    pagination: Pagination;
  };
  message: string;
}
export interface CommentsResponse {
  success: boolean;
  code: number;
  message: string;
  data?: {
    comments: Comment[];
    pagination: Pagination;
  };
}

export interface AdvisorConversationMessage {
  id: number;
  sender: User;
  receiver: User;
  message: string;
}

export interface MessageConversation {
  id: number;
  name: string;
  message: string;
  time: string;
  image: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: Token;
}

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
  TEACHER = "TEACHER",
}

export enum Provider {
  GOOGLE = "GOOGLE",
}

export interface PaginatedResponse<T> {
  data: T[];
  totalQuantity: number;
  totalPages: number;
  page: number;
}

export interface Token {
  token: string;
  exp: string;
  userId: string;
  userAgent: string;
}

export interface JWTPayload {
  id: string;
  email: string;
  role: Role;
  fullname: string;
  isVerified: boolean;
  isBlocked: boolean;
}

export interface User {
  id: string;
  fullname: string;
  email: string;
  password?: string;
  provider?: Provider;
  phone: string;
  bio: string;
  role: Role;
  isVerified: boolean;
  verificationToken: string;
  resetToken?: string;
  resetTokenExp?: string;
  tokens: Token[];
  isBlocked: boolean;
  comments?: Comment[];
  discussions?: Discussion[];
  opinions?: Opinion[];
  createdAt: string;
  updatedAt: string;
}

export interface News {
  id: string;
  title: string;
  content: string;
  imageUrl: string[];
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  content: string;
  authorId: string;
  author?: User;
  newsId: string;
  news: News;
  createdAt: string;
  updatedAt: string;
}

export interface Discussion {
  id: string;
  title: string;
  content?: string;
  authorId: string;
  author: User;
  opinions: Opinion[];
  isApproved: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Opinion {
  id: string;
  content: string;
  authorId: string;
  author: User;
  discussionId: string;
  discussion: Discussion;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  statusCode: number;
  data?: T[];
  error?: string;
}

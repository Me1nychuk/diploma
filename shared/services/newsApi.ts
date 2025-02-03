import axios from "axios";
import { axiosInstance } from "./axiosInstance";
import { News, Comment } from "@/types";

export interface NewsParameters {
  per_page: string;
  page: string;
  search: string;
  sortBy: "title" | "date";
  order: "asc" | "desc";
}
export interface CommentParameters {
  per_page: string;
  page: string;
  newsId: string;
  order: "asc" | "desc";
  authorId: string;
}

export const createNews = async (dto: {
  title: string;
  content: string;
  imageUrl?: string[];
}) => {
  try {
    const res = await axiosInstance.post("news", { ...dto });
    return {
      statusCode: res.status,
      data: res.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        statusCode: error.response?.status || 500,
        error: error.response?.data?.message || "Oops, something went wrong.",
      };
    }
  }
};
export const updateNews = async (id: string, dto: Partial<News>) => {
  try {
    const res = await axiosInstance.patch(`news/${id}`, { ...dto });
    return {
      statusCode: res.status,
      data: res.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        statusCode: error.response?.status || 500,
        error: error.response?.data?.message || "Oops, something went wrong.",
      };
    }

    return {
      statusCode: 500,
      error: "Opps, something went wrong.",
    };
  }
};
export const deleteNews = async (id: string) => {
  try {
    const res = await axiosInstance.delete(`news/${id}`);
    return {
      statusCode: res.status,
      data: res.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        statusCode: error.response?.status || 500,
        error: error.response?.data?.message || "Oops, something went wrong.",
      };
    }

    return {
      statusCode: 500,
      error: "Opps, something went wrong.",
    };
  }
};

export const fetchNews = async ({
  per_page = "10",
  page = "1",
  search = "",
  sortBy = "title",
  order = "asc",
}: NewsParameters) => {
  try {
    const response = await axiosInstance.get(
      `news?per_page=${per_page}&page=${page}&search=${search}&sortBy=${sortBy}&order=${order}`
    );
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        statusCode: error.response?.status || 500,
        error: error.response?.data?.message || "Oops, something went wrong.",
      };
    }

    return {
      statusCode: 500,
      error: "Opps, something went wrong.",
    };
  }
};
export const fetchNewsById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`news/${id}`);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        statusCode: error.response?.status || 500,
        error: error.response?.data?.message || "Oops, something went wrong.",
      };
    }

    return {
      statusCode: 500,
      error: "Opps, something went wrong.",
    };
  }
};

export const createComment = async (dto: {
  newsId: string;
  content: string;
}) => {
  try {
    const res = await axiosInstance.post("comments", { ...dto });
    return {
      statusCode: res.status,
      data: res.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        statusCode: error.response?.status || 500,
        error: error.response?.data?.message || "Oops, something went wrong.",
      };
    }
  }
};
export const updateComment = async (dto: Partial<Comment>) => {
  try {
    const res = await axiosInstance.patch("comments", { ...dto });
    return {
      statusCode: res.status,
      data: res.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        statusCode: error.response?.status || 500,
        error: error.response?.data?.message || "Oops, something went wrong.",
      };
    }

    return {
      statusCode: 500,
      error: "Opps, something went wrong.",
    };
  }
};
export const deleteComment = async (id: string) => {
  try {
    const res = await axiosInstance.delete(`comments/${id}`);
    return {
      statusCode: res.status,
      data: res.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        statusCode: error.response?.status || 500,
        error: error.response?.data?.message || "Oops, something went wrong.",
      };
    }

    return {
      statusCode: 500,
      error: "Opps, something went wrong.",
    };
  }
};

export const fetchComments = async ({
  per_page = "10",
  page = "1",
  newsId = "",
  authorId = "",
  order = "asc",
}: CommentParameters) => {
  try {
    const response = await axiosInstance.get(
      `comments?per_page=${per_page}&page=${page}&newsId=${newsId}&author-id=${authorId}&order=${order}`
    );
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        statusCode: error.response?.status || 500,
        error: error.response?.data?.message || "Oops, something went wrong.",
      };
    }

    return {
      statusCode: 500,
      error: "Opps, something went wrong.",
    };
  }
};
export const fetchCommentById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`comments/${id}`);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        statusCode: error.response?.status || 500,
        error: error.response?.data?.message || "Oops, something went wrong.",
      };
    }

    return {
      statusCode: 500,
      error: "Opps, something went wrong.",
    };
  }
};

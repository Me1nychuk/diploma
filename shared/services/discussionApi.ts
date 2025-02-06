import axios from "axios";
import { axiosInstance } from "./axiosInstance";
import { Discussion, Opinion } from "@/types";

export interface DiscussionParameters {
  per_page: string;
  page: string;
  search: string;
  sortBy: "title" | "date";
  order: "asc" | "desc";
  authorId: string;
  isVeriefied: "all" | "approved" | "unapproved";
}
export interface OpinionParameters {
  per_page: string;
  page: string;
  discussionId: string;
  order: "asc" | "desc";
  authorId: string;
}

export const createDiscussion = async (
  dto: Pick<Discussion, "title" | "content">
) => {
  try {
    const response = await axiosInstance.post("discussions", {
      title: dto.title,
      content: dto.content ? dto.content : "",
    });

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
export const updateDiscussion = async (
  id: string,
  dto: Partial<Discussion>
) => {
  try {
    const response = await axiosInstance.put(`discussions/${id}`, {
      ...dto,
    });
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
export const deleteDiscussion = async (id: string) => {
  try {
    const res = await axiosInstance.delete("discussions/" + id);
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

export const fetchDiscussions = async ({
  per_page = "10",
  page = "1",
  search = "",
  sortBy = "title",
  order = "asc",
  authorId = "",
  isVeriefied = "approved",
}: DiscussionParameters) => {
  try {
    const res = await axiosInstance.get(
      `discussions?per_page=${per_page}&page=${page}&sortBy=${sortBy}&order=${order}&author-id=${authorId}&search=${search}&isVeriefied=${isVeriefied}`
    );
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
export const fetchDiscussionById = async (id: string) => {
  try {
    const res = await axiosInstance.get(`discussions/${id}`);
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

export const createOpinion = async (dto: {
  discussionId: string;
  content: string;
}) => {
  try {
    const response = await axiosInstance.post("opinions", {
      ...dto,
    });

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
export const updateOpinion = async (dto: Partial<Opinion>) => {
  try {
    const response = await axiosInstance.put(`opinions/${dto.id}`, {
      ...dto,
    });
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
export const deleteOpinion = async (id: string) => {
  try {
    const res = await axiosInstance.delete("opinions/" + id);
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

export const fetchOpinions = async ({
  per_page = "10",
  page = "1",
  discussionId = "",
  order = "asc",
  authorId = "",
}: OpinionParameters) => {
  try {
    const res = await axiosInstance.get(
      `opinions?per_page=${per_page}&page=${page}&discussion-id=${discussionId}&order=${order}&author-id=${authorId}`
    );
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
export const fetchOpinionById = async (id: string) => {
  try {
    const res = await axiosInstance.get(`opinions/${id}`);
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

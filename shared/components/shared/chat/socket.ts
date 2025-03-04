import { io } from "socket.io-client";

const SOCKET_URL = process.env.NEXT_PUBLIC_API_URL?.replace("api/", "chat");

export const socket = io(SOCKET_URL, {
  withCredentials: true,
  autoConnect: false,
});

"use client";
import useSWR from "swr";
import { toast } from "react-toastify";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export function Messages() {
  const { data: messages, error } = useSWR("/api/signature", fetcher);
  if (error) {
    toast.error("An Error Occurred! Please try again later.");
    return <p>Error</p>;
  }

  if (!messages) {
    return (
      <ul className="pb-6">
        {Array.from(Array(10).keys()).map((i) => (
          <li key={i} className="font-normal tracking-tight p-1">
            <p className="h-6 animate-pulse w-1/2 bg-gray-700 rounded"></p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="pb-6">
      {messages.map((message: any) => (
        <li key={message.id} className="font-normal tracking-tight pb-2">
          <span className="font-semibold">
            {message.user.name || "Anonymous"}
            {": "} &nbsp;
          </span>
          <span>{message.sign}</span>
        </li>
      ))}
    </ul>
  );
}

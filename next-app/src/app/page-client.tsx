/// This is the client equivalent of `page.tsx`
/// We call the server-side rendering stuff in page.tsx for
/// hydrating React-Query.

"use client";

import { getUser } from "@/services/getUser";
import { getUsers } from "@/services/getUsers";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [userId, setUserId] = useState("1");

  const usersQuery = useQuery({ queryKey: ["users"], queryFn: getUsers });

  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: async (c) => {
      try {
        const id = parseInt(userId);

        return getUser(id);
      } catch (e) {
        return null;
      }
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-x-2 items-center">
        <h2>Users (This is hydrated)</h2>
        <button
          onClick={() => usersQuery.refetch()}
          className="rounded border p-2 flex gap-x-1"
        >
          {usersQuery.isFetching && (
            <span className="animate-spin block">💫</span>
          )}
          <span>Refetch</span>
        </button>
      </div>
      <pre>{JSON.stringify(usersQuery.data ?? {})}</pre>

      <div className="flex gap-x-2 items-center">
        <h2>User</h2>
        <input
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border w-10 p-1"
        />
        <button
          onClick={() => userQuery.refetch()}
          className="rounded border p-2 flex gap-x-1"
        >
          {userQuery.isFetching && (
            <span className="animate-spin block">💫</span>
          )}
          <span>Refetch</span>
        </button>
      </div>
      <pre>{JSON.stringify(userQuery.data ?? {})}</pre>
    </main>
  );
}

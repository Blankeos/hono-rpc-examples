import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getUsers } from "@/services/getUsers";
import { getUser } from "@/services/getUser";
import { InferGetServerSidePropsType } from "next";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  const query = await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
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

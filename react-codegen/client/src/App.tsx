import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./services/getUsers";
import { getUser } from "./services/getUser";
import { useState } from "react";

function App() {
  const [userId, setUserId] = useState("1");

  const usersQuery = useQuery({ queryKey: ["users"], queryFn: getUsers });

  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
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
      <div className="bg-green-500 h-20 flex items-center p-5 gap-x-5">
        <div className="rounded-full w-20 h-20 bg-white" />
        <div className="text-white">{userQuery?.data?.name}</div>
        <div className="text-white">{userQuery?.data?.age}</div>
      </div>
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

export default App;

import { hc } from "@/lib/honoClient";

export async function getUser(id: number) {
  const res = await hc.users[":id"].$get({
    param: {
      id: id.toString(),
    },
  });

  if (res.ok) {
    const data = await res.json();

    return data;
  }

  return null;
}

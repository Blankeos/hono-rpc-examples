import { hc } from "@/lib/honoClient";

export async function getUsers() {
  const res = await hc.users.$get();

  if (res.ok) {
    const data = await res.json();

    return data;
  }

  return null;
}

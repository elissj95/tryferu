import { getSession } from "@/actions/sessions/get-session";

export default async function Page({
  params,
}: {
  params: { sessionId: string };
}) {
  const session = await getSession(params.sessionId);

  return <>{session?.spot_id}</>;
}

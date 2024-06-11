import { getAllSessions } from "@/actions/sessions/get-all-sessions";
import { getAllSpots } from "@/actions/spots/get-all-spots";
import { NewSessionDialog } from "@/features/sessions/components/new-session-dialog";
import { SessionCard } from "@/features/sessions/components/session-card";

export default async function Page() {
  const sessions = await getAllSessions();
  const spots = await getAllSpots();

  return (
    <>
      <div className="flex justify-between items-center">
        <h1>Sessions</h1>
        <NewSessionDialog spots={spots} />
      </div>
      <ul>
        {sessions?.map((session) => (
          <SessionCard session={session} key={session.id} />
        ))}
      </ul>
    </>
  );
}

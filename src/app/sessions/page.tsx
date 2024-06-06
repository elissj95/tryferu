import { getAllSessions } from "@/actions/sessions/get-all-sessions";
import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";

export default async function Page() {
  const sessions = await getAllSessions();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Content>
        <h1>Sessions</h1>
        <ul>
          {sessions?.map((session) => (
            <li key={session.id}>{session.date.toString()}</li>
          ))}
        </ul>
      </Content>
    </div>
  );
}

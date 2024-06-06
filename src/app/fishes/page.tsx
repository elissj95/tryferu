import { getAllFishes } from "@/actions/fishes/get-all-fishes";
import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";

export default async function Page() {
  const fishes = await getAllFishes();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Content>
        <h1>Fishes</h1>
        <ul>
          {fishes?.map((fish) => (
            <li key={fish.id}>{fish.name}</li>
          ))}
        </ul>
      </Content>
    </div>
  );
}

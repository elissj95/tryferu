import { getAllSpecies } from "@/actions/species/get-all-species";
import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";
import { NewSpeciesDialog } from "@/features/species/components/new-species-dialog";

export default async function Page() {
  const species = await getAllSpecies();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Content>
        <div className="flex justify-between items-center">
          <h1>Fishes</h1>
          <NewSpeciesDialog />
        </div>
        <ul className="flex flex-wrap gap-2 pt-2 max-w-[1440px]">
          {species?.map((fish) => (
            <div
              className="rounded overflow-hidden shadow-lg bg-white flex-grow"
              key={fish.id + "_species_row"}
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{fish.commonName}</div>
                <p className="text-gray-700 text-base mb-2">
                  <strong>Species (Latin name):</strong> {fish.species}
                </p>
                <p className="text-gray-700 text-base mb-2">
                  <strong>Common Name:</strong> {fish.commonName}
                </p>
                <p className="text-gray-700 text-base mb-2">
                  <strong>Family:</strong> {fish.family}
                </p>
                <p className="text-gray-700 text-base mb-2">
                  <strong>Description:</strong> {fish.description}
                </p>
                <p className="text-gray-700 text-base mb-2">
                  <strong>Habitat:</strong> {fish.habitat}
                </p>
              </div>
            </div>
          ))}
        </ul>
      </Content>
    </div>
  );
}

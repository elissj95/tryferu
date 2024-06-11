import { Spinner } from "@radix-ui/themes";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner loading />
    </div>
  );
}

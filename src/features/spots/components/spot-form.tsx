import { Dialog } from "@/components/dialog";
import { ErrorMessage } from "@/components/form/error-message";
import { Field } from "@/components/form/field";
import { Input } from "@/components/form/input";
import { Label } from "@/components/form/label";
import { MapComponent } from "@/components/map/components/map-component";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon, SewingPinIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SpotFormData, spotSchema } from "../types/spot-schema";

export const SpotForm = ({
  formAction,
  defaultSpot,
}: {
  formAction: (data: SpotFormData) => void;
  defaultSpot?: SpotFormData;
}) => {
  const [markers, setMarkers] = useState<{ lat: number; lng: number }[]>([]);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<SpotFormData>({
    resolver: zodResolver(spotSchema),
    defaultValues: defaultSpot
      ? {
          description: defaultSpot.description,
          type: defaultSpot.type,
          name: defaultSpot.name,
          coordinates: defaultSpot.coordinates,
        }
      : {},
  });

  useEffect(() => {
    if (markers[0])
      setValue("coordinates", `${markers[0].lat}, ${markers[0].lng}`);
  }, [markers, setValue]);

  return (
    <form onSubmit={handleSubmit(formAction)} className="flex flex-col gap-4">
      <Field>
        <Label>Name</Label>
        <Input {...register("name")} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </Field>
      <Field>
        <Label>Location</Label>
        <div className="flex gap-2 flex-col">
          <Input {...register("coordinates")} />
          <ErrorMessage>{errors.coordinates?.message}</ErrorMessage>
          <div className="flex justify-end">
            <Dialog
              title={"Choose location"}
              trigger={
                <Button variant={"outline"}>
                  <SewingPinIcon />
                  Choose Location
                </Button>
              }
            >
              <MapComponent
                limit={1}
                markers={markers}
                setMarkers={setMarkers}
              />
            </Dialog>
          </div>
        </div>
      </Field>
      <Field>
        <Label htmlFor="type">Type</Label>
        <Input {...register("type")} />
        <ErrorMessage>{errors.type?.message}</ErrorMessage>
      </Field>
      <Field>
        <Label htmlFor="type">Description</Label>
        <Input {...register("description")} />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
      </Field>
      <div className="flex justify-end">
        <Button type="submit" variant="solid">
          <PlusIcon />
          Create
        </Button>
      </div>
    </form>
  );
};

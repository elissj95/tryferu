"use client";

import { addSpot } from "@/actions/spots/add-spot";
import { Button } from "@/components/button";
import { Dialog } from "@/components/dialog";
import { ErrorMessage } from "@/components/form/error-message";
import { Field } from "@/components/form/field";
import { Input } from "@/components/form/input";
import { Label } from "@/components/form/label";
import { MapComponent } from "@/components/map/components/map-component";
import { DatabaseSchema } from "@/store/db";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon, SewingPinIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const spotSchema = z.object({
  name: z.string().min(1, "Name is required"),
  coordinates: z.string().min(1, "Location is required"),
  description: z.string().nullable(),
  type: z.string().nullable(),
});

type FormData = z.infer<typeof spotSchema>;

export const NewSpotDialog = ({
  defaultSpot,
}: {
  defaultSpot?: DatabaseSchema["spots"];
}) => {
  const [markers, setMarkers] = useState<{ lat: number; lng: number }[]>([]);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
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

  const createSpot: SubmitHandler<FormData> = async (formData: FormData) => {
    try {
      await addSpot(formData);
      toast.success("Spot created successfully");
    } catch {
      toast.error("There was an issue creating the spot");
    }
  };

  useEffect(() => {
    if (markers[0])
      setValue("coordinates", `${markers[0].lat}, ${markers[0].lng}`);
  }, [markers, setValue]);

  console.log(errors);

  return (
    <Dialog
      title="Create New Spot"
      trigger={
        <Button variant={"outline"}>
          <PlusIcon />
          Add new spot
        </Button>
      }
    >
      <form onSubmit={handleSubmit(createSpot)} className="flex flex-col gap-4">
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
    </Dialog>
  );
};

import { Button } from "@/components/button";
import { ErrorMessage } from "@/components/form/error-message";
import { Field } from "@/components/form/field";
import { Input } from "@/components/form/input";
import { Label } from "@/components/form/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { SpeciesFormData, speciesSchema } from "../types/species-schema";

export const SpeciesForm = ({
  isUpdate,
  formAction,
  defaultValues,
}: {
  isUpdate?: boolean;
  formAction: (data: SpeciesFormData) => void;
  defaultValues?: SpeciesFormData;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SpeciesFormData>({
    resolver: zodResolver(speciesSchema),
    defaultValues: defaultValues
      ? {
          ...defaultValues,
        }
      : {},
  });

  return (
    <form onSubmit={handleSubmit(formAction)} className="flex flex-col gap-4">
      {Object.keys(speciesSchema.shape).map((k) => {
        const key = k as keyof SpeciesFormData;
        return (
          <Field key={key}>
            <Label>{key}</Label>
            <Input {...register(key)} />
            <ErrorMessage>{errors[key]?.message}</ErrorMessage>
          </Field>
        );
      })}
      <div className="flex justify-end">
        <Button type="submit" variant="solid">
          {isUpdate ? (
            <>Update</>
          ) : (
            <>
              <PlusIcon />
              Create
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

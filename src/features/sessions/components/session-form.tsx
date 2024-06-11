import { Button } from "@/components/button";
import { ErrorMessage } from "@/components/form/error-message";
import { Field } from "@/components/form/field";
import { Input } from "@/components/form/input";
import { Label } from "@/components/form/label";
import { Select } from "@/components/select";
import { TDatabaseSchema } from "@/store/db";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "@radix-ui/react-icons";
import { FormProvider, useForm } from "react-hook-form";
import { ZodNumber } from "zod";
import { SessionFormData, sessionSchema } from "../types/session-schema";

export const SessionForm = ({
  isUpdate,
  formAction,
  defaultValues,
  spots,
}: {
  isUpdate?: boolean;
  formAction: (data: SessionFormData) => void;
  defaultValues?: SessionFormData;
  spots?: TDatabaseSchema["spots"][];
}) => {
  const methods = useForm<SessionFormData>({
    resolver: zodResolver(sessionSchema),
    defaultValues: defaultValues
      ? {
          ...defaultValues,
        }
      : {},
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(formAction)} className="flex flex-col gap-4">
        {Object.keys(sessionSchema.shape).map((k) => {
          const key = k as keyof SessionFormData;
          const field = sessionSchema.shape[key];

          const input = () => {
            if (field instanceof ZodNumber) {
              return <Input type="number" {...register(key)} />;
            }
            if (key === "spot_id") {
              return (
                <Select
                  key={key}
                  options={
                    spots?.map((s) => ({ name: s.name, value: s.id })) ?? []
                  }
                  {...register(key)}
                />
              );
            }

            if (key === "date") return <Input type="date" {...register(key)} />;

            if (key === "time") return <Input type="time" {...register(key)} />;

            return <Input {...register(key)} />;
          };

          return (
            <Field key={key}>
              <Label>{key}</Label>
              {input()}
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
    </FormProvider>
  );
};

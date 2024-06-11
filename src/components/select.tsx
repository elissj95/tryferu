"use client";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as RSelect from "@radix-ui/react-select";
import { useController, useFormContext } from "react-hook-form";

export const Select = ({
  name,
  options,
}: {
  name: string;
  options: { name: string; value: string }[];
}) => {
  const { control } = useFormContext();
  const {
    field: { onChange, value, ref },
  } = useController({
    name,
    control,
  });

  return (
    <RSelect.Root value={value} onValueChange={onChange}>
      <RSelect.Trigger
        ref={ref}
        className="flex items-center px-3 py-2 border border-gray-300 rounded bg-white justify-between h-10"
      >
        <RSelect.Value className="mr-2" />
        <RSelect.Icon className="text-gray-600">
          <ChevronDownIcon />
        </RSelect.Icon>
      </RSelect.Trigger>

      <RSelect.Portal>
        <RSelect.Content className="bg-white border border-gray-300 rounded shadow-lg z-50 ">
          <RSelect.ScrollUpButton className="flex items-center justify-center p-1 text-gray-600">
            ▲
          </RSelect.ScrollUpButton>
          <RSelect.Viewport className="py-1">
            {options.map((option) => (
              <RSelect.Item
                key={option.value + "_select_item"}
                value={option.value}
                className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <RSelect.ItemText className="flex-1">
                  {option.name}
                </RSelect.ItemText>
              </RSelect.Item>
            ))}
          </RSelect.Viewport>
          <RSelect.ScrollDownButton className="flex items-center justify-center p-1 text-gray-600">
            ▼
          </RSelect.ScrollDownButton>
          <RSelect.Arrow className="text-gray-600" />
        </RSelect.Content>
      </RSelect.Portal>
    </RSelect.Root>
  );
};

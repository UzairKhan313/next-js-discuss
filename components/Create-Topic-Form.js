"use client";
import { useFormState } from "react-dom";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

import * as actions from "@/actions";
import FormButton from "@/components/common/Form-Button";

const CreatTopicForm = () => {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });

  return (
    <Popover placement="left" className="mt-8">
      <PopoverTrigger>
        <Button color="primary">Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg font-bold">Create Topic</h3>
            <Input
              label="Name"
              name="name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(", ")}
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your topic"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}
            />

            {formState.errors._form && (
              <div className="p-2 bg-red-300 border border-red-600 rounded-lg">
                {formState.errors._form?.join(", ")}{" "}
              </div>
            )}
            <FormButton>Create</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default CreatTopicForm;

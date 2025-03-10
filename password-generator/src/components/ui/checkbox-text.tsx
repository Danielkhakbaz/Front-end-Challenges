"use client";

import { Checkbox } from "@/components/ui/checkbox";

type CheckboxWithTextProps = {
  id: string;
  title: string;
  description?: string;
};

export function CheckboxWithText({
  id,
  title,
  description,
}: CheckboxWithTextProps) {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id={id} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={id}
          className="leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {title}
        </label>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
    </div>
  );
}

"use client";

import Select from "@/components/ui/Select";
import { useState } from "react";
import type { ISelectOption } from "@/components/ui/Select";

const options: ISelectOption[] = [
  { label: "Account", value: "Account" },
  { label: "Wallet", value: "Wallet" },
  { label: "Bonuses", value: "Bonuses" },
  { label: "Bets", value: "Bets" },
  { label: "History", value: "History" }
];

export default function ChooseItem() {
  const [selectedValue, setSelectedValue] = useState<string>("Account");

  return (
    <Select
      field="dropdown"
      props={{
        required: true,
        placeholder: "Choose...",
        value: selectedValue,
      }}
      onSetValue={setSelectedValue}
      options={options}
    />
  );
};

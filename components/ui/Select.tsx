"use client";

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { useOutsideClick } from "@/hooks/useOutsideClick";

import Image from "next/image";
import ArrowRight from "../../public/arrow-right.svg";

export interface ISelectOption {
  label: string | number;
  value: string | number;
}

const Select = ({
  field,
  props,
  options,
  onSetValue
} : {
  field: string;
  props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  options: ISelectOption[];
  onSetValue: any;
}): React.ReactElement => {
  const [optionsLength] = useState<number>(options.length);
  const [value, setValue] = useState<string | number>(props.value as string | number);
  const [optionsShow, setOptionsShow] = useState<boolean>(false);

  const ref = useOutsideClick(() => setOptionsShow(false));

  return (
    <div className="w-full max-w-[240px] flex flex-col gap-x-1" ref={ref}>
      {props.id && props.name ? (
        <label htmlFor={props.id} className="text-sm black capitalize">
          {props.name || ""}
          {props.required ? (<sup className="text-xs text-red-800"> *</sup>) : null}
        </label>
      ) : null}

      <div className="relative w-full">
        <div className="w-full rounded-md bg-gradient-to-r from-tosca to-blue p-px flex justify-between items-center">
          <div className="bg-gray-black px-3 py-2 rounded-md w-full">
            <input
              {...props}
              type="text"
              value={value}
              readOnly={true}
              onClick={() => setOptionsShow(!optionsShow)}
              className={cn(
                `
                w-full text-[14px] uppercase text-option-text border-none outline-none bg-transparent cursor-pointer 
                placeholder:text-stone-400 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none
                `
              )}
            />
          </div>

          {optionsShow ? (
              <div className="absolute w-full top-[44px] left-0 rounded-md bg-gradient-to-r from-tosca to-blue p-px">
                <div
                  className={cn(`
                     bg-gray-black rounded-md max-h-[250px] overflow-y-auto 
                    flex flex-col z-10 cursor-pointer
                  `)}
                >
                  {options.map((option: ISelectOption, index: number) => (
                    <button
                      key={index}
                      type="button"
                      className={cn(
                        `
                        w-full text-left py-3 px-4 text-[14px] uppercase text-option-text 
                        transition-all duration-500 hover:bg-gray-black-hover flex justify-between 
                        items-center
                        `,
                        props.value === option.value || value === option.value ? "bg-gray-black-hover" : "bg-transparent",
                        index + 1 !== optionsLength && "border-b border-gray-700"
                      )}
                      onClick={() => {
                        onSetValue(field, option.value);
                        setValue(option.value);
                        setOptionsShow(false);
                      }}
                    >
                      {option.label}
                      <Image
                        alt="arrow-right"
                        about="Arrow"
                        src={ArrowRight}
                        height={20}
                        width={20}
                        priority
                      />
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
        </div>
      </div>
    </div>
  );
};

export default Select;

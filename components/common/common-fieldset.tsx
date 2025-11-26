/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { Select, DatePicker } from "antd";
import {
  Controller,
  FieldValues,
  FieldPath,
  PathValue,
  UseControllerProps,
} from "react-hook-form";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import ErrorText from "./error-text";

type SelectMode = "single" | "multiple" | "tags";

interface Option {
  label: string;
  value: string | number;
}

interface CommonFieldsetProps<T extends FieldValues> {
  wrapperClass?: string;
  inputClass?: string;
  labelClass?: string;
  selectClass?: string;
  textareaClass?: string;
  innerWrapper?: string;
  label?: string;
  type?:
  | "text"
  | "password"
  | "email"
  | "number"
  | "textarea"
  | "select"
  | "date"
  | "datetime";
  placeholder?: string;
  register_as: FieldPath<T>;
  options?: Option[];
  errors?: Record<string, { message?: string }>;
  validationRules?: UseControllerProps<T>["rules"];
  readOnly?: boolean;
  /** Optional default value – must match the field type */
  defaultValue?: PathValue<T, FieldPath<T>> | undefined;
  control: UseControllerProps<T>["control"];
  selectMode?: SelectMode;
  icon?: React.ReactNode;
  disabled?: boolean;
  min?: string;
  max?: string;
}

const CommonFieldset = <T extends FieldValues>({
  wrapperClass,
  inputClass,
  labelClass,
  selectClass,
  textareaClass,
  innerWrapper,
  label = "",
  type = "text",
  placeholder = "",
  register_as,
  options = [],
  errors = {},
  validationRules = {},
  readOnly = false,
  defaultValue,
  control,
  selectMode = "single",
  icon,
  disabled = false,
  min,
  max,
}: CommonFieldsetProps<T>) => {
  const [show, setShow] = useState(false);
  const errorMessage = errors[register_as]?.message;

  const normalizeValue = (val: any): any => {
    if (selectMode === "multiple" || selectMode === "tags") {
      if (Array.isArray(val)) {
        return val.map((i) => (typeof i === "object" ? i.value : i));
      }
      return val ? [typeof val === "object" ? val.value : val] : [];
    }
    return typeof val === "object" ? val?.value : val;
  };

  const disableDate = (current: dayjs.Dayjs | null) => {
    if (!current) return false;
    const parse = (v?: string) =>
      v && dayjs(v, ["MM/DD/YYYY", "YYYY-MM-DD"], true).isValid()
        ? dayjs(v, ["MM/DD/YYYY", "YYYY-MM-DD"], true)
        : null;
    const minDate = parse(min);
    const maxDate = parse(max);
    return !!(minDate && current.isBefore(minDate, "day")) || !!(maxDate && current.isAfter(maxDate, "day"));
  };

  return (
    <fieldset
      className={cn(
        "w-full flex flex-col gap-1 sm:gap-2 justify-start text-base items-start text-black border-none ",
        wrapperClass
      )}
    >
      {label && (
        <label
          htmlFor={register_as}
          className={cn("capitalize font-medium text-base sm:text-lg", labelClass)}
        >
          {label}
        </label>
      )}

      <div
        className={cn(
          "w-full flex items-center gap-2 px-4 py-4 rounded-lg bg-white text-black border border-primary-border focus-within:border-primary transition-colors",
          innerWrapper
        )}
      >
        {icon && <div className="shrink-0 w-fit">{icon}</div>}

        {/* TEXTAREA */}
        {type === "textarea" ? (
          <Controller
            control={control}
            name={register_as}
            rules={validationRules}
            defaultValue={defaultValue}
            render={({ field }) => (
              <textarea
                {...field}
                value={field.value ?? ""}
                id={register_as}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}
                aria-label={label}
                className={cn(
                  "w-full border-none capitalize outline-none resize-none 2xs:min-h-48 min-h-32 placeholder:text-gray-300 placeholder:text-sm bg-transparent",
                  textareaClass
                )}
              />
            )}
          />
        ) : type === "select" ? (
          /* SELECT */
          <div className={cn("w-full", selectClass)}>
            <Controller
              control={control}
              name={register_as}
              rules={validationRules}
              defaultValue={defaultValue} // Let caller or useForm set correct default
              render={({ field }) => (
                <Select
                  {...field}
                  mode={selectMode !== "single" ? selectMode : undefined}
                  placeholder={placeholder}
                  options={options}
                  optionFilterProp="label"
                  disabled={disabled}
                  showSearch
                  allowClear
                  className="w-full bg-transparent border-none! capitalize outline-none!"
                  style={{ width: "100%" }}
                  value={
                    field.value === undefined ||
                      field.value === null ||
                      (Array.isArray(field.value) && field.value.length === 0)
                      ? undefined
                      : normalizeValue(field.value)
                  }
                  onChange={(val, option) => {
                    if (selectMode !== "single") {
                      field.onChange(val ?? []);
                    } else {
                      const v = Array.isArray(option) ? option[0]?.value : option?.value ?? val;
                      field.onChange(v ?? undefined);
                    }
                  }}
                />
              )}
            />
          </div>
        ) : type === "date" || type === "datetime" ? (
          /* DATE */

            <Controller
              control={control}
              name={register_as}
              rules={validationRules}
              defaultValue={defaultValue}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  className={cn(
                    "w-full p-0! bg-transparent border-none outline-none", ""
                  )}
                  placeholder={placeholder}
                  disabled={disabled}
                  format="MM/DD/YYYY"
                  showTime={type === "datetime"}
                  disabledDate={disableDate}
                  value={field.value ? dayjs(field.value, "MM/DD/YYYY") : null}
                  onChange={(date) => field.onChange(date ? date.format("MM/DD/YYYY") : null)}
                />
              )}
            />
        ) : (
          /* DEFAULT INPUT */
          <Controller
            control={control}
            name={register_as}
            rules={validationRules}
            defaultValue={defaultValue}
            render={({ field }) => (
              <input
                {...field}
                value={field.value ?? ""}
                type={type === "password" ? (show ? "text" : "password") : type}
                id={register_as}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}
                min={type === "number" ? min : undefined}
                max={type === "number" ? max : undefined}
                aria-label={label}
                className={cn(
                  "w-full border-none placeholder:text-gray-300 placeholder:text-sm outline-none bg-transparent",
                  inputClass
                )}
              />
            )}
          />
        )}

        {/* PASSWORD TOGGLE */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShow((p) => !p)}
            className="cursor-pointer text-gray-600 hover:text-black transition-colors"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <FaEye className="sm:text-2xl text-xl" /> : <FaEyeSlash className="sm:text-2xl text-xl" />}
          </button>
        )}
      </div>

      {errorMessage && <ErrorText error={errorMessage} />}
    </fieldset>
  );
};

export default CommonFieldset;
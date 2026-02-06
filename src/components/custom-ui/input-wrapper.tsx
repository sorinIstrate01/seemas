import { cn } from "@/lib/utils";

const InputWrapper = ({
  children,
  className,
  labelProps: {
    children: label,
    className: labelClassName,
    ...labelProps
  } = {},
  isOptional = false,
}: {
  children: React.ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  labelProps?: React.HTMLAttributes<HTMLLabelElement>;
  isOptional?: boolean;
}) => {
  return (
    <div className={cn("flex flex-col gap-1 w-full", className)}>
      <div className="flex items-center justify-between">
        <label
          {...labelProps}
          className={cn("text-body-s text-zinc-900", labelClassName)}
        >
          {label}
        </label>
        {isOptional && (
          <span className="text-body-s text-zinc-300">Optional</span>
        )}
      </div>
      {children}
    </div>
  );
};
export default InputWrapper;

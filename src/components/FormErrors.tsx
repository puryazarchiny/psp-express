// node_modules
import { ExclamationCircleIcon } from "@heroicons/react/16/solid";

// ################################################################
// # Props Type
// ################################################################

type FormErrorsProps = {
  type: "username" | "password" | "both" | "fetch" | null;
};

// ################################################################
// # Component
// ################################################################

export default function FormErrors({ type }: FormErrorsProps) {
  if (type === "username" || type === "password") {
    return (
      <div className="flex items-center gap-2">
        <ExclamationCircleIcon className="h-4 w-4 text-red-500" />
        <p className="text-red-500">Please fill out this field</p>
      </div>
    );
  }

  if (type === "fetch") {
    return (
      <p className="rounded border-2 border-red-500 bg-red-100 px-4 py-2 text-center text-red-500">
        Incorrect username or password
      </p>
    );
  }
}

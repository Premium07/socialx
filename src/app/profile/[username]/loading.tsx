import { Loader2 } from "lucide-react";

export default function loading() {
  return (
    <div className="w-full h-full flex items-center flex-col gap-5 justify-center">
      <Loader2 className="animate-spin size-10" />
      Getting your profile
    </div>
  );
}

import Link from "next/link";

export default function NotFound({
  searchParams,
}: {
  searchParams: { username?: string };
}) {
  return (
    <div className="w-full h-full flex items-center flex-col gap-5 justify-center">
      <h2>
        Username with{" "}
        {searchParams.username ? `"${searchParams.username}"` : ""} is not
        exist.
      </h2>
      <p>Could not find the requested user profile.</p>
      <Link href="/" className="bg-slate-800 text-white px-4 py-2 rounded-md">
        Return Home
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto text-center p-12">
      <h1 className="text-5xl font-semibold mb-2">Notes Home page</h1>
      <p className="text-slate-500">Sample home page.</p>
      <div className="my-6">
        <Link
          href="/notes"
          className="bg-orange-200 px-5 py-2 rounded shadow font-bold text-gray-600"
        >
          Notes Page
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link
        href="/plates"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className="mb-3 text-2xl font-semibold">
          Plate Stepper
          <span className="inline-block text-indigo-500 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
          A small first test of the usage of layout and animate presence
          popLayout mode.
        </p>
      </Link>
    </main>
  );
}

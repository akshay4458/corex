export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-neutral-950 text-white">
      <div className="text-center">
        <h1 className="text-7xl font-bold tracking-tight">
          Core<span className="text-blue-500">X</span>
        </h1>

        <p className="mt-6 text-xl text-neutral-400">
          Your Personal Server OS
        </p>

        <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">
          Enter CoreX
        </button>
      </div>
    </section>
  );
}
export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-neutral-800 bg-neutral-950 p-6 text-white">
      <h2 className="text-2xl font-bold">
        Core<span className="text-blue-500">X</span>
      </h2>

      <nav className="mt-10 space-y-4">
        <p className="text-neutral-400">🏠 Home</p>
        <p className="text-neutral-400">🎬 Movies</p>
        <p className="text-neutral-400">📺 TV Shows</p>
        <p className="text-neutral-400">🎵 Music</p>
        <p className="text-neutral-400">📂 Downloads</p>
        <p className="text-neutral-400">🖥 Server</p>
      </nav>
    </aside>
  );
}
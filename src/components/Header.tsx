export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">My Cinema</h1>
      <nav className="space-x-4">
        <a href="#" className="hover:text-yellow-400">Главная</a>
        <a href="#" className="hover:text-yellow-400">Фильмы</a>
        <a href="#" className="hover:text-yellow-400">Избранное</a>
      </nav>
    </header>
  );
}

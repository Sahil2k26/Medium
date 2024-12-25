const Header: React.FC = () => (
    <header className="bg-white shadow-md sticky top-0 z-50 rounded-xl">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center ">
        <h1 className="text-2xl font-bold text-gray-800 font-mono">Medium</h1>
        <nav>
          <ul className="flex space-x-6 text-gray-600">
            <li className="hover:text-gray-900"><a href="/">Home</a></li>
            <li className="hover:text-gray-900"><a href="/about">About</a></li>
            <li className="hover:text-gray-900"><a href="/cat">Categories</a></li>
            <li className="hover:text-gray-900"><a href="/login">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
  export default Header;
  
import Link from "next/link";
import { subjects } from "../data/subjects";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold hover:text-blue-200 transition-colors"
            >
              Sample Routing
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            {subjects.map((subject) => (
              <Link
                key={subject.slug}
                href={`/subjects/${subject.slug}`}
                className="hover:text-blue-200 transition-colors"
              >
                {subject.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

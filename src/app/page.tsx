import Link from 'next/link';
import { subjects } from '@/data/subjects';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Welcome to Sample Routing
      </h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore different subjects by clicking on the navigation links above or the subject cards below.
        This demonstrates Next.js App Router with dynamic routing.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {subjects.map((subject) => (
          <Link
            key={subject.slug}
            href={`/subjects/${subject.slug}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 block"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {subject.name}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {subject.description}
            </p>
            <div className="mt-4 text-blue-600 font-medium text-sm">
              Learn more →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

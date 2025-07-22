import Link from "next/link";
import { notFound } from "next/navigation";
import { subjects } from "../../../data/subjects";

export async function generateStaticParams() {
  return subjects.map((subject) => ({
    slug: subject.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subject = subjects.find((s) => s.slug === slug);

  if (!subject) {
    return {
      title: "Subject Not Found",
    };
  }

  return {
    title: `${subject.name} - Sample Routing`,
    description: subject.description,
  };
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subject = subjects.find((s) => s.slug === slug);

  if (!subject) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {subject.name}
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {subject.description}
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Subject Slug:</strong> {subject.slug}
                </p>
                <p className="text-sm text-blue-700 mt-1">
                  This page was statically generated using App Router with
                  generateStaticParams.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            About This Subject
          </h2>
          <p className="text-gray-700 mb-6">
            This is a sample subject page that demonstrates dynamic routing in
            Next.js App Router. The page is statically generated at build time,
            which means it loads quickly and works well with SEO. You can
            navigate to this page by:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Clicking the navigation links in the header</li>
            <li>Clicking the subject cards on the home page</li>
            <li>
              Directly visiting the URL: <code>/subjects/{subject.slug}</code>
            </li>
            <li>Opening the link in a new tab (Ctrl+Click or right-click)</li>
          </ul>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Technical Details
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Generated using Next.js App Router</li>
              <li>• Statically generated with generateStaticParams</li>
              <li>• Dynamic metadata generation</li>
              <li>• TypeScript for type safety</li>
              <li>• Tailwind CSS for styling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

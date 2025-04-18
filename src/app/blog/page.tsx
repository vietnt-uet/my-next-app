import Navigation from '@/components/Navigation';
import { getEntries } from '@/lib/contentful';

export default async function Blog() {
  const posts = await getEntries('blogPost');

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <article key={post.sys.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.fields.title}</h2>
                <p className="text-gray-600 mb-4">{post.fields.excerpt}</p>
                <div className="text-sm text-gray-500">
                  {new Date(post.sys.createdAt).toLocaleDateString()}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

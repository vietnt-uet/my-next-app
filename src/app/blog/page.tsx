import Navigation from '@/components/Navigation';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn the basics of Next.js and how to build your first application.',
    date: '2025-04-18'
  },
  {
    id: 2,
    title: 'The Power of React Components',
    excerpt: 'Discover how to create reusable and maintainable React components.',
    date: '2025-04-17'
  },
  {
    id: 3,
    title: 'Styling with Tailwind CSS',
    excerpt: 'Master the art of styling your applications with Tailwind CSS.',
    date: '2025-04-16'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
          <p className="text-xl text-gray-600 mb-8">
            We create amazing digital experiences
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">Pushing boundaries with creative solutions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-600">Delivering excellence in every project</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <p className="text-gray-600">Years of industry expertise</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

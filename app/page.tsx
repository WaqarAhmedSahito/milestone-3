import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Header Section */}
      <div className="text-center max-w-4xl">
        <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-8">
          The CV that gets the job... done
        </p>
        <p className="text-xl sm:text-2xl text-gray-600 mb-4">
          Build a new CV or improve your existing one with step-by-step expert guidance.
        </p>
        <p className="text-lg sm:text-xl text-gray-500">
          If a sheet of paper represents your entire work life, personality, and skills, it better be a pretty amazing piece of paper — Let Zety do the heavy lifting.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="mt-12">
        <Link href="/create-cv">
         
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg sm:text-2xl rounded-lg shadow-lg transition-all duration-300 ease-in-out">
              Create your CV
            </button>
        
        </Link>
      </div>
    </div>
  );
}

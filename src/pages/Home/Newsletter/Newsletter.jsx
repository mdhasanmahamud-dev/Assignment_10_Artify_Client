import React from "react";

const Newsletter = () => {
  return (
    <div className="py-20 bg-slate-200 dark:bg-zinc-900">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Get the latest updates, tutorials, and curated digital artworks delivered directly to your inbox.
        </p>

        {/* Newsletter Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>

        {/* Optional small note */}
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
          We respect your privacy. No spam ever.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;

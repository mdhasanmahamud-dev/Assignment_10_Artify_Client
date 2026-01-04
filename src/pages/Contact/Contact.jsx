import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-zinc-950 text-slate-800 dark:text-zinc-200 md:pb-10">
      {/* Header */}
      <section className="py-10 px-6 text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Contact Us
        </h1>
        <p className="max-w-xl mx-auto text-slate-600 dark:text-zinc-400">
          Have a question, feedback, or partnership idea? We’d love to hear from
          you.
        </p>
      </section>

      {/* Content */}
      <section className="container max-w-7xl px-6 mx-auto grid grid-cols-12 gap-5">
        {/* Contact Info */}
        <div className="space-y-8 col-span-12 md:col-span-4 lg:col-span-3">
          <div className="flex items-start gap-4">
            <FiMail className="text-2xl text-indigo-600 dark:text-indigo-500" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-slate-600 dark:text-zinc-400">
                support@artify.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiPhone className="text-2xl text-indigo-600 dark:text-indigo-500" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-slate-600 dark:text-zinc-400">
                +880 1234 567 890
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiMapPin className="text-2xl text-indigo-600 dark:text-indigo-500" />
            <div>
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="text-slate-600 dark:text-zinc-400">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-slate-50 col-span-12 md:col-span-8 lg:col-span-9 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold
      bg-indigo-600 text-white dark:bg-indigo-500 dark:text-zinc-900
      hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;

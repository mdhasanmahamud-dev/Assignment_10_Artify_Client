import React from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { RiGalleryLine, RiFocus2Line, RiTeamLine } from "react-icons/ri";

const About = () => {
  return (
    <div className="bg-white dark:bg-zinc-950 text-slate-800 dark:text-zinc-200 min-h-screen">
      {/* 1. Hero */}
      <section className="pt-20 pb-14 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Empowering{" "}
            <span className="text-indigo-600 dark:text-indigo-500">
              Creators
            </span>{" "}
            Worldwide
          </h1>
          <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            ARTIFY is a modern art platform where artists share their
            creativity, build digital galleries, and connect with a strong
            creative community.
          </p>
        </div>
      </section>

      {/* 2. Vision */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-zinc-800 bg-slate-100 dark:bg-zinc-900">
            <img
              src="https://i.ibb.co.com/bjtvjDLq/leonardo-vargas-i9q-UHo-O5-RX0-unsplash.jpg"
              alt="Art Experience"
              className="w-full h-[380px] object-cover opacity-90"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              Our Mission
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              ARTIFY is built to provide artists with a clean, fast, and
              reliable digital gallery—where technology stays in the background
              and creativity takes the spotlight.
            </p>

            <ul className="space-y-3">
              {[
                "Beautiful presentation of creative works",
                "Simple and intuitive user experience",
                "Community-driven connections",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-700 dark:text-zinc-300"
                >
                  <FiCheckCircle className="text-indigo-600 dark:text-indigo-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Core Features */}
      <section className="py-20 bg-slate-50 dark:bg-zinc-900/40 border-y border-slate-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <Feature
            icon={<RiGalleryLine />}
            title="Digital Gallery"
            text="Showcase your artworks in a clean and professional gallery layout."
          />
          <Feature
            icon={<RiTeamLine />}
            title="Creative Community"
            text="Connect with other artists and grow your creative network."
          />
          <Feature
            icon={<RiFocus2Line />}
            title="Reliable Technology"
            text="Built with React, Firebase, and MongoDB for speed and security."
          />
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-6">
          Start Your Creative Journey
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
          Join ARTIFY and bring your artwork to a global audience.
        </p>

        <button
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold
          bg-slate-900 text-white dark:bg-white dark:text-zinc-900
          hover:bg-indigo-600 dark:hover:bg-indigo-500 transition shadow-md"
        >
          Get Started <FiArrowRight />
        </button>
      </section>
    </div>
  );
};

const Feature = ({ icon, title, text }) => {
  return (
    <div className="bg-white dark:bg-zinc-950 rounded-2xl p-8 border border-slate-200 dark:border-zinc-800 hover:border-indigo-500 transition">
      <div className="text-4xl text-indigo-600 dark:text-indigo-500 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default About;

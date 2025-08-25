import React from "react";
import Particles from "react-tsparticles";
import MethodCard from "./components/MethodCard";

const METHODS = [
  {
    name: "Splunk",
    link: "https://app.splunk.gg/u/exmadeGG",
    desc: ["Not dualhooked", "Fast login", "No captcha"],
  },
  {
    name: "Injuries",
    link: "https://www.logged.tg/auth/exmade",
    desc: ["Not dualhooked", "Fast login", "No captcha"],
  },
  {
    name: "Cookie Bypasser",
    link: "https://app.splunk.gg/u/exmadeGG",
    desc: ["Safe.", "Not dualhooked.", "Legit Cookie Bypasser"],
  },
  {
    name: "Hyperlink Gen",
    link: "https://dsprs.vercel.app/hyperlink",
    desc: ["Safe.", "Virus Safe.", "No cookie."],
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Pink particles background */}
      <Particles
        options={{
          background: { color: "#0a0a0a" },
          particles: {
            number: { value: 80 },
            color: { value: "#ff4ddb" },
            links: { enable: true, color: "#ff4ddb", opacity: 0.5 },
            move: { enable: true, speed: 2 },
            size: { value: 3 },
            opacity: { value: 0.6 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <h1 className="text-5xl font-extrabold text-pink-400 mb-12 animate-pulse">
        🚀 Exmade Methods
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {METHODS.map((m, i) => (
          <MethodCard key={i} {...m} />
        ))}
      </div>
    </div>
  );
}

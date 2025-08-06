"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    interface MousePosition {
      x: number;
      y: number;
    }

    interface MouseEventWithClient extends MouseEvent {
      clientX: number;
      clientY: number;
    }

    const handleMouseMove = (e: MouseEventWithClient): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    { icon: "✍️", text: "Smart word tracking" },
    { icon: "🎯", text: "Habit building" },
    { icon: "📈", text: "Progress insights" },
    { icon: "🎨", text: "Beautiful interface" },
  ];

  return (
    <>
      {/* Import unique serif font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Crimson+Text:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <div className="h-screen w-full relative overflow-hidden bg-gradient-to-br from-[#fdfaf6] via-[#fff9f0] to-[#fff7ea] px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating particles */}
          <div
            className="absolute w-2 h-2 bg-[#d4b896]/20 rounded-full animate-pulse"
            style={{
              left: `${20 + mousePosition.x * 0.01}%`,
              top: `${30 + mousePosition.y * 0.01}%`,
              animation: "float 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-1 h-1 bg-[#c49b7a]/30 rounded-full"
            style={{
              left: `${70 - mousePosition.x * 0.008}%`,
              top: `${20 + mousePosition.y * 0.005}%`,
              animation: "float 8s ease-in-out infinite reverse",
            }}
          />
          <div
            className="absolute w-3 h-3 bg-[#e8d5b7]/15 rounded-full"
            style={{
              left: `${85 + mousePosition.x * 0.005}%`,
              top: `${60 - mousePosition.y * 0.008}%`,
              animation: "float 7s ease-in-out infinite",
            }}
          />

          {/* Subtle gradient orbs */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#f4e6d3]/10 to-[#e8d5b7]/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-l from-[#d4b896]/8 to-[#c49b7a]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Main container with horizontal layout */}
        <div
          className={`flex flex-row items-center justify-between min-h-screen w-full max-w-5xl mx-auto py-12 px-4 relative z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left: Text content */}
          <div className="max-w-lg space-y-6">
            {/* Morrison title on top left */}
            <div className="relative">
              <span className="text-5xl font-alma font-bold tracking-tight text-[#3a2c1a] relative">
                Morrison
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4b896] to-transparent rounded-full" />
              </span>
              <p className="text-[#8b7355] font-alma text-sm font-medium tracking-wide uppercase mt-1">
                Writing companion
              </p>
            </div>

            <h1 className="text-3xl font-alma font-bold bg-gradient-to-r from-[#3a2c1a] via-[#4a3424] to-[#3a2c1a] bg-clip-text text-transparent leading-tight">
              Smarter writing starts here.
            </h1>

            <p className="text-[#a68a64] font-alma text-base leading-relaxed">
              Track your words. Build your habit. Morrison makes writing{" "}
              <span className="font-semibold text-[#8b7355]">simple</span>,{" "}
              <span className="font-semibold text-[#8b7355]">focused</span>, and{" "}
              <span className="font-semibold text-[#8b7355]">rewarding</span>.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/40 backdrop-blur-sm rounded-xl px-3 py-2 border border-[#f0e6d3]/30 hover:bg-white/60 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <span className="text-lg">{feature.icon}</span>
                  <span className="text-xs font-alma font-medium text-[#3a2c1a]">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center space-x-2 text-[#8b7355] text-sm font-alma">
                <div className="w-2 h-2 bg-[#d4b896] rounded-full animate-pulse" />
                <span>Coming soon to App Store</span>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 text-xs text-[#8b7355] underline hover:text-[#a68a64]">
              <Link href="/privacy">Privacy Policy</Link>
              </div>

          </div>




          {/* Right: Screenshot with rich glow */}
          <div className="relative group max-w-xs">
            {/* Rich Glow behind the phone */}
            <div
              className="absolute inset-0 rounded-3xl transition-all duration-300 group-hover:scale-110"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(212, 184, 150, 0.6), rgba(212, 184, 150, 0.2) 60%, transparent 90%)",
                filter: "blur(60px)",
                transformOrigin: "center",
              }}
            />

            {/* Main screenshot */}
            <div className="relative transform group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/screenshot-best.png"
                alt="Morrison app screenshot"
                width={280}
                height={560}
                className="rounded-3xl shadow-2xl border border-[#f0e6d3]/50"
                priority
              />
              {/* Reflection effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-transparent to-white/10 pointer-events-none" />
            </div>

            {/* Floating feature badges */}
            <div className="absolute -left-8 top-16 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg border border-[#f0e6d3]/30 transform rotate-[-8deg] hover:rotate-0 transition-transform duration-300">
              <span className="text-xs font-alma font-semibold text-[#3a2c1a]">
                ✨ AI-Powered
              </span>
            </div>

            <div className="absolute -right-6 top-32 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg border border-[#f0e6d3]/30 transform rotate-[12deg] hover:rotate-0 transition-transform duration-300">
              <span className="text-xs font-alma font-semibold text-[#3a2c1a]">
                📊 Analytics
              </span>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-10px) rotate(5deg);
            }
          }
        `}</style>
      </div>
    </>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#fdfaf6] to-[#fff7ea] px-4 overflow-hidden">
      {/* App Logo and Name */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl font-alma font-bold tracking-tight text-[#3a2c1a]">Morrison</span>
        </div>
      </div>

      {/* Screenshot */}
      <div className="relative flex flex-col items-center mb-8">
        <div className="w-[320px] h-[640px] bg-black rounded-[3rem] shadow-2xl flex flex-col items-center justify-center border-8 border-[#3a2c1a] relative">
          <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col">
            <Image
              src="/screenshot.png"
              alt="Morrison app screenshot"
              width={304}
              height={624}
              className="w-full h-full object-cover rounded-[1.8rem]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Tagline and Subheading */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl font-alma font-bold text-[#3a2c1a] mb-3 tracking-tight">
          Smarter writing starts here.
        </h1>
        <p className="text-[#a68a64] font-alma text-lg max-w-md leading-relaxed">
          Track your words. Build your habit. Morrison makes writing simple, focused, and rewarding.
        </p>
      </div>
    </div>
  );
}

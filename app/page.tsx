import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 bg-custom">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start font-safira-march px-8 sm:px-32 max-w-7xl mx-auto">
        <img src="/imgs/background-home.jpg" alt="" className="bg-home" />
        <div className="home-content">
          <h4 className="home-hello animate-fadeInLeft">Hello there,</h4>
          <h1 className="home-welcome leading-none animate-fadeInUp">
            Welcome to Anaïs Zhang's Portfolio
          </h1>
        </div>
      </main>
    </div>
  );
}

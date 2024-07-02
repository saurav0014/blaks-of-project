import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="heroSection h-screen bg-center bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center items-center gap-4 pt-12">
        <p className="text-2xl text-gray-400">Smart Lighting Solutions</p>
        <p className="text-3xl xl:text-5xl text-gray-500 max-w-[600px] xl:max-w-[1000px] text-center leading-snug">
          Bringing a new perspective to street lights and the cities of
          tomorrow.
        </p>
        <Link
          href={"/login"}
          className="bg-[#3661FF] py-[12px] px-12 rounded text-white"
        >
          Login
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
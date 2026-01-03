export default function Home() {
  return (
    <section id="home" className="h-screen bg-home bg-cover flex relative">
      <img
        src="/background.webp"
        className="absolute inset-0 object-cover w-screen sm:w-full h-screen z-0"
        loading="lazy"
        alt="background"
      />
      <div className="relative flex flex-col text-white px-5 sm:px-20 lg:px-45 gap-2 top-50">
        <div className="flex flex-col sm:w-101 gap-2">
          <span className="text-white text-3xl sm:text-4xl font-bold">
            AWAKEN YOUR SENSES
          </span>
          <span className="text-[#956943] text-3xl sm:text-4xl font-bold">
            WITH EVERY SIP
          </span>
        </div>
        <span className="text-gray-200 bg-[#956943]/50 backdrop-blur-sm text-xl sm:text-lg sm:w-70 ">
          Experience the rich aroma and bold flavors of our freshly brewed
          coffee, crafted with passion to make every sip unforgettable.
        </span>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen bg-home bg-cover flex relative bg-[#6c3200]"
    >
      <img
        src="/background.webp"
        className="absolute inset-0 object-cover w-screen sm:w-full h-screen z-0 object-left opacity-90"
        loading="lazy"
        alt="background"
      />
      <div className="relative flex flex-col text-white px-5 sm:px-20 lg:px-45 gap-2 top-50">
        <h1 className="text-[#956943] text-3xl sm:text-4xl font-bold">
          AWAKEN YOUR SENSES
        </h1>
        <h2 className="text-white text-3xl sm:text-4xl font-bold">
          WITH EVERY SIP
        </h2>
        <span className="text-white bg-[#956943]/50 backdrop-blur-sm text-xl md:text-xl lg:text-lg lg:w-70 ">
          Experience the rich aroma and bold flavors of our freshly brewed
          coffee, crafted with passion to make every sip unforgettable.
        </span>
      </div>
    </section>
  );
}

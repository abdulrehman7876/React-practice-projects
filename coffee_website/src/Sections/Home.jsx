export default function Home() {
  return (
    <section id="home" className="h-screen bg-home bg-cover flex relative">
      <div className="w-screen xl:w-full h-screen absolute bg-[url('c.jpg')] bg-cover"></div>
      <div className="relative flex flex-col text-white px-5 xl:px-45 gap-2 top-50">
        <div className="flex flex-col w-85 sm:w-101 gap-2">
          <span className="text-white text-3xl sm:text-4xl font-bold">
            AWAKEN YOUR SENSES
          </span>
          <span className="text-[#956943] text-3xl sm:text-4xl font-bold">
            WITH EVERY SIP
          </span>
        </div>
        <span className="text-gray-200 text-lg w-85 sm:w-100 text-justify">
          Experience the rich aroma and bold flavors of our freshly brewed
          coffee, crafted with passion to make every sip unforgettable.
        </span>
      </div>
    </section>
  );
}

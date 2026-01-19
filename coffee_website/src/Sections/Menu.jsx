export default function Menu({ isContactOpen, setIsContactOpen }) {
  return (
    <section id="menu" className="h-full bg-black flex flex-col relative">
      {/* <div className="w-full h-50 sm:h-80 md:h-100 lg:h-140 bg-[url('/beans.webp')] bg-cover -scale-y-100 absolute pointer-events-none"></div> */}
      <img
        src="/beans.webp"
        alt="beans"
        loading="lazy"
        className="w-full h-30 sm:h-40 md:h-50 lg:h-70 bg-[url('/beans.webp')] object-cover -scale-y-100 absolute pointer-events-none"
      />
      <div className="flex w-full flex-col gap-4 items-center mt-25">
        <span className="text-3xl sm:text-5xl text-white">MENU</span>
        <span className="text-xl sm:text-3xl text-[#956943] mb-5">
          Your Daily Dose of Comfort
        </span>
      </div>
      <div className="px-5 sm:px-20 lg:px-45">
        <div className="grid grid-cols-[270px] sm:grid-cols-[repeat(auto-fill,minmax(190px,230px))] auto-rows-[350px] justify-center sm:justify-between lg:justify-between gap-15 mb-30">
          <div className="bg-[#956943] rounded-3xl flex flex-col items-center text-white">
            <div className="h-[170px] min-w-[190px] max-w-[270px] rounded-t-3xl flex justify-center overflow-hidden">
              <img
                loading="lazy"
                className="h-[170px] object-cover"
                src="/expresso.webp"
                alt="expresso"
              />
            </div>
            <span className="text-white text-2xl mt-2">Espresso</span>
            <span className="text-white text-sm mt-0.1 font-light text-center">
              Strong & bold shot
            </span>
            <span className="text-black text-xl mt-2 font-semibold text-center">
              RS:650
            </span>
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="bg-[#FFC470] px-4 py-1 pb-1.5 rounded-2xl mt-3 text-lg text-black font-semibold cursor-pointer hover:text-white hover:bg-black"
            >
              ORDER
            </button>
          </div>
          <div className="bg-[#956943] rounded-3xl flex flex-col items-center text-white">
            <div className="h-[170px] min-w-[190px] max-w-[270px] rounded-t-3xl flex justify-center overflow-hidden">
              <img
                loading="lazy"
                className="h-[170px] object-cover"
                src="/cappuccino.webp"
                alt="cappuccino"
              />
            </div>
            <span className="text-white text-2xl mt-2">Cappuccino</span>
            <span className="text-white text-sm mt-0.1 font-light text-center">
              Smooth, foamy delight
            </span>
            <span className="text-black text-xl mt-2 font-semibold text-center">
              RS:650
            </span>
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="bg-[#FFC470] px-4 py-1 pb-1.5 rounded-2xl mt-3 text-lg text-black font-semibold cursor-pointer hover:text-white hover:bg-black"
            >
              ORDER
            </button>
          </div>
          <div className="bg-[#956943] rounded-3xl flex flex-col items-center text-white">
            <div className="h-[170px] min-w-[190px] max-w-[270px] rounded-t-3xl flex justify-center overflow-hidden">
              <img
                loading="lazy"
                className="h-[170px] object-cover"
                src="/latte.webp"
                alt="latte"
              />
            </div>
            <span className="text-white text-2xl mt-2">Latte</span>
            <span className="text-white text-sm mt-0.1 font-light text-center">
              Creamy & rich flavor
            </span>
            <span className="text-black text-xl mt-2 font-semibold text-center">
              RS:650
            </span>
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="bg-[#FFC470] px-4 py-1 pb-1.5 rounded-2xl mt-3 text-lg text-black font-semibold cursor-pointer hover:text-white hover:bg-black"
            >
              ORDER
            </button>
          </div>
          <div className="bg-[#956943] rounded-3xl flex flex-col items-center text-white">
            <div className="h-[170px] min-w-[190px] max-w-[270px] rounded-t-3xl flex justify-center overflow-hidden">
              <img
                loading="lazy"
                className="h-[170px] object-cover"
                src="/mocha.webp"
                alt="mocha"
              />
            </div>
            <span className="text-white text-2xl mt-2">Mocha</span>
            <span className="text-white text-sm mt-0.1 font-light text-center">
              Espresso with chocolate twist
            </span>
            <span className="text-black text-xl mt-2 font-semibold text-center">
              RS:650
            </span>
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="bg-[#FFC470] px-4 py-1 pb-1.5 rounded-2xl mt-3 text-lg text-black font-semibold cursor-pointer hover:text-white hover:bg-black"
            >
              ORDER
            </button>
          </div>
          <div className="bg-[#956943] rounded-3xl flex flex-col items-center text-white">
            <div className="h-[170px] min-w-[190px] max-w-[270px] rounded-t-3xl flex justify-center overflow-hidden">
              <img
                loading="lazy"
                className="h-[200px] object-cover"
                src="/coldBrew.webp"
                alt="cold brew"
              />
            </div>
            <span className="text-white text-2xl mt-2">Cold Brew</span>
            <span className="text-white text-sm mt-0.1 font-light text-center">
              Refreshing & bold taste
            </span>
            <span className="text-black text-xl mt-2 font-semibold text-center">
              RS:650
            </span>
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="bg-[#FFC470] px-4 py-1 pb-1.5 rounded-2xl mt-3 text-lg text-black font-semibold cursor-pointer hover:text-white hover:bg-black"
            >
              ORDER
            </button>
          </div>
          <div className="bg-[#956943] rounded-3xl flex flex-col items-center text-white">
            <div className="h-[170px] min-w-[190px] max-w-[270px] rounded-t-3xl flex justify-center overflow-hidden">
              <img
                loading="lazy"
                className="h-[170px] object-cover"
                src="/hotChocolate.webp"
                alt="hot chocolate"
              />
            </div>
            <span className="text-white text-2xl mt-2">Hot Chocolate</span>
            <span className="text-white text-sm mt-0.1 font-light text-center">
              Rich & comforting
            </span>
            <span className="text-black text-xl mt-2 font-semibold text-center">
              RS:650
            </span>
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="bg-[#FFC470] px-4 py-1 pb-1.5 rounded-2xl mt-3 text-lg text-black font-semibold cursor-pointer hover:text-white hover:bg-black"
            >
              ORDER
            </button>
          </div>
        </div>
      </div>
      <img
        className="w-full h-30 sm:h-40 md:h-50 lg:h-100 bg-[url('/beans.webp')] object-cover absolute pointer-events-none bottom-0"
        src="/beans.webp"
        alt="beans"
        loading="lazy"
      />
    </section>
  );
}

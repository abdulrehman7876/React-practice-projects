export default function Menu() {
  return (
    <section id="menu" className="h-full bg-black flex flex-col relative">
      <div className="w-full h-50 sm:h-140 bg-[url('/11205217.png')] bg-cover -scale-y-100 absolute"></div>
      <div className="flex w-full flex-col gap-4 items-center mt-30">
        <span className="text-5xl text-white">MENU</span>
        <span className="text-3xl text-[#956943]">
          Your Daily Dose of Comfort
        </span>
      </div>
      <div className="px-45">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,250px))] auto-rows-[420px] justify-center gap-15">
          <div className="bg-[#956943]">h</div>
          <div className="bg-[#956943]">h</div>
          <div className="bg-[#956943]">h</div>
          <div className="bg-[#956943]">h</div>
          <div className="bg-[#956943]">h</div>
          <div className="bg-[#956943]">h</div>
        </div>
      </div>
      <div className="w-full h-50 sm:h-140 bg-[url('/11205217.png')] bg-cover"></div>
    </section>
  );
}

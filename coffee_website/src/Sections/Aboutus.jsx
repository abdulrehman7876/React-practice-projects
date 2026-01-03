export default function Aboutus() {
  return (
    <section
      className="h-full w-full bg-black flex flex-col relative"
      id="about"
    >
      <div className="flex flex-col w-full items-center justify-center p-10 bg-black text-white px-20 sm:20 lg:px-45 mt-10 sm:mt-15">
        <div className="flex w-full items-center justify-between">
          <div className="hidden md:flex md:h-60 md:w-70 lg:h-[300px] lg:w-[450px] overflow-hidden rounded-3xl">
            <img className="h-full object-cover" src="/228.webp" alt="" />
          </div>
          <div className="flex flex-col w-85 md:w-67 lg:w-101 gap-1">
            <span className="text-white text-4xl md:text-2xl font-bold">
              THE Cafe
            </span>
            <span className="text-[#956943] text-3xl md:text-2xl font-bold">
              Where Every Sip Begins
            </span>
            <span className="text-gray-200 w-85 md:w-67 lg:w-100 text-justify text-xl md:text-lg">
              At The Cafe, we’re passionate about crafting the perfect cup. From
              selecting premium beans to brewing with care, we bring you rich
              flavors and irresistible aromas — one sip at a time.
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 mt-15 text-justify">
          <p>
            <span className="text-white text-xl">
              We are a passionate team of coffee lovers dedicated to bringing
              you the finest quality coffee experiences. Our journey began with
              a simple idea: to create a space where every cup tells a story and
              every visit feels like coming home. At our core, we believe that
              coffee is more than just a beverage; it's a ritual, a moment of
              connection, and a source of inspiration. We meticulously source
              our beans from sustainable farms around the world, ensuring that
              each cup is not only delicious but also ethically produced.
            </span>
          </p>
          <p>
            <span className="text-white text-xl">
              Our baristas are artisans, trained to craft each drink with
              precision and care. From the rich aroma of a freshly brewed
              espresso to the creamy indulgence of a latte, we take pride in
              delivering exceptional coffee that delights the senses. Beyond
              coffee, we are committed to fostering a welcoming community space
              where people can gather, share ideas, and create memories. Whether
              you're here for a quick caffeine fix or a leisurely catch-up with
              friends, we strive to make every visit special.
            </span>
          </p>
          <p>
            <span className="text-white">
              Thank you for being part of our story. We invite you to explore
              our menu, savor our brews, and experience the warmth and passion
              that defines who we are.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

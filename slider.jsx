import { useEffect, useRef, useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const CARD_WIDTH = 345;
const GAP = 32;

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform Clone",
      category: "Web Development",
      image: "/E-commerceClone.png",
      link: "https://amazonecloneecommerce.netlify.app/",
    },
    {
      title: "Website UI/UX Design",
      category: "UI/UX Design",
      image: "/uiux.png",
      link: "https://thecafeweb.netlify.app/",
    },
    {
      title: "LOGO Design",
      category: "Graphic Design",
      image: "/Graphic.png",
      link: "https://www.behance.net/abdulrehmanarts",
    },
    {
      title: "Wordpress Website Clone",
      category: "Wordpress",
      image: "/Wordpress-Clone.png",
      link: "",
    },
  ];

  const [isAnimating, setIsAnimating] = useState(false);
  const slides = [
    projects[projects.length - 1],
    ...projects,
    ...projects,
    projects[0],
  ]; // duplicate
  const [index, setIndex] = useState(1);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const infinite = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);

    if (!track) return;
    if (index === 0) {
      setTimeout(() => {
        track.style.transition = "none";
        setIndex(projects.length);
        track.style.transform = `translateX(-${projects.length + 1 * (CARD_WIDTH + GAP)}px)`;
        requestAnimationFrame(() => {
          setIsAnimating(false);
          track.style.transition = "transform 1s ease-in-out";
        });
      }, 2050);
    }

    if (index === projects.length + 1) {
      setTimeout(() => {
        track.style.transition = "none";
        setIndex(1);
        // track.style.transform = "translateX(0px)";

        requestAnimationFrame(() => {
          setIsAnimating(false);
          track.style.transition = "transform 1s ease-in-out";
        });
      }, 2050);
    }
    return () => clearInterval(infinite);
  }, [index, projects.length]);

  return (
    <section
      id="portfolio"
      className="py-20 px-3 md:px-20 2xl:px-30 bg-[#1a1a1a80]"
    >
      <h2 className="text-4xl text-white text-center mb-10">Recent Work</h2>

      <div className="relative overflow-hidden">
        {/* RIGHT */}
        <button
          onClick={() => {
            if (isAnimating) return;
            setIsAnimating(true);
            setIndex((i) => i + 1);
          }}
          className="absolute right-0 top-45 cursor-pointer z-10 border-[#f2cc0f] border-2  bg-[#f2cc0f] text-3xl rounded-full"
        >
          <RiArrowRightSLine />
        </button>

        {/* LEFT */}
        <button
          onClick={() => {
            if (isAnimating) return;
            setIsAnimating(true);
            setIndex((i) => i - 1);
          }}
          className="absolute left-0 top-45 z-10 cursor-pointer border-[#f2cc0f] border-2  bg-[#f2cc0f] text-3xl rounded-full"
        >
          <RiArrowLeftSLine />
        </button>

        {/* TRACK */}
        <div
          ref={trackRef}
          onTransitionEnd={() => setTimeout(() => setIsAnimating(false), 100)}
          className="flex gap-8 transition-transform duration-1000 ease-in-out slide"
          style={{
            transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`,
          }}
        >
          {slides.map((p, i) => (
            <div key={i} className="w-[345px] shrink-0 text-center">
              <div className="h-100 overflow-hidden hover:scale-105 transition-all duration-300 text-center">
                <img src={p.image} alt={p.title} />
              </div>
              <h3 className="text-white text-xl font-semibold mt-4 hover:text-[#f2cc0f] transition-colors duration-200 inline-block">
                <a href={p.link} target="_blank">
                  {p.title}
                </a>
              </h3>
              <p className="text-gray-400">{p.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

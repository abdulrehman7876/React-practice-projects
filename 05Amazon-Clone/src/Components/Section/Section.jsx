import { useState } from "react";
import { Card } from "../Cards/Card";
import { CardFull } from "../Cards/CardFull";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { ProductCard } from "../Cards/ProductCard";
import { Link, useOutletContext } from "react-router";

export const Section = () => {
  const { setCategory } = useOutletContext();

  const CardData = [
    {
      img1: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_2x._SY232_CB624172947_.jpg",
      img2: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_2x._SY232_CB623353881_.jpg",
      img3: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_2x._SY232_CB623353881_.jpg",
      img4: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_2x._SY232_CB624172947_.jpg",
      p1: "Jeans under $50",
      p2: "Tops under $25",
      p3: "Dresses under $30",
      p4: "Dresses under $30",
      heading: "Shop Fashion for less",
      shop: "See all deals",
      userClass: "h-[115px] w-[118px]",
      category: "womens-dresses",
    },
    {
      img1: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_2x._SY232_CB563137408_.jpg",
      img2: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_2x._SY232_CB563137408_.jpg",
      img3: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeDecor_2x._SY232_CB563137408_.jpg",
      img4: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Bedding_2x._SY232_CB563137408_.jpg",
      p1: "Cleaning Tools",
      p2: "Home Storage",
      p3: "Home Decor",
      p4: "Bedding",
      heading: "Shop for your home essentials",
      shop: "Discover more in Home",
      userClass: "h-[100px] w-[118px]",
      category: "home-decoration",
    },
    {
      img1: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Clothing._SY232_CB549022351_.jpg",
      img2: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Trackers._SY232_CB549022351_.jpg",
      img3: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Equipment._SY232_CB549022351_.jpg",
      img4: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Deals_Fitness._SY232_CB549022351_.jpg",
      p1: "Clothing",
      p2: "Trackers",
      p3: "Equipment",
      p4: "Deals",
      heading: "Gear up to get fit",
      shop: "Discover more",
      userClass: "h-[115px] w-[118px]",
      category: "sports-accessories",
    },
    {
      img1: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Smartphone_2x._SY232_CB566164844_.jpg",
      img2: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Watches_2x._SY232_CB566164844_.jpg",
      img3: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Headphone_2x._SY232_CB566164844_.jpg",
      img4: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Tablet_2x._SY232_CB566164844_.jpg",
      p1: "Smartphones",
      p2: "Watches",
      p3: "Headphones",
      p4: "Tablets",
      heading: "Wireless Tech",
      shop: "Discover more",
      userClass: "h-[115px] w-[118px]",
      category: "smartphones",
    },
    {
      img1: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_Make-up._SY232_CB558654384_.jpg",
      img2: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_Brushes._SY232_CB558654384_.jpg",
      img3: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_Sponges._SY232_CB558654384_.jpg",
      img4: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_Mirrors._SY232_CB558654384_.jpg",
      p1: "Makeup",
      p2: "Brushes",
      p3: "Sponges",
      p4: "Mirrors",
      heading: "Level up your beauty routine",
      shop: "See more",
      userClass: "h-[100px] w-[118px]",
      category: "beauty",
    },
    {
      img1: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/WomenWatches_2x._SY232_CB564394432_.jpg",
      img2: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/MenWatches_2x._SY232_CB564394432_.jpg",
      img3: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/GirlWatches_2x._SY232_CB564394432_.jpg",
      img4: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/BoyWatches_2x._SY232_CB564394432_.jpg",
      p1: "Women",
      p2: "Men",
      p3: "Girls",
      p4: "Boys",
      heading: "Most-loved watches",
      shop: "See more",
      userClass: "h-[115px] w-[118px]",
      category: "mens-watches",
    },
    {
      img1: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_LP-HP_B08MYX5Q2W_01.23._SY232_CB619238939_.jpg",
      img2: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_home_B08RCCP3HV_01.23._SY232_CB619238939_.jpg",
      img3: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_kitchen_B0126LMDFK_01.23._SY232_CB619238939_.jpg",
      img4: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_health-beauty_B07662GN57_01.23._SY232_CB619238939_.jpg",
      p1: "Dining",
      p2: "Home",
      p3: "Kitchen",
      p4: "Health and Beauty",
      heading: "Refresh your space",
      shop: "See more",
      userClass: "h-[115px] w-[118px]",
      category: "kitchen-accessories",
    },
  ];
  // fetch("https://fakestoreapi.com/products")
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));
  const [index, setIndex] = useState(0);
  const URL = [
    "/bgimage.jpg",
    "https://m.media-amazon.com/images/I/71qaeC7FpjL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/619geyiQI5L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81hIlE5xocL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61Yx5-N155L._SX3000_.jpg",
  ];

  return (
    <>
      <section className="w-full items-center bg-gray-200">
        <div className="flex relative h-[600px] flex-grow w-full overflow-x-hidden 2xl:w-[1500px] ">
          <button
            onClick={() => {
              setIndex((prev) => (prev === 0 ? URL.length - 1 : prev - 1));
              console.log(index);
            }}
            className="absolute text-7xl text-white top-20 cursor-pointer z-1"
          >
            <RiArrowLeftSLine />
          </button>
          <button
            onClick={() => {
              setIndex((prev) => (prev === URL.length - 1 ? 0 : prev + 1));
              console.log(index);
            }}
            className="absolute text-7xl text-white top-20 left-[95%] cursor-pointer z-1"
          >
            <RiArrowRightSLine />
          </button>
          <div className={`flex overflow-hidden flex-grow 2xl:w-[1500]`}>
            {URL.map((imge, i) => (
              <img
                key={i}
                src={`${imge}`}
                alt=""
                className="h-[600px] w-[1500px] object-cover transition-all duration-300 linear"
                style={{ transform: `translateX(-${index * 100}%)` }}
              />
            ))}
          </div>

          <div className="h-[600px] absolute z-0 inset-0 bg-[linear-gradient(to_bottom,rgba(229,231,235,0),rgba(229,231,235,0),rgba(229,231,235,1))]"></div>
        </div>

        {/* card  */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,290px))] auto-rows-[420px] relative gap-4.5 w-full p-4.5 mt-[-23rem] xl:p-5 xl:gap-5 justify-center">
          {CardData.map((obj, ind) => (
            <Link
              onClick={() => setCategory(obj.category)}
              key={ind}
              to="/productsection"
            >
              <Card
                img1={obj.img1}
                img2={obj.img2}
                img3={obj.img3}
                img4={obj.img4}
                p1={obj.p1}
                p2={obj.p2}
                p3={obj.p3}
                p4={obj.p4}
                heading={obj.heading}
                shop={obj.shop}
                userClass={obj.userClass}
              />
            </Link>
          ))}

          <CardFull
            img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_2x_EN._SY608_CB564799420_.jpg"
            heading="Gaming"
            shop="Shop"
            userClass="h-full w-full"
          />
        </div>
      </section>
    </>
  );
};

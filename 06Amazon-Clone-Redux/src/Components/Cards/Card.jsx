export const Card = ({
  img1,
  img2,
  img3,
  img4,
  p1,
  p2,
  p3,
  p4,
  heading,
  userClass,
  shop,
}) => {
  return (
    <>
      <div className="h-full bg-white flex flex-col gap-2 pt-[20px] pb-[15px] items-center w-full px-[20px] shadow-lg relative">
        <div className="w-full text-[21px] font-bold">
          <h2 className="text-[21px]/7">{heading}</h2>
        </div>
        <div className="flex  w-full mb-5">
          <div className=" w-full">
            <div className={userClass}>
              <img className="object-cover h-full" src={img1} alt="img" />
            </div>
            <p className="h-[18px] w-full text-xs ">{p1}</p>
          </div>
          <div className=" w-[126px]">
            <div className={userClass}>
              <img className="object-cover h-full" src={img2} alt="img" />
            </div>
            <p className="h-[18px] w-full text-xs ">{p2}</p>
          </div>
        </div>
        <div className="flex  w-full">
          <div className=" w-full ">
            <div className={userClass}>
              <img className="object-cover h-full" src={img3} alt="img" />
            </div>
            <p className="h-[18px] w-full text-xs ">{p3}</p>
          </div>
          <div className=" w-[126px]">
            <div className={userClass}>
              <img className="object-cover h-full" src={img4} alt="img" />
            </div>
            <p className="h-[18px] w-full text-xs ">{p4}</p>
          </div>
        </div>
        <div className="w-full text-blue-800 absolute bottom-5 left-5 text-sm">
          <span>
            <div>{shop}</div>
          </span>
        </div>
      </div>
    </>
  );
};

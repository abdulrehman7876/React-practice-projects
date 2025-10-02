export const CardFull = ({ img1, heading, userClass, shop }) => {
  return (
    <>
      <div className="h-full bg-white flex flex-col gap-2 pt-[20px] pb-[60px] items-center w-full px-[20px] shadow-lg relative">
        <div className="h-[27px] w-full text-[21px] font-bold">
          <h2>{heading}</h2>
        </div>
        <div className="flex h-full w-full">
          <div className={userClass}>
            <img className="object-cover h-full" src={img1} alt="img" />
          </div>
        </div>
        <div className="w-full text-blue-800 absolute bottom-5 left-5 text-sm">
          <span>
            <a href="">{shop}</a>
          </span>
        </div>
      </div>
    </>
  );
};

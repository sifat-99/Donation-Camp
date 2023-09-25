const Banner = () => {
  return (
    <section
      style={{
        backgroundImage: `url("/headerBG.png"), linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95))`,
        backgroundBlendMode: "overlay",
        position: "relative",
      }}
      className="h-[50vh] w-full"
    >
      <div className="flex flex-col items-center justify-center pt-36">
        <div className="flex justify-center items-center text-5xl font-bold text-[#0B0B0B]">
          <h1>I Grow By Helping People In Need</h1>
        </div>
        <div className="flex justify-center items-center mt-10">
          <input className="bg-white border py-4 px-4 rounded-s-lg w-96" type="text" placeholder="Search hare..." />
          <button className=" px-7 text-white py-4 bg-[#FF444A] rounded-r-lg">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="text-center mb-5 lg:mb-12">
      <p className="lg:text-lg font-semibold mb-3 lg:mb-5 text-orange-600">
        ---{subHeading}---
      </p>
      <div className=" w-fit mx-auto">
        <div className="border lg:border-2 border-gray-400"></div>
        <h1 className="text-xl lg:text-5xl uppercase font-semibold my-1 lg:my-5 px-5 lg:px-10">
          {heading}
        </h1>
        <div className="border lg:border-2 border-gray-400"></div>
      </div>
    </div>
  );
};

export default SectionTitle;

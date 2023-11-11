
const Cover = ({img, title, subTitle}) => {
    return (
        <div className="hero h-[600px] bg-fixed lg:h-[750px]" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content bg-black bg-opacity-50 w-[90%] lg:w-[50%] py-16">
    <div className="w-[90%] lg:w-[80%]">
      <h1 className="mb-5 text-2xl lg:text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5 uppercase text-sm lg:text-base">{subTitle}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Cover;
const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full rounded-xl">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between text-blue-50 p-5">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="font-circular-web max-w-80 mt-3 text-xs md:text-base text-blue-100 opacity-50">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BentoCard;

import React from "react";

const PromoVideo = () => {
  const videoId = "jDIs7GivgGc";

  return (
    <div className="lg:flex lg:flex-row items-center lg:mb-14">
      <div className="iframe-promo lg:h-96 w-full lg:w-full lg:px-10 px-0 mb-3 lg:mb-0">
        <iframe
          className="w-full lg:h-full sm:h-96 h-56 rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Promo Video"
          allowFullScreen
        ></iframe>
      </div>
      <div className="iframe-info h-80 lg:w-3/5">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
          Check out our Promo Video
        </h2>
        <p className="text-gray-700">
          Experience the essence of our product through our captivating promo
          video. Immerse yourself in a visual journey that showcases the key
          features, benefits, and unique aspects of our offering. Get a sneak
          peek into the exciting world of our product and discover how it can
          transform your experience.
        </p>
      </div>
    </div>
  );
};

export default PromoVideo;

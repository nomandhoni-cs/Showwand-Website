import React from "react";

const PromoVideo = () => {
  const videoId = "jDIs7GivgGc";

  return (
    <div className="sm:flex sm:flex-row items-center">
      <div className="iframe-promo h-96 w-full sm:w-1/2 sm:px-10">
        <iframe
          className="w-full h-72 rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Promo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="iframe-info h-96 sm:w-1/2">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">
          Check out our Promo Video
        </h2>
        <p className="text-gray-700">
          Experience the essence of our product through our captivating promo
          video. Immerse yourself in a visual journey that showcases the key
          features, benefits, and unique aspects of our offering. Get a sneak
          peek into the exciting world of our product and discover how it can
          transform your experience. Join us on this engaging adventure and
          unleash the possibilities with our remarkable solution.
        </p>
      </div>
    </div>
  );
};

export default PromoVideo;

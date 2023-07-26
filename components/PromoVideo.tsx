const PromoVideo: React.FC = () => {
  const videoId = "jDIs7GivgGc";

  return (
    <div className="lg:flex lg:flex-row items-center lg:mb-14">
      <div className="iframe-promo lg:h-96 w-full lg:w-full lg:px-10 px-0 mb-3 lg:mb-0">
        <iframe
          className="w-full aspect-video rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}&autoplay=1`}
          srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/jDIs7GivgGc?autoplay=1><img src=https://img.youtube.com/vi/jDIs7GivgGc/hqdefault.jpg alt='Showwand Unleash Your Thread Wizardry'><span>▶</span></a>"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Showwand Unleash Your Thread Wizardry"
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

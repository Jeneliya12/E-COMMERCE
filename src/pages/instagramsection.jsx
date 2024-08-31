import { Image } from "cloudinary-react";
function InstagramSection() {
  const instgramimages = [
    "drilldown_kplkyh",
    "pexels-jmendezrf-1536619_wenrgs",
    "pexels-kowalievska-1055691_vhscqw",
    "pexels-maryiaplashchynskaya-3393793_inija2",
    "pexels-criativithy-894081-1805412_kdussc",
    "pexels-gabiguerino-1839904_xqryzl",
    "pexels-criativithy-894081-1805411_jtnhx8",
    "pexels-kowalievska-1381556_tzloko",
    "pexels-vitoriasantos-3002552_zothws",
    "pexels-lum3n-44775-322207_d1hngw",
  ];

  return (
    <div id="instagram" className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center py-6">
        Follow Us on Instagram
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-6 pb-6">
        {instgramimages.map((imageName, index) => (
          <div key={index} className="w-full h-48 bg-white overflow-hidden">
            <Image
              cloudName="dfxlmzrj7"
              publicId={`v1724896335/${imageName}`}
              alt={`Instagram ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstagramSection;

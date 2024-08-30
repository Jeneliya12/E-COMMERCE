import { Image } from "cloudinary-react";
function product() {
  const images = [
    "drilldown_kplkyh",
    "pexels-jmendezrf-1536619_wenrgs",
    "pexels-kowalievska-1055691_vhscqw",
    "pexels-maryiaplashchynskaya-3393793_inija2",
    "pexels-criativithy-894081-1805412_kdussc",
    "pexels-gabiguerino-1839904_xqryzl",
    "pexels-criativithy-894081-1805411_jtnhx8",
    "pexels-kowalievska-1381556_tzloko",
  ];
  return (
    <div className="container mx-auto mt-10 pb-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Currently Popular Items
      </h2>
      {/* Categories */}
      <div className="flex space-x-8 mb-8 justify-center">
        <button className="text-lg font-semibold text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900">
          New
        </button>
        <button className="text-lg font-semibold text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900">
          Featured
        </button>
        <button className="text-lg font-semibold text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900">
          Best Seller
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8">
        {images.map((imageName, index) => (
          <div key={index} className="relative">
            <Image
              cloudName="dfxlmzrj7"
              publicId={`v1724896335/${imageName}`}
              alt="Popular Item"
              className="w-80 h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default product;

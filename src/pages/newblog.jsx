import { Image } from "cloudinary-react";
function NewBlog() {
  const blogPosts = [
    {
      images: "pexels-vitoriasantos-3002552_zothws",
      title: "The Art of Minimalism",
      description:
        "Discover how to live more with less in our latest exploration of minimalist design and lifestyle choices.",
      link: "#",
    },
    {
      images: "pexels-lum3n-44775-322207_d1hngw",
      title: "The Power of Neutrals",
      description:
        "Learn how to create versatile outfits with neutral tones that never go out of style.",
      link: "#",
    },
    {
      images: "cld-sample-3",
      title: "Sustainable Fashion",
      description:
        "Explore eco-friendly fashion choices that help protect the environment while keeping you stylish.",
      link: "#",
    },
  ];
  return (
    <div id="blog" className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">New Blog Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="overflow-hidden">
            <Image
              cloudName="dfxlmzrj7"
              publicId={`v1724896335/${post.images}`}
              alt="post.title"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <a href={post.link} className="text-gray-700">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View More Articles Button */}
      <div className="text-center mt-6">
        <button className="bg-orange text-white font-semibold py-3 px-6">
          View More Articles
        </button>
      </div>
    </div>
  );
}

export default NewBlog;

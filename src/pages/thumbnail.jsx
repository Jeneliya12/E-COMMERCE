const Thumbnail = ({ src, alt, isActive, onClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 transition duration-300 ease-in-out ${
        isActive ? "border-orange-500" : "border-transparent"
      }`}
      onClick={onClick}
    />
  );
};

export default Thumbnail;

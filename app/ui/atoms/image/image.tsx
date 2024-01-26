import Image from "next/image";
export const AtomImage = ({
  src,
  alt,
  layout = "fixed",
  width = 500,
  height = 250,
}: Global.IImage) => {
  return (
    <Image
      className="atom-image"
      src={src} // Path to the image
      alt={alt ? alt : ""} // Alternative text
      width={width} // Width of the image (can be in pixels or a number)
      height={height} // Height of the image
      layout={layout}
    />
  );
};

import { useContext, useState } from "react";
import { TierContext } from "../context/TierContext";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
];

export default function Gallery() {
  const { currentTier } = useContext(TierContext);
  const f = currentTier?.features || {};
  if (!f.gallery?.enabled) return null;

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#002B5B] mb-12">Gallery</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i}`}
              className="cursor-pointer rounded shadow hover:scale-105 transition"
              onClick={() => { setIndex(i); setOpen(true); }}
            />
          ))}
        </div>

        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={images.map((img) => ({ src: img }))}
            index={index}
            controller={{ closeOnBackdropClick: true }}
          />
        )}
      </div>
    </section>
  );
}

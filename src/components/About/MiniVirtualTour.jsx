export default function MiniVirtualTour({ title, embedLink }) {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#002B5B] mb-12">{title}</h2>
        <div className="aspect-video rounded-lg shadow overflow-hidden border-4 border-[#FFD700]">
          <iframe
            title={title}
            src={embedLink}
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

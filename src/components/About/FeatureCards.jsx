export default function FeatureCards({ items }) {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#002B5B]">Why Choose Us</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-bold text-[#FFD700] mb-2">{item.title}</h3>
              <p className="text-white text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Highlights() {
  const highlights = [
    { title: "Fast Delivery", desc: "Get your products delivered in no time." },
    { title: "Best Prices", desc: "We offer competitive prices on all items." },
    { title: "Secure Payment", desc: "Shop with confidence and safety." },
    { title: "24/7 Support", desc: "We’re here to help anytime." },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
        Why Choose Us?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-gray-50 dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-600">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

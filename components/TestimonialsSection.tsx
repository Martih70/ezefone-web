export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Margaret",
      age: 74,
      quote:
        "I can finally call my grandchildren without asking for help. It's so easy!",
      rating: 5,
    },
    {
      name: "David",
      age: null,
      title: "Son of an EzeFone user",
      quote:
        "I set it up for my mum in 5 minutes. She's been using it independently ever since. Best thing I've done.",
      rating: 5,
    },
    {
      name: "Patricia",
      age: 81,
      quote:
        "I was scared of smartphones. EzeFone is different. Big buttons, clear screen - I love it.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-bg_primary to-amber-50 py-16 md:py-28 border-t-2 border-border_light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-text_primary mb-4">What people are saying</h2>
          <p className="text-lg text-text_secondary">
            Real stories from real users
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card p-8 hover:shadow-2xl group transform hover:scale-105 duration-300 bg-gradient-to-b from-white to-yellow-50"
            >
              {/* Stars */}
              <div className="flex gap-2 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-accent text-2xl">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-text_primary text-lg font-semibold mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Attribution */}
              <div className="border-t-2 border-border_light pt-5">
                <p className="font-bold text-text_primary text-lg">
                  {testimonial.name}
                </p>
                <p className="text-base text-text_secondary">
                  {testimonial.age ? `Age ${testimonial.age}` : testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

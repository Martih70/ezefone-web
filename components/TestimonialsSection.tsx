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
    <section className="bg-bg_primary py-16 md:py-24 border-t border-border_light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-text_primary mb-4">What people are saying</h2>
          <p className="text-lg text-text_secondary">
            Real stories from real users
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-border_light hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-accent text-lg">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-text_primary text-lg font-semibold mb-4 italic">
                "{testimonial.quote}"
              </p>

              {/* Attribution */}
              <div className="border-t border-border_light pt-4">
                <p className="font-bold text-text_primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-text_secondary">
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

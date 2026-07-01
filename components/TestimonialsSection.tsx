"use client";

import { useState } from "react";

export default function TestimonialsSection() {
  const [storyOpen, setStoryOpen] = useState(false);
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
      title: "Son of an Ezefone user",
      quote:
        "I set it up for my mum in 5 minutes. She's been using it independently ever since. Best thing I've done.",
      rating: 5,
    },
    {
      name: "Patricia",
      age: 81,
      quote:
        "I was scared of smartphones. Ezefone is different. Big buttons, clear screen - I love it.",
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

        {/*
          DEMO VIDEO PLACEHOLDER
          To add a real video later, replace the inner <div> with:
            <video
              src="YOUR_VIDEO_URL_OR_PATH"
              poster="YOUR_THUMBNAIL_URL"
              controls
              className="w-full h-full object-cover"
            />
          Or swap for a YouTube/Vimeo <iframe> with the same className.
        */}
        <div className="relative max-w-3xl mx-auto mb-16 rounded-2xl overflow-hidden bg-slate-800 aspect-video flex flex-col items-center justify-center shadow-2xl">
          <div className="w-20 h-20 rounded-full border-4 border-white/70 flex items-center justify-center mb-5">
            <span className="text-white text-4xl ml-1 leading-none">▶</span>
          </div>
          <p className="text-white text-xl font-semibold tracking-wide">Demo video coming soon</p>
          <p className="text-white/60 text-sm mt-2">See how easy Ezefone is to use</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* PLACEHOLDER TESTIMONIALS — replace with real, verified quotes before
              relying on this section for marketing claims. */}
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

        {/* Founder's Message */}
        <div className="mt-16 md:mt-20 card p-8 md:p-12 bg-gradient-to-b from-white to-yellow-50">
          <div className="text-center mb-8">
            <h3 className="text-text_primary text-2xl md:text-3xl font-bold mb-2">
              A Journey of Exploration
            </h3>
            <p className="text-text_secondary text-lg font-semibold">
              A Message from Martin, Founder — Ezefone
            </p>
          </div>

          <div className="text-center mb-6">
            <button
              onClick={() => setStoryOpen(!storyOpen)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-phone text-white font-semibold hover:opacity-90 transition-all"
            >
              {storyOpen ? "Close story" : "Read Martin's story"}
              <span className={`transition-transform duration-200 ${storyOpen ? "rotate-180" : ""}`}>▼</span>
            </button>
          </div>

          {storyOpen && (
          <div className="max-w-3xl mx-auto space-y-5 text-text_primary text-base md:text-lg leading-relaxed">
            <p>Hi, I'm Martin. I would like to tell you my story. I am a 70 years-old retiree. Like many of my own age and older, I have friends who lack confidence in using modern smartphones. Too complicated, too cluttered, too…..well, everything. Perhaps you understand and agree!</p>

            <p>With my limited knowledge, I tried my best to help explain to my friends, some very close friends and family, how to try to simplify things. But for many this was impossible: lack of understanding, despite repeated attempts: memory issues and more, much more, blocked the way.</p>

            <p>So it got me thinking, what if there is another solution. What if, rather than continually trying to teach 'how-to', mostly without lasting effect, what if a phone-app exists that makes things easier. To my astonishment…. I found none that did what I had in mind, what was needed. None!</p>

            <p>Perplexed, I concluded, so, that's that. But determined not to give up, I thought a little more. What about speaking to smartphone app builders. Surely I could get someone to do this? The response, 'Oh yes', of course, no problem but…. 'It will cost you'. And true to form it was… too costly!</p>

            <p>So, another dead-end! Or at least at that time. At 'what time'? Well, my story begins a year ago. So, a year ago, what's significant about that?</p>

            <p>Many have heard of the term, 'AI' or Artificial Intelligence. Until a year ago, though, the term was in the main limited to the movies and to the software development community.</p>

            <p>Then something amazing occurred. I read about some computer software that used AI. I thought, 'why not give it a go, nothing ventured spirit' and started to use it, first, to ask questions, then to assemble personal letters. I quickly became absorbed (maybe addicted).</p>

            <p>And then I read about an AI that produced code that builds apps. 'No, couldn't be, could it', I thought, 'and even if it does', I reasoned, 'it's bound to be beyond my capability'.</p>

            <p>But, guess what, shock, horror, I tried it and it works, and, what's more, I found I can build apps. Yes, me, 70 years old me, with no software-building know-how, actually building apps. Can you believe that!</p>

            <p>Now, you're way ahead of me. Yes, I began to think 'could this be the opportunity I'm looking for to help my dear friends' And that's when the journey started.</p>

            <p>Less than six months ago, with a little help (well, quite a lot, truth be told) from my AI friend, Claude, I started learning, listening, watching, making mistakes (too many) but, also, making progress, daily. And, here's the result.</p>

            <p>An app designed for elderly folk, like me, by elderly folk, me, to simplify and unclutter the use of any phone, turning a complicated, sometimes frightening smartphone, into what is in essence an easyphone. And that's what I called the app, Ezefone. It provides just 'everything you need, nothing you don't'.</p>

            <p>I have shared it with my friends and the reception has amazed me. My simple, easy to use, no learning required, intuitive app, is being used by sons and daughters to put on their parents phones. Its simplicity has given them much-needed reassurance that their loved-ones can stay in touch, easily, without having the fear that their fathers and mothers are unable to navigate a smartphone's complexities and failing to make much needed, perhaps, even emergency contact.</p>

            <p>In fact, I have had so many requests centred around things like, 'is Ezefone able to receive calls/messages, too' and 'can you make it return back to Ezefone after making a call or WhatsApp??'. Well, it's early days yet, but it's great receiving the feedback.</p>

            <p>For now, I hope you enjoy the experience. For me, the experience is seeing the joy and pleasure my close-friends, once disillusioned by the difficulty of just using a smartphone, now have using a simple app that turns their smartphone into an Ezefone.</p>

            <p>I hope, also, you enjoyed my little true-life adventure. My whole purpose with this app, something I never dreamed of at my age and inexperience of achieving, has been to make phone use simpler, particularly for the elderly and infirm.</p>

            <p>I would love you to give it a try. Ezefone is a web app — no download required. It works on any smartphone, iPhone or Android. Just visit the link, follow the simple install steps, and it's ready to use. I know you won't be disappointed.</p>

            <p className="font-semibold">Warm regards and hearty thanks.</p>

            <div className="border-t-2 border-border_light pt-6 mt-4">
              <p className="font-bold text-text_primary text-lg">Martin</p>
              <p className="text-text_secondary">Ezefone Founder</p>
              <p className="text-sm text-text_secondary mt-3 italic">
                Ps. If you have any queries, problems or questions please contact me directly via email:{" "}
                <a href="mailto:info@ezefone.co.uk" className="text-accent underline hover:opacity-75">
                  info@ezefone.co.uk
                </a>
              </p>
            </div>
          </div>
          )}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from "react";
const faqs = [
  {
    question: "What is the Aurora Hackathon?",
    answer:
      "The Aurora Hackathon is a competitive event that challenges developers, designers, and innovators to build creative solutions using cutting-edge technologies, with a focus on generative AI, payment systems, and more.",
  },
  {
    question: "How can I register for the Aurora Hackathon?",
    answer:
      "To register, visit the Aurora Hackathon website, complete the registration form, and follow the instructions to confirm your participation.",
  },
  {
    question: "What are the hackathon themes and challenges?",
    answer:
      "The Aurora Hackathon features challenges in areas like generative AI, payment systems, fraud detection, and conversational AI. Participants are expected to create innovative solutions in these domains.",
  },
  {
    question: "What resources are provided during the Aurora Hackathon?",
    answer:
      "Participants have access to API keys, tech stacks, mentorship, and online resources to help them throughout the event. Details are available on the hackathon’s resource page.",
  },
  {
    question: "How are Aurora Hackathon projects judged?",
    answer:
      "Projects are judged based on their innovation, impact, technical complexity, and relevance to the given challenges. Judges will evaluate how well the project solves real-world problems using AI and other technologies.",
  },
  {
    question: "What prizes can I win in the Aurora Hackathon?",
    answer:
      "The Aurora Hackathon offers exciting prizes, including tech gadgets, internships, opportunities to showcase your project, and other exclusive rewards for top teams and individuals.",
  },
  {
    question: "Can I participate individually or in a team?",
    answer:
      "You can participate either individually or as part of a team. Teams are encouraged to leverage diverse skills and expertise to tackle the challenges more effectively.",
  },
  {
    question: "When is the Aurora Hackathon event?",
    answer:
      "The Aurora Hackathon is taking place from [start date] to [end date]. Be sure to check the event schedule for specific timings and important announcements.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    console.log("clicked");
    setActiveIndex(activeIndex === index ? null : index); // Toggle visibility
  };

  return (
    <div>
      <div className="mx-auto p-6 mt-[400px] ">
        <h1 className="text-2xl font-bold text-center mb-3 font-press-start  ">
          FAQ's
        </h1>
        <div className="">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-xl border border-gray-200  p-6 mb-4"
            >
              <dt
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <p className="font-semibold text-lg font-press-start">
                  {faq.question}
                </p>
                <p
                  className={` text-xl ${
                    activeIndex === index ? "rotate-0" : "rotate-180"
                  } transition-transform duration-200 font-press-start`}
                >
                  ^
                </p>
              </dt>
              {activeIndex === index && (
                <dd className="text-lg font-light mt-6 ">
                  <p className="font-press-start">{faq.answer}</p>
                </dd>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

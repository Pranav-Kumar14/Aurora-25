import React, { useState } from "react";
const faqs = [
  {
    question: "How long is the hackathon?",
    answer:
      "The hackathon lasts for 10 hours, from 8:00 AM to 6:00 PM. The day will include coding time, mini-games, and a final presentation session.",
  },
  {
    question: "How many people can be on a team?",
    answer: "Teams can consist of two to five participants.",
  },
  {
    question: "What are the mini-games, and how do they affect my score?",
    answer:
      "To add an element of excitement, we are adding an additional minigame concept.\nThe exact rules of the mini-games will be provided as and when the games occur.\n These minigames in totality will take up only fifteen minutes of your time.\n Winning these minigames can slightly boost your score, however preference will always be given to your app.",
  },
  {
    question: "Do we need to bring our own laptops?",
    answer:
      "Yes, each team must bring their own laptops and devices. The venue will provide internet access.",
  },
  {
    question: "What are the Prices?",
    answer:
      "1st Place: ₹8,000\n2nd Place: ₹4,000\n3rd Place: ₹3,000\nCertificates of participation for all participants.",
  },
  {
    question: "How do I register for the hackathon?",
    answer: "Registration will commence on the AURORA website",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    console.log("clicked");
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="mx-auto p-6 mt-[400px]">
        <h1 className="text-2xl font-bold text-center mb-3 font-press-start">
          FAQ's
        </h1>
        <div className="">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-xl border border-gray-200 p-6 mb-4"
            >
              <dt
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <p className="font-semibold text-xl font-press-start">
                  {faq.question}
                </p>
                <p
                  className={`text-xl ${
                    activeIndex === index ? "rotate-0" : "rotate-180"
                  } transition-transform duration-200 font-press-start`}
                >
                  ^
                </p>
              </dt>
              {activeIndex === index && (
                <dd className="text-2xl font-light mt-6">
                  <p className="font-pixelify">
                    {faq.answer.split("\n").map((item, i) => (
                      <React.Fragment key={i}>
                        {item}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
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

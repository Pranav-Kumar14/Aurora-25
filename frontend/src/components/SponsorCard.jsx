import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-31%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center rounded-lg overflow-hidden bg-transparent">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[300px] w-[300px] overflow-hidden bg-transparent rounded-3xl"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        {/* Uncomment if you want to show the title */}
        {/* <p className="bg-gradient-to-br from-white/20 to-white/0 p-4 text-2xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p> */}
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "https://res.cloudinary.com/dopqveduc/image/upload/v1737396552/sp2_vmhawx.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://res.cloudinary.com/dopqveduc/image/upload/v1737396553/sp1_c5whux.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://res.cloudinary.com/dopqveduc/image/upload/v1737396553/sp6_ptjjoh.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://res.cloudinary.com/dopqveduc/image/upload/v1737438289/spb-2_mi7jpa.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://res.cloudinary.com/dopqveduc/image/upload/v1737396553/sp5_w92uou.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://res.cloudinary.com/dopqveduc/image/upload/v1737438289/spb-1_en9eof.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://res.cloudinary.com/dopqveduc/image/upload/v1737438289/spb3_ungkna.jpg",
    title: "Title 7",
    id: 7,
  },
];

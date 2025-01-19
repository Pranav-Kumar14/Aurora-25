import React from "react";

const developers = [
  {
    name: "Aarya R",
    description: "Mastermind",
    img: "https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/logo_b0anb8.png",
    role: "Web Developer",
    ldlink: "https://www.linkedin.com/in/aarya-r-411a53244/",
    gitlink: "https://github.com/aaaaryaaa",
  },
  {
    name: "Utkarsh Jha",
    description: "The only developer.",
    img: "https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/logo_b0anb8.png",
    role: "Web Developer",
    ldlink: "https://www.linkedin.com/in/utkarsh-kumar-jha-993773284/",
    gitlink: "https://github.com/UtkarshKumarJha",
  },
  {
    name: "Pranav Kumar",
    description: "The only developer.",
    img: "https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/logo_b0anb8.png",
    role: "Web Developer",
    ldlink: "https://www.linkedin.com/in/pranav-kumar-175677287/",
    gitlink: "https://github.com/Pranav-Kumar14",
  },

  {
    name: "Siddhan Baranwal",
    description: "The only developer.",
    img: "https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/logo_b0anb8.png",
    role: "Web Developer",
    ldlink: "https://www.linkedin.com/in/siddhanbaranwal/",
    gitlink: "https://github.com/SavVySIDD",
  },
  {
    name: "Tanvi Gupta",
    description: "The only developer.",
    img: "https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/logo_b0anb8.png",
    role: "Web Developer",
    ldlink: "https://www.linkedin.com/in/tanvi-gupta-613b70284/",
    gitlink: "https://github.com/TenoTan",
  },
  {
    name: "Abhinav Kumar",
    description: "The only developer.",
    img: "https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/logo_b0anb8.png",
    role: "Web Developer",
    ldlink: "https://www.linkedin.com/in/abhinav-kumar-463324286/",
    gitlink: "https://github.com/ZAPcodes",
  },
  {
    name: "Ashna Manowar",
    description: "The only developer.",
    img: "https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/logo_b0anb8.png",
    role: "Web Developer",
    ldlink: "https://www.linkedin.com/in/ashna-manowar-33020b2b4/",
    gitlink: "https://github.com/ashnamanowar",
  },
  {
    name: "Mohak Singhal",
    description: "The only developer.",
    img: "https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/logo_b0anb8.png",
    role: "Web Developer",
    ldlink: "https://www.linkedin.com/in/mohak-singhal/",
    gitlink: "https://github.com/Mohak-Singhal",
  },
  {
    name: "Nikhil Sah",
    description: "The only developer.",
    img: "https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/logo_b0anb8.png",
    role: "Web Developer",
    ldlink: "https://www.linkedin.com/in/sah-nikhil/",
    gitlink: "https://github.com/Sah-Nikhil",
  },
  {
    name: "Shivli Mathur",
    description: "The only developer.",
    img: "https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/logo_b0anb8.png",
    role: "Web Designer",
    ldlink: "https://www.linkedin.com/in/shivli-mathur-72083a251/",
    gitlink: "https://www.github.com", //GITHUB KLINKKKKKK
  },
  {
    name: "Saksham Khetan",
    description: "The only developer.",
    img: "https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/logo_b0anb8.png",
    role: "Web Designer",
    ldlink: "https://www.linkedin.com/in/saksham-khetan/",
    gitlink: "https://www.github.com",
  },
  {
    name: "Vasavi",
    description: "The only developer.",
    img: "https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/logo_b0anb8.png",
    role: "Web Designer",
    ldlink: "https://www.linkedin.com/in/vasavi-a-s-597531285/",
    gitlink: "https://www.github.com",
  },
  {
    name: "Shreehari Bhat",
    description: "The only developer.",
    img: "https://res.cloudinary.com/db1ziohil/image/upload/v1737121209/logo_b0anb8.png",
    role: "Web Designer",
    ldlink: "https://www.linkedin.com/in/shreehari-bhat-b47026297/",
    gitlink: "https://www.github.com",
  },
];

const MeetTheDevelopers = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f0d39] to-[#201867] text-white min-h-screen flex flex-col items-center py-12">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1b48] to-[#050f24] -z-10"></div>
      <h1 className="text-3xl md:text-5xl font-bold mb-12 font-heading text-center">
        Meet The Developers
      </h1>
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {developers.map((developer, index) => (
          <div
            key={index}
            className="w-[270px] bg-[#182574] rounded-xl shadow-xl p-6 flex flex-col items-center transition-transform "
          >
            <img
              src={developer.img}
              alt={developer.name}
              className="w-[150px] h-[150px] rounded-full border-4 border-white mb-6"
            />
            <h2 className="text-xl font-pixelify font-semibold text-center text-white mb-2">
              {developer.name}
            </h2>
            <p className="text-sm font-body text-gray-300 text-center mb-4">
              {developer.description}
            </p>
            <p className="text-lg font-semibold font-body text-gray-200 text-center mb-4">
              {developer.role}
            </p>{" "}
            {/* Display role */}
            <div className="flex gap-4">
              <a
                href={developer.gitlink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121210/git_dqvsqt.png"
                  alt="GitHub Icon"
                  className="w-[40px] h-[40px]"
                />
              </a>
              <a
                href={developer.ldlink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/db1ziohil/image/upload/v1737121212/ldin_jxumaw.png"
                  alt="LinkedIn Icon"
                  className="w-[40px] h-[40px]"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function Developer() {
  return <MeetTheDevelopers />;
}

export default Developer;

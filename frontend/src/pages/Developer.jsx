import React from "react";
import icon from "../images/dpicon.png";
import git_icon from "../images/git.png";
import ldin_icon from "../images/ldin.png";

const developers = [
    {
        name: "Aarya R",
        role: "Lead Developer",
        description: "Jane is the mastermind behind our most innovative features.",
        img: "https://via.placeholder.com/150",
        ldlink: "www.linkdin.com",
        gitlink: "www.github.com",
    },
    {
        name: "Aarya R",
        role: "Lead Developer",
        description: "Jane is the mastermind behind our most innovative features.",
        img: "https://via.placeholder.com/150",
        ldlink: "www.linkdin.com",
        gitlink: "www.github.com",
    },
    {
        name: "Aarya R",
        role: "Lead Developer",
        description: "Jane is the mastermind behind our most innovative features.",
        img: "https://via.placeholder.com/150",
        ldlink: "www.linkdin.com",
        gitlink: "www.github.com",
    },
    {
        name: "Aarya R",
        role: "Lead Developer",
        description: "Jane is the mastermind behind our most innovative features.",
        img: "https://via.placeholder.com/150",
        ldlink: "www.linkdin.com",
        gitlink: "www.github.com",
    },
    {
        name: "Aarya R",
        role: "Lead Developer",
        description: "Jane is the mastermind behind our most innovative features.",
        img: "https://via.placeholder.com/150",
        ldlink: "www.linkdin.com",
        gitlink: "www.github.com",
    },
    {
        name: "Aarya R",
        role: "Lead Developer",
        description: "Jane is the mastermind behind our most innovative features.",
        img: "https://via.placeholder.com/150",
        ldlink: "www.linkdin.com",
        gitlink: "www.github.com",
    },
    {
        name: "Aarya R",
        role: "Lead Developer",
        description: "Jane is the mastermind behind our most innovative features.",
        img: "https://via.placeholder.com/150",
        ldlink: "www.linkdin.com",
        gitlink: "www.github.com",
    },
    {
        name: "Aarya R",
        role: "Lead Developer",
        description: "Jane is the mastermind behind our most innovative features.",
        img: "https://via.placeholder.com/150",
        ldlink: "www.linkdin.com",
        gitlink: "www.github.com",
    },
];

const MeetTheDevelopers = () => {
    return (
        <div className="bg-[#0a1b48] text-white min-h-screen flex flex-col items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1b48] to-[#050f24] -z-10"></div>
            <h1 className="text-2xl md:text-5xl font-bold mt-20 mb-8 ">
                Meet Our Developers
            </h1>
            <div className="flex flex-wrap justify-center gap-6 px-4">
                {developers.map((developer, index) => (
                    <div
                        key={index}
                        className="w-[270px] h-[431px] flex-shrink-0 rounded-[126px] bg-[#182574] shadow-[inset_0px_0px_10px_5px_rgba(255,255,255,0.2)] flex flex-col items-center align-top p-4"
                    >
                        <img
                            src={icon}
                            alt={developer.name}
                            className="w-[166.253px] h-[189.829px] rounded-full  mt-6"
                        />
                        <h2 className="text-lg font-bold pb-17.02px mt-[26.02px] text-3xl">
                            {developer.name}
                        </h2>
                        {/* <p className="text-sm text-gray-300">{developer.role}</p> */}
                        {/* <p className="text-sm text-gray-400 text-center">{developer.description}</p> */}
                        <div className="flex mt-[50.02px]">
                            <a
                                href={developer.gitlink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={git_icon}
                                    className="w-[47.49px] h-[42.75px] mr-[52.37px]"
                                />
                            </a>
                            {/* <img src={git_icon} className="w-[47.49px] h-[42.75px] mr-[52.37px] "/> */}
                            <a
                                href={developer.ldlink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={ldin_icon}
                                    className="w-[47.49px] h-[42.75px]"
                                    alt="LinkedIn Icon"
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

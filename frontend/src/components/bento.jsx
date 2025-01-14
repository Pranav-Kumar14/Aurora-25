import React from "react";

// Icons (replacing Tabler icons with inline SVG or similar alternatives)
// const IconClipboardCopy = () => <svg className="h-4 w-4 text-neutral-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M..." /></svg>;
// const IconFileBroken = () => <svg className="h-4 w-4 text-neutral-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M..." /></svg>;
// const IconSignature = () => <svg className="h-4 w-4 text-neutral-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M..." /></svg>;
// const IconTableColumn = () => <svg className="h-4 w-4 text-neutral-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M..." /></svg>;
// const IconArrowWaveRightUp = () => <svg className="h-4 w-4 text-neutral-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M..." /></svg>;
// const IconBoxAlignTopLeft = () => <svg className="h-4 w-4 text-neutral-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M..." /></svg>;
// const IconBoxAlignRightFilled = () => <svg className="h-4 w-4 text-neutral-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M..." /></svg>;

// Skeleton component
// const Skeleton = () => (
//     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
//     </div>
// );

// Data items
const items = [
    {
        title: "The Dawn of Innovation",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        // header: <Skeleton />,
        // icon: <IconClipboardCopy />,
        width: "col-span-2",
        height: "row-span-2"
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        // header: <Skeleton />,
        // icon: <IconFileBroken />,
        width: "col-span-1",
        height: "row-span-2"

    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        // header: <Skeleton />,
        // icon: <IconSignature />,
        width: "col-span-1",
        height: "row-span-3"

    },
    {
        title: "The Power of Communication",
        description: "Understand the impact of effective communication in our lives.",
        // header: <Skeleton />,
        // icon: <IconTableColumn />,
        width: "col-span-2",
        height: "row-span-3"

    },

];

// Main component
const BentoGrid = () => {
    return (
        <div className="flex items-center justify-center w-auto h-screen ">
        <div className="grid w-full h-full grid-rows-5 grid-cols-3 gap-3 p-16 mx-60 ">
        {items.map((item, i) => (
            <div
            key={i}
            className={`p-4 border rounded-xl bg-white shadow-sm dark:bg-neutral-800 ${item.width} ${item.height}`}
            >
            {/* <div className="mb-4">{item.header}</div> */}
            <div className="flex items-center gap-2 mb-2">
                {item.icon}
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {item.title}
                </h3>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.description}
            </p>
            </div>
        ))}
        </div>
        </div>
    );
};

export default BentoGrid;

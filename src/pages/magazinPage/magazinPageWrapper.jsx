/* eslint-disable react/prop-types */

import { Button } from "@material-tailwind/react";
import { GoScreenFull, GoScreenNormal } from "react-icons/go";
import { LuArrowLeftToLine, LuArrowRightToLine } from "react-icons/lu";
// import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
// import { RiArrowRightWideFill, RiArrowLeftWideFill } from "react-icons/ri";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { useCallback, useEffect, useState } from "react";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const MagazinPageWrapper = ({
    page,
    totalPage,
    prevButtonClick,
    nextButtonClick,
    jumpIntoPage,
    children,
}) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    // ---------- zooming off-----------------
    useEffect(() => {
        const handleWheel = (event) => {
            if (event.ctrlKey) {
                event.preventDefault();
            }
        };
        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    // ------full screen-----------
    const screen1 = useFullScreenHandle();

    const reportChange = useCallback(
        (state, handle) => {
            if (handle === screen1) {
                console.log("Screen 1 went to", state, handle);
                setIsFullScreen(state);
            }
        },
        [screen1]
    );

    return (
        <FullScreen
            handle={screen1}
            onChange={reportChange}
            className="border border-green-500
        w-[100%] h-[100%] min-h-screen bg-[#323232] overflow-hidden magazin-container flex flex-col"
        >
            {/* <div className="w-full bg-blue-500"> */}

            <div className="flex justify-center relative">
                <div className="absolute left-0 top-1/2 z-99">
                    <Button onClick={prevButtonClick} variant="text" className="h-24 w-12 p-2">
                        <SlArrowLeft className="w-10 h-14 text-white opacity-80" />
                    </Button>
                </div>
                <div className="flex flex-col w-full">
                    <div className=" h-12 rounded-b-md w-[100%] md:w-[95%] mx-auto bg-gray-800 flex justify-center items-center gap-2 md:gap-4">
                        <Button
                            variant="text"
                            className="p-2"
                            onClick={() => jumpIntoPage(0)}
                        >
                            <LuArrowLeftToLine className="w-5 h-5 text-white" />
                        </Button>{" "}
                        <Button variant="text" className="p-2" onClick={prevButtonClick}>
                            <MdOutlineArrowBack className="w-5 h-5 text-white" />
                        </Button>
                        <div className="bg-white md:hidden rounded-md p-2">
                            <span>{page + 1}</span> / <span>{totalPage}</span>
                        </div>
                        <div className="bg-white hidden md:block rounded-md p-2">
                            {page === 0 ? (
                                <span>{page + 1}</span>
                            ) : (
                                <span>
                                    {page + 1} {page + 1 < totalPage && `- ${page + 2}`}
                                </span>
                            )}{" "}
                            / <span>{totalPage}</span>
                        </div>
                        <Button variant="text" className="p-2" onClick={nextButtonClick}>
                            <MdOutlineArrowForward className="w-5 h-5 text-white" />
                        </Button>
                        <Button
                            variant="text"
                            className="p-2"
                            onClick={() => jumpIntoPage(totalPage - 1)}
                        >
                            <LuArrowRightToLine className="w-5 h-5 text-white" />
                        </Button>
                        {!isFullScreen ? (
                            <button onClick={screen1.enter} className="text-red-500">
                                <GoScreenFull className="w-5 h-5 text-white" />
                            </button>
                        ) : (
                            <button onClick={screen1.exit}>
                                <GoScreenNormal className="w-5 h-5 text-white" />
                            </button>
                        )}
                    </div>
                    <div className="flex justify-center ">
                        {children}
                    </div>
                </div>
                <div className="absolute right-0 top-1/2">
                    <Button variant="text" className="h-24 w-12 p-2">
                        <SlArrowRight onClick={nextButtonClick} className="w-10 h-14 text-white opacity-80" />
                    </Button>
                </div>
            </div>
            {/* </div> */}
        </FullScreen>
    );
};

export default MagazinPageWrapper;

/* eslint-disable react/prop-types */

import { Button } from "@material-tailwind/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useCallback, useEffect, useState } from "react";
import MagazinNav from "./magazinNav";

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
            className="w-[100%] h-[100%] min-h-screen bg-[#323232] overflow-hidden magazin-container flex flex-col"
        >
            <div className="flex justify-center relative w-full h-full">
                <div className="absolute left-0 top-1/2 z-10">
                    <Button variant="text" className="h-24 w-12 p-2">
                        <SlArrowLeft
                            onClick={prevButtonClick}
                            className="w-10 h-14 text-white opacity-80"
                        />
                    </Button>
                </div>
                <div className="flex flex-col w-full h-screen">
                    <MagazinNav
                        jumpIntoPage={jumpIntoPage}
                        prevButtonClick={prevButtonClick}
                        nextButtonClick={nextButtonClick}
                        page={page}
                        totalPage={totalPage}
                        isFullScreen={isFullScreen}
                        screen1={screen1}
                    />
                    <div className="flex justify-center items-center pt-2 w-full h-full">
                        {children}
                    </div>
                </div>
                <div className="absolute right-0 top-1/2">
                    <Button variant="text" className="h-24 w-12 p-2">
                        <SlArrowRight
                            onClick={nextButtonClick}
                            className="w-10 h-14 text-white opacity-80"
                        />
                    </Button>
                </div>
            </div>
        </FullScreen>
    );
};

export default MagazinPageWrapper;

/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { GoScreenFull, GoScreenNormal } from "react-icons/go";
import { LuArrowLeftToLine, LuArrowRightToLine } from "react-icons/lu";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";

const MagazinNav = ({
    jumpIntoPage,
    prevButtonClick,
    nextButtonClick,
    page,
    totalPage,
    isFullScreen,
    screen1,
}) => {
    return (
        <div className=" h-12 rounded-b-md w-[100%] md:w-[95%] mx-auto bg-[#181818] flex justify-center items-center gap-2 md:gap-4">
            <Button variant="text" className="p-2" onClick={() => jumpIntoPage(0)}>
                <LuArrowLeftToLine className="w-5 h-5 text-white" />
            </Button>
            <Button variant="text" className="p-2" onClick={prevButtonClick}>
                <MdOutlineArrowBack className="w-5 h-5 text-white" />
            </Button>
            <div className="bg-gray-100 rounded-md p-1 text-sm font-semibold px-2 flex justify-center">
                {page === 0 ? (
                    <span className="text-sm font-semibold">
                        {page + 1}
                    </span>
                ) : (
                    <span className="text-sm font-semibold">
                        {page + 1} {page + 1 < totalPage && `- ${page + 2}`}
                    </span>
                )}
                <span className="px-1">
                    /
                </span>
                <span>
                    {totalPage}
                </span>
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
    );
};

export default MagazinNav;

/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import HTMLFlipBook from "react-pageflip";
import { useState, useRef, useCallback } from "react";
import { Button } from "@material-tailwind/react";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import { LuArrowLeftToLine, LuArrowRightToLine } from "react-icons/lu";

import "./magazinPage.css"
const MagazinData = [
    {
        image:
            "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717316169/5_ieb47e.jpg",
    },
    {
        image:
            "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717316169/3_krw73e.jpg",
    },
    {
        image:
            "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717221206/1_dhdl2r.jpg",
    },
    {
        image:
            "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717221206/2_jiadtt.jpg",
    },
    {
        image:
            "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717221206/1_dhdl2r.jpg",
    },
    {
        image:
            "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717221206/2_jiadtt.jpg",
    },
    {
        image:
            "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717221206/1_dhdl2r.jpg",
    },
    {
        image:
            "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717221206/2_jiadtt.jpg",
    },
    {
        image:
            "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717316169/6_jbm90x.jpg",
    },
    {
        image:
            "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717316169/4_ur3mwz.jpg",
    },
    {
        image:
            "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717316169/5_ieb47e.jpg",
    },
    {
        image:
            "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717316169/3_krw73e.jpg",
    }
];


// const Page = React.forwardRef((props, ref) => {
//     return (
//         <div className="page" ref={ref}>
//             <div className="page-content">
//                 <h2 className="page-header">Page header - {props.number}</h2>
//                 <div className="page-image"></div>
//                 <div className="page-text">{props.children}</div>
//                 <div className="page-footer">{props.number + 1}</div>
//             </div>
//         </div>
//     );
// });

const MagazinPage = () => {
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    console.log(page, "currentPage")
    const flipBook = useRef(null);

    const prevButtonClick = useCallback(() => {
        if (flipBook.current) {
            flipBook.current.pageFlip().flipPrev();
        }
    }, []);

    const nextButtonClick = useCallback(() => {
        if (flipBook.current) {
            flipBook.current.pageFlip().flipNext();
        }
    }, []);
    const jumpIntoPage = useCallback((pageNumber) => {
        // console.log(pageNumber, "pageNumber")
        if (flipBook.current) {
            flipBook.current.pageFlip().flip(pageNumber);
        }
    }, []);


    const onPage = useCallback((e) => {
        setPage(e.data);
        console.log(e, "e")
    }, []);

    const onInit = useCallback((e) => {
        // console.log('Current page: ' + e.data);
        if (flipBook.current) {
            setTotalPage(flipBook.current.pageFlip().getPageCount());
            setCurrentPage(flipBook.current.pageFlip().getCurrentPageIndex());
        }
    }, []);

    return (
        <div className="bg-gray-600 overflow-hidden">
            <div className="max-w-7xl mx-auto w-[100%] h-[100%]">
                <div className="bg-gray-800 h-20 rounded-md flex justify-center items-center gap-4">
                    <Button variant="text" className="p-2" onClick={() => jumpIntoPage(0)}>
                        <LuArrowLeftToLine className="w-5 h-5 text-white" />
                    </Button>
                    <Button variant="text" className="p-2" onClick={prevButtonClick}>
                        <MdOutlineArrowBack className="w-5 h-5 text-white" />
                    </Button>
                    <div className="bg-white md:hidden rounded-md p-2">

                        <span>{page + 1}</span>

                        {" "}/ <span>{totalPage}</span>
                    </div>
                    <div className="bg-white hidden md:block rounded-md p-2">
                        {page === 0 ? (
                            <span>{page + 1}</span>
                        ) : (
                            <span>{page + 1} {(page + 1) < totalPage && `- ${page + 2}`}</span>
                        )}
                        {" "}/ <span>{totalPage}</span>
                    </div>
                    <Button variant="text" className="p-2" onClick={nextButtonClick}>
                        <MdOutlineArrowForward className="w-5 h-5 text-white" />
                    </Button>
                    <Button variant="text" className="p-2" onClick={() => jumpIntoPage(totalPage - 1)}>
                        <LuArrowRightToLine className="w-5 h-5 text-white" />
                    </Button>
                </div>
                <HTMLFlipBook
                    minWidth={200}
                    minHeight={300}
                    width={300}
                    height={400}
                    maxWidth={400}
                    maxHeight={400}
                    size="stretch"
                    maxShadowOpacity={0.3}
                    showCover={true}
                    mobileScrollSupport={true}
                    onFlip={onPage}
                    onInit={onInit}
                    className={`${page > 0 && "mx-auto"} ${page + 1 === totalPage && "ml-[430px]"}`}
                    ref={flipBook}
                // autoCenter={true}
                >
                    {MagazinData.map((page, index) => (
                        <div key={index} className={index % 2 !== 1 ? 'img-shadow' : ''}>
                            <img src={page.image} alt={`Page ${index + 1}`} />
                        </div>
                    ))}
                </HTMLFlipBook>
            </div>
        </div>
    );
};

export default MagazinPage;

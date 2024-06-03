import { useCallback, useRef, useState } from "react";

import HTMLFlipBook from "react-pageflip";

import "./magazinPage.css";
import MagazinPageWrapper from "./magazinPageWrapper";
import { showMagazinToast } from "../../helper/ToastMessage";
// import { TransformComponent, TransformWrapper, useControls } from "react-zoom-pan-pinch";
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
    },
];

const MagazinPage = () => {
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    console.log(page, "page |", totalPage, "totalPage|", currentPage, "currentPage|");
    const flipBook = useRef(null);
    // const appRef = useRef(null);

    // const Controls = () => {
    //     const { zoomIn, zoomOut, resetTransform } = useControls();

    //     return (
    //         <div className="fixed top-0 left-1/2">
    //             <button onClick={() => zoomIn()}>zoom in +</button>
    //             <button onClick={() => zoomOut()}>zoom out -</button>
    //             <button onClick={() => resetTransform()}> reset x</button>
    //         </div>
    //     );
    // };

    // -----------------------------------------
    const prevButtonClick = useCallback(() => {
        if (flipBook.current) {
            if (page > 0) {
                flipBook.current.pageFlip().flipPrev();
            } else {
                showMagazinToast("This is the first page");
            }
        }
    }, [page]);

    const nextButtonClick = useCallback(() => {
        if (flipBook.current) {

            if (page === totalPage) {
                flipBook.current.pageFlip().flipNext();
            } else {
                showMagazinToast("This is the last page.");
            }
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
        console.log(e, "e");
    }, []);

    // eslint-disable-next-line no-unused-vars
    const onInit = useCallback((e) => {
        // console.log('Current page: ' + e.data);
        if (flipBook.current) {
            setTotalPage(flipBook.current.pageFlip().getPageCount());
            setCurrentPage(flipBook.current.pageFlip().getCurrentPageIndex());
        }
    }, []);
    // ----------------------------------------------

    return (
        <MagazinPageWrapper
            page={page}
            totalPage={totalPage}
            prevButtonClick={prevButtonClick}
            nextButtonClick={nextButtonClick}
            jumpIntoPage={jumpIntoPage}
        >
            <HTMLFlipBook
                width={315}
                minWidth={315}
                maxWidth={400}
                height={430}
                minHeight={430}
                maxHeight={430}
                size="stretch"
                maxShadowOpacity={0.3}
                showCover={true}
                mobileScrollSupport={true}
                onFlip={onPage}
                onInit={onInit}
                // className=""
                className="w-full"
                // className={`${page > 0 && "mx-auto"} ${page + 1 === totalPage && "md:ml-[430px]"}`}
                ref={flipBook}
            // autoCenter={true}
            >
                {MagazinData.map((page, index) => (
                    <div key={index} className={index % 2 !== 1 ? "img-shadow-left" : "img-shadow-right"}>
                        <img src={page.image} alt={`Page ${index + 1}`} />
                    </div>
                ))}
            </HTMLFlipBook>
        </MagazinPageWrapper>
    );
};

export default MagazinPage;

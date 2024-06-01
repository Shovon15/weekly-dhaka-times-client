import MagazineCard from "../components/card/magazineCard";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const LandingPage = () => {
    const Data = [
        {
            image: "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717221206/1_dhdl2r.jpg",
        },
        {
            image: "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717221206/2_jiadtt.jpg"
        },
        {
            image: "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717221206/1_dhdl2r.jpg",
        },
        {
            image: "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717221206/2_jiadtt.jpg",
        },
        {
            image: "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717221206/1_dhdl2r.jpg",
        },
        {
            image: "https://res.cloudinary.com/dreeqkcfb/image/upload/v1717221206/2_jiadtt.jpg",
        },
    ];
    return (
        <div className="max-w-7xl mx-auto">
            <Header />
            <div className="flex flex-wrap flex-grow gap-6 p-5 md:p-10 justify-center">
                {Data && Data.map(({ image }, i) => (
                    <MagazineCard key={i} image={image} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;

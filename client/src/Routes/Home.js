import Header from "../Components/HeaderSection/Header";
import Offers from "../Components/Offers";
import Categories from "../Components/Categories";
import ProductByCategory from "../Components/ProductByCategory";
import Footer from "../Components/FooterSection/Footer";
import CarouselCard from "../Components/Cards/CarouselCard"
function Home() {
    return (
        <>
            <Header/>
            <CarouselCard/>
            <div className={'h-full  mx-auto w-full container'}>
                <Offers />
                <Categories/>
                <ProductByCategory/>
                <Footer/>
            </div>
        </>
    );
}

export default Home;
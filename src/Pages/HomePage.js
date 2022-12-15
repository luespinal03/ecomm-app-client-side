import { images } from '../constants';
import './HomePage.css'
import Footer from '../Components/Footer';


const HomePage = ({ message }) => {

    return (
        <div className='w-full'>
            <div className='main-blade-image mt-20'>
                <img className='vw-100 blage-img ls-is-cached lazyloaded' src={images.HolidayBanner} alt='' />
            </div>

            <h2 className='top-brands mt-10 mb-1'>Top Brands</h2>

            <section className='overflow-hidden text-gray-700'>
                <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.xboxImg} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.playstationImg} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.nintendoImg} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.pokemonImg} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.funkoImg} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.metaImg} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.razerImg} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.turtleBImg} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={images.amdImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className='main-blade-image mt-20'>
                <img className='w-100 blage-img ls-is-cached lazyloaded' src={images.newReleases} />
                <h2 className='mt-20 mb-4'>New Releases</h2>
                <section className='overflow-hidden text-gray-700'>
                    <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                        <div className="flex flex-wrap -m-1 md:-m-2">
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.winterGames} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.justdance} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.dragonQuest} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.hogwarts} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.finalFantasy} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.forspoken} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.lor} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.deathDoors} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={images.skullBones} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { FaCartShopping } from 'react-icons/fa6'

const BookCards = ({ headline, books }) => {

    return (
        <div className="my-16 px-4 lg:px-24">
            <h2 className='text-5xl text-center font-bold text-black'>{headline}</h2>

            {/* cards */}

            <div className="mt-12">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper w-full h-full"
                >
                    {
                        books.slice().map(book => <SwiperSlide key={book.id}>
                            <Link to={`/book/${book.id}`}>
                                <div className="relative">
                                    <img src={book.imageURL} alt="" />

                                    <div className="absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded">
                                        <FaCartShopping className='w-4 h-4 text-white' />
                                    </div>
                                </div>
                                <div className="">
                                    <div className="">
                                        <h3>{book.title}</h3>
                                        <p>{book.Author}</p>
                                    </div>
                                    <div className="">
                                        <p>{book.Prices}</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default BookCards
import favBookImg from "../assets/books/pieces.jpg"

const FavBook = () => {
    return (
        <div className='px-4 lg:px-24 my-20'>
            <div className="md:w-1/2">
                <img src={favBookImg} alt="" className="rounded md:w-10/12" />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">Find Your <span className="text-blue-700">Favorite Book</span></h2>
            </div>
        </div>
    )
}

export default FavBook
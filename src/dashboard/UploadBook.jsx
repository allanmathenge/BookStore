import { Label, TextInput } from 'flowbite-react';
import { useState } from 'react';

const UploadBook = () => {

    const API_URL = 'http://localhost:5000/books'

    const [books, setBooks] = useState([]);

    const handleBookSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        const id = books.length ? books[books.length - 1].id + 1 : 1;
        const title = form.bookTitle.value;
        const Author = form.bookAuthor.value;
        const imageURL = form.imageURL.value;
        const Prices = form.Prices.value;

        const myNewBook = { id, title, Author, imageURL, Prices };
        const allBooks = [...books, myNewBook];
        setBooks(allBooks);

        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(myNewBook)
        })
    }

    return (
        <div className='px-4 my-12'>

            <h2 className='mb-8 text-3xl font-bold'>Upload Your Book</h2>

            <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                {/* First Row */}
                <div className="flex gap-8">
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label
                                className='text-3xl text-black'
                                htmlFor="bookTitle"
                                value="Book Title"
                            />
                        </div>
                        <TextInput
                            className='text-gray-900 text-sm rounded-lg block w-full p-2.5'
                            id="bookTitle"
                            type="text"
                            name="bookTitle"
                            placeholder="Book Title"
                            required
                        />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label
                                className='text-3xl text-black'
                                htmlFor="bookAuthor"
                                value="Book Author"
                            />
                        </div>
                        <TextInput
                            className='text-gray-900 text-sm rounded-lg block w-full p-2.5'
                            id="bookAuthor"
                            type="text"
                            name='bookAuthor'
                            placeholder="Book Author"
                            required
                        />
                    </div>
                </div>
                {/* Second Row */}
                <div className="flex gap-8">
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label
                                className='text-3xl text-black'
                                htmlFor="imageURL"
                                value="Book Image URL"
                            />
                        </div>
                        <TextInput
                            className='text-gray-900 text-sm rounded-lg block w-full p-2.5'
                            id="imageURL"
                            type="text"
                            name='imageURL'
                            placeholder="Book Image URL"
                            required
                        />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label
                                className='text-3xl text-black'
                                htmlFor="Prices"
                                value="Prices"
                            />
                        </div>
                        <TextInput
                            className='text-gray-900 text-sm rounded-lg block w-full p-2.5'
                            id="Prices"
                            type="text"
                            name='Prices'
                            placeholder="Book Price"
                            required
                        />
                    </div>
                </div>
                <button type='Submit' className='mt-5 text-white py-2 rounded bg-blue-700'>Upload</button>
            </form>
        </div>
    )
}

export default UploadBook
import { useState, useEffect } from 'react'
import BookCards from '../components/BookCards'
import api from '../api/books'

const BestSellerBooks = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {

        const fetchBooks = async () => {
            try {
                const response = await api.get('/books');
                if (response && response.data)
                    setBooks(response.data)

            } catch (error) {
                console.log(error.response)
            }
        }
        fetchBooks()
    }, [])

    return (
        <div>
            <BookCards books={books} headline="Best Seller Books" />
        </div>
    )
}

export default BestSellerBooks
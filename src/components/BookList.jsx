import React, {useState, useEffect} from 'react';
import '../App';
import {API_URL} from '../api' ;
import axios from 'axios'
 
const Booklist = ()=> {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        axios
        .get(API_URL)
        .then((res) =>{
            console.log(res.data);
            setBooks(res.data)
        })
        .catch((err) => console.log(err));
    }, []);
    
    // this is the container that will hold the divs with book info

    return <div className='book-list'>
        {/* goes through list and displays each book */}
        {books.map((book)=>(
            <div key={ book.id} className="book">
                <div className="book-item title">
                        <h2>{book.title}</h2>
                    </div>
                    
                    <div className="book-item image">
                        <img src={book.image_url} alt={book.title} />
                    </div>
                    <div className="book-item authors">
                        <h2>{book.authors}</h2>
                    </div>
                    <div className="book-item button">
                        <button >Add to Favorites</button>
                    </div>

                    {/* <div className="book-item description">
                        <p>{book.description}</p>
                    </div> */}
                    
                    <div className="book-item genres">
                        <p> Genres: {book.genres}</p>
                    </div>
                    <div className="book-item rating">
                        <p><strong>Rating: {book.rating}</strong></p>
                    </div>
                    <div className="book-item page-count">
                        <p>Page Count: {book.num_pages}</p>
                    </div>
                    




            </div>
        ))}
        
        </div>
            };
        

        

export default Booklist;
import React, {useState, useEffect} from 'react';
import '../App';
import {API_URL} from '../api' ;
import axios from 'axios'
import { useAppContext } from './context/appContext';
import {Navigate, useNavigate} from 'react-router-dom';
 
const Booklist = ()=> {
    const [books, setBooks] = useState([])
//  destructure for the to used functions
    const {favorites, addToFavorites,removeFromFavorites} = useAppContext(); 

    const navigate = useNavigate();

    const favoritesChecker = (id)=>{
        // checks if at least one element in array meets conditions
        const boolean = favorites.some((book)=> book.id === id);
        return boolean;
    }
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
                      <img src={book.image_url} 
                      alt="#"  
                      onClick={()=>navigate('books/${book.id}')}
                      />
                    </div>

                    <div className="book-item authors">
                        <h2>{book.authors}</h2>
                    </div>
                    <div className="book-item button">
                        {/* toggles button text and logic based on if book in favs or not */}
                        {favoritesChecker(book.id) ? ( 
                        <button onClick={()=> removeFromFavorites(book.id)}>
                            Remove From Favorites
                        </button>) :(
                         <button onClick={()=> addToFavorites(book)}>
                            Add to Favorites
                         </button> 
                         )}
                       
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
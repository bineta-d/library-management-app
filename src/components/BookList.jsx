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
            <div key={ book.id }>
                <div> <h2>{book.title}</h2></div>
                <div> <img src={book.image_url}  alt=""/></div>
                <div><button>Add to Favorites</button></div>
                <div> <h2>{book.authors}</h2></div>
                <div><p>{book.description}</p></div>
                <div><p>{book.genres}</p></div>
                <div><p>{book.rating}</p></div>
                <div>
                    <label for="pageCount">Page Count:</label>
                    <p id="pageCount">{book.num_pages}</p>
                    </div>





            </div>
        ))}
        
        </div>
            };
        

        

export default Booklist;
import React, { useEffect } from 'react';
import '../App';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { BOOK_DETAILS_URL } from '../api';

const BookDetails = () =>{
    // access the id from url parameter
    const {id} =useParams();
    console.log('Book ID from URL:', id);
    const[book, setBook] = useState({});

    useEffect(()=>{
        // dont forget to use slanted quote
        axios.get(`${BOOK_DETAILS_URL}/${id}`)
        .then(res=> {
            console.log('Book data:', res.data);  // Check the fetched data
         setBook(res.data);
        })
        .catch((err)=> console.log(err));
    }, [id]);

    // check book availability, meanwhile show loading message
    if (!book) {
        return <div>Loading book details...</div>;
    }




    return (
       <div className='book-details'>
        <div> 
            <Link to="/"><button className='back-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/></svg>
                Back to Library</button></Link>
        </div> 
            <h1 className='title'>Details</h1>

        <div className='detailed-container'>
            {/* within container is all info */}
            <div className='detailed-book-intro'> 
                <h1>{book?.title}</h1>
                <img src={book?.image_url} alt="" />
            </div>

            <div className='all-book-info'>
                <div>
                    {/* Authors */}
                     <h2>Author (s)</h2>
                    <p>{book?.authors}</p>
                    
                    {/* Description */}
                    <h2>Description</h2>
                    <p>{book?.description}</p>

                   
                    {/* Page Count */}
                    <h3>Page Count: </h3>
                    <p>{book?.num_pages}</p>

                    {/* Genres */}
                    <h3>Genres</h3>
                    <p>{book?.genres}</p>
                    
                    {/* Quote */}
                    <h3>Notable Quote</h3>
                    <p>{book?.Quote1}</p>


                    {/* Rating */}
                    <h3>Rating</h3>
                    <p>{book?.rating}</p>





                </div>


            </div>
        </div>
        </div>

    )
}
export default BookDetails;
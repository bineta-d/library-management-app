import React from 'react';
import '../App';
import {Link} from 'react-router-dom';


const BookDetails = () =>{
    return (
       <div className='book-details'>
        <div> 
            <Link to="/"><button className='back-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/></svg>
                Back to Library</button></Link>
            </div> 
            <h1 className='title'>Book Details</h1>
        </div>

    )
}
export default BookDetails;
import React from 'react';
import '../App';
import { useAppContext } from './context/appContext';
import {Link} from 'react-router-dom';




const Favorites =() =>{

    const {favorites, setFavorites, addToFavorites, removeFromFavorites} =useAppContext();

    return (
        
             <div className='favorites'>
           <div> 
            <Link to="/"><button className='back-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/></svg>
                Back to Library</button></Link>
            </div>
            
            <h1 className='fav-title'>Favorites</h1>
            {/* ternary op for if there is minimum one book added to favs */}
            {favorites.length > 0 ? (
                <div className='fav-list'>
                    {favorites.map((book) => (
                        <div key={book.id} className='book'>
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
                                <button onClick={() => removeFromFavorites(book.id)}>Remove from Favorites</button>
                            </div>

            

                          
                        </div>
                    ))}
                </div>
            ) : (
        <p>No favorite books yet!</p>
      )}
             </div>

    );
};
export default Favorites;
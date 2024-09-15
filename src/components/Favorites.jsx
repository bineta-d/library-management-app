import React from 'react';
import '../App';
import { useAppContext } from './context/appContext';




const Favorites =() =>{

    const {favorites, setFavorites, addToFavorites, removeFromFavorites} =useAppContext();

    return (
        <div className='favorites'>
            <h2>Favorites</h2>
            {/* ternary op for if there is minimum one book added to favs
            {favorites.length > 0 ? (
        <ul>
          {favorites.map((book, index) => (
            <li key={index}>
              {book.title}
              <button onClick={() => removeFromFavorites(book.id)}>Remove from Favorites</button>
            </li>
          ))}
        </ul>
        //  if no books, do this
      ) : (
        <p>No favorite books yet!</p>
      )} */}
             </div>

    );
};
export default Favorites;
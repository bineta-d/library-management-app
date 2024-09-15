import { createContext,useContext } from "react";
import { useState } from 'react';

const AppContext = createContext(null);

export const useAppContext = ( )=> {
    const context = useContext(AppContext);
    if(!context ){
        
        throw new Error('useAppcontext must be within appContextProvider!');
    }
    return context;
};

const AppContextProvider = ({children}) => {
    const[favorites, setFavorites] = useState([]);

    const addToFavorites = (book)=>{
        const oldFavorites = [...favorites];

        const newFavorites = oldFavorites.concat(book);

        setFavorites(newFavorites);

    }

    const removeFromFavorites = (id)=>{
        const oldFavorites =[...favorites];
        // filters current favs list by checking if a books id matches the entered, if so removes
        const newFavorites = oldFavorites.filter((book)=> book.id !== id);
        
        //re-render favorites list
        setFavorites(newFavorites);
    }
    
    return (
        <AppContext.Provider value = {{favorites, addToFavorites, removeFromFavorites}}
        > 
        {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
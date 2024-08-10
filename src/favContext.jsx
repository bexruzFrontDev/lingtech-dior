import { useLocalStorage } from '@uidotdev/usehooks'
import React from 'react';


const FavContext = React.createContext()

const FavContextProvider = ({children}) => {
    const [fav, saveFav] = useLocalStorage('fav', []);

    const handleAddToFav = (el) => {
        const isExists = fav.find((itm) => itm.id === el.id);

        if (isExists){
            saveFav(fav.filter((itm) => itm.id !== el.id));
            return;
        }
        saveFav([...fav, el])

    };

    return(
        <div>
            <FavContext.Provider value={{handleAddToFav,fav}}>
                {children}
            </FavContext.Provider>
        </div>
    )
}

export {FavContext, FavContextProvider};
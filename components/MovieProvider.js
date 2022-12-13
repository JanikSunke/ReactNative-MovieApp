import React, { Children, useState } from "react";


export const MovieContext = React.createContext({});

export function MovieProvider({children}) {
    const [movies, setMovies] = useState([])

    return (
        <MovieContext.Provider
        value={{
            movies,
            setMovies}}>
            {children}
        </MovieContext.Provider>
    )
}
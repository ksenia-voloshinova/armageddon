import {createContext, useState} from 'react';

export const AsteroidsContext = createContext();

const AsteroidsProvider = ({ children }) => {
    const [asteroids, setAsteroids] = useState([]);
    const [fetching, setFetching] = useState(false);


    const value = { asteroids, setAsteroids, fetching, setFetching  };

    return (
        <AsteroidsContext.Provider value={value}>
            {children}
        </AsteroidsContext.Provider>
    );
};

export default AsteroidsProvider;

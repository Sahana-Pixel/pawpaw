import React, { createContext, useState } from 'react';

export const PetContext = createContext();

export const PetProvider = ({ children }) => {
    const [pet, setPet] = useState({
        name: 'Fluffy',
        happiness: 50,
        hunger: 50,
    });

    const feedPet = () => {
        setPet(prevPet => ({
            ...prevPet,
            hunger: Math.min(prevPet.hunger + 10, 100),
            happiness: Math.min(prevPet.happiness + 5, 100),
        }));
    };

    const playWithPet = () => {
        setPet(prevPet => ({
            ...prevPet,
            happiness: Math.min(prevPet.happiness + 15, 100),
            hunger: Math.max(prevPet.hunger - 5, 0),
        }));
    };

    return (
        <PetContext.Provider value={{ pet, feedPet, playWithPet }}>
            {children}
        </PetContext.Provider>
    );
};

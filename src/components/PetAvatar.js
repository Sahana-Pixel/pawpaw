import React, { useContext } from 'react';
import { PetContext } from '../context/PetContext';

const PetAvatar = () => {
    const { pet } = useContext(PetContext);

    return (
        <div>
            <h2>Your Pet: {pet.name}</h2>
            <img src={`/assets/pets/fluffy.png`} alt={pet.name} className="w-32 h-32" />
        </div>
    );
};

export default PetAvatar;

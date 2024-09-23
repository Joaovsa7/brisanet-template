'use client';

import { useEffect, useState } from "react";
import { brisanetService } from "~/services/brisanet";

export const ListCities = ({ onSelect }) => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
         brisanetService.getCoveredCities().then(setCities);
    }, []);


    return (
        <div>
            <select onChange={(e) => onSelect(e.target.value)}>
                <option defaultValue="Selecione a sua cidade" />
                {cities.map((city) => (
                    <option value={city.id}>
                        {city.attributes.name}
                    </option>
                ))}
            </select>
        </div>
    )
}
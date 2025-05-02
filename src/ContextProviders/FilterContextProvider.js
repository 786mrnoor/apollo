'use client';

import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

export const FilterContext = createContext(null);

export default function FilterContextProvider({ children }) {
    const router = useRouter();
    const [filters, setFilters] = useState({
        consultMode: [],
        experience: [],
        fees: [],
        language: [],
        facilityType: []
    });

    function handleCheckboxChange(key, value) {
        setFilters((prev) => {
            const currentValues = prev[key];
            const isChecked = currentValues.includes(value);

            return {
                ...prev,
                [key]: isChecked
                    ? currentValues.filter((v) => v !== value) // remove
                    : [...currentValues, value]              // add
            };
        });
    };

    function applyFilter() {
        const params = new URLSearchParams(window.location.search);
        let filtersObj = {};
        Object.entries(filters).map(([key, options]) => {
            if(options.length > 0){
                filtersObj[key] = options;
            }
        })
        params.set('filterObject', JSON.stringify(filtersObj));
        router.push(`/?${params.toString()}`);
    }

    return (
        <FilterContext value={[filters, handleCheckboxChange, applyFilter]}>
            {children}
        </FilterContext>
    )
};

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useFilter(appliedFilter) {
    const router = useRouter();
    const [filters, setFilters] = useState(appliedFilter);

    useEffect(() => {
        setFilters(appliedFilter);
    }, [appliedFilter]);

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
        params.delete('page')
        Object.entries(filters).forEach(([key, options]) => {
            params.delete(key);
            options.forEach(value => params.append(key, value));
        });
        router.replace(`/?${params.toString()}`);
    }

    return [filters, handleCheckboxChange, applyFilter];
};

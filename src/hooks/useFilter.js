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
        Object.entries(filters).map(([key, options]) => {
            if (options.length > 0) {
                filters[key] = options;
            }
        });
        params.set('filterObject', JSON.stringify(filters));
        router.replace(`/?${params.toString()}`);
    }

    return [filters, handleCheckboxChange, applyFilter];
};

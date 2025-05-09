import { filterOptions } from "@/filter-sort-data";

export default function validateFilters(searchParams) {
    let initialFilters = {};

    Object.keys(filterOptions).forEach((key) => {
        let filter = searchParams[key];

        if (!filter) {
            initialFilters[key] = [];
        }
        else if (!Array.isArray(filter)) {
            initialFilters[key] = [filter];
        }
        else {
            initialFilters[key] = filter;
        }
    });

    return initialFilters;
};

import { filterOptions } from "@/filter-sort-data";

export default function appliedFilters(filterObject) {
    let labels = [];
    let search = {
        consultMode: [],
        experience: [],
        fees: [],
        language: [],
        facilityType: []
    };
    if(!filterObject) return [search, labels];
    
    filterObject = JSON.parse(filterObject);

    Object.entries(filterObject).map(([key, options]) => {
        if (options.length <= 0) return;

        options.forEach(value => {
            const filter = filterOptions[key].find(f => f.value === value);
            search[key] = [...search[key], filter?.value];
            labels.push(filter?.label)
        });
    });

    return [search, labels];
};

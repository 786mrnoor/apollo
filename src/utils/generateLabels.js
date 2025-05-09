import { filterOptions } from "@/filter-sort-data";

export default function generateLabels(filters) {
    let labels = [];
    Object.entries(filters).forEach(([key, options]) => {

        options.forEach(value => {
            const filter = filterOptions[key]?.find(f => f.value === value);
            if (filter) {
                labels.push({ ...filter, key });
            }
        })
    });

    return labels;
};

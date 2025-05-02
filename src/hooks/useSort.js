import { sortOptions } from "@/filter-sort-data";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function useSort(sortBy) {
    const [sort, setSort] = useState(sortBy);
    const router = useRouter();

    const label = useMemo(() => {
        const sort = sortOptions.find(s => s.value === sortBy);
        return sort ? sort.label : 'Relevance';
    }, [sortBy]);

    function submit(sortBy) {
        setSort(sortBy);
        const params = new URLSearchParams(window.location.search);
        params.set('sortby', sortBy);
        router.push(`/?${params.toString()}`);
    }
    return [sort, label, submit];
};

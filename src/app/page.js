import styles from './page.module.css';
import Header from '@/components/Header';
import FilterSidebar from '@/components/FilterSidebar';
import MobileFilter from '@/components/MobileFilter/MobileFilter';
import Heading from '@/components/Heading';
import Breadcrumb from '@/components/Breadcrumb';
import appliedFilters from '@/utils/appliedFilters';
import { filterOptions } from '@/filter-sort-data';
import DoctorList from '@/components/DoctorList';

export const metadata = {
  title: 'General Physician - Book Appointment Online with General Physician & Internal Medicine Doctors near you | Apollo 247',
  description: 'Consult top general physicians and internal medicine specialists. Book online appointments easily.',
  keywords: 'general physician, internal medicine, doctors, online consultation, Apollo247 clone',
};

async function fetchDoctors(searchParams, filters) {
  let filter = { ...filters };
  let experience = [];
  filters.experience.forEach((exp) => {
    let val = filterOptions.experience.find(e => e.value === exp);
    if (val) experience.push(val?.queryValue);
  })

  let fees = [];
  filters.fees.forEach(fee => {
    let val = filterOptions.fees.find(e => e.value === fee);
    if (val) fees.push(val.queryValue);
  });

  filter.experience = experience;
  filter.fees = fees;

  const query = new URLSearchParams(searchParams)
  query.set('filterObject', JSON.stringify(filter));
  const res = await fetch(`http://localhost:5000/api/list-doctors?${query?.toString()}`, { cache: 'no-store' });
  const data = await res.json();
  return data;
}

export default async function Destination({ searchParams }) {
  const search = await searchParams;
  const [filters, labels] = appliedFilters(search?.filterObject);

  const { data: doctors = [], total = 0, page = 1, pages = 1 } = await fetchDoctors(search, filters);
  return (
    <>
      <Header />
      <main className={styles.container}>
        <FilterSidebar appliedFilters={filters} labels={labels} />

        <div className={styles.rightSection}>
          <Breadcrumb />
          <MobileFilter filters={filters} labels={labels} sortBy={search.sortby} />
          <Heading total={total} sortBy={search.sortby} />

          <div className={styles.doctorList}>
            <DoctorList initialDoctors={doctors} pages={pages} page={page} />
          </div>
        </div>
      </main>
    </>
  );
}


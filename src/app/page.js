import styles from './page.module.css';
import Header from '@/components/Header';
import FilterSidebar from '@/components/FilterSidebar';
import MobileFilter from '@/components/MobileFilter/MobileFilter';
import Heading from '@/components/Heading';
import Breadcrumb from '@/components/Breadcrumb';
import DoctorList from '@/components/DoctorList';
import validateFilters from '@/utils/validateFilters';
import generateLabels from '@/utils/generateLabels';

export const metadata = {
  title: 'General Physician - Book Appointment Online with General Physician & Internal Medicine Doctors near you | Apollo 247',
  description: 'Consult top general physicians and internal medicine specialists. Book online appointments easily.',
  keywords: 'general physician, internal medicine, doctors, online consultation, Apollo247 clone',
};

async function fetchDoctors(searchParams) {
  const query = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, options]) => {
    if (Array.isArray(options)) {
      options.forEach(value => query.append(key, value));
    } else {
      query.set(key, options);
    }
  });
  const res = await fetch(`${process.env.BACKEND_URI}/api/list-doctors?${query?.toString()}`, { cache: 'no-store' });
  const data = await res.json();
  return data;
}

export default async function Destination({ searchParams }) {
  const search = await searchParams;
  const initialFilters = validateFilters(search);
  const labels = generateLabels(initialFilters);

  const { data: doctors = [], total = 0, page = 1, pages = 1 } = await fetchDoctors(search);
  return (
    <>
      <Header />
      <main className={styles.container}>
        <FilterSidebar initialFilters={initialFilters} labels={labels} />

        <div className={styles.rightSection}>
          <Breadcrumb />
          <MobileFilter initialFilters={initialFilters} labels={labels} sortBy={search.sortby} />
          <Heading total={total} sortBy={search.sortby} />

          <div className={styles.doctorList}>
            <DoctorList initialDoctors={doctors} pages={pages} page={page} />
          </div>
        </div>
      </main>
    </>
  );
}


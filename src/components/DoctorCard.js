import styles from '@/styles/DoctorCard.module.css';

export default function DoctorCard({ doctor }) {
  return (
    <a href='#' className={styles.card}>
      <div className={styles.info}>
        <div className={styles.image}>
          <img src={doctor.profileImage || '/default-doctor.png'} alt={doctor.name} width={74} height={74} />
        </div>
        <div className={styles.details}>
          <h2>
            {doctor.name}
            <button></button>
          </h2>
          <p className={styles.specialization}>{doctor.specialization}</p>
          <p className={styles.experience}>
            {doctor.experience} years. {doctor.qualification}
          </p>
          <p className={styles.location}>{doctor.location}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        {
          doctor.onlineConsultationFees &&
          <div className={styles.buttonWrapper}>
            <p>₹{doctor.onlineConsultationFees}</p>
            <button>Consult Online</button>
          </div>
        }
        {
          doctor.physicalConsultationFees &&
          <div className={styles.buttonWrapper}>
            <p>₹{doctor.physicalConsultationFees}</p>
            <button className={styles.visitDoctorBtn}>Visit Doctor</button>
          </div>
        }
      </div>
    </a>
  );
}

import pediatricsImg from "../assets/site-images/kmc-paediatric.jpg";
import femaleWard from "../assets/site-images/female-ward.jpg";
import surgeryImg from "../assets/site-images/kmc-oxygen.jpg";
import maleWard from "../assets/site-images/male-ward.jpg";
import bedsImg from "../assets/site-images/kmc-beds.jpg";
import pharmacyImg from "../assets/site-images/kmc-pharmacy.jpg";
import consultationImg from "../assets/site-images/kmc-consultation.jpg";
import breastfeeding from "../assets/site-images/breastfeeding.jpg";
import diagnosisImg from "../assets/site-images/kmc-records.jpg";

export const departmentData = [
  {
    id: 1,
    title: "Obstetrics & Gynaecology",
    description:
      "Comprehensive women's healthcare, covering maternal care, pregnancy management, and reproductive health.",
    image: femaleWard,
    featured: true,
  },
  {
    id: 2,
    title: "Paediatrics",
    description:
      "Expert medical care tailored for infants, children, and adolescents to ensure healthy development.",
    image: pediatricsImg,
    featured: true,
  },
  {
    id: 3,
    title: "General Surgery",
    description:
      "Advanced surgical interventions and post-operative care led by our team of experienced consultant surgeons.",
    image: surgeryImg,
    featured: true,
  },
  {
    id: 4,
    title: "Urology",
    description:
      "Specialized diagnostics and treatment for conditions affecting the urinary tract and male reproductive system.",
    image: maleWard,
    featured: true,
  },
  {
    id: 5,
    title: "Internal Medicine",
    description:
      "Comprehensive diagnosis, management, and non-surgical treatment of complex adult diseases.",
    image: bedsImg,
    featured: true,
  },
  {
    id: 6,
    title: "24-Hour Pharmacy",
    description:
      "Fully stocked pharmacy providing prescription and over-the-counter medications.",
    image: pharmacyImg,
    featured: false,
  },
  {
    id: 7,
    title: "Laboratory & Diagnostics",
    description:
      "State-of-the-art testing facility including Ultrasound and ECG services.",
    image: diagnosisImg,
    featured: false,
  },
  {
    id: 8,
    title: "Outpatient Consultation",
    description:
      "Expert medical evaluations, routine check-ups, and personalized treatment plans provided by our dedicated general practitioners.",
    image: consultationImg,
    featured: false,
  },
  {
    id: 9,
    title: "Antenatal Care",
    description:
      "Comprehensive monitoring and support throughout pregnancy, ensuring the health and well-being of both mother and baby.",
    image: breastfeeding,
    featured: false,
  },
];

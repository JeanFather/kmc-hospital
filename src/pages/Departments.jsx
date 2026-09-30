import CTASection from '../components/CTASection';
import '../styles/Departments.css';
import { departmentData } from '../data/departments.js'

export default function Departments() {
  return (
    <>
      <div className="departments-page">
        <div className="departments-header">
          <h1 className="departments-title">All Medical Departments</h1>
          <p className="departments-intro">
            KMC Hospital provides comprehensive, specialized care across a wide variety of departments.
          </p>
          <p className="departments-intro">
            We offer comprehensive multi-specialty care, with teams of board-certified specialists and state-of-the-art facilities.
          </p>
        </div>

        <div className="departments-grid">
          {departmentData.map((dept) => (
            <div className="dept-card" key={dept.id}>
              <img src={dept.image} alt={dept.title} className="dept-img" loading="lazy" />
              <h2 className="dept-card-title">{dept.title}</h2>
              <p className="dept-card-desc">{dept.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <CTASection />
    </>
  );
}
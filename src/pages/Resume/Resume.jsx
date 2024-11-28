
import About from '../../components/About/About';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume">
      <div className="container mx-auto px-[15px]">
        <div className="resume-container">
            <h2 className="heading">My <span>Resume</span></h2>
            <About />
        </div>
      </div>
    </section>
  )
}

export default Resume

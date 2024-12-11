import { StarsCanvas } from "src/components/canvas";
import Navbar from "src/components/navbar";
// import SignIn from "src/containers/projects/signin";
import Contact from "src/containers/projects/contact";
import { styles } from "src/styles";

export default function ProjectFormPage() {
  return (
    <div className="relative z-0 bg-primary bg-black text-white h-screen max-h-screen w-full">
          <Navbar />
        <div className={`${styles.padding}`}>
          <Contact />
          {/* <SignIn/> */}
          <StarsCanvas />
        </div>
      </div>
  );
}

import ProjectInfoPage from "./project-getinfo-page";

export default function GetInfoPage() {
  return (
    <div className="w-full bg-bgtrans h-screen bg-no-repeat bg-center bg-cover">
      <div className="p-16">
        <img
          src="../assets/images/bdots.png"
          className="top-3 absolute right-20"
        />
      </div>
      <ProjectInfoPage />
      <img
        src="../assets/images/bdots.png"
        className="absolute bottom-2 left-20"
      />
    </div>
  );
}

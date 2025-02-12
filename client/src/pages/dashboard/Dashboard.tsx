import { useState } from "react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const jsonString = localStorage.getItem("user") || "";
  const json = JSON.parse(jsonString);
  const companyCode = json.companyCode;
  return (
    <div className="flex h-screen overflow-hidden">
      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <img
            className="w-100 h-100 block mx-auto"
            src={`/images/${companyCode}-logo.jpeg`}
            alt="User"
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

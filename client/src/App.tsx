import { useEffect, useState } from "react";
import { BarChart2 } from "lucide-react";
//import { useLocation } from "react-router-dom";
import { Header } from "./partials/Header";
import { Sidebar } from "./partials/Sidebar";

function App() {
  useEffect(() => {
    const element = document.querySelector("html");
    if (element) element.style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    if (element) element.style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  const themes = {
    blue: {
      sidebar: "bg-blue-900",
      sidebarText: "text-blue-100",
      sidebarHover: "hover:bg-blue-800 hover:text-white",
      active: "bg-blue-800 text-white",
      header: "bg-blue-800",
      headerText: "text-white",
      accent: "text-blue-600",
    },
    purple: {
      sidebar: "bg-purple-900",
      sidebarText: "text-purple-100",
      sidebarHover: "hover:bg-purple-800 hover:text-white",
      active: "bg-purple-800 text-white",
      header: "bg-purple-800",
      headerText: "text-white",
      accent: "text-purple-600",
    },
    emerald: {
      sidebar: "bg-emerald-900",
      sidebarText: "text-emerald-100",
      sidebarHover: "hover:bg-emerald-800 hover:text-white",
      active: "bg-emerald-800 text-white",
      header: "bg-emerald-800",
      headerText: "text-white",
      accent: "text-emerald-600",
    },
    rose: {
      sidebar: "bg-rose-900",
      sidebarText: "text-rose-100",
      sidebarHover: "hover:bg-rose-800 hover:text-white",
      active: "bg-rose-800 text-white",
      header: "bg-rose-800",
      headerText: "text-white",
      accent: "text-rose-600",
    },
    amber: {
      sidebar: "bg-amber-900",
      sidebarText: "text-amber-100",
      sidebarHover: "hover:bg-amber-800 hover:text-white",
      active: "bg-amber-800 text-white",
      header: "bg-amber-800",
      headerText: "text-white",
      accent: "text-amber-600",
    },
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Header />
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dashboard Cards */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-800">
                    Card Title {index + 1}
                  </h3>
                  <BarChart2 className={`text-emerald-600`} size={20} />
                </div>
                <p className="mt-2 text-gray-600">
                  Sample dashboard card content with some information.
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

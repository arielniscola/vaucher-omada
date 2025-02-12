import {
  BarChart2,
  Calendar,
  HelpCircle,
  Home,
  Mail,
  Menu,
  Settings,
  Users,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface SidebarProps {}

const menuItems = [
  {
    icon: <Home size={20} />,
    label: "Dashboard",
    active: true,
    url: "/dashboard",
  },
  {
    icon: <Users size={20} />,
    label: "Users",
    active: true,
    url: "/dashboard",
  },
  {
    icon: <BarChart2 size={20} />,
    label: "Analytics",
    active: true,
    url: "/dashboard",
  },
  {
    icon: <Mail size={20} />,
    label: "Messages",
    active: true,
    url: "/dashboard",
  },
  {
    icon: <Calendar size={20} />,
    label: "Calendar",
    active: true,
    url: "/dashboard",
  },
  {
    icon: <Settings size={20} />,
    label: "Settings",
    active: true,
    url: "/dashboard",
  },
  {
    icon: <HelpCircle size={20} />,
    label: "Help",
    active: true,
    url: "/dashboard",
  },
];

export const Sidebar: React.FC<SidebarProps> = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex h-screen bg-gray-100">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`bg-emerald-900 shadow-lg transition-all duration-300 ease-in-out ${
          isHovered ? "w-64" : "w-20"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-opacity-20 border-white">
          <h1
            className={`font-bold text-xl text-emerald-100 ${
              !isHovered && "hidden"
            }`}
          >
            Dashboard
          </h1>
          <Menu size={24} className="text-emerald-100" />
        </div>
        <nav className="mt-6">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.url}
              className={`flex items-center p-4 text-emerald-100 hover:bg-emerald-800 hover:text-white transition-colors ${
                item.active && "bg-emerald-800 text-white"
              }`}
            >
              <div className="flex items-center justify-center w-8">
                {item.icon}
              </div>
              <span
                className={`ml-4 transition-opacity ${
                  !isHovered ? "opacity-0 hidden" : "opacity-100"
                }`}
              >
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

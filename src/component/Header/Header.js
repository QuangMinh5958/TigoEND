import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faTableColumns,
  faUserTie,
  faGear,
  faCommentDots,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

const Header = () => {
  const items = [
    {
      id: 1,
      title: "Home",
      icon: faHouse,
      path: "/",
    },
    {
      id: 2,
      title: "Dashboard",
      icon: faTableColumns,
      path: "/dashboard",
    },
    {
      id: 3,
      title: "Admin",
      icon: faUserTie,
      path: "/admin",
    },
    {
      id: 4,
      title: "Messages",
      icon: faCommentDots,
      path: "/messages",
    },
    {
      id: 5,
      title: "Settings",
      icon: faGear,
      path: "/settings",
    },
  ];

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex lg:flex-col items-center lg:min-h-screen w-[100%]">
      <div className="flex lg:flex-col items-center lg:py-5 lg:border-b border-hr w-full">
        <div className="w-14 h-14 rounded-full border-2 border-black overflow-hidden">
          <div className="w-full h-full flex justify-center items-end">
            <FontAwesomeIcon icon={faUser} className="w-10 h-10" />
          </div>
        </div>
        <div className="font-medium lg:my-2 text-base pl-2 lg:pl-0">
          userName
        </div>
      </div>

      <div className="sm:flex lg:flex lg:flex-1 lg:flex-col w-full hidden ">
        {items.map((item) => (
          <NavLink
            to={item.path}
            key={item.id}
            className={({ isActive }) =>
              `w-full lg:block sm:mr-6 h-12 lg:h-16 ${
                isActive ? "border-b-2 lg:bg-black lg:text-hr" : ""
              }`
            }
          >
            <div className="flex items-center h-12 lg:h-16">
              <div className="flex justify-end w-3/5">
                <FontAwesomeIcon icon={item.icon} className="text-gray-600" />
              </div>
              <div className=" ml-1 text-lg font-medium w-full">
                {item.title}
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      <div
        onClick={handleLogout}
        className="hidden sm:flex lg:flex justify-center items-center lg:my-5 cursor-pointer"
      >
        <div className="flex justify-center items-center lg:block py-2 px-4 rounded-full border lg:px-8 lg:py-2 font-medium hover:bg-black hover:text-hr">
          <FontAwesomeIcon icon={faRightToBracket} className="pr-2" />
          <span>Logout</span>
        </div>
      </div>

      <div className="sm:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Header;

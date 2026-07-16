import {
  FiHome,
  FiYoutube,
  FiSettings,
  FiBarChart2,
  FiZap,
  FiLogOut,
} from "react-icons/fi";

import "./../styles/sidebar.css";

function Sidebar() {
  const menus = [
    {
      icon: <FiHome />,
      title: "Dashboard",
      active: true,
    },
    {
      icon: <FiZap />,
      title: "Generate SEO",
    },
    {
      icon: <FiYoutube />,
      title: "Uploads",
    },
    {
      icon: <FiBarChart2 />,
      title: "Analytics",
    },
    {
      icon: <FiSettings />,
      title: "Settings",
    },
  ];

  return (
    <aside className="sidebar">

      <div className="sidebar-top">

        <div className="logo">

          <div className="logo-icon">
            🚀
          </div>

          <div>
            <h2>AI Publisher</h2>
            <p>Content Studio</p>
          </div>

        </div>

        <nav className="sidebar-menu">

          {menus.map((menu) => (

            <div
              key={menu.title}
              className={`sidebar-item ${
                menu.active ? "active" : ""
              }`}
            >

              <span className="menu-icon">
                {menu.icon}
              </span>

              <span className="menu-title">
                {menu.title}
              </span>

            </div>

          ))}

        </nav>

      </div>

      <div className="sidebar-footer">

        <div className="user-card">

          <img
            src="https://ui-avatars.com/api/?name=AI&background=2563eb&color=fff"
            alt="User"
          />

          <div>

            <h4>Sarees by Siva</h4>

            <span>Premium Plan</span>

          </div>

        </div>

        <button className="logout-btn">

          <FiLogOut />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;
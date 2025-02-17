import * as React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faTableColumns,
  faUserTie,
  faGear,
  faCommentDots,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  {
    href: "",
    text: "Hello fen",
    image:
      "https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/avatar-anh-meo-cute-3.jpg",
    hasDividerBottom: true,
  },
  { href: "/", text: "Trang chủ", icon: faHouse },
  { href: "/dashboard", text: "Dashboard", icon: faTableColumns },
  { href: "/admin", text: "Quản lý", icon: faUserTie },
  { href: "/settings", text: "Cài đặt", icon: faGear },
  { href: "/messages", text: "Tin nhắn", icon: faCommentDots },
  { href: "/", text: "Đăng xuất", icon: faRightToBracket, hasDividerTop: true },
];

const Menu = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      className="bg-hr h-full text-black"
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <div className="rounded-full overflow-hidden">
                <img className="w-10 h-10" src={menuItems[0].image} />
              </div>
            </ListItemIcon>
            <ListItemText primary={menuItems[0].text} />
          </ListItemButton>
        </ListItem>
        <Divider />
        {menuItems.slice(1).map((item, index) => (
          <React.Fragment key={index}>
            {item.hasDividerTop && <Divider />}
            <ListItem>
              <ListItemButton
                component={NavLink}
                to={item.href}
                onClick={toggleDrawer(false)}
              >
                <ListItemIcon>
                  <FontAwesomeIcon icon={item.icon} />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="-mr-5">
      <Button onClick={toggleDrawer(true)}>
        <FontAwesomeIcon className="w-5 h-5 p-0 m-0" icon={faBars} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Menu;

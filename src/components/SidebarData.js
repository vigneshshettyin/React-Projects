import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Climate Live Search",
    path: "/climate",
    icon: <IoIcons.IoIosCloud />,
  },
  {
    title: "Image Live Search",
    path: "/image",
    icon: <IoIcons.IoIosImage />,
  },
  {
    title: "Covid 19 Tracker",
    path: "/covid19",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Get Vaccine Updates",
    path: "/vaccine-covid-19",
    icon: <IoIcons.IoIosMedkit />,
  },
  {
    title: "Get IP Info",
    path: "/ip-info",
    icon: <IoIcons.IoIosGitNetwork />,
  },
];

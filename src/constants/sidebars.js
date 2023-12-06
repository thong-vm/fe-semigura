import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { QuestionMark } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";

export const sidebars = [
  {
    title: "Main sidebar",
    icon: <QuestionMark />,
    children: [],
  },
  {
    title: "Moromi",
    icon: <QuestionMark />,
    children: [
      {
        title: "Moromi",
        icon: <QuestionMark />,
        path: "/moromi",
      },
      {
        title: "Prepare Moromi",
        icon: <QuestionMark />,
        path: "/moromi/prepare-moromi",
      },
      {
        title: "Moromi General",
        icon: <QuestionMark />,
        path: "/moromi/general",
      },
      {
        title: "BMD",
        icon: <QuestionMark />,
        path: "/moromi/bmd",
      },
      {
        title: "Arukoru",
        icon: <QuestionMark />,
        path: "/moromi/arukoru",
      },
      {
        title: "Ekisu",
        icon: <QuestionMark />,
        path: "/moromi/ekisu",
      },
    ],
  },
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    path: "/dashboard",
  },
  {
    title: "Log out",
    icon: <LogoutIcon />,
    path: "/",
  },
];

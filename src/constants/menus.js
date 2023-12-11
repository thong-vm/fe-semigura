import * as ROUTES from "./routes";
export const menus = [
  {
    title: ROUTES.dashBoard.title,
    icon: ROUTES.dashBoard.icon,
    path: ROUTES.dashBoard.path,
  },
  {
    title: ROUTES.moromi.title,
    icon: ROUTES.moromi.icon,
    children: [
      {
        title: ROUTES.moromi.title,
        icon: ROUTES.moromi.icon,
        path: ROUTES.moromi.path,
      },
      {
        title: ROUTES.moromiImport.title,
        icon: ROUTES.moromiImport.icon,
        path: ROUTES.moromiImport.path,
      },
      {
        title: ROUTES.prepareMoromi.title,
        icon: ROUTES.prepareMoromi.icon,
        path: ROUTES.prepareMoromi.path,
      },
      {
        title: ROUTES.moromiGeneral.title,
        icon: ROUTES.moromiGeneral.icon,
        path: ROUTES.moromiGeneral.path,
      },
      {
        title: ROUTES.bmd.title,
        icon: ROUTES.bmd.icon,
        path: ROUTES.bmd.path,
      },
      {
        title: ROUTES.arukoru.title,
        icon: ROUTES.arukoru.icon,
        path: ROUTES.arukoru.path,
      },
      {
        title: ROUTES.ekisu.title,
        icon: ROUTES.ekisu.icon,
        path: ROUTES.ekisu.path,
      },
    ],
  },
  {
    title: ROUTES.logOut.title,
    icon: ROUTES.logOut.icon,
    path: ROUTES.logOut.path,
  },
];

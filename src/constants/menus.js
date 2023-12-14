import * as ROUTES from "./routes";
export const menus = [
  {
    title: ROUTES.dashBoard.title,
    icon: ROUTES.dashBoard.icon,
    path: ROUTES.dashBoard.path,
    translateName: ROUTES.dashBoard.translateName,
  },
  {
    title: ROUTES.moromi.title,
    icon: ROUTES.moromi.icon,
    translateName: ROUTES.moromi.translateName,
    children: [
      {
        title: ROUTES.moromi.title,
        icon: ROUTES.moromi.icon,
        path: ROUTES.moromi.path,
        translateName: ROUTES.moromi.translateName,
      },
      {
        title: ROUTES.moromiImport.title,
        icon: ROUTES.moromiImport.icon,
        path: ROUTES.moromiImport.path,
        translateName: ROUTES.moromiImport.translateName,
      },
      {
        title: ROUTES.prepareMoromi.title,
        icon: ROUTES.prepareMoromi.icon,
        path: ROUTES.prepareMoromi.path,
        translateName: ROUTES.prepareMoromi.translateName,
      },
      {
        title: ROUTES.moromiGeneral.title,
        icon: ROUTES.moromiGeneral.icon,
        path: ROUTES.moromiGeneral.path,
        translateName: ROUTES.moromiGeneral.translateName,
      },
      {
        title: ROUTES.bmd.title,
        icon: ROUTES.bmd.icon,
        path: ROUTES.bmd.path,
        translateName: ROUTES.bmd.translateName,
      },
      {
        title: ROUTES.arukoru.title,
        icon: ROUTES.arukoru.icon,
        path: ROUTES.arukoru.path,
        translateName: ROUTES.arukoru.translateName,
      },
      {
        title: ROUTES.ekisu.title,
        icon: ROUTES.ekisu.icon,
        path: ROUTES.ekisu.path,
        translateName: ROUTES.ekisu.translateName,
      },
    ],
  },
  {
    title: ROUTES.logOut.title,
    icon: ROUTES.logOut.icon,
    path: ROUTES.logOut.path,
    translateName: ROUTES.logOut.translateName,
  },
];

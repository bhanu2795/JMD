const routes = [
    {
      path: "/home",
      sidebarName: "Home",
      icon: Home,
      component: HomePage
    },
    {
      path: "/user",
      sidebarName: "User Profile",
      icon: Person,
      component: UserProfile
    },
    {
      path: "/table",
      sidebarName: "Table List",
      icon: "content_paste",
      component: TableList
    },
    {
      path: "/typography",
      sidebarName: "Typography",
      icon: LibraryBooks,
      component: Typography
    },
    {
      path: "/icons",
      sidebarName: "Icons",
      icon: BubbleChart,
      component: Icons
    },
    {
      path: "/maps",
      sidebarName: "Maps",
      icon: LocationOn,
      component: Maps
    },
    {
      path: "/notifications",
      sidebarName: "Notifications",
      icon: Notifications,
      component: NotificationsPage
    },
    { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
  ];
  
  export default routes;
  
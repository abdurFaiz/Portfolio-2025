import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import FunView from "@/views/FunView.vue";
import NotFoundView from "@/views/error/404View.vue";
import WNCaseStudyView from "@/views/work/WNCaseStudyView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/hello",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/fun",
    name: "fun",
    component: FunView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
  },
  {
    path: "/work/whats-next-case-study",
    name: "whats-next-case-study",
    component: WNCaseStudyView,
  },
];

export default routes;

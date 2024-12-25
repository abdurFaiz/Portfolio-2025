import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import FunView from "@/views/FunView.vue";
import NotFoundView from "@/views/error/404View.vue";
import WNCaseStudyView from "@/views/work/WNCaseStudyView.vue";
import FWSipaView from "@/views/work/FWSipaView.vue";
import FEGmedView from "@/views/work/FEGmedView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
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
    path: "/whats-next-case-study",
    name: "whats-next-case-study",
    component: WNCaseStudyView,
  },
  {
    path: "/sipa-new-face",
    name: "sipa-new-face",
    component: FWSipaView,
  },
  {
    path: "/integrator-web-case-study",
    name: "integrator-web-case-study",
    component: FEGmedView,
  },
];

export default routes;

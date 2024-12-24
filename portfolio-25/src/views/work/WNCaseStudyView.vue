
<script setup>
import DefaultLayoutView from "../layout/DefaultLayoutView.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const activeSection = ref("overview");
const isNavVisible = ref(false);

const sections = [
  {
    id: "overview",
    title: "Project Overview",
  },
  {
    id: "problem",
    title: "Problem",
  },
  {
    id: "solution",
    title: "Solution",
  },
  {
    id: "design-process",
    title: "Design Process",
  },
  {
    id: "design-activities",
    title: "Design Activities",
  },
  {
    id: "user-challenge",
    title: "User Challenge",
  },
  {
    id: "results",
    title: "Results",
  },
  {
    id: "learned",
    title: "I Learned",
  },
];

const updateNavigation = () => {
  // Get the boundary elements
  const overviewSection = document.getElementById("overview");
  const learnedSection = document.getElementById("results");

  if (overviewSection && learnedSection) {
    const overviewRect = overviewSection.getBoundingClientRect();
    const learnedRect = learnedSection.getBoundingClientRect();

    // Show nav when overview section top reaches viewport top and hide when learned section bottom passes viewport
    isNavVisible.value = overviewRect.top <= 100 && learnedRect.bottom >= 0;

    // Only update active section if nav is visible
    if (isNavVisible.value) {
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 0) {
            activeSection.value = section.id;
            break;
          }
        }
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateNavigation);
  updateNavigation();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateNavigation);
});

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <DefaultLayoutView>
    <section class="pt-16 md:pt-36">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-1 px-4 md:px-16 max-w-4xl">
          <h2
            class="font-LibreBaskerville text-[40px] md:text-[56px] text-light"
          >
            What’s Next?
          </h2>
          <p class="text-grayMist text-lg md:text-xl uppercase">
            Application designed to help users, particularly students and young
            adults, navigate the challenges of choosing the right educational
            path and career
          </p>
        </div>
        <div
          class="w-full flex md:flex-row flex-col-reverse justify-between bg-light items-center"
        >
          <div class="flex flex-col gap-2 px-4 md:py-16 md:pl-16 py-8">
            <h3 class="font-LibreBaskerville text-4xl md:text-5xl">Outcomes</h3>
            <ul class="flex flex-col gap-4 max-w-3xl">
              <li class="text-base md:text-lg text-greyDark font-medium">
                Built MVP
                <span class="text-accent font-semibold"
                  >features to guide students and young adults in exploring
                  education and career paths</span
                >, with personalized major recommendations and 1-on-1
                consultations
              </li>
              <li class="text-base md:text-lg text-greyDark font-medium">
                Conducted usability testing using prototypes to assess the
                gather insights
              </li>
              <li class="text-base md:text-lg text-greyDark font-medium">
                Delivered presentations to showcase the comprehensive scope and
                impact of my work
              </li>
            </ul>
          </div>
          <div class="w-full h-full">
            <img
              src="/src/assets/image/WhatsNext-Detail.png"
              alt=""
              class="object-cover w-full"
            />
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row justify-center gap-6 md:gap-48 px-4 md:px-16"
        >
          <div class="flex flex-col justify-center">
            <h3 class="font-LibreBaskerville text-[32px] text-light uppercase">
              Role
            </h3>
            <div class="flex flex-col">
              <span class="text-grayMist text-base md:text-lg">Researcher</span>
              <span class="text-grayMist text-base md:text-lg"
                >Visual Designer</span
              >
              <span class="text-grayMist text-base md:text-lg"
                >Interaction Designer</span
              >
            </div>
          </div>
          <div class="flex flex-col">
            <h3 class="font-LibreBaskerville text-[32px] text-light uppercase">
              My Impacts
            </h3>
            <div class="flex flex-col">
              <span class="text-grayMist text-base md:text-lg"
                >Conceptualized and conducted research</span
              >
              <span class="text-grayMist text-base md:text-lg"
                >Future vision development
              </span>
              <span class="text-grayMist text-base md:text-lg"
                >End-to-end Design</span
              >
              <span class="text-grayMist text-base md:text-lg"
                >Testing MVP features</span
              >
            </div>
          </div>
          <div class="flex flex-col">
            <h3 class="font-LibreBaskerville text-[32px] text-light uppercase">
              Duration
            </h3>
            <p class="text-grayMist text-base md:text-lg">
              1 Month - Status: <br />
              Researching - Designing - Testing
            </p>
          </div>
        </div>
        <div class="flex flex-row gap-10 md:px-16 mx-6">
          <!-- Main content -->
          <div class="flex flex-col gap-16 max-w-4xl">
            <!-- Project Overview Section -->
            <div id="overview" class="flex flex-col gap-3 max-w-3xl">
              <h4 class="text-grayMist uppercase text-base">
                Project Overview
              </h4>
              <p class="text-light text-xl flex flex-col gap-2">
                <span>
                  In 2045, Indonesia will enter its 'golden generation' with a
                  growing working-age population. To harness this potential and
                  achieve Sustainable Development Goals (SDGs), effective
                  education and career planning are key.
                </span>
                <span
                  >Motivated by this need, I created a mobile platform focused
                  on simplifying education and career decisions. From concept to
                  launch, I developed the app with a robust design system and
                  documentation, ensuring its lasting impact</span
                >
              </p>
            </div>

            <!-- Problem Section -->
            <div
              id="problem"
              class="p-4 md:py-20 md:px-32 rounded-3xl bg-greyDark flex flex-col md:flex-row"
            >
              <div class="flex flex-col gap-4 w-full">
                <h4 class="text-grayMist uppercase text-base">Problem</h4>
                <p
                  class="text-light font-LibreBaskerville text-2xl md:text-4xl leading-10"
                >
                  Gap between education choices and career readiness impacts
                  Indonesian youth's professional development
                </p>
                <p class="text-light text-xl flex flex-col gap-3">
                  <span>
                    Indonesia faces a significant gap between education and
                    career readiness. Studies reveal that 87% of university
                    students regret their choice of major, often because they
                    enter higher education without a clear direction, unsure of
                    what to pursue after high school. Among final-year students,
                    83% struggle with low self-confidence, while 80% have
                    negative perceptions of their career prospects. These issues
                    are further compounded by their lack of experience and
                    essential soft skills, leaving many unprepared for the
                    demands of the professional world.</span
                  >
                  <span class="pt-3">
                    <span class="uppercase text-grayMist"
                      >Why is this important?</span
                    ><br />
                    This education-career gap is particularly concerning as
                    Indonesia approaches its demographic bonus in 2045. Without
                    addressing these issues, the country risks missing out on
                    the potential of its growing workforce, as students graduate
                    unprepared for professional demands.
                  </span>
                </p>
              </div>
            </div>
            <!-- solution -->
            <div
              id="solution"
              class="p-4 md:py-20 md:px-32 rounded-3xl bg-greyDark flex flex-col md:flex-row"
            >
              <div class="flex flex-col gap-4 w-full">
                <h4 class="text-grayMist uppercase text-base">Solution</h4>
                <p
                  class="text-light font-LibreBaskerville text-2xl md:text-4xl leading-10"
                >
                  To address Indonesia's education-career gap where 87% of
                  students feel misplaced in their majors and many lack
                  professional confidence
                </p>
                <p class="text-light text-xl flex flex-col gap-3">
                  <span>
                    "What's next?" offers a comprehensive solution. This mobile
                    app guides students through critical education and career
                    decisions using MBTI personality assessments, curated
                    university recommendations, and direct mentorship from
                    industry professionals. Through personalized guidance and
                    practical skill development via bootcamps, the app bridges
                    the gap between academic choices and career readiness,
                    helping Indonesian youth make informed decisions about their
                    future.</span
                  >
                </p>
              </div>
            </div>
            <!-- Process -->
            <div
              id="design-process"
              class="p-4 md:py-20 md:px-32 rounded-3xl bg-greyDark flex flex-col md:flex-row"
            >
              <div class="flex flex-col gap-4 w-full">
                <h4 class="text-grayMist uppercase text-base">
                  Design Process
                </h4>
                <img
                  src="/src/assets/image/Design-Process.png"
                  alt=""
                  class="object-cover w-full h-auto"
                />
                <p class="text-light text-xl flex flex-col gap-3">
                  To approach problem solving and solution development,
                  <span class="text-accent"
                    >I use the Double Diamond design process</span
                  >. This iterative framework provides a structured yet
                  adaptable method that allows for thorough, user-centered
                  exploration and refinement at every stage of a project.
                </p>
              </div>
            </div>
            <!-- design activities -->
            <div
              id="design-activities"
              class="p-4 md:py-20 md:px-32 rounded-3xl bg-greyDark flex flex-col md:flex-row"
            >
              <div class="flex flex-col gap-4 w-full">
                <h4 class="text-grayMist uppercase text-base">
                  Design Activities Process
                </h4>
                <img
                  src="/src/assets/image/detail-process.png"
                  alt=""
                  class="object-cover w-full h-auto"
                />
                <p class="text-light text-xl flex flex-col gap-3">
                  Throughout the project, I employed a variety of design
                  activities to gain a holistic understanding of the user
                  experience. This multifaceted approach ensured the final
                  design effectively addressed user needs while staying true to
                  Spotify's brand identity.
                </p>
              </div>
            </div>
            <!-- insight research -->
            <div
              id="design-activities"
              class="p-4 md:py-20 md:px-32 rounded-3xl bg-greyDark flex flex-col md:flex-row"
            >
              <div class="flex flex-col gap-4 w-full">
                <h4 class="text-grayMist uppercase text-base">
                  Insight Research
                </h4>
                <img
                  src="/src/assets/image/data-research.png"
                  alt=""
                  class="object-cover w-full h-auto"
                />
                <p class="text-light text-xl flex flex-col gap-3">
                  <span>
                    Research reveals that 87% of students feel mismatched with
                    their chosen majors, 83% lack confidence in career planning,
                    and 80% have a negative self-view. Users face challenges
                    like difficulty finding reliable study and career
                    information, lack of personalized guidance, and anxiety due
                    to social pressures and inadequate preparation.
                  </span>
                  <span>
                    The "What’s Next?" app addresses these needs by providing a
                    centralized, user-friendly platform with intuitive
                    navigation, interactive features like MBTI tests, mentoring,
                    and bootcamps, and options to personalize the user
                    experience. While users praise the app's effectiveness and
                    accessibility, feedback highlights the need for more
                    detailed bootcamp descriptions and optimized MBTI test
                    timing. The app is on track to meet user needs, with room
                    for growth in feature enrichment and accessibility.</span
                  >
                </p>
              </div>
            </div>

            <!-- user challenge -->
            <div id="user-challenge" class="flex flex-col gap-10">
              <p
                class="text-light font-LibreBaskerville text-2xl md:text-4xl px-10 leading-10 max-w-3xl"
              >
                How can users struggling with decisions, information, and skills
                be supported?
              </p>
              <div
                class="p-4 md:py-20 md:px-32 rounded-3xl bg-greyDark flex flex-col md:flex-row"
              >
                <div class="flex flex-col gap-4 w-full">
                  <h4 class="text-grayMist uppercase text-base">
                    User Challenge
                  </h4>

                  <p class="text-light text-xl flex flex-col gap-3">
                    <span>
                      The "What’s Next?" app offers MBTI tests for personalized
                      study recommendations, mentor consultations via chat or
                      video calls for tailored guidance, university
                      recommendations based on accreditation and suitability,
                      and bootcamps to develop practical skills such as
                      leadership, communication, and technology.</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <!-- result -->
            <div id="results" class="flex flex-col gap-10">
              <div
                class="p-4 md:py-20 md:pl-32 md:pr-12 rounded-3xl bg-greyDark flex flex-col md:flex-row"
              >
                <div class="flex flex-col md:flex-row gap-6 w-full">
                  <div class="flex flex-col gap-4">
                    <h4 class="text-grayMist uppercase text-base">Result</h4>
                    <p
                      class="text-light font-LibreBaskerville text-2xl md:text-4xl leading-10 max-w-3xl"
                    >
                      MVP successfully launched at the end of May 2024
                    </p>
                    <p class="text-light text-xl flex flex-col gap-3">
                      <ul class="flex flex-col gap-4 max-w-3xl">
                        <li class="text-base md:text-lg text-light font-medium">
                          Built MVP
                          <span class="text-accent font-semibold"
                            >features to guide students and young adults in exploring
                            education and career paths</span
                          >, with personalized major recommendations, 1-on-1
                          consultations, university recommendations based on accreditation and suitability, and bootcamps to develop practical skills 
                        </li>
                        <li class="text-base md:text-lg text-light font-medium">
                          Conducted usability testing using prototypes to assess the
                          gather insights
                        </li>
                        <li class="text-base md:text-lg text-light font-medium">
                          Delivered presentations to showcase the comprehensive scope and
                          impact of my work
                        </li>
                      </ul>
                    </p>
                    <a href="https://www.figma.com/proto/RSffnXYKjVIbZUru13Uous/UX-Case-Study-%7C-What's-next%3F?page-id=86%3A817&node-id=116-16389&p=f&viewport=399%2C52%2C0.05&t=PO38cm2RPwhFwMWO-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=116%3A14870" target="_blank" class="text-base font-semibold text-light px-4 py-2 rounded-xl bg-accent w-fit">App Live</a>
                  </div>
                  <div class="size-auto">
                    <video
                      src="/src/assets/video/case-study-wn.mp4"
                      autoplay="true"
                      loop="true"
                      class="max-w-80 h-auto"
                    ></video>
                  </div>
                </div>
              </div>
            </div>
            <!-- i learned -->
            <div id="learned" class="flex flex-col gap-10">
              <div
                class="p-4 md:py-20 md:pl-32 md:pr-12 rounded-3xl flex-col md:flex-row"
              >
                <div class="flex flex-col md:flex-row gap-6 w-full">
                  <div class="flex flex-col gap-4">
                    <h4 class="text-grayMist uppercase text-base">I learned…

</h4>
                    <p
                      class="text-light font-LibreBaskerville text-2xl md:text-4xl leading-10 max-w-3xl"
                    >
                    Pushing the boundaries with the power of problem solving                    </p>
                    <p class="text-light text-xl flex flex-col gap-3">
                      <span>I've learned that relying on assumptions instead of data can limit design quality. Creating a consistent design system and focusing on user experience are key to better navigation and usability.</span>
                      <span>This project was my first deep dive into UI/UX, where I explored roles like UX researcher, writer, and interaction design. Challenges like usability testing and system organization taught me valuable problem-solving and planning skills, significantly improving my design abilities.</span>
                      
                      
                      
                    </p>
                  </div>
                  <div class="size-auto">
                
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sticky Navigation -->
          <div
    v-show="isNavVisible"
    class="fixed right-16 top-24 hidden md:flex flex-col gap-6 max-w-60 w-full transition-opacity duration-300"
    :class="{ 'opacity-100': isNavVisible, 'opacity-0': !isNavVisible }"
  >
    <p class="text-grayMist text-base">On This Page</p>
    <nav class="flex flex-col gap-2">
      <button
        v-for="section in sections"
        :key="section.id"
        @click="scrollToSection(section.id)"
        :class="[
          'text-left px-4 py-2 rounded-md transition-all duration-500 transform',
          'hover:bg-greyDark hover:text-light',
          activeSection === section.id 
            ? 'bg-greyDark text-light px-8 py-4' 
            : 'text-grayMist'
        ]"
      >
        {{ section.title }}
      </button>
    </nav>
  </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-6 md:gap-10 px-6 md:px-32 justify-center ">
        <h4 class="font-LibreBaskerville text-light text-3xl md:text-6xl">Next Project</h4>
        <div class="flex flex-col gap-4 max-w-xl">
          <div class="flex flex-col gap-4 relative">
            <img src="/src/assets/image/VarXSentry.png" alt="" class="max-w-xl h-auto w-full rounded-2xl">
            <div class="absolute top-6 left-6">
                  <div class="flex gap-3">
                    <div
                      class="w-fit px-2 py-1 rounded-full bg-grayMist/50 backdrop-blur-2xl"
                    >
                      <p class="text-light text-sm">CASE STUDY</p>
                    </div>
                    <div
                      class="w-fit px-2 py-1 rounded-full bg-grayMist/50 backdrop-blur-2xl"
                    >
                      <p class="text-light text-sm">WEBSITE</p>
                    </div>
                  </div>
                </div>
          </div>
          <div class="flex flex-col gap-2">

            <h6 class="font-LibreBaskerville text-light text-2xl">                Sentry Error Monitoring Integration
            </h6>
            <p
                class="text-grayMist text-base leading-7 line-clamp-3"
              >
                Sentry Error Monitoring Integration connects two websites with
                Sentry to enable real-time error tracking and efficient issue
                resolution, enhancing system reliability
              </p>
          </div>
          <router-link
                to="/sentry-project"
                class="text-light text-base md:text-lg leading-7 gap-1 flex items-center hover:px-3 hover:py-[6px] hover:rounded-full hover:bg-greyDark w-fit hover:shadow-xl hover:shadow-indigo-50/10 transform transition-all duration-500 ease-in-out"
              >
                VIEW
                <img src="/src/assets/icon/thin-arrow-right.svg" width="24px" alt="" />
              </router-link>
        </div>
      </div>
    </section>
  </DefaultLayoutView>
</template>

<style scoped>
.fixed {
  position: fixed;
  z-index: 40;
}
</style>
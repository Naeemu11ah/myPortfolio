import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";
import projectOne from "../assets/images/shelters.png";
import projectTwo from "../assets/images/amazon.png";
import projectThree from "../assets/images/pwSkills.png";
import projectFour from "../assets/images/calculator.png";
import projectFive from "../assets/images/currencyConverter.png";
import projectSix from "../assets/images/ticTacToe.png";
import projectSeven from "../assets/images/todo.png";
import projectEight from "../assets/images/weatherApp.png";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Project() {
  const projects = [
    {
      img: projectOne,
      name: "Shelters",
      github_link: "https://github.com/Naeemu11ah/Shelters.git",
      live_link: "https://shelters-production.up.railway.app/list",
      video_link:
        "https://www.linkedin.com/posts/naeemullah-%7E-081059352_full-stack-web-app-built-using-express-js-activity-7418326193201987585-iUQT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFftsiEB4tZusIFGExXzwDNsmOyFmnG3S1s",
    },
    {
      img: projectTwo,
      name: "Amazon Clone",
      github_link: "https://github.com/Naeemu11ah/amazon-web-project.git",
      video_link:
        "https://www.linkedin.com/posts/naeemullah-%7E-081059352_programming-activity-7366779950885961728-gqoV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFftsiEB4tZusIFGExXzwDNsmOyFmnG3S1s",
    },
    {
      img: projectThree,
      name: "PW Skills Clone",
      github_link: "https://github.com/Naeemu11ah/PW_skills_web_Home-page.git",
      video_link:
        "https://www.linkedin.com/posts/naeemullah-%7E-081059352_programming-activity-7367138094132752384-J95F?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFftsiEB4tZusIFGExXzwDNsmOyFmnG3S1s",
    },
    {
      img: projectFour,
      name: "Calculator",
      github_link: "https://github.com/Naeemu11ah/Calculator.git",
      video_link:
        "https://www.linkedin.com/posts/naeemullah-%7E-081059352_programming-activity-7368210423755517952-SEpg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFftsiEB4tZusIFGExXzwDNsmOyFmnG3S1s",
    },
    {
      img: projectFive,
      name: "Currency Converter",
      github_link: "https://github.com/Naeemu11ah/Currency_converter.git",
      video_link:
        "https://www.linkedin.com/posts/naeemullah-%7E-081059352_programming-activity-7367497486720012288-ITnK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFftsiEB4tZusIFGExXzwDNsmOyFmnG3S1s",
    },
    {
      img: projectSix,
      name: "Tic Tac Toe",
      github_link: "https://github.com/Naeemu11ah/Tic_Tac_Toe.git",
      video_link:
        "https://www.linkedin.com/posts/naeemullah-%7E-081059352_tic-tac-toe-activity-7365418205504286720-3ybc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFftsiEB4tZusIFGExXzwDNsmOyFmnG3S1s",
    },
    {
      img: projectSeven,
      name: "ToDo App",
      github_link: "https://github.com/Naeemu11ah/Todo-App-with-React.git",
      video_link:
        "https://www.linkedin.com/posts/naeemullah-%7E-081059352_todo-by-react-a-practice-questions-of-activity-7422312494125441024-BDOP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFftsiEB4tZusIFGExXzwDNsmOyFmnG3S1s",
    },
    {
      img: projectEight,
      name: "Weather App",
      github_link: "https://github.com/Naeemu11ah/Weather-App.git",
      video_link:
        "https://www.linkedin.com/posts/naeemullah-%7E-081059352_created-weather-app-to-practice-react-activity-7425209426967560193-co8g?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFftsiEB4tZusIFGExXzwDNsmOyFmnG3S1s",
    },
  ];
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let busy = false;
    const onWheel = (e) => {
      e.preventDefault();
      if (busy) return;
      const delta = e.deltaY || e.deltaX;
      if (delta > 0) {
        swiperRef.current?.slideNext();
      } else if (delta < 0) {
        swiperRef.current?.slidePrev();
      }
      busy = true;
      setTimeout(() => (busy = false), 220);
    };
    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section id="projects" className="py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold mb-7">
          My <span className="text-cyan-600">Projects</span>
        </h3>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-12/13 w-full h-full ">
          <div ref={containerRef} className="w-full">
            <Swiper
              slidesPerView={1.1}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              loop={true}
              pagination={{
                clickable: true,
              }}
              onSwiper={(s) => (swiperRef.current = s)}
              modules={[Pagination]}
            >
              {projects.map((project_info, i) => (
                <SwiperSlide key={i}>
                  <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                    <img
                      src={project_info.img}
                      alt=""
                      className="rounded-lg md:h-52 md:w-full"
                    />
                    <h3 className="text-xl my-4">{project_info.name}</h3>
                    <div className="flex gap-3">
                      <a
                        href={project_info.github_link}
                        target="_blank"
                        className="bg-cyan-600 text-gray-300 px-2 md:px-3 font-semibold py-1 inline-block rounded-lg"
                      >
                        Github
                      </a>
                      {project_info.live_link && (
                        <a
                          href={project_info.live_link}
                          target="_blank"
                          className="bg-cyan-600 text-gray-300 px-2 md:px-3 font-semibold rounded-lg py-1 inline-block"
                        >
                          Live
                        </a>
                      )}
                      <a
                        href={project_info.video_link}
                        target="_blank"
                        className="bg-cyan-600 text-gray-300 px-2 md:px-3 font-semibold rounded-lg py-1 inline-block"
                      >
                        Video
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

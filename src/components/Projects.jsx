import { PROJECTS } from "../constant";
import { motion } from "framer-motion";
import { SiVercel } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="">
        {PROJECTS.map((project, index) => (
          <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <div className="w-[12rem] mb-2 h-[100px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-6 rounded w-full h-full"
                />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className=" px-2 py-1 mb-4  text-sm font-medium text-purple-800  mr-2 rounded bg-neutral-900"
                >
                  {tech}
                </span>
              ))}
              <div className="flex items-center justify-between my-4 max-w-[23rem]">
                <span className="flex items-center gap-4">
                  <FaGithub className="text-4xl" />{" "}
                  <a
                    href={project.git}
                    target="blank"
                    className="text-sm hover:underline"
                  >
                    View code
                  </a>
                </span>
                <span className="flex items-center gap-4">
                  <SiVercel className=" text-3xl" />{" "}
                  <a
                    href={project.href}
                    target="blank"
                    className="text-sm hover:underline"
                  >
                    Live preview
                  </a>
                </span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

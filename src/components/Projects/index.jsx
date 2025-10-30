import { useState, useEffect } from "react"
import "./style.css"
import BackgroundLines from "../BackgroundLines"
import WorkCard from "../WorkCard"
import ScrambleText from "../ScrambleText"
import ParaWriting from "../ParaWriting"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import work1 from "../../assets/Images/Final Project picture.png"
import work2 from "../../assets/Images/Booksite thumbnail.png"
import work3 from "../../assets/Images/movie search engine thumbnail.png"
import work4 from "../../assets/Images/netflix_clone-thumbnail.png"
import work5 from "../../assets/Images/Chat Thumbnail-img.png"
import work6 from "../../assets/Images/ultraverse-thumbnail.png"
import work7 from "../../assets/Images/Skintristic AI THumbnail.png"
import work8 from "../../assets/Images/Old Portfolio.png"
import work9 from "../../assets/Images/Summarist Thumbnail.png"

export default function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleComplete = () => {
    setHasAnimated(true)
  }

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible")
    }
  }, [inView, controls])

  const works = [
    {
      client: "Internship",
      year: "2025",
      img: work1,
      title: "Revamping Template Brands.",
      detail: "",
      site: "https://youngkobi.github.io/Module-2-final-project/",
    },
    {
      client: "Frontend Simplified",
      year: "2025",
      img: work2,
      title: "Example library Project.",
      detail: "",
      site: "https://module-5-ecommerence.vercel.app/",

    },
    {
      client: "Personal Project",
      year: "2025",
      img: work3,
      title: "Movie Project",
      detail: "",
      site: "https://movie-clone-reast-final.vercel.app/",
    },
    {
     client: "Personal Project",
      year: "2025",
      img: work4,
      title: "Cloning a popular streaming.",
      detail: "",
      site: "https://netflix-clone-murex-two-44.vercel.app/",
    },
    {
     client: "Personal Project",
      year: "2025",
      img: work5,
      title: "Advancing in AI",
      detail: "",
      site: "https://quick-gpt-frontend-five.vercel.app/",
    },
    {
     client: "Internship",
      year: "2025",
      img: work6,
      title: "NFT Appreciation",
      detail: "",
      site: "https://jakobi-internship.vercel.app/",
    },
    {
     client: "Skintristic AI",
      year: "2025",
      img: work7,
      title: "SKin Care AI Mock",
      detail: "",
      site: "https://skintristic-ai.vercel.app/",
    },
    {
     client: "Personal Project",
      year: "2025",
      img: work8,
      title: "Portfolio Variant",
      detail: "",
      site: "youngkobi-eportfolio.vercel.app",
    },
    {
     client: "Frontend Simplified",
      year: "2025",
      img: work9,
      title: "Library Audible Clone",
      detail: "",
      site: "https://summarist-steel.vercel.app/",
    },
  ]

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 0.5 }} className="projects--grid--title">
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              )
            })}
          </div>
        </div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 1 }} onAnimationComplete={() => handleComplete()} className="projects--grid--detail">
          <p className="theme--detail">
            <ScrambleText delay={1}>Discover a curated portfolio of projects where each line of code tells a story of problem-solving, creativity, and technical finesse.</ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

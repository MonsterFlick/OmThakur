"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const projects = [
  {
    name: "Terminal Portfolio",
    purpose: "Interactive terminal-style portfolio website",
    feature: "AI-prompt responses for unique user experience",
    url: "https://om-thakur.vercel.app/",
    category: "Web",
    image: "/terminal.png?height=300&width=400",
  },
  {
    name: "MonsterFPS",
    purpose: "Windows optimization tool for FPS stability",
    feature: "Safe-revert optimization system for gaming",
    url: "https://monsterfps.netlify.app/",
    category: "Tools",
    image: "/monsterFPS.png?height=300&width=400",
  },
  {
    name: "Agni",
    purpose: "Local automation agent using natural language",
    feature: "Safe PC automation with security rules",
    url: "https://github.com/MonsterFlick/Agni",
    category: "AI",
    image: "/agni.png?height=300&width=400",
  },
]

const categories = ["All", "Web", "Tools", "AI"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing backend systems, AI integrations, and developer tools.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-full pt-[56.25%] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="inline-block px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                        {project.name}
                      </h3>
                    </div>

                    {/* Icon link */}
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        asChild
                        size="icon"
                        variant="ghost"
                        className="rounded-full w-10 h-10 sm:w-9 sm:h-9"
                      >
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.name}`}
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      </Button>
                    </motion.div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-2">
                    {project.purpose}
                  </p>

                  <p className="text-primary/80 text-sm font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {project.feature}
                  </p>
                </div>

                {/* Overlay CTA */}
                <div
                  className="absolute inset-0 flex items-center justify-center bg-background/80
                  opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                  transition-opacity duration-300
                  pointer-events-auto sm:pointer-events-none sm:group-hover:pointer-events-auto"
                >
                  <Button asChild className="gap-2">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

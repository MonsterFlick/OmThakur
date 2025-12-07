"use client"
import React from "react";
import { motion } from "framer-motion";
import { Award, UserCheck, FileChartPie } from "lucide-react";

const achievements = [
  {
    title: "Data Science Training Certificate",
    subtitle: "Internshala Trainings",
    description: "Completed Data Science Training with hands-on projects.",
    icon: FileChartPie,
    link: "https://trainings.internshala.com/verify-certificate/?certificate_number=263gl7b3rur",
    linkLabel: "View Certificate",
  },
  {
    title: "Assistant Professor (Volunteer)",
    subtitle: "Bhimrao Pradhan College, Mumbai University",
    description: "Taught B.Sc. IT students, delivered core subjects, mentored students, and created educational content (June 2024 – August 2024).",
    icon: UserCheck,
  },
  {
    title: "First Rank – B.Sc. IT (College Topper)",
    subtitle: "Sonubhau Baswant College, Mumbai University",
    description: "Secured the First Rank in B.Sc. IT for exceptional academic performance (April 2024).",
    icon: Award,
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Highlights</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">Achievements & Recognition</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border flex flex-col items-center text-center h-full"
            >
              <div className="flex flex-col items-center gap-2 mb-4 w-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <div className="text-sm text-muted-foreground">{item.subtitle}</div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm"
                >
                  {item.linkLabel}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

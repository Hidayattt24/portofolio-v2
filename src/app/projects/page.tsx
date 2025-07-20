"use client";

import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import { FloatingConnectDock } from "@/components/FloatingConnectDock";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#EBF1F4] to-[#e2e8f0] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-[#A3D977] transition-colors mr-4"
                >
                  ← Back to Home
                </Link>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2 tracking-tight">
                Projects
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                My development work and creative solutions
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#A3D977] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  {projects.length} Projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 mb-8">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="inline-flex items-center bg-[#A3D977] text-white px-4 py-2 rounded-full text-sm font-semibold">
                          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                          {project.category}
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : project.status === "in-progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {project.status.replace("-", " ")}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#A3D977] transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-[#A3D977]/10 text-[#A3D977] px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-600 flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-[#A3D977] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenges & Solutions */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">
                        Challenges & Solutions:
                      </h4>
                      <div className="space-y-3">
                        {project.challenges.map((challenge, index) => (
                          <div key={index} className="text-sm">
                            <p className="text-red-600 font-medium mb-1">
                              Challenge: {challenge}
                            </p>
                            {project.solutions[index] && (
                              <p className="text-green-600">
                                Solution: {project.solutions[index]}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center space-x-4 pt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                      >
                        View Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-[#A3D977] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#92C765] transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Image */}
                <div className="space-y-4">
                  <div className="relative h-64 bg-white/50 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    {project.images.length > 0 ? (
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-400">
                        <span className="text-white text-4xl">💻</span>
                      </div>
                    )}
                  </div>

                  {/* Project Meta */}
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span className="font-medium">Role:</span>
                      <span>{project.role}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Started:</span>
                      <span>{project.startDate}</span>
                    </div>
                    {project.endDate && (
                      <div className="flex justify-between">
                        <span className="font-medium">Completed:</span>
                        <span>{project.endDate}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 text-center">
            <div className="text-3xl font-bold text-[#A3D977] mb-2">
              {projects.length}
            </div>
            <p className="text-gray-600 font-medium">Total Projects</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 text-center">
            <div className="text-3xl font-bold text-[#A3D977] mb-2">
              {projects.filter((p) => p.status === "completed").length}
            </div>
            <p className="text-gray-600 font-medium">Completed</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 text-center">
            <div className="text-3xl font-bold text-[#A3D977] mb-2">
              {projects.filter((p) => p.status === "in-progress").length}
            </div>
            <p className="text-gray-600 font-medium">In Progress</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 text-center">
            <div className="text-3xl font-bold text-[#A3D977] mb-2">
              {
                Array.from(new Set(projects.flatMap((p) => p.technologies)))
                  .length
              }
            </div>
            <p className="text-gray-600 font-medium">Technologies</p>
          </div>
        </div>

        {/* Floating Connect Dock */}
        <FloatingConnectDock />
      </div>
    </div>
  );
}

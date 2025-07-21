"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FloatingConnectDock } from "@/components/FloatingConnectDock";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Home() {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [storyProgress, setStoryProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const router = useRouter();

  // Sample activities/stories data
  const stories = [
    {
      id: 1,
      type: "image",
      src: "/image/project/[Coding Camp 2025 - University] Best Capstone Project - FC322D5Y1088 (1).jpg",
      title: "Best Capstone Project Award",
      timestamp: "2 days ago",
      duration: 5000, // 5 seconds
    },
    {
      id: 2,
      type: "image",
      src: "/image/juara/sertifikat juara 2.png",
      title: "2nd Place Achievement",
      timestamp: "1 week ago",
      duration: 5000,
    },
    {
      id: 3,
      type: "image",
      src: "/image/sertifikat/English for Business Communication.png",
      title: "English Certificate",
      timestamp: "2 weeks ago",
      duration: 5000,
    },
  ];

  // Auto-progress stories
  useEffect(() => {
    if (!isStoryModalOpen || isPaused) return;

    const timer = setInterval(() => {
      setStoryProgress((prev) => {
        if (prev >= 100) {
          // Move to next story
          if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex((prevIndex) => prevIndex + 1);
            return 0;
          } else {
            // Close modal when all stories are done
            setIsStoryModalOpen(false);
            setCurrentStoryIndex(0);
            return 0;
          }
        }
        return prev + 100 / (stories[currentStoryIndex]?.duration / 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isStoryModalOpen, currentStoryIndex, stories, isPaused]);

  // Reset progress when story changes
  useEffect(() => {
    setStoryProgress(0);
  }, [currentStoryIndex]);

  // Close story with ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isStoryModalOpen) {
        closeStory();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isStoryModalOpen]);

  // Hide tooltip after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const nextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex((prev) => prev + 1);
    } else {
      setIsStoryModalOpen(false);
      setCurrentStoryIndex(0);
    }
  };

  const prevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prev) => prev - 1);
    }
  };

  const closeStory = () => {
    setIsStoryModalOpen(false);
    setCurrentStoryIndex(0);
    setStoryProgress(0);
    setIsPaused(false);
  };

  const handleStoryClick = () => {
    setIsPaused(!isPaused);
  };

  const handleNavigateToAchievement = () => {
    router.push("/achievement");
  };

  const handleNavigateToCertificate = () => {
    router.push("/certificate");
  };

  const handleNavigateToProjects = () => {
    router.push("/projects");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#EBF1F4] to-[#e2e8f0] p-4 md:p-8">
      <SmoothCursor />
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2 tracking-tight">
                Hidayat Nur Hakim
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Full-Stack Developer & UI/UX Designer
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {/* Profile Card - Takes full width */}
          <div className="md:col-span-4 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="flex items-start space-x-6">
              <div
                className="w-24 h-24 relative flex-shrink-0 cursor-pointer group"
                onClick={() => setIsStoryModalOpen(true)}
              >
                {/* Green border with glow effect like chat indicator */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#A3D977] via-[#7BC142] to-[#A3D977] p-[3px] group-hover:scale-105 transition-all duration-300 shadow-lg shadow-[#A3D977]/30">
                  <div className="w-full h-full rounded-2xl bg-white p-[2px]">
                    <Image
                      src="/image/profil/photo-dayat.png"
                      alt="Hidayat Nur Hakim"
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
                {/* Green pulse animation for new story indicator */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-tr from-[#A3D977] to-[#7BC142] rounded-full animate-pulse border-2 border-white"></div>

                {/* Tooltip with 10 second auto-hide - white background with green text */}
                {showTooltip && (
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-[#A3D977] text-xs px-3 py-2 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap z-20 font-medium animate-pulse">
                    Click this stories
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-l border-t border-gray-200 rotate-45"></div>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center bg-[#A3D977] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  About
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Hi! I am a third-year Informatics student at Universitas Syiah
                  Kuala (USK), currently deepening my knowledge in Web
                  Development with a strong passion for UI/UX Design. My journey
                  in tech began with curiosity and creativity, building
                  intuitive digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Education Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {/* Experience Section */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="inline-flex items-center bg-[#A3D977] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Experience
            </div>
            <div className="space-y-6">
              <div className="group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-900 group-hover:text-[#A3D977] transition-colors">
                    Head of Student Welfare Management
                  </h4>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    Current
                  </span>
                </div>
                <p className="text-sm text-gray-600 font-medium mb-1">
                  Himpunan Mahasiswa Informatika USK
                </p>
                <p className="text-xs text-gray-500">Feb 2025 - Present</p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

              <div className="group">
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#A3D977] transition-colors">
                  Front-End & Back-End Developer
                </h4>
                <p className="text-sm text-gray-600 font-medium mb-1">
                  Coding Camp powered by DBS Foundation
                </p>
                <p className="text-xs text-gray-500">Feb 2025 - Jul 2025</p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

              <div className="group">
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#A3D977] transition-colors">
                  Staff of Student Welfare Management
                </h4>
                <p className="text-sm text-gray-600 font-medium mb-1">
                  Himpunan Mahasiswa Informatika USK
                </p>
                <p className="text-xs text-gray-500">Feb 2024 - Feb 2025</p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="inline-flex items-center bg-[#A3D977] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Education
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="relative w-24 h-24 mb-6">
                <Image
                  src="/image/education/usk.png"
                  alt="Universitas Syiah Kuala"
                  fill
                  className="rounded-2xl object-contain"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-gray-900 text-base">
                  Universitas Syiah Kuala
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  Bachelor&apos;s degree, Computer Science
                </p>
                <p className="text-xs text-gray-500">Aug 2022 - Present</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects, Certificates & Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Achievement Section */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group cursor-pointer"
            onClick={handleNavigateToAchievement}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center bg-[#A3D977] text-white px-4 py-2 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Achievement
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-[#A3D977] to-[#7BC142] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-32 bg-gradient-to-br from-[#A3D977]/10 to-[#7BC142]/10 rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#A3D977] to-[#7BC142] rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#A3D977] transition-colors">
                  2nd Place Winner
                </h3>
                <p className="text-sm text-gray-600">
                  Outstanding performance in competitive programming contest
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 bg-[#A3D977] rounded-full"></div>
                    <span>Competition Achievement</span>
                  </div>
                  <div className="text-xs text-[#A3D977] font-medium group-hover:text-[#7BC142] transition-colors">
                    View Details &rarr;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Section */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group cursor-pointer"
            onClick={handleNavigateToCertificate}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center bg-[#A3D977] text-white px-4 py-2 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Certificate
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-[#A3D977] to-[#7BC142] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-32 bg-gradient-to-br from-[#A3D977]/10 to-[#7BC142]/10 rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#A3D977] to-[#7BC142] rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#A3D977] transition-colors">
                  Best Capstone Project
                </h3>
                <p className="text-sm text-gray-600">
                  Recognized for excellence in final year capstone project
                  development
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 bg-[#A3D977] rounded-full"></div>
                    <span>Academic Excellence</span>
                  </div>
                  <div className="text-xs text-[#A3D977] font-medium group-hover:text-[#7BC142] transition-colors">
                    View Details &rarr;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group cursor-pointer"
            onClick={handleNavigateToProjects}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center bg-[#A3D977] text-white px-4 py-2 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Projects
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-[#A3D977] to-[#7BC142] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-32 bg-gradient-to-br from-[#A3D977]/10 to-[#7BC142]/10 rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#A3D977] to-[#7BC142] rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#A3D977] transition-colors">
                  Featured Projects
                </h3>
                <p className="text-sm text-gray-600">
                  Explore my latest web development and UI/UX design projects
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 bg-[#A3D977] rounded-full"></div>
                    <span>Web Development</span>
                  </div>
                  <div className="text-xs text-[#A3D977] font-medium group-hover:text-[#7BC142] transition-colors">
                    View Projects &rarr;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Connect Dock */}
        <FloatingConnectDock />

        {/* Instagram-like Story Modal */}
        {isStoryModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <div className="relative w-full h-full max-w-md mx-auto">
              {/* Story Progress Bars */}
              <div className="absolute top-4 left-4 right-4 flex space-x-1 z-10">
                {stories.map((_, index) => (
                  <div
                    key={index}
                    className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
                  >
                    <div
                      className={`h-full bg-white transition-all duration-100 ${
                        index === currentStoryIndex
                          ? ""
                          : index < currentStoryIndex
                          ? "w-full"
                          : "w-0"
                      }`}
                      style={{
                        width:
                          index === currentStoryIndex
                            ? `${storyProgress}%`
                            : index < currentStoryIndex
                            ? "100%"
                            : "0%",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Close Button */}
              <button
                onClick={closeStory}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black/20 hover:bg-black/40"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Story Content */}
              <div
                className="w-full h-full flex items-center justify-center p-4 cursor-pointer"
                onClick={handleStoryClick}
              >
                <div className="w-full max-w-sm">
                  {/* Profile Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 relative">
                      <Image
                        src="/image/profil/photo-dayat.png"
                        alt="Hidayat Nur Hakim"
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        Hidayat Nur Hakim
                      </p>
                      <p className="text-white/70 text-xs">
                        {stories[currentStoryIndex]?.timestamp}
                      </p>
                    </div>
                  </div>

                  {/* Story Image */}
                  <div className="relative w-full aspect-[9/16] bg-white/10 rounded-2xl overflow-hidden">
                    <Image
                      src={stories[currentStoryIndex]?.src || ""}
                      alt={stories[currentStoryIndex]?.title || ""}
                      fill
                      className="object-contain"
                    />
                    {/* Pause indicator */}
                    {isPaused && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Story Title */}
                  <div className="mt-4 text-center">
                    <p className="text-white font-medium text-sm">
                      {stories[currentStoryIndex]?.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Areas */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevStory();
                }}
                className="absolute left-0 top-0 w-1/3 h-full z-10 focus:outline-none"
                disabled={currentStoryIndex === 0}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextStory();
                }}
                className="absolute right-0 top-0 w-1/3 h-full z-10 focus:outline-none"
              />

              {/* Navigation Arrows */}
              {currentStoryIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevStory();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 rounded-full bg-black/20 hover:bg-black/40"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              )}
              {currentStoryIndex < stories.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextStory();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 rounded-full bg-black/20 hover:bg-black/40"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

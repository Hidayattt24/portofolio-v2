"use client";

import Image from "next/image";
import Link from "next/link";
import { achievements, Achievement } from "@/data/achievements";
import { FloatingConnectDock } from "@/components/FloatingConnectDock";

export default function AchievementPage() {
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
                Achievements
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                My accomplishments and recognitions
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#A3D977] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  {achievements.length} Achievements
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {achievements.map((achievement: Achievement) => (
            <div
              key={achievement.id}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group"
            >
              <div className="inline-flex items-center bg-[#A3D977] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                {achievement.category}
              </div>

              <div className="relative h-48 bg-white/50 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300 mb-4">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#A3D977] transition-colors">
                  {achievement.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded-full">
                    {achievement.organization}
                  </span>
                  <span>{achievement.date}</span>
                </div>

                {achievement.details && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-xl">
                    <p className="text-xs text-gray-600">
                      {achievement.details}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 text-center">
            <div className="text-3xl font-bold text-[#A3D977] mb-2">
              {achievements.length}
            </div>
            <p className="text-gray-600 font-medium">Total Achievements</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 text-center">
            <div className="text-3xl font-bold text-[#A3D977] mb-2">
              {achievements.filter((a) => a.category === "Competition").length}
            </div>
            <p className="text-gray-600 font-medium">Competition Awards</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 text-center">
            <div className="text-3xl font-bold text-[#A3D977] mb-2">
              {achievements.filter((a) => a.category === "Academic").length}
            </div>
            <p className="text-gray-600 font-medium">Academic Excellence</p>
          </div>
        </div>

        {/* Floating Connect Dock */}
        <FloatingConnectDock />
      </div>
    </div>
  );
}

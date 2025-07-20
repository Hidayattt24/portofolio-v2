"use client";

import Image from "next/image";
import Link from "next/link";
import { certificates, Certificate } from "@/data/certificates";
import { FloatingConnectDock } from "@/components/FloatingConnectDock";

export default function CertificatePage() {
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
                Certificates
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Professional certifications and credentials
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#A3D977] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  {certificates.length} Certificates
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {certificates.map((certificate: Certificate) => (
            <div
              key={certificate.id}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group"
            >
              <div className="inline-flex items-center bg-[#A3D977] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                {certificate.category}
              </div>

              <div className="relative h-48 bg-white/50 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300 mb-4">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#A3D977] transition-colors">
                  {certificate.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {certificate.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded-full">
                    {certificate.issuer}
                  </span>
                  <span>{certificate.date}</span>
                </div>

                {certificate.credentialId && (
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">Credential ID:</span>{" "}
                    {certificate.credentialId}
                  </div>
                )}

                {/* Skills */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Skills & Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs bg-[#A3D977]/10 text-[#A3D977] px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Certificate Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from(new Set(certificates.map((cert) => cert.category))).map(
              (category) => {
                const count = certificates.filter(
                  (cert) => cert.category === category
                ).length;
                return (
                  <div
                    key={category}
                    className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 text-center"
                  >
                    <div className="text-3xl font-bold text-[#A3D977] mb-2">
                      {count}
                    </div>
                    <p className="text-gray-600 font-medium">{category}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Skills Acquired
          </h2>
          <div className="flex flex-wrap gap-3">
            {Array.from(
              new Set(certificates.flatMap((cert) => cert.skills))
            ).map((skill) => (
              <span
                key={skill}
                className="bg-gradient-to-r from-[#A3D977] to-[#8BC34A] text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Floating Connect Dock */}
        <FloatingConnectDock />
      </div>
    </div>
  );
}

import MissionVisionValues from "./MissionVisionValues";
import CampusGallery from "./CampusGallery";
import AcademicPrograms from "./AcademicPrograms";

export default function AboutSection({ teaser = false }) {
  const galleryData = [
     "/images/about/campus-1.jpg",
    "/images/about/campus-2.jpg",
    "/images/about/campus-3.jpg",
    "/images/about/campus-4.webp",
    "/images/about/campus-5.jpg",
  ];

  const programsData = [
    { icon: "📚", title: "CBC Curriculum" },
    { icon: "🎨", title: "Arts & Music" },
    { icon: "🧪", title: "STEM Labs" },
    { icon: "🏅", title: "Extra-Curriculars" },
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-blue-200 via-white/50 to-blue-500/5 backdrop-blur-lg overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-950/10 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-16">
        <MissionVisionValues
          limit={teaser ? 2 : undefined}
          className="mb-16"
          cardBg="bg-blue-900/30 shadow-inner shadow-blue-950/40"
          textColor="text-white/90"
          hoverEffect
        />
        <AcademicPrograms
          programs={teaser ? programsData.slice(0,2) : programsData}
          className="mb-12 mt--16"
          cardBg="bg-blue-400 shadow-inner shadow-blue-950/30"
          textColor="text-white/80"
          hoverEffect
        />
        <CampusGallery
          gallery={teaser ? galleryData.slice(0,4) : galleryData}
          cardBg="bg-blue-900/10 shadow-inner shadow-blue-950/20"
          hoverEffect
        />
      </div>
    </section>
  );
}

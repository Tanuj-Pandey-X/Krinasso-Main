import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Branding", "Social Media", "Viral"];

const projects = [
  {
    id: 1,
    title: "Nexus Tech Rebrand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    challenge: "Nexus Tech needed a complete brand overhaul to position themselves as an innovative leader in the SaaS space.",
    solution: "We developed a bold new visual identity, including logo, color palette, and brand guidelines that reflected their cutting-edge technology.",
    results: "150% increase in brand recognition and 40% improvement in lead quality within 6 months.",
  },
  {
    id: 2,
    title: "FitLife Campaign",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
    challenge: "FitLife wanted to build a community around their fitness app and increase user engagement.",
    solution: "Created a multi-platform content strategy featuring user-generated content, influencer partnerships, and interactive challenges.",
    results: "2M+ social impressions, 85% increase in app downloads, and 60% improvement in user retention.",
  },
  {
    id: 3,
    title: "EcoWear Launch",
    category: "Viral",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=400&fit=crop",
    challenge: "EcoWear needed to create buzz for their sustainable fashion line launch with a limited budget.",
    solution: "Designed a viral TikTok campaign featuring eco-conscious influencers and a hashtag challenge.",
    results: "5M+ video views, 50K user-generated videos, and sold out first collection within 48 hours.",
  },
  {
    id: 4,
    title: "Orbital Finance",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    challenge: "A fintech startup needed credibility and trust in a competitive market.",
    solution: "Developed a sophisticated brand identity emphasizing security and innovation with premium visuals.",
    results: "$2M in seed funding raised, 300% increase in website traffic.",
  },
  {
    id: 5,
    title: "Glow Beauty",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
    challenge: "Glow Beauty wanted to dominate Instagram and become the go-to skincare brand for Gen Z.",
    solution: "Created a content ecosystem of tutorials, before/afters, and authentic customer stories.",
    results: "500K new followers in 8 months, 200% increase in direct sales from social.",
  },
  {
    id: 6,
    title: "TechCrunch Feature",
    category: "Viral",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    challenge: "A B2B SaaS company needed to break through the noise and get media attention.",
    solution: "Orchestrated a data-driven PR campaign with compelling statistics and thought leadership.",
    results: "Featured in TechCrunch, Forbes, and 15+ industry publications. 400% spike in demo requests.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-primary/20 text-foreground rounded-full border border-primary/30">
              Our Work
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Selected Works.
            </h1>
            <p className="text-xl text-muted-foreground">
              A showcase of our most impactful campaigns and brand transformations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="bento-card p-0 overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/40 backdrop-blur-sm text-foreground rounded-full mb-2">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                      </div>
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="text-foreground" size={20} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-lg"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full aspect-video object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-foreground rounded-full mb-4">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl font-bold mb-6">{selectedProject.title}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      The Challenge
                    </h4>
                    <p className="text-foreground">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      The Solution
                    </h4>
                    <p className="text-foreground">{selectedProject.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      The Results
                    </h4>
                    <p className="text-foreground">{selectedProject.results}</p>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <Button variant="hero" className="flex-1">
                    View Live Project
                    <ExternalLink size={16} />
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedProject(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

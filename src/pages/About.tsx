import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Linkedin, 
  Twitter,
  Eye,
  Zap,
  Heart,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Alexandra Chen",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marcus Williams",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sofia Rodriguez",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Park",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
];

const values = [
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication and honest reporting at every step of our partnership.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly pushing boundaries and embracing new technologies and trends.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We genuinely care about your success and treat your brand as our own.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven",
    description: "Every decision backed by insights and measurable outcomes.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
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
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-primary/20 text-foreground rounded-full border border-primary/30">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              We're building the future of digital marketing.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A collective of strategists, creatives, and data enthusiasts united by a passion
              for transforming brands into cultural phenomena.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed">
              "We believe that every brand has a unique story worth telling. 
              Our mission is to <span className="text-primary">amplify that story</span> and 
              connect it with the audiences who need to hear it."
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-primary/20 text-foreground rounded-full border border-primary/30"
            >
              Our Team
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Meet the Minds Behind Krinasso
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              A diverse team of experts dedicated to your brand's success.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="bento-card text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{member.role}</p>
                <div className="flex justify-center gap-3">
                  <a
                    href={member.linkedin}
                    className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all duration-300"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all duration-300"
                  >
                    <Twitter size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-primary/20 text-foreground rounded-full border border-primary/30"
            >
              Our Values
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              What Drives Us
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="bento-card flex gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/10 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              We're always looking for talented individuals who share our passion for excellence.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

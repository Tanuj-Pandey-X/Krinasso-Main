import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Megaphone, 
  PenTool, 
  Target, 
  Lightbulb,
  BarChart3,
  Users,
  Zap,
  ArrowRight,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Strategic social media management that builds communities and drives meaningful engagement across all major platforms.",
    features: [
      "Platform Strategy & Optimization",
      "Community Management",
      "Influencer Partnerships",
      "Analytics & Reporting",
    ],
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Compelling visual and written content that tells your brand story and resonates with your target audience.",
    features: [
      "Photography & Videography",
      "Graphic Design",
      "Copywriting",
      "Content Calendar Planning",
    ],
  },
  {
    icon: Target,
    title: "Paid Advertising",
    description: "Data-driven paid campaigns that maximize ROI and reach your ideal customers at the perfect moment.",
    features: [
      "Meta Ads Management",
      "Google Ads Campaigns",
      "TikTok & YouTube Ads",
      "Retargeting Strategies",
    ],
  },
  {
    icon: Lightbulb,
    title: "Logo Design",
    description: "Comprehensive brand development that positions you as an industry leader and builds lasting customer loyalty.",
    features: [
      "Brand Positioning",
      "Visual Identity Design",
      "Messaging Framework",
      "Competitive Analysis",
    ],
  },
];

const processSteps = [
  { icon: Users, title: "Discovery", description: "Understanding your brand, goals, and target audience" },
  { icon: Lightbulb, title: "Strategy", description: "Crafting a tailored approach for maximum impact" },
  { icon: Zap, title: "Execution", description: "Implementing campaigns with precision and creativity" },
  { icon: BarChart3, title: "Optimization", description: "Continuous improvement based on real data" },
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

export default function Services() {
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
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our Expertise.
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital marketing solutions designed to elevate your brand
              and drive measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group"
              >
                <div className="bento-card grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/40 transition-all duration-500">
                      <service.icon className="w-8 h-8 text-foreground" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                    <Button variant="outline" asChild>
                      <Link to="/contact">
                        Get Started
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                  <div className="bg-secondary/30 rounded-xl p-6">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                            <Check size={12} className="text-foreground" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              How We Work
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              A proven methodology that delivers consistent, outstanding results.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="relative"
              >
                <div className="bento-card text-center h-full">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Let's discuss which services are the perfect fit for your brand.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Schedule a Call
                <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

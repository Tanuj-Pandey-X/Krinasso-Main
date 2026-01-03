import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// --- Constants ---
const budgetRanges = ["$1k - $5k", "$5k - $10k", "$10k - $25k", "$25k+"];

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@krinasso.com", href: "mailto:hello@krinasso.com" },
  { icon: Phone, label: "Phone", value: "+91 8528608855", href: "tel:+918528608855" },
  { icon: MapPin, label: "Office", value: "123 Design St, NY", href: "#" },
];

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
    botcheck: false, // Honeypot field
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple Honeypot logic: If the hidden checkbox is checked, it's a bot
    if (formData.botcheck) return;

    setIsSubmitting(true);

    // API Key from Environment Variable
    // Use import.meta.env for Vite or process.env for Next.js
    // ✅ NEW (Vite Compatible)
const apiKey = import.meta.env.VITE_WEB3FORMS_KEY;

    const submissionData = {
      access_key: apiKey,
      name: formData.name,
      email: formData.email,
      subject: `New Inquiry: ${formData.subject}`,
      budget: formData.budget,
      message: formData.message,
      from_name: "Portfolio Contact Form",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Message Sent!",
          description: "Check your email for a confirmation soon.",
        });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
        
        {/* Left Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="lg:col-span-2 space-y-12"
        >
          <div>
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-primary/20 text-foreground rounded-full border border-primary/30">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Let's work <br/>together.
            </h1>
            <p className="text-muted-foreground text-lg max-w-md">
              Have a project in mind? Fill out the form and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-8">
            {contactInfo.map((info) => (
              <a key={info.label} href={info.href} className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300 border border-border/50">
                  <info.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{info.label}</p>
                  <p className="text-lg font-medium">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: The Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="bg-secondary/20 p-8 md:p-10 rounded-[2rem] border border-border/50 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            {isSubmitted ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-3">Message Sent!</h2>
                <p className="text-muted-foreground mb-8 text-lg">Thank you for reaching out. We'll be in touch soon.</p>
                <Button 
                  onClick={() => setIsSubmitted(false)} 
                  variant="outline"
                  className="rounded-full px-8"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                
                {/* Honeypot Spam Protection (Hidden from users) */}
                <input 
                  type="checkbox" 
                  name="botcheck" 
                  className="hidden" 
                  style={{ display: "none" }} 
                  onChange={handleChange}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Your Name</label>
                    <Input 
                      name="name" 
                      placeholder="John Doe" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="bg-background/50 border-border/50 h-12 rounded-xl" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Email Address</label>
                    <Input 
                      name="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="bg-background/50 border-border/50 h-12 rounded-xl" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Subject</label>
                    <Input 
                      name="subject" 
                      placeholder="Project Inquiry" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                      className="bg-background/50 border-border/50 h-12 rounded-xl" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Budget Range</label>
                    <Select onValueChange={(v) => setFormData(p => ({ ...p, budget: v }))}>
                      <SelectTrigger className="bg-background/50 border-border/50 h-12 rounded-xl">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Your Message</label>
                  <Textarea 
                    name="message" 
                    placeholder="Tell us about your project..." 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="bg-background/50 border-border/50 rounded-xl resize-none" 
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg font-semibold rounded-xl" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
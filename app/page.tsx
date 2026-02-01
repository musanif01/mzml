"use client";

import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Code, Globe, Smartphone, Palette, Wrench, Cloud, RefreshCw, ShoppingCart, ChevronRight, Star, Mail, Phone, MapPin, Menu, X, ArrowRight, ArrowUpRight, ExternalLink, Layers, Zap, Database, Workflow } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (formRef.current) {
      emailjs.sendForm(
        'service_80z3wtx',
        'template_joekkcg',
        formRef.current,
        'lbQnKi03BXTOw3MF4'
      )
        .then(() => {
          setSubmitStatus('success');
          setIsSubmitting(false);
          if (formRef.current) {
            formRef.current.reset();
          }
        }, () => {
          setSubmitStatus('error');
          setIsSubmitting(false);
        });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Who We Are", href: "#who-we-are" },
    { name: "Services", href: "#services" },
    // { name: "Pricing", href: "#pricing" },
    { name: "Success Stories", href: "#stories" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    {
      icon: Code,
      title: "Custom Software",
      description: "Bespoke solutions engineered to address your unique business challenges with precision.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive, high-performance websites built with cutting-edge technologies.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Intuitive interfaces and seamless user experiences that delight and convert.",
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Ongoing support and updates to keep your systems running flawlessly.",
    },
    {
      icon: Cloud,
      title: "DevOps",
      description: "Streamlined deployment pipelines and cloud infrastructure management.",
    },
    {
      icon: RefreshCw,
      title: "Website Redesign",
      description: "Transform your existing digital presence into a modern masterpiece.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Full-featured online stores with secure payment processing.",
    },
  ];

  const techStack = [
    { name: "Next.js", icon: Globe },
    { name: "TypeScript", icon: Code },
    { name: "Supabase", icon: Database },
    { name: "Cloudflare", icon: Cloud },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Workflows", icon: Workflow },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] noise-bg">
      {/* Background Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="bg-decoration bg-decoration-1 absolute top-20 left-10"></div>
        <div className="bg-decoration bg-decoration-2 absolute top-40 right-20"></div>
        <div className="bg-decoration bg-decoration-3 absolute bottom-40 left-1/4"></div>
        <div className="bg-decoration bg-decoration-4 absolute top-1/3 right-1/3"></div>
        <div className="bg-decoration bg-decoration-1 absolute bottom-20 right-10" style={{width: "150px", height: "150px", animationDelay: "2s"}}></div>
        <div className="bg-decoration bg-decoration-2 absolute top-1/2 left-20" style={{width: "100px", height: "100px", animationDelay: "1s"}}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#faf9f6]/95 backdrop-blur-sm shadow-lg border-b-4 border-[#26538d]" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
              <div className="relative w-12 h-12 border-4 border-[#26538d] bg-[#f0ffff] flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                <span className="font-western text-xl text-[#26538d]">M</span>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#26538d] rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-western text-2xl text-[#26538d] tracking-wider leading-none">
                  MZML
                </span>
                <span className="font-typewriter text-xs text-[#1a1a1a] tracking-widest uppercase">
                  Corp
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link font-typewriter text-sm uppercase tracking-widest text-[#1a1a1a] hover:text-[#26538d] px-4 py-2 transition-all duration-300"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="ml-4 ticket-btn text-sm py-3 px-6"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-12 h-12 border-4 border-[#26538d] bg-[#f0ffff] flex items-center justify-center transition-all duration-300 hover:bg-[#26538d] group"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#26538d] group-hover:text-[#f0ffff] transition-colors" />
              ) : (
                <Menu className="w-6 h-6 text-[#26538d] group-hover:text-[#f0ffff] transition-colors" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-[#f0ffff] border-t-4 border-b-4 border-[#26538d] transition-all duration-500 ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-typewriter text-sm uppercase tracking-widest text-[#1a1a1a] hover:text-[#26538d] hover:bg-[#26538d]/5 py-3 px-4 border-l-4 border-transparent hover:border-[#26538d] transition-all duration-300"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t-2 border-dotted border-[#26538d]">
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block ticket-btn text-center text-sm"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-32 left-10 w-16 h-16 border-4 border-[#26538d] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-[#26538d] opacity-10 rotate-45"></div>
        <div className="absolute top-1/2 left-20 w-8 h-8 bg-[#26538d] rounded-full opacity-20"></div>
        
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#26538d] animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#26538d] animate-pulse" style={{animationDelay: "1s"}}></div>
              
              <div className="relative bg-[#f0ffff] p-8 md:p-12 border-4 border-[#26538d] shadow-2xl">
                <div className="absolute -top-3 left-8 bg-[#26538d] px-4 py-1">
                  <p className="font-typewriter text-xs text-[#f0ffff] uppercase tracking-widest">
                    Est. 2024
                  </p>
                </div>
                
                <p className="hero-text-animate font-typewriter text-sm uppercase tracking-widest text-[#26538d] mb-4 mt-4">
                  Premium Software Solutions
                </p>
                <h1 className="hero-text-animate delay-1 font-western text-5xl md:text-7xl text-[#1a1a1a] leading-tight mb-6">
                  Crafting Digital Excellence
                </h1>
                <p className="hero-text-animate delay-2 font-typewriter text-lg text-[#1a1a1a] mb-8 leading-relaxed">
                  We engineer bespoke software solutions that drive business growth 
                  and deliver exceptional user experiences.
                </p>
                <div className="hero-text-animate delay-3 flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="ticket-btn text-center">
                    Book Appointment
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center px-6 py-4 font-typewriter text-sm uppercase tracking-widest border-4 border-[#26538d] text-[#26538d] hover:bg-[#26538d] hover:text-[#f0ffff] transition-all duration-300 group"
                  >
                    Our Services
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="relative stagger-children">
                <div className="absolute inset-0 bg-[#26538d] transform translate-x-4 translate-y-4 transition-transform duration-500 hover:translate-x-6 hover:translate-y-6"></div>
                <div className="relative bg-[#f0ffff] border-4 border-[#26538d] p-8 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="stat-card bg-[#26538d] p-6 text-[#f0ffff] transition-all duration-300 hover:scale-105">
                      <p className="stat-number font-western text-4xl mb-2">15+</p>
                      <p className="font-typewriter text-sm">Projects Delivered</p>
                    </div>
                    <div className="stat-card bg-[#1a3a5c] p-6 text-[#f0ffff] transition-all duration-300 hover:scale-105">
                      <p className="stat-number font-western text-4xl mb-2">98%</p>
                      <p className="font-typewriter text-sm">Client Satisfaction</p>
                    </div>
                    <div className="stat-card bg-[#1a3a5c] p-6 text-[#f0ffff] transition-all duration-300 hover:scale-105">
                      <p className="stat-number font-western text-4xl mb-2">5+</p>
                      <p className="font-typewriter text-sm">Years Experience</p>
                    </div>
                    <div className="stat-card bg-[#26538d] p-6 text-[#f0ffff] transition-all duration-300 hover:scale-105">
                      <p className="stat-number font-western text-4xl mb-2">24/7</p>
                      <p className="font-typewriter text-sm">Support Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto"></div>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-20 right-10 w-32 h-32 border-8 border-[#26538d] opacity-10 rotate-12"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#26538d] opacity-10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-typewriter text-sm uppercase tracking-widest text-[#26538d] mb-4">
              — Our Story —
            </p>
            <h2 className="font-western text-5xl md:text-6xl text-[#1a1a1a]">
              Who We Are
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#26538d] transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
              <div className="relative bg-[#26538d] p-8 md:p-12 text-[#f0ffff]">
                <h3 className="font-western text-3xl mb-6">Pioneers in Digital Craft</h3>
                <p className="font-typewriter text-base leading-relaxed mb-4">
                  MZML Corp stands at the intersection of artistry and engineering. Founded by a
                  collective of passionate developers and designers, we&apos;ve made it our mission to
                  transform complex problems into elegant digital solutions.
                </p>
                <p className="font-typewriter text-base leading-relaxed">
                  Our approach combines time-tested methodologies with cutting-edge technologies, 
                  ensuring every project we undertake exceeds expectations and stands the test of time.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="geometric-block p-6 group">
                <h4 className="font-western text-2xl text-[#26538d] mb-2 transition-colors duration-300">Our Mission</h4>
                <p className="font-typewriter text-sm text-[#1a1a1a] transition-colors duration-300">
                  To empower businesses with technology that drives growth, efficiency, and innovation.
                </p>
              </div>
              
              <div className="geometric-block p-6 group">
                <h4 className="font-western text-2xl text-[#26538d] mb-2 transition-colors duration-300">Our Vision</h4>
                <p className="font-typewriter text-sm text-[#1a1a1a] transition-colors duration-300">
                  To be the premier partner for businesses seeking transformative digital solutions.
                </p>
              </div>
              
              <div className="geometric-block p-6 group">
                <h4 className="font-western text-2xl text-[#26538d] mb-2 transition-colors duration-300">Our Values</h4>
                <p className="font-typewriter text-sm text-[#1a1a1a] transition-colors duration-300">
                  Excellence, integrity, innovation, and unwavering commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto"></div>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-40 left-20 w-20 h-20 border-4 border-dashed border-[#26538d] opacity-20 rotate-45 animate-spin" style={{animationDuration: "20s"}}></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 bg-[#26538d] opacity-10 rounded-full animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-typewriter text-sm uppercase tracking-widest text-[#26538d] mb-4">
              — What We Offer —
            </p>
            <h2 className="font-western text-5xl md:text-6xl text-[#1a1a1a] mb-6">
              Our Services
            </h2>
            <p className="font-typewriter text-lg text-[#1a1a1a] max-w-2xl mx-auto">
              Comprehensive software solutions tailored to your unique business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="service-card p-6"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <service.icon className="service-icon w-12 h-12 text-[#26538d] mb-4 transition-colors duration-300" />
                <h3 className="service-title font-western text-xl text-[#1a1a1a] mb-3 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="service-description font-typewriter text-sm text-[#1a1a1a] transition-colors duration-300">
                  {service.description}
                </p>
                
                <div className="mt-4 pt-4 border-t-2 border-dotted border-[#26538d] transition-colors duration-300">
                  <a
                    href="#contact"
                    className="inline-flex items-center font-typewriter text-xs uppercase tracking-wider text-[#26538d] hover:underline transition-colors duration-300"
                  >
                    Learn More <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto"></div>

      {/*
      // Pricing Section - Commented out as requested
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        ... pricing content ...
      </section>
      <div className="section-divider max-w-7xl mx-auto"></div>
      */}

      {/* Client Success Stories - LurnRyte Case Study */}
      <section id="stories" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-20 right-20 w-40 h-40 border-8 border-[#26538d] opacity-5 rotate-12"></div>
        <div className="absolute bottom-40 left-10 w-20 h-20 bg-[#26538d] opacity-10 rotate-45"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-typewriter text-sm uppercase tracking-widest text-[#26538d] mb-4">
              — Featured Case Study —
            </p>
            <h2 className="font-western text-5xl md:text-6xl text-[#1a1a1a] mb-6">
              Client Success Stories
            </h2>
          </div>
          
          {/* LurnRyte Case Study Card */}
          <div className="case-study-card p-8 md:p-12 mb-16">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Header Info */}
              <div className="lg:col-span-3 flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b-4 border-dotted border-[#26538d] pb-6">
                <div>
                  <h3 className="font-western text-4xl text-[#26538d] mb-2">LurnRyte</h3>
                  <p className="font-typewriter text-lg text-[#1a1a1a]">Tutoring Platform</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="font-typewriter text-sm text-[#26538d] uppercase tracking-wider">Role</p>
                  <p className="font-typewriter text-base text-[#1a1a1a]">Founder Engineer & Full-Stack Lead</p>
                  <p className="font-typewriter text-sm text-[#1a3a5c] mt-1">Jan 2025 – Apr 2025</p>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="font-western text-2xl text-[#1a1a1a] mb-3 flex items-center gap-2">
                    <Layers className="w-6 h-6 text-[#26538d]" />
                    Overview
                  </h4>
                  <p className="font-typewriter text-base text-[#1a1a1a] leading-relaxed">
                    Built an end-to-end tutoring marketplace with realtime classrooms, tutor discovery, 
                    and pay-as-you-go booking for students across India. The platform now powers 
                    personalized sessions for students preparing for school, competitive exams, and 
                    language mastery—complete with flexible scheduling and recorded takeaways.
                  </p>
                </div>

                <div>
                  <h4 className="font-western text-2xl text-[#1a1a1a] mb-3 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-[#26538d]" />
                    Challenge
                  </h4>
                  <p className="font-typewriter text-base text-[#1a1a1a] leading-relaxed">
                    Parents and students needed a trustworthy way to find subject experts without 
                    committing to subscriptions or opaque pricing. Tutors, meanwhile, wanted tooling 
                    beyond generic video calls to keep learners engaged.
                  </p>
                </div>

                <div>
                  <h4 className="font-western text-2xl text-[#1a1a1a] mb-3 flex items-center gap-2">
                    <ExternalLink className="w-6 h-6 text-[#26538d]" />
                    Solution Highlights
                  </h4>
                  <ul className="space-y-2 font-typewriter text-base text-[#1a1a1a]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#26538d] mt-1">▸</span>
                      <span>Tutor discovery with filters by board, subject, and language, including embedded demo videos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#26538d] mt-1">▸</span>
                      <span>Booking flow that validates availability, triggers reminder workflows, and respects pay-as-you-go purchasing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#26538d] mt-1">▸</span>
                      <span>Realtime study room leveraging Cloudflare Realtime Kit for low-latency presence and screen sharing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#26538d] mt-1">▸</span>
                      <span>Recording pipeline that streams session captures to Cloudflare R2 with signed playback links</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-western text-2xl text-[#1a1a1a] mb-3">Responsibilities</h4>
                  <ul className="space-y-2 font-typewriter text-base text-[#1a1a1a]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#26538d] mt-1">▸</span>
                      <span>Architected the Supabase schema for tutors, sessions, reviews, and payments with row-level security</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#26538d] mt-1">▸</span>
                      <span>Wrote realtime collaboration layer on Cloudflare Durable Objects to sync whiteboard state and chat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#26538d] mt-1">▸</span>
                      <span>Automated onboarding and reminder emails through Cloudflare Workflows and Supabase webhooks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#26538d] mt-1">▸</span>
                      <span>Implemented responsive marketing site and tutor directory with search and filtering</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Visit Site Button */}
                <a 
                  href="https://www.lurnryte.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full ticket-btn text-center flex items-center justify-center gap-2 group"
                >
                  Visit LurnRyte
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                {/* Tech Stack */}
                <div className="bg-[#f0ffff] border-4 border-[#26538d] p-6">
                  <h4 className="font-western text-xl text-[#26538d] mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span key={tech.name} className="tech-tag flex items-center gap-1">
                        <tech.icon className="w-3 h-3" />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="bg-[#26538d] text-[#f0ffff] p-6">
                  <h4 className="font-western text-xl mb-4">Outcomes</h4>
                  <div className="space-y-4">
                    <div className="outcome-metric bg-[#f0ffff]/10 border-l-4 border-[#f0ffff]">
                      <p className="font-western text-3xl">2,500+</p>
                      <p className="font-typewriter text-sm">Students mentored since launch</p>
                    </div>
                    <div className="outcome-metric bg-[#f0ffff]/10 border-l-4 border-[#f0ffff]">
                      <p className="font-western text-3xl">20+</p>
                      <p className="font-typewriter text-sm">Years of teaching expertise in tutor network</p>
                    </div>
                  </div>
                </div>

                {/* Architecture Note */}
                <div className="border-4 border-dashed border-[#26538d] p-4">
                  <p className="font-typewriter text-xs text-[#1a1a1a] text-center uppercase tracking-wider">
                    Cloudflare + Supabase Architecture
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-card bg-[#26538d] p-6 text-center text-[#f0ffff] transition-all duration-300 hover:scale-105">
              <p className="stat-number font-western text-4xl mb-2">15+</p>
              <p className="font-typewriter text-xs uppercase tracking-wider">Projects Completed</p>
            </div>
            <div className="stat-card bg-[#1a3a5c] p-6 text-center text-[#f0ffff] transition-all duration-300 hover:scale-105">
              <p className="stat-number font-western text-4xl mb-2">50+</p>
              <p className="font-typewriter text-xs uppercase tracking-wider">Happy Clients</p>
            </div>
            <div className="stat-card bg-[#1a3a5c] p-6 text-center text-[#f0ffff] transition-all duration-300 hover:scale-105">
              <p className="stat-number font-western text-4xl mb-2">5+</p>
              <p className="font-typewriter text-xs uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="stat-card bg-[#26538d] p-6 text-center text-[#f0ffff] transition-all duration-300 hover:scale-105">
              <p className="stat-number font-western text-4xl mb-2">24/7</p>
              <p className="font-typewriter text-xs uppercase tracking-wider">Support</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto"></div>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-40 right-10 w-24 h-24 border-4 border-dashed border-[#26538d] opacity-20 animate-spin" style={{animationDuration: "15s"}}></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-typewriter text-sm uppercase tracking-widest text-[#26538d] mb-4">
              — Get In Touch —
            </p>
            <h2 className="font-western text-5xl md:text-6xl text-[#1a1a1a] mb-6">
              Contact Us
            </h2>
            <p className="font-typewriter text-lg text-[#1a1a1a] max-w-2xl mx-auto">
              Ready to start your next project? Reach out and let&apos;s create something extraordinary.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="geometric-block p-6 flex items-start gap-4 group cursor-pointer">
                <div className="p-3 bg-[#26538d] text-[#f0ffff] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1a3a5c]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-western text-xl text-[#26538d] mb-1 transition-colors duration-300">Email</h4>
                  <p className="font-typewriter text-sm text-[#1a1a1a] transition-all duration-300 group-hover:font-bold">
                    smmhd121@gmail.com
                  </p>
                </div>
              </div>
              
              <div className="geometric-block p-6 flex items-start gap-4 group cursor-pointer">
                <div className="p-3 bg-[#26538d] text-[#f0ffff] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1a3a5c]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-western text-xl text-[#26538d] mb-1 transition-colors duration-300">Phone</h4>
                  <p className="font-typewriter text-sm text-[#1a1a1a] transition-all duration-300 group-hover:font-bold">
                    +91 8082008463
                  </p>
                </div>
              </div>
              
              <div className="geometric-block p-6 flex items-start gap-4 group cursor-pointer">
                <div className="p-3 bg-[#26538d] text-[#f0ffff] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1a3a5c]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-western text-xl text-[#26538d] mb-1 transition-colors duration-300">Location</h4>
                  <p className="font-typewriter text-sm text-[#1a1a1a] transition-all duration-300 group-hover:font-bold">
                    Smmhd, Pulwama, Jammu and Kashmir
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="relative bg-[#f0ffff] border-4 border-[#26538d] p-8 shadow-xl">
              <div className="corner-decoration top-left"></div>
              <div className="corner-decoration bottom-right"></div>
              
              {/* Success Alert */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-[#26538d] text-[#f0ffff] border-4 border-[#26538d] animate-fade-in">
                  <p className="font-typewriter text-sm">
                    Message sent successfully! We will contact you soon.
                  </p>
                </div>
              )}

              {/* Error Alert */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-[#f0ffff] text-[#26538d] border-4 border-[#26538d]">
                  <p className="font-typewriter text-sm">
                    Something went wrong. Please try again later.
                  </p>
                </div>
              )}
              
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="block font-typewriter text-sm uppercase tracking-wider text-[#26538d] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 bg-[#faf9f6] border-4 border-[#26538d] font-typewriter text-[#1a1a1a] focus:outline-none focus:border-[#1a3a5c] focus:shadow-lg transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block font-typewriter text-sm uppercase tracking-wider text-[#26538d] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-[#faf9f6] border-4 border-[#26538d] font-typewriter text-[#1a1a1a] focus:outline-none focus:border-[#1a3a5c] focus:shadow-lg transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block font-typewriter text-sm uppercase tracking-wider text-[#26538d] mb-2">
                    Project Type
                  </label>
                  <select name="project_type" required className="w-full px-4 py-3 bg-[#faf9f6] border-4 border-[#26538d] font-typewriter text-[#1a1a1a] focus:outline-none focus:border-[#1a3a5c] focus:shadow-lg transition-all duration-300">
                    <option value="">Select a service</option>
                    <option value="custom">Custom Software</option>
                    <option value="web">Web Development</option>
                    <option value="app">App Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="devops">DevOps</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="ecommerce">E-commerce</option>
                  </select>
                </div>
                
                <div>
                  <label className="block font-typewriter text-sm uppercase tracking-wider text-[#26538d] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-[#faf9f6] border-4 border-[#26538d] font-typewriter text-[#1a1a1a] focus:outline-none focus:border-[#1a3a5c] focus:shadow-lg transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full ticket-btn ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#26538d] text-[#f0ffff] py-12 px-4 sm:px-6 lg:px-8 border-t-4 border-[#1a3a5c]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 border-4 border-[#f0ffff] bg-[#f0ffff] flex items-center justify-center">
                  <span className="font-western text-lg text-[#26538d]">M</span>
                </div>
                <span className="font-western text-3xl tracking-wider">
                  MZML CORP
                </span>
              </div>
              <p className="font-typewriter text-sm leading-relaxed max-w-md">
                Premium software solutions crafted with precision. We transform visions into 
                digital reality through innovative design and expert engineering.
              </p>
            </div>
            
            <div>
              <h4 className="font-western text-xl mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-typewriter text-sm hover:underline transition-all duration-300 hover:pl-2"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-western text-xl mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="font-typewriter text-sm hover:underline transition-all duration-300 hover:pl-2">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="font-typewriter text-sm hover:underline transition-all duration-300 hover:pl-2">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="font-typewriter text-sm hover:underline transition-all duration-300 hover:pl-2">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t-2 border-dotted border-[#f0ffff] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-typewriter text-sm">
              © 2024 MZML Corp. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-typewriter text-sm hover:underline transition-all duration-300 hover:text-[#f0ffff]/80">
                LinkedIn
              </a>
              <a href="#" className="font-typewriter text-sm hover:underline transition-all duration-300 hover:text-[#f0ffff]/80">
                Twitter
              </a>
              <a href="#" className="font-typewriter text-sm hover:underline transition-all duration-300 hover:text-[#f0ffff]/80">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

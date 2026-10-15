import React, { useState } from 'react';
import {
  Heart,
  Users,
  GraduationCap,
  TreePine,
  BookOpen,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Globe,
  Mail,
  Phone,
  MapPin,
  Send,
  Star,
  ShieldCheck,
  Menu,
  X,
  Briefcase,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState<number>(500);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Virtual Internship (Web Dev / AI)',
    message: '',
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerForm.name || !volunteerForm.email) return;
    setContactSubmitted(true);
  };

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-emerald-600 selection:text-white">
      {/* ------------------------------------------------------------- */}
      {/* TOP ANNOUNCEMENT BAR */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-emerald-800 text-emerald-100 text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span>InAmigos Foundation Internship Cohort 2026 is LIVE! Explore practical task-based learning.</span>
        <button
          onClick={() => scrollTo('internships')}
          className="underline font-bold text-white hover:text-amber-200 ml-1 inline-flex items-center gap-1"
        >
          Apply Now <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* NAVIGATION BAR */}
      {/* ------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
                <Heart className="w-6 h-6 fill-white" />
              </div>
              <div>
                <span className="text-2xl font-extrabold tracking-tight text-slate-900 font-display flex items-center gap-1">
                  InAmigos<span className="text-emerald-600">.</span>
                </span>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 -mt-1">
                  Foundation (NGO)
                </p>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollTo('home')}
                className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollTo('initiatives')}
                className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Initiatives
              </button>
              <button
                onClick={() => scrollTo('internships')}
                className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Internships
              </button>
              <button
                onClick={() => scrollTo('impact')}
                className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Impact
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scrollTo('donate')}
                className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-all border border-emerald-200"
              >
                Support Cause
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25 transition-all"
              >
                Join as Volunteer
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top">
            <button
              onClick={() => scrollTo('home')}
              className="block w-full text-left py-2 font-semibold text-slate-800 hover:text-emerald-600"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="block w-full text-left py-2 font-semibold text-slate-800 hover:text-emerald-600"
            >
              About Us
            </button>
            <button
              onClick={() => scrollTo('initiatives')}
              className="block w-full text-left py-2 font-semibold text-slate-800 hover:text-emerald-600"
            >
              Initiatives &amp; Services
            </button>
            <button
              onClick={() => scrollTo('internships')}
              className="block w-full text-left py-2 font-semibold text-slate-800 hover:text-emerald-600"
            >
              Student Internships
            </button>
            <button
              onClick={() => scrollTo('impact')}
              className="block w-full text-left py-2 font-semibold text-slate-800 hover:text-emerald-600"
            >
              Our Impact
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="block w-full text-left py-2 font-semibold text-slate-800 hover:text-emerald-600"
            >
              Contact Us
            </button>
            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={() => scrollTo('donate')}
                className="w-full py-3 rounded-xl text-center text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-200"
              >
                Donate / Support
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="w-full py-3 rounded-xl text-center text-sm font-bold text-white bg-emerald-600 shadow-md"
              >
                Join as Volunteer / Intern
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section id="home" className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-emerald-50/60 via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs font-bold tracking-wide">
                <Heart className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                <span>NON-PROFIT YOUTH &amp; SOCIAL EMPOWERMENT FOUNDATION</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] font-display">
                Empowering Youth, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Educating Children,
                </span> <br />
                Transforming Communities.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                At <strong>InAmigos Foundation</strong>, we bridge the gap between passion and social impact. 
                Through child education drives, environmental green campaigns, women empowerment, and experiential student internships, 
                we empower thousands of changemakers across India.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => scrollTo('contact')}
                  className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2 group"
                >
                  Join as an Intern / Volunteer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollTo('initiatives')}
                  className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm tracking-wide uppercase border border-slate-300 shadow-sm transition-all"
                >
                  Explore Initiatives
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Registered Non-Profit NGO</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>ISO &amp; Govt. Recognized Programs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-emerald-600" />
                  <span>Pan-India Impact Network</span>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative blob */}
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-emerald-200/50 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-amber-200/40 rounded-full blur-3xl -z-10" />

                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                        Live Social Metrics
                      </span>
                      <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">Community Impact</h3>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 my-6">
                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                      <p className="text-3xl font-black text-emerald-700">50K+</p>
                      <p className="text-xs font-semibold text-slate-600 mt-1">Lives Impacted</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
                      <p className="text-3xl font-black text-amber-700">25K+</p>
                      <p className="text-xs font-semibold text-slate-600 mt-1">Children Educated</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100">
                      <p className="text-3xl font-black text-teal-700">10K+</p>
                      <p className="text-xs font-semibold text-slate-600 mt-1">Trees Planted</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100">
                      <p className="text-3xl font-black text-purple-700">2,500+</p>
                      <p className="text-xs font-semibold text-slate-600 mt-1">Youth Interns Mentored</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Current Campaign</p>
                      <p className="text-sm font-bold text-emerald-300">Project Shiksha: Sponsor a Child</p>
                    </div>
                    <button
                      onClick={() => scrollTo('donate')}
                      className="px-3.5 py-1.5 rounded-full bg-emerald-500 text-xs font-bold hover:bg-emerald-400 text-slate-950 transition-colors"
                    >
                      Pledge
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* ABOUT US SECTION */}
      {/* ------------------------------------------------------------- */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-display">
              Driven by Empathy, Guided by Action
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              InAmigos Foundation is dedicated to creating sustainable, grassroots-level transformations.
              We believe that true development happens when young minds are provided with practical leadership opportunities,
              underprivileged children receive quality learning materials, and vulnerable communities are uplifted with dignity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To democratize quality education, provide food &amp; healthcare security, and equip youth with real-world skills
                through structured community programs and internship fellowships.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                An inclusive world where no child is deprived of education due to poverty, where green ecosystems flourish,
                and where young leaders spearhead positive grassroots solutions.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Core Values</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Integrity, inclusivity, transparency, and youth empowerment. Every donation and volunteer hour directly creates
                measurable, verifiable ground-level changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SERVICES & INITIATIVES SECTION */}
      {/* ------------------------------------------------------------- */}
      <section id="initiatives" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Our Core Services &amp; Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-display">
              Initiatives Creating Lasting Social Change
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4">
              Explore how InAmigos Foundation addresses social, environmental, and educational challenges across key pillars.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Initiative 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Project Shiksha (Education for All)</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Providing stationery kits, school uniforms, free tutoring camps, and digital literacy classes to underprivileged school children.
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free school supply distributions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Community weekend study centers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Digital literacy for rural youth
                  </li>
                </ul>
              </div>
              <button
                onClick={() => scrollTo('donate')}
                className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
              >
                Support a Student &rarr;
              </button>
            </div>

            {/* Initiative 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mb-6">
                  <TreePine className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Green Earth &amp; Afforestation</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Massive tree plantation drives, clean-up operations, waste segregation workshops, and climate awareness in schools and colleges.
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 10,000+ native saplings planted
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Urban park clean-up drives
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Eco-friendly lifestyle seminars
                  </li>
                </ul>
              </div>
              <button
                onClick={() => scrollTo('donate')}
                className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1"
              >
                Plant a Tree Today &rarr;
              </button>
            </div>

            {/* Initiative 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Youth Internship &amp; Skill Hub</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Task-based virtual internships in Web Development, AI Tools, Graphic Design, Social Media Marketing, and Content Writing.
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Hands-on real-world assignments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Verified certificates &amp; LORs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Mentorship from senior developers
                  </li>
                </ul>
              </div>
              <button
                onClick={() => scrollTo('internships')}
                className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
              >
                Explore Internship Tracks &rarr;
              </button>
            </div>

            {/* Initiative 4 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Nutrition &amp; Food Relief</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Weekly ration distributions, mid-day nutritious meal programs for slum settlements, and emergency disaster relief camps.
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Nutritious grains &amp; pulses kits
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Winter blanket distribution drives
                  </li>
                </ul>
              </div>
              <button
                onClick={() => scrollTo('donate')}
                className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
              >
                Donate Ration Kit &rarr;
              </button>
            </div>

            {/* Initiative 5 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Women Empowerment &amp; Livelihood</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Vocational workshops, tailoring centers, financial literacy bootcamps, and menstrual hygiene awareness drives.
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sanitary kit distributions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Micro-entrepreneurship training
                  </li>
                </ul>
              </div>
              <button
                onClick={() => scrollTo('contact')}
                className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1"
              >
                Volunteer for Drives &rarr;
              </button>
            </div>

            {/* Initiative 6 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Community Health &amp; Hygiene</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Free medical screening camps, pediatric eye checkups, dental hygiene awareness, and clean drinking water facilities.
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free physician consultations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Essential medicines distribution
                  </li>
                </ul>
              </div>
              <button
                onClick={() => scrollTo('contact')}
                className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                Organize Health Camp &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* INTERNSHIP & STUDENT HUB (TASK 3 FOCUS) */}
      {/* ------------------------------------------------------------- */}
      <section id="internships" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <Award className="w-3.5 h-3.5" />
                  InAmigos Internship Program
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
                  Learn by Doing: Practical Real-World Tasks
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  InAmigos Foundation provides students with hands-on, task-driven internships designed to foster
                  practical skills in software development, AI tooling, content creation, and community leadership.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-emerald-400 font-bold text-sm block">Task 1</span>
                    <p className="font-semibold text-white text-sm mt-0.5">Foundational Work</p>
                    <p className="text-xs text-slate-400 mt-1">Research &amp; Setup</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-emerald-400 font-bold text-sm block">Task 2</span>
                    <p className="font-semibold text-white text-sm mt-0.5">Core Execution</p>
                    <p className="text-xs text-slate-400 mt-1">Development &amp; Design</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/10 border border-emerald-500/40">
                    <span className="text-amber-400 font-bold text-sm block">Task 3 (Active)</span>
                    <p className="font-semibold text-white text-sm mt-0.5">AI Website Generation</p>
                    <p className="text-xs text-emerald-300 mt-1">Multi-Section Platform</p>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => scrollTo('contact')}
                    className="px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm uppercase tracking-wide transition-colors"
                  >
                    Register for Internship
                  </button>
                  <span className="text-xs text-slate-400">
                    ✓ Verified Certificate of Completion &amp; Letter of Recommendation (LOR)
                  </span>
                </div>
              </div>

              {/* Steps Card */}
              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-300" />
                  Submission Guidelines
                </h4>
                <div className="space-y-3 text-xs text-slate-200">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center shrink-0 font-bold">1</span>
                    <p>Build a multi-section website with Home, About Us, Services, and Contact Page.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center shrink-0 font-bold">2</span>
                    <p>Take screenshots of desktop and mobile views and save them cleanly.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center shrink-0 font-bold">3</span>
                    <p>Upload outputs into your Google Drive folder as organized submission proof.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center shrink-0 font-bold">4</span>
                    <p>Share on LinkedIn, tag <strong>InAmigos Foundation</strong>, and celebrate your work!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* INTERACTIVE DONATION / PLEDGE SECTION */}
      {/* ------------------------------------------------------------- */}
      <section id="donate" className="py-24 bg-slate-50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Support The Cause
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-display">
                Every Contribution Sparks a Smile
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Choose a contribution amount to support child education kits, tree planting, or daily food relief.
              </p>
            </div>

            {/* Donation Preset Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[250, 500, 1000, 2500].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setDonationAmount(amt)}
                  className={`py-3.5 px-4 rounded-2xl text-center font-bold text-sm transition-all border ${
                    donationAmount === amt
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  ₹{amt.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Impact calculated statement */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center mb-8">
              <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">Your Impact</p>
              <p className="text-sm font-bold text-emerald-950 mt-1">
                {donationAmount === 250 && '🌱 Plants 3 native shade trees & provides 1 hygiene care kit.'}
                {donationAmount === 500 && '📚 Funds stationery, books & notebooks for 2 underprivileged children.'}
                {donationAmount === 1000 && '🍲 Provides mid-day nutritious meal kits for 5 families in need.'}
                {donationAmount === 2500 && '🎓 Fully sponsors 1 child’s academic support & tuition for an entire term.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => alert(`Thank you for your generous pledge of ₹${donationAmount.toLocaleString()} to InAmigos Foundation! Our donations coordinator will reach out.`)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wide shadow-lg shadow-emerald-600/25 transition-all"
              >
                Pledge ₹{donationAmount.toLocaleString()} Support
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm uppercase tracking-wide transition-all"
              >
                Corporate / CSR Partnership
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* TESTIMONIALS & IMPACT VOICES */}
      {/* ------------------------------------------------------------- */}
      <section id="impact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Voices of Change
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-display">
              Stories from Volunteers, Interns &amp; Communities
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "Interning with InAmigos Foundation transformed my perspective. Building practical software tasks while
                  knowing the mission empowers real children motivated me every day. The certificate helped me land my first tech role!"
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200 mt-6">
                <p className="font-bold text-slate-900 text-base">Rohan Sharma</p>
                <p className="text-xs text-slate-500">Web Development Intern (Batch 2025)</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "The Shiksha stationery distribution camp in our village gave over 200 children the books and bags they needed
                  for school. The transparency of InAmigos Foundation volunteers is exemplary."
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200 mt-6">
                <p className="font-bold text-slate-900 text-base">Meenakshi Devi</p>
                <p className="text-xs text-slate-500">Community Head &amp; Beneficiary</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "We planted over 1,000 saplings in our city during the monsoon drive. The energy of the youth volunteers
                  and the community spirit was contagious. Proud to be an InAmigos ambassador!"
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200 mt-6">
                <p className="font-bold text-slate-900 text-base">Aakash Patel</p>
                <p className="text-xs text-slate-500">Volunteer &amp; Environmental Activist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FAQ SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-display">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How does the InAmigos Foundation Virtual Internship work?',
                a: 'Students receive guided tasks (such as Task 1 Research, Task 2 Design, and Task 3 AI Website Generation). Upon completing and submitting project proof (Drive links and social media post tagging InAmigos Foundation), an official certificate and feedback are issued.',
              },
              {
                q: 'Can college students from any department apply?',
                a: 'Yes! We welcome students from Engineering, Management, Humanities, Arts, Design, and Sciences. Programs range from Technical Development to Social Work and Content Strategy.',
              },
              {
                q: 'How are donation funds utilized?',
                a: '100% of public donations go directly into programmatic expenses: procuring stationery kits, food rations, tree saplings, and organizing health camps. Periodic financial audits and photo reports are shared on our platforms.',
              },
              {
                q: 'How can I volunteer locally in my city?',
                a: 'Simply fill out the Volunteer form below! Our community coordinators organize local weekend drives and will invite you to your city’s volunteer cohort group.',
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-emerald-700"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* CONTACT & REGISTRATION FORM SECTION */}
      {/* ------------------------------------------------------------- */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Contact &amp; Join
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                Ready to Join Hands with InAmigos Foundation?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether you want to apply for an internship, volunteer for our weekend drives, or partner as an institution,
                we would love to hear from you.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Official Email</p>
                    <p className="font-semibold text-sm">contact@inamigosfoundation.org</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Helpline &amp; WhatsApp</p>
                    <p className="font-semibold text-sm">+91 98765 43210 / +91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Headquarters</p>
                    <p className="font-semibold text-sm">New Delhi &amp; Mumbai, India (Pan-India Chapters)</p>
                  </div>
                </div>
              </div>

              {/* Task 3 Submission Helper Box */}
              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 mt-6">
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wide flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-600" />
                  InAmigos Foundation Task 3 Submission
                </h4>
                <p className="text-xs text-emerald-950 mt-1.5 leading-relaxed">
                  Take a screenshot of this completed page, upload to your Drive folder, post on LinkedIn,
                  and remember to tag <strong>InAmigos Foundation</strong> in your post!
                </p>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-lg">
              {contactSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Application Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{volunteerForm.name}</span>! Our internship and volunteer
                    coordinators will get back to you at <span className="font-bold text-slate-900">{volunteerForm.email}</span> within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setContactSubmitted(false);
                      setVolunteerForm({ name: '', email: '', phone: '', role: 'Virtual Internship (Web Dev / AI)', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors"
                  >
                    Send Another Response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priyanshu Verma"
                        value={volunteerForm.name}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. priyanshu@example.com"
                        value={volunteerForm.email}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 9876543210"
                        value={volunteerForm.phone}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                        Interested Track / Role
                      </label>
                      <select
                        value={volunteerForm.role}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, role: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 bg-white"
                      >
                        <option value="Virtual Internship (Web Dev / AI)">Virtual Internship (Web Dev / AI)</option>
                        <option value="Weekend Ground Volunteer">Weekend Ground Volunteer</option>
                        <option value="Project Shiksha Tutor">Project Shiksha Tutor</option>
                        <option value="Tree Plantation Drive Lead">Tree Plantation Drive Lead</option>
                        <option value="Corporate CSR Partner">Corporate CSR Partner</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                      Message / College &amp; Degree Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your educational background, college name, or what inspires you to join InAmigos Foundation..."
                      value={volunteerForm.message}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wide shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Application &amp; Join InAmigos
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FOOTER */}
      {/* ------------------------------------------------------------- */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
                <span className="text-2xl font-extrabold text-white font-display">InAmigos.</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                InAmigos Foundation is a non-profit youth organization committed to social empowerment, child education,
                environmental preservation, and youth skill building through practical programs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4">Quick Links</p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><button onClick={() => scrollTo('home')} className="hover:text-emerald-400">Home</button></li>
                <li><button onClick={() => scrollTo('about')} className="hover:text-emerald-400">About Us</button></li>
                <li><button onClick={() => scrollTo('initiatives')} className="hover:text-emerald-400">Initiatives &amp; Services</button></li>
                <li><button onClick={() => scrollTo('internships')} className="hover:text-emerald-400">Internship Programs</button></li>
                <li><button onClick={() => scrollTo('impact')} className="hover:text-emerald-400">Impact &amp; Stories</button></li>
              </ul>
            </div>

            {/* Initiatives */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4">Focus Areas</p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><span>Project Shiksha (Education)</span></li>
                <li><span>Green Earth (Tree Plantation)</span></li>
                <li><span>Food &amp; Nutrition Relief</span></li>
                <li><span>Women Skill Development</span></li>
                <li><span>Health &amp; Hygiene Camps</span></li>
              </ul>
            </div>

            {/* Social & Task */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-100 mb-4">Connect &amp; Share</p>
              <p className="text-xs text-slate-400 mb-3">
                Remember to tag <strong>InAmigos Foundation</strong> on LinkedIn and social media for your Task 3 assignment!
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-emerald-400 hover:bg-slate-700 transition-colors"
                >
                  LinkedIn
                </a>
                <button
                  onClick={() => scrollTo('donate')}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors"
                >
                  Support Cause
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} InAmigos Foundation. All rights reserved.</p>
            <p>Task 3 – AI Website Generation Submission | Built with React, Vite &amp; Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  MessageCircle, 
  Users, 
  Zap, 
  Menu, 
  X, 
  Search, 
  PlayCircle, 
  Award, 
  Briefcase, 
  TrendingUp, 
  Star,
  CheckCircle,
  ArrowRight,
  Heart,
  Send,
  Sparkles,
  Lock,
  Unlock,
  Flame,
  User,
  Terminal,
  Code,
  Cpu,
  RefreshCw,
  Play,
  Smartphone,
  Table,
  DollarSign,
  PieChart,
  Mic,
  Clock,
  FileText,
  Smile,
  Rocket
} from 'lucide-react';

/* EduNex - Gen Z Focused EdTech Platform
  Target: Tier 2/3 India | Vibe: Fun, Hinglish, Visual, Aesthetic
*/

// --- MOCK DATA ---

const CATEGORIES = [
  "All",
  "Tech & High-Income",
  "Corporate & Office",
  "Communication",
  "Marketing & Creator",
  "Freelancing",
  "Student Special",
  "Life Skills",
  "Premium"
];

const COURSES = [
  // 🔥 TECH & HIGH-INCOME SKILLS
  { id: 1, title: "Python Se Paise Tak 🐍", instructor: "Rahul Sir", level: "Beginner", category: "Tech & High-Income", rating: 4.9, duration: "4 Weeks", imageColor: "bg-blue-50", textColor: "text-blue-500", tags: ["Coding", "Money"], price: "Free" },
  { id: 2, title: "Web Development Bootcamp 🌐", instructor: "Amit Dev", level: "Intermediate", category: "Tech & High-Income", rating: 4.8, duration: "8 Weeks", imageColor: "bg-indigo-50", textColor: "text-indigo-500", tags: ["Zero to Live", "React"], price: "₹999" },
  { id: 3, title: "Data Analyst Ban Jaao 📊", instructor: "Priya Data", level: "Advanced", category: "Tech & High-Income", rating: 4.7, duration: "6 Weeks", imageColor: "bg-purple-50", textColor: "text-purple-500", tags: ["High Salary", "Analytics"], price: "₹1499" },
  { id: 4, title: "AI Tools for Smart Students 🤖", instructor: "Bot Master", level: "Beginner", category: "Tech & High-Income", rating: 4.9, duration: "2 Weeks", imageColor: "bg-emerald-50", textColor: "text-emerald-500", tags: ["ChatGPT", "Productivity"], price: "₹499" },
  { id: 5, title: "SQL Without Dar 😌", instructor: "Db Guru", level: "Beginner", category: "Tech & High-Income", rating: 4.6, duration: "3 Weeks", imageColor: "bg-cyan-50", textColor: "text-cyan-500", tags: ["Database", "Backend"], price: "Free" },
  { id: 6, title: "Machine Learning Basics 🧠", instructor: "AI Prof", level: "Intermediate", category: "Tech & High-Income", rating: 4.8, duration: "5 Weeks", imageColor: "bg-teal-50", textColor: "text-teal-500", tags: ["Samajh Ke Seekho", "Future"], price: "₹1999" },
  { id: 7, title: "No-Code Tools Se App Banao ⚙️", instructor: "Builder Bob", level: "Beginner", category: "Tech & High-Income", rating: 4.7, duration: "2 Weeks", imageColor: "bg-gray-100", textColor: "text-gray-600", tags: ["Startup", "Easy"], price: "₹699" },

  // 💼 CORPORATE & OFFICE SKILLS
  { id: 8, title: "Excel Jo Boss Ko Impress Kare 💼", instructor: "Neha Sheets", level: "All Levels", category: "Corporate & Office", rating: 4.9, duration: "3 Weeks", imageColor: "bg-green-50", textColor: "text-green-600", tags: ["Formulas", "Charts"], price: "₹399" },
  { id: 9, title: "PowerPoint That Gets Noticed 🎯", instructor: "Slide King", level: "Beginner", category: "Corporate & Office", rating: 4.5, duration: "2 Weeks", imageColor: "bg-orange-50", textColor: "text-orange-500", tags: ["Design", "Pitch"], price: "₹299" },
  { id: 10, title: "Corporate Life Survival Kit 🧠", instructor: "HR Madam", level: "Beginner", category: "Corporate & Office", rating: 4.8, duration: "1 Week", imageColor: "bg-slate-100", textColor: "text-slate-600", tags: ["Office Politics", "Growth"], price: "Free" },
  { id: 11, title: "Professional Email Writing 📧", instructor: "Comms Coach", level: "All Levels", category: "Corporate & Office", rating: 4.7, duration: "3 Days", imageColor: "bg-blue-50", textColor: "text-blue-400", tags: ["Easy Way", "Respect"], price: "₹199" },
  { id: 12, title: "Office Productivity Masterclass ⏱️", instructor: "Fast Eddie", level: "Intermediate", category: "Corporate & Office", rating: 4.6, duration: "2 Weeks", imageColor: "bg-red-50", textColor: "text-red-500", tags: ["Speed", "Tools"], price: "₹499" },

  // 🎤 COMMUNICATION & PERSONALITY
  { id: 13, title: "Office English Without Hesitation 🗣️", instructor: "English Sir", level: "Beginner", category: "Communication", rating: 4.9, duration: "4 Weeks", imageColor: "bg-yellow-50", textColor: "text-yellow-600", tags: ["Fluency", "Confidence"], price: "₹599" },
  { id: 14, title: "Interview Crack Karna Seekho 🎤", instructor: "Job Expert", level: "All Levels", category: "Communication", rating: 4.9, duration: "2 Weeks", imageColor: "bg-violet-50", textColor: "text-violet-500", tags: ["Hired", "Tips"], price: "₹799" },
  { id: 15, title: "Public Speaking for Introverts 😶➡️😎", instructor: "Stage Star", level: "Beginner", category: "Communication", rating: 4.8, duration: "3 Weeks", imageColor: "bg-rose-50", textColor: "text-rose-500", tags: ["No Fear", "Stage"], price: "₹699" },
  { id: 16, title: "Confidence Booster Course 🚀", instructor: "Life Coach", level: "All Levels", category: "Communication", rating: 4.7, duration: "1 Week", imageColor: "bg-amber-50", textColor: "text-amber-500", tags: ["Self Belief", "Power"], price: "Free" },
  
  // 📈 MARKETING / DIGITAL
  { id: 18, title: "Digital Marketing for Beginners 📢", instructor: "Ad Guru", level: "Beginner", category: "Marketing & Creator", rating: 4.7, duration: "4 Weeks", imageColor: "bg-pink-50", textColor: "text-pink-500", tags: ["Ads", "SEO"], price: "₹999" },
  { id: 19, title: "Instagram Se Income 📸", instructor: "Viral Vicky", level: "Beginner", category: "Marketing & Creator", rating: 4.9, duration: "2 Weeks", imageColor: "bg-fuchsia-50", textColor: "text-fuchsia-500", tags: ["Influencer", "Money"], price: "₹499" },
  { id: 20, title: "Reels Banana Seekho 🎬", instructor: "Creator Sam", level: "Beginner", category: "Marketing & Creator", rating: 4.8, duration: "1 Week", imageColor: "bg-purple-50", textColor: "text-purple-600", tags: ["Editing", "Viral"], price: "₹299" },
  { id: 21, title: "Personal Branding for Gen Z 🌟", instructor: "Brand Boss", level: "Intermediate", category: "Marketing & Creator", rating: 4.8, duration: "3 Weeks", imageColor: "bg-yellow-50", textColor: "text-yellow-500", tags: ["LinkedIn", "Voice"], price: "₹699" },

  // 💻 FREELANCING
  { id: 23, title: "Freelancing Se Freedom 💻", instructor: "Nomad Neil", level: "Beginner", category: "Freelancing", rating: 4.8, duration: "2 Weeks", imageColor: "bg-sky-50", textColor: "text-sky-500", tags: ["Remote", "$$$"], price: "₹599" },
  { id: 24, title: "Upwork & Fiverr Mastery 🧑‍💻", instructor: "Gig King", level: "Intermediate", category: "Freelancing", rating: 4.7, duration: "2 Weeks", imageColor: "bg-green-50", textColor: "text-green-500", tags: ["Clients", "Bidding"], price: "₹799" },
  { id: 25, title: "Remote Job Ready Program 🌍", instructor: "HR Global", level: "Advanced", category: "Freelancing", rating: 4.9, duration: "4 Weeks", imageColor: "bg-blue-50", textColor: "text-blue-600", tags: ["WFH", "Global"], price: "₹1299" },

  // 🧑‍🎓 STUDENT SPECIAL
  { id: 27, title: "Fresher to Professional 🔑", instructor: "Mentor Raj", level: "Beginner", category: "Student Special", rating: 4.8, duration: "2 Weeks", imageColor: "bg-orange-50", textColor: "text-orange-500", tags: ["Transition", "Skills"], price: "Free" },
  { id: 28, title: "Resume Jo Select Ho Jaye 📄", instructor: "CV Doctor", level: "All Levels", category: "Student Special", rating: 4.9, duration: "3 Days", imageColor: "bg-slate-50", textColor: "text-slate-500", tags: ["ATS Friendly", "Hired"], price: "₹199" },
  { id: 29, title: "Internship Ready Program 🎓", instructor: "Campus Lead", level: "Beginner", category: "Student Special", rating: 4.7, duration: "3 Weeks", imageColor: "bg-indigo-50", textColor: "text-indigo-500", tags: ["Experience", "Projects"], price: "₹499" },
  { id: 30, title: "College Ke Saath Side Hustle 💰", instructor: "Hustler Jay", level: "Beginner", category: "Student Special", rating: 4.8, duration: "1 Week", imageColor: "bg-emerald-50", textColor: "text-emerald-500", tags: ["Pocket Money", "Easy"], price: "Free" },

  // 🧠 LIFE SKILLS
  { id: 32, title: "Time Management for Lazy Geniuses ⏰", instructor: "Productive P", level: "All Levels", category: "Life Skills", rating: 4.8, duration: "1 Week", imageColor: "bg-red-50", textColor: "text-red-500", tags: ["Hacks", "Focus"], price: "₹299" },
  { id: 33, title: "Overthinking Se Bahar Aao 🧠", instructor: "Mind Zen", level: "All Levels", category: "Life Skills", rating: 4.9, duration: "2 Weeks", imageColor: "bg-teal-50", textColor: "text-teal-500", tags: ["Peace", "Mental Health"], price: "₹399" },
  { id: 34, title: "Discipline Without Motivation 🔥", instructor: "Hard Coach", level: "Intermediate", category: "Life Skills", rating: 4.7, duration: "3 Weeks", imageColor: "bg-orange-50", textColor: "text-orange-600", tags: ["Consistency", "Grind"], price: "₹499" },
  
  // 🚀 PREMIUM
  { id: 37, title: "Gen Z Career Accelerator ⚡", instructor: "Top 1%", level: "Advanced", category: "Premium", rating: 5.0, duration: "12 Weeks", imageColor: "bg-yellow-50", textColor: "text-yellow-600", tags: ["Complete Package", "Mentorship"], price: "₹4999" },
  { id: 38, title: "Future-Ready Skills Pack 🚀", instructor: "Tech Leaders", level: "Advanced", category: "Premium", rating: 4.9, duration: "10 Weeks", imageColor: "bg-violet-50", textColor: "text-violet-600", tags: ["AI + Web3", "Next Gen"], price: "₹3999" }
];

const TESTIMONIALS = [
  { id: 1, name: "Aman Gupta", role: "Student, Indore", text: "EduNex ne coding ko makkhan bana diya! 🍞 Best platform ever." },
  { id: 2, name: "Sneha Reddy", role: "Fresher, Hyderabad", text: "Interview darr khatam! The communication course is pure gold. ✨" },
  { id: 3, name: "Rohan Kumar", role: "Job Seeker, Patna", text: "Summuty AI bhai jaisa hai. Sahi guide karta hai. 🤖" }
];

// --- HELPERS & DATA GENERATORS ---

const getSimulationForCourse = (course) => {
  const category = course.category;
  
  // Default Templates
  const templates = {
    "Tech & High-Income": {
      theme: "from-cyan-400 to-blue-600",
      editorTitle: "CODE EDITOR",
      type: "tech",
      levels: [
        { title: "Level 1: Variables", desc: "Initialize your project.", code: `project_name = "${course.title}"\nprint("Starting " + project_name)`, output: `Starting ${course.title}...`, anim: "speaking" },
        { title: "Level 2: Execution", desc: "Run the core logic.", code: `for step in range(3):\n    execute_module(step)`, output: "Module 1 Loaded...\nModule 2 Loaded...\nModule 3 Loaded...", anim: "moving" },
        { title: "Level 3: Deploy", desc: "Ship your project.", code: `if errors == 0:\n    deploy_to_server()\nelse:\n    debug()`, output: "Deployment Successful! 🚀", anim: "jumping" }
      ]
    },
    "Corporate & Office": {
      theme: "from-emerald-400 to-green-600",
      editorTitle: "OFFICE SUITE",
      type: "corporate",
      levels: [
        { title: "Level 1: Setup", desc: "Prepare your workspace.", code: `open_application("${course.title}")\ncreate_new_file()`, output: "Workspace Ready", anim: "setup" },
        { title: "Level 2: Analysis", desc: "Crunch the numbers.", code: `=ANALYZE(DATA_RANGE)`, output: "Trends Identified 📈", anim: "filtering" },
        { title: "Level 3: Presentation", desc: "Showcase results.", code: `generate_report(format="PDF")\nshare_with_boss()`, output: "Report Sent. Boss is impressed! 👍", anim: "pivoting" }
      ]
    },
    "Communication": {
      theme: "from-orange-400 to-red-500",
      editorTitle: "SPEECH COACH",
      type: "comm",
      levels: [
        { title: "Level 1: Introduction", desc: "Make a first impression.", code: `say("Hello, I am ready to learn.")\nsmile()`, output: "Good eye contact! 👀", anim: "talking_intro" },
        { title: "Level 2: Articulation", desc: "Speak clearly.", code: `phrase = "I bring value to the table."\nenunciate(phrase)`, output: "Clear and Confident!", anim: "talking_nod" },
        { title: "Level 3: Closing", desc: "End on a high note.", code: `express_gratitude()\nshake_hands()`, output: "Great interaction! 🤝", anim: "talking_hired" }
      ]
    },
    "Marketing & Creator": {
      theme: "from-pink-500 to-rose-500",
      editorTitle: "CREATOR STUDIO",
      type: "marketing",
      levels: [
        { title: "Level 1: Ideation", desc: "Find a viral topic.", code: `trend = analyze_trends()\ncreate_hook(trend)`, output: "Trending Topic Found! 🔥", anim: "ideation" },
        { title: "Level 2: Production", desc: "Create the content.", code: `record_video()\nadd_effects("Glitch")`, output: "Video Rendered 🎥", anim: "posting" },
        { title: "Level 3: Viral Launch", desc: "Publish and grow.", code: `publish(time="Peak Hour")\nmonitor_analytics()`, output: "10k Views in 1 Hour! 🚀", anim: "viral" }
      ]
    },
    "Freelancing": {
      theme: "from-sky-400 to-indigo-500",
      editorTitle: "GIG DASHBOARD",
      type: "freelance",
      levels: [
        { title: "Level 1: Bid", desc: "Apply for a job.", code: `find_job("${course.title}")\nsubmit_proposal()`, output: "Proposal Sent 📨", anim: "proposal" },
        { title: "Level 2: Work", desc: "Complete the task.", code: `start_timer()\ncomplete_milestones()`, output: "Work Submitted ✅", anim: "work" },
        { title: "Level 3: Get Paid", desc: "Receive payment.", code: `generate_invoice()\nwithdraw_funds()`, output: "Payment Received: $500 💰", anim: "money" }
      ]
    },
    "Student Special": {
      theme: "from-yellow-400 to-amber-500",
      editorTitle: "CAREER PAD",
      type: "student",
      levels: [
        { title: "Level 1: Profile", desc: "Build your base.", code: `update_resume()\nadd_skills("${course.tags[0]}")`, output: "Resume Score: 85% 📄", anim: "resume" },
        { title: "Level 2: Apply", desc: "Send applications.", code: `apply_to_internships()\nwrite_cover_letter()`, output: "Application Shortlisted! 🎓", anim: "apply" },
        { title: "Level 3: Success", desc: "Get the offer.", code: `accept_offer()\ncelebrate()`, output: "Offer Letter Received! 🎉", anim: "offer" }
      ]
    },
    "Life Skills": {
      theme: "from-teal-400 to-emerald-500",
      editorTitle: "MIND OS",
      type: "life",
      levels: [
        { title: "Level 1: Awareness", desc: "Identify the stressor.", code: `scan_thoughts()\nidentify_trigger()`, output: "Trigger Identified.", anim: "scan" },
        { title: "Level 2: Breath", desc: "Calm down.", code: `inhale(4)\nhold(7)\nexhale(8)`, output: "Heart Rate Lowering... 🧘", anim: "breathe" },
        { title: "Level 3: Focus", desc: "Reclaim control.", code: `enable_focus_mode()\nblock_distractions()`, output: "Productivity: 100% 🧠", anim: "focus" }
      ]
    },
    "Premium": {
      theme: "from-violet-500 to-fuchsia-600",
      editorTitle: "FUTURE LAUNCHER",
      type: "premium",
      levels: [
        { title: "Level 1: Blueprint", desc: "Map your future.", code: `design_roadmap()\nset_goals("CEO")`, output: "Roadmap Generated 🗺️", anim: "blueprint" },
        { title: "Level 2: Acceleration", desc: "Learn rapidly.", code: `absorb_knowledge("AI")\nnetwork_with_leaders()`, output: "Skills Upgraded ⚡", anim: "speed" },
        { title: "Level 3: Liftoff", desc: "Launch your career.", code: `launch_career()\nachieve_success()`, output: "Orbit Reached! 🚀", anim: "launch" }
      ]
    }
  };

  const simData = templates[category] || templates["Tech & High-Income"];
  // Customize title
  return { ...simData, title: `${course.title} Sim` };
};

// --- SUB-COMPONENTS ---

const Button = ({ children, variant = "primary", className = "", onClick, icon: Icon }) => {
  const baseStyle = "px-6 py-3.5 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 shadow-sm";
  const variants = {
    primary: "bg-gray-900 text-white shadow-lg shadow-gray-200 hover:bg-black hover:shadow-xl",
    secondary: "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50",
    accent: "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:from-violet-700 hover:to-indigo-700",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100/50 hover:text-gray-900"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} onClick={onClick}>
      {Icon && <Icon size={18} strokeWidth={2.5} />}
      {children}
    </button>
  );
};

const Badge = ({ children, color = "blue" }) => (
  <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-${color}-50 text-${color}-600 border border-${color}-100`}>
    {children}
  </span>
);

const SectionTitle = ({ title, subtitle, align = "center" }) => (
  <div className={`mb-14 ${align === "center" ? "text-center" : "text-left"}`}>
    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
      {title}
    </h2>
    <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
      {subtitle}
    </p>
  </div>
);

function CourseCard({ course, onClick }) {
  return (
    <div 
      onClick={() => onClick && onClick(course)}
      className="bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 transform hover:-translate-y-1 group border border-gray-100/80 relative overflow-hidden cursor-pointer"
    >
      
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className={`h-48 rounded-[1.5rem] ${course.imageColor} mb-5 relative overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500`}>
          {/* Abstract Pattern in Image Bg */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/80 to-transparent"></div>
          
          <div className={`text-6xl ${course.textColor} opacity-90 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 drop-shadow-sm`}>
            {course.category.includes('Tech') ? <Zap size={64} fill="currentColor"/> : 
             course.category.includes('Marketing') ? <TrendingUp size={64} strokeWidth={2.5} /> : 
             course.category.includes('Life') ? <Smile size={64} strokeWidth={2.5} /> :
             course.category.includes('Premium') ? <Rocket size={64} fill="currentColor"/> :
             <BookOpen size={64} strokeWidth={2.5} />}
          </div>
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-gray-700 shadow-sm border border-white/50">
              {course.level}
          </div>
          {course.price === "Free" && (
            <div className="absolute top-4 right-4 bg-emerald-400 text-emerald-950 px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg shadow-emerald-200 animate-pulse">
                FREE
            </div>
          )}
        </div>
        
        <div className="px-2 pb-2 space-y-4">
          <div className="flex gap-2 flex-wrap">
              {course.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase font-bold text-gray-400 bg-gray-50 border border-gray-100 px-2.5 py-1.5 rounded-md tracking-wider">{tag}</span>
              ))}
          </div>
          <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2">
              {course.title}
          </h3>
          <div className="text-sm text-gray-500 font-medium flex items-center gap-2.5">
              <div className="w-6 h-6 bg-gray-100 rounded-full overflow-hidden border border-gray-100">
                <img src={`https://api.dicebear.com/7.x/micah/svg?seed=${course.instructor}`} alt="Inst" className="w-full h-full object-cover" />
              </div>
              <span className="text-gray-600">{course.instructor}</span>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-2">
              <div className="flex items-center gap-1.5 text-amber-500 text-sm font-bold bg-amber-50 px-2 py-1 rounded-lg">
                <Star size={14} fill="currentColor" /> {course.rating}
              </div>
              <div className="text-xs font-bold text-gray-400 flex items-center gap-1">
                 {course.duration}
              </div>
              <div className="font-black text-xl text-gray-900 group-hover:text-indigo-600 transition-colors">
                {course.price}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- UNIVERSAL COURSE VISUALIZER ---
function CourseVisualizer({ course, onBack }) {
  const [level, setLevel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState("");
  const [animState, setAnimState] = useState("idle");

  const simData = getSimulationForCourse(course);
  const currentLevel = simData.levels[level];

  const handleRun = () => {
    setIsPlaying(true);
    setAnimState(currentLevel.anim);
    setConsoleOutput(currentLevel.output);
    
    setTimeout(() => {
      setIsPlaying(false);
      setTimeout(() => setAnimState("idle"), 2500);
    }, 2000);
  };

  // --- Visual Stage Rendering Logic ---
  const renderVisualStage = () => {
    const isActive = isPlaying || animState !== 'idle';

    // 1. TECH & DATA (Bot Metaphor)
    if (simData.type === 'tech') {
       return (
          <div className="relative w-full h-full flex items-center justify-center">
             <div className="absolute bottom-10 w-[80%] h-1 bg-white/20 rounded-full"></div>
             
             {/* The Bot */}
             <div className={`transition-all duration-700 flex flex-col items-center ${
                animState === 'moving' ? 'translate-x-32' : 
                animState === 'jumping' ? '-translate-y-24 rotate-12' : ''
             }`}>
                {/* Speech Bubble */}
                <div className={`mb-4 bg-white text-black px-4 py-2 rounded-xl rounded-bl-none text-sm font-bold shadow-lg transform transition-all duration-300 ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                   Running Code... ⚡
                </div>
                {/* Bot Body */}
                <div className="relative w-24 h-24">
                   <div className={`absolute inset-0 bg-cyan-400 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.4)]`}></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-12 bg-gray-900 rounded-lg flex items-center justify-center gap-2">
                      <div className={`w-3 h-3 bg-cyan-200 rounded-full ${isActive ? 'animate-pulse' : ''}`}></div>
                      <div className={`w-3 h-3 bg-cyan-200 rounded-full ${isActive ? 'animate-pulse' : ''}`}></div>
                   </div>
                   <div className="absolute -bottom-3 left-2 w-4 h-4 bg-gray-700 rounded-full animate-spin"></div>
                   <div className="absolute -bottom-3 right-2 w-4 h-4 bg-gray-700 rounded-full animate-spin"></div>
                </div>
             </div>
          </div>
       );
    }

    // 2. CORPORATE (Grid)
    if (simData.type === 'corporate') {
       return (
          <div className="relative w-full h-full flex items-center justify-center p-8">
             <div className="w-full h-64 bg-white rounded-lg shadow-xl overflow-hidden text-black text-xs font-mono transform transition-transform duration-500 hover:scale-105">
                <div className="bg-green-600 text-white p-2 flex gap-4">
                   <span>File</span><span>Home</span><span>Insert</span>
                </div>
                <div className="grid grid-cols-3 gap-0.5 bg-gray-200 border-b border-gray-300">
                   {['A', 'B', 'C'].map(c => <div key={c} className="bg-gray-100 p-1 text-center font-bold">{c}</div>)}
                </div>
                {[1, 2, 3, 4].map(row => (
                   <div key={row} className="grid grid-cols-3 gap-0.5 bg-gray-200">
                      <div className="bg-white p-2 text-center font-bold text-gray-400">{row}</div>
                      <div className="bg-white p-2">Data {row}</div>
                      <div className={`bg-white p-2 transition-colors duration-500 ${isActive && animState === 'filtering' ? 'bg-green-100' : ''}`}>
                         {row * 150}
                      </div>
                   </div>
                ))}
             </div>
             {animState === 'pivoting' && <div className="absolute inset-0 bg-white/90 flex items-center justify-center text-green-600 font-bold text-xl animate-in zoom-in"><PieChart size={48} className="mb-2 mr-2" /> Report Ready</div>}
          </div>
       );
    }

    // 3. COMMUNICATION (Interview)
    if (simData.type === 'comm') {
       return (
          <div className="relative w-full h-full flex flex-col items-center justify-center gap-8">
             <div className="flex items-start gap-4 w-full max-w-sm">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-2xl">👔</div>
                <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none text-sm text-gray-300">
                   {isActive ? "Tell me about your strengths." : "..."}
                </div>
             </div>
             <div className={`flex items-start gap-4 w-full max-w-sm flex-row-reverse transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}>
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-2xl">🧑‍💼</div>
                <div className="bg-orange-100 p-3 rounded-2xl rounded-tr-none text-sm text-orange-900 font-medium">
                   {isActive ? "I am a quick learner and adaptable." : "Thinking..."}
                </div>
             </div>
             {animState === 'talking_hired' && <div className="absolute bottom-20 text-green-400 font-bold text-xl animate-bounce">HIRED! ✅</div>}
          </div>
       );
    }

    // 4. MARKETING (Phone)
    if (simData.type === 'marketing') {
       return (
          <div className="relative w-full h-full flex items-center justify-center">
             <div className="w-60 h-96 bg-black rounded-[2rem] border-4 border-gray-800 p-2 relative shadow-2xl transform transition-transform duration-500 hover:rotate-1">
                <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden flex flex-col">
                   <div className="h-32 bg-gray-200 flex items-center justify-center">
                      <div className="text-4xl animate-pulse">🎥</div>
                   </div>
                   <div className="p-3">
                      <div className="flex gap-2 items-center mb-2">
                         <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
                         <div className="text-xs font-bold">@creator</div>
                      </div>
                      <div className="text-xs text-gray-600 mb-2">
                         {isActive ? "Viral Strategy 101! 🚀" : "New Reel Draft"}
                      </div>
                      <div className="mt-4 flex justify-between text-xs font-bold text-gray-800">
                         <span>{isActive ? "50k Views" : "0 Views"}</span>
                         <Heart size={14} className={isActive ? "text-red-500 fill-red-500" : "text-gray-300"} />
                      </div>
                   </div>
                </div>
                {animState === 'viral' && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-xs animate-bounce whitespace-nowrap">TRENDING 🔥</div>}
             </div>
          </div>
       );
    }

    // 5. FREELANCING (Wallet)
    if (simData.type === 'freelance') {
       return (
          <div className="relative w-full h-full flex flex-col items-center justify-center">
             {animState === 'money' ? (
                <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center gap-4 animate-in zoom-in">
                   <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <DollarSign size={40} />
                   </div>
                   <div className="text-center">
                      <div className="text-gray-500 text-sm">Earnings</div>
                      <div className="text-3xl font-black text-gray-900">$500.00</div>
                   </div>
                </div>
             ) : (
                <div className="w-64 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                   <div className="flex justify-between items-center border-b pb-2 mb-2">
                      <span className="font-bold text-sm">Upwork Client</span>
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                   </div>
                   <div className="bg-blue-50 p-3 rounded-lg text-xs text-blue-900">
                      {isActive ? "Offer Sent! 📝" : "Looking for freelancers..."}
                   </div>
                </div>
             )}
          </div>
       );
    }

    // 6. STUDENT (Document)
    if (simData.type === 'student') {
        return (
            <div className="relative w-full h-full flex items-center justify-center">
                <div className={`w-56 h-72 bg-white rounded-xl shadow-2xl p-6 flex flex-col gap-3 transition-all duration-500 ${animState === 'offer' ? 'scale-110 rotate-2' : ''}`}>
                    <div className="w-12 h-12 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                    <div className="h-px bg-gray-200 my-2"></div>
                    <div className="h-2 w-full bg-gray-100 rounded"></div>
                    <div className="h-2 w-full bg-gray-100 rounded"></div>
                    <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                    {animState === 'resume' && <div className="absolute top-4 right-4 bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded">Score: 90</div>}
                    {animState === 'offer' && <div className="absolute inset-0 bg-green-500/90 flex items-center justify-center text-white font-black text-2xl rotate-[-10deg]">HIRED!</div>}
                </div>
            </div>
        )
    }

    // 7. LIFE SKILLS (Zen/Clock)
    if (simData.type === 'life') {
        return (
            <div className="relative w-full h-full flex items-center justify-center">
                {animState === 'breathe' ? (
                    <div className="w-40 h-40 bg-teal-400/30 rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-24 h-24 bg-teal-400 rounded-full flex items-center justify-center text-teal-900 font-bold">Inhale</div>
                    </div>
                ) : (
                    <div className="w-40 h-40 border-4 border-gray-600 rounded-full flex items-center justify-center relative bg-white">
                        <div className={`w-1 h-16 bg-red-500 absolute bottom-1/2 left-1/2 origin-bottom transition-transform duration-[2000ms] ease-linear ${isActive ? 'rotate-[360deg]' : 'rotate-0'}`}></div>
                        <div className="w-2 h-2 bg-black rounded-full absolute"></div>
                    </div>
                )}
            </div>
        )
    }

    // 8. PREMIUM (Rocket)
    if (simData.type === 'premium') {
        return (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className={`text-8xl transition-transform duration-1000 ${animState === 'launch' ? '-translate-y-64 scale-50' : 'translate-y-0'}`}>
                    🚀
                </div>
                {animState === 'launch' && <div className="absolute bottom-10 text-white font-bold text-xl animate-pulse">LIFTOFF!</div>}
            </div>
        )
    }

    return <div>Simulation Loading...</div>;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8 animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
           <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <ArrowRight className="rotate-180" size={20} /> Back to Course
           </button>
           <h1 className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${simData.theme}`}>
              {simData.title}
           </h1>
           <div className="flex gap-1">
              {[0, 1, 2].map(i => (
                 <div key={i} className={`h-2 w-8 rounded-full ${i <= level ? 'bg-white' : 'bg-gray-700'}`}></div>
              ))}
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 h-[600px]">
           {/* Left: Code/Action Editor */}
           <div className="bg-gray-950 rounded-3xl border border-gray-800 p-6 flex flex-col shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                 <div>
                    <h2 className="text-xl font-bold text-white mb-1">{currentLevel.title}</h2>
                    <p className="text-gray-400 text-sm">{currentLevel.desc}</p>
                 </div>
                 <div className="flex gap-2">
                    {level > 0 && <button onClick={() => setLevel(l => l - 1)} className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"><ArrowRight className="rotate-180" size={16} /></button>}
                    {level < 2 && <button onClick={() => setLevel(l => l + 1)} className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"><ArrowRight size={16} /></button>}
                 </div>
              </div>

              <div className="flex-1 bg-[#0d1117] rounded-xl p-4 font-mono text-sm border border-gray-800 relative group overflow-hidden flex flex-col">
                 <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${simData.theme} opacity-50`}></div>
                 <div className="absolute top-2 right-2 text-xs text-gray-600 font-bold">{simData.editorTitle}</div>
                 <pre className="text-gray-300 relative z-10 whitespace-pre-wrap">
                    <code>{currentLevel.code}</code>
                 </pre>
              </div>

              <button 
                onClick={handleRun}
                disabled={isPlaying}
                className={`mt-6 w-full py-4 bg-gradient-to-r ${simData.theme} rounded-xl font-bold text-white hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-95`}
              >
                 {isPlaying ? <RefreshCw className="animate-spin" size={20} /> : <Play size={20} fill="currentColor" />}
                 {isPlaying ? "Simulating..." : "Run Simulation"}
              </button>
           </div>

           {/* Right: Visual Output */}
           <div className={`bg-gradient-to-br ${simData.theme} rounded-3xl border border-white/10 p-1 relative overflow-hidden shadow-2xl`}>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              
              <div className="h-full bg-black/40 backdrop-blur-sm rounded-[1.3rem] relative flex flex-col items-center justify-center overflow-hidden">
                 
                 {/* VISUAL STAGE */}
                 {renderVisualStage()}

                 {/* Console Output */}
                 <div className="absolute bottom-0 w-full bg-black/80 backdrop-blur border-t border-white/10 p-4 font-mono text-xs text-green-400 h-32 overflow-y-auto">
                    <div className="flex items-center gap-2 text-gray-500 mb-2">
                       <Terminal size={12} /> ACTION LOG
                    </div>
                    {consoleOutput && (
                       <div className="animate-in slide-in-from-left-2 fade-in duration-300">
                          {consoleOutput.split('\n').map((line, i) => (
                             <div key={i}>&gt; {line}</div>
                          ))}
                       </div>
                    )}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

// --- MAIN APP COMPONENT ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeCourse, setActiveCourse] = useState(null); 
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [authModal, setAuthModal] = useState(null); 
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey there! 👋 Main hoon Summuty. Main teri help kaise kar sakta hoon aaj? Career, courses ya bas confused ho?", sender: 'bot' }
  ]);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef(null);

  // Intro Animation States
  const [showIntro, setShowIntro] = useState(true);
  const [introStep, setIntroStep] = useState(0);

  useEffect(() => {
    const step1 = setTimeout(() => setIntroStep(1), 2000);
    const step2 = setTimeout(() => setIntroStep(2), 4000);
    const step3 = setTimeout(() => setIntroStep(3), 6000);
    const step4 = setTimeout(() => setShowIntro(false), 9000);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
      clearTimeout(step4);
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isChatOpen]);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    const userMsg = { id: Date.now(), text: chatInput, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setChatInput("");

    setTimeout(() => {
      let botResponse = "Sahi hai! 😎 Aur batao?";
      if (chatInput.toLowerCase().includes("python") || chatInput.toLowerCase().includes("coding")) {
        botResponse = "Coding seekhna hai? Great choice! Python course check kar, beginner friendly hai. 🐍";
      } else if (chatInput.toLowerCase().includes("job") || chatInput.toLowerCase().includes("career")) {
        botResponse = "Job chahiye? Pehle Skills section mein jao aur 'Communication' strong karo. 💼";
      } else if (chatInput.toLowerCase().includes("price") || chatInput.toLowerCase().includes("free")) {
        botResponse = "Humare paas Free aur Pro dono plans hain. Student pocket-friendly! 💸";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
    }, 1000);
  };

  const handleCourseClick = (course) => {
    // Open simulation for ALL courses now
    setActiveCourse(course);
  };

  const filteredCourses = selectedCategory === "All" 
    ? COURSES 
    : COURSES.filter(c => c.category.includes(selectedCategory) || (selectedCategory === "Tech & High-Income" && c.category.includes("Tech")));

  const navLinks = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'career', label: 'Career Map', icon: TrendingUp },
    { id: 'community', label: 'Community', icon: Users },
  ];

  // If a specific course is active, show its custom view
  if (activeCourse) {
     return <CourseVisualizer course={activeCourse} onBack={() => setActiveCourse(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-800 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden relative">
      
      {/* --- INTRO ANIMATION FLOW --- */}
      {showIntro && (
        <div className="fixed inset-0 z-[100] bg-gray-900 text-white flex items-center justify-center overflow-hidden">
           {introStep === 0 && (
             <div className="animate-in slide-in-from-right duration-700 fade-in text-center p-4">
               <h1 className="text-4xl md:text-6xl font-black mb-4">“Does studying feel boring?” 😴</h1>
             </div>
           )}
           {introStep === 1 && (
             <div className="animate-in slide-in-from-right duration-700 fade-in text-center p-4">
               <h1 className="text-4xl md:text-6xl font-black mb-4">“Stressed about a job?” 😰</h1>
             </div>
           )}
           {introStep === 2 && (
             <div className="animate-in slide-in-from-right duration-700 fade-in text-center p-4">
               <h1 className="text-4xl md:text-6xl font-black mb-4">“Relax.” 😎</h1>
             </div>
           )}
           {introStep === 3 && (
             <div className="animate-in zoom-in duration-700 fade-in text-center p-4">
               <div className="bg-white p-4 rounded-3xl inline-block mb-6 shadow-2xl shadow-indigo-500/50 animate-bounce">
                  <Zap size={64} className="text-indigo-600" fill="currentColor" />
               </div>
               <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">EduNex</h1>
               <p className="text-xl md:text-2xl text-gray-400 font-bold">“Let’s fix your future.”</p>
             </div>
           )}
        </div>
      )}

      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200/20 blur-[120px] mix-blend-multiply animate-pulse"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-200/20 blur-[120px] mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-pink-200/20 blur-[120px] mix-blend-multiply"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-0">
        <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg shadow-gray-200/20 rounded-2xl px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => setActiveTab('home')}>
              <div className="bg-gray-900 group-hover:bg-indigo-600 transition-colors p-2 rounded-xl transform -rotate-6">
                <Zap className="text-white" size={18} fill="currentColor" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-gray-900 group-hover:text-indigo-600 transition-colors">
                Edu<span className="text-indigo-600 group-hover:text-gray-900">Nex</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                    activeTab === link.id 
                      ? "bg-gray-100 text-indigo-600" 
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button onClick={() => setAuthModal('login')} className="px-4 py-2 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">Log In</button>
              <Button variant="primary" className="py-2.5 px-5 text-sm rounded-xl" onClick={() => setAuthModal('signup')}>Get Started</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 mx-auto max-w-[95%] bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl p-4 shadow-xl flex flex-col gap-2 animate-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { setActiveTab(link.id); setIsMenuOpen(false); }}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                  activeTab === link.id ? "bg-indigo-50 text-indigo-600 font-bold" : "text-gray-600 font-medium hover:bg-gray-50"
                }`}
              >
                <link.icon size={20} strokeWidth={activeTab === link.id ? 2.5 : 2} />
                <span>{link.label}</span>
              </button>
            ))}
             <div className="h-px bg-gray-100 my-2"></div>
             <div className="grid grid-cols-2 gap-3">
                <Button variant="secondary" className="justify-center" onClick={() => setAuthModal('login')}>Log In</Button>
                <Button variant="primary" className="justify-center" onClick={() => setAuthModal('signup')}>Join Free</Button>
             </div>
          </div>
        )}
      </nav>

      {/* --- CONTENT AREA --- */}
      <main className="pt-28 pb-24 relative z-10">
        
        {/* VIEW: HOME */}
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
              <div className="flex-1 text-center md:text-left space-y-8">
                
                <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-indigo-100 text-indigo-900 px-4 py-2 rounded-full font-bold text-xs md:text-sm shadow-sm hover:shadow-md transition-shadow cursor-default animate-fade-in-up">
                  <span className="relative flex h-2.5 w-2.5 mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                  </span>
                  AI Learning Assistant is Live! 🤖
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
                  Padhai ko banao <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                    Fun & Future-Ready
                  </span> 🚀
                </h1>
                
                <p className="text-xl text-gray-500 font-medium max-w-lg mx-auto md:mx-0 leading-relaxed">
                  Skills seekho, projects banao aur career set karo. Simple Hinglish mein, India ke best mentors ke saath.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-2">
                  <Button variant="accent" onClick={() => setActiveTab('courses')} icon={PlayCircle} className="w-full sm:w-auto h-14 px-8 text-lg shadow-indigo-500/25">Start Learning Free</Button>
                  <Button variant="secondary" onClick={() => setActiveTab('career')} icon={Briefcase} className="w-full sm:w-auto h-14 px-8 text-lg">Explore Careers</Button>
                </div>
                
                <div className="pt-6 flex items-center justify-center md:justify-start gap-5">
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-[#FDFDFD] bg-gray-200 flex items-center justify-center overflow-hidden shadow-md">
                        <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i+20}`} alt="User" className="bg-indigo-50" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-1 text-amber-500">
                      {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-sm font-bold text-gray-400 mt-1">Join <span className="text-indigo-600">50,000+</span> Students</p>
                  </div>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="flex-1 w-full max-w-md md:max-w-xl relative perspective-1000">
                 <div className="relative aspect-[4/5] md:aspect-square">
                    {/* Background Blob */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-[2.5rem] rotate-3 scale-95 border border-white/40 shadow-2xl"></div>
                    
                    {/* Main Image Container */}
                    <div className="absolute inset-0 bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden flex items-center justify-center transform hover:rotate-1 transition-transform duration-700 ease-out">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-[0.03]"></div>
                        
                        {/* Abstract Shapes */}
                        <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
                        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-50 rounded-full blur-3xl opacity-60"></div>
                        
                        {/* Mascot */}
                        <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 cursor-pointer">
                          <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=transparent" alt="Mascot" className="w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl" />
                        </div>

                        {/* Floating Cards */}
                        <div className="absolute right-8 top-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 animate-bounce-slow">
                          <div className="bg-green-100 p-2 rounded-xl text-green-600"><CheckCircle size={20} strokeWidth={3} /></div>
                          <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Status</p>
                            <p className="text-sm font-bold text-gray-800">Python: Done!</p>
                          </div>
                        </div>

                        <div className="absolute left-8 bottom-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 animate-bounce-slow delay-700">
                          <div className="bg-orange-100 p-2 rounded-xl text-orange-500"><Flame size={20} strokeWidth={3} fill="currentColor" /></div>
                          <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Streak</p>
                            <p className="text-sm font-bold text-gray-800">12 Days 🔥</p>
                          </div>
                        </div>
                    </div>
                 </div>
              </div>
            </section>

            {/* Features Strip */}
            <div className="max-w-7xl mx-auto px-4 mb-20">
               <div className="bg-white/50 backdrop-blur-sm border border-white/60 rounded-3xl p-8 shadow-sm flex justify-around flex-wrap gap-8 text-center md:divide-x divide-gray-100">
                  {[
                    {icon: Zap, text: "Bite-sized Learning", sub: "Under 15 mins"},
                    {icon: MessageCircle, text: "Hinglish Content", sub: "Easy to understand"},
                    {icon: Award, text: "Certified Skills", sub: "Boost Resume"},
                    {icon: Users, text: "Peer Community", sub: "Learn together"}
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-3 flex-1 min-w-[150px] group cursor-default">
                       <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                        <item.icon size={24} />
                       </div>
                       <div>
                         <h4 className="font-bold text-gray-900">{item.text}</h4>
                         <p className="text-xs text-gray-400 font-medium">{item.sub}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Popular Courses Preview */}
            <section className="max-w-7xl mx-auto px-4 pb-24">
               <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                 <div>
                   <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">Popular Courses 🔥</h2>
                   <p className="text-gray-500 font-medium">Jo market mein trending hai, wo yahan hai.</p>
                 </div>
                 <button onClick={() => setActiveTab('courses')} className="hidden md:flex items-center gap-2 text-indigo-600 font-bold hover:bg-indigo-50 px-4 py-2 rounded-xl transition-all group">
                    View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </button>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {COURSES.slice(0, 3).map((course) => (
                    <CourseCard key={course.id} course={course} onClick={handleCourseClick} />
                  ))}
               </div>
               
               <div className="mt-8 text-center md:hidden">
                 <Button variant="secondary" onClick={() => setActiveTab('courses')} className="w-full">View All Courses</Button>
               </div>
            </section>

             {/* Testimonials */}
             <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900 clip-path-slant"></div>
                
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                  <div className="text-center mb-16">
                     <Badge color="purple">Wall of Love</Badge>
                     <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-3 tracking-tight">Student ki Awaaz 📢</h2>
                     <p className="text-gray-400">Real stories from real students.</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t, i) => (
                      <div key={t.id} className={`bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2 duration-300 ${i === 1 ? 'md:-translate-y-4' : ''}`}>
                         <div className="flex items-center gap-1 mb-6">
                           {[1,2,3,4,5].map(s => <Star key={s} size={16} className="text-amber-400" fill="currentColor" />)}
                         </div>
                         <p className="text-lg text-gray-200 italic mb-8 leading-relaxed">"{t.text}"</p>
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-xl text-white shadow-lg">
                              {t.name[0]}
                            </div>
                            <div>
                              <div className="font-bold text-white">{t.name}</div>
                              <div className="text-xs font-bold uppercase tracking-wider text-indigo-300">{t.role}</div>
                            </div>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
             </section>
          </>
        )}

        {/* VIEW: COURSES */}
        {activeTab === 'courses' && (
          <div className="max-w-7xl mx-auto px-4 py-8">
            <SectionTitle title="Explore Courses 📚" subtitle="Skills that pay the bills. Choose your path." />
            
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-12 justify-between items-center bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
               <div className="flex gap-2 overflow-x-auto w-full md:w-auto p-1 no-scrollbar">
                 {CATEGORIES.map((cat) => (
                   <button 
                     key={cat} 
                     onClick={() => setSelectedCategory(cat)}
                     className={`px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all focus:outline-none 
                        ${selectedCategory === cat ? 'bg-gray-900 text-white shadow-lg' : 'hover:bg-gray-50 text-gray-600 hover:text-gray-900'}
                     `}
                   >
                      {cat}
                   </button>
                 ))}
               </div>
               <div className="w-full md:w-72 relative">
                  <input type="text" placeholder="Search course..." className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-indigo-100 text-sm font-medium transition-all" />
                  <Search className="absolute left-4 top-3 text-gray-400" size={18} />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} onClick={handleCourseClick} />
              ))}
            </div>
          </div>
        )}

        {/* VIEW: CAREER MAP */}
        {activeTab === 'career' && (
          <div className="max-w-5xl mx-auto px-4 py-8">
             <SectionTitle title="Career Roadmap 🗺️" subtitle="From Zero to Hired. Follow the path." />
             
             <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

                {[
                  { title: "Foundation Skills", desc: "Communication & Basic Excel.", icon: BookOpen, color: "bg-blue-500" },
                  { title: "Choose Specialization", desc: "Coding, Marketing, or Data.", icon: Zap, color: "bg-purple-500" },
                  { title: "Build Projects", desc: "Real work dikhao. Portfolio banao.", icon: Lock, color: "bg-pink-500" },
                  { title: "Internship Ready", desc: "Resume building & Mock Interviews.", icon: Star, color: "bg-amber-500" },
                  { title: "Get Hired!", desc: "Apply to jobs & crush the interview.", icon: Briefcase, color: "bg-green-500" }
                ].map((step, index) => (
                  <div key={index} className={`flex items-center gap-8 mb-12 relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                     
                     {/* Icon Node */}
                     <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                       <div className={`w-16 h-16 rounded-2xl ${step.color} text-white flex items-center justify-center shadow-lg shadow-gray-300 ring-4 ring-white`}>
                         <step.icon size={28} />
                       </div>
                     </div>

                     {/* Content Card */}
                     <div className={`ml-20 md:ml-0 w-full md:w-[calc(50%-40px)] bg-white p-6 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                        <div className="flex items-center gap-3 mb-2">
                           <span className="text-xs font-black text-gray-300 uppercase tracking-widest">Step 0{index + 1}</span>
                           <div className="h-px bg-gray-100 flex-1"></div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{step.title}</h3>
                        <p className="text-gray-500 mt-2 text-sm leading-relaxed">{step.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
             
             <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 md:p-16 text-center mt-12 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-4">Start your journey today!</h3>
                  <p className="text-indigo-100 mb-8 text-lg">Confused kahan se start karein? Talk to Summuty AI.</p>
                  <Button variant="secondary" className="border-none shadow-xl mx-auto" onClick={() => setIsChatOpen(true)}>Ask Summuty 🤖</Button>
                </div>
             </div>
          </div>
        )}

        {/* VIEW: COMMUNITY */}
        {activeTab === 'community' && (
          <div className="max-w-7xl mx-auto px-4 py-8">
            <SectionTitle title="Apni Gang / Community 🤝" subtitle="Learning is boring alone. Join the squad." />
            
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-gray-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col justify-between min-h-[400px]">
                  <div className="relative z-10">
                    <div className="inline-block bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-bold mb-6 border border-indigo-500/30">PREMIUM COMMUNITY</div>
                    <h3 className="text-4xl font-black mb-6">EduNex <br/> <span className="text-indigo-400">Discord Server</span></h3>
                    <ul className="space-y-4 mb-10">
                      {[
                        "24/7 Doubt Support",
                        "Exclusive Webinars",
                        "Study Buddies"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-lg font-medium text-gray-300">
                          <div className="bg-green-500/20 p-1 rounded-full"><CheckCircle size={16} className="text-green-400" /></div> 
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button variant="accent" className="w-full md:w-auto px-8">Join Server (Free)</Button>
                  </div>
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-600/30 blur-[100px] rounded-full"></div>
                  <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-purple-600/20 blur-[80px] rounded-full"></div>
               </div>

               <div className="grid gap-4 content-start">
                  {['Web Dev Squad', 'English Speaking Club', 'Fresher Jobs Alert', 'Meme & Chill'].map((group, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md hover:border-indigo-100 transition-all cursor-pointer group">
                       <div className="flex items-center gap-5">
                          <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center font-black text-xl text-gray-300 group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-colors">#</div>
                          <div>
                            <h4 className="font-bold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors">{group}</h4>
                            <p className="text-sm text-gray-400 font-medium mt-1">1.2k members • 50 online</p>
                          </div>
                       </div>
                       <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                          <ArrowRight size={20} />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        )}

      </main>

      {/* --- FLOATING AI ASSISTANT (Summuty) --- */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isChatOpen && (
           <button 
             onClick={() => setIsChatOpen(true)}
             className="w-16 h-16 bg-black hover:bg-gray-800 text-white rounded-full shadow-2xl shadow-indigo-500/30 flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 group"
           >
             <div className="relative">
               <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Summuty" className="w-10 h-10 transition-transform group-hover:rotate-12" alt="AI" />
               <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></span>
             </div>
           </button>
        )}
        
        {isChatOpen && (
          <div className="w-[90vw] md:w-[400px] bg-white rounded-3xl shadow-2xl shadow-gray-400/50 border border-white/50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in h-[600px] backdrop-blur-xl">
             {/* Chat Header */}
             <div className="bg-gray-900 p-5 flex justify-between items-center text-white">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/10 rounded-2xl p-1.5 backdrop-blur-sm border border-white/10">
                    <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Summuty" alt="AI" />
                 </div>
                 <div>
                   <h3 className="font-bold text-base">Summuty AI</h3>
                   <p className="text-xs text-gray-400 font-medium flex items-center gap-1.5 mt-0.5">
                     <span className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span> 
                     Always Online
                   </p>
                 </div>
               </div>
               <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors"><X size={20} /></button>
             </div>

             {/* Chat Body */}
             <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-gray-50">
               {messages.map((msg) => (
                 <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                   <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium shadow-sm ${
                     msg.sender === 'user' 
                       ? 'bg-indigo-600 text-white rounded-tr-sm' 
                       : 'bg-white text-gray-700 border border-gray-100 rounded-tl-sm'
                   }`}>
                     {msg.text}
                   </div>
                 </div>
               ))}
               <div ref={chatEndRef} />
             </div>

             {/* Chat Input */}
             <div className="p-4 bg-white border-t border-gray-100 flex gap-3 items-center">
               <input 
                 type="text" 
                 value={chatInput}
                 onChange={(e) => setChatInput(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                 placeholder="Type a message..." 
                 className="flex-1 bg-gray-100 hover:bg-gray-50 rounded-xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 ring-indigo-500/20 transition-all"
               />
               <button onClick={handleSendMessage} className="bg-indigo-600 text-white p-3.5 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all transform active:scale-95">
                 <Send size={20} />
               </button>
             </div>
          </div>
        )}
      </div>

      {/* --- AUTH MODAL --- */}
      {authModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl relative">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
             <button onClick={() => setAuthModal(null)} className="absolute top-5 right-5 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-all"><X size={20} /></button>
             
             <div className="p-10 pt-12">
               <div className="text-center mb-8">
                  <div className="inline-block bg-indigo-50 p-3 rounded-2xl mb-4">
                     <Zap size={32} className="text-indigo-600" fill="currentColor" />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 mb-2">{authModal === 'login' ? 'Welcome Back!' : 'Join EduNex'}</h2>
                  <p className="text-gray-500 font-medium">Let's get you ready for the future.</p>
               </div>
               
               <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Welcome to EduNex! (Demo)"); setAuthModal(null); }}>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2 ml-1">Email Address</label>
                    <input type="email" className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-100 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all font-medium" placeholder="student@college.edu" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2 ml-1">Password</label>
                    <input type="password" className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-100 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all font-medium" placeholder="••••••••" />
                    <p className="text-xs text-red-500 font-bold mt-2">“Life is already insecure, don’t create an account.” 😅</p>
                  </div>
                  <Button variant="primary" className="w-full justify-center text-base py-4 mt-2 shadow-indigo-500/20">{authModal === 'login' ? 'Log In' : 'Create Account'}</Button>
               </form>
               
               <div className="mt-8 text-center text-sm font-medium text-gray-500">
                  {authModal === 'login' ? (
                    <p>New here? <button onClick={() => setAuthModal('signup')} className="text-indigo-600 font-bold hover:underline">Create an account</button></p>
                  ) : (
                    <p>Already have an account? <button onClick={() => setAuthModal('login')} className="text-indigo-600 font-bold hover:underline">Log in</button></p>
                  )}
               </div>
             </div>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1 space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-gray-900 p-2 rounded-lg transform -rotate-6">
                   <Zap className="text-white" size={18} fill="currentColor" />
                </div>
                <span className="text-2xl font-black text-gray-900">EduNex</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                Making learning fun, simple, and career-oriented for the next generation of India. 🇮🇳
              </p>
              <div className="flex gap-4">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 flex items-center justify-center transition-colors cursor-pointer">
                     <div className="w-4 h-4 bg-current rounded-sm"></div>
                   </div>
                 ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Learn</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-500">
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">All Courses</li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">Free Resources</li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">Career Paths</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Company</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-500">
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors flex items-center gap-2">Careers <Badge color="green">Hiring</Badge></li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Stay Updated</h4>
              <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="bg-gray-50 px-4 py-3 rounded-xl text-sm w-full border border-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all" />
                <button className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all"><ArrowRight size={18} /></button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-400">
            <p>&copy; 2024 EduNex Learning Pvt Ltd.</p>
            <div className="flex gap-8">
              <span className="hover:text-gray-600 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-gray-600 cursor-pointer">Terms</span>
              <span className="hover:text-gray-600 cursor-pointer">Made with ❤️ in India</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
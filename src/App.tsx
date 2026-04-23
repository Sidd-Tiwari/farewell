import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Heart,
  Mail,
  Send,
  Linkedin,
  Star,
  Zap,
  Target,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Check,
  ExternalLink,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';

interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

const PremiumFarewellWebsite: React.FC = () => {
  const darkMode = true;
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [activeMemory, setActiveMemory] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fullText = 'From a Hesitant Student to a Confident Leader';
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/tiwarisid022018@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `[Student Representative] ${formData.subject}`,
          message: formData.message,
          _subject: `New message from ${formData.name} - ${formData.subject}`,
        }),
      });

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus({ type: null, message: '' }), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email directly.',
      });
      setTimeout(() => setFormStatus({ type: null, message: '' }), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const achievements: Achievement[] = [
    {
      title: '1st Position',
      subtitle: 'University of Lucknow',
      description: 'Hackathon Victory - Led the team to success',
      icon: '🏆',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      title: '2nd Runner Up',
      subtitle: 'GLA University Tech Fest',
      description: 'Hackathon Championship - Outstanding performance',
      icon: '🥈',
      color: 'from-gray-400 to-blue-500',
    },
    {
      title: 'Student Representative',
      subtitle: 'Maharishi University',
      description: 'Leading & Managing Students',
      icon: '👥',
      color: 'from-purple-400 to-indigo-600',
    },
    {
      title: 'Tech Fest Leadership',
      subtitle: 'Campus Initiative',
      description: 'Event Organization & Campus Development',
      icon: '🎯',
      color: 'from-pink-400 to-red-500',
    },
  ];

  const growthPoints = [
    {
      icon: '🎓',
      title: 'Leadership Skills',
      description: 'Learned to lead, inspire, and manage diverse teams with confidence.',
      stats: '1k+ Students Managed',
    },
    {
      icon: '💬',
      title: 'Communication',
      description: 'Developed strong communication and interpersonal abilities.',
      stats: '500+ Interactions',
    },
    {
      icon: '⚙️',
      title: 'Management',
      description: 'Mastered time management and organizational excellence.',
      stats: '50+ Events Organized',
    },
    {
      icon: '🤝',
      title: 'Teamwork',
      description: 'Built strong bonds and learned collaborative problem-solving.',
      stats: '10+ Successful Projects',
    },
  ];

  const memories = [
    { emoji: '🎪', label: 'Tech Fest Adventures', description: 'Epic moments & celebrations' },
    { emoji: '🏃‍♂️', label: 'Hackathon Wins', description: 'Victory & determination' },
    { emoji: '🤗', label: 'Hostel Life', description: 'Friendships & brotherhood' },
    { emoji: '📚', label: 'Learning Journey', description: 'Growth & knowledge' },
    { emoji: '🎉', label: 'Celebrations', description: 'Joy & togetherness' },
    { emoji: '💭', label: 'Late Night Talks', description: 'Dreams & conversations' },
  ];

  const gratitudePeople = [
    { name: 'Dean Sir', emoji: '👔', highlight: true, impact: 'Life Changer' },
    { name: 'HODs', emoji: '📚', impact: 'Mentors' },
    { name: 'DSW Sir', emoji: '🎓', impact: 'Guide' },
    { name: 'Chancellor Sir', emoji: '⭐', impact: 'Inspiration' },
    { name: 'Teaching Staff', emoji: '👨‍🏫', impact: 'Teachers' },
    { name: 'Seniors', emoji: '🌟', impact: 'Guides' },
    { name: 'Batchmates', emoji: '👬', impact: 'Brothers' },
    { name: 'Juniors', emoji: '🌱', impact: 'Responsibility' },
    { name: 'Guard Uncle', emoji: '🙏', impact: 'Support' },
  ];

  const messages = [
    { text: 'Take every opportunity seriously', icon: '🎯' },
    { text: 'Step out of your comfort zone', icon: '🚀' },
    { text: 'Build meaningful connections', icon: '🤝' },
    { text: 'Believe in yourself always', icon: '💪' },
    { text: 'Enjoy the college journey', icon: '🎉' },
    { text: 'Never stop learning', icon: '📚' },
  ];

  const stats = [
    { number: '4', label: 'Years of Journey', icon: '📅' },
    { number: '1k+', label: 'Students Managed', icon: '👥' },
    { number: '50+', label: 'Events Organized', icon: '🎯' },
    { number: '2', label: 'Major Hackathon Wins', icon: '🏆' },
  ];

  return (
    <div
      ref={containerRef}
      className="dark bg-slate-950 text-slate-100 transition-colors duration-500 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&family=Lora:wght@400;500;600&display=swap');

        * {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Poppins', sans-serif;
        }

        .font-cinzel {
          font-family: 'Cinzel', serif;
        }

        .font-lora {
          font-family: 'Lora', serif;
        }

        .diagonal-grid {
          background-image: 
            linear-gradient(45deg, rgba(99, 102, 241, 0.05) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(99, 102, 241, 0.05) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(99, 102, 241, 0.05) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(99, 102, 241, 0.05) 75%);
          background-size: 40px 40px;
          background-position: 0 0, 0 20px, 20px -20px, -20px 0;
          background-repeat: repeat;
        }

        .dark .diagonal-grid {
          background-image: 
            linear-gradient(45deg, rgba(99, 102, 241, 0.08) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(99, 102, 241, 0.08) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(99, 102, 241, 0.08) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(99, 102, 241, 0.08) 75%);
        }

        .dots-pattern {
          background-image: radial-gradient(circle, rgba(99, 102, 241, 0.1) 2px, transparent 2px);
          background-size: 30px 30px;
          background-position: 0 0;
        }

        .dark .dots-pattern {
          background-image: radial-gradient(circle, rgba(99, 102, 241, 0.15) 2px, transparent 2px);
        }

        .wavy-lines {
          background-image: 
            linear-gradient(0deg, transparent 24%, rgba(99, 102, 241, 0.05) 25%, rgba(99, 102, 241, 0.05) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, 0.05) 75%, rgba(99, 102, 241, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, 0.05) 25%, rgba(139, 92, 246, 0.05) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.05) 75%, rgba(139, 92, 246, 0.05) 76%, transparent 77%, transparent);
          background-size: 50px 50px;
        }

        .dark .wavy-lines {
          background-image: 
            linear-gradient(0deg, transparent 24%, rgba(99, 102, 241, 0.1) 25%, rgba(99, 102, 241, 0.1) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, 0.1) 75%, rgba(99, 102, 241, 0.1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, 0.1) 25%, rgba(139, 92, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.1) 75%, rgba(139, 92, 246, 0.1) 76%, transparent 77%, transparent);
        }

        .hexagon-pattern {
          background-image: 
            linear-gradient(130deg, transparent 24%, rgba(99, 102, 241, 0.06) 25%, rgba(99, 102, 241, 0.06) 26%, transparent 27%),
            linear-gradient(50deg, transparent 24%, rgba(139, 92, 246, 0.06) 25%, rgba(139, 92, 246, 0.06) 26%, transparent 27%);
          background-size: 70px 70px;
        }

        .dark .hexagon-pattern {
          background-image: 
            linear-gradient(130deg, transparent 24%, rgba(99, 102, 241, 0.1) 25%, rgba(99, 102, 241, 0.1) 26%, transparent 27%),
            linear-gradient(50deg, transparent 24%, rgba(139, 92, 246, 0.1) 25%, rgba(139, 92, 246, 0.1) 26%, transparent 27%);
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(99, 102, 241, 0.8);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes glow-border {
          0%, 100% {
            border-color: rgba(99, 102, 241, 0.3);
            box-shadow: 0 0 10px rgba(99, 102, 241, 0.2);
          }
          50% {
            border-color: rgba(99, 102, 241, 0.8);
            box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes rotate-3d {
          from {
            transform: perspective(1000px) rotateY(0deg);
          }
          to {
            transform: perspective(1000px) rotateY(360deg);
          }
        }

        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-slide-down {
          animation: slideDown 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 1000px 100%;
        }

        .animate-glow-border {
          animation: glow-border 2s ease-in-out infinite;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-rotate-3d {
          animation: rotate-3d 6s linear infinite;
        }

        .animate-gradient-flow {
          animation: gradient-flow 6s ease infinite;
          background-size: 200% 200%;
        }

        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s infinite;
          background-size: 200% 100%;
        }

        .gradient-text-animate {
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 100%;
          animation: shimmer 6s ease infinite;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(226, 232, 240, 0.5);
        }

        .dark .glass-effect {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(71, 85, 105, 0.5);
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 30px 60px rgba(99, 102, 241, 0.35);
        }

        .typing-cursor {
          display: inline-block;
          width: 3px;
          height: 1em;
          background: #6366f1;
          margin-left: 2px;
          animation: blink 0.7s infinite;
        }

        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }

        .stagger-child {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .card-gradient-1 {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .card-gradient-2 {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .card-gradient-3 {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .card-gradient-4 {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        }

        .input-focus {
          transition: all 0.3s ease;
        }

        .input-focus:focus {
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
          border-color: #6366f1;
        }

        @media (max-width: 768px) {
          .glass-effect {
            background: rgba(255, 255, 255, 0.85);
          }

          .dark .glass-effect {
            background: rgba(15, 23, 42, 0.8);
          }
        }
      `}</style>

      {/* Top Center LinkedIn Only */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-slide-down">
        <a
          href="https://www.linkedin.com/in/siddharth-tiwari-394451271/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-blue-400 hover:bg-slate-700 hover:text-blue-300 transition-all shadow-lg"
          title="LinkedIn Profile"
        >
          <Linkedin size={22} />
        </a>
      </div>

      {/* Hero Section with Unique Background */}
      <section
        id="hero"
        className={`min-h-screen flex items-center justify-center px-4 pt-24 pb-10 relative overflow-hidden ${
          darkMode ? 'bg-slate-950 hexagon-pattern' : 'bg-white diagonal-grid'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 -right-40 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
            style={{
              animation: 'float 8s ease-in-out infinite',
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
            style={{
              animation: 'float 10s ease-in-out infinite 2s',
              transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            style={{
              animation: 'float 12s ease-in-out infinite 4s',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 rounded-full border border-indigo-300 dark:border-indigo-600 animate-scale-in">
            <p className="text-sm font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-widest flex items-center gap-2">
              <Sparkles size={16} />
              Class of 2022-2026
            </p>
          </div>

          <h1 className="font-cinzel text-6xl md:text-8xl font-bold mb-6 gradient-text-animate leading-tight">
            A Journey <br /> of Growth
          </h1>

          <div className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-8 font-lora h-16 flex items-center justify-center font-light">
            {typedText}
            <span className="typing-cursor" />
          </div>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
            Student Representative • Maharishi University of Information Technology, Lucknow Campus
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-effect rounded-xl p-6 hover-lift stagger-child"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <p className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </p>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => handleSmoothScroll('about')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all hover-lift animate-scale-in group"
          >
            Explore My Journey
            <ArrowRight
              size={24}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <div className="mt-16 animate-bounce">
            <ChevronDown
              size={28}
              className="text-indigo-600 dark:text-indigo-400 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* About Section with Wavy Lines Pattern */}
      <section
        id="about"
        className={`py-24 md:py-40 px-4 ${
          darkMode ? 'bg-slate-900 wavy-lines' : 'bg-white wavy-lines'
        } transition-colors duration-300 relative overflow-hidden`}
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="font-cinzel text-5xl md:text-6xl font-bold mb-4 gradient-text">
            The Beginning
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-12 animate-glow-border" />

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="glass-effect rounded-2xl p-8 md:p-12 animate-fade-in-up md:animate-slide-in-left">
              <p className="text-lg font-lora leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
                As I come to the end of my journey as a B.Tech CSE student, I find myself reflecting
                on where it all began in 2022. Back then, I was just another student introducing
                myself with hesitation—low confidence, a bit of ego, and very little clarity.
              </p>

              <p className="text-lg font-lora leading-relaxed text-slate-700 dark:text-slate-300">
                I still remember one incident in the mess where I complained loudly about the food,
                not realizing that the Dean was present there. Later, I was called to his cabin...
              </p>
            </div>

            <div className="relative animate-fade-in-up md:animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-2xl opacity-20 animate-pulse" />
              <div className="glass-effect rounded-2xl p-8 relative border-2 border-indigo-500/50 animate-glow-border">
                <p className="text-xl font-cinzel font-bold text-slate-900 dark:text-white mb-4">
                  The Turning Point
                </p>
                <p className="text-slate-700 dark:text-slate-300 font-lora text-lg italic leading-relaxed">
                  Instead of scolding me, he gave me something far more valuable—guidance. He taught
                  me to focus on growth instead of complaints. That moment quietly changed my
                  direction. From there, opportunities started coming my way.
                </p>
                <div className="mt-6 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
                  <Check size={20} />
                  Life-Changing Wisdom
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section with Dots Pattern */}
      <section
        id="growth"
        className={`py-24 md:py-40 px-4 ${
          darkMode ? 'bg-slate-950 dots-pattern' : 'bg-white dots-pattern'
        } transition-colors duration-300`}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="font-cinzel text-5xl md:text-6xl font-bold mb-4 gradient-text text-center">
            Growth & Leadership
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-16 font-light text-lg">
            Student Representative managing  diverse students with passion and responsibility
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {growthPoints.map((point, idx) => (
              <div
                key={idx}
                className="glass-effect rounded-2xl p-8 hover-lift stagger-child relative group overflow-hidden"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="relative z-10">
                  <div className="text-6xl mb-4 animate-float">{point.icon}</div>
                  <h3 className="font-cinzel text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {point.description}
                  </p>
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      {point.stats}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className={`py-24 md:py-40 px-4 ${
          darkMode ? 'bg-slate-900' : 'bg-white'
        } transition-colors duration-300 relative`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="font-cinzel text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Achievements
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-16 font-light text-lg">
            Milestones that prove growth is possible with determination
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 hover-lift stagger-child text-white shadow-xl relative overflow-hidden group ${
                  'card-gradient-' + ((idx % 4) + 1)
                }`}
                style={{
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />

                <div className="relative z-10 text-center">
                  <div className="text-7xl mb-4 animate-bounce-in">{achievement.icon}</div>
                  <h3 className="font-cinzel text-3xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm font-bold opacity-90 mb-3 uppercase tracking-wider">
                    {achievement.subtitle}
                  </p>
                  <p className="text-sm opacity-80 font-light">{achievement.description}</p>
                </div>

                <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-white/30 group-hover:border-white/60 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section
        id="memories"
        className={`py-24 md:py-40 px-4 ${
          darkMode ? 'bg-slate-950 hexagon-pattern' : 'bg-white hexagon-pattern'
        } transition-colors duration-300 relative z-10`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="font-cinzel text-5xl md:text-6xl font-bold mb-4 gradient-text text-center">
            Cherished Memories
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-16 font-light text-lg">
            Moments that made this journey unforgettable
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memories.map((memory, idx) => (
              <div
                key={idx}
                onClick={() => setActiveMemory(idx)}
                className={`rounded-2xl p-12 flex flex-col items-center justify-center hover-lift cursor-pointer group stagger-child transition-all ${
                  activeMemory === idx
                    ? 'glass-effect ring-2 ring-indigo-600 scale-105'
                    : 'glass-effect'
                } min-h-60`}
                style={{
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                <div className="text-8xl mb-4 group-hover:animate-rotate-3d transition-transform">
                  {memory.emoji}
                </div>
                <p className="font-cinzel font-bold text-center text-slate-900 dark:text-white text-xl mb-2">
                  {memory.label}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  {memory.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gratitude Section */}
      <section
        id="gratitude"
        className={`py-24 md:py-40 px-4 ${
          darkMode ? 'bg-slate-900 dots-pattern' : 'bg-white dots-pattern'
        } transition-colors duration-300 relative overflow-hidden`}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="font-cinzel text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Built on Gratitude
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-16 font-light text-lg">
            This journey would never have been possible without these remarkable people
          </p>

          <div className="glass-effect rounded-3xl p-12 mb-16 bg-gradient-to-r from-indigo-100/50 to-purple-100/50 dark:from-indigo-900/30 dark:to-purple-900/30 border-2 border-indigo-400/50 dark:border-indigo-600/50 animate-fade-in-up hover-lift">
            <div className="flex items-start gap-4 mb-4">
              <Heart className="text-pink-500 fill-pink-500 flex-shrink-0 mt-1" size={28} />
              <div>
                <p className="text-2xl font-cinzel font-bold text-slate-900 dark:text-white mb-4">
                  Special Thanks to Dean Sir
                </p>
                <p className="text-lg font-lora text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "A very special thanks to Dean Sir, whose guidance at the right time changed my
                  mindset and helped me become a better version of myself. Your wisdom and support
                  shaped not just my college journey but my character. You're my inspiration, my
                  mentor, and my life changer."
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {gratitudePeople.map((person, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-6 text-center hover-lift stagger-child transition-all cursor-pointer relative group ${
                  person.highlight
                    ? 'bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 text-white shadow-2xl animate-pulse-glow'
                    : 'glass-effect text-slate-900 dark:text-white'
                }`}
                style={{
                  animationDelay: `${idx * 0.05}s`,
                }}
              >
                <div className="text-5xl mb-3 group-hover:animate-bounce-in">
                  {person.emoji}
                </div>
                <p className="font-semibold text-sm md:text-base">{person.name}</p>
                {person.impact && (
                  <p className="text-xs mt-2 opacity-80 font-medium uppercase tracking-wider">
                    {person.impact}
                  </p>
                )}

                {person.highlight && (
                  <div className="absolute -top-3 -right-3 bg-yellow-300 text-yellow-900 rounded-full p-2 font-bold text-xs">
                    ⭐
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message to Juniors */}
      <section
        id="message"
        className={`py-24 md:py-40 px-4 ${
          darkMode ? 'bg-slate-950 wavy-lines' : 'bg-white wavy-lines'
        } transition-colors duration-300 relative`}
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="font-cinzel text-5xl md:text-6xl font-bold mb-4 gradient-text text-center">
            To My Juniors
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-16 font-light text-lg">
            A message for the road ahead
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {messages.map((message, idx) => (
              <div
                key={idx}
                className="glass-effect rounded-xl p-8 hover-lift stagger-child flex items-center gap-4 group"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                <div className="text-4xl flex-shrink-0 group-hover:animate-bounce">
                  {message.icon}
                </div>
                <p className="font-semibold text-slate-800 dark:text-white leading-relaxed">
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          <div className="glass-effect rounded-3xl p-12 text-center border-2 border-indigo-300/50 dark:border-indigo-600/50 animate-fade-in-up bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/20 dark:to-purple-900/20 hover-lift">
            <Sparkles className="mx-auto mb-6 text-indigo-600 dark:text-indigo-400" size={40} />
            <p className="font-cinzel text-4xl md:text-5xl font-bold gradient-text mb-8 leading-tight">
              College is not just about academics;<br />
              it's about becoming who you are meant to be.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-lora leading-relaxed mb-8">
              Every opportunity, every challenge, every success - they're all stepping stones to your
              growth. Believe in yourself even when it's difficult. Take chances, build connections,
              and most importantly, enjoy every moment of this incredible journey. The world is
              waiting for the unique person you'll become.
            </p>
            <p className="text-2xl font-bold gradient-text-animate">
              I wish you all success, growth, and unforgettable memories ahead. 🚀
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-24 md:py-40 px-4 ${
          darkMode ? 'bg-slate-900 hexagon-pattern' : 'bg-white hexagon-pattern'
        } transition-colors duration-300 relative overflow-hidden`}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-cinzel text-5xl md:text-6xl font-bold mb-4 gradient-text text-center">
            Get In Touch
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-16 font-light text-lg">
            Have something to share? I'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="glass-effect rounded-2xl p-8 hover-lift animate-fade-in-up">
                <div className="flex items-start gap-4 mb-4">
                  <Mail className="text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:tiwarisid022018@gmail.com"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline text-lg font-lora"
                    >
                      tiwarisid022018@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="glass-effect rounded-2xl p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="flex items-start gap-4">
                  <Linkedin className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-slate-900 dark:text-white mb-2">
                      LinkedIn
                    </h3>
                    <a
                      href="https://www.linkedin.com/in/siddharth-tiwari-394451271/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-lora flex items-center gap-2"
                    >
                      Connect with me
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleFormSubmit}
              className="glass-effect rounded-2xl p-8 space-y-6 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              {formStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-lg ${
                    formStatus.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                  }`}
                >
                  {formStatus.type === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span className="font-medium">{formStatus.message}</span>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="input-focus w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="input-focus w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  required
                  className="input-focus w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 outline-none"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows={4}
                  className="input-focus w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 outline-none resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-xs text-slate-600 dark:text-slate-400 text-center font-light">
                I try to respond to your message as soon as possible. Looking forward to hearing from you!
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section
        className={`py-24 md:py-32 px-4 ${
          darkMode ? 'bg-slate-950 dots-pattern' : 'bg-white dots-pattern'
        } border-t ${
          darkMode ? 'border-slate-800' : 'border-slate-200'
        } transition-colors duration-300 relative overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <h2 className="font-cinzel text-5xl md:text-6xl font-bold mb-8 text-slate-900 dark:text-white">
            Thank You
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-lora mb-12 leading-relaxed">
            Thank you for being a part of my journey. Every moment, every lesson, every person I met
            has shaped who I am today. As I move forward, I carry these memories and experiences
            with me forever. This farewell is not an end, but a beautiful new beginning.
          </p>

          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold animate-bounce-in">
              <span className="text-slate-800 dark:text-white">Made with</span>
              <Heart className="text-red-500 fill-red-500 animate-pulse" size={32} />
              <span className="text-slate-800 dark:text-white">by Siddharth</span>
            </div>
          </div>

          <div className="space-y-2 text-slate-600 dark:text-slate-400">
            <p className="font-cinzel font-semibold text-lg text-slate-900 dark:text-white">
              B.Tech CSE • Student Representative
            </p>
            <p className="font-light">
              Maharishi University of Information Technology, Lucknow Campus
            </p>
            <p className="text-sm font-light">
              Class of 2022-2026
            </p>
          </div>

          <div className="mt-12 flex justify-center gap-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {scrollY > 500 && (
        <button
          onClick={() => handleSmoothScroll('hero')}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all animate-bounce-in z-40 group"
        >
          <ChevronDown
            size={24}
            className="group-hover:-translate-y-1 transition-transform rotate-180"
          />
        </button>
      )}
    </div>
  );
};

export default PremiumFarewellWebsite;
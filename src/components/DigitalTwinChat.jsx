import { useState, useRef, useEffect } from "react";

const KNOWLEDGE_BASE = [
  {
    triggers: ["leowatch", "leo watch", "space debris", "satellite", "sih", "smart india hackathon", "orbit"],
    response:
      "🛰️ **LEO WATCH** is our Satellite & Space Debris Tracker built for Smart India Hackathon 2026, where our team (Team Delta) got shortlisted for the Internal Round! I developed the frontend 3D orbital console featuring a CesiumJS globe, SGP4 orbit path rendering, conjunction risk detection, and telemetry telemetry HUDs. Check out the live 3D console at https://leowatch.vercel.app/orbit-view or GitHub at https://github.com/sanskrutiiii23/space-debris."
  },
  {
    triggers: ["lifequest", "life quest", "tech zephyr", "rpg", "hackathon", "productivity", "gamified"],
    response:
      "⚔️ **LifeQuest** is an RPG-inspired productivity web app we built and deployed within 24 hours at Tech Zephyr 4.0 (IIT Bhubaneswar) as Team Delta-X. We gamified daily to-do lists into real quests with XP, gold, level progression, and streak multipliers. You can try the live demo at https://lifequest-rpg-deltax.vercel.app/app!"
  },
  {
    triggers: ["chef groq", "chefgroq", "groq", "recipe", "llama", "ai project", "solo"],
    response:
      "🍳 **Chef Groq** is my solo project that turns whatever leftover ingredients you have in your fridge into instant chef-quality recipes using Groq's high-speed Llama-3 API. It streams recipes in real time! Try it live at https://chef-groq-seven.vercel.app/."
  },
  {
    triggers: ["intern", "internship", "hire", "job", "opportunity", "available", "work with"],
    response:
      "💼 Yes! I am actively looking for **Summer '25 / Pre-Final Year internships** and collaborative tech projects. I'm proficient in React, Tailwind CSS, Node.js/Express, and UI/UX prototyping. You can reach out directly via sanskrutiborade07@gmail.com or connect with me on LinkedIn!"
  },
  {
    triggers: ["skill", "stack", "technology", "tech", "tools", "react", "tailwind", "languages"],
    response:
      "🛠️ My core technical toolkit spans:\n\n• **Web Dev**: React, JavaScript (ES6+), Tailwind CSS, Node.js, Express, REST APIs, Vite, HTML5 & CSS3, Git/GitHub\n• **Data & Analytics**: Power BI, Microsoft Excel, Data Analysis, Data Modeling, Market Research\n• **UI/UX Design**: Figma, Canva, Wireframing, Design Systems, Interactive Prototyping."
  },
  {
    triggers: ["figma", "design", "ui", "ux", "prototype", "wireframe"],
    response:
      "🎨 I love designing responsive user journeys and component systems in **Figma** before writing code. You can explore my design files, interactive mockups, and component libraries directly on my Figma portfolio: https://www.figma.com/design/Ah5XNbQf0UnBO98bfgnhKM/All?node-id=0-1&t=G1fqPeZXilr1v0xX-1."
  },
  {
    triggers: ["college", "university", "nit", "rourkela", "education", "study", "degree"],
    response:
      "🎓 I'm currently an undergraduate student at the prestigious **National Institute of Technology (NIT), Rourkela**, balancing software engineering, data analytics, and UI/UX design!"
  },
  {
    triggers: ["contact", "email", "reach", "message", "linkedin", "github", "social"],
    response:
      "📫 You can connect with me directly:\n\n• **Email**: sanskrutiborade07@gmail.com\n• **LinkedIn**: https://www.linkedin.com/in/sanskruti-borade-39291536b/\n• **GitHub**: https://github.com/sanskrutiiii23\n• **Instagram**: https://www.instagram.com/sanskruti.__.23/"
  },
  {
    triggers: ["hello", "hi", "hey", "who are you", "who are u", "what can you do"],
    response:
      "👋 Hello! I'm Sanskruti's AI Digital Twin. I can answer anything about her hackathon builds (LEO WATCH, LifeQuest, Chef Groq), technical skills, Figma designs, or internship availability. What would you like to explore?"
  }
];

const SUGGESTIONS = [
  "🛰️ Tell me about LEO WATCH",
  "⚔️ What is LifeQuest?",
  "🛠️ What is your tech stack?",
  "💼 Are you open to internships?",
  "📫 How can I contact you?",
];

export default function DigitalTwinChat({ avatarSrc }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "initial",
      sender: "ai",
      text: "Hi there! 👋 I'm Sanskruti's AI Digital Twin. Ask me anything about my projects, skills, hackathon wins, or internship availability!",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  const findAnswer = (query) => {
    const q = query.toLowerCase();
    for (const item of KNOWLEDGE_BASE) {
      if (item.triggers.some((trigger) => q.includes(trigger))) {
        return item.response;
      }
    }
    return "I'm Sanskruti's portfolio AI! I can share details on her featured projects (LEO WATCH, LifeQuest, Chef Groq), her web development & UI/UX skills, or internship availability. Feel free to tap one of the suggested prompts above or reach out to her directly at sanskrutiborade07@gmail.com!";
  };

  const handleSend = (userText) => {
    const textToSend = typeof userText === "string" ? userText : input;
    if (!textToSend.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate natural AI thinking delay
    setTimeout(() => {
      const responseText = findAnswer(textToSend);
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 650);
  };

  const clearChat = () => {
    setMessages([
      {
        id: "cleared",
        sender: "ai",
        text: "Conversation reset! Feel free to ask another question about my projects or background.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Chat Box */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="AI Conversational Chat"
          className="w-[92vw] sm:w-96 h-[540px] max-h-[82vh] mb-3 flex flex-col rounded-2xl bg-[#0c0e15]/95 border border-indigo-500/25 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden animate-fade-in"
        >
          {/* Header */}
          <div className="p-4 bg-[#10131d] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={avatarSrc}
                  alt="Sanskruti AI"
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-400/50"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#10131d]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold text-white">Sanskruti's Twin</h3>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">
                    AI
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">Trained on projects & bio</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={clearChat}
                title="Clear conversation"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] text-xs sm:text-[13px] leading-relaxed rounded-2xl px-3.5 py-2.5 ${
                    m.sender === "user"
                      ? "bg-indigo-600 text-white rounded-br-sm"
                      : "bg-white/[0.06] text-slate-200 border border-white/10 rounded-bl-sm"
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>
                </div>
                <span className="text-[10px] text-slate-500 mt-1 px-1 font-mono">
                  {m.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white/[0.06] border border-white/10 w-16">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions Tray */}
          <div className="px-3 py-2 border-t border-white/5 bg-[#090b10] flex gap-1.5 overflow-x-auto no-scrollbar">
            {SUGGESTIONS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(item)}
                className="whitespace-nowrap text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 hover:border-indigo-400/40 hover:bg-indigo-500/10 text-slate-300 transition-all shrink-0 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Chat Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#0d1017] border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Sanskruti's AI twin..."
              className="flex-1 bg-white/[0.05] border border-white/10 focus:border-indigo-400 focus:outline-none rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 disabled:opacity-40 text-white transition-all cursor-pointer shadow-md"
              aria-label="Send message"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating Launcher Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0e111a] border border-indigo-500/40 hover:border-indigo-400 shadow-[0_10px_30px_rgba(99,102,241,0.35)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.5)] transition-all duration-300 active:scale-95 cursor-pointer backdrop-blur-xl"
        aria-label="Toggle AI Chat Widget"
      >
        <div className="relative">
          <img
            src={avatarSrc}
            alt="Sanskruti AI"
            className="w-7 h-7 rounded-full object-cover ring-1 ring-white/30"
          />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0e111a]" />
        </div>

        <div className="text-left hidden sm:block">
          <div className="text-xs font-semibold text-white group-hover:text-indigo-200 transition-colors flex items-center gap-1.5">
            <span>AI Digital Twin</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-indigo-500/20 text-indigo-300 font-mono">
              Live
            </span>
          </div>
          <p className="text-[10px] text-slate-400 font-normal">Ask me anything</p>
        </div>

        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-indigo-300 group-hover:bg-indigo-500 group-hover:text-white transition-all">
          {isOpen ? (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}

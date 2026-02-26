import React, { useState } from "react";

type TabId = "generative" | "computerVision" | "predictive" | "robotic";

interface ExpertiseCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TABS: { id: TabId; label: string }[] = [
  { id: "generative", label: "Generative AI" },
  { id: "computerVision", label: "Computer Vision" },
  { id: "predictive", label: "Predictive Analysis" },
  { id: "robotic", label: "Robotic Automation" },
];

const EXPERTISE_CONTENT: Record<TabId, ExpertiseCard[]> = {
  generative: [
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M24 8v8m0 24v8m8-16h8M8 24H0m38.5-14.5l5.5-5.5m-29 29l5.5-5.5m29 0l-5.5-5.5M8.5 8.5L3 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 18v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Generative AI & NLP",
      description:
        "AI models for content generation, language translation, virtual assistants, and chatbots. These systems predict the next word or element to create text, code, or images.",
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 20c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm16 0c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 32c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm24 0c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 20h8M20 28h8M16 24h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Conversational AI",
      description:
        "Advanced conversational engines that enable natural, human-like interactions between users and systems across multiple channels and languages.",
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 40c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <rect x="20" y="28" width="8" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Digital Twins",
      description:
        "Create AI-powered digital replicas of physical assets, processes, or people to simulate, predict, and optimize real-world performance.",
    },
  ],
  computerVision: [
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect x="6" y="12" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M34 20h4a2 2 0 012 2v8a2 2 0 01-2 2h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="20" cy="22" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M26 30c-2-2.5-4.5-4-8-4s-6 1.5-8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Image Recognition",
      description:
        "AI models trained to identify and classify objects, people, and scenes within digital images. Enables visual search, content moderation, and automated tagging.",
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 16v16M16 24h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Object Detection",
      description:
        "Systems that locate and identify specific items within an image or video. Critical for autonomous navigation, security surveillance, and retail shelf analysis.",
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect x="6" y="14" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M34 24h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 24l6-4v8l-6-4z" fill="currentColor"/>
          <path d="M38 18v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Video Analytics",
      description:
        "Real-time processing of video streams to detect events, track motion, and extract data. Used for smart city security, traffic monitoring, and operational safety.",
    },
  ],
  predictive: [
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M8 36V20l8-8 8 4 8-8 8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 20l8 4 8-4 8 8 8-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Predictive Analytics",
      description:
        "Machine learning techniques that uncover patterns and forecast outcomes in data to help organizations anticipate customer demand, detect fraud, and optimize operations.",
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect x="10" y="14" width="12" height="20" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="26" y="22" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 14V10a2 2 0 012-2h12a2 2 0 012 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Data Intelligence",
      description:
        "Comprehensive data analytics platforms that transform raw data into actionable insights for strategic decision-making.",
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M8 36h32V12H8v24z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 20h16M16 26h12M16 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Decision Intelligence",
      description:
        "AI systems that augment human decision-making with data-driven insights and predictive modeling for complex business scenarios.",
    },
  ],
  robotic: [
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 26v6M20 32h8M18 38h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 14l-4-4M34 14l4-4M14 22l-4 4M34 22l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Robotic Automation",
      description:
        "Intelligent automation solutions for industry and infrastructure. From autonomous warehouse robots and drones to AI-enabled manufacturing lines.",
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M8 38V18l8-8h16l8 8v20H8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 10v8h16v-8M16 26h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Process Automation",
      description:
        "End-to-end automation of business processes using AI and RPA to improve efficiency, reduce errors, and lower operational costs.",
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 14h24v20H12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 22l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 32h8M20 36h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Workflow Optimization",
      description:
        "AI-driven workflow management systems that automate routine tasks and optimize resource allocation across organizations.",
    },
  ],
};

const GlobalAIExpertiseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>("generative");
  const cards = EXPERTISE_CONTENT[activeTab];

  return (
    <section id = "expertise" className="xb-ai-expertise service pt-135 pb-135" aria-labelledby="ai-expertise-heading">
      <div className="xb-ai-expertise__bg" aria-hidden />
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="sec-title xb-sec-padding xb-ai-expertise__header text-center">
              <span className="sub-title xb-ai-expertise__subtitle">AIgilityX Provide</span>
              <h2 id="ai-expertise-heading" className="title xb-ai-expertise__title">
                Our Global AI Expertise
              </h2>
              <div className="xb-ai-expertise__underline" aria-hidden />
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12">
            <div className="xb-ai-expertise__tabs" role="tablist">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  className={`xb-ai-expertise__tab ${activeTab === tab.id ? "xb-ai-expertise__tab--active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          className="row mt-50 g-4"
        >
          {cards.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="xb-ai-expertise__card">
                <div className="xb-ai-expertise__card-icon">
                  {card.icon}
                </div>
                <h3 className="xb-ai-expertise__card-title">{card.title}</h3>
                <p className="xb-ai-expertise__card-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalAIExpertiseSection;

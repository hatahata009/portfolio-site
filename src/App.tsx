import React from 'react';
import { Github, Mail, User, Code, Briefcase, Award, ChevronDown, BookOpen, Brain, MessageCircle, Database } from 'lucide-react';

// --- データ定義 ---

const profile = {
  name: "畠中 聡志",
  enName: "Satoshi Hatanaka",
  title: "AI Engineer / Former Business Owner",
  email: "hatahata009@gmail.com",
  summary: "株式会社リクルートでの法人営業、8年間の学習塾経営を経てエンジニアへ転身。「対話と憧れから、主体性と自立を育む」という教育理念を軸に、今後は「IT×教育」で世の中の課題解決を目指します。経営者として培った「顧客視点」と「トライ＆エラー力」を武器に、技術で価値を創造します。",
  strengths: [
    { title: "トライ＆エラー力", desc: "経営で培った仮説検証サイクルを回す力。バグや未経験の技術課題にも粘り強く向き合います。" },
    { title: "ビジネス視点", desc: "KPI設定から逆算した行動計画と、顧客（ユーザー）の真のニーズを捉える要件定義力。" },
    { title: "構造的理解力", desc: "複雑なコードや業務フローをフローチャート化し、構造的に理解・設計するスキル。" },
  ]
};

const skills = [
  { name: "Python", level: 90 },
  { name: "Streamlit", level: 85 },
  { name: "LangChain", level: 80 },
  { name: "OpenAI API", level: 80 },
  { name: "HTML/CSS", level: 70 },
  { name: "SQL", level: 60 },
  { name: "Git/GitHub", level: 75 },
];

const projects = [
  {
    id: 1,
    title: "AI英会話アプリ",
    category: "Language Learning",
    description: "音声認識(Whisper)と生成AIを活用した英会話練習アプリ。ユーザーの英語レベル（初級〜上級）に合わせた会話、シャドーイング、ディクテーション機能を提供。",
    tech: ["Python", "Streamlit", "LangChain", "OpenAI API", "Whisper"],
    icon: <MessageCircle size={48} className="text-blue-500" />,
    features: [
      "レベル別AIチューターとの自由会話",
      "音声入力による発音・文法評価フィードバック",
      "シャドーイング・ディクテーションの実践練習モード"
    ]
  },
  {
    id: 2,
    title: "社内文書検索RAGシステム",
    category: "Business Efficiency",
    description: "社内の議事録や規定（PDF/Word/Text）をベクトル化し、自然言語で検索・回答生成を行う業務効率化ツール。参照元ドキュメントの提示機能付き。",
    tech: ["Python", "LangChain", "ChromaDB", "Streamlit"],
    icon: <Database size={48} className="text-emerald-500" />,
    features: [
      "社内文書（PDF/Docx）のアップロードとベクトル化",
      "「社内文書検索」と「問い合わせ回答」のモード切替",
      "回答の根拠となるソースファイルの提示"
    ]
  },
  {
    id: 3,
    title: "子育て支援チャットボット",
    category: "Lifestyle Support",
    description: "小児科医、料理研究家、塾講師など、専門家キャラクターを選択して相談できるチャットアプリ。ユーザー（親）の不安に寄り添うペルソナ設定を実装。",
    tech: ["Python", "Streamlit", "OpenAI API"],
    icon: <User size={48} className="text-pink-500" />,
    features: [
      "4人の異なる専門家ペルソナ（医療、料理、学業、習い事）",
      "キャラクターに応じた口調と専門知識による回答",
      "親しみやすいUI/UXデザイン"
    ]
  }
];

const history = [
  {
    year: "2018 - 2026",
    title: "学習塾「GOJYUゼミ」経営 / 代表",
    desc: "個人事業主として学習塾を開校。集客・指導・経営の全業務を担い、生徒数70名、売上成長率197%を達成。「対話」を重視した指導で400名以上の生徒をサポート。"
  },
  {
    year: "2016 - 2017",
    title: "株式会社リクルートキャリア / 法人営業",
    desc: "新卒・中途採用メディアの提案営業。香川・東京で新規開拓から深耕営業まで経験し、社内表彰を受賞。KPI達成に向けた行動力と顧客折衝力を習得。"
  },
  {
    year: "2016",
    title: "鹿児島大学 工学部 卒業",
    desc: "情報生体システム工学科にて基礎的な工学知識を習得。"
  }
];

// --- コンポーネント ---

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3 border-b-4 border-blue-500 pb-2 inline-block">
    {Icon && <Icon className="text-blue-500" />}
    {children}
  </h2>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-700">
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-slate-800 text-white pb-20 pt-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {/* Decorative background pattern */}
          <div className="absolute right-10 top-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute left-10 bottom-10 w-96 h-96 rounded-full bg-blue-400 blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                {profile.name}
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-6 font-light">
                {profile.enName}
              </p>
              <p className="text-lg mb-8 max-w-2xl leading-relaxed text-gray-200">
                ビジネスの最前線で培った「解決力」を、エンジニアリングへ。<br />
                元・学習塾経営者が挑む、AI技術による価値創造。
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold transition shadow-lg flex items-center gap-2">
                  <Mail size={18} /> お問い合わせ
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-full font-bold transition shadow-lg flex items-center gap-2 border border-gray-600">
                  <Github size={18} /> GitHub
                </a>
              </div>
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden bg-gray-300 flex items-center justify-center text-gray-500">
              {/* プロフィール画像のプレースホルダー */}
              <User size={80} />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown size={32} />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">

        {/* About Section */}
        <section id="about">
          <SectionTitle icon={User}>About Me</SectionTitle>
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <p className="text-lg leading-relaxed mb-8">
              {profile.summary}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {profile.strengths.map((strength, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-blue-900 mb-2 text-lg flex items-center gap-2">
                    <Award size={20} className="text-blue-500" />
                    {strength.title}
                  </h3>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    {strength.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SectionTitle icon={Code}>Technical Skills</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Languages & Frameworks</h3>
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Certifications & Learning</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded text-green-600 mt-1"><Brain size={16} /></div>
                  <div>
                    <div className="font-bold text-gray-800">DMM生成AI CAMP 修了</div>
                    <div className="text-sm text-gray-500">生成AIエンジニアコース スキル習得認定 (2025.12)</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded text-orange-600 mt-1"><BookOpen size={16} /></div>
                  <div>
                    <div className="font-bold text-gray-800">TOEIC 615点</div>
                    <div className="text-sm text-gray-500">英語ドキュメントの読解・学習が可能 (2025.09)</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-gray-100 p-2 rounded text-gray-600 mt-1"><Code size={16} /></div>
                  <div>
                    <div className="font-bold text-gray-800">Web開発・基礎技術</div>
                    <div className="text-sm text-gray-500">HTML / CSS / JavaScript / Git / Linuxコマンド</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Works Section */}
        <section id="works">
          <SectionTitle icon={Briefcase}>Works</SectionTitle>
          <div className="grid gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col md:flex-row hover:shadow-lg transition">
                <div className="md:w-1/3 bg-gray-50 p-8 flex flex-col items-center justify-center border-r border-gray-100">
                  <div className="mb-4 bg-white p-4 rounded-full shadow-sm">
                    {project.icon}
                  </div>
                  <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-semibold tracking-wide mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-center text-gray-800">{project.title}</h3>
                </div>
                <div className="p-8 md:w-2/3">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Key Features</h4>
                    <ul className="grid gap-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-blue-500 mt-1">✔</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium border border-blue-100">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm group">
                      View Code <Github className="ml-1 w-4 h-4 group-hover:translate-x-1 transition" />
                    </a>
                    {/* デモリンクがある場合はここに追加 */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career History */}
        <section id="career">
          <SectionTitle icon={BookOpen}>Career History</SectionTitle>
          <div className="space-y-8 pl-4 border-l-2 border-gray-200 ml-4">
            {history.map((item, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>
                <div className="text-sm text-blue-500 font-bold mb-1">{item.year}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            現在、フルリモートまたは鹿児島県内でのエンジニア職を探しています。<br />
            ご興味を持っていただけましたら、ぜひご連絡ください。
          </p>
          <a 
            href={`mailto:${profile.email}`} 
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition transform hover:-translate-y-1"
          >
            <Mail />
            {profile.email}
          </a>
        </section>

      </main>

      <footer className="bg-gray-800 text-gray-400 py-8 text-center text-sm">
        <p>&copy; 2026 Satoshi Hatanaka. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
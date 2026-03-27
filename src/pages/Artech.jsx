import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'

const CATEGORIES = ['全部', 'AGI影像', '装置艺术', '展览策划', '学术活动']

const CASES = [
  {
    slug: 'song-of-distant-sun',
    img: '/images/cases/case-img-047.png',
    cat: 'AGI影像',
    year: '2025',
    duration: '19分08秒',
    title: '遥远太阳之歌',
    titleEn: 'Song of the Distant Sun',
    desc: '完全由人工智能生成的四章节影像作品，关于太阳文化符号的历史记录，与可控核聚变"人造太阳"的技术愿景。作品通过AI技术重新诠释人类对太阳的崇拜与追求，探讨从钻木取火到核聚变的能源演变。',
    tags: ['核聚变', 'AI生成', '科学艺术'],
  },
  {
    slug: 'human-morphology',
    img: '/images/cases/case-img-025.png',
    cat: 'AGI影像',
    year: '2025',
    duration: '29分25秒',
    title: '人的形态研究',
    titleEn: 'Human Morphology Research',
    desc: '围绕"身体"展开的实验影像，分为五个章节：神圣、理性、技术、次元、智能。探讨"人是什么"与"人该长什么样"的认知，通过AI生成影像重新审视人类形态的演变与未来。',
    tags: ['人体', 'AI生成', '哲学'],
  },
  {
    slug: 'biological-memory',
    img: '/images/cases/case-img-051.png',
    cat: '装置艺术',
    year: '2024',
    title: '生命的记忆',
    titleEn: 'Biological Memory',
    desc: '基于记忆金属的生命美学雕塑。通过雕塑与新材料的结合阐释新形态，在分子层面的生命底层逻辑上展现生物美学。借由记忆金属材料，生命雕塑得以耦合蛋白质"变形与复性"的动态概念，并通过变温和观众产生互动。',
    tags: ['记忆金属', '生物美学', '互动装置'],
  },
  {
    slug: 'biological-landscape',
    img: '/images/cases/case-img-077.png',
    cat: '装置艺术',
    year: '2024',
    title: '生物景观',
    titleEn: 'Biological Landscape',
    desc: '科学传播项目，包含多种生物结构的3D打印模型：纤维连接蛋白、心脏切片、弯曲杆菌、埃博拉病毒、噬菌体等。将微观生物世界以宏观艺术形式呈现，让观众直观感受生命的精密与美丽。',
    tags: ['3D打印', '蛋白质', '病毒模型'],
  },
  {
    slug: 'energy-civilization',
    img: '/images/cases/case-img-119.jpeg',
    cat: '展览策划',
    year: '2025',
    title: '能源与文明：科学艺术·聚变未来',
    titleEn: 'Energy & Civilization: Science Art · Fusion Future',
    desc: '国内首个以"可控核聚变"为主题的美术馆级科学艺术展览，汇聚核聚变领域的顶级科学家与艺术界领军人物。通过历史、科学和艺术三个维度的知识图谱构建，全面展示核聚变科学原理。',
    tags: ['核聚变', '美术馆', '科普展览'],
  },
  {
    slug: 'hefei-science-art-week',
    img: '/images/cases/case-img-017.jpeg',
    cat: '学术活动',
    year: '2024',
    title: '第二届中国（合肥）国际科学艺术周',
    titleEn: '2nd China Hefei International Science and Art Week',
    desc: '以"未来·人·科技"为主题的大型科学艺术活动，汇聚中央美术学院、四川美术学院、广州美术学院等顶尖艺术院校，在CRAFT装置1/8真空实验平台进行Mapping创作。',
    tags: ['科学艺术', '学术论坛', '工作坊'],
  },
]

const PROGRAMS = [
  { title: '系列对谈 | 技术与艺术的哲学盲盒', date: '2025/8/14—持续更新中', host: '胡翌霖 沈聪', cover: '/images/events/biotech-forum.jpg' },
  { title: '系列讲座 | 网络国家及其技术基础', date: '2025/2/25—2025/9/15 共5期', host: '胡翌霖', cover: '/images/events/hefei-3.jpg' },
  { title: '系列对谈 | Web3问答集', date: '2025/6/15—持续更新中', host: '胡翌霖', cover: '/images/events/human-childhood.jpg' },
  { title: '读书会 |《存在与时间》', date: '2025/2/16—持续更新中', host: '胡翌霖', cover: '/images/cases/case-img-025.png' },
  { title: '读书会 |《象征的贫困》', date: '2025/2/15—2025/9/11 共18期', host: '胡翌霖 沈聪', cover: '/images/cases/case-img-047.png' },
  { title: 'AGI短片盲盒 · 不保真新闻部', date: '不定时更新', host: '—', cover: '/images/events/ai-salon.png' },
]

const EXHIBITIONS = [
  {
    slug: 'energy-civilization-exhibition',
    image: '/images/events/energy-scene.jpg',
    title: '核聚变与艺术的对话 | 2025"能源与文明"展览盛大开启',
    date: '2025年9月14日',
    type: '展览',
    highlight: '国内首个以"可控核聚变"为主题的美术馆级科学艺术展览',
    orgs: '中央美术学院、合肥综合性国家科学中心能源研究院、合肥市人民政府',
    desc: '作为国内首个以"可控核聚变"为主题的美术馆级科学艺术展览，展览汇聚了核聚变领域的顶级科学家与艺术界领军人物。通过跨学科的视角将科学成果与当代艺术表达方式相结合，构建了从科学问题到艺术表现，再到公众认知的完整知识链条。',
    links: [
      { label: '展览公众号报道', url: 'https://mp.weixin.qq.com/s/859jc1jTkVAjNaRQhxASLg' },
      { label: '开幕回顾', url: 'https://mp.weixin.qq.com/s/GaY7rgeIPrZ7C_zpACdpUA' },
    ],
  },
  {
    slug: 'hefei-science-art-week-2',
    image: '/images/events/hefei-2.jpg',
    title: '展览介绍｜第二届中国（合肥）国际科学艺术周：未来人类科技学——科学与艺术特展',
    date: '2024年10月1日',
    type: '展览',
    highlight: '中国艺术家首次大规模的深度参与进大科学装置园区',
    orgs: '合肥市人民政府、中央美术学院、合肥综合性国家科学中心能源研究院、中国科学院合肥物质科学研究院',
    desc: '在即将开启下一场"能源革命"的等离子体可控核聚变中，我们如何面对这一朝向未来更多可能性的科学和技术，如何想象一种与文化艺术共生的社会，充满着对"未来人性"之关怀的"未来科技"。',
  },
]

const ACTIVITIES = [
  {
    slug: 'hefei-science-art-week-3',
    image: '/images/events/hefei-3.jpg',
    title: '第三届合肥科学艺术周回顾：大科学时代的图像传播与技术美学',
    date: '2025年12月21日',
    type: '活动',
    highlight: '汇聚清华、中科大、央美、川美等顶尖学府的学者',
    orgs: '中国科学技术大学、中央美术学院、中科院合肥物质研究院、合肥市人民政府',
    desc: '作为第三届合肥科学艺术周的核心板块，"科学传播的艺术图像"研讨会汇聚了来自清华、中科大、央美、川美、山大、华东师大、广美、鲁美、天美等顶尖学府的学者，以及深耕科学可视化的行业先锋。',
    links: [
      { label: 'Bilibili', url: 'https://space.bilibili.com/3537110856370265' },
    ],
  },
  {
    slug: 'human-childhood-forum',
    image: '/images/events/human-childhood.jpg',
    title: '胡翌霖 × 第八届国际跨媒体艺术节论坛暨第五届感受力论坛"人类童年"',
    date: '2025年10月25日',
    type: '论坛',
    highlight: '技术社会如何处理"差异性存在"',
    orgs: '中国美术学院主办、中国美术学院跨媒体艺术学院承办',
    desc: '借用电影《游牧贝贝》中异能儿童被"归于正常"的结局，胡翌霖讨论了技术社会如何处理"差异性存在"。他指出，随着AI与基因编辑的发展，社会对可管理性与可替代性的偏好愈加明显。',
  },
  {
    slug: 'biotech-aesthetics-forum',
    image: '/images/events/biotech-forum.jpg',
    title: 'CCiC x Synbiopunk论坛｜胡翌霖 × 夏可君 × 魏颖：当生命成为媒介——生物技术的美学转向',
    date: '2025年8月7日',
    type: '论坛',
    highlight: '生命技术引发的艺术革命',
    orgs: 'CCiC × Synbiopunk × 天与ARTECH',
    desc: '在AI、基因编辑与合成生物日益渗透的时代，"生命"不再仅是自然体，而逐渐成为一种可被计算、操控、设计与重组的对象。',
    links: [
      { label: 'YouTube 回放', url: 'https://youtu.be/hzmy40ocTLQ?si=-B5osJRqZlYrd-wU' },
      { label: 'Bilibili 回放', url: 'https://www.bilibili.com/video/BV121bMzREFA/' },
    ],
  },
  {
    slug: 'ai-art-salon',
    image: '/images/events/ai-salon.png',
    title: '沙龙｜人类，智能与肉身：AI时代我们还能做艺术吗？',
    date: '2025年5月28日',
    type: '沙龙',
    highlight: 'AI不再是神秘技术，而是必须面对的现实语境',
    orgs: '雷电所 × 华文道 × 天与ARTECH',
    desc: '本次沙龙以"AI时代我们还能做艺术吗？"为核心议题，从哲学、教育、创作实践、机构运营等角度，呈现了一个多维度的AI艺术图景。',
    links: [
      { label: 'YouTube 回放', url: 'https://youtu.be/K75dJira4Yc?si=bkP2pii6TUAWxp4e' },
      { label: 'Bilibili 回放', url: 'https://www.bilibili.com/video/BV1x67pzKErH/' },
    ],
  },
]

/* Amber glow section header */
function SectionGlow({ title, id }) {
  return (
    <div id={id} className="relative flex items-center justify-center py-20">
      {/* Glow orb */}
      <div
        className="absolute w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #d4a853 0%, #d4a85300 70%)' }}
      />
      <h2
        className="relative text-4xl md:text-5xl font-bold tracking-wide"
        style={{ color: '#d4a853', fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
    </div>
  )
}

/* Event card: left text, right image */
function EventCard({ event }) {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/artech/event/${event.slug}`)}
      className="group flex flex-col md:flex-row gap-0 mb-16 last:mb-0 cursor-pointer"
    >
      {/* Text side */}
      <div className="flex-1 flex flex-col justify-center pr-0 md:pr-10 py-4 order-2 md:order-1">
        <span className="text-xs tracking-widest uppercase mb-3" style={{ color: '#888' }}>
          {event.date}
          {event.type && (
            <span
              className="ml-3 px-2 py-0.5 rounded text-xs font-medium"
              style={{ background: 'rgba(212,168,83,0.15)', color: '#d4a853' }}
            >
              {event.type}
            </span>
          )}
        </span>
        <h3
          className="text-xl md:text-2xl font-bold mb-3 leading-snug group-hover:opacity-80 transition-opacity"
          style={{ color: '#fff' }}
        >
          {event.title}
        </h3>
        {event.highlight && (
          <p className="text-sm font-medium mb-3" style={{ color: '#d4a853' }}>
            {event.highlight}
          </p>
        )}
        {event.orgs && (
          <p className="text-xs mb-3" style={{ color: '#777' }}>
            {event.orgs}
          </p>
        )}
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#bbb' }}>
          {event.desc}
        </p>
        {event.links && event.links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {event.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-medium no-underline px-3 py-1 rounded-full border transition-colors"
                style={{ color: '#d4a853', borderColor: 'rgba(212,168,83,0.3)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212,168,83,0.15)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
      {/* Image side */}
      <div className="w-full md:w-80 lg:w-96 flex-shrink-0 order-1 md:order-2 overflow-hidden rounded-lg">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  )
}

/* Get the 3 most recent events from EXHIBITIONS + ACTIVITIES combined */
function getFeaturedEvents() {
  const all = [...EXHIBITIONS, ...ACTIVITIES]
  // Sort by date descending (extract year from date string)
  all.sort((a, b) => {
    const getDate = (d) => {
      const match = d.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/)
      if (match) return new Date(match[1], match[2] - 1, match[3])
      return new Date(0)
    }
    return getDate(b.date) - getDate(a.date)
  })
  return all.slice(0, 3)
}

export default function Artech() {
  const [filter, setFilter] = useState('全部')
  const [showAllEvents, setShowAllEvents] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const filtered = filter === '全部' ? CASES : CASES.filter((c) => c.cat === filter)
  const featuredEvents = getFeaturedEvents()
  const allEvents = [...EXHIBITIONS, ...ACTIVITIES]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div style={{ background: '#0a0a0a', color: '#e5e5e5' }} className="min-h-screen">
      {/* ===== ARTECH NAV ===== */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-14"
        style={{
          background: 'rgba(14, 14, 15, 0.35)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        {/* Left: logo */}
        <span
          className="text-[10px] font-bold tracking-[0.25em] uppercase select-none"
          style={{ color: '#999' }}
        >
          TIANYUARTECH
        </span>

        {/* Right: menu items + return button + search/language + hamburger */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollTo('works')}
              className="bg-transparent border-none cursor-pointer text-xs tracking-widest transition-colors"
              style={{ color: '#999' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#999' }}
            >
              作品
            </button>
            <button
              onClick={() => scrollTo('programs')}
              className="bg-transparent border-none cursor-pointer text-xs tracking-widest transition-colors"
              style={{ color: '#999' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#999' }}
            >
              节目
            </button>
            <button
              onClick={() => scrollTo('events')}
              className="bg-transparent border-none cursor-pointer text-xs tracking-widest transition-colors"
              style={{ color: '#999' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#999' }}
            >
              事件
            </button>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button
              className="bg-transparent border-none cursor-pointer text-sm transition-colors"
              style={{ color: '#999' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#999' }}
              aria-label="搜索"
            >
              🔍
            </button>
            <span className="text-xs tracking-[0.2em]" style={{ color: '#999' }}>
              CN
            </span>
          </div>
          <Link
            to="/"
            className="text-xs no-underline px-3 py-1 rounded-full border transition-colors"
            style={{ color: '#999', borderColor: 'rgba(255,255,255,0.1)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#999'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
          >
            &larr; 天与视界
          </Link>
          <button
            className="flex flex-col gap-1 p-2 bg-transparent border-none cursor-pointer"
            aria-label="菜单"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <span className="block w-4 h-px" style={{ background: '#999' }} />
            <span className="block w-4 h-px" style={{ background: '#999' }} />
            <span className="block w-4 h-px" style={{ background: '#999' }} />
          </button>
        </div>
      </nav>

      {/* ===== MOBILE/FULLSCREEN MENU ===== */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center px-6"
          style={{ background: 'rgba(5,5,6,0.92)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
        >
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 bg-transparent border cursor-pointer w-10 h-10 rounded-full text-xl"
            style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
            aria-label="关闭菜单"
          >
            ×
          </button>
          <div className="flex flex-col items-center gap-7">
            <button onClick={() => scrollTo('works')} className="bg-transparent border-none text-2xl cursor-pointer" style={{ color: '#fff', fontFamily: 'var(--font-display)' }}>
              作品
            </button>
            <button onClick={() => scrollTo('programs')} className="bg-transparent border-none text-2xl cursor-pointer" style={{ color: '#fff', fontFamily: 'var(--font-display)' }}>
              节目
            </button>
            <button onClick={() => scrollTo('events')} className="bg-transparent border-none text-2xl cursor-pointer" style={{ color: '#fff', fontFamily: 'var(--font-display)' }}>
              事件
            </button>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base no-underline mt-4"
              style={{ color: '#d4a853' }}
            >
              ← 返回天与视界
            </Link>
          </div>
        </div>
      )}

      {/* ===== HERO (full viewport) ===== */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '100vh' }}>
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/artech/hero-banner.png)' }}
        />
        {/* Dark gradient overlay matching old site */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(13,9,9,0.57) 3%, rgba(0,0,0,0.57) 40%, rgba(92,65,65,0.78) 100%)',
          }}
        />
        {/* Content */}
        <div className="relative text-center px-6 flex flex-col items-center justify-center">
          <h1
            className="font-extrabold leading-[0.85] mb-4 select-none"
            style={{
              fontSize: 'clamp(80px, 18vw, 280px)',
              color: '#fff',
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.04em',
            }}
          >
            TIANYU
          </h1>
          <h1
            className="font-extrabold leading-[0.85] mb-10 select-none"
            style={{
              fontSize: 'clamp(80px, 18vw, 280px)',
              background: 'linear-gradient(180deg, #f3f3f3 0%, #c7c7c7 35%, #8f8f8f 52%, #d9d9d9 70%, #8a8a8a 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.04em',
              textShadow: '0 4px 24px rgba(255,255,255,0.12)',
            }}
          >
            ARTECH
          </h1>
          <p className="text-sm md:text-base tracking-[0.15em] mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
            天与ARTECH工作室
          </p>
          <p className="text-xs md:text-sm tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>
            艺术与科技的交界处
          </p>
          {/* Scroll indicator */}
          <div className="mt-20 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto opacity-40">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6">
          {/* Founder portraits side by side */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16 justify-center">
            {/* Founder 1 */}
            <div className="flex-1 text-center">
              <div className="w-56 h-80 mx-auto mb-6 rounded-lg overflow-hidden" style={{ border: '2px solid rgba(212,168,83,0.2)' }}>
                <img
                  src="/images/artech/founder-huyl.jpg"
                  alt="胡翌霖"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#fff', fontFamily: 'var(--font-display)' }}>
                胡翌霖
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#999' }}>
                哲学博士，前清华大学科学史副教授，独立学者
              </p>
            </div>
            {/* Founder 2 */}
            <div className="flex-1 text-center">
              <div className="w-56 h-80 mx-auto mb-6 rounded-lg overflow-hidden" style={{ border: '2px solid rgba(212,168,83,0.2)' }}>
                <img
                  src="/images/artech/founder-sc.jpg"
                  alt="沈聪"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#fff', fontFamily: 'var(--font-display)' }}>
                沈聪
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#999' }}>
                青年艺术家/策展人，中央美术学院毕业
              </p>
            </div>
          </div>

          {/* Location + mission text */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.2em] uppercase mb-6" style={{ color: '#d4a853' }}>
              香港火炭艺术区
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#999' }}>
              以"与科技"为核心理念，致力于探索艺术与科技、文化与科技、人类与科技交界处的崭新表达方式。信息时代的到来正重塑"技术"本身的含义：技术不再只是冷冰冰的工具，也不该仅仅与"科学"并列，而是将重新回归"技艺"一体的整合性路径。
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div style={{ borderTop: '1px solid rgba(212,168,83,0.15)' }} />
      </div>

      {/* ===== 作品 WORKS SECTION ===== */}
      <section className="relative">
        <SectionGlow title="作 品" id="works" />
        <div className="mx-auto max-w-5xl px-6 pb-10">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="px-4 py-2 rounded-lg text-sm font-medium border transition-colors cursor-pointer"
                style={{
                  background: filter === cat ? '#d4a853' : 'transparent',
                  color: filter === cat ? '#0a0a0a' : '#888',
                  borderColor: filter === cat ? '#d4a853' : 'rgba(255,255,255,0.1)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Works list - full-width cards */}
          <div className="space-y-20 pb-12">
            {filtered.map((c) => (
              <Link
                key={c.slug}
                to={`/artech/${c.slug}`}
                className="group block no-underline"
              >
                {/* Large landscape image */}
                <div className="overflow-hidden rounded-lg mb-6">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Info */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        className="text-2xl md:text-3xl font-bold group-hover:opacity-80 transition-opacity"
                        style={{ color: '#fff', fontFamily: 'var(--font-display)' }}
                      >
                        {c.title}
                      </h3>
                      <span className="text-sm italic" style={{ color: '#666' }}>{c.titleEn}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs" style={{ color: '#666' }}>{c.year}</span>
                      {c.duration && <span className="text-xs" style={{ color: '#666' }}>{c.duration}</span>}
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(212,168,83,0.15)', color: '#d4a853' }}
                      >
                        {c.cat}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed max-w-3xl" style={{ color: '#999' }}>
                      {c.desc}
                    </p>
                  </div>
                  <span
                    className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity mt-2 md:mt-1 flex-shrink-0"
                    style={{ color: '#d4a853' }}
                  >
                    详情 &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div style={{ borderTop: '1px solid rgba(212,168,83,0.15)' }} />
      </div>

      {/* ===== 节目 PROGRAMS SECTION ===== */}
      <section className="relative">
        <SectionGlow title="节 目" id="programs" />
        <div className="mx-auto max-w-5xl px-6 pb-20">
          <p className="text-center text-sm mb-10" style={{ color: '#777' }}>
            系列讲座、对谈与读书会
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROGRAMS.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border overflow-hidden transition-colors"
                style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#111' }}
              >
                <div className="relative h-36">
                  {p.cover ? (
                    <img src={p.cover} alt={p.title} className="w-full h-full object-cover" />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #222 50%, #151515 100%)' }}
                    >
                      <span className="text-xs tracking-[0.18em]" style={{ color: '#888' }}>
                        PROGRAM
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.6) 100%)' }} />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold mb-2" style={{ color: '#eee' }}>{p.title}</h3>
                  <p className="text-xs" style={{ color: '#777' }}>{p.date}</p>
                  <p className="text-xs mt-1" style={{ color: '#666' }}>主讲/对谈：{p.host}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div style={{ borderTop: '1px solid rgba(212,168,83,0.15)' }} />
      </div>

      {/* ===== 事件 EVENTS SECTION ===== */}
      <section className="relative">
        <SectionGlow title="事 件" id="events" />
        <div className="mx-auto max-w-5xl px-6 pb-20">
          {/* Show featured 3 or all events */}
          {(showAllEvents ? allEvents : featuredEvents).map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}

          {/* Show more / less toggle */}
          {!showAllEvents && allEvents.length > 3 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllEvents(true)}
                className="bg-transparent border cursor-pointer text-sm px-6 py-2 rounded-full transition-colors"
                style={{ color: '#0099ff', borderColor: 'rgba(0,153,255,0.3)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,153,255,0.1)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
              >
                查看更多
              </button>
            </div>
          )}
          {showAllEvents && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllEvents(false)}
                className="bg-transparent border cursor-pointer text-sm px-6 py-2 rounded-full transition-colors"
                style={{ color: '#999', borderColor: 'rgba(255,255,255,0.1)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
              >
                收起
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        className="border-t"
        style={{ background: '#050505', borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* Left: branding */}
            <div>
              <p
                className="text-xs font-bold tracking-[0.25em] uppercase mb-4"
                style={{ color: '#666' }}
              >
                TIANYUARTECH
              </p>
              <p className="text-sm mb-1" style={{ color: '#999' }}>
                天与ARTECH工作室
              </p>
              <p className="text-xs" style={{ color: '#666' }}>
                香港火炭艺术区
              </p>
            </div>

            {/* Middle: contact */}
            <div>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#666' }}>
                联系方式
              </p>
              <a
                href="mailto:tianyuartech@gmail.com"
                className="text-sm no-underline transition-colors"
                style={{ color: '#0099ff' }}
              >
                tianyuartech@gmail.com
              </a>
            </div>

            {/* Right: social */}
            <div>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#666' }}>
                社交媒体
              </p>
              <div className="flex gap-5">
                <a
                  href="https://space.bilibili.com/3537110856370265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm no-underline transition-colors"
                  style={{ color: '#999' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#0099ff' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#999' }}
                >
                  Bilibili
                </a>
                <a
                  href="https://www.youtube.com/@TianyuArtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm no-underline transition-colors"
                  style={{ color: '#999' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#0099ff' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#999' }}
                >
                  YouTube
                </a>
                <span
                  className="text-sm cursor-default"
                  style={{ color: '#999' }}
                  title="搜索: 天与ARTECH"
                >
                  微信公众号
                </span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-xs text-center" style={{ color: '#444' }}>
              &copy; {new Date().getFullYear()} 天与ARTECH. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

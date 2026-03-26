import { Link } from 'react-router'

const SERVICES = [
  {
    icon: '📄',
    title: '学术出版的视觉升级',
    desc: '期刊封面设计、科学插画、学术海报——让你的研究成果在Nature、Science等顶刊中脱颖而出。',
  },
  {
    icon: '🎬',
    title: '科学故事的动态讲述',
    desc: '科学动画、学术PPT、科普视频——将复杂的科研成果转化为多媒体叙事作品。',
  },
  {
    icon: '🏛️',
    title: '实体场景的沉浸式体验',
    desc: '博物馆展陈、科学艺术展、教育空间——打造线下科学传播的沉浸式交互体验。',
  },
]

const PRODUCTS = [
  {
    tag: 'ARTECH',
    title: '天与科艺',
    desc: '艺术与科技融合的创意厂牌，策划展览、AGI影像、装置艺术与学术活动。',
    to: '/artech',
    accent: 'from-amber/20 to-amber/5',
  },
  {
    tag: 'SCI-VISION',
    title: 'SCI-VISION 平台',
    desc: '一站式科学传播视觉资产AI平台，从文本到出版级图像，只需几秒钟。',
    to: '/sci-vision',
    accent: 'from-teal/20 to-teal/5',
  },
  {
    tag: 'SCIPLAY',
    title: '天与科玩',
    desc: '将科研成果转化为可触摸、可收藏、可传播的科学文创产品。',
    to: '/sciplay',
    accent: 'from-teal-light/20 to-teal-light/5',
  },
]

const PARTNERS = [
  '中央美术学院', '中科院等离子体物理研究所', '华熙生物', '怀柔科学城',
  '北京大学', '清华大学', '核能源研究院',
]

const TESTIMONIALS = [
  {
    quote: '天与视界的学术可视化能力让我们的研究成果在Nature发表时获得了编辑的高度评价，封面设计精准还原了实验的核心机制。',
    author: '合作科研团队',
    org: '中国科学院',
    stars: 5,
  },
  {
    quote: '从展览策划到最终呈现，团队展现了极强的跨学科理解力。他们不只是设计师，更是科学传播的思考者。',
    author: '展览合作方',
    org: '中央美术学院',
    stars: 5,
  },
  {
    quote: '科学文创产品的设计超出预期，既保持了科学严谨性，又具有很强的市场吸引力。水敏卡系列深受参观者喜爱。',
    author: '文创合作伙伴',
    org: '华熙生物',
    stars: 5,
  },
]

const CASES_PREVIEW = [
  { img: '/images/cases/case-img-047.png', title: '遥远太阳之歌', cat: 'AGI影像', slug: 'song-of-distant-sun' },
  { img: '/images/cases/case-img-051.png', title: '生命的记忆', cat: '装置艺术', slug: 'biological-memory' },
  { img: '/images/cases/case-img-119.jpeg', title: '能源与文明', cat: '展览策划', slug: 'energy-civilization' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal-light/20 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber/20 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36 md:pb-28">
          <p className="text-teal text-sm font-bold tracking-widest uppercase mb-4 scroll-reveal">
            Tianyu Vision Studio
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] text-ink max-w-4xl scroll-reveal">
            以科技美学<br className="hidden md:block" />重塑科学传播
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed font-sans scroll-reveal">
            天与视界是中国一流的科学可视化团队，致力于将复杂的科学原理转化为精准、美观的视觉语言，让科学传播更高效。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 scroll-reveal">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-teal to-teal-light text-white font-semibold text-sm no-underline shadow-lg shadow-teal/25 hover:-translate-y-0.5 transition-transform"
            >
              联系我们
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 rounded-xl border border-line bg-white/70 text-ink font-semibold text-sm no-underline hover:-translate-y-0.5 transition-transform"
            >
              了解服务
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white/50 border-t border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-teal text-xs font-bold tracking-widest uppercase mb-2 font-sans scroll-reveal">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-medium text-ink mb-12 scroll-reveal">核心能力</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="scroll-reveal p-6 rounded-2xl bg-card card-elevated"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-lg font-medium text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed font-sans">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case preview */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between mb-12">
            <div className="scroll-reveal">
              <p className="text-teal text-xs font-bold tracking-widest uppercase mb-2 font-sans">Featured Work</p>
              <h2 className="text-3xl md:text-4xl font-medium text-ink">代表案例</h2>
            </div>
            <Link to="/artech" className="text-sm font-semibold text-teal no-underline hover:underline font-sans scroll-reveal">
              查看全部 →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASES_PREVIEW.map((c, i) => (
              <Link
                key={c.title}
                to={`/artech/${c.slug}`}
                className="scroll-reveal group rounded-2xl overflow-hidden no-underline card-elevated img-hover-zoom"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full aspect-video object-cover" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-teal font-sans">{c.cat}</span>
                  <h3 className="text-base font-medium text-ink mt-1">{c.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white/50 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-teal text-xs font-bold tracking-widest uppercase mb-2 font-sans scroll-reveal">Ecosystem</p>
          <h2 className="text-3xl md:text-4xl font-medium text-ink mb-12 scroll-reveal">产品与厂牌</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <Link
                key={p.tag}
                to={p.to}
                className={`scroll-reveal block p-8 rounded-2xl border border-line bg-gradient-to-br ${p.accent} no-underline card-elevated`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-xs font-bold tracking-widest uppercase text-teal font-sans">{p.tag}</span>
                <h3 className="text-xl font-medium text-ink mt-2 mb-3">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed font-sans">{p.desc}</p>
                <span className="inline-flex items-center mt-4 text-sm font-semibold text-teal font-sans">了解更多 →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-teal text-xs font-bold tracking-widest uppercase mb-2 font-sans scroll-reveal">Partners</p>
          <h2 className="text-3xl font-medium text-ink mb-10 scroll-reveal">合作伙伴</h2>
          <div className="flex flex-wrap gap-4 scroll-reveal">
            {PARTNERS.map((name) => (
              <span key={name} className="px-5 py-3 rounded-xl border border-line bg-card text-sm font-medium text-ink font-sans">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white/50 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-teal text-xs font-bold tracking-widest uppercase mb-2 font-sans scroll-reveal">Testimonials</p>
          <h2 className="text-3xl font-medium text-ink mb-12 scroll-reveal">合作伙伴评价</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="scroll-reveal p-6 rounded-2xl border border-line bg-card"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-amber" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div>
                  <p className="text-sm font-medium text-ink">{t.author}</p>
                  <p className="text-xs text-muted">{t.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-teal to-teal-light scroll-reveal">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">准备好转化科研成果了吗？</h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8 font-sans">
            无论是科学可视化项目、展览合作还是平台开发，我们都期待与你交流。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3.5 rounded-xl bg-white text-teal font-bold text-sm no-underline shadow-lg hover:-translate-y-0.5 transition-transform font-sans"
          >
            获取专属解决方案
          </Link>
        </div>
      </section>
    </>
  )
}

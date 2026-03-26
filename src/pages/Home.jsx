import { Link } from 'react-router'

const SERVICES = [
  {
    icon: '🔬',
    title: '科学可视化',
    desc: '将科研数据与发现转化为直观、精确的视觉呈现，帮助研究成果跨越专业壁垒。',
  },
  {
    icon: '🎨',
    title: '交互体验设计',
    desc: '为展览、活动和数字平台打造沉浸式交互内容，让观众深度参与科学叙事。',
  },
  {
    icon: '🌐',
    title: '平台开发',
    desc: '从概念到上线，为科研机构与教育组织提供完整的数字平台解决方案。',
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

const CASES_PREVIEW = [
  { img: '/images/cases/case-img-047.png', title: '遥远太阳之歌', cat: 'AGI影像' },
  { img: '/images/cases/case-img-051.png', title: '生命的记忆', cat: '装置艺术' },
  { img: '/images/cases/case-img-119.jpeg', title: '能源与文明', cat: '展览策划' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal-light/20 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber/20 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36 md:pb-28">
          <p className="text-teal text-sm font-bold tracking-widest uppercase mb-4">
            Tianyu Vision Studio
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-ink max-w-4xl">
            以科技美学<br className="hidden md:block" />重塑科学传播
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
            天与视界是中国一流的科学可视化团队，致力于将复杂的科学原理转化为精准、美观的视觉语言，让科学传播更高效。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
          <p className="text-teal text-xs font-bold tracking-widest uppercase mb-2">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-12">核心能力</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border border-line bg-card hover:shadow-lg hover:-translate-y-1 transition-all">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case preview */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-teal text-xs font-bold tracking-widest uppercase mb-2">Featured Work</p>
              <h2 className="text-3xl md:text-4xl font-bold text-ink">代表案例</h2>
            </div>
            <Link to="/artech" className="text-sm font-semibold text-teal no-underline hover:underline">
              查看全部 →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASES_PREVIEW.map((c) => (
              <Link key={c.title} to="/artech" className="group rounded-2xl overflow-hidden border border-line no-underline hover:shadow-lg transition-shadow">
                <img src={c.img} alt={c.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform" />
                <div className="p-4">
                  <span className="text-xs font-semibold text-teal">{c.cat}</span>
                  <h3 className="text-base font-bold text-ink mt-1">{c.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white/50 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-teal text-xs font-bold tracking-widest uppercase mb-2">Ecosystem</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-12">产品与厂牌</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <Link
                key={p.tag}
                to={p.to}
                className={`block p-8 rounded-2xl border border-line bg-gradient-to-br ${p.accent} no-underline hover:shadow-lg hover:-translate-y-1 transition-all`}
              >
                <span className="text-xs font-bold tracking-widest uppercase text-teal">{p.tag}</span>
                <h3 className="text-xl font-bold text-ink mt-2 mb-3">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                <span className="inline-flex items-center mt-4 text-sm font-semibold text-teal">了解更多 →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-teal text-xs font-bold tracking-widest uppercase mb-2">Partners</p>
          <h2 className="text-3xl font-bold text-ink mb-10">合作伙伴</h2>
          <div className="flex flex-wrap gap-4">
            {PARTNERS.map((name) => (
              <span key={name} className="px-5 py-3 rounded-xl border border-line bg-card text-sm font-medium text-ink">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-teal to-teal-light">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">有想法？聊聊看</h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8">
            无论是科学可视化项目、展览合作还是平台开发，我们都期待与你交流。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3.5 rounded-xl bg-white text-teal font-bold text-sm no-underline shadow-lg hover:-translate-y-0.5 transition-transform"
          >
            发起对话
          </Link>
        </div>
      </section>
    </>
  )
}

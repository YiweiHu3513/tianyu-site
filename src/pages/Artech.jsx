import { useState } from 'react'
import { Link } from 'react-router'

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
  { title: '系列对谈 | 技术与艺术的哲学盲盒', date: '2025/8/14—持续更新中', host: '胡翌霖 沈聪' },
  { title: '系列讲座 | 网络国家及其技术基础', date: '2025/2/25—2025/9/15 共5期', host: '胡翌霖' },
  { title: '系列对谈 | Web3问答集', date: '2025/6/15—持续更新中', host: '胡翌霖' },
  { title: '读书会 |《存在与时间》', date: '2025/2/16—持续更新中', host: '胡翌霖' },
  { title: '读书会 |《象征的贫困》', date: '2025/2/15—2025/9/11 共18期', host: '胡翌霖 沈聪' },
  { title: 'AGI短片盲盒 · 不保真新闻部', date: '不定时更新', host: '—' },
]

const EVENTS = [
  {
    title: '第三届合肥科学艺术周回顾：大科学时代的图像传播与技术美学',
    date: '2025年12月21日',
    type: '活动',
    orgs: '中国科学技术大学、中央美术学院、中科院合肥物质研究院、合肥市人民政府',
    desc: '作为第三届合肥科学艺术周的核心板块，"科学传播的艺术图像"研讨会汇聚了来自清华、中科大、央美、川美、山大、华东师大、广美、鲁美、天美等顶尖学府的学者，以及深耕科学可视化的行业先锋。在"大国竞争"与"技术加速"的时代背景下，我们试图回答一个问题：当科学越来越精密且难理解时，艺术不仅是解释的工具，更是连接孤岛的桥梁。',
    links: [
      { label: 'Bilibili', url: 'https://space.bilibili.com/3537110856370265' },
    ],
  },
  {
    title: '胡翌霖 × 第八届国际跨媒体艺术节论坛暨第五届感受力论坛"人类童年"',
    date: '2025年10月25日',
    type: '论坛',
    orgs: '中国美术学院主办、中国美术学院跨媒体艺术学院承办',
    desc: '借用电影《游牧贝贝》中异能儿童被"归于正常"的结局，胡翌霖讨论了技术社会如何处理"差异性存在"。他指出，随着AI与基因编辑的发展，社会对可管理性与可替代性的偏好愈加明显。那些不可归类、不可复制的个体，往往被视为问题，而非资源。在这种结构下，AI不是取代某种职业，而是推动社会排斥"不可复制者"。他强调，真正的制度转向，应从教育出发，培养对"不一致"的审美与感受力，让差异不再被视为风险，而成为共存的前提。',
  },
  {
    title: '核聚变与艺术的对话 | 2025"能源与文明"展览盛大开启',
    date: '2025年9月14日',
    type: '展览',
    orgs: '中央美术学院、合肥综合性国家科学中心能源研究院、合肥市人民政府',
    desc: '作为国内首个以"可控核聚变"为主题的美术馆级科学艺术展览，展览汇聚了核聚变领域的顶级科学家与艺术界领军人物。通过跨学科的视角将科学成果与当代艺术表达方式相结合，构建了从科学问题到艺术表现，再到公众认知的完整知识链条。展览从历史、科学与艺术三个维度展示核聚变，包含巨型装置《闪电》《海》《造太阳》及首部AI核聚变影像《遥远太阳之歌》。',
    links: [
      { label: '展览公众号报道', url: 'https://mp.weixin.qq.com/s/859jc1jTkVAjNaRQhxASLg' },
      { label: '开幕回顾', url: 'https://mp.weixin.qq.com/s/GaY7rgeIPrZ7C_zpACdpUA' },
    ],
  },
  {
    title: 'CCiC x Synbiopunk论坛｜胡翌霖 × 夏可君 × 魏颖：当生命成为媒介——生物技术的美学转向',
    date: '2025年8月7日',
    type: '论坛',
    orgs: 'CCiC × Synbiopunk × 天与ARTECH',
    desc: '在AI、基因编辑与合成生物日益渗透的时代，"生命"不再仅是自然体，而逐渐成为一种可被计算、操控、设计与重组的对象。我们是否正在经历一场深层次的感知秩序变异？当"可设计生命"成为现实，艺术与哲学是否必须重新定义自身的位置与使命？论坛邀请三位横跨技术哲学、艺术批评与科技艺术策展领域的专家，共同探讨生命技术引发的艺术革命。',
    links: [
      { label: 'YouTube 回放', url: 'https://youtu.be/hzmy40ocTLQ?si=-B5osJRqZlYrd-wU' },
      { label: 'Bilibili 回放', url: 'https://www.bilibili.com/video/BV121bMzREFA/' },
    ],
  },
  {
    title: '沙龙｜人类，智能与肉身：AI时代我们还能做艺术吗？',
    date: '2025年5月28日',
    type: '沙龙',
    orgs: '雷电所 × 华文道 × 天与ARTECH',
    desc: '本次沙龙以"AI时代我们还能做艺术吗？"为核心议题，在图像泛滥、算法同质化的今天，创作者不再是孤立的个体，而是"去中心化系统中的节点"；作品也不仅仅是物品，更是与技术和社会结构互动的过程。本次沙龙从哲学、教育、创作实践、机构运营等角度，呈现了一个多维度的AI艺术图景。AI不再是神秘技术，而是每位艺术家都必须面对与回应的现实语境。',
    links: [
      { label: 'YouTube 回放', url: 'https://youtu.be/K75dJira4Yc?si=bkP2pii6TUAWxp4e' },
      { label: 'Bilibili 回放', url: 'https://www.bilibili.com/video/BV1x67pzKErH/' },
    ],
  },
  {
    title: '展览介绍｜第二届中国（合肥）国际科学艺术周：未来人类科技学——科学与艺术特展',
    date: '2024年10月1日',
    type: '展览',
    orgs: '合肥市人民政府、中央美术学院、合肥综合性国家科学中心能源研究院、中国科学院合肥物质科学研究院',
    desc: '在即将开启下一场"能源革命"的等离子体可控核聚变中，我们如何面对这一朝向未来更多可能性的科学和技术，如何想象一种与文化艺术共生的社会，充满着对"未来人性"之关怀的"未来科技"。我们试图让科学技术和科学仪器走出实验室，通过艺术活动来缩短公众与科技的距离。此次展览也是中国艺术家首次大规模的深度参与进大科学装置园区。',
  },
]

export default function Artech() {
  const [filter, setFilter] = useState('全部')
  const filtered = filter === '全部' ? CASES : CASES.filter((c) => c.cat === filter)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber/15 rounded-full blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-36 md:pb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-amber">TIANYU ARTECH</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink mt-2 mb-6">天与科艺</h1>
          <p className="text-lg text-muted max-w-3xl leading-relaxed">
            天与ARTECH由胡翌霖与沈聪联合创立，以"与科技"为核心理念，致力于探索艺术与科技、文化与科技、人类与科技交界处的崭新表达方式。
            我们相信，技术不再只是冷冰冰的工具，而是将重新回归"技艺"一体的整合性路径。
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-white/50 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-ink mb-2">研究驱动的案例</h2>
          <p className="text-muted mb-8">探索天与视界如何将前沿科研转化为精准而优雅的视觉语言</p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                  filter === cat
                    ? 'bg-teal text-white border-teal'
                    : 'bg-white border-line text-muted hover:border-teal hover:text-teal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Case cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((c) => (
              <Link
                key={c.title}
                to={`/artech/${c.slug}`}
                className="rounded-2xl border border-line bg-card overflow-hidden hover:shadow-lg transition-shadow no-underline group img-hover-zoom"
              >
                <div className="overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full aspect-video object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-teal bg-teal/8 px-2 py-0.5 rounded-full">{c.cat}</span>
                    <span className="text-xs text-muted">{c.year}</span>
                    {c.duration && <span className="text-xs text-muted">{c.duration}</span>}
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-1 group-hover:text-teal transition-colors">{c.title}</h3>
                  <p className="text-sm text-muted italic mb-3">{c.titleEn}</p>
                  <p className="text-sm text-muted leading-relaxed mb-4">{c.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-full bg-ink/5 text-xs text-muted">{t}</span>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-teal opacity-0 group-hover:opacity-100 transition-opacity">查看详情 →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-ink mb-3">节目</h2>
          <p className="text-muted mb-10">系列讲座、对谈与读书会</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROGRAMS.map((p) => (
              <div key={p.title} className="p-5 rounded-xl border border-line bg-card">
                <h3 className="text-sm font-bold text-ink mb-2">{p.title}</h3>
                <p className="text-xs text-muted">{p.date}</p>
                <p className="text-xs text-muted mt-1">主讲/对谈：{p.host}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="bg-white/50 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-ink mb-10">事件</h2>
          <div className="flex flex-col gap-6">
            {EVENTS.map((e) => (
              <div key={e.title} className="p-6 rounded-2xl border border-line bg-card">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-semibold text-teal">{e.date}</span>
                  {e.type && (
                    <span className="text-xs font-medium text-amber bg-amber/10 px-2 py-0.5 rounded-full">{e.type}</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">{e.title}</h3>
                {e.orgs && <p className="text-xs text-muted mb-2">{e.orgs}</p>}
                <p className="text-sm text-muted leading-relaxed">{e.desc}</p>
                {e.links && e.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {e.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-medium text-teal hover:text-teal-light no-underline transition-colors"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-ink to-ink/90">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">合作咨询</h2>
          <p className="text-white/70 max-w-lg mx-auto mb-8">
            艺术品咨询、商务合作、媒体报道或投资机会，欢迎联系我们。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3.5 rounded-xl bg-amber text-white font-bold text-sm no-underline shadow-lg hover:-translate-y-0.5 transition-transform"
          >
            发起对话
          </Link>
        </div>
      </section>
    </>
  )
}

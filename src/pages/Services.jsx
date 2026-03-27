const SERVICES = [
  {
    title: '科学可视化',
    desc: '将科研数据、实验结果与学术发现转化为直观、精确的视觉作品。包括数据可视化、科学插画、论文配图、科普动画等。',
    items: ['数据可视化', '科学插画', '论文配图', '科普动画', '学术海报'],
  },
  {
    title: '交互体验设计',
    desc: '为展览、博物馆、科技活动和数字平台设计沉浸式交互内容，让观众深度参与科学叙事。',
    items: ['展览交互设计', '沉浸式体验', '科普互动装置', '数字展厅', 'AR/VR 体验'],
  },
  {
    title: '平台与产品开发',
    desc: '从概念到上线的完整技术实现，为科研机构、教育组织和创意团队提供数字平台解决方案。',
    items: ['Web 平台开发', '可视化工具', '协作系统', '数据仪表盘', 'API 集成'],
  },
  {
    title: '品牌与传播',
    desc: '为科研机构和学术项目提供品牌策略、视觉识别和传播方案，帮助科学故事触达更广泛的受众。',
    items: ['品牌策略', '视觉识别', '内容策划', '社交媒体', '学术传播'],
  },
]

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36">
      <p className="text-teal text-xs font-bold tracking-widest uppercase mb-2 scroll-reveal">Services</p>
      <h1 className="text-4xl md:text-5xl font-extrabold text-ink mb-6 scroll-reveal">我们的服务</h1>
      <p className="text-lg text-muted max-w-2xl leading-relaxed mb-16 scroll-reveal">
        从可视化到平台开发，我们提供科学传播全链路的创意与技术服务。
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {SERVICES.map((s) => (
          <div key={s.title} className="scroll-reveal p-8 rounded-2xl border border-line bg-card card-elevated">
            <h2 className="text-xl font-bold text-ink mb-3">{s.title}</h2>
            <p className="text-sm text-muted leading-relaxed mb-5">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-teal/8 text-teal text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

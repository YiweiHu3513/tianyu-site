const FOUNDERS = [
  {
    name: '沈聪',
    role: '联合创始人 · CEO',
    desc: '清华科学史硕士，央美实验艺术学士。掌控公司战略方向与资源拓展。青年艺术家、策展人。',
    img: '/images/team/shen-cong.png',
    socials: [
      { type: 'linkedin', url: '#' },
      { type: 'x', url: '#' },
    ],
  },
  {
    name: '胡翌霖',
    role: '联合创始人',
    desc: '哲学博士，曾任清华大学科学史系副教授。构建顶层哲学架构与学术资源支撑体系。',
    img: '/images/team/hu-yilin.png',
    socials: [
      { type: 'linkedin', url: '#' },
      { type: 'x', url: '#' },
    ],
  },
  {
    name: '胡一葳',
    role: '联合创始人 · COO',
    desc: '央美实验艺术学士。驱动运营执行、技术产品与交付落地的全链路。',
    img: '/images/team/hu-yizang.png',
    socials: [
      { type: 'linkedin', url: '#' },
      { type: 'x', url: '#' },
    ],
  },
]

const TEAM = [
  { name: '李明思', role: '项目经理', desc: '央美艺术管理硕士。统筹项目执行、策展转化与商业价值实现。', img: '/images/team/li-mingsi.png', socials: [] },
  { name: '段怡杉', role: '技术美术师', desc: '清华美院硕士，央美本科。掌控技术美术、虚拟交互与视觉研发方向。', img: '/images/team/duan-yishan.png', socials: [] },
  { name: '李升欣', role: '技术合伙人', desc: '清华深圳院AI方向。推进AI算法落地与工程化实现。', img: '/images/team/wang-yue.png', socials: [] },
]

const SOCIAL_ICONS = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
}

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-36">
        <p className="text-teal text-xs font-bold tracking-widest uppercase mb-2">About Us</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-ink mb-6">关于天与视界</h1>
        <p className="text-lg text-muted max-w-3xl leading-relaxed">
          我们团队汇聚了清华大学的科学严谨性与中央美术学院的艺术敏锐度。这种跨学科的碰撞成为了我们平台的核心竞争力。
          学术思维与美学实践的结合，让我们能够将复杂的科学概念转化为精准而优雅的视觉表达。
        </p>
      </section>

      {/* Founders */}
      <section className="bg-white/50 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold text-ink mb-2">核心创始人</h2>
          <p className="text-muted mb-10">学术与艺术的交汇点</p>
          <div className="grid md:grid-cols-3 gap-8">
            {FOUNDERS.map((m) => (
              <div key={m.name} className="text-center">
                <img src={m.img} alt={m.name} className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg" />
                <h3 className="text-lg font-bold text-ink">{m.name}</h3>
                <p className="text-sm font-medium text-teal mt-1">{m.role}</p>
                <p className="text-sm text-muted mt-3 leading-relaxed">{m.desc}</p>
                {m.socials.length > 0 && (
                  <div className="flex justify-center gap-3 mt-4">
                    {m.socials.map((s) => (
                      <a key={s.type} href={s.url} target="_blank" rel="noreferrer" className="text-muted hover:text-teal transition-colors" aria-label={s.type}>
                        {SOCIAL_ICONS[s.type]}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold text-ink mb-10">核心团队</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((m) => (
              <div key={m.name} className="p-6 rounded-2xl border border-line bg-card">
                <img src={m.img} alt={m.name} className="w-16 h-16 rounded-full mb-4 object-cover" />
                <h3 className="text-lg font-bold text-ink">{m.name}</h3>
                <p className="text-sm font-medium text-teal mt-1">{m.role}</p>
                <p className="text-sm text-muted mt-2 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="bg-gradient-to-br from-teal to-teal-light">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">加入我们</h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8">
            我们在寻找志同道合的伙伴，一起探索科学与艺术的边界。
          </p>
          <a
            href="mailto:tianyuartech@gmail.com?subject=加入天与视界"
            className="inline-flex items-center px-8 py-3.5 rounded-xl bg-white text-teal font-bold text-sm no-underline shadow-lg hover:-translate-y-0.5 transition-transform"
          >
            联系我们
          </a>
        </div>
      </section>
    </>
  )
}

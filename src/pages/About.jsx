const FOUNDERS = [
  {
    name: '沈聪',
    role: '联合创始人 · CEO',
    desc: '清华科学史硕士，央美实验艺术学士。掌控公司战略方向与资源拓展。青年艺术家、策展人。',
    img: '/images/team/shen-cong.png',
  },
  {
    name: '胡翌霖',
    role: '联合创始人',
    desc: '哲学博士，曾任清华大学科学史系副教授。构建顶层哲学架构与学术资源支撑体系。',
    img: '/images/team/hu-yilin.png',
  },
  {
    name: '胡一葳',
    role: '联合创始人 · COO',
    desc: '央美实验艺术学士。驱动运营执行、技术产品与交付落地的全链路。',
    img: '/images/team/hu-yizang.png',
  },
]

const TEAM = [
  { name: '李明思', role: '项目经理', desc: '央美艺术管理硕士。统筹项目执行、策展转化与商业价值实现。', img: '/images/team/li-mingsi.png' },
  { name: '段怡杉', role: '技术美术师', desc: '清华美院硕士，央美本科。掌控技术美术、虚拟交互与视觉研发方向。', img: '/images/team/duan-yishan.png' },
  { name: '李升欣', role: '技术合伙人', desc: '清华深圳院AI方向。推进AI算法落地与工程化实现。', img: '/images/team/wang-yue.png' },
]

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

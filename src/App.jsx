import './App.css'

const MILESTONES = [
  {
    phase: 'Phase 01',
    title: '信息架构重排',
    detail: '重建导航和内容层级，让访客在 20 秒内理解我们在做什么。',
  },
  {
    phase: 'Phase 02',
    title: '案例与服务重构',
    detail: '整理真实项目成果，补齐服务流程、交付方式与合作入口。',
  },
  {
    phase: 'Phase 03',
    title: '正式版上线',
    detail: '完成视觉统一与交互打磨后，切回主域名并发布完整官网。',
  },
]

function App() {
  return (
    <div className="shell">
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />

      <header className="topbar">
        <p className="brand">天与视界 · Tianyu Studio</p>
        <span className="badge">Temporary Site</span>
      </header>

      <main className="hero">
        <p className="kicker">Website Rebuild In Progress</p>
        <h1>新官网正在重构</h1>
        <p className="lead">
          当前页面用于保持线上可访问。我们正在重构网站叙事、案例结构和服务流程，
          正式版将以全新信息架构上线。
        </p>
        <div className="actions">
          <a className="button button-primary" href="mailto:yiweihu3513@gmail.com">
            联系工作室
          </a>
          <a
            className="button button-secondary"
            href="https://github.com/YiweiHu3513/tianyu-site"
            target="_blank"
            rel="noreferrer"
          >
            查看建设进度
          </a>
        </div>
      </main>

      <section className="milestones">
        {MILESTONES.map((item) => (
          <article key={item.phase} className="card">
            <p className="phase">{item.phase}</p>
            <h2>{item.title}</h2>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <footer className="footnote">Last updated: 2026-03-25</footer>
    </div>
  )
}

export default App

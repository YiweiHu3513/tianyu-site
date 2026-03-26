import { Link } from 'react-router'

const NAV_COLS = [
  {
    title: '产品',
    links: [
      { label: 'SCI-VISION 平台', to: '/sci-vision' },
      { label: '天与科艺 ARTECH', to: '/artech' },
      { label: '天与科玩 SciPlay', to: '/sciplay' },
    ],
  },
  {
    title: '公司',
    links: [
      { label: '关于我们', to: '/about' },
      { label: '服务', to: '/services' },
      { label: '联系', to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white/60 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="text-lg font-bold text-ink mb-2">天与视界</p>
            <p className="text-sm text-muted leading-relaxed max-w-sm mb-4">
              以科学可视化与交互体验为核心，连接学术研究与大众认知，让复杂知识变得可感知、可理解、可互动。
            </p>
            <div className="space-y-1 text-sm text-muted">
              <p>深圳市南山区桃源街道福光社区留仙大道3370号南山智园崇文园区2号楼308</p>
              <p>香港火炭坳背湾街38-40号华卫工贸中心1212B</p>
              <p>
                <a href="tel:18510725958" className="text-muted hover:text-teal no-underline">18510725958</a>
                {' · '}
                <a href="mailto:tianyuartech@gmail.com" className="text-muted hover:text-teal no-underline">tianyuartech@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">{col.title}</p>
              <div className="flex flex-col gap-2">
                {col.links.map(({ label, to }) => (
                  <Link key={to} to={to} className="text-sm text-muted hover:text-teal no-underline transition-colors">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social + copyright */}
        <div className="mt-10 pt-6 border-t border-line flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} 天与视界 Tianyu Vision. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-muted">
            <span>微信公众号：天与ARTECH</span>
            <a href="https://space.bilibili.com/3537110856370265" target="_blank" rel="noreferrer" className="text-muted hover:text-teal no-underline">Bilibili</a>
            <a href="https://www.youtube.com/@%E5%A4%A9%E4%B8%8EARTECH" target="_blank" rel="noreferrer" className="text-muted hover:text-teal no-underline">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

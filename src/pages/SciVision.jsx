import { Link } from 'react-router'

const FEATURES = [
  { img: '/images/platform/generator.png', title: '科学视觉生成器', desc: '文本、PDF、Word直接转图，支持结构化输入。' },
  { img: '/images/platform/grammar-engine.png', title: '科学视觉语法引擎', desc: '学科语义拆解，标准科研图式规则。' },
  { img: '/images/platform/ai-artist.png', title: 'AI+Artist工作流', desc: 'AI初生成，艺术家微调，学术级视觉输出。' },
  { img: '/images/platform/library.png', title: '科学视觉标准库', desc: '物理、化学、生物、能源全学科覆盖。' },
]

const CAPABILITIES = [
  { img: '/images/platform/precision.png', title: '学科精准性与视觉表达', desc: '物理、化学、生物等多学科的视觉转译逻辑。' },
  { img: '/images/platform/balance.png', title: '科学与艺术的完美平衡', desc: '在准确表达科学内涵的同时，兼顾艺术美感。' },
  { img: '/images/platform/review.png', title: '每个图像都经过学术审核', desc: '确保每一张图都符合学术伦理和出版规范。' },
]

export default function SciVision() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal/15 rounded-full blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-36 md:pb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-teal scroll-reveal">PLATFORM</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink mt-2 mb-6 scroll-reveal">
            一站式科学传播视觉资产AI平台
          </h1>
          <p className="text-lg text-muted max-w-2xl leading-relaxed mb-8 scroll-reveal">
            从文本到出版级图像，只需几秒钟。专为科研人员打造的智能可视化工作流。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-teal to-teal-light text-white font-semibold text-sm no-underline shadow-lg shadow-teal/25 hover:-translate-y-0.5 transition-transform"
            >
              开始体验
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-xl border border-line bg-white/70 text-ink font-semibold text-sm no-underline hover:-translate-y-0.5 transition-transform"
            >
              查看演示
            </Link>
          </div>
        </div>
      </section>

      {/* Four core features */}
      <section className="bg-white/50 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-ink mb-3 scroll-reveal">四大核心功能</h2>
          <p className="text-muted mb-12 scroll-reveal">从文本到图像，全流程智能化支持</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="scroll-reveal rounded-2xl border border-line bg-card overflow-hidden card-elevated">
                <img src={f.img} alt={f.title} className="w-full aspect-[4/3] object-cover" />
                <div className="p-5">
                  <h3 className="text-base font-bold text-ink mb-1">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generator detail */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ink mb-4 scroll-reveal">科学视觉生成器</h2>
              <p className="text-muted leading-relaxed mb-6">
                输入实验原理或PDF，选择风格与分辨率，一键获取专业级科学绘图。
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-line bg-card">
                  <h4 className="text-sm font-bold text-ink mb-1">输入层</h4>
                  <p className="text-xs text-muted">文本输入 (Prompt for Science)、PDF / Word 上传、结构化参数输入</p>
                </div>
                <div className="p-4 rounded-xl border border-line bg-card">
                  <h4 className="text-sm font-bold text-ink mb-1">输出层</h4>
                  <p className="text-xs text-muted">实验原理示意图、系统架构图、Visual Abstract、科普级简化图</p>
                </div>
                <div className="p-4 rounded-xl border border-line bg-card">
                  <h4 className="text-sm font-bold text-ink mb-1">配置选项</h4>
                  <p className="text-xs text-muted">分辨率选择、期刊风格适配、学科标签</p>
                </div>
              </div>
            </div>
            <img src="/images/platform/input-output.png" alt="Generator Interface" className="rounded-2xl border border-line shadow-lg" />
          </div>
        </div>
      </section>

      {/* Visual grammar */}
      <section className="bg-white/50 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-ink mb-3 scroll-reveal">视觉语法的科学基础</h2>
          <p className="text-muted mb-12 scroll-reveal">不仅仅是画得好看，更是画得对</p>
          <div className="grid md:grid-cols-3 gap-6">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="scroll-reveal rounded-2xl border border-line bg-card overflow-hidden card-elevated">
                <img src={c.img} alt={c.title} className="w-full aspect-video object-cover" />
                <div className="p-5">
                  <h3 className="text-base font-bold text-ink mb-1">{c.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual engine */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-ink mb-3 scroll-reveal">双引擎协同生成</h2>
          <p className="text-muted mb-12 scroll-reveal">AI的高效与艺术家的灵感，共同为您服务</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="scroll-reveal rounded-2xl border border-line bg-card overflow-hidden card-elevated">
              <img src="/images/platform/ai-engine.png" alt="AI Engine" className="w-full aspect-video object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink mb-2">AI引擎智能分析与初稿生成</h3>
                <p className="text-sm text-muted leading-relaxed">快速解析您的文本内容，生成结构准确的初稿，节省90%的构思时间。</p>
              </div>
            </div>
            <div className="scroll-reveal rounded-2xl border border-line bg-card overflow-hidden card-elevated">
              <img src="/images/platform/artist-engine.png" alt="Artist Engine" className="w-full aspect-video object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink mb-2">艺术家精修与风格调整</h3>
                <p className="text-sm text-muted leading-relaxed">专业艺术家对初稿进行光影、材质、构图的微调，确保最终交付出版级品质。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-teal to-teal-light scroll-reveal">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">开始体验</h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8">
            加入内测，体验从文本到出版级科学图像的全新工作流。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3.5 rounded-xl bg-white text-teal font-bold text-sm no-underline shadow-lg hover:-translate-y-0.5 transition-transform"
          >
            申请内测
          </Link>
        </div>
      </section>
    </>
  )
}

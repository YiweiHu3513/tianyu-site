import { useParams, Link } from 'react-router'
import { useEffect } from 'react'
import CASE_DETAILS from '../data/caseDetails'

export default function CaseDetail() {
  const { slug } = useParams()
  const c = CASE_DETAILS[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!c) {
    return (
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 text-center min-h-screen" style={{ background: '#0a0a0a' }}>
        <h1 className="text-3xl font-bold text-white mb-4">案例未找到</h1>
        <p className="mb-8" style={{ color: '#999' }}>请检查链接是否正确。</p>
        <Link to="/artech" className="font-semibold no-underline hover:underline" style={{ color: '#d4a853' }}>← 返回全部案例</Link>
      </div>
    )
  }

  return (
    <div style={{ background: '#0a0a0a', color: '#ddd' }} className="min-h-screen">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-6 pt-24 md:pt-28">
        <nav className="flex items-center gap-2 text-sm" style={{ color: '#888' }}>
          <Link to="/artech" className="no-underline transition-colors" style={{ color: '#888' }}>案例</Link>
          <span style={{ color: '#555' }}>›</span>
          <span className="font-medium" style={{ color: '#fff' }}>{c.title}</span>
        </nav>
      </div>

      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pt-6 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">{c.title}</h1>
            <p className="text-lg italic mb-6" style={{ color: '#9a9a9a' }}>{c.titleEn}</p>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-semibold text-teal bg-teal/8 px-3 py-1 rounded-full">{c.cat}</span>
              <span className="text-sm" style={{ color: '#888' }}>{c.year}</span>
              {c.duration && <span className="text-sm" style={{ color: '#888' }}>{c.duration}</span>}
            </div>

            {/* Intro */}
            <p className="leading-relaxed mb-6" style={{ color: '#aaa' }}>{c.intro}</p>

            {/* External links */}
            {c.links.length > 0 && (
              <div className="space-y-2">
                {c.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-sm text-teal hover:underline no-underline"
                  >
                    → {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Tags on right for desktop */}
          <div className="flex flex-wrap gap-2 md:justify-end">
            {c.tags.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-sm" style={{ background: 'rgba(255,255,255,0.08)', color: '#9b9b9b' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl overflow-hidden">
          <img
            src={c.heroImg}
            alt={c.title}
            className="w-full aspect-video object-cover"
          />
        </div>
      </section>

      {/* Chapters */}
      <section className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">章节结构</h2>

          <div className="space-y-16">
            {c.chapters.map((ch, i) => (
              <div
                key={ch.num}
                className={`grid md:grid-cols-2 gap-10 items-center scroll-reveal ${
                  i % 2 === 1 ? 'md:direction-rtl' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <span className="text-xs font-bold tracking-widest uppercase text-teal mb-2 block">
                    {ch.num}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{ch.title}</h3>
                  <p className="leading-relaxed" style={{ color: '#999' }}>{ch.desc}</p>
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <img
                    src={ch.img}
                    alt={ch.title}
                    className="w-full rounded-xl aspect-video object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      {c.videoEmbed && (
        <section className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)', background: '#0f0f0f' }}>
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">完整视频</h2>
            <div className="aspect-video rounded-2xl overflow-hidden" style={{ background: '#121212' }}>
              <iframe
                src={c.videoEmbed}
                title={c.title}
                className="w-full h-full"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-br from-ink to-ink/90">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">继续探索科学</h2>
          <p className="text-white/70 max-w-lg mx-auto mb-8">
            发现更多研究案例，或与我们讨论你的科学可视化需求。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/artech"
              className="inline-flex items-center px-8 py-3.5 rounded-xl border border-white/30 text-white font-bold text-sm no-underline hover:-translate-y-0.5 transition-transform"
            >
              更多案例
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 rounded-xl bg-amber text-white font-bold text-sm no-underline shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              获取专属解决方案
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

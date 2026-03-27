import { useParams, Link } from 'react-router'
import { useEffect } from 'react'
import EVENT_DETAILS from '../data/eventDetails'

export default function EventDetail() {
  const { slug } = useParams()
  const e = EVENT_DETAILS[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!e) {
    return (
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 text-center min-h-screen" style={{ background: '#0a0a0a' }}>
        <h1 className="text-3xl font-bold text-white mb-4">事件未找到</h1>
        <p className="mb-8" style={{ color: '#999' }}>请检查链接是否正确。</p>
        <Link to="/artech" className="font-semibold no-underline hover:underline" style={{ color: '#d4a853' }}>
          ← 返回天与科艺
        </Link>
      </div>
    )
  }

  return (
    <div style={{ background: '#0a0a0a', color: '#ddd' }} className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-ink overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={e.image}
            alt={e.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link to="/artech" className="text-white/50 hover:text-white no-underline transition-colors">
              天与科艺
            </Link>
            <span className="text-white/30">›</span>
            <span className="text-white/50">事件</span>
            <span className="text-white/30">›</span>
            <span className="text-white/80">{e.title}</span>
          </nav>

          {/* Meta badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-semibold text-white/90 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              {e.date}
            </span>
            {e.type && (
              <span className="text-xs font-medium text-amber bg-amber/15 px-3 py-1 rounded-full backdrop-blur-sm">
                {e.type}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3">
            {e.title}
          </h1>
          {e.titleEn && (
            <p className="text-lg text-white/50 italic mb-6">{e.titleEn}</p>
          )}

          {/* Venue & Organizers */}
          <div className="space-y-2 text-sm text-white/60">
            {e.venue && (
              <p>
                <span className="text-white/40 mr-2">地点</span>
                {e.venue}
              </p>
            )}
            {e.organizers && (
              <p>
                <span className="text-white/40 mr-2">主办</span>
                {e.organizers}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">活动概述</h2>
          <p className="leading-relaxed text-lg" style={{ color: '#b7b7b7' }}>{e.description}</p>
        </div>
      </section>

      {/* Content sections */}
      {e.sections && e.sections.length > 0 && (
        <section className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-12">内容详情</h2>
            <div className="space-y-12">
              {e.sections.map((s, i) => (
                <div key={i} className="scroll-reveal">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal/10 text-teal text-sm font-bold flex items-center justify-center mt-1">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-3">{s.heading}</h3>
                      <p className="leading-relaxed" style={{ color: '#aaa' }}>{s.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Speakers */}
      {e.speakers && e.speakers.length > 0 && (
        <section className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)', background: '#0f0f0f' }}>
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-10">嘉宾阵容</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {e.speakers.map((sp, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border scroll-reveal"
                  style={{ borderColor: 'rgba(255,255,255,0.1)', background: '#151515' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                      <span className="text-teal font-bold text-sm">
                        {sp.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{sp.name}</h4>
                      {sp.affiliation && (
                        <p className="text-xs" style={{ color: '#999' }}>{sp.affiliation}</p>
                      )}
                    </div>
                  </div>
                  <span className="inline-block text-xs font-medium text-amber bg-amber/10 px-2 py-0.5 rounded-full mb-2">
                    {sp.role}
                  </span>
                  {sp.keyPoint && (
                    <p className="text-xs leading-relaxed" style={{ color: '#999' }}>{sp.keyPoint}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Links */}
      {e.links && e.links.length > 0 && (
        <section className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8">相关链接</h2>
            <div className="flex flex-wrap gap-4">
              {e.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium text-teal no-underline hover:border-teal transition-all"
                  style={{ borderColor: 'rgba(255,255,255,0.14)', background: '#121212' }}
                >
                  {l.label}
                  <span className="text-teal/60">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Credits */}
      {e.credits && (
        <section className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs" style={{ color: '#777' }}>
              {e.credits.editor && <span>编辑：{e.credits.editor}</span>}
              {e.credits.designer && <span>设计：{e.credits.designer}</span>}
              {e.credits.photographer && <span>摄影：{e.credits.photographer}</span>}
              {e.credits.reviewer && <span>审核：{e.credits.reviewer}</span>}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-br from-ink to-ink/90">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">探索更多活动</h2>
          <p className="text-white/70 max-w-lg mx-auto mb-8">
            发现天与科艺的更多学术活动、展览与论坛。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/artech"
              className="inline-flex items-center px-8 py-3.5 rounded-xl border border-white/30 text-white font-bold text-sm no-underline hover:-translate-y-0.5 transition-transform"
            >
              返回天与科艺
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 rounded-xl bg-amber text-white font-bold text-sm no-underline shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

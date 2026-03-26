import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')

    const subject = encodeURIComponent(`来自官网的咨询 - ${name}`)
    const body = encodeURIComponent(`姓名: ${name}\n邮箱: ${email}\n\n${message}`)
    window.location.href = `mailto:tianyuartech@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-teal text-xs font-bold tracking-widest uppercase mb-2">Contact</p>
      <h1 className="text-4xl md:text-5xl font-extrabold text-ink mb-6">联系我们</h1>
      <p className="text-lg text-muted max-w-2xl leading-relaxed mb-16">
        有项目想聊？有合作想谈？直接给我们留言。
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">姓名</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl border border-line bg-white text-ink text-sm outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-shadow"
              placeholder="你的名字"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">邮箱</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-line bg-white text-ink text-sm outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-shadow"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">留言</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl border border-line bg-white text-ink text-sm outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-shadow resize-y"
              placeholder="描述你的项目或想法..."
            />
          </div>
          <button
            type="submit"
            className="self-start px-6 py-3 rounded-xl bg-gradient-to-r from-teal to-teal-light text-white font-semibold text-sm border-none cursor-pointer shadow-lg shadow-teal/25 hover:-translate-y-0.5 transition-transform"
          >
            发送消息
          </button>
          {submitted && (
            <p className="text-sm text-teal">邮件客户端已打开，请发送邮件完成联系。</p>
          )}
        </form>

        <div className="flex flex-col gap-6">
          <div className="p-6 rounded-2xl border border-line bg-card">
            <h3 className="text-lg font-bold text-ink mb-2">邮箱</h3>
            <a href="mailto:tianyuartech@gmail.com" className="text-teal no-underline text-sm">
              tianyuartech@gmail.com
            </a>
          </div>
          <div className="p-6 rounded-2xl border border-line bg-card">
            <h3 className="text-lg font-bold text-ink mb-2">所在地</h3>
            <p className="text-sm text-muted">中国 · 北京</p>
          </div>
        </div>
      </div>
    </div>
  )
}

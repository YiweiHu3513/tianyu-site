import { Link } from 'react-router'

const STATS = [
  { value: '17+', label: '合作项目' },
  { value: '10+', label: '合作机构' },
  { value: '8', label: '产品类别' },
  { value: '100%', label: '定制设计' },
]

const PROJECTS = [
  { img: '/images/sciplay/project-1.png', tag: '科普卡片', title: '能源与文明展览科学水蚕卡', desc: '为中国科学院物理研究所能源与文明展览设计的科学水蚕卡，将复杂的能源科学知识转化为生动有趣的科普产品。', partner: '中国科学院物理研究所' },
  { img: '/images/sciplay/project-2.png', tag: '品牌周边', title: '天与品牌文创系列', desc: '天与品牌文创产品系列，包括T恤、帽子、徽章等，将科学可视化艺术融入日常生活。', partner: '天与ARTECH' },
  { img: '/images/sciplay/project-5.png', tag: '3D打印产品', title: '《生命景观》系列——病毒小夜灯', desc: '《生命景观》系列延伸产品，将病毒结构转化为精美的3D打印小夜灯和桌面摆件。', partner: '北京大学' },
  { img: '/images/sciplay/project-6.png', tag: '装置艺术', title: '《生命景观》系列装置艺术', desc: '多模态跨尺度生物医学成像设施科普馆《生命景观》系列，可视化生命结构的装置艺术作品。', partner: '北京大学未来科技学院' },
  { img: '/images/sciplay/project-8.png', tag: '3D打印雕塑', title: '《生命景观》3D打印雕塑', desc: '多模态跨尺度生物医学成像设施科普馆《生命景观》系列，400x80x260cm大型3D打印雕塑。', partner: '北京大学未来科技学院' },
  { img: '/images/sciplay/project-10.png', tag: '文创产品', title: '清华大学生命科学院文创', desc: '为清华大学生命科学院设计的文创产品系列，包括胶带、雨伞、文具套装、手提袋、拼图、马克杯等。', partner: '清华大学生命科学院' },
  { img: '/images/sciplay/project-11.png', tag: '3D打印摆件', title: '迁移体桌面3D打印摆件', desc: '基于Mitocytosis研究成果，将迁移体结构转化为精美的3D打印桌面摆件。', partner: '清华大学生命科学院俞立课题组' },
  { img: '/images/sciplay/project-13.png', tag: 'AGI影像作品', title: '遥远太阳之歌', desc: 'Song of the Distant Sun，完全由人工智能生成的四章节影像作品，19分08秒4K高清视频。', partner: '核能源研究院' },
  { img: '/images/sciplay/project-14.png', tag: '装饰版画', title: '《遥远太阳之歌》装饰版画', desc: '《遥远太阳之歌》系列延伸产品，装饰数字微喷版画，限量100版。', partner: '核能源研究院' },
  { img: '/images/sciplay/project-16.png', tag: '装置艺术', title: '《生命的记忆》装置艺术', desc: '华熙生物海南园区驻地艺术项目，基于记忆金属的生命美学雕塑，借由镍钛合金材料与观众互动。', partner: '华熙生物科技股份有限公司' },
  { img: '/images/sciplay/project-15.png', tag: '品牌周边', title: '天与品牌文创（杜邦纸袋）', desc: '天与品牌文创产品，包括银色杜邦纸材质手提袋和一组九款彩色冰箱贴。', partner: '天与ARTECH' },
  { img: '/images/sciplay/project-3.png', tag: '科普卡片', title: '能源与文明展览科学水蚕卡（续）', desc: '能源与文明展览科学水蚕卡系列的延续，展示更多能源科学知识的可视化呈现。', partner: '中国科学院物理研究所' },
  { img: '/images/sciplay/project-4.png', tag: '可视化作品', title: '科学可视化作品展示', desc: '天与视界科学可视化作品集，涵盖物理、化学、生物等多个学科领域的精美可视化作品。', partner: '多个机构' },
  { img: '/images/sciplay/project-7.png', tag: '3D打印产品', title: '《生命景观》系列——桌面摆件', desc: '《生命景观》系列延伸产品，病毒小夜灯和桌面摆件，精美的3D打印病毒模型。', partner: '北京大学' },
  { img: '/images/sciplay/project-9.png', tag: '展览活动', title: '《生命景观》亮相怀柔科普周', desc: '《生命景观》系列作品亮相怀柔科普周，现场展示多种病毒3D模型，与公众互动。', partner: '北京大学' },
  { img: '/images/sciplay/project-12.png', tag: '3D打印摆件', title: '迁移体桌面3D打印摆件（续）', desc: '迁移体3D打印摆件系列，白色迁移体细胞模型，球形主体带有多个小球和触须结构。', partner: '清华大学生命科学院俞立课题组' },
  { img: '/images/sciplay/project-17.png', tag: '装置艺术', title: '《生命的记忆》装置艺术（续）', desc: 'Biological Memory装置艺术，选用纤维连接蛋白II型结构域蛋白的三维结构模型作为视觉主体。', partner: '华熙生物科技股份有限公司' },
]

const PARTNERS = ['中国科学院物理研究所', '北京大学', '清华大学', '核能源研究院', '华熙生物']

export default function SciPlay() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber/15 rounded-full blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-36 md:pb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-amber">SCIPLAY</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink mt-2 mb-4">天与科玩</h1>
          <p className="text-2xl md:text-3xl font-bold text-ink mb-4">让伟大的科学发现，触手可及！</p>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            将科研成果转化为可触摸、可收藏、可传播的科学文创产品，让科学之美走进日常生活。
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-teal">{s.value}</p>
                <p className="text-sm text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-white/50 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-ink mb-12">产品与项目</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-line bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                <img src={p.img} alt={p.title} className="w-full aspect-[4/3] object-cover" />
                <div className="p-5">
                  <span className="text-xs font-semibold text-teal bg-teal/8 px-2 py-0.5 rounded-full">{p.tag}</span>
                  <h3 className="text-base font-bold text-ink mt-2 mb-1">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">{p.desc}</p>
                  <p className="text-xs text-muted"><span className="font-medium">合作方：</span>{p.partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold text-ink mb-3">合作机构</h2>
          <p className="text-muted mb-8">与顶尖科研机构和企业携手，共创科学文创精品</p>
          <div className="flex flex-wrap gap-4">
            {PARTNERS.map((name) => (
              <span key={name} className="px-5 py-2.5 rounded-xl border border-line bg-card text-sm font-medium text-ink">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-amber/90 to-amber">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">准备好转化科研成果了吗？</h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8">
            让我们一起将您的科学发现转化为触手可及的文创产品，让更多人感受科学之美。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3.5 rounded-xl bg-white text-amber font-bold text-sm no-underline shadow-lg hover:-translate-y-0.5 transition-transform"
          >
            联系我们
          </Link>
        </div>
      </section>
    </>
  )
}

/**
 * Case detail data for individual case pages.
 * Each case is keyed by its URL slug.
 */
const CASE_DETAILS = {
  'song-of-distant-sun': {
    title: '遥远太阳之歌',
    titleEn: 'Song of the Distant Sun',
    cat: 'AGI影像',
    year: '2025',
    duration: '19分08秒',
    heroImg: '/images/cases/case-img-047.png',
    tags: ['核聚变', 'AI生成', '科学艺术'],
    intro:
      '《遥远太阳之歌》是一部完全由人工智能生成的四章节影像作品。关于太阳文化符号的历史记录，与可控核聚变"人造太阳"的技术愿景。作品通过AI技术重新诠释人类对太阳的崇拜与追求，探讨从钻木取火到核聚变的能源演变。',
    links: [
      { label: '作品链接 Artwork link', url: 'https://www.bilibili.com/video/BV1c8ie21Ee5/' },
      { label: 'YouTube', url: 'https://www.youtube.com/watch?v=sBQ71MQJ4uc' },
    ],
    chapters: [
      {
        num: 'I',
        title: '遥远太阳之歌',
        desc: '从古文明的"太阳崇拜"到中国的民间传说，以山川大地中"燃烧"的意象作为开端。在远古人类的眼中，太阳是"火"，是生命的根源。',
        img: '/images/cases/case-img-047.png',
      },
      {
        num: 'II',
        title: '夺火造物',
        desc: '从工业革命到核裂变，人类用"夺取的火"驱动了文明。然而旧能源伴随着污染与危机，"夺火"有代价。',
        img: '/images/cases/case-img-025.png',
      },
      {
        num: 'III',
        title: '黑色与超越',
        desc: '宇宙探索让人类意识到"光"与"暗"的对立统一。从宇宙大爆炸到黑洞，科学揭示了能源的终极形态。',
        img: '/images/cases/case-img-051.png',
      },
      {
        num: 'IV',
        title: '真光回眸/注',
        desc: '核聚变——一种全新的重获太阳般光芒的方式。在"人造太阳"的实验装置前，科学家们正在追逐星火的源头。',
        img: '/images/cases/case-img-119.jpeg',
      },
    ],
    videoEmbed: 'https://player.bilibili.com/player.html?bvid=BV1c8ie21Ee5',
  },
  'human-morphology': {
    title: '人的形态研究',
    titleEn: 'Human Morphology Research',
    cat: 'AGI影像',
    year: '2025',
    duration: '29分25秒',
    heroImg: '/images/cases/case-img-025.png',
    tags: ['人体', 'AI生成', '哲学'],
    intro:
      '围绕"身体"展开的实验影像，分为五个章节：神圣、理性、技术、次元、智能。探讨"人是什么"与"人该长什么样"的认知，通过AI生成影像重新审视人类形态的演变与未来。',
    links: [],
    chapters: [
      {
        num: 'I',
        title: '神圣',
        desc: '从宗教与神话中的人体形象出发，探索人类如何以"神圣"的方式理解自身身体。',
        img: '/images/cases/case-img-025.png',
      },
      {
        num: 'II',
        title: '理性',
        desc: '文艺复兴至启蒙运动，人体成为科学解剖与理性研究的对象，从达芬奇的维特鲁威人到现代医学成像。',
        img: '/images/cases/case-img-025.png',
      },
      {
        num: 'III',
        title: '技术',
        desc: '工业时代的身体——义肢、增强、赛博格概念的兴起，人与机器的边界开始模糊。',
        img: '/images/cases/case-img-025.png',
      },
      {
        num: 'IV',
        title: '次元',
        desc: '虚拟世界中的身体——数字化身、虚拟偶像、元宇宙中"人的形态"如何被重新定义。',
        img: '/images/cases/case-img-025.png',
      },
      {
        num: 'V',
        title: '智能',
        desc: '当AI可以生成任何形态的"人"，我们对"人该长什么样"的认知将走向何方？',
        img: '/images/cases/case-img-025.png',
      },
    ],
    videoEmbed: null,
  },
  'biological-memory': {
    title: '生命的记忆',
    titleEn: 'Biological Memory',
    cat: '装置艺术',
    year: '2024',
    heroImg: '/images/cases/case-img-051.png',
    tags: ['记忆金属', '生物美学', '互动装置'],
    intro:
      '基于记忆金属的生命美学雕塑。通过雕塑与新材料的结合阐释新形态，在分子层面的生命底层逻辑上展现生物美学。借由记忆金属材料，生命雕塑得以耦合蛋白质"变形与复性"的动态概念，并通过变温和观众产生互动。',
    links: [],
    chapters: [
      {
        num: 'I',
        title: '材料与概念',
        desc: '记忆金属（镍钛合金）具有"形状记忆效应"——加热后能恢复预设形态。这与蛋白质的折叠/去折叠过程形成精妙类比。',
        img: '/images/cases/case-img-051.png',
      },
      {
        num: 'II',
        title: '互动体验',
        desc: '观众的体温通过触摸传递给雕塑，触发记忆金属的形变。生命雕塑在观众面前"苏醒"，完成一次微观生物学过程的宏观演绎。',
        img: '/images/cases/case-img-051.png',
      },
    ],
    videoEmbed: null,
  },
  'biological-landscape': {
    title: '生物景观',
    titleEn: 'Biological Landscape',
    cat: '装置艺术',
    year: '2024',
    heroImg: '/images/cases/case-img-077.png',
    tags: ['3D打印', '蛋白质', '病毒模型'],
    intro:
      '科学传播项目，包含多种生物结构的3D打印模型：纤维连接蛋白、心脏切片、弯曲杆菌、埃博拉病毒、噬菌体等。将微观生物世界以宏观艺术形式呈现，让观众直观感受生命的精密与美丽。',
    links: [],
    chapters: [
      {
        num: 'I',
        title: '微观结构的宏观呈现',
        desc: '通过高精度3D打印技术，将纳米尺度的蛋白质结构放大数万倍，以雕塑的形式展现生命的精密建筑。',
        img: '/images/cases/case-img-077.png',
      },
      {
        num: 'II',
        title: '科学与美学的交汇',
        desc: '每个模型都严格基于PDB（蛋白质数据库）的结构数据，在科学准确性的基础上进行艺术化处理，让非专业观众也能感受生物之美。',
        img: '/images/cases/case-img-077.png',
      },
    ],
    videoEmbed: null,
  },
  'energy-civilization': {
    title: '能源与文明：科学艺术·聚变未来',
    titleEn: 'Energy & Civilization: Science Art · Fusion Future',
    cat: '展览策划',
    year: '2025',
    heroImg: '/images/cases/case-img-119.jpeg',
    tags: ['核聚变', '美术馆', '科普展览'],
    intro:
      '国内首个以"可控核聚变"为主题的美术馆级科学艺术展览，汇聚核聚变领域的顶级科学家与艺术界领军人物。通过历史、科学和艺术三个维度的知识图谱构建，全面展示核聚变科学原理。中央美术学院、合肥综合性国家科学中心能源研究院与合肥市人民政府联合推出。',
    links: [],
    chapters: [
      {
        num: 'I',
        title: '历史维度',
        desc: '从古代对太阳的崇拜到现代核物理的发展，展览以时间轴的形式呈现人类追逐"终极能源"的千年历程。',
        img: '/images/cases/case-img-119.jpeg',
      },
      {
        num: 'II',
        title: '科学维度',
        desc: '通过可视化装置、互动模型和数据可视化，解读等离子体约束、超导磁体、氘氚反应等核聚变核心概念。',
        img: '/images/cases/case-img-119.jpeg',
      },
      {
        num: 'III',
        title: '艺术维度',
        desc: '邀请多位当代艺术家以核聚变为灵感创作，展品横跨影像、雕塑、装置、新媒体等多种形式。',
        img: '/images/cases/case-img-119.jpeg',
      },
    ],
    videoEmbed: null,
  },
  'hefei-science-art-week': {
    title: '第二届中国（合肥）国际科学艺术周',
    titleEn: '2nd China Hefei International Science and Art Week',
    cat: '学术活动',
    year: '2024',
    heroImg: '/images/cases/case-img-017.jpeg',
    tags: ['科学艺术', '学术论坛', '工作坊'],
    intro:
      '以"未来·人·科技"为主题的大型科学艺术活动，汇聚中央美术学院、四川美术学院、广州美术学院等顶尖艺术院校，在CRAFT装置1/8真空实验平台进行Mapping创作。活动包含学术论坛、艺术工作坊和展览展示。',
    links: [],
    chapters: [
      {
        num: 'I',
        title: 'Mapping创作',
        desc: '艺术家们在CRAFT装置1/8真空实验平台上进行大型投影映射创作，将科学装置转化为艺术表达的画布。',
        img: '/images/cases/case-img-017.jpeg',
      },
      {
        num: 'II',
        title: '学术论坛',
        desc: '来自科学界与艺术界的专家学者围绕"科学艺术的边界与可能"展开深度对话。',
        img: '/images/cases/case-img-017.jpeg',
      },
    ],
    videoEmbed: null,
  },
}

export default CASE_DETAILS

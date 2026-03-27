/**
 * Event detail data for individual event pages.
 * Each event is keyed by its URL slug.
 */
const EVENT_DETAILS = {
  'hefei-science-art-week-3': {
    title: '第三届合肥科学艺术周',
    titleEn: '3rd Hefei International Science and Art Week',
    date: '2025年12月21日',
    type: '活动',
    venue: '合肥科学岛',
    organizers: '中国科学技术大学、中央美术学院、中科院合肥物质科学研究院、合肥市人民政府',
    image: '/images/cases/case-img-017.jpeg',
    description:
      '作为第三届合肥科学艺术周的核心板块，"科学传播的艺术图像"影像展暨研讨会汇聚了来自清华、中科大、央美、川美、山大、华东师大、广美、鲁美、天美等顶尖学府的学者，以及深耕科学可视化的行业先锋。在"大国竞争"与"技术加速"的时代背景下，我们试图回答一个问题：当科学越来越精密且难理解时，艺术不仅是解释的工具，更是连接孤岛的桥梁。',
    sections: [
      {
        heading: '研讨会主题：科学传播的艺术图像',
        body: '本次研讨会聚焦于大科学时代的图像传播与技术美学。在科学日益精密化的今天，公众与前沿科研之间的鸿沟不断扩大。如何通过视觉语言将复杂的科学概念转化为可感知、可理解的图像，是我们探讨的核心命题。研讨会汇聚了来自科学传播、艺术创作和技术可视化领域的专家学者，共同探索跨学科合作的新路径。',
      },
      {
        heading: '圆桌一：实验室里的艺术家',
        body: '圆桌讨论了艺术家驻留科学实验室的实践与可能性。当艺术家走进实验室，他们不仅是观察者，更是重新诠释科学现象的创作者。嘉宾们从各自的实践出发，分享了艺术与科学交叉的创作经验。',
      },
      {
        heading: '圆桌二：新技术科学形态',
        body: '由胡一葳主持，圆桌探讨了新技术如何催生全新的科学传播形态。从AI生成影像到沉浸式体验，从数据可视化到互动装置，嘉宾们讨论了技术工具如何改变我们理解和传播科学的方式。',
      },
    ],
    speakers: [
      { name: '吴征', role: '嘉宾', affiliation: '大太阳文化科技', keyPoint: '科学传播的商业化路径' },
      { name: '张兆弘', role: '嘉宾', affiliation: '科艺联合实验室', keyPoint: '科学与艺术的制度化合作' },
      { name: '孔德峰', role: '嘉宾', affiliation: '聚变产业中心', keyPoint: '核聚变技术的公众传播' },
      { name: '胡翌霖', role: '嘉宾', affiliation: '天与ARTECH', keyPoint: '技术哲学视角下的图像传播' },
      { name: '周述洋', role: '嘉宾', affiliation: '一目可视', keyPoint: '科学数据可视化实践' },
      { name: '梁琰', role: '嘉宾', affiliation: '中国科学技术大学', keyPoint: '科学影像创作' },
      { name: '刘子熙', role: '嘉宾', affiliation: '中国科学技术大学', keyPoint: '科学传播教育' },
      { name: '黄淞浩', role: '嘉宾', affiliation: '雷电所', keyPoint: '新媒体艺术与科学传播' },
      { name: '刘建', role: '圆桌一嘉宾', affiliation: '山东大学', keyPoint: '实验室驻留创作' },
      { name: '訾鹏飞', role: '圆桌一嘉宾', affiliation: '中国科学院', keyPoint: '科学家视角的艺术合作' },
      { name: '邓碧文', role: '圆桌一嘉宾', affiliation: '广州美术学院', keyPoint: '艺术教育中的科学维度' },
      { name: '徐一博', role: '圆桌一嘉宾', affiliation: '鲁迅美术学院', keyPoint: '科技艺术创作实践' },
      { name: '魏子安', role: '圆桌一嘉宾', affiliation: '中国科学技术大学', keyPoint: '科学可视化研究' },
      { name: '沈聪', role: '圆桌一嘉宾', affiliation: '天与视界', keyPoint: '科学艺术策展实践' },
      { name: '毛文哲', role: '圆桌二嘉宾', affiliation: '', keyPoint: '新技术形态探索' },
      { name: '齐征', role: '圆桌二嘉宾', affiliation: '中央美术学院', keyPoint: '数字艺术教育' },
      { name: '马良', role: '圆桌二嘉宾', affiliation: '天津美术学院', keyPoint: '跨媒介创作' },
      { name: '张海超', role: '圆桌二嘉宾', affiliation: '四川美术学院', keyPoint: '科技艺术融合' },
      { name: '刘翔琪', role: '圆桌二嘉宾', affiliation: '', keyPoint: '技术美学研究' },
      { name: '曲成明', role: '圆桌二嘉宾', affiliation: '', keyPoint: '科学图像传播' },
    ],
    links: [
      { label: 'Bilibili 频道', url: 'https://space.bilibili.com/3537110856370265' },
    ],
    credits: { editor: '胡一葳', photographer: '犇伦科技', reviewer: '沈聪' },
  },

  'human-childhood-forum': {
    title: '胡翌霖 × 人类童年论坛',
    titleEn: 'Hu Yilin × Human Childhood Forum',
    date: '2025年10月25日',
    type: '论坛',
    venue: '中国美术学院',
    organizers: '中国美术学院主办、中国美术学院跨媒体艺术学院承办',
    image: '/images/cases/case-img-025.png',
    description:
      '借用电影《游牧贝贝》中异能儿童被"归于正常"的结局，胡翌霖讨论了技术社会如何处理"差异性存在"。他指出，随着AI与基因编辑的发展，社会对可管理性与可替代性的偏好愈加明显。那些不可归类、不可复制的个体，往往被视为问题，而非资源。在这种结构下，AI不是取代某种职业，而是推动社会排斥"不可复制者"。他强调，真正的制度转向，应从教育出发，培养对"不一致"的审美与感受力，让差异不再被视为风险，而成为共存的前提。',
    sections: [
      {
        heading: '第八届国际跨媒体艺术节论坛暨第五届感受力论坛',
        body: '本届论坛以"人类童年"为主题，探讨在技术加速的时代，如何重新理解人类的起点与本性。论坛汇聚了来自哲学、艺术、科技等领域的学者和创作者，从多角度审视技术社会中"差异性存在"的命运。',
      },
      {
        heading: '技术社会中的差异性存在',
        body: '胡翌霖从电影《游牧贝贝》出发，讨论了一个深刻的社会问题：当AI和基因编辑技术使"标准化"成为默认选项时，那些无法被归类、不可被复制的个体将何去何从？他认为，AI的真正威胁不在于取代某种职业，而在于它推动了一种系统性的偏好——偏好可管理的、可替代的、可预测的存在方式。',
      },
      {
        heading: '从教育出发的制度转向',
        body: '面对技术社会对差异性的排斥，胡翌霖提出了从教育体系出发的解决路径。他强调，应当培养对"不一致"的审美与感受力，让社会学会欣赏而非恐惧差异。真正的制度创新，在于让差异不再被视为需要管理的风险，而成为共存与共创的前提。',
      },
    ],
    speakers: [
      { name: '胡翌霖', role: '演讲嘉宾', affiliation: '天与ARTECH', keyPoint: '技术社会如何处理差异性存在' },
    ],
    links: [],
    credits: null,
  },

  'energy-civilization-exhibition': {
    title: '能源与文明：科学艺术·聚变未来',
    titleEn: 'Energy & Civilization: Science Art · Fusion Future',
    date: '2025年9月14日 — 10月12日',
    type: '展览',
    venue: '中央美术学院美术馆一层',
    organizers: '中央美术学院、合肥综合性国家科学中心能源研究院、合肥市人民政府',
    image: '/images/cases/case-img-119.jpeg',
    description:
      '作为国内首个以"可控核聚变"为主题的美术馆级科学艺术展览，展览汇聚了核聚变领域的顶级科学家与艺术界领军人物。通过跨学科的视角将科学成果与当代艺术表达方式相结合，构建了从科学问题到艺术表现，再到公众认知的完整知识链条。展览从历史、科学与艺术三个维度展示核聚变，包含巨型装置《闪电》《海》《造太阳》及首部AI核聚变影像《遥远太阳之歌》。',
    sections: [
      {
        heading: '三大巨型装置',
        body: '展览核心由三件巨型装置作品构成：《闪电》——致敬特斯拉线圈的高压放电装置，以雷电般的视觉冲击呈现能量的原始力量；《海》——50吨人造海水构成的沉浸式空间，象征核聚变燃料氘的海洋来源；《造太阳》——直径5米的人造太阳装置，以光与热的体验让观众感受核聚变的终极愿景。',
      },
      {
        heading: 'AI核聚变影像《遥远太阳之歌》',
        body: '展览同时呈现了首部AI核聚变影像作品《遥远太阳之歌》，以及"聚变水滴"互动装置。通过人工智能技术重新诠释人类对太阳的崇拜与追求，探讨从钻木取火到核聚变的能源演变历程。',
      },
      {
        heading: '巡展计划',
        body: '展览计划在北京首展后，继续前往合肥、深圳等城市巡展，将核聚变科学艺术的影响力扩展到更广泛的公众群体。通过在不同城市的展出，推动科学艺术的普及与跨区域文化交流。',
      },
    ],
    speakers: [],
    links: [
      { label: '展览公众号报道', url: 'https://mp.weixin.qq.com/s/859jc1jTkVAjNaRQhxASLg' },
      { label: '开幕回顾', url: 'https://mp.weixin.qq.com/s/GaY7rgeIPrZ7C_zpACdpUA' },
    ],
    credits: null,
  },

  'biotech-aesthetics-forum': {
    title: '当生命成为媒介——生物技术的美学转向',
    titleEn: 'When Life Becomes Medium: The Aesthetic Turn of Biotechnology',
    date: '2025年8月7日',
    type: '论坛',
    venue: '线上论坛',
    organizers: 'CCiC × Synbiopunk × 天与ARTECH',
    image: '/images/cases/case-img-051.png',
    description:
      '在AI、基因编辑与合成生物日益渗透的时代，"生命"不再仅是自然体，而逐渐成为一种可被计算、操控、设计与重组的对象。我们是否正在经历一场深层次的感知秩序变异？当"可设计生命"成为现实，艺术与哲学是否必须重新定义自身的位置与使命？论坛邀请三位横跨技术哲学、艺术批评与科技艺术策展领域的专家，共同探讨生命技术引发的艺术革命。',
    sections: [
      {
        heading: '生命作为媒介的哲学反思',
        body: '当生物技术使生命本身成为可编辑的"材料"，传统的美学框架面临根本性挑战。论坛从技术哲学的视角出发，探讨"活的媒介"与传统艺术媒介之间的本质差异，以及这种差异对创作伦理和审美判断的影响。',
      },
      {
        heading: '合成生物学与艺术实践',
        body: '从生物黑客到合成生物学实验室，一种全新的创作范式正在兴起。论坛讨论了生物艺术（BioArt）的发展历程、当前实践及未来可能，探索艺术家如何在实验室中以生命体为创作媒介。',
      },
      {
        heading: '可设计生命时代的伦理与美学',
        body: '当基因编辑技术使"设计生命"成为可能，我们需要重新审视创作的边界。论坛围绕生命政治、生物伦理和技术美学展开讨论，探讨在可设计生命时代，艺术和哲学如何重新定义自身的使命。',
      },
    ],
    speakers: [
      { name: '胡翌霖', role: '对谈嘉宾', affiliation: '天与ARTECH', keyPoint: '技术哲学视角的生命媒介观' },
      { name: '夏可君', role: '对谈嘉宾', affiliation: '中国人民大学', keyPoint: '生命哲学与当代艺术批评' },
      { name: '魏颖', role: '对谈嘉宾', affiliation: '策展人', keyPoint: '科技艺术策展与生物艺术实践' },
      { name: '沈聪', role: '主持人', affiliation: '天与视界', keyPoint: '论坛主持与议题引导' },
    ],
    links: [
      { label: 'YouTube 回放', url: 'https://youtu.be/hzmy40ocTLQ' },
      { label: 'Bilibili 回放', url: 'https://www.bilibili.com/video/BV121bMzREFA/' },
    ],
    credits: { editor: '胡一葳、王家鹄', photographer: null, reviewer: '沈聪', designer: '封雨昕' },
  },

  'ai-art-salon': {
    title: '人类，智能与肉身：AI时代我们还能做艺术吗？',
    titleEn: 'Humanity, Intelligence & Body: Can We Still Make Art in the Age of AI?',
    date: '2025年5月28日',
    type: '沙龙',
    venue: '天与ARTECH Space, 火炭（香港）',
    organizers: '雷电所 × 华文道 × 天与ARTECH',
    image: '/images/cases/case-img-077.png',
    description:
      '本次沙龙以"AI时代我们还能做艺术吗？"为核心议题，在图像泛滥、算法同质化的今天，创作者不再是孤立的个体，而是"去中心化系统中的节点"；作品也不仅仅是物品，更是与技术和社会结构互动的过程。本次沙龙从哲学、教育、创作实践、机构运营等角度，呈现了一个多维度的AI艺术图景。AI不再是神秘技术，而是每位艺术家都必须面对与回应的现实语境。',
    sections: [
      {
        heading: 'AI时代的创作身份',
        body: '当AI能够生成图像、文本、音乐，传统意义上的"创作者"身份面临重新定义。沙龙探讨了在算法同质化的环境下，人类创作者如何找到不可替代的价值——不在于技术能力，而在于独特的感知、判断和表达。',
      },
      {
        heading: '去中心化系统中的艺术节点',
        body: '在Web3和去中心化技术的框架下，艺术家不再是孤立的个体创作者，而是网络中的节点。沙龙讨论了这种新的创作范式如何改变艺术的生产、传播和价值评估方式。',
      },
      {
        heading: '技术与肉身的辩证',
        body: '在人工智能日益强大的今天，"肉身"——即人的身体性存在——反而成为一种独特的创作资源。沙龙从哲学和实践层面探讨了身体经验、物质性和在场感在AI时代的不可替代性。',
      },
      {
        heading: '艺术教育的未来',
        body: '面对AI技术的冲击，传统的艺术教育体系需要怎样的变革？嘉宾们从各自的教育实践出发，讨论了如何培养在AI时代仍然具有创造力和批判性思维的艺术人才。',
      },
      {
        heading: '机构运营与生态建设',
        body: '从雷电所到华文道再到天与ARTECH，不同类型的艺术机构如何在AI时代找到定位？沙龙分享了机构运营的实践经验，探讨了如何构建支持前沿艺术实践的生态系统。',
      },
    ],
    speakers: [
      { name: '胡翌霖', role: '对谈嘉宾', affiliation: '天与ARTECH', keyPoint: '技术哲学与AI时代的创作' },
      { name: '邓碧文', role: '对谈嘉宾', affiliation: '广州美术学院', keyPoint: '艺术教育与AI融合' },
      { name: '黄淞浩', role: '对谈嘉宾', affiliation: '雷电所', keyPoint: '新媒体艺术机构运营' },
      { name: '张文智', role: '对谈嘉宾', affiliation: '华文道', keyPoint: 'Web3与艺术生态' },
      { name: '胡一葳', role: '对谈嘉宾', affiliation: '天与ARTECH', keyPoint: '科学艺术传播实践' },
      { name: '沈聪', role: '主持人', affiliation: '天与视界', keyPoint: '沙龙主持与议题引导' },
    ],
    links: [
      { label: 'YouTube 回放', url: 'https://youtu.be/K75dJira4Yc' },
      { label: 'Bilibili 回放', url: 'https://www.bilibili.com/video/BV1x67pzKErH/' },
    ],
    credits: { editor: '胡一葳、王家鹄', photographer: null, reviewer: '沈聪', designer: '封雨昕' },
  },

  'hefei-science-art-week-2': {
    title: '第二届中国（合肥）国际科学艺术周',
    titleEn: '2nd China Hefei International Science and Art Week',
    date: '2024年10月1日',
    type: '展览',
    venue: '合肥',
    organizers: '合肥市人民政府、中央美术学院、合肥综合性国家科学中心能源研究院、中国科学院合肥物质科学研究院',
    image: '/images/cases/case-img-017.jpeg',
    description:
      '在即将开启下一场"能源革命"的等离子体可控核聚变中，我们如何面对这一朝向未来更多可能性的科学和技术，如何想象一种与文化艺术共生的社会，充满着对"未来人性"之关怀的"未来科技"。我们试图让科学技术和科学仪器走出实验室，通过艺术活动来缩短公众与科技的距离。此次展览也是中国艺术家首次大规模的深度参与进大科学装置园区。',
    sections: [
      {
        heading: '未来·人·科技：科学与艺术特展',
        body: '以"未来人类科技学"为主题，展览汇聚了中央美术学院、四川美术学院、广州美术学院等顶尖艺术院校的创作力量，在CRAFT装置1/8真空实验平台进行大型Mapping创作。这是中国艺术家首次大规模深入参与大科学装置园区的艺术实践。',
      },
      {
        heading: '科学仪器走出实验室',
        body: '展览致力于让科学技术和科学仪器走出实验室的封闭空间，通过艺术活动来缩短公众与科技之间的距离。在等离子体可控核聚变的研究前沿，我们探索如何用艺术语言诠释这一改变人类命运的技术突破。',
      },
    ],
    speakers: [],
    links: [],
    credits: null,
  },
}

export default EVENT_DETAILS

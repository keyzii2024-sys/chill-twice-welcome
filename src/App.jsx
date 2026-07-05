import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Disc3,
  Film,
  Headphones,
  Play,
  Sparkles,
  WandSparkles,
} from 'lucide-react'
import './App.css'

const asset = (name) => `/assets/twice/optimized/${name}`

const members = [
  ['Nayeon', 'Lead light', 'nayeon.webp', 'open-tone vocal, bright first impression'],
  ['Jeongyeon', 'Clean line', 'jeongyeon.webp', 'low-key confidence, grounded silhouette'],
  ['Momo', 'Motion cut', 'momo.webp', 'performance focus, precise kinetic rhythm'],
  ['Sana', 'Soft signal', 'sana.webp', 'warm camera presence, airy emotional color'],
  ['Jihyo', 'Core pulse', 'jihyo.webp', 'leader energy, full-spectrum vocal power'],
  ['Mina', 'Quiet blue', 'mina.webp', 'poised movement, elegant negative space'],
  ['Dahyun', 'Glass wink', 'dahyun.webp', 'playful timing, pearly visual texture'],
  ['Chaeyoung', 'Poster mark', 'chaeyoung.webp', 'graphic attitude, experimental accent'],
  ['Tzuyu', 'Moon scale', 'tzuyu.webp', 'cinematic calm, sculptural composition'],
]

const cases = [
  {
    icon: Film,
    kicker: 'Viewing Room',
    title: 'THIS IS FOR 360 Stage',
    image: 'stage-case.webp',
    text: '把环形舞台、屏幕纵深和观众视线重新编排成沉浸式欢迎仪式。',
  },
  {
    icon: Disc3,
    kicker: 'Music Film',
    title: 'TEN / ME+YOU / TAKEDOWN',
    image: 'album-preview.webp',
    text: '以十周年、主打叙事和影视联动热词作为内容索引，形成时间胶囊。',
  },
  {
    icon: Headphones,
    kicker: 'Archive',
    title: 'Las Vegas Live Memory',
    image: 'live-las-vegas-01.webp',
    text: '现场素材被处理成更安静的蓝白胶片层，保留热度，降低噪声。',
  },
]

const moodWords = [
  'Moonlit',
  'Creamy',
  'Glass',
  'Orbit',
  'Signal',
  'Stage',
  'Velvet',
  'Bloom',
  'Future',
  'Once',
]

const reviewFixes = [
  '首屏视频改用 1.9MB 轻量版，移动端不加载 38MB 原片。',
  '所有主图接入本地 optimized 文件，避免外链失效和空白占位。',
  '成员卡固定比例与最小高度，长文本不会挤压图片。',
  '导航在手机端收敛为横向短链接，避免遮挡 Hero 标题。',
  '动效限制在 transform / opacity / filter，减少重排和卡顿。',
  '玻璃层透明度降低，保证文字对比度和可读性。',
  '按钮和卡片 hover 幅度压低，避免廉价闪烁感。',
  '统一 1700px 版心、8px 圆角和零负字距，保持设计克制。',
]

function App() {
  const [activeMember, setActiveMember] = useState(0)
  const [mode, setMode] = useState('Dream')
  const active = members[activeMember]

  const dotField = useMemo(
    () =>
      Array.from({ length: 54 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 61) % 100}%`,
        delay: `${(index % 9) * 0.16}s`,
      })),
    [],
  )

  return (
    <main>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand-mark" href="#hero" aria-label="Chill's TWICE Welcome home">
          C·TW
        </a>
        <div className="nav-links">
          <a href="#members">Roles</a>
          <a href="#cases">Cinema</a>
          <a href="#interaction">Interact</a>
          <a href="#quality">QA</a>
        </div>
        <a className="nav-action" href="#interaction" aria-label="Open interaction section">
          <WandSparkles size={18} />
        </a>
      </nav>

      <section className="hero-section" id="hero">
        <video
          className="hero-video"
          src={asset('hero-stage-lite.mp4')}
          poster={asset('stage-case.webp')}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-veil" />
        <div className="hero-content">
          <p className="eyebrow">AI visual designer / ONCE-facing portfolio study</p>
          <h1>
            <span>Chill‘s</span>
            <span>TWICE Welcome</span>
          </h1>
          <div className="hero-copy glass">
            <p>
              一个梦幻、温暖、克制的 TWICE 视觉欢迎页：把近期热词、演出影像和成员角色转译成高端作品集式体验。
            </p>
            <a className="primary-link" href="#cases">
              <Play size={17} />
              View cases
            </a>
          </div>
        </div>
        <div className="hero-metrics glass">
          <span>2026 scan</span>
          <strong>THIS IS FOR</strong>
          <span>360 stage / TEN / ME+YOU</span>
        </div>
      </section>

      <section className="intro-band section-wrap">
        <div>
          <p className="section-kicker">Content Structure</p>
          <h2>把“女团素材库”整理成四层网页叙事</h2>
        </div>
        <div className="structure-grid">
          {['Hero video memory', 'Nine role portraits', 'Viewing cases + posters', 'Interactive mood lab'].map(
            (item, index) => (
              <article className="structure-card glass" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item}</h3>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="members-section section-wrap" id="members">
        <div className="section-heading">
          <p className="section-kicker">Role Index</p>
          <h2>九位成员作为九种视觉语气</h2>
        </div>
        <div className="members-layout">
          <article className="featured-member glass">
            <div className="portrait-stage">
              <img src={asset(active[2])} alt={`${active[0]} official profile`} />
              <div className="orbit-ring ring-a" />
              <div className="orbit-ring ring-b" />
            </div>
            <div>
              <p>{active[1]}</p>
              <h3>{active[0]}</h3>
              <span>{active[3]}</span>
            </div>
          </article>
          <div className="member-grid" aria-label="TWICE member selector">
            {members.map((member, index) => (
              <button
                className={`member-chip ${index === activeMember ? 'is-active' : ''}`}
                key={member[0]}
                onClick={() => setActiveMember(index)}
                type="button"
              >
                <img src={asset(member[2])} alt="" loading="lazy" />
                <span>{member[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="cases-section section-wrap" id="cases">
        <div className="section-heading wide">
          <p className="section-kicker">Cinema / Works / Posters</p>
          <h2>观影内容、作品案例与视觉海报被压进同一个温柔蓝调系统</h2>
        </div>
        <div className="case-grid">
          {cases.map(({ icon: Icon, ...item }) => (
            <article className="case-card" key={item.title}>
              <img src={asset(item.image)} alt={item.title} loading="lazy" />
              <div className="case-copy glass">
                <Icon size={20} />
                <span>{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="poster-strip" aria-label="visual poster set">
          {['official-main.webp', 'official-10th.webp', 'official-banner.webp', 'live-las-vegas-02.webp'].map(
            (image, index) => (
              <figure key={image} className="poster-frame">
                <img src={asset(image)} alt={`TWICE visual poster ${index + 1}`} loading="lazy" />
              </figure>
            ),
          )}
        </div>
      </section>

      <section className="interaction-section section-wrap" id="interaction">
        <div className="interaction-panel glass">
          <div className="dot-field" aria-hidden="true">
            {dotField.map((dot) => (
              <i key={dot.id} style={{ left: dot.left, top: dot.top, animationDelay: dot.delay }} />
            ))}
          </div>
          <div className="interaction-copy">
            <p className="section-kicker">ReactBits-inspired interaction</p>
            <h2 className="kinetic-title">
              <span>{mode}</span>
              <span>signal system</span>
            </h2>
            <p>
              参考 ReactBits 的 Aurora、DotField、Orbit Images、Magnet Lines 和文字动效，转写成更轻的本地实现。
            </p>
            <div className="mode-switch" role="group" aria-label="visual mood mode">
              {['Dream', 'Blue', 'Cream', 'Stage'].map((item) => (
                <button
                  className={mode === item ? 'is-active' : ''}
                  key={item}
                  onClick={() => setMode(item)}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className={`mood-lab mood-${mode.toLowerCase()}`}>
            <Sparkles className="spark-icon" size={24} />
            {moodWords.map((word, index) => (
              <span className={`word-fx fx-${(index % 6) + 1}`} key={word}>
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="quality-section section-wrap" id="quality">
        <div className="section-heading">
          <p className="section-kicker">First-view QA</p>
          <h2>已优先修掉的低级不适点</h2>
        </div>
        <div className="quality-grid">
          {reviewFixes.map((fix, index) => (
            <article className="quality-card glass" key={fix}>
              <span>{index + 1}</span>
              <p>{fix}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <p>Chill‘s TWICE Welcome · AI visual designer portfolio draft</p>
        <a href="https://www.reactbits.dev/" target="_blank" rel="noreferrer">
          ReactBits reference <ArrowUpRight size={15} />
        </a>
      </footer>
    </main>
  )
}

export default App

import { useMemo, useState } from 'react'
import {
  Disc3,
  Film,
  Headphones,
  Play,
  Sparkles,
  WandSparkles,
} from 'lucide-react'
import './App.css'

const asset = (name) => `${import.meta.env.BASE_URL}assets/twice/optimized/${name}`

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
    image: 'live-las-vegas-01.webp',
    text: 'Stage lights · live voices · ONCE wave',
  },
  {
    icon: Disc3,
    kicker: 'Music Film',
    title: 'TEN / ME+YOU / TAKEDOWN',
    image: 'album-preview.webp',
    text: '하나, 둘, 셋! One in a million! 안녕하세요, 트와이스입니다.',
  },
  {
    icon: Headphones,
    kicker: 'Archive',
    title: 'Las Vegas Live Memory',
    image: 'live-las-vegas-01.webp',
    text: '하나, 둘, 셋! One in a million! 안녕하세요, 트와이스입니다.',
  },
]

const moodAlbums = [
  ['What is Love?', 'cover-what-is-love.webp'],
  ['Feel Special', 'cover-feel-special.webp'],
  ['Talk that Talk', 'cover-talk-that-talk.webp'],
]

function App() {
  const [activeMember, setActiveMember] = useState(0)
  const [mode, setMode] = useState('Dream')
  const [loveVersion, setLoveVersion] = useState('vinyl')
  const [easterEgg, setEasterEgg] = useState(false)
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
          <a href="#love">Love?</a>
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
          <p className="eyebrow">TWICE archive / ONCE welcome room</p>
          <h1>
            <span>Chill‘s</span>
            <span>TWICE Welcome</span>
          </h1>
          <div className="hero-copy glass">
            <p>
              从 Nayeon 到 Tzuyu，九位成员把明亮、浪漫、舞台能量和电影感编织成一场属于 ONCE 的欢迎仪式。
            </p>
            <a
              className="primary-link"
              href="#love"
              onClick={(event) => {
                event.preventDefault()
                setEasterEgg(true)
                window.setTimeout(() => document.getElementById('love')?.scrollIntoView({ behavior: 'smooth' }), 420)
              }}
            >
              <Play size={17} />
              Open love scene
            </a>
          </div>
        </div>
        <div className={`hero-metrics glass ${easterEgg ? 'is-awake' : ''}`}>
          <span>2026 scan</span>
          <strong>{easterEgg ? 'What is Love?' : 'THIS IS FOR'}</strong>
          <span>{easterEgg ? 'secret scene unlocked' : '360 stage / TEN / ME+YOU'}</span>
        </div>
        {easterEgg && (
          <div className="love-burst" aria-hidden="true">
            {Array.from({ length: 10 }, (_, index) => (
              <i key={index} style={{ '--i': index }} />
            ))}
          </div>
        )}
      </section>

      <section className="intro-band section-wrap">
        <div>
          <p className="section-kicker">Opening line</p>
          <h2>One spark, nine hearts.</h2>
        </div>
        <div className="structure-grid">
          {['Stage light', 'Nine members', 'Love cinema', 'ONCE signal'].map(
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
          <p className="section-kicker">One in a million</p>
          <h2>Nine names, one heartbeat.</h2>
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
          <h2>The Feels, framed in stage light.</h2>
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
            <p className="section-kicker">ONCE signal</p>
            <h2 className="kinetic-title">
              <span>{mode}</span>
              <span>love signal</span>
            </h2>
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
            {moodAlbums.map(([title, cover], index) => (
              <article className={`love-note note-${index + 1}`} key={title}>
                <img src={asset(cover)} alt={`${title} album cover`} loading="lazy" />
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{title}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="love-section section-wrap" id="love">
        <div className="section-heading wide">
          <p className="section-kicker">What is Love?</p>
          <h2>Two cuts for one classic scene.</h2>
        </div>
        <div className="love-switch" role="group" aria-label="What is Love visual version">
          <button className={loveVersion === 'vinyl' ? 'is-active' : ''} onClick={() => setLoveVersion('vinyl')} type="button">
            Vinyl cut
          </button>
          <button className={loveVersion === 'mv' ? 'is-active' : ''} onClick={() => setLoveVersion('mv')} type="button">
            MV cut
          </button>
        </div>

        {loveVersion === 'vinyl' ? (
          <article className="love-player glass">
            <div className="vinyl-scene" aria-label="What is Love vinyl player concept">
              <div className="vinyl-disc">
                <img src={asset('what-is-love-thumb.webp')} alt='TWICE "What is Love?" official MV scene' loading="lazy" />
              </div>
              <div className="tone-arm" />
            </div>
            <div className="love-copy">
              <p className="section-kicker">Version A</p>
              <h3>Play it like a memory.</h3>
              <div className="lyric-player" aria-label='Short lyric loop from TWICE "What is Love?"'>
                <span>LYRIC LOOP</span>
                <strong>What is love? I wanna know.</strong>
              </div>
            </div>
          </article>
        ) : (
          <article className="love-mv glass">
            <div className="mv-frame">
              <iframe
                title='TWICE "What is Love?" M/V'
                src="https://www.youtube.com/embed/i0p1bmr0EmE?rel=0&modestbranding=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="love-copy">
              <p className="section-kicker">Version B</p>
              <h3>Watch it like a film room.</h3>
              <p>
                MV 版本直接把官方影像放进页面，保留电影致敬、明亮色彩和 TWICE 早期标志性的少女感。
              </p>
            </div>
          </article>
        )}
      </section>

      <footer className="site-footer section-wrap">
        <p>Chill‘s TWICE Welcome · for TWICE and ONCE</p>
        <a href="#hero">Back to stage</a>
      </footer>
    </main>
  )
}

export default App

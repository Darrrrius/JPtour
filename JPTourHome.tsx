"use client";

import { useState } from "react";

export type Locale = "zh" | "en" | "ja";

export const isLocale = (value: string): value is Locale =>
  ["zh", "en", "ja"].includes(value);

type Copy = {
  nav: string[];
  heroEyebrow: string;
  heroTitle: React.ReactNode;
  heroText: string;
  primaryCta: string;
  secondaryCta: string;
  proof: string[];
  heroNote: string;
  featuredKicker: string;
  featuredTitle: string;
  featuredText: string;
  discover: string;
  itinerary: string;
  hours: string;
  guestCount: string;
  routeKicker: string;
  routeTitle: string;
  routeText: string;
  steps: { time: string; title: string; text: string }[];
  whyKicker: string;
  whyTitle: string;
  reasons: { icon: string; title: string; text: string }[];
  reviewsKicker: string;
  reviewsTitle: string;
  reviewNotice: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  contact: string;
  footer: string;
  legal: string;
  book: string;
  language: string;
};

const copy: Record<Locale, Copy> = {
  zh: {
    nav: ["行程", "路线", "为什么选择我们", "旅客心声"],
    heroEyebrow: "JAPAN, AT A GENTLER PACE",
    heroTitle: <>把日本，<em>走得更深一点。</em></>,
    heroText: "不赶景点，不照本宣科。和熟悉当地节奏的向导一起，把京都、奈良与大阪的一天过得刚刚好。",
    primaryCta: "探索行程",
    secondaryCta: "联系 JPTour",
    proof: ["小团体验", "中英日服务", "当天可订"],
    heroNote: "Kyoto · Nara · Osaka",
    featuredKicker: "PICK YOUR DAY",
    featuredTitle: "留给你一整天，和一个地方好好相处。",
    featuredText: "从清晨的鸟居、午后的町家，到黄昏时的一碗热汤面。每条路线都为第一次来日本的人，也为想再回来的人而设计。",
    discover: "查看详情",
    itinerary: "私享一日路线",
    hours: "约 8 小时",
    guestCount: "2–8 人小团",
    routeKicker: "A DAY IN KYOTO",
    routeTitle: "不只是打卡的京都。",
    routeText: "我们把经典景点和片刻留白编进同一条线。实际站点会依天气、季节与人流微调，让旅程始终舒服。",
    steps: [
      { time: "08:30", title: "伏见稻荷的清晨", text: "在人潮到来前，走进朱红鸟居与山间小径。" },
      { time: "11:30", title: "町家里的午餐", text: "选一家真正想再去一次的小店，慢慢吃。" },
      { time: "14:30", title: "东山散步", text: "穿过石板路、茶屋与安静的小巷。" },
      { time: "17:30", title: "鸭川的黄昏", text: "以河边的光线为一天收尾，再给你晚餐建议。" },
    ],
    whyKicker: "THE JPTour WAY",
    whyTitle: "少一点攻略感，多一点在地感。",
    reasons: [
      { icon: "✦", title: "节奏留白", text: "不把行程排到分钟；好风景和好咖啡都值得停一会。" },
      { icon: "◎", title: "真诚推荐", text: "不把你带进强制购物点；每一个选择都有原因。" },
      { icon: "↗", title: "说你的语言", text: "中、英、日沟通无压力；出发前的问题也会认真回答。" },
    ],
    reviewsKicker: "GUEST NOTES",
    reviewsTitle: "每一次相遇，都是下一次出发的理由。",
    reviewNotice: "以下为版式示例。正式上线前，请替换为已获授权的真实评价，并标注评价来源与日期。",
    ctaTitle: "准备好，认识一个不一样的日本了吗？",
    ctaText: "查看平台上的最新可订日期和价格；支付与订单将由对应平台安全处理。",
    ctaButton: "查看可订行程",
    contact: "LINE / WhatsApp 咨询",
    footer: "小团日本一日游 · Kyoto / Nara / Osaka",
    legal: "部分链接会跳转至第三方预订平台。请在正式上线时补充合作关系与佣金披露。",
    book: "去预订",
    language: "语言",
  },
  en: {
    nav: ["Experiences", "A day in Kyoto", "Why JPTour", "Guest notes"],
    heroEyebrow: "JAPAN, AT A GENTLER PACE",
    heroTitle: <>See Japan <em>beyond the checklist.</em></>,
    heroText: "Less rushing, more noticing. Spend a beautifully paced day in Kyoto, Nara or Osaka with people who know the rhythm of the city.",
    primaryCta: "Explore experiences",
    secondaryCta: "Talk to JPTour",
    proof: ["Small groups", "EN · 中文 · 日本語", "Book for today"],
    heroNote: "Kyoto · Nara · Osaka",
    featuredKicker: "PICK YOUR DAY",
    featuredTitle: "Give one place a day of your full attention.",
    featuredText: "Morning gates, machiya lunches and a bowl of noodles at dusk. Every route is for first visits — and the return trips that follow.",
    discover: "See the day",
    itinerary: "Private day route",
    hours: "Around 8 hours",
    guestCount: "2–8 guests",
    routeKicker: "A DAY IN KYOTO",
    routeTitle: "Kyoto, without just checking it off.",
    routeText: "We weave landmark moments and breathing room into one day. Stops adapt to weather, season and the crowd, so it always feels unhurried.",
    steps: [
      { time: "08:30", title: "Fushimi Inari, early", text: "Walk through vermilion gates before the city wakes up." },
      { time: "11:30", title: "Lunch in a machiya", text: "A little place you will want to return to, not rush through." },
      { time: "14:30", title: "An East Kyoto wander", text: "Stone lanes, tea houses and the quieter turns in between." },
      { time: "17:30", title: "Dusk on the Kamo", text: "End in soft river light, with dinner ideas for later." },
    ],
    whyKicker: "THE JPTour WAY",
    whyTitle: "Less guidebook. More lived-in Japan.",
    reasons: [
      { icon: "✦", title: "Room to breathe", text: "No minute-by-minute marching. Great views and great coffee deserve a pause." },
      { icon: "◎", title: "Recommendations with heart", text: "No forced shopping stops — every recommendation has a reason behind it." },
      { icon: "↗", title: "Your language", text: "Easy support in English, Chinese and Japanese — before and during your trip." },
    ],
    reviewsKicker: "GUEST NOTES",
    reviewsTitle: "Every good day becomes a reason to come back.",
    reviewNotice: "Layout sample only. Before publishing, replace with authorised guest reviews and show each review’s source and date.",
    ctaTitle: "Ready to meet a different side of Japan?",
    ctaText: "Check the latest dates and prices on our booking partners. Payments and orders are securely handled by the selected platform.",
    ctaButton: "View available dates",
    contact: "Ask us on LINE / WhatsApp",
    footer: "Small-group days in Japan · Kyoto / Nara / Osaka",
    legal: "Some links lead to third-party booking platforms. Add a clear partnership and affiliate disclosure before launch.",
    book: "Book this day",
    language: "Language",
  },
  ja: {
    nav: ["ツアー", "京都の一日", "JPTourについて", "旅の声"],
    heroEyebrow: "JAPAN, AT A GENTLER PACE",
    heroTitle: <>日本を、<em>もう少し深く歩く。</em></>,
    heroText: "急がず、詰め込まず。京都、奈良、大阪の街のリズムを知る人と、心地よい一日を過ごしませんか。",
    primaryCta: "ツアーを見る",
    secondaryCta: "JPTourに相談する",
    proof: ["少人数制", "日・英・中文対応", "当日予約相談可"],
    heroNote: "Kyoto · Nara · Osaka",
    featuredKicker: "PICK YOUR DAY",
    featuredTitle: "ひとつの場所と、丸一日ゆっくり向き合う。",
    featuredText: "朝の鳥居、町家での昼食、夕暮れの一杯。初めての日本にも、また訪れたい日本にも似合うルートです。",
    discover: "詳しく見る",
    itinerary: "プライベート一日コース",
    hours: "約8時間",
    guestCount: "2〜8名の少人数",
    routeKicker: "A DAY IN KYOTO",
    routeTitle: "チェックリストだけではない、京都。",
    routeText: "定番の見どころと余白の時間を、一日の中にほどよく織り込みます。天候や季節、人出に合わせて、立ち寄り先も心地よく調整します。",
    steps: [
      { time: "08:30", title: "早朝の伏見稲荷", text: "街が目覚める前、朱色の鳥居と山道へ。" },
      { time: "11:30", title: "町家で昼ごはん", text: "急がずに味わいたい、小さな一軒を選びます。" },
      { time: "14:30", title: "東山を歩く", text: "石畳、茶屋、そして静かな路地をゆっくりと。" },
      { time: "17:30", title: "鴨川の夕暮れ", text: "やわらかな川辺の光で一日を締めくくり、夜の提案も。" },
    ],
    whyKicker: "THE JPTour WAY",
    whyTitle: "ガイドブックより、暮らしに近い日本へ。",
    reasons: [
      { icon: "✦", title: "余白のある旅", text: "分刻みで移動しません。景色もコーヒーも、立ち止まる時間を大切に。" },
      { icon: "◎", title: "心からのおすすめ", text: "強制的な買い物はありません。すべての提案に理由があります。" },
      { icon: "↗", title: "あなたの言葉で", text: "日本語・英語・中国語で、旅の前から安心してご相談いただけます。" },
    ],
    reviewsKicker: "GUEST NOTES",
    reviewsTitle: "いい一日は、また訪れたくなる理由になる。",
    reviewNotice: "レイアウト用のサンプルです。公開前に、許可を得た実際の口コミと出典・日付に差し替えてください。",
    ctaTitle: "いつもと少し違う日本に、会いに行きませんか。",
    ctaText: "最新の空き状況と料金は予約プラットフォームでご確認ください。決済と注文は各プラットフォームが安全に処理します。",
    ctaButton: "空き日程を見る",
    contact: "LINE / WhatsAppで相談",
    footer: "少人数で巡る日本の一日 · Kyoto / Nara / Osaka",
    legal: "一部のリンクは第三者予約プラットフォームに移動します。公開前に提携・報酬に関する表記を追加してください。",
    book: "予約する",
    language: "言語",
  },
};

const tours = [
  {
    city: "KYOTO",
    title: { zh: "京都的光，慢慢看", en: "Kyoto, softly lit", ja: "光を追う、京都の一日" },
    text: { zh: "鸟居、町家与河畔黄昏。把第一次京都留得从容一点。", en: "Gates, machiya and river dusk — an unhurried first meeting with Kyoto.", ja: "鳥居、町家、川辺の夕暮れ。初めての京都を、ゆったりと。" },
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85",
    alt: "Kyoto street at dusk",
    tint: "orange",
  },
  {
    city: "NARA",
    title: { zh: "奈良，与鹿相遇", en: "Nara, with gentle company", ja: "奈良、鹿と歩く時間" },
    text: { zh: "古寺、林间、鹿的回眸。一条更轻松的奈良散步线。", en: "Ancient temples, woodland and a deer’s curious glance. Nara at its gentlest.", ja: "古寺、森、鹿のまなざし。ゆるやかに歩く奈良の道。" },
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=85",
    alt: "Deer in Nara park",
    tint: "green",
  },
  {
    city: "OSAKA",
    title: { zh: "大阪，吃进城市里", en: "Osaka, one bite at a time", ja: "大阪を、ひと口ずつ" },
    text: { zh: "从市场的香气到巷口的笑声，用味觉认识大阪。", en: "From market aromas to neighbourhood laughter: taste your way into Osaka.", ja: "市場の香りから路地の笑い声まで。味覚で出会う大阪。" },
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=85",
    alt: "Dotonbori Osaka at night",
    tint: "purple",
  },
];

const reviews = [
  { quote: "A day that felt like a friend showing us their favourite corners of Kyoto.", author: "Maya L.", source: "Klook · Demo" },
  { quote: "The pace was perfect — we saw a lot, but never felt hurried.", author: "Kevin C.", source: "Trip.com · Demo" },
  { quote: "食事も景色も大満足。写真だけでは伝わらない京都でした。", author: "Yuki S.", source: "KKday · Demo" },
];

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function MenuIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18" /></svg>;
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="JPTour home">
      <img src="/WonderGo_Logo_Main.png" alt="WonderGo" />
    </a>
  );
}

function LanguageSelect({ locale, label }: { locale: Locale; label: string }) {
  return (
    <label className="language-select">
      <span className="sr-only">{label}</span>
      <select
        value={locale}
        onChange={(event) => { window.location.href = `/${event.target.value}/`; }}
        aria-label={label}
      >
        <option value="zh">中文</option>
        <option value="en">EN</option>
        <option value="ja">日本語</option>
      </select>
    </label>
  );
}

export default function JPTourHome({ locale }: { locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[locale];

  return (
    <main id="top">
      <section className="hero-shell">
        <header className="site-header container">
          <Logo />
          <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Primary navigation">
            {t.nav.map((item, index) => <a onClick={() => setMenuOpen(false)} key={item} href={["#experiences", "#kyoto", "#why", "#notes"][index]}>{item}</a>)}
            <span className="mobile-language"><LanguageSelect locale={locale} label={t.language} /></span>
          </nav>
          <div className="header-tools">
            <LanguageSelect locale={locale} label={t.language} />
            <a href="#book" className="header-cta">{t.book} <Arrow /></a>
            <button className="menu-button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><MenuIcon /></button>
          </div>
        </header>

        <div className="hero container">
          <div className="hero-copy reveal">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-description">{t.heroText}</p>
            <div className="hero-actions">
              <a className="button button-saffron" href="#experiences">{t.primaryCta} <Arrow /></a>
              <a className="text-button" href="#contact">{t.secondaryCta} <span>↓</span></a>
            </div>
            <ul className="proof-list">
              {t.proof.map((item) => <li key={item}><span>✦</span>{item}</li>)}
            </ul>
          </div>
          <div className="hero-visual reveal-delay">
            <div className="sun-disc" />
            <div className="hero-image-wrap">
              <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1400&q=90" alt="Path through bamboo in Japan" />
            </div>
            <div className="route-stamp"><span>35°01′N</span><b>{t.heroNote}</b><span>135°46′E</span></div>
            <div className="hero-caption"><span>01</span><i /> JAPAN, SLOWLY</div>
          </div>
        </div>
        <div className="scroll-cue"><span>SCROLL TO WANDER</span><i /></div>
      </section>

      <section id="experiences" className="section experiences-section container">
        <div className="section-heading wide-heading">
          <div><p className="eyebrow">{t.featuredKicker}</p><h2>{t.featuredTitle}</h2></div>
          <p>{t.featuredText}</p>
        </div>
        <div className="tour-grid">
          {tours.map((tour, index) => (
            <article className={`tour-card tour-${tour.tint}`} key={tour.city}>
              <img src={tour.image} alt={tour.alt} />
              <div className="tour-shade" />
              <div className="tour-top"><span>{tour.city}</span><span>0{index + 1}</span></div>
              <div className="tour-content">
                <p>{t.itinerary}</p>
                <h3>{tour.title[locale]}</h3>
                <div className="tour-bottom"><span>{tour.text[locale]}</span><a href="#book" aria-label={`${t.discover}: ${tour.title[locale]}`}><Arrow /></a></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="kyoto" className="route-section">
        <div className="container route-layout">
          <div className="route-image">
            <img src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=85" alt="Japanese temple and autumn leaves" />
            <div className="route-image-label"><span>JP / 26</span><i /> KYOTO</div>
          </div>
          <div className="route-copy">
            <p className="eyebrow">{t.routeKicker}</p>
            <h2>{t.routeTitle}</h2>
            <p className="route-description">{t.routeText}</p>
            <div className="route-meta"><span>◷ {t.hours}</span><span>◌ {t.guestCount}</span></div>
            <ol className="timeline">
              {t.steps.map((step) => <li key={step.time}><time>{step.time}</time><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}
            </ol>
            <a className="underlined-link" href="#book">{t.discover} <Arrow /></a>
          </div>
        </div>
      </section>

      <section id="why" className="section why-section container">
        <div className="section-heading centered-heading"><p className="eyebrow">{t.whyKicker}</p><h2>{t.whyTitle}</h2></div>
        <div className="reason-grid">
          {t.reasons.map((reason, index) => <article className="reason" key={reason.title}><span className="reason-number">0{index + 1}</span><div className="reason-icon">{reason.icon}</div><h3>{reason.title}</h3><p>{reason.text}</p></article>)}
        </div>
      </section>

      <section id="notes" className="notes-section">
        <div className="container">
          <div className="section-heading notes-heading"><div><p className="eyebrow">{t.reviewsKicker}</p><h2>{t.reviewsTitle}</h2></div><span className="note-mark">“</span></div>
          <div className="review-grid">
            {reviews.map((review) => <blockquote key={review.author}><div className="stars">★★★★★</div><p>“{review.quote}”</p><footer><span>{review.author}</span><small>{review.source}</small></footer></blockquote>)}
          </div>
          <p className="review-notice">{t.reviewNotice}</p>
        </div>
      </section>

      <section id="book" className="booking-section container">
        <div className="booking-card">
          <div className="booking-ornament" aria-hidden="true">✺</div>
          <p className="eyebrow">YOUR NEXT DAY OUT</p>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
          <div className="partner-links">
            <a href="https://www.klook.com/" target="_blank" rel="noreferrer">Klook <Arrow /></a>
            <a href="https://www.kkday.com/" target="_blank" rel="noreferrer">KKday <Arrow /></a>
            <a href="https://www.trip.com/" target="_blank" rel="noreferrer">Trip.com <Arrow /></a>
          </div>
          <a className="text-button light" href="#contact">{t.contact} <span>↓</span></a>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="container footer-top"><Logo /><p>{t.footer}</p><div><a href="mailto:hello@jptour.example">hello@jptour.example</a><a href="https://line.me/" target="_blank" rel="noreferrer">LINE</a><a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">WhatsApp</a></div></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} JPTour</span><span>{t.legal}</span></div>
      </footer>
    </main>
  );
}


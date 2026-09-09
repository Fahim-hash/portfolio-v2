import { ArrowUpRight, ArrowDown } from "lucide-react";

const projects = [
  ["01", "NEXORA", "Brand Identity · Art Direction", "2025"],
  ["02", "AAROH", "Identity · Digital Experience", "2025"],
  ["03", "AKSARA", "Editorial · Visual System", "2024"],
  ["04", "ORION", "Campaign · Social Design", "2024"],
  ["05", "WIDE", "Creative Direction · Digital", "2024"],
  ["06", "EVERGLOW GEMS", "E-commerce · Product Design", "2024"],
];

export default function Home() {
  return <main>
    <div className="wrap">
      <nav className="nav">
        <a className="brand" href="#top">FAHIM<span style={{color:"#c8ff32"}}>.</span></a>
        <div className="navlinks"><a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></div>
        <a className="pill" href="#contact">LET'S TALK ↗</a>
      </nav>

      <section id="top" className="hero">
        <div className="eyebrow mono">Graphic designer / Creative technologist / Dhaka</div>
        <h1>I MAKE<br/><em>IDEAS</em> LOOK<br/>IMPOSSIBLE<br/>TO IGNORE.</h1>
        <div className="hero-bottom">
          <p className="intro">I’m Fahim — a multidisciplinary designer building identities, campaigns and digital experiences with equal parts strategy, curiosity and obsession over details.</p>
          <div className="scroll mono">Scroll to explore <ArrowDown size={14} style={{verticalAlign:"middle",marginLeft:6}}/></div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="section-head"><h2>Selected work</h2><span className="mono">06 projects / 2024—25</span></div>
        <div className="projects">{projects.map(([n,title,meta,year])=><a className="project" href="#contact" key={title}>
          <div className="visual"><span className="mono" style={{position:"absolute",top:18,left:18,fontSize:11}}>0{n.replace("0","")} / {year}</span></div>
          <div className="project-info"><span className="project-title">{title}</span><span className="project-meta">{meta}</span></div>
        </a>)}</div>
      </section>

      <section id="about" className="section">
        <div className="section-head"><h2>About</h2><span className="mono">A little context</span></div>
        <div className="about-grid"><p className="big-copy">Design is not decoration. It’s the moment an idea becomes <i>felt.</i> I turn messy problems into clear visual stories people remember.</p>
          <div className="details"><div className="detail"><h3>Approach</h3><p>Research first. Make the invisible visible. Strip away the noise, find the sharpest idea, then build a visual language around it.</p></div><div className="detail"><h3>Currently</h3><p>Exploring the intersection of graphic design, creative coding, digital products and culture — while making things that deserve to exist.</p></div><div className="detail"><h3>Based in</h3><p>Dhaka, Bangladesh<br/>Available worldwide<br/>Remote / Hybrid / On-site</p></div><div className="detail"><h3>Outside the screen</h3><p>Music, cinema, typography, street culture, late-night ideas and collecting references that somehow become projects.</p></div></div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-head"><h2>What I do</h2><span className="mono">From zero → launch</span></div>
        <div className="services">{[["01","Brand identity","Strategy · Naming · Visual systems"],["02","Art direction","Campaigns · Editorial · Social"],["03","Digital design","Web · UI · Product experiences"],["04","Creative technology","Interactive · Motion · Experiments"]].map(x=><div className="service" key={x[0]}><span className="service-num">{x[0]}</span><h3>{x[1]}</h3><span>{x[2]}</span></div>)}</div>
      </section>
    </div>

    <section id="contact" className="contact"><div className="wrap"><div className="eyebrow mono" style={{color:"#a7a59d"}}>Have a project in mind?</div><h2>LET'S MAKE<br/>SOMETHING <span>WORTH<br/>TALKING ABOUT.</span></h2><div className="contact-row"><a className="email" href="mailto:hello@fahim.design">hello@fahim.design <ArrowUpRight size={26}/></a><div className="socials"><a href="https://www.behance.net/">BEHANCE ↗</a><a href="https://www.linkedin.com/">LINKEDIN ↗</a><a href="https://github.com/Fahim-hash">GITHUB ↗</a></div></div></div></section>
    <div className="wrap footer"><span>© 2026 FAHIM / ALL RIGHTS RESERVED</span><span>DESIGNED & BUILT WITH INTENT.</span></div>
  </main>;
}

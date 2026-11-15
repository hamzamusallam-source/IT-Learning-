/* Hamza IT Learning — shared header, mega menu, footer.
   Edit SITE below to change the menu everywhere on the site. */

const SITE = [
  { key: "infra", name: "Infrastructure", about: "The machines, systems and networks everything else runs on.", paths: [
    { n: "01", title: "IT Fundamentals & Infrastructure", page: "it-fundamentals.html", explore: "Explore Infrastructure",
      topics: ["Hardware & Components", "Operating Systems", "Server Administration", "Directory Services", "Virtualization", "Storage (SAN / NAS)", "Data Center Basics", "Troubleshooting"] },
    { n: "02", title: "Networking & Connectivity", page: "networking.html", explore: "Explore Networking",
      topics: ["OSI & TCP/IP", "IP Addressing & Subnetting", "Switching & VLANs", "Routing", "DNS & DHCP", "Wireless", "WAN & SD-WAN", "Network Monitoring"] } ] },

  { key: "security", name: "Security", about: "Protecting systems, identities and data, and responding when something goes wrong.", paths: [
    { n: "03", title: "Cybersecurity", page: "cybersecurity.html", explore: "Explore Cybersecurity",
      topics: ["Security Fundamentals", "Network Security", "Identity & Access (IAM)", "Endpoint Security", "Zero Trust", "SOC & SIEM", "Threat Intelligence", "Incident Response", "Ethical Hacking", "Security Awareness"] } ] },

  { key: "cloud", name: "Cloud", about: "Where workloads run today: service models, hybrid and multi-cloud, security and cost.", paths: [
    { n: "04", title: "Cloud Computing", page: "cloud-computing.html", explore: "Explore Cloud",
      topics: ["Cloud Fundamentals", "IaaS / PaaS / SaaS", "Hybrid Cloud", "Multi-Cloud", "Cloud Networking", "Cloud Security", "FinOps", "Cloud DR"] } ] },

  { key: "ai", name: "AI", about: "Artificial intelligence from first principles to generative models, RAG and agents.", paths: [
    { n: "05", title: "Artificial Intelligence", page: "artificial-intelligence.html", explore: "Explore AI",
      topics: ["AI Fundamentals", "Machine Learning", "Generative AI", "LLMs", "Prompt Engineering", "RAG", "AI Agents", "MLOps"] } ] },

  { key: "data", name: "Data", about: "Storing data reliably and turning it into decisions.", paths: [
    { n: "06", title: "Data & Analytics", page: "data-analytics.html", explore: "Explore Analytics",
      topics: ["Data Fundamentals", "SQL for Analysis", "Data Modelling", "ETL & Pipelines", "Warehouses & Lakes", "Dashboards & BI", "Data Quality", "Data Governance"] },
    { n: "07", title: "Database Management Systems", page: "databases.html", explore: "Explore Databases",
      topics: ["Relational Design", "SQL & PL/SQL", "Installation & Configuration", "Security & Auditing", "Backup & Recovery", "Performance Tuning", "High Availability", "Replication"] } ] },

  { key: "apps", name: "Business Apps", about: "The enterprise systems that run finance, supply chain and operations.", paths: [
    { n: "08", title: "ERP & Enterprise Applications", page: "erp.html", explore: "Explore ERP",
      topics: ["ERP Fundamentals", "Finance", "Supply Chain", "Inventory", "Purchasing", "Manufacturing", "ERP Administration", "Integration & APIs"] } ] },

  { key: "ops", name: "IT Operations", about: "Keeping services running, shipping changes safely, and recovering fast.", paths: [
    { n: "09", title: "DevOps & Automation", page: "devops.html", explore: "Explore DevOps",
      topics: ["DevOps Culture", "Version Control", "CI/CD", "Containers", "Orchestration", { t: "Kubernetes", href: "kubernetes.html" }, "Infrastructure as Code", "Scripting", "Observability"] },
    { n: "10", title: "Backup, DR & Business Continuity", page: "backup-dr.html", explore: "Explore Backup & DR",
      topics: ["Backup Strategy", "3-2-1 Rule", "RPO & RTO", "Replication", "DR Sites", "Ransomware Recovery", "Business Continuity Plan", "DR Testing"] },
    { n: "11", title: "IT Service Management", page: "itsm.html", explore: "Explore ITSM",
      topics: ["ITIL 4", "Service Desk", "Incident Management", "Problem Management", "Change Management", "SLAs", "Monitoring & NOC", "CMDB"] } ] },

  { key: "strategy", name: "Management & Strategy", about: "Planning technology at the organisation level and keeping it under control.", paths: [
    { n: "12", title: "Enterprise Architecture & Digital Transformation", page: "enterprise-architecture.html", explore: "Explore EA & DT",
      topics: ["Enterprise Architecture", "TOGAF", "Capability Mapping", "Digital Strategy", "Process Redesign", "E-Services", "Change Management", "Vision 2030"] },
    { n: "13", title: "IT Governance, Risk & Compliance", page: "grc.html", explore: "Explore GRC",
      topics: ["IT Governance", "COBIT", "Risk Management", "ISO 27001", "NCA ECC", "PDPL", "IT Audit", "Policies & Procedures"] } ] }
];

/* ---------- helpers ---------- */
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const slug = s => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const here = location.pathname.split("/").pop() || "index.html";
const currentCat = (SITE.find(c => c.paths.some(p => p.page === here || p.topics.some(t => t.href === here))) || {}).key;

/* ---------- header ---------- */
function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const buttons = SITE.map(c =>
    `<button class="nav-cat${c.key === currentCat ? " cur" : ""}" type="button" data-m="${c.key}" aria-expanded="false">${esc(c.name)} <i>▾</i></button>`).join("");
  const panels = SITE.map(c => {
    const cols = c.paths.map(p => `
      <div class="mp-col">
        <a class="mp-h" href="${p.page}">${esc(p.title)}</a>
        <ul class="${c.paths.length === 1 ? "two" : ""}">${p.topics.map(t => typeof t === "string" ? `<li><a href="${p.page}#${slug(t)}">${esc(t)}</a></li>` : `<li><a href="${t.href}">${esc(t.t)} <span class="mp-new">Guide</span></a></li>`).join("")}</ul>
        <a class="mp-ex" href="${p.page}">${esc(p.explore)} →</a>
      </div>`).join("");
    return `<div class="mega" data-m="${c.key}" aria-hidden="true"><div class="wrap mp">
      <div class="mp-intro"><button class="mp-back" type="button">← All categories</button><h3>${esc(c.name)}</h3><p>${esc(c.about)}</p></div>
      <div class="mp-cols n${c.paths.length}">${cols}</div></div></div>`;
  }).join("");
  el.className = "site-header";
  el.innerHTML = `
    <div class="wrap">
      <a href="index.html" class="logo"><span class="logo-mark"><span></span></span>Hamza <b>IT Learning</b></a>
      <nav class="nav" id="nav"><a href="index.html" class="nav-home${here === "index.html" ? " cur" : ""}">Home</a>${buttons}</nav>
      <button class="menu-toggle" id="menuBtn" type="button">Menu</button>
    </div>${panels}`;
  const scrim = document.createElement("div");
  scrim.className = "scrim";
  document.body.appendChild(scrim);

  const nav = el.querySelector("#nav"), menuBtn = el.querySelector("#menuBtn");
  const btns = [...el.querySelectorAll(".nav-cat")], megas = [...el.querySelectorAll(".mega")];
  const mobile = () => matchMedia("(max-width:1180px)").matches;
  let open = null, t;
  const show = k => {
    open = k;
    megas.forEach(m => { const on = m.dataset.m === k; m.classList.toggle("open", on); m.setAttribute("aria-hidden", !on); });
    btns.forEach(b => b.setAttribute("aria-expanded", b.dataset.m === k));
    scrim.classList.toggle("open", !!k);
    if (k && mobile()) nav.classList.remove("open");
  };
  btns.forEach(b => {
    b.onclick = () => show(open === b.dataset.m ? null : b.dataset.m);
    b.onmouseenter = () => { if (mobile()) return; clearTimeout(t); t = setTimeout(() => show(b.dataset.m), open ? 0 : 120); };
  });
  el.onmouseleave = () => { if (mobile()) return; clearTimeout(t); t = setTimeout(() => show(null), 250); };
  el.onmouseenter = () => clearTimeout(t);
  scrim.onclick = () => { show(null); nav.classList.remove("open"); };
  document.addEventListener("keydown", e => { if (e.key === "Escape") show(null); });
  menuBtn.onclick = () => { if (open) { show(null); nav.classList.add("open"); return; } nav.classList.toggle("open"); };
  el.querySelectorAll(".mp-back").forEach(b => b.onclick = () => { show(null); nav.classList.add("open"); });
  el.querySelectorAll(".mega a").forEach(a => a.addEventListener("click", () => show(null)));
}

/* ---------- footer ---------- */
function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.className = "site-footer";
  el.innerHTML = `<div class="wrap">
    <span>© ${new Date().getFullYear()} Hamza IT Learning · Made in Riyadh</span>
    <nav><a href="index.html">Home</a><a href="about.html">About</a></nav>
  </div>`;
}

/* ---------- table of contents on path pages ---------- */
function renderToc() {
  const toc = document.getElementById("toc");
  if (!toc) return;
  const secs = [...document.querySelectorAll(".article section[id]")];
  toc.innerHTML = `<div class="toc-t">In this path</div><ol>${secs.map(s =>
    `<li><a href="#${s.id}">${esc(s.dataset.title || s.querySelector("h2").childNodes[s.querySelector("h2").childNodes.length - 1].textContent.trim())}</a></li>`).join("")}</ol>`;
  const links = [...toc.querySelectorAll("a")];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(l => l.classList.toggle("on", l.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-30% 0px -60% 0px" });
  secs.forEach(s => io.observe(s));
}

/* ---------- gentle reveal ---------- */
function reveal() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .1 });
  document.querySelectorAll(".rv").forEach(el => io.observe(el));
}

renderHeader();
renderFooter();
renderToc();
reveal();

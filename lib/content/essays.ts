export type EssayCategory =
  | "framework"
  | "essay"
  | "field-note"
  | "profitability-index";

export type Essay = {
  slug: string;
  category: EssayCategory;
  categoryLabel: string;
  title: string;
  dek: string;
  author: string;
  authorRole: string;
  publishedISO: string;
  readingTime: string;
  body: string;
  authorBio?: string;
  isPlaceholder?: boolean;
};

const PLACEHOLDER_BODY = `<p>Full essay published soon.</p>`;

// NOTE: Every entry below is a layout placeholder. Authors and dates are
// illustrative; replace each entry with editor-approved copy before shipping.
export const ESSAYS: readonly Essay[] = [
  {
    slug: "transactional-velocity",
    category: "framework",
    categoryLabel: "Framework",
    title: "Forget Sales. It's Time to Build Transactional Velocity.",
    dek: "Sales is a lagging indicator. Transactional velocity is the leading one — the rate at which a brand turns intention into purchase, repeatedly.",
    author: "Ahamed Shine",
    authorRole:
      "Founder & Principal Consultant — Strategy and Innovation, BBP India",
    publishedISO: "2026-02-14",
    readingTime: "10 min read",
    body: `
<h2>Why "Sales" Is an Outdated Metric</h2>
<p>In a world where jobs are disappearing, consumer behaviour is shifting faster than algorithms can adapt, and AI is redefining every operating system — the word "sales" feels outdated. What organisations truly need is <em>transactional velocity</em>: repeatable, meaningful, profitable transactions — not just at the cash counter, but across every touchpoint: digital, physical, internal, and external.</p>

<h2>The Organisational Crisis of Relevance</h2>
<p>Here's the uncomfortable truth: most businesses aren't ready for this future. They're structured for control — not speed. They idolise hierarchy — not outcomes. They prioritise internal reviews over customer conversations.</p>
<p>This mismatch is not just inefficient. It's dangerous. Now is the time. Organisations must undergo an urgent structural revamp — not just to grow, but to stay alive.</p>
<p>Forget old-school org charts, dotted lines, and title inflation. BBP has developed a specific <strong>3-Layered Transformation Model</strong> built for velocity, relevance, and execution.</p>

<h3>a) Visionaries — The Architects of Purpose</h3>
<p>Not CEOs. Not founders. But clarity-obsessed builders of the future. They set the vision, define the North Star, and create the policies that drive intent and direction. They don't run the machine. They design the blueprint.</p>

<h3>b) Integrators — The Strategists of Structure</h3>
<p>These are the nervous system of the organisation. Integrators translate vision into strategy, build internal processes, define KPIs, and install accountability systems. They align structure with outcomes — not just with departments.</p>

<h3>c) Leadership — The Drivers of Real-Time Execution</h3>
<p>Leadership isn't a title anymore — it's a function. BBP's model empowers front-line leaders to execute, audit, and adapt in real time. They don't just manage — they drive transformation through a unique operating loop called the Rectangular Loop.</p>

<h2>The Rectangular Loop — A Core Operating Framework developed by BBP</h2>
<p>Every transformation needs a mechanism — not just a strategy. At BBP, we use the Rectangular Loop — a continuous evolution cycle that connects four functions most organisations treat as separate.</p>
<p><strong>Process → Culture → Experience → Business.</strong></p>

<h3>Process</h3>
<p>Design simplified, scalable systems aligned with the vision. Cut complexity. Build velocity.</p>

<h3>Culture</h3>
<p>Shape behaviours, rituals, and internal narratives that reinforce the process. Culture is how vision shows up in everyday work.</p>

<h3>Experience</h3>
<p>Engineer signature experiences — for customers, employees, and partners — that embody the culture and express the brand.</p>

<h3>Business</h3>
<p>Deliver consistent, profitable, and measurable transactions. Not just sales — but velocity-driven, brand-aligned business.</p>

<p>And then the loop repeats — sharper, faster, smarter.</p>

<h2>Why This Model Works</h2>
<p>Because it's not about scaling departments. It's about scaling intent.</p>
<ul>
<li>It eliminates redundancy.</li>
<li>It clarifies ownership.</li>
<li>It prioritises action over appearance.</li>
<li>It turns every role into a transaction enabler.</li>
</ul>

<h2>So — How Do You Increase Transactions?</h2>
<p>You stop obsessing over "sales." You rebuild your organisation for velocity. You align every function to one truth: make it easy, valuable, and repeatable for someone to transact with you.</p>
<p>That's what BBP builds — future-ready, transaction-first organisations.</p>
`.trim(),
    authorBio:
      "Ahamed Shine is the founder and principal consultant at BBP India, a future-focused business and brand consultancy known for driving strategic transformation across industries. With nearly two decades of cross-sector expertise, he specialises in building innovation-first, outcome-driven strategies that help organisations stay relevant, profitable, and future-ready.",
  },
  {
    slug: "strategic-inflection-point-ai",
    category: "essay",
    categoryLabel: "Essay",
    title: "Strategic Inflection Point in the Age of AI.",
    dek: "How businesses must reinvent or risk existence — a six-step framework for the AI inflection point.",
    author: "Ahamed Shine",
    authorRole: "Principal Consultant — Strategy & Innovation, BBP India",
    publishedISO: "2026-01-22",
    readingTime: "12 min read",
    body: `
<h2>Welcome to the new era of business transformation</h2>
<p>Every generation faces a defining shift — one that separates those who adapt from those who vanish. For this generation, that moment is now. Fuelled by the rapid evolution of Artificial Intelligence (AI), we are living through one of the most disruptive Strategic Inflection Points (SIP) in modern business history.</p>
<p>At BBP India, we've helped legacy brands and new-age businesses recognise, respond to, and reinvent themselves in the face of such inflection moments. And this AI-led inflection point is unlike any before.</p>

<h2>What is a Strategic Inflection Point?</h2>
<p>A Strategic Inflection Point is a critical turning point when the core assumptions of your business environment change so drastically that your current strategies, structures, and systems become obsolete.</p>
<p>Coined by Andy Grove of Intel, an SIP marks the moment where fundamental change is inevitable — and incremental improvement simply won't cut it. Inaction or delay almost always leads to decline.</p>
<p>Today, that inflection is being driven by Artificial Intelligence.</p>

<h2>Why AI is redefining business norms</h2>
<p>AI isn't just another wave of tech. It's the new operating system for growth, innovation, and decision-making. Here's what makes this AI shift so different:</p>
<ul>
<li><strong>It's exponential.</strong> AI evolves daily — not yearly. Delay is defeat.</li>
<li><strong>It's cross-functional.</strong> It touches every aspect of business — marketing, HR, supply chain, product, customer experience.</li>
<li><strong>It's disruptive.</strong> AI is replacing repetitive roles, collapsing hierarchies, and redefining value creation.</li>
<li><strong>It's predictive.</strong> You no longer react to data — you act on intelligent foresight.</li>
</ul>
<p>This is not digital transformation 2.0. This is a complete strategic re-engineering of how companies work, deliver, and scale.</p>

<h2>Is your business at a Strategic Inflection Point?</h2>
<p>You are if:</p>
<ul>
<li>Growth is slowing despite heavier marketing and manpower.</li>
<li>Your traditional differentiation is being erased by faster, AI-driven competitors.</li>
<li>Employees are unsure how to use AI tools productively.</li>
<li>Manual operations are outpacing customer expectations.</li>
<li>Your org chart looks like it was built for 2010, not 2025.</li>
</ul>
<p>If any of these feels familiar, you're not ahead of the curve — you're on it.</p>

<h2>The BBP framework to navigate Strategic Inflection Points</h2>
<p>At BBP India, we use a proven six-step transformation approach to help organisations pivot confidently during SIPs.</p>

<h3>1. Redefine your core vision</h3>
<ul>
<li>Move from what you sell to what intelligence you deliver.</li>
<li>Realign your mission with AI-native value creation.</li>
<li>Shift from fixed goals to a culture of continuous iteration.</li>
</ul>

<h3>2. Conduct a Strategic Inflection Audit</h3>
<ul>
<li>Identify vulnerable functions, high-potential AI use cases, and automation-ready processes.</li>
<li>Assess AI-readiness across departments.</li>
<li>Map blind spots in leadership, systems, and decision workflows.</li>
</ul>

<h3>3. Rebuild for an AI-first organisation</h3>
<ul>
<li>Dismantle silos. Flatten management layers.</li>
<li>Create AI-augmented pods for faster, data-driven decisions.</li>
<li>Replace static job roles with hybrid roles like "Growth Architect" or "Experience Intelligence Strategist."</li>
</ul>

<h3>4. Use AI to redesign customer experience</h3>
<ul>
<li>Move from personalisation to predictive interaction.</li>
<li>Use AI to anticipate customer needs, automate service, and hyper-target marketing.</li>
<li>Make your brand feel intelligent, interactive, and instant.</li>
</ul>

<h3>5. Upskill or obsolete — there's no middle ground</h3>
<ul>
<li>Launch AI literacy programs across your leadership and teams.</li>
<li>Embed AI prompts and decision tools into daily workflows.</li>
<li>Encourage an unlearning mindset — what worked before may now be a liability.</li>
</ul>

<h3>6. Prototype. Measure. Reinvent.</h3>
<ul>
<li>Launch low-risk pilots for AI-powered marketing, service, and content.</li>
<li>Apply a "2-month, 2-metric" rule — if it doesn't move two key metrics in 60 days, pivot fast.</li>
<li>Build internal micro-labs for constant reinvention.</li>
</ul>

<h2>BBP SIP Readiness Checklist</h2>
<p>Is your business AI-ready? Score yourself below — one point per "yes":</p>
<ul>
<li>AI roadmap integrated into business strategy.</li>
<li>30%+ of operations automated or augmented with AI.</li>
<li>Cross-functional teams working with AI tools.</li>
<li>Predictive CX systems in place.</li>
<li>AI literacy among top management.</li>
<li>Clear metrics to measure AI-driven performance.</li>
<li>Regular innovation sprints using AI.</li>
</ul>
<p>If you scored fewer than five, your organisation is still playing by pre-AI rules in a post-AI economy.</p>

<h2>Final thought — SIPs are inevitable. Reinvention is a choice.</h2>
<p>There are only two types of organisations in the age of AI:</p>
<ol>
<li>Those who see the shift, and redesign everything around it.</li>
<li>Those who miss the signal, and watch relevance evaporate.</li>
</ol>
<p>At BBP, we help brands and businesses not just respond to change — but lead it. The AI inflection point is your opportunity to build a faster, leaner, smarter business with agility, intelligence, and profitability at its core.</p>
<p><strong>Don't just survive the future. Architect it.</strong></p>
`.trim(),
    authorBio:
      "Ahamed Shine is the founder and principal consultant at BBP India, a future-focused business and brand consultancy known for driving strategic transformation across industries. With nearly two decades of cross-sector expertise, he specialises in building innovation-first, outcome-driven strategies that help organisations stay relevant, profitable, and future-ready.",
  },
  {
    slug: "icarus-paradox",
    category: "essay",
    categoryLabel: "Essay",
    title:
      "The Love That Kills — How Brand Obsession Becomes the Icarus Paradox.",
    dek: "The same conviction that builds a brand is the conviction that prevents it from changing. Why legacy is a memory, not a moat.",
    author: "Ahamed Shine",
    authorRole: "Principal Consultant — Strategy & Innovation, BBP India",
    publishedISO: "2025-12-08",
    readingTime: "8 min read",
    body: `
<p>In the boardrooms of legacy companies and the war rooms of fast-growing startups, there is one silent killer that sneaks in unnoticed — brand obsession.</p>
<p>Brand owners, founders, and custodians fall in love with the identity they've built. The logo, the legacy, the colour palette, the tagline that once sparked a thousand sales. It's all sacred. It's all untouchable. And slowly, that emotional high of "what once worked" becomes a cognitive blindfold.</p>
<p>That's where the Icarus Paradox begins to unfold.</p>

<h2>The Icarus trap in modern branding</h2>
<p>In Greek mythology, Icarus flew too close to the sun despite warnings. His wings, crafted from wax and feathers by his father Daedalus, melted under the sun's heat, plunging him to his death.</p>
<p>In business, the wings are made of success.</p>
<p>A brand that rises because of product superiority, great storytelling, or emotional connection often believes those same wings will carry it forever. But markets change. Consumers evolve. Platforms shift. And if the brand keeps flying with outdated wings, it crashes — just like Icarus.</p>

<h2>Brand obsession — the love story gone wrong</h2>
<p>Let's be clear: love for your brand is not the problem. Unquestioned love is.</p>
<p>Brand owners get obsessed with:</p>
<ul>
<li>A logo that's "too iconic to change."</li>
<li>A campaign that "once went viral."</li>
<li>A product line that "built the company."</li>
<li>A price point that "made us premium."</li>
</ul>
<p>They anchor themselves to these past victories as if they're truths carved in stone. But the brand landscape is not made of stone. It's liquid. And if your brand refuses to flow, it will drown.</p>

<h2>When brand identity becomes brand ego</h2>
<p>The danger begins when identity turns into ego.</p>
<ul>
<li>"Our customers love us for this."</li>
<li>"This is how we've always done it."</li>
<li>"People will come back, they always do."</li>
</ul>
<p>These are not strategy statements. They are denial mechanisms.</p>
<p>What follows is predictably tragic — the brand keeps investing in yesterday's playbook, missing emerging trends, alienating younger consumers, and slowly becoming irrelevant.</p>

<h2>Legacy isn't a lifeboat</h2>
<p>Kodak. Nokia. Blackberry. Yahoo. Brands that were once titans. Each had the resources, talent, and consumer base to evolve. What they lacked was the humility to question their own mythology.</p>
<p>Legacy is not a moat. It's a memory. And memory fades fast in a hyper-connected world. Your relevance is your only defence.</p>

<h2>Escaping the paradox — lessons for the future-obsessed brand owner</h2>

<h3>1. Fall in love with the customer, not the brand</h3>
<p>Brand obsession should be redirected to customer obsession. The only constant is their changing behaviour.</p>

<h3>2. Make reinvention a ritual</h3>
<p>Like Apple dropping the iPod in favour of the iPhone, or Burberry reinventing itself from a tired trench-coat brand into a luxury fashion powerhouse.</p>

<h3>3. Appoint heretics, not just loyalists</h3>
<p>Surround yourself with people who challenge the brand, not just worship it. Create a culture where killing sacred cows is encouraged.</p>

<h3>4. Audit relevance, not just performance</h3>
<p>Don't just measure how much your brand is selling. Ask how relevant it is across generations, geographies, and touchpoints.</p>

<h2>From wings to engines</h2>
<p>Brands that survive — and thrive — don't just fly. They rebuild their wings into engines that adapt, evolve, and accelerate. They don't just hold on to what made them great. They let go, strategically, so they can rise again.</p>
<p>Because in today's world, the sun is always shifting. And the only way not to fall is to fly smarter, not higher.</p>
`.trim(),
    authorBio:
      "Ahamed Shine is a strategy consultant and the founder of BBP India. He works at the intersection of brand, business, and transformation — helping legacy companies and new-age ventures reinvent for relevance, profit, and future-readiness.",
  },
  {
    slug: "icarus-paradox-marketing",
    category: "essay",
    categoryLabel: "Essay",
    title:
      "Love That Kills (Part 2) — How the Icarus Paradox is Quietly Killing Your Marketing.",
    dek: "In marketing, failure isn't the silent killer. Success is. Five ways past wins quietly destroy the next campaign — and how to fly with new wings.",
    author: "Ahamed Shine",
    authorRole: "Principal Consultant — Strategy & Innovation, BBP India",
    publishedISO: "2025-10-15",
    readingTime: "7 min read",
    body: `
<h2>Introduction</h2>
<p>In marketing, failure isn't the silent killer. Success is.</p>
<p>When something works — a viral campaign, a winning media mix, a clever positioning — marketers do what they've always done. Repeat. Refine. Replicate. But eventually, what once worked stops working. Audiences shift. Platforms evolve. Context changes. And brands? They fall.</p>
<p>Not because they weren't smart, but because they couldn't stop flying too close to the sun. This is the Icarus Paradox in modern marketing.</p>

<h2>What is the Icarus Paradox — rewritten for marketers?</h2>
<p>In Greek mythology, Icarus is given wings made of wax and feathers. He's warned not to fly too close to the sun. He does anyway. The wings melt. He falls.</p>
<p>In marketing, those wings are your past successes — campaigns, creatives, positioning, and platforms that once took you to the top. But instead of evolving them, we keep flying higher with the same wings. Until the sun shifts. And the fall begins.</p>

<h2>Five ways the Icarus Paradox destroys marketing from within</h2>

<h3>1. Recycling what worked — until it doesn't</h3>
<p>"Let's run the same playbook — just tweak the visuals." Sound familiar? The first campaign was a hit. You go back to the same influencers, the same ad format, the same CTA. By the fourth round, it's noise.</p>
<p><strong>Trap:</strong> you're looping success, not innovating.</p>

<h3>2. Clinging to legacy positioning</h3>
<p>You keep telling the world: "We're a premium brand." "Trusted since 1982." "India's most iconic." But the market is asking: "What's your stand on sustainability? What value do you add now?"</p>
<p><strong>Trap:</strong> you're marketing to a market that no longer exists.</p>

<h3>3. Budgeting for comfort, not performance</h3>
<p>Media planning becomes muscle memory. 60% to TV. 20% print. 20% digital. No budget for performance marketing. No Reels strategy. No creator collabs. No AI testing.</p>
<p><strong>Trap:</strong> you're spending for safety — not outcomes.</p>

<h3>4. Dismissing automation, AI, and data</h3>
<p>You pride yourself on "gut instinct." You resist dashboards. You think media buying is still about negotiation, not algorithms.</p>
<p><strong>Trap:</strong> you're nostalgic. The world is programmatic.</p>

<h3>5. Talking louder, in the wrong room</h3>
<p>Your ads are still targeting the 2017 persona. Same language. Same platform. Same logic. But your audience? They've moved. Platforms, interests, behaviours — all shifted.</p>
<p><strong>Trap:</strong> you're not being ignored. You're being outdated.</p>

<h2>Escaping the paradox — what smart marketing leaders do</h2>
<p>At BBP, we don't romanticise campaigns. We audit them. Relentlessly. Here's how you break the Icarus loop.</p>

<h3>a) Challenge what's working</h3>
<p>Treat even the best campaign as temporary. Question everything that's too easy to repeat.</p>

<h3>b) Audit for relevance, not just results</h3>
<p>Ask whether it is still solving the customer's current problem — not just how many views did it get.</p>

<h3>c) Budget for evolution</h3>
<p>Make space in your media and creative plans for bold experiments. If your media plan looks the same as last year, you're already behind.</p>

<h3>d) Shift with the audience</h3>
<p>Update personas every quarter. Recalibrate tone, value props, and targeting as the audience evolves.</p>

<h2>Final note — melted wings don't get second chances</h2>
<p>Marketing doesn't die from lack of ideas. It dies from overused ones.</p>
<p>If your team is still flying on wings built two years ago, take a moment to ask — has the sun moved? Because in this business, it always does. And when it does, the only brands that survive are the ones willing to build new wings, mid-air.</p>
`.trim(),
    authorBio:
      "Ahamed Shine is the founder and principal consultant at BBP India. He partners with brands and businesses navigating strategic inflection points, combining brand thinking, business strategy, and creative intelligence to build relevance — and revenue — in the age of disruption.",
  },
  {
    slug: "bury-the-fish",
    category: "field-note",
    categoryLabel: "Field Note",
    title: "It's Time to Bury the Fish.",
    dek: "After nine years, BBP retired Darwin's Fish. A note on what a wordmark earns, and what an organism outgrows.",
    author: "Ahamed Shine",
    authorRole: "Principal Consultant — Strategy and Innovation",
    publishedISO: "2025-09-30",
    readingTime: "6 min read",
    body: PLACEHOLDER_BODY,
    isPlaceholder: true,
  },
  {
    slug: "profitability-index-2026-preview",
    category: "profitability-index",
    categoryLabel: "The Profitability Index",
    title: "The India Brand Profitability Index — 2026 preview.",
    dek: "Three hundred brands. Six categories. One ranking. A first look at the methodology and what next year's index will measure.",
    author: "Dr. Sabira Nalakath",
    authorRole: "Principal Consultant — Research",
    publishedISO: "2025-11-12",
    readingTime: "9 min read",
    body: PLACEHOLDER_BODY,
    isPlaceholder: true,
  },
];

import { SphereArticleType, EArticleSourceType } from "@/types/sphere";
import { ISphereArticle } from "./sphere";
const placeholderImages = [
  "/sphere/article/case-1.jpg",
  "/sphere/article/case-2.jpg",
  "/sphere/article/case-3.jpg",
  "/sphere/article/case-4.jpg",
];

const items: ISphereArticle[] = [
  {
    id: "1",
    title:
      "💥 When Marketing Drives Billions: GSK’s $3.4B US vs. UK Settlement",
    description:
      "GSK, a leader in the pharmaceutical sector, developed breakthrough drugs through UK-based research and intellectual property. However, major value was also created through its intensive US marketing and distribution network. This difference in business functions sparked a fundamental question: Should profits be split based on where drugs are invented, or where they are branded and sold?\n\nGSK adopted a traditional TP structure: UK R&D entities owned patents and supplied the US affiliate, which handled all local marketing. This split mimicked industry norms before BEPS and the OECD overhaul on intangibles, with MNEs emphasizing legal ownership as the basis for profit allocation.",
    image: "",
    createdAt: "2025-08-27",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Original ruling",
      link: "https://www.irs.gov/pub/irs-news/ir-06-142.pdf",
      type: EArticleSourceType.PDF,
    },
    md: "1-GSK-Marketing-Intangibles.mdx",
    country: "US",
  },
  {
    id: "2",
    title: "🛒 Amazon’s Big Intangible Win: “No Place for Imaginary Value”",
    description:
      "Amazon’s digital business relies on massive, globally shared technology platforms. To align costs and profits cross-border, Amazon’s EU subsidiary participated in a cost-sharing arrangement for platform development. At the time, international practice around the scope of IP valuation was still evolving, and regulatory definitions of “intangibles” were narrower than today.",
    image: "",
    createdAt: "2025-08-25",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Official ruling",
      link: "https://appellatetax.com/wp-content/uploads/2019/05/Amazon.com-Tax-Court-Opinion.pdf",
      type: EArticleSourceType.PDF,
      loadable: true,
    },
    md: "2-Amazon-Intangibles-Buy-in.mdx",
    country: "US",
  },
  {
    id: "3",
    title: "🥤 No More Sacred Cows: Coca-Cola’s $3.3B Formula Fizzles",
    description:
      "Coca-Cola’s core profit engine has always relied on both secret formulas and global brand marketing—split across US and foreign affiliates. For decades, the IRS accepted a safe-harbor profit split that assigned a steady share to the US parent and bottling affiliates, based on legacy practices, not current benchmarks.\n\nBefore the BEPS push, longtime agreements and APAs (Advance Pricing Agreements) were typically respected if adhered to. But shifting business models and new benchmarking raised questions about whether such formulas still reflected economic reality.",
    image: "",
    createdAt: "2025-08-20",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Original ruling",
      link: "https://www.hollandhart.com/webfiles/2020-45427_TNTCourts_CocaCola.pdf",
      type: EArticleSourceType.PDF,
    },
    md: "3-CocaCola-Profit-Split-Fall.mdx",
    country: "US",
  },
  {
    id: "4",
    title: "🍏 The €13B Headache: “Stateless” Apple Profits Smashed by EU Law",
    description:
      "The tech industry’s rapid globalization spotlighted the use of low-tax jurisdictions within the EU—none more famous than Apple’s “stateless” Irish structures. By routing European profits to Irish holding companies without substantial local operations, Apple minimized its overall tax bill. This was standard practice before aggressive state aid enforcement and OECD intangibles guidance became mainstream.",
    image: "",
    createdAt: "2025-08-18",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Original judgment",
      link: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A62020CJ0465",
      type: EArticleSourceType.PDF,
    },
    md: "4-Apple-EU-State-Aid.mdx",
    country: "IE",
  },
  {
    id: "5",
    title:
      "🚗 Selectivity Scrutiny: Fiat’s Luxembourg Finance Structure Stands",
    description:
      "Automotive groups frequently tap favorable financial regimes within Europe, using group financing structures to optimize global funding costs. Fiat established a treasury center in Luxembourg, applying local TP rules to set intra-group lending rates—common practice before the EU’s broad state aid enforcement push.",
    image: "",
    createdAt: "2025-08-13",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Official judgment",
      link: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A62019CJ0885",
      type: EArticleSourceType.PDF,
    },
    md: "5-Fiat-EU-Selectivity.mdx",
    country: "LU",
  },
  {
    id: "6",
    title: "🍔 Big Mac Royale: A €1.25B Lesson in Royalty Substance",
    description:
      "Global retail and franchising models like McDonald’s hinge on the payment of royalties for brand, know-how, and business support. France, a key market, became ground zero for challenges to the cross-border payment of royalties to group entities in favored tax jurisdictions—in this case, Luxembourg.",
    image: "",
    createdAt: "2025-08-11",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Official settlement",
      link: "https://www.justice.gouv.fr/sites/default/files/2023-05/CJIP_TJ_paris_macdo_20220531.pdf",
      type: EArticleSourceType.PDF,
      loadable: true,
    },
    md: "6-McDonalds-France-Royalty-Substance.mdx",
    country: "FR",
  },
  {
    id: "7",
    title:
      "📊 Outlier, Not Out-of-Luck: Denmark’s Supreme Court Picks Proof Over Percentile",
    description:
      "In Denmark’s competitive tech and electronics sector, slim margins and shifting business models are normal. EET Group, an electronics distributor, reported affiliate profits outside Denmark’s statistical interquartile range (IQR), raising red flags in a jurisdiction known for strict numerical benchmarking.",
    image: "",
    createdAt: "2025-08-06",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Reference",
      link: "https://atlas.tax/en/news/landmark-transfer-pricing-ruling-favours-leading-europe-it-distributor/",
      type: EArticleSourceType.WEBSITE,
    },
    md: "7-Denmark-EET-Documentation.mdx",
    country: "DK",
  },
  {
    id: "8",
    title: "📡 Vodafone’s $2.2B Indian Indirect Transfer Stunner",
    description:
      "Telecom MNEs like Vodafone operate across complex group structures, especially in fast-growing markets like India. The company executed a major offshore M\\&A deal, acquiring control of an Indian subsidiary through foreign holding companies. At the time, Indian tax law’s reach into such “indirect” asset transfers was ambiguous.",
    image: "",
    createdAt: "2025-08-04",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Official judgment",
      link: "https://indiankanoon.org/doc/115852355/",
      type: EArticleSourceType.HTML,
    },
    md: "8-Vodafone-India-Indirect-Transfer.mdx",
    country: "IN",
  },
  {
    id: "9",
    title: "🔁 Audit Whiplash: SABIC India’s Benchmarking Win",
    description:
      "India’s manufacturing sector hosts many foreign MNEs, like SABIC, that provide marketing and support services to overseas group entities. Transfer pricing enforcement in India is robust, and authorities sometimes try to change accepted benchmarking to boost assessments.",
    image: "",
    createdAt: "2025-07-30",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Reference",
      link: "https://www.taxriskmanagement.com/delhi-high-court-vs-abic-india-transfer-pricing-case/",
      type: EArticleSourceType.WEBSITE,
    },
    md: "9-SABIC-India-Benchmarking.mdx",
    country: "IN",
  },
  {
    id: "10",
    title: "⛏️ Mining for Value: Australia’s A$1B Marketing Hub Settlement",
    description:
      "Australia’s prosperous mining sector heavily features resource giants like Rio Tinto, which established a Singapore marketing hub for selling locally mined ore. The hub centralized sales, marketing, and logistics for Asian and global buyers—a legitimate business model, but one with TP challenges on profit allocation.",
    image: "",
    createdAt: "2025-07-28",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Reference",
      link: "https://www.ato.gov.au/media-centre/ato-secures-settlement-of-marketing-hub-tax-dispute",
      type: EArticleSourceType.WEBSITE,
    },
    md: "10-RioTinto-Australia-MarketingHub.mdx",
    country: "AU",
  },
  {
    id: "11",
    title: "⚖️ Dow Canada: Getting the Right Court is Everything",
    description:
      "Global chemical leaders like Dow have layered supply chains and financing across geographies. In Canada, Dow sought to challenge a downward TP adjustment, prompting debate over whether the Tax Court or Federal Court had jurisdiction for such administrative matters.",
    image: "",
    createdAt: "2025-07-23",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Original ruling",
      link: "https://www.canlii.org/en/ca/scc/doc/2024/2024scc23/2024scc23.html",
      type: EArticleSourceType.HTML,
    },
    md: "11-Dow-Canada-Jurisdiction.mdx",
    country: "CA",
  },
  {
    id: "12",
    title: "💸 Czech LIBOR Letdown: RR Donnelley Beats the “Loan” Analogy",
    description:
      "In the Czech industrial sector, RR Donnelley’s local operations made frequent intercompany purchases from group entities. Authorities, amid a regional clampdown on profit shifting, began treating these payment terms as loans, applying LIBOR interest benchmarks—a trend growing across Central and Eastern Europe pre-OECD BEPS financial reforms.",
    image: "",
    createdAt: "2025-07-21",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Official summary & translation",
      link: "https://tpcases.com/wp-content/uploads/Czech-SAC-Feb-2025-ENG.htm",
      type: EArticleSourceType.WEBSITE,
    },
    md: "12-RRDonnelley-Czech-LIBOR.mdx",
    country: "CZ",
  },
  {
    id: "13",
    title:
      "🛢️ Malaysia’s Margin Battle: Sandakan Edible Oils Defends the Safe Harbor",
    description:
      "Malaysia’s export industries often rely on transfer pricing safe harbors through arms-length ranges (IQR). Sandakan Edible Oils, like many regional firms, set its reported profits within this range, even if not always at the median. Before BEPS/TP refinement, tax authorities were increasingly tempted to adjust results toward maximum revenue using the median alone.",
    image: "",
    createdAt: "2025-07-16",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Expert summary",
      link: "https://lh-ag.com/high-court-upholds-scits-landmark-transfer-pricing-decision-on-section-140a-income-tax-act-1967/",
      type: EArticleSourceType.WEBSITE,
    },
    md: "13-SandakanEdibleOils-Malaysia-IQR.mdx",
    country: "MY",
  },
  {
    id: "15",
    title:
      "📂 Samsung’s Documentation Masterclass: How Audit-Ready Beats Aggressive Benchmarks",
    description:
      "The Korean electronics sector thrives on cross-border supply chains, with Samsung routinely exporting components to group affiliates. As TP audits grew more aggressive regionally, documentation quality became the decisive factor—sometimes more so than statistical benchmarks.",
    image: "",
    createdAt: "2025-07-14",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Reference",
      link: "https://www.linkedin.com/pulse/popular-case-laws-transfer-pricing-lessons-from-ahmed-wh56f",
      type: EArticleSourceType.WEBSITE,
    },
    md: "14-Samsung-Korea-Documentation.mdx",
    country: "KR",
  },
  {
    id: "16",
    title: "💳 Lending Clarity: Watsons Proves Arm’s Length is Deliverable",
    description:
      "Retail MNEs need working capital, often sourced via intercompany loans. Watsons structured group financing based on actual third-party bank offers, defending this as market-standard. Malaysian revenue authorities, fearing base erosion, frequently challenged group loan rates as too low before recent financial transaction guidelines.",
    image: "",
    createdAt: "2025-07-09",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Expert brief",
      link: "https://www.taxriskmanagement.com/malaysia-transfer-pricing-case-watsons-personal-care-stores/",
      type: EArticleSourceType.WEBSITE,
    },
    md: "15-Watsons-Malaysia-Lending.mdx",
    country: "MY",
  },
  {
    id: "17",
    title: "📉 Colombia’s Loss Makers: The End of “Profit-Only” Benchmarks",
    description:
      "Colombia’s markets, like many in Latin America, face periodic cycles and downturns. Authorities had often excluded loss-making comparables when benchmarking, believing only profitable entities reflected true arm’s-length pricing. This practice was increasingly at odds with OECD BEPS guidance recognizing the legitimacy of business cycles.",
    image: "",
    createdAt: "2025-07-07",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Case note",
      link: "https://www.alstp.com/noticiaseng/colombia-the-colombian-supreme-administrative-court-approves-the-inclusion-of-loss-making-comparables",
      type: EArticleSourceType.WEBSITE,
    },
    md: "16-Colombia-Loss-Makers.mdx",
    country: "CO",
  },
  {
    id: "18",
    title: "🇦🇷 Argentina’s Audit Earthquake: From Challenge to Settlement",
    description:
      "Economic volatility means Argentine authorities routinely target large corporates for audit, with compliance focused on negotiation rather than drawn-out litigation. MNEs often preferred settling, seeking certainty in an uncertain legal and economic environment.",
    image: "",
    createdAt: "2025-07-02",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Review",
      link: "https://www.internationaltaxreview.com/article/2df7mdeb84p2bofl4o0e8/sponsored/tp-disputes-and-developments-in-latin-america-trends-to-note",
      type: EArticleSourceType.WEBSITE,
    },
    md: "17-Argentina-Audit-Settlement.mdx",
    country: "AR",
  },
  {
    id: "19",
    title: "🪙 Zambia’s $13M Benchmark: Mopani Copper Set the New Standard",
    description:
      "Resource extraction MNEs, including Mopani, were traditionally able to shift profits abroad using related-party trading companies. Zambia’s challenge marked a turning point, with support from the OECD to strengthen local capacity and implement real benchmarking in mining.",
    image: "",
    createdAt: "2025-06-30",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "OECD review",
      link: "https://www.oecd.org/content/dam/oecd/en/topics/policy-issues/tax-and-development/building-capacity-to-prevent-profit-shifting-by-large-companies-in-zambia.pdf",
      type: EArticleSourceType.PDF,
    },
    md: "18-Mopani-Zambia-Benchmark.mdx",
    country: "ZM",
  },
  {
    id: "20",
    title: "🎼 South Africa: Royalties Must Ring Arm’s-Length True",
    description:
      "IP-rich sectors in South Africa have long relied on affiliate royalty arrangements, but local courts increasingly scrutinized the basis and benchmarking of such charges. This case featured a taxpayer defending arm’s-length royalty rates using deep market research amid revenue challenges based on rough averages.",
    image: "",
    createdAt: "2025-06-25",
    type: SphereArticleType.CaseLaws,
    md: "19-SouthAfrica-Royalties-ArmLength.mdx",
    country: "ZA",
  },
  {
    id: "21",
    title:
      "🔄 SABIC India: Methodological Stability Wins the (Transfer Pricing) Day",
    description:
      "Indian marketing support services and commodity groups, like SABIC, rely heavily on previously accepted benchmarking approaches. As scrutiny increased, authorities tried shifting methods without material changes to business facts. This case clarified that stable, justifiable methods are a compliance right.",
    image: "",
    createdAt: "2025-06-23",
    type: SphereArticleType.CaseLaws,
    source: {
      title: "Reference",
      link: "https://www.taxriskmanagement.com/delhi-high-court-vs-abic-india-transfer-pricing-case/",
      type: EArticleSourceType.WEBSITE,
    },
    md: "20-SABIC-India-Method.mdx",
    country: "IN",
  },
];
export const caseLaws = items.map((item, index) => ({
  ...item,
  id: `case-law-${index + 1}`,
  image: placeholderImages[index % placeholderImages.length],

  hideImage: true,
  hideInThisArticle: true,
  md: `case-laws/${item.md}`,
}));

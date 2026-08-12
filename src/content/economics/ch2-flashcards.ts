import type { Flashcard } from '../types'

export const ch2Flashcards: Flashcard[] = [
  // ── Section 2.1 — Introduction to Competitive Markets ────────────
  {
    q: 'What is the formal definition of a market?',
    a: 'Any arrangement — physical, digital, or conceptual — that allows buyers and sellers to interact and exchange goods, services, or resources at a price. Not a building. Zerodha is a market; so is Amazon India; so is the Vashi mandi.',
  },
  {
    q: 'Name the three properties of a competitive market.',
    a: '1. Many buyers and many sellers (no single participant sets the price). 2. A standardised product (offerings are close to interchangeable). 3. Free entry and exit (no significant barriers to starting or stopping selling).',
    hint: 'Many, standardised, free',
  },
  {
    q: "Why does the demand-supply model matter even when real markets aren't perfectly competitive?",
    a: "It's a benchmark. When a real market misbehaves — one giant firm, government price controls, unpriced pollution — you compare its outcome to what a competitive market would produce, and the gap is your policy analysis. This is the connection to market failure, monopoly, and intervention in later chapters.",
  },

  // ── Section 2.2 — Demand ────────────────────────────────────────
  {
    q: 'Define demand.',
    a: 'The quantity of a good or service that consumers are WILLING and ABLE to purchase at each possible price over a specified period, ceteris paribus.',
    hint: 'Willing + able + ceteris paribus',
  },
  {
    q: 'State the law of demand and its three underlying reasons.',
    a: 'As price rises, quantity demanded falls, ceteris paribus. Reasons: (1) INCOME effect — falling price raises real income, buyers can afford more; (2) SUBSTITUTION effect — good becomes relatively cheaper, buyers switch to it; (3) DIMINISHING MARGINAL UTILITY — each extra unit gives less satisfaction, so buyers only take more if the price falls enough.',
  },
  {
    q: 'What is the difference between "a change in quantity demanded" and "a change in demand"?',
    a: 'Change in QUANTITY demanded = MOVEMENT along the same demand curve, caused by a change in the good\'s OWN price. Change in DEMAND = SHIFT of the whole curve, caused by any OTHER factor (income, tastes, related good prices, expectations, number of consumers).',
    hint: 'Movement vs shift — the biggest mark-losing trap',
  },
  {
    q: 'List the non-price determinants of demand.',
    a: 'Income (for normal goods, demand rises with income; for inferior goods, demand falls); Number of consumers; Tastes and preferences; prices of Related goods (substitutes/complements); Expectations of future price or income; Population characteristics (age, government policy, tax).',
    hint: 'INTREP',
  },
  {
    q: 'What is the difference between a substitute and a complement, and how does each affect the demand curve?',
    a: 'SUBSTITUTES compete with each other in consumption (Coke and Pepsi). Price of Pepsi rises → demand for Coke rises → Coke\'s demand curve shifts RIGHT. COMPLEMENTS are used together (printers and ink). Price of printers rises → demand for ink falls → ink\'s demand curve shifts LEFT.',
  },
  {
    q: 'Give the difference between a normal good and an inferior good.',
    a: 'NORMAL good — demand rises when income rises (cars, restaurant meals, foreign holidays). INFERIOR good — demand FALLS when income rises (second-hand clothing, low-quality staples, generic-brand food, public bus travel in developing countries).',
  },
  {
    q: 'RBI cuts the repo rate. Walk through the effect on the market for two-wheelers.',
    a: 'Repo rate cut → banks lower loan rates → EMI on a two-wheeler falls → real cost of buying now is lower → income/purchasing-power boost for two-wheeler consumers → demand curve for two-wheelers shifts RIGHT (D → D\') → at original price, excess demand → upward pressure on price → new equilibrium at HIGHER P and HIGHER Q.',
    hint: 'Signal → shift → new equilibrium',
  },

  // ── Section 2.3 — Supply ────────────────────────────────────────
  {
    q: 'Define supply.',
    a: 'The quantity of a good or service that producers are willing and able to produce and sell at each possible price over a specified period, ceteris paribus.',
  },
  {
    q: 'State the law of supply and its three underlying reasons.',
    a: 'As price rises, quantity supplied rises, ceteris paribus. Reasons: (1) higher prices raise profit margins → firms already in the market expand output; (2) higher prices attract new firms into the market; (3) rising marginal cost — firms will only produce extra units if the price covers the extra marginal cost of producing them.',
  },
  {
    q: 'List the non-price determinants of supply.',
    a: 'Costs of factors of production (wages, materials); Others\' prices (related goods — joint or competitive supply); Subsidies and taxes; Technology; Number of firms; Expectations; Turbulence (natural events, geopolitical shocks).',
    hint: 'COSTNET',
  },
  {
    q: 'Distinguish joint supply from competitive supply, with an example of each.',
    a: 'JOINT supply — two goods produced together from the same process; supplying more of one means supplying more of the other automatically (beef and leather from cattle; petrol and diesel from crude oil refining). COMPETITIVE supply — a producer must CHOOSE which to make with the same resources (wheat vs rice on the same land; skilled labour to smartphones vs laptops).',
  },
  {
    q: 'How does an indirect tax (like GST) affect the supply curve?',
    a: 'A tax raises the cost of production per unit → for any given market price, the after-tax price received by the producer is lower → producers supply less → supply curve shifts LEFT (or, equivalently, up by the amount of the tax). Reverse for a subsidy — supply shifts RIGHT (down by the amount of the subsidy).',
  },
  {
    q: 'Solar panel manufacturing costs have fallen >80% since 2015. Explain the supply-side effect.',
    a: 'Cost of production falls (via technology + scale) → supply of solar power shifts RIGHT dramatically → at any given price, more is supplied → new equilibrium at LOWER price and HIGHER quantity. This is why global solar capacity has grown exponentially.',
  },

  // ── Section 2.4 — Market Equilibrium ────────────────────────────
  {
    q: 'Define market equilibrium.',
    a: 'The price (P*) and quantity (Q*) at which the quantity demanded equals the quantity supplied. No tendency for price or quantity to change unless a non-price determinant shifts one of the curves.',
  },
  {
    q: 'Explain how a surplus is eliminated by the price mechanism.',
    a: 'At a price ABOVE equilibrium, quantity supplied exceeds quantity demanded — surplus (excess supply). Unsold inventory piles up → firms compete for buyers by cutting prices → price falls → quantity demanded rises and quantity supplied falls → surplus shrinks → market returns to equilibrium at P*.',
  },
  {
    q: 'Explain how a shortage is eliminated by the price mechanism.',
    a: 'At a price BELOW equilibrium, quantity demanded exceeds quantity supplied — shortage (excess demand). Buyers compete for scarce goods → firms notice they can raise prices and still sell out → price rises → quantity demanded falls and quantity supplied rises → shortage shrinks → market returns to equilibrium at P*.',
  },
  {
    q: 'What are the four unambiguous outcomes when demand OR supply shifts?',
    a: 'Demand rises → both P* and Q* rise. Demand falls → both fall. Supply rises → P* falls, Q* rises. Supply falls → P* rises, Q* falls.',
    hint: 'Same-direction for D shifts; opposite for S shifts',
  },
  {
    q: 'When both curves shift simultaneously, one variable is definite and one is ambiguous. Give the pattern.',
    a: 'Both curves RIGHT → Q* definitely rises, P* depends on which shifts more. Both LEFT → Q* definitely falls, P* depends. D right + S left → P* definitely rises, Q* depends. D left + S right → P* definitely falls, Q* depends. Show both possibilities on the diagram for a full-marks answer.',
  },
  {
    q: 'Onion prices in India, 2023–2025: what happened and why?',
    a: 'Sept 2023 – May 2024: government imposed export ban, then 40% duty, then $550/tonne minimum export price → DOMESTIC supply shifted RIGHT (more onions kept in India) → domestic prices FELL. April 2025: 20% export duty removed → domestic supply shifts LEFT (some onions leave the country) → farm-gate prices RISE. Perfect example of the policy loop — each intervention creates political feedback that triggers the next.',
    hint: 'The 2024 case study',
  },

  // ── Section 2.5 — Efficiency in Competitive Markets ─────────────
  {
    q: 'Define consumer surplus (CS).',
    a: 'The difference between what consumers were WILLING to pay (maximum reservation price, read off the demand curve) and what they ACTUALLY paid (the equilibrium price). Graphically, the triangle ABOVE the price line and BELOW the demand curve, up to Q*.',
  },
  {
    q: 'Define producer surplus (PS).',
    a: 'The difference between the price producers ACTUALLY received (equilibrium price) and their minimum acceptable price (marginal cost, read off the supply curve). Graphically, the triangle BELOW the price line and ABOVE the supply curve, up to Q*.',
  },
  {
    q: 'What is social (community) surplus?',
    a: 'Social surplus = CS + PS. Total welfare generated by the market. In a competitive market at equilibrium, social surplus is MAXIMISED — this is the allocative efficiency claim.',
  },
  {
    q: 'What condition defines allocative efficiency at market equilibrium?',
    a: 'MSB = MSC (marginal social benefit equals marginal social cost). At Q*, the extra benefit from one more unit exactly equals its extra cost. Producing more would cost more than it\'s worth; producing less would sacrifice a unit whose benefit exceeded its cost. Social surplus is maximised at MSB = MSC.',
  },
  {
    q: 'What is welfare (deadweight) loss?',
    a: 'The reduction in social surplus when the market is prevented from reaching equilibrium (by a price ceiling, price floor, tax, subsidy, or monopoly). Represents units where MSB exceeded MSC but weren\'t produced — the "missing" welfare. Central to Chapters 4-5 on intervention and market failure.',
  },

  // ── Section 2.6 — Role of the Price Mechanism ───────────────────
  {
    q: 'Name the three functions of the price mechanism in a competitive market.',
    a: '1. SIGNALLING — prices communicate to producers what consumers want more of (rising prices = excess demand) or less of (falling prices = excess supply). 2. INCENTIVE — rising prices motivate producers to supply more; falling prices push cost-cutting or exit. 3. RATIONING — prices allocate scarce goods to buyers who value them most (or can pay most).',
    hint: 'Signal + incentive + ration = Adam Smith\'s invisible hand',
  },
  {
    q: 'What is the equity critique of the price mechanism\'s rationing function?',
    a: 'The mechanism rations by ability and willingness to pay — but this treats lifesaving insulin the same as concert tickets. Efficient rationing is not necessarily FAIR rationing. This normative concern is what motivates redistributive intervention (Chapter 5 on market failure; Chapter 8 on income distribution).',
  },
  {
    q: 'Illustrate the signalling function with the lithium market.',
    a: 'Lithium prices tripled in 2022 on booming EV battery demand → signalled excess demand → mining firms globally expanded exploration and new mines. Prices halved in 2024 on oversupply → signalled excess supply → some mines cut back. No central planner had to make these decisions; the price did the coordination.',
  },

  // ── Section 2.7 — HL: Critique of the Model ─────────────────────
  {
    q: 'What is the classical model\'s assumption about consumers?',
    a: 'Consumers are rational, utility-maximising decision makers with well-defined preferences, full information, and the cognitive ability to compute the best choice given their budget.',
  },
  {
    q: 'What is bounded rationality?',
    a: 'Herbert Simon\'s concept: consumers face cognitive limits and time constraints, so they SATISFICE (pick a good-enough option) rather than fully optimise. Explains why we don\'t compare every mutual fund before investing, or read every menu on the shelf before buying groceries.',
  },
  {
    q: 'Define loss aversion and give a real example.',
    a: 'Losses feel psychologically about TWICE as painful as equivalent gains (Kahneman & Tversky). Example: investors clinging to losing stocks (refusing to "realise the loss") rather than selling and reallocating capital. Or people paying for gym memberships they don\'t use, because cancelling feels like admitting the money was wasted.',
  },
  {
    q: 'What is choice architecture, with an example?',
    a: 'The design of the environment in which decisions are made — defaults, ordering, salience — has substantial effects on outcomes without changing underlying incentives. UK auto-enrolment in workplace pensions is the textbook example: switching from opt-in to opt-out raised participation from ~40% to >90%. Thaler & Sunstein\'s Nudge (2008) is the foundational reference.',
  },
  {
    q: 'What is anchoring in behavioural economics?',
    a: 'Consumers rely heavily on the FIRST piece of information (the "anchor") when making decisions. Classic retail application: "Was ₹4,999, now ₹2,999" — the ₹4,999 anchor makes ₹2,999 feel cheap, even if the good was never actually sold at ₹4,999. Also affects salary negotiations, house pricing, and stock valuation.',
  },
  {
    q: 'Does behavioural economics prove the classical demand-supply model is wrong?',
    a: 'No — it shows the model is a SIMPLIFICATION. Useful for many purposes (long-run price trends, cross-market comparisons, welfare analysis), misleading for others (short-run bubbles, sticky prices, persistent hoarding). For HL Part b: state the assumption, name a behavioural deviation, give an example, then evaluate WHEN the classical model works.',
  },

  // ── Exam Traps ─────────────────────────────────────────────────
  {
    q: 'What is the single most common mark-losing trap on this chapter?',
    a: 'Confusing "change in demand" (shift of curve) with "change in quantity demanded" (movement along curve). "Demand fell" is only correct for a leftward shift caused by a NON-price factor. If price rose and buyers bought less, write "quantity demanded fell."',
  },
  {
    q: 'What labels must EVERY diagram in this chapter have?',
    a: 'Both axes labelled (Price/P on vertical, Quantity/Q on horizontal). Curves labelled (D, S, and D\', S\' after any shift). Equilibrium point marked with a dot. Dashed lines dropped from the dot to both axes. P* and Q* labelled. If asked about surplus/shortage, shade the horizontal gap between Q_d and Q_s. If asked about welfare, shade CS above the price and PS below.',
  },
  {
    q: 'Common trap: "when both curves shift, the effect on equilibrium is zero." True or false?',
    a: 'FALSE. When both curves shift, usually one variable (either P* or Q*) is UNAMBIGUOUS and the other is ambiguous. Only if two identical opposite-direction shifts happen (very rare in real markets) would nothing change. State the definite direction, then explain the ambiguity by drawing both cases.',
  },
]

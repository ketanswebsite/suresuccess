// ─── CISI Investment, Risk & Taxation — Exam Question Bank ───
// 2 tough questions per topic with tricky distractors designed to
// test genuine understanding, not guesswork.

export interface BankQuestion {
  id: string;
  moduleId: string;
  chapterId: string;
  topicId: string;
  topic: string;
  categoryId: string;
  difficulty: "easy" | "medium" | "hard";
  question: string;
  options: string[];
  correct: number;          // 0-based index used by practice page
  correctAnswer: number;    // 0-based index used by manage page
  explanation: string;
}

// Helper to keep both indices in sync
function q(
  id: string,
  moduleId: string,
  chapterId: string,
  topicId: string,
  topic: string,
  categoryId: string,
  difficulty: "easy" | "medium" | "hard",
  question: string,
  options: string[],
  correctIdx: number,
  explanation: string
): BankQuestion {
  return { id, moduleId, chapterId, topicId, topic, categoryId, difficulty, question, options, correct: correctIdx, correctAnswer: correctIdx, explanation };
}

export const QUESTION_BANK: BankQuestion[] = [
  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 1 — ASSET CLASSES  (14 of 80 exam questions)
  // ═══════════════════════════════════════════════════════════════

  // --- 1.1 Cash and Cash Equivalents ---
  q("ch1-cash-1", "cisi-icwim", "ch1", "1.1", "Cash and Cash Equivalents", "assets",
    "hard",
    "A basic rate taxpayer earns £1,200 in savings interest during the tax year. How much of this interest is subject to income tax?",
    ["£0 — fully covered by the Personal Savings Allowance", "£200 — only the amount exceeding the £1,000 PSA", "£1,200 — the PSA does not apply to basic rate taxpayers", "£700 — after deducting the £500 higher rate PSA"],
    1,
    "Basic rate taxpayers (20%) have a Personal Savings Allowance (PSA) of £1,000. Only the amount exceeding this — £200 — is subject to income tax. The £500 PSA applies to higher rate taxpayers, and additional rate taxpayers receive no PSA."
  ),
  q("ch1-cash-2", "cisi-icwim", "ch1", "1.1", "Cash and Cash Equivalents", "assets",
    "medium",
    "An investor places £10,000 in a deposit account paying 4% per annum, compounded quarterly. Using the AER formula, what is the approximate Annual Equivalent Rate?",
    ["4.00%", "4.06%", "4.04%", "4.12%"],
    1,
    "AER = (1 + r/n)^n − 1 = (1 + 0.04/4)^4 − 1 = (1.01)^4 − 1 ≈ 1.04060 − 1 = 4.06%. The AER is always slightly higher than the nominal rate when interest is compounded more than once a year."
  ),

  // --- 1.2 Fixed-Income Securities ---
  q("ch1-fi-1", "cisi-icwim", "ch1", "1.2", "Fixed-Income Securities", "assets",
    "hard",
    "An index-linked gilt pays a coupon of 1.25% and its principal is adjusted in line with RPI. If inflation rises unexpectedly, what happens to the nominal coupon payments?",
    ["They remain fixed at 1.25% of the original principal", "They increase because both the coupon rate AND the principal rise", "They increase because the coupon rate is applied to the inflation-adjusted principal", "They decrease because rising inflation reduces the real value of fixed coupons"],
    2,
    "With index-linked gilts, the coupon rate stays fixed at 1.25%, but it is applied to the inflation-adjusted principal. So as the principal is uplifted by RPI, the nominal coupon payment increases — even though the coupon rate itself doesn't change."
  ),
  q("ch1-fi-2", "cisi-icwim", "ch1", "1.2", "Fixed-Income Securities", "assets",
    "hard",
    "A corporate bond is trading at £95 with a coupon of 6% and 5 years to maturity. Which measure best reflects the total return if held to redemption, accounting for the capital gain?",
    ["Flat yield (running yield)", "Gross redemption yield (GRY)", "Net redemption yield", "Dividend yield"],
    1,
    "The Gross Redemption Yield (GRY) accounts for both the annual coupon income AND the capital gain (or loss) from holding the bond to maturity. The flat yield only considers the coupon relative to the current price and ignores the redemption gain."
  ),

  // --- 1.3 Equities ---
  q("ch1-eq-1", "cisi-icwim", "ch1", "1.3", "Equities", "assets",
    "hard",
    "A company with 10 million ordinary shares priced at £5 each announces a 1-for-4 rights issue at £4 per share. What is the theoretical ex-rights price (TERP)?",
    ["£4.60", "£4.80", "£4.50", "£5.00"],
    1,
    "TERP = (4 existing shares × £5 + 1 new share × £4) / 5 total shares = (£20 + £4) / 5 = £4.80. The TERP represents the theoretical price after the rights issue, reflecting the dilutive effect of issuing new shares at a discount."
  ),
  q("ch1-eq-2", "cisi-icwim", "ch1", "1.3", "Equities", "assets",
    "medium",
    "Which class of shareholder ranks ABOVE ordinary shareholders but BELOW secured creditors in the event of a company liquidation?",
    ["Preference shareholders", "Debenture holders", "Convertible bond holders", "Warrant holders"],
    0,
    "In liquidation, the priority order is: secured creditors (e.g., debenture holders), then unsecured creditors, then preference shareholders, and finally ordinary shareholders. Preference shareholders rank above ordinary shareholders but below all creditor classes."
  ),

  // --- 1.4 Property ---
  q("ch1-prop-1", "cisi-icwim", "ch1", "1.4", "Property", "assets",
    "medium",
    "A commercial property is purchased for £2 million and generates annual rental income of £120,000 after deducting all costs. What is the net rental yield?",
    ["5%", "6%", "8%", "12%"],
    1,
    "Net rental yield = (Net annual rental income / Purchase price) × 100 = (£120,000 / £2,000,000) × 100 = 6%. This is the income return after costs, before any capital appreciation."
  ),
  q("ch1-prop-2", "cisi-icwim", "ch1", "1.4", "Property", "assets",
    "hard",
    "Which of the following is a key requirement for a fund to qualify as a Real Estate Investment Trust (REIT) in the UK?",
    ["At least 50% of profits must be distributed as dividends", "At least 75% of gross income must come from property rental activities", "The fund must invest exclusively in residential property", "The fund must be domiciled offshore for tax efficiency"],
    1,
    "To qualify as a UK REIT, at least 75% of the company's gross income must derive from property rental business, and at least 75% of assets must be used in that business. REITs must distribute at least 90% of their tax-exempt property rental profits."
  ),

  // --- 1.5 Other Assets ---
  q("ch1-other-1", "cisi-icwim", "ch1", "1.5", "Other Assets", "assets",
    "medium",
    "Which of the following is a characteristic that makes collectables (such as fine wine or art) higher risk compared to traditional asset classes?",
    ["They always appreciate in value over time", "They lack a centralised, transparent pricing mechanism", "They are heavily regulated by the FCA", "They provide regular income streams through dividends"],
    1,
    "Collectables typically lack transparent, centralised pricing — they are illiquid, subjective in valuation, generate no income, and are costly to store and insure. These factors make them significantly higher risk than traditional assets."
  ),
  q("ch1-other-2", "cisi-icwim", "ch1", "1.5", "Other Assets", "assets",
    "medium",
    "An investor is evaluating commodities as a portfolio diversifier. Which statement about commodities is MOST accurate?",
    ["Commodity prices are always negatively correlated with equity markets", "Commodities provide a natural hedge against inflation as they represent real assets", "Commodities are risk-free because they have intrinsic physical value", "Commodity investments always generate income through rental or dividends"],
    1,
    "Commodities are real assets whose prices tend to rise with inflation, providing a natural inflation hedge. However, they do not always have negative equity correlation, are not risk-free, and do not generate income — they provide returns only through price appreciation."
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 2 — THE MACROECONOMIC ENVIRONMENT  (6 of 80 exam Qs)
  // ═══════════════════════════════════════════════════════════════

  // --- 2.1 Macroeconomic Trends and Indicators ---
  q("ch2-macro-1", "cisi-icwim", "ch2", "2.1", "Macroeconomic Trends and Indicators", "macro",
    "hard",
    "A country's Gini coefficient has increased from 0.30 to 0.42 over a decade. What does this indicate?",
    ["The country's GDP has grown significantly", "Income inequality has worsened", "The country has experienced deflation", "Unemployment has decreased"],
    1,
    "The Gini coefficient ranges from 0 (perfect equality) to 1 (perfect inequality). An increase from 0.30 to 0.42 indicates that income distribution has become more unequal — the gap between rich and poor has widened."
  ),
  q("ch2-macro-2", "cisi-icwim", "ch2", "2.1", "Macroeconomic Trends and Indicators", "macro",
    "medium",
    "Which factor is LEAST likely to directly increase labour productivity in an economy?",
    ["Investment in workforce education and training", "Technological innovation in production methods", "An increase in raw material prices", "Improved infrastructure and transport networks"],
    2,
    "Rising raw material prices increase input costs but do not directly improve output per worker. Education, technology, and infrastructure all directly enhance productivity by enabling workers to produce more per hour worked."
  ),

  // --- 2.2 Global Trends ---
  q("ch2-global-1", "cisi-icwim", "ch2", "2.2", "Global Trends and Their Impacts", "macro",
    "medium",
    "Which of the following is the PRIMARY risk associated with investing in emerging market economies?",
    ["Lower potential returns than developed markets", "Political instability and weaker regulatory frameworks", "Guaranteed capital depreciation due to inflation", "Inability to invest in equities"],
    1,
    "Emerging markets carry higher risks from political instability, weaker legal and regulatory frameworks, currency volatility, and less transparent markets. However, they also offer higher potential returns — not lower."
  ),
  q("ch2-global-2", "cisi-icwim", "ch2", "2.2", "Global Trends and Their Impacts", "macro",
    "hard",
    "A UK investor holds US equities. If sterling appreciates 10% against the dollar while the US equities rise 8% in dollar terms, what is the approximate return in sterling?",
    ["18%", "8%", "−2%", "2%"],
    2,
    "When sterling strengthens against the dollar, the value of dollar-denominated assets falls in sterling terms. The approximate sterling return is roughly: 8% − 10% = −2%. Despite the equity gain in local currency, the currency movement wipes out the return and creates a small loss."
  ),

  // --- 2.3 National Income ---
  q("ch2-ni-1", "cisi-icwim", "ch2", "2.3", "National Income (NI)", "macro",
    "medium",
    "GDP measures the total value of goods and services produced within a country. What is the key difference between GDP and GNP?",
    ["GNP excludes government spending", "GNP includes income earned by citizens abroad and excludes income earned domestically by foreign residents", "GDP only measures manufacturing output", "GNP is always lower than GDP"],
    1,
    "GNP (Gross National Product) includes income earned by a country's citizens overseas but excludes income earned within the country by foreign nationals. GDP measures output within geographical borders regardless of the nationality of the producer."
  ),
  q("ch2-ni-2", "cisi-icwim", "ch2", "2.3", "National Income (NI)", "macro",
    "medium",
    "If a country's nominal GDP growth is 5% and inflation is 3%, what is the approximate real GDP growth?",
    ["8%", "5%", "2%", "3%"],
    2,
    "Real GDP growth strips out the effects of inflation: approximately 5% − 3% = 2%. Real GDP growth reflects the actual increase in the volume of goods and services produced, not just price increases."
  ),

  // --- 2.4 Economic and Business Cycles ---
  q("ch2-cycle-1", "cisi-icwim", "ch2", "2.4", "Economic and Business Cycles", "macro",
    "hard",
    "During which phase of the business cycle would you typically expect to see rising unemployment, falling corporate profits, and declining consumer confidence?",
    ["Expansion", "Peak", "Contraction (recession)", "Trough"],
    2,
    "The contraction (recession) phase is characterised by falling GDP, rising unemployment, declining profits, and reduced consumer confidence. A recession is technically defined as two consecutive quarters of negative GDP growth."
  ),
  q("ch2-cycle-2", "cisi-icwim", "ch2", "2.4", "Economic and Business Cycles", "macro",
    "medium",
    "What is the term for a prolonged period of very slow economic growth combined with high inflation?",
    ["Deflation", "Stagflation", "Disinflation", "Reflation"],
    1,
    "Stagflation describes a combination of stagnant economic growth and high inflation — a particularly challenging scenario for policymakers because measures to combat inflation (raising rates) can worsen the economic slowdown."
  ),

  // --- 2.5 Key Economic Indicators ---
  q("ch2-indicators-1", "cisi-icwim", "ch2", "2.5", "Key Economic Indicators", "macro",
    "hard",
    "Which of the following is classified as a LEADING economic indicator?",
    ["GDP growth rate", "Unemployment rate", "Stock market performance", "Consumer price index (CPI)"],
    2,
    "Stock market performance is a leading indicator — it tends to move ahead of the broader economy as investors anticipate future conditions. GDP and unemployment are lagging indicators, while CPI is a coincident indicator."
  ),
  q("ch2-indicators-2", "cisi-icwim", "ch2", "2.5", "Key Economic Indicators", "macro",
    "medium",
    "The Consumer Price Index (CPI) in the UK is measured by which body?",
    ["Bank of England", "Financial Conduct Authority", "Office for National Statistics (ONS)", "HM Revenue & Customs"],
    2,
    "The Office for National Statistics (ONS) is responsible for measuring and publishing CPI in the UK. The Bank of England uses CPI as its target measure for inflation but does not calculate it."
  ),

  // --- 2.6 Fiscal and Monetary Policy ---
  q("ch2-policy-1", "cisi-icwim", "ch2", "2.6", "Fiscal and Monetary Policy", "macro",
    "hard",
    "The Bank of England's Monetary Policy Committee (MPC) raises the base rate. Which of the following is the LEAST likely immediate consequence?",
    ["Sterling appreciates against other currencies", "Bond prices fall", "Mortgage costs increase for variable rate borrowers", "The government's fiscal deficit automatically decreases"],
    3,
    "A rate rise typically strengthens the currency (attracting foreign capital), reduces bond prices (yields rise), and increases variable mortgage costs. However, the government's fiscal deficit is a fiscal policy matter and does not automatically decrease from monetary tightening."
  ),
  q("ch2-policy-2", "cisi-icwim", "ch2", "2.6", "Fiscal and Monetary Policy", "macro",
    "medium",
    "Quantitative easing (QE) is a monetary policy tool used by central banks. How does QE primarily work?",
    ["By raising interest rates to reduce inflation", "By the central bank purchasing government bonds to inject money into the economy", "By increasing income tax rates to reduce consumer spending", "By devaluing the national currency through foreign exchange intervention"],
    1,
    "QE involves the central bank creating new money electronically to purchase government bonds (and sometimes corporate bonds) from financial institutions. This injects money into the economy, aiming to lower longer-term interest rates and stimulate lending and investment."
  ),

  // --- 2.7 Influences on Asset Classes ---
  q("ch2-influence-1", "cisi-icwim", "ch2", "2.7", "Influences on Asset Classes", "macro",
    "hard",
    "In a rising interest rate environment, which asset class is typically MOST negatively affected?",
    ["Cash deposits", "Long-duration government bonds", "Residential property (with variable rate mortgages)", "Commodities"],
    1,
    "Long-duration government bonds are most sensitive to interest rate rises — their prices fall significantly because the present value of their distant future cash flows decreases more. While property may also suffer, bonds with long duration have the greatest price sensitivity to rate changes."
  ),
  q("ch2-influence-2", "cisi-icwim", "ch2", "2.7", "Influences on Asset Classes", "macro",
    "medium",
    "During a bear market, investors often rotate into which type of equity sector?",
    ["Technology growth stocks with high P/E ratios", "Defensive sectors such as utilities and healthcare", "Small-cap speculative stocks", "Highly leveraged financial stocks"],
    1,
    "In bear markets, investors typically rotate into defensive sectors — utilities, healthcare, and consumer staples — which provide essential services with stable demand regardless of economic conditions. These sectors tend to be less volatile than cyclical sectors."
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 3 — PRINCIPLES OF INVESTMENT RISK AND RETURN (9 of 80)
  // ═══════════════════════════════════════════════════════════════

  // --- 3.1 Time Value of Money ---
  q("ch3-tvm-1", "cisi-icwim", "ch3", "3.1", "The Time Value of Money", "risk",
    "hard",
    "An investor needs £50,000 in 10 years' time. Assuming a real rate of return of 3% per annum compounded annually, approximately how much must they invest today?",
    ["£37,205", "£41,020", "£35,000", "£43,500"],
    0,
    "Using the present value formula: PV = FV / (1 + r)^n = £50,000 / (1.03)^10 = £50,000 / 1.3439 ≈ £37,205. This demonstrates the time value of money — a sum today is worth more than the same sum in the future."
  ),
  q("ch3-tvm-2", "cisi-icwim", "ch3", "3.1", "The Time Value of Money", "risk",
    "hard",
    "Using the Fisher equation, if the nominal rate of return is 8% and the inflation rate is 5%, what is the approximate REAL rate of return?",
    ["3.00%", "2.86%", "13.00%", "3.50%"],
    1,
    "The Fisher equation: (1 + real) = (1 + nominal) / (1 + inflation) = 1.08 / 1.05 = 1.02857. So the real rate ≈ 2.86%. The common shortcut of 8% − 5% = 3% is an approximation; the Fisher equation gives the precise answer."
  ),

  // --- 3.2 Investment Risk and Return ---
  q("ch3-risk-1", "cisi-icwim", "ch3", "3.2", "Investment Risk and Return", "risk",
    "hard",
    "A portfolio has an expected return of 10% with a standard deviation of 15%. Assuming a normal distribution, what is the approximate range within which returns will fall about 95% of the time?",
    ["−5% to +25%", "−20% to +40%", "0% to +20%", "−10% to +30%"],
    1,
    "95% of outcomes fall within approximately 2 standard deviations of the mean. So: 10% ± (2 × 15%) = 10% ± 30%, giving a range of −20% to +40%. This wide range illustrates the significant volatility of the portfolio."
  ),
  q("ch3-risk-2", "cisi-icwim", "ch3", "3.2", "Investment Risk and Return", "risk",
    "hard",
    "Two assets have a correlation coefficient of −0.8. What does this mean for portfolio construction?",
    ["They always move in exactly opposite directions", "They tend to move in opposite directions, providing significant diversification benefit", "They are unrelated and offer no diversification benefit", "They tend to move together, increasing portfolio risk"],
    1,
    "A correlation of −0.8 indicates a strong negative relationship — when one asset rises, the other tends to fall, and vice versa. This provides significant diversification benefit but does not mean they always move in opposite directions (which would be −1.0)."
  ),

  // --- 3.3 Models of Investment Theory ---
  q("ch3-model-1", "cisi-icwim", "ch3", "3.3", "Models of Investment Theory", "risk",
    "hard",
    "Using the Capital Asset Pricing Model (CAPM), if the risk-free rate is 2%, the expected market return is 8%, and a stock has a beta of 1.3, what is the expected return on the stock?",
    ["10.4%", "9.8%", "12.4%", "7.8%"],
    1,
    "CAPM: E(R) = Rf + β(Rm − Rf) = 2% + 1.3 × (8% − 2%) = 2% + 1.3 × 6% = 2% + 7.8% = 9.8%. The stock's expected return compensates investors for both the time value of money (risk-free rate) and the systematic risk premium (scaled by beta)."
  ),
  q("ch3-model-2", "cisi-icwim", "ch3", "3.3", "Models of Investment Theory", "risk",
    "hard",
    "A fund has a return of 12%, the risk-free rate is 3%, and the fund's standard deviation is 18%. What is the Sharpe ratio?",
    ["0.67", "0.50", "1.50", "0.83"],
    1,
    "Sharpe ratio = (Fund return − Risk-free rate) / Standard deviation = (12% − 3%) / 18% = 9% / 18% = 0.50. The Sharpe ratio measures risk-adjusted return per unit of total risk. A higher ratio indicates better risk-adjusted performance."
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 4 — TAXATION  (16 of 80 exam questions)
  // ═══════════════════════════════════════════════════════════════

  // --- 4.1 Personal Taxation ---
  q("ch4-personal-1", "cisi-icwim", "ch4", "4.1", "Personal Taxation", "tax",
    "hard",
    "A UK taxpayer has total income of £125,140. What is their effective personal allowance?",
    ["£12,570", "£6,285", "£0", "£9,428"],
    2,
    "The personal allowance is reduced by £1 for every £2 of income above £100,000. At £125,140: excess = £25,140, reduction = £25,140/2 = £12,570. Since this equals the full personal allowance, it is completely eliminated — the effective personal allowance is £0."
  ),
  q("ch4-personal-2", "cisi-icwim", "ch4", "4.1", "Personal Taxation", "tax",
    "medium",
    "UK dividend income above the £1,000 dividend allowance is taxed at what rate for a higher rate (40%) taxpayer?",
    ["20%", "32.5%", "33.75%", "39.35%"],
    2,
    "Since April 2022, dividend tax rates are: 8.75% for basic rate taxpayers, 33.75% for higher rate taxpayers, and 39.35% for additional rate taxpayers. The previous rates of 7.5%, 32.5%, and 38.1% were increased by 1.25 percentage points."
  ),

  // --- 4.2 Taxation of Trusts ---
  q("ch4-trust-1", "cisi-icwim", "ch4", "4.2", "Taxation of Trusts", "tax",
    "hard",
    "A discretionary trust receives £10,000 of dividend income. At what rate is this income taxed within the trust?",
    ["8.75%", "33.75%", "39.35%", "45%"],
    2,
    "Discretionary trusts pay tax on dividend income at the trust rate for dividends, which is 39.35% (the additional rate for dividends). The first £1,000 of trust income (the standard rate band) may be taxed at lower rates."
  ),
  q("ch4-trust-2", "cisi-icwim", "ch4", "4.2", "Taxation of Trusts", "tax",
    "medium",
    "Which type of trust is sometimes referred to as a 'life interest' trust where the beneficiary is entitled to income as it arises?",
    ["Discretionary trust", "Interest in possession trust", "Bare trust", "Accumulation trust"],
    1,
    "An interest in possession (IIP) trust — also called a 'life interest' trust — gives a named beneficiary the right to receive trust income as it arises. The capital is preserved for a different set of beneficiaries (the remaindermen)."
  ),

  // --- 4.3 Taxation of Investment Income ---
  q("ch4-inv-income-1", "cisi-icwim", "ch4", "4.3", "Taxation of Investment Income", "tax",
    "hard",
    "An investor receives an equalisation payment when purchasing units in an authorised unit trust mid-distribution period. How is this payment treated for tax purposes?",
    ["As taxable dividend income", "As a return of capital, reducing the acquisition cost", "As taxable savings income at the investor's marginal rate", "As exempt from all UK taxation"],
    1,
    "Equalisation payments represent a return of capital, not income. They reflect the accrued income already included in the unit price at purchase. The payment reduces the investor's acquisition cost for CGT purposes and is not subject to income tax."
  ),
  q("ch4-inv-income-2", "cisi-icwim", "ch4", "4.3", "Taxation of Investment Income", "tax",
    "medium",
    "UK government gilt interest is paid in which form?",
    ["Net of basic rate income tax", "Gross, with no tax deducted at source", "Net of 20% withholding tax", "Tax-free for all UK taxpayers"],
    1,
    "Interest on UK government gilts is paid gross — no tax is deducted at source. However, the interest is still taxable and must be included in the investor's self-assessment tax return (though it may be covered by the Personal Savings Allowance)."
  ),

  // --- 4.4 National Insurance Contributions ---
  q("ch4-nic-1", "cisi-icwim", "ch4", "4.4", "National Insurance Contributions (NICs)", "tax",
    "medium",
    "Which class of National Insurance contributions is paid by employees on their earnings?",
    ["Class 1 Primary", "Class 1 Secondary", "Class 2", "Class 4"],
    0,
    "Class 1 Primary NICs are paid by employees on their earnings. Class 1 Secondary is paid by employers. Class 2 is a flat-rate contribution for the self-employed, and Class 4 is a percentage-based contribution on self-employed profits."
  ),
  q("ch4-nic-2", "cisi-icwim", "ch4", "4.4", "National Insurance Contributions (NICs)", "tax",
    "hard",
    "Unlike income tax, National Insurance contributions have an upper earnings limit above which the rate decreases. What is the PRIMARY significance of this for high earners?",
    ["They pay no NIC on earnings above the upper limit", "The NIC rate drops to 2% on earnings above the upper limit, making NICs regressive", "NICs become tax-deductible above the upper limit", "Employer NICs are capped at the upper earnings limit"],
    1,
    "Above the upper earnings limit, the employee NIC rate drops from 8% to 2%. This means NICs are regressive — higher earners pay a lower effective NIC rate on their total earnings. Employer NICs continue at 13.8% with no upper limit."
  ),

  // --- 4.5 Capital Gains Tax ---
  q("ch4-cgt-1", "cisi-icwim", "ch4", "4.5", "Capital Gains Tax (CGT)", "tax",
    "hard",
    "An investor sells shares for £30,000 that were originally purchased for £15,000. They also have £3,000 in allowable losses brought forward. If the annual exempt amount is £6,000, what is their taxable gain?",
    ["£15,000", "£12,000", "£9,000", "£6,000"],
    3,
    "Gain = £30,000 − £15,000 = £15,000. First deduct current year losses (none stated), then brought-forward losses of £3,000 to get £12,000. Then deduct the annual exempt amount of £6,000 = £6,000 taxable gain. Note: brought-forward losses CAN reduce gains below the annual exempt amount."
  ),
  q("ch4-cgt-2", "cisi-icwim", "ch4", "4.5", "Capital Gains Tax (CGT)", "tax",
    "medium",
    "Which of the following disposals would NOT trigger a capital gains tax liability?",
    ["Sale of a buy-to-let property", "Sale of shares held in an ISA", "Sale of a second home", "Gift of a painting worth £10,000 to a friend"],
    1,
    "Assets held within an ISA wrapper are exempt from CGT. Buy-to-let properties, second homes, and gifts of valuable chattels to non-spouses are all potentially chargeable disposals. The ISA wrapper provides full CGT exemption."
  ),

  // --- 4.6 Inheritance Tax ---
  q("ch4-iht-1", "cisi-icwim", "ch4", "4.6", "Inheritance Tax (IHT)", "tax",
    "hard",
    "A widow dies with an estate valued at £800,000. Her late husband used none of his nil-rate band. What is the IHT liability, assuming the residence nil-rate band does not apply?",
    ["£130,000", "£60,000", "£0", "£190,000"],
    1,
    "The transferable nil-rate band means the widow has access to her husband's unused nil-rate band of £325,000 plus her own £325,000 = £650,000 combined nil-rate band. Taxable estate: £800,000 − £650,000 = £150,000. IHT at 40% = £60,000."
  ),
  q("ch4-iht-2", "cisi-icwim", "ch4", "4.6", "Inheritance Tax (IHT)", "tax",
    "medium",
    "Under the 7-year rule for potentially exempt transfers (PETs), what happens if the donor survives for exactly 5 years after making a gift?",
    ["The gift is fully exempt from IHT", "The gift is taxed at the full 40% rate", "The gift benefits from taper relief, reducing the IHT rate", "The gift is treated as if it were never made"],
    2,
    "If the donor dies between 3 and 7 years after making a PET, taper relief applies. At 5 years (between 5-6 years), the IHT rate is reduced to 60% of the full rate (i.e., 24% instead of 40%). Only survival beyond 7 years makes the gift fully exempt."
  ),

  // --- 4.7 Residency and Domicile ---
  q("ch4-res-1", "cisi-icwim", "ch4", "4.7", "Residency and Domicile", "tax",
    "hard",
    "Under the Statutory Residence Test (SRT), which of the following would make an individual automatically UK resident for a tax year?",
    ["Spending 90 days in the UK", "Having a UK bank account", "Spending 183 or more days in the UK", "Owning property in the UK"],
    2,
    "Under the SRT, an individual is automatically UK resident if they spend 183 or more days in the UK in the tax year. Owning property or having a bank account alone does not determine residency. Days below 183 require further analysis under the sufficient ties test."
  ),
  q("ch4-res-2", "cisi-icwim", "ch4", "4.7", "Residency and Domicile", "tax",
    "medium",
    "What is the key distinction between 'domicile of origin' and 'domicile of choice'?",
    ["Domicile of origin is always in the UK; domicile of choice is always overseas", "Domicile of origin is acquired at birth; domicile of choice is acquired by intention and residence in a new country", "They are the same thing under UK tax law", "Domicile of choice overrides domicile of origin only after 15 years"],
    1,
    "Domicile of origin is acquired at birth (usually from the father). Domicile of choice is acquired by physically moving to a new country with the intention to reside there permanently or indefinitely. The distinction is crucial for IHT and the taxation of overseas income."
  ),

  // --- 4.8 Stamp Duty ---
  q("ch4-stamp-1", "cisi-icwim", "ch4", "4.8", "Stamp Duty", "tax",
    "medium",
    "What is the rate of Stamp Duty Reserve Tax (SDRT) payable on the purchase of UK shares through CREST?",
    ["0.25%", "0.5%", "1%", "1.5%"],
    1,
    "SDRT is charged at 0.5% on the purchase of UK shares settled electronically through CREST. If shares are transferred to a clearance service or depositary receipt scheme, the rate increases to 1.5%."
  ),
  q("ch4-stamp-2", "cisi-icwim", "ch4", "4.8", "Stamp Duty", "tax",
    "hard",
    "Which of the following transactions is EXEMPT from stamp duty?",
    ["Purchase of UK equities on the London Stock Exchange", "Purchase of UK government gilts", "Transfer of shares as a wedding gift", "Purchase of shares in an AIM-listed company via CREST"],
    1,
    "UK government gilts are exempt from stamp duty. Purchases of UK equities (including AIM shares since 2014 abolition was planned but many AIM shares remain exempt) attract SDRT. Gifts of shares may still be subject to stamp duty if consideration is given."
  ),

  // --- 4.9-4.12 Tax Planning (combined) ---
  q("ch4-plan-1", "cisi-icwim", "ch4", "4.12", "Tax-Planning Strategies", "tax",
    "medium",
    "Which of the following is an example of legitimate tax AVOIDANCE rather than tax EVASION?",
    ["Not declaring rental income on a tax return", "Using an ISA to shelter investments from tax", "Understating business expenses to reduce taxable profit", "Hiding assets in an undisclosed offshore account"],
    1,
    "Using an ISA is legitimate tax avoidance — it uses legal means provided by HMRC to minimise tax. Tax evasion involves illegally concealing income or assets. Not declaring income, understating profits, and hiding assets are all forms of evasion."
  ),
  q("ch4-plan-2", "cisi-icwim", "ch4", "4.12", "Tax-Planning Strategies", "tax",
    "hard",
    "A married couple wants to minimise their combined income tax bill. One spouse is a higher rate taxpayer and the other has unused personal allowance. Which strategy is MOST effective?",
    ["Transfer all assets into the higher earner's name", "Transfer income-producing assets to the spouse with unused allowance", "Both spouses should claim the Marriage Allowance regardless of income levels", "Invest all savings in the higher earner's pension"],
    1,
    "Transferring income-producing assets to the lower/non-earning spouse utilises their unused personal allowance, basic rate band, and PSA — reducing the couple's overall tax liability. The Marriage Allowance only allows transfer of 10% of the personal allowance and requires specific eligibility."
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 5 — INVESTMENT PRODUCTS  (14 of 80 exam questions)
  // ═══════════════════════════════════════════════════════════════

  // --- 5.1 Types and Purposes of Collective Investment ---
  q("ch5-cis-1", "cisi-icwim", "ch5", "5.1", "Collective Investment Schemes", "products",
    "medium",
    "What is the PRIMARY advantage of investing through a collective investment scheme compared to direct investment?",
    ["Guaranteed returns regardless of market conditions", "Access to professional management and diversification with relatively small sums", "Exemption from all forms of UK taxation", "Elimination of all investment risk"],
    1,
    "Collective investment schemes pool investors' money to achieve diversification and professional management — benefits that would be difficult for individual investors with small sums. They do not guarantee returns or eliminate risk."
  ),
  q("ch5-cis-2", "cisi-icwim", "ch5", "5.1", "Collective Investment Schemes", "products",
    "hard",
    "What is the role of the Authorised Corporate Director (ACD) in an OEIC?",
    ["To act as custodian of the fund's assets", "To manage the fund's operations and ensure regulatory compliance", "To provide independent audit of the fund's accounts", "To guarantee investors against capital losses"],
    1,
    "The ACD is responsible for the overall management and operation of an OEIC, including investment decisions, compliance with regulations, and pricing. The depositary (not the ACD) acts as custodian. The ACD must be FCA-authorised."
  ),

  // --- 5.2 Open-Ended Funds ---
  q("ch5-open-1", "cisi-icwim", "ch5", "5.2", "Open-Ended Funds", "products",
    "hard",
    "What is the key difference between a unit trust and an Open-Ended Investment Company (OEIC)?",
    ["Unit trusts can only invest in equities, while OEICs can invest in all asset classes", "Unit trusts have a bid-offer spread while OEICs typically have a single price", "OEICs are unregulated while unit trusts are regulated by the FCA", "Unit trusts issue shares while OEICs issue units"],
    1,
    "The key pricing difference is that unit trusts traditionally have a dual-pricing structure (bid-offer spread), while OEICs use single pricing. Both can invest across asset classes and are FCA-regulated. Unit trusts issue units; OEICs issue shares."
  ),
  q("ch5-open-2", "cisi-icwim", "ch5", "5.2", "Open-Ended Funds", "products",
    "medium",
    "When an investor sells units in an open-ended fund, who do they sell them back to?",
    ["Other investors on a stock exchange", "The fund manager, who cancels the units", "The Financial Conduct Authority", "A designated market maker"],
    1,
    "In open-ended funds, units/shares are created when investors buy and cancelled when they sell — investors deal directly with the fund manager, not on an exchange. This is the fundamental difference from closed-ended funds."
  ),

  // --- 5.3 Closed-Ended Funds ---
  q("ch5-closed-1", "cisi-icwim", "ch5", "5.3", "Closed-Ended Funds", "products",
    "hard",
    "An investment trust has a net asset value (NAV) of £10 per share but trades at £8.50 on the stock exchange. What is the discount to NAV?",
    ["15%", "17.6%", "10%", "85%"],
    0,
    "Discount = (NAV − Share price) / NAV × 100 = (£10 − £8.50) / £10 × 100 = 15%. Investment trusts commonly trade at a discount (or premium) to their NAV because their shares are traded on the stock exchange and priced by supply and demand."
  ),
  q("ch5-closed-2", "cisi-icwim", "ch5", "5.3", "Closed-Ended Funds", "products",
    "hard",
    "An investment trust uses gearing (borrowing) of 20%. If the underlying portfolio rises by 10%, what is the approximate return to shareholders, ignoring borrowing costs?",
    ["10%", "12%", "8%", "20%"],
    1,
    "With 20% gearing, for every £100 of shareholder equity, the trust invests £120 (£100 equity + £20 borrowed). A 10% rise on £120 = £12 gain on £100 of equity = 12% return. Gearing amplifies both gains and losses."
  ),

  // --- 5.4-5.5 Fund Characteristics and Charges ---
  q("ch5-charges-1", "cisi-icwim", "ch5", "5.5", "Charges and Pricing of CISs", "products",
    "medium",
    "What does the Ongoing Charges Figure (OCF) include that the Annual Management Charge (AMC) does not?",
    ["Performance fees and transaction costs", "Additional operating costs such as audit, custody, and registration fees", "Initial charges and exit penalties", "Stamp duty on share purchases within the fund"],
    1,
    "The OCF is broader than the AMC — it includes the AMC plus additional fund operating costs like custody, audit, registration, and regulatory fees. However, it typically excludes performance fees and portfolio transaction costs."
  ),
  q("ch5-charges-2", "cisi-icwim", "ch5", "5.5", "Charges and Pricing of CISs", "products",
    "hard",
    "A fund applies a dilution levy when there are large net redemptions. What is the purpose of this levy?",
    ["To penalise investors who sell too quickly", "To protect remaining investors from bearing the cost of selling underlying assets", "To increase the fund manager's revenue", "To prevent the fund from being wound up"],
    1,
    "A dilution levy protects existing investors by ensuring that the costs of buying or selling underlying assets (to meet large inflows or outflows) are borne by the investors causing the dealing, not by the remaining unitholders."
  ),

  // --- 5.6 Tax-Efficient Savings ---
  q("ch5-isa-1", "cisi-icwim", "ch5", "5.6", "Tax-Efficient Savings", "products",
    "medium",
    "What is the current annual subscription limit for a Lifetime ISA, and what government bonus is added?",
    ["£20,000 with a 50% bonus", "£4,000 with a 25% bonus", "£10,000 with a 10% bonus", "£4,000 with a 50% bonus"],
    1,
    "The Lifetime ISA has an annual subscription limit of £4,000 (which counts towards the overall £20,000 ISA allowance), with a 25% government bonus — up to £1,000 per year. It's available for first-time home buyers or retirement savings."
  ),
  q("ch5-isa-2", "cisi-icwim", "ch5", "5.6", "Tax-Efficient Savings", "products",
    "hard",
    "An investor transfers £15,000 from a Cash ISA to a Stocks and Shares ISA in the same tax year, and also makes a fresh subscription of £8,000 to the Stocks and Shares ISA. Have they breached the annual ISA limit?",
    ["Yes — total of £23,000 exceeds the £20,000 limit", "No — transfers between ISAs do not count towards the annual subscription limit", "Yes — transfers count as new subscriptions", "No — but only because Cash ISA limits are separate"],
    1,
    "Transfers between ISAs do not count towards the annual subscription limit. Only new cash subscriptions count. So the investor has only used £8,000 of their £20,000 annual allowance, despite moving £15,000 between ISA types."
  ),

  // --- 5.7 Life Assurance Products ---
  q("ch5-life-1", "cisi-icwim", "ch5", "5.7", "UK Life Assurance Products", "products",
    "hard",
    "An investor holds an onshore investment bond and makes a withdrawal of 7% of the original investment in a tax year. How is the excess treated?",
    ["The entire 7% is taxable as income", "Only the 2% excess above the 5% cumulative allowance is treated as a chargeable gain", "The withdrawal is tax-free as it's a return of capital", "7% is added to the investor's income and taxed at their marginal rate"],
    1,
    "Onshore investment bonds allow cumulative withdrawals of up to 5% per annum of the original investment without triggering an immediate tax charge. The 2% excess (7% − 5%) is treated as a chargeable gain. Unused allowances can be carried forward."
  ),
  q("ch5-life-2", "cisi-icwim", "ch5", "5.7", "UK Life Assurance Products", "products",
    "medium",
    "What is the key tax difference between an onshore and offshore investment bond?",
    ["Onshore bonds are completely tax-free", "Offshore bonds grow virtually tax-free within the fund (no UK corporation tax on gains), creating a gross roll-up", "Offshore bonds are subject to higher rates of UK tax", "There is no tax difference — both are taxed identically"],
    1,
    "Offshore bonds benefit from 'gross roll-up' — the fund is not subject to UK corporation tax on its investment growth. Onshore bonds pay corporation tax within the fund. When gains are eventually realised, both are subject to income tax, but the offshore bond has benefited from tax-deferred growth."
  ),

  // --- 5.8-5.9 Private Equity, VCTs, EISs ---
  q("ch5-vct-1", "cisi-icwim", "ch5", "5.9", "VCTs, EISs and SEISs", "products",
    "hard",
    "An investor subscribes £50,000 for new shares in a Venture Capital Trust (VCT). What is the maximum income tax relief they can claim, and what is the minimum holding period to retain it?",
    ["£15,000 relief (30%), held for 5 years", "£10,000 relief (20%), held for 3 years", "£25,000 relief (50%), held for 3 years", "£15,000 relief (30%), held for 3 years"],
    0,
    "VCTs offer 30% income tax relief on subscriptions up to £200,000 per year: 30% × £50,000 = £15,000. Shares must be held for a minimum of 5 years or the relief is clawed back. Dividends from VCTs are also tax-free."
  ),
  q("ch5-eis-1", "cisi-icwim", "ch5", "5.9", "VCTs, EISs and SEISs", "products",
    "hard",
    "How does the Seed Enterprise Investment Scheme (SEIS) income tax relief rate compare to the standard Enterprise Investment Scheme (EIS)?",
    ["SEIS offers 30% relief, same as EIS", "SEIS offers 50% relief versus 30% for EIS", "SEIS offers 20% relief, lower than EIS", "Both offer 40% relief"],
    1,
    "SEIS offers a more generous 50% income tax relief (on investments up to £200,000) compared to 30% for EIS (on investments up to £1 million, or £2 million for knowledge-intensive companies). This reflects the higher risk of investing in very early-stage companies."
  ),

  // --- 5.10 Derivatives ---
  q("ch5-deriv-1", "cisi-icwim", "ch5", "5.10", "Derivatives", "products",
    "hard",
    "An investor buys a call option on a stock at a strike price of £10 for a premium of £1.50. At expiry, the stock is trading at £13. What is the investor's net profit per share?",
    ["£3.00", "£1.50", "£4.50", "£13.00"],
    1,
    "Profit = (Market price − Strike price) − Premium paid = (£13 − £10) − £1.50 = £3.00 − £1.50 = £1.50. The intrinsic value at expiry is £3, but after deducting the premium paid for the option, the net profit is £1.50 per share."
  ),
  q("ch5-deriv-2", "cisi-icwim", "ch5", "5.10", "Derivatives", "products",
    "medium",
    "What is the maximum loss for the BUYER of a put option?",
    ["Unlimited", "The premium paid for the option", "The strike price minus the current share price", "The full value of the underlying shares"],
    1,
    "The maximum loss for any option buyer (whether call or put) is limited to the premium paid. If the option expires worthless (out of the money), the buyer loses only the premium. This defined maximum loss is a key advantage of buying options over short-selling."
  ),

  // --- 5.11 Hedge Funds ---
  q("ch5-hedge-1", "cisi-icwim", "ch5", "5.11", "Hedge Funds", "products",
    "medium",
    "Hedge funds commonly charge a '2 and 20' fee structure. What does this mean?",
    ["2% initial charge and 20% exit charge", "2% annual management fee and 20% performance fee on gains", "2% per quarter and 20% annually", "2% on the first £20,000 invested"],
    1,
    "The '2 and 20' model means a 2% annual management fee on assets under management plus a 20% performance fee on any gains above a benchmark or high-water mark. This incentivises managers but can significantly erode investor returns."
  ),
  q("ch5-hedge-2", "cisi-icwim", "ch5", "5.11", "Hedge Funds", "products",
    "hard",
    "A hedge fund employs a 'long-short equity' strategy. What does this involve?",
    ["Only buying undervalued stocks and holding them long-term", "Simultaneously buying undervalued stocks (long) and selling overvalued stocks short, aiming to profit from relative movements", "Investing exclusively in long-dated government bonds", "Using leverage to amplify returns on a long-only portfolio"],
    1,
    "A long-short equity strategy involves taking long positions in stocks expected to rise and short positions in stocks expected to fall. The aim is to profit from stock selection regardless of overall market direction, reducing market risk."
  ),

  // --- 5.12 Structured Products ---
  q("ch5-struct-1", "cisi-icwim", "ch5", "5.12", "Structured Products", "products",
    "hard",
    "A structured product offers capital protection with returns linked to the FTSE 100 over 5 years. If the FTSE falls 30% at maturity, the investor receives their original capital back. Who bears the credit risk?",
    ["The investor bears no risk at all", "The investor bears the credit risk of the counterparty (usually the issuing bank)", "The risk is borne by the FCA", "The FSCS guarantees the full return"],
    1,
    "Capital-protected structured products are only as safe as the issuer. If the issuing bank defaults, the investor may lose their capital despite the 'protection'. This counterparty risk was highlighted during the 2008 financial crisis (e.g., Lehman Brothers structured notes)."
  ),
  q("ch5-struct-2", "cisi-icwim", "ch5", "5.12", "Structured Products", "products",
    "medium",
    "A 'kick-out' or 'auto-call' structured product will mature early if:",
    ["Interest rates fall below a specified level", "The underlying index is at or above a specified level on an anniversary date", "The investor requests early redemption", "The issuing bank's credit rating improves"],
    1,
    "Auto-call (kick-out) products automatically mature early and pay a defined return if the underlying index (e.g., FTSE 100) is at or above a predetermined barrier level on specified observation dates (usually annual anniversaries)."
  ),

  // --- 5.13 Retirement Planning ---
  q("ch5-pension-1", "cisi-icwim", "ch5", "5.13", "Retirement Planning", "products",
    "hard",
    "An individual has a pension fund worth £1.2 million and takes 25% as a tax-free lump sum. If they use the remaining fund for drawdown and withdraw £40,000 in the first year, how is this taxed?",
    ["Entirely tax-free as it comes from a pension", "The full £40,000 is taxed as earned income at their marginal rate", "Only the amount above the personal allowance is taxed", "25% of the £40,000 is tax-free, the rest is taxed"],
    1,
    "After taking the 25% tax-free lump sum (£300,000), the remaining £900,000 enters drawdown. ALL withdrawals from drawdown are taxed as earned income at the individual's marginal rate — added to their other income for the tax year to determine the rate."
  ),
  q("ch5-pension-2", "cisi-icwim", "ch5", "5.13", "Retirement Planning", "products",
    "medium",
    "What is the maximum percentage of a defined contribution pension fund that can be taken as a tax-free lump sum under current rules?",
    ["15%", "20%", "25%", "50%"],
    2,
    "Under current UK pension rules, up to 25% of the pension fund can be taken as a Pension Commencement Lump Sum (PCLS) — completely free of income tax. The remaining 75% is then used to provide retirement income (annuity or drawdown), which is taxable."
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 6 — PORTFOLIO CONSTRUCTION AND PLANNING (5 of 80)
  // ═══════════════════════════════════════════════════════════════

  // --- 6.1 Asset Allocation ---
  q("ch6-aa-1", "cisi-icwim", "ch6", "6.1", "Asset Allocation", "portfolio",
    "hard",
    "Research suggests that asset allocation accounts for what approximate percentage of the variability of a portfolio's returns over time?",
    ["Around 25%", "Around 50%", "Around 90%", "Around 100%"],
    2,
    "The landmark Brinson, Hood & Beebower study (1986) found that approximately 90% of the variability in portfolio returns over time is explained by asset allocation decisions, with security selection and market timing contributing relatively little."
  ),
  q("ch6-aa-2", "cisi-icwim", "ch6", "6.1", "Asset Allocation", "portfolio",
    "hard",
    "What is the difference between 'strategic' and 'tactical' asset allocation?",
    ["Strategic allocation changes monthly; tactical allocation is set annually", "Strategic allocation sets long-term target weights; tactical allocation makes short-term deviations to exploit market opportunities", "Strategic allocation is for institutional investors only; tactical is for retail", "There is no meaningful difference between the two approaches"],
    1,
    "Strategic asset allocation establishes long-term target weights based on the investor's objectives and risk tolerance. Tactical asset allocation involves short-term deviations from these targets to take advantage of perceived market opportunities or to manage near-term risks."
  ),

  // --- 6.2 Investment Selection ---
  q("ch6-select-1", "cisi-icwim", "ch6", "6.2", "Investment Selection", "portfolio",
    "medium",
    "A fundamental analyst evaluating a company would focus PRIMARILY on which of the following?",
    ["Chart patterns and moving averages", "The company's financial statements, competitive position, and economic outlook", "The volume of shares traded in the previous week", "The number of analysts covering the stock"],
    1,
    "Fundamental analysis focuses on intrinsic value through analysis of financial statements, earnings, competitive advantages, management quality, and the broader economic environment. Chart patterns and trading volumes are tools of technical analysis."
  ),
  q("ch6-select-2", "cisi-icwim", "ch6", "6.2", "Investment Selection", "portfolio",
    "hard",
    "A technical analyst identifies a 'head and shoulders' pattern in a stock chart. What does this typically signal?",
    ["A continuation of the current upward trend", "A potential reversal from an uptrend to a downtrend", "That the stock is about to split", "That trading volumes will increase dramatically"],
    1,
    "A head and shoulders pattern is a classic bearish reversal signal in technical analysis. It consists of three peaks — the middle being the highest (the 'head') — and typically indicates that an uptrend is losing momentum and a downward reversal is likely."
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 7 — GIVING INVESTMENT ADVICE  (11 of 80 exam Qs)
  // ═══════════════════════════════════════════════════════════════

  // --- 7.1 Advising Clients ---
  q("ch7-advise-1", "cisi-icwim", "ch7", "7.1", "Advising Clients", "advice",
    "medium",
    "When assessing a client's suitability for investment, which factor is MOST important to establish first?",
    ["The client's preferred investment platform", "The client's investment objectives, risk tolerance, and financial circumstances", "The fund manager's past performance track record", "The current level of the FTSE 100 index"],
    1,
    "Suitability assessment requires understanding the client's investment objectives, attitude to risk, capacity for loss, and overall financial circumstances (income, assets, liabilities, time horizon). This is a regulatory requirement under MiFID II and FCA rules."
  ),
  q("ch7-advise-2", "cisi-icwim", "ch7", "7.1", "Advising Clients", "advice",
    "hard",
    "What is the key difference between 'attitude to risk' (ATR) and 'capacity for loss' (CFL)?",
    ["They are the same concept measured differently", "ATR measures psychological willingness to accept volatility; CFL measures the financial ability to absorb losses without affecting lifestyle", "ATR is for institutional investors; CFL is for retail investors", "CFL is always higher than ATR"],
    1,
    "Attitude to risk (ATR) is the psychological willingness to accept investment volatility. Capacity for loss (CFL) is the objective financial ability to absorb losses without materially impacting the client's standard of living. A client may have a high ATR but low CFL (or vice versa), and the lower of the two should typically guide recommendations."
  ),

  // --- 7.2 Financial Planning Process ---
  q("ch7-plan-1", "cisi-icwim", "ch7", "7.2", "The Financial Planning Process", "advice",
    "medium",
    "What is the purpose of an Investment Policy Statement (IPS)?",
    ["To guarantee a minimum investment return", "To document the client's objectives, constraints, and agreed investment strategy", "To provide a legally binding contract between the adviser and client", "To list all available investment products in the market"],
    1,
    "An IPS documents the client's investment objectives, risk tolerance, time horizon, constraints (such as liquidity needs, tax considerations), and the agreed investment strategy. It serves as a roadmap for managing the portfolio and a benchmark for reviewing performance."
  ),
  q("ch7-plan-2", "cisi-icwim", "ch7", "7.2", "The Financial Planning Process", "advice",
    "hard",
    "Under FCA rules, what is the difference between 'independent' and 'restricted' financial advice?",
    ["Independent advisers charge fees; restricted advisers earn commission", "Independent advice considers all retail investment products across the whole market; restricted advice is limited to certain products, providers, or both", "Restricted advice is only for high-net-worth clients", "There is no regulatory difference — it is a marketing term"],
    1,
    "Independent financial advice must be based on a comprehensive and fair analysis of the relevant market, considering all retail investment products that could meet the client's needs. Restricted advice is limited in some way — by product type, provider, or both — and the restriction must be disclosed to the client."
  ),

  // --- 7.3 ESG and SRI ---
  q("ch7-esg-1", "cisi-icwim", "ch7", "7.3", "ESG and SRI Strategies", "advice",
    "hard",
    "An investment approach that excludes companies involved in tobacco, weapons, and gambling is BEST described as:",
    ["Positive screening (best-in-class)", "Negative screening (exclusion-based)", "Impact investing", "Shareholder engagement"],
    1,
    "Negative screening (exclusion) removes companies involved in specific activities considered harmful or unethical. Positive screening (best-in-class) selects companies with the best ESG practices within each sector. Impact investing targets measurable social/environmental outcomes alongside financial returns."
  ),
  q("ch7-esg-2", "cisi-icwim", "ch7", "7.3", "ESG and SRI Strategies", "advice",
    "medium",
    "Why might ESG ratings for the same company differ significantly between rating providers?",
    ["Because ESG is an exact science with universally agreed metrics", "Because providers use different methodologies, weightings, and data sources", "Because companies deliberately provide conflicting information", "Because ESG ratings are randomly generated"],
    1,
    "ESG ratings can vary significantly between providers because there is no standardised methodology. Different providers weight environmental, social, and governance factors differently, use different data sources, and may interpret qualitative information differently."
  ),

  // --- 7.4-7.6 Solutions, Recommendations, Consumer Rights ---
  q("ch7-consumer-1", "cisi-icwim", "ch7", "7.7", "Consumer Rights and Regulatory Requirements", "advice",
    "medium",
    "If a client is unhappy with the financial advice they have received, they should first complain to:",
    ["The Financial Ombudsman Service (FOS) directly", "The firm that provided the advice", "The Financial Conduct Authority (FCA)", "The Bank of England"],
    1,
    "The complaints process requires clients to first raise their complaint with the firm. The firm has 8 weeks to resolve it. If the client remains dissatisfied after the firm's final response (or 8 weeks have passed), they can then escalate to the Financial Ombudsman Service (FOS)."
  ),
  q("ch7-consumer-2", "cisi-icwim", "ch7", "7.7", "Consumer Rights and Regulatory Requirements", "advice",
    "hard",
    "The Financial Services Compensation Scheme (FSCS) protects investors if an authorised firm fails. What is the maximum compensation for investments?",
    ["£85,000 per person per firm", "£50,000 per person per firm", "£170,000 for joint accounts", "Unlimited protection for all regulated investments"],
    0,
    "The FSCS provides up to £85,000 per eligible person per firm for investment claims (and the same for deposits). This is separate from the deposit protection limit. Joint accounts may receive up to £170,000 (£85,000 each). Not all investments are covered."
  ),

  // --- 7.8 Performance Benchmarks ---
  q("ch7-bench-1", "cisi-icwim", "ch7", "7.8", "Performance Benchmarks", "advice",
    "medium",
    "A UK equity fund benchmarks against the FTSE All-Share Index. If the fund returns 8% and the index returns 6%, the fund has generated:",
    ["8% absolute return", "2% alpha (outperformance)", "6% relative return", "14% total return"],
    1,
    "Alpha represents the excess return above the benchmark. The fund returned 8% versus the benchmark's 6%, generating 2% of alpha (outperformance). Absolute return is 8%, but alpha specifically measures the value added by active management."
  ),
  q("ch7-bench-2", "cisi-icwim", "ch7", "7.8", "Performance Benchmarks", "advice",
    "hard",
    "When selecting a performance benchmark, which characteristic is LEAST important?",
    ["The benchmark should be investable and representative of the portfolio's opportunity set", "The benchmark should be transparent and calculated independently", "The benchmark should have delivered strong historical returns", "The benchmark should be specified in advance and agreed with the client"],
    2,
    "A good benchmark should be investable, representative, transparent, independently calculated, and pre-specified. Whether the benchmark itself has strong historical returns is irrelevant — it should accurately reflect the investment universe and risk profile, not be chosen for flattering comparisons."
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 8 — PORTFOLIO PERFORMANCE AND REVIEW  (5 of 80)
  // ═══════════════════════════════════════════════════════════════

  // --- 8.1 Purpose and Concept of Benchmarking ---
  q("ch8-benchmark-1", "cisi-icwim", "ch8", "8.1", "Purpose and Concept of Benchmarking", "performance",
    "medium",
    "Why is it important to use an appropriate benchmark when measuring portfolio performance?",
    ["To guarantee the portfolio will outperform the market", "To provide a relevant comparison that reflects the portfolio's investment mandate and risk level", "Because regulators require all portfolios to beat the FTSE 100", "To ensure the fund manager earns their performance fee"],
    1,
    "An appropriate benchmark provides a meaningful yardstick against which to judge whether the fund manager is adding value. Comparing a UK small-cap fund against the S&P 500, for example, would be meaningless. The benchmark should match the portfolio's asset class, geography, and risk profile."
  ),
  q("ch8-benchmark-2", "cisi-icwim", "ch8", "8.1", "Purpose and Concept of Benchmarking", "performance",
    "hard",
    "A composite benchmark of '60% FTSE All-Share / 40% FTSE Actuaries UK Gilts All Stocks' would be most appropriate for:",
    ["A pure equity growth fund", "A balanced fund investing in UK equities and bonds", "A global emerging markets fund", "A money market fund"],
    1,
    "A composite benchmark combining equity and bond indices is appropriate for a balanced or mixed fund that invests across both asset classes. The 60/40 split should reflect the fund's target asset allocation. Pure equity, emerging market, or money market funds would each need their own specific benchmarks."
  ),

  // --- 8.2 Portfolio Measurement ---
  q("ch8-measure-1", "cisi-icwim", "ch8", "8.2", "Portfolio Measurement", "performance",
    "hard",
    "A client invests £100,000 in a fund. After 6 months, they add £50,000. At the end of the year, the fund is worth £165,000. Which return methodology removes the distorting effect of the cash flow timing?",
    ["Money-weighted rate of return (MWRR)", "Time-weighted rate of return (TWRR)", "Simple percentage return", "Holding period return"],
    1,
    "The Time-Weighted Rate of Return (TWRR) eliminates the distorting effect of external cash flows by geometrically linking sub-period returns. It measures the fund manager's performance independent of client cash flow decisions. The MWRR, by contrast, is influenced by the timing and size of cash flows."
  ),
  q("ch8-measure-2", "cisi-icwim", "ch8", "8.2", "Portfolio Measurement", "performance",
    "hard",
    "Fund A has a higher return than Fund B, but Fund A also has a higher standard deviation. Which metric allows a fair comparison of their risk-adjusted performance?",
    ["Total return comparison", "The Sharpe ratio", "The nominal return difference", "The tracking error"],
    1,
    "The Sharpe ratio (excess return per unit of total risk) allows fair comparison of funds with different risk levels. A fund with higher returns but proportionally much higher risk may actually have a lower Sharpe ratio, indicating poorer risk-adjusted performance."
  ),

  // --- 8.3 Portfolio Review ---
  q("ch8-review-1", "cisi-icwim", "ch8", "8.3", "Portfolio Review", "performance",
    "medium",
    "How often should a client's investment portfolio be formally reviewed?",
    ["Only when the client requests it", "At least annually, or more frequently if circumstances change", "Every 5 years to align with investment horizons", "Reviews are optional and not required by regulation"],
    1,
    "Best practice (and regulatory expectation for ongoing advisory services) is to review portfolios at least annually. More frequent reviews may be needed following significant market events, changes in personal circumstances, or shifts in financial goals."
  ),
  q("ch8-review-2", "cisi-icwim", "ch8", "8.3", "Portfolio Review", "performance",
    "hard",
    "During a portfolio review, the adviser discovers the client's equity allocation has drifted from 60% to 75% due to strong market performance. What is the most appropriate action?",
    ["Leave the portfolio unchanged since equities have performed well", "Rebalance back to the target 60% equity allocation to maintain the agreed risk profile", "Increase the equity target to 75% since it has worked", "Sell all equities immediately to eliminate market risk"],
    1,
    "Rebalancing back to the target allocation ensures the portfolio continues to reflect the client's agreed risk profile. Allowing drift means the client is taking on more equity risk than originally agreed. Rebalancing is a disciplined process of selling outperformers and buying underperformers to maintain the strategic allocation."
  ),

  // ═══════════════════════════════════════════════════════════════
  // BOOK 2: UK REGULATION AND PROFESSIONAL INTEGRITY ED14 — (~46 questions)
  // ═══════════════════════════════════════════════════════════════

  // --- Ch1: UK Financial Services Sector (categoryId: "regulation")
  q("reg-ch1-t1-1", "cisi-reg", "reg-ch1", "1.1", "Role of Government & Financial Investment", "regulation",
    "hard",
    "Which UK body is responsible for setting monetary policy and managing inflation targets, and what is the current inflation target?",
    ["The Treasury; 1.5%", "The Bank of England; 2%", "The FCA; 3%", "Parliament; variable"],
    1,
    "The Bank of England's Monetary Policy Committee sets the inflation target at 2% and uses interest rate decisions to steer inflation. The Treasury sets the framework but the BoE operates independently. A 1.5% target and FCA/Parliament targets are incorrect."
  ),
  q("reg-ch1-t1-2", "cisi-reg", "reg-ch1", "1.2", "Global Financial Services & Economic Cycles", "regulation",
    "hard",
    "In the context of the financial crisis 2007-08, which feature of central banks' interventions was designed to inject liquidity when interest rates reached the zero lower bound?",
    ["Reverse repo operations", "Quantitative easing (QE)", "Raising reserve requirements", "Increasing the base rate"],
    1,
    "Quantitative easing involved central banks purchasing long-term assets (gilts, bonds) to inject liquidity when traditional interest rate cuts could not go further. Reverse repo, higher reserve requirements, and rate increases are either not applicable at the ZLB or used for different purposes."
  ),
  q("reg-ch1-t1-3", "cisi-reg", "reg-ch1", "1.3", "Central Banks & Economic Cycles", "regulation",
    "hard",
    "A regulator identifies that excessive credit growth and asset price inflation are building systemic risk. Which macroprudential tool would be most appropriate to deploy?",
    ["Interest rate cuts to stimulate borrowing", "Countercyclical capital buffer (CCyB) increases", "Encouraging leverage to support growth", "Relaxing loan-to-value (LTV) limits"],
    1,
    "The countercyclical capital buffer forces banks to hold more capital in booms, constraining credit growth and reducing build-up of systemic risk. Interest cuts, higher leverage, and relaxed LTVs would worsen the situation. CCyB is a key macroprudential tool."
  ),
  q("reg-ch1-t1-4", "cisi-reg", "reg-ch1", "1.4", "Economic Cycles & Government Role", "regulation",
    "hard",
    "When an economy enters recession, consumer spending falls, unemployment rises, and house prices decline. Which statement correctly describes the regulator's dual objective?",
    ["Maximize profitability of all financial institutions", "Maintain financial stability AND ensure consumer protection through effective regulation", "Guarantee all investment returns", "Eliminate all market downturns"],
    1,
    "Regulators balance financial stability (preventing system-wide collapse) with consumer protection (fair treatment, proper authorisation). They cannot prevent all downturns or guarantee returns. Maximizing profitability alone is not their mandate; they must balance multiple objectives."
  ),

  // --- Ch2: UK Financial Services & Consumer Relationships (categoryId: "regulation")
  q("reg-ch2-t1-1", "cisi-reg", "reg-ch2", "2.1", "Financial Risks & Needs Assessment", "regulation",
    "hard",
    "During a financial planning meeting, an adviser discovers the client has no emergency fund, high outstanding personal debt, and minimal pension savings despite being age 45. What is the correct order of priority for addressing these needs?",
    ["Begin pension investment immediately to catch up on contributions", "First establish emergency fund, then clear debt, then address pension planning", "Ignore the debt and focus only on pension saving to reach retirement", "Only provide investment advice and refer debt management elsewhere"],
    1,
    "Sound financial planning prioritizes: (1) emergency fund (liquidity), (2) debt clearance (reduces financial risk), then (3) long-term savings. Starting pension investment while carrying high-cost debt is inefficient. A holistic approach must address multiple needs in correct sequence."
  ),
  q("reg-ch2-t1-2", "cisi-reg", "reg-ch2", "2.2", "Professional Conduct & Consumer Relationships", "regulation",
    "hard",
    "A client requests advice on a highly complex derivative strategy that the adviser believes is inappropriate. The client insists, citing his experience as a hedge fund manager. What is the correct approach under COBS rules?",
    ["Provide the advice since the client claims expertise", "Refuse outright without explanation", "Provide a suitability report explaining why it's inappropriate, recommend a suitable alternative, and document the client's insistence if he overrides your recommendation", "Record the client's decision verbally and proceed immediately"],
    2,
    "Even experienced clients require suitability assessments (COBS 9). An adviser must explain why a strategy is unsuitable, provide alternatives, and if the client still insists, document this in writing. Refusing without explanation or proceeding without explanation both breach conduct rules."
  ),
  q("reg-ch2-t1-3", "cisi-reg", "reg-ch2", "2.3", "How Needs Are Met", "regulation",
    "hard",
    "Which of the following best describes the distinction between a 'best execution' obligation and a 'suitability' obligation?",
    ["Best execution ensures the investment is suitable; suitability ensures the best price", "Best execution achieves the best possible price/terms for executing an order; suitability ensures the investment meets the client's goals and risk profile", "They are identical concepts applied to different asset classes", "Only best execution applies to retail clients"],
    1,
    "Suitability (COBS 9) assesses whether an investment meets the client's profile; best execution (COBS 11) concerns achieving optimal price/terms when dealing. Both apply to retail clients. They are separate obligations with different purposes."
  ),
  q("reg-ch2-t1-4", "cisi-reg", "reg-ch2", "2.4", "Professional Conduct & Regulatory Expectations", "regulation",
    "hard",
    "An adviser is conflicted between recommending a commission-generating product and a more suitable but low-commission alternative. How should this conflict be managed under FCA rules?",
    ["Recommend the higher-commission product to maximize fee income", "Disclose the conflict and take steps to ensure the client's interests take priority", "Choose whichever pays more without disclosure", "Avoid managing the conflict by not providing advice"],
    1,
    "COBS 2 (Conduct of business) requires advisers to act in the client's interest and manage conflicts of interest. Disclosure plus prioritizing the client's needs (even if lower commission) is correct. Undisclosed conflicts and profit prioritization breach conduct rules."
  ),

  // --- Ch3: UK Contract and Trust Legislation (categoryId: "trusts")
  q("reg-ch3-t1-1", "cisi-reg", "reg-ch3", "3.1", "Legal Concepts & Contract Law", "trusts",
    "hard",
    "A financial adviser gives verbal investment advice to a client over the phone, and the client places a £50,000 investment based solely on this conversation. No written record is created. Is this contract binding and what are the compliance risks?",
    ["Verbal contracts are never binding in financial services; no compliance issue", "It is binding but COBS rules require written evidence of advice; documentation failure is a serious breach", "It is binding only if the adviser later confirms in writing", "Verbal advice is acceptable if the client is a professional investor"],
    1,
    "COBS 2R (advice records) requires written documentation of personal recommendations. While a verbal agreement may be enforceable in contract law, the absence of written advice records is a significant regulatory breach. Professional investors and retail clients both require documented advice trails."
  ),
  q("reg-ch3-t1-2", "cisi-reg", "reg-ch3", "3.2", "Trusts: Bare Trusts", "trusts",
    "hard",
    "In a bare trust, when can a beneficiary force the trustee to transfer the trust assets to them, and what principle underpins this right?",
    ["Only with trustee permission", "At age 21", "At any time if all beneficiaries agree and are adults (over 18) — the Saunders v Vautier principle", "Never, until the trustee decides"],
    2,
    "The rule in Saunders v Vautier allows beneficiaries with absolute entitlement (all bare trust beneficiaries) to demand the trust be ended and assets transferred, regardless of the trust deed terms. This requires all beneficiaries to be adults and in agreement. Age 21 and trustee permission are outdated concepts."
  ),
  q("reg-ch3-t1-3", "cisi-reg", "reg-ch3", "3.3", "Trusts: Interest in Possession", "trusts",
    "hard",
    "A settlor creates a trust with an income beneficiary (A) entitled to all income, and a remainder beneficiary (B) entitled to the capital on A's death. A dies after 15 years. What tax consequences arise for B?",
    ["No tax; B simply receives the capital", "B's inheritance tax charge is nil because interest in possession trusts are tax-exempt", "An exit charge applies under the relevant property rules (potentially 6% of the trust value)", "B must immediately distribute proceeds to other beneficiaries"],
    2,
    "Interest in possession trusts are treated as potentially exempt transfers (PETs) for the life tenant. Upon death of the life tenant, an exit charge under relevant property rules may apply at 6% of trust value (if the 10-year anniversary approach is used). Tax is not avoided; it depends on the trust's composition and whether relevant property rules apply."
  ),
  q("reg-ch3-t1-4", "cisi-reg", "reg-ch3", "3.4", "Trusts: Flexible & Power of Appointment", "trusts",
    "hard",
    "A flexible trust gives the trustee discretion to distribute capital and income among a defined class of beneficiaries. How does this flexibility affect the beneficiaries' tax position compared to a bare trust?",
    ["All beneficiaries are always taxed the same", "Beneficiaries have no tax at all in flexible trusts", "The trustee can direct income/capital allocation to minimize overall tax, and different beneficiaries may have different tax rates applied", "Tax is fixed regardless of distributions"],
    2,
    "Flexible trusts allow trustees to allocate income and capital strategically. A beneficiary with no other income (e.g., a child) may receive distributions tax-free, while a high-earner receives less. A bare trust has fixed entitlements; all beneficiaries are taxed on their proportionate share regardless of distributions."
  ),
  q("reg-ch3-t1-5", "cisi-reg", "reg-ch3", "3.5", "Trustee & Beneficiary Duties", "trusts",
    "hard",
    "Under the Trustee Act 2000, which of the following is NOT a statutory power of a trustee?",
    ["Power to invest in any asset a prudent investor would consider", "Power to sell any trust asset", "Power to borrow money on behalf of the trust without limit", "Duty to exercise power of investment with care"],
    2,
    "The Trustee Act 2000 grants powers to invest and sell assets with a duty of care. Borrowing is NOT a statutory power under the 2000 Act; trustees can only borrow if the trust deed permits it. Unlimited borrowing in particular would breach the duty of care."
  ),
  q("reg-ch3-t1-6", "cisi-reg", "reg-ch3", "3.6", "Trust Administration & Settlor/Trustee/Beneficiary Roles", "trusts",
    "hard",
    "A settlor creates a trust with land valued at £800,000. They appoint themselves as sole trustee. Is this arrangement valid, and what compliance issues arise?",
    ["Valid; settlors can be sole trustees", "Invalid; settlor cannot be trustee", "Valid but MUST appoint at least one other trustee, or comply with the rule requiring minimum 2 trustees for land trusts (cannot exceed 4)", "Valid only if all beneficiaries consent"],
    2,
    "Trusts holding land must have a minimum of 2 trustees and a maximum of 4 (Law of Property Act 1925). A settlor can be a trustee but cannot be the sole trustee of land. Additional trustees must be appointed or the trust deed amended. Beneficiary consent is not required for trustee appointments."
  ),

  // --- Ch4: Integrity and Ethics in Professional Practice (categoryId: "ethics")
  q("reg-ch4-t1-1", "cisi-reg", "reg-ch4", "4.1", "Professional Ethics & Ethical Standards", "ethics",
    "hard",
    "An adviser discovers that a sales colleague has been mis-selling investments to elderly clients, misrepresenting risk profiles to close deals faster. The adviser is unsure whether to report internally or externally. Under PIDA 1998, what protection applies?",
    ["No protection; internal reporting is discouraged", "Protected if reporting in good faith to a prescribed regulator (e.g., FCA) or other protected channels, with reasonable belief of wrongdoing", "Only protected if reporting to the media", "Protected only if reporting to the boss"],
    1,
    "The Public Interest Disclosure Act 1998 (PIDA/whistleblowing protection) protects disclosures made in good faith to prescribed regulators or proper internal channels, where the whistleblower reasonably believes wrongdoing has occurred. Media disclosure and sole-boss reporting lack these statutory protections."
  ),
  q("reg-ch4-t1-2", "cisi-reg", "reg-ch4", "4.2", "Corporate Culture & Firm Responsibilities", "ethics",
    "hard",
    "Following the LIBOR manipulation scandal, regulators found that traders submitted false rates with knowledge of management. Which governance failure does this reveal, and what is the key mitigation?",
    ["Lack of IT systems (could not track trader activity)", "Weak ethical culture, absence of effective whistleblowing channels, and weak consequences for misconduct; governance requires clear values, incentives aligned to compliance, and support for raising concerns safely", "Insufficient profits (traders needed higher bonuses)", "Traders acted alone without any organizational involvement"],
    1,
    "The LIBOR scandal highlighted cultural and governance failures: manipulation was known, incentives encouraged it, and there was no safe channel to raise concerns. Mitigation requires explicit ethical values, link compensation to compliance, support for whistleblowers, and enforcement. IT systems and profit levels are secondary."
  ),
  q("reg-ch4-t1-3", "cisi-reg", "reg-ch4", "4.3", "Wells Fargo Scandal Context", "ethics",
    "hard",
    "The Wells Fargo scandal (2016) revealed employees creating fake customer accounts to meet sales targets. Which governance and regulatory response is most relevant to UK financial services?",
    ["Weaker oversight of aggressive sales targets in retail banking", "Introduction of the Senior Managers Regime (SMR) to hold senior management accountable for failures in their area; clawback of bonuses; reinforced duty of care toward customers", "Removal of all sales targets industry-wide", "Customers were fully compensated so no systemic change needed"],
    1,
    "UK regulators (post-LIBOR, Wells Fargo) strengthened SMR accountability. Senior managers must take reasonable steps to prevent breaches; failure to do so incurs personal financial penalties, clawback, and potential prohibition. Targeted sales without ethical oversight remain a risk that governance must address."
  ),
  q("reg-ch4-t1-4", "cisi-reg", "reg-ch4", "4.4", "Senior Managers Regime Accountability", "ethics",
    "hard",
    "Under the Senior Managers Regime (SMR), a Managing Director oversees a division where mis-selling is later discovered. The MD claims the traders acted without their knowledge. Is the MD liable, and what is the key test?",
    ["No liability; traders are solely responsible", "Liable only if they directly authorized the mis-selling", "Potentially liable if they failed to take reasonable steps to prevent breaches in their area of responsibility, regardless of direct knowledge", "Liable only if they participated in the misconduct"],
    2,
    "SMR imposes a duty on senior managers to 'reasonably take steps to prevent or stop misconduct in their area.' Knowledge is not required; the test is whether reasonable preventive measures were in place (policies, training, monitoring, culture). Ignorance is not a defense; it reflects governance failure."
  ),

  // --- Ch5: Regulatory Infrastructure of UK Financial Services (categoryId: "infrastructure")
  q("reg-ch5-t1-1", "cisi-reg", "reg-ch5", "5.1", "MiFID II/MiFIR Directive", "infrastructure",
    "hard",
    "Under MiFID II, which category of investor receives the highest level of regulatory protection, and what is a key requirement for firms advising them?",
    ["Professional investors; no requirements", "Retail clients; suitability assessment and detailed advice records (5-year retention)", "Large corporates; streamlined disclosure", "Eligible counterparties; no protections needed"],
    1,
    "MiFID II grants retail clients highest protection: suitability assessment (COBS 9), detailed advice documentation, and 5-year retention. Professional investors and eligible counterparties receive less stringent protections. Large corporates may opt out, but MiFID II defaults to maximum retail protection."
  ),
  q("reg-ch5-t1-2", "cisi-reg", "reg-ch5", "5.2", "UCITS Directive & Fund Regulation", "infrastructure",
    "hard",
    "A UCITS fund (Undertakings for Collective Investment in Transferable Securities) is marketed across the EU. Which regulatory feature provides investor protection and distinguishes UCITS from non-UCITS funds?",
    ["No regulatory framework; UCITS is unregulated", "Strict diversification rules, leverage limits (max 2x), and daily liquidity requirements for units/shares", "No liquidity requirements; UCITS funds can suspend redemptions indefinitely", "Higher leverage allowed (10x) compared to other funds"],
    1,
    "UCITS offers investor protection through: diversification limits, leverage cap at 2x NAV, daily redemption availability, daily valuation, and common EU passport. These contrast with non-UCITS AIFs which may have different rules. Suspension of redemptions is possible but must follow strict conditions."
  ),
  q("reg-ch5-t1-3", "cisi-reg", "reg-ch5", "5.3", "Alternative Fund Managers Directive (AIFMD)", "infrastructure",
    "hard",
    "The AIFMD regulates Alternative Investment Fund Managers (AIFMs). Which type of fund is typically subject to AIFMD regulation rather than UCITS?",
    ["Index-tracking equity funds (no active management)", "Hedge funds, private equity funds, and real estate funds (less liquid, higher leverage potential)", "Government bond funds", "Open-ended UK equity unit trusts with daily liquidity"],
    1,
    "AIFMD covers AIFs (hedge funds, PE, real estate, etc.) that fall outside UCITS scope. These funds may employ higher leverage, less frequent liquidity, and complex strategies. UCITS (daily liquidity, leverage caps) and open-ended unit trusts follow different regulations. Index funds are typically UCITS."
  ),
  q("reg-ch5-t1-4", "cisi-reg", "reg-ch5", "5.4", "UK Post-Brexit Regulatory Framework", "infrastructure",
    "hard",
    "Post-Brexit, the UK maintained most MiFID II rules under FCA regulation, but introduced new passporting rules. How does the 'equivalence decision' allow UK firms to continue serving EU clients?",
    ["No equivalence decision was granted; all EU passporting ended immediately", "The UK received equivalence decisions for certain services (e.g., investment services), allowing limited cross-border activity under host country authorization", "Full UK-EU passporting is permanent and automatic", "Only EU firms can serve UK clients; UK firms are restricted"],
    1,
    "Post-Brexit, UK firms lost automatic MiFID II passporting to the EU. Equivalence decisions (granted for some services) allow limited EU client service, but firms typically need host country authorization. Full passporting does not exist; the relationship is asymmetric."
  ),

  // --- Ch6: FCA and PRA Supervisory Objectives, Principles and Processes (categoryId: "fca-pra")
  q("reg-ch6-t1-1", "cisi-reg", "reg-ch6", "6.1", "FCA Objectives & Principles", "fca-pra",
    "hard",
    "The FCA's primary objective is to ensure 'an appropriate degree of protection for consumers.' When a firm's business model conflicts with consumer protection, how does the FCA typically intervene?",
    ["It never intervenes; markets work best unregulated", "It issues rules, conducts supervision, and can restrict or withdraw authorization if the business model poses persistent consumer risk", "It lets consumers bear all risk", "It subsidizes losses to protect profits"],
    1,
    "The FCA's statutory objective is consumer protection and market integrity. When a business model creates disproportionate consumer harm, the FCA has powers to: set rules, conduct intensive supervision, require changes, and ultimately withdraw authorization. Non-intervention is not an option if systemic harm is evident."
  ),
  q("reg-ch6-t1-2", "cisi-reg", "reg-ch6", "6.2", "Insistent Client Rule", "fca-pra",
    "hard",
    "A retail client insists on a heavily leveraged investment that the adviser has assessed as unsuitable. Under COBS, can the adviser proceed, and what documentation is required?",
    ["No; advisers cannot proceed with unsuitable recommendations under any circumstances", "Yes, but only if the client is a professional investor", "Yes, if the adviser provides a warning about the unsuitability in writing, documents the client's express wish to proceed against advice, and retains records", "Yes, without any documentation if the client signs a waiver"],
    2,
    "COBS 2R allows an insistent client to override a suitability recommendation, but requires (1) written suitability report explaining unsuitability, (2) written record of the client's insistence to proceed, and (3) file retention. A verbal acknowledgment or one-line waiver is insufficient; detailed documentation protects both parties."
  ),
  q("reg-ch6-t1-3", "cisi-reg", "reg-ch6", "6.3", "Vulnerable Clients & Consumer Duty", "fca-pra",
    "hard",
    "The FCA's Consumer Duty (effective July 2023 for new products) requires firms to act in the 'best interests' of consumers. How does this impact advice for a vulnerable client (low income, poor health)?",
    ["No change; advisers treat all clients the same", "Advisers must take additional steps to ensure suitability, monitor ability to bear losses, avoid complexity, use plain language, and proactively support the client", "Vulnerable clients receive no protection", "Advisers must refuse to serve vulnerable clients"],
    1,
    "Consumer Duty and COBS 2 require heightened care for vulnerable consumers: tailored advice, clear communication, monitoring of client circumstances, and proactive review. Vulnerability may be age, health, income, knowledge, or language barriers. Enhanced care is mandatory, not optional."
  ),
  q("reg-ch6-t1-4", "cisi-reg", "reg-ch6", "6.4", "PRA Supervisory Objectives", "fca-pra",
    "hard",
    "The PRA (Prudential Regulation Authority) supervises banks and insurers. What is its primary objective, and how does it differ from FCA consumer protection focus?",
    ["To maximize bank profitability", "To ensure financial stability and prevent systemic risk; the PRA focuses on prudential soundness (capital, liquidity) while the FCA focuses on conduct and consumer protection", "To regulate pricing", "No difference; PRA and FCA have identical roles"],
    1,
    "PRA's objective is financial stability (protecting the financial system from insolvency/systemic collapse). FCA's objective is consumer protection and market integrity. PRA supervises capital, liquidity, risk management of banks; FCA supervises conduct, suitability, conflicts. Both regulate, but with different emphases."
  ),

  // --- Ch7: FCA and PRA Authorisation of Firms and Individuals (categoryId: "authorisation")
  q("reg-ch7-t1-1", "cisi-reg", "reg-ch7", "7.1", "Authorisation Process for Firms", "authorisation",
    "hard",
    "A new investment advisory firm applies for FCA authorization. The firm has competent staff, but the FCA is concerned about governance and the robustness of its money handling procedures. Can the FCA refuse authorization, and on what grounds?",
    ["No; FCA must authorize any firm with qualified staff", "Yes; FCA can refuse if it is not satisfied the firm meets Threshold Conditions (including appropriate financial resources, systems, controls, and governance)", "Yes, but only if the firm is bankrupt", "FCA can only defer; it cannot refuse"],
    1,
    "The FCA's Threshold Conditions assess whether an applicant firm is 'fit and proper': financial resources, management competence, systems/controls, and governance (including money handling). Competent staff alone are insufficient if controls and governance are weak. Refusal is justified if conditions are not met."
  ),
  q("reg-ch7-t1-2", "cisi-reg", "reg-ch7", "7.2", "Approved Persons Regime & Senior Managers Regime", "authorisation",
    "hard",
    "Under the Senior Managers & Certification Regime (SM&CR), which statement correctly describes the difference between Certified Persons and Senior Managers?",
    ["Certified Persons have no accountability; Senior Managers have full accountability", "Senior Managers (CEOs, etc.) are accountable for their areas; Certified Persons must be assessed as fit and proper but have less formal accountability", "Both are identical in their accountability", "Neither is accountable; only the firm is responsible"],
    1,
    "SM&CR creates two tiers: (1) Senior Managers — named individuals accountable for prescribed functions (CEOs, risk, compliance heads) under the 'duty to take reasonable steps'; (2) Certified Persons — roles with market-facing responsibility, must be certified as fit and proper annually, but less formal accountability than SMs."
  ),
  q("reg-ch7-t1-3", "cisi-reg", "reg-ch7", "7.3", "Statements of Professional Standing (SPS)", "authorisation",
    "hard",
    "An FCA-authorized firm issues a Statement of Professional Standing (SPS) to a departing adviser. How long is this SPS valid for use at a new firm, and what does it confirm?",
    ["Indefinite; confirms the adviser's entire professional history", "12 months; confirms the adviser has maintained professional standards and is fit and proper to act as an adviser", "3 years; confirms regulatory history", "Not valid; SPSs are non-transferable"],
    1,
    "The SPS is valid for 12 months (from issue date) and confirms the adviser was in good standing, met CPD requirements, and was fit and proper when employed. It facilitates movement between authorized firms. After 12 months, a new SPS is needed. It does not confirm career history, only recent compliance."
  ),
  q("reg-ch7-t1-4", "cisi-reg", "reg-ch7", "7.4", "Record-Keeping & Governance Requirements", "authorisation",
    "hard",
    "A firm's record-keeping policy states that advice records must be kept for 3 years. A client files a complaint after 4 years. Can the firm's claim 'records not available' be used as a defense?",
    ["Yes; 3 years is the firm's policy", "No; MiFID II advice records must be retained for 5 years minimum; a 3-year policy is non-compliant, and the firm is liable for failure to produce records", "Yes; there is no regulatory requirement", "Records can be deleted after any timeframe"],
    1,
    "COBS 1R (record retention) requires 5-year retention for MiFID II advice records and 3 years for non-MiFID II business. A self-imposed 3-year policy for MiFID II is under-compliant. The firm cannot use an inadequate internal policy to escape liability; regulatory minima apply, and the burden is on the firm to retain records."
  ),
  q("reg-ch7-t1-5", "cisi-reg", "reg-ch7", "7.5", "Governance: Delegation & Outsourcing", "authorisation",
    "hard",
    "An advisory firm outsources its portfolio management to a third-party fund manager. The firm retains client relationships and suitability responsibility. If the fund manager breaches fiduciary duty, is the advisory firm liable?",
    ["No; liability is solely the fund manager's", "Yes; the firm remains liable to clients for all services, including outsourced functions, and must have adequate oversight and contractual safeguards", "Partially liable, shared equally", "Liability is eliminated by contractual transfer"],
    1,
    "Outsourcing does not eliminate the firm's regulatory responsibility to clients. Under COBS 1 (outsourcing rules), firms must: ensure outsourced service is compliant, maintain oversight, retain ultimate responsibility, and ensure contractual safeguards (including data protection, liability). The client-facing firm is the point of accountability."
  ),
  q("reg-ch7-t1-6", "cisi-reg", "reg-ch7", "7.6", "Fitness and Propriety (F&P)", "authorisation",
    "hard",
    "An Individual applying for FCA authorization has a criminal conviction for theft from 12 years ago, but has since rebuilt his career with clean compliance records. How should the FCA assess fitness and propriety?",
    ["Automatically refuse; any conviction disqualifies", "Consider the conviction in context: nature, seriousness, time elapsed, rehabilitation, and role (financial services roles handling money/assets carry stricter standards). A 12-year-old conviction with clean post-conviction record may pass F&P assessment", "Ignore the conviction; it is too old", "Accept without assessment"],
    1,
    "FCA's Fitness & Propriety assessment is holistic: relevant convictions, seriousness, time elapsed, rehabilitation, role risk, and compliance history. Financial services roles (especially those handling client money) carry high standards. A distant conviction with proven rehabilitation may pass F&P; current compliance record is significant."
  ),

  // --- Ch8: Regulatory Framework Relating to Financial Crime (categoryId: "financial-crime")
  q("reg-ch8-t1-1", "cisi-reg", "reg-ch8", "8.1", "Money Laundering & AML Compliance", "financial-crime",
    "hard",
    "A client makes unexplained large deposits from multiple overseas sources into their investment account over several weeks, with no clear business purpose. What is the firm's AML compliance obligation?",
    ["No action required; client money is client money", "Conduct Customer Due Diligence (CDD) to understand the source of funds, file a Suspicious Activity Report (SAR) with the NCA if laundering is suspected, and monitor the account", "Report to the police immediately", "Close the account without explanation"],
    1,
    "AML rules (COBS 6) require firms to: (1) conduct CDD on clients, (2) conduct Enhanced Due Diligence (EDD) if risks are elevated, (3) implement ongoing monitoring, (4) file SARs with the National Crime Agency if ML is suspected. Reporting to police is not the firm's role; NCA is the financial crime authority."
  ),
  q("reg-ch8-t1-2", "cisi-reg", "reg-ch8", "8.2", "Terrorist Financing", "financial-crime",
    "hard",
    "Firms are required to have procedures to prevent terrorist financing. How does this differ from AML, and what is the compliance trigger?",
    ["Identical to AML; no difference", "AML targets proceeds of crime; CFT (Counter-Financing of Terrorism) targets funds that may finance terrorism, regardless of origin. CFT compliance is triggered if the firm has reasonable suspicion (lower threshold than proof)", "No compliance obligation for terrorism", "Only applies to banks; investment advisers are exempt"],
    1,
    "CFT (Counter-Financing of Terrorism) is distinct from AML: it applies to all fund sources with terrorism risk, not just criminal proceeds. The compliance trigger is 'reasonable suspicion' (PSTR — Proceeds of Crime Act Terrorism Act Report), which is lower than criminal standard. All regulated firms (including advisers) must comply."
  ),
  q("reg-ch8-t1-3", "cisi-reg", "reg-ch8", "8.3", "Market Abuse & Insider Dealing", "financial-crime",
    "hard",
    "An adviser overhears senior management discussing a material acquisition before public announcement. The adviser immediately buys the target company's shares for his personal account. Is this illegal, and under which regime?",
    ["No; the adviser only overheard it", "Yes; under MAR (Market Abuse Regulation), this is insider dealing if: (1) the information is material and non-public, (2) the adviser had access to it in a professional capacity, and (3) he dealt on that basis", "Only illegal if the adviser directly asked for the information", "Only illegal for senior management"],
    1,
    "MAR insider dealing prohibits dealing on material non-public information accessed in a professional capacity. Mere overhearing does not excuse liability if the adviser knew or ought to have known the information was confidential. Professional access + material information + dealing = insider dealing. Restrictions apply to all market participants, not just managers."
  ),
  q("reg-ch8-t1-4", "cisi-reg", "reg-ch8", "8.4", "Data Protection & GDPR", "financial-crime",
    "hard",
    "A data breach exposes client personal data (names, account balances). The firm discovers the breach on Monday. When must the firm notify the ICO (Information Commissioner's Office) and what are the penalties for non-compliance?",
    ["Whenever convenient; no deadline", "Within 72 hours of discovery, unless the risk to individuals is low; ICO fines up to £17.5 million or 4% of global turnover", "Within 30 days", "No notification required if the firm is FCA-authorized"],
    1,
    "GDPR Article 33 requires breach notification to ICO within 72 hours of discovery (unless risk is low and security risk is minimal). Failure to notify incurs fines up to £17.5 million or 4% of global annual turnover. FCA authorization does not override GDPR; both sets of rules apply. Delay is non-compliant."
  ),
  q("reg-ch8-t1-5", "cisi-reg", "reg-ch8", "8.5", "Whistleblowing & PIDA Protection", "financial-crime",
    "hard",
    "A junior compliance officer discovers that clients are being overcharged fees without their knowledge. She reports internally to her manager, but the manager dismisses it. Can she make an external disclosure to the FCA, and what protection does she have?",
    ["No; external disclosure will result in dismissal", "Yes; PIDA (Public Interest Disclosure Act 1998) protects disclosures to prescribed regulators (FCA, NCA, etc.) in good faith about reasonably suspected wrongdoing; the firm cannot dismiss her for this protected disclosure", "Only if she first reports to the media", "Only if the FCA asks her to report"],
    1,
    "PIDA protects good-faith disclosures about suspected wrongdoing to prescribed regulators. The officer must have a reasonable belief of wrongdoing (which overcharging is). External reporting to the FCA is protected after a good-faith internal attempt has been dismissed. Dismissal for PIDA disclosure is automatically unfair."
  ),
  q("reg-ch8-t1-6", "cisi-reg", "reg-ch8", "8.6", "Sanctions & Export Controls", "financial-crime",
    "hard",
    "A firm identifies that a long-standing client now appears on the UK Sanctions List (issued by OFSI — Office of Financial Sanctions Implementation). What is the firm's obligation?",
    ["Continue business as normal until the client is confirmed convicted", "Immediately freeze all accounts/transactions, file a report with OFSI, and cease facilitating any transactions for the client", "Close the account but do not report", "Report only if the client complains"],
    1,
    "Sanctions regulations (including Sanctions and Anti-Money Laundering Act 2018) require firms to: (1) check clients against UK Sanctions Lists, (2) immediately freeze accounts/assets if a match is found, (3) report to OFSI within days (typically immediately for Terrorist Finance), and (4) continue monitoring. Civil or criminal liability applies for breaches."
  ),

  // --- Ch9: Complaints and Redress (categoryId: "complaints")
  q("reg-ch9-t1-1", "cisi-reg", "reg-ch9", "9.1", "FOS (Financial Ombudsman Service)", "complaints",
    "hard",
    "A client submits a complaint to the FOS about an investment recommendation made 5 years ago. The firm claims the complaint is out of time. What is the FOS jurisdictional test, and can the FOS accept the complaint?",
    ["FOS has no time limit", "The complaint must be made within 6 years of the event or within 3 years of when the client became aware of loss; the FOS can waive the time limit if there is 'good reason'", "Time limit is strictly 1 year; no exceptions", "FOS only accepts complaints within 2 months of the firm's final response"],
    1,
    "FOS jurisdiction for time-barred complaints: the complaint must be received within 6 years of the event or 3 years of awareness (DISP 2.8.1R). The FOS can extend this if there is 'good reason' (e.g., firm concealment, client vulnerability, misadvice complexity). A blanket 'out of time' rejection is not automatic."
  ),
  q("reg-ch9-t1-2", "cisi-reg", "reg-ch9", "9.2", "FOS Monetary Award Limits", "complaints",
    "hard",
    "The FOS issues a determination awarding a client £450,000 in compensation for negligent financial advice that caused loss. The firm refuses to pay, claiming the award exceeds FOS jurisdiction. Is the firm correct?",
    ["Yes; FOS limit is £300,000", "No; the FOS monetary award limit is £430,000 (for complaints about acts after 1 April 2023), which covers this award", "No limit; FOS can award any amount", "Limit is £100,000 only"],
    1,
    "The FOS monetary award limit (as of 1 April 2023) is £430,000 per complaint. Previous limits were £325,000. Firms are bound by FOS determinations within jurisdiction; refusal to pay is a breach. Amounts above the limit must be pursued via court."
  ),
  q("reg-ch9-t1-3", "cisi-reg", "reg-ch9", "9.3", "Complaints Handling Procedures & Timelines", "complaints",
    "hard",
    "A client submits a written complaint on 1 March. The firm sends an acknowledgment on 5 March and a substantive response on 30 April. Is this compliant with FCA rules, and why?",
    ["Yes; no specific deadline", "No; FCA rules require a substantive response within 8 weeks (or earlier if the firm intends to uphold), and the firm must acknowledge within 1 working day. A 60-day response is non-compliant", "Yes; 60 days is reasonable", "Deadlines apply only if the client requests them"],
    1,
    "DISP 1.6R requires firms to: (1) send acknowledgment within 1 working day, (2) issue substantive response within 8 calendar weeks of receipt. Late responses breach DISP. The firm's 60-day response exceeds the 8-week deadline. An exception is if the firm intends to uphold and resolves within 3 days."
  ),
  q("reg-ch9-t1-4", "cisi-reg", "reg-ch9", "9.4", "FSCS Compensation Limits & Coverage", "complaints",
    "hard",
    "A client holds investments worth £200,000 in a failed authorized firm. The firm was authorized to conduct 'investment business.' How much of this is protected under the FSCS?",
    ["All £200,000", "£85,000 (standard FSCS investment protection limit)", "£170,000 (double limit for joint accounts)", "Nothing; investment protection only applies to deposits"],
    1,
    "FSCS investment business cover is up to £85,000 per person per authorized firm. For joint accounts, the limit is £170,000. Deposits (not investments) are covered up to £85,000 per person per institution. Temporary high balances (deposits only, not investments) up to £1 million apply for 12 months post-transfer."
  ),

  // --- Ch10: FCA Conduct of Business (categoryId: "conduct")
  q("reg-ch10-t1-1", "cisi-reg", "reg-ch10", "10.1", "Client Categorisation: Retail/Professional/ECP", "conduct",
    "hard",
    "A client is a non-financial company with turnover of £100 million. The firm classifies them as a 'professional client' and provides no suitability assessment. Is this compliant, and what is the test for professional client status?",
    ["Yes; large companies are automatically professional", "No; professional client status requires either: (1) FCA-registered financial institution, (2) large company (>€250m turnover, €125m balance sheet, or €25m equity), OR (3) client with professional experience and written request. A £100m turnover company may not meet F&P threshold", "All companies are professional clients", "Only banks are professional clients"],
    1,
    "COBS 2.5R defines professional clients by objective criteria (size, experience) or written agreement. A £100m turnover company does NOT automatically qualify (threshold is €250m). Even professional clients may request consumer protection; firms must have written evidence of professional status."
  ),
  q("reg-ch10-t1-2", "cisi-reg", "reg-ch10", "10.2", "Suitability Assessment Process", "conduct",
    "hard",
    "An adviser recommends a complex derivatives strategy to a retail client. The client has a 5-year time horizon, moderate risk appetite, and no prior derivatives experience. What suitability defect is apparent?",
    ["No defect; time horizon is adequate", "The recommendation is unsuitable because complexity exceeds the client's knowledge/experience, and derivatives carry concentration risk inappropriate for the client's profile. Suitability requires matching product complexity to client capability", "Derivatives are always unsuitable", "5-year horizon is too long for derivatives"],
    1,
    "COBS 9 suitability requires matching product complexity to client knowledge/experience. A retail client with no derivatives experience and moderate risk appetite should not be advised into complex derivatives unless they can demonstrably understand risks. The adviser must assess knowledge, not assume ability."
  ),
  q("reg-ch10-t1-3", "cisi-reg", "reg-ch10", "10.3", "Appropriateness (Non-Advised Services)", "conduct",
    "hard",
    "A retail client uses a non-advised platform to select their own investment. The firm is not providing 'advice' under COBS 1. However, the firm must still carry out 'appropriateness assessments' before execution. What is the distinction?",
    ["Appropriateness = suitability; they are the same", "Suitability (full advice) requires detailed analysis of client circumstances; appropriateness (non-advised) requires the firm to assess whether the investment is appropriate for the client's knowledge/experience. Appropriateness is a lighter-touch assessment", "No assessment is required for non-advised services", "Appropriateness applies only to professional clients"],
    1,
    "COBS 10R distinguishes: (1) Suitability = full analysis of needs, profile, objectives; (2) Appropriateness = lighter assessment for non-advised services, based on knowledge/experience only. Appropriateness is still mandatory for non-advised services; firms cannot execute unsuitable-looking trades without warning."
  ),
  q("reg-ch10-t1-4", "cisi-reg", "reg-ch10", "10.4", "Best Execution & Client Money", "conduct",
    "hard",
    "A firm executes a trade for a client at a price 2% worse than the best available price that day. The client's order instructions did not specify execution venue. Is the firm in breach of best execution, and what is the mitigation?",
    ["No breach; best execution has no specific standard", "Potentially a breach; best execution (COBS 11) requires the firm to achieve the best possible terms in the circumstances. A 2% price slippage requires justification (venue outage, liquidity constraints, order size). Without clear justification, the firm is in breach", "No breach if the venue was authorized", "Best execution is only for professional clients"],
    1,
    "Best execution (COBS 11R) is a core obligation for all retail and professional clients (not eligible counterparties). The firm must execute at the best terms available, considering price, costs, speed, and venue. A 2% slippage requires documented business justification; routine slippage without mitigation is a breach."
  ),

  // ═══════════════════════════════════════════════════════════════
  // BOOK 3: FINANCIAL PLANNING & ADVICE ED9 — (~42 questions)
  // ═══════════════════════════════════════════════════════════════

  // --- Ch1: Financial Planning (categoryId: "fin-planning")
  q("fpa-ch1-t1-1", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Fundamentals", "fin-planning",
    "hard",
    "The financial planning process is a cyclical engagement. Which stage comes FIRST, and what is the key deliverable before advice can be given?",
    ["Asset allocation; identify investments", "Fact-finding and analysis; establish the client's current position, goals, timeline, and constraints (hard facts: income, assets, liabilities; soft facts: attitudes, values, priorities)", "Making recommendations", "Implementation"],
    1,
    "Financial planning begins with comprehensive fact-finding: income, expenses, assets, liabilities, family structure (hard facts) and risk appetite, priorities, timelines (soft facts). Without this foundation, recommendations are speculative. Analysis of this data informs the financial plan."
  ),
  q("fpa-ch1-t1-2", "cisi-fpa", "fpa-ch1", "1.2", "Collecting Hard and Soft Facts", "fin-planning",
    "hard",
    "During fact-finding, a client states they are 'risk-averse' but their current portfolio is 95% equities. Which insight does this reveal, and what is the correct adviser response?",
    ["Equities are always inappropriate", "Mismatch between stated risk tolerance (soft fact) and current investments (hard fact); this suggests either: (1) the portfolio was not based on their actual profile, (2) their stated risk is inaccurate, or (3) circumstances have changed. The adviser must explore this discrepancy and reconcile facts", "No issue; soft facts are not important", "The adviser should ignore the soft fact statement"],
    1,
    "Fact-finding reveals discrepancies between soft facts (stated attitudes) and hard facts (current actions). A risk-averse client with 95% equities signals misalignment. The adviser must investigate: Was the portfolio poorly advised? Is the client's stated risk inaccurate? Have circumstances changed? Resolution is essential for credible planning."
  ),
  q("fpa-ch1-t1-3", "cisi-fpa", "fpa-ch1", "1.3", "Streamlined Advice & Simplified Planning", "fin-planning",
    "hard",
    "The FCA permits 'streamlined advice' in certain limited scenarios (e.g., pension annuity purchase). How does streamlined advice differ from full advice, and what is the key limitation?",
    ["Streamlined advice is less regulated", "Streamlined advice is permitted for defined product/circumstance scenarios (e.g., buying an annuity near retirement); it requires less extensive fact-finding but MUST still assess suitability to the defined matter; it cannot be used for complex, multi-faceted financial planning", "Streamlined advice has no limitations", "Streamlined advice is faster but less compliant"],
    1,
    "Streamlined advice is a regulatory concession for specific, defined situations (annuity switching, pension transfers in certain contexts). It reduces fact-finding scope but NOT suitability rigor. It cannot substitute for full advice in complex planning. The adviser must still assess suitability to the narrow scope."
  ),
  q("fpa-ch1-t1-4", "cisi-fpa", "fpa-ch1", "1.4", "Analysing Client's Financial Status & Establishing Priorities", "fin-planning",
    "hard",
    "A client is age 45, earns £80,000 p.a., has £200,000 in savings, £100,000 in pension, a mortgage of £300,000, and two dependent children. They have no emergency fund. What is the correct priority ranking for financial planning?",
    ["(1) Invest excess savings, (2) Pay off mortgage, (3) Build pension", "(1) Establish £12–15k emergency fund (3–6 months expenses), (2) Restructure debt and maximize pension tax relief, (3) Then invest remaining capacity; the sequence addresses immediate risk, tax efficiency, and long-term growth", "(1) Buy life insurance, (2) Maximize pension, (3) Buy an investment fund", "(1) Invest aggressively, (2) Clear the mortgage immediately"],
    1,
    "Sound financial planning prioritizes: emergency fund (liquidity safety net), then debt management (especially high-cost debt), then tax-efficient savings (pension + ISA), then growth investments. Skipping liquidity to invest or over-paying the mortgage at expense of pension is inefficient. Proper sequencing is essential."
  ),
  q("fpa-ch1-t1-5", "cisi-fpa", "fpa-ch1", "1.5", "Analysing Existing Arrangements Review", "fin-planning",
    "hard",
    "During a review of the client's existing arrangements, the adviser discovers the client holds a pension fund with 2% Annual Management Charge (AMC) and an investment fund with 1.75% AMC. Industry average is 0.5–0.75%. What should the adviser do?",
    ["Ignore the charges; they are standard", "Review whether the charges are justified by value (active management, service, diversification). If no clear justification, recommend lower-cost alternatives; reducing charges from 2% to 0.5% can add 1.5% p.a. to long-term returns (substantial over 20+ years)", "Higher charges guarantee better returns", "Always recommend the most expensive funds"],
    1,
    "Charges analysis is a core part of planning advice. High charges without demonstrated value represent drag on returns. The power of compound savings means 1.5% p.a. cost difference multiplies significantly over decades. Adviser must assess value-for-money and recommend cost optimization where appropriate."
  ),
  q("fpa-ch1-t1-6", "cisi-fpa", "fpa-ch1", "1.6", "Financial Planning Process & Client Communication", "fin-planning",
    "hard",
    "After creating a financial plan, the adviser presents 5 alternative recommendation packages with different risk/return profiles. The client is overwhelmed. What is the adviser's obligation?",
    ["Present all alternatives and let the client choose alone", "Simplify presentation to 2–3 coherent options with clear trade-offs, explain the adviser's recommended option and rationale (suitability), allow client to ask questions, and document the client's choice", "Only present one option", "Avoid explaining rationale to prevent bias"],
    1,
    "COBS advice requires the adviser to: (1) present clear recommendations, (2) explain rationale and suitability, (3) present limited alternatives (if any) in digestible format, (4) ensure client comprehension, (5) document. Overwhelming a client with five options without guidance is not suitability; it shifts decision burden unfairly."
  ),
  q("fpa-ch1-t1-7", "cisi-fpa", "fpa-ch1", "1.7", "Fact-Finding: Income and Expenditure Profiling", "fin-planning",
    "hard",
    "A client reports annual expenses of £50,000, but examination of bank statements shows £62,000 annually (including variable expenses like car maintenance, holidays, insurance renewals). Which figure should the adviser use for planning, and why?",
    ["Use £50,000; it is the client's stated figure", "Use £62,000 (evidenced by bank statements); self-reported figures often underestimate discretionary spending. Planning must be based on actual, documented spend to be realistic", "Average both at £56,000", "Use £50,000 and ask the client to cut spending"],
    1,
    "Fact-finding requires verifying figures against actual bank records. Self-reported spending is consistently underestimated by 10–30%, especially discretionary items (dining, subscriptions, gifts, car costs). A plan based on understated expenditure is unrealistic and will fail. The adviser must reconcile figures."
  ),
  q("fpa-ch1-t1-8", "cisi-fpa", "fpa-ch1", "1.8", "Financial Goals Hierarchy & Realistic Timeframes", "fin-planning",
    "hard",
    "A client wants to: (1) retire at age 55 in 10 years with £50,000 p.a. income, (2) fund two children's university (£25,000 each in 3 and 5 years), and (3) save £10,000 p.a. for discretionary investment. Current capacity is £15,000 p.a. savings. How should the adviser approach this?",
    ["Accept all goals without analysis", "Prioritize: (1) University funding (near-term, non-negotiable), (2) Retirement goal (medium-term, requires detailed analysis of retirement date feasibility), (3) Discretionary savings (contingent on achieving 1 & 2). Recommend cash flow modeling to test feasibility; some goals may require adjustment", "Reject all goals as unachievable", "Fund retirement first and sacrifice education"],
    1,
    "Multi-goal planning requires prioritization. Near-term, obligatory goals (children's education) typically rank first. Retirement goal must be tested against capacity (£15k p.a. for 10 years = £150k + investment growth; required for £50k p.a. income is often much higher). Discretionary goals are contingent. Adviser must model trade-offs."
  ),

  // --- Ch2: Financial Protection (categoryId: "protection")
  q("fpa-ch2-t1-1", "cisi-fpa", "fpa-ch2", "2.1", "Market Factors, Inflation, and Protection Planning", "protection",
    "hard",
    "Inflation is running at 4% p.a. A client has a 30-year mortgage at 2.5% fixed rate and earns £50,000 salary. Which financial risks does inflation present, and how should protection planning address them?",
    ["Inflation is beneficial for the borrower; no risk", "Inflation erodes purchasing power of income (salary needs rise), but fixed-rate mortgage becomes advantageous; protection planning should address: income risk (illness/unemployment would reduce mortgage affordability), life risk (dependents), and inadequate liquid savings. Income protection insurance is key", "Inflation benefits savers", "No adjustments needed for protection"],
    1,
    "Inflation combined with fixed-income mortgage creates vulnerability: a 4% inflation erodes real income, so illness/job loss becomes catastrophic. Protection planning must address income continuity (income protection insurance), family security (life insurance), and emergency reserves. Fixed-rate mortgages are a hedge, but income risk requires active mitigation."
  ),
  q("fpa-ch2-t1-2", "cisi-fpa", "fpa-ch2", "2.2", "State Benefits & Universal Credit", "protection",
    "hard",
    "A self-employed client, age 35, has a serious illness and cannot work. They have no savings and a family to support. What state support is available, and what protection gap exists?",
    ["Full income replacement via benefits", "Limited support: Universal Credit (means-tested, typically £1000–1500/month for family) + Statutory Sick Pay (if employee, not self-employed); self-employed = no SSP, UC is means-tested and slow. Gap is substantial; private income protection insurance is essential", "No state support for self-employed", "Full support regardless of savings"],
    1,
    "State support for self-employed illness is limited: UC is means-tested (capital limits apply), and SSP only for employees. A self-employed person with illness faces income loss and slow UC processing. Protection gap is severe; private income protection is essential for self-employed clients."
  ),
  q("fpa-ch2-t1-3", "cisi-fpa", "fpa-ch2", "2.3", "Life Assurance: Term Insurance", "protection",
    "hard",
    "A 40-year-old client with £500,000 mortgage, two young children, and earns £60,000 p.a. requires life insurance. What type (term vs. whole-of-life) is most appropriate, and what term length?",
    ["Whole-of-life; infinite duration", "Level term insurance, 20–25 year term (until mortgage repayment and children independence); term is cost-effective for temporary needs (mortgage liability, childcare obligations), while whole-of-life is expensive and suited only to permanent IHT/legacy needs", "Term insurance, 5 years only", "Endowment insurance exclusively"],
    1,
    "Protection planning matches insurance type to need. Temporary needs (mortgage, dependent children until age 18–25) suit term insurance. The client's liabilities reduce over time; a 20–25 year term aligns with this. Whole-of-life is 4–5x more expensive and appropriate only if ongoing protection is needed (e.g., IHT)."
  ),
  q("fpa-ch2-t1-4", "cisi-fpa", "fpa-ch2", "2.4", "Life Assurance: Whole-of-Life & Endowment", "protection",
    "hard",
    "A high-net-worth client (£2 million estate) has a will but no insurance to cover estate IHT liability (est. £400,000). Term life insurance expires before death. What is the appropriate solution?",
    ["No insurance needed; estate can pay IHT", "Whole-of-life insurance written into a discretionary trust to provide a tax-free lump sum to cover IHT on death; alternative is Flex IHT planning (gifts, reliefs), but insurance ensures certainty and avoids reliance on changing rules", "Endowment insurance", "Term insurance only"],
    1,
    "Permanent IHT protection needs suit whole-of-life insurance, typically placed in a discretionary trust so proceeds are tax-free to estate. Term insurance expires before death (unreliable for IHT). Flex planning (gifts, business relief) is complementary but uncertain; insurance provides guaranteed funds to cover tax without forced sales."
  ),
  q("fpa-ch2-t1-5", "cisi-fpa", "fpa-ch2", "2.5", "Income Protection Insurance", "protection",
    "hard",
    "A client is considering income protection insurance with a 13-week deferred period vs. a 52-week deferred period. The 52-week option costs £500/year less. What trade-off exists, and what is the adviser's recommendation?",
    ["Longer deferral = always better savings", "13-week deferred begins payments faster (3 months off work); 52-week delays until 12 months off work. The choice depends on emergency fund size: large fund (6+ months expenses) = 52-week acceptable; small fund = 13-week essential. A 3-month income loss would be catastrophic without reserves", "52-week deferral is always superior", "Deferred period is irrelevant"],
    1,
    "Deferral period trade-off: longer = lower premium but greater personal cash flow risk. Client must bridge the gap with emergency fund. A client with £20k emergency fund can afford 52-week deferral; one with £5k emergency fund needs 13-week or even 4-week deferral. Adviser must match deferred period to emergency reserves."
  ),
  q("fpa-ch2-t1-6", "cisi-fpa", "fpa-ch2", "2.6", "Critical Illness Insurance", "protection",
    "hard",
    "A 45-year-old client with a family and a mortgage is diagnosed with cancer and survives but cannot return to work for 18 months. How does Critical Illness (CI) insurance respond, and is it appropriate for this client?",
    ["CI insurance does not cover cancer", "CI insurance pays a lump sum on diagnosis of a defined critical illness (including cancer, heart attack, stroke); the lump sum can cover mortgage, income gap, and rehabilitation costs. It is appropriate for clients with dependents and high fixed costs (mortgage)", "CI insurance covers only permanent disability", "CI insurance pays ongoing benefits"],
    1,
    "CI insurance is a lump-sum benefit on diagnosis of specified illnesses (cancer, MI, stroke). It bridges gaps that income protection (ongoing) and life insurance (death only) do not cover: recovery period without work, rehabilitation costs, mortgage shortfall. Appropriate for clients with mortgages and dependents."
  ),
  q("fpa-ch2-t1-7", "cisi-fpa", "fpa-ch2", "2.7", "Long-Term Care & Equity Release", "protection",
    "hard",
    "A 75-year-old client has substantial property wealth (£500,000 home, no mortgage) but limited income (£15,000 p.a. pension). They may require care (est. £30,000+ p.a.). What planning options exist?",
    ["Ignore care costs; state will fund all care", "Options: (1) Equity release (lifetime mortgage/home reversion) to release home value as income, (2) Long-term care insurance (may be unsuitable at 75, premiums high), (3) Plan for asset depletion + state funding (means-tested help after £14,250 threshold), (4) Family support arrangement. Adviser must model timing/costs", "Sell home immediately", "No planning possible"],
    1,
    "Elderly clients with asset-rich, income-poor profiles face care costs. Equity release unlocks home value; state help is means-tested (£14,250 capital threshold, 2024-25). LTC insurance at 75 is usually unaffordable. Adviser must model care cost scenarios and recommend hybrid approach: potentially equity release + savings + eventual state support."
  ),
  q("fpa-ch2-t1-8", "cisi-fpa", "fpa-ch2", "2.8", "Private Medical Insurance (PMI) & Gaps", "protection",
    "hard",
    "A self-employed client has family PMI covering hospital and specialist care. During a health scare, they need physiotherapy costing £3,000 and are shocked to find PMI does not cover it. What gaps does PMI typically have, and how should they be managed?",
    ["PMI covers everything", "PMI typically excludes: chronic conditions (diabetes, asthma maintenance), preventive/routine care, pregnancy, dental, physio, and mental health. Gaps can be covered by: adding optional riders (limited), cash plan insurance (dental/physio), or self-insurance (savings). Adviser should disclose gaps clearly", "PMI covers physio always", "No gaps in PMI"],
    1,
    "PMI gaps are substantial: physiotherapy, dental, mental health, ongoing chronic condition management. A client must understand what PMI does NOT cover before purchasing. Cash plan insurance (e.g., VitalityHealth) covers routine/preventive; standalone physio/dental insurance plugs other gaps. Full disclosure of gaps is essential."
  ),
  q("fpa-ch2-t1-9", "cisi-fpa", "fpa-ch2", "2.9", "Estate Planning & Will Basics", "protection",
    "hard",
    "A client dies intestate (without a will) with an estate of £600,000 (£300,000 house, £300,000 investments). They have a surviving spouse and two adult children. How is the estate distributed?",
    ["All to spouse", "Under intestacy rules (Administration of Estates Act 1925): spouse receives first £322,000 (2025) + half of remainder (£139,000), so £461,000; each child receives half the remainder (£69,500 each). This may not reflect client's wishes and incurs unnecessary legal costs. A valid will avoids this", "All to children", "To the state"],
    1,
    "Intestacy rules are statutory and inflexible; they often misallocate estates. A spouse+children intestacy splits capital between spouse and children, reducing spouse's security. Estate planning (valid will, possibly trust) allows customization, IHT planning, and reduces probate delays/costs. Many clients prefer non-statutory arrangements."
  ),
  q("fpa-ch2-t1-10", "cisi-fpa", "fpa-ch2", "2.10", "Key Person Insurance for Business Owners", "protection",
    "hard",
    "A business owner is a 50-year-old consultant generating £150,000 p.a. revenue directly through client relationships. If the owner dies or becomes critically ill, the business loses income. Is Key Person Insurance appropriate?",
    ["No; only applies to large companies", "Yes; Key Person Insurance (life or CI) protects the business from revenue loss if a critical individual dies/becomes ill. Proceeds can fund temporary cover, buyout of heir if needed, or debt repayment. Sum assured should reflect business impact (1–3x annual revenue/profit contribution)", "Only for employees", "Not tax-deductible"],
    1,
    "Key Person Insurance is essential for small/medium businesses where one person drives revenue (consultant, specialist, owner). Sum assured = revenue/profit impact (1–3 years contribution). Proceeds replace lost earnings, fund temporary hire, or support orderly wind-down. Often overlooked but critical protection."
  ),

  // --- Ch3: Retirement Planning (categoryId: "retirement")
  q("fpa-ch3-t1-1", "cisi-fpa", "fpa-ch3", "3.1", "State Pension Entitlement & Qualifying Years", "retirement",
    "hard",
    "A client, age 52, has lived and worked in the UK for 20 years (15 qualifying years for state pension) and plans to retire at 60. They can still contribute for 8 more years (total 23 qualifying years). What is their state pension entitlement?",
    ["£0; they have not reached state pension age", "Requires 35 qualifying years for full new state pension (~£11,500/year, 2024-25); with 23 years, they will receive ~60% of full rate (~£6,900/year) if retirement at 60, but state pension age is currently 66, so they cannot claim until then", "£11,500 p.a. at age 60", "No requirement for qualifying years"],
    1,
    "State pension requires: (1) 10 minimum qualifying years for any payment, (2) 35 years for full new state pension rate (~£11,500). A client with 23 qualifying years receives pro-rata (66% of full). State pension age is currently 66 (rising); claiming early is not possible. The client must plan around state pension age, not preferred retirement age."
  ),
  q("fpa-ch3-t1-2", "cisi-fpa", "fpa-ch3", "3.2", "Defined Contribution (DC) Pension Scheme Taxation", "retirement",
    "hard",
    "A client contributes £10,000 to a DC pension via net pay arrangement (employer also contributes £5,000). Client earns £50,000. What tax relief applies, and what is the total tax-relieved contribution?",
    ["No tax relief for net pay", "Net pay arrangement: employee contribution is taken from gross salary before tax, so tax relief is automatic (£10,000 reduces taxable income); employer contribution (£5,000) is not subject to income tax. Total tax-relieved contribution = £15,000", "Full relief only on employer contribution", "No employer contributions receive relief"],
    1,
    "Net pay arrangement provides automatic tax relief (contribution reduces gross salary). A 20% taxpayer saves £2,000 income tax on £10,000 contribution. Employer contributions are also tax-efficient (not subject to income tax). The client receives relief on both employee and employer contributions via gross pay."
  ),
  q("fpa-ch3-t1-3", "cisi-fpa", "fpa-ch3", "3.3", "Annual Allowance & Lifetime Allowance", "retirement",
    "hard",
    "A client in the 2024-25 tax year receives a pension contribution of £80,000 (employer: £50,000, employee contribution relief: £30,000). Their adjusted income is £120,000. What Annual Allowance charge applies?",
    ["No charge; no limit on contributions", "Annual Allowance is £60,000; contributions of £80,000 exceed this by £20,000. A £20,000 excess charge applies (calculated as 40% of excess = £8,000 to HMRC, unless client pays the excess). Adjusted income ≥£110,000 triggers tapered allowance (down to £40,000), so this client's allowance is tapered", "£20,000 charge on the client", "Unlimited contributions allowed"],
    1,
    "Annual Allowance (2024-25) is £60,000, but tapers from £110,000 adjusted income down to £40,000 at £210k income. Client's £80k contribution against tapered allowance of £50k (approx.) = £30k excess. Excess charge: 40% = £12k tax. Contribution limits are strict and often unknowingly breached by high earners."
  ),
  q("fpa-ch3-t1-4", "cisi-fpa", "fpa-ch3", "3.4", "Lifetime Allowance (abolished) & Current Taxation", "retirement",
    "hard",
    "The Lifetime Allowance (LTA) was abolished in April 2023. A client with a pension pot of £1.5 million before abolition now wants to understand their tax position on retirement withdrawals. What is the current tax treatment?",
    ["25% charge on anything above LTA applies (LTA was £1.073m)", "LTA has been abolished; no lifetime allowance charge applies now. All pension pot withdrawals are taxed according to flexaccess drawdown rules: 25% tax-free, remainder taxed as income (20–45% depending on tax band). The £1.5m pot is no longer subject to an LTA ceiling", "LTA of £1.5m applies", "No tax on pension withdrawals"],
    1,
    "LTA abolition (April 2023) removed the lifetime ceiling tax charge. Post-abolition, clients can accumulate unlimited pension pots; only drawdown is taxed (25% tax-free, remainder as income tax). Pre-abolition LTA charges are not revisited. This change benefits high accumulators but creates flexibility complexity."
  ),
  q("fpa-ch3-t1-5", "cisi-fpa", "fpa-ch3", "3.5", "DB vs DC Schemes & Client Risk", "retirement",
    "hard",
    "A client has both a Defined Benefit (DB) final salary pension (£15,000/year) and a DC pot (£200,000). The DB pension is inflation-linked. They are age 55. What are the key differences in retirement security, and which should they prioritize?",
    ["DB and DC are the same", "DB provides guaranteed, inflation-linked income (£15k + inflation), regardless of investment returns/longevity. DC is investment-dependent and has longevity risk. DB offers superior retirement security; the DC pot is supplementary. Do NOT transfer DB (transfer values are often poor value for clients; if uncertain, keep DB)", "DC provides better security", "Neither provides security"],
    1,
    "DB provides defined lifetime income (inflation-linked); DC transfers longevity/investment risk to the client. A £15k DB pension is valuable protection; its transfer value (often only 15–20x annual payment) is typically poor value. Clients who transfer DB often regret it (lower retirement income). Adviser must strongly advise AGAINST DB transfer unless clear, personal reasons exist."
  ),
  q("fpa-ch3-t1-6", "cisi-fpa", "fpa-ch3", "3.6", "Auto-Enrolment & Minimum Contributions", "retirement",
    "hard",
    "An employee earns £20,000 p.a. and is auto-enrolled into the company DC pension. The employer contribution is 3%, and the employee contribution is 5%, totaling 8%. What is the tax relief position, and is the employee contribution rate acceptable?",
    ["8% total is excessive; no contributions should be made", "Auto-enrolment minimum is 8% (3% employer + 5% employee, as of April 2019). The employee contribution of 5% gross receives tax relief via payroll (20% taxpayer saves £1,000 p.a. on £5,000 gross contribution). Net cost to employee: ~£4,000 p.a. This meets auto-enrolment requirement", "No tax relief on employee contributions", "Tax relief only on employer contribution"],
    1,
    "Auto-enrolment minimum (from April 2019) is 8% total (3% employer + 5% employee). An employee on £20k paying 5% gross receives tax relief: net cost is 4% of salary (~£800/year). This is the statutory minimum; employers can offer higher contributions."
  ),
  q("fpa-ch3-t1-7", "cisi-fpa", "fpa-ch3", "3.7", "Flexible Access Drawdown (FAD) & MPAA", "retirement",
    "hard",
    "A client, age 55, withdraws £40,000 from their DC pension via flexi-access drawdown. They also earn £60,000 from self-employment. What is the tax consequence, and does it trigger the Money Purchase Annual Allowance (MPAA)?",
    ["No tax on pension withdrawal", "The £40,000 withdrawal is 25% tax-free (£10k), remainder (£30k) is taxable income. Total taxable income = £90,000, tax at 40% = £36,000. Additionally, any further pension contribution in the same tax year will be restricted to £10,000 (MPAA), not £60,000 annual allowance", "Only 10% income tax", "No MPAA restriction"],
    1,
    "FAD withdrawal of £40k: 25% is tax-free, remainder is taxed as income. More importantly, accessing FAD triggers MPAA (Money Purchase Annual Allowance) = £10,000 annual contribution limit (vs. normal £60,000). This severe restriction lasts the rest of the client's lifetime. Client must understand MPAA before taking FAD."
  ),
  q("fpa-ch3-t1-8", "cisi-fpa", "fpa-ch3", "3.8", "Annuities vs. Drawdown: Trade-offs", "retirement",
    "hard",
    "A client, age 65, has a £500,000 DC pension pot. Current annuity rates: 4% p.a. (£20,000/year, guaranteed for life). Drawdown assumed return: 5% p.a. If the client lives to 85, which option provides better outcomes?",
    ["Annuity always best", "Drawdown (5% assumed growth) theoretically provides higher income long-term IF markets perform well and longevity risk is manageable; however, annuity provides income certainty, removing investment risk and longevity risk. Trade-off: drawdown offers growth potential but requires discipline; annuity locks in 4%, eliminates flexibility", "Annuity only suitable for low earners", "Both are identical"],
    1,
    "Annuity vs. drawdown: Annuity provides certainty, removes longevity/investment risk, but is inflexible and no death benefit. Drawdown requires investment discipline, carries market/longevity risk, but offers flexibility and potential higher returns. Client psychology and capacity for loss are key: cautious clients = annuity; confident investors = drawdown."
  ),
  q("fpa-ch3-t1-9", "cisi-fpa", "fpa-ch3", "3.9", "Uncrystallized Fund Pension Lump Sums (UFPLS)", "retirement",
    "hard",
    "A client, age 62, with a DC pension of £600,000 takes an UFPLS of £150,000 (with 25% being tax-free lump sum). They do not access drawdown or annuity. What is the tax position?",
    ["All UFPLS is tax-free", "UFPLS: first 25% is tax-free (£37,500), remainder (£112,500) is taxable as income (20/40% depending on tax band). Critically, taking UFPLS does NOT trigger MPAA unless drawdown is also accessed. However, 75% of UFPLS is treated as net-of-tax withdrawal (tax must be paid)", "No tax on any pension", "100% is subject to income tax"],
    1,
    "UFPLS is 25% tax-free, 75% taxable as income. Advantage: does not trigger MPAA if UFPLS is the only withdrawal. Disadvantage: higher income tax in the year of withdrawal. Adviser must model tax position in the specific tax year and consider whether multiple small UFPLSs spread across years reduce tax burden."
  ),
  q("fpa-ch3-t1-10", "cisi-fpa", "fpa-ch3", "3.10", "Pension Scheme Charges & Governance", "retirement",
    "hard",
    "A DC pension scheme offers a default fund charging 0.8% AMC + 0.5% platform fees = 1.3% total, while a comparable index fund is available at 0.2% AMC. Over 30 years to retirement, how significant is this fee gap?",
    ["Fee difference is negligible", "1.1% annual fee gap compounds significantly: at 5% investment return, a £100k pot grows to £432k (at 1.3% costs) vs. £551k (at 0.2% costs) = £119k difference (27% of final value lost to fees). This is material and justifies fund review. Default funds often charge heavily; low-cost alternatives should be offered", "Higher fees guarantee better returns", "Fees do not impact returns"],
    1,
    "Fee drag over 30 years is enormous: 1.1% annual difference reduces final pot by 20–25%. Advisers must scrutinize pension charges and advocate for low-cost alternatives. Default funds often lock in high fees; scheme trustees should offer low-cost passives. Fee audit is a key planning step."
  ),

  // --- Ch4: Retirement Solutions (categoryId: "retirement-solutions")
  q("fpa-ch4-t1-1", "cisi-fpa", "fpa-ch4", "4.1", "Post-Retirement Investment Strategies", "retirement-solutions",
    "hard",
    "A recently retired client, age 67, has a £800,000 portfolio (60% equities, 40% bonds). They are withdrawing £35,000 p.a. for living costs. Sequence-of-returns risk is a concern. What is the optimal strategy?",
    ["Stay 100% equities for maximum growth", "Shift toward a 'time-segmented' approach: hold 3–5 years of withdrawals (£105–175k) in cash/bonds to buffer market downturns, invest remaining £625–695k in equities/growth for inflation protection. This removes forced selling in down markets and preserves capital. Review asset allocation annually", "All bonds for safety", "No strategy; let it be"],
    1,
    "Sequence-of-returns risk is acute in early retirement: a bear market immediately after retirement forces withdrawals at low valuations, locking in losses. Solution: bucket/time-segment strategy holds 3–5 years of spending in low-volatility assets, removes forced selling, allows markets to recover. Remaining portfolio invests for long-term growth."
  ),
  q("fpa-ch4-t1-2", "cisi-fpa", "fpa-ch4", "4.2", "Equity Release & Downsizing", "retirement-solutions",
    "hard",
    "A retiree, age 72, has a £600,000 home (no mortgage), £100,000 liquid savings, and pension income of £20,000 p.a. Care costs may arise (£30,000 p.a. estimated). Equity release is suggested. What are the pros/cons?",
    ["Always recommended for all retirees", "Pros: unlocks home value (£200–300k typically), provides liquidity without selling home, no forced repayment during lifetime (interest rolls up). Cons: interest compounds (balance grows), reduces inheritance to heirs, is complex (costly), and means-testing may reduce state help. Better first: use savings reserve, then means-tested help, then equity release", "Never recommended; always sell home", "No impact on finances"],
    1,
    "Equity release is a late-resort option: expensive (4–7% interest compounds), reduces inheritance, and complicates state benefits means-testing. Better sequencing: (1) use liquid savings, (2) downsize home if willing, (3) plan for means-tested help (state pays care if savings <£14,250), then (4) equity release only if essential. Adviser must explain all options."
  ),
  q("fpa-ch4-t1-3", "cisi-fpa", "fpa-ch4", "4.3", "Business Assets Relief (BAR) & IHT Planning", "retirement-solutions",
    "hard",
    "A client owns a small business (£500,000 value) operated as a sole trader for 10 years. The client plans to pass it to their son on death. Does Business Assets Relief (BAR) apply to IHT liability?",
    ["No; sole traders do not qualify", "Yes; sole trader business assets qualify for 100% BAR (IHT exemption) if held for ≥2 years and used in active business (not just investment property). The £500k passes to the son with no IHT liability (assuming no other large estate). This is a key IHT planning tool", "Only applies to companies", "50% relief only"],
    1,
    "Business Assets Relief is a valuable IHT exemption: 100% relief on qualifying business assets (sole trader, partnership, unlisted company) held 2+ years in active trade. The £500k business passes IHT-free to heirs. Planning: document active use, retain for 2+ years, and communicate BAR benefit. Often underutilized by advisers."
  ),
  q("fpa-ch4-t1-4", "cisi-fpa", "fpa-ch4", "4.4", "IHT Changes from April 2026", "retirement-solutions",
    "hard",
    "From April 2026, UK IHT rules change: main residence exemption ('nil-rate band for property') becomes available. A client with a £1.2m estate (£700k home, £500k investments) and two children plans to leave assets equally to charity and family. What is the IHT planning impact?",
    ["No change from current rules", "New rule (April 2026): main residence can be passed IHT-free to lineal descendants (children) if left via will; this exemption is £175k per person (couple: £350k) PLUS normal £325k nil-rate band, effectively creating property nil-rate band. Client should review will structure to maximize use of main residence exemption and consider charitable gifting (IHT relief at 10% if 10%+ goes to charity)", "IHT completely eliminated", "All homes become chargeable"],
    1,
    "April 2026 changes: main residence nil-rate band (up to £175k per person, £350k couple) allows homes to pass to children IHT-free within that limit; above the limit, standard rates apply (40%). Coupled with normal nil-rate band (£325k), total couple exemption = £675k. Charitable gifting triggers 10% rate relief. Adviser must replan estates post-April 2026."
  ),
  q("fpa-ch4-t1-5", "cisi-fpa", "fpa-ch4", "4.5", "Sequencing Risk & Spending Rates", "retirement-solutions",
    "hard",
    "A retiree's £1m portfolio generates 5% returns (£50k/year). They plan to spend £50,000 p.a. The market then declines 20% in year 1 (portfolio = £800k), and spending demand remains £50k (now 6.25% of portfolio). How should the retiree respond?",
    ["Continue £50k spending; market will recover", "Reduce spending (e.g., to £40k) to avoid depleting capital in sustained downturn. The '4% rule' suggests sustainable withdrawal rate is 4% p.a. (£40k from £1m initial), adjusted for inflation. At 6.25% withdrawal rate in downturn, capital depletion accelerates. Dynamic spending rules (reduce in down years, increase in up years) are sustainable", "Withdraw more to make up losses", "Suspend all spending"],
    1,
    "Sustainable spending rate in retirement is ~4% of initial portfolio, adjusted annually for inflation (Trinity Study). At 6.25% withdrawal rate in down market, retiree faces capital depletion. Solution: flexible spending (reduce in down years, increase when markets recover) or reduced baseline spending. Rigid spending rules ignore sequence risk and lead to portfolio failure."
  ),
  q("fpa-ch4-t1-6", "cisi-fpa", "fpa-ch4", "4.6", "Long-Term Care Planning & Inheritance", "retirement-solutions",
    "hard",
    "A client, age 70, has a £300k home (no mortgage), £50k liquid savings, and pension of £15k p.a. One child will inherit. Future care costs are estimated at £100k+. Which strategy minimizes IHT and preserves inheritance?",
    ["Ignore care costs; child will manage", "Plan carefully: (1) Use savings first (£50k), then means-tested state help covers care once capital drops below £14,250, (2) consider paying care costs from pension income (may be tax-efficient), (3) document wishes; state may recover care costs from estate after death (charge on home), (4) if client wants to preserve inheritance, consult specialist in care fee planning before care becomes urgent", "Always use equity release", "Spend everything immediately"],
    1,
    "Care cost planning is complex: state pays care (means-tested) if capital <£14,250; above £14,250, client self-funds. State can recover care costs from estate (charges against home). Early planning (gift-giving to children, trust structures) can be beneficial but must be done well before care is needed (avoid Deliberate Deprivation rules). Adviser should refer to specialist if needed."
  ),

  // --- Ch5: Financial Planning Recommendations (categoryId: "recommendations")
  q("fpa-ch5-t1-1", "cisi-fpa", "fpa-ch5", "5.1", "Developing Coherent Recommendations", "recommendations",
    "hard",
    "After fact-finding, a 45-year-old client needs: (1) emergency fund, (2) mortgage reduction, (3) pensions catch-up, and (4) investment for growth. Available annual capacity: £20,000. How should the adviser structure recommendations?",
    ["Recommend all four equally", "Prioritize: (1) Emergency fund (£10k, 3 months expenses) via cash ISA or savings account FIRST, (2) allocate remaining £10k to match employer pension (tax relief benefit), (3) revisit mortgage overpayment vs. pension contribution after emergency fund is established (typically pension wins due to tax relief), (4) growth investment is contingent on completing 1–3. Sequencing is critical", "All in pensions to maximize tax relief", "No structure needed; client decides"],
    1,
    "Sound recommendation sequencing: (1) emergency fund (foundation), (2) match pension contributions (guaranteed return via tax relief), (3) then debt vs. savings decision (usually pension + mortgage at baseline rate outperforms overpayment in a low-rate environment), (4) then growth investments. Adviser must present this logic clearly in the suitability report."
  ),
  q("fpa-ch5-t1-2", "cisi-fpa", "fpa-ch5", "5.2", "Suitability Reports & Documentation", "recommendations",
    "hard",
    "An adviser provides oral advice and handwrites notes on a notepad. The client later claims the advice was unsuitable. What is the adviser's compliance risk?",
    ["No risk; oral advice is sufficient", "Severe risk: COBS 2R requires written record of personal recommendations containing: (1) summary of advice, (2) suitability justification (why this recommendation meets client's profile), (3) client's circumstances (financial situation, objectives, risk profile), (4) key product details, (5) execution timeline. Handwritten notes are insufficient; a formal suitability report is required. Absence = breach", "Written records are optional", "Oral + notes satisfy COBS"],
    1,
    "COBS 2R mandates detailed written advice records. A formal suitability report must demonstrate: (1) understanding of client circumstances, (2) suitability assessment logic, (3) why alternatives were rejected, (4) how recommendation meets client goals. Handwritten notes do not substitute; they lack detail and are often illegible. Advice file must contain clear, dated, comprehensive documentation."
  ),
  q("fpa-ch5-t1-3", "cisi-fpa", "fpa-ch5", "5.3", "Implementation Process & Timelines", "recommendations",
    "hard",
    "After a suitability report is issued, the client requests a 3-month delay before implementation. The market rises 10% during this period. Should the adviser update the recommendation?",
    ["No update needed; advice remains valid", "Yes; if 3 months have elapsed and markets have moved significantly, adviser should confirm whether the client's circumstances have changed and whether the recommendation remains suitable. A 10% market move may create new allocation misalignments. COBS requires ongoing monitoring; a review/update is prudent before execution", "Update is mandatory for any market movement", "Client's delay voids the advice"],
    1,
    "Suitability does not expire immediately but can become stale. After significant time/market moves, adviser should confirm circumstances and suitability. A 3-month delay + 10% market move may shift risk allocation meaningfully. Good practice: confirm client circumstances, review suitability, then proceed. This does not always require a new full report, but a brief update is prudent."
  ),
  q("fpa-ch5-t1-4", "cisi-fpa", "fpa-ch5", "5.4", "Reviewing Client Situation & Ongoing Monitoring", "recommendations",
    "hard",
    "A client's financial plan recommended a 50/50 equities/bonds portfolio. 3 years later, the client is approaching retirement and equities have risen to 65% of the portfolio due to market performance. What is the adviser's obligation?",
    ["No action; let the portfolio drift further", "Conduct formal review: (1) confirm client is still on track for retirement in 2–3 years, (2) reassess suitability given changed allocation (65/35 may now be too aggressive near retirement), (3) rebalance back to target OR revise target (reduce equities, increase bonds to de-risk) given shortened timeline, (4) document review and any changes", "Increase equity allocation further", "Wait until retirement to review"],
    1,
    "Best practice advisory includes regular (at least annual) portfolio reviews. As client approaches major life event (retirement), allocation drift requires corrective action. A 65/35 allocation near retirement is often unsuitable; asset reallocation (down to 40/60 or lower) is typical. Rebalancing is a discipline; advisers must enforce it."
  ),
];


// Utility: get questions in the format expected by the practice page
// Chapter config: exam weightage (how many of the 80 questions come from each chapter)
// Module configuration — each exam paper
export interface ModuleConfig {
  name: string;
  shortName: string;
  totalQuestions: number;      // how many Qs in a real exam paper
  timeMinutes: number;         // exam duration in minutes
  passPercent: number;         // pass mark %
}

export const MODULE_CONFIG: Record<string, ModuleConfig> = {
  "cisi-reg": {
    name: "UK Regulation & Professional Integrity",
    shortName: "Module 1 — Regulation",
    totalQuestions: 80,
    timeMinutes: 120,
    passPercent: 70,
  },
  "cisi-icwim": {
    name: "Investment, Risk & Taxation",
    shortName: "Module 2 — IRT",
    totalQuestions: 80,
    timeMinutes: 120,
    passPercent: 70,
  },
  "cisi-fpa": {
    name: "Financial Planning & Advice",
    shortName: "Module 3 — FPA",
    totalQuestions: 80,
    timeMinutes: 120,
    passPercent: 70,
  },
};

// Chapter configuration — maps chapterId → name + exam weight
export const CHAPTER_CONFIG: Record<string, { name: string; weight: number; moduleId: string }> = {
  // ─── Investment, Risk & Taxation (cisi-icwim) ───
  ch1:  { name: "Asset Classes", weight: 14, moduleId: "cisi-icwim" },
  ch2:  { name: "The Macroeconomic Environment", weight: 6, moduleId: "cisi-icwim" },
  ch3:  { name: "Principles of Investment Risk and Return", weight: 9, moduleId: "cisi-icwim" },
  ch4:  { name: "Taxation", weight: 16, moduleId: "cisi-icwim" },
  ch5:  { name: "Investment Products", weight: 14, moduleId: "cisi-icwim" },
  ch6:  { name: "Portfolio Construction and Planning", weight: 5, moduleId: "cisi-icwim" },
  ch7:  { name: "Giving Investment Advice", weight: 11, moduleId: "cisi-icwim" },
  ch8:  { name: "Portfolio Performance and Review", weight: 5, moduleId: "cisi-icwim" },
  // ─── Module 1: UK Regulation & Professional Integrity (cisi-reg) ───
  "reg-ch1":  { name: "UK Financial Services Sector", weight: 4, moduleId: "cisi-reg" },
  "reg-ch2":  { name: "UK FS & Consumer Relationships", weight: 4, moduleId: "cisi-reg" },
  "reg-ch3":  { name: "Contract and Trust Legislation", weight: 6, moduleId: "cisi-reg" },
  "reg-ch4":  { name: "Integrity and Ethics", weight: 4, moduleId: "cisi-reg" },
  "reg-ch5":  { name: "Regulatory Infrastructure", weight: 4, moduleId: "cisi-reg" },
  "reg-ch6":  { name: "FCA & PRA Supervision", weight: 6, moduleId: "cisi-reg" },
  "reg-ch7":  { name: "Authorisation & SM&CR", weight: 6, moduleId: "cisi-reg" },
  "reg-ch8":  { name: "Financial Crime Framework", weight: 6, moduleId: "cisi-reg" },
  "reg-ch9":  { name: "Complaints and Redress", weight: 4, moduleId: "cisi-reg" },
  "reg-ch10": { name: "Conduct of Business", weight: 6, moduleId: "cisi-reg" },
  // ─── Module 3: Financial Planning & Advice (cisi-fpa) ───
  "fpa-ch1":  { name: "Financial Planning", weight: 17, moduleId: "cisi-fpa" },
  "fpa-ch2":  { name: "Financial Protection", weight: 19, moduleId: "cisi-fpa" },
  "fpa-ch3":  { name: "Retirement Planning", weight: 24, moduleId: "cisi-fpa" },
  "fpa-ch4":  { name: "Retirement Solutions", weight: 12, moduleId: "cisi-fpa" },
  "fpa-ch5":  { name: "Financial Planning Recommendations", weight: 8, moduleId: "cisi-fpa" },
};

// Get questions filtered by moduleId
export function getQuestionsByModule(moduleId: string) {
  return QUESTION_BANK.filter(q => q.moduleId === moduleId);
}

// Get chapters for a specific module
export function getChaptersForModule(moduleId: string) {
  return Object.entries(CHAPTER_CONFIG)
    .filter(([, cfg]) => cfg.moduleId === moduleId)
    .map(([id, cfg]) => ({ id, ...cfg }));
}

// Get questions for a specific chapter
export function getQuestionsByChapter(chapterId: string) {
  return QUESTION_BANK.filter(q => q.chapterId === chapterId);
}

export function getPracticeQuestions() {
  return QUESTION_BANK.map(q => ({
    id: q.id,
    moduleId: q.moduleId,
    chapterId: q.chapterId,
    topic: q.topic,
    categoryId: q.categoryId,
    difficulty: q.difficulty,
    question: q.question,
    options: q.options,
    correct: q.correct,
    explanation: q.explanation,
  }));
}

// Utility: get questions in the format expected by the manage page
export function getManagedQuestions() {
  return QUESTION_BANK.map(q => ({
    id: q.id,
    moduleId: q.moduleId,
    chapterId: q.chapterId,
    topicId: q.topicId,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    difficulty: q.difficulty,
  }));
}

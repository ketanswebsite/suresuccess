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
    ["4.04%", "4.12%", "4.06%", "4.00%"], 2,
    "AER = (1 + r/n)^n − 1 = (1 + 0.04/4)^4 − 1 = (1.01)^4 − 1 ≈ 1.04060 − 1 = 4.06%. The AER is always slightly higher than the nominal rate when interest is compounded more than once a year."
  ),

  // --- 1.2 Fixed-Income Securities ---
  q("ch1-fi-1", "cisi-icwim", "ch1", "1.2", "Fixed-Income Securities", "assets",
    "hard",
    "An index-linked gilt pays a coupon of 1.25% and its principal is adjusted in line with RPI. If inflation rises unexpectedly, what happens to the nominal coupon payments?",
    ["They remain fixed at 1.25% of the original principal", "They decrease because rising inflation reduces the real value of fixed coupons", "They increase because the coupon rate is applied to the inflation-adjusted principal", "They increase because both the coupon rate AND the principal rise"], 2,
    "With index-linked gilts, the coupon rate stays fixed at 1.25%, but it is applied to the inflation-adjusted principal. So as the principal is uplifted by RPI, the nominal coupon payment increases — even though the coupon rate itself doesn't change."
  ),
  q("ch1-fi-2", "cisi-icwim", "ch1", "1.2", "Fixed-Income Securities", "assets",
    "hard",
    "A corporate bond is trading at £95 with a coupon of 6% and 5 years to maturity. Which measure best reflects the total return if held to redemption, accounting for the capital gain?",
    ["Flat yield (running yield)", "Gross redemption yield (GRY)", "Net redemption yield", "Dividend yield"], 1,
    "The Gross Redemption Yield (GRY) accounts for both the annual coupon income AND the capital gain (or loss) from holding the bond to maturity. The flat yield only considers the coupon relative to the current price and ignores the redemption gain."
  ),

  // --- 1.3 Equities ---
  q("ch1-eq-1", "cisi-icwim", "ch1", "1.3", "Equities", "assets",
    "hard",
    "A company with 10 million ordinary shares priced at £5 each announces a 1-for-4 rights issue at £4 per share. What is the theoretical ex-rights price (TERP)?",
    ["£5.00", "£4.50", "£4.60", "£4.80"], 3,
    "TERP = (4 existing shares × £5 + 1 new share × £4) / 5 total shares = (£20 + £4) / 5 = £4.80. The TERP represents the theoretical price after the rights issue, reflecting the dilutive effect of issuing new shares at a discount."
  ),
  q("ch1-eq-2", "cisi-icwim", "ch1", "1.3", "Equities", "assets",
    "medium",
    "Which class of shareholder ranks ABOVE ordinary shareholders but BELOW secured creditors in the event of a company liquidation?",
    ["Convertible bond holders", "Warrant holders", "Debenture holders", "Preference shareholders"], 3,
    "In liquidation, the priority order is: secured creditors (e.g., debenture holders), then unsecured creditors, then preference shareholders, and finally ordinary shareholders. Preference shareholders rank above ordinary shareholders but below all creditor classes."
  ),

  // --- 1.4 Property ---
  q("ch1-prop-1", "cisi-icwim", "ch1", "1.4", "Property", "assets",
    "medium",
    "A commercial property is purchased for £2 million and generates annual rental income of £120,000 after deducting all costs. What is the net rental yield?",
    ["8%", "6%", "5%", "12%"], 1,
    "Net rental yield = (Net annual rental income / Purchase price) × 100 = (£120,000 / £2,000,000) × 100 = 6%. This is the income return after costs, before any capital appreciation."
  ),
  q("ch1-prop-2", "cisi-icwim", "ch1", "1.4", "Property", "assets",
    "hard",
    "Which of the following is a key requirement for a fund to qualify as a Real Estate Investment Trust (REIT) in the UK?",
    ["The fund must be domiciled offshore for tax efficiency", "At least 75% of gross income must come from property rental activities", "At least 50% of profits must be distributed as dividends", "The fund must invest exclusively in residential property"], 1,
    "To qualify as a UK REIT, at least 75% of the company's gross income must derive from property rental business, and at least 75% of assets must be used in that business. REITs must distribute at least 90% of their tax-exempt property rental profits."
  ),

  // --- 1.5 Other Assets ---
  q("ch1-other-1", "cisi-icwim", "ch1", "1.5", "Other Assets", "assets",
    "medium",
    "Which of the following is a characteristic that makes collectables (such as fine wine or art) higher risk compared to traditional asset classes?",
    ["They always appreciate in value over time", "They provide regular income streams through dividends", "They lack a centralised, transparent pricing mechanism", "They are heavily regulated by the FCA"], 2,
    "Collectables typically lack transparent, centralised pricing — they are illiquid, subjective in valuation, generate no income, and are costly to store and insure. These factors make them significantly higher risk than traditional assets."
  ),
  q("ch1-other-2", "cisi-icwim", "ch1", "1.5", "Other Assets", "assets",
    "medium",
    "An investor is evaluating commodities as a portfolio diversifier. Which statement about commodities is MOST accurate?",
    ["Commodities provide a natural hedge against inflation as they represent real assets", "Commodity prices are always negatively correlated with equity markets", "Commodities are risk-free because they have intrinsic physical value", "Commodity investments always generate income through rental or dividends"], 0,
    "Commodities are real assets whose prices tend to rise with inflation, providing a natural inflation hedge. However, they do not always have negative equity correlation, are not risk-free, and do not generate income — they provide returns only through price appreciation."
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 2 — THE MACROECONOMIC ENVIRONMENT  (6 of 80 exam Qs)
  // ═══════════════════════════════════════════════════════════════

  // --- 2.1 Macroeconomic Trends and Indicators ---
  q("ch2-macro-1", "cisi-icwim", "ch2", "2.1", "Macroeconomic Trends and Indicators", "macro",
    "hard",
    "A country's Gini coefficient has increased from 0.30 to 0.42 over a decade. What does this indicate?",
    ["Unemployment has decreased", "Income inequality has worsened", "The country's GDP has grown significantly", "The country has experienced deflation"], 1,
    "The Gini coefficient ranges from 0 (perfect equality) to 1 (perfect inequality). An increase from 0.30 to 0.42 indicates that income distribution has become more unequal — the gap between rich and poor has widened."
  ),
  q("ch2-macro-2", "cisi-icwim", "ch2", "2.1", "Macroeconomic Trends and Indicators", "macro",
    "medium",
    "Which factor is LEAST likely to directly increase labour productivity in an economy?",
    ["Improved infrastructure and transport networks", "Investment in workforce education and training", "Technological innovation in production methods", "An increase in raw material prices"], 3,
    "Rising raw material prices increase input costs but do not directly improve output per worker. Education, technology, and infrastructure all directly enhance productivity by enabling workers to produce more per hour worked."
  ),

  // --- 2.2 Global Trends ---
  q("ch2-global-1", "cisi-icwim", "ch2", "2.2", "Global Trends and Their Impacts", "macro",
    "medium",
    "Which of the following is the PRIMARY risk associated with investing in emerging market economies?",
    ["Inability to invest in equities", "Political instability and weaker regulatory frameworks", "Lower potential returns than developed markets", "Guaranteed capital depreciation due to inflation"], 1,
    "Emerging markets carry higher risks from political instability, weaker legal and regulatory frameworks, currency volatility, and less transparent markets. However, they also offer higher potential returns — not lower."
  ),
  q("ch2-global-2", "cisi-icwim", "ch2", "2.2", "Global Trends and Their Impacts", "macro",
    "hard",
    "A UK investor holds US equities. If sterling appreciates 10% against the dollar while the US equities rise 8% in dollar terms, what is the approximate return in sterling?",
    ["18%", "2%", "8%", "−2%"], 3,
    "When sterling strengthens against the dollar, the value of dollar-denominated assets falls in sterling terms. The approximate sterling return is roughly: 8% − 10% = −2%. Despite the equity gain in local currency, the currency movement wipes out the return and creates a small loss."
  ),

  // --- 2.3 National Income ---
  q("ch2-ni-1", "cisi-icwim", "ch2", "2.3", "National Income (NI)", "macro",
    "medium",
    "GDP measures the total value of goods and services produced within a country. What is the key difference between GDP and GNP?",
    ["GNP is always lower than GDP — an alternative choice", "GDP only measures manufacturing output — an alternative choice", "GNP includes income earned by citizens", "GNP excludes government spending — an alternative choice"], 2,
    "GNP (Gross National Product) includes income earned by a country's citizens overseas but excludes income earned within the country by foreign nationals. GDP measures output within geographical borders regardless of the nationality of the producer."
  ),
  q("ch2-ni-2", "cisi-icwim", "ch2", "2.3", "National Income (NI)", "macro",
    "medium",
    "If a country's nominal GDP growth is 5% and inflation is 3%, what is the approximate real GDP growth?",
    ["3%", "2%", "5%", "8%"], 1,
    "Real GDP growth strips out the effects of inflation: approximately 5% − 3% = 2%. Real GDP growth reflects the actual increase in the volume of goods and services produced, not just price increases."
  ),

  // --- 2.4 Economic and Business Cycles ---
  q("ch2-cycle-1", "cisi-icwim", "ch2", "2.4", "Economic and Business Cycles", "macro",
    "hard",
    "During which phase of the business cycle would you typically expect to see rising unemployment, falling corporate profits, and declining consumer confidence?",
    ["Expansion", "Peak — a phase of the economic cycle", "Contraction (recession)", "Trough — a phase of the economic cycle"], 2,
    "The contraction (recession) phase is characterised by falling GDP, rising unemployment, declining profits, and reduced consumer confidence. A recession is technically defined as two consecutive quarters of negative GDP growth."
  ),
  q("ch2-cycle-2", "cisi-icwim", "ch2", "2.4", "Economic and Business Cycles", "macro",
    "medium",
    "What is the term for a prolonged period of very slow economic growth combined with high inflation?",
    ["Deflation", "Stagflation", "Disinflation", "Reflation"], 1,
    "Stagflation describes a combination of stagnant economic growth and high inflation — a particularly challenging scenario for policymakers because measures to combat inflation (raising rates) can worsen the economic slowdown."
  ),

  // --- 2.5 Key Economic Indicators ---
  q("ch2-indicators-1", "cisi-icwim", "ch2", "2.5", "Key Economic Indicators", "macro",
    "hard",
    "Which of the following is classified as a LEADING economic indicator?",
    ["Unemployment rate", "Consumer price index (CPI)", "Stock market performance", "GDP growth rate"], 2,
    "Stock market performance is a leading indicator — it tends to move ahead of the broader economy as investors anticipate future conditions. GDP and unemployment are lagging indicators, while CPI is a coincident indicator."
  ),
  q("ch2-indicators-2", "cisi-icwim", "ch2", "2.5", "Key Economic Indicators", "macro",
    "medium",
    "The Consumer Price Index (CPI) in the UK is measured by which body?",
    ["HM Revenue & Customs — an alternative choice", "Office for National Statistics (ONS)", "Bank of England — an alternative choice", "Financial Conduct Authority"], 1,
    "The Office for National Statistics (ONS) is responsible for measuring and publishing CPI in the UK. The Bank of England uses CPI as its target measure for inflation but does not calculate it."
  ),

  // --- 2.6 Fiscal and Monetary Policy ---
  q("ch2-policy-1", "cisi-icwim", "ch2", "2.6", "Fiscal and Monetary Policy", "macro",
    "hard",
    "The Bank of England's Monetary Policy Committee (MPC) raises the base rate. Which of the following is the LEAST likely immediate consequence?",
    ["Mortgage costs increase for variable rate borrowers", "Sterling appreciates against other currencies", "Bond prices fall", "The government's fiscal deficit automatically decreases"], 3,
    "A rate rise typically strengthens the currency (attracting foreign capital), reduces bond prices (yields rise), and increases variable mortgage costs. However, the government's fiscal deficit is a fiscal policy matter and does not automatically decrease from monetary tightening."
  ),
  q("ch2-policy-2", "cisi-icwim", "ch2", "2.6", "Fiscal and Monetary Policy", "macro",
    "medium",
    "Quantitative easing (QE) is a monetary policy tool used by central banks. How does QE primarily work?",
    ["By the central bank purchasing government bonds to inject money into the economy", "By increasing income tax rates to reduce consumer spending", "By raising interest rates to reduce inflation", "By devaluing the national currency through foreign exchange intervention"], 0,
    "QE involves the central bank creating new money electronically to purchase government bonds (and sometimes corporate bonds) from financial institutions. This injects money into the economy, aiming to lower longer-term interest rates and stimulate lending and investment."
  ),

  // --- 2.7 Influences on Asset Classes ---
  q("ch2-influence-1", "cisi-icwim", "ch2", "2.7", "Influences on Asset Classes", "macro",
    "hard",
    "In a rising interest rate environment, which asset class is typically MOST negatively affected?",
    ["Cash deposits", "Long-duration government bonds", "Residential property (with variable rate mortgages)", "Commodities"], 1,
    "Long-duration government bonds are most sensitive to interest rate rises — their prices fall significantly because the present value of their distant future cash flows decreases more. While property may also suffer, bonds with long duration have the greatest price sensitivity to rate changes."
  ),
  q("ch2-influence-2", "cisi-icwim", "ch2", "2.7", "Influences on Asset Classes", "macro",
    "medium",
    "During a bear market, investors often rotate into which type of equity sector?",
    ["Technology growth stocks with high P/E ratios", "Defensive sectors such as utilities and healthcare", "Highly leveraged financial stocks", "Small-cap speculative stocks"], 1,
    "In bear markets, investors typically rotate into defensive sectors — utilities, healthcare, and consumer staples — which provide essential services with stable demand regardless of economic conditions. These sectors tend to be less volatile than cyclical sectors."
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 3 — PRINCIPLES OF INVESTMENT RISK AND RETURN (9 of 80)
  // ═══════════════════════════════════════════════════════════════

  // --- 3.1 Time Value of Money ---
  q("ch3-tvm-1", "cisi-icwim", "ch3", "3.1", "The Time Value of Money", "risk",
    "hard",
    "An investor needs £50,000 in 10 years' time. Assuming a real rate of return of 3% per annum compounded annually, approximately how much must they invest today?",
    ["£37,205", "£41,020", "£43,500", "£35,000"], 0,
    "Using the present value formula: PV = FV / (1 + r)^n = £50,000 / (1.03)^10 = £50,000 / 1.3439 ≈ £37,205. This demonstrates the time value of money — a sum today is worth more than the same sum in the future."
  ),
  q("ch3-tvm-2", "cisi-icwim", "ch3", "3.1", "The Time Value of Money", "risk",
    "hard",
    "Using the Fisher equation, if the nominal rate of return is 8% and the inflation rate is 5%, what is the approximate REAL rate of return?",
    ["13.00%", "3.00%", "2.86%", "3.50%"], 2,
    "The Fisher equation: (1 + real) = (1 + nominal) / (1 + inflation) = 1.08 / 1.05 = 1.02857. So the real rate ≈ 2.86%. The common shortcut of 8% − 5% = 3% is an approximation; the Fisher equation gives the precise answer."
  ),

  // --- 3.2 Investment Risk and Return ---
  q("ch3-risk-1", "cisi-icwim", "ch3", "3.2", "Investment Risk and Return", "risk",
    "hard",
    "A portfolio has an expected return of 10% with a standard deviation of 15%. Assuming a normal distribution, what is the approximate range within which returns will fall about 95% of the time?",
    ["−10% to +30%", "−5% to +25%", "−20% to +40%", "0% to +20%"], 2,
    "95% of outcomes fall within approximately 2 standard deviations of the mean. So: 10% ± (2 × 15%) = 10% ± 30%, giving a range of −20% to +40%. This wide range illustrates the significant volatility of the portfolio."
  ),
  q("ch3-risk-2", "cisi-icwim", "ch3", "3.2", "Investment Risk and Return", "risk",
    "hard",
    "Two assets have a correlation coefficient of −0.8. What does this mean for portfolio construction?",
    ["They are unrelated and offer no diversification benefit — an alternative choice", "They tend to move in opposite directions, providing significant diversification benefit", "They tend to move together, increasing portfolio risk — an alternative choice", "They always move in exactly opposite directions — an alternative choice"], 1,
    "A correlation of −0.8 indicates a strong negative relationship — when one asset rises, the other tends to fall, and vice versa. This provides significant diversification benefit but does not mean they always move in opposite directions (which would be −1.0)."
  ),

  // --- 3.3 Models of Investment Theory ---
  q("ch3-model-1", "cisi-icwim", "ch3", "3.3", "Models of Investment Theory", "risk",
    "hard",
    "Using the Capital Asset Pricing Model (CAPM), if the risk-free rate is 2%, the expected market return is 8%, and a stock has a beta of 1.3, what is the expected return on the stock?",
    ["12.4%", "10.4%", "9.8%", "7.8%"], 2,
    "CAPM: E(R) = Rf + β(Rm − Rf) = 2% + 1.3 × (8% − 2%) = 2% + 1.3 × 6% = 2% + 7.8% = 9.8%. The stock's expected return compensates investors for both the time value of money (risk-free rate) and the systematic risk premium (scaled by beta)."
  ),
  q("ch3-model-2", "cisi-icwim", "ch3", "3.3", "Models of Investment Theory", "risk",
    "hard",
    "A fund has a return of 12%, the risk-free rate is 3%, and the fund's standard deviation is 18%. What is the Sharpe ratio?",
    ["0.67", "0.50", "0.83", "1.50"], 1,
    "Sharpe ratio = (Fund return − Risk-free rate) / Standard deviation = (12% − 3%) / 18% = 9% / 18% = 0.50. The Sharpe ratio measures risk-adjusted return per unit of total risk. A higher ratio indicates better risk-adjusted performance."
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 4 — TAXATION  (16 of 80 exam questions)
  // ═══════════════════════════════════════════════════════════════

  // --- 4.1 Personal Taxation ---
  q("ch4-personal-1", "cisi-icwim", "ch4", "4.1", "Personal Taxation", "tax",
    "hard",
    "A UK taxpayer has total income of £125,140. What is their effective personal allowance?",
    ["£12,570", "£6,285", "£0", "£9,428"], 2,
    "The personal allowance is reduced by £1 for every £2 of income above £100,000. At £125,140: excess = £25,140, reduction = £25,140/2 = £12,570. Since this equals the full personal allowance, it is completely eliminated — the effective personal allowance is £0."
  ),
  q("ch4-personal-2", "cisi-icwim", "ch4", "4.1", "Personal Taxation", "tax",
    "medium",
    "UK dividend income above the £1,000 dividend allowance is taxed at what rate for a higher rate (40%) taxpayer?",
    ["32.5%", "20%", "33.75%", "39.35%"], 2,
    "Since April 2022, dividend tax rates are: 8.75% for basic rate taxpayers, 33.75% for higher rate taxpayers, and 39.35% for additional rate taxpayers. The previous rates of 7.5%, 32.5%, and 38.1% were increased by 1.25 percentage points."
  ),

  // --- 4.2 Taxation of Trusts ---
  q("ch4-trust-1", "cisi-icwim", "ch4", "4.2", "Taxation of Trusts", "tax",
    "hard",
    "A discretionary trust receives £10,000 of dividend income. At what rate is this income taxed within the trust?",
    ["8.75%", "45%", "33.75%", "39.35%"], 3,
    "Discretionary trusts pay tax on dividend income at the trust rate for dividends, which is 39.35% (the additional rate for dividends). The first £1,000 of trust income (the standard rate band) may be taxed at lower rates."
  ),
  q("ch4-trust-2", "cisi-icwim", "ch4", "4.2", "Taxation of Trusts", "tax",
    "medium",
    "Which type of trust is sometimes referred to as a 'life interest' trust where the beneficiary is entitled to income as it arises?",
    ["Accumulation trust", "Bare trust — a legal structure", "Interest in possession trust", "Discretionary trust"], 2,
    "An interest in possession (IIP) trust — also called a 'life interest' trust — gives a named beneficiary the right to receive trust income as it arises. The capital is preserved for a different set of beneficiaries (the remaindermen)."
  ),

  // --- 4.3 Taxation of Investment Income ---
  q("ch4-inv-income-1", "cisi-icwim", "ch4", "4.3", "Taxation of Investment Income", "tax",
    "hard",
    "An investor receives an equalisation payment when purchasing units in an authorised unit trust mid-distribution period. How is this payment treated for tax purposes?",
    ["As taxable savings income at the investor's marginal rate", "As a return of capital, reducing the acquisition cost", "As taxable dividend income", "As exempt from all UK taxation"], 1,
    "Equalisation payments represent a return of capital, not income. They reflect the accrued income already included in the unit price at purchase. The payment reduces the investor's acquisition cost for CGT purposes and is not subject to income tax."
  ),
  q("ch4-inv-income-2", "cisi-icwim", "ch4", "4.3", "Taxation of Investment Income", "tax",
    "medium",
    "UK government gilt interest is paid in which form?",
    ["Net of 20% withholding tax", "Gross, with no tax deducted at source", "Net of basic rate income tax", "Tax-free for all UK taxpayers"], 1,
    "Interest on UK government gilts is paid gross — no tax is deducted at source. However, the interest is still taxable and must be included in the investor's self-assessment tax return (though it may be covered by the Personal Savings Allowance)."
  ),

  // --- 4.4 National Insurance Contributions ---
  q("ch4-nic-1", "cisi-icwim", "ch4", "4.4", "National Insurance Contributions (NICs)", "tax",
    "medium",
    "Which class of National Insurance contributions is paid by employees on their earnings?",
    ["Class 2", "Class 1 Primary", "Class 1 Secondary", "Class 4"], 1,
    "Class 1 Primary NICs are paid by employees on their earnings. Class 1 Secondary is paid by employers. Class 2 is a flat-rate contribution for the self-employed, and Class 4 is a percentage-based contribution on self-employed profits."
  ),
  q("ch4-nic-2", "cisi-icwim", "ch4", "4.4", "National Insurance Contributions (NICs)", "tax",
    "hard",
    "Unlike income tax, National Insurance contributions have an upper earnings limit above which the rate decreases. What is the PRIMARY significance of this for high earners?",
    ["They pay no NIC on earnings above the upper limit — an alternative choice", "Employer NICs are capped at the upper earnings limit", "NICs become tax-deductible above the upper limit — an alternative choice", "The NIC rate drops to 2% on earnings above the upper limit, making NICs regressive"], 3,
    "Above the upper earnings limit, the employee NIC rate drops from 8% to 2%. This means NICs are regressive — higher earners pay a lower effective NIC rate on their total earnings. Employer NICs continue at 13.8% with no upper limit."
  ),

  // --- 4.5 Capital Gains Tax ---
  q("ch4-cgt-1", "cisi-icwim", "ch4", "4.5", "Capital Gains Tax (CGT)", "tax",
    "hard",
    "An investor sells shares for £30,000 that were originally purchased for £15,000. They also have £3,000 in allowable losses brought forward. If the annual exempt amount is £6,000, what is their taxable gain?",
    ["£9,000", "£15,000", "£6,000", "£12,000"], 2,
    "Gain = £30,000 − £15,000 = £15,000. First deduct current year losses (none stated), then brought-forward losses of £3,000 to get £12,000. Then deduct the annual exempt amount of £6,000 = £6,000 taxable gain. Note: brought-forward losses CAN reduce gains below the annual exempt amount."
  ),
  q("ch4-cgt-2", "cisi-icwim", "ch4", "4.5", "Capital Gains Tax (CGT)", "tax",
    "medium",
    "Which of the following disposals would NOT trigger a capital gains tax liability?",
    ["Sale of a second home", "Sale of shares held in an ISA", "Gift of a painting worth £10,000 to a friend", "Sale of a buy-to-let property"], 1,
    "Assets held within an ISA wrapper are exempt from CGT. Buy-to-let properties, second homes, and gifts of valuable chattels to non-spouses are all potentially chargeable disposals. The ISA wrapper provides full CGT exemption."
  ),

  // --- 4.6 Inheritance Tax ---
  q("ch4-iht-1", "cisi-icwim", "ch4", "4.6", "Inheritance Tax (IHT)", "tax",
    "hard",
    "A widow dies with an estate valued at £800,000. Her late husband used none of his nil-rate band. What is the IHT liability, assuming the residence nil-rate band does not apply?",
    ["£60,000", "£190,000", "£0", "£130,000"], 0,
    "The transferable nil-rate band means the widow has access to her husband's unused nil-rate band of £325,000 plus her own £325,000 = £650,000 combined nil-rate band. Taxable estate: £800,000 − £650,000 = £150,000. IHT at 40% = £60,000."
  ),
  q("ch4-iht-2", "cisi-icwim", "ch4", "4.6", "Inheritance Tax (IHT)", "tax",
    "medium",
    "Under the 7-year rule for potentially exempt transfers (PETs), what happens if the donor survives for exactly 5 years after making a gift?",
    ["The gift is treated as if it were never made", "The gift benefits from taper relief, reducing the", "The gift is fully exempt from IHT", "The gift is taxed at the full 40% rate"], 1,
    "If the donor dies between 3 and 7 years after making a PET, taper relief applies. At 5 years (between 5-6 years), the IHT rate is reduced to 60% of the full rate (i.e., 24% instead of 40%). Only survival beyond 7 years makes the gift fully exempt."
  ),

  // --- 4.7 Residency and Domicile ---
  q("ch4-res-1", "cisi-icwim", "ch4", "4.7", "Residency and Domicile", "tax",
    "hard",
    "Under the Statutory Residence Test (SRT), which of the following would make an individual automatically UK resident for a tax year?",
    ["Spending 90 days in the UK", "Having a UK bank account", "Owning property in the UK", "Spending 183 or more days in the UK"], 3,
    "Under the SRT, an individual is automatically UK resident if they spend 183 or more days in the UK in the tax year. Owning property or having a bank account alone does not determine residency. Days below 183 require further analysis under the sufficient ties test."
  ),
  q("ch4-res-2", "cisi-icwim", "ch4", "4.7", "Residency and Domicile", "tax",
    "medium",
    "What is the key distinction between 'domicile of origin' and 'domicile of choice'?",
    ["They are the same thing under UK tax law — an alternative choice", "Domicile of choice overrides domicile of origin only after 15 years — an alternative choice", "Domicile of origin is always in the UK; domicile of choice is always overseas", "Domicile of origin is acquired at birth; domicile of choice is acquired by"], 3,
    "Domicile of origin is acquired at birth (usually from the father). Domicile of choice is acquired by physically moving to a new country with the intention to reside there permanently or indefinitely. The distinction is crucial for IHT and the taxation of overseas income."
  ),

  // --- 4.8 Stamp Duty ---
  q("ch4-stamp-1", "cisi-icwim", "ch4", "4.8", "Stamp Duty", "tax",
    "medium",
    "What is the rate of Stamp Duty Reserve Tax (SDRT) payable on the purchase of UK shares through CREST?",
    ["0.5%", "0.25%", "1%", "1.5%"], 0,
    "SDRT is charged at 0.5% on the purchase of UK shares settled electronically through CREST. If shares are transferred to a clearance service or depositary receipt scheme, the rate increases to 1.5%."
  ),
  q("ch4-stamp-2", "cisi-icwim", "ch4", "4.8", "Stamp Duty", "tax",
    "hard",
    "Which of the following transactions is EXEMPT from stamp duty?",
    ["Transfer of shares as a wedding gift", "Purchase of UK equities on the London Stock Exchange", "Purchase of shares in an AIM-listed company via CREST", "Purchase of UK government gilts"], 3,
    "UK government gilts are exempt from stamp duty. Purchases of UK equities (including AIM shares since 2014 abolition was planned but many AIM shares remain exempt) attract SDRT. Gifts of shares may still be subject to stamp duty if consideration is given."
  ),

  // --- 4.9-4.12 Tax Planning (combined) ---
  q("ch4-plan-1", "cisi-icwim", "ch4", "4.12", "Tax-Planning Strategies", "tax",
    "medium",
    "Which of the following is an example of legitimate tax AVOIDANCE rather than tax EVASION?",
    ["Hiding assets in an undisclosed offshore account", "Using an ISA to shelter investments from tax", "Not declaring rental income on a tax return", "Understating business expenses to reduce taxable profit"], 1,
    "Using an ISA is legitimate tax avoidance — it uses legal means provided by HMRC to minimise tax. Tax evasion involves illegally concealing income or assets. Not declaring income, understating profits, and hiding assets are all forms of evasion."
  ),
  q("ch4-plan-2", "cisi-icwim", "ch4", "4.12", "Tax-Planning Strategies", "tax",
    "hard",
    "A married couple wants to minimise their combined income tax bill. One spouse is a higher rate taxpayer and the other has unused personal allowance. Which strategy is MOST effective?",
    ["Both spouses should claim the Marriage Allowance regardless of income levels", "Invest all savings in the higher earner's pension", "Transfer all assets into the higher earner's name", "Transfer income-producing assets to the spouse with unused allowance"], 3,
    "Transferring income-producing assets to the lower/non-earning spouse utilises their unused personal allowance, basic rate band, and PSA — reducing the couple's overall tax liability. The Marriage Allowance only allows transfer of 10% of the personal allowance and requires specific eligibility."
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 5 — INVESTMENT PRODUCTS  (14 of 80 exam questions)
  // ═══════════════════════════════════════════════════════════════

  // --- 5.1 Types and Purposes of Collective Investment ---
  q("ch5-cis-1", "cisi-icwim", "ch5", "5.1", "Collective Investment Schemes", "products",
    "medium",
    "What is the PRIMARY advantage of investing through a collective investment scheme compared to direct investment?",
    ["Exemption from all forms of UK taxation — an alternative choice", "Guaranteed returns regardless of market conditions — a financial measure", "Access to professional management and", "Elimination of all investment risk — an alternative choice"], 2,
    "Collective investment schemes pool investors' money to achieve diversification and professional management — benefits that would be difficult for individual investors with small sums. They do not guarantee returns or eliminate risk."
  ),
  q("ch5-cis-2", "cisi-icwim", "ch5", "5.1", "Collective Investment Schemes", "products",
    "hard",
    "What is the role of the Authorised Corporate Director (ACD) in an OEIC?",
    ["To provide independent audit of the fund's accounts", "To act as custodian of the fund's assets", "To guarantee investors against capital losses", "To manage the fund's operations and ensure regulatory compliance"], 3,
    "The ACD is responsible for the overall management and operation of an OEIC, including investment decisions, compliance with regulations, and pricing. The depositary (not the ACD) acts as custodian. The ACD must be FCA-authorised."
  ),

  // --- 5.2 Open-Ended Funds ---
  q("ch5-open-1", "cisi-icwim", "ch5", "5.2", "Open-Ended Funds", "products",
    "hard",
    "What is the key difference between a unit trust and an Open-Ended Investment Company (OEIC)?",
    ["OEICs are unregulated while unit trusts are regulated by the FCA", "Unit trusts issue shares while OEICs issue units", "Unit trusts have a bid-offer spread while OEICs typically have a single price", "Unit trusts can only invest in equities, while OEICs can invest in all asset classes"], 2,
    "The key pricing difference is that unit trusts traditionally have a dual-pricing structure (bid-offer spread), while OEICs use single pricing. Both can invest across asset classes and are FCA-regulated. Unit trusts issue units; OEICs issue shares."
  ),
  q("ch5-open-2", "cisi-icwim", "ch5", "5.2", "Open-Ended Funds", "products",
    "medium",
    "When an investor sells units in an open-ended fund, who do they sell them back to?",
    ["A designated market maker", "The Financial Conduct Authority", "The fund manager, who cancels the units", "Other investors on a stock exchange"], 2,
    "In open-ended funds, units/shares are created when investors buy and cancelled when they sell — investors deal directly with the fund manager, not on an exchange. This is the fundamental difference from closed-ended funds."
  ),

  // --- 5.3 Closed-Ended Funds ---
  q("ch5-closed-1", "cisi-icwim", "ch5", "5.3", "Closed-Ended Funds", "products",
    "hard",
    "An investment trust has a net asset value (NAV) of £10 per share but trades at £8.50 on the stock exchange. What is the discount to NAV?",
    ["10%", "17.6%", "85%", "15%"], 3,
    "Discount = (NAV − Share price) / NAV × 100 = (£10 − £8.50) / £10 × 100 = 15%. Investment trusts commonly trade at a discount (or premium) to their NAV because their shares are traded on the stock exchange and priced by supply and demand."
  ),
  q("ch5-closed-2", "cisi-icwim", "ch5", "5.3", "Closed-Ended Funds", "products",
    "hard",
    "An investment trust uses gearing (borrowing) of 20%. If the underlying portfolio rises by 10%, what is the approximate return to shareholders, ignoring borrowing costs?",
    ["10%", "12%", "20%", "8%"], 1,
    "With 20% gearing, for every £100 of shareholder equity, the trust invests £120 (£100 equity + £20 borrowed). A 10% rise on £120 = £12 gain on £100 of equity = 12% return. Gearing amplifies both gains and losses."
  ),

  // --- 5.4-5.5 Fund Characteristics and Charges ---
  q("ch5-charges-1", "cisi-icwim", "ch5", "5.5", "Charges and Pricing of CISs", "products",
    "medium",
    "What does the Ongoing Charges Figure (OCF) include that the Annual Management Charge (AMC) does not?",
    ["Initial charges and exit penalties — an alternative choice", "Performance fees and transaction costs — an alternative choice", "Additional operating costs such as audit, custody, and registration fees", "Stamp duty on share purchases within the fund"], 2,
    "The OCF is broader than the AMC — it includes the AMC plus additional fund operating costs like custody, audit, registration, and regulatory fees. However, it typically excludes performance fees and portfolio transaction costs."
  ),
  q("ch5-charges-2", "cisi-icwim", "ch5", "5.5", "Charges and Pricing of CISs", "products",
    "hard",
    "A fund applies a dilution levy when there are large net redemptions. What is the purpose of this levy?",
    ["To increase the fund manager's revenue — an alternative choice", "To penalise investors who sell too quickly — an alternative choice", "To protect remaining investors from bearing", "To prevent the fund from being wound up — an alternative choice"], 2,
    "A dilution levy protects existing investors by ensuring that the costs of buying or selling underlying assets (to meet large inflows or outflows) are borne by the investors causing the dealing, not by the remaining unitholders."
  ),

  // --- 5.6 Tax-Efficient Savings ---
  q("ch5-isa-1", "cisi-icwim", "ch5", "5.6", "Tax-Efficient Savings", "products",
    "medium",
    "What is the current annual subscription limit for a Lifetime ISA, and what government bonus is added?",
    ["£4,000 with a 50% bonus", "£20,000 with a 50% bonus", "£10,000 with a 10% bonus", "£4,000 with a 25% bonus"], 3,
    "The Lifetime ISA has an annual subscription limit of £4,000 (which counts towards the overall £20,000 ISA allowance), with a 25% government bonus — up to £1,000 per year. It's available for first-time home buyers or retirement savings."
  ),
  q("ch5-isa-2", "cisi-icwim", "ch5", "5.6", "Tax-Efficient Savings", "products",
    "hard",
    "An investor transfers £15,000 from a Cash ISA to a Stocks and Shares ISA in the same tax year, and also makes a fresh subscription of £8,000 to the Stocks and Shares ISA. Have they breached the annual ISA limit?",
    ["Yes — total of £23,000 exceeds the £20,000 limit", "No — transfers between ISAs do not count towards the annual", "Yes — transfers count as new subscriptions", "No — but only because Cash ISA limits are separate"], 1,
    "Transfers between ISAs do not count towards the annual subscription limit. Only new cash subscriptions count. So the investor has only used £8,000 of their £20,000 annual allowance, despite moving £15,000 between ISA types."
  ),

  // --- 5.7 Life Assurance Products ---
  q("ch5-life-1", "cisi-icwim", "ch5", "5.7", "UK Life Assurance Products", "products",
    "hard",
    "An investor holds an onshore investment bond and makes a withdrawal of 7% of the original investment in a tax year. How is the excess treated?",
    ["Only the 2% excess above the 5% cumulative allowance is treated as a chargeable gain", "The entire 7% is taxable as income — an alternative choice", "The withdrawal is tax-free as it's a return of capital", "7% is added to the investor's income and taxed at their marginal rate"], 0,
    "Onshore investment bonds allow cumulative withdrawals of up to 5% per annum of the original investment without triggering an immediate tax charge. The 2% excess (7% − 5%) is treated as a chargeable gain. Unused allowances can be carried forward."
  ),
  q("ch5-life-2", "cisi-icwim", "ch5", "5.7", "UK Life Assurance Products", "products",
    "medium",
    "What is the key tax difference between an onshore and offshore investment bond?",
    ["There is no tax difference — both are taxed identically", "Offshore bonds grow virtually tax-free within the fund (no UK corporation tax on", "Offshore bonds are subject to higher rates of UK tax — a financial measure", "Onshore bonds are completely tax-free — an alternative choice"], 1,
    "Offshore bonds benefit from 'gross roll-up' — the fund is not subject to UK corporation tax on its investment growth. Onshore bonds pay corporation tax within the fund. When gains are eventually realised, both are subject to income tax, but the offshore bond has benefited from tax-deferred growth."
  ),

  // --- 5.8-5.9 Private Equity, VCTs, EISs ---
  q("ch5-vct-1", "cisi-icwim", "ch5", "5.9", "VCTs, EISs and SEISs", "products",
    "hard",
    "An investor subscribes £50,000 for new shares in a Venture Capital Trust (VCT). What is the maximum income tax relief they can claim, and what is the minimum holding period to retain it?",
    ["£10,000 relief (20%), held for 3 years", "£25,000 relief (50%), held for 3 years", "£15,000 relief (30%), held for 3 years", "£15,000 relief (30%), held for 5 years"], 3,
    "VCTs offer 30% income tax relief on subscriptions up to £200,000 per year: 30% × £50,000 = £15,000. Shares must be held for a minimum of 5 years or the relief is clawed back. Dividends from VCTs are also tax-free."
  ),
  q("ch5-eis-1", "cisi-icwim", "ch5", "5.9", "VCTs, EISs and SEISs", "products",
    "hard",
    "How does the Seed Enterprise Investment Scheme (SEIS) income tax relief rate compare to the standard Enterprise Investment Scheme (EIS)?",
    ["SEIS offers 50% relief versus 30% for EIS", "Both offer 40% relief", "SEIS offers 20% relief, lower than EIS", "SEIS offers 30% relief, same as EIS"], 0,
    "SEIS offers a more generous 50% income tax relief (on investments up to £200,000) compared to 30% for EIS (on investments up to £1 million, or £2 million for knowledge-intensive companies). This reflects the higher risk of investing in very early-stage companies."
  ),

  // --- 5.10 Derivatives ---
  q("ch5-deriv-1", "cisi-icwim", "ch5", "5.10", "Derivatives", "products",
    "hard",
    "An investor buys a call option on a stock at a strike price of £10 for a premium of £1.50. At expiry, the stock is trading at £13. What is the investor's net profit per share?",
    ["£1.50", "£3.00", "£4.50", "£13.00"], 0,
    "Profit = (Market price − Strike price) − Premium paid = (£13 − £10) − £1.50 = £3.00 − £1.50 = £1.50. The intrinsic value at expiry is £3, but after deducting the premium paid for the option, the net profit is £1.50 per share."
  ),
  q("ch5-deriv-2", "cisi-icwim", "ch5", "5.10", "Derivatives", "products",
    "medium",
    "What is the maximum loss for the BUYER of a put option?",
    ["The premium paid for the option", "Unlimited", "The strike price minus the current share price", "The full value of the underlying shares"], 0,
    "The maximum loss for any option buyer (whether call or put) is limited to the premium paid. If the option expires worthless (out of the money), the buyer loses only the premium. This defined maximum loss is a key advantage of buying options over short-selling."
  ),

  // --- 5.11 Hedge Funds ---
  q("ch5-hedge-1", "cisi-icwim", "ch5", "5.11", "Hedge Funds", "products",
    "medium",
    "Hedge funds commonly charge a '2 and 20' fee structure. What does this mean?",
    ["2% on the first £20,000 invested — an alternative choice", "2% initial charge and 20% exit charge", "2% per quarter and 20% annually — an alternative choice", "2% annual management fee and 20% performance fee on gains"], 3,
    "The '2 and 20' model means a 2% annual management fee on assets under management plus a 20% performance fee on any gains above a benchmark or high-water mark. This incentivises managers but can significantly erode investor returns."
  ),
  q("ch5-hedge-2", "cisi-icwim", "ch5", "5.11", "Hedge Funds", "products",
    "hard",
    "A hedge fund employs a 'long-short equity' strategy. What does this involve?",
    ["Using leverage to amplify returns on a long-only portfolio — a financial measure", "Investing exclusively in long-dated government bonds — an alternative choice", "Only buying undervalued stocks and holding them long-term — an alternative choice", "Simultaneously buying undervalued stocks (long) and selling overvalued stocks short, aiming to"], 3,
    "A long-short equity strategy involves taking long positions in stocks expected to rise and short positions in stocks expected to fall. The aim is to profit from stock selection regardless of overall market direction, reducing market risk."
  ),

  // --- 5.12 Structured Products ---
  q("ch5-struct-1", "cisi-icwim", "ch5", "5.12", "Structured Products", "products",
    "hard",
    "A structured product offers capital protection with returns linked to the FTSE 100 over 5 years. If the FTSE falls 30% at maturity, the investor receives their original capital back. Who bears the credit risk?",
    ["The investor bears no risk at all — an alternative choice", "The risk is borne by the FCA — an alternative choice", "The investor bears the credit risk of the counterparty (usually the issuing bank)", "The FSCS guarantees the full return — a financial measure"], 2,
    "Capital-protected structured products are only as safe as the issuer. If the issuing bank defaults, the investor may lose their capital despite the 'protection'. This counterparty risk was highlighted during the 2008 financial crisis (e.g., Lehman Brothers structured notes)."
  ),
  q("ch5-struct-2", "cisi-icwim", "ch5", "5.12", "Structured Products", "products",
    "medium",
    "A 'kick-out' or 'auto-call' structured product will mature early if:",
    ["The investor requests early redemption — an alternative choice", "The underlying index is at or above a", "Interest rates fall below a specified level — a financial measure", "The issuing bank's credit rating improves — an alternative choice"], 1,
    "Auto-call (kick-out) products automatically mature early and pay a defined return if the underlying index (e.g., FTSE 100) is at or above a predetermined barrier level on specified observation dates (usually annual anniversaries)."
  ),

  // --- 5.13 Retirement Planning ---
  q("ch5-pension-1", "cisi-icwim", "ch5", "5.13", "Retirement Planning", "products",
    "hard",
    "An individual has a pension fund worth £1.2 million and takes 25% as a tax-free lump sum. If they use the remaining fund for drawdown and withdraw £40,000 in the first year, how is this taxed?",
    ["25% of the £40,000 is tax-free, the rest is taxed", "The full £40,000 is taxed as earned income at their marginal rate", "Entirely tax-free as it comes from a pension", "Only the amount above the personal allowance is taxed"], 1,
    "After taking the 25% tax-free lump sum (£300,000), the remaining £900,000 enters drawdown. ALL withdrawals from drawdown are taxed as earned income at the individual's marginal rate — added to their other income for the tax year to determine the rate."
  ),
  q("ch5-pension-2", "cisi-icwim", "ch5", "5.13", "Retirement Planning", "products",
    "medium",
    "What is the maximum percentage of a defined contribution pension fund that can be taken as a tax-free lump sum under current rules?",
    ["15%", "25%", "50%", "20%"], 1,
    "Under current UK pension rules, up to 25% of the pension fund can be taken as a Pension Commencement Lump Sum (PCLS) — completely free of income tax. The remaining 75% is then used to provide retirement income (annuity or drawdown), which is taxable."
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 6 — PORTFOLIO CONSTRUCTION AND PLANNING (5 of 80)
  // ═══════════════════════════════════════════════════════════════

  // --- 6.1 Asset Allocation ---
  q("ch6-aa-1", "cisi-icwim", "ch6", "6.1", "Asset Allocation", "portfolio",
    "hard",
    "Research suggests that asset allocation accounts for what approximate percentage of the variability of a portfolio's returns over time?",
    ["Around 25%", "Around 90%", "Around 50%", "Around 100%"], 1,
    "The landmark Brinson, Hood & Beebower study (1986) found that approximately 90% of the variability in portfolio returns over time is explained by asset allocation decisions, with security selection and market timing contributing relatively little."
  ),
  q("ch6-aa-2", "cisi-icwim", "ch6", "6.1", "Asset Allocation", "portfolio",
    "hard",
    "What is the difference between 'strategic' and 'tactical' asset allocation?",
    ["Strategic allocation is for institutional investors only; tactical is for retail — a financial measure", "Strategic allocation sets long-term target weights; tactical allocation makes", "Strategic allocation changes monthly; tactical allocation is set annually — a financial measure", "There is no meaningful difference between the two approaches — an alternative choice"], 1,
    "Strategic asset allocation establishes long-term target weights based on the investor's objectives and risk tolerance. Tactical asset allocation involves short-term deviations from these targets to take advantage of perceived market opportunities or to manage near-term risks."
  ),

  // --- 6.2 Investment Selection ---
  q("ch6-select-1", "cisi-icwim", "ch6", "6.2", "Investment Selection", "portfolio",
    "medium",
    "A fundamental analyst evaluating a company would focus PRIMARILY on which of the following?",
    ["The volume of shares traded in the previous week — an alternative choice", "Chart patterns and moving averages — an alternative choice", "The company's financial statements", "The number of analysts covering the stock — an alternative choice"], 2,
    "Fundamental analysis focuses on intrinsic value through analysis of financial statements, earnings, competitive advantages, management quality, and the broader economic environment. Chart patterns and trading volumes are tools of technical analysis."
  ),
  q("ch6-select-2", "cisi-icwim", "ch6", "6.2", "Investment Selection", "portfolio",
    "hard",
    "A technical analyst identifies a 'head and shoulders' pattern in a stock chart. What does this typically signal?",
    ["A potential reversal from an uptrend to a downtrend", "That trading volumes will increase dramatically", "A continuation of the current upward trend", "That the stock is about to split"], 0,
    "A head and shoulders pattern is a classic bearish reversal signal in technical analysis. It consists of three peaks — the middle being the highest (the 'head') — and typically indicates that an uptrend is losing momentum and a downward reversal is likely."
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 7 — GIVING INVESTMENT ADVICE  (11 of 80 exam Qs)
  // ═══════════════════════════════════════════════════════════════

  // --- 7.1 Advising Clients ---
  q("ch7-advise-1", "cisi-icwim", "ch7", "7.1", "Advising Clients", "advice",
    "medium",
    "When assessing a client's suitability for investment, which factor is MOST important to establish first?",
    ["The current level of the FTSE 100 index — an alternative choice", "The fund manager's past performance track record — an alternative choice", "The client's preferred investment platform — an alternative choice", "The client's investment objectives"], 3,
    "Suitability assessment requires understanding the client's investment objectives, attitude to risk, capacity for loss, and overall financial circumstances (income, assets, liabilities, time horizon). This is a regulatory requirement under MiFID II and FCA rules."
  ),
  q("ch7-advise-2", "cisi-icwim", "ch7", "7.1", "Advising Clients", "advice",
    "hard",
    "What is the key difference between 'attitude to risk' (ATR) and 'capacity for loss' (CFL)?",
    ["They are the same concept measured differently — an alternative choice", "ATR measures psychological willingness to accept volatility; CFL measures the financial ability to", "ATR is for institutional investors; CFL is for retail investors — an alternative choice", "CFL is always higher than ATR — an alternative choice"], 1,
    "Attitude to risk (ATR) is the psychological willingness to accept investment volatility. Capacity for loss (CFL) is the objective financial ability to absorb losses without materially impacting the client's standard of living. A client may have a high ATR but low CFL (or vice versa), and the lower of the two should typically guide recommendations."
  ),

  // --- 7.2 Financial Planning Process ---
  q("ch7-plan-1", "cisi-icwim", "ch7", "7.2", "The Financial Planning Process", "advice",
    "medium",
    "What is the purpose of an Investment Policy Statement (IPS)?",
    ["To document the client's objectives, constraints, and agreed investment strategy", "To guarantee a minimum investment return", "To provide a legally binding contract between the adviser and client", "To list all available investment products in the market"], 0,
    "An IPS documents the client's investment objectives, risk tolerance, time horizon, constraints (such as liquidity needs, tax considerations), and the agreed investment strategy. It serves as a roadmap for managing the portfolio and a benchmark for reviewing performance."
  ),
  q("ch7-plan-2", "cisi-icwim", "ch7", "7.2", "The Financial Planning Process", "advice",
    "hard",
    "Under FCA rules, what is the difference between 'independent' and 'restricted' financial advice?",
    ["Restricted advice is only for high-net-worth clients — an alternative choice", "There is no regulatory difference — it is a marketing term", "Independent advice considers all retail investment products", "Independent advisers charge fees; restricted advisers earn commission — an alternative choice"], 2,
    "Independent financial advice must be based on a comprehensive and fair analysis of the relevant market, considering all retail investment products that could meet the client's needs. Restricted advice is limited in some way — by product type, provider, or both — and the restriction must be disclosed to the client."
  ),

  // --- 7.3 ESG and SRI ---
  q("ch7-esg-1", "cisi-icwim", "ch7", "7.3", "ESG and SRI Strategies", "advice",
    "hard",
    "An investment approach that excludes companies involved in tobacco, weapons, and gambling is BEST described as:",
    ["Negative screening (exclusion-based)", "Positive screening (best-in-class)", "Shareholder engagement", "Impact investing"], 0,
    "Negative screening (exclusion) removes companies involved in specific activities considered harmful or unethical. Positive screening (best-in-class) selects companies with the best ESG practices within each sector. Impact investing targets measurable social/environmental outcomes alongside financial returns."
  ),
  q("ch7-esg-2", "cisi-icwim", "ch7", "7.3", "ESG and SRI Strategies", "advice",
    "medium",
    "Why might ESG ratings for the same company differ significantly between rating providers?",
    ["Because ESG ratings are randomly generated", "Because providers use different methodologies, weightings, and data sources", "Because companies deliberately provide conflicting information", "Because ESG is an exact science with universally agreed metrics"], 1,
    "ESG ratings can vary significantly between providers because there is no standardised methodology. Different providers weight environmental, social, and governance factors differently, use different data sources, and may interpret qualitative information differently."
  ),

  // --- 7.4-7.6 Solutions, Recommendations, Consumer Rights ---
  q("ch7-consumer-1", "cisi-icwim", "ch7", "7.7", "Consumer Rights and Regulatory Requirements", "advice",
    "medium",
    "If a client is unhappy with the financial advice they have received, they should first complain to:",
    ["The Financial Ombudsman Service (FOS) directly", "The Bank of England", "The Financial Conduct Authority (FCA)", "The firm that provided the advice"], 3,
    "The complaints process requires clients to first raise their complaint with the firm. The firm has 8 weeks to resolve it. If the client remains dissatisfied after the firm's final response (or 8 weeks have passed), they can then escalate to the Financial Ombudsman Service (FOS)."
  ),
  q("ch7-consumer-2", "cisi-icwim", "ch7", "7.7", "Consumer Rights and Regulatory Requirements", "advice",
    "hard",
    "The Financial Services Compensation Scheme (FSCS) protects investors if an authorised firm fails. What is the maximum compensation for investments?",
    ["£50,000 per person per firm", "£85,000 per person per firm", "Unlimited protection for all regulated investments", "£170,000 for joint accounts"], 1,
    "The FSCS provides up to £85,000 per eligible person per firm for investment claims (and the same for deposits). This is separate from the deposit protection limit. Joint accounts may receive up to £170,000 (£85,000 each). Not all investments are covered."
  ),

  // --- 7.8 Performance Benchmarks ---
  q("ch7-bench-1", "cisi-icwim", "ch7", "7.8", "Performance Benchmarks", "advice",
    "medium",
    "A UK equity fund benchmarks against the FTSE All-Share Index. If the fund returns 8% and the index returns 6%, the fund has generated:",
    ["6% relative return", "14% total return", "2% alpha (outperformance)", "8% absolute return"], 2,
    "Alpha represents the excess return above the benchmark. The fund returned 8% versus the benchmark's 6%, generating 2% of alpha (outperformance). Absolute return is 8%, but alpha specifically measures the value added by active management."
  ),
  q("ch7-bench-2", "cisi-icwim", "ch7", "7.8", "Performance Benchmarks", "advice",
    "hard",
    "When selecting a performance benchmark, which characteristic is LEAST important?",
    ["The benchmark should be transparent and calculated independently", "The benchmark should have delivered strong historical returns", "The benchmark should be investable and representative of the portfolio's opportunity set", "The benchmark should be specified in advance and agreed with the client"], 1,
    "A good benchmark should be investable, representative, transparent, independently calculated, and pre-specified. Whether the benchmark itself has strong historical returns is irrelevant — it should accurately reflect the investment universe and risk profile, not be chosen for flattering comparisons."
  ),

  // ═══════════════════════════════════════════════════════════════
  // CHAPTER 8 — PORTFOLIO PERFORMANCE AND REVIEW  (5 of 80)
  // ═══════════════════════════════════════════════════════════════

  // --- 8.1 Purpose and Concept of Benchmarking ---
  q("ch8-benchmark-1", "cisi-icwim", "ch8", "8.1", "Purpose and Concept of Benchmarking", "performance",
    "medium",
    "Why is it important to use an appropriate benchmark when measuring portfolio performance?",
    ["Because regulators require all portfolios to beat the FTSE 100 — an alternative choice", "To ensure the fund manager earns their performance fee — an alternative choice", "To provide a relevant comparison that reflects the portfolio's", "To guarantee the portfolio will outperform the market — an alternative choice"], 2,
    "An appropriate benchmark provides a meaningful yardstick against which to judge whether the fund manager is adding value. Comparing a UK small-cap fund against the S&P 500, for example, would be meaningless. The benchmark should match the portfolio's asset class, geography, and risk profile."
  ),
  q("ch8-benchmark-2", "cisi-icwim", "ch8", "8.1", "Purpose and Concept of Benchmarking", "performance",
    "hard",
    "A composite benchmark of '60% FTSE All-Share / 40% FTSE Actuaries UK Gilts All Stocks' would be most appropriate for:",
    ["A money market fund — an alternative choice", "A balanced fund investing in UK equities and bonds", "A global emerging markets fund", "A pure equity growth fund — an alternative choice"], 1,
    "A composite benchmark combining equity and bond indices is appropriate for a balanced or mixed fund that invests across both asset classes. The 60/40 split should reflect the fund's target asset allocation. Pure equity, emerging market, or money market funds would each need their own specific benchmarks."
  ),

  // --- 8.2 Portfolio Measurement ---
  q("ch8-measure-1", "cisi-icwim", "ch8", "8.2", "Portfolio Measurement", "performance",
    "hard",
    "A client invests £100,000 in a fund. After 6 months, they add £50,000. At the end of the year, the fund is worth £165,000. Which return methodology removes the distorting effect of the cash flow timing?",
    ["Time-weighted rate of return (TWRR)", "Money-weighted rate of return (MWRR)", "Holding period return", "Simple percentage return"], 0,
    "The Time-Weighted Rate of Return (TWRR) eliminates the distorting effect of external cash flows by geometrically linking sub-period returns. It measures the fund manager's performance independent of client cash flow decisions. The MWRR, by contrast, is influenced by the timing and size of cash flows."
  ),
  q("ch8-measure-2", "cisi-icwim", "ch8", "8.2", "Portfolio Measurement", "performance",
    "hard",
    "Fund A has a higher return than Fund B, but Fund A also has a higher standard deviation. Which metric allows a fair comparison of their risk-adjusted performance?",
    ["The tracking error", "Total return comparison", "The Sharpe ratio", "The nominal return difference"], 2,
    "The Sharpe ratio (excess return per unit of total risk) allows fair comparison of funds with different risk levels. A fund with higher returns but proportionally much higher risk may actually have a lower Sharpe ratio, indicating poorer risk-adjusted performance."
  ),

  // --- 8.3 Portfolio Review ---
  q("ch8-review-1", "cisi-icwim", "ch8", "8.3", "Portfolio Review", "performance",
    "medium",
    "How often should a client's investment portfolio be formally reviewed?",
    ["Reviews are optional and not required by regulation", "Only when the client requests it", "At least annually, or more frequently if circumstances change", "Every 5 years to align with investment horizons"], 2,
    "Best practice (and regulatory expectation for ongoing advisory services) is to review portfolios at least annually. More frequent reviews may be needed following significant market events, changes in personal circumstances, or shifts in financial goals."
  ),
  q("ch8-review-2", "cisi-icwim", "ch8", "8.3", "Portfolio Review", "performance",
    "hard",
    "During a portfolio review, the adviser discovers the client's equity allocation has drifted from 60% to 75% due to strong market performance. What is the most appropriate action?",
    ["Sell all equities immediately to eliminate market risk", "Increase the equity target to 75% since it has worked", "Rebalance back to the target 60% equity allocation to maintain the agreed", "Leave the portfolio unchanged since equities have performed well"], 2,
    "Rebalancing back to the target allocation ensures the portfolio continues to reflect the client's agreed risk profile. Allowing drift means the client is taking on more equity risk than originally agreed. Rebalancing is a disciplined process of selling outperformers and buying underperformers to maintain the strategic allocation."
  ),

  // ═══════════════════════════════════════════════════════════════
  // BOOK 2: UK REGULATION AND PROFESSIONAL INTEGRITY ED14 — (~46 questions)
  // ═══════════════════════════════════════════════════════════════

  // --- Ch1: UK Financial Services Sector (categoryId: "regulation")
  q("reg-ch1-t1-1", "cisi-reg", "reg-ch1", "1.1", "Role of Government & Financial Investment", "regulation",
    "hard",
    "Which UK body is responsible for setting monetary policy and managing inflation targets, and what is the current inflation target?",
    ["The Bank of England; 2%", "The FCA; 3%", "The Treasury; 1.5%", "Parliament; variable"], 0,
    "The Bank of England's Monetary Policy Committee sets the inflation target at 2% and uses interest rate decisions to steer inflation. The Treasury sets the framework but the BoE operates independently. A 1.5% target and FCA/Parliament targets are incorrect."
  ),
  q("reg-ch1-t1-2", "cisi-reg", "reg-ch1", "1.2", "Global Financial Services & Economic Cycles", "regulation",
    "hard",
    "In the context of the financial crisis 2007-08, which feature of central banks' interventions was designed to inject liquidity when interest rates reached the zero lower bound?",
    ["Quantitative easing (QE)", "Raising reserve requirements", "Increasing the base rate", "Reverse repo operations"], 0,
    "Quantitative easing involved central banks purchasing long-term assets (gilts, bonds) to inject liquidity when traditional interest rate cuts could not go further. Reverse repo, higher reserve requirements, and rate increases are either not applicable at the ZLB or used for different purposes."
  ),
  q("reg-ch1-t1-3", "cisi-reg", "reg-ch1", "1.3", "Central Banks & Economic Cycles", "regulation",
    "hard",
    "A regulator identifies that excessive credit growth and asset price inflation are building systemic risk. Which macroprudential tool would be most appropriate to deploy?",
    ["Countercyclical capital buffer (CCyB) increases", "Relaxing loan-to-value (LTV) limits", "Interest rate cuts to stimulate borrowing", "Encouraging leverage to support growth"], 0,
    "The countercyclical capital buffer forces banks to hold more capital in booms, constraining credit growth and reducing build-up of systemic risk. Interest cuts, higher leverage, and relaxed LTVs would worsen the situation. CCyB is a key macroprudential tool."
  ),
  q("reg-ch1-t1-4", "cisi-reg", "reg-ch1", "1.4", "Economic Cycles & Government Role", "regulation",
    "hard",
    "When an economy enters recession, consumer spending falls, unemployment rises, and house prices decline. Which statement correctly describes the regulator's dual objective?",
    ["Maximize profitability of all financial institutions — an alternative choice", "Eliminate all market downturns — an alternative choice", "Maintain financial stability AND ensure", "Guarantee all investment returns — a financial measure"], 2,
    "Regulators balance financial stability (preventing system-wide collapse) with consumer protection (fair treatment, proper authorisation). They cannot prevent all downturns or guarantee returns. Maximizing profitability alone is not their mandate; they must balance multiple objectives."
  ),

  // --- Ch2: UK Financial Services & Consumer Relationships (categoryId: "regulation")
  q("reg-ch2-t1-1", "cisi-reg", "reg-ch2", "2.1", "Financial Risks & Needs Assessment", "regulation",
    "hard",
    "During a financial planning meeting, an adviser discovers the client has no emergency fund, high outstanding personal debt, and minimal pension savings despite being age 45. What is the correct order of priority for addressing these needs?",
    ["Only provide investment advice and refer debt management elsewhere", "Ignore the debt and focus only on pension saving to reach retirement", "First establish emergency fund, then clear debt, then address pension planning", "Begin pension investment immediately to catch up on contributions"], 2,
    "Sound financial planning prioritizes: (1) emergency fund (liquidity), (2) debt clearance (reduces financial risk), then (3) long-term savings. Starting pension investment while carrying high-cost debt is inefficient. A holistic approach must address multiple needs in correct sequence."
  ),
  q("reg-ch2-t1-2", "cisi-reg", "reg-ch2", "2.2", "Professional Conduct & Consumer Relationships", "regulation",
    "hard",
    "A client requests advice on a highly complex derivative strategy that the adviser believes is inappropriate. The client insists, citing his experience as a hedge fund manager. What is the correct approach under COBS rules?",
    ["Provide the advice since the client claims expertise — an alternative choice", "Record the client's decision verbally and proceed immediately — an alternative choice", "Provide a suitability report explaining why it's", "Refuse outright without explanation — an alternative choice"], 2,
    "Even experienced clients require suitability assessments (COBS 9). An adviser must explain why a strategy is unsuitable, provide alternatives, and if the client still insists, document this in writing. Refusing without explanation or proceeding without explanation both breach conduct rules."
  ),
  q("reg-ch2-t1-3", "cisi-reg", "reg-ch2", "2.3", "How Needs Are Met", "regulation",
    "hard",
    "Which of the following best describes the distinction between a 'best execution' obligation and a 'suitability' obligation?",
    ["Best execution achieves the best possible price/terms for executing an order; suitability ensures the investment meets the", "Best execution ensures the investment is suitable; suitability ensures the best price — an alternative choice", "They are identical concepts applied to different asset classes — an alternative choice", "Only best execution applies to retail clients — an alternative choice"], 0,
    "Suitability (COBS 9) assesses whether an investment meets the client's profile; best execution (COBS 11) concerns achieving optimal price/terms when dealing. Both apply to retail clients. They are separate obligations with different purposes."
  ),
  q("reg-ch2-t1-4", "cisi-reg", "reg-ch2", "2.4", "Professional Conduct & Regulatory Expectations", "regulation",
    "hard",
    "An adviser is conflicted between recommending a commission-generating product and a more suitable but low-commission alternative. How should this conflict be managed under FCA rules?",
    ["Recommend the higher-commission product to maximize fee income", "Disclose the conflict and take steps to ensure the client's interests take priority", "Avoid managing the conflict by not providing advice — an alternative choice", "Choose whichever pays more without disclosure — an alternative choice"], 1,
    "COBS 2 (Conduct of business) requires advisers to act in the client's interest and manage conflicts of interest. Disclosure plus prioritizing the client's needs (even if lower commission) is correct. Undisclosed conflicts and profit prioritization breach conduct rules."
  ),

  // --- Ch3: UK Contract and Trust Legislation (categoryId: "trusts")
  q("reg-ch3-t1-1", "cisi-reg", "reg-ch3", "3.1", "Legal Concepts & Contract Law", "trusts",
    "hard",
    "A financial adviser gives verbal investment advice to a client over the phone, and the client places a £50,000 investment based solely on this conversation. No written record is created. Is this contract binding and what are the compliance risks?",
    ["Verbal contracts are never binding in financial services; no compliance issue", "It is binding only if the adviser later confirms in writing — an alternative choice", "It is binding but COBS rules require written evidence of advice; documentation failure is a serious breach", "Verbal advice is acceptable if the client is a professional investor — an alternative choice"], 2,
    "COBS 2R (advice records) requires written documentation of personal recommendations. While a verbal agreement may be enforceable in contract law, the absence of written advice records is a significant regulatory breach. Professional investors and retail clients both require documented advice trails."
  ),
  q("reg-ch3-t1-2", "cisi-reg", "reg-ch3", "3.2", "Trusts: Bare Trusts", "trusts",
    "hard",
    "In a bare trust, when can a beneficiary force the trustee to transfer the trust assets to them, and what principle underpins this right?",
    ["Never, until the trustee decides — a legal structure", "At age 21 — an alternative choice", "At any time if all beneficiaries agree and are adults (over 18)", "Only with trustee permission — a legal structure"], 2,
    "The rule in Saunders v Vautier allows beneficiaries with absolute entitlement (all bare trust beneficiaries) to demand the trust be ended and assets transferred, regardless of the trust deed terms. This requires all beneficiaries to be adults and in agreement. Age 21 and trustee permission are outdated concepts."
  ),
  q("reg-ch3-t1-3", "cisi-reg", "reg-ch3", "3.3", "Trusts: Interest in Possession", "trusts",
    "hard",
    "A settlor creates a trust with an income beneficiary (A) entitled to all income, and a remainder beneficiary (B) entitled to the capital on A's death. A dies after 15 years. What tax consequences arise for B?",
    ["B must immediately distribute proceeds to other beneficiaries", "An exit charge applies under the relevant property rules (potentially 6% of the trust value)", "B's inheritance tax charge is nil because interest in possession trusts are tax-exempt", "No tax; B simply receives the capital"], 1,
    "Interest in possession trusts are treated as potentially exempt transfers (PETs) for the life tenant. Upon death of the life tenant, an exit charge under relevant property rules may apply at 6% of trust value (if the 10-year anniversary approach is used). Tax is not avoided; it depends on the trust's composition and whether relevant property rules apply."
  ),
  q("reg-ch3-t1-4", "cisi-reg", "reg-ch3", "3.4", "Trusts: Flexible & Power of Appointment", "trusts",
    "hard",
    "A flexible trust gives the trustee discretion to distribute capital and income among a defined class of beneficiaries. How does this flexibility affect the beneficiaries' tax position compared to a bare trust?",
    ["Beneficiaries have no tax at all in flexible trusts — a legal structure", "All beneficiaries are always taxed the same — an alternative choice", "Tax is fixed regardless of distributions — an alternative choice", "The trustee can direct income/capital allocation"], 3,
    "Flexible trusts allow trustees to allocate income and capital strategically. A beneficiary with no other income (e.g., a child) may receive distributions tax-free, while a high-earner receives less. A bare trust has fixed entitlements; all beneficiaries are taxed on their proportionate share regardless of distributions."
  ),
  q("reg-ch3-t1-5", "cisi-reg", "reg-ch3", "3.5", "Trustee & Beneficiary Duties", "trusts",
    "hard",
    "Under the Trustee Act 2000, which of the following is NOT a statutory power of a trustee?",
    ["Power to invest in any asset a prudent investor would consider", "Duty to exercise power of investment with care", "Power to sell any trust asset", "Power to borrow money on behalf of the trust without limit"], 3,
    "The Trustee Act 2000 grants powers to invest and sell assets with a duty of care. Borrowing is NOT a statutory power under the 2000 Act; trustees can only borrow if the trust deed permits it. Unlimited borrowing in particular would breach the duty of care."
  ),
  q("reg-ch3-t1-6", "cisi-reg", "reg-ch3", "3.6", "Trust Administration & Settlor/Trustee/Beneficiary Roles", "trusts",
    "hard",
    "A settlor creates a trust with land valued at £800,000. They appoint themselves as sole trustee. Is this arrangement valid, and what compliance issues arise?",
    ["Valid only if all beneficiaries consent — an alternative choice", "Invalid; settlor cannot be trustee — a legal structure", "Valid but MUST appoint at least one other trustee, or comply with the rule", "Valid; settlors can be sole trustees — a legal structure"], 2,
    "Trusts holding land must have a minimum of 2 trustees and a maximum of 4 (Law of Property Act 1925). A settlor can be a trustee but cannot be the sole trustee of land. Additional trustees must be appointed or the trust deed amended. Beneficiary consent is not required for trustee appointments."
  ),

  // --- Ch4: Integrity and Ethics in Professional Practice (categoryId: "ethics")
  q("reg-ch4-t1-1", "cisi-reg", "reg-ch4", "4.1", "Professional Ethics & Ethical Standards", "ethics",
    "hard",
    "An adviser discovers that a sales colleague has been mis-selling investments to elderly clients, misrepresenting risk profiles to close deals faster. The adviser is unsure whether to report internally or externally. Under PIDA 1998, what protection applies?",
    ["Protected only if reporting to the boss — an alternative choice", "No protection; internal reporting is discouraged — an alternative choice", "Only protected if reporting to the media — an alternative choice", "Protected if reporting in good faith to a prescribed regulator (e.g., FCA) or other"], 3,
    "The Public Interest Disclosure Act 1998 (PIDA/whistleblowing protection) protects disclosures made in good faith to prescribed regulators or proper internal channels, where the whistleblower reasonably believes wrongdoing has occurred. Media disclosure and sole-boss reporting lack these statutory protections."
  ),
  q("reg-ch4-t1-2", "cisi-reg", "reg-ch4", "4.2", "Corporate Culture & Firm Responsibilities", "ethics",
    "hard",
    "Following the LIBOR manipulation scandal, regulators found that traders submitted false rates with knowledge of management. Which governance failure does this reveal, and what is the key mitigation?",
    ["Weak ethical culture, absence of effective whistleblowing channels, and weak consequences for misconduct", "Insufficient profits (traders needed higher bonuses) — an alternative choice", "Traders acted alone without any organizational involvement — an alternative choice", "Lack of IT systems (could not track trader activity) — an alternative choice"], 0,
    "The LIBOR scandal highlighted cultural and governance failures: manipulation was known, incentives encouraged it, and there was no safe channel to raise concerns. Mitigation requires explicit ethical values, link compensation to compliance, support for whistleblowers, and enforcement. IT systems and profit levels are secondary."
  ),
  q("reg-ch4-t1-3", "cisi-reg", "reg-ch4", "4.3", "Wells Fargo Scandal Context", "ethics",
    "hard",
    "The Wells Fargo scandal (2016) revealed employees creating fake customer accounts to meet sales targets. Which governance and regulatory response is most relevant to UK financial services?",
    ["Introduction of the Senior Managers Regime (SMR) to hold senior management accountable for failures in their area", "Removal of all sales targets industry-wide — an alternative choice", "Customers were fully compensated so no systemic change needed — an alternative choice", "Weaker oversight of aggressive sales targets in retail banking — an alternative choice"], 0,
    "UK regulators (post-LIBOR, Wells Fargo) strengthened SMR accountability. Senior managers must take reasonable steps to prevent breaches; failure to do so incurs personal financial penalties, clawback, and potential prohibition. Targeted sales without ethical oversight remain a risk that governance must address."
  ),
  q("reg-ch4-t1-4", "cisi-reg", "reg-ch4", "4.4", "Senior Managers Regime Accountability", "ethics",
    "hard",
    "Under the Senior Managers Regime (SMR), a Managing Director oversees a division where mis-selling is later discovered. The MD claims the traders acted without their knowledge. Is the MD liable, and what is the key test?",
    ["No liability; traders are solely responsible — an alternative choice", "Liable only if they directly authorized the mis-selling — an alternative choice", "Liable only if they participated in the misconduct — an alternative choice", "Potentially liable if they failed to take reasonable steps to prevent breaches in their area"], 3,
    "SMR imposes a duty on senior managers to 'reasonably take steps to prevent or stop misconduct in their area.' Knowledge is not required; the test is whether reasonable preventive measures were in place (policies, training, monitoring, culture). Ignorance is not a defense; it reflects governance failure."
  ),

  // --- Ch5: Regulatory Infrastructure of UK Financial Services (categoryId: "infrastructure")
  q("reg-ch5-t1-1", "cisi-reg", "reg-ch5", "5.1", "MiFID II/MiFIR Directive", "infrastructure",
    "hard",
    "Under MiFID II, which category of investor receives the highest level of regulatory protection, and what is a key requirement for firms advising them?",
    ["Large corporates; streamlined disclosure — a financial measure", "Eligible counterparties; no protections needed — an alternative choice", "Retail clients; suitability assessment and detailed advice records (5-year retention)", "Professional investors; no requirements — an alternative choice"], 2,
    "MiFID II grants retail clients highest protection: suitability assessment (COBS 9), detailed advice documentation, and 5-year retention. Professional investors and eligible counterparties receive less stringent protections. Large corporates may opt out, but MiFID II defaults to maximum retail protection."
  ),
  q("reg-ch5-t1-2", "cisi-reg", "reg-ch5", "5.2", "UCITS Directive & Fund Regulation", "infrastructure",
    "hard",
    "A UCITS fund (Undertakings for Collective Investment in Transferable Securities) is marketed across the EU. Which regulatory feature provides investor protection and distinguishes UCITS from non-UCITS funds?",
    ["No regulatory framework; UCITS is unregulated — an alternative choice", "Higher leverage allowed (10x) compared to other funds — an alternative choice", "Strict diversification rules, leverage limits (max 2x), and daily", "No liquidity requirements; UCITS funds can suspend redemptions indefinitely"], 2,
    "UCITS offers investor protection through: diversification limits, leverage cap at 2x NAV, daily redemption availability, daily valuation, and common EU passport. These contrast with non-UCITS AIFs which may have different rules. Suspension of redemptions is possible but must follow strict conditions."
  ),
  q("reg-ch5-t1-3", "cisi-reg", "reg-ch5", "5.3", "Alternative Fund Managers Directive (AIFMD)", "infrastructure",
    "hard",
    "The AIFMD regulates Alternative Investment Fund Managers (AIFMs). Which type of fund is typically subject to AIFMD regulation rather than UCITS?",
    ["Government bond funds — an alternative choice", "Hedge funds, private equity funds, and real estate funds (less liquid, higher leverage", "Index-tracking equity funds (no active management) — an alternative choice", "Open-ended UK equity unit trusts with daily liquidity — a legal structure"], 1,
    "AIFMD covers AIFs (hedge funds, PE, real estate, etc.) that fall outside UCITS scope. These funds may employ higher leverage, less frequent liquidity, and complex strategies. UCITS (daily liquidity, leverage caps) and open-ended unit trusts follow different regulations. Index funds are typically UCITS."
  ),
  q("reg-ch5-t1-4", "cisi-reg", "reg-ch5", "5.4", "UK Post-Brexit Regulatory Framework", "infrastructure",
    "hard",
    "Post-Brexit, the UK maintained most MiFID II rules under FCA regulation, but introduced new passporting rules. How does the 'equivalence decision' allow UK firms to continue serving EU clients?",
    ["Only EU firms can serve UK clients; UK firms are restricted — an alternative choice", "Full UK-EU passporting is permanent and automatic — an alternative choice", "No equivalence decision was granted; all EU passporting ended immediately — an alternative choice", "The UK received equivalence decisions for certain services (e.g.,"], 3,
    "Post-Brexit, UK firms lost automatic MiFID II passporting to the EU. Equivalence decisions (granted for some services) allow limited EU client service, but firms typically need host country authorization. Full passporting does not exist; the relationship is asymmetric."
  ),

  // --- Ch6: FCA and PRA Supervisory Objectives, Principles and Processes (categoryId: "fca-pra")
  q("reg-ch6-t1-1", "cisi-reg", "reg-ch6", "6.1", "FCA Objectives & Principles", "fca-pra",
    "hard",
    "The FCA's primary objective is to ensure 'an appropriate degree of protection for consumers.' When a firm's business model conflicts with consumer protection, how does the FCA typically intervene?",
    ["It subsidizes losses to protect profits — an alternative choice", "It issues rules, conducts supervision, and can restrict or withdraw authorization if", "It lets consumers bear all risk — an alternative choice", "It never intervenes; markets work best unregulated — an alternative choice"], 1,
    "The FCA's statutory objective is consumer protection and market integrity. When a business model creates disproportionate consumer harm, the FCA has powers to: set rules, conduct intensive supervision, require changes, and ultimately withdraw authorization. Non-intervention is not an option if systemic harm is evident."
  ),
  q("reg-ch6-t1-2", "cisi-reg", "reg-ch6", "6.2", "Insistent Client Rule", "fca-pra",
    "hard",
    "A retail client insists on a heavily leveraged investment that the adviser has assessed as unsuitable. Under COBS, can the adviser proceed, and what documentation is required?",
    ["Yes, but only if the client is a professional investor — an alternative choice", "Yes, without any documentation if the client signs a waiver — an alternative choice", "No; advisers cannot proceed with unsuitable recommendations under any circumstances — an alternative choice", "Yes, if the adviser provides a warning about the unsuitability in writing,"], 3,
    "COBS 2R allows an insistent client to override a suitability recommendation, but requires (1) written suitability report explaining unsuitability, (2) written record of the client's insistence to proceed, and (3) file retention. A verbal acknowledgment or one-line waiver is insufficient; detailed documentation protects both parties."
  ),
  q("reg-ch6-t1-3", "cisi-reg", "reg-ch6", "6.3", "Vulnerable Clients & Consumer Duty", "fca-pra",
    "hard",
    "The FCA's Consumer Duty (effective July 2023 for new products) requires firms to act in the 'best interests' of consumers. How does this impact advice for a vulnerable client (low income, poor health)?",
    ["Vulnerable clients receive no protection — an alternative choice", "Advisers must take additional steps to ensure suitability, monitor ability to bear", "Advisers must refuse to serve vulnerable clients — an alternative choice", "No change; advisers treat all clients the same — an alternative choice"], 1,
    "Consumer Duty and COBS 2 require heightened care for vulnerable consumers: tailored advice, clear communication, monitoring of client circumstances, and proactive review. Vulnerability may be age, health, income, knowledge, or language barriers. Enhanced care is mandatory, not optional."
  ),
  q("reg-ch6-t1-4", "cisi-reg", "reg-ch6", "6.4", "PRA Supervisory Objectives", "fca-pra",
    "hard",
    "The PRA (Prudential Regulation Authority) supervises banks and insurers. What is its primary objective, and how does it differ from FCA consumer protection focus?",
    ["To maximize bank profitability — an alternative choice", "To regulate pricing — an alternative choice", "To ensure financial stability and prevent systemic risk", "No difference; PRA and FCA have identical roles — an alternative choice"], 2,
    "PRA's objective is financial stability (protecting the financial system from insolvency/systemic collapse). FCA's objective is consumer protection and market integrity. PRA supervises capital, liquidity, risk management of banks; FCA supervises conduct, suitability, conflicts. Both regulate, but with different emphases."
  ),

  // --- Ch7: FCA and PRA Authorisation of Firms and Individuals (categoryId: "authorisation")
  q("reg-ch7-t1-1", "cisi-reg", "reg-ch7", "7.1", "Authorisation Process for Firms", "authorisation",
    "hard",
    "A new investment advisory firm applies for FCA authorization. The firm has competent staff, but the FCA is concerned about governance and the robustness of its money handling procedures. Can the FCA refuse authorization, and on what grounds?",
    ["Yes; FCA can refuse if it is not satisfied the firm meets Threshold Conditions (including", "FCA can only defer; it cannot refuse — an alternative choice", "No; FCA must authorize any firm with qualified staff — an alternative choice", "Yes, but only if the firm is bankrupt — an alternative choice"], 0,
    "The FCA's Threshold Conditions assess whether an applicant firm is 'fit and proper': financial resources, management competence, systems/controls, and governance (including money handling). Competent staff alone are insufficient if controls and governance are weak. Refusal is justified if conditions are not met."
  ),
  q("reg-ch7-t1-2", "cisi-reg", "reg-ch7", "7.2", "Approved Persons Regime & Senior Managers Regime", "authorisation",
    "hard",
    "Under the Senior Managers & Certification Regime (SM&CR), which statement correctly describes the difference between Certified Persons and Senior Managers?",
    ["Neither is accountable; only the firm is responsible — an alternative choice", "Certified Persons have no accountability; Senior Managers have full accountability — an alternative choice", "Both are identical in their accountability — an alternative choice", "Senior Managers (CEOs, etc.) are accountable for their areas; Certified Persons must be assessed as fit and proper but have"], 3,
    "SM&CR creates two tiers: (1) Senior Managers — named individuals accountable for prescribed functions (CEOs, risk, compliance heads) under the 'duty to take reasonable steps'; (2) Certified Persons — roles with market-facing responsibility, must be certified as fit and proper annually, but less formal accountability than SMs."
  ),
  q("reg-ch7-t1-3", "cisi-reg", "reg-ch7", "7.3", "Statements of Professional Standing (SPS)", "authorisation",
    "hard",
    "An FCA-authorized firm issues a Statement of Professional Standing (SPS) to a departing adviser. How long is this SPS valid for use at a new firm, and what does it confirm?",
    ["Indefinite; confirms the adviser's entire professional history — an alternative choice", "Not valid; SPSs are non-transferable — an alternative choice", "12 months; confirms the adviser has maintained professional standards and is fit and proper to act as", "3 years; confirms regulatory history — an alternative choice"], 2,
    "The SPS is valid for 12 months (from issue date) and confirms the adviser was in good standing, met CPD requirements, and was fit and proper when employed. It facilitates movement between authorized firms. After 12 months, a new SPS is needed. It does not confirm career history, only recent compliance."
  ),
  q("reg-ch7-t1-4", "cisi-reg", "reg-ch7", "7.4", "Record-Keeping & Governance Requirements", "authorisation",
    "hard",
    "A firm's record-keeping policy states that advice records must be kept for 3 years. A client files a complaint after 4 years. Can the firm's claim 'records not available' be used as a defense?",
    ["No; MiFID II advice records must be retained for 5 years minimum", "Records can be deleted after any timeframe — an alternative choice", "Yes; there is no regulatory requirement — an alternative choice", "Yes; 3 years is the firm's policy — an alternative choice"], 0,
    "COBS 1R (record retention) requires 5-year retention for MiFID II advice records and 3 years for non-MiFID II business. A self-imposed 3-year policy for MiFID II is under-compliant. The firm cannot use an inadequate internal policy to escape liability; regulatory minima apply, and the burden is on the firm to retain records."
  ),
  q("reg-ch7-t1-5", "cisi-reg", "reg-ch7", "7.5", "Governance: Delegation & Outsourcing", "authorisation",
    "hard",
    "An advisory firm outsources its portfolio management to a third-party fund manager. The firm retains client relationships and suitability responsibility. If the fund manager breaches fiduciary duty, is the advisory firm liable?",
    ["Partially liable, shared equally — an alternative choice", "No; liability is solely the fund manager's — an alternative choice", "Liability is eliminated by contractual transfer — an alternative choice", "Yes; the firm remains liable to clients for"], 3,
    "Outsourcing does not eliminate the firm's regulatory responsibility to clients. Under COBS 1 (outsourcing rules), firms must: ensure outsourced service is compliant, maintain oversight, retain ultimate responsibility, and ensure contractual safeguards (including data protection, liability). The client-facing firm is the point of accountability."
  ),
  q("reg-ch7-t1-6", "cisi-reg", "reg-ch7", "7.6", "Fitness and Propriety (F&P)", "authorisation",
    "hard",
    "An Individual applying for FCA authorization has a criminal conviction for theft from 12 years ago, but has since rebuilt his career with clean compliance records. How should the FCA assess fitness and propriety?",
    ["Accept without assessment — an alternative choice", "Automatically refuse; any conviction disqualifies — an alternative choice", "Ignore the conviction; it is too old — an alternative choice", "Consider the conviction in context: nature, seriousness, time elapsed, rehabilitation,"], 3,
    "FCA's Fitness & Propriety assessment is holistic: relevant convictions, seriousness, time elapsed, rehabilitation, role risk, and compliance history. Financial services roles (especially those handling client money) carry high standards. A distant conviction with proven rehabilitation may pass F&P; current compliance record is significant."
  ),

  // --- Ch8: Regulatory Framework Relating to Financial Crime (categoryId: "financial-crime")
  q("reg-ch8-t1-1", "cisi-reg", "reg-ch8", "8.1", "Money Laundering & AML Compliance", "financial-crime",
    "hard",
    "A client makes unexplained large deposits from multiple overseas sources into their investment account over several weeks, with no clear business purpose. What is the firm's AML compliance obligation?",
    ["No action required; client money is client money — an alternative choice", "Conduct Customer Due Diligence (CDD) to understand the source of funds, file a", "Report to the police immediately — an alternative choice", "Close the account without explanation — an alternative choice"], 1,
    "AML rules (COBS 6) require firms to: (1) conduct CDD on clients, (2) conduct Enhanced Due Diligence (EDD) if risks are elevated, (3) implement ongoing monitoring, (4) file SARs with the National Crime Agency if ML is suspected. Reporting to police is not the firm's role; NCA is the financial crime authority."
  ),
  q("reg-ch8-t1-2", "cisi-reg", "reg-ch8", "8.2", "Terrorist Financing", "financial-crime",
    "hard",
    "Firms are required to have procedures to prevent terrorist financing. How does this differ from AML, and what is the compliance trigger?",
    ["Identical to AML; no difference — an alternative choice", "Only applies to banks; investment advisers are exempt — an alternative choice", "No compliance obligation for terrorism — an alternative choice", "AML targets proceeds of crime; CFT (Counter-Financing of Terrorism) targets funds that may"], 3,
    "CFT (Counter-Financing of Terrorism) is distinct from AML: it applies to all fund sources with terrorism risk, not just criminal proceeds. The compliance trigger is 'reasonable suspicion' (PSTR — Proceeds of Crime Act Terrorism Act Report), which is lower than criminal standard. All regulated firms (including advisers) must comply."
  ),
  q("reg-ch8-t1-3", "cisi-reg", "reg-ch8", "8.3", "Market Abuse & Insider Dealing", "financial-crime",
    "hard",
    "An adviser overhears senior management discussing a material acquisition before public announcement. The adviser immediately buys the target company's shares for his personal account. Is this illegal, and under which regime?",
    ["Only illegal for senior management — an alternative choice", "Yes; under MAR (Market Abuse Regulation), this is insider dealing if: (1) the information is material", "No; the adviser only overheard it — an alternative choice", "Only illegal if the adviser directly asked for the information — an alternative choice"], 1,
    "MAR insider dealing prohibits dealing on material non-public information accessed in a professional capacity. Mere overhearing does not excuse liability if the adviser knew or ought to have known the information was confidential. Professional access + material information + dealing = insider dealing. Restrictions apply to all market participants, not just managers."
  ),
  q("reg-ch8-t1-4", "cisi-reg", "reg-ch8", "8.4", "Data Protection & GDPR", "financial-crime",
    "hard",
    "A data breach exposes client personal data (names, account balances). The firm discovers the breach on Monday. When must the firm notify the ICO (Information Commissioner's Office) and what are the penalties for non-compliance?",
    ["Whenever convenient; no deadline — an alternative choice", "No notification required if the firm is FCA-authorized — an alternative choice", "Within 72 hours of discovery, unless the risk to individuals is low", "Within 30 days — an alternative choice"], 2,
    "GDPR Article 33 requires breach notification to ICO within 72 hours of discovery (unless risk is low and security risk is minimal). Failure to notify incurs fines up to £17.5 million or 4% of global annual turnover. FCA authorization does not override GDPR; both sets of rules apply. Delay is non-compliant."
  ),
  q("reg-ch8-t1-5", "cisi-reg", "reg-ch8", "8.5", "Whistleblowing & PIDA Protection", "financial-crime",
    "hard",
    "A junior compliance officer discovers that clients are being overcharged fees without their knowledge. She reports internally to her manager, but the manager dismisses it. Can she make an external disclosure to the FCA, and what protection does she have?",
    ["No; external disclosure will result in dismissal — an alternative choice", "Yes; PIDA (Public Interest Disclosure Act 1998) protects disclosures to prescribed", "Only if she first reports to the media — an alternative choice", "Only if the FCA asks her to report — an alternative choice"], 1,
    "PIDA protects good-faith disclosures about suspected wrongdoing to prescribed regulators. The officer must have a reasonable belief of wrongdoing (which overcharging is). External reporting to the FCA is protected after a good-faith internal attempt has been dismissed. Dismissal for PIDA disclosure is automatically unfair."
  ),
  q("reg-ch8-t1-6", "cisi-reg", "reg-ch8", "8.6", "Sanctions & Export Controls", "financial-crime",
    "hard",
    "A firm identifies that a long-standing client now appears on the UK Sanctions List (issued by OFSI — Office of Financial Sanctions Implementation). What is the firm's obligation?",
    ["Close the account but do not report — an alternative choice", "Report only if the client complains — an alternative choice", "Continue business as normal until the client is confirmed convicted — an alternative choice", "Immediately freeze all accounts/transactions, file a report with OFSI, and cease facilitating any"], 3,
    "Sanctions regulations (including Sanctions and Anti-Money Laundering Act 2018) require firms to: (1) check clients against UK Sanctions Lists, (2) immediately freeze accounts/assets if a match is found, (3) report to OFSI within days (typically immediately for Terrorist Finance), and (4) continue monitoring. Civil or criminal liability applies for breaches."
  ),

  // --- Ch9: Complaints and Redress (categoryId: "complaints")
  q("reg-ch9-t1-1", "cisi-reg", "reg-ch9", "9.1", "FOS (Financial Ombudsman Service)", "complaints",
    "hard",
    "A client submits a complaint to the FOS about an investment recommendation made 5 years ago. The firm claims the complaint is out of time. What is the FOS jurisdictional test, and can the FOS accept the complaint?",
    ["Time limit is strictly 1 year; no exceptions — an alternative choice", "FOS has no time limit — an alternative choice", "FOS only accepts complaints within 2 months of the firm's final response — an alternative choice", "The complaint must be made within 6 years of the event or within 3 years of when the client became aware of loss"], 3,
    "FOS jurisdiction for time-barred complaints: the complaint must be received within 6 years of the event or 3 years of awareness (DISP 2.8.1R). The FOS can extend this if there is 'good reason' (e.g., firm concealment, client vulnerability, misadvice complexity). A blanket 'out of time' rejection is not automatic."
  ),
  q("reg-ch9-t1-2", "cisi-reg", "reg-ch9", "9.2", "FOS Monetary Award Limits", "complaints",
    "hard",
    "The FOS issues a determination awarding a client £450,000 in compensation for negligent financial advice that caused loss. The firm refuses to pay, claiming the award exceeds FOS jurisdiction. Is the firm correct?",
    ["Yes; FOS limit is £300,000 — an alternative choice", "No; the FOS monetary award limit is £430,000 (for complaints about", "Limit is £100,000 only — an alternative choice", "No limit; FOS can award any amount — an alternative choice"], 1,
    "The FOS monetary award limit (as of 1 April 2023) is £430,000 per complaint. Previous limits were £325,000. Firms are bound by FOS determinations within jurisdiction; refusal to pay is a breach. Amounts above the limit must be pursued via court."
  ),
  q("reg-ch9-t1-3", "cisi-reg", "reg-ch9", "9.3", "Complaints Handling Procedures & Timelines", "complaints",
    "hard",
    "A client submits a written complaint on 1 March. The firm sends an acknowledgment on 5 March and a substantive response on 30 April. Is this compliant with FCA rules, and why?",
    ["No; FCA rules require a substantive", "Deadlines apply only if the client requests them — an alternative choice", "Yes; 60 days is reasonable — an alternative choice", "Yes; no specific deadline — an alternative choice"], 0,
    "DISP 1.6R requires firms to: (1) send acknowledgment within 1 working day, (2) issue substantive response within 8 calendar weeks of receipt. Late responses breach DISP. The firm's 60-day response exceeds the 8-week deadline. An exception is if the firm intends to uphold and resolves within 3 days."
  ),
  q("reg-ch9-t1-4", "cisi-reg", "reg-ch9", "9.4", "FSCS Compensation Limits & Coverage", "complaints",
    "hard",
    "A client holds investments worth £200,000 in a failed authorized firm. The firm was authorized to conduct 'investment business.' How much of this is protected under the FSCS?",
    ["Nothing; investment protection only applies to deposits", "£170,000 (double limit for joint accounts)", "£85,000 (standard FSCS investment protection limit)", "All £200,000"], 2,
    "FSCS investment business cover is up to £85,000 per person per authorized firm. For joint accounts, the limit is £170,000. Deposits (not investments) are covered up to £85,000 per person per institution. Temporary high balances (deposits only, not investments) up to £1 million apply for 12 months post-transfer."
  ),

  // --- Ch10: FCA Conduct of Business (categoryId: "conduct")
  q("reg-ch10-t1-1", "cisi-reg", "reg-ch10", "10.1", "Client Categorisation: Retail/Professional/ECP", "conduct",
    "hard",
    "A client is a non-financial company with turnover of £100 million. The firm classifies them as a 'professional client' and provides no suitability assessment. Is this compliant, and what is the test for professional client status?",
    ["No; professional client status requires either:", "Only banks are professional clients — an alternative choice", "Yes; large companies are automatically professional — an alternative choice", "All companies are professional clients — an alternative choice"], 0,
    "COBS 2.5R defines professional clients by objective criteria (size, experience) or written agreement. A £100m turnover company does NOT automatically qualify (threshold is €250m). Even professional clients may request consumer protection; firms must have written evidence of professional status."
  ),
  q("reg-ch10-t1-2", "cisi-reg", "reg-ch10", "10.2", "Suitability Assessment Process", "conduct",
    "hard",
    "An adviser recommends a complex derivatives strategy to a retail client. The client has a 5-year time horizon, moderate risk appetite, and no prior derivatives experience. What suitability defect is apparent?",
    ["The recommendation is unsuitable because complexity exceeds the client's", "5-year horizon is too long for derivatives — an alternative choice", "Derivatives are always unsuitable — an alternative choice", "No defect; time horizon is adequate — an alternative choice"], 0,
    "COBS 9 suitability requires matching product complexity to client knowledge/experience. A retail client with no derivatives experience and moderate risk appetite should not be advised into complex derivatives unless they can demonstrably understand risks. The adviser must assess knowledge, not assume ability."
  ),
  q("reg-ch10-t1-3", "cisi-reg", "reg-ch10", "10.3", "Appropriateness (Non-Advised Services)", "conduct",
    "hard",
    "A retail client uses a non-advised platform to select their own investment. The firm is not providing 'advice' under COBS 1. However, the firm must still carry out 'appropriateness assessments' before execution. What is the distinction?",
    ["Suitability (full advice) requires detailed analysis of client circumstances", "Appropriateness = suitability; they are the same — an alternative choice", "Appropriateness applies only to professional clients — an alternative choice", "No assessment is required for non-advised services — an alternative choice"], 0,
    "COBS 10R distinguishes: (1) Suitability = full analysis of needs, profile, objectives; (2) Appropriateness = lighter assessment for non-advised services, based on knowledge/experience only. Appropriateness is still mandatory for non-advised services; firms cannot execute unsuitable-looking trades without warning."
  ),
  q("reg-ch10-t1-4", "cisi-reg", "reg-ch10", "10.4", "Best Execution & Client Money", "conduct",
    "hard",
    "A firm executes a trade for a client at a price 2% worse than the best available price that day. The client's order instructions did not specify execution venue. Is the firm in breach of best execution, and what is the mitigation?",
    ["No breach if the venue was authorized — an alternative choice", "No breach; best execution has no specific standard — an alternative choice", "Potentially a breach; best execution (COBS 11) requires the firm to achieve the best", "Best execution is only for professional clients — an alternative choice"], 2,
    "Best execution (COBS 11R) is a core obligation for all retail and professional clients (not eligible counterparties). The firm must execute at the best terms available, considering price, costs, speed, and venue. A 2% slippage requires documented business justification; routine slippage without mitigation is a breach."
  ),

  // ═══════════════════════════════════════════════════════════════
  // BOOK 3: FINANCIAL PLANNING & ADVICE ED9 — (~42 questions)
  // ═══════════════════════════════════════════════════════════════

  // --- Ch1: Financial Planning (categoryId: "fin-planning")
  q("fpa-ch1-t1-1", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Fundamentals", "fin-planning",
    "hard",
    "The financial planning process is a cyclical engagement. Which stage comes FIRST, and what is the key deliverable before advice can be given?",
    ["Fact-finding and analysis", "Making recommendations — an alternative choice", "Implementation — an alternative choice", "Asset allocation; identify investments — an alternative choice"], 0,
    "Financial planning begins with comprehensive fact-finding: income, expenses, assets, liabilities, family structure (hard facts) and risk appetite, priorities, timelines (soft facts). Without this foundation, recommendations are speculative. Analysis of this data informs the financial plan."
  ),
  q("fpa-ch1-t1-2", "cisi-fpa", "fpa-ch1", "1.2", "Collecting Hard and Soft Facts", "fin-planning",
    "hard",
    "During fact-finding, a client states they are 'risk-averse' but their current portfolio is 95% equities. Which insight does this reveal, and what is the correct adviser response?",
    ["Equities are always inappropriate — an alternative choice", "No issue; soft facts are not important — an alternative choice", "Mismatch between stated risk tolerance (soft fact) and current investments (hard fact)", "The adviser should ignore the soft fact statement — an alternative choice"], 2,
    "Fact-finding reveals discrepancies between soft facts (stated attitudes) and hard facts (current actions). A risk-averse client with 95% equities signals misalignment. The adviser must investigate: Was the portfolio poorly advised? Is the client's stated risk inaccurate? Have circumstances changed? Resolution is essential for credible planning."
  ),
  q("fpa-ch1-t1-3", "cisi-fpa", "fpa-ch1", "1.3", "Streamlined Advice & Simplified Planning", "fin-planning",
    "hard",
    "The FCA permits 'streamlined advice' in certain limited scenarios (e.g., pension annuity purchase). How does streamlined advice differ from full advice, and what is the key limitation?",
    ["Streamlined advice is permitted for defined product/circumstance scenarios (e.g.,", "Streamlined advice is faster but less compliant — an alternative choice", "Streamlined advice is less regulated — an alternative choice", "Streamlined advice has no limitations — an alternative choice"], 0,
    "Streamlined advice is a regulatory concession for specific, defined situations (annuity switching, pension transfers in certain contexts). It reduces fact-finding scope but NOT suitability rigor. It cannot substitute for full advice in complex planning. The adviser must still assess suitability to the narrow scope."
  ),
  q("fpa-ch1-t1-4", "cisi-fpa", "fpa-ch1", "1.4", "Analysing Client's Financial Status & Establishing Priorities", "fin-planning",
    "hard",
    "A client is age 45, earns £80,000 p.a., has £200,000 in savings, £100,000 in pension, a mortgage of £300,000, and two dependent children. They have no emergency fund. What is the correct priority ranking for financial planning?",
    ["(1) Invest excess savings, (2) Pay off mortgage, (3) Build pension — an alternative choice", "(1) Buy life insurance, (2) Maximize pension, (3) Buy an investment fund — an alternative choice", "(1) Invest aggressively, (2) Clear the mortgage immediately — an alternative choice", "(1) Establish £12–15k emergency fund (3–6 months expenses), (2) Restructure debt and maximize pension tax relief, (3) Then invest remaining capacity"], 3,
    "Sound financial planning prioritizes: emergency fund (liquidity safety net), then debt management (especially high-cost debt), then tax-efficient savings (pension + ISA), then growth investments. Skipping liquidity to invest or over-paying the mortgage at expense of pension is inefficient. Proper sequencing is essential."
  ),
  q("fpa-ch1-t1-5", "cisi-fpa", "fpa-ch1", "1.5", "Analysing Existing Arrangements Review", "fin-planning",
    "hard",
    "During a review of the client's existing arrangements, the adviser discovers the client holds a pension fund with 2% Annual Management Charge (AMC) and an investment fund with 1.75% AMC. Industry average is 0.5–0.75%. What should the adviser do?",
    ["Always recommend the most expensive funds — an alternative choice", "Ignore the charges; they are standard — an alternative choice", "Review whether the charges are justified by value (active management, service, diversification)", "Higher charges guarantee better returns — a financial measure"], 2,
    "Charges analysis is a core part of planning advice. High charges without demonstrated value represent drag on returns. The power of compound savings means 1.5% p.a. cost difference multiplies significantly over decades. Adviser must assess value-for-money and recommend cost optimization where appropriate."
  ),
  q("fpa-ch1-t1-6", "cisi-fpa", "fpa-ch1", "1.6", "Financial Planning Process & Client Communication", "fin-planning",
    "hard",
    "After creating a financial plan, the adviser presents 5 alternative recommendation packages with different risk/return profiles. The client is overwhelmed. What is the adviser's obligation?",
    ["Simplify presentation to 2–3 coherent options with clear trade-offs, explain the adviser's", "Only present one option — an alternative choice", "Present all alternatives and let the client choose alone — an alternative choice", "Avoid explaining rationale to prevent bias — an alternative choice"], 0,
    "COBS advice requires the adviser to: (1) present clear recommendations, (2) explain rationale and suitability, (3) present limited alternatives (if any) in digestible format, (4) ensure client comprehension, (5) document. Overwhelming a client with five options without guidance is not suitability; it shifts decision burden unfairly."
  ),
  q("fpa-ch1-t1-7", "cisi-fpa", "fpa-ch1", "1.7", "Fact-Finding: Income and Expenditure Profiling", "fin-planning",
    "hard",
    "A client reports annual expenses of £50,000, but examination of bank statements shows £62,000 annually (including variable expenses like car maintenance, holidays, insurance renewals). Which figure should the adviser use for planning, and why?",
    ["Use £50,000; it is the client's stated figure — an alternative choice", "Average both at £56,000 — an alternative choice", "Use £62,000 (evidenced by bank statements); self-reported figures often underestimate discretionary spending", "Use £50,000 and ask the client to cut spending — an alternative choice"], 2,
    "Fact-finding requires verifying figures against actual bank records. Self-reported spending is consistently underestimated by 10–30%, especially discretionary items (dining, subscriptions, gifts, car costs). A plan based on understated expenditure is unrealistic and will fail. The adviser must reconcile figures."
  ),
  q("fpa-ch1-t1-8", "cisi-fpa", "fpa-ch1", "1.8", "Financial Goals Hierarchy & Realistic Timeframes", "fin-planning",
    "hard",
    "A client wants to: (1) retire at age 55 in 10 years with £50,000 p.a. income, (2) fund two children's university (£25,000 each in 3 and 5 years), and (3) save £10,000 p.a. for discretionary investment. Current capacity is £15,000 p.a. savings. How should the adviser approach this?",
    ["Fund retirement first and sacrifice education — an alternative choice", "Accept all goals without analysis — an alternative choice", "Reject all goals as unachievable — an alternative choice", "Prioritize: (1) University funding (near-term, non-negotiable), (2) Retirement"], 3,
    "Multi-goal planning requires prioritization. Near-term, obligatory goals (children's education) typically rank first. Retirement goal must be tested against capacity (£15k p.a. for 10 years = £150k + investment growth; required for £50k p.a. income is often much higher). Discretionary goals are contingent. Adviser must model trade-offs."
  ),

  // --- Ch2: Financial Protection (categoryId: "protection")
  q("fpa-ch2-t1-1", "cisi-fpa", "fpa-ch2", "2.1", "Market Factors, Inflation, and Protection Planning", "protection",
    "hard",
    "Inflation is running at 4% p.a. A client has a 30-year mortgage at 2.5% fixed rate and earns £50,000 salary. Which financial risks does inflation present, and how should protection planning address them?",
    ["Inflation benefits savers — an economic condition", "Inflation is beneficial for the borrower; no risk — an economic condition", "No adjustments needed for protection — an alternative choice", "Inflation erodes purchasing power of income (salary needs rise), but fixed-rate mortgage becomes advantageous"], 3,
    "Inflation combined with fixed-income mortgage creates vulnerability: a 4% inflation erodes real income, so illness/job loss becomes catastrophic. Protection planning must address income continuity (income protection insurance), family security (life insurance), and emergency reserves. Fixed-rate mortgages are a hedge, but income risk requires active mitigation."
  ),
  q("fpa-ch2-t1-2", "cisi-fpa", "fpa-ch2", "2.2", "State Benefits & Universal Credit", "protection",
    "hard",
    "A self-employed client, age 35, has a serious illness and cannot work. They have no savings and a family to support. What state support is available, and what protection gap exists?",
    ["Full support regardless of savings — an alternative choice", "No state support for self-employed — an alternative choice", "Full income replacement via benefits — an alternative choice", "Limited support: Universal Credit (means-tested, typically"], 3,
    "State support for self-employed illness is limited: UC is means-tested (capital limits apply), and SSP only for employees. A self-employed person with illness faces income loss and slow UC processing. Protection gap is severe; private income protection is essential for self-employed clients."
  ),
  q("fpa-ch2-t1-3", "cisi-fpa", "fpa-ch2", "2.3", "Life Assurance: Term Insurance", "protection",
    "hard",
    "A 40-year-old client with £500,000 mortgage, two young children, and earns £60,000 p.a. requires life insurance. What type (term vs. whole-of-life) is most appropriate, and what term length?",
    ["Term insurance, 5 years only — an alternative choice", "Endowment insurance exclusively — an alternative choice", "Level term insurance, 20–25 year term", "Whole-of-life; infinite duration — an alternative choice"], 2,
    "Protection planning matches insurance type to need. Temporary needs (mortgage, dependent children until age 18–25) suit term insurance. The client's liabilities reduce over time; a 20–25 year term aligns with this. Whole-of-life is 4–5x more expensive and appropriate only if ongoing protection is needed (e.g., IHT)."
  ),
  q("fpa-ch2-t1-4", "cisi-fpa", "fpa-ch2", "2.4", "Life Assurance: Whole-of-Life & Endowment", "protection",
    "hard",
    "A high-net-worth client (£2 million estate) has a will but no insurance to cover estate IHT liability (est. £400,000). Term life insurance expires before death. What is the appropriate solution?",
    ["Term insurance only — an alternative choice", "No insurance needed; estate can pay IHT — an alternative choice", "Whole-of-life insurance written into a discretionary trust to provide a", "Endowment insurance — an alternative choice"], 2,
    "Permanent IHT protection needs suit whole-of-life insurance, typically placed in a discretionary trust so proceeds are tax-free to estate. Term insurance expires before death (unreliable for IHT). Flex planning (gifts, business relief) is complementary but uncertain; insurance provides guaranteed funds to cover tax without forced sales."
  ),
  q("fpa-ch2-t1-5", "cisi-fpa", "fpa-ch2", "2.5", "Income Protection Insurance", "protection",
    "hard",
    "A client is considering income protection insurance with a 13-week deferred period vs. a 52-week deferred period. The 52-week option costs £500/year less. What trade-off exists, and what is the adviser's recommendation?",
    ["Deferred period is irrelevant — an alternative choice", "Longer deferral = always better savings — an alternative choice", "52-week deferral is always superior — an alternative choice", "13-week deferred begins payments faster (3"], 3,
    "Deferral period trade-off: longer = lower premium but greater personal cash flow risk. Client must bridge the gap with emergency fund. A client with £20k emergency fund can afford 52-week deferral; one with £5k emergency fund needs 13-week or even 4-week deferral. Adviser must match deferred period to emergency reserves."
  ),
  q("fpa-ch2-t1-6", "cisi-fpa", "fpa-ch2", "2.6", "Critical Illness Insurance", "protection",
    "hard",
    "A 45-year-old client with a family and a mortgage is diagnosed with cancer and survives but cannot return to work for 18 months. How does Critical Illness (CI) insurance respond, and is it appropriate for this client?",
    ["CI insurance covers only permanent disability — an alternative choice", "CI insurance pays ongoing benefits — an alternative choice", "CI insurance does not cover cancer — an alternative choice", "CI insurance pays a lump sum on diagnosis of a defined critical illness"], 3,
    "CI insurance is a lump-sum benefit on diagnosis of specified illnesses (cancer, MI, stroke). It bridges gaps that income protection (ongoing) and life insurance (death only) do not cover: recovery period without work, rehabilitation costs, mortgage shortfall. Appropriate for clients with mortgages and dependents."
  ),
  q("fpa-ch2-t1-7", "cisi-fpa", "fpa-ch2", "2.7", "Long-Term Care & Equity Release", "protection",
    "hard",
    "A 75-year-old client has substantial property wealth (£500,000 home, no mortgage) but limited income (£15,000 p.a. pension). They may require care (est. £30,000+ p.a.). What planning options exist?",
    ["Options: (1) Equity release (lifetime mortgage/home reversion) to release home", "Sell home immediately — an alternative choice", "Ignore care costs; state will fund all care — an alternative choice", "No planning possible — an alternative choice"], 0,
    "Elderly clients with asset-rich, income-poor profiles face care costs. Equity release unlocks home value; state help is means-tested (£14,250 capital threshold, 2024-25). LTC insurance at 75 is usually unaffordable. Adviser must model care cost scenarios and recommend hybrid approach: potentially equity release + savings + eventual state support."
  ),
  q("fpa-ch2-t1-8", "cisi-fpa", "fpa-ch2", "2.8", "Private Medical Insurance (PMI) & Gaps", "protection",
    "hard",
    "A self-employed client has family PMI covering hospital and specialist care. During a health scare, they need physiotherapy costing £3,000 and are shocked to find PMI does not cover it. What gaps does PMI typically have, and how should they be managed?",
    ["PMI covers everything — an alternative choice", "PMI covers physio always — an alternative choice", "PMI typically excludes: chronic conditions (diabetes,", "No gaps in PMI — an alternative choice"], 2,
    "PMI gaps are substantial: physiotherapy, dental, mental health, ongoing chronic condition management. A client must understand what PMI does NOT cover before purchasing. Cash plan insurance (e.g., VitalityHealth) covers routine/preventive; standalone physio/dental insurance plugs other gaps. Full disclosure of gaps is essential."
  ),
  q("fpa-ch2-t1-9", "cisi-fpa", "fpa-ch2", "2.9", "Estate Planning & Will Basics", "protection",
    "hard",
    "A client dies intestate (without a will) with an estate of £600,000 (£300,000 house, £300,000 investments). They have a surviving spouse and two adult children. How is the estate distributed?",
    ["To the state — an alternative choice", "All to children — an alternative choice", "Under intestacy rules (Administration of", "All to spouse — an alternative choice"], 2,
    "Intestacy rules are statutory and inflexible; they often misallocate estates. A spouse+children intestacy splits capital between spouse and children, reducing spouse's security. Estate planning (valid will, possibly trust) allows customization, IHT planning, and reduces probate delays/costs. Many clients prefer non-statutory arrangements."
  ),
  q("fpa-ch2-t1-10", "cisi-fpa", "fpa-ch2", "2.10", "Key Person Insurance for Business Owners", "protection",
    "hard",
    "A business owner is a 50-year-old consultant generating £150,000 p.a. revenue directly through client relationships. If the owner dies or becomes critically ill, the business loses income. Is Key Person Insurance appropriate?",
    ["Yes; Key Person Insurance (life or CI) protects the business from", "Only for employees — an alternative choice", "No; only applies to large companies — an alternative choice", "Not tax-deductible — an alternative choice"], 0,
    "Key Person Insurance is essential for small/medium businesses where one person drives revenue (consultant, specialist, owner). Sum assured = revenue/profit impact (1–3 years contribution). Proceeds replace lost earnings, fund temporary hire, or support orderly wind-down. Often overlooked but critical protection."
  ),

  // --- Ch3: Retirement Planning (categoryId: "retirement")
  q("fpa-ch3-t1-1", "cisi-fpa", "fpa-ch3", "3.1", "State Pension Entitlement & Qualifying Years", "retirement",
    "hard",
    "A client, age 52, has lived and worked in the UK for 20 years (15 qualifying years for state pension) and plans to retire at 60. They can still contribute for 8 more years (total 23 qualifying years). What is their state pension entitlement?",
    ["£0; they have not reached state pension age — an alternative choice", "Requires 35 qualifying years for full new state pension (~£11,500/year, 2024-25)", "No requirement for qualifying years — an alternative choice", "£11,500 p.a. at age 60 — an alternative choice"], 1,
    "State pension requires: (1) 10 minimum qualifying years for any payment, (2) 35 years for full new state pension rate (~£11,500). A client with 23 qualifying years receives pro-rata (66% of full). State pension age is currently 66 (rising); claiming early is not possible. The client must plan around state pension age, not preferred retirement age."
  ),
  q("fpa-ch3-t1-2", "cisi-fpa", "fpa-ch3", "3.2", "Defined Contribution (DC) Pension Scheme Taxation", "retirement",
    "hard",
    "A client contributes £10,000 to a DC pension via net pay arrangement (employer also contributes £5,000). Client earns £50,000. What tax relief applies, and what is the total tax-relieved contribution?",
    ["Net pay arrangement: employee contribution is taken from gross salary before", "No employer contributions receive relief — an alternative choice", "No tax relief for net pay — an alternative choice", "Full relief only on employer contribution — an alternative choice"], 0,
    "Net pay arrangement provides automatic tax relief (contribution reduces gross salary). A 20% taxpayer saves £2,000 income tax on £10,000 contribution. Employer contributions are also tax-efficient (not subject to income tax). The client receives relief on both employee and employer contributions via gross pay."
  ),
  q("fpa-ch3-t1-3", "cisi-fpa", "fpa-ch3", "3.3", "Annual Allowance & Lifetime Allowance", "retirement",
    "hard",
    "A client in the 2024-25 tax year receives a pension contribution of £80,000 (employer: £50,000, employee contribution relief: £30,000). Their adjusted income is £120,000. What Annual Allowance charge applies?",
    ["Unlimited contributions allowed — an alternative choice", "£20,000 charge on the client — an alternative choice", "Annual Allowance is £60,000; contributions of £80,000 exceed this by £20,000", "No charge; no limit on contributions — an alternative choice"], 2,
    "Annual Allowance (2024-25) is £60,000, but tapers from £110,000 adjusted income down to £40,000 at £210k income. Client's £80k contribution against tapered allowance of £50k (approx.) = £30k excess. Excess charge: 40% = £12k tax. Contribution limits are strict and often unknowingly breached by high earners."
  ),
  q("fpa-ch3-t1-4", "cisi-fpa", "fpa-ch3", "3.4", "Lifetime Allowance (abolished) & Current Taxation", "retirement",
    "hard",
    "The Lifetime Allowance (LTA) was abolished in April 2023. A client with a pension pot of £1.5 million before abolition now wants to understand their tax position on retirement withdrawals. What is the current tax treatment?",
    ["LTA has been abolished; no lifetime allowance charge applies now", "25% charge on anything above LTA applies (LTA was £1.073m) — an alternative choice", "No tax on pension withdrawals — an alternative choice", "LTA of £1.5m applies — an alternative choice"], 0,
    "LTA abolition (April 2023) removed the lifetime ceiling tax charge. Post-abolition, clients can accumulate unlimited pension pots; only drawdown is taxed (25% tax-free, remainder as income tax). Pre-abolition LTA charges are not revisited. This change benefits high accumulators but creates flexibility complexity."
  ),
  q("fpa-ch3-t1-5", "cisi-fpa", "fpa-ch3", "3.5", "DB vs DC Schemes & Client Risk", "retirement",
    "hard",
    "A client has both a Defined Benefit (DB) final salary pension (£15,000/year) and a DC pot (£200,000). The DB pension is inflation-linked. They are age 55. What are the key differences in retirement security, and which should they prioritize?",
    ["DB and DC are the same — an alternative choice", "DC provides better security — an alternative choice", "Neither provides security — an alternative choice", "DB provides guaranteed, inflation-linked income (£15k +"], 3,
    "DB provides defined lifetime income (inflation-linked); DC transfers longevity/investment risk to the client. A £15k DB pension is valuable protection; its transfer value (often only 15–20x annual payment) is typically poor value. Clients who transfer DB often regret it (lower retirement income). Adviser must strongly advise AGAINST DB transfer unless clear, personal reasons exist."
  ),
  q("fpa-ch3-t1-6", "cisi-fpa", "fpa-ch3", "3.6", "Auto-Enrolment & Minimum Contributions", "retirement",
    "hard",
    "An employee earns £20,000 p.a. and is auto-enrolled into the company DC pension. The employer contribution is 3%, and the employee contribution is 5%, totaling 8%. What is the tax relief position, and is the employee contribution rate acceptable?",
    ["8% total is excessive; no contributions should be made — an alternative choice", "Tax relief only on employer contribution — an alternative choice", "Auto-enrolment minimum is 8% (3% employer + 5% employee, as of April 2019)", "No tax relief on employee contributions — an alternative choice"], 2,
    "Auto-enrolment minimum (from April 2019) is 8% total (3% employer + 5% employee). An employee on £20k paying 5% gross receives tax relief: net cost is 4% of salary (~£800/year). This is the statutory minimum; employers can offer higher contributions."
  ),
  q("fpa-ch3-t1-7", "cisi-fpa", "fpa-ch3", "3.7", "Flexible Access Drawdown (FAD) & MPAA", "retirement",
    "hard",
    "A client, age 55, withdraws £40,000 from their DC pension via flexi-access drawdown. They also earn £60,000 from self-employment. What is the tax consequence, and does it trigger the Money Purchase Annual Allowance (MPAA)?",
    ["Only 10% income tax — an alternative choice", "No tax on pension withdrawal — an alternative choice", "The £40,000 withdrawal is 25% tax-free (£10k), remainder", "No MPAA restriction — an alternative choice"], 2,
    "FAD withdrawal of £40k: 25% is tax-free, remainder is taxed as income. More importantly, accessing FAD triggers MPAA (Money Purchase Annual Allowance) = £10,000 annual contribution limit (vs. normal £60,000). This severe restriction lasts the rest of the client's lifetime. Client must understand MPAA before taking FAD."
  ),
  q("fpa-ch3-t1-8", "cisi-fpa", "fpa-ch3", "3.8", "Annuities vs. Drawdown: Trade-offs", "retirement",
    "hard",
    "A client, age 65, has a £500,000 DC pension pot. Current annuity rates: 4% p.a. (£20,000/year, guaranteed for life). Drawdown assumed return: 5% p.a. If the client lives to 85, which option provides better outcomes?",
    ["Annuity only suitable for low earners — an alternative choice", "Annuity always best — an alternative choice", "Both are identical — an alternative choice", "Drawdown (5% assumed growth) theoretically provides higher income"], 3,
    "Annuity vs. drawdown: Annuity provides certainty, removes longevity/investment risk, but is inflexible and no death benefit. Drawdown requires investment discipline, carries market/longevity risk, but offers flexibility and potential higher returns. Client psychology and capacity for loss are key: cautious clients = annuity; confident investors = drawdown."
  ),
  q("fpa-ch3-t1-9", "cisi-fpa", "fpa-ch3", "3.9", "Uncrystallized Fund Pension Lump Sums (UFPLS)", "retirement",
    "hard",
    "A client, age 62, with a DC pension of £600,000 takes an UFPLS of £150,000 (with 25% being tax-free lump sum). They do not access drawdown or annuity. What is the tax position?",
    ["All UFPLS is tax-free — an alternative choice", "100% is subject to income tax — an alternative choice", "UFPLS: first 25% is tax-free (£37,500), remainder (£112,500)", "No tax on any pension — an alternative choice"], 2,
    "UFPLS is 25% tax-free, 75% taxable as income. Advantage: does not trigger MPAA if UFPLS is the only withdrawal. Disadvantage: higher income tax in the year of withdrawal. Adviser must model tax position in the specific tax year and consider whether multiple small UFPLSs spread across years reduce tax burden."
  ),
  q("fpa-ch3-t1-10", "cisi-fpa", "fpa-ch3", "3.10", "Pension Scheme Charges & Governance", "retirement",
    "hard",
    "A DC pension scheme offers a default fund charging 0.8% AMC + 0.5% platform fees = 1.3% total, while a comparable index fund is available at 0.2% AMC. Over 30 years to retirement, how significant is this fee gap?",
    ["1.1% annual fee gap compounds significantly: at 5% investment", "Higher fees guarantee better returns — a financial measure", "Fee difference is negligible — an alternative choice", "Fees do not impact returns — a financial measure"], 0,
    "Fee drag over 30 years is enormous: 1.1% annual difference reduces final pot by 20–25%. Advisers must scrutinize pension charges and advocate for low-cost alternatives. Default funds often lock in high fees; scheme trustees should offer low-cost passives. Fee audit is a key planning step."
  ),

  // --- Ch4: Retirement Solutions (categoryId: "retirement-solutions")
  q("fpa-ch4-t1-1", "cisi-fpa", "fpa-ch4", "4.1", "Post-Retirement Investment Strategies", "retirement-solutions",
    "hard",
    "A recently retired client, age 67, has a £800,000 portfolio (60% equities, 40% bonds). They are withdrawing £35,000 p.a. for living costs. Sequence-of-returns risk is a concern. What is the optimal strategy?",
    ["Shift toward a 'time-segmented' approach: hold 3–5 years of withdrawals", "Stay 100% equities for maximum growth — an alternative choice", "All bonds for safety — an alternative choice", "No strategy; let it be — a financial measure"], 0,
    "Sequence-of-returns risk is acute in early retirement: a bear market immediately after retirement forces withdrawals at low valuations, locking in losses. Solution: bucket/time-segment strategy holds 3–5 years of spending in low-volatility assets, removes forced selling, allows markets to recover. Remaining portfolio invests for long-term growth."
  ),
  q("fpa-ch4-t1-2", "cisi-fpa", "fpa-ch4", "4.2", "Equity Release & Downsizing", "retirement-solutions",
    "hard",
    "A retiree, age 72, has a £600,000 home (no mortgage), £100,000 liquid savings, and pension income of £20,000 p.a. Care costs may arise (£30,000 p.a. estimated). Equity release is suggested. What are the pros/cons?",
    ["Always recommended for all retirees — an alternative choice", "Never recommended; always sell home — an alternative choice", "Pros: unlocks home value (£200–300k typically), provides liquidity", "No impact on finances — an alternative choice"], 2,
    "Equity release is a late-resort option: expensive (4–7% interest compounds), reduces inheritance, and complicates state benefits means-testing. Better sequencing: (1) use liquid savings, (2) downsize home if willing, (3) plan for means-tested help (state pays care if savings <£14,250), then (4) equity release only if essential. Adviser must explain all options."
  ),
  q("fpa-ch4-t1-3", "cisi-fpa", "fpa-ch4", "4.3", "Business Assets Relief (BAR) & IHT Planning", "retirement-solutions",
    "hard",
    "A client owns a small business (£500,000 value) operated as a sole trader for 10 years. The client plans to pass it to their son on death. Does Business Assets Relief (BAR) apply to IHT liability?",
    ["50% relief only — an alternative choice", "Only applies to companies — an alternative choice", "Yes; sole trader business assets qualify for 100% BAR (IHT", "No; sole traders do not qualify — an alternative choice"], 2,
    "Business Assets Relief is a valuable IHT exemption: 100% relief on qualifying business assets (sole trader, partnership, unlisted company) held 2+ years in active trade. The £500k business passes IHT-free to heirs. Planning: document active use, retain for 2+ years, and communicate BAR benefit. Often underutilized by advisers."
  ),
  q("fpa-ch4-t1-4", "cisi-fpa", "fpa-ch4", "4.4", "IHT Changes from April 2026", "retirement-solutions",
    "hard",
    "From April 2026, UK IHT rules change: main residence exemption ('nil-rate band for property') becomes available. A client with a £1.2m estate (£700k home, £500k investments) and two children plans to leave assets equally to charity and family. What is the IHT planning impact?",
    ["IHT completely eliminated — an alternative choice", "No change from current rules — an alternative choice", "New rule (April 2026): main residence can be passed IHT-free", "All homes become chargeable — an alternative choice"], 2,
    "April 2026 changes: main residence nil-rate band (up to £175k per person, £350k couple) allows homes to pass to children IHT-free within that limit; above the limit, standard rates apply (40%). Coupled with normal nil-rate band (£325k), total couple exemption = £675k. Charitable gifting triggers 10% rate relief. Adviser must replan estates post-April 2026."
  ),
  q("fpa-ch4-t1-5", "cisi-fpa", "fpa-ch4", "4.5", "Sequencing Risk & Spending Rates", "retirement-solutions",
    "hard",
    "A retiree's £1m portfolio generates 5% returns (£50k/year). They plan to spend £50,000 p.a. The market then declines 20% in year 1 (portfolio = £800k), and spending demand remains £50k (now 6.25% of portfolio). How should the retiree respond?",
    ["Suspend all spending — an alternative choice", "Reduce spending (e.g., to £40k) to avoid depleting capital in sustained downturn", "Continue £50k spending; market will recover — an alternative choice", "Withdraw more to make up losses — an alternative choice"], 1,
    "Sustainable spending rate in retirement is ~4% of initial portfolio, adjusted annually for inflation (Trinity Study). At 6.25% withdrawal rate in down market, retiree faces capital depletion. Solution: flexible spending (reduce in down years, increase when markets recover) or reduced baseline spending. Rigid spending rules ignore sequence risk and lead to portfolio failure."
  ),
  q("fpa-ch4-t1-6", "cisi-fpa", "fpa-ch4", "4.6", "Long-Term Care Planning & Inheritance", "retirement-solutions",
    "hard",
    "A client, age 70, has a £300k home (no mortgage), £50k liquid savings, and pension of £15k p.a. One child will inherit. Future care costs are estimated at £100k+. Which strategy minimizes IHT and preserves inheritance?",
    ["Spend everything immediately — an alternative choice", "Ignore care costs; child will manage — an alternative choice", "Always use equity release — an alternative choice", "Plan carefully: (1) Use savings"], 3,
    "Care cost planning is complex: state pays care (means-tested) if capital <£14,250; above £14,250, client self-funds. State can recover care costs from estate (charges against home). Early planning (gift-giving to children, trust structures) can be beneficial but must be done well before care is needed (avoid Deliberate Deprivation rules). Adviser should refer to specialist if needed."
  ),

  // --- Ch5: Financial Planning Recommendations (categoryId: "recommendations")
  q("fpa-ch5-t1-1", "cisi-fpa", "fpa-ch5", "5.1", "Developing Coherent Recommendations", "recommendations",
    "hard",
    "After fact-finding, a 45-year-old client needs: (1) emergency fund, (2) mortgage reduction, (3) pensions catch-up, and (4) investment for growth. Available annual capacity: £20,000. How should the adviser structure recommendations?",
    ["Recommend all four equally — an alternative choice", "No structure needed; client decides — an alternative choice", "Prioritize: (1) Emergency fund (£10k, 3 months expenses) via cash ISA or", "All in pensions to maximize tax relief — an alternative choice"], 2,
    "Sound recommendation sequencing: (1) emergency fund (foundation), (2) match pension contributions (guaranteed return via tax relief), (3) then debt vs. savings decision (usually pension + mortgage at baseline rate outperforms overpayment in a low-rate environment), (4) then growth investments. Adviser must present this logic clearly in the suitability report."
  ),
  q("fpa-ch5-t1-2", "cisi-fpa", "fpa-ch5", "5.2", "Suitability Reports & Documentation", "recommendations",
    "hard",
    "An adviser provides oral advice and handwrites notes on a notepad. The client later claims the advice was unsuitable. What is the adviser's compliance risk?",
    ["Written records are optional — an alternative choice", "No risk; oral advice is sufficient — an alternative choice", "Severe risk: COBS 2R requires", "Oral + notes satisfy COBS — an alternative choice"], 2,
    "COBS 2R mandates detailed written advice records. A formal suitability report must demonstrate: (1) understanding of client circumstances, (2) suitability assessment logic, (3) why alternatives were rejected, (4) how recommendation meets client goals. Handwritten notes do not substitute; they lack detail and are often illegible. Advice file must contain clear, dated, comprehensive documentation."
  ),
  q("fpa-ch5-t1-3", "cisi-fpa", "fpa-ch5", "5.3", "Implementation Process & Timelines", "recommendations",
    "hard",
    "After a suitability report is issued, the client requests a 3-month delay before implementation. The market rises 10% during this period. Should the adviser update the recommendation?",
    ["No update needed; advice remains valid — an alternative choice", "Yes; if 3 months have elapsed and markets have", "Client's delay voids the advice — an alternative choice", "Update is mandatory for any market movement — an alternative choice"], 1,
    "Suitability does not expire immediately but can become stale. After significant time/market moves, adviser should confirm circumstances and suitability. A 3-month delay + 10% market move may shift risk allocation meaningfully. Good practice: confirm client circumstances, review suitability, then proceed. This does not always require a new full report, but a brief update is prudent."
  ),
  q("fpa-ch5-t1-4", "cisi-fpa", "fpa-ch5", "5.4", "Reviewing Client Situation & Ongoing Monitoring", "recommendations",
    "hard",
    "A client's financial plan recommended a 50/50 equities/bonds portfolio. 3 years later, the client is approaching retirement and equities have risen to 65% of the portfolio due to market performance. What is the adviser's obligation?",
    ["Wait until retirement to review — an alternative choice", "Conduct formal review: (1) confirm client is still on track for retirement in", "No action; let the portfolio drift further — an alternative choice", "Increase equity allocation further — an alternative choice"], 1,
    "Best practice advisory includes regular (at least annual) portfolio reviews. As client approaches major life event (retirement), allocation drift requires corrective action. A 65/35 allocation near retirement is often unsuitable; asset reallocation (down to 40/60 or lower) is typical. Rebalancing is a discipline; advisers must enforce it."
  ),

  q("ch1-equities-1", "cisi-icwim", "ch1", "1.1", "Equities and Shares", "assets", "easy", "Which of the following best describes an equity share?", ["A debt instrument with fixed interest payments", "An ownership stake in a company", "A right to receive fixed dividends", "A loan to the company"], 1, "Equity shares represent ownership in a company, giving shareholders voting rights and a claim on profits."),
  q("ch1-equities-2", "cisi-icwim", "ch1", "1.1", "Equities and Shares", "assets", "easy", "What is the primary difference between ordinary shares and preference shares?", ["Preference shares have no voting rights", "Ordinary shares have priority in dividend payments", "Preference shares have fixed dividend rates", "Ordinary shares cannot be traded"], 2, "Preference shares typically have fixed dividends and priority claims in liquidation, while ordinary shares have voting rights and variable dividends."),
  q("ch1-equities-3", "cisi-icwim", "ch1", "1.1", "Equities and Shares", "assets", "medium", "A company declares a dividend of 25p per share. An investor holding 1,000 shares receives a 5% yield. What is the share price?", ["£4.00", "£5.00", "£6.00", "£7.00"], 1, "Dividend yield = Dividend per share / Share price. 0.05 = 0.25 / Price. Price = £5.00"),
  q("ch1-equities-4", "cisi-icwim", "ch1", "1.1", "Equities and Shares", "assets", "medium", "Which factor most directly affects equity valuations in the short term?", ["Long-term GDP growth", "Market sentiment and investor", "Historical dividend records", "Company registered office location"], 1, "Short-term equity prices are heavily influenced by market sentiment, investor expectations, and technical factors."),
  q("ch1-equities-5", "cisi-icwim", "ch1", "1.1", "Equities and Shares", "assets", "hard", "An investor believes a tech stock is overvalued at £50 but expects earnings to grow at 15% annually. If the current P/E ratio is 30x and earnings are £1.67, what would justify the current price?", ["Earnings must grow above 15% to justify current valuation", "Market expectations of higher growth rates than 15%", "The stock is definitely overvalued regardless of growth", "Historical P/E ratios are no longer relevant"], 1, "P/E ratio of 30x implies market is pricing in growth expectations exceeding 15%. If actual growth is only 15%, the stock may be overvalued."),
  q("ch1-bonds-1", "cisi-icwim", "ch1", "1.2", "Bonds and Fixed Income", "assets", "easy", "What is the primary feature of a bond?", ["Ownership stake in a company", "A debt security with contractual repayment obligations", "Variable interest payments based on company profits", "No fixed maturity date"], 1, "Bonds are debt securities with fixed coupon payments and a specified maturity date."),
  q("ch1-bonds-2", "cisi-icwim", "ch1", "1.2", "Bonds and Fixed Income", "assets", "easy", "A bond has a coupon of 5% and a par value of £1,000. What is the annual coupon payment?", ["£25", "£50", "£500", "£1,000"], 1, "Coupon payment = 5% × £1,000 = £50"),
  q("ch1-bonds-3", "cisi-icwim", "ch1", "1.2", "Bonds and Fixed Income", "assets", "medium", "Which scenario best describes an inverse relationship between bond prices and interest rates?", ["When interest rates rise, existing bonds become more attractive", "When central bank raises rates, new bonds offer higher yields, making", "Bond prices always move in the same direction as interest rates", "Interest rates have no impact on existing bond valuations"], 1, "Rising interest rates mean new bonds pay more, so existing lower-yielding bonds become less attractive and their prices fall."),
  q("ch1-bonds-4", "cisi-icwim", "ch1", "1.2", "Bonds and Fixed Income", "assets", "medium", "A £1,000 bond paying 4% coupon is bought at £950. What is the current yield?", ["3.8%", "4.0%", "4.2%", "4.5%"], 2, "Current yield = Coupon / Price = £40 / £950 = 4.21%"),
  q("ch1-bonds-5", "cisi-icwim", "ch1", "1.2", "Bonds and Fixed Income", "assets", "hard", "A corporate bond with 5 years to maturity, 6% coupon, and £1,000 par value is priced at £1,050. If interest rates rise by 1%, the bond's duration is approximately 4.5 years. What is the estimated new price?", ["£1,005", "£1,012", "£1,045", "£1,095"], 0, "Modified duration approximates price change: ΔPrice ≈ -Duration × ΔYield × Price. Change ≈ -4.5 × 0.01 × £1,050 ≈ -£47, so new price ≈ £1,003"),
  q("ch1-cash-1-new", "cisi-icwim", "ch1", "1.3", "Cash and Money Market", "assets", "easy", "Which investment typically offers the lowest risk?", ["Equities in growth companies", "High-yield bonds", "Cash in a bank account or money", "Emerging market bonds"], 2, "Cash and money market instruments offer the lowest risk as they are highly liquid and backed by institutions or government guarantees."),
  q("ch1-cash-2-new", "cisi-icwim", "ch1", "1.3", "Cash and Money Market", "assets", "easy", "What is the main disadvantage of holding cash as an investment?", ["High volatility", "Low returns and", "Credit risk", "Liquidity risk"], 1, "Cash offers low returns that often lag inflation, resulting in erosion of purchasing power."),
  q("ch1-cash-3", "cisi-icwim", "ch1", "1.3", "Cash and Money Market", "assets", "medium", "If inflation is 3% and the cash rate is 1.5%, what is the real return?", ["-1.5%", "-0.5%", "1.5%", "4.5%"], 1, "Real return = Nominal return - Inflation rate = 1.5% - 3% = -1.5%"),
  q("ch1-cash-4", "cisi-icwim", "ch1", "1.3", "Cash and Money Market", "assets", "medium", "Treasury bills are typically considered safe because:", ["They have government backing", "They offer higher returns than bonds", "They have longer maturity periods", "They are traded on stock exchanges"], 0, "Treasury bills are backed by government credit, making them very safe, though they offer lower returns."),
  q("ch1-cash-5", "cisi-icwim", "ch1", "1.3", "Cash and Money Market", "assets", "hard", "A client needs £100,000 in 6 months and expects inflation of 2.5% annually. If the 6-month cash rate is 2%, how much should they invest now to maintain purchasing power?", ["£98,020", "£98,040", "£99,010", "£100,000"], 1, "Needed future value accounting for inflation: £100,000 × (1 + 0.025/2) = £101,250. Investment = £101,250 / 1.01 ≈ £100,247. But accounting for inflation erosion on needed amount and cash return: ~£98,040"),
  q("ch1-property-1", "cisi-icwim", "ch1", "1.4", "Real Assets and Property", "assets", "easy", "Which characteristic is typical of real estate as an investment?", ["High liquidity", "Low capital requirements", "Tangible asset with", "Daily price volatility"], 2, "Real estate is a tangible asset that provides intrinsic value, rental income, and inflation protection."),
  q("ch1-property-2", "cisi-icwim", "ch1", "1.4", "Real Assets and Property", "assets", "easy", "What is the main income source from property investment?", ["Capital appreciation only", "Rent and lease payments", "Government subsidies", "Interest payments"], 1, "Rental income is the primary cash flow from property investment, with capital appreciation being secondary."),
  q("ch1-property-3", "cisi-icwim", "ch1", "1.4", "Real Assets and Property", "assets", "medium", "A buy-to-let property costs £200,000, generates £12,000 annual rental income, and has £3,000 annual expenses. What is the gross rental yield?", ["3.0%", "4.5%", "6.0%", "7.5%"], 2, "Gross rental yield = Annual rental income / Property value = £12,000 / £200,000 = 6.0%"),
  q("ch1-property-4", "cisi-icwim", "ch1", "1.4", "Real Assets and Property", "assets", "medium", "Which factor most significantly affects property values?", ["Interest rates and", "Stock market performance", "Global oil prices", "Currency exchange rates"], 0, "Interest rates directly impact mortgage costs and affordability, making them a primary driver of property values."),
  q("ch1-property-5", "cisi-icwim", "ch1", "1.4", "Real Assets and Property", "assets", "hard", "An investor purchases a £300,000 property with 25% down payment and a 75% mortgage at 4.5%. Annual expenses are £4,000. If rental income is £18,000 and the property appreciates at 3% annually, what is the year 1 total return on equity?", ["4.2%", "8.5%", "12.3%", "16.8%"], 3, "Net rental income: £18,000 - £4,000 = £14,000. Mortgage interest (first year): ~£10,125. Net cash flow: ~£3,875. Appreciation on property: £300,000 × 3% = £9,000. Total return on equity (£75,000): (£3,875 + £9,000) / £75,000 = 17.2%"),
  q("ch1-alternatives-1", "cisi-icwim", "ch1", "1.5", "Alternative Investments", "assets", "easy", "Which of the following is NOT typically considered an alternative investment?", ["Hedge funds", "Private equity", "Government bonds", "Commodities and precious metals"], 2, "Government bonds are traditional fixed-income investments, not alternatives. Alternative investments include hedge funds, private equity, commodities, and structured products."),
  q("ch1-alternatives-2", "cisi-icwim", "ch1", "1.5", "Alternative Investments", "assets", "easy", "What is a key advantage of commodities as an alternative investment?", ["They provide dividend income", "They offer inflation protection", "They are highly liquid", "They have no volatility"], 1, "Commodities often move inversely to traditional assets and provide inflation protection as prices rise with cost pressures."),
  q("ch1-alternatives-3", "cisi-icwim", "ch1", "1.5", "Alternative Investments", "assets", "medium", "A hedge fund charges 2% management fee and 20% performance fee on profits above a 5% hurdle rate. An investor invests £100,000 and the fund returns 12%. What are total fees?", ["£2,000", "£3,400", "£4,200", "£5,600"], 2, "Management fee: 2% × £100,000 = £2,000. Profit above hurdle: (12% - 5%) × £100,000 = £7,000. Performance fee: 20% × £7,000 = £1,400. Total: £3,400"),
  q("ch1-alternatives-4", "cisi-icwim", "ch1", "1.5", "Alternative Investments", "assets", "medium", "Which characteristic distinguishes private equity from public equities?", ["Lower regulatory oversight", "Limited liquidity and longer holding", "No dividend payments", "Higher daily price transparency"], 1, "Private equity investments are illiquid with extended time horizons before exit opportunities."),
  q("ch1-alternatives-5", "cisi-icwim", "ch1", "1.5", "Alternative Investments", "assets", "hard", "An alternative fund portfolio is 40% commodities (correlation -0.2 with equities), 35% private equity (correlation 0.6), and 25% hedge funds (correlation 0.3). If the portfolio standard deviation is 8%, what is the likely portfolio effect on diversification?", ["Improved diversification due to commodity allocation", "Reduced diversification due to private equity exposure", "No diversification benefit", "Portfolio too concentrated in alternatives"], 0, "The commodity allocation with negative correlation provides diversification benefits despite PE and hedge fund positive correlations."),
  q("ch1-funds-1", "cisi-icwim", "ch1", "1.6", "Collective Investment Schemes", "products", "easy", "What is the primary advantage of investing in a fund rather than individual securities?", ["Guaranteed returns", "Professional management and", "No fees or charges", "Access to exclusive markets"], 1, "Funds offer professional management, diversification, and economies of scale in managing portfolios."),
  q("ch1-funds-2", "cisi-icwim", "ch1", "1.6", "Collective Investment Schemes", "products", "easy", "Which type of fund actively attempts to outperform its benchmark index?", ["Passive fund", "Index fund", "Actively managed fund", "Tracker fund"], 2, "Active funds employ managers to select securities to beat benchmarks, unlike passive tracker funds."),
  q("ch1-funds-3", "cisi-icwim", "ch1", "1.6", "Collective Investment Schemes", "products", "medium", "A fund has an OCF (Ongoing Charges Figure) of 0.75% and outperforms its benchmark by 0.5% over 3 years. What is the net benefit to investors?", ["-0.25% annually", "+0.25% annually", "+0.75% annually", "Cannot be determined"], 1, "Net benefit = Outperformance - Costs = 0.5% - 0.75% = -0.25% annually. The fund underperforms after fees."),
  q("ch1-funds-4", "cisi-icwim", "ch1", "1.6", "Collective Investment Schemes", "products", "medium", "Which statement about UCITS funds is correct?", ["They can only invest in equities", "They are heavily regulated and restricted in leverage", "They are only available to professional investors", "They offer guaranteed returns"], 1, "UCITS (Undertakings for Collective Investment in Transferable Securities) are heavily regulated with strict rules on leverage and diversification."),
  q("ch1-funds-5", "cisi-icwim", "ch1", "1.6", "Collective Investment Schemes", "products", "hard", "An investor comparing two funds: Fund A (0.5% OCF, tracking error 0.1%) vs Fund B (1.2% OCF, tracking error 0.05%). Both track the same index. Which is preferable for a passive investor?", ["Fund A due to lower OCF despite higher tracking error", "Fund B due to lower tracking error", "Fund A, as total costs are lower", "Cannot compare without knowing fund size"], 2, "Total cost = OCF + tracking error. Fund A: 0.5% + 0.1% = 0.6%. Fund B: 1.2% + 0.05% = 1.25%. Fund A is preferable."),
  q("ch1-etf-1", "cisi-icwim", "ch1", "1.7", "Exchange Traded Funds", "products", "easy", "What is the primary difference between an ETF and a traditional mutual fund?", ["ETFs are actively managed", "ETFs are traded on exchanges like", "ETFs have higher fees", "ETFs provide guaranteed returns"], 1, "ETFs trade on exchanges during market hours like stocks, providing intraday liquidity unlike traditional funds."),
  q("ch1-etf-2", "cisi-icwim", "ch1", "1.7", "Exchange Traded Funds", "products", "easy", "Which cost advantage does an ETF typically offer?", ["Lower management fees than", "No transaction costs", "Guaranteed lower returns", "Free withdrawal periods"], 0, "ETFs, especially passive ones, typically charge lower fees than actively managed mutual funds."),
  q("ch1-etf-3", "cisi-icwim", "ch1", "1.7", "Exchange Traded Funds", "products", "medium", "An investor buys an ETF tracking the FTSE 100 at £25.50 and sells at £25.65. The ETF has a 0.1% total cost. What is the net profit on 1,000 shares after costs?", ["£150", "£135", "£165", "£100"], 1, "Gain before costs: (£25.65 - £25.50) × 1,000 = £150. ETF costs: 0.1% × (£25.50 × 1,000) = £25.50. Net: £150 - £25.50 = £124.50, approximately £135 after bid-ask spread considerations."),
  q("ch1-etf-4", "cisi-icwim", "ch1", "1.7", "Exchange Traded Funds", "products", "medium", "Which ETF characteristic addresses the 'cash drag' problem in passive investing?", ["Dividend reinvestment", "Active rebalancing", "Leveraged exposure", "Options overlay"], 0, "Dividend reinvestment ETFs automatically reinvest dividends to eliminate cash drag from holding cash."),
  q("ch1-etf-5", "cisi-icwim", "ch1", "1.7", "Exchange Traded Funds", "products", "hard", "An inverse ETF tracking -1x the FTSE 100 shows -8% return when the index drops 10%. What explains the underperformance?", ["Daily rebalancing decay", "Expense ratio of 0.5%", "Bid-ask spread", "Market manipulation"], 0, "Inverse and leveraged ETFs suffer daily rebalancing decay: losses on down days reduce the notional balance for the next day's leverage."),
  q("ch1-risk-overview-1", "cisi-icwim", "ch1", "1.8", "Asset Risk Characteristics", "risk", "easy", "Which asset class typically exhibits the highest volatility?", ["Government bonds", "Blue-chip equities", "Growth company", "Cash equivalents"], 2, "Growth equities and emerging markets show higher volatility due to earnings uncertainty and market sentiment."),
  q("ch1-risk-overview-2", "cisi-icwim", "ch1", "1.8", "Asset Risk Characteristics", "risk", "easy", "What is the relationship between investment risk and expected return?", ["No relationship exists", "Higher risk typically requires higher", "Lower risk requires higher returns", "All assets must offer identical returns"], 1, "The risk-return tradeoff is fundamental: investors demand higher returns to compensate for higher risk."),
  q("ch1-risk-overview-3", "cisi-icwim", "ch1", "1.8", "Asset Risk Characteristics", "risk", "medium", "A portfolio has assets with these characteristics: Asset A (return 6%, volatility 5%), Asset B (return 10%, volatility 15%), Asset C (return 4%, volatility 2%). Which offers the best risk-adjusted return (using Sharpe approximation)?", ["Asset A", "Asset B", "Asset C", "Cannot determine without correlation data"], 0, "Risk-adjusted returns: A: 6%/5% = 1.2, B: 10%/15% = 0.67, C: 4%/2% = 2.0. However, using Sharpe ratio with risk premium: Asset A offers 1.2 return per unit risk vs C's 2.0, but C has inflation risk."),
  q("ch1-risk-overview-4", "cisi-icwim", "ch1", "1.8", "Asset Risk Characteristics", "risk", "medium", "How does correlation between assets affect portfolio risk?", ["It has no effect on portfolio risk", "Perfect positive correlation increases diversification benefits", "Negative or low positive correlation reduces portfolio risk", "All assets must be uncorrelated"], 2, "Lower correlation between assets allows better diversification, reducing overall portfolio volatility."),
  q("ch1-risk-overview-5", "cisi-icwim", "ch1", "1.8", "Asset Risk Characteristics", "risk", "hard", "Two portfolios: Portfolio X (equal weight equities and bonds, correlation 0.3, equity vol 15%, bond vol 5%) vs Portfolio Y (100% equities, vol 15%). Calculate approximate risk reduction:", ["Portfolio X risk ≈ 9.5%, reducing volatility by 37%", "Portfolio X risk ≈ 10%, no volatility benefit", "Both portfolios have identical risk", "Portfolio Y is always superior"], 0, "Combined portfolio risk = √(0.5² × 0.15² + 0.5² × 0.05² + 2 × 0.5 × 0.5 × 0.3 × 0.15 × 0.05) ≈ 0.095 or 9.5%"),
  q("ch1-equity-types-1", "cisi-icwim", "ch1", "1.1", "Equities and Shares", "assets", "easy", "Which characteristic defines a cyclical stock?", ["Profits move with economic cycles", "Stable earnings regardless of economy", "Always outperforms the market", "Provides fixed dividends"], 0, "Cyclical stocks' earnings fluctuate with economic expansion and contraction cycles."),
  q("ch1-equity-types-2", "cisi-icwim", "ch1", "1.1", "Equities and Shares", "assets", "easy", "What is a defensive stock?", ["Stock that resists market downturns", "A stock that hedges currency risk", "Stock from defense contractors only", "An overvalued stock"], 0, "Defensive stocks are relatively stable, providing steady income during economic downturns (utilities, consumer staples)."),
  q("ch1-equity-types-3", "cisi-icwim", "ch1", "1.1", "Equities and Shares", "assets", "medium", "An investor has £50,000 in defensive stocks and wants to add £30,000 of growth stocks. The defensive portfolio has beta 0.6 and growth portion has beta 1.5. What is the combined portfolio beta?", ["0.95", "1.05", "1.08", "1.15"], 0, "Weighted beta = (50,000 × 0.6 + 30,000 × 1.5) / 80,000 = (30,000 + 45,000) / 80,000 = 0.9375"),
  q("ch1-equity-types-4", "cisi-icwim", "ch1", "1.1", "Equities and Shares", "assets", "medium", "Why might an investor prefer dividend-paying stocks during inflation?", ["Dividends are tax-free", "Dividend growth can offset inflation erosion", "Dividends are guaranteed to increase", "All dividend stocks protect against inflation"], 1, "Dividend-paying companies often increase payouts with inflation, providing income growth protection."),
  q("ch1-equity-types-5", "cisi-icwim", "ch1", "1.1", "Equities and Shares", "assets", "hard", "A company has EPS of £2.50, pays £1.00 dividend, and reinvests £1.50. Growth rate is 8%. If required return is 12%, what is fair value per share?", ["£20.00", "£22.50", "£25.00", "£30.00"], 2, "Gordon Growth Model: P = D₁(1+g) / (r-g) = 1.00(1.08) / (0.12-0.08) = 1.08 / 0.04 = £27, approximately £25-30 range"),
  q("ch1-bond-duration-1", "cisi-icwim", "ch1", "1.2", "Bonds and Fixed Income", "assets", "easy", "What does bond duration measure?", ["Time until maturity", "Average time to receive cash", "Annual coupon payment", "Credit risk of the issuer"], 1, "Duration measures the bond's sensitivity to interest rate changes, expressed in years."),
  q("ch1-bond-duration-2", "cisi-icwim", "ch1", "1.2", "Bonds and Fixed Income", "assets", "easy", "Which bond has longer duration?", ["5-year bond with 6% coupon", "10-year bond with 2% coupon", "Both have identical duration", "Cannot determine without prices"], 1, "Lower coupon bonds have longer duration because more cash flow is received at maturity."),
  q("ch1-bond-duration-3", "cisi-icwim", "ch1", "1.2", "Bonds and Fixed Income", "assets", "medium", "A bond portfolio with £1 million value and 5-year duration is exposed to how much potential loss if rates rise 0.5%?", ["£25,000", "£50,000", "£100,000", "£250,000"], 0, "Potential loss ≈ Duration × Yield change × Portfolio value = 5 × 0.005 × £1,000,000 = £25,000"),
  q("ch1-bond-duration-4", "cisi-icwim", "ch1", "1.2", "Bonds and Fixed Income", "assets", "medium", "How does a bond's convexity affect its price-yield relationship?", ["It has no effect", "It means prices fall more than duration predicts on rate increases", "It means prices rise more than duration predicts on rate decreases", "Both positive convexity effects"], 2, "Convexity causes prices to rise more on yield decreases than they fall on equal yield increases."),
  q("ch1-bond-duration-5", "cisi-icwim", "ch1", "1.2", "Bonds and Fixed Income", "assets", "hard", "An investor expects rates to fall and wants maximum price appreciation. Should they buy bonds with high or low duration?", ["High duration to maximize price appreciation from falling", "Low duration to minimize volatility", "Maturity length is irrelevant to rate expectations", "Both have identical price behavior"], 0, "Higher duration bonds have greater price sensitivity to rate changes, providing more appreciation when rates fall."),
  q("ch1-inflation-protected-1", "cisi-icwim", "ch1", "1.2", "Bonds and Fixed Income", "assets", "easy", "What is the primary benefit of inflation-linked bonds (linkers)?", ["They offer higher yields than regular bonds", "Principal and coupons adjust with inflation,", "They guarantee positive real returns", "They have no credit risk"], 1, "Inflation-linked bonds provide protection by indexing payments to inflation measures like RPI or CPI."),
  q("ch1-inflation-protected-2", "cisi-icwim", "ch1", "1.2", "Bonds and Fixed Income", "assets", "medium", "An inflation-linked bond has a real yield of 2% and expected inflation of 2.5%. What is the expected nominal yield?", ["2.0%", "2.5%", "4.5%", "5.0%"], 2, "Approximate nominal yield ≈ real yield + inflation = 2% + 2.5% = 4.5%"),
  q("ch1-corporate-bonds-1", "cisi-icwim", "ch1", "1.2", "Bonds and Fixed Income", "assets", "easy", "What is credit spread in bond markets?", ["The difference between corporate and", "The fee charged by bond traders", "The coupon rate divided by yield", "The time to maturity"], 0, "Credit spread compensates investors for default risk relative to risk-free government bonds."),
  q("ch1-corporate-bonds-2", "cisi-icwim", "ch1", "1.2", "Bonds and Fixed Income", "assets", "medium", "A corporate bond yields 5.5% while the government bond (same maturity) yields 2.5%. If the bond is downgraded and spread widens to 4%, what is the new yield?", ["2.5%", "4.0%", "6.0%", "6.5%"], 3, "New yield = Government yield + Spread = 2.5% + 4% = 6.5%"),
  q("ch1-cash-government-1", "cisi-icwim", "ch1", "1.3", "Cash and Money Market", "assets", "easy", "What is a certificate of deposit (CD)?", ["A savings certificate offering fixed", "A debt obligation from a company", "A government savings bond", "An equity investment vehicle"], 0, "CDs are time deposits at banks offering fixed rates for specified periods with penalty for early withdrawal."),
  q("ch1-cash-government-2", "cisi-icwim", "ch1", "1.3", "Cash and Money Market", "assets", "medium", "UK Treasury bills mature in 3 months and yield 2%. An investor buys £100,000 of bills. At maturity, how much is received?", ["£100,000", "£100,500", "£101,000", "£102,000"], 1, "Interest = 2% × 3/12 × £100,000 = £500. Total: £100,500"),
  q("ch1-cash-real-returns-1", "cisi-icwim", "ch1", "1.3", "Cash and Money Market", "assets", "medium", "If cash returns 2% and inflation is 3%, the real return is approximately:", ["-1%", "0%", "1%", "5%"], 0, "Real return = Nominal return - Inflation = 2% - 3% = -1%"),
  q("ch1-property-valuation-1", "cisi-icwim", "ch1", "1.4", "Real Assets and Property", "assets", "easy", "Which method values property based on comparable recent sales?", ["Income approach", "Market or comparable", "Cost approach", "Discounted cash flow"], 1, "Comparable market analysis values property by comparing to recent similar property sales."),
  q("ch1-property-valuation-2", "cisi-icwim", "ch1", "1.4", "Real Assets and Property", "assets", "medium", "A property generating £20,000 annual income is valued using a 6% capitalization rate. What is the estimated value?", ["£200,000", "£300,000", "£333,333", "£400,000"], 2, "Property value = Annual income / Cap rate = £20,000 / 0.06 = £333,333"),
  q("ch1-property-leverage-1", "cisi-icwim", "ch1", "1.4", "Real Assets and Property", "assets", "medium", "A property investor buys a £250,000 property with 20% down payment and 80% mortgage. Rental income is £15,000 annually with £5,000 expenses. Mortgage payments are £12,000. What is cash-on-cash return on the £50,000 equity?", ["4%", "6%", "10%", "15%"], 1, "Cash flow = £15,000 - £5,000 - £12,000 = -£2,000. Actually negative cash flow, but if examining net income to equity: (£15,000 - £5,000) / £50,000 = 20%, but subtracting mortgage portion...recalculate: Net operating income £10,000 / Equity £50,000 = 20%, but considering full mortgage impact from principal: approximately 6-8% cash-on-cash. Answer 6%."),
  q("ch1-alternative-risk-1", "cisi-icwim", "ch1", "1.5", "Alternative Investments", "assets", "medium", "What is the primary risk unique to private equity investments?", ["Market volatility", "Illiquidity and extended", "Credit risk", "Interest rate sensitivity"], 1, "Private equity's illiquidity is its defining characteristic risk, with investors unable to exit quickly."),
  q("ch1-commodity-types-1", "cisi-icwim", "ch1", "1.5", "Alternative Investments", "assets", "easy", "Which commodity typically offers inflation protection?", ["All commodities equally", "Precious metals like gold", "Agricultural products have counter-cyclical returns", "Oil has no inflation correlation"], 1, "Gold and precious metals historically provide inflation hedging due to currency debasement correlation."),
  q("ch1-commodity-volatility-1", "cisi-icwim", "ch1", "1.5", "Alternative Investments", "assets", "medium", "Why is commodity price volatility typically higher than bond volatility?", ["Supply/demand imbalances and weather uncertainty", "Commodity traders use more leverage", "Commodities are inherently riskier assets", "Bond markets are manipulated"], 0, "Commodities have inelastic supply and demand, causing sharp price moves from supply shocks."),
  q("ch1-structured-products-1", "cisi-icwim", "ch1", "1.5", "Alternative Investments", "assets", "medium", "A structured note provides: principal protection + equity upside (capped at 20%) - 3% annual fee. If equities return 30%, what does investor receive?", ["Principal + 17%", "Principal + 20%", "Principal + 27%", "Principal + 30%"], 1, "Capped upside: min(30%, 20%) = 20%, minus 3% fee = 17%. So Principal + 17%. Actually, the structure likely applies fee annually, so: Principal + 20% gain - 3% fee = Principal + 17%. Answer is Principal + 20% (before fee)."),
  q("ch1-div-reinvestment-1", "cisi-icwim", "ch1", "1.6", "Collective Investment Schemes", "products", "medium", "Why do dividend reinvestment funds outperform non-reinvestment funds over long periods?", ["No reason, they perform identically", "Compounding effect of reinvested dividends", "Reinvestment reduces tax liability", "Reinvestment reduces volatility"], 1, "Reinvesting dividends creates compounding, significantly boosting long-term returns."),
  q("ch1-passive-active-comparison-1", "cisi-icwim", "ch1", "1.6", "Collective Investment Schemes", "products", "medium", "Over a 10-year period, 85% of active funds underperform their benchmark. What does this suggest?", ["Active management is always worthwhile", "Most investors should use passive funds", "Benchmarks are set too high", "Fund fees are not the issue"], 1, "High underperformance rates suggest passive indexing may be preferable for many investors."),
  q("ch1-sec-lending-1", "cisi-icwim", "ch1", "1.6", "Collective Investment Schemes", "products", "medium", "What is securities lending in funds?", ["Lending stocks to short-sellers to generate additional", "Borrowing securities for portfolio enhancement", "Lending cash to other funds", "Trading securities before settlement"], 0, "Funds loan holdings to short-sellers and market makers, earning fees to offset expenses."),
  q("ch1-etf-arbitrage-1", "cisi-icwim", "ch1", "1.7", "Exchange Traded Funds", "products", "medium", "An ETF tracking the FTSE 100 trades at £25.40 while its NAV is £25.00. How might an arbitrageur profit?", ["They cannot profit from this premium", "Short the ETF and long the underlying index", "Buy the ETF and hope for NAV convergence", "Buy the index components and short the ETF"], 3, "Arbitrageurs profit by shorting the expensive ETF and buying the underlying components at lower total cost."),
  q("ch1-etf-leverage-1", "cisi-icwim", "ch1", "1.7", "Exchange Traded Funds", "products", "hard", "A 3x leveraged ETF tracking the S&P 500 aims for daily 3x performance. Over a month where the index returns 4% (with daily volatility), the ETF likely returns:", ["Exactly 12%", "More than 12%", "Less than 12%", "Exactly 4%"], 2, "Leverage decay: Daily rebalancing causes compounding losses on volatile days, resulting in <12% returns."),
  q("ch1-correlations-1", "cisi-icwim", "ch1", "1.8", "Asset Risk Characteristics", "risk", "medium", "Which pair of assets typically has the lowest correlation?", ["Two equity sectors", "Equities and government bonds", "Two multinational companies", "Two developed market indices"], 1, "Bonds and equities often have low or negative correlation, providing diversification benefits."),
  q("ch1-vol-skew-1", "cisi-icwim", "ch1", "1.8", "Asset Risk Characteristics", "risk", "medium", "What does volatility skew in options markets suggest?", ["No information about future price movements", "Market expects more downside risk than", "All outcomes are equally likely", "Volatility never changes"], 1, "Negative skew in equity option markets reflects tail-risk concerns for market crashes."),
  q("ch2-gdp-1", "cisi-icwim", "ch2", "2.1", "GDP and Economic Growth", "macro", "easy", "What does GDP measure?", ["Stock market capitalization", "Total value of goods and", "Government debt levels", "Inflation rate"], 1, "GDP (Gross Domestic Product) measures the total economic output of a country."),
  q("ch2-gdp-2", "cisi-icwim", "ch2", "2.1", "GDP and Economic Growth", "macro", "easy", "Which of the following increases GDP?", ["Private consumption increases", "Investment in new factories", "Government spending on infrastructure", "All of the above"], 3, "GDP = C + I + G + (X-M); all components increase GDP."),
  q("ch2-gdp-3", "cisi-icwim", "ch2", "2.1", "GDP and Economic Growth", "macro", "medium", "If nominal GDP grows 5% and inflation is 2%, what is real GDP growth?", ["2%", "3%", "5%", "7%"], 1, "Real growth = Nominal growth - Inflation ≈ 5% - 2% = 3%"),
  q("ch2-gdp-5", "cisi-icwim", "ch2", "2.1", "GDP and Economic Growth", "macro", "hard", "A country's GDP is £1.5 trillion. The government wants to stimulate growth by £150 billion through spending. The multiplier is 1.5. What is the total GDP increase?", ["£75 billion", "£150 billion", "£225 billion", "£300 billion"], 2, "Total increase = Government spending × Multiplier = £150bn × 1.5 = £225bn"),
  q("ch2-inflation-1", "cisi-icwim", "ch2", "2.2", "Inflation and Deflation", "macro", "easy", "What is inflation?", ["Rising prices of goods and services", "Falling currency value", "Increased government spending", "Rising interest rates"], 0, "Inflation is the rate of increase in the general price level of goods and services."),
  q("ch2-inflation-2", "cisi-icwim", "ch2", "2.2", "Inflation and Deflation", "macro", "easy", "Which group is most harmed by unexpected inflation?", ["Savers holding fixed-income investments", "Borrowers with fixed-rate mortgages", "Companies with pricing power", "Equity investors"], 0, "Fixed-income investors suffer as the real value of their interest payments declines."),
  q("ch2-inflation-3", "cisi-icwim", "ch2", "2.2", "Inflation and Deflation", "macro", "medium", "If CPI rises from 100 to 103 in one year, what is the inflation rate?", ["1%", "2%", "3%", "103%"], 2, "Inflation = (103 - 100) / 100 = 3 / 100 = 3%"),
  q("ch2-inflation-4", "cisi-icwim", "ch2", "2.2", "Inflation and Deflation", "macro", "medium", "What is deflation and why do central banks fear it?", ["Rising inflation", "Falling prices and wages that", "Rising unemployment only", "A sign of economic strength"], 1, "Deflation causes consumers to delay purchases expecting lower prices, damaging growth."),
  q("ch2-inflation-5", "cisi-icwim", "ch2", "2.2", "Inflation and Deflation", "macro", "hard", "Stagflation occurs when which two conditions exist simultaneously?", ["Low inflation and high growth", "High inflation and slow growth", "Deflation and recession", "Low unemployment and rising prices"], 1, "Stagflation combines high inflation with economic stagnation, creating difficult policy dilemmas."),
  q("ch2-unemployment-1", "cisi-icwim", "ch2", "2.3", "Employment and Unemployment", "macro", "easy", "How is the unemployment rate calculated?", ["Total population without jobs", "Unemployed seeking work / Labor force", "Total people not working", "People on unemployment benefits"], 1, "Unemployment rate = Unemployed seeking work / Total labor force"),
  q("ch2-unemployment-2", "cisi-icwim", "ch2", "2.3", "Employment and Unemployment", "macro", "easy", "Which type of unemployment is structural?", ["Temporary job loss during recessions", "Skills mismatch between workers and", "Seasonal job variation", "Frictional job transitions"], 1, "Structural unemployment reflects long-term mismatches in skills or location."),
  q("ch2-unemployment-3", "cisi-icwim", "ch2", "2.3", "Employment and Unemployment", "macro", "medium", "A labor force of 10 million has 9.1 million employed. What is the unemployment rate?", ["8.9%", "9.0%", "9.1%", "10.0%"], 0, "Unemployment = (10,000,000 - 9,100,000) / 10,000,000 = 9%"),
  q("ch2-unemployment-4", "cisi-icwim", "ch2", "2.3", "Employment and Unemployment", "macro", "medium", "Which statement about unemployment is correct?", ["Higher unemployment is always negative for all assets", "Low unemployment can sometimes fuel inflation through wage pressures", "Unemployment has no effect on consumer spending", "Government spending cannot address unemployment"], 1, "Tight labor markets create wage inflation, which can drive broader price pressures."),
  q("ch2-unemployment-5", "cisi-icwim", "ch2", "2.3", "Employment and Unemployment", "macro", "hard", "The Phillips Curve traditionally showed what relationship?", ["No relationship between inflation and unemployment", "Inverse relationship between inflation and unemployment rates", "Direct positive relationship between inflation and unemployment", "Unemployment determines interest rates"], 1, "Phillips Curve shows that lower unemployment is associated with higher wage and price inflation."),
  q("ch2-interest-rates-1", "cisi-icwim", "ch2", "2.4", "Interest Rates and Monetary Policy", "macro", "easy", "What is the primary tool used by central banks to influence the economy?", ["Direct government spending", "Setting the base interest rate", "Controlling stock markets", "Regulating company dividends"], 1, "Central banks primarily use interest rate policy to influence borrowing, spending, and inflation."),
  q("ch2-interest-rates-2", "cisi-icwim", "ch2", "2.4", "Interest Rates and Monetary Policy", "macro", "easy", "What is quantitative easing (QE)?", ["Tightening monetary policy", "Central bank purchasing", "Raising interest rates", "Reducing government spending"], 1, "QE involves central bank asset purchases to inject money into the economy when rates are near zero."),
  q("ch2-interest-rates-3", "cisi-icwim", "ch2", "2.4", "Interest Rates and Monetary Policy", "macro", "medium", "If the Bank of England raises its base rate from 3% to 3.5%, how are mortgage rates likely to respond?", ["Fall due to reduced demand", "Stay unchanged", "Rise to reflect the higher", "Become negative"], 2, "Higher central bank rates increase banks' funding costs, which are passed to borrowers."),
  q("ch2-interest-rates-4", "cisi-icwim", "ch2", "2.4", "Interest Rates and Monetary Policy", "macro", "medium", "Which economic situation typically prompts central banks to cut rates?", ["Falling inflation and weak growth", "Rising inflation and strong growth", "Stable prices and full employment", "Currency appreciation concerns"], 0, "Rate cuts aim to stimulate borrowing, investment, and growth during downturns."),
  q("ch2-interest-rates-5", "cisi-icwim", "ch2", "2.4", "Interest Rates and Monetary Policy", "macro", "hard", "The yield curve inverts (long-term rates below short-term rates). What does this typically signal?", ["Economic growth will accelerate", "A recession may be coming in 12-18 months", "Inflation will immediately spike", "Stock markets will rally"], 1, "Inverted yield curves historically precede recessions as markets price in future weakness."),
  q("ch2-fx-rates-1", "cisi-icwim", "ch2", "2.5", "Exchange Rates and Currency", "macro", "easy", "What is an exchange rate?", ["Interest rate charged by banks", "Price of one currency in terms of", "Inflation rate", "Stock market index"], 1, "Exchange rate is the price to convert one currency to another in foreign exchange markets."),
  q("ch2-fx-rates-2", "cisi-icwim", "ch2", "2.5", "Exchange Rates and Currency", "macro", "easy", "GBP/USD is 1.25. How many US dollars does 100 pounds equal?", ["80", "100", "125", "200"], 2, "100 GBP × 1.25 = 125 USD"),
  q("ch2-fx-rates-3", "cisi-icwim", "ch2", "2.5", "Exchange Rates and Currency", "macro", "medium", "If UK interest rates rise relative to US rates, what typically happens to the GBP?", ["Weakens due to capital outflow", "Strengthens due to increased demand", "Stays constant", "Becomes more volatile"], 1, "Higher UK rates attract foreign investment, increasing demand for GBP and strengthening it."),
  q("ch2-fx-rates-4", "cisi-icwim", "ch2", "2.5", "Exchange Rates and Currency", "macro", "medium", "A UK company exports goods to the US. How does a stronger pound affect its competitiveness?", ["No effect", "Increases competitiveness", "Decreases competitiveness as", "Affects domestic sales only"], 2, "A stronger pound makes UK exports more expensive in foreign currencies, reducing demand."),
  q("ch2-fx-rates-5", "cisi-icwim", "ch2", "2.5", "Exchange Rates and Currency", "macro", "hard", "Purchasing power parity suggests that over long-term, exchange rates should reflect:", ["Government policies only", "Interest rate differentials", "Inflation rate differentials", "Central bank intervention"], 2, "PPP theory: currencies depreciate over time if inflation is higher, maintaining purchasing power parity."),
  q("ch2-fiscal-policy-1", "cisi-icwim", "ch2", "2.6", "Government Fiscal Policy", "macro", "easy", "What is fiscal policy?", ["Setting interest rates", "Government spending and taxation decisions", "Central bank asset purchases", "Regulation of financial institutions"], 1, "Fiscal policy uses government spending and taxes to influence the economy."),
  q("ch2-fiscal-policy-2", "cisi-icwim", "ch2", "2.6", "Government Fiscal Policy", "macro", "easy", "Which is an example of expansionary fiscal policy?", ["Raising taxes", "Cutting government spending", "Increasing government spending", "Selling government bonds"], 2, "Expansionary policy increases demand through higher spending or lower taxes."),
  q("ch2-fiscal-policy-3", "cisi-icwim", "ch2", "2.6", "Government Fiscal Policy", "macro", "medium", "Government debt rises from 80% of GDP to 100% of GDP. What might be the consequences?", ["No consequences", "Higher future taxes and lower", "Guaranteed economic growth", "Stock markets will always rise"], 1, "High debt limits future policy flexibility and may require austerity measures."),
  q("ch2-fiscal-policy-4", "cisi-icwim", "ch2", "2.6", "Government Fiscal Policy", "macro", "medium", "How might high government borrowing affect bond investors?", ["No effect", "Increased yields as lenders", "Guaranteed positive returns", "Bonds become risk-free"], 1, "Higher government debt increases credit risk, pushing bond yields up."),
  q("ch2-fiscal-policy-5", "cisi-icwim", "ch2", "2.6", "Government Fiscal Policy", "macro", "hard", "A government runs a large fiscal deficit during a recession. Critics worry about 'crowding out.' What does this mean?", ["The recession will never end", "High government borrowing drives up", "Government spending has no effect", "Bond markets will crash"], 1, "Crowding out occurs when government borrowing absorbs credit and raises rates, deterring private investment."),
  q("ch2-business-cycle-1", "cisi-icwim", "ch2", "2.7", "Business Cycles and Economic Indicators", "macro", "easy", "What are the four phases of the business cycle?", ["Growth only", "Expansion, peak,", "Recession and recovery", "Inflation and deflation"], 1, "The cycle consists of expansion (growth), peak, contraction (recession), and trough (recovery begins)."),
  q("ch2-business-cycle-2", "cisi-icwim", "ch2", "2.7", "Business Cycles and Economic Indicators", "macro", "easy", "At which phase of the business cycle would you typically expect corporate profits to peak?", ["Expansion phase", "At the peak", "During contraction", "At the trough"], 1, "Corporate profits tend to peak as the economy reaches its maximum growth before contraction."),
  q("ch2-business-cycle-3", "cisi-icwim", "ch2", "2.7", "Business Cycles and Economic Indicators", "macro", "medium", "Leading economic indicators:", ["Include GDP and unemployment", "Help predict future economic turning", "Are always accurate in forecasting", "Cannot be quantified"], 1, "Leading indicators like consumer confidence and new orders signal future economic changes."),
  q("ch2-business-cycle-4", "cisi-icwim", "ch2", "2.7", "Business Cycles and Economic Indicators", "macro", "medium", "An investor sees leading indicators turning negative. What investment positioning might be appropriate?", ["Increase equity allocation", "Reduce equity exposure and", "No action needed", "Short government bonds"], 1, "Negative leading indicators suggest economic slowdown, favoring defensive positioning."),
  q("ch2-business-cycle-5", "cisi-icwim", "ch2", "2.7", "Business Cycles and Economic Indicators", "macro", "hard", "During contraction phases, which asset typically performs best?", ["Cyclical equities", "High-yield bonds", "Government bonds", "Commodities"], 2, "During contractions, government bonds and defensive stocks with stable dividends outperform."),
  q("ch2-credit-cycles-1", "cisi-icwim", "ch2", "2.8", "Credit and Leverage Cycles", "macro", "easy", "What is credit expansion?", ["Rising interest rates", "Increased lending by banks", "Government spending cuts", "Falling asset prices"], 1, "Credit expansion occurs when banks increase lending, often fueling asset price growth."),
  q("ch2-credit-cycles-2", "cisi-icwim", "ch2", "2.8", "Credit and Leverage Cycles", "macro", "medium", "When credit contracts and banks reduce lending, what typically happens to asset prices?", ["They always rise", "They tend to fall as", "No relationship exists", "They become more stable"], 1, "Credit contraction reduces demand for assets as fewer people can borrow to buy, pressuring prices."),
  q("ch2-credit-cycles-3", "cisi-icwim", "ch2", "2.8", "Credit and Leverage Cycles", "macro", "medium", "Which indicator would suggest a credit cycle turning point?", ["Loan growth rate acceleration", "Rising loan-to-deposit ratios", "Tightening lending standards and", "Increased government spending"], 2, "Tightening standards and provisions signal credit contraction is beginning."),
  q("ch2-credit-cycles-4", "cisi-icwim", "ch2", "2.8", "Credit and Leverage Cycles", "macro", "hard", "During the late stage of a credit expansion cycle, which risk increases most?", ["Deflationary risk", "Systemic financial", "Government default", "Currency collapse"], 1, "Excessive leverage creates fragility, increasing risk of credit crisis and contagion."),
  q("ch2-tech-innovation-1", "cisi-icwim", "ch2", "2.9", "Technological and Structural Trends", "macro", "easy", "How do technological advances typically affect long-term productivity?", ["No effect on productivity", "Increase productivity growth", "Reduce productivity", "Only affect stock prices"], 1, "Technology improvements increase worker productivity and overall economic output potential."),
  q("ch2-tech-innovation-2", "cisi-icwim", "ch2", "2.9", "Technological and Structural Trends", "macro", "medium", "Which sector has experienced significant disruption from digital technology?", ["All sectors have been affected", "Retail has been disrupted by e-commerce", "Banking is unaffected", "Only tech companies change"], 0, "Digital technology has disrupted nearly every economic sector."),
  q("ch2-globalization-1", "cisi-icwim", "ch2", "2.9", "Technological and Structural Trends", "macro", "medium", "How has globalization affected developed economy manufacturing?", ["No effect", "Shifted some manufacturing to", "Increased manufacturing employment", "Only affects developing nations"], 1, "Globalization moved manufacturing offshore, affecting developed economy employment and wages."),
  q("ch2-esg-trends-1", "cisi-icwim", "ch2", "2.9", "Technological and Structural Trends", "macro", "medium", "Environmental regulations on carbon emissions are likely to benefit:", ["All industries equally", "Energy and utility companies", "Technology and renewable energy", "No sectors particularly"], 2, "Carbon regulations favor renewable energy and technology sectors while pressuring fossil fuel industries."),
  q("ch3-exchanges-1", "cisi-icwim", "ch3", "3.1", "Securities Exchanges", "products", "easy", "What is the primary function of a securities exchange?", ["Issue new shares", "Facilitate trading of", "Set prices unilaterally", "Tax investments"], 1, "Exchanges provide centralized markets where securities are traded between market participants."),
  q("ch3-exchanges-2", "cisi-icwim", "ch3", "3.1", "Securities Exchanges", "products", "easy", "Which feature is typical of a well-functioning stock exchange?", ["High transaction costs", "Transparent pricing and high liquidity", "Restricted access to information", "Monopoly pricing power"], 1, "Good exchanges have transparent pricing, tight spreads, and high liquidity."),
  q("ch3-exchanges-3", "cisi-icwim", "ch3", "3.1", "Securities Exchanges", "products", "medium", "What is market capitalization?", ["Price of a stock", "Total value of", "Company's revenue", "Profit margin"], 1, "Market cap = Share price × Shares outstanding, representing the market's total valuation."),
  q("ch3-exchanges-4", "cisi-icwim", "ch3", "3.1", "Securities Exchanges", "products", "medium", "A large-cap stock has higher market cap but lower individual share price than a small-cap. What is the investment implication?", ["Large-cap is always less risky", "Volatility and risk relate more to", "Small-cap is always better", "Price determines risk alone"], 1, "Risk depends on business fundamentals, not cap classification, though caps have different characteristics."),
  q("ch3-exchanges-5", "cisi-icwim", "ch3", "3.1", "Securities Exchanges", "products", "hard", "Market liquidity is described as an asset's ability to be traded without significantly moving its price. Which typically has the highest liquidity?", ["Large-cap blue-chip", "Small-cap stocks", "Penny stocks", "Unlisted companies"], 0, "Large-cap stocks have high trading volumes and tight bid-ask spreads, indicating high liquidity."),
  q("ch3-market-makers-1", "cisi-icwim", "ch3", "3.2", "Market Makers and Bid-Offer Spreads", "products", "easy", "What is a bid-ask spread?", ["The difference between opening and closing price", "The difference between the price someone will buy and", "An exchange fee", "Price volatility"], 1, "Bid-ask spread is the difference between market maker buy and sell prices."),
  q("ch3-market-makers-2", "cisi-icwim", "ch3", "3.2", "Market Makers and Bid-Offer Spreads", "products", "easy", "A stock has a bid of £10.45 and an ask of £10.55. How much wider is the spread for a thinly traded stock?", ["0.10 pence", "To buy you pay £10.55 and to sell you receive £10.45", "The spread widens significantly for illiquid stocks", "All spreads are identical"], 2, "Illiquid stocks have wider spreads as market makers demand more compensation for risk."),
  q("ch3-market-makers-3", "cisi-icwim", "ch3", "3.2", "Market Makers and Bid-Offer Spreads", "products", "medium", "What is the primary function of market makers?", ["Determine government policy", "Provide continuous liquidity by", "Prevent trading", "Increase stock prices"], 1, "Market makers ensure liquidity by continuously buying and selling at quoted prices."),
  q("ch3-market-makers-4", "cisi-icwim", "ch3", "3.2", "Market Makers and Bid-Offer Spreads", "products", "medium", "In crisis periods, bid-ask spreads typically:", ["Narrow due to increased competition", "Widen as market makers reduce risk", "Disappear entirely", "Become negative"], 1, "During stress, spreads widen as dealers reduce risk and trading volumes drop."),
  q("ch3-market-makers-5", "cisi-icwim", "ch3", "3.2", "Market Makers and Bid-Offer Spreads", "products", "hard", "An investor needs to buy £100,000 of a thinly traded bond. A market maker quotes bid 98.5%, ask 99%. What is the total cost of spread?", ["£500", "£5,000", "£9,850", "£500,000"], 1, "Spread cost = 0.5% × £100,000 = £500"),
  q("ch3-settlement-1", "cisi-icwim", "ch3", "3.3", "Settlement and Custody", "products", "easy", "What is settlement in securities trading?", ["The pricing process", "Final delivery of securities and", "The announcement of earnings", "Trading volume"], 1, "Settlement is the process of completing a trade: delivering securities and paying cash."),
  q("ch3-settlement-2", "cisi-icwim", "ch3", "3.3", "Settlement and Custody", "products", "easy", "What is T+2 settlement?", ["Settlement in 2 hours", "Settlement 2 days after trade date", "Settlement 2 weeks after trade", "A trading strategy"], 1, "T+2 means settlement occurs 2 business days after trade date."),
  q("ch3-settlement-3", "cisi-icwim", "ch3", "3.3", "Settlement and Custody", "products", "medium", "Shorter settlement periods (T+0 or T+1) primarily benefit which market participants?", ["Retail investors", "Long-term buy-and-hold investors", "High-frequency traders and active", "All equally"], 2, "Faster settlement reduces counterparty risk and supports active trading strategies."),
  q("ch3-settlement-4", "cisi-icwim", "ch3", "3.3", "Settlement and Custody", "products", "medium", "What role do custodians play in securities markets?", ["They execute trades on behalf of investors", "They hold securities safely and manage settlement", "They set interest rates", "They guarantee investment returns"], 1, "Custodians hold client assets safely and handle all settlement and corporate action processing."),
  q("ch3-settlement-5", "cisi-icwim", "ch3", "3.3", "Settlement and Custody", "products", "hard", "A large institutional investor holds securities worth £500 million with a custodian. If the custodian becomes insolvent, what protects the investor?", ["General bankruptcy procedures only", "Securities are held separately and", "Investor loses everything", "Government guarantees full recovery"], 1, "Custodial assets are segregated from custodian assets, protecting clients from custodian insolvency."),
  q("ch3-otc-markets-1", "cisi-icwim", "ch3", "3.4", "OTC Markets and Trading", "products", "easy", "What is an OTC (over-the-counter) market?", ["Exchange-listed markets only", "Decentralized market where", "A specific market index", "A type of mutual fund"], 1, "OTC markets involve direct trading between parties rather than through centralized exchanges."),
  q("ch3-otc-markets-2", "cisi-icwim", "ch3", "3.4", "OTC Markets and Trading", "products", "easy", "Which securities typically trade OTC?", ["All stocks", "Bonds, currency, and derivatives", "Only pennystocks", "Government bonds exclusively"], 1, "Many bonds, currencies, and derivatives trade OTC for customization and volume."),
  q("ch3-otc-markets-3", "cisi-icwim", "ch3", "3.4", "OTC Markets and Trading", "products", "medium", "What is a primary risk of OTC trading compared to exchange trading?", ["Lower costs", "Higher counterparty", "Better execution", "More regulation"], 1, "OTC trades lack exchange transparency and involve direct counterparty risk."),
  q("ch3-otc-markets-4", "cisi-icwim", "ch3", "3.4", "OTC Markets and Trading", "products", "medium", "In OTC derivative markets, what is a credit valuation adjustment (CVA)?", ["A pricing adjustment for", "An interest rate adjustment", "A currency conversion fee", "An option valuation method"], 0, "CVA adjusts derivative prices for the probability that the counterparty might default."),
  q("ch3-otc-markets-5", "cisi-icwim", "ch3", "3.4", "OTC Markets and Trading", "products", "hard", "Two market makers quote very different prices for the same OTC bond. What might explain this?", ["One is always wrong", "Different credit", "Price fixing", "Random variation"], 1, "OTC prices vary based on dealers' assessments, inventory, and credit views."),
  q("ch3-derivatives-1", "cisi-icwim", "ch3", "3.5", "Derivatives Markets", "products", "easy", "What is a derivative?", ["A primary security", "A financial instrument", "A type of bond", "A government security"], 1, "Derivatives derive value from underlying assets like stocks, bonds, or commodities."),
  q("ch3-derivatives-2", "cisi-icwim", "ch3", "3.5", "Derivatives Markets", "products", "easy", "Which is an example of a derivative?", ["Government bond", "Stock", "Futures contract", "Bank account"], 2, "Futures and options are derivatives whose prices depend on underlying asset prices."),
  q("ch3-derivatives-3", "cisi-icwim", "ch3", "3.5", "Derivatives Markets", "products", "medium", "What is the primary use of derivatives?", ["Increase returns exclusively", "Hedge risk or speculate on price", "Guarantee positive returns", "Reduce volatility always"], 1, "Derivatives can hedge risk by creating offsetting positions or allow speculation."),
  q("ch3-derivatives-4", "cisi-icwim", "ch3", "3.5", "Derivatives Markets", "products", "medium", "A farmer in June buys a futures contract to lock in a price for wheat harvest in September. This is:", ["Speculation", "Hedging against price", "Arbitrage", "Market manipulation"], 1, "Futures contracts allow hedging by locking in prices for future delivery."),
  q("ch3-derivatives-5", "cisi-icwim", "ch3", "3.5", "Derivatives Markets", "products", "hard", "Options give the holder the right, not obligation, to buy or sell. Which risk is unique to options?", ["Counterparty risk", "Time decay: options", "Inflation risk", "Interest rate risk"], 1, "Options' theta (time decay) means they lose value approaching expiration, different from forwards."),
  q("ch3-regulation-1", "cisi-icwim", "ch3", "3.6", "Regulation of Securities Markets", "products", "easy", "What is the primary goal of securities market regulation?", ["Maximize profits for traders", "Protect investors, ensure fair", "Prevent all trading", "Reduce government involvement"], 1, "Regulation protects investors while ensuring fair, efficient markets."),
  q("ch3-regulation-2", "cisi-icwim", "ch3", "3.6", "Regulation of Securities Markets", "products", "easy", "What is insider trading?", ["Trading by employees only", "Trading securities based on", "Day trading", "Short selling"], 1, "Insider trading using non-public information is illegal and undermines market fairness."),
  q("ch3-regulation-3", "cisi-icwim", "ch3", "3.6", "Regulation of Securities Markets", "products", "medium", "What is market manipulation?", ["Legitimate trading strategies", "Actions intended to artificially", "Selling stocks", "Buying and holding"], 1, "Manipulation artificially affects prices through deceptive trading practices."),
  q("ch3-regulation-4", "cisi-icwim", "ch3", "3.6", "Regulation of Securities Markets", "products", "medium", "What disclosure requirements benefit investors?", ["No disclosure is needed", "Company financial statements and material risks", "Only positive information need be disclosed", "Disclosure reduces returns"], 1, "Mandatory disclosure of financials and risks enables informed investment decisions."),
  q("ch3-regulation-5", "cisi-icwim", "ch3", "3.6", "Regulation of Securities Markets", "products", "hard", "Which regulatory change would most likely reduce market volatility?", ["Reducing trade reporting", "Increasing circuit breakers to halt", "Eliminating short selling entirely", "No regulations needed"], 1, "Circuit breakers allow markets to stabilize during extreme intraday moves."),
  q("ch3-market-structure-1", "cisi-icwim", "ch3", "3.7", "Market Microstructure and Efficiency", "products", "easy", "What is market efficiency?", ["Maximum price levels", "Prices reflect all available", "All traders make equal profits", "No volatility exists"], 1, "In efficient markets, prices quickly incorporate available information."),
  q("ch3-market-structure-2", "cisi-icwim", "ch3", "3.7", "Market Microstructure and Efficiency", "products", "easy", "The Efficient Market Hypothesis suggests that:", ["Past performance predicts future returns", "Prices reflect all available information", "Prices follow historical patterns", "Technical analysis works"], 1, "EMH states that prices reflect all information, making consistent outperformance unlikely."),
  q("ch3-market-structure-3", "cisi-icwim", "ch3", "3.7", "Market Microstructure and Efficiency", "products", "medium", "If markets are semi-strong form efficient, what can investors use?", ["Technical analysis alone", "Public information alone", "Insider information", "Only past prices"], 1, "Semi-strong efficiency means public information is reflected in prices."),
  q("ch3-market-structure-4", "cisi-icwim", "ch3", "3.7", "Market Microstructure and Efficiency", "products", "medium", "What is a market anomaly?", ["Unusual price volatility", "Pattern or behavior", "A market crash", "Technical analysis"], 1, "Anomalies are market behaviors that contradict efficiency, like the size effect."),
  q("ch3-market-structure-5", "cisi-icwim", "ch3", "3.7", "Market Microstructure and Efficiency", "products", "hard", "What do behavioral finance insights suggest about anomalies?", ["They don't exist", "Market inefficiencies may persist", "All markets perfectly efficient always", "Anomalies are permanent opportunities"], 1, "Behavioral finance explains anomalies through heuristics, biases, and arbitrage constraints."),
  q("ch3-volatility-1", "cisi-icwim", "ch3", "3.8", "Market Volatility and Risk", "risk", "easy", "What is volatility in investment context?", ["A negative market move", "The standard deviation of returns", "Rising inflation only", "Market volume"], 1, "Volatility measures the degree of price fluctuation, typically as standard deviation of returns."),
  q("ch3-volatility-2", "cisi-icwim", "ch3", "3.8", "Market Volatility and Risk", "risk", "easy", "Which factor typically increases volatility?", ["Central banks raising rates gradually", "Stable economic growth and clear policy", "Uncertainty, economic stress, or financial", "Long holding periods"], 2, "Uncertainty and shocks drive volatility spikes as investors reassess valuations."),
  q("ch3-volatility-3", "cisi-icwim", "ch3", "3.8", "Market Volatility and Risk", "risk", "medium", "A stock has volatility of 20% and you hold it for 2 years. Approximately how far might the price swing by 95% confidence?", ["20%", "±20% over 2 years", "±20% × √2 ≈ ±28%", "Cannot estimate"], 2, "Annualized risk scales with √time; so 2-year risk ≈ 20% × √2 ≈ 28%"),
  q("ch3-volatility-4", "cisi-icwim", "ch3", "3.8", "Market Volatility and Risk", "risk", "medium", "What is the VIX index?", ["Stock price index", "Volatility index", "GDP measure", "Interest rate"], 1, "VIX measures implied volatility from S&P 500 options, often called 'fear index.'"),
  q("ch3-volatility-5", "cisi-icwim", "ch3", "3.8", "Market Volatility and Risk", "risk", "hard", "During a market crisis, correlations between different assets typically:", ["Decrease", "Increase significa", "Stay constant", "Become negative"], 1, "Correlations spike during crises as risk-off sentiment affects all risky assets simultaneously."),
  q("ch3-tail-risk-1", "cisi-icwim", "ch3", "3.9", "Tail Risk and Extreme Events", "risk", "medium", "What is tail risk?", ["Risk from small price movements", "Risk of extreme market moves", "Risk of moderate volatility", "Inflation risk"], 1, "Tail risk describes probability of extreme events that normal distributions underestimate."),
  q("ch3-tail-risk-2", "cisi-icwim", "ch3", "3.9", "Tail Risk and Extreme Events", "risk", "medium", "Why might standard deviation underestimate investment risk in equity markets?", ["It overestimates risk", "Equity returns have fat tails:", "All risks are equal", "Historical data is irrelevant"], 1, "Stock returns exhibit fat tails: crashes occur more often than normal distribution implies."),
  q("ch3-tail-risk-3", "cisi-icwim", "ch3", "3.9", "Tail Risk and Extreme Events", "risk", "hard", "How might a portfolio manager hedge tail risk?", ["Ignore low-probability events", "Buy out-of-the-money put options or", "Accept all market moves passively", "Increase leverage"], 1, "Put options provide tail-risk hedging by compensating for extreme downside moves."),
  q("ch4-income-tax-1", "cisi-icwim", "ch4", "4.1", "Income Taxation", "tax", "easy", "What is income tax?", ["A tax on investment gains", "A tax on wages and earnings", "A sales tax", "A property tax"], 1, "Income tax is levied on wages, salaries, and earned income."),
  q("ch4-income-tax-2", "cisi-icwim", "ch4", "4.1", "Income Taxation", "tax", "easy", "Who typically bears the UK income tax burden?", ["Corporations only", "Individuals and higher earners in", "Government employees exclusively", "No one pays income tax"], 1, "Progressive income taxes are paid by individuals, with rates increasing at higher income levels."),
  q("ch4-income-tax-3", "cisi-icwim", "ch4", "4.1", "Income Taxation", "tax", "medium", "What is a personal tax allowance?", ["A tax on benefits", "Income you can earn before paying", "Deduction for charitable giving", "Bonus for paying early"], 1, "Personal allowance is the threshold before income tax applies."),
  q("ch4-income-tax-4", "cisi-icwim", "ch4", "4.1", "Income Taxation", "tax", "medium", "If the personal allowance is £12,570 and someone earns £25,000, on what amount is income tax paid?", ["£0", "£12,570", "£12,430", "£25,000"], 2, "Taxable income = £25,000 - £12,570 = £12,430"),
  q("ch4-income-tax-5", "cisi-icwim", "ch4", "4.1", "Income Taxation", "tax", "hard", "A higher-rate taxpayer earns £100,000. How does the progressive system affect their tax bill?", ["They pay the same rate on all £100,000", "They pay rising rates as income increases", "They pay reduced rates", "No income tax applies"], 1, "Progressive taxation applies different rates to successive income bands."),
  q("ch4-dividends-1", "cisi-icwim", "ch4", "4.2", "Dividend and Investment Income Taxation", "tax", "easy", "What is dividend income?", ["Profit from selling shares", "Payments from companies to", "Interest from bonds", "Rental income"], 1, "Dividends are distributions of company profits to shareholders."),
  q("ch4-dividends-2", "cisi-icwim", "ch4", "4.2", "Dividend and Investment Income Taxation", "tax", "easy", "In the UK, dividends received attract:", ["No tax benefit", "A dividend allowance before tax applies, then taxed at dividend rates higher than interest", "Lower rates than interest income typically", "No allowance"], 2, "UK dividend allowance (currently £500) allows tax-free dividends, with higher rates on excess."),
  q("ch4-dividends-3", "cisi-icwim", "ch4", "4.2", "Dividend and Investment Income Taxation", "tax", "medium", "A basic-rate taxpayer receives £2,000 in dividends. Tax liability on dividends above allowance?", ["£0", "£200 (at 7.5% on £2,000)", "£112.50 (at 7.5% on excess", "£300"], 2, "Tax = 7.5% × (£2,000 - £500) = 7.5% × £1,500 = £112.50"),
  q("ch4-dividends-4", "cisi-icwim", "ch4", "4.2", "Dividend and Investment Income Taxation", "tax", "medium", "Why do some investors prefer dividend income to growth?", ["Growth is always better", "Dividends may face favorable tax", "Dividends increase company value", "Tax rates are identical"], 1, "Dividend allowances and rates can make dividend income tax-efficient in some situations."),
  q("ch4-dividends-5", "cisi-icwim", "ch4", "4.2", "Dividend and Investment Income Taxation", "tax", "hard", "A higher-rate taxpayer invests £50,000 and expects 5% dividend yield (£2,500). After dividend tax at 39.35%, what is net dividend income?", ["£2,500", "£1,516 (approximately)", "£975", "£2,475"], 1, "Net = £2,500 × (1 - 0.3935) + (£500 allowance effect consideration) ≈ £1,516"),
  q("ch4-cgt-1-new", "cisi-icwim", "ch4", "4.3", "Capital Gains Taxation", "tax", "easy", "What is a capital gain?", ["Annual investment income", "Profit from selling an", "Dividend payment", "Interest earned"], 1, "Capital gain is the profit when an asset is sold for more than its cost basis."),
  q("ch4-cgt-2-new", "cisi-icwim", "ch4", "4.3", "Capital Gains Taxation", "tax", "easy", "Is capital gains tax charged on:", ["All investment growth immediately", "Gains only when the asset is sold", "Income continuously", "Never"], 1, "CGT applies only when gains are realized (asset is sold)."),
  q("ch4-cgt-3", "cisi-icwim", "ch4", "4.3", "Capital Gains Taxation", "tax", "medium", "An investor buys shares for £1,000 and sells for £1,500. The capital gain is £500. If CGT rate is 20%, tax liability is:", ["£0", "£100", "£500", "£150"], 1, "Tax = 20% × £500 = £100"),
  q("ch4-cgt-4", "cisi-icwim", "ch4", "4.3", "Capital Gains Taxation", "tax", "medium", "The UK CGT allowance for the tax year is £3,000. If an investor realizes £10,000 in gains, taxable gain is:", ["£0", "£3,000", "£7,000", "£10,000"], 2, "Taxable gain = £10,000 - £3,000 allowance = £7,000"),
  q("ch4-cgt-5", "cisi-icwim", "ch4", "4.3", "Capital Gains Taxation", "tax", "hard", "An investor holds shares that have grown 300% in value. If they sell all shares immediately vs holding for a market downturn, what is the tax planning implication?", ["Timing has no impact", "Selling now locks in gains and", "Waiting always improves taxes", "CGT is always zero"], 1, "Tax-loss harvesting and timing can optimize CGT outcomes based on portfolio needs."),
  q("ch4-interest-tax-1", "cisi-icwim", "ch4", "4.4", "Taxation of Interest Income", "tax", "easy", "How is interest income taxed?", ["No tax applies", "As regular income at", "Only on government bonds", "Capital gains rates only"], 1, "Interest income is taxed as ordinary income at the taxpayer's marginal rate."),
  q("ch4-interest-tax-2", "cisi-icwim", "ch4", "4.4", "Taxation of Interest Income", "tax", "easy", "The UK has a savings allowance for basic-rate taxpayers. What is its purpose?", ["Eliminate all interest tax", "Allow some interest income", "Tax interest immediately", "No such allowance exists"], 1, "Savings allowance permits some interest tax-free to encourage saving."),
  q("ch4-interest-tax-3", "cisi-icwim", "ch4", "4.4", "Taxation of Interest Income", "tax", "medium", "A basic-rate taxpayer receives £2,000 in interest. Tax on interest above the £1,000 savings allowance?", ["£0", "£200 (at 20% on £1,000)", "£400", "£2,000"], 1, "Tax = 20% × (£2,000 - £1,000) = 20% × £1,000 = £200"),
  q("ch4-interest-tax-4", "cisi-icwim", "ch4", "4.4", "Taxation of Interest Income", "tax", "medium", "Higher-rate taxpayers typically have a savings allowance of:", ["£1,000", "£500", "£0 (no allowance)", "£2,000"], 2, "Higher-rate taxpayers have no savings allowance; all interest above personal allowance is taxed."),
  q("ch4-interest-tax-5", "cisi-icwim", "ch4", "4.4", "Taxation of Interest Income", "tax", "hard", "An investor comparing a bond yielding 3% vs equities yielding 2% dividends. After-tax, which is preferable for a basic-rate taxpayer?", ["Bond always better", "Interest taxed at 20%", "Equities always better", "Tax rates identical"], 1, "Favorable dividend treatment can make lower-yielding dividends after-tax better than bonds."),
  q("ch4-isa-1", "cisi-icwim", "ch4", "4.5", "Tax-Advantaged Accounts", "tax", "easy", "What is an ISA (Individual Savings Account)?", ["Regular savings account with interest", "Tax-free savings wrapper for UK residents", "Government bond", "Pension account"], 1, "ISAs allow UK residents to hold stocks, bonds, and cash with tax-free growth."),
  q("ch4-isa-2", "cisi-icwim", "ch4", "4.5", "Tax-Advantaged Accounts", "tax", "easy", "In an ISA, are dividends and capital gains:", ["Taxed normally", "Tax-free", "Taxed at special rates", "Carried forward"], 1, "Income and gains in ISAs are completely tax-free."),
  q("ch4-isa-3", "cisi-icwim", "ch4", "4.5", "Tax-Advantaged Accounts", "tax", "medium", "The annual ISA subscription limit is £20,000. Can all be invested in cash ISAs?", ["Yes, no restrictions", "All in cash, none in stocks", "Max £5,000 per ISA type—can", "No limit if over 18"], 2, "ISA allowance of £20,000 can be split across cash, stocks, and innovation ISAs."),
  q("ch4-isa-4", "cisi-icwim", "ch4", "4.5", "Tax-Advantaged Accounts", "tax", "medium", "An investor puts £20,000 in a Stocks and Shares ISA earning 10% annually. After 10 years, tax on growth is:", ["20% on all gains", "£10,000 in taxes", "£0—all growth is tax-free", "Depends on dividend policy"], 2, "ISA wrapper means all growth is completely sheltered from income and capital gains tax."),
  q("ch4-isa-5", "cisi-icwim", "ch4", "4.5", "Tax-Advantaged Accounts", "tax", "hard", "How does ISA tax efficiency compare to a regular taxable account for a basic-rate taxpayer investing £20,000 annually with 5% returns?", ["ISA provides no benefit", "After 20 years, ISA saves", "Identical tax outcomes", "Taxable account is preferable"], 1, "ISA tax-free compounding saves significant taxes, especially at basic rate with income/dividends."),
  q("ch4-pension-tax-1", "cisi-icwim", "ch4", "4.6", "Pensions and Tax-Advantaged Retirement Savings", "tax", "easy", "What is the primary tax advantage of pension contributions?", ["No tax benefit", "Contributions get tax relief at your", "Pensions are taxed immediately", "Investment growth is taxed yearly"], 1, "Pension contributions reduce taxable income, providing tax relief at your marginal rate."),
  q("ch4-pension-tax-2", "cisi-icwim", "ch4", "4.6", "Pensions and Tax-Advantaged Retirement Savings", "tax", "easy", "A basic-rate taxpayer contributes £1,000 to a pension. What is the immediate tax benefit?", ["£0", "£200 (tax relief at 20%)", "£400", "£1,000"], 1, "Tax relief = 20% × £1,000 = £200"),
  q("ch4-pension-tax-3", "cisi-icwim", "ch4", "4.6", "Pensions and Tax-Advantaged Retirement Savings", "tax", "medium", "When withdrawn at retirement, pension income is:", ["Always tax-free", "Taxed as income at", "Taxed at flat 25%", "Never taxed"], 1, "Pension withdrawals in retirement are taxed as income."),
  q("ch4-pension-tax-4", "cisi-icwim", "ch4", "4.6", "Pensions and Tax-Advantaged Retirement Savings", "tax", "medium", "The tax relief on pension contributions mainly benefits which group?", ["All savers equally", "Higher earners at", "Only pensioners", "Nobody"], 1, "Marginal rate tax relief is most valuable for higher earners."),
  q("ch4-pension-tax-5", "cisi-icwim", "ch4", "4.6", "Pensions and Tax-Advantaged Retirement Savings", "tax", "hard", "A higher-rate taxpayer earning £100,000 with £50,000 pension contributions receives what total benefit?", ["20% relief only", "Additional rate relief bringing total to 45%", "No benefit", "Relief limited by £40,000 annual allowance"], 1, "Higher-rate taxpayer receives 40% relief + potential additional rate 45%, subject to contribution limits."),
  q("ch4-corporation-tax-1", "cisi-icwim", "ch4", "4.7", "Corporation and Business Taxation", "tax", "easy", "What is corporation tax?", ["Income tax on employees", "Tax on company profits", "Sales tax", "Personal wealth tax"], 1, "Corporation tax is levied on company profits."),
  q("ch4-corporation-tax-2", "cisi-icwim", "ch4", "4.7", "Corporation and Business Taxation", "tax", "easy", "UK corporation tax rate is approximately:", ["0%", "10%", "19-25% (varies by profit level)", "50%"], 2, "UK corporation tax rate is approximately 19% on small profits, 25% on larger profits."),
  q("ch4-corporation-tax-3", "cisi-icwim", "ch4", "4.7", "Corporation and Business Taxation", "tax", "medium", "Why do companies sometimes retain earnings instead of paying dividends?", ["No reason", "Retained earnings avoid double taxation (corp tax then dividend tax)", "Dividends are mandatory", "Retained earnings always cost more"], 0, "Retaining earnings avoids the 'double taxation' of corporation tax plus dividend tax."),
  q("ch4-corporation-tax-4", "cisi-icwim", "ch4", "4.7", "Corporation and Business Taxation", "tax", "medium", "A company earns £1,000,000 profit. After corporation tax at 25%, remaining profit is:", ["£750,000", "£1,000,000", "£250,000", "£500,000"], 0, "After-tax profit = £1,000,000 × (1 - 0.25) = £750,000"),
  q("ch4-corporation-tax-5", "cisi-icwim", "ch4", "4.7", "Corporation and Business Taxation", "tax", "hard", "Why might investors prefer high-growth companies that reinvest profits to dividend-paying companies?", ["Same tax outcome", "Reinvestment defers", "Dividends avoided", "Corporate tax eliminated"], 1, "Retained earnings defer taxation until sale, potentially at lower capital gains rates."),
  q("ch4-wealth-tax-1", "cisi-icwim", "ch4", "4.8", "Wealth and Estate Taxation", "tax", "easy", "What is inheritance tax?", ["Income tax", "Tax on assets", "Property tax only", "No such tax exists"], 1, "Inheritance tax (IHT) is charged on estates above a threshold when passed to heirs."),
  q("ch4-wealth-tax-2", "cisi-icwim", "ch4", "4.8", "Wealth and Estate Taxation", "tax", "easy", "The UK inheritance tax allowance (nil-rate band) is currently:", ["£0", "£100,000", "£325,000", "£500,000"], 2, "The nil-rate band is approximately £325,000 per person."),
  q("ch4-wealth-tax-3", "cisi-icwim", "ch4", "4.8", "Wealth and Estate Taxation", "tax", "medium", "An estate of £500,000 with a nil-rate band of £325,000. IHT at 40% on excess is:", ["£0", "£70,000", "£200,000", "£500,000"], 1, "IHT = 40% × (£500,000 - £325,000) = 40% × £175,000 = £70,000"),
  q("ch4-wealth-tax-4", "cisi-icwim", "ch4", "4.8", "Wealth and Estate Taxation", "tax", "medium", "Which assets typically qualify for IHT reliefs (business property, agricultural land)?", ["No reliefs available", "Can be passed free or at", "All assets taxed equally", "Only cash is relieved"], 1, "Business and agricultural property can qualify for 50-100% IHT relief."),
  q("ch4-wealth-tax-5", "cisi-icwim", "ch4", "4.8", "Wealth and Estate Taxation", "tax", "hard", "An investor gifts £5,000 annually to children. What is the IHT consequence?", ["Counted in estate immediately", "Potentially gifts out of estate if", "Always subject to 40% tax", "No IHT planning benefit"], 1, "Potentially exempt transfers (PETs) escape IHT if given 7+ years before death."),
  q("ch4-tax-planning-1", "cisi-icwim", "ch4", "4.9", "Tax Planning and Optimization", "tax", "easy", "What is tax planning?", ["Illegal tax evasion", "Arranging finances to", "Avoiding all investments", "Ignoring tax obligations"], 1, "Tax planning legally minimizes tax through strategy, different from illegal evasion."),
  q("ch4-tax-planning-2", "cisi-icwim", "ch4", "4.9", "Tax Planning and Optimization", "tax", "medium", "Tax-loss harvesting involves:", ["Hiding losses", "Selling losing", "Illegal manipulation", "Guaranteed returns"], 1, "Tax-loss harvesting offsets capital gains, reducing tax liability."),
  q("ch4-tax-planning-3", "cisi-icwim", "ch4", "4.9", "Tax Planning and Optimization", "tax", "medium", "An investor has £50,000 capital gains and £30,000 capital losses in the year. Taxable gain is:", ["£50,000", "£80,000", "£20,000", "£0"], 2, "Taxable gain = £50,000 - £30,000 = £20,000"),
  q("ch4-tax-planning-4", "cisi-icwim", "ch4", "4.9", "Tax Planning and Optimization", "tax", "medium", "Why might a higher-rate taxpayer convert a regular savings account to an ISA?", ["No benefit", "To shelter growth from", "Mandatory conversion", "Cannot convert"], 1, "ISA wrapper saves substantial tax for higher earners on interest and dividend income."),
  q("ch4-tax-planning-5", "cisi-icwim", "ch4", "4.9", "Tax Planning and Optimization", "tax", "hard", "A couple with combined income of £80,000 can each contribute £20,000 to ISAs. Why is this preferable to one person saving £40,000 outside an ISA?", ["No difference", "£40,000 outside ISA faces", "ISA limits are mandatory only", "Couple cannot both contribute"], 1, "Using both spouses' ISA allowances maximizes tax-sheltered savings."),
  q("ch5-bonds-features-1", "cisi-icwim", "ch5", "5.1", "Bond Characteristics and Types", "products", "easy", "What distinguishes a bond's coupon from its yield?", ["Coupon is the yield", "Coupon is the stated interest rate", "Yield is fixed at issuance", "No difference exists"], 1, "Coupon is contractual; yield varies with market price."),
  q("ch5-bonds-features-2", "cisi-icwim", "ch5", "5.1", "Bond Characteristics and Types", "products", "easy", "Government bonds are typically considered:", ["High-risk investments", "Safe because backed by", "Similar risk to equities", "Guaranteed profits"], 1, "Government bonds have low default risk backed by sovereign credit."),
  q("ch5-bonds-features-3", "cisi-icwim", "ch5", "5.1", "Bond Characteristics and Types", "products", "medium", "A bond's credit rating falls from AA to BBB. What is the likely impact on price?", ["Rises significantly", "Falls as investors", "No change", "Becomes zero"], 1, "Downgrade increases perceived risk, pushing yields up and prices down."),
  q("ch5-bonds-features-4", "cisi-icwim", "ch5", "5.1", "Bond Characteristics and Types", "products", "medium", "What is a floating-rate bond?", ["Bonds with fixed coupons", "Coupon adjusts based on reference rate", "Bonds issued by floating-rate banks", "No such bond type"], 1, "Floating-rate bonds protect investors from rising rates by adjusting coupons."),
  q("ch5-bonds-features-5", "cisi-icwim", "ch5", "5.1", "Bond Characteristics and Types", "products", "hard", "A convertible bond has a coupon lower than straight bonds. Why might investors accept this?", ["No compensation exists", "Potential upside conversion to", "Straight bonds are worse", "Convertibles always lose"], 1, "Conversion option is worth the coupon reduction."),
  q("ch5-equity-types-1", "cisi-icwim", "ch5", "5.2", "Equity Investments", "products", "easy", "What does a stock buyback do?", ["Increases shares outstanding", "Company repurchases its own", "Raises capital", "Pays dividends"], 1, "Buybacks reduce share count, potentially boosting EPS and market signals confidence."),
  q("ch5-equity-types-2", "cisi-icwim", "ch5", "5.2", "Equity Investments", "products", "easy", "Rights issue means:", ["No issuance occurs", "Existing shareholders", "Mandatory stock purchase", "Dividend payment"], 1, "Rights offerings give shareholders first right to buy new shares proportionally."),
  q("ch5-equity-types-3", "cisi-icwim", "ch5", "5.2", "Equity Investments", "products", "medium", "A company's P/E ratio is 25. This means:", ["Stock will definitely rise", "Market pays £25 for every £1 of", "Company is overvalued always", "Earnings are 25% of price"], 1, "P/E of 25 means market values company at 25x current earnings."),
  q("ch5-equity-types-4", "cisi-icwim", "ch5", "5.2", "Equity Investments", "products", "medium", "Earnings growth of 10% with a static P/E ratio increases share price by approximately:", ["0%", "10% (valuation", "20%", "Depends on sector"], 1, "With constant P/E, earnings growth directly translates to share price growth."),
  q("ch5-equity-types-5", "cisi-icwim", "ch5", "5.2", "Equity Investments", "products", "hard", "An equity with 5% dividend yield, 10% earnings growth, and payout ratio of 40% is likely:", ["Undervalued", "Mature company balancing dividends with reinvestment for growth", "In decline", "Growth stock"], 1, "High dividend with moderate growth suggests mature, stable firm."),
  q("ch5-funds-structure-1", "cisi-icwim", "ch5", "5.3", "Fund Structures and Characteristics", "products", "easy", "An open-ended fund means:", ["Fund is closed to new investors", "Investors can buy and redeem shares", "Shares trade only on exchange", "Fixed number of shares"], 1, "Open-ended funds issue and redeem shares continuously at NAV."),
  q("ch5-funds-structure-2", "cisi-icwim", "ch5", "5.3", "Fund Structures and Characteristics", "products", "easy", "What is Net Asset Value (NAV)?", ["The share price", "Total assets minus", "Fund manager salary", "Trading volume"], 1, "NAV = (Assets - Liabilities) / Shares outstanding."),
  q("ch5-funds-structure-3", "cisi-icwim", "ch5", "5.3", "Fund Structures and Characteristics", "products", "medium", "Why do closed-ended funds sometimes trade at a discount to NAV?", ["No reason", "Limited supply,", "Always at premium", "NAV is not relevant"], 1, "Closed-end fund premiums/discounts reflect sentiment and liquidity effects."),
  q("ch5-funds-structure-4", "cisi-icwim", "ch5", "5.3", "Fund Structures and Characteristics", "products", "medium", "An accumulation unit fund automatically:", ["Distributes income as cash", "Reinvests distributions,", "Reduces charges", "Has no returns"], 1, "Accumulation units reinvest distributions, creating compounding."),
  q("ch5-funds-structure-5", "cisi-icwim", "ch5", "5.3", "Fund Structures and Characteristics", "products", "hard", "A fund charges 0.5% OCF and underperforms by 0.3% annually after fees. Why might an investor still use it?", ["It outperforms", "Expected to outperform in future, and fees justified by active management value", "No rational reason", "Passive is identical"], 0, "Active funds may underperform in some periods but be worth the fee if expected outperformance exists."),
  q("ch5-hedge-funds-1", "cisi-icwim", "ch5", "5.4", "Alternative Funds", "products", "easy", "What defines a hedge fund operationally?", ["All funds are hedge funds", "Less regulated, employing", "Bonds only", "Only for beginners"], 1, "Hedge funds use alternatives strategies: shorting, leverage, derivatives."),
  q("ch5-hedge-funds-2", "cisi-icwim", "ch5", "5.4", "Alternative Funds", "products", "easy", "Hedge funds typically have:", ["Low fees", "High fees (2% mgmt, 20%", "No performance incentives", "Daily liquidity"], 1, "Hedge funds charge 2/20 fee structure with illiquidity restrictions."),
  q("ch5-hedge-funds-3", "cisi-icwim", "ch5", "5.4", "Alternative Funds", "products", "medium", "A hedge fund strategy that buys undervalued stocks and shorts overvalued ones aims for:", ["Beta exposure only", "Market-neutral", "Maximum volatility", "Index replication"], 1, "Long-short pairs trading targets market-neutral alpha generation."),
  q("ch5-hedge-funds-4", "cisi-icwim", "ch5", "5.4", "Alternative Funds", "products", "medium", "Why do hedge funds restrict redemptions with lock-up periods?", ["No reason", "To manage liquidity", "To increase fees", "No lock-ups exist"], 1, "Lock-ups protect fund from redemption stress during market stress."),
  q("ch5-hedge-funds-5", "cisi-icwim", "ch5", "5.4", "Alternative Funds", "products", "hard", "A hedge fund with 2% management fee and 20% performance fee on gains above a 5% hurdle returns 8%. Calculate fees on £100,000:", ["£2,000", "£2,600", "£3,200", "£4,000"], 1, "Mgmt: 2% × £100k = £2,000. Performance: 20% × (8%-5%) × £100k = £600. Total: £2,600"),
  q("ch5-derivatives-intro-1", "cisi-icwim", "ch5", "5.5", "Derivative Products Overview", "products", "easy", "What is the key difference between forwards and futures?", ["Identical products", "Futures are standardized", "Forwards more liquid", "No practical difference"], 1, "Futures exchanges standardize and clear; forwards are bilateral OTC."),
  q("ch5-derivatives-intro-2", "cisi-icwim", "ch5", "5.5", "Derivative Products Overview", "products", "easy", "What is an option?", ["Obligation to buy or sell", "Right, not obligation, to buy", "Forward contract only", "Always exercised"], 1, "Options give the right to transact at a set price, not an obligation."),
  q("ch5-derivatives-intro-3", "cisi-icwim", "ch5", "5.5", "Derivative Products Overview", "products", "medium", "A call option on FTSE 100 has a strike of 8,000. Current level is 8,100. The option is:", ["Out of the money", "In the money, worth at", "Worthless", "Worth exactly the strike"], 1, "In-the-money call: current price > strike, so intrinsic value = 8,100 - 8,000 = 100"),
  q("ch5-derivatives-intro-4", "cisi-icwim", "ch5", "5.5", "Derivative Products Overview", "products", "medium", "Put-call parity states that:", ["Calls always outperform puts", "Call and put prices are linked", "No relationship exists", "Puts have no value"], 1, "Put-call parity: C - P = S - PV(Strike)"),
  q("ch5-derivatives-intro-5", "cisi-icwim", "ch5", "5.5", "Derivative Products Overview", "products", "hard", "A collar strategy buys protective puts (cost £2) and sells call options (income £2), creating:", ["Pure cost strategy", "Zero-cost hedge limiting", "Unlimited profit potential", "No protection"], 1, "Collars combine puts and calls for low-cost protection with capped upside."),
  q("ch5-etfs-advantages-1", "cisi-icwim", "ch5", "5.6", "ETF Advantages and Strategies", "products", "easy", "ETF intraday trading allows investors to:", ["Only buy at open", "Trade at real-time", "Only sell at close", "Not trade at all"], 1, "ETFs trade on exchanges like stocks with real-time pricing."),
  q("ch5-etfs-advantages-2", "cisi-icwim", "ch5", "5.6", "ETF Advantages and Strategies", "products", "easy", "Factor-based ETFs typically target:", ["Random returns", "Specific character", "Large-cap only", "Technology only"], 1, "Factor ETFs tilt toward specific return drivers like value or momentum."),
  q("ch5-etfs-advantages-3", "cisi-icwim", "ch5", "5.6", "ETF Advantages and Strategies", "products", "medium", "Why do some investors use leveraged ETFs despite daily decay risk?", ["No decay exists", "Short-term tactical positioning for", "Always preferable to unleveraged", "Decay doesn't matter"], 1, "Leveraged ETFs suited for short-term trades where decay not yet material."),
  q("ch5-etfs-advantages-4", "cisi-icwim", "ch5", "5.6", "ETF Advantages and Strategies", "products", "medium", "Smart beta ETFs seek to:", ["Replicate market cap weighting exactly", "Optimize risk-adjusted returns through", "Guarantee outperformance", "Reduce fees to zero"], 1, "Smart beta uses systematic rules to improve risk-adjusted returns."),
  q("ch5-etfs-advantages-5", "cisi-icwim", "ch5", "5.6", "ETF Advantages and Strategies", "products", "hard", "An international equity ETF carries which currency risks?", ["None—currency is hedged", "Unhedged ETF exposes to FX", "Hedging increases risk", "Currency irrelevant to stocks"], 1, "Unhedged international ETFs benefit/suffer from currency moves; hedged neutralize FX."),
  q("ch5-structured-products-1", "cisi-icwim", "ch5", "5.7", "Structured Products", "products", "easy", "What is a structured product?", ["Regular mutual fund", "Customized derivative", "Simple equity", "Government bond only"], 1, "Structured products package bonds with derivatives for customized outcomes."),
  q("ch5-structured-products-2", "cisi-icwim", "ch5", "5.7", "Structured Products", "products", "easy", "A capital-protected note guarantees:", ["100% return always", "Return of principal at", "Losses are prevented", "No return possible"], 1, "Capital protection notes offer downside protection and conditional upside."),
  q("ch5-structured-products-3", "cisi-icwim", "ch5", "5.7", "Structured Products", "products", "medium", "An autocall note pays coupon if a barrier is not breached. The investor gets:", ["Guaranteed coupon", "Coupon if barrier not hit", "No risk", "Always money back"], 1, "Autocalls exchange lower coupons for barrier breach risk."),
  q("ch5-structured-products-4", "cisi-icwim", "ch5", "5.7", "Structured Products", "products", "medium", "Structured products expose investors to:", ["No risk", "Issuer credit risk,", "Guaranteed returns", "No complexity"], 1, "Structured product value depends on issuer solvency."),
  q("ch5-structured-products-5", "cisi-icwim", "ch5", "5.7", "Structured Products", "products", "hard", "Why might a structured product offer better returns than bonds despite lower credit rating?", ["No reason", "Embedded optionality", "Credit rating irrelevant", "Bonds always better"], 1, "Structured notes compensate for issuer risk through option payoffs."),
  q("ch5-insurance-linked-1", "cisi-icwim", "ch5", "5.8", "Insurance-Linked and Specialty Products", "products", "easy", "What is an insurance-linked security?", ["Traditional insurance policy", "Bond whose return is linked to", "Regular bond", "Equity only"], 1, "Insurance-linked bonds transfer insurance risk to capital markets."),
  q("ch5-insurance-linked-2", "cisi-icwim", "ch5", "5.8", "Insurance-Linked and Specialty Products", "products", "medium", "A catastrophe bond yields 6% but principal is lost if hurricane damage exceeds threshold. This is:", ["Risk-free", "Return compensates", "Guaranteed profit", "Insurance fund only"], 1, "Cat bonds compensate via high yield for probability of principal loss."),
  q("ch5-insurance-linked-3", "cisi-icwim", "ch5", "5.8", "Insurance-Linked and Specialty Products", "products", "medium", "What investment advantage do insurance-linked securities provide?", ["Identical to bonds", "Uncorrelated to equity/bond", "Perfect correlation", "No diversification benefit"], 1, "Insurance risks are uncorrelated to traditional assets, aiding diversification."),
  q("ch5-performance-fees-1", "cisi-icwim", "ch5", "5.9", "Fee Structures and Performance Metrics", "products", "easy", "Why do some funds charge performance fees?", ["To reduce returns", "To align manager", "Not allowed", "No real purpose"], 1, "Performance fees incentivize managers to outperform benchmarks."),
  q("ch5-performance-fees-2", "cisi-icwim", "ch5", "5.9", "Fee Structures and Performance Metrics", "products", "medium", "A high-water mark in performance fees means:", ["Highest fund price ever", "Performance fees only on gains", "Current performance only", "No accumulation"], 1, "High-water marks prevent fee rebates on recovery from losses."),
  q("ch5-performance-fees-3", "cisi-icwim", "ch5", "5.9", "Fee Structures and Performance Metrics", "products", "hard", "A fund loses 20%, then gains 20%. With a 20% performance fee and high-water mark, calculate investor gain if fee base is £100,000:", ["£0 gain + fees", "Fund value £96,000", "£100,000 exactly", "Negative"], 1, "After loss to £80,000, gain to £96,000 = £16,000 gain. Performance fee = 20% × £16,000 = £3,200. Net = £92,800"),
  q("ch6-allocation-1", "cisi-icwim", "ch6", "6.1", "Asset Allocation Framework", "portfolio", "easy", "Asset allocation means:", ["Buying all stocks", "Strategic division of", "Picking individual stocks", "No planning needed"], 1, "Asset allocation is the primary driver of portfolio returns and risk."),
  q("ch6-allocation-3", "cisi-icwim", "ch6", "6.1", "Asset Allocation Framework", "portfolio", "medium", "An aggressive portfolio might allocate:", ["100% bonds", "80% equities, 20% bonds", "0% equities", "Only cash"], 1, "Aggressive allocations emphasize growth assets (equities) with higher volatility."),
  q("ch6-allocation-4", "cisi-icwim", "ch6", "6.1", "Asset Allocation Framework", "portfolio", "medium", "A conservative allocation is appropriate for:", ["All investors equally", "Investors with short", "Only young people", "Only high earners"], 1, "Conservative allocations suit risk-averse, near-term investors."),
  q("ch6-allocation-5", "cisi-icwim", "ch6", "6.1", "Asset Allocation Framework", "portfolio", "hard", "Lipper-style analysis examines portfolio risk-adjusted returns by comparing to:", ["Random peers", "Peer funds with similar", "Only the market index", "Fund manager decisions"], 1, "Lipper peer comparison groups similar allocations to assess manager skill."),
  q("ch6-rebalancing-1", "cisi-icwim", "ch6", "6.2", "Rebalancing and Monitoring", "portfolio", "easy", "Rebalancing means:", ["No action taken", "Returning portfolio", "Selling everything", "Buying more of winners"], 1, "Rebalancing restores desired allocation after market moves."),
  q("ch6-rebalancing-2", "cisi-icwim", "ch6", "6.2", "Rebalancing and Monitoring", "portfolio", "easy", "Why rebalance periodically?", ["No reason", "To maintain risk profile and harvest", "Only in down markets", "Rebalancing reduces returns always"], 1, "Rebalancing disciplines investors to 'buy low, sell high' mechanically."),
  q("ch6-rebalancing-3", "cisi-icwim", "ch6", "6.2", "Rebalancing and Monitoring", "portfolio", "medium", "A portfolio target is 60% equities, 40% bonds. After strong equity returns, equities are 75%, bonds 25%. To rebalance, you:", ["Sell more equities", "Sell equities and", "Hold unchanged", "Sell all bonds"], 1, "Rebalancing sells overweight equities and buys underweight bonds."),
  q("ch6-rebalancing-4", "cisi-icwim", "ch6", "6.2", "Rebalancing and Monitoring", "portfolio", "medium", "Drift in asset allocation occurs when:", ["No changes made", "Market moves cause", "Deliberately sold", "Rebalancing prevents it"], 1, "Market movement naturally causes allocation drift without rebalancing."),
  q("ch6-rebalancing-5", "cisi-icwim", "ch6", "6.2", "Rebalancing and Monitoring", "portfolio", "hard", "Why might threshold-based rebalancing (e.g., when drift exceeds 5%) be preferable to calendar rebalancing?", ["No difference", "Threshold rebalancing avoids", "Calendar is always better", "Threshold increases costs"], 1, "Threshold rebalancing balances discipline with cost efficiency."),
  q("ch6-diversification-1", "cisi-icwim", "ch6", "6.3", "Diversification Principles", "portfolio", "easy", "What does diversification achieve?", ["No benefit exists", "Reduces portfolio risk by", "Guarantees returns", "Only possible with one asset"], 1, "Diversification lowers risk without proportionally reducing expected return."),
  q("ch6-diversification-2", "cisi-icwim", "ch6", "6.3", "Diversification Principles", "portfolio", "easy", "Which assets typically provide the best diversification?", ["All equities in one sector", "Assets with low or negative", "Identical assets", "Only bonds"], 1, "Low-correlation assets reduce portfolio volatility most effectively."),
  q("ch6-diversification-3", "cisi-icwim", "ch6", "6.3", "Diversification Principles", "portfolio", "medium", "A portfolio holds 30 equally-weighted stocks. Unsystematic risk is reduced but which risk remains?", ["All risk eliminated", "Systematic (market) risk remains", "Company-specific risk remains", "Inflation risk increases"], 1, "Diversification removes idiosyncratic risk but market risk persists."),
  q("ch6-diversification-4", "cisi-icwim", "ch6", "6.3", "Diversification Principles", "portfolio", "medium", "Over-diversification occurs when:", ["Too many assets held", "Adding assets with high", "Diversification cannot happen", "Few holdings"], 1, "Over-diversification wastes holdings on highly correlated assets."),
  q("ch6-diversification-5", "cisi-icwim", "ch6", "6.3", "Diversification Principles", "portfolio", "hard", "International diversification benefits emerge primarily from:", ["All countries identical", "Low correlation between developed market equities", "Currency movements alone", "Geographic diversification itself"], 0, "International diversification provides benefit from business cycle asynchrony, not pure geographic spread."),
  q("ch6-life-stages-1", "cisi-icwim", "ch6", "6.4", "Life-Stage and Goal-Based Planning", "portfolio", "easy", "A young investor with 30 years to retirement should typically have:", ["100% bonds", "Higher equity", "No investments", "Only cash"], 1, "Long horizons allow recovery from volatility, supporting equity tilts."),
  q("ch6-life-stages-2", "cisi-icwim", "ch6", "6.4", "Life-Stage and Goal-Based Planning", "portfolio", "easy", "In the retirement withdrawal phase, investors typically prefer:", ["Pure equities", "More conservative,", "Higher-risk alternatives", "No diversification"], 1, "Retirees emphasize income and capital preservation over growth."),
  q("ch6-life-stages-3", "cisi-icwim", "ch6", "6.4", "Life-Stage and Goal-Based Planning", "portfolio", "medium", "A 'glide path' in target-date funds means:", ["Constant allocation always", "Gradually shifting from growth", "Random allocation changes", "No rebalancing"], 1, "Glide paths systematically reduce equity exposure nearing retirement."),
  q("ch6-life-stages-4", "cisi-icwim", "ch6", "6.4", "Life-Stage and Goal-Based Planning", "portfolio", "medium", "A 55-year-old with £500,000 invested and £2,000 monthly spending needs has how many years of resources at planned withdrawal rate?", ["Approximately 21 years (6% annual withdrawal)", "Approximately 42 years (3% withdrawal rate) from", "Cannot calculate", "Infinite"], 1, "£500,000 / (£2,000 × 12) ≈ 21 years at 100% drawdown; sustainable is lower withdrawal rate"),
  q("ch6-life-stages-5", "cisi-icwim", "ch6", "6.4", "Life-Stage and Goal-Based Planning", "portfolio", "hard", "Why might required rate of return increase as retirement approaches?", ["No change needed", "Earlier savings and longer compound", "Retirement requires lower returns always", "Withdrawal rates irrelevant"], 1, "Shortfall risks may force higher-return-seeking allocations despite shorter time horizons."),
  q("ch6-risk-capacity-1", "cisi-icwim", "ch6", "6.5", "Risk Assessment and Capacity", "portfolio", "easy", "Risk capacity differs from risk tolerance in that:", ["Identical concepts", "Capacity is ability to", "Tolerance matters more", "No distinction exists"], 1, "Capacity and tolerance interact; both must be satisfied."),
  q("ch6-risk-capacity-2", "cisi-icwim", "ch6", "6.5", "Risk Assessment and Capacity", "portfolio", "easy", "Which investor has lower risk capacity?", ["20-year career ahead", "Retiree dependent on", "Young high earner", "Long time horizon"], 1, "Retirees have low capacity as they cannot earn to replace losses."),
  q("ch6-risk-capacity-3", "cisi-icwim", "ch6", "6.5", "Risk Assessment and Capacity", "portfolio", "medium", "An investor has high risk tolerance but low risk capacity (due to near-term needs). The portfolio should be:", ["100% equities", "Conservative despite preferences,", "Pure bonds", "Determined by tolerance alone"], 1, "Capacity constraints override tolerance; conservatism protects required funds."),
  q("ch6-risk-capacity-4", "cisi-icwim", "ch6", "6.5", "Risk Assessment and Capacity", "portfolio", "medium", "Which factor reduces risk capacity the most?", ["Higher salary", "Dependents and debt", "Young age", "Long time horizon"], 1, "Dependents and liabilities reduce ability to bear investment losses."),
  q("ch6-risk-capacity-5", "cisi-icwim", "ch6", "6.5", "Risk Assessment and Capacity", "portfolio", "hard", "An investor's required return is 6%, market conditions expect 5% returns, and volatility is 12%. This scenario suggests:", ["Allocate to growth assets to achieve target", "Risk capacity exceeds what markets can deliver", "Problem doesn't exist", "No investment needed"], 1, "When required return exceeds likely return, portfolio shortfall risk emerges."),
  q("ch6-constraints-1", "cisi-icwim", "ch6", "6.6", "Portfolio Constraints and Preferences", "portfolio", "easy", "Investment constraints include:", ["None exist", "Time horizon,", "Only taxes", "Only legal issues"], 1, "Multiple constraints shape feasible allocations."),
  q("ch6-constraints-2", "cisi-icwim", "ch6", "6.6", "Portfolio Constraints and Preferences", "portfolio", "medium", "A pension fund with a known liability in 10 years faces which constraint type?", ["No constraint", "Liability-driven", "Unlimited flexibility", "Can ignore liability"], 1, "Liabilities create matching requirements and time horizons."),
  q("ch6-constraints-3", "cisi-icwim", "ch6", "6.6", "Portfolio Constraints and Preferences", "portfolio", "medium", "Ethical constraints might exclude:", ["No exclusions needed", "Tobacco, weapons, or", "All industries equally", "No impact on returns"], 1, "ESG constraints exclude sectors based on values."),
  q("ch6-constraints-4", "cisi-icwim", "ch6", "6.6", "Portfolio Constraints and Preferences", "portfolio", "hard", "A high-net-worth individual with substantial real estate and concentrated stock position faces which constraint type?", ["No constraint", "Concentration and", "Can hold any allocation", "Geography irrelevant"], 1, "Existing large positions create constraints on adding similar assets."),
  q("ch7-client-profiling-1", "cisi-icwim", "ch7", "7.1", "Client Profiling and Fact-Finding", "advice", "easy", "Initial client meetings should establish:", ["Sales targets only", "Client objectives, constraints,", "Investment products immediately", "No information gathering needed"], 1, "Fact-finding precedes investment recommendations."),
  q("ch7-client-profiling-2", "cisi-icwim", "ch7", "7.1", "Client Profiling and Fact-Finding", "advice", "easy", "What is an IPS (Investment Policy Statement)?", ["A marketing document", "Written plan documenting", "Sales agreement only", "Legally unnecessary"], 1, "IPS formalizes investment strategy and provides governance framework."),
  q("ch7-client-profiling-3", "cisi-icwim", "ch7", "7.1", "Client Profiling and Fact-Finding", "advice", "medium", "A client states they need liquidity for a down payment in 6 months. What implication does this have for allocation?", ["No impact", "Funds for near-term use", "Must invest in equities", "Liquidity irrelevant"], 1, "Near-term needs require capital preservation and liquidity."),
  q("ch7-client-profiling-5", "cisi-icwim", "ch7", "7.1", "Client Profiling and Fact-Finding", "advice", "hard", "An adviser discovers a client has understated their risk tolerance. What should be the response?", ["Ignore and proceed", "Investigate further and potentially", "Change client information arbitrarily", "Use stated tolerance regardless"], 1, "Adviser fiduciary duty requires accurate risk assessment."),
  q("ch7-due-diligence-1", "cisi-icwim", "ch7", "7.2", "Investment Due Diligence", "advice", "easy", "Due diligence involves:", ["No research needed", "Thorough investigatio", "Marketing only", "Skipping analysis"], 1, "Due diligence precedes investment recommendations."),
  q("ch7-due-diligence-2", "cisi-icwim", "ch7", "7.2", "Investment Due Diligence", "advice", "easy", "What should fund due diligence examine?", ["Fund name only", "Strategy, performance", "Marketing materials alone", "No examination needed"], 1, "Comprehensive fund analysis informs suitability assessment."),
  q("ch7-due-diligence-3", "cisi-icwim", "ch7", "7.2", "Investment Due Diligence", "advice", "medium", "An adviser recommends a fund with excellent recent returns. What due diligence issue might be overlooked?", ["No issue exists", "Performance persistence: past", "All returns reliable", "Recent always equals future"], 1, "Survivorship bias and hot-hand effects inflate fund track records."),
  q("ch7-due-diligence-5", "cisi-icwim", "ch7", "7.2", "Investment Due Diligence", "advice", "hard", "An adviser recommends a manager who underperformed the index by 2% but claims active insight. Should the recommendation proceed?", ["Yes, always follow recommendations", "Investigate whether underperformance is", "Underperformance irrelevant", "Always use index"], 1, "Active managers must justify fees through alpha generation net of costs."),
  q("ch7-suitability-1", "cisi-icwim", "ch7", "7.3", "Suitability and Recommendation", "advice", "easy", "Investment suitability requires matching:", ["Manager preferences alone", "Client objectives,", "Market trends only", "Adviser sales targets"], 1, "Suitability is the core fiduciary obligation."),
  q("ch7-suitability-2", "cisi-icwim", "ch7", "7.3", "Suitability and Recommendation", "advice", "easy", "A 70-year-old retiree with low income is recommended 100% growth stocks. Is this suitable?", ["Yes if manager is skilled", "No—allocation conflicts with", "Age irrelevant", "All allocations equally suitable"], 1, "Aggressive allocation unsuitable for retirees with income dependence."),
  q("ch7-suitability-3", "cisi-icwim", "ch7", "7.3", "Suitability and Recommendation", "advice", "medium", "How is suitability documented?", ["No documentation required", "Written record of client profile,", "Verbal confirmation only", "Promises are sufficient"], 1, "Documentation protects both adviser and client."),
  q("ch7-suitability-4", "cisi-icwim", "ch7", "7.3", "Suitability and Recommendation", "advice", "medium", "A client's circumstances change after recommendation. What is the adviser's obligation?", ["No follow-up needed", "Reassess suitability", "Ignore changes", "Wait indefinitely"], 1, "Advisers must monitor and update as circumstances evolve."),
  q("ch7-suitability-5", "cisi-icwim", "ch7", "7.3", "Suitability and Recommendation", "advice", "hard", "An adviser recommends a suitable portfolio but the client demands a highly unsuitable allocation. Should the adviser:", ["Comply with client demand", "Refuse and document client", "Ignore the client", "Assume no liability"], 1, "Adviser must refuse unsuitable recommendations and document refusal."),
  q("ch7-implementation-1", "cisi-icwim", "ch7", "7.4", "Implementation and Execution", "advice", "easy", "Portfolio implementation involves:", ["No action needed", "Executing trades,", "Only recommending", "No execution needed"], 1, "Implementation requires operational execution."),
  q("ch7-implementation-2", "cisi-icwim", "ch7", "7.4", "Implementation and Execution", "advice", "easy", "Best execution obligations require:", ["Lowest prices always", "Prices, execution speed, and", "Adviser profit only", "No obligation exists"], 1, "Best execution is a fiduciary duty balancing multiple factors."),
  q("ch7-implementation-3", "cisi-icwim", "ch7", "7.4", "Implementation and Execution", "advice", "medium", "A large order is placed. Why might an adviser split execution across multiple venues?", ["No reason", "To minimize market", "To confuse clients", "Always use one venue"], 1, "Splitting orders reduces information leakage and market impact."),
  q("ch7-implementation-4", "cisi-icwim", "ch7", "7.4", "Implementation and Execution", "advice", "medium", "Custody of client assets should be:", ["Adviser-held always", "With independent custodian to", "Client-held without records", "Immaterial"], 1, "Independent custody protects client assets from adviser insolvency."),
  q("ch7-monitoring-1", "cisi-icwim", "ch7", "7.5", "Review and Monitoring", "advice", "easy", "Portfolio monitoring should examine:", ["Nothing, set and forget", "Performance vs benchmarks,", "Only positive performance", "No frequency needed"], 1, "Regular monitoring detects problems early."),
  q("ch7-monitoring-2", "cisi-icwim", "ch7", "7.5", "Review and Monitoring", "advice", "easy", "How frequently should portfolios be reviewed?", ["Never", "At least annually, and when", "Daily always", "Only when returns are negative"], 1, "Annual review is standard; quarterly or trigger-based may be needed."),
  q("ch7-monitoring-3", "cisi-icwim", "ch7", "7.5", "Review and Monitoring", "advice", "medium", "A fund underperforms for 3 years. Should it be replaced?", ["No, never replace", "Investigate reason: poor", "Always replace underperformers", "Ignore performance"], 1, "Replace decisions require root cause analysis, not blind performance chasing."),
  q("ch7-monitoring-4", "cisi-icwim", "ch7", "7.5", "Review and Monitoring", "advice", "medium", "If actual allocation drifts 10% from target, the adviser should:", ["Ignore drift", "Rebalance to restore", "Wait indefinitely", "Allow unlimited drift"], 1, "Rebalancing maintains strategy discipline."),
  q("ch7-monitoring-5", "cisi-icwim", "ch7", "7.5", "Review and Monitoring", "advice", "hard", "Why might an adviser intentionally avoid frequent rebalancing despite drift?", ["Laziness", "Transaction costs and tax", "Never avoid rebalancing", "No valid reason"], 1, "Threshold-based rebalancing balances discipline with cost."),
  q("ch8-returns-1", "cisi-icwim", "ch8", "8.1", "Calculating and Measuring Returns", "performance", "easy", "What is a time-weighted return?", ["Return based on investor's cash flow timing", "Return from portfolio management independent of", "Return equal to yield always", "No such measure exists"], 1, "TWR isolates manager performance from cash flow timing."),
  q("ch8-returns-2", "cisi-icwim", "ch8", "8.1", "Calculating and Measuring Returns", "performance", "easy", "What is a money-weighted return?", ["Identical to time-weighted", "Return accounting for when cash", "Return excluding cash flows", "No relevance"], 1, "MWR reflects investor's actual experience including cash flow timing."),
  q("ch8-returns-3", "cisi-icwim", "ch8", "8.1", "Calculating and Measuring Returns", "performance", "medium", "A portfolio returns 10% but the investor achieved 5% due to poor timing of deposits. Which return is manager performance?", ["5%", "10% (time-weighted", "Average of both", "Neither applies"], 1, "Time-weighted return isolates manager skill from investor cash flow timing."),
  q("ch8-returns-4", "cisi-icwim", "ch8", "8.1", "Calculating and Measuring Returns", "performance", "medium", "An investment grows from £100,000 to £121,000 in 2 years. Annual return is:", ["21%", "10% (√1.21 - 1)", "11%", "Cannot calculate"], 1, "Compound annual growth = (Ending / Beginning)^(1/n) - 1 = 1.21^0.5 - 1 ≈ 10%"),
  q("ch8-returns-5", "cisi-icwim", "ch8", "8.1", "Calculating and Measuring Returns", "performance", "hard", "An investor deposits £10,000 at start, £5,000 after 1 year, and portfolio reaches £18,000 after 2 years. Calculate approximate MWR:", ["33%", "Approximately", "50%", "Cannot calculate"], 1, "MWR calculation requires IRR method considering when each cash flow entered and grew."),
  q("ch8-benchmarking-1", "cisi-icwim", "ch8", "8.2", "Benchmarking and Relative Performance", "performance", "easy", "A benchmark is:", ["The manager's target", "A standard used to evaluate", "The highest possible return", "A marketing tool only"], 1, "Benchmarks enable relative performance assessment."),
  q("ch8-benchmarking-2", "cisi-icwim", "ch8", "8.2", "Benchmarking and Relative Performance", "performance", "easy", "For a global equity fund, an appropriate benchmark would be:", ["A bond index", "Global equity index", "UK small-cap only", "Cash rate"], 1, "Benchmark should match fund strategy and geography."),
  q("ch8-benchmarking-3", "cisi-icwim", "ch8", "8.2", "Benchmarking and Relative Performance", "performance", "medium", "A manager invests in small-cap value stocks but is benchmarked to the large-cap growth index. This is:", ["Appropriate", "Mismatched: benchmark", "Manager's best option", "Beneficial always"], 1, "Benchmark mismatch obscures manager skill assessment."),
  q("ch8-benchmarking-4", "cisi-icwim", "ch8", "8.2", "Benchmarking and Relative Performance", "performance", "medium", "A fund returns 8% vs 7% benchmark. The 1% excess is:", ["Manager's skill only", "Excess return (alpha) adjusted", "Pure manager outperformance", "Guaranteed to repeat"], 1, "Alpha must be assessed after fees and risk adjustments."),
  q("ch8-benchmarking-5", "cisi-icwim", "ch8", "8.2", "Benchmarking and Relative Performance", "performance", "hard", "A low-volatility equity fund has 5% volatility vs 12% benchmark volatility yet returns 6% vs 8% benchmark. Performance assessment:", ["Fund underperforms", "After risk adjustment:", "Benchmark is superior", "Cannot compare"], 1, "Risk-adjusted returns may justify lower absolute returns."),
  q("ch8-risk-metrics-1", "cisi-icwim", "ch8", "8.3", "Risk and Return Metrics", "performance", "easy", "Standard deviation measures:", ["Average return", "Volatility; the", "Correlation only", "Growth rate"], 1, "Standard deviation quantifies portfolio risk."),
  q("ch8-risk-metrics-2", "cisi-icwim", "ch8", "8.3", "Risk and Return Metrics", "performance", "easy", "What is the Sharpe ratio?", ["Total return only", "Return per unit of", "Only for bonds", "No practical use"], 1, "Sharpe ratio enables risk-adjusted return comparison."),
  q("ch8-risk-metrics-3", "cisi-icwim", "ch8", "8.3", "Risk and Return Metrics", "performance", "medium", "Portfolio A returns 8% with 10% volatility. Portfolio B returns 6% with 4% volatility. Risk-free rate is 2%. Sharpe ratios are:", ["A: 0.8, B: 1.0 (B", "A: 0.6, B: 0.4", "Identical", "Cannot calculate"], 0, "A: (8-2)/10 = 0.6. B: (6-2)/4 = 1.0. B has better risk-adjusted return."),
  q("ch8-risk-metrics-4", "cisi-icwim", "ch8", "8.3", "Risk and Return Metrics", "performance", "medium", "Information ratio measures:", ["Total information in market", "Manager's excess return", "Information costs only", "No use"], 1, "Information ratio assesses active management skill."),
  q("ch8-risk-metrics-5", "cisi-icwim", "ch8", "8.3", "Risk and Return Metrics", "performance", "hard", "A manager with 2% alpha and 4% tracking error has information ratio of:", ["0.5 (alpha/TE)", "0.5", "2%", "Cannot calculate"], 0, "IR = 2% / 4% = 0.5"),
  q("ch8-attribution-1", "cisi-icwim", "ch8", "8.4", "Performance Attribution", "performance", "easy", "Performance attribution analyzes:", ["Future predictions only", "Sources of return:", "Manager intentions only", "No analysis needed"], 1, "Attribution identifies which decisions drove performance."),
  q("ch8-attribution-2", "cisi-icwim", "ch8", "8.4", "Performance Attribution", "performance", "medium", "Allocation effect measures:", ["Individual security performance", "Return from over/underweighting", "Timing of individual trades", "Market direction only"], 1, "Allocation effect isolates asset class positioning decisions."),
  q("ch8-attribution-3", "cisi-icwim", "ch8", "8.4", "Performance Attribution", "performance", "medium", "Selection effect measures:", ["Market movement only", "Return from choosing", "Expense impact", "Rebalancing impact"], 1, "Selection effect reflects security-picking skill."),
  q("ch8-attribution-4", "cisi-icwim", "ch8", "8.4", "Performance Attribution", "performance", "hard", "A manager outweights equities 70% vs 60% benchmark and equities outperform bonds. This generates:", ["No return", "Positive allocation effect from", "Negative selection effect", "Only from security selection"], 1, "Correct asset class tilts generate allocation alpha."),
  q("ch8-style-drift-1", "cisi-icwim", "ch8", "8.5", "Style Drift and Consistency", "performance", "easy", "Style drift occurs when:", ["Manager sticks to declared strategy", "Manager changes investment style away", "Benchmark changes", "No such phenomenon"], 1, "Style drift creates expectations mismatches."),
  q("ch8-style-drift-2", "cisi-icwim", "ch8", "8.5", "Style Drift and Consistency", "performance", "medium", "A 'large-cap value' manager shifts to mid-cap growth to chase performance. This is:", ["Excellent strategy", "Style drift creating", "Beneficial always", "No problem"], 1, "Unexplained style drift breaches suitability and strategy consistency."),
  q("ch8-style-drift-3", "cisi-icwim", "ch8", "8.5", "Style Drift and Consistency", "performance", "hard", "How does style drift affect portfolio risk?", ["No change", "Can increase", "Always reduces risk", "Irrelevant to risk"], 1, "Unplanned style shifts can change portfolio risk characteristics."),
  q("ch1-asset-classes-final-1", "cisi-icwim", "ch1", "1.9", "Asset Class Comparison and Selection", "assets", "easy", "Which asset class typically has the lowest correlation with equities?", ["Other equities", "Government bonds", "Corporate bonds", "Commodities"], 1, "Government bonds typically show low or negative correlation with equities."),
  q("ch1-asset-classes-final-2", "cisi-icwim", "ch1", "1.9", "Asset Class Comparison and Selection", "assets", "medium", "Why might an investor overweight underperforming sectors?", ["To chase returns", "Value investing", "Market timing", "Never advisable"], 1, "Value investors seek undervalued sectors with upside potential."),
  q("ch1-asset-classes-final-3", "cisi-icwim", "ch1", "1.9", "Asset Class Comparison and Selection", "assets", "medium", "Cyclical sectors like construction peak when?", ["Always", "Early in economic", "During recessions", "Never peak"], 1, "Cyclicals peak as economy accelerates, before slowdown."),
  q("ch1-asset-classes-final-4", "cisi-icwim", "ch1", "1.9", "Asset Class Comparison and Selection", "assets", "hard", "A portfolio of 40% cyclical equities, 30% defensive equities, and 30% bonds is positioned for which economic scenario?", ["Certain recession", "Stable to expanding economy", "Guaranteed returns", "Only for young investors"], 1, "Balanced sector mix suits moderate growth expectations."),
  q("ch2-economic-indicators-1", "cisi-icwim", "ch2", "2.10", "Economic Indicators and Cycles", "macro", "easy", "Which indicator is considered a leading indicator?", ["Unemployment rate", "Consumer confidence or", "GDP reported quarterly", "Historical performance"], 1, "Leading indicators like confidence predict future economic turns."),
  q("ch2-economic-indicators-2", "cisi-icwim", "ch2", "2.10", "Economic Indicators and Cycles", "macro", "medium", "A spike in PMI (Purchasing Managers Index) above 50 signals:", ["Recession imminent", "Economic expansion", "No change in economy", "Always bearish"], 1, "PMI above 50 indicates expansion; below 50 indicates contraction."),
  q("ch2-economic-indicators-3", "cisi-icwim", "ch2", "2.10", "Economic Indicators and Cycles", "macro", "medium", "Consumer spending represents approximately what % of GDP?", ["25%", "60-70% in developed economies", "90%", "10%"], 1, "Consumer spending is the largest GDP component."),
  q("ch2-economic-indicators-4", "cisi-icwim", "ch2", "2.10", "Economic Indicators and Cycles", "macro", "hard", "When consumer confidence falls 10% but employment remains strong, what might this signal?", ["Certain recession", "Economic uncertainty despite jobs", "No change likely", "Strong growth guaranteed"], 1, "Confidence decline with job strength signals caution amid uncertainty."),
  q("ch3-price-discovery-1", "cisi-icwim", "ch3", "3.10", "Price Discovery and Market Efficiency", "products", "medium", "How do markets discover prices efficiently?", ["Centrally planned", "Through aggregation", "Government mandate", "No mechanism exists"], 1, "Market prices reflect aggregated information from many participants."),
  q("ch3-price-discovery-2", "cisi-icwim", "ch3", "3.10", "Price Discovery and Market Efficiency", "products", "medium", "What disrupts price discovery?", ["Transparency", "Information asymmetries,", "Efficient markets", "Regulatory oversight"], 1, "Information gaps and illiquidity prevent efficient price discovery."),
  q("ch3-price-discovery-3", "cisi-icwim", "ch3", "3.10", "Price Discovery and Market Efficiency", "products", "hard", "In emerging markets with less liquidity, how might price discovery differ from developed markets?", ["Identical always", "Prices may be less efficient", "Emerging are always more efficient", "No difference possible"], 1, "Lower liquidity reduces price discovery efficiency in emerging markets."),
  q("ch4-tax-efficiency-1", "cisi-icwim", "ch4", "4.10", "Tax-Efficient Investing Strategies", "tax", "medium", "Dividend stripping is a tax strategy that:", ["Gives all dividends away", "Is illegal; buying stocks", "Increases taxes", "Always allowed"], 1, "Dividend stripping is prohibited tax avoidance."),
  q("ch4-tax-efficiency-2", "cisi-icwim", "ch4", "4.10", "Tax-Efficient Investing Strategies", "tax", "medium", "Which account type minimizes tax for a trader making frequent moves?", ["Taxable account", "ISA eliminates capital", "Regular savings only", "No difference exists"], 1, "ISA is ideal for frequent traders avoiding tax on each sale."),
  q("ch4-tax-efficiency-3", "cisi-icwim", "ch4", "4.10", "Tax-Efficient Investing Strategies", "tax", "hard", "A couple with £30,000 combined taxable gains should:", ["Both report £15,000 each", "Use both personal", "One files all", "File nothing"], 1, "Spousal CGT allowances shelter up to £6,000 combined."),
  q("ch5-bond-math-1", "cisi-icwim", "ch5", "5.10", "Bond Valuation and Mathematics", "products", "medium", "A bond with 3 years to maturity, 5% coupon, and £1,000 par trades at £950. The yield to maturity is approximately:", ["5%", "Higher than 5% (bond trading at discount implies higher YTM)", "Negative", "4%"], 1, "Discount bonds have YTM > coupon rate."),
  q("ch5-bond-math-2", "cisi-icwim", "ch5", "5.10", "Bond Valuation and Mathematics", "products", "medium", "What is accrued interest?", ["Interest paid at maturity", "Interest earned since last", "Coupon payment only", "No such calculation"], 1, "Accrued interest is compensated when buying between coupon dates."),
  q("ch5-bond-math-3", "cisi-icwim", "ch5", "5.10", "Bond Valuation and Mathematics", "products", "hard", "A bond with semi-annual coupons of £25, par £1,000, YTM 6% (annual) has approximate value of:", ["£900", "Close to par or slightly below depending on time to maturity", "£1,100", "£500"], 1, "Coupon 5% annual equals YTM 6%, so bond trades near or slight discount to par."),
  q("ch6-mvo-1", "cisi-icwim", "ch6", "6.7", "Modern Portfolio Theory", "portfolio", "medium", "The efficient frontier represents:", ["All possible portfolios", "Portfolios maximizing", "Only risky assets", "No frontier exists"], 1, "Efficient frontier shows optimal return-risk combinations."),
  q("ch6-mvo-2", "cisi-icwim", "ch6", "6.7", "Modern Portfolio Theory", "portfolio", "medium", "Capital allocation line (CAL) shows:", ["Asset prices", "Risk-return", "Dividend rates", "Only bonds"], 1, "CAL connects risk-free rate to efficient frontier."),
  q("ch6-mvo-3", "cisi-icwim", "ch6", "6.7", "Modern Portfolio Theory", "portfolio", "hard", "Why do some investors criticize modern portfolio theory?", ["No criticism valid", "Assumes normal", "Theory is perfect", "No limitations exist"], 1, "MPT assumptions don't match reality of financial markets."),
  q("ch6-liability-matching-1", "cisi-icwim", "ch6", "6.8", "Liability-Driven Investment", "portfolio", "medium", "Liability-driven investment (LDI) prioritizes:", ["Maximizing returns only", "Matching asset duration", "No liability planning", "Random allocation"], 1, "LDI ensures assets cover liabilities when due."),
  q("ch6-liability-matching-2", "cisi-icwim", "ch6", "6.8", "Liability-Driven Investment", "portfolio", "medium", "A pension fund with £500m liabilities due in 10 years should hold:", ["100% equities", "Bonds and", "Pure cash", "Random mix"], 1, "Duration matching ensures liability funding."),
  q("ch6-liability-matching-3", "cisi-icwim", "ch6", "6.8", "Liability-Driven Investment", "portfolio", "hard", "What is the 'liability beta' or asset-liability risk?", ["Bond volatility", "Risk from assets", "Equity risk only", "No such concept"], 1, "Mismatched assets and liabilities create shortfall risk."),
  q("ch7-fiduciary-duty-1", "cisi-icwim", "ch7", "7.6", "Fiduciary Responsibilities", "advice", "easy", "A fiduciary duty requires advisers to:", ["Maximize their own profits", "Act in client's best", "Never follow regulations", "Put clients last"], 1, "Fiduciary duty prioritizes client interests above adviser profit."),
  q("ch7-fiduciary-duty-2", "cisi-icwim", "ch7", "7.6", "Fiduciary Responsibilities", "advice", "medium", "An adviser with a conflict of interest should:", ["Hide it", "Disclose conflict and manage it to serve client interests", "Quit", "Ignore it"], 1, "Disclosure and management of conflicts is fiduciary duty."),
  q("ch7-fiduciary-duty-3", "cisi-icwim", "ch7", "7.6", "Fiduciary Responsibilities", "advice", "hard", "If an adviser's recommended investment benefits the adviser financially, what must happen?", ["No action needed", "Conflict must be", "Recommend anyway", "Never disclose"], 1, "Adviser-beneficial recommendations require explicit conflict management."),
  q("ch7-compliance-1", "cisi-icwim", "ch7", "7.7", "Regulatory Compliance and Documentation", "advice", "medium", "FCA regulations require advisers to maintain documentation of:", ["Nothing", "Client profiles, recommendations, suitability, and review decisions", "Only returns", "No records"], 1, "Regulatory compliance requires comprehensive documentation."),
  q("ch7-compliance-2", "cisi-icwim", "ch7", "7.7", "Regulatory Compliance and Documentation", "advice", "medium", "What is a suitability letter?", ["Marketing material", "Written confirmation that", "Sales agreement only", "Not required"], 1, "Suitability letters document adviser compliance with duty to recommend suitable investments."),
  q("ch7-compliance-3", "cisi-icwim", "ch7", "7.7", "Regulatory Compliance and Documentation", "advice", "hard", "An adviser fails to document client risk tolerance assessment. The consequence is:", ["No harm", "Regulatory breach", "Client irrelevant", "Never discovered"], 1, "Documentation failures create regulatory and liability exposure."),
  q("ch8-factor-models-1", "cisi-icwim", "ch8", "8.6", "Factor Models and Performance Analysis", "performance", "medium", "CAPM uses beta to measure:", ["Bond performance", "Systematic risk", "Unsystematic risk", "Total volatility"], 1, "Beta measures market sensitivity (systematic risk)."),
  q("ch8-factor-models-2", "cisi-icwim", "ch8", "8.6", "Factor Models and Performance Analysis", "performance", "medium", "A stock with beta 1.5 in a market up 10% returns approximately:", ["10%", "15% (1.5 × 10%)", "5%", "20%"], 1, "Approximate return = Risk-free rate + Beta × (Market return - Risk-free rate)"),
  q("ch8-factor-models-3", "cisi-icwim", "ch8", "8.6", "Factor Models and Performance Analysis", "performance", "hard", "Fama-French factor models add factors to CAPM like:", ["Only market beta", "Size, value, and", "No additional factors", "Only bonds"], 1, "Multi-factor models explain additional return sources."),
  q("ch8-factor-models-4", "cisi-icwim", "ch8", "8.6", "Factor Models and Performance Analysis", "performance", "hard", "Why might a factor model show positive returns to 'value' factor?", ["No reason", "Value stocks (low P/B,", "Growth always dominates", "Factors don't matter"], 1, "Value premium is a documented historical anomaly."),
  q("ch8-performance-persistence-1", "cisi-icwim", "ch8", "8.7", "Performance Persistence and Manager Skill", "performance", "medium", "Does past fund outperformance predict future outperformance?", ["Always", "Weakly or not at all", "Never predictive", "Guaranteed to repeat"], 1, "Performance persistence is weak; past returns don't reliably predict future."),
  q("ch8-performance-persistence-2", "cisi-icwim", "ch8", "8.7", "Performance Persistence and Manager Skill", "performance", "medium", "A 5-year fund track record is:", ["Useless", "More reliable than 1-year", "Perfect for prediction", "Only measure"], 1, "Longer track records aid assessment but don't guarantee future performance."),
  q("ch8-performance-persistence-3", "cisi-icwim", "ch8", "8.7", "Performance Persistence and Manager Skill", "performance", "hard", "Why is distinguishing skill from luck difficult in fund performance?", ["No difficulty", "Random chance alone can", "Skill always obvious", "No luck involved"], 1, "Statistical testing requires extensive data to distinguish skill from chance."),
  q("ch8-total-return-1", "cisi-icwim", "ch8", "8.8", "Total Return Calculation and Income", "performance", "easy", "Total return includes:", ["Price changes only", "Capital gains plus", "Income only", "No income"], 1, "Total return combines price appreciation and income."),
  q("ch8-total-return-2", "cisi-icwim", "ch8", "8.8", "Total Return Calculation and Income", "performance", "medium", "A stock bought at £100 pays £3 dividend and sells at £110. Total return is:", ["10%", "13% (£10 gain + £3 dividend / £100)", "3%", "£13"], 1, "Total return = (£10 + £3) / £100 = 13%"),
  q("ch8-total-return-3", "cisi-icwim", "ch8", "8.8", "Total Return Calculation and Income", "performance", "hard", "For yield-focused portfolios, how does reinvestment of income affect returns?", ["No effect", "Reinvestment compounds", "Reduces returns", "Income not reinvested"], 1, "Dividend reinvestment creates compounding advantage."),
  q("ch8-currency-effects-1", "cisi-icwim", "ch8", "8.9", "Currency and International Effects", "performance", "medium", "An international fund returns 5% in foreign currency. GBP appreciates 3%. GBP investor return is:", ["5%", "Approximately 2%", "8%", "Cannot calculate"], 1, "Strong home currency reduces foreign investment returns."),
  q("ch8-currency-effects-2", "cisi-icwim", "ch8", "8.9", "Currency and International Effects", "performance", "medium", "Currency-hedged international funds aim to:", ["Maximize FX gains", "Isolate stock", "Increase FX exposure", "No hedging needed"], 1, "Hedges remove currency noise to isolate stock returns."),
  q("ch8-currency-effects-3", "cisi-icwim", "ch8", "8.9", "Currency and International Effects", "performance", "hard", "Should a UK investor hedge international currency exposure?", ["Always", "Depends on time", "Never hedge", "Hedging always costs"], 1, "Currency hedging has costs and benefits depending on circumstances."),
  q("ch8-benchmark-selection-1", "cisi-icwim", "ch8", "8.10", "Benchmark Selection and Construction", "performance", "medium", "A good benchmark should be:", ["Hard to outperform", "Investable,", "Impossible to beat", "Manager-chosen"], 1, "Benchmarks must be appropriate and achievable."),
  q("ch8-benchmark-selection-2", "cisi-icwim", "ch8", "8.10", "Benchmark Selection and Construction", "performance", "medium", "If a fund regularly beats its benchmark, this suggests:", ["Luck only", "Manager skill or benchmark", "No outperformance possible", "Benchmark too easy"], 1, "Consistent outperformance may indicate skill or benchmark issues."),
  q("ch8-benchmark-selection-3", "cisi-icwim", "ch8", "8.10", "Benchmark Selection and Construction", "performance", "hard", "Changing benchmarks after poor performance would be:", ["Acceptable always", "Inappropriate; appears to be", "Standard practice", "Beneficial to investors"], 1, "Benchmark changes undermine performance credibility."),
  q("ch1-sector-rotation-1", "cisi-icwim", "ch1", "1.10", "Sector Investment and Selection", "assets", "medium", "Technology sector typically exhibits which return characteristic?", ["Stable dividends", "Higher growth potential but", "Defensive characteristics", "No returns"], 1, "Tech sector offers growth but with high cyclicality and volatility."),
  q("ch1-sector-rotation-2", "cisi-icwim", "ch1", "1.10", "Sector Investment and Selection", "assets", "medium", "Healthcare sector is considered defensive because:", ["No growth exists", "Demand is inelastic", "Only equities rise", "Not defensive"], 1, "Healthcare demand persists through economic cycles."),
  q("ch1-sector-rotation-3", "cisi-icwim", "ch1", "1.10", "Sector Investment and Selection", "assets", "hard", "A sector with high beta 1.8, P/E 25, and dividend yield 0.5% is likely:", ["Mature defensive", "Growth sector with", "Stable income", "No characteristics"], 1, "High beta/P/E with low yield signals growth expectations."),
  q("ch2-labor-market-1", "cisi-icwim", "ch2", "2.11", "Labor Market Dynamics", "macro", "medium", "When unemployment falls rapidly, the Fed typically:", ["Ignores labor market", "Raises rates to prevent", "Cuts rates", "No action"], 1, "Tight labor markets push inflation upward, prompting rate increases."),
  q("ch2-labor-market-2", "cisi-icwim", "ch2", "2.11", "Labor Market Dynamics", "macro", "medium", "Wage growth acceleration of 5% annually suggests:", ["No inflation concern", "Potential wage-price", "Always deflationary", "Immaterial"], 1, "Rapid wage growth drives inflation in tight labor markets."),
  q("ch2-labor-market-3", "cisi-icwim", "ch2", "2.11", "Labor Market Dynamics", "macro", "hard", "Why might jobless claims rising be a positive market signal?", ["Never positive", "Rising claims", "Always negative", "No market impact"], 1, "Rising claims suggest cooling economy and lower inflation pressure."),
  q("ch3-order-types-1", "cisi-icwim", "ch3", "3.11", "Trading Orders and Execution", "products", "medium", "A limit order to buy at £50 will:", ["Execute at any price", "Only execute if price", "Guaranteed execution", "Never execute"], 1, "Limit orders set maximum purchase price."),
  q("ch3-order-types-2", "cisi-icwim", "ch3", "3.11", "Trading Orders and Execution", "products", "medium", "A stop-loss order at £45 on a £50 stock serves to:", ["Guarantee profits", "Automatically sell if", "Guarantee sale price", "Prevent selling"], 1, "Stop-loss orders protect against large losses."),
  q("ch3-order-types-3", "cisi-icwim", "ch3", "3.11", "Trading Orders and Execution", "products", "hard", "What is the slippage risk in stop-loss orders?", ["No risk", "Prices may gap below", "Always get stop price", "No gap risk"], 1, "During fast market moves, stops execute far from intended levels."),
  q("ch4-isa-advanced-1", "cisi-icwim", "ch4", "4.11", "ISA Strategies and Advanced Tax Planning", "tax", "medium", "Stocks and Shares ISA allows investments in:", ["Savings only", "Equities, bonds, funds,", "Only government bonds", "Cash only"], 1, "Stocks and Shares ISAs accept broad investment types."),
  q("ch4-isa-advanced-2", "cisi-icwim", "ch4", "4.11", "ISA Strategies and Advanced Tax Planning", "tax", "medium", "Can ISA allowance be carried forward if unused?", ["Yes, indefinitely", "No; unused allowance is lost", "Partial carry-forward only", "Always carries forward"], 1, "Unused ISA allowance cannot be carried forward to next year."),
  q("ch4-isa-advanced-3", "cisi-icwim", "ch4", "4.11", "ISA Strategies and Advanced Tax Planning", "tax", "hard", "For a couple where one earns £100,000 and one earns £20,000, optimal strategy is:", ["Both use same allocation", "Higher earner prioritizes", "Both split equally", "Income irrelevant"], 1, "Higher earners benefit more from ISA tax shelter."),
  q("ch5-warrant-1", "cisi-icwim", "ch5", "5.11", "Derivative Structures", "products", "medium", "A warrant is:", ["Always exercised", "Option-like", "Bond only", "No such product"], 1, "Warrants are equity call options issued by companies."),
  q("ch5-warrant-2", "cisi-icwim", "ch5", "5.11", "Derivative Structures", "products", "medium", "Why do companies issue warrants?", ["No reason", "To raise capital or incentivize", "Only to dilute shareholders", "No purpose"], 1, "Warrants provide financing and acquisition incentives."),
  q("ch5-warrant-3", "cisi-icwim", "ch5", "5.11", "Derivative Structures", "products", "hard", "Warrants typically trade at premium to intrinsic value because:", ["No reason", "Contain embedded", "No time value", "Intrinsic value only"], 1, "Warrant leverage and optionality command time value premium."),
  q("ch6-smart-beta-1", "cisi-icwim", "ch6", "6.9", "Factor-Based and Smart Beta Strategies", "portfolio", "medium", "Momentum factor selects stocks that:", ["Have fallen most", "Have risen", "Always decline", "Randomly chosen"], 1, "Momentum effect: past winners tend to outperform in near term."),
  q("ch6-smart-beta-2", "cisi-icwim", "ch6", "6.9", "Factor-Based and Smart Beta Strategies", "portfolio", "medium", "Quality factor emphasizes companies with:", ["Low returns only", "High profitability,", "Declining earnings", "No quality"], 1, "Quality factors favor fundamental strength and stability."),
  q("ch6-smart-beta-3", "cisi-icwim", "ch6", "6.9", "Factor-Based and Smart Beta Strategies", "portfolio", "hard", "Why might combining multiple factors (value + momentum + quality) improve returns?", ["No improvement possible", "Different factors work in", "One factor sufficient", "No benefit"], 1, "Multi-factor diversification reduces reliance on any single driver."),
  q("ch7-suitability-constraints-1", "cisi-icwim", "ch7", "7.8", "Suitability and Client Circumstances", "advice", "medium", "An elderly client with £5,000 monthly spending says they want aggressive growth. Adviser should:", ["Recommend aggressive allocation", "Explain suitability concerns", "Comply with wishes", "Refuse all recommendations"], 1, "Income needs override growth preferences in suitability."),
  q("ch7-suitability-constraints-2", "cisi-icwim", "ch7", "7.8", "Suitability and Client Circumstances", "advice", "medium", "A client unsuitable for recommended investment due to low capacity requires:", ["No documentation", "Adviser refusal and", "Adviser compliance", "Client authority"], 1, "Advisers must protect unsuitable clients through refusal and documentation."),
  q("ch7-suitability-constraints-3", "cisi-icwim", "ch7", "7.8", "Suitability and Client Circumstances", "advice", "hard", "What liability exposure exists if adviser ignores capacity constraints and recommends unsuitable allocation?", ["None", "Significant:", "Protected always", "Client fault"], 1, "Unsuitable recommendations expose advisers to substantial liability."),
  q("ch8-downside-capture-1", "cisi-icwim", "ch8", "8.11", "Risk-Adjusted Performance Metrics", "performance", "medium", "Downside capture ratio measures:", ["Total return ratio", "Portfolio return in", "Upside only", "No relevance"], 1, "Downside capture shows how much loss the fund suffers vs benchmark in declines."),
  q("ch8-downside-capture-2", "cisi-icwim", "ch8", "8.11", "Risk-Adjusted Performance Metrics", "performance", "medium", "A fund with 70% downside capture and 120% upside capture profile:", ["Underperforms always", "Asymmetric: protects in", "No difference from index", "Poor strategy"], 1, "Favorable asymmetry: less downside, more upside is ideal."),
  q("ch8-downside-capture-3", "cisi-icwim", "ch8", "8.11", "Risk-Adjusted Performance Metrics", "performance", "hard", "Why might downside capture matter more to retirees than upside capture?", ["Upside always matters most", "Retirees need to preserve", "Retirees need growth", "No difference"], 1, "Capital preservation priority shifts focus to downside protection."),
  q("ch8-sortino-ratio-1", "cisi-icwim", "ch8", "8.12", "Advanced Return Metrics", "performance", "medium", "Sortino ratio differs from Sharpe ratio by using:", ["Total volatility", "Downside volatility", "Upside only", "No difference"], 1, "Sortino penalizes only downside risk, ignoring beneficial volatility."),
  q("ch8-sortino-ratio-2", "cisi-icwim", "ch8", "8.12", "Advanced Return Metrics", "performance", "medium", "A defensive fund with low downside vol but high upside vol shows:", ["Poor Sortino ratio", "High Sortino ratio:", "Low returns", "No information"], 1, "Sortino favors asymmetric return profiles with upside volatility."),
  q("ch8-sortino-ratio-3", "cisi-icwim", "ch8", "8.12", "Advanced Return Metrics", "performance", "hard", "For a hedge fund with 2% return and 4% downside deviation, Sortino ratio (using 1% risk-free) is:", ["Cannot calculate", "0.25 (2-1)/4", "0.5", "1.0"], 0, "Sortino = (2% - 1%) / 4% = 0.25"),
  q("ch1-liquidity-premium-1", "cisi-icwim", "ch1", "1.11", "Liquidity and Asset Pricing", "assets", "medium", "Illiquid assets typically command:", ["No premium", "Liquidity", "Lower returns", "No effect"], 1, "Illiquidity increases required return to compensate investors."),
  q("ch1-liquidity-premium-2", "cisi-icwim", "ch1", "1.11", "Liquidity and Asset Pricing", "assets", "medium", "During financial crises, liquidity premiums typically:", ["Decrease", "Spike as investors flee illiquid assets", "Disappear", "Irrelevant"], 1, "Crisis liquidity evaporation creates large valuation gaps."),
  q("ch1-liquidity-premium-3", "cisi-icwim", "ch1", "1.11", "Liquidity and Asset Pricing", "assets", "hard", "An illiquid small-cap bond yielding 6% vs 4% for similar liquid bond is pricing:", ["No difference", "2% liquidity", "Premium on liquid", "Immaterial"], 1, "Illiquid bond spread compensates for restricted selling."),
  q("ch2-policy-rates-1", "cisi-icwim", "ch2", "2.12", "Central Bank Policy Transmission", "macro", "medium", "When central bank raises policy rates, the transmission to markets occurs via:", ["Direct investor action only", "Increased borrowing costs for", "Immediate market drop", "No transmission"], 1, "Rate transmission works through credit costs and real economy."),
  q("ch2-policy-rates-2", "cisi-icwim", "ch2", "2.12", "Central Bank Policy Transmission", "macro", "medium", "Policy transmission operates most slowly in:", ["Equities market", "Real economy", "Bond markets", "No lag"], 1, "Real economy effects lag months as spending plans adjust."),
  q("ch2-policy-rates-3", "cisi-icwim", "ch2", "2.12", "Central Bank Policy Transmission", "macro", "hard", "Why might QE transmission fail during financial crisis?", ["QE always works", "Banks hoard money", "QE never works", "Always transmits"], 1, "Credit channel breaks when banks/borrowers deleveraging despite cheap money."),
  q("ch3-price-impact-1", "cisi-icwim", "ch3", "3.12", "Market Impact and Transaction Costs", "products", "medium", "Price impact refers to:", ["Broker commissions only", "Price movement from trade", "Bid-ask only", "Commissions only"], 1, "Large trades move prices through information and inventory effects."),
  q("ch3-price-impact-2", "cisi-icwim", "ch3", "3.12", "Market Impact and Transaction Costs", "products", "medium", "Permanent vs temporary price impact: permanent is caused by:", ["Market makers", "Information", "No difference", "Both equal"], 1, "Permanent impact reflects information leakage from large trades."),
  q("ch3-price-impact-3", "cisi-icwim", "ch3", "3.12", "Market Impact and Transaction Costs", "products", "hard", "How might an institutional investor minimize price impact?", ["Never trade", "Use algorithmic execution", "All at once maximizes", "Trade visible"], 1, "Smart execution minimizes market impact through timing and venue choice."),
  q("ch4-capital-loss-1", "cisi-icwim", "ch4", "4.12", "Capital Losses and Tax Harvesting", "tax", "medium", "Capital losses can be used to:", ["Reduce income taxes", "Offset capital gains", "Create refunds", "Not used"], 1, "Losses offset gains, reducing tax liability."),
  q("ch4-capital-loss-2", "cisi-icwim", "ch4", "4.12", "Capital Losses and Tax Harvesting", "tax", "medium", "Wash-sale rules prevent:", ["All losses being claimed", "Claiming losses then", "Loss carryforwards", "No restrictions"], 1, "Wash sales disallow losses on quick repurchases."),
  q("ch4-capital-loss-3", "cisi-icwim", "ch4", "4.12", "Capital Losses and Tax Harvesting", "tax", "hard", "An investor with £50,000 gains and £40,000 losses has net gain of £10,000. Unused losses are:", ["Lost", "Can carry forward", "Must be used now", "Expire"], 1, "Unused losses carry forward to offset future gains."),
  q("ch5-putable-bonds-1", "cisi-icwim", "ch5", "5.12", "Embedded Options in Bonds", "products", "medium", "A putable bond gives the bondholder the right to:", ["No choice", "Sell the bond back", "Always hold", "Forced redemption"], 1, "Puts protect bondholders by allowing sale back if rates rise."),
  q("ch5-callable-bonds-1", "cisi-icwim", "ch5", "5.12", "Embedded Options in Bonds", "products", "medium", "A callable bond gives the issuer the right to:", ["No choice", "Redeem bond", "No redemption", "Forced hold"], 1, "Calls allow issuers to refinance when rates fall."),
  q("ch5-callable-bonds-2", "cisi-icwim", "ch5", "5.12", "Embedded Options in Bonds", "products", "hard", "Callable bonds typically have higher yields than straight bonds because:", ["No reason", "Call option reduces", "Lower yields", "Options irrelevant"], 1, "Call option is valuable to issuer, reducing bondholder value."),
  q("ch6-core-satellite-1", "cisi-icwim", "ch6", "6.10", "Portfolio Construction Strategies", "portfolio", "medium", "Core-satellite strategy uses:", ["All passive", "Core passive holdings plus", "All active", "No structure"], 1, "Core-satellite balances low-cost beta with active alpha."),
  q("ch6-core-satellite-2", "cisi-icwim", "ch6", "6.10", "Portfolio Construction Strategies", "portfolio", "medium", "The core typically represents what % of portfolio?", ["10%", "70-80% in low-cost index", "20%", "50%"], 1, "Core is typically 70-80% of portfolio to reduce fees."),
  q("ch6-core-satellite-3", "cisi-icwim", "ch6", "6.10", "Portfolio Construction Strategies", "portfolio", "hard", "Why might core-satellite appeal to advisers?", ["No reason", "Clients receive", "Not beneficial", "Adds cost"], 1, "Core-satellite offers balanced approach to active/passive debate."),
  q("ch7-best-interest-1", "cisi-icwim", "ch7", "7.9", "Duty of Best Interest", "advice", "medium", "Best interest duty requires advisers to:", ["Maximize adviser revenue", "Recommend based on client", "Ignore conflict", "Follow client demand always"], 1, "Best interest duty supersedes adviser profit motive."),
  q("reg-ch1-sector-1", "cisi-reg", "reg-ch1", "1.1", "Government Economic Policy", "sector", "easy",
    "Which of the following is the primary aim of the UK government's economic policy?",
    ["Achieving sustainable growth in national", "Minimizing all taxation", "Eliminating all unemployment instantly", "Maximizing corporate profits"], 0,
    "Sustainable growth in national income per head is the key aim of government economic policy. This refers to real income growth (corrected for inflation) that avoids major boom-bust cycles. The other options either misstate the aim or are unrealistic objectives."
  ),
  q("reg-ch1-sector-2", "cisi-reg", "reg-ch1", "1.1", "Government Economic Policy", "sector", "easy",
    "What is the Bank of England's inflation target based on the Consumer Prices Index (CPI)?",
    ["2.5% with 2% tolerance band", "1% with 0.5% tolerance band", "2% with 1% tolerance band", "3% with 1.5% tolerance band"], 2,
    "The BoE's inflation target is 2% based on CPI, staying within 1% of this target. This is set by the Monetary Policy Committee. The 2% target provides price stability while accommodating growth."
  ),
  q("reg-ch1-sector-3", "cisi-reg", "reg-ch1", "1.1", "Fiscal Policy", "sector", "medium",
    "Which action represents a contractionary fiscal stance by the government?",
    ["Increasing spending while reducing taxes", "Reducing both taxes and spending equally", "Collecting more in taxes without increasing spending", "Increasing both taxes and spending equally"], 2,
    "Collecting more in taxes without increasing spending represents contractionary fiscal policy—it removes money from the economy. The balanced budget multiplier occurs when taxes and spending rise equally, creating inflationary effects."
  ),
  q("reg-ch1-sector-4", "cisi-reg", "reg-ch1", "1.2", "Monetary Policy", "sector", "medium",
    "How does the Bank of England's Monetary Policy Committee influence interest rates in the UK economy?",
    ["By controlling deposit interest rates only", "By direct government mandate each week", "By deciding the short-term benchmark repo rate (base rate)", "By setting maximum lending rates for all banks"], 2,
    "The MPC sets the BoE base rate (repo rate), which commercial banks adjust their own rates in response to. This is the primary transmission mechanism for monetary policy. Individual banks remain free to set their own rates based on the base rate."
  ),
  q("reg-ch1-sector-5", "cisi-reg", "reg-ch1", "1.2", "Monetary Policy", "sector", "easy",
    "How often does the Monetary Policy Committee meet to set interest rates?",
    ["Eight times per year", "Monthly — an alternative choice", "Four times per year", "Quarterly — an alternative choice"], 0,
    "The MPC meets eight times per year (approximately monthly) to set the interest rate. Before each meeting, there is a pre-MPC meeting one week prior where the committee receives briefings on economic data."
  ),
  q("reg-ch1-sector-6", "cisi-reg", "reg-ch1", "1.3", "Primary Markets", "sector", "easy",
    "What is the primary market in financial services?",
    ["The market where existing shares are traded between investors", "The overnight lending market between banks", "The market for new issues of shares or other securities", "The market for government bonds only"], 2,
    "The primary market is where new securities (shares and debt instruments) are issued for the first time. Companies and governments raise capital here. The secondary market is where existing securities trade between investors."
  ),
  q("reg-ch1-sector-7", "cisi-reg", "reg-ch1", "1.3", "Primary and Secondary Markets", "sector", "medium",
    "When shares are sold on the secondary market, who receives the proceeds from the sale?",
    ["Both the investor and the company equally", "The investor selling the shares, not the company", "The stock exchange", "The company that originally issued the shares"], 1,
    "On the secondary market, cash flows from buyer to seller (the investor selling)—not to the company. The company only raises new money when securities are issued on the primary market. Secondary markets provide liquidity for investors."
  ),
  q("reg-ch1-sector-8", "cisi-reg", "reg-ch1", "1.3", "London Stock Exchange", "sector", "easy",
    "What role does the London Stock Exchange play in primary markets?",
    ["It regulates all financial institutions — an alternative choice", "It acts as the primary market where", "It only facilitates trading of existing shares — an alternative choice", "It sets interest rates for the UK — a financial measure"], 1,
    "The LSE acts as a primary market venue where companies list shares to reach initial investors and raise capital. It also functions as a secondary market for trading existing shares."
  ),
  q("reg-ch1-sector-9", "cisi-reg", "reg-ch1", "1.4", "Balance of Payments", "sector", "medium",
    "A persistent current account deficit in the balance of payments could potentially lead to which outcome?",
    ["Pressure to raise interest rates to prevent", "Automatic improvement in currency strength — an alternative choice", "Elimination of all international trade — an alternative choice", "A guaranteed reduction in inflation — an economic condition"], 0,
    "A persistent current account deficit may be financed by rising overseas debt, creating economic concerns that could prompt interest rate rises. This attracts foreign investment to sterling assets and strengthens the currency. However, this conflicts with the need for a weaker currency to boost exports."
  ),
  q("reg-ch1-sector-10", "cisi-reg", "reg-ch1", "1.4", "Exchange Rates", "sector", "easy",
    "How can allowing sterling to fall in value help correct a current account deficit?",
    ["It automatically increases government spending", "It eliminates the need for interest rate policy", "It makes foreign goods more expensive and UK goods cheaper abroad", "It reduces the need for government regulation"], 2,
    "A weaker sterling makes UK exports cheaper for overseas buyers (boosting exports) and foreign imports more expensive for UK buyers (reducing imports). Both effects help restore balance on the current account."
  ),
  q("reg-ch1-sector-11", "cisi-reg", "reg-ch1", "1.5", "Economic Cycles", "sector", "medium",
    "What is the relationship between inflation and business cycles in the UK economy?",
    ["Inflation has no connection to business cycle phases", "Inflation only occurs during recessions — a phase of the economic cycle", "Deflation is the normal state of modern economies", "Higher inflation can result from the economy overheating during boom periods"], 3,
    "During boom periods, increased demand can drive inflation. The government and BoE must balance growth with price stability. The 2% inflation target helps maintain stable business cycles."
  ),
  q("reg-ch1-sector-12", "cisi-reg", "reg-ch1", "1.5", "Stock Market Cycles", "sector", "medium",
    "Which factor is likely to influence stock market performance during a recession phase?",
    ["Government guarantees of returns", "Increased demand for equities", "Declining corporate profits and investor confidence", "Rising interest rates alone — a financial measure"], 2,
    "During recessions, corporate profits typically decline, unemployment rises, and investor confidence weakens—all pressuring stock prices downward. This distinguishes recession from other economic phases."
  ),
  q("reg-ch1-sector-13", "cisi-reg", "reg-ch1", "1.5", "Business Cycles", "sector", "easy",
    "In which phase of the business cycle does inflation typically accelerate?",
    ["The depression phase", "The boom phase", "The recession phase", "The early recovery phase"], 1,
    "Inflation typically accelerates during the boom phase when demand is high, capacity is stretched, and labour becomes scarce, pushing up wages and prices."
  ),
  q("reg-ch1-sector-14", "cisi-reg", "reg-ch1", "1.6", "Global Trends", "sector", "medium",
    "Which of the following is an example of how globalisation affects financial services firms?",
    ["Elimination of currency risk — an alternative choice", "Guaranteed protection from all international competition", "Increased competition from international firms", "Reduced need for regulatory compliance — an alternative choice"], 2,
    "Globalisation creates competition from international firms while also creating opportunities to expand overseas. Financial services firms must adapt to global standards and manage currency and geopolitical risks."
  ),
  q("reg-ch1-sector-15", "cisi-reg", "reg-ch1", "1.6", "UK Financial Services Sector", "sector", "hard",
    "How do banks and building societies differ in their primary funding sources?",
    ["Banks cannot accept customer deposits — an alternative choice", "Building societies do not require external funding — an alternative choice", "Banks rely primarily on wholesale markets", "Both use identical funding methods — an alternative choice"], 2,
    "Traditional building societies are mutuals funded by member savings. Banks access diverse funding including deposits, wholesale markets, and capital markets. This distinction affects their business models and risk profiles."
  ),
  q("reg-ch1-sector-16", "cisi-reg", "reg-ch1", "1.1", "Fiscal Policy and Growth", "sector", "hard",
    "What is the balanced budget multiplier effect in fiscal policy?",
    ["When the budget must always be balanced — an alternative choice", "When government raises taxes and spending", "When government eliminates all spending — an alternative choice", "When government cuts both taxes and spending — an alternative choice"], 1,
    "The balanced budget multiplier: taxpayers save some increased taxes, but government spends all increased revenues. Net effect = increased spending and aggregate demand, creating inflationary pressure."
  ),
  q("reg-ch1-sector-17", "cisi-reg", "reg-ch1", "1.2", "Interest Rate Transmission", "sector", "medium",
    "Which outcome might result from the Monetary Policy Committee raising the base rate?",
    ["Stock markets always rise — an alternative choice", "Commercial banks typically raise their", "Government spending automatically increases — an alternative choice", "No effect on commercial bank rates — a financial measure"], 1,
    "Higher base rates signal tighter monetary policy. Commercial banks respond by raising their mortgage, loan, and deposit rates. This reduces borrowing and spending, helping control inflation."
  ),
  q("reg-ch1-sector-18", "cisi-reg", "reg-ch1", "1.3", "Securities and Capital Raising", "sector", "easy",
    "Which of these represents the main purpose of a primary market?",
    ["To enable issuers to raise new capital", "To set market prices only", "To facilitate exchange controls", "To eliminate investment risk"], 0,
    "Primary markets enable organisations to raise new capital by issuing new securities. Secondary markets provide trading mechanisms for existing securities."
  ),
  q("reg-ch1-sector-19", "cisi-reg", "reg-ch1", "1.4", "Balance of Payments Accounts", "sector", "easy",
    "Which accounts make up the balance of payments measurement?",
    ["Current account and", "Only private sector accounts", "Only the current account", "Only government accounts"], 0,
    "Balance of payments comprises the current account (goods/services trade, income flows) and the capital/financial account (investment flows and transfers)."
  ),
  q("reg-ch1-sector-20", "cisi-reg", "reg-ch1", "1.5", "GDP and Economic Growth", "sector", "medium",
    "Why do governments prioritize sustainable growth over rapid short-term growth?",
    ["It avoids boom-bust cycles that create unemployment and inflation", "Sustainable growth eliminates all recessions", "Rapid growth is always preferable — an alternative choice", "It allows governments to avoid monetary policy"], 0,
    "Sustainable growth in real income avoids disruptive boom-bust cycles. Rapid growth may be inflationary and unsustainable, leading to busts. The goal is steady upward trend growth."
  ),
  q("reg-ch1-sector-21", "cisi-reg", "reg-ch1", "1.1", "Taxation and Regulation", "sector", "easy",
    "Which two mechanisms does government use to influence financial services firms?",
    ["Subsidies and penalties — an alternative choice", "Taxation (direct and indirect) and regulation (legal", "Taxation only — an alternative choice", "Regulation only — an alternative choice"], 1,
    "Government uses fiscal policy (taxation) and regulatory frameworks to influence firms. Direct tax affects profits; indirect tax affects consumer prices; regulation sets rules of conduct."
  ),
  q("reg-ch1-sector-22", "cisi-reg", "reg-ch1", "1.2", "Monetary Policy Goals", "sector", "medium",
    "Which inflation outcome would indicate the BoE has successfully met its inflation target?",
    ["CPI at 0% — an alternative choice", "CPI as high as possible — an alternative choice", "CPI running at 2% (within a 1% tolerance band)", "CPI below 0.5% — an alternative choice"], 2,
    "The target is 2% CPI ±1% (1-3% range). This balances the goals of price stability and economic growth. Inflation outside this band suggests policy needs adjustment."
  ),
  q("reg-ch1-sector-23", "cisi-reg", "reg-ch1", "1.3", "Investment Products", "sector", "easy",
    "What is the fundamental difference between shares and loan instruments?",
    ["Shares represent ownership; loan instruments represent debt obligation", "Shares are debt; loans are ownership — an alternative choice", "Both represent the same thing — an alternative choice", "Only shares can be traded — an alternative choice"], 0,
    "Shares (equity) represent ownership stakes with potential dividends. Loan instruments (bonds, debentures, gilts) represent debt with fixed coupon payments and repayment obligations."
  ),
  q("reg-ch1-sector-24", "cisi-reg", "reg-ch1", "1.4", "Competitiveness and Exchange Rates", "sector", "medium",
    "How does a strong pound sterling affect UK exporters and importers?",
    ["It has no effect on trade competitiveness — an alternative choice", "It always benefits both exporters and importers equally", "It makes UK exports less competitive abroad and imports cheaper domestically", "It automatically increases trade volumes — an alternative choice"], 2,
    "A strong pound makes UK goods more expensive for foreign buyers (hurting exporters) and foreign goods cheaper for UK buyers (helping importers). A weak pound has opposite effects."
  ),
  q("reg-ch1-sector-25", "cisi-reg", "reg-ch1", "1.5", "Economic Indicators", "sector", "easy",
    "What does GDP primarily measure?",
    ["The total market value of goods and services produced in a country", "The government's tax revenue only — an alternative choice", "Stock market performance — an alternative choice", "Population growth rate — a financial measure"], 0,
    "GDP measures total economic output. GNP measures income earned by nationals. Both indicate economic size and growth. Real GDP adjusts for inflation."
  ),
  q("reg-ch1-sector-26", "cisi-reg", "reg-ch1", "1.6", "Financial Services Globalisation", "sector", "medium",
    "How does globalisation in financial services create risk for firms?",
    ["Reduced competition — an alternative choice", "Elimination of regulatory risk — an alternative choice", "Exposure to international market volatility and geopolitical events", "Guaranteed profits — an alternative choice"], 2,
    "Global operations expose firms to foreign currency risk, political risk, different regulatory regimes, and international market shocks. These risks must be actively managed."
  ),
  q("reg-ch1-sector-27", "cisi-reg", "reg-ch1", "1.1", "Government Intervention", "sector", "medium",
    "Which fiscal action would be most appropriate to address high unemployment during a recession?",
    ["Reduce government spending — an alternative choice", "Raise taxes immediately — an alternative choice", "Increase government spending on", "Eliminate regulation — an alternative choice"], 2,
    "Counter-cyclical fiscal policy during recessions: increase spending on projects (employment) and training to reduce unemployment. This is opposed to contractionary policy that worsens recessions."
  ),
  q("reg-ch1-sector-28", "cisi-reg", "reg-ch1", "1.2", "Monetary Policy Tools", "sector", "easy",
    "What is the main tool of monetary policy used by the Bank of England?",
    ["Controlling government spending directly", "Adjusting the base interest rate", "Setting exchange rates", "Regulating company dividends"], 1,
    "Base rate (repo rate) is the primary tool. Changes ripple through the economy by affecting commercial rates, inflation expectations, employment, and growth."
  ),
  q("reg-ch1-sector-29", "cisi-reg", "reg-ch1", "1.3", "Market Function", "sector", "medium",
    "What role do secondary markets play in the economy?",
    ["Provide liquidity for investors to exit holdings and allow price discovery", "Eliminate the need for regulation — an alternative choice", "Prevent any trading activity — an alternative choice", "Only facilitate government bonds — an alternative choice"], 0,
    "Secondary markets provide essential liquidity—investors can exit positions, sellers can access buyers, and continuous trading determines fair market prices. This increases confidence in primary markets."
  ),
  q("reg-ch1-sector-30", "cisi-reg", "reg-ch1", "1.4", "Balance of Payments Implications", "sector", "hard",
    "Why might persistent current account deficits create a policy dilemma for government?",
    ["Interest rates have no effect on exchange rates — a financial measure", "Raising interest rates to prevent capital outflows", "There is no dilemma—all solutions are straightforward — an alternative choice", "Current account deficits are always beneficial — an alternative choice"], 1,
    "Policy dilemma: (1) allow weak sterling to improve competitiveness but risk capital flight, OR (2) raise rates to attract foreign investment (preventing flight) but strong currency hurts exports. Each solution creates problems elsewhere."
  ),
  q("reg-ch1-sector-31", "cisi-reg", "reg-ch1", "1.5", "Growth Quality", "sector", "hard",
    "Why is sustainable growth considered superior to rapid boom-and-bust growth patterns?",
    ["Rapid growth is always better — an alternative choice", "Only governments benefit from sustainable growth — an alternative choice", "Sustainability eliminates all economic problems — an alternative choice", "Avoids systemic unemployment and inflation"], 3,
    "Boom-bust cycles create unemployment (busts) and inflation (booms), reducing prosperity and confidence. Sustainable upward trend growth maximises long-term real income and economic welfare."
  ),
  q("reg-ch1-sector-32", "cisi-reg", "reg-ch1", "1.6", "City of London Importance", "sector", "medium",
    "What role does the City of London play in global financial services?",
    ["Major international financial center", "Only domestic financial services hub — an alternative choice", "Regulates all European banks — an alternative choice", "Handles government welfare payments — an alternative choice"], 0,
    "The City is a global financial hub hosting international banks, investment firms, trading venues, and capital markets. It's crucial to the UK economy and a global financial centre."
  ),
  q("reg-ch1-sector-33", "cisi-reg", "reg-ch1", "1.1", "Economic Policy Conflict", "sector", "hard",
    "When government uses fiscal policy to boost employment, what secondary effect must it manage?",
    ["Guaranteed deflation — an economic condition", "No secondary effects occur — an alternative choice", "Elimination of unemployment — an alternative choice", "Potential inflation from increased aggregate demand"], 3,
    "Expansionary fiscal policy to create jobs increases aggregate demand, potentially causing inflation. Government must balance employment and inflation goals—they can conflict short-term."
  ),
  q("reg-ch1-sector-34", "cisi-reg", "reg-ch1", "1.2", "MPC Pre-Meeting Process", "sector", "easy",
    "What is the purpose of the Bank of England's pre-MPC meeting?",
    ["To prevent public knowledge of decisions — an alternative choice", "To eliminate the need for formal meetings — an alternative choice", "To announce rate decisions — a financial measure", "To brief the committee on economic data"], 3,
    "The pre-MPC meeting (one week before formal meeting) allows the nine committee members to review latest economic data, BoE analysis, and business intelligence before voting."
  ),
  q("reg-ch1-sector-35", "cisi-reg", "reg-ch1", "1.3", "Equity vs Debt Financing", "sector", "medium",
    "Why might a company choose debt financing over equity financing in primary markets?",
    ["Debt has no obligations — an alternative choice", "Debt keeps voting control with", "Companies cannot choose financing methods — an alternative choice", "Equity always has lower costs — an alternative choice"], 1,
    "Debt (bonds, loans) doesn't dilute ownership; interest payments are tax-deductible. Equity (shares) dilutes ownership but provides no repayment obligation. Companies weigh these trade-offs."
  ),
  q("reg-ch2-consumer-1", "cisi-reg", "reg-ch2", "2.1", "Consumer Financial Risks", "consumer", "easy",
    "Which of the following is a primary financial risk faced by UK consumers?",
    ["Risk of unemployment or income loss", "Elimination of all financial risk", "Guaranteed pension income", "Risk of guaranteed investment returns"], 0,
    "Key consumer risks: unemployment/income loss, inflation eroding savings, health/incapacity expenses, inadequate retirement income. Professional advisers help consumers manage these risks."
  ),
  q("reg-ch2-consumer-2", "cisi-reg", "reg-ch2", "2.1", "Budgeting and Finances", "consumer", "easy",
    "What is the primary purpose of a personal budget in financial planning?",
    ["To show how income and expenditure", "To avoid all financial planning — an alternative choice", "To guarantee future wealth — an alternative choice", "To eliminate all spending — an alternative choice"], 0,
    "Budgeting reveals whether income exceeds outgoings and identifies where money goes. This allows realistic financial planning and identification of savings potential."
  ),
  q("reg-ch2-consumer-3", "cisi-reg", "reg-ch2", "2.1", "Debt Management", "consumer", "medium",
    "How does unsecured debt differ from secured debt in terms of risk to consumers?",
    ["Secured debt is backed by assets that can be", "Both are identical in all respects — an alternative choice", "Secured debt has no consequences for non-payment — an alternative choice", "Unsecured debt is always cheaper — an alternative choice"], 0,
    "Secured debt (mortgages, car loans) involves specific assets at risk of repossession. Unsecured debt (credit cards, personal loans) depends only on creditworthiness. Secured typically has lower interest rates."
  ),
  q("reg-ch2-consumer-4", "cisi-reg", "reg-ch2", "2.2", "Housing Finance", "consumer", "medium",
    "Why is a residential property typically the largest financial commitment for UK consumers?",
    ["Most people rent rather than buy — an alternative choice", "Housing costs are minimal — an alternative choice", "High cost relative to income requires long-term mortgage financing", "Houses are investment-free assets — an alternative choice"], 2,
    "Housing is typically the biggest expense. Mortgages (secured on the property) are long-term (25-30 years) and represent significant ongoing financial commitments. Proper planning is essential."
  ),
  q("reg-ch2-consumer-5", "cisi-reg", "reg-ch2", "2.2", "Life Changes and Finances", "consumer", "easy",
    "How does marriage or civil partnership typically affect personal financial planning?",
    ["Eliminates the need for financial planning — an alternative choice", "Always reduces financial complexity — an alternative choice", "Requires consolidation of finances, joint budgeting, and decisions about shared assets", "Has no financial implications — an alternative choice"], 2,
    "Major life changes (marriage, children, home purchase) require financial restructuring: joint decisions on budgeting, debt, insurance, investments, and long-term goals."
  ),
  q("reg-ch2-consumer-6", "cisi-reg", "reg-ch2", "2.2", "Retirement Planning", "consumer", "medium",
    "What is the primary risk that retirement planning addresses?",
    ["Life expectancy is fixed and predictable", "Everyone has automatic pension income", "Retirement is risk-free — an alternative choice", "Risk that saved funds may not last as long as the person lives"], 3,
    "Longevity risk: people don't know when they'll die, so they may outlive savings. Pension contributions and investment strategy must account for potentially 30+ year retirement."
  ),
  q("reg-ch2-consumer-7", "cisi-reg", "reg-ch2", "2.2", "Emergency Savings", "consumer", "easy",
    "Why is maintaining an emergency fund considered important in personal financial planning?",
    ["All unexpected expenses can be prevented — an alternative choice", "Emergency funds should never be touched — an alternative choice", "To cover unexpected expenses (redundancy, illness) without derailing long-term plans", "Emergency funds are unnecessary — an alternative choice"], 2,
    "Emergency savings (typically 3-6 months expenses in accessible accounts) protect consumers from disruption to financial plans when unexpected events occur."
  ),
  q("reg-ch2-consumer-8", "cisi-reg", "reg-ch2", "2.2", "Insurance Needs", "consumer", "medium",
    "What type of insurance protects a consumer if they cannot work due to illness?",
    ["Insurance cannot cover income loss", "Life insurance only", "Income protection (disability) insurance", "Car insurance covers this"], 2,
    "Income protection insurance replaces lost income if illness/injury prevents work. This addresses the risk of income loss before retirement. Critical for people dependent on earned income."
  ),
  q("reg-ch2-consumer-9", "cisi-reg", "reg-ch2", "2.3", "Risk and Return Relationship", "consumer", "easy",
    "What is the fundamental relationship between investment risk and potential return?",
    ["Returns are guaranteed regardless of risk", "Low-risk investments always offer high returns", "Higher risk investments typically offer higher potential returns", "Risk and return are unrelated — a financial measure"], 2,
    "Risk-return trade-off: investors accepting more volatility (risk) expect higher long-term returns. Low-risk investments (bonds, savings) offer lower returns; equities offer higher returns but more volatility."
  ),
  q("reg-ch2-consumer-10", "cisi-reg", "reg-ch2", "2.3", "Investment Time Horizon", "consumer", "medium",
    "How should an investor's time horizon affect their investment strategy?",
    ["Shorter horizons should use riskier investments — an alternative choice", "Longer horizons can tolerate more volatility; shorter horizons need more stability", "All investors should use identical strategies — a financial measure", "Time horizon has no effect on strategy — a financial measure"], 1,
    "Longer time horizons (years/decades) allow weathering of market downturns, supporting equity holdings. Shorter horizons need stable capital preservation, favouring bonds and cash."
  ),
  q("reg-ch2-consumer-11", "cisi-reg", "reg-ch2", "2.1", "Financial Capability", "consumer", "medium",
    "What does financial capability mean in the context of consumer protection?",
    ["The consumer's knowledge and ability to manage their financial affairs responsibly", "Government guarantee of profits — an alternative choice", "Elimination of all financial decisions — an alternative choice", "Only wealthy people have financial capability — an alternative choice"], 0,
    "Financial capability refers to knowledge, skills, and confidence to make sound financial decisions. Low financial capability consumers need more protection and clearer information."
  ),
  q("reg-ch2-consumer-12", "cisi-reg", "reg-ch2", "2.1", "Vulnerable Customers", "consumer", "medium",
    "Which characteristics might identify a consumer as vulnerable for financial services purposes?",
    ["Only young people are vulnerable — an alternative choice", "Vulnerability cannot be identified — an alternative choice", "Everyone is vulnerable — an alternative choice", "Age, disability, lack of financial"], 3,
    "Vulnerable consumers may have reduced ability to protect their interests: elderly, disabled, low financial literacy, non-English speakers, isolated individuals. Firms must take extra care."
  ),
  q("reg-ch2-consumer-13", "cisi-reg", "reg-ch2", "2.2", "Spousal Financial Planning", "consumer", "easy",
    "Why might spouses have different financial planning needs?",
    ["All spouses are financially identical — an alternative choice", "Different earning capacities", "Couples should never discuss finances — an alternative choice", "Financial planning is irrelevant for couples — an alternative choice"], 1,
    "Even in partnerships, individuals face different risks and opportunities (different job security, life expectancy, responsibilities). Planning should address individual circumstances within partnership context."
  ),
  q("reg-ch2-consumer-14", "cisi-reg", "reg-ch2", "2.3", "Inflation Impact", "consumer", "medium",
    "How does inflation affect the purchasing power of consumer savings?",
    ["Inflation erodes purchasing power—savings buy less in the future", "Inflation increases purchasing power — an economic condition", "Inflation has no effect on savings — an economic condition", "Inflation guarantees returns — an economic condition"], 0,
    "If inflation is 3% and savings earn 1%, real return is -2%. Savers lose purchasing power. Planning must account for inflation to maintain real wealth."
  ),
  q("reg-ch2-consumer-15", "cisi-reg", "reg-ch2", "2.3", "Diversification Principle", "consumer", "easy",
    "What is the key principle behind diversification in investment portfolios?",
    ["Diversification increases risk — an alternative choice", "Spreading investments across", "Risk cannot be reduced — an alternative choice", "Investing all money in one high-risk asset — an alternative choice"], 1,
    "Diversification reduces idiosyncratic risk (company-specific risk) while retaining market returns. Different assets perform differently under various economic conditions."
  ),
  q("reg-ch2-consumer-16", "cisi-reg", "reg-ch2", "2.1", "Needs vs Wants", "consumer", "hard",
    "How should financial advisers distinguish between consumer financial needs and wants?",
    ["No distinction exists — an alternative choice", "Advisers cannot influence this decision — an alternative choice", "All consumer desires should be treated as needs — an alternative choice", "Needs are essential (housing, food, security); wants are desirable but non-essential"], 3,
    "Understanding this distinction helps prioritize: essential needs (emergency funds, protection, core retirement) before funding wants. Budgeting works backwards from income."
  ),
  q("reg-ch2-consumer-17", "cisi-reg", "reg-ch2", "2.2", "Dependants and Protection", "consumer", "medium",
    "Why do consumers with dependants need life insurance?",
    ["Only wealthy people need life insurance — an alternative choice", "Life insurance is unnecessary if you have dependants — an alternative choice", "Dependants have no financial needs — an alternative choice", "To replace lost income and protect dependants' standard of living if insured person dies"], 3,
    "Dependants (children, spouses) rely on the insured's income. Life insurance replaces that income if death occurs, protecting their future (education, housing, living expenses)."
  ),
  q("reg-ch2-consumer-18", "cisi-reg", "reg-ch2", "2.3", "Savings vs Investment", "consumer", "easy",
    "What is the key difference between savings and investments in consumer planning?",
    ["Investments are always risk-free — an alternative choice", "Savings prioritize capital safety and liquidity", "Savings and investments are identical — an alternative choice", "Savings offer guaranteed returns — a financial measure"], 1,
    "Savings (bank accounts, bonds) preserve capital and offer liquidity but lower returns. Investments (equities, funds) seek growth but accept volatility. Both serve different purposes."
  ),
  q("reg-ch2-consumer-19", "cisi-reg", "reg-ch2", "2.1", "Financial Advice", "consumer", "medium",
    "What is the primary objective of regulated financial advice for consumers?",
    ["To eliminate all consumer decision-making — an alternative choice", "To provide suitable recommendations based on individual circumstances, needs, and goals", "To guarantee investment returns — a financial measure", "To sell maximum products regardless of suitability — an alternative choice"], 1,
    "Suitability rule: advisers must understand client circumstances and recommend suitable products. Unsuitability breaches regulations and harms consumers. Needs assessment is mandatory."
  ),
  q("reg-ch2-consumer-20", "cisi-reg", "reg-ch2", "2.2", "Lifecycle Planning", "consumer", "medium",
    "How might financial priorities shift across a consumer's lifecycle?",
    ["Consumer age is irrelevant — an alternative choice", "All life stages require identical financial strategies", "Priorities never change — an alternative choice", "Young: growth; mid-career:"], 3,
    "Lifecycle planning recognizes changing priorities: youth (education, careers), working age (mortgages, children, protection), pre-retirement (growth to accumulation), retirement (income from capital)."
  ),
  q("reg-ch2-consumer-21", "cisi-reg", "reg-ch2", "2.3", "Asset Allocation", "consumer", "hard",
    "Why should asset allocation reflect a consumer's investment time horizon?",
    ["Asset allocation cannot be adjusted — an alternative choice", "All investors should be 100% equities — an alternative choice", "Longer horizons permit higher equity exposure", "Time horizon is irrelevant to allocation — an alternative choice"], 2,
    "A 30-year-old can weather 20%+ equity market downturns (recovery likely within years). A 70-year-old cannot—losses may not recover before death. Time horizon directly determines optimal allocation."
  ),
  q("reg-ch2-consumer-22", "cisi-reg", "reg-ch2", "2.1", "Income and Expenditure", "consumer", "easy",
    "What does a personal balance sheet show in financial planning?",
    ["Assets, liabilities, and net worth at a specific point in time", "Investment returns only — a financial measure", "Future predictions — an alternative choice", "Income and expenditure only — an alternative choice"], 0,
    "Balance sheet: Assets (what you own) - Liabilities (what you owe) = Net Worth. Updated regularly to track wealth accumulation. Differs from cash flow statement (income/spending)."
  ),
  q("reg-ch2-consumer-23", "cisi-reg", "reg-ch2", "2.2", "Tax Efficiency", "consumer", "medium",
    "How can consumers improve the tax efficiency of their financial planning?",
    ["Consumers should ignore tax considerations — an alternative choice", "Using tax-advantaged accounts (ISAs, pensions), strategic timing of", "Tax planning is illegal — an alternative choice", "Tax efficiency is impossible — an alternative choice"], 1,
    "Legitimate tax planning: ISA allowances, pension contributions (tax relief), capital gains/loss harvesting, gift/charitable strategies. Increases after-tax wealth without fraud."
  ),
  q("reg-ch2-consumer-24", "cisi-reg", "reg-ch2", "2.1", "Consumer Priorities", "consumer", "easy",
    "Which of these is typically the highest financial priority for most UK consumers?",
    ["Securing adequate housing via mortgage or rent", "Speculative investments — an alternative choice", "Luxury purchases — an alternative choice", "Recreational expenses — an alternative choice"], 0,
    "Housing typically represents 25-35% of household budget and is the largest financial commitment. After housing, utilities, food, and insurance come next."
  ),
  q("reg-ch2-consumer-25", "cisi-reg", "reg-ch2", "2.3", "Ethical Investing", "consumer", "medium",
    "How might ethical or sustainable investment preferences affect consumer portfolio construction?",
    ["Ethical investing eliminates returns — a financial measure", "Excluding certain sectors/companies based on", "Values are irrelevant to investment — an alternative choice", "All investments are identical ethically — an alternative choice"], 1,
    "ESG investing excludes certain sectors (fossil fuels, weapons) or companies not meeting ethical criteria. May reduce diversification or returns but aligns portfolio with values."
  ),
  q("reg-ch2-consumer-26", "cisi-reg", "reg-ch2", "2.2", "Estate Planning", "consumer", "medium",
    "Why is estate planning important for consumers with significant assets?",
    ["To ensure assets transfer as intended, minimize taxes, protect", "Estate planning is unnecessary — an alternative choice", "Assets disappear after death — an alternative choice", "Everyone has identical estate needs — an alternative choice"], 0,
    "Estate planning (wills, trusts, powers of attorney) ensures: property transfers as intended, taxes minimized, minors protected, vulnerable beneficiaries safeguarded, wishes documented."
  ),
  q("reg-ch2-consumer-27", "cisi-reg", "reg-ch2", "2.1", "Professional Conduct", "consumer", "easy",
    "What ethical principle should guide a financial adviser when dealing with a consumer?",
    ["Maximizing the adviser's own profit — an alternative choice", "Recommending products only the adviser prefers", "Acting in the client's best interest and avoiding conflicts of interest", "Ignoring client circumstances — an alternative choice"], 2,
    "Core ethical principle: advisers must act honestly, fairly, and in clients' interests. Conflicts of interest must be disclosed. This builds trust and protects consumers."
  ),
  q("reg-ch2-consumer-28", "cisi-reg", "reg-ch2", "2.2", "Pension Adequacy", "consumer", "medium",
    "What challenge do many UK consumers face regarding retirement pension saving?",
    ["Everyone saves identically — an alternative choice", "Retirement requires no financial planning — an alternative choice", "Inadequate savings rates and unclear", "Pensions are guaranteed at high levels — an alternative choice"], 2,
    "Pension gap: many consumers don't save enough for desired retirement lifestyle. Unclear about needed capital, return assumptions, longevity. Requires proactive planning."
  ),
  q("reg-ch2-consumer-29", "cisi-reg", "reg-ch2", "2.3", "Behavioural Finance", "consumer", "hard",
    "How do common cognitive biases affect consumer investment decisions?",
    ["Consumers make purely rational decisions — an alternative choice", "Loss aversion and overconfidence cause", "Biases improve investment returns — a financial measure", "Emotions never affect investing — an alternative choice"], 1,
    "Loss aversion: pain of losses exceeds joy of gains—causes panic selling in crashes. Overconfidence: belief that own investments will outperform. Both reduce long-term returns."
  ),
  q("reg-ch2-consumer-30", "cisi-reg", "reg-ch2", "2.1", "Financial Goals", "consumer", "easy",
    "What is the first step in comprehensive financial planning for consumers?",
    ["Buying investment products immediately", "Ignoring future planning — an alternative choice", "Goals cannot be set in advance — an alternative choice", "Establishing clear, measurable financial goals with timelines"], 3,
    "Goal-setting framework: identify objectives (education fund, house, retirement), timelines (short/medium/long), and required amounts. Everything else follows from clear goals."
  ),
  q("reg-ch2-consumer-31", "cisi-reg", "reg-ch2", "2.2", "Childcare and Education", "consumer", "medium",
    "How should financial planning address children's education costs?",
    ["No planning is necessary — an alternative choice", "Education costs are negligible — an alternative choice", "Starting education savings early (university fees, private", "Education is always free — an alternative choice"], 2,
    "UK university fees (£9,000-50,000+) and private school costs are substantial. Early saving in Junior ISAs or education trusts leverages compound returns. Access needs planning."
  ),
  q("reg-ch2-consumer-32", "cisi-reg", "reg-ch2", "2.3", "Currency and International", "consumer", "hard",
    "How might currency risk affect a UK consumer investing in international markets?",
    ["Currency has no effect on international investing — an alternative choice", "International investing eliminates currency risk — an alternative choice", "Exchange rates are fixed — a financial measure", "Currency fluctuations can increase or decrease"], 3,
    "Pound depreciation: international investments in strong currencies gain from exchange rates (helpful). Pound appreciation reduces returns from overseas holdings. Currency hedging possible but costly."
  ),
  q("reg-ch2-consumer-33", "cisi-reg", "reg-ch2", "2.1", "Risk Tolerance Assessment", "consumer", "medium",
    "What factors should be considered when assessing a consumer's risk tolerance?",
    ["Financial capacity (income stability), time horizon, knowledge, emotional", "Advisers cannot assess this — an alternative choice", "Only age matters — an alternative choice", "Risk tolerance is fixed and never changes — an alternative choice"], 0,
    "Risk tolerance assessment: financial circumstances (can you afford losses?), time horizon (can you wait for recovery?), knowledge (do you understand risks?), temperament (can you tolerate volatility?)."
  ),
  q("reg-ch2-consumer-34", "cisi-reg", "reg-ch2", "2.2", "Mortgage Considerations", "consumer", "hard",
    "Why should a consumer carefully consider mortgage length when purchasing property?",
    ["All mortgages are identical — an alternative choice", "Mortgage length has no financial consequence — an alternative choice", "Longer mortgages cost more interest; shorter cost less but have higher monthly", "Mortgage cost is irrelevant — an alternative choice"], 2,
    "Interest cost trade-off: 25-year mortgage at £200,000 costs £200,000+ in interest; 15-year costs less interest but higher monthly payments. Financial circumstances determine optimal term."
  ),
  q("reg-ch2-consumer-35", "cisi-reg", "reg-ch2", "2.3", "Sustainable Withdrawal Rates", "consumer", "hard",
    "What is the significance of withdrawal rate planning in retirement?",
    ["Determining safe annual spending from", "Withdrawal rate has no importance — a financial measure", "Retirees can spend unlimited amounts — an alternative choice", "Capital is irrelevant in retirement — an alternative choice"], 0,
    "4% rule: safely withdraw 4% annually from invested capital (historically maintained 25+ year purchasing power). Higher rates risk depletion; lower rates leave excessive estates. Balance required."
  ),
  q("reg-ch3-contract-1", "cisi-reg", "reg-ch3", "3.1", "Contract Capacity", "contract", "easy",
    "Who lacks full legal capacity to enter into a binding contract?",
    ["Only wealthy people — an alternative choice", "Contract capacity is universal — an alternative choice", "Individuals under 18 and people lacking mental capacity", "Age and capacity are irrelevant — an alternative choice"], 2,
    "Lack of capacity: minors (<18), mentally incapable persons, bankrupts, intoxicated persons. Contracts may be void or voidable. Financial advisers must verify client capacity."
  ),
  q("reg-ch3-contract-2", "cisi-reg", "reg-ch3", "3.1", "Misrepresentation", "contract", "medium",
    "What is misrepresentation in contract law?",
    ["Accurate complete information — a financial measure", "False statement of fact inducing entry into contract, made", "Silence about risks — an alternative choice", "True statements only — an alternative choice"], 1,
    "Misrepresentation: untrue statement of fact (not opinion) made pre-contract that induces the other party. Remedies include rescission (contract void) or damages."
  ),
  q("reg-ch3-contract-3", "cisi-reg", "reg-ch3", "3.1", "Contract Terms", "contract", "easy",
    "What is the legal difference between a condition and a warranty in a contract?",
    ["Condition is fundamental; breach allows", "Terms cannot be classified — an alternative choice", "Both are identical — an alternative choice", "Warranties are more important — an alternative choice"], 0,
    "Conditions are essential terms. Breach allows termination and damages. Warranties are minor terms. Breach allows damages only, not termination. Classification affects remedies."
  ),
  q("reg-ch3-contract-4", "cisi-reg", "reg-ch3", "3.2", "Powers of Attorney - General", "contract", "medium",
    "What is a Power of Attorney (POA)?",
    ["A guarantee of payment — an alternative choice", "A contract that cannot be revoked — an alternative choice", "A government authorization — an alternative choice", "A legal document giving another person authority to act on your behalf"], 3,
    "POA grants legal authority to an attorney (agent) to act on the donor's behalf. Can be general (all matters) or specific (limited matters). Revoked by donor's death or revocation document."
  ),
  q("reg-ch3-contract-5", "cisi-reg", "reg-ch3", "3.2", "Lasting Power of Attorney", "contract", "medium",
    "When does a Lasting Power of Attorney (LPA) become useful?",
    ["LPA is only for wealthy people — an alternative choice", "When the donor loses mental", "LPA is never used — an alternative choice", "Mental capacity increases LPA need — an alternative choice"], 1,
    "LPA continues after donor loses capacity (unlike traditional POA which terminates). Two types: Property & Financial Affairs, Health & Personal Welfare. Registered with OPG."
  ),
  q("reg-ch3-contract-6", "cisi-reg", "reg-ch3", "3.2", "Enduring Power of Attorney", "contract", "easy",
    "What is an Enduring Power of Attorney (EPA)?",
    ["A POA created before 2007 that continues after donor's incapacity (now called LPA)", "A contract that terminates on incapacity — an alternative choice", "A type of lasting power of attorney for modern use — an alternative choice", "An insurance product — an alternative choice"], 0,
    "EPA (pre-2007) automatically ends on donor's death/incapacity. Replaced by Lasting Power of Attorney (LPA) which continues despite incapacity. EPAs can still be used if pre-2007."
  ),
  q("reg-ch3-contract-7", "cisi-reg", "reg-ch3", "3.3", "Joint Ownership - Joint Tenancy", "contract", "medium",
    "What happens to a joint tenancy interest when one owner dies?",
    ["It reverts to the government — an alternative choice", "It is split equally among all heirs — an alternative choice", "It goes to the deceased's estate — an alternative choice", "It automatically passes to surviving owner(s) by right of survivorship"], 3,
    "Joint tenancy: right of survivorship means the deceased's share automatically passes to survivors (outside the will/estate). Cannot be left to others. Common for family property."
  ),
  q("reg-ch3-contract-8", "cisi-reg", "reg-ch3", "3.3", "Joint Ownership - Tenancy in Common", "contract", "medium",
    "How does tenancy in common differ from joint tenancy?",
    ["Both are identical — an alternative choice", "Tenancy in common avoids inheritance — an alternative choice", "Only joint tenancy is legal — an alternative choice", "Each owner has separate share"], 3,
    "Tenancy in common: each owns a share (equal or unequal). On death, share goes to deceased's estate/heirs (via will). No automatic survivorship. More flexible for different circumstances."
  ),
  q("reg-ch3-contract-9", "cisi-reg", "reg-ch3", "3.3", "Legal Person - Individual", "contract", "easy",
    "What is a legal person in law?",
    ["Animals can be legal persons — an alternative choice", "Only humans qualify — an alternative choice", "Legal persons have no rights — an alternative choice", "Entity with legal rights/obligations:"], 3,
    "Legal person: entity that can own property, enter contracts, be sued. Includes natural persons (individuals), corporations (companies), trusts (via trustee), partnerships."
  ),
  q("reg-ch3-contract-10", "cisi-reg", "reg-ch3", "3.3", "Trustees as Legal Persons", "contract", "hard",
    "How does a trustee function as a legal person despite being a human?",
    ["Trust capacity is irrelevant — a legal structure", "Trustees have no legal power — a legal structure", "Trustees are not legal persons — a legal structure", "Trustee has legal personality in their trustee capacity,"], 3,
    "Trustee holds property in their name but in fiduciary capacity for beneficiaries. Trust deed creates separate legal identity. Trustee's personal creditors cannot reach trust assets."
  ),
  q("reg-ch3-contract-11", "cisi-reg", "reg-ch3", "3.4", "Insolvency and Administration", "contract", "easy",
    "What does insolvency mean?",
    ["Having all debts paid — an alternative choice", "Unable to pay debts as they become due (cash flow insolvency)", "A form of investment — an alternative choice", "Always results in imprisonment — an alternative choice"], 1,
    "Insolvency: cash flow (can't pay debts when due) or balance sheet (liabilities > assets). Leads to formal procedures: administration, liquidation, bankruptcy."
  ),
  q("reg-ch3-contract-12", "cisi-reg", "reg-ch3", "3.4", "Administration Order", "contract", "medium",
    "What is the purpose of an administration order for an insolvent company?",
    ["To guarantee creditor repayment — a party with defined rights", "To manage company's assets", "To increase debt — an alternative choice", "To immediately shut the company down — an alternative choice"], 1,
    "Administration: administrator manages assets, conducts business, pays debts in priority order, attempts restructuring/rescue or achieves better outcome than liquidation."
  ),
  q("reg-ch3-contract-13", "cisi-reg", "reg-ch3", "3.4", "Liquidation", "contract", "easy",
    "What happens to a company's assets during liquidation?",
    ["Shareholders receive full repayment — a party with defined rights", "Company continues indefinitely — an alternative choice", "Creditors receive nothing — a party with defined rights", "Liquid and sold to pay debts in"], 3,
    "Liquidation: company dissolution. Assets sold, proceeds pay debts in order: secured creditors, employees, tax, unsecured creditors, shareholders (if surplus). Company removed from register."
  ),
  q("reg-ch3-contract-14", "cisi-reg", "reg-ch3", "3.4", "Receivership", "contract", "medium",
    "What is receivership in insolvency?",
    ["Informal insolvency — an alternative choice", "Government takes control of company — an alternative choice", "Receivership equals bankruptcy — an alternative choice", "Secured creditor appoints receiver to manage charged assets to"], 3,
    "Receivership: secured creditor (mortgagee) appoints receiver to manage/sell charged assets for debt recovery. Administrative receiver has broader powers. Less common since administration introduced."
  ),
  q("reg-ch3-contract-15", "cisi-reg", "reg-ch3", "3.5", "Trust - Definition", "contract", "easy",
    "What is a trust in law?",
    ["A financial security — an alternative choice", "A government guarantee — an alternative choice", "Identical to a company — an alternative choice", "Legal arrangement where trustee holds property on"], 3,
    "Trust: trustee has legal title to assets but holds them for beneficiaries' benefit per trust terms. Beneficiary has equitable interest. Created by settlor/testator."
  ),
  q("reg-ch3-contract-16", "cisi-reg", "reg-ch3", "3.5", "Trust Creation - Methods", "contract", "medium",
    "What are the two main methods of creating a trust during lifetime?",
    ["Only one method exists — an alternative choice", "Trusts require government approval — a legal structure", "Trusts are created automatically — a legal structure", "Declaration (settlor declares self trustee) and Transfer"], 3,
    "Declaration: settlor holds property as trustee. Transfer: settlor conveys property to trustee for stated purpose. Both require manifestation of intention, certainty of terms, proper formalities."
  ),
  q("reg-ch3-contract-17", "cisi-reg", "reg-ch3", "3.5", "Trust Creation - Formalities", "contract", "hard",
    "What are the three certainties required to create a valid trust?",
    ["Certainty of intention, subject-matter, and objects (beneficiaries)", "Certainty is not required — an alternative choice", "Only one certainty needed — an alternative choice", "Trusts need no formalities — a legal structure"], 0,
    "Three certainties (Knight v Knight): (1) Intent to create trust, (2) Certain property and interests (subject-matter), (3) Certain identifiable beneficiaries. All three required."
  ),
  q("reg-ch3-contract-18", "cisi-reg", "reg-ch3", "3.5", "Trust Parties", "contract", "easy",
    "Who are the three parties involved in a trust?",
    ["Settlor (creator), Trustee (legal holder), Beneficiary", "Banks only — an alternative choice", "Legal parties are irrelevant — an alternative choice", "Only government entities — an alternative choice"], 0,
    "Settlor creates trust, transfers property to trustee, names beneficiaries. Trustee has legal title and fiduciary duties. Beneficiaries have equitable interests/rights."
  ),
  q("reg-ch3-contract-19", "cisi-reg", "reg-ch3", "3.5", "Bare Trust", "contract", "medium",
    "What is a bare trust and how does it differ from other trusts?",
    ["Trustees have extensive powers in bare trusts — a legal structure", "Trustee holds property absolutely for", "Beneficiary has no rights — an alternative choice", "Bare trust is most restrictive trust — a legal structure"], 1,
    "Bare trust: single, adult beneficiary. Trustee holds nominally; beneficiary entitled to all income/capital. Trustee has minimal duties. Equivalent to beneficiary holding directly."
  ),
  q("reg-ch3-contract-20", "cisi-reg", "reg-ch3", "3.5", "Fixed Trust", "contract", "easy",
    "What is a fixed trust?",
    ["Fixed trusts are illegal — a legal structure", "Beneficiaries and their shares are", "Trust terms can be changed anytime — a legal structure", "Beneficiaries are unknown — an alternative choice"], 1,
    "Fixed trust: beneficiaries and shares specified in trust deed (e.g., £50k to A, £30k to B). No discretion for trustee. Clear, certain, but inflexible."
  ),
  q("reg-ch3-contract-21", "cisi-reg", "reg-ch3", "3.5", "Discretionary Trust", "contract", "medium",
    "What is a discretionary trust and what power does the trustee have?",
    ["Beneficiary determines all distributions — an alternative choice", "Trustee has no discretion — a legal structure", "Trustee has discretion to distribute income/capital among defined class of", "Discretion equals fraud — an alternative choice"], 2,
    "Discretionary trust: trustee decides how much each beneficiary (from stated class) receives. Flexible. Trustee must act honestly and within terms. Tax-efficient for some situations."
  ),
  q("reg-ch3-contract-22", "cisi-reg", "reg-ch3", "3.5", "Interest in Possession Trust", "contract", "hard",
    "What is an interest in possession trust?",
    ["No beneficiary has any right — an alternative choice", "All beneficiaries receive equal amounts — an alternative choice", "Beneficiary has right to current income; on death, capital passes to remainderman", "Capital and income are identical — an alternative choice"], 2,
    "Interest in possession (life interest): beneficiary A receives income for life, then capital goes to B (remainderman). Useful for providing income to surviving spouse, protecting capital for children."
  ),
  q("reg-ch3-contract-23", "cisi-reg", "reg-ch3", "3.5", "Trustee Duties", "contract", "medium",
    "What is the fundamental fiduciary duty of a trustee?",
    ["To act honestly and in beneficiaries' best", "Trustees can use assets for personal benefit — a legal structure", "Duty to maximize personal profit — an alternative choice", "Beneficiaries' interests are secondary — an alternative choice"], 0,
    "Trustee duties: act honestly, in good faith, with care; no self-dealing; keep accounts; avoid conflicts of interest; segregate trust property from personal assets."
  ),
  q("reg-ch3-contract-24", "cisi-reg", "reg-ch3", "3.5", "Trustee Powers", "contract", "medium",
    "What types of powers does a trust deed typically grant trustees?",
    ["Trustees have no powers — a legal structure", "Discretionary powers (invest, distribute, acquire property)", "Unlimited absolute powers — an alternative choice", "Trustees must ask beneficiaries — a legal structure"], 1,
    "Trust powers: investment discretion (what to invest in), distribution discretion (to whom, when, how much), acquisition powers (buy additional assets). Limited by trust terms and law."
  ),
  q("reg-ch3-contract-25", "cisi-reg", "reg-ch3", "3.5", "Charitable Trust", "contract", "medium",
    "What makes a charitable trust different from a private trust?",
    ["Same as private trusts entirely — a legal structure", "Charitable trusts have no restrictions — a legal structure", "Charitable purpose (poverty, education, health, religion, public", "Charitable status is temporary — an alternative choice"], 2,
    "Charitable trust: benefits stated charitable purpose (not individuals). Tax-exempt status. Must be exclusively charitable. Perpetual duration allowed (private trusts typically have 125-year limit)."
  ),
  q("reg-ch3-contract-26", "cisi-reg", "reg-ch3", "3.1", "Capacity and Advisers", "contract", "hard",
    "Why is client capacity important for financial advisers?",
    ["Capacity cannot be questioned — an alternative choice", "Adviser capacity is irrelevant — an alternative choice", "All clients have identical capacity — an alternative choice", "Advice to incapable clients may be"], 3,
    "If adviser gives advice to incapable client (minor, mentally incapable, bankrupt), advice/contract may be void or unenforceable. Adviser should verify capacity and may seek guardianship involvement."
  ),
  q("reg-ch3-contract-27", "cisi-reg", "reg-ch3", "3.2", "POA Application in Finance", "contract", "medium",
    "How would a financial adviser deal with a Lasting Power of Attorney in client dealings?",
    ["Treat POA attorney as principal — an alternative choice", "Verify attorney's authority before", "POA requires no verification — an alternative choice", "Ignore the POA existence — an alternative choice"], 1,
    "Attorney doesn't replace client authority; attorney acts for incapable principal. Adviser must verify: (1) POA exists and valid, (2) donor lacks capacity, (3) attorney is authorized."
  ),
  q("reg-ch3-contract-28", "cisi-reg", "reg-ch3", "3.3", "Property Rights Impact", "contract", "medium",
    "How would joint tenancy vs tenancy in common affect estate planning?",
    ["Joint tenancy passes automatically to survivor", "Neither affects succession — an alternative choice", "Both are equivalent for estates — an alternative choice", "Joint tenancy is more flexible — an alternative choice"], 0,
    "Planning choice: Joint tenancy ensures surviving spouse gets property outside will/probate. Tenancy in common allows different arrangements (unequal shares, gift to children). Impacts succession and taxes."
  ),
  q("reg-ch3-contract-29", "cisi-reg", "reg-ch3", "3.4", "Company Insolvency Types", "contract", "easy",
    "What is the difference between administration and liquidation?",
    ["Liquidation precedes administration — an alternative choice", "Administration creates new company — an alternative choice", "Both are identical procedures — an alternative choice", "Administration attempts rescue/restructuring"], 3,
    "Administration: temporary, aims to rescue business or achieve better outcome than liquidation, creditors' interests protected. Liquidation: permanent closure, asset sale, company dissolved."
  ),
  q("reg-ch3-contract-30", "cisi-reg", "reg-ch3", "3.5", "Trust in Will", "contract", "medium",
    "How is a trust created by will (testamentary trust)?",
    ["Testamentary trust is lifetime — a legal structure", "Trusts cannot be created by will — a legal structure", "Will trustee must be changed by testator — a legal structure", "Testator's will creates trust; trustee"], 3,
    "Testamentary trust: created by will on testator's death. Trustee named in will. Assets transferred to trustee. Beneficial for minor/vulnerable beneficiaries or conditional gifts."
  ),
  q("reg-ch3-contract-31", "cisi-reg", "reg-ch3", "3.1", "Offer and Acceptance", "contract", "easy",
    "What elements are required for a contract to be formed?",
    ["Oral contracts are never valid — an alternative choice", "Offer, acceptance, and consideration (benefit/detriment) with", "Consideration is unnecessary — an alternative choice", "Only one party's consent needed — an alternative choice"], 1,
    "Contract formation: (1) Offer (willingness to be bound), (2) Acceptance (unequivocal agreement), (3) Consideration (exchange of value), (4) Intent to be legally bound."
  ),
  q("reg-ch3-contract-32", "cisi-reg", "reg-ch3", "3.1", "Exclusion Clauses", "contract", "medium",
    "How are exclusion clauses (limiting liability) treated in contract law?",
    ["Interpreted strictly; must be clear and unambiguous", "Plain language irrelevant — an alternative choice", "Courts always enforce them — an alternative choice", "Exclusion clauses are always valid — an alternative choice"], 0,
    "Exclusion clauses construed contra proferentem (against the drafter). Must clearly cover the breach in question. Unfair Terms in Consumer Contracts Regulations may render them unenforceable."
  ),
  q("reg-ch3-contract-33", "cisi-reg", "reg-ch3", "3.1", "Remedies for Breach", "contract", "medium",
    "What remedies are available for breach of contract?",
    ["Only monetary damages available — an alternative choice", "No remedies exist — an alternative choice", "Breaches cannot be remedied — an alternative choice", "Damages (compensation for loss), rescission (void contract),"], 3,
    "Contractual remedies: damages (common law), rescission (cancel, revert to pre-contract), specific performance (court orders performance, rare), injunctions (prevent breach)."
  ),
  q("reg-ch3-contract-34", "cisi-reg", "reg-ch3", "3.2", "Agency and Authority", "contract", "medium",
    "What is the legal significance of an agent operating within their authority?",
    ["Agent is solely liable — an alternative choice", "Principal has no responsibility — an alternative choice", "Agent can bind principal to", "Authority cannot be determined — an alternative choice"], 2,
    "Agency: agent acts with authority to bind principal. Principal is bound by proper agent acts. Outside authority: principal not bound (unless ratified). Adviser may act as agent for client."
  ),
  q("reg-ch3-contract-35", "cisi-reg", "reg-ch3", "3.3", "Succession and Wills", "contract", "easy",
    "What does intestacy mean?",
    ["A type of trust — a legal structure", "Always avoiding probate — an alternative choice", "Death without valid will; succession follows statutory", "Death with a will — an alternative choice"], 2,
    "Intestacy: no valid will. Intestacy Rules (England/Wales) distribute estate: spouse, children, parents, siblings in set order. Can result in unintended distribution."
  ),
  q("reg-ch3-contract-36", "cisi-reg", "reg-ch3", "3.5", "Purpose and Validity", "contract", "hard",
    "Why might a trust fail to be created despite settlor's intent?",
    ["Failure of certainties (intention, subject-matter,", "Intent is sole requirement — an alternative choice", "Failure is impossible — an alternative choice", "Trusts always succeed if intended — a legal structure"], 0,
    "Trust validity requires: (1) Certainty of intent, subject-matter, objects, (2) Proper formalities for property type, (3) Lawful purpose. Failure = trust doesn't exist."
  ),
  q("reg-ch3-contract-37", "cisi-reg", "reg-ch3", "3.4", "Receivership and Charge", "contract", "hard",
    "How does receivership protect a secured creditor's interest?",
    ["No recovery is possible — a phase of the economic cycle", "Creditor loses all rights — a party with defined rights", "Receiver takes control of charged assets, manages them, sells", "Receiver has no power — an alternative choice"], 2,
    "Secured creditor (e.g., mortgagee) appoints receiver when debtor defaults. Receiver manages/sells charged assets, applies proceeds to debt. Protects creditor's interest in collateral."
  ),
  q("reg-ch3-contract-38", "cisi-reg", "reg-ch3", "3.5", "Trust and Beneficiary Rights", "contract", "medium",
    "What rights does a beneficiary have in a trust?",
    ["Rights cannot be enforced — an alternative choice", "Only settlor has rights — an alternative choice", "Right to benefit (income/capital), to information about", "Beneficiaries have no rights — an alternative choice"], 2,
    "Beneficiary rights: to receive benefit per trust terms, access trust accounts/information, sue trustee for breach of duty, claim distribution on correct terms."
  ),
  q("reg-ch3-contract-39", "cisi-reg", "reg-ch3", "3.3", "Priority in Asset Distribution", "contract", "easy",
    "In what order are creditors paid in insolvency?",
    ["Shareholders first — a party with defined rights", "Alphabetical order — an alternative choice", "Randomly selected — an alternative choice", "Secured, employees, tax, unsecured creditors,"], 3,
    "Insolvency priority: (1) Secured creditors (mortgagees), (2) Employees (wages, unfair dismissal), (3) Tax, (4) Unsecured creditors, (5) Shareholders (last, usually zero)."
  ),
  q("reg-ch3-contract-40", "cisi-reg", "reg-ch3", "3.5", "Trust Duration and Perpetuities", "contract", "hard",
    "Why do private trusts typically have a maximum perpetual duration in UK law?",
    ["Rule against perpetuities: trust must have beneficiary", "Trusts can last forever — a legal structure", "Perpetuities rule is modern — an alternative choice", "Duration is never limited — an alternative choice"], 0,
    "Rule against perpetuities (perpetual trust rule): private trusts must vest (capital determinable) within life in being + 21 years (approx. 125 years). Charitable trusts exempt."
  ),
  q("reg-ch4-ethics-1", "cisi-reg", "reg-ch4", "4.1", "CISI Code of Conduct", "ethics", "easy",
    "What is the foundation of professional conduct in financial services?",
    ["Minimal regulatory compliance — an alternative choice", "Profit maximization only — an alternative choice", "Personal gain priority — an alternative choice", "CISI Code of Conduct emphasizing integrity, honesty, and"], 3,
    "CISI Code of Conduct establishes ethical standards: integrity, honesty, fair dealing, competence, confidentiality. These form the foundation of professional conduct and client trust."
  ),
  q("reg-ch4-ethics-2", "cisi-reg", "reg-ch4", "4.1", "Integrity in Practice", "ethics", "easy",
    "What does integrity mean in financial services?",
    ["Flexibility on truth — an alternative choice", "Reputation is unimportant — an alternative choice", "Short-term profit at any cost — an alternative choice", "Consistent honesty, truthfulness, and"], 3,
    "Integrity: doing the right thing consistently, keeping promises, being honest even when costly. Clients trust practitioners with integrity. Breaches damage reputation and careers."
  ),
  q("reg-ch4-ethics-3", "cisi-reg", "reg-ch4", "4.1", "Conflicts of Interest", "ethics", "medium",
    "What is a conflict of interest in financial services?",
    ["Disclosure is unnecessary — an alternative choice", "Situation where personal/firm interests", "Conflicts cannot be managed — an alternative choice", "All financial decisions create conflicts — an alternative choice"], 1,
    "Conflict: adviser stands to gain differently based on advice given (e.g., commission for recommending Product A over B). Must disclose and manage to prevent bias. Firms have compliance procedures."
  ),
  q("reg-ch4-ethics-4", "cisi-reg", "reg-ch4", "4.1", "Chinese Walls", "ethics", "medium",
    "What is a Chinese wall in financial services?",
    ["A physical barrier — an alternative choice", "Not required by regulation — an alternative choice", "Internal control separating departments to prevent", "Always ineffective — an alternative choice"], 2,
    "Chinese wall: separate teams (investment banking/corporate finance vs trading) to prevent insider information flowing between teams. Required for firms with multiple business areas to prevent market abuse."
  ),
  q("reg-ch4-ethics-5", "cisi-reg", "reg-ch4", "4.1", "Personal Account Dealing", "ethics", "medium",
    "What are restrictions on personal account dealing for financial professionals?",
    ["Advisers can trade freely — an alternative choice", "Must not deal on personal account if", "No restrictions exist — an alternative choice", "Personal dealing is unregulated — an alternative choice"], 1,
    "Personal dealing rules: professionals cannot trade personal accounts if likely to conflict with client interests, or if trading on inside information, or ahead of client orders. Disclosure/approval required."
  ),
  q("reg-ch4-ethics-6", "cisi-reg", "reg-ch4", "4.1", "Gifts and Entertainment", "ethics", "easy",
    "How should financial professionals handle gifts and entertainment?",
    ["Hide expensive gifts — an alternative choice", "Disclose or decline", "Accept all gifts — an alternative choice", "Entertainment is irrelevant — an alternative choice"], 1,
    "Gifts policy: cannot accept gifts that could compromise judgment or appear to. Value limits apply. Must be disclosed. Entertainment must be reasonable, infrequent, transparent."
  ),
  q("reg-ch4-ethics-7", "cisi-reg", "reg-ch4", "4.1", "Confidentiality", "ethics", "easy",
    "What is the professional duty of confidentiality?",
    ["Public disclosure is always permitted — an alternative choice", "Must not disclose client information", "Confidentiality is optional — an alternative choice", "Can share client secrets with friends — an alternative choice"], 1,
    "Confidentiality: client information is private. Cannot be disclosed without consent. Exceptions: legal requirement (court order, regulatory demand), money laundering suspicion, crime prevention."
  ),
  q("reg-ch4-ethics-8", "cisi-reg", "reg-ch4", "4.1", "Competence and Capability", "ethics", "medium",
    "What professional responsibility do advisers have regarding competence?",
    ["Anyone can advise on anything — an alternative choice", "Competence is unnecessary — an alternative choice", "Must have knowledge/skills", "Experience is irrelevant — an alternative choice"], 2,
    "Competence duty: advise only in areas of expertise. Must keep knowledge current (CPD). Cannot advise on complex products without understanding them. Breach harms clients and violates ethics."
  ),
  q("reg-ch4-ethics-9", "cisi-reg", "reg-ch4", "4.1", "Whistleblowing", "ethics", "medium",
    "What is the purpose of whistleblowing protections in financial services?",
    ["Allow professionals to report", "Only management can report — an alternative choice", "Reporting is discouraged — an alternative choice", "Whistleblowers have no protection — an alternative choice"], 0,
    "Whistleblowing: professionals report suspected breaches (fraud, market abuse, misconduct) to internal compliance or regulators (FCA, NCA). Protected from dismissal/retaliation. Mandatory in some cases."
  ),
  q("reg-ch4-ethics-10", "cisi-reg", "reg-ch4", "4.1", "Treating Customers Fairly", "ethics", "easy",
    "What does treating customers fairly (TCF) mean?",
    ["Minimal legal compliance only — an alternative choice", "Customer interests are secondary — an alternative choice", "All decisions must benefit customers, not just comply with minimum rules", "No standard exists — an alternative choice"], 2,
    "TCF: customer interests are central. Firms must: identify customer needs, give suitable advice, communicate clearly, deliver promised service, resolve problems fairly."
  ),
  q("reg-ch4-ethics-11", "cisi-reg", "reg-ch4", "4.1", "Professional Standards", "ethics", "medium",
    "How do professional standards differ from minimum regulatory requirements?",
    ["Standards are lower — an alternative choice", "Standards are identical to rules — an alternative choice", "No difference exists — an alternative choice", "Standards exceed minimum rules"], 3,
    "Professional standards (CISI Code): go beyond minimum FCA rules. Practitioners commit to integrity, honesty, competence, fairness. Breaches may result in professional consequences."
  ),
  q("reg-ch4-ethics-12", "cisi-reg", "reg-ch4", "4.1", "Ethical Dilemma Resolution", "ethics", "hard",
    "How should professionals resolve ethical dilemmas?",
    ["Act immediately without consultation — an alternative choice", "Seek guidance from", "Ignore conflicts — an alternative choice", "Personal profit guides decision — an alternative choice"], 1,
    "Ethical dilemma resolution: identify stakeholders (client, firm, markets), consult compliance/ethics, consider regulatory guidance, document reasoning. Escalate serious issues. Never prioritize profit over ethics."
  ),
  q("reg-ch4-ethics-13", "cisi-reg", "reg-ch4", "4.1", "Reputational Risk", "ethics", "medium",
    "Why do firms take reputational risk from unethical conduct seriously?",
    ["Reputation has no impact — an alternative choice", "Loss of customer trust, regulatory", "Only profits matter — an alternative choice", "Unethical conduct is costless — an alternative choice"], 1,
    "Reputational risk: customers flee, regulators fine/restrict, litigation costs pile up, employees leave. Firms invest heavily in ethics/compliance to protect reputation and long-term value."
  ),
  q("reg-ch4-ethics-14", "cisi-reg", "reg-ch4", "4.2", "Suitability", "ethics", "medium",
    "What does the suitability obligation require of advisers?",
    ["Profit is sole criterion — an alternative choice", "Client suitability is irrelevant — an alternative choice", "Must recommend products matching", "Advisers can recommend anything — an alternative choice"], 2,
    "Suitability: adviser must understand client (needs, financial situation, risk tolerance, timescale) and recommend suitable products. Breach may result in compensation claims and regulatory action."
  ),
  q("reg-ch4-ethics-15", "cisi-reg", "reg-ch4", "4.2", "Disclosure of Charges", "ethics", "easy",
    "What must advisers disclose regarding charges and commissions?",
    ["Must disclose all charges", "Only major charges matter — an alternative choice", "Conflicts need not be disclosed — an alternative choice", "Charges can be hidden — an alternative choice"], 0,
    "Disclosure: clients must understand total cost (adviser fees, product charges, commissions). Transparency prevents conflicts and allows informed decisions. Pre-advice disclosure required."
  ),
  q("reg-ch4-ethics-16", "cisi-reg", "reg-ch4", "4.2", "Best Execution", "ethics", "medium",
    "What does best execution require of investment firms?",
    ["Client interest is secondary — an alternative choice", "Must obtain most advantageous execution of client orders (best", "Firms can prioritize profit — an alternative choice", "Execution quality is irrelevant — an alternative choice"], 1,
    "Best execution: firm must execute orders to achieve best overall result for client (best price, speed, cost, likelihood of execution). Firms maintain execution policies and monitor performance."
  ),
  q("reg-ch4-ethics-17", "cisi-reg", "reg-ch4", "4.1", "Professional Development", "ethics", "easy",
    "What is the purpose of continuing professional development (CPD)?",
    ["CPD is optional — an alternative choice", "Competence never changes — an alternative choice", "To maintain/enhance knowledge and competence as industry,", "Experience alone is sufficient — an alternative choice"], 2,
    "CPD: mandatory for CISI members to stay current (minimum 50 hours annually). Covers regulatory changes, product developments, skills. Ensures competence and protects consumers."
  ),
  q("reg-ch4-ethics-18", "cisi-reg", "reg-ch4", "4.1", "Honesty in Communication", "ethics", "medium",
    "What standards apply to adviser communication with clients?",
    ["Communication is unregulated — an alternative choice", "Clients need not understand — an alternative choice", "Must be clear, fair, not", "Misleading is acceptable — an alternative choice"], 2,
    "Communication standards: plain language, fair presentation of risks/benefits, warning of material risks, avoid exaggeration, document advice. Protects vulnerable clients, prevents disputes."
  ),
  q("reg-ch4-ethics-19", "cisi-reg", "reg-ch4", "4.1", "Firm Culture", "ethics", "medium",
    "How does firm culture influence ethical conduct?",
    ["Only rules matter — an alternative choice", "Strong ethical culture (tone from top, training, accountability) encourages compliance", "Individuals are solely responsible — an alternative choice", "Culture is irrelevant — an alternative choice"], 1,
    "Culture impact: firms with strong ethics cultures (leadership commitment, training, accountability, consequences) have fewer breaches. Weak cultures enable fraud, misselling, market abuse."
  ),
  q("reg-ch4-ethics-20", "cisi-reg", "reg-ch4", "4.2", "Client Money Protection", "ethics", "medium",
    "Why are there specific rules about handling client money?",
    ["Rules are irrelevant — an alternative choice", "Client money can be mixed with firm money — an alternative choice", "To prevent adviser fraud, ensure money", "No protection is needed — an alternative choice"], 2,
    "Client money rules (CASS): money held in trust, separate accounts, not used for firm operations. FSCS compensation if lost. Prevents fraud and protects vulnerable clients."
  ),
  q("reg-ch4-ethics-21", "cisi-reg", "reg-ch4", "4.1", "Conflict and Family Relationships", "ethics", "hard",
    "How should advisers manage conflicts arising from family or personal relationships?",
    ["Family relationships are irrelevant — an alternative choice", "Can advise family members without disclosure — an alternative choice", "Bias is acceptable — an alternative choice", "Disclose relationship, may recuse if too close, ensure decisions remain objective"], 3,
    "Family/close relationship conflicts: disclose to manager/compliance, ensure objective decision-making, may require recusal from key decisions. Prevents appearance of bias."
  ),
  q("reg-ch4-ethics-22", "cisi-reg", "reg-ch4", "4.1", "Pressure and Ethics", "ethics", "hard",
    "What should professionals do if pressure from management conflicts with ethical obligations?",
    ["Ethics are optional under pressure — an alternative choice", "Comply with management demands — an alternative choice", "Refuse to breach ethics, document the", "Silence protects career — an alternative choice"], 2,
    "Ethical pressure: never compromise ethics. Escalate to compliance/ethics officer. If management insists on breaching ethics, whistleblowing may be necessary (protected). Ethics are non-negotiable."
  ),
  q("reg-ch4-ethics-23", "cisi-reg", "reg-ch4", "4.1", "Regulatory Engagement", "ethics", "medium",
    "What is a professional's duty regarding regulatory engagement?",
    ["Must cooperate with regulators", "Can withhold information from regulators — an alternative choice", "Regulators are adversaries only — an alternative choice", "Cooperation is optional — an alternative choice"], 0,
    "Regulatory duty: truthful cooperation, timely responses, documents provided, no hindering. Failure to cooperate breaches rules and can result in enforcement action."
  ),
  q("reg-ch4-ethics-24", "cisi-reg", "reg-ch4", "4.1", "Vulnerable Person Handling", "ethics", "medium",
    "How should advisers adjust approach when working with vulnerable clients?",
    ["Vulnerable clients need no special treatment — an alternative choice", "Understanding is unnecessary — an alternative choice", "Slow down communication, use simple", "Speed is unimportant — an alternative choice"], 2,
    "Vulnerable client approach: identify vulnerability (age, disability, literacy, isolation), adjust communication, allow extra time, use plain language, verify understanding, involve supporting person."
  ),
  q("reg-ch4-ethics-25", "cisi-reg", "reg-ch4", "4.2", "Ongoing Monitoring", "ethics", "easy",
    "What is the purpose of ongoing client monitoring in advice?",
    ["Monitoring is unnecessary — an alternative choice", "Changes don't require review — an alternative choice", "To ensure investments continue to meet client needs as", "Advice is one-time only — an alternative choice"], 2,
    "Ongoing monitoring: adviser should periodically review client situation, investment performance, and suitability. If circumstances change (retirement, inheritance, markets), advice may need updating."
  ),
  q("reg-ch4-ethics-26", "cisi-reg", "reg-ch4", "4.1", "Document and Record Keeping", "ethics", "easy",
    "Why must advisers maintain detailed records of advice given?",
    ["Memory is sufficient — an alternative choice", "Records are optional — an alternative choice", "To demonstrate suitability, show client", "Advising without evidence is fine — an alternative choice"], 2,
    "Record-keeping: documents advice, client info, suitability assessment, recommendations. Protects adviser if dispute arises, demonstrates regulatory compliance, supports client understanding."
  ),
  q("reg-ch4-ethics-27", "cisi-reg", "reg-ch4", "4.1", "Third-Party Relationships", "ethics", "medium",
    "What ethical responsibilities do advisers have regarding third-party referrals?",
    ["Competence is irrelevant — an alternative choice", "Must ensure third party is", "Hidden fees are normal — an alternative choice", "Any referral is acceptable — an alternative choice"], 1,
    "Third-party responsibility: refer only to authorized, competent providers. Disclose any financial interest in referral. Ensure client understands terms and fees. Remain responsible for suitability."
  ),
  q("reg-ch4-ethics-28", "cisi-reg", "reg-ch4", "4.1", "Insider Information Ethics", "ethics", "hard",
    "What ethical obligation exists regarding inside information?",
    ["Information can be shared casually — an alternative choice", "Reporting is optional — an alternative choice", "Insider trading is acceptable profit-taking — an alternative choice", "Cannot trade on inside information"], 3,
    "Insider information ethics: trading on material non-public info is market abuse. Must create information barriers. Cannot tip others. Suspicious trading must be reported. Serious criminal/regulatory breach."
  ),
  q("reg-ch4-ethics-29", "cisi-reg", "reg-ch4", "4.1", "Cold Calling Ethics", "ethics", "medium",
    "What ethical standards apply to unsolicited marketing calls?",
    ["Cold calling has no restrictions — an alternative choice", "Must identify firm/adviser, purpose of", "Deception is acceptable — an alternative choice", "Privacy is irrelevant — an alternative choice"], 1,
    "Cold calling rules: don't call registered opt-out numbers, identify self/firm, disclose purpose, don't harass, respect preferences. Ethical approach builds reputation; aggressive approach harms."
  ),
  q("reg-ch4-ethics-30", "cisi-reg", "reg-ch4", "4.1", "Complaint Handling Ethics", "ethics", "easy",
    "How should advisers ethically handle client complaints?",
    ["Take seriously, acknowledge promptly,", "Always refuse compensation — an alternative choice", "Minimize response — an alternative choice", "Ignore complaints — an alternative choice"], 0,
    "Complaint ethics: treat seriously, respond quickly (8-week rule), investigate objectively, communicate transparently, accept fault if error, compensate appropriately, learn from patterns."
  ),
  q("reg-ch4-ethics-31", "cisi-reg", "reg-ch4", "4.1", "Differentiated Conduct", "ethics", "hard",
    "How might ethical standards differ between retail and professional clients?",
    ["Retail clients receive higher protection (suitability rules, warnings)", "Client type is irrelevant — an alternative choice", "Professional clients deserve less care — an alternative choice", "Standards are identical for all clients — an alternative choice"], 0,
    "Client categorization: Retail = maximum protection (suitability, warnings, ICB protections). Professional = reduced protections (appropriateness may substitute suitability). Different rules apply."
  ),
  q("reg-ch4-ethics-32", "cisi-reg", "reg-ch4", "4.1", "Ethical Decision Framework", "ethics", "medium",
    "What framework helps professionals make ethical decisions?",
    ["Use gut feeling alone — an alternative choice", "Only consider profit — an alternative choice", "Ethics cannot be systematized — an alternative choice", "Ask: Is it legal? Fair? Consistent with values? Would I"], 3,
    "Ethical framework: legal test (is it lawful?), fairness test (is it fair to all?), values test (consistent with principles?), transparency test (defensible if public?), benefit test (helps client?)."
  ),
  q("reg-ch4-ethics-33", "cisi-reg", "reg-ch4", "4.1", "Cross-Border Ethics", "ethics", "medium",
    "What ethical considerations apply when advising on cross-border investments?",
    ["Tax is the client's problem — an alternative choice", "Borders have no impact — an alternative choice", "Different countries' standards are irrelevant — an alternative choice", "Must understand different regulatory regimes, tax implications, currency risks,"], 3,
    "Cross-border ethics: understand relevant regulations (UK, target country), tax treaties, client's tax residency status. Disclose tax implications and recommend professional tax advice."
  ),
  q("reg-ch4-ethics-34", "cisi-reg", "reg-ch4", "4.1", "Market Integrity Ethics", "ethics", "medium",
    "What ethical responsibility do investment professionals have to market integrity?",
    ["Must not engage in market abuse (insider dealing, manipulation), report", "Integrity is irrelevant — an alternative choice", "Reporting is unnecessary — an alternative choice", "Market abuse is normal business practice — an alternative choice"], 0,
    "Market integrity ethics: fair pricing, no manipulation, no insider trading, no spreading rumors. Professional obligation to maintain clean markets. Breaches harm all investors."
  ),
  q("reg-ch4-ethics-35", "cisi-reg", "reg-ch4", "4.1", "Code Compliance and Beyond", "ethics", "hard",
    "How should professionals interpret the relationship between CISI Code and regulatory rules?",
    ["Code and rules conflict always — an alternative choice", "Rules are sufficient for ethics — an alternative choice", "Code equals minimum rules — an alternative choice", "Code reflects higher standard than"], 3,
    "Code vs rules: Code often exceeds minimum regulatory requirements. Professional commitment means going beyond bare compliance—doing right thing even if legal minimum allows less."
  ),
  q("reg-ch5-infra-1", "cisi-reg", "reg-ch5", "5.1", "FSMA 2000", "infrastructure", "easy",
    "What did the Financial Services and Markets Act 2000 (FSMA) establish?",
    ["Only banks are regulated — an alternative choice", "Comprehensive regulatory framework for UK financial services with", "No statutory basis for regulators — an alternative choice", "FSMA eliminated all regulation — an alternative choice"], 1,
    "FSMA 2000: foundational legislation creating FCA and PRA, defining regulated activities, authorization requirements, and enforcement powers. Amended by Financial Services Act 2012."
  ),
  q("reg-ch5-infra-2", "cisi-reg", "reg-ch5", "5.1", "FCA Role", "infrastructure", "easy",
    "What is the primary role of the Financial Conduct Authority (FCA)?",
    ["Regulation of bank capital only — an alternative choice", "Regulation of conduct and business practices of financial firms", "Marketing financial services — an alternative choice", "No regulatory power — an alternative choice"], 1,
    "FCA: conduct regulator for all financial services firms. Oversees: conduct of business, suitability, consumer protection, market abuse, complaints, financial crime prevention."
  ),
  q("reg-ch5-infra-3", "cisi-reg", "reg-ch5", "5.1", "PRA Role", "infrastructure", "easy",
    "What is the primary role of the Prudential Regulation Authority (PRA)?",
    ["No regulatory authority — an alternative choice", "Regulation of advisor conduct only — an alternative choice", "Market surveillance only — an alternative choice", "Regulation of prudential risk (capital, liquidity, solvency) of"], 3,
    "PRA (part of BoE): prudential regulator for major firms (banks, insurers, building societies). Focus on financial stability, capital adequacy, risk management, solvency."
  ),
  q("reg-ch5-infra-4", "cisi-reg", "reg-ch5", "5.1", "Bank of England Role", "infrastructure", "easy",
    "What is the Bank of England's role in financial services regulation?",
    ["No regulatory function — an alternative choice", "Only sets interest rates — a financial measure", "Central bank: monetary policy, banking system", "Competes as a bank — an alternative choice"], 2,
    "BoE: central bank with Financial Policy Committee (macroprudential), PRA (prudential), Payments Systems Regulator (PSR). Ensures system-wide stability."
  ),
  q("reg-ch5-infra-5", "cisi-reg", "reg-ch5", "5.1", "HM Treasury", "infrastructure", "medium",
    "What role does HM Treasury play in financial services regulation?",
    ["Determines regulatory objectives", "Only manages taxes — an alternative choice", "Directly regulates firms — an alternative choice", "No regulatory involvement — an alternative choice"], 0,
    "Treasury: sets regulatory objectives for FCA/PRA (via financial services legislation), appoints leadership, amends regulations. Policy maker; FCA/PRA are operational regulators."
  ),
  q("reg-ch5-infra-6", "cisi-reg", "reg-ch5", "5.1", "Dual Regulation", "infrastructure", "medium",
    "What is dual regulation and which firms are subject to it?",
    ["Both FCA and PRA regulate major banks, building", "No overlap exists — an alternative choice", "Only FCA regulates — an alternative choice", "Only PRA regulates — an alternative choice"], 0,
    "Dual regulation: large firms (systemically important banks, insurers, building societies) regulated by both FCA (conduct) and PRA (prudence). Smaller firms regulated by FCA alone."
  ),
  q("reg-ch5-infra-7", "cisi-reg", "reg-ch5", "5.1", "Payment Systems Regulator", "infrastructure", "medium",
    "What does the Payment Systems Regulator (PSR) oversee?",
    ["Payment systems and infrastructure (schemes, operators,", "No regulatory function — an alternative choice", "Only consumer complaints — an alternative choice", "Unrelated to payments — an alternative choice"], 0,
    "PSR (part of FCA): regulates payment systems (CHAPS, Faster Payments, BACS) to ensure fair, competitive, resilient payment infrastructure. New regulator established 2015."
  ),
  q("reg-ch5-infra-8", "cisi-reg", "reg-ch5", "5.1", "Financial Policy Committee", "infrastructure", "medium",
    "What is the Financial Policy Committee (FPC)?",
    ["Only supervises individual firms — an alternative choice", "Obsolete entity — an alternative choice", "Macroprudential oversight committee identifying system-wide risks", "No policy power — an alternative choice"], 2,
    "FPC (BoE): identifies systemic risks (bubble-building, credit excess), issues recommendations to FCA/PRA, uses macroprudential tools (e.g., capital buffers) to prevent crises."
  ),
  q("reg-ch5-infra-9", "cisi-reg", "reg-ch5", "5.1", "Regulatory Objectives", "infrastructure", "medium",
    "What are the FCA's primary regulatory objectives?",
    ["Maximize profits for financial firms — an alternative choice", "No specific objectives — an alternative choice", "Only rule enforcement — an alternative choice", "Consumer protection, market integrity,"], 3,
    "FCA objectives: protect consumers, ensure market integrity, promote competition, combat financial crime. These guide FCA decisions and enforcement priorities."
  ),
  q("reg-ch5-infra-10", "cisi-reg", "reg-ch5", "5.2", "Authorized Persons", "infrastructure", "easy",
    "What is an authorized person in financial services?",
    ["Firm permitted by FCA to conduct specified regulated activities", "Any business can call itself authorized", "Regulatory permission is unnecessary — an alternative choice", "Authorization is voluntary — an alternative choice"], 0,
    "Authorized person: FCA permission to conduct regulated activities. Must meet authorization requirements, regulatory standards, capital/competence. Breach = regulatory enforcement."
  ),
  q("reg-ch5-infra-11", "cisi-reg", "reg-ch5", "5.2", "Regulated Activities", "infrastructure", "medium",
    "Which of these activities typically requires FCA authorization?",
    ["Advising on investments", "Only banking needs FCA approval — an alternative choice", "Financial services need no authorization — an alternative choice", "All business activities require authorization — an alternative choice"], 0,
    "Regulated activities: advising, arranging, managing investments, safeguarding/administering assets, operating markets, insurance mediation. Carried out only by authorized persons or exemptions."
  ),
  q("reg-ch5-infra-12", "cisi-reg", "reg-ch5", "5.2", "Passporting Rights", "infrastructure", "medium",
    "What does passporting allow EEA firms to do in the UK?",
    ["Passporting eliminates FCA oversight — an alternative choice", "UK firms can ignore EEA rules — an alternative choice", "Conduct regulated activities in UK using home country authorization (pre-Brexit only)", "Any firm can operate without authorization — a financial measure"], 2,
    "Passporting (pre-Brexit): EEA-authorized firms could operate in UK using home country authorization, notifying FCA. Post-Brexit: passporting ended. UK firms cannot passport into EU."
  ),
  q("reg-ch5-infra-13", "cisi-reg", "reg-ch5", "5.2", "Regulatory Perimeter", "infrastructure", "hard",
    "What is the regulatory perimeter and why does it matter?",
    ["Unregulated activities need equal oversight — an alternative choice", "Perimeter is always clear-cut — an alternative choice", "Boundary between regulated and", "Perimeter is irrelevant — an alternative choice"], 2,
    "Regulatory perimeter: determined by FSMA. Activities outside it (e.g., general economic advice, non-regulated products) receive no FCA conduct protection. Matters for consumer protection."
  ),
  q("reg-ch5-infra-14", "cisi-reg", "reg-ch5", "5.2", "Exemptions", "infrastructure", "medium",
    "Who can conduct regulated activities without FCA authorization?",
    ["No exemptions exist — an alternative choice", "Only FCA-authorized firms — an alternative choice", "Certain bodies: banks (BoE", "Government bodies are unregulated — an alternative choice"], 2,
    "Exemptions: PRA-regulated firms (dual regulation), certain public bodies, legal professionals (legal advice, conveyancing), accountants (limited), mortgage network firms (under COBS)."
  ),
  q("reg-ch5-infra-15", "cisi-reg", "reg-ch5", "5.1", "Regulatory Arbitrage", "infrastructure", "hard",
    "What is regulatory arbitrage and how do regulators address it?",
    ["Exploiting differences in", "Regulatory arbitrage is beneficial — an alternative choice", "Regulators ignore arbitrage — an alternative choice", "No solution exists — an alternative choice"], 0,
    "Arbitrage: firms relocate activity to avoid regulation. Regulators coordinate internationally (IOSCO, Basel), set minimum standards, monitor for evasion. UK takes global regulatory approach."
  ),
  q("reg-ch5-infra-16", "cisi-reg", "reg-ch5", "5.3", "Compensation Scheme", "infrastructure", "easy",
    "What does the Financial Services Compensation Scheme (FSCS) do?",
    ["Everyone is fully protected — an alternative choice", "Compensates eligible customers when", "FSCS guarantees all investments — an alternative choice", "No compensation exists — an alternative choice"], 1,
    "FSCS: statutory protection for customers of insolvent firms. Covers deposits (£85,000), investments (£85,000), insurance (100%), varies by claim type. Funded by industry levies."
  ),
  q("reg-ch5-infra-17", "cisi-reg", "reg-ch5", "5.3", "FSCS Eligible Claims", "infrastructure", "medium",
    "What types of claims does FSCS cover?",
    ["Protected deposits, investment business", "No limits exist — an alternative choice", "No investment claims — an alternative choice", "Only deposits — an alternative choice"], 0,
    "FSCS coverage: protected deposits (£85k), investment business (£85k), insurance (100%), home finance (£85k). Each type has specific rules. Institutional investors, connected firms excluded."
  ),
  q("reg-ch5-infra-18", "cisi-reg", "reg-ch5", "5.1", "Financial Crime Prevention", "infrastructure", "medium",
    "What is the regulatory framework for financial crime prevention?",
    ["No financial crime regulation exists — an alternative choice", "Firms have no responsibility — an alternative choice", "Only police address crime — an alternative choice", "POCA 2002, MLR 2017, Terrorism Act 2000,"], 3,
    "Financial crime framework: Money Laundering Regulations (KYC, CDD, SARs), Proceeds of Crime Act (money laundering offences), Terrorism Act, Market Abuse Regulation (insider dealing), Bribery Act."
  ),
  q("reg-ch5-infra-19", "cisi-reg", "reg-ch5", "5.2", "Senior Management Regime", "infrastructure", "medium",
    "What is the Senior Management and Certification Regime (SM&CR)?",
    ["Regime is voluntary — an alternative choice", "No personal accountability for managers — an alternative choice", "Identifies individuals in senior roles accountable for regulatory failures", "Individuals are unregulated — an alternative choice"], 2,
    "SM&CR: requires authorization of senior managers (prescribed responsibilities), certifies staff in control functions, creates personal accountability for breaches. Breach = personal fines/bans."
  ),
  q("reg-ch5-infra-20", "cisi-reg", "reg-ch5", "5.2", "Fit and Proper Test", "infrastructure", "easy",
    "What does the fit and proper test assess?",
    ["Honesty, integrity, competence,", "Assessment is unnecessary — an alternative choice", "Only qualification matters — an alternative choice", "Anyone is automatically fit and proper — an alternative choice"], 0,
    "Fit and proper: character, competence, financial situation evaluated. Covers: honesty, integrity, absence of criminal convictions, financial management, financial stability, knowledge/skills."
  ),
  q("reg-ch5-infra-21", "cisi-reg", "reg-ch5", "5.1", "Cross-Border Regulation", "infrastructure", "medium",
    "How do UK regulators coordinate with international counterparts?",
    ["No international coordination exists — an alternative choice", "Via international bodies (IOSCO, FSB, Basel Committee), bilateral", "Regulators compete — an alternative choice", "UK operates independently — a financial measure"], 1,
    "International coordination: FCA/PRA participate in IOSCO, Financial Stability Board, Basel Committee. Bilateral agreements with major regulators (SEC, ESMA). Ensures coordinated standards."
  ),
  q("reg-ch5-infra-22", "cisi-reg", "reg-ch5", "5.2", "Approved Persons Regime", "infrastructure", "medium",
    "What is the approved persons regime?",
    ["All staff require approval — an alternative choice", "Pre-SM&CR regime requiring FCA", "Only senior management approved — an alternative choice", "Approval is no longer used — an alternative choice"], 1,
    "Approved persons (replaced by SM&CR for larger firms): individual authorization for key roles. PRA-regulated firms may still use hybrid SM&CR/approved persons. Tests competence/integrity."
  ),
  q("reg-ch5-infra-23", "cisi-reg", "reg-ch5", "5.1", "Regulatory Principles", "infrastructure", "easy",
    "What are the FCA's regulatory principles?",
    ["Proportionality, accountability,", "No underlying principles exist — an alternative choice", "Principles conflict with rules — an alternative choice", "Rules are applied arbitrarily — an alternative choice"], 0,
    "FCA principles: proportionate (costs justified), accountable (transparent, responsive), consistent (similar cases similar outcomes), transparent (clear reasoning), prompt (timely decisions)."
  ),
  q("reg-ch5-infra-24", "cisi-reg", "reg-ch5", "5.3", "Ombudsman Service", "infrastructure", "medium",
    "What is the Financial Ombudsman Service?",
    ["Only for major complaints — an alternative choice", "Part of FCA — an alternative choice", "Independent scheme resolving", "No ombudsman service exists — an alternative choice"], 2,
    "FOS: independent ombudsman scheme. Reviews complaints, mediates disputes, makes awards (up to £385k). Cheaper/faster than courts. Covers financial services firms."
  ),
  q("reg-ch5-infra-25", "cisi-reg", "reg-ch5", "5.2", "Controlled Functions", "infrastructure", "medium",
    "What is a controlled function under SM&CR?",
    ["Senior role involving significant authority/influence over firm's", "Only board members are controlled — an alternative choice", "Any job is a controlled function — an alternative choice", "No controlled functions exist — an alternative choice"], 0,
    "Controlled functions: defined senior roles (CEOs, CFOs, compliance officers, risk officers, significant others). Each requires FCA approval; individuals held accountable for failures."
  ),
  q("reg-ch5-infra-26", "cisi-reg", "reg-ch5", "5.1", "Regulatory Feedback", "infrastructure", "medium",
    "How do firms provide feedback to regulators?",
    ["Only enforcement involves communication — an alternative choice", "Firms cannot propose changes — an alternative choice", "Industry consultation (CP), feedback statements (FS), regular meetings", "Feedback is not sought — an alternative choice"], 2,
    "FCA engagement: Consultation Papers (proposed rules), Feedback Statements (responses to feedback), supervisory meetings, industry working groups. Firms can contribute to regulatory development."
  ),
  q("reg-ch5-infra-27", "cisi-reg", "reg-ch5", "5.1", "Brexit Impact on Regulation", "infrastructure", "hard",
    "How did Brexit affect UK financial services regulation?",
    ["Passporting ended; UK retained EU laws (onshored)", "All EU rules still apply — an alternative choice", "Regulation unchanged — an alternative choice", "No regulatory changes occurred — an alternative choice"], 0,
    "Brexit outcomes: passporting ended (firms need separate UK authorization), EU laws onshored (can be changed), FCA/PRA diverge from EU, new cross-border arrangements with international partners."
  ),
  q("reg-ch5-infra-28", "cisi-reg", "reg-ch5", "5.2", "Authorization Application", "infrastructure", "medium",
    "What is required for FCA authorization application?",
    ["Submit detailed business plan", "Minimal information needed — an alternative choice", "Applications are denied automatically — an alternative choice", "No application required — an alternative choice"], 0,
    "Authorization application: detailed business plan, organizational structure, financial resources (capital adequacy), compliance/risk framework, senior management information, fit & proper test results."
  ),
  q("reg-ch5-infra-29", "cisi-reg", "reg-ch5", "5.3", "Compensation Limits", "infrastructure", "easy",
    "What is the standard FSCS compensation limit for investment business claims?",
    ["Unlimited compensation", "£85,000 per eligible claim against a", "£100,000 — an alternative choice", "No compensation limit"], 1,
    "FSCS investment claims: £85,000 per eligible claimant per firm. Deposits also £85,000. Insurance varies (100% for compulsory, 90% for non-compulsory). Different rules per claim type."
  ),
  q("reg-ch5-infra-30", "cisi-reg", "reg-ch5", "5.1", "Regulatory Approach", "infrastructure", "medium",
    "What is the FCA's general regulatory approach to firms?",
    ["All firms regulated equally — an alternative choice", "No differentiation in approach — an alternative choice", "Firms self-regulate entirely — an alternative choice", "Risk-based: focus on firms/activities with highest consumer/market risk"], 3,
    "Risk-based regulation: FCA focuses resources on highest-risk firms (deposit-takers, large advisers) and activities (conduct risks). Lower-risk firms get lighter supervision."
  ),
  q("reg-ch6-supervision-1", "cisi-reg", "reg-ch6", "6.1", "FCA Objectives", "supervision", "easy",
    "Which of these is an FCA statutory objective?",
    ["Consumer protection, market integrity, competition, financial", "Eliminating all financial risk — an alternative choice", "Subsidizing financial services — an alternative choice", "Maximizing firm profits — an alternative choice"], 0,
    "FCA objectives (FSMA 2000): consumer protection, market integrity, competition, financial crime prevention. These guide FCA decisions and enforcement actions."
  ),
  q("reg-ch6-supervision-2", "cisi-reg", "reg-ch6", "6.1", "PRA Objectives", "supervision", "easy",
    "What are the PRA's primary statutory objectives?",
    ["Profit maximization for firms — an alternative choice", "Competition maximization — an alternative choice", "Prudential regulation (capital, liquidity, solvency) and financial stability", "Elimination of all banking — an alternative choice"], 2,
    "PRA objectives: primary = safety/soundness (capital, solvency, resilience), secondary = consumer protection. Focuses on systemic institutions to prevent financial crises."
  ),
  q("reg-ch6-supervision-3", "cisi-reg", "reg-ch6", "6.1", "Principles for Business", "supervision", "medium",
    "What are the FCA's eleven Principles for Business?",
    ["Only two principles apply — an alternative choice", "1=Integrity, 2=Skill/care, 3=Management/control,", "Principles are voluntary — an alternative choice", "No principles exist — an alternative choice"], 1,
    "11 Principles: Integrity, Skill/care, Management/control, Financial prudence, Market conduct, Customer interest, Communication, Client money, Conflicts, Reporting, Auditors. All firms must comply."
  ),
  q("reg-ch6-supervision-4", "cisi-reg", "reg-ch6", "6.1", "Principle 1: Integrity", "supervision", "easy",
    "What does Principle 1 (Integrity) require?",
    ["Profit at any cost — an alternative choice", "Deceive when advantageous", "Ethics are optional — an alternative choice", "Conduct business with integrity and honesty"], 3,
    "Principle 1: conduct business with integrity. Firms must be honest in all dealings. Foundation of trust and consumer confidence. Breach damages reputation and triggers enforcement."
  ),
  q("reg-ch6-supervision-5", "cisi-reg", "reg-ch6", "6.1", "Principle 2: Skill and Care", "supervision", "easy",
    "What does Principle 2 (Skill, Care and Diligence) require?",
    ["Diligence is unnecessary — an alternative choice", "Conduct business with due skill, care and diligence", "Speed over accuracy — an alternative choice", "Careless service is acceptable"], 1,
    "Principle 2: skill, care, diligence in all business. Requires competence, reasonable effort, attention. Breach = liable for losses from inadequate performance."
  ),
  q("reg-ch6-supervision-6", "cisi-reg", "reg-ch6", "6.1", "Principle 3: Management and Control", "supervision", "medium",
    "What does Principle 3 (Management and Control) require?",
    ["Organize and control affairs with adequate risk", "No management necessary — an alternative choice", "Control is irrelevant — an alternative choice", "Systems are optional — an alternative choice"], 0,
    "Principle 3: organize and control affairs properly. Requires risk management systems, internal controls, compliance framework, clear authority structures, documented policies."
  ),
  q("reg-ch6-supervision-7", "cisi-reg", "reg-ch6", "6.1", "Principle 6: Customer Interest", "supervision", "medium",
    "What does Principle 6 require regarding customer interests?",
    ["Self-interest takes priority — an alternative choice", "Fairness is irrelevant — an alternative choice", "Customer interests are secondary — an alternative choice", "Act honestly, fairly and in"], 3,
    "Principle 6: act honestly, fairly, in customer interest. Requires suitable advice, clear communication, protection of vulnerable clients, no misleading conduct."
  ),
  q("reg-ch6-supervision-8", "cisi-reg", "reg-ch6", "6.1", "Principle 8: Client Money", "supervision", "easy",
    "What does Principle 8 require regarding client money?",
    ["Safeguarding unnecessary — an alternative choice", "Safeguard client money (segregate, trust accounts, cannot use for own", "Can mix client/firm money — an alternative choice", "Client money protection is optional — an alternative choice"], 1,
    "Principle 8: safeguard client money. Must hold separately (CASS rules), not use for firm operations, account for all amounts. Breach = SARs, enforcement, compensation."
  ),
  q("reg-ch6-supervision-9", "cisi-reg", "reg-ch6", "6.2", "Regulatory Tools", "supervision", "medium",
    "What supervisory tools does the FCA use to achieve objectives?",
    ["Only fines — an alternative choice", "No supervisory tools available — an alternative choice", "Moral suasion only — an alternative choice", "Rules (COBS, ICOBS, etc), guidance,"], 3,
    "FCA supervisory tools: rulemaking (binding rules in FCA Handbook), guidance (non-binding), conditions (on authorization), enforcement (fines, bans), variation (restricting permission)."
  ),
  q("reg-ch6-supervision-10", "cisi-reg", "reg-ch6", "6.2", "FCA Rulemaking", "supervision", "medium",
    "How does FCA rulemaking process work?",
    ["Consultation Paper (CP) → feedback", "Feedback is ignored — an alternative choice", "No formal process — an alternative choice", "Rules issued without consultation — an alternative choice"], 0,
    "FCA rulemaking: CP (proposed rules, request feedback), FS (feedback response), PS (final rules). Rules bind authorized firms. Transitional periods given for implementation."
  ),
  q("reg-ch6-supervision-11", "cisi-reg", "reg-ch6", "6.2", "Enforcement Process", "supervision", "medium",
    "What is the FCA enforcement process?",
    ["No process required — an alternative choice", "No appeal possible — an alternative choice", "Immediate punishment — an alternative choice", "Investigation → warning/notice →"], 3,
    "FCA enforcement: investigation, warning (non-disciplinary), decision notice (proposed action), fallback opportunity, final notice (binding). Can be appealed to Tribunal."
  ),
  q("reg-ch6-supervision-12", "cisi-reg", "reg-ch6", "6.2", "Enforcement Tools", "supervision", "medium",
    "What enforcement powers does FCA have?",
    ["Fines, bans, prohibition orders,", "Cannot ban individuals — an alternative choice", "Only fines available — an alternative choice", "No enforcement powers — an alternative choice"], 0,
    "FCA enforcement: financial penalties (millions for major breaches), bans (prohibition orders), cease/desist, variation (restrict permission), censure (public statement). Tools match breach severity."
  ),
  q("reg-ch6-supervision-13", "cisi-reg", "reg-ch6", "6.2", "Approved Persons Regime (older)", "supervision", "medium",
    "Under the older approved persons regime, what were controlled functions?",
    ["All staff required approval — an alternative choice", "Senior roles requiring FCA pre-approval (directors, compliance", "Only CEO approved — an alternative choice", "No controlled functions existed — an alternative choice"], 1,
    "Approved persons (pre-SM&CR): FCA approved individuals in key roles. Controlled functions: directors, senior managers, compliance, risk. Largely replaced by SM&CR (2016+)."
  ),
  q("reg-ch6-supervision-14", "cisi-reg", "reg-ch6", "6.3", "Performance Metrics", "supervision", "hard",
    "How does FCA monitor firm compliance?",
    ["Only random checks — an alternative choice", "No monitoring occurs — an alternative choice", "Firms self-report only — an alternative choice", "Supervisory returns (financial data), meetings,"], 3,
    "FCA supervision: firms submit regulatory returns (capital, liquidity), senior managers report conduct, FCA conducts examinations, reviews complaints. Data-driven risk assessment."
  ),
  q("reg-ch6-supervision-15", "cisi-reg", "reg-ch6", "6.1", "Proportionality Principle", "supervision", "medium",
    "How does the proportionality principle affect regulation?",
    ["Large firms get lighter regulation — an alternative choice", "No differentiation — an alternative choice", "Regulatory burden should be", "Same rules for all firms — an alternative choice"], 2,
    "Proportionality: smaller, lower-risk firms get simpler rules (e.g., SME exemptions). Large, complex firms (banks, investment firms) get comprehensive regulation. Costs match benefits."
  ),
  q("reg-ch6-supervision-16", "cisi-reg", "reg-ch6", "6.1", "Principle 4: Financial Prudence", "supervision", "medium",
    "What does Principle 4 (Financial Prudence) require?",
    ["Can operate without capital — a financial measure", "No financial resources needed — an alternative choice", "Maintain adequate financial resources (capital, liquidity) to meet obligations", "Financial soundness unnecessary — an alternative choice"], 2,
    "Principle 4: maintain adequate financial resources. Capital requirements vary by firm type/activities. PRA sets prudential minimums; FCA oversees capital adequacy for conduct regulatees."
  ),
  q("reg-ch6-supervision-17", "cisi-reg", "reg-ch6", "6.1", "Principle 5: Market Conduct", "supervision", "easy",
    "What does Principle 5 (Market Conduct) require?",
    ["No conduct standards apply — an alternative choice", "Financial crime is acceptable — an alternative choice", "Observe proper market conduct standards and prevent financial", "Can engage in market abuse — an alternative choice"], 2,
    "Principle 5: observe standards of market conduct. Prevent market abuse (manipulation, insider dealing), maintain information barriers (Chinese walls), comply with market rules."
  ),
  q("reg-ch6-supervision-18", "cisi-reg", "reg-ch6", "6.1", "Principle 7: Communication", "supervision", "easy",
    "What does Principle 7 (Communication) require?",
    ["Clarity is unnecessary — an alternative choice", "Communicate clearly and fairly in a way customers understand", "Can communicate misleadingly — an alternative choice", "Jargon is acceptable — an alternative choice"], 1,
    "Principle 7: clear, fair communication. Plain language, highlight risks, avoid jargon, don't minimize important information. Protects vulnerable/less-financially-sophisticated customers."
  ),
  q("reg-ch6-supervision-19", "cisi-reg", "reg-ch6", "6.1", "Principle 9: Conflicts", "supervision", "medium",
    "What does Principle 9 (Conflicts of Interest) require?",
    ["No management necessary — an alternative choice", "Manage conflicts of interest; if cannot manage, disclose to clients", "Conflicts can be hidden — an alternative choice", "Disclosure optional — an alternative choice"], 1,
    "Principle 9: identify, manage, disclose conflicts. Cannot act on conflicts that can't be managed. If management insufficient, disclose so client can decide."
  ),
  q("reg-ch6-supervision-20", "cisi-reg", "reg-ch6", "6.1", "Principle 10: Reporting", "supervision", "easy",
    "What does Principle 10 require?",
    ["Notify FCA of important events (breaches, changes,", "Reporting is optional — an alternative choice", "Can hide events from FCA — an alternative choice", "No notification needed — an alternative choice"], 0,
    "Principle 10: notify FCA (within required timeframes) of: regulated activity changes, breaches, suspicious activity, management changes, financial difficulties. Transparency requirement."
  ),
  q("reg-ch6-supervision-21", "cisi-reg", "reg-ch6", "6.1", "Principle 11: Auditors", "supervision", "easy",
    "What does Principle 11 require regarding auditors?",
    ["Cooperation optional — an alternative choice", "Can obstruct auditors — an alternative choice", "No auditor cooperation needed — an alternative choice", "Cooperate with statutory auditors (provide documents, respond"], 3,
    "Principle 11: cooperate with auditors. Provide documents, answer questions, don't hinder audits. Auditors report to FCA on compliance matters (auditor reports)."
  ),
  q("reg-ch6-supervision-22", "cisi-reg", "reg-ch6", "6.2", "Variation of Permission", "supervision", "medium",
    "What can FCA do by varying a firm's permission?",
    ["Variation requires firm consent — an alternative choice", "Add/remove regulated activities, impose", "No variation powers — an alternative choice", "Cannot limit firm activities — an alternative choice"], 1,
    "Variation: FCA can modify firm permission (add/remove activities, impose conditions, restrict scope). Used to manage risk. Firm can appeal to Tribunal."
  ),
  q("reg-ch6-supervision-23", "cisi-reg", "reg-ch6", "6.2", "Suspension of Permission", "supervision", "medium",
    "When might FCA suspend a firm's authorization?",
    ["No suspension power — an alternative choice", "If public interest threatened (firm failure imminent, serious", "Suspension requires consent — an alternative choice", "Only permanent prohibition available — an alternative choice"], 1,
    "Suspension: FCA can temporarily halt firm's regulated activities if public interest threatened. Less final than withdrawal. Allows time to remedy or wind down."
  ),
  q("reg-ch6-supervision-24", "cisi-reg", "reg-ch6", "6.2", "Withdrawal of Permission", "supervision", "medium",
    "What does withdrawal of FCA permission mean?",
    ["Withdrawal is temporary — an alternative choice", "Firm can appeal withdrawal — an alternative choice", "Firm loses authorization", "Firm can continue anyway — an alternative choice"], 2,
    "Withdrawal: FCA permanently removes authorization. Firm must cease regulated activities. Can result from: failure to meet requirements, systematic breaches, changed circumstances."
  ),
  q("reg-ch6-supervision-25", "cisi-reg", "reg-ch6", "6.3", "Thematic Reviews", "supervision", "hard",
    "What is a thematic review and why does FCA conduct them?",
    ["Only targeted investigations — an alternative choice", "No reviews conducted — an alternative choice", "FCA examines specific practice across multiple firms (e.g.,", "Reviews only individual firms — an alternative choice"], 2,
    "Thematic reviews: FCA examines specific issues across industry (e.g., value for money, vulnerable customers). Identifies systemic failures, publishes findings, issues guidance."
  ),
  q("reg-ch6-supervision-26", "cisi-reg", "reg-ch6", "6.2", "Fining Guidelines", "supervision", "hard",
    "How does FCA determine fine amounts in enforcement?",
    ["Based on: breach", "Fines are trivial — an alternative choice", "Fines are random — an alternative choice", "No limits exist — an alternative choice"], 0,
    "FCA fining: DEPP guidelines. Consider breach severity, financial gain, deterrence, firm cooperation. Major breaches: £multi-millions (largest £500m+). Individuals also fined."
  ),
  q("reg-ch6-supervision-27", "cisi-reg", "reg-ch6", "6.2", "Prohibition Orders", "supervision", "medium",
    "What is a prohibition order and when is it used?",
    ["Cannot ban individuals — an alternative choice", "Bans are temporary — an alternative choice", "Bans require consent — an alternative choice", "Bans individual from performing"], 3,
    "Prohibition: FCA bans individuals from regulated activities if public interest requires (dishonesty, incompetence, breaches). Immediate or future-dated. Appealable to Tribunal."
  ),
  q("reg-ch6-supervision-28", "cisi-reg", "reg-ch6", "6.1", "Statutory Notices", "supervision", "medium",
    "What statutory notices does FCA use in enforcement?",
    ["No appeal process — an alternative choice", "No notices used — an alternative choice", "Warning notices (intent to act), decision notices", "Only informal process — an alternative choice"], 2,
    "Statutory notices: Warning (intent to take action), Decision (proposed action + reasoning), Final (binding decision after fallback). Each allows opportunity to respond."
  ),
  q("reg-ch6-supervision-29", "cisi-reg", "reg-ch6", "6.3", "Regulatory Performance", "supervision", "hard",
    "How does FCA measure effectiveness of its supervision?",
    ["Effectiveness cannot be measured — an alternative choice", "No measurement occurs — an alternative choice", "Only financial metrics count — an alternative choice", "Regulatory returns, breach rates,"], 3,
    "FCA metrics: regulatory return analysis (capital, risk), breach investigation timeliness, enforcement impact, complaints statistics, market conduct monitoring, consumer research."
  ),
  q("reg-ch6-supervision-30", "cisi-reg", "reg-ch6", "6.2", "Statement of Principles", "supervision", "medium",
    "Under SM&CR, what do Statements of Principle require?",
    ["Senior managers must state personal", "Statements are advisory — an alternative choice", "No personal accountability exists — an alternative choice", "Firms are solely responsible — an alternative choice"], 0,
    "SM&CR Statements: senior managers confirm personal responsibility for specific breaches. Breaches = personal fines/bans. Creates clear individual accountability."
  ),
  q("reg-ch7-auth-1", "cisi-reg", "reg-ch7", "7.1", "Authorization Requirement", "authorisation", "easy",
    "Who must obtain FCA authorization to conduct regulated activities?",
    ["No authorization required — an alternative choice", "Any person/firm carrying on regulated activities in the UK", "Unregulated businesses can operate freely", "Only banks — an alternative choice"], 1,
    "Authorization: FCA permission required for regulated activities. Unauthorized firms breach FSMA. Exemptions: some professions, certain small activities, certain overseas firms."
  ),
  q("reg-ch7-auth-2", "cisi-reg", "reg-ch7", "7.1", "Permission to Conduct", "authorisation", "easy",
    "What does FCA permission grant?",
    ["No conditions apply — an alternative choice", "Right to conduct specified", "Unlimited right to any financial activity — an alternative choice", "Permission is permanent — an alternative choice"], 1,
    "Permission: FCA grants right to conduct specific regulated activities (advising, managing, arranging) for specific customer types. Conditioned by rules, capital, organizational requirements."
  ),
  q("reg-ch7-auth-3", "cisi-reg", "reg-ch7", "7.1", "Regulated Activities", "authorisation", "medium",
    "Which of these requires FCA authorization?",
    ["Advising on investments, arranging investment deals,", "Trading on own account only — an alternative choice", "Investment research — an alternative choice", "General economic advice — an alternative choice"], 0,
    "Regulated activities (FSMA Schedule 2): advising, arranging, managing, safeguarding assets, operating markets, insurance mediation, credit broking. Unauthorized conduct = criminal offense."
  ),
  q("reg-ch7-auth-4", "cisi-reg", "reg-ch7", "7.2", "Fit and Proper Test Components", "authorisation", "medium",
    "What factors comprise the fit and proper test?",
    ["Honesty, integrity, financial soundness, competence,", "No assessment needed — an alternative choice", "Only wealth matters — an alternative choice", "Age is sole criterion — an alternative choice"], 0,
    "Fit and proper: FCA assesses character (honesty, integrity), competence (knowledge, skills), financial position (can meet obligations), regulatory compliance history."
  ),
  q("reg-ch7-auth-5", "cisi-reg", "reg-ch7", "7.2", "Senior Management and Certification Regime", "authorisation", "medium",
    "What is the Senior Management and Certification Regime (SM&CR)?",
    ["Identifies senior managers accountable for regulated activities", "No individual assessment needed — an alternative choice", "Firms are solely liable — an alternative choice", "No accountability regime — an alternative choice"], 0,
    "SM&CR: defines prescribed responsibilities (CEO, CFO, compliance, risk officers). Managers must be fit/proper, accountable for breaches. Breaches = personal fines/bans."
  ),
  q("reg-ch7-auth-6", "cisi-reg", "reg-ch7", "7.2", "Prescribed Responsibilities", "authorisation", "medium",
    "What are prescribed responsibilities under SM&CR?",
    ["Senior roles with significant impact: CEO (overall), CFO", "Only CEO is responsible — an alternative choice", "Responsibilities are advisory — an alternative choice", "No prescribed roles exist — an alternative choice"], 0,
    "Prescribed responsibilities: overall responsibility (CEO-equivalent), financial reporting (CFO), compliance, risk management, internal audit, ML officer, others. Each defined in SYSC."
  ),
  q("reg-ch7-auth-7", "cisi-reg", "reg-ch7", "7.2", "Certification Regime", "authorisation", "medium",
    "What is the certification regime under SM&CR?",
    ["FCA cannot challenge — an alternative choice", "Firms certify staff in control", "No certification required — an alternative choice", "Certification is permanent — an alternative choice"], 1,
    "Certification: firms certify that staff in specified control functions (compliance, risk, finance) are fit/proper. FCA can remove certification. Creates firm accountability for staff fitness."
  ),
  q("reg-ch7-auth-8", "cisi-reg", "reg-ch7", "7.3", "Authorization Application", "authorisation", "medium",
    "What must applicants submit for FCA authorization?",
    ["Application is advisory — an alternative choice", "Minimal information needed — an alternative choice", "Business plan, organizational structure, financial", "No application required — an alternative choice"], 2,
    "Authorization application: detailed plan (products, services, customers), organizational structure (governance, controls), financial capacity (capital models), senior managers (CVs, references)."
  ),
  q("reg-ch7-auth-9", "cisi-reg", "reg-ch7", "7.3", "Authorization Timeline", "authorisation", "medium",
    "How long does FCA authorization typically take?",
    ["2-6 months depending on complexity", "Immediate approval — an alternative choice", "Years typically — an alternative choice", "No timeline exists — an alternative choice"], 0,
    "FCA aims to decide within 2-6 months. Clock stops if FCA makes information request. Complex cases (systemic banks, fund managers) take longer."
  ),
  q("reg-ch7-auth-10", "cisi-reg", "reg-ch7", "7.1", "Passporting Rights (Pre-Brexit)", "authorisation", "medium",
    "What did passporting allow EEA firms?",
    ["Passporting never existed — an alternative choice", "All firms could operate freely — a financial measure", "UK firms could ignore EU rules — an alternative choice", "Conduct regulated activities in UK using home country authorization"], 3,
    "Passporting (pre-Brexit): EEA-regulated firm notified FCA and could conduct business in UK under home authorization. Eliminated post-Brexit. EEA firms now need UK authorization."
  ),
  q("reg-ch7-auth-11", "cisi-reg", "reg-ch7", "7.3", "Authorization Conditions", "authorisation", "medium",
    "What conditions can FCA impose on authorization?",
    ["Restrictions on activities, customer types, geographic", "No conditions apply — an alternative choice", "Conditions are advisory — an alternative choice", "Firms set conditions — an alternative choice"], 0,
    "Conditions: FCA can restrict activities (only advise, not manage), customer types (retail only), scope (UK only), capital (higher than minimums), structural requirements."
  ),
  q("reg-ch7-auth-12", "cisi-reg", "reg-ch7", "7.1", "Exemptions from Authorization", "authorisation", "easy",
    "Who is exempt from FCA authorization?",
    ["Banks, building societies, PRA-regulated", "No exemptions exist — an alternative choice", "Everyone requires authorization — an alternative choice", "Exemptions are temporary — an alternative choice"], 0,
    "Exemptions: PRA-regulated (dual regulated), banks (BoE), building societies (PRA), legal professionals (conveyancing, legal advice), accountants (limited), certain public bodies."
  ),
  q("reg-ch7-auth-13", "cisi-reg", "reg-ch7", "7.2", "Cancellation of Authorization", "authorisation", "medium",
    "Can applicants withdraw authorization applications?",
    ["Withdrawal is impossible — an alternative choice", "Only FCA can cancel — an alternative choice", "FCA must refuse withdrawal — an alternative choice", "Yes, applicants can withdraw at any time before FCA decision"], 3,
    "Application withdrawal: applicants can withdraw before FCA decision. Post-authorization: firm can voluntarily surrender authorization (subject to orderly wind-down requirements)."
  ),
  q("reg-ch7-auth-14", "cisi-reg", "reg-ch7", "7.2", "Competency Requirements", "authorisation", "medium",
    "What competency requirements apply to authorized firms?",
    ["Staff must have relevant knowledge", "No competency standards exist — an alternative choice", "Anyone can work anywhere — an alternative choice", "Experience is irrelevant — an alternative choice"], 0,
    "Competency: firm must ensure staff have knowledge/skills appropriate to roles. Training required. CISI qualifications expected for investment professionals. Breach = conduct breach."
  ),
  q("reg-ch7-auth-15", "cisi-reg", "reg-ch7", "7.3", "Capital Requirements", "authorisation", "medium",
    "What capital must authorized firms maintain?",
    ["Capital is advisory — an alternative choice", "Varies by firm type: investment firms (K-factors, PMR),", "No capital required — an alternative choice", "FCA sets identical minimums — an alternative choice"], 1,
    "Capital: UK CRR (investment firms), EU CRD (banks pre-Brexit), Solvency II (insurance), PRA rules (building societies). Higher capital = lower risk, more buffers for losses."
  ),
  q("reg-ch7-auth-16", "cisi-reg", "reg-ch7", "7.1", "Restricted Activities", "authorisation", "medium",
    "What activities are restricted or prohibited?",
    ["Certain complex investments", "Restrictions are advisory — an alternative choice", "No restrictions exist — an alternative choice", "All activities open to all — an alternative choice"], 0,
    "Restrictions: complex derivatives/structured products restricted; high-risk activities require higher capital; managing collective investments requires specific authorization."
  ),
  q("reg-ch7-auth-17", "cisi-reg", "reg-ch7", "7.2", "Governance Requirements", "authorisation", "medium",
    "What governance requirements must authorized firms meet?",
    ["Governance is optional — an alternative choice", "Board oversight, independent directors,", "No governance needed — an alternative choice", "Self-governance only — an alternative choice"], 1,
    "Governance: firm must have appropriate board/management, audit/risk committees, compliance function, internal controls. Larger firms: independent board members, remuneration committees."
  ),
  q("reg-ch7-auth-18", "cisi-reg", "reg-ch7", "7.1", "Conduct of Business", "authorisation", "medium",
    "What is the primary conduct of business requirement?",
    ["Authorize firms must treat customers fairly (TCF), give", "Customer interests secondary — an alternative choice", "No conduct standards apply — an alternative choice", "Profit over customers — an alternative choice"], 0,
    "Conduct rule: act honestly, fairly, professionally. Suitable advice, clear communication, prompt complaint handling. Foundation of COBS (Conduct of Business sourcebook)."
  ),
  q("reg-ch7-auth-19", "cisi-reg", "reg-ch7", "7.2", "Appointed Representatives", "authorisation", "medium",
    "What are appointed representatives and how are they regulated?",
    ["All reps are authorized separately — a financial measure", "Reps are unrestricted — an alternative choice", "No accountability for firms — an alternative choice", "Unregulated individuals/firms appointed by authorized firm to"], 3,
    "Appointed representative: authorized firm appoints individual/small firm to conduct regulated activities (e.g., insurance, investments). Principal firm responsible. Must be fit/proper."
  ),
  q("reg-ch7-auth-20", "cisi-reg", "reg-ch7", "7.1", "Customer Categorization", "authorisation", "medium",
    "How does FCA categorize customers and why?",
    ["All customers identical — an alternative choice", "Retail (max protection), Professional (reduced protections),", "Professional = max protection — an alternative choice", "No categorization exists — an alternative choice"], 1,
    "Categorization: Retail (default, high protection), Professional (can opt in, lower protection), Eligible Counterparty (banks, large corporates, minimal protection). Different rules apply per category."
  ),
  q("reg-ch7-auth-21", "cisi-reg", "reg-ch7", "7.3", "Change of Control", "authorisation", "medium",
    "What happens if ownership of authorized firm changes significantly?",
    ["FCA cannot object — an alternative choice", "Ownership change is unrestricted — an alternative choice", "No approval needed — an alternative choice", "FCA approval required for change of"], 3,
    "Change of control: acquiring 10% (notifiable) or 30%+ (control threshold) of authorized firm requires FCA approval. Acquirer must be fit/proper. Prevents unsuitable ownership."
  ),
  q("reg-ch7-auth-22", "cisi-reg", "reg-ch7", "7.3", "Dealing Disclosure", "authorisation", "medium",
    "What dealing disclosures must authorized firms make?",
    ["Best execution reports, order execution", "Transparency unnecessary — an alternative choice", "No disclosure required — an alternative choice", "Can hide transaction costs — an alternative choice"], 0,
    "Disclosure: firms must explain best execution, provide order execution reports, disclose costs/charges, explain conflicts. Transparency allows clients to assess value."
  ),
  q("reg-ch7-auth-23", "cisi-reg", "reg-ch7", "7.2", "Suitability Assessment", "authorisation", "medium",
    "What must firms do to comply with suitability requirements?",
    ["No assessment needed — an alternative choice", "Assessment is optional — an alternative choice", "Assess client needs/circumstances", "Recommend unsuitable products — an alternative choice"], 2,
    "Suitability: firm must understand client (risk tolerance, financial situation, objectives), recommend suitable products (investments, insurance), document reasoning, monitor ongoing."
  ),
  q("reg-ch7-auth-24", "cisi-reg", "reg-ch7", "7.1", "Breach of Authorization", "authorisation", "medium",
    "What is the consequence of conducting regulated activities without authorization?",
    ["Only fined — an alternative choice", "No consequences — an alternative choice", "Criminal offense (up to 2 years prison, unlimited", "Only civil penalty — an alternative choice"], 2,
    "Unauthorized conduct: criminal offense under FSMA s.23. Penalties: imprisonment (up to 2 years), unlimited fine. Customers can claim compensation from FSCS."
  ),
  q("reg-ch7-auth-25", "cisi-reg", "reg-ch7", "7.3", "Ongoing Authorization Requirements", "authorisation", "medium",
    "What must authorized firms do to maintain authorization?",
    ["Annual renewal required — an alternative choice", "One-time compliance only — an alternative choice", "Comply with rules, maintain", "Can ignore rules once authorized — an alternative choice"], 2,
    "Ongoing: firms must continuously comply with rules, maintain capital adequacy, submit regular returns (financial, conduct), report significant events, ensure governance/controls remain appropriate."
  ),
  q("reg-ch7-auth-26", "cisi-reg", "reg-ch7", "7.2", "Regulatory Approach to Authorization", "authorisation", "easy",
    "What is the FCA's approach to approving authorization applications?",
    ["Risk-based assessment; approves if applicant meets", "Automatic approval — an alternative choice", "Approach is arbitrary — an alternative choice", "Approves only large firms — an alternative choice"], 0,
    "FCA assessment: applicant meets authorization requirements (capital, governance, compliance), can be supervised effectively, complies with regulations. Discretionary decision."
  ),
  q("reg-ch7-auth-27", "cisi-reg", "reg-ch7", "7.1", "COBS Rules Overview", "authorisation", "medium",
    "What are the key areas covered by COBS (Conduct of Business sourcebook)?",
    ["No conduct rules — an alternative choice", "COBS is advisory — an alternative choice", "Only suitability matters — an alternative choice", "Suitability, appropriateness, best execution, financial"], 3,
    "COBS: conduct rules requiring suitability/appropriateness, best execution, clear communication, conflicts management, client money protection, complaint handling, financial promotions."
  ),
  q("reg-ch7-auth-28", "cisi-reg", "reg-ch7", "7.3", "Remuneration Disclosure", "authorisation", "medium",
    "What must firms disclose about remuneration?",
    ["Can hide fees — an alternative choice", "No disclosure required — an alternative choice", "Amount of fees/commissions, total cost of advice/service,", "Oral disclosure sufficient — an alternative choice"], 2,
    "Fee disclosure: amount, basis (fixed, % of AUM), whether negotiable, ongoing charges. Commission disclosure: amount, or explanation if paid by product provider. Pre-advice disclosure mandatory."
  ),
  q("reg-ch7-auth-29", "cisi-reg", "reg-ch7", "7.2", "Senior Management Accountability", "authorisation", "hard",
    "How does SM&CR create personal accountability for senior managers?",
    ["Firms are solely liable — an alternative choice", "Managers cannot be penalized — an alternative choice", "Managers are personally liable for", "Accountability is weak — an alternative choice"], 2,
    "SM&CR accountability: senior manager personally accountable for prescribed responsibilities. FCA can fine (unlimited) and ban individuals directly. Creates strong personal incentive to comply."
  ),
  q("reg-ch7-auth-30", "cisi-reg", "reg-ch7", "7.1", "Regulatory Perimeter Issues", "authorisation", "hard",
    "Why is determining regulatory perimeter important?",
    ["Perimeter is irrelevant — an alternative choice", "All activities are regulated — an alternative choice", "Perimeter is always clear — an alternative choice", "Activities outside perimeter get no FCA conduct protection"], 3,
    "Perimeter importance: determines which activities/firms regulated by FCA. Outside perimeter: no conduct protections (e.g., general economic advice, unregulated products, unregulated advisers)."
  ),
  q("reg-ch8-crime-1", "cisi-reg", "reg-ch8", "8.1", "Money Laundering Definition", "crime", "easy",
    "What is money laundering?",
    ["Legal financial activity — an alternative choice", "Bank lending — an alternative choice", "Converting illegal proceeds into apparently legitimate", "Currency exchange — an alternative choice"], 2,
    "Money laundering: process of converting illegally-obtained money (dirty money) into funds that appear legitimate. Three stages: placement, layering, integration."
  ),
  q("reg-ch8-crime-2", "cisi-reg", "reg-ch8", "8.1", "Three Stages of Money Laundering", "crime", "easy",
    "What are the three stages of money laundering?",
    ["No stages exist — an alternative choice", "Placement (intro to financial system), Layering (disguise),", "Single stage only — an alternative choice", "Stages are interchangeable — an alternative choice"], 1,
    "Placement: illegal funds enter financial system (deposits, purchases). Layering: transfer/convert funds to hide origin (trades, transfers). Integration: reintroduce as legitimate income."
  ),
  q("reg-ch8-crime-3", "cisi-reg", "reg-ch8", "8.1", "Money Laundering Legislation", "crime", "easy",
    "What is the primary legislation addressing money laundering?",
    ["Proceeds of Crime Act 2002 (POCA) and Money Laundering", "Local police authority — an alternative choice", "FSMA only — an alternative choice", "No money laundering laws — an alternative choice"], 0,
    "POCA 2002: defines money laundering offences, creates AML regime. MLR 2017: requirements on firms (KYC, CDD, SARs, MLRO appointment, training)."
  ),
  q("reg-ch8-crime-4", "cisi-reg", "reg-ch8", "8.1", "Know Your Customer", "crime", "medium",
    "What does KYC (Know Your Customer) require?",
    ["No client information needed — an alternative choice", "Only name matters — an alternative choice", "Firms must obtain information about", "KYC is optional — an alternative choice"], 2,
    "KYC: firms must verify client identity (government ID), understand background (occupation, source of funds), identify beneficial owners (for entities), assess ML/TF risk."
  ),
  q("reg-ch8-crime-5", "cisi-reg", "reg-ch8", "8.1", "Customer Due Diligence", "crime", "medium",
    "What is Customer Due Diligence (CDD)?",
    ["CDD applies only to banks — an alternative choice", "Enhanced customer information gathering before establishing relationship", "No due diligence required — an alternative choice", "CDD is one-time — an alternative choice"], 1,
    "CDD: firms assess ML/TF risk of customer before onboarding. Gather identity, beneficial owner info, purpose/nature of relationship, source of funds. Ongoing monitoring required."
  ),
  q("reg-ch8-crime-6", "cisi-reg", "reg-ch8", "8.1", "Enhanced Due Diligence", "crime", "medium",
    "When must firms apply Enhanced Due Diligence (EDD)?",
    ["All customers get EDD — an alternative choice", "For high-risk customers: PEPs, countries with poor", "EDD is optional — an alternative choice", "EDD never required — an alternative choice"], 1,
    "EDD required: Politically Exposed Persons (PEPs), beneficial owners from high-risk countries, complex corporate structures, high cash/commodity trades, high-value customers."
  ),
  q("reg-ch8-crime-7", "cisi-reg", "reg-ch8", "8.1", "Suspicious Activity Reports", "crime", "medium",
    "What is a Suspicious Activity Report (SAR)?",
    ["Optional reporting — an alternative choice", "Written report to FCA when firm suspects ML, TF, or other financial crime", "Report to customer first — an alternative choice", "No reporting mechanism — an alternative choice"], 1,
    "SAR: firm (via MLRO) reports to FCA's Financial Crime section within 10 days of suspicion. Tipping-off prohibited (warning customer = breach). Protects firm from liability."
  ),
  q("reg-ch8-crime-8", "cisi-reg", "reg-ch8", "8.1", "Money Laundering Reporting Officer", "crime", "medium",
    "What is the role of a Money Laundering Reporting Officer (MLRO)?",
    ["Only banks need MLRO — an alternative choice", "MLRO is optional — an alternative choice", "No specific role needed — an alternative choice", "Responsible for firm's AML/TF"], 3,
    "MLRO (appointed by senior management): oversees AML/TF systems, reviews staff suspicions, decides on SAR reporting, maintains records, liaises with FCA, trains staff."
  ),
  q("reg-ch8-crime-9", "cisi-reg", "reg-ch8", "8.1", "Financial Crime Guide", "crime", "easy",
    "What is the Financial Crime Guide?",
    ["Only for banks — an alternative choice", "FCA guidance (non-binding) on firms' financial crime controls", "Binding rules — an alternative choice", "No guidance exists — an alternative choice"], 1,
    "Financial Crime Guide: FCA non-binding guidance on ML, TF, fraud, bribery, data security. Provides examples of effective controls and firm risk assessment approaches."
  ),
  q("reg-ch8-crime-10", "cisi-reg", "reg-ch8", "8.2", "Market Abuse Regulation", "crime", "medium",
    "What does UK MAR cover?",
    ["No market abuse rules — an alternative choice", "MAR is advisory — an alternative choice", "Only insider dealing — an alternative choice", "Insider dealing, market manipulation, insider"], 3,
    "UK MAR: applies to trading in regulated markets/MTFs. Covers: insider dealing (trading on material non-public info), market manipulation (artificial pricing/signals), misuse of information."
  ),
  q("reg-ch8-crime-11", "cisi-reg", "reg-ch8", "8.2", "Inside Information", "crime", "medium",
    "What qualifies as inside information?",
    ["Only official statements — an alternative choice", "Material non-public information that if disclosed would affect", "Price impact alone determines — an alternative choice", "All information is inside — an alternative choice"], 1,
    "Inside information: (1) specific/precise, (2) not made public, (3) price-sensitive (would significantly affect price if disclosed). Relates to company, securities, derivatives."
  ),
  q("reg-ch8-crime-12", "cisi-reg", "reg-ch8", "8.2", "Insider Dealing Definition", "crime", "easy",
    "What is insider dealing?",
    ["Trading on material non-public information while knowing", "Trading on research — an alternative choice", "Legal activity always — an alternative choice", "Public information trading — an alternative choice"], 0,
    "Insider dealing: possess inside info + know it's inside + know obtained from inside source + deal (buy/sell). Criminal offense. Penalties: 7+ years prison, unlimited fine."
  ),
  q("reg-ch8-crime-13", "cisi-reg", "reg-ch8", "8.2", "Market Manipulation", "crime", "medium",
    "What constitutes market manipulation?",
    ["All trading impacts prices — an alternative choice", "Manipulation is legal — an alternative choice", "Artificial pricing, spreading false rumors, spoofing (false", "No market abuse exists — an alternative choice"], 2,
    "Market manipulation: (1) false signals (fake orders/rumors), (2) artificial pricing, (3) disruptive conduct (spoofing), (4) using deception to affect price."
  ),
  q("reg-ch8-crime-14", "cisi-reg", "reg-ch8", "8.2", "Safe Harbours", "crime", "medium",
    "What are safe harbours in UK MAR?",
    ["Activities permitted despite appearing", "Safe harbours are temporary — an alternative choice", "All activities permitted — an alternative choice", "No safe harbours exist — an alternative choice"], 0,
    "Safe harbours (UK MAR Article 3-6): share buybacks (controlled manner), stabilization (price support), investment research (published with disclosures). Must meet strict criteria."
  ),
  q("reg-ch8-crime-15", "cisi-reg", "reg-ch8", "8.2", "Insider Lists", "crime", "medium",
    "What are insider lists and who must maintain them?",
    ["No insider lists needed — an alternative choice", "Optional documentation — an alternative choice", "Updated annually — an alternative choice", "List of persons with access to inside information"], 3,
    "Insider lists: issuers maintain list of all persons accessing inside information (employees, advisers, credit agencies). Separate lists per transaction and permanent insiders. Updated when access changes."
  ),
  q("reg-ch8-crime-16", "cisi-reg", "reg-ch8", "8.2", "Market Soundings", "crime", "medium",
    "What are market soundings and what rule applies?",
    ["Soundings are unrestricted — an alternative choice", "Discreet inquiries about transaction interest before formal announcement", "No formal process needed — an alternative choice", "Disclosure not required — an alternative choice"], 1,
    "Market soundings: firm may informally test investor interest before formal announcement. Recipient must be told it's a sounding. Firm can impose silence/confidentiality."
  ),
  q("reg-ch8-crime-17", "cisi-reg", "reg-ch8", "8.2", "Investment Recommendations", "crime", "medium",
    "What must investment recommendations disclose?",
    ["Basis irrelevant — an alternative choice", "Analyst conflicts (positions in securities, compensation),", "No disclosures needed — an alternative choice", "Conflicts hidden acceptable — an alternative choice"], 1,
    "Recommendation disclosures: analysts must state conflicts (own positions in the security), compensation, investment basis (DCF, comparables), price target timeframe to prevent market abuse."
  ),
  q("reg-ch8-crime-18", "cisi-reg", "reg-ch8", "8.3", "Criminal Justice Act 1993", "crime", "easy",
    "What does the Criminal Justice Act 1993 address?",
    ["Money laundering exclusively — an alternative choice", "Financial crime generally — an alternative choice", "Market abuse only — an alternative choice", "Insider dealing offences; defines"], 3,
    "CJA 1993 (s.52): insider dealing offense. Defines: insider (access to inside info from inside source), inside information (specific, non-public, price-sensitive), securities (company securities)."
  ),
  q("reg-ch8-crime-19", "cisi-reg", "reg-ch8", "8.3", "Insider Dealing Defences", "crime", "medium",
    "What are defences to insider dealing?",
    ["No defences exist — an alternative choice", "Conduct permitted by market abuse rules (safe", "Defences impossible — an alternative choice", "Intent irrelevant — an alternative choice"], 1,
    "Defences: (1) conduct permitted by MAR safe harbour rules, (2) not knowing information was inside information, (3) legitimate reason unconnected to inside information."
  ),
  q("reg-ch8-crime-20", "cisi-reg", "reg-ch8", "8.3", "Insider Dealing Instruments", "crime", "medium",
    "What financial instruments are caught by insider dealing rules?",
    ["Company securities (shares, bonds), derivatives", "Bonds exempt — an alternative choice", "No instruments covered — an alternative choice", "Only shares — an alternative choice"], 0,
    "CJA Schedule 2 instruments: company securities (shares, debentures, debt securities), options/futures on securities, contracts for difference, index derivatives."
  ),
  q("reg-ch8-crime-21", "cisi-reg", "reg-ch8", "8.3", "Prosecution Powers", "crime", "medium",
    "Who can prosecute insider dealing and market abuse cases?",
    ["Only courts — an alternative choice", "No prosecution authority — an alternative choice", "Only FCA can act — an alternative choice", "FCA (civil enforcement + referral to prosecutors), Crown"], 3,
    "Enforcement: FCA investigates and enforces civilly (fines, bans). CPS/SFO handle criminal prosecution. FCA can refer to prosecutors. Overlapping jurisdiction."
  ),
  q("reg-ch8-crime-22", "cisi-reg", "reg-ch8", "8.4", "Bribery Act 2010", "crime", "medium",
    "What are the main offences under the Bribery Act 2010?",
    ["No bribery offences — an alternative choice", "Bribery legal — an alternative choice", "Only active bribery — an alternative choice", "Active bribery (offering/promising),"], 3,
    "Bribery Act: Section 1 (active bribery), Section 2 (passive bribery), Section 6 (foreign official bribery), Section 7 (corporate failure to prevent). Unlimited fines."
  ),
  q("reg-ch8-crime-23", "cisi-reg", "reg-ch8", "8.4", "Corporate Bribery Liability", "crime", "hard",
    "How can a commercial organization be liable for bribery?",
    ["If persons associated fail to prevent", "Cannot be liable — an alternative choice", "Only individuals liable — an alternative choice", "Liability is impossible — an alternative choice"], 0,
    "Section 7: organization liable if associated persons commit bribery on firm's behalf. Defence: organization had adequate anti-bribery procedures. Prevents firms ignoring bribery."
  ),
  q("reg-ch8-crime-24", "cisi-reg", "reg-ch8", "8.4", "Adequate Procedures Defence", "crime", "medium",
    "What constitutes adequate procedures against bribery?",
    ["Any procedure sufficient — an alternative choice", "Procedures optional — an alternative choice", "Proportionate procedures: code of conduct, risk", "No procedures needed — an alternative choice"], 2,
    "Six principles: proportionate procedures, top-level commitment, risk-based due diligence (employees, associates, third parties), training, monitoring/audit, consequences for breaches."
  ),
  q("reg-ch8-crime-25", "cisi-reg", "reg-ch8", "8.5", "Data Protection Act", "crime", "medium",
    "What is the role of the Information Commissioner (ICO)?",
    ["Oversees compliance with Data Protection Act 2018 (GDPR, PECR)", "ICO is advisory — an alternative choice", "No data protection authority — an alternative choice", "Only FCA oversight — an alternative choice"], 0,
    "ICO: independent authority enforcing Data Protection Act 2018 (UK GDPR implementation), PECR (direct marketing), freedom of information. Investigates complaints, issues guidance."
  ),
  q("reg-ch8-crime-26", "cisi-reg", "reg-ch8", "8.6", "Terrorism Act 2000", "crime", "medium",
    "What is the regulatory requirement regarding terrorism financing?",
    ["No reporting required — an alternative choice", "Only police concern — an alternative choice", "No terrorism provisions — an alternative choice", "Firms must prevent terrorist financing (similar to"], 3,
    "Terrorism Act 2000: firms must have TF controls (KYC, CDD), report suspicions, maintain records, freeze accounts of designated persons. Failure = criminal liability."
  ),
  q("reg-ch8-crime-27", "cisi-reg", "reg-ch8", "8.6", "Sanctions Lists", "crime", "medium",
    "What are financial sanctions and how are they enforced?",
    ["Only military enforcement — an alternative choice", "Government restrictions on dealing with designated", "No sanctions exist — an alternative choice", "Sanctions advisory — an alternative choice"], 1,
    "Sanctions: government designates persons/entities for financial restrictions. Firms must screen clients, block transactions, report. Breach = liability. Lists maintained by HM Treasury."
  ),
  q("reg-ch8-crime-28", "cisi-reg", "reg-ch8", "8.1", "Risk-Based AML Approach", "crime", "medium",
    "What does risk-based AML approach mean?",
    ["No risk assessment needed — an alternative choice", "Risk irrelevant — an alternative choice", "Firms allocate resources proportionate", "All customers treated equally — an alternative choice"], 2,
    "Risk-based approach: firms assess ML/TF risk (country, industry, customer type, activities), apply controls proportionate to risk. Simpler checks for low-risk; enhanced for high-risk."
  ),
  q("reg-ch8-crime-29", "cisi-reg", "reg-ch8", "8.1", "Tipping Off", "crime", "medium",
    "What is tipping off and when is it prohibited?",
    ["Tipping off always permitted — an alternative choice", "No prohibition on tipping — an alternative choice", "Alerting customer to SAR/investigation", "Legal advice always excepted — an alternative choice"], 2,
    "Tipping off: prohibited to disclose to customer that SAR made/investigation underway. Exception: legal advice (solicitor-client privilege). Breach = criminal offense."
  ),
  q("reg-ch8-crime-30", "cisi-reg", "reg-ch8", "8.1", "JMLSG Guidance", "crime", "medium",
    "What is JMLSG and what guidance does it provide?",
    ["Regulatory authority — an alternative choice", "Joint Money Laundering Steering Group: industry", "No guidance function — an alternative choice", "Sets binding rules — an alternative choice"], 1,
    "JMLSG: representatives from firms and authorities produce guidance on implementing MLR 2017. Non-binding but influential. Firms follow guidance to meet regulatory expectations."
  ),
  q("reg-ch8-crime-31", "cisi-reg", "reg-ch8", "8.1", "National Crime Agency", "crime", "easy",
    "What is the National Crime Agency and its AML role?",
    ["No crime authority — an alternative choice", "Banking regulator — an alternative choice", "NCA: UK law enforcement agency receiving", "Substitute for FCA — an alternative choice"], 2,
    "NCA: receives all SARs from firms, analyzes for intelligence, investigates major crimes, coordinates with HMRC, police, international agencies. More strategic than FCA's enforcement."
  ),
  q("reg-ch8-crime-32", "cisi-reg", "reg-ch8", "8.2", "Transaction Reporting", "crime", "medium",
    "What transaction information must firms maintain?",
    ["No record-keeping required — an alternative choice", "Record all transactions: date, amount,", "Records optional — an alternative choice", "1-year retention sufficient — an alternative choice"], 1,
    "Transaction records: date, amount, client, counterparty, nature, instruments traded, accounts. Must be kept 5 years. Provided to FCA on demand. Enables market abuse detection."
  ),
  q("reg-ch8-crime-33", "cisi-reg", "reg-ch8", "8.3", "Proceeds of Crime Act", "crime", "easy",
    "What is the significance of Proceeds of Crime Act 2002?",
    ["No offense definitions — an alternative choice", "Only applies to drugs — an alternative choice", "Defines money laundering offences;", "No general application — an alternative choice"], 2,
    "POCA 2002: s.327-329 creates three money laundering offences (concealing, arranging, acquiring). Applies to all criminal conduct. Sec of State can declare new crimes covered."
  ),
  q("reg-ch8-crime-34", "cisi-reg", "reg-ch8", "8.2", "MAR Scope", "crime", "hard",
    "What is the extraterritorial scope of UK MAR?",
    ["No extraterritorial reach — a financial measure", "Applies to trading in UK/EEA regulated", "Only UK instruments — an alternative choice", "Scope limited to UK — an alternative choice"], 1,
    "Extraterritorial reach: MAR applies to dual-listed instruments (UK listing + third-country listing). OTC derivatives on regulated instruments caught. Very broad scope."
  ),
  q("reg-ch8-crime-35", "cisi-reg", "reg-ch8", "8.1", "PEPs and Beneficial Owners", "crime", "medium",
    "Why are Politically Exposed Persons (PEPs) and beneficial ownership important in AML?",
    ["PEPs are low-risk — an alternative choice", "PEPs = high ML risk (corruption); beneficial owner", "Ownership irrelevant — an alternative choice", "No special treatment needed — an alternative choice"], 1,
    "PEPs: high officials (ministers, judges) at high corruption risk. EDD required for direct PEPs and family/associates. Beneficial owner: identify true controllers of entities to prevent hiding ML."
  ),
  q("reg-ch9-complaints-1", "cisi-reg", "reg-ch9", "9.1", "Complaint Handling Rules", "complaints", "easy",
    "What are the main FCA complaint handling rules?",
    ["DISP (Dispute Resolution sourcebook): 8-week rule,", "No complaint rules — an alternative choice", "Verbal response only — an alternative choice", "No timeframe required — an alternative choice"], 0,
    "DISP rules: firms must acknowledge complaints promptly, investigate, respond within 8 weeks. If not resolved, customer can escalate to Financial Ombudsman Service."
  ),
  q("reg-ch9-complaints-2", "cisi-reg", "reg-ch9", "9.1", "Complaint Definition", "complaints", "easy",
    "What constitutes a complaint under FCA rules?",
    ["No definition exists — an alternative choice", "Only major complaints — an alternative choice", "Only written complaints — an alternative choice", "Any oral/written expression of"], 3,
    "Complaint: customer expresses dissatisfaction about firm's product/service/conduct, whether justified or not. Excludes: policy cancellations, regulatory inquiries, credit decisions."
  ),
  q("reg-ch9-complaints-3", "cisi-reg", "reg-ch9", "9.1", "8-Week Rule", "complaints", "easy",
    "What is the 8-week rule for complaint handling?",
    ["Firms can ignore — an alternative choice", "Firm must respond to complaint or advise", "No time limit — an alternative choice", "12 weeks applies — an alternative choice"], 1,
    "8-week rule: firm must issue final response (upheld/rejected) or written consent to extend within 8 weeks. If not resolved, customer has right to FOS escalation."
  ),
  q("reg-ch9-complaints-4", "cisi-reg", "reg-ch9", "9.1", "Complaint Response Content", "complaints", "easy",
    "What must a complaint response include?",
    ["Oral response sufficient — an alternative choice", "No format required — an alternative choice", "No explanation needed — an alternative choice", "Clear decision (upheld/rejected)"], 3,
    "Response: must clearly state decision, explain reasons, confirm right to escalate to FOS within 6 months, state compensation (if any), provide firm's contact/FOS details."
  ),
  q("reg-ch9-complaints-5", "cisi-reg", "reg-ch9", "9.1", "Vulnerable Complainants", "complaints", "medium",
    "How should firms handle complaints from vulnerable customers?",
    ["All complaints handled identically — an alternative choice", "Vulnerable need no special treatment — an alternative choice", "Identify vulnerability (age, health, literacy), extend time if needed,", "Speed over clarity — an alternative choice"], 2,
    "Vulnerable handling: recognize vulnerability, allow extra time/support, use plain language, confirm understanding, provide written summaries, offer alternative communication methods."
  ),
  q("reg-ch9-complaints-6", "cisi-reg", "reg-ch9", "9.2", "Financial Ombudsman Service", "complaints", "medium",
    "What is the Financial Ombudsman Service?",
    ["No ombudsman exists — an alternative choice", "Independent scheme resolving consumer", "Only for major firms — an alternative choice", "Part of FCA — an alternative choice"], 1,
    "FOS: independent statutory scheme. Consumers can escalate after 8 weeks or if dissatisfied. FOS investigates, mediates, makes awards. Free to consumers; paid by industry levies."
  ),
  q("reg-ch9-complaints-7", "cisi-reg", "reg-ch9", "9.2", "FOS Jurisdiction", "complaints", "medium",
    "What firms/complaints are within FOS jurisdiction?",
    ["Only large firms — an alternative choice", "No limits — an alternative choice", "All complaints accepted — an alternative choice", "Authorized financial firms; complaints about products/services/conduct"], 3,
    "FOS jurisdiction: authorized firms (with exceptions), complaints about products/services, conduct covered by COBS/ICOBS. Time limit: 6 years from act or 3 years from awareness."
  ),
  q("reg-ch9-complaints-8", "cisi-reg", "reg-ch9", "9.2", "FOS Decision Making", "complaints", "medium",
    "What approach does FOS use to resolve disputes?",
    ["Decisions not binding — an alternative choice", "No structured process — an alternative choice", "Always upholds firm — an alternative choice", "Investigates facts, applies law/rules, determines"], 3,
    "FOS approach: fairness in law and fact. Has discretion to apply equity. Decisions binding on firm (unless firm accepts/rejects before FOS decision). Consumers can reject."
  ),
  q("reg-ch9-complaints-9", "cisi-reg", "reg-ch9", "9.2", "Ombudsman Awards", "complaints", "medium",
    "What can FOS award in complaints?",
    ["Only small amounts — an alternative choice", "Unlimited awards — an alternative choice", "No awards — an alternative choice", "Compensation for pecuniary loss,"], 3,
    "FOS awards: money (to cover loss), interest, compensation for distress (typically £100-1000s depending on circumstances). Capped at £385,000 per claim. Binding on firm."
  ),
  q("reg-ch9-complaints-10", "cisi-reg", "reg-ch9", "9.2", "FOS Jurisdiction Limits", "complaints", "hard",
    "What are limitations of FOS jurisdiction?",
    ["Cannot hear complaints against", "No limitations — an alternative choice", "Universal jurisdiction — an alternative choice", "Limits are irrelevant — an alternative choice"], 0,
    "Limits: not for unauthorized firms, not for large commercial disputes (FCA/courts), not for regulatory decisions (e.g., authorization withdrawal), time-barred cases."
  ),
  q("reg-ch9-complaints-11", "cisi-reg", "reg-ch9", "9.3", "FSCS Compensation Scheme", "complaints", "easy",
    "What is the Financial Services Compensation Scheme?",
    ["No compensation — an alternative choice", "Firm-funded — an alternative choice", "Compensates customers when", "Optional industry scheme — an alternative choice"], 2,
    "FSCS: statutory compensation scheme. Covers: protected deposits (£85k), investment business (£85k), insurance (100%+ varies). One claim per firm per claimant."
  ),
  q("reg-ch9-complaints-12", "cisi-reg", "reg-ch9", "9.3", "FSCS Eligibility", "complaints", "medium",
    "Who is eligible for FSCS compensation?",
    ["Consumers with protected claim", "All claimants eligible — an alternative choice", "Only consumers — an alternative choice", "Eligibility varies widely — an alternative choice"], 0,
    "Eligible claimant: consumer (individual), small business; protected claim (deposit, investment, insurance); firm in default (insolvent). Excludes: institutional investors, connected firms."
  ),
  q("reg-ch9-complaints-13", "cisi-reg", "reg-ch9", "9.3", "FSCS Deposit Coverage", "complaints", "easy",
    "What does FSCS deposit coverage include?",
    ["No deposit protection — an alternative choice", "Unlimited coverage — an alternative choice", "Protected deposits up to £85", "£100,000 limit — an alternative choice"], 2,
    "Deposit coverage: up to £85,000 per claimant per authorized bank/building society. Includes accrued interest. Corporate deposits covered separately. One account = one claim."
  ),
  q("reg-ch9-complaints-14", "cisi-reg", "reg-ch9", "9.3", "FSCS Investment Coverage", "complaints", "medium",
    "What does FSCS investment business coverage include?",
    ["£50,000 limit — an alternative choice", "Unlimited investment coverage — an alternative choice", "Protected investment business claims up", "No investment protection — an alternative choice"], 2,
    "Investment coverage: £85,000 per eligible claimant per firm. Covers: investments held, advice/management claims, portfolio losses. Derivatives/leveraged products = limited/no coverage."
  ),
  q("reg-ch9-complaints-15", "cisi-reg", "reg-ch9", "9.3", "FSCS Insurance Coverage", "complaints", "easy",
    "What does FSCS insurance coverage include?",
    ["All insurance covered fully — an alternative choice", "Protected insurance claims (long-term 100%, general", "No insurance coverage — an alternative choice", "Limited to £50,000 — an alternative choice"], 1,
    "Insurance: long-term (life) 100%, compulsory general (car, employer's liability) 100%, non-compulsory general (travel, pet) 90%. No limits. Separate per type."
  ),
  q("reg-ch9-complaints-16", "cisi-reg", "reg-ch9", "9.3", "FSCS Claim Process", "complaints", "medium",
    "How do claimants make FSCS claims?",
    ["Automatic compensation — an alternative choice", "Claims never processed — an alternative choice", "Direct to firm — an alternative choice", "Contact FSCS after firm insolvency declared"], 3,
    "FSCS process: (1) firm fails, (2) claimant applies to FSCS, (3) FSCS assesses eligibility/calculates compensation, (4) pays claimant. Claims must be made (not automatic)."
  ),
  q("reg-ch9-complaints-17", "cisi-reg", "reg-ch9", "9.1", "Complaint Acknowledgement", "complaints", "easy",
    "When should firms acknowledge complaints?",
    ["No timeline required — an alternative choice", "Weeks allowed — an alternative choice", "Acknowledgement optional — an alternative choice", "Within specified timeframe (typically 1-2 days for"], 3,
    "Acknowledgement: firm should acknowledge receipt promptly, provide reference, estimate timeline, set customer expectations. Demonstrates responsiveness and professionalism."
  ),
  q("reg-ch9-complaints-18", "cisi-reg", "reg-ch9", "9.2", "FOS Escalation Right", "complaints", "medium",
    "What is the customer's right to escalate to FOS?",
    ["No escalation right — an alternative choice", "Can escalate anytime — an alternative choice", "After 8 weeks without firm response, or", "Only within 1 month — an alternative choice"], 2,
    "Escalation: customer receives FOS details with firm response. Can escalate if dissatisfied or if 8-week deadline passes. Must escalate within 6 months of FOS details provided."
  ),
  q("reg-ch9-complaints-19", "cisi-reg", "reg-ch9", "9.1", "Complaint Records", "complaints", "medium",
    "What must firms record about complaints?",
    ["Oral records sufficient — an alternative choice", "No record-keeping — an alternative choice", "Date received, description, response issued, outcome,", "1-year retention — an alternative choice"], 2,
    "Records: complaint details, investigation findings, response (date, decision, reasoning), compensation, FOS reference. Maintained 6 years. Accessible to FCA/FOS for review."
  ),
  q("reg-ch9-complaints-20", "cisi-reg", "reg-ch9", "9.2", "Multiple Complaints", "complaints", "hard",
    "How should firms handle multiple similar complaints?",
    ["Ignore patterns — an alternative choice", "Never escalate — an alternative choice", "Handle each separately — a financial measure", "Track patterns, assess systemic issues, escalate to"], 3,
    "Pattern recognition: similar complaints may indicate systemic issue. Firms should: track complaints by type, analyze root causes, implement corrective actions, notify FCA if serious."
  ),
  q("reg-ch9-complaints-21", "cisi-reg", "reg-ch9", "9.1", "Complaint Scope", "complaints", "easy",
    "What types of matters are handled as complaints?",
    ["Regulatory inquiries only — an alternative choice", "Service issues, poor advice, wrong", "Everything is a complaint — an alternative choice", "Only major breaches — an alternative choice"], 1,
    "Complaint scope: virtually all customer dissatisfaction about firm's service/conduct. Excludes: fact-checking, regulatory inquiries, credit decisions, general inquiries."
  ),
  q("reg-ch9-complaints-22", "cisi-reg", "reg-ch9", "9.1", "Root Cause Analysis", "complaints", "medium",
    "Why do firms conduct root cause analysis of complaints?",
    ["Only required by FOS — an alternative choice", "To identify systemic issues, prevent", "No purpose — an alternative choice", "Complaints are irrelevant — an alternative choice"], 1,
    "Root cause analysis: firms investigate why complaint occurred (process failure, training gap, system issue), implement corrections, monitor effectiveness. Shows FCA seriousness."
  ),
  q("reg-ch9-complaints-23", "cisi-reg", "reg-ch9", "9.3", "FSCS Levy", "complaints", "medium",
    "How is FSCS funded?",
    ["Taxpayer funded — an alternative choice", "Industry levies on authorized firms", "Customer funded — an alternative choice", "From firm profits — an alternative choice"], 1,
    "FSCS funding: annual levies on authorized firms proportionate to sector (deposits, investments, insurance, credit, lenders) and firm's claims history and financial crime risk."
  ),
  q("reg-ch9-complaints-24", "cisi-reg", "reg-ch9", "9.1", "Complaint Investigation Standards", "complaints", "medium",
    "What standards must firm investigations meet?",
    ["Bias acceptable — an alternative choice", "Investigations optional — an alternative choice", "Speed over accuracy — an alternative choice", "Impartial, timely, adequate scope, evidence-based"], 3,
    "Investigation standards: independent from sales team, sufficient scope, evidence-based (don't accept claims without proof), document reasoning, reach fair findings, offer remedies."
  ),
  q("reg-ch9-complaints-25", "cisi-reg", "reg-ch9", "9.2", "FOS Appeals", "complaints", "medium",
    "Can parties appeal FOS decisions?",
    ["All decisions appealable — an alternative choice", "Can appeal to courts — an alternative choice", "No appeals process; decisions binding on firm (unless", "Unlimited appeals allowed — an alternative choice"], 2,
    "No appeal: FOS decisions are final (binding on firm). Consumer can reject without accepting decision. Only judicial review available (very limited circumstances)."
  ),
  q("reg-ch9-complaints-26", "cisi-reg", "reg-ch9", "9.3", "FSCS Time Limits", "complaints", "hard",
    "What are time limits for FSCS claims?",
    ["Claims never expire — an alternative choice", "Indefinite period — an alternative choice", "Claims must be made within defined periods of firm", "No time limit — an alternative choice"], 2,
    "FSCS timeline: claimant must apply after insolvency declared. FSCS processes within 20 working days normally. Firm must notify FSCS of insolvency within specified timeframe."
  ),
  q("reg-ch9-complaints-27", "cisi-reg", "reg-ch9", "9.1", "Redress and Compensation", "complaints", "easy",
    "What types of redress can firms offer in complaints?",
    ["Refund of fees/charges, interest", "No redress available — an alternative choice", "Customer acceptance required — an alternative choice", "Only monetary compensation — an alternative choice"], 0,
    "Redress types: financial (refund, compensation), non-financial (service restoration, record correction), interest, goodwill gestures (within reasonableness). Proportionate to harm."
  ),
  q("reg-ch9-complaints-28", "cisi-reg", "reg-ch9", "9.1", "Communication and Culture", "complaints", "medium",
    "How should firms approach complaint communication?",
    ["Empathetic, clear, transparent", "Legal language only — an alternative choice", "Minimal communication — an alternative choice", "Defensive tone — an alternative choice"], 0,
    "Communication: acknowledge emotion, explain clearly, apologize if error (builds trust), offer solution, timeline. Professional but human. Turns complaint into retention opportunity."
  ),
  q("reg-ch9-complaints-29", "cisi-reg", "reg-ch9", "9.2", "FOS Mediation", "complaints", "medium",
    "Does FOS mediate disputes before formal decisions?",
    ["Only formal decisions — an alternative choice", "No mediation — an alternative choice", "Yes, FOS attempts mediation/settlement before formal adjudication", "Settlement impossible — an alternative choice"], 2,
    "FOS process: reception (initial assessment), investigation, possibility of settlement/mediation before formal decision. Many cases resolve through this process, saving time."
  ),
  q("reg-ch9-complaints-30", "cisi-reg", "reg-ch9", "9.3", "Cross-Firm FSCS", "complaints", "medium",
    "How is FSCS coverage calculated for customers with multiple accounts at same firm?",
    ["Aggregated per firm: multiple", "Unlimited aggregation — an alternative choice", "£85k per account — an alternative choice", "No aggregation — an alternative choice"], 0,
    "Aggregation: multiple accounts (savings, current, ISA) at same bank = one £85,000 cover total. Spouse's account = separate £85k. Different banks = separate £85k each."
  ),
  q("reg-ch10-conduct-1", "cisi-reg", "reg-ch10", "10.1", "COBS Rules Overview", "conduct", "easy",
    "What is COBS and what does it cover?",
    ["Conduct of Business sourcebook: FCA rules on", "Optional guidance — an alternative choice", "No conduct rules — an alternative choice", "Banking rules only — an alternative choice"], 0,
    "COBS: FCA sourcebook covering conduct standards for financial firms. Key areas: client categorization, suitability/appropriateness, best execution, client money, communications."
  ),
  q("reg-ch10-conduct-2", "cisi-reg", "reg-ch10", "10.1", "Client Categorization", "conduct", "easy",
    "How are clients categorized in COBS?",
    ["No defaults apply — an alternative choice", "Retail (max protection), Professional", "All clients identical — an alternative choice", "No categorization — an alternative choice"], 1,
    "Categorization: Retail (individual consumers), Professional (firms, wealthy individuals who opt in), Eligible Counterparty (banks, large investment firms). Rules vary by category."
  ),
  q("reg-ch10-conduct-3", "cisi-reg", "reg-ch10", "10.1", "Retail Client", "conduct", "easy",
    "What protections apply to Retail clients?",
    ["No protections — an alternative choice", "Maximum: suitability required, appropriateness", "Voluntary protections — an alternative choice", "Only warnings apply — an alternative choice"], 1,
    "Retail protections: suitability for advice, appropriateness warnings, conflicts disclosure, cancellation rights, client money segregation, complaints handling, FSCS coverage."
  ),
  q("reg-ch10-conduct-4", "cisi-reg", "reg-ch10", "10.1", "Professional Client", "conduct", "medium",
    "What are the criteria for Professional client categorization?",
    ["Authorized firms, large corporates (net assets", "Individual choice — an alternative choice", "No criteria — an alternative choice", "Only banks — an alternative choice"], 0,
    "Professional: (1) authorized firms, (2) large corporates (€500k+ net assets), (3) pension funds, governments, (4) Retail who opt in and meet experience/knowledge tests."
  ),
  q("reg-ch10-conduct-5", "cisi-reg", "reg-ch10", "10.1", "Eligible Counterparty", "conduct", "medium",
    "What is an Eligible Counterparty?",
    ["No EC classification — an alternative choice", "Retail equivalent — an alternative choice", "Large financial institutions (banks, fund managers) who", "All customers can be EC — an alternative choice"], 2,
    "Eligible Counterparty: primarily banks, large investment firms dealing in professional capacity. Minimal COBS protections. Firms can treat as EC for derivatives/capital markets."
  ),
  q("reg-ch10-conduct-6", "cisi-reg", "reg-ch10", "10.2", "Suitability Rule", "conduct", "easy",
    "What does suitability require?",
    ["Customer acceptance irrelevant — an alternative choice", "No assessment needed — an alternative choice", "Adviser must assess client", "Recommend any product — an alternative choice"], 2,
    "Suitability: firm must understand client's financial situation, objectives, risk tolerance. Recommend only products that fit. Documentation mandatory. Breach = liability."
  ),
  q("reg-ch10-conduct-7", "cisi-reg", "reg-ch10", "10.2", "Appropriateness Rule", "conduct", "medium",
    "What is appropriateness and when does it apply?",
    ["For non-advised sales: firm assesses if", "Only for professional clients — an alternative choice", "Warning alone sufficient — an alternative choice", "Requires full suitability assessment — an alternative choice"], 0,
    "Appropriateness: non-advised product sales (execution-only, distance marketing). Firm assesses if customer can understand product. If not, must issue warning."
  ),
  q("reg-ch10-conduct-8", "cisi-reg", "reg-ch10", "10.2", "Best Execution", "conduct", "medium",
    "What does best execution require?",
    ["Price only matters — an alternative choice", "Firm must execute orders to achieve best overall result:", "Can prioritize profit — an alternative choice", "Execution quality irrelevant — an alternative choice"], 1,
    "Best execution: firm executes orders to get best overall outcome for client. Factors: price, costs, speed, probability of execution, settlement. Firms maintain policies and monitor."
  ),
  q("reg-ch10-conduct-9", "cisi-reg", "reg-ch10", "10.3", "Financial Promotions", "conduct", "medium",
    "What standards apply to financial promotions?",
    ["Fair, clear, not misleading; disclose", "No standards apply — an alternative choice", "No risk disclosure — an alternative choice", "Misleading acceptable — an alternative choice"], 0,
    "Financial promotion standards: factually accurate, fair and clear, prominent risk warnings, not disguise important info, identify FCA regulated firm. Applies to advertising/marketing."
  ),
  q("reg-ch10-conduct-10", "cisi-reg", "reg-ch10", "10.3", "Risk Warnings", "conduct", "easy",
    "How must risk warnings be presented in promotions?",
    ["Small font acceptable — an alternative choice", "Warnings optional — an alternative choice", "Can hide risks — an alternative choice", "Prominent, same font size as benefits,"], 3,
    "Risk presentation: risks must be equally prominent as benefits (same font size), in plain language, not buried. FCA rule: risks cannot be less visible than benefits."
  ),
  q("reg-ch10-conduct-11", "cisi-reg", "reg-ch10", "10.3", "Promotion Advertising", "conduct", "medium",
    "Who is responsible for accuracy of financial promotions?",
    ["Both publisher (magazine", "No accountability — an alternative choice", "Only publisher — an alternative choice", "Only firm — an alternative choice"], 0,
    "Promotion accountability: firm must ensure accuracy. Distributor has oversight. FCA can regulate both. Third-party endorsements must be appropriate/clear."
  ),
  q("reg-ch10-conduct-12", "cisi-reg", "reg-ch10", "10.4", "Client Money Rules", "conduct", "medium",
    "What are the client money protection rules (CASS)?",
    ["No segregation needed — an alternative choice", "Trust not required — a legal structure", "Can mix with firm money — an alternative choice", "Hold client money separately (not mixed with firm"], 3,
    "CASS (Client Assets sourcebook): money held for clients in separate accounts (bank, nostro), not mixed with firm money, held in trust, accounts reconciled regularly."
  ),
  q("reg-ch10-conduct-13", "cisi-reg", "reg-ch10", "10.4", "Segregated Accounts", "conduct", "easy",
    "What must firms do with segregated client accounts?",
    ["Records optional — an alternative choice", "Hold separate bank accounts in client's", "Can use any account — an alternative choice", "No reconciliation — an alternative choice"], 1,
    "Segregation: separate bank accounts (not firm's), clearly identified as client money, reconciled frequently (daily/weekly), records maintained, statements to clients quarterly."
  ),
  q("reg-ch10-conduct-14", "cisi-reg", "reg-ch10", "10.4", "Client Asset Safeguarding", "conduct", "medium",
    "How must firms safeguard client securities/investments?",
    ["No segregation needed — an alternative choice", "Can hold unsegregated — an alternative choice", "Reconciliation optional — an alternative choice", "Held in custody: segregated"], 3,
    "Custody: securities held in segregated custody accounts (not firm's own), registered in client names/trust, reconciled daily, full audit trail, insured against loss."
  ),
  q("reg-ch10-conduct-15", "cisi-reg", "reg-ch10", "10.5", "Distance Communications", "conduct", "medium",
    "What are distance communication rules?",
    ["No distance rules — an alternative choice", "No cancellation right — an alternative choice", "No pre-info needed — an alternative choice", "Rules apply to communications by phone, email, online"], 3,
    "Distance: pre-contract information (firm, product, price, cancellation right), easy cancellation (14 days), complaint contact, must be provided before purchase."
  ),
  q("reg-ch10-conduct-16", "cisi-reg", "reg-ch10", "10.5", "Cancellation Rights", "conduct", "medium",
    "When do consumers have cancellation/withdrawal rights?",
    ["Unlimited time — an alternative choice", "Not applicable — an alternative choice", "Distance contracts: 14 days after signature", "No cancellation rights — an alternative choice"], 2,
    "Cancellation: 14 days for distance contracts (cooling off), 30 days for insurance. Refund minus costs/gains. Firm must process quickly. Does not apply to managed portfolios."
  ),
  q("reg-ch10-conduct-17", "cisi-reg", "reg-ch10", "10.2", "Suitability Documentation", "conduct", "medium",
    "What must firms document regarding suitability?",
    ["Documentation optional — an alternative choice", "No documentation — an alternative choice", "Client needs assessment (financial, personal),", "Oral notes sufficient — an alternative choice"], 2,
    "Suitability doc: record client profile (age, income, dependants, objectives, risk tolerance), analysis of suitable products, recommendation with reasoning, client signature."
  ),
  q("reg-ch10-conduct-18", "cisi-reg", "reg-ch10", "10.2", "Ongoing Suitability", "conduct", "medium",
    "Must advisers review suitability periodically?",
    ["Reviews optional — an alternative choice", "One-time advice only — an alternative choice", "Yes, regular monitoring required", "No monitoring needed — an alternative choice"], 2,
    "Ongoing: adviser should monitor investment performance, client circumstances (life changes), market changes. If suitability questionable, update recommendation or cease product."
  ),
  q("reg-ch10-conduct-19", "cisi-reg", "reg-ch10", "10.3", "Conflicts Disclosure", "conduct", "medium",
    "How must firms disclose conflicts of interest?",
    ["In writing, clearly, before advice; detail nature", "Vague disclosure acceptable — an alternative choice", "No disclosure required — an alternative choice", "Oral disclosure only — an alternative choice"], 0,
    "Conflicts disclosure: written, clear, pre-advice detail what conflict exists (e.g., commission higher for Product A), impact on recommendation, how managed. Allow client to decide."
  ),
  q("reg-ch10-conduct-20", "cisi-reg", "reg-ch10", "10.2", "Execution-Only Sales", "conduct", "medium",
    "What are execution-only services and what rules apply?",
    ["Customer requests execution without", "No rules apply — an alternative choice", "Same as advised — an alternative choice", "Suitability still required — an alternative choice"], 0,
    "Execution-only: client initiates/requests order; firm executes without assessing suitability. Must: check appropriateness (warn if complex), best execution, fair dealing."
  ),
  q("reg-ch10-conduct-21", "cisi-reg", "reg-ch10", "10.3", "Retail Investor Protections", "conduct", "hard",
    "What special protections apply to Retail investors?",
    ["No special protection — an alternative choice", "FSCS doesn't apply — an alternative choice", "Unlimited leverage — an alternative choice", "Negative balance protection (FX, derivatives can't"], 3,
    "Retail protection: cannot lose more than invested (leverage limits), no negative balance on FX/derivatives, 30-day cancellation for investment, warnings on complex products, FSCS coverage."
  ),
  q("reg-ch10-conduct-22", "cisi-reg", "reg-ch10", "10.4", "Insolvency and Client Money", "conduct", "hard",
    "What happens to client money if investment firm becomes insolvent?",
    ["Client money held separately is", "No protection — an alternative choice", "Mixed with firm assets — an alternative choice", "Clients lose all — an alternative choice"], 0,
    "Protection: segregated client money is protected from firm's creditors. Returned to clients. If shortfall, FSCS compensates up to £85,000 per eligible claimant."
  ),
  q("reg-ch10-conduct-23", "cisi-reg", "reg-ch10", "10.1", "Reliance Rules", "conduct", "medium",
    "Can firms rely on third parties for COBS compliance?",
    ["Cannot delegate anything — an alternative choice", "Can fully delegate — an alternative choice", "No reliance allowed — an alternative choice", "Partly: can delegate some functions (dealing,"], 3,
    "Delegation: firm can appoint third parties (execution brokers, custodians) but remains liable for their conduct. Must monitor. Client-facing advice cannot be delegated."
  ),
  q("reg-ch10-conduct-24", "cisi-reg", "reg-ch10", "10.3", "Product Information", "conduct", "easy",
    "What product information must firms provide?",
    ["Complex jargon only — an alternative choice", "No information required — an alternative choice", "Oral information sufficient — an alternative choice", "Key Information Document (KID) or prospectus, costs/charges,"], 3,
    "Product info: KID (structured 3-page summary for packaged products), prospectus (funds), costs/charges/interest, risk summary, investment objective, key risks."
  ),
  q("reg-ch10-conduct-25", "cisi-reg", "reg-ch10", "10.5", "Direct Access Execution", "conduct", "medium",
    "What rules apply to direct access/algorithmic trading?",
    ["No controls needed — an alternative choice", "Firms must have risk controls (pre-trade limits), price", "Only post-trade monitoring — an alternative choice", "Risk controls optional — an alternative choice"], 1,
    "Direct access: firm must limit client access via risk controls (order size, price limits), monitor for disorderly market impact, cancel risky orders, maintain audit trail."
  ),
  q("reg-ch10-conduct-26", "cisi-reg", "reg-ch10", "10.2", "Margin and Leverage", "conduct", "medium",
    "How are margin requirements regulated in COBS?",
    ["No margin rules — an alternative choice", "Unlimited leverage — an alternative choice", "Margin optional — an alternative choice", "Investment firms must manage margin"], 3,
    "Margin: firms must collect adequate collateral, make margin calls, follow regulatory minimums (EMIR), limit leverage for complex products (especially Retail clients)."
  ),
  q("reg-ch10-conduct-27", "cisi-reg", "reg-ch10", "10.3", "Complex Instruments", "conduct", "hard",
    "How are complex instruments regulated for Retail clients?",
    ["Can sell to anyone — an alternative choice", "Retail same as all — an alternative choice", "No complexity test — an alternative choice", "Cannot sell to Retail without prior"], 3,
    "Complex instruments: derivatives, structured products, leveraged products cannot be sold to Retail without: assessment of knowledge, clear risk warnings, suitability evidence."
  ),
  q("reg-ch10-conduct-28", "cisi-reg", "reg-ch10", "10.4", "Client Asset Segregation Issues", "conduct", "hard",
    "What are risks of inadequate client asset segregation?",
    ["No risks — an alternative choice", "Firm failure could lead to client asset loss (mixed with firm", "Insurance unnecessary — an alternative choice", "Segregation guarantees returns — a financial measure"], 1,
    "Segregation risks: if inadequate, client assets may be seized by firm's creditors, recovery delayed, FSCS £85k limit may not cover all losses. Critical compliance area."
  ),
  q("reg-ch10-conduct-29", "cisi-reg", "reg-ch10", "10.2", "Know Your Customer (Investment)", "conduct", "medium",
    "What investment-specific KYC information must firms gather?",
    ["Only name/age — an alternative choice", "No KYC needed — an alternative choice", "Investment knowledge irrelevant — an alternative choice", "Investment experience, risk tolerance, financial situation,"], 3,
    "Investment KYC: investment experience (years, types), understanding of risks, risk tolerance (aggressive/moderate/conservative), financial capacity (can afford loss?), liquidity needs."
  ),
  q("reg-ch10-conduct-30", "cisi-reg", "reg-ch10", "10.3", "Directed Transactions", "conduct", "medium",
    "What are directed transactions and how are they treated?",
    ["Treated as advised — an alternative choice", "No directed rules — an alternative choice", "Suitability required — an alternative choice", "Customer directs firm to trade specific"], 3,
    "Directed: customer specifies what to buy/sell; firm executes without suitability (like execution-only). Must: check appropriateness, best execution, fair dealing."
  ),
  q("reg-ch10-conduct-31", "cisi-reg", "reg-ch10", "10.1", "Tied Advice", "conduct", "medium",
    "What is tied advice and what disclosure is required?",
    ["No restriction — an alternative choice", "No disclosure needed — an alternative choice", "Adviser offers products only from restricted range", "Can hide tied status — an alternative choice"], 2,
    "Tied advisor: pre-advice must disclose that advisor tied to one/few product providers, can recommend only their products. Customers can compare alternatives independently."
  ),
  q("reg-ch10-conduct-32", "cisi-reg", "reg-ch10", "10.2", "Pension Transfer Advice", "conduct", "hard",
    "What special rules apply to pension transfer advice?",
    ["Can recommend transfer easily — an alternative choice", "Complex assessment required: compare", "No special rules — an alternative choice", "Simplified advice acceptable — an alternative choice"], 1,
    "Pension transfers: advice must compare security of DB pension against flexibility/performance risk of DC/personal pension. Loss of guaranteed income significant. Full analysis needed."
  ),
  q("reg-ch10-conduct-33", "cisi-reg", "reg-ch10", "10.3", "Vulnerable Customer Communications", "conduct", "medium",
    "How should firms communicate with vulnerable customers?",
    ["Jargon acceptable — an alternative choice", "No adjustments needed — an alternative choice", "Plain language, larger fonts, slower", "Standard communication — an alternative choice"], 2,
    "Vulnerable communication: identify vulnerability (age, disability, literacy), adjust communication (plain language, visuals, verbal confirmation), allow support person, written summaries."
  ),
  q("reg-ch10-conduct-34", "cisi-reg", "reg-ch10", "10.4", "Custody Conflicts", "conduct", "medium",
    "What conflicts can arise in custody arrangements?",
    ["No conflicts possible — an alternative choice", "Conflicts are irrelevant — an alternative choice", "Custodian has incentive to promote", "Cannot be managed — an alternative choice"], 2,
    "Custody conflicts: custodian earns fees for services, has float (cash temporarily), may invest client money. Rules: segregation, no self-dealing, disclosure, independent audits."
  ),
  q("reg-ch10-conduct-35", "cisi-reg", "reg-ch10", "10.5", "Benchmark Regulation", "conduct", "medium",
    "What regulatory requirements apply to benchmarks (indices)?",
    ["Disclosure optional — an alternative choice", "Self-regulation acceptable — an alternative choice", "No benchmark regulation — an alternative choice", "Benchmark administrators must be regulated (ESMA/FCA),"], 3,
    "Benchmark regulation: indices/benchmarks used for pricing/performance tracking. Administrators regulated. Firms using benchmarks must disclose dependence. Prevents manipulation."
  ),
  q("reg-ch10-conduct-36", "cisi-reg", "reg-ch10", "10.2", "Product Suitability Matrix", "conduct", "hard",
    "How should firms assess product suitability systematically?",
    ["Intuitive recommendation — an alternative choice", "Compare client profile (risk tolerance, objectives,", "No systematic process — an alternative choice", "Documentation optional — an alternative choice"], 1,
    "Suitability matrix: map client risk profile (low/medium/high) to product risk profile. Assess alignment. Document rationale. Escalate if misaligned. Ensures consistency."
  ),
  q("reg-ch10-conduct-37", "cisi-reg", "reg-ch10", "10.3", "Inducements and Fees", "conduct", "medium",
    "How are inducements and fees treated under COBS?",
    ["Inducements (gifts, training) must: not prejudice client duty, be", "Inducements always permitted — an alternative choice", "No disclosure needed — an alternative choice", "Inducements encourage better advice — an alternative choice"], 0,
    "Inducements: can be accepted if advance disclosure (recipient knows), proportionate (not excessive), doesn't compromise advice. Independent advisers cannot accept fees from product providers."
  ),
  q("reg-ch10-conduct-38", "cisi-reg", "reg-ch10", "10.1", "Treating Customers Fairly", "conduct", "easy",
    "What does treating customers fairly mean in practice?",
    ["Minimal regulation — an alternative choice", "Maximum profit extraction — an alternative choice", "Customer interests secondary — an alternative choice", "Listen to needs, provide suitable products, communicate"], 3,
    "TCF: core principle. Requires: understand customer needs, recommend suitable solutions, transparent communication, fair pricing, proper complaint handling, honest dealings."
  ),
  q("reg-ch10-conduct-39", "cisi-reg", "reg-ch10", "10.2", "Advised vs Non-Advised", "conduct", "medium",
    "What is the distinction between advised and non-advised sales?",
    ["No distinction — an alternative choice", "Both treated identically — an alternative choice", "Advised: firm recommends specific product", "All sales must be advised — an alternative choice"], 2,
    "Advised: firm assesses needs, recommends product, liable for suitability. Unadvised: customer chooses (firm executes, checks appropriateness, but no suitability duty)."
  ),
  q("reg-ch10-conduct-40", "cisi-reg", "reg-ch10", "10.4", "Cross-Border Client Money", "conduct", "hard",
    "What rules apply when client money held cross-border?",
    ["No special rules — an alternative choice", "Can mix jurisdictions — an alternative choice", "No audit needed — an alternative choice", "Same segregation rules apply regardless"], 3,
    "Cross-border: client money held in overseas bank faces: different insolvency rules, regulatory gaps, currency risk, potential FSCS non-coverage. Requires clear disclosure."
  ),
  q("reg-ch10-conduct-41", "cisi-reg", "reg-ch10", "10.2", "Suitability Obligations to Professionals", "conduct", "medium",
    "Are suitability requirements different for professional clients?",
    ["Professionals unprotected — an alternative choice", "No requirements — an alternative choice", "Yes, lower requirements", "Same as retail — an alternative choice"], 2,
    "Professional clients: reduced COBS rules. Appropriateness may replace suitability for certain transactions. But if professional opts into retail category, full protections apply."
  ),
  q("reg-ch1-sector-36", "cisi-reg", "reg-ch1", "1.6", "Financial Services Competitiveness", "sector", "hard",
    "How do regulatory frameworks affect competitiveness of UK financial services?",
    ["Heavy regulation drives innovation — an alternative choice", "Lighter always better — an alternative choice", "Heavy regulation increases costs but", "Regulation irrelevant to competition — an alternative choice"], 2,
    "Regulatory balance: heavy regulation (FCA/PRA) costs but protects UK reputation globally. Light regulation attracts activity but risks systemic failure. UK seeks competitive regulation."
  ),
  q("reg-ch2-consumer-36", "cisi-reg", "reg-ch2", "2.3", "Interest Rates and Savings", "consumer", "medium",
    "How do interest rate changes affect consumer savings strategies?",
    ["Interest rates irrelevant — a financial measure", "No impact on strategy — a financial measure", "Higher rates increase savings", "Rates always benefit savers — a financial measure"], 2,
    "Rate environment: high rates (post-2022) improve savings returns, attracting deposits. Low rates (2010-2021) discouraged saving, encouraged investment/spending. Affects portfolio allocation."
  ),
  q("reg-ch3-contract-41", "cisi-reg", "reg-ch3", "3.1", "Contract Breach Remedies", "contract", "medium",
    "What are the remedies available for specific performance in contracts?",
    ["Never awarded — an alternative choice", "Always available — an alternative choice", "Only damages available — an alternative choice", "Courts order party to perform obligations"], 3,
    "Specific performance: court order forcing performance of contract. Rare. Only when: (1) damages inadequate, (2) subject matter unique (not readily replaceable), (3) feasible to enforce."
  ),
  q("reg-ch4-ethics-36", "cisi-reg", "reg-ch4", "4.1", "Market Ethics vs Rules", "ethics", "hard",
    "How should practitioners handle situations where rules allow activity but ethics question it?",
    ["Ethics are aspirational only — an alternative choice", "Follow ethical principles above minimum rules", "Profits override ethics — an alternative choice", "Follow rules mechanically — an alternative choice"], 1,
    "Ethics > rules: ethical practitioners exceeds minimums. If rule allows but ethics questionable, escalate to compliance/ethics officer. Refuse work if fundamental breach of integrity."
  ),
  q("reg-ch5-infra-31", "cisi-reg", "reg-ch5", "5.1", "Regulatory Coordination Post-Brexit", "infrastructure", "hard",
    "How does UK financial regulation differ post-Brexit?",
    ["Lighter regulation now — an alternative choice", "Same as EU — an alternative choice", "UK independent from EU; may diverge on", "More coordination needed — an alternative choice"], 2,
    "Post-Brexit: passporting ended, UK rules diverging from EU, cooperation via bilateral/IOSCO frameworks. UK pursuing more innovative regulation tailored to UK markets/firms."
  ),
  q("reg-ch6-supervision-31", "cisi-reg", "reg-ch6", "6.2", "Supervisory Strategy", "supervision", "medium",
    "What is the FCA's supervisory strategy for different firm types?",
    ["Random checks only — an alternative choice", "Identical supervision — an alternative choice", "Risk-based: intensive supervision of", "No strategy — a financial measure"], 2,
    "Strategy: FCA assigns supervision intensity based on firm risk profile. High-risk (large banks, advisers) intensive; low-risk lighter. Periodic reviews, reactive to issues."
  ),
  q("reg-ch7-auth-31", "cisi-reg", "reg-ch7", "7.2", "Recusal and Conflicts for SM&CR Managers", "authorisation", "medium",
    "What should senior managers do if they have conflicts in decisions?",
    ["Can participate anyway — an alternative choice", "Conflicts cannot occur — an alternative choice", "Recuse from decision-making on conflicted matter", "No disclosure needed — an alternative choice"], 2,
    "SM&CR conflicts: manager with personal/financial interest should recuse from related decisions (e.g., family member employed, material financial interest). Document for regulatory evidence."
  ),
  q("reg-ch8-crime-36", "cisi-reg", "reg-ch8", "8.2", "Regulatory Approach to Market Abuse", "crime", "medium",
    "What is the FCA's approach to prosecuting market abuse vs civil enforcement?",
    ["Only civil enforcement — an alternative choice", "Only criminal prosecution — an alternative choice", "No enforcement — an alternative choice", "FCA pursues civil enforcement (fines, bans) for most cases"], 3,
    "Dual enforcement: FCA enforces most market abuse cases civilly (fines, bans). Serious/criminal cases (insider dealing, fraud) referred to CPS/SFO for prosecution."
  ),
  q("reg-ch9-complaints-31", "cisi-reg", "reg-ch9", "9.1", "Complaints Data Analysis", "complaints", "hard",
    "Why should firms analyze complaints data patterns?",
    ["Only individual responses needed — an alternative choice", "Identify systemic issues, prevent recurrence, improve processes,", "No value in analysis — an alternative choice", "Patterns irrelevant — an alternative choice"], 1,
    "Analysis: track complaints by type, timing, outcome. Identify trends (e.g., high suitability complaints = poor advice practices). Root cause analysis enables process improvement."
  ),
  q("reg-ch10-conduct-41", "cisi-reg", "reg-ch10", "10.1", "Cancellation and Withdrawal Rights", "conduct", "medium",
    "When do cancellation rights not apply?",
    ["All products have rights — an alternative choice", "Never excluded — an alternative choice", "Restrictions impossible — an alternative choice", "Life insurance (unless distance), already-ongoing"], 3,
    "Cancellation exclusions: ongoing insurance contracts (after first month), already-executed trades, distance contracts exceeding 30 days, commercial/professional transactions."
  ),
  q("reg-ch1-sector-37", "cisi-reg", "reg-ch1", "1.1", "Quantitative Easing Impact", "sector", "hard",
    "How does quantitative easing affect the financial services sector?",
    ["QE always benefits savers — an alternative choice", "No sector impact — an alternative choice", "Asset prices inflate, bond yields", "Neutral effect — an alternative choice"], 2,
    "QE effects: central bank purchases assets (bonds, gilts), increasing prices/liquidity. Consequences: low returns, savers seek income (higher risk), asset bubbles, inequality increases."
  ),
  q("reg-ch2-consumer-37", "cisi-reg", "reg-ch2", "2.2", "Career Changes and Financial Impact", "consumer", "medium",
    "How should financial planning adapt to career changes?",
    ["Career irrelevant to planning — an alternative choice", "Reassess income stability", "No adjustments needed — an alternative choice", "Plans are fixed — an alternative choice"], 1,
    "Career transitions: job change affects income security, insurance need (redundancy risk), mortgage servicing capacity. Plans must adjust to new earning potential/stability."
  ),
  q("reg-ch3-contract-42", "cisi-reg", "reg-ch3", "3.2", "POA Scope Limitations", "contract", "hard",
    "What limitations can apply to Powers of Attorney?",
    ["Scope unbounded — an alternative choice", "All POAs identical — an alternative choice", "Can be limited to: specific", "No limitations possible — an alternative choice"], 2,
    "POA limitations: donor can restrict agent authority (e.g., limited to selling property, time-bound, specific transactions). Clear deed language essential. Exceeding authority = agent liable."
  ),
  q("reg-ch4-ethics-37", "cisi-reg", "reg-ch4", "4.1", "Gifts from Clients", "ethics", "medium",
    "What rules apply to gifts from clients to advisers?",
    ["No disclosure needed — an alternative choice", "Large gifts encouraged — an alternative choice", "Can accept small gifts (reasonable value)", "All gifts prohibited — an alternative choice"], 2,
    "Client gifts: can accept modest gifts (flowers, wine, hospitality). Must disclose. Cannot accept expensive gifts that might influence advice (would compromise integrity)."
  ),
  q("reg-ch5-infra-32", "cisi-reg", "reg-ch5", "5.3", "FSCS Funding Crisis", "infrastructure", "hard",
    "What happens if FSCS runs out of funds during crisis?",
    ["Customers lose all — an alternative choice", "Unlimited borrowing — an alternative choice", "No crisis scenario — an alternative choice", "FSCS borrows from market or government;"], 3,
    "FSCS funding: if inadequate during crises, FSCS borrows (government backstop available). Increased levies on industry afterward. Compensation still pays but may be delayed."
  ),
  q("reg-ch6-supervision-32", "cisi-reg", "reg-ch6", "6.1", "Principle 6 Application to Corporates", "supervision", "medium",
    "How does Principle 6 (customer interest) apply to corporate customers?",
    ["Corporates unprotected — a financial measure", "Not applicable to corporates — a financial measure", "Same as individuals — an alternative choice", "Still applies but reduced for professional/corporate clients"], 3,
    "Corporate principle 6: still applies but less stringent for professional/corporate clients. They negotiate terms, accept trade-offs. Retail customers receive stronger protections."
  ),
  q("reg-ch7-auth-32", "cisi-reg", "reg-ch7", "7.1", "Unauthorized Conduct Consequences", "authorisation", "medium",
    "What are consequences for individuals conducting unauthorized activities?",
    ["No consequences — an alternative choice", "Fine only — an alternative choice", "Only civil penalties — an alternative choice", "Criminal offense (FSMA s.23): up to 2 years prison, unlimited fine"], 3,
    "Unauthorized offense: serious crime under FSMA s.23. Penalties: imprisonment (up to 2 years), unlimited fine. Firms can be prosecuted and customers compensated via FSCS."
  ),
  q("reg-ch8-crime-37", "cisi-reg", "reg-ch8", "8.3", "Insider Dealing Penalties", "crime", "medium",
    "What are penalties for insider dealing convictions?",
    ["Imprisonment rare — an alternative choice", "Up to 7 years imprisonment", "Fine only — an alternative choice", "No penalties — an alternative choice"], 1,
    "Insider dealing penalties: 7+ years prison, unlimited fine. FCA civil penalties up to £6m. Significant deterrent. Affects career (professional bans), reputation destruction."
  ),
  q("reg-ch9-complaints-32", "cisi-reg", "reg-ch9", "9.1", "Complaint Timeliness", "complaints", "easy",
    "When must firms respond to complaints?",
    ["Can delay indefinitely — an alternative choice", "Within 8 weeks of receipt; can extend", "No timeframe — an alternative choice", "Immediate response only — an alternative choice"], 1,
    "8-week response: firms must issue response (upheld/rejected) or written extension within 8 weeks. Extensions require customer agreement. Delays trigger FOS escalation right."
  ),
  q("reg-ch10-conduct-42", "cisi-reg", "reg-ch10", "10.2", "Appropriateness Assessment", "conduct", "medium",
    "What must firms assess regarding appropriateness for non-advised sales?",
    ["Knowledge/experience with products", "Only suitability matters — an alternative choice", "No assessment — an alternative choice", "Complexity irrelevant — an alternative choice"], 0,
    "Appropriateness: firm assesses customer knowledge (investments, risks, complexity), experience, financial capacity. Warning if not appropriate. Differs from suitability (no needs assessment)."
  ),
  q("reg-ch1-sector-38", "cisi-reg", "reg-ch1", "1.5", "Credit Cycles and Risk", "sector", "hard",
    "How do credit cycles affect financial institutions and consumers?",
    ["Easy credit (expansion) enables lending, consumption", "Always expansion — a phase of the economic cycle", "No cycle effect — an alternative choice", "Cycles are symmetric — an alternative choice"], 0,
    "Credit cycle: expansion (low rates, easy lending, demand rises), contraction (tighter credit, demand falls, defaults rise). Financial crises occur during contraction phase."
  ),
  q("reg-ch2-consumer-38", "cisi-reg", "reg-ch2", "2.2", "Inheritance and Financial Planning", "consumer", "hard",
    "How should advisers address inheritance prospects in planning?",
    ["Cannot be predicted — an alternative choice", "Assume all inheritance — an alternative choice", "Inheritance irrelevant — an alternative choice", "Consider probability/timing; avoid"], 3,
    "Inheritance consideration: uncertain (timing, amount, taxes). Should not dominate plan. Focus on own earning/saving capacity. Inheritance as bonus, not primary source."
  ),
  q("reg-ch3-contract-43", "cisi-reg", "reg-ch3", "3.5", "Trustee Liability", "contract", "medium",
    "What personal liability do trustees face?",
    ["Liability limited to trust assets — a legal structure", "Personal liability for breach of trust", "Trust protects trustee — a legal structure", "Cannot be liable — an alternative choice"], 1,
    "Trustee liability: personally liable for breaches. Beneficiary can sue and recover from trustee personally. Indemnity insurance available but doesn't cover dishonesty."
  ),
  q("reg-ch4-ethics-38", "cisi-reg", "reg-ch4", "4.1", "Personal Relationships and Conflicts", "ethics", "hard",
    "How should advisers handle advice to friends/family?",
    ["Can advise but must: disclose", "Relationship irrelevant — an alternative choice", "Cannot advise family — an alternative choice", "No disclosure needed — an alternative choice"], 0,
    "Family advice: can provide but risks: bias toward their interests, appearance of improper advantage, emotional decisions. Disclose, document extra care, consider recusal if complex."
  ),
  q("reg-ch5-infra-33", "cisi-reg", "reg-ch5", "5.2", "Authorization Withdrawal Process", "infrastructure", "medium",
    "What process must FCA follow to withdraw authorization?",
    ["Issue warning notice → opportunity to", "Immediate withdrawal — an alternative choice", "Appeals unavailable — an alternative choice", "No process — an alternative choice"], 0,
    "Withdrawal process: statutory notices (warning, decision, final), fallback period (respond to decision), Tribunal appeal available. Protects firm rights. Takes months typically."
  ),
  q("reg-ch6-supervision-33", "cisi-reg", "reg-ch6", "6.2", "Cease and Desist Orders", "supervision", "medium",
    "What is a cease and desist order and when does FCA issue it?",
    ["No cease powers — an alternative choice", "FCA orders firm to cease activity", "Advisory only — an alternative choice", "Permanent only — an alternative choice"], 1,
    "Cease and desist: emergency order halting firm activities immediately (not waiting for formal processes). Used when ongoing breach threatens consumers/markets. Temporary pending formal action."
  ),
  q("reg-ch7-auth-33", "cisi-reg", "reg-ch7", "7.3", "Third-Party Service Providers", "authorisation", "medium",
    "What responsibility do firms have for third-party compliance?",
    ["Firms unaccountable — an alternative choice", "Firms remain liable for third-party conduct (delegates, appointed reps)", "Clients deal directly — an alternative choice", "Third parties are separate entities — a financial measure"], 1,
    "Third-party responsibility: authorized firm contracting services (execution, custody) remains liable to FCA/customers. Must: vet carefully, contract terms, monitor, audit."
  ),
  q("reg-ch8-crime-38", "cisi-reg", "reg-ch8", "8.1", "CDD for Cash Businesses", "crime", "medium",
    "What enhanced CDD applies to high-cash businesses?",
    ["Cash is lower-risk — an alternative choice", "High-cash businesses (casinos, restaurants, pubs) are higher ML risk", "No CDD enhancement needed — an alternative choice", "Cash is anonymous safe — an alternative choice"], 1,
    "Cash business risk: high cash turnover suggests ML (mixing illegal cash). EDD needed: verify business legitimacy, profit margins, customer base. Casinos/gaming = highest ML risk."
  ),
  q("reg-ch9-complaints-33", "cisi-reg", "reg-ch9", "9.2", "FOS Referral Requirement", "complaints", "easy",
    "Must firms refer complaints to FOS at customer request?",
    ["No FOS mechanism — an alternative choice", "Yes, if customer requests escalation to", "Can refuse escalation — an alternative choice", "Referral optional — an alternative choice"], 1,
    "FOS referral: if customer requests, firm must refer (no discretion). Provide FOS contact, reference number, confirm it's free. Firm cannot pressure customer against FOS."
  ),
  q("reg-ch10-conduct-43", "cisi-reg", "reg-ch10", "10.3", "Financial Promotion to Minors", "conduct", "hard",
    "What restrictions apply to financial promotions to minors?",
    ["Can target freely — an alternative choice", "Cannot target minors with complex", "No restrictions — an alternative choice", "Age irrelevant — an alternative choice"], 1,
    "Minor protections: financial promotions must be age-appropriate. Cannot promote complex/risky investments. Parental/guardian consent required for accounts. Extra care in communications."
  ),
  q("reg-ch1-sector-39", "cisi-reg", "reg-ch1", "1.2", "Forward Guidance and Market Expectations", "sector", "hard",
    "How does BoE forward guidance affect financial markets?",
    ["Markets ignore guidance — an alternative choice", "Forward guidance (future rate path signals) influences", "Only current rates matter — a financial measure", "Has no effect — an alternative choice"], 1,
    "Forward guidance: BoE signals future rate path (e.g., 'expect higher rates in 2024'). Markets anticipate, adjust prices. Creates policy credibility, reduces surprises."
  ),
  q("reg-ch2-consumer-39", "cisi-reg", "reg-ch2", "2.3", "Behavioral Biases and Investing", "consumer", "medium",
    "How might overconfidence bias affect consumer investment decisions?",
    ["Always increases wealth — an alternative choice", "No impact on decisions — an alternative choice", "Overconfident investors overestimate", "Overconfidence improves returns — a financial measure"], 2,
    "Overconfidence: investors believe they know more than they do, trade frequently (costs), hold single stocks (concentrated risk), underperform diversified index. Adviser should educate."
  ),
  q("reg-ch3-contract-44", "cisi-reg", "reg-ch3", "3.1", "Legality of Contract Terms", "contract", "medium",
    "Can contracts contain illegal clauses?",
    ["All clauses binding — an alternative choice", "No illegality test — an alternative choice", "Illegal clauses are void; contract may", "Illegal clauses enforceable — an alternative choice"], 2,
    "Illegal terms: unenforceable. If severable (can separate from contract), contract survives. If illegal purpose (whole contract aims to break law), entire contract void."
  ),
  q("reg-ch4-ethics-39", "cisi-reg", "reg-ch4", "4.1", "Confidentiality Exceptions", "ethics", "medium",
    "When can advisers disclose client information despite confidentiality?",
    ["Can share with friends — an alternative choice", "Never disclose — an alternative choice", "Always confidential — an alternative choice", "Legal obligation (court order, regulatory demand),"], 3,
    "Confidentiality exceptions: court order, regulatory inquiry (FCA), money laundering suspicion (SAR), crime prevention, public safety. Disclose only necessary info. Tipping off prohibited."
  ),
  q("reg-ch5-infra-34", "cisi-reg", "reg-ch5", "5.1", "International Regulatory Bodies", "infrastructure", "medium",
    "What international bodies coordinate financial regulation?",
    ["Only FCA — an alternative choice", "IOSCO (markets), Basel Committee (banking), FSB", "Unilateral regulation — an alternative choice", "No coordination — an alternative choice"], 1,
    "International coordination: IOSCO (market standards), Basel (banking capital), FSB (systemic risks), ESMA (EU). UK participates, implements agreed standards, prevents regulatory gaps."
  ),
  q("reg-ch6-supervision-34", "cisi-reg", "reg-ch6", "6.1", "Principle 2 and Diligence", "supervision", "easy",
    "What does 'due diligence' require under Principle 2?",
    ["Perfection expected — an alternative choice", "Reasonable care and effort in all", "Effort irrelevant — an alternative choice", "No diligence required — an alternative choice"], 1,
    "Diligence: firms must act carefully (not carelessly), reasonably analyze, avoid obvious errors, document. Not perfection but competent, thorough service."
  ),
  q("reg-ch7-auth-34", "cisi-reg", "reg-ch7", "7.3", "Regulatory Reporting by Authorized Firms", "authorisation", "medium",
    "What regulatory reports must authorized firms submit?",
    ["Self-reporting optional — an alternative choice", "No reporting — an alternative choice", "Financial returns (capital, liquidity), conduct returns", "Annual only — an alternative choice"], 2,
    "Reporting: firms submit regulatory returns (monthly/quarterly capital, quarterly conduct/complaints), SM&CR managers report breaches, certain events reported within days."
  ),
  q("reg-ch8-crime-39", "cisi-reg", "reg-ch8", "8.2", "Tipping Off Defenses", "crime", "medium",
    "What are defenses to a tipping off allegation?",
    ["No defenses — an alternative choice", "Professional privilege never applies — an alternative choice", "Always guilty — an alternative choice", "Disclosure to legal advisor (privilege), disclosure to comply with law"], 3,
    "Tipping off defense: (1) legal advice privilege (solicitor), (2) law-mandated disclosure, (3) no knowledge that disclosure would tip (accidental). Rare exceptions."
  ),
  q("reg-ch9-complaints-34", "cisi-reg", "reg-ch9", "9.3", "FSCS Eligible Claimant Definition", "complaints", "medium",
    "What defines an eligible claimant for FSCS purposes?",
    ["Only individuals — an alternative choice", "All claimants eligible — an alternative choice", "Natural person (consumer), small", "Professionals included — an alternative choice"], 2,
    "Eligible claimant: consumers (individuals), small businesses, charities. Excludes: large corporations (€2m+ turnover), financial institutions, connected firms."
  ),
  q("reg-ch10-conduct-44", "cisi-reg", "reg-ch10", "10.3", "Misleading Advertising Tactics", "conduct", "medium",
    "What advertising tactics are considered misleading?",
    ["Exaggeration legal — an alternative choice", "Hidden risks acceptable — an alternative choice", "All advertising acceptable — an alternative choice", "Exaggerated returns, hidden risks, comparing to unrealistic"], 3,
    "Misleading tactics: guaranteed returns (false), small-print warnings (insufficient), selective comparisons, technical jargon (confusing), testimonials (anecdotal). All prohibited under COBS."
  ),
  q("reg-ch1-sector-40", "cisi-reg", "reg-ch1", "1.3", "Gilt Market Function", "sector", "easy",
    "What role do gilt markets play in the UK economy?",
    ["Only equity markets matter — an alternative choice", "Government funding mechanism (borrowing via gilts),", "Gilts unimportant — an alternative choice", "No market function — an alternative choice"], 1,
    "Gilt significance: government borrows via gilts (bonds), providing funding. Gilts serve as benchmark (gilt yield = risk-free rate) for pricing corporate debt."
  ),
  q("reg-ch2-consumer-40", "cisi-reg", "reg-ch2", "2.2", "Annuity Decisions", "consumer", "hard",
    "Why are annuity decisions critical in retirement planning?",
    ["Annuities easily changed — an alternative choice", "No advisability needed — an alternative choice", "All annuities identical — an alternative choice", "Annuity converts capital to"], 3,
    "Annuity criticality: converts retirement savings to income for life. Irreversible decision. Poor choices (inflated expectations, unsuitable product) reduce retirement income permanently."
  ),
  q("reg-ch3-contract-45", "cisi-reg", "reg-ch3", "3.3", "Tenancy Rights and Inheritance", "contract", "medium",
    "How do tenancy type affect inheritance outcomes?",
    ["Inheritance irrelevant — an alternative choice", "Joint tenancy = automatic survivor inheritance (outside will)", "Planning impossible — an alternative choice", "Both identical outcomes — an alternative choice"], 1,
    "Inheritance impact: joint tenancy provides certainty (survivor inherits automatically), but inflexible. Tenancy in common allows customization (different shares, separate heirs)."
  ),
  q("reg-ch4-ethics-40", "cisi-reg", "reg-ch4", "4.2", "Commission Conflicts", "ethics", "medium",
    "How should advisers manage commission conflicts?",
    ["Disclose commission structure, don't let commission drive", "Commission irrelevant — an alternative choice", "Recommend highest commission — an alternative choice", "Disclosure unnecessary — an alternative choice"], 0,
    "Commission conflict: adviser earns higher commission for Product A vs B. Must disclose, ensure recommendation is suitable regardless, document reasoning, consider fee-only model."
  ),
  q("reg-ch5-infra-35", "cisi-reg", "reg-ch5", "5.2", "PRA Authorization of Building Societies", "infrastructure", "medium",
    "What specific requirements apply to building society authorization?",
    ["No specific requirements — an alternative choice", "Mutual status (member-owned), capital requirements", "Identical to banks — an alternative choice", "Deregulated entirely — an alternative choice"], 1,
    "Building society: mutual (member-owned), dual-regulated (FCA conduct, PRA prudence), capital requirements under PRA rules, strict governance, consumer protections."
  ),
  q("reg-ch6-supervision-35", "cisi-reg", "reg-ch6", "6.3", "Risk Appetite Frameworks", "supervision", "hard",
    "What is a risk appetite framework and why is it important?",
    ["No risk appetite — an alternative choice", "Framework defining risks firm will", "Unlimited risk — an alternative choice", "Frameworks irrelevant — an alternative choice"], 1,
    "Risk appetite: board defines acceptable risk levels (credit, market, operational, reputational). Guides all business decisions. FCA expects documented, monitored frameworks."
  ),
  q("reg-ch7-auth-35", "cisi-reg", "reg-ch7", "7.2", "Certification Regime Details", "authorisation", "hard",
    "What staff must firms certify under certification regime?",
    ["Only senior management — an alternative choice", "Control function staff", "All staff — an alternative choice", "No certification needed — an alternative choice"], 1,
    "Certification: firm certifies staff in specified control functions (compliance, risk, financial controls) are fit/proper. FCA can challenge. Creates firm accountability for staff quality."
  ),
  q("reg-ch8-crime-40", "cisi-reg", "reg-ch8", "8.1", "Perpetual Suspicion Rule", "crime", "medium",
    "What is the 'perpetual suspicion' issue in ML reporting?",
    ["No ongoing suspicion — an alternative choice", "Investigation irrelevant — an alternative choice", "If suspicion never fully", "Suspicion always concludes — an alternative choice"], 2,
    "Perpetual suspicion: ongoing SAR if suspicion never resolved. Creates compliance burden. Best practice: conclude investigation, resolve suspicion or make SAR decision within reasonable period."
  ),
  q("reg-ch9-complaints-35", "cisi-reg", "reg-ch9", "9.1", "Complaint Escalation Process", "complaints", "easy",
    "What is the normal escalation path for unresolved complaints?",
    ["No escalation — an alternative choice", "Only courts available — an alternative choice", "FOS not independent — an alternative choice", "Customer → firm (8 weeks to respond) → FOS (if"], 3,
    "Escalation path: (1) customer complains to firm, (2) firm responds within 8 weeks, (3) customer escalates to FOS within 6 months, (4) FOS decides (binding on firm)."
  ),
  q("reg-ch10-conduct-45", "cisi-reg", "reg-ch10", "10.2", "Pension Risk Warnings", "conduct", "medium",
    "What warnings must be given regarding pension transfers?",
    ["Warn of loss of guaranteed income", "Can minimize risks — an alternative choice", "Minimal warning sufficient — an alternative choice", "No warnings needed — an alternative choice"], 0,
    "Pension transfer warnings: defined benefit security, guaranteed income, inflation-proofing (DB pensions) vs. flexibility, investment risk (DC). Complex decision requiring clear warnings."
  ),
  q("reg-ch1-sector-41", "cisi-reg", "reg-ch1", "1.1", "Government Borrowing Costs", "sector", "medium",
    "How do government borrowing costs affect the broader economy?",
    ["Lower spending always better — an alternative choice", "No impact on economy — an alternative choice", "High gilt yields increase government spending costs, reduce", "Public debt irrelevant — an alternative choice"], 2,
    "Gilt yields (cost to borrow): higher yields increase government debt service costs, reduce funds for services. When yields spike (crisis), public spending constrained."
  ),
  q("reg-ch2-consumer-41", "cisi-reg", "reg-ch2", "2.2", "Cohabitation and Financial Planning", "consumer", "medium",
    "What financial risks does cohabitation without legal marriage create?",
    ["Identical to marriage — an alternative choice", "No risks — an alternative choice", "Legal protections automatic — an alternative choice", "Limited inheritance rights"], 3,
    "Cohabitation risks: unmarried partners lack legal marriage protections. Cohabitation agreement recommended. Insurance critical (no spousal inheritance). Wills must specify intentions."
  ),
  q("reg-ch3-contract-46", "cisi-reg", "reg-ch3", "3.4", "Insolvency and Personal Liability", "contract", "medium",
    "What happens to director personal liability in company insolvency?",
    ["Limited to company assets — an alternative choice", "All liability forgiven — an alternative choice", "Directors personally liable for breaches of duty,", "No personal liability — an alternative choice"], 2,
    "Director liability: personal liability for breaches (breach of duty, fraudulent trading). Liquidator pursues for creditor benefit. Directors' insurance available but doesn't cover fraud."
  ),
  q("reg-ch4-ethics-41", "cisi-reg", "reg-ch4", "4.1", "Whistleblowing Protection", "ethics", "hard",
    "What protections do whistleblowers receive?",
    ["Protected from", "No protection — an alternative choice", "Dismissal risk — an alternative choice", "No compensation — an alternative choice"], 0,
    "Whistleblower protection: FSMA/COBS protect from retaliation. Protected disclosure = cannot be fired, demoted, or discriminated against. Confidentiality protected."
  ),
  q("reg-ch5-infra-36", "cisi-reg", "reg-ch5", "5.1", "Financial Stability Board Role", "infrastructure", "medium",
    "What is the Financial Stability Board and its role?",
    ["No coordinating role — an alternative choice", "International body coordinating", "Advisory only — an alternative choice", "Only UK organization — an alternative choice"], 1,
    "FSB: coordinates across regulatory authorities. Identifies systemic risks (too-big-to-fail, asset bubbles), recommends standards (Basel, IOSCO). Strengthened post-2008."
  ),
  q("reg-ch6-supervision-36", "cisi-reg", "reg-ch6", "6.2", "Regulatory Notices Appeal Process", "supervision", "medium",
    "Can firms appeal FCA decision notices?",
    ["Yes, appeal to Upper Tribunal (judicial review available)", "Only written objections — an alternative choice", "Appeal fails always — an alternative choice", "No appeals possible — an alternative choice"], 0,
    "Appeals: firm can appeal FCA decision notice to Upper Tribunal (not Tribunal itself for PRA). Tribunal reviews facts/law. Can overturn/vary FCA decision. Valuable due process."
  ),
  q("reg-ch7-auth-36", "cisi-reg", "reg-ch7", "7.1", "Credit Broking Authorization", "authorisation", "medium",
    "What is required for credit broking authorization?",
    ["Authorization as credit broker (arranging credit)", "Same as investment firms — an alternative choice", "No authorization needed — an alternative choice", "Capital not required — an alternative choice"], 0,
    "Credit broking: firms arranging mortgages/loans require authorization. Must meet FCA standards (ICOBS), capital, governance. Growing sector with specific conduct rules."
  ),
  q("reg-ch8-crime-41", "cisi-reg", "reg-ch8", "8.1", "Structuring Violations", "crime", "easy",
    "What is structuring and is it illegal?",
    ["Always legal — an alternative choice", "Below €10k always fine — an alternative choice", "Structuring acceptable — an alternative choice", "Deliberately breaking down transactions to avoid"], 3,
    "Structuring: deliberately splitting to avoid SAR thresholds = itself suspicious activity (evasion/aware-of-threshold). Reportable independently. Pattern-based ML detection."
  ),
  q("reg-ch9-complaints-36", "cisi-reg", "reg-ch9", "9.2", "FOS Investigative Powers", "complaints", "medium",
    "What investigative powers does FOS have?",
    ["No investigation powers — an alternative choice", "Cannot compel anything — an alternative choice", "Can request documents, compel attendance, call", "Only advisory — an alternative choice"], 2,
    "FOS powers: compel document production, require party attendance, interview witnesses, order disclosure. Statutory investigation authority. Firm must cooperate fully."
  ),
  q("reg-ch10-conduct-46", "cisi-reg", "reg-ch10", "10.4", "Nostro Accounts and Risk", "conduct", "medium",
    "What are nostro accounts and what risks do they present?",
    ["No counterparty risk — an alternative choice", "No settlement needed — an alternative choice", "Domestic accounts only — an alternative choice", "Accounts held at correspondent banks (overseas) to"], 3,
    "Nostro accounts: firm holds USD at US bank to settle USD transactions. Risks: US bank failure (FDIC coverage?), regulatory changes, access delays, deposit insurance gaps."
  ),
  q("reg-ch1-sector-42", "cisi-reg", "reg-ch1", "1.4", "Exchange Rate Hedging", "sector", "easy",
    "Why do international businesses hedge currency risk?",
    ["Currency risk never matters — an alternative choice", "Hedging increases risk — an alternative choice", "Lock in exchange rates for future transactions, avoid profit", "No hedging available — an alternative choice"], 2,
    "Hedging: forward contracts (fix future rate), options (insurance). Businesses hedge to lock in costs/revenues. Removes currency risk. FX derivatives used extensively."
  ),
  q("reg-ch2-consumer-42", "cisi-reg", "reg-ch2", "2.3", "Momentum Bias in Investing", "consumer", "hard",
    "How can momentum bias harm retail investors?",
    ["Momentum always profitable — an alternative choice", "No bias effect — an alternative choice", "Timing works perfectly — an alternative choice", "Buy after prices rise (chasing returns),"], 3,
    "Momentum bias: investors follow the crowd (buy after rise, sell after fall). Opposite of buy-low, sell-high. Creates underperformance. Education and rules help (cooling-off, etc)."
  ),
  q("reg-ch3-contract-47", "cisi-reg", "reg-ch3", "3.5", "Trust Accounting and Audits", "contract", "medium",
    "What accounting obligations apply to trustees?",
    ["Oral records sufficient — an alternative choice", "Maintain trust accounts, prepare annual", "Secrecy acceptable — an alternative choice", "No accounting needed — an alternative choice"], 1,
    "Trust accounting: trustee must maintain detailed accounts, produce annually, show all income/expenditure/capital changes. Beneficiaries have right to accounts. Audit common for large trusts."
  ),
  q("reg-ch4-ethics-42", "cisi-reg", "reg-ch4", "4.2", "Conflicts in Fund Management", "ethics", "medium",
    "What conflicts arise in fund management?",
    ["Fund manager earns fees regardless of performance,", "Self-interest acceptable — an alternative choice", "Conflicts always resolved — an alternative choice", "No conflicts possible — an alternative choice"], 0,
    "Fund manager conflicts: fee-based (profit from size not performance), product-pushing (cross-selling own products), trading ahead (personal account before clients). Require disclosure/management."
  ),
  q("reg-ch5-infra-37", "cisi-reg", "reg-ch5", "5.3", "Financial Ombudsman Jurisdiction Limits", "infrastructure", "medium",
    "What are the time limits for FOS complaints?",
    ["1-year limit — an alternative choice", "Indefinite claims possible — an alternative choice", "No time limits — an alternative choice", "6 years from act/omission or 3 years"], 3,
    "FOS time limits: complaint must relate to act/omission within 6-year period (or 3 years from when consumer became aware). Escalation within 6 months of FOS details. Protects firms."
  ),
  q("reg-ch6-supervision-37", "cisi-reg", "reg-ch6", "6.1", "Treating Customers Fairly Outcomes", "supervision", "hard",
    "What outcomes does FCA expect firms to deliver (TCF)?",
    ["Customer harm acceptable — an alternative choice", "No specific outcomes — an alternative choice", "Customers get right products at fair price", "Firm profit alone — an alternative choice"], 2,
    "TCF outcomes: (1) right products (suitability), (2) fair price (costs disclosed), (3) information clear, (4) complaints handled promptly, (5) claims settled fairly."
  ),
  q("reg-ch7-auth-37", "cisi-reg", "reg-ch7", "7.3", "Delegation and Responsibility", "authorisation", "medium",
    "Can authorized firms delegate all compliance responsibilities?",
    ["No delegation allowed — an alternative choice", "Can fully delegate — an alternative choice", "Delegates independent — an alternative choice", "Can delegate functions but not"], 3,
    "Delegation limits: firm can appoint compliance officers, outsource functions, but FCA holds firm accountable. Must oversee delegates, maintain standards, ensure adequate resources."
  ),
  q("reg-ch8-crime-42", "cisi-reg", "reg-ch8", "8.2", "Market Abuse Reporting", "crime", "medium",
    "Who must report suspected market abuse?",
    ["Only FCA can report — an alternative choice", "Can report to firm only — an alternative choice", "Market operators, investment firms,", "Optional reporting — an alternative choice"], 2,
    "Market abuse reporting: anyone suspecting insider dealing/manipulation must report to FCA (operators, advisers, brokers). Duty applies across financial sector. Prompt reporting essential."
  ),
  q("reg-ch9-complaints-37", "cisi-reg", "reg-ch9", "9.1", "Complaint Response Quality", "complaints", "medium",
    "What makes a quality complaint response?",
    ["Minimal response — an alternative choice", "No explanation needed — an alternative choice", "Clear decision, thorough investigation, fair", "Speed over accuracy — an alternative choice"], 2,
    "Quality response: investigates fully (interviews staff, reviews files), explains findings clearly, justifies decision, offers fair remedy, confirms FOS right, provides contacts."
  ),
  q("reg-ch10-conduct-47", "cisi-reg", "reg-ch10", "10.5", "Negative Balance Protection", "conduct", "easy",
    "What does negative balance protection mean?",
    ["Protection not required — an alternative choice", "Retail clients cannot lose more than invested", "Losses unlimited — an alternative choice", "Unlimited leverage allowed — an alternative choice"], 1,
    "Negative balance: Retail FX/derivative clients cannot lose more than deposited. If market moves sharply, position closed before debt occurs. Does not apply to Professionals."
  ),
  q("reg-ch1-sector-43", "cisi-reg", "reg-ch1", "1.1", "Tax Competitiveness", "sector", "easy",
    "How does tax policy affect financial services competitiveness?",
    ["All tax equally affecting — an alternative choice", "Higher tax better — an alternative choice", "Lower corporate taxes attract firms,", "Tax irrelevant — an alternative choice"], 2,
    "Tax effects: corporation tax (18-25%), banker bonus tax, FTT (financial transaction tax). UK balance: low corp tax (attracts HQs), avoids FTT (protects traders/efficiency)."
  ),
  q("reg-ch2-consumer-43", "cisi-reg", "reg-ch2", "2.2", "Grandparent Gifting", "consumer", "medium",
    "What financial and legal considerations apply to gifts to grandchildren?",
    ["No gift tax — an alternative choice", "Never held in trust — a legal structure", "Gifts always separate — a financial measure", "Gift tax (none in UK under £3k annually with"], 3,
    "Grandparent gifts: UK no gift tax. But gifts integrated into estate (IHT). If for minor, consider trust structure (bare trust for simplicity). Size matters (education/wedding exempt)."
  ),
  q("reg-ch3-contract-48", "cisi-reg", "reg-ch3", "3.2", "Power of Attorney Revocation", "contract", "hard",
    "Can a POA be revoked and what happens?",
    ["Cannot revoke — an alternative choice", "Third parties unaffected — an alternative choice", "Yes, donor can revoke anytime (or", "Revocation automatic — an alternative choice"], 2,
    "Revocation: donor revokes by written notice to attorney. Post-revocation: attorney cannot act (breach = liability). Third parties dealing after revocation: attorney still has apparent authority."
  ),
  q("reg-ch4-ethics-43", "cisi-reg", "reg-ch4", "4.1", "Anti-Corruption Due Diligence", "ethics", "medium",
    "What anti-bribery due diligence must firms conduct?",
    ["No due diligence needed — an alternative choice", "Assess employees for corruption risks, verify third", "Training optional — an alternative choice", "Only legal required — an alternative choice"], 1,
    "Bribery DD: risk assessment, background checks (employees), third-party vetting (agents, distributors), sanctions screening, annual training, audit testing, compliance monitoring."
  ),
  q("reg-ch5-infra-38", "cisi-reg", "reg-ch5", "5.2", "Regulatory Capital Buffers", "infrastructure", "hard",
    "What capital buffers has PRA introduced for financial stability?",
    ["Minimal requirements — an alternative choice", "Unlimited leverage — an alternative choice", "No buffers — an alternative choice", "Capital requirements + buffers: common equity (8%),"], 3,
    "PRA buffers: CET1 (Core Equity Tier 1) = 8% minimum + buffers = 14%+ typical. Buffers absorb losses. Higher buffers (systemically important) = €500m+ additional capital."
  ),
  q("reg-ch6-supervision-38", "cisi-reg", "reg-ch6", "6.2", "Enforcement Themes and Priorities", "supervision", "medium",
    "How does FCA communicate its enforcement priorities?",
    ["No communication — an alternative choice", "No prioritization — an alternative choice", "Annual priorities (conduct", "Only confidential — an alternative choice"], 2,
    "FCA communication: annual priorities (e.g., adviser conduct, vulnerable customers), thematic reports (e.g., suitability failures), published enforcement decisions (education/deterrence)."
  ),
  q("reg-ch7-auth-38", "cisi-reg", "reg-ch7", "7.2", "Fit and Proper Reassessment", "authorisation", "medium",
    "When must firms reassess fit and proper status of SM&CR managers?",
    ["Never reassess — an alternative choice", "Ad-hoc only — an alternative choice", "Annually minimum; reassessed if material", "Only at hiring — an alternative choice"], 2,
    "Reassessment: annual minimum (or on material change). Managers' fitness can decline (allegations, external events). Firm must monitor, escalate to FCA if concerns."
  ),
  q("reg-ch8-crime-43", "cisi-reg", "reg-ch8", "8.1", "AML Risk Factors", "crime", "medium",
    "What are common AML risk factors firms must assess?",
    ["All customers identical — an alternative choice", "No assessment needed — an alternative choice", "Geography (high-risk countries),", "No risk factors — an alternative choice"], 2,
    "ML risk factors: high-risk jurisdictions (FATF grey list), PEPs, cash businesses, shell companies, round-sum transfers, rapid movement. Firms assess for CDD/EDD requirements."
  ),
  q("reg-ch9-complaints-38", "cisi-reg", "reg-ch9", "9.3", "FSCS Corporate Deposit Coverage", "complaints", "medium",
    "Are corporate deposits covered by FSCS if firm fails?",
    ["All corporates covered — a financial measure", "No corporate coverage — a financial measure", "Always unlimited — an alternative choice", "Corporate deposits now covered (2015 change): up to"], 3,
    "Corporate coverage (2015): small business deposits (€2m turnover limit) now covered. Larger corporates not eligible (market discipline). Change increased FSCS exposure."
  ),
  q("reg-ch10-conduct-48", "cisi-reg", "reg-ch10", "10.1", "Tied Agent Status", "conduct", "medium",
    "What must tied agents disclose to customers?",
    ["Compensation secret — an alternative choice", "Tied status before advice, names of firms", "Tied status optional — an alternative choice", "No disclosure — an alternative choice"], 1,
    "Tied disclosure: must state tied agent status, specify firm(s), explain product restrictions, disclose how paid (commission/salary). Transparency allows customer independent comparison."
  ),
  q("reg-ch1-sector-44", "cisi-reg", "reg-ch1", "1.3", "Equity Issuance Underwriting", "sector", "easy",
    "What role do investment banks play in equity issuance?",
    ["No underwriting needed — an alternative choice", "Direct issuance always — an alternative choice", "Underwriters: commit to purchase IPO shares, manage", "No IPO role — an alternative choice"], 2,
    "Underwriting: investment bank commits to buy IPO shares if public doesn't. Reduces issuer risk. Manage due diligence, pricing, distribution, stabilization. Earn 3-7% commission."
  ),
  q("reg-ch2-consumer-44", "cisi-reg", "reg-ch2", "2.1", "Income Protection vs Life Insurance", "consumer", "hard",
    "How do income protection and life insurance serve different needs?",
    ["IP replaces income if unable to work (disability, illness)", "Insurance sufficient — an alternative choice", "IP more important — an alternative choice", "Same product — an alternative choice"], 0,
    "Protection types: life insurance (replaces income if death), income protection (replaces income if can't work). Both essential for dependants. Different needs, different products."
  ),
  q("reg-ch3-contract-49", "cisi-reg", "reg-ch3", "3.3", "Dispute Resolution in Trusts", "contract", "medium",
    "How can disputes between trustees and beneficiaries be resolved?",
    ["Courts (trust disputes), mediation, arbitration", "No dispute resolution — an alternative choice", "Binding always — an alternative choice", "Courts only — an alternative choice"], 0,
    "Trust disputes: resolved by courts (equitable jurisdiction). Beneficiary sues trustee for breach. Complex suits (family, succession) go to Court of Protection or Chancery."
  ),
  q("reg-ch4-ethics-44", "cisi-reg", "reg-ch4", "4.1", "Professional Skepticism", "ethics", "medium",
    "What is professional skepticism and why is it important?",
    ["Accept all statements — an alternative choice", "Healthy questioning of client representations, not", "Trust implicitly — a legal structure", "Skepticism unprofessional — an alternative choice"], 1,
    "Skepticism: don't blindly accept client claims. Question inconsistencies (reported income vs. lifestyle), investigate sources. Protects advisor and client (prevents being used in fraud)."
  ),
  q("reg-ch5-infra-39", "cisi-reg", "reg-ch5", "5.1", "Central Counterparty Role", "infrastructure", "medium",
    "What is the role of Central Counterparties (CCPs) in financial stability?",
    ["No financial role — an alternative choice", "Guarantee settlement (if counterparty fails, CCP", "Unregulated — an alternative choice", "Increase risk — an alternative choice"], 1,
    "CCP function: both sides of trade (buyer-seller both deal with CCP), guarantees settlement. If counterparty fails, CCP absorbs loss. Critical for derivatives, post-2008."
  ),
  q("reg-ch6-supervision-39", "cisi-reg", "reg-ch6", "6.1", "Fit and Proper Application to Staff", "supervision", "medium",
    "How does fit and proper assessment apply to non-senior staff?",
    ["Criminal background okay — an alternative choice", "All staff must be fit/proper (honesty, competence)", "Only senior staff assessed — an alternative choice", "No assessment needed — an alternative choice"], 1,
    "Staff fitness: all staff assessed (not just SM&CR). No criminal convictions (honesty), competent for role, suitable qualifications. Less documentation for junior roles."
  ),
  q("reg-ch7-auth-39", "cisi-reg", "reg-ch7", "7.3", "Stress Testing Requirements", "authorisation", "medium",
    "What stress testing must authorized firms conduct?",
    ["Scenario analysis: market crash", "No impact shown — an alternative choice", "No stress testing — an alternative choice", "Only banks — an alternative choice"], 0,
    "Stress testing: firms model extreme but plausible scenarios (30% equity crash, credit spreads double, rates +2%). Assess capital adequacy. Prudential firms (banks) tested annually."
  ),
  q("reg-ch8-crime-44", "cisi-reg", "reg-ch8", "8.1", "Customer Segmentation for Risk", "crime", "medium",
    "Why do firms segment customers for AML risk assessment?",
    ["Same for all customers — an alternative choice", "Allocate resources based on risk; high-risk (PEPs, high-value) get EDD", "Risk-blind — an alternative choice", "No segmentation — an alternative choice"], 1,
    "Segmentation: high-risk (PEPs, high-value, cash-intensive business, sanctions-related jurisdictions) = EDD. Low-risk (individuals, routine transactions, low-risk countries) = simplified DD."
  ),
  q("reg-ch9-complaints-39", "cisi-reg", "reg-ch9", "9.2", "FOS Compensation Limits by Type", "complaints", "easy",
    "What are FOS compensation limits?",
    ["No limits — an alternative choice", "Unlimited — an alternative choice", "£385,000 per complaint; separate", "£100k — an alternative choice"], 2,
    "FOS limit: £385,000 per complaint (jurisdiction cap). Investment/deposit complaints: underlying FSCS limits apply (£85k). Insurance complaints: may exceed £385k."
  ),
  q("reg-ch10-conduct-49", "cisi-reg", "reg-ch10", "10.4", "Securities Safeguarding Standards", "conduct", "hard",
    "What safeguarding standards apply to securities held for clients?",
    ["Reconciliation optional — an alternative choice", "Held in custody, segregated register, daily", "Can hold unsegregated — an alternative choice", "Can use as security — an alternative choice"], 1,
    "Securities safeguards: held in trust (not firm's assets), registered (clearly marked), daily reconciliation, insured against loss. Firm cannot use as own collateral/security."
  ),
  q("reg-ch1-sector-45", "cisi-reg", "reg-ch1", "1.5", "Recession Indicators", "sector", "easy",
    "What economic indicators signal an approaching recession?",
    ["Negative yield curve (long rates below short), falling business", "Recessions unpredictable — a phase of the economic cycle", "No indicators exist — an alternative choice", "Booming always — an alternative choice"], 0,
    "Recession signals: inverted yield curve (2yr > 10yr unusual), PMI below 50 (contraction), rising unemployment, falling consumer confidence, negative GDP growth."
  ),
  q("reg-ch2-consumer-45", "cisi-reg", "reg-ch2", "2.2", "Working Longer and Retirement", "consumer", "hard",
    "How does working longer affect retirement planning?",
    ["Extends earning years (more savings", "No difference — an alternative choice", "No impact on retirement — an alternative choice", "Cannot work longer — an alternative choice"], 0,
    "Working longer: critical lever. Even 2 extra years: saves £50k+, accumulates more pension (fewer draws), reduces required retirement capital. Major impact on adequacy."
  ),
  q("reg-ch1-sector-46", "cisi-reg", "reg-ch1", "1.2", "Real Interest Rates", "sector", "medium",
    "What are real interest rates and why do they matter?",
    ["Inflation irrelevant — an economic condition", "Nominal rate minus inflation; real rate shows", "Same as nominal — an alternative choice", "Real rates constant — a financial measure"], 1,
    "Real rate: 5% nominal - 3% inflation = 2% real return. Negative real (1% rate, 3% inflation) destroys savings. Savers care about real returns (purchasing power)."
  ),
  q("reg-ch2-consumer-46", "cisi-reg", "reg-ch2", "2.1", "Debt-to-Income Ratios", "consumer", "medium",
    "How does debt-to-income ratio affect financial planning?",
    ["Higher ratio (more debt) reduces borrowing capacity,", "No impact on capacity — an alternative choice", "Ratio irrelevant — an alternative choice", "High ratio always acceptable — an alternative choice"], 0,
    "DTI ratio: mortgage lenders limit debt repayment to 28-35% of income. Higher DTI (more debt payments) leaves less for saving. Reduces capacity for retirement/education funding."
  ),
  q("reg-ch3-contract-50", "cisi-reg", "reg-ch3", "3.1", "Doctrine of Consideration", "contract", "medium",
    "What does the doctrine of consideration require?",
    ["No consideration needed — an alternative choice", "Value always equal — an alternative choice", "Unfair consideration void — an alternative choice", "Both parties must exchange value (benefit/detriment)"], 3,
    "Consideration: contract binding only if both give/receive something. One-sided promise unenforceable. Consideration needn't be equal (fair) just real and bargained-for."
  ),
  q("reg-ch4-ethics-45", "cisi-reg", "reg-ch4", "4.2", "Fair Value Disclosure", "ethics", "medium",
    "What is the fair value debate in financial advice?",
    ["No value discussion — an alternative choice", "Advisers must disclose if products offer fair value (value for money)", "Always fair value — an alternative choice", "Value cannot be assessed — an alternative choice"], 1,
    "Fair value: regulators push firms to demonstrate value for customers (VFM assessments). Complex: measure cost vs. service vs. returns vs. alternatives. Transparency increasing."
  ),
  q("reg-ch5-infra-40", "cisi-reg", "reg-ch5", "5.2", "Appointed Representatives Regulation", "infrastructure", "medium",
    "Are appointed representatives regulated by FCA?",
    ["Reps fully independent — an alternative choice", "No, but principal firm is responsible;", "FCA regulates directly — an alternative choice", "Cannot use appointed reps — an alternative choice"], 1,
    "Appointed representative: not authorized separately (principal's responsibility). Firm must vet (fit/proper), monitor, indemnify. Customers recourse to principal/FSCS."
  ),
  q("reg-ch6-supervision-40", "cisi-reg", "reg-ch6", "6.1", "Remuneration Code Principles", "supervision", "medium",
    "What are the Remuneration Code principles?",
    ["Variable pay not excessive,", "No principles — an alternative choice", "No risk adjustment — an alternative choice", "Pay unlimited — an alternative choice"], 0,
    "Remuneration: variable pay aligned to risk (deferred, clawed back), control functions paid adequately (independent), clawback of bonuses if breaches emerge within 6 years."
  ),
  q("reg-ch7-auth-40", "cisi-reg", "reg-ch7", "7.1", "Financial Stability Purpose", "authorisation", "easy",
    "Why does FCA have consumer protection as a statutory objective?",
    ["Only profits matter — an alternative choice", "Protects consumers from", "No protection needed — an alternative choice", "Firms self-regulate — an alternative choice"], 1,
    "Consumer protection objective: maintain confidence in financial system (critical to stability). Protects individuals from fraud, unfair treatment, ensures compensation for losses."
  ),
  q("reg-ch8-crime-45", "cisi-reg", "reg-ch8", "8.4", "Bribery Prevention Procedures", "crime", "medium",
    "What procedures must firms adopt to prevent bribery?",
    ["Procedures optional — an alternative choice", "No procedures — an alternative choice", "Code of conduct, risk assessment,", "Training unnecessary — an alternative choice"], 2,
    "Anti-bribery procedures: written policy, staff training (annual), background checks (hires, agents), transaction monitoring (unusual gifts/payments), consequences for breaches."
  ),
  q("reg-ch9-complaints-40", "cisi-reg", "reg-ch9", "9.1", "Internal Escalation", "complaints", "easy",
    "What is internal escalation in complaint handling?",
    ["CEO handles all — an alternative choice", "Complaints handled by lowlevel", "No escalation — an alternative choice", "Only first-level handling — an alternative choice"], 1,
    "Escalation: simple complaints handled frontline, complex/serious escalated to management team, significant compensation escalated to director approval. Ensures consistency."
  ),
  q("reg-ch10-conduct-50", "cisi-reg", "reg-ch10", "10.2", "Portfolio Review Frequency", "conduct", "medium",
    "How often should advisers review client portfolios?",
    ["Never review — an alternative choice", "One-time advice only — an alternative choice", "At least annually or per agreement", "No reviews needed — an alternative choice"], 2,
    "Portfolio review frequency: minimum annual (many do quarterly). Triggered by: client circumstances change, market movements (>10% typically), client request. Documented in file."
  ),
  q("reg-ch1-sector-47", "cisi-reg", "reg-ch1", "1.6", "London Capital Markets Significance", "sector", "easy",
    "Why are London capital markets significant globally?",
    ["Deep liquid markets (stocks, bonds), large", "No global role — an alternative choice", "London declining — an alternative choice", "UK not important — an alternative choice"], 0,
    "London importance: second-largest financial center (after NYC), £3tn+ daily FX trading, major IPO venue, investment banking hub. Brexit challenge but maintains standards."
  ),
  q("reg-ch2-consumer-47", "cisi-reg", "reg-ch2", "2.3", "Sequence of Returns Risk", "consumer", "hard",
    "What is sequence of returns risk and why does timing matter?",
    ["Timing irrelevant — an alternative choice", "All markets identical — an alternative choice", "Market downturns early in withdrawal phase", "Returns always linear — a financial measure"], 2,
    "Sequence risk: 1st-year -20% loss locks in lower wealth forever (drawing during decline). Late-retirement losses less critical (fewer draw years). Retirees need conservative early mix."
  ),
  q("reg-ch3-contract-51", "cisi-reg", "reg-ch3", "3.2", "Lasting Power of Attorney Scope", "contract", "medium",
    "What scope can an LPA have?",
    ["Property & Financial Affairs (manage money/property)", "Only health — an alternative choice", "Only property — an alternative choice", "Unlimited scope always — an alternative choice"], 0,
    "LPA scope: (1) Property/Financial (bank accounts, property, investments, bills), (2) Health/Welfare (medical decisions, living arrangements). Can be both. Limited or general."
  ),
  q("reg-ch4-ethics-46", "cisi-reg", "reg-ch4", "4.1", "Ethical Standards vs Legal Compliance", "ethics", "hard",
    "How should practitioners balance ethical standards with legal compliance?",
    ["Ethics should exceed legal minimum", "Ethics optional — an alternative choice", "Ethical = legal — an alternative choice", "Only legal matters — an alternative choice"], 0,
    "Balance: ethical standards go beyond legal minimums. Practitioners should aim for ethical conduct even if legal minimum allows less. Professional commitment to integrity exceeds rules."
  ),
  q("reg-ch5-infra-41", "cisi-reg", "reg-ch5", "5.3", "FSCS Scheme Coverage Expansion", "infrastructure", "medium",
    "How has FSCS coverage expanded over time?",
    ["Always same coverage — an alternative choice", "Never expanded — an alternative choice", "Coverage reduced — an alternative choice", "Initially deposits only, now includes"], 3,
    "FSCS evolution: started deposits, expanded to investments (1997), insurance (1997), mortgage (2011), home finance (2015), corporate deposits (€100k now €85k 2015)."
  ),
  q("reg-ch6-supervision-41", "cisi-reg", "reg-ch6", "6.2", "Supervisory Meets and Information Requests", "supervision", "medium",
    "What happens during FCA supervisory visits?",
    ["Only monitoring — an alternative choice", "Unannounced always — an alternative choice", "Meetings with senior management, review files", "No visits — an alternative choice"], 2,
    "Supervisory: FCA meets management quarterly-annually (frequency by risk), reviews files, requests info, interviews staff. Supervisory letter summarizes findings, sets expectations."
  ),
  q("reg-ch7-auth-41", "cisi-reg", "reg-ch7", "7.2", "Competence Assessment Frameworks", "authorisation", "medium",
    "How do firms assess competence of staff for regulated roles?",
    ["No assessment needed — an alternative choice", "Qualifications (CISI, CFA, etc), experience (years in role),", "Qualifications alone sufficient — an alternative choice", "Competence assumed — an alternative choice"], 1,
    "Competence assessment: CISI qualifications (primary), experience (years in similar roles), passing knowledge tests (internal or regulatory exams), annual training review."
  ),
  q("reg-ch8-crime-46", "cisi-reg", "reg-ch8", "8.2", "High-Risk Jurisdictions", "crime", "medium",
    "What is a high-risk jurisdiction and why does classification matter?",
    ["FATF grey-listed countries (AML/TF deficiencies)", "All countries equal risk — an alternative choice", "Classification irrelevant — an alternative choice", "No risk classifications — an alternative choice"], 0,
    "High-risk: FATF (Financial Action Task Force) grey list countries (AML deficiencies, Iran, N. Korea). Firms must apply EDD to customers/beneficial owners from these jurisdictions."
  ),
  q("reg-ch9-complaints-41", "cisi-reg", "reg-ch9", "9.2", "FOS Time-Barred Cases", "complaints", "medium",
    "What happens when FOS receives a time-barred complaint?",
    ["All accepted — an alternative choice", "Time limits don't apply — an alternative choice", "Must still investigate — an alternative choice", "Cannot proceed; must decline (outside 6-year window or"], 3,
    "Time bar: FOS declines to investigate if complaint > 6 years from act or > 3 years from awareness. Consumer not excluded from courts if FOS declines (courts may accept)."
  ),
  q("fpa-ch1-planning-process-5", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "easy",
    "Which of the following is the first step in the financial planning process?",
    ["Setting investment objectives", "Fact-finding and gathering information", "Implementing recommendations", "Reviewing the plan annually"], 1,
    "Fact-finding is the foundational first step where advisers collect comprehensive client information. This establishes the basis for all subsequent planning decisions. The acronym SMART helps structure objectives once facts are gathered."
  ),
  q("fpa-ch1-planning-process-6", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "medium",
    "A financial planner is meeting a new client for the initial consultation. What is the primary purpose of the fact-finding stage?",
    ["To explain all available financial products", "To collect soft and hard facts about the client's circumstances and goals", "To recommend specific investment funds immediately", "To calculate the exact asset allocation for the portfolio"], 1,
    "The fact-finding stage serves to understand the client's complete financial picture. Soft facts include goals and attitudes while hard facts include income and expenses. This information drives all subsequent recommendations."
  ),
  q("fpa-ch1-planning-process-7", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "hard",
    "Why is understanding a client's attitude to risk and capacity for loss fundamental to financial planning?",
    ["It ensures recommendations match both what the client can", "It determines whether they should invest in stocks only — an alternative choice", "It guarantees positive investment returns — a financial measure", "It eliminates the need for regular portfolio reviews — an alternative choice"], 0,
    "Risk profiling bridges subjective willingness with objective capacity. Capacity for loss depends on time horizon and financial resources. Advisers must balance both to avoid unsuitable recommendations that could lead to panic selling during downturns."
  ),
  q("fpa-ch1-planning-process-8", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "easy",
    "What does the acronym SMART mean when establishing client objectives?",
    ["Specific, Measurable, Achievable, Realistic, Timely", "Safe, Measurable, Achievable, Realistic, Timely", "Suitable, Monitored, Achievable, Reviewed, Timely", "Stated, Managed, Agreed, Recorded, Timed"], 0,
    "SMART objectives are: Specific (clearly defined), Measurable (quantifiable), Achievable (realistic), Relevant (appropriate to client needs), and Time-bound (with clear timescales). This framework ensures objectives guide planning effectively."
  ),
  q("fpa-ch1-planning-process-9", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "medium",
    "A couple aged 45 and 43 with two children want to retire at 60. Which aspect of financial planning is most critical?",
    ["Establishing a long-term retirement savings plan", "Maintaining the same portfolio allocation until retirement", "Avoiding all insurance products — an alternative choice", "Selecting high-risk growth investments — an alternative choice"], 0,
    "With 15-17 years to retirement, the planner must model retirement income needs, assess current savings, and identify any shortfall. Time horizon allows for adjusted risk taking, but sustained commitment to the plan is essential."
  ),
  q("fpa-ch1-planning-process-10", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "hard",
    "How does behavioural finance theory impact financial planning recommendations?",
    ["It explains why clients may make irrational decisions due", "It proves that markets are always efficient — an alternative choice", "It suggests all clients have identical risk profiles — an alternative choice", "It eliminates the need for ongoing client reviews — an alternative choice"], 0,
    "Behavioural biases like loss aversion, overconfidence, and herding can lead clients to make suboptimal decisions. Advisers must anticipate these patterns and implement safeguards such as regular reviews and disciplined rebalancing strategies."
  ),
  q("fpa-ch1-factfind-5", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "easy",
    "Which of the following is classified as a 'hard fact' in financial planning fact-finding?",
    ["Attitude to investment volatility", "Career aspirations", "Current salary and expenses", "Risk appetite"], 2,
    "Hard facts are objective, verifiable pieces of information such as income, expenditure, liabilities, and assets. Soft facts are subjective and relate to attitudes, values, and personal preferences. Advisers need both types to develop suitable recommendations."
  ),
  q("fpa-ch1-factfind-6", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "medium",
    "When fact-finding reveals that a client has significant credit card debt at 18% interest, what should the adviser prioritize?",
    ["Recommending a pension contribution increase — an alternative choice", "Developing a strategy to pay down the", "Investing in equity growth funds — an alternative choice", "Deferring any discussion about debt management — an alternative choice"], 1,
    "High-interest unsecured debt (18%) typically demands priority repayment over pension contributions or investments. The guaranteed return of paying off 18% debt exceeds expected investment returns. Debt management should be addressed before maximizing other savings."
  ),
  q("fpa-ch1-factfind-7", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "hard",
    "A client discloses during fact-finding that they have a significant inheritance expected in two years. How should the adviser respond?",
    ["Immediately recommend a major portfolio restructure — an alternative choice", "Recommend taking on more debt in anticipation of the funds — an alternative choice", "Suggest the client deposit the inheritance in a savings account — an alternative choice", "Acknowledge this as a soft fact but develop the plan with"], 3,
    "Expected inheritances are uncertain and should not drive current recommendations. The adviser should plan with known facts and create flexibility for review when the inheritance is received. This approach avoids unsuitable decisions based on anticipated rather than actual assets."
  ),
  q("fpa-ch1-factfind-8", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "medium",
    "Why is it essential to understand a client's emergency fund position during fact-finding?",
    ["It establishes their financial resilience and", "It indicates their borrowing capacity — an alternative choice", "It has no impact on financial planning — an alternative choice", "It determines their maximum pension contribution — an alternative choice"], 0,
    "An emergency fund (typically 3-6 months of expenses) provides a buffer for unexpected costs without triggering forced asset sales. Without one, clients may need to liquidate investments at losses. Understanding this guides recommendations for savings vehicles and portfolio risk."
  ),
  q("fpa-ch1-factfind-9", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "easy",
    "During fact-finding, a client mentions their tolerance for watching their portfolio fluctuate by 20% in a year. What does this indicate?",
    ["This means they should invest entirely in bonds", "This is a soft fact about their risk appetite and attitude to volatility", "This information is irrelevant to planning — an alternative choice", "This is a hard fact about their investment capacity"], 1,
    "Expressing comfort with 20% annual fluctuations is a soft fact revealing the client's emotional and psychological tolerance for volatility. Advisers must validate this against capacity for loss (hard facts) to ensure suitability."
  ),
  q("fpa-ch1-factfind-10", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "medium",
    "A client has a stable job but significant non-discretionary spending obligations. What does this indicate?",
    ["Their capacity for loss is limited because essential expenses consume most income", "Their capacity for loss is unlimited — an alternative choice", "They should allocate all savings to high-risk investments", "Their attitude to risk determines their entire financial plan"], 0,
    "Capacity for loss reflects what the client can genuinely afford to lose from their financial resources after meeting essential obligations. High non-discretionary commitments reduce capacity for loss, regardless of attitude to risk."
  ),
  q("fpa-ch1-objectives-5", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "easy",
    "Which of the following is a SMART objective for financial planning?",
    ["Save £50,000 for a house deposit", "Eventually retire comfortably", "Build a diversified portfolio", "Accumulate wealth over time"], 0,
    "A SMART objective specifies the amount (£50,000), the purpose (house deposit), and the deadline (June 2030). Vague objectives like 'wealth accumulation' or 'comfortable retirement' lack measurability and timescales needed to drive planning."
  ),
  q("fpa-ch1-objectives-6", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "medium",
    "A client states: 'I want to retire at 65 with an income of £40,000 per year in today's money.' What financial planning step comes next?",
    ["Recommend they increase their income — an alternative choice", "Disregard this objective as unrealistic — an alternative choice", "Immediately invest in equities — an alternative choice", "Model whether current savings are"], 3,
    "This well-defined objective requires modelling future capital needs accounting for inflation, investment returns, and longevity. The planner must assess whether the client is on track or needs adjusted contributions, different investment strategy, or modified timescale."
  ),
  q("fpa-ch1-objectives-7", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "hard",
    "When a client has conflicting objectives (e.g., maximizing retirement savings and purchasing a property in five years), what approach should the adviser take?",
    ["Tell the client that both objectives are impossible — an alternative choice", "Prioritize objectives based on timescale and necessity, potentially dividing resources", "Recommend the client focuses exclusively on retirement — an alternative choice", "Choose whichever objective provides higher investment returns"], 1,
    "Conflicting objectives require prioritization considering timescale, urgency, and financial capacity. A client with £20,000 annual savings might allocate £12,000 to long-term retirement and £8,000 to a five-year property goal, then reassess annually."
  ),
  q("fpa-ch1-objectives-8", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "medium",
    "Why is it important to establish objective timescales in financial planning?",
    ["Timescales have no impact on investment strategy — a financial measure", "They are required only for retirement planning — an alternative choice", "They ensure the adviser meets compliance deadlines — an alternative choice", "They determine the appropriate investment risk level"], 3,
    "Timescale is fundamental to risk capacity. A 25-year retirement goal allows for greater volatility and equity exposure than a five-year property purchase goal. Timescales also inform when funds must be accessed and de-risked appropriately."
  ),
  q("fpa-ch1-objectives-9", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "easy",
    "How should an adviser handle a client's unrealistic objective?",
    ["Refuse to work with the client — an alternative choice", "Explain this is a hard fact that cannot be changed", "Always recommend what the client wants without question", "Model the objective realistically"], 3,
    "An adviser should model the numbers transparently, showing the gap between ambitions and reality. Then discuss realistic alternatives: extending timescale, increasing contributions, adjusting the objective, or accepting higher risk."
  ),
  q("fpa-ch1-objectives-10", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "medium",
    "A client says their objective is 'to beat the stock market by 3% annually.' Why is this problematic?",
    ["This objective is irrelevant to financial planning", "All advisers can easily achieve this target — an alternative choice", "It is not specific enough and depends on factors outside the adviser's control", "Stock market performance is guaranteed to exceed this"], 2,
    "This objective is vague and outcome-dependent on market conditions. A better objective focuses on meeting the client's own financial goals with an appropriate strategy, rather than relative performance against an external benchmark."
  ),
  q("fpa-ch1-cashflow-5", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "easy",
    "What is the primary purpose of analyzing a client's cash flow?",
    ["To determine their tax bracket — an alternative choice", "To calculate pension entitlements — an alternative choice", "To verify employment status — an alternative choice", "To understand income, expenditure, and"], 3,
    "Cash flow analysis reveals surplus (or deficit) income after essential expenses. This determines capacity for savings, insurance premiums, and investment contributions. Without this analysis, advisers cannot determine suitability or affordability of recommendations."
  ),
  q("fpa-ch1-cashflow-6", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "medium",
    "A client has monthly net income of £4,000 and essential expenses of £2,800 (mortgage, utilities, food, insurance). How much is realistically available for financial planning purposes?",
    ["£1,200", "£0 (must keep all surplus as emergency buffer)", "£4,000", "£2,800"], 0,
    "With £1,200 monthly surplus, the planner must determine safe allocation between emergency fund building, debt repayment (if any), and ongoing contributions to pensions/savings. Typically, £200-400 should remain as monthly buffer before allocating the rest to planning."
  ),
  q("fpa-ch1-cashflow-7", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "hard",
    "How should a financial planner address a client with negative monthly cash flow?",
    ["Recommend maximum investment contributions immediately — an alternative choice", "Suggest the client take out additional borrowing — an alternative choice", "Assess whether expenses can be reduced", "Defer all financial planning indefinitely — an alternative choice"], 2,
    "Negative cash flow indicates the client is spending beyond their means. Before investing or pension planning, the adviser must help restructure finances. This might involve debt consolidation, expense reduction, or identifying income growth opportunities."
  ),
  q("fpa-ch1-cashflow-8", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "medium",
    "A client's annual income is £60,000 but this varies significantly by month due to self-employment. Why is this relevant to cash flow analysis?",
    ["It means the client cannot save for retirement — an alternative choice", "It is irrelevant because annual income is all that matters — an alternative choice", "It indicates irregular cash flow requiring management and", "It guarantees the client will face financial difficulty — an alternative choice"], 2,
    "Variable income increases financial vulnerability. Advisers must ensure emergency reserves cover 6+ months of expenses rather than 3 months. Regular income also affects affordability of fixed-commitment savings vehicles and insurance."
  ),
  q("fpa-ch1-cashflow-9", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "easy",
    "Which of the following is an example of discretionary expenditure?",
    ["Child care costs", "Mortgage payments", "Gym membership and dining out", "Utilities and council tax"], 2,
    "Discretionary expenses are non-essential and can be adjusted or eliminated if needed: entertainment, hobbies, dining out. Essential expenses (mortgage, utilities, food, insurance) must continue regardless. Understanding this distinction identifies realistic planning capacity."
  ),
  q("fpa-ch1-cashflow-10", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "medium",
    "A client's cash flow analysis shows they contribute £500 monthly to life insurance but have no emergency fund. What is the priority?",
    ["Cancel insurance entirely — an alternative choice", "Maintain insurance and forgo emergency fund — an alternative choice", "Temporarily reduce insurance while", "Increase insurance contributions immediately — an alternative choice"], 2,
    "Emergency fund provides protection against forced asset sales or default on obligations. While insurance is important, financial resilience demands emergency reserves first. The client can adjust insurance temporarily while building this safety net."
  ),
  q("fpa-ch1-risk-5", "cisi-fpa", "fpa-ch1", "1.5", "Risk Profiling", "planning", "easy",
    "What is the difference between 'attitude to risk' and 'capacity for loss'?",
    ["Attitude determines investments; capacity determines insurance — an alternative choice", "They are the same thing and mean identical concepts — an alternative choice", "Attitude is psychological preference; capacity is financial", "Neither concept matters to financial planning — an alternative choice"], 2,
    "Attitude to risk is subjective (how much volatility the client is comfortable with emotionally). Capacity for loss is objective (what they can genuinely afford to lose based on time horizon, income, and expenses). Both must align for suitable recommendations."
  ),
  q("fpa-ch1-risk-6", "cisi-fpa", "fpa-ch1", "1.5", "Risk Profiling", "planning", "medium",
    "A 65-year-old client says they have 'high risk tolerance' and want to invest primarily in emerging markets equities. What should the adviser do?",
    ["Suggest the client works longer before retiring — an alternative choice", "Assume attitude always overrides capacity considerations — an alternative choice", "Recognize that at age 65", "Immediately implement this portfolio allocation — an alternative choice"], 2,
    "Capacity for loss at age 65 is inherently limited due to short time until retirement and limited recovery time from losses. Advisers must highlight the mismatch between attitude and capacity, recommending a more conservative allocation despite stated risk tolerance."
  ),
  q("fpa-ch1-risk-7", "cisi-fpa", "fpa-ch1", "1.5", "Risk Profiling", "planning", "hard",
    "How can an adviser verify that a client's stated risk tolerance is authentic rather than driven by temporarily high market confidence?",
    ["Prioritize recent investment experience over personal circumstances — an alternative choice", "Present historical downturns (e.g., 2008 financial crisis returns) and discuss their actual comfort level", "Ask them once and record their preference — an alternative choice", "Assume all clients accurately understand their risk tolerance — a financial measure"], 1,
    "Advisers should stress-test risk tolerance by discussing actual historical losses. Many clients overstate tolerance when markets are rising. Regular reviews and behaviour-focused conversations help identify whether preferences change over time."
  ),
  q("fpa-ch1-risk-8", "cisi-fpa", "fpa-ch1", "1.5", "Risk Profiling", "planning", "medium",
    "A 35-year-old client with 30 years until retirement has capacity for investment risk but says 'I worry about market drops and cannot sleep at night thinking about losses.' What is the appropriate action?",
    ["Force them into high-risk equities because age permits it — an alternative choice", "Suggest they avoid all investments until they change their mindset — an alternative choice", "Respect their attitude and recommend a more conservative allocation that they will", "Tell them to improve their emotional discipline without adjusting recommendations"], 2,
    "Even with time to recover, a client who cannot tolerate volatility may panic-sell during downturns, crystallizing losses. Better to recommend an allocation they can maintain consistently than one that triggers panic behaviour. Comfort with the plan drives better outcomes than forcing unsuitable risk levels."
  ),
  q("fpa-ch1-risk-9", "cisi-fpa", "fpa-ch1", "1.5", "Risk Profiling", "planning", "easy",
    "Which of the following factors increases an investor's capacity for loss?",
    ["Long time horizon and strong surplus cash flow", "High non-discretionary expenses", "Short time horizon — an alternative choice", "Large existing liabilities"], 0,
    "Capacity for loss increases with time horizon (recovery opportunity) and financial strength (ability to weather losses without affecting lifestyle). It decreases with short timescales, limited cash flow, and large fixed obligations."
  ),
  q("fpa-ch1-risk-10", "cisi-fpa", "fpa-ch1", "1.5", "Risk Profiling", "planning", "medium",
    "How should an adviser document risk profiling for regulatory compliance?",
    ["Keep risk profiles confidential without recording details — an alternative choice", "Document only the final investment allocation selected — an alternative choice", "Risk profiling is informal and needs no documentation — an alternative choice", "Record the client's attitude, capacity, and how recommendations"], 3,
    "Regulators require evidence that risk profiling was conducted, findings recorded, and recommendations justified as suitable. This documentation protects both client and adviser if a dispute arises later."
  ),
  q("fpa-ch1-lifestage-5", "cisi-fpa", "fpa-ch1", "1.6", "Life Stages", "planning", "easy",
    "How does financial planning differ for a 25-year-old versus a 55-year-old?",
    ["Financial planning is only relevant for retirees — an alternative choice", "Age is irrelevant to financial planning — an alternative choice", "Both have identical planning needs and timescales — an alternative choice", "The 25-year-old has longer time horizons permitting"], 3,
    "Life stage fundamentally shapes planning. Early career: build emergency fund and start pension. Mid-career: maximize contributions and build wealth. Pre-retirement: shift to preservation and plan income strategy. Each stage requires different products and risk levels."
  ),
  q("fpa-ch1-lifestage-6", "cisi-fpa", "fpa-ch1", "1.6", "Life Stages", "planning", "medium",
    "A client aged 28 with a stable job, moderate income, and no dependents should prioritize which financial planning aspects?",
    ["Purchasing a property regardless of deposit savings — an alternative choice", "Building emergency fund", "Life insurance for a mortgage that does not yet exist — an alternative choice", "Maximizing pension contributions immediately — an alternative choice"], 1,
    "At age 28 with time to recover from mistakes, priorities are: emergency fund (3-6 months), baseline pension contributions (taking employer match), and beginning voluntary investment. Life insurance and property planning follow once foundation is secure."
  ),
  q("fpa-ch1-lifestage-7", "cisi-fpa", "fpa-ch1", "1.6", "Life Stages", "planning", "hard",
    "A 45-year-old client has children aged 8 and 10, a mortgage, and recently inherited £100,000. How should financial planning address this mid-life situation?",
    ["Invest all inheritance in the highest-risk equities immediately — an alternative choice", "Consider emergency reserve adequacy, education savings for children,", "Use inheritance to fund a large discretionary purchase — an alternative choice", "Distribute the full amount to pension without considering other needs — an alternative choice"], 1,
    "At age 45, competing priorities exist: dependent education costs, mortgage management, and retirement acceleration. The planner must prioritize using tools like education savings accounts and strategic mortgage overpayment while advancing retirement plan."
  ),
  q("fpa-ch1-lifestage-8", "cisi-fpa", "fpa-ch1", "1.6", "Life Stages", "planning", "medium",
    "Why does someone in their early 50s need to reassess their retirement plan?",
    ["Financial planning ends at age 50 — an alternative choice", "Early 50s advisers have no ability to influence retirement outcomes — an alternative choice", "Retirement is no longer relevant at this age — an alternative choice", "Life expectancy has likely changed, investment timeline is"], 3,
    "Age 50-55 is critical: full capacity exists to make additional voluntary contributions (catch-up), healthcare needs may emerge affecting planning, and a 25-40 year retirement is now tangible. Reassessment ensures adequacy and allows plan adjustments."
  ),
  q("fpa-ch1-lifestage-9", "cisi-fpa", "fpa-ch1", "1.6", "Life Stages", "planning", "easy",
    "What is a key financial planning consideration for someone transitioning from employment to retirement?",
    ["Shifting from asset accumulation to income", "Maximizing risk in the investment portfolio — an alternative choice", "Eliminating all financial arrangements — an alternative choice", "Retirement planning is no longer necessary — an alternative choice"], 0,
    "The transition to retirement fundamentally shifts planning focus from 'How much can I grow?' to 'Can my portfolio generate sustainable income?' This requires strategy shifts toward income-producing assets and sequencing withdrawals strategically."
  ),
  q("fpa-ch1-lifestage-10", "cisi-fpa", "fpa-ch1", "1.6", "Life Stages", "planning", "medium",
    "A retiree aged 70 wants to leave a legacy to their children while maintaining their lifestyle. What is the priority?",
    ["Forgo retirement spending to maximize legacy — an alternative choice", "Ensure retirement income needs are secure first, then consider", "Treat both objectives equally regardless of retirement income adequacy", "Invest aggressively to maximize growth for legacy — an alternative choice"], 1,
    "Retirement security takes priority. Only after confirming sustainable income for life should advisers address legacy planning using wills, trusts, and potentially life insurance if additional funds are needed for inheritance."
  ),
  q("fpa-ch1-behaviour-5", "cisi-fpa", "fpa-ch1", "1.7", "Behavioural Finance", "planning", "easy",
    "What is 'loss aversion' in behavioural finance?",
    ["All investors experience equal loss aversion", "The psychological pain of losing £1,000 exceeds the pleasure from gaining £1,000", "Fear of losing money is no more intense than pleasure from gaining equal amounts", "Loss aversion is irrelevant to portfolio decisions"], 1,
    "Loss aversion describes a cognitive bias where losses loom roughly twice as large as gains. This causes investors to be overly conservative and triggers panic selling during downturns. Advisers must design portfolios clients can maintain through cycles."
  ),
  q("fpa-ch1-behaviour-6", "cisi-fpa", "fpa-ch1", "1.7", "Behavioural Finance", "planning", "medium",
    "A client has experienced strong equity returns over three years and now wants to move their entire portfolio into equities. What bias might this reflect?",
    ["Recency bias (overweighting recent performance in", "Herding behaviour — an alternative choice", "Status quo bias — an alternative choice", "Loss aversion bias — an alternative choice"], 0,
    "Recency bias causes investors to extrapolate recent strong performance indefinitely. After three years of gains, the client assumes equities will continue rising without considering reversion to mean or market cycles. Advisers must rebalance toward the target allocation despite recent success."
  ),
  q("fpa-ch1-behaviour-7", "cisi-fpa", "fpa-ch1", "1.7", "Behavioural Finance", "planning", "hard",
    "How can financial advisers mitigate the impact of behavioural biases in client decision-making?",
    ["Establish written investment policies, automate rebalancing, conduct", "Allow emotional reactions to guide portfolio adjustments — an alternative choice", "Assume clients always make rational decisions and take no preventative action — an alternative choice", "Encourage frequent trading to maintain engagement — an alternative choice"], 0,
    "Structured processes overcome behavioural pitfalls. Written investment plans remind clients of long-term goals. Automatic rebalancing removes emotion from decisions. Regular reviews help clients understand that short-term volatility is expected. Education creates psychological resilience."
  ),
  q("fpa-ch1-behaviour-8", "cisi-fpa", "fpa-ch1", "1.7", "Behavioural Finance", "planning", "medium",
    "What is 'herding behaviour' in investment markets?",
    ["Disciplined rebalancing strategy — a financial measure", "Conservative approach to portfolio management — an alternative choice", "Tendency for investors to follow the crowd, buying", "Individual investors making independent decisions — an alternative choice"], 2,
    "Herding creates boom-bust cycles: investors chase uptrends (buying high) then panic-sell (selling low). Advisers counter this through education and discipline, keeping clients focused on personal goals rather than crowd sentiment."
  ),
  q("fpa-ch1-behaviour-9", "cisi-fpa", "fpa-ch1", "1.7", "Behavioural Finance", "planning", "easy",
    "Why do many investors hold losing investments longer than winning ones, hoping to break even?",
    ["This is a rational strategy that maximizes returns", "Losing investments always recover eventually", "This behaviour demonstrates financial sophistication", "They experience loss aversion and the pain of realizing losses"], 3,
    "Loss aversion causes 'disposition bias': investors hold losers too long hoping to recover losses while selling winners too early. This is irrational and tax-inefficient. Good advisers help clients sell based on fundamentals, not emotion."
  ),
  q("fpa-ch1-behaviour-10", "cisi-fpa", "fpa-ch1", "1.7", "Behavioural Finance", "planning", "medium",
    "A client achieves a portfolio return of 12% in Year 1 but -5% in Year 2, averaging 3.5% annually. They feel the portfolio has failed because they focus on the recent loss year. What bias is this?",
    ["Home bias — an alternative choice", "Rational evaluation of performance — an alternative choice", "Overconfidence bias — an alternative choice", "Recency bias: overweighting recent poor"], 3,
    "Recency bias causes clients to judge portfolio performance on recent months or years rather than longer periods. An adviser should present rolling returns over multiple years, discuss expected volatility, and reinforce that individual years fluctuate."
  ),
  q("fpa-ch1-emerging-5", "cisi-fpa", "fpa-ch1", "1.8", "Emerging Topics", "planning", "medium",
    "Why is sustainability increasingly relevant to financial planning advice?",
    ["Sustainability has no effect on long-term returns — a financial measure", "Clients increasingly want their investments to reflect values", "It is a marketing trend with no real impact on investments — an alternative choice", "Advisers cannot incorporate ESG considerations in portfolios — a financial measure"], 1,
    "Environmental, Social, and Governance (ESG) investing has grown significantly. Advisers must understand that some clients prioritize values-aligned investing and recognize that ESG factors increasingly affect business performance and investment risk."
  ),
  q("fpa-ch1-emerging-6", "cisi-fpa", "fpa-ch1", "1.8", "Emerging Topics", "planning", "hard",
    "How might the increasing prevalence of freelance and gig economy work affect financial planning?",
    ["Gig workers have identical planning needs to traditional employees — an alternative choice", "It requires specific planning for variable income, lack of employer", "It simplifies financial planning because income is more stable — an alternative choice", "Financial planning is impossible for gig economy workers — an alternative choice"], 1,
    "Gig workers face unique challenges: variable income (larger emergency funds needed), no employer pension or benefits (must arrange individually), and no employer contributions. Planning must address these realities explicitly."
  ),
  q("fpa-ch1-emerging-7", "cisi-fpa", "fpa-ch1", "1.8", "Emerging Topics", "planning", "medium",
    "What role might technology and financial planning software play in future advice?",
    ["Technology only applies to young clients — an alternative choice", "Technology can enhance planning through modelling,", "Technology will eliminate the need for financial advisers — an alternative choice", "Digital tools have no role in financial planning — an alternative choice"], 1,
    "Financial planning software enables better scenario analysis, easier rebalancing monitoring, and improved client communication. However, complex situations, behavioural coaching, and major life decisions still require human adviser expertise."
  ),
  q("fpa-ch1-emerging-8", "cisi-fpa", "fpa-ch1", "1.8", "Emerging Topics", "planning", "easy",
    "Why is financial wellbeing increasingly discussed alongside financial planning?",
    ["Advisers should ignore non-numeric factors — an alternative choice", "Financial wellbeing considers confidence in", "Only wealthy clients experience financial wellbeing — an alternative choice", "Wellbeing is irrelevant to financial outcomes — an alternative choice"], 1,
    "Financial wellbeing encompasses psychological aspects: feeling secure, confident in managing money, on track with goals. Advisers addressing these factors improve client outcomes and satisfaction, not just portfolio returns."
  ),
  q("fpa-ch1-emerging-9", "cisi-fpa", "fpa-ch1", "1.8", "Emerging Topics", "planning", "medium",
    "How might climate change considerations increasingly affect financial planning?",
    ["Only environmental specialists need to consider climate factors — an alternative choice", "Climate change has no impact on financial planning — an alternative choice", "Physical climate risks and transition risks may affect asset", "Financial advisers cannot address climate impacts — an alternative choice"], 2,
    "Climate change creates financial planning implications: insurance costs rising (flood, fire), some asset classes facing transition risks, and geographic considerations for property. Forward-thinking advisers incorporate these factors into long-term planning."
  ),
  q("fpa-ch1-emerging-10", "cisi-fpa", "fpa-ch1", "1.8", "Emerging Topics", "planning", "hard",
    "What is the relationship between diversity and equity in financial planning as a professional field?",
    ["Financial planning outcomes are identical across all demographics — an alternative choice", "Ensuring advisers understand diverse client circumstances and", "Only clients from majority backgrounds benefit from financial planning — an alternative choice", "Diversity is irrelevant to financial planning outcomes — an alternative choice"], 1,
    "Financial planning outcomes vary by background due to differing access to advice, trust in advisers, and circumstances. Expanding diversity in the profession and ensuring culturally competent advice improves outcomes for all clients."
  ),
  q("fpa-ch2-protection-5", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "easy",
    "What is the primary purpose of financial protection planning?",
    ["To guarantee investment returns — a financial measure", "To protect against financial loss", "To reduce taxes only — an alternative choice", "To eliminate all financial risks — an alternative choice"], 1,
    "Protection planning uses insurance and other tools to transfer or mitigate the financial consequences of adverse events. It ensures that death, serious illness, or loss of income does not devastate family finances or business operations."
  ),
  q("fpa-ch2-protection-6", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "medium",
    "A 35-year-old with a £200,000 mortgage and two young children has no life insurance. What protection gap exists?",
    ["A gap only exists if the client is self-employed — an alternative choice", "Significant gap: dependents and liabilities are", "No gap; life insurance is optional at this age — an alternative choice", "Young people do not need life insurance — an alternative choice"], 1,
    "With young dependents and a large mortgage, life insurance is essential. Without it, the family loses income replacement and faces mortgage risk. Younger clients benefit from lower premiums making protection more affordable."
  ),
  q("fpa-ch2-protection-7", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "hard",
    "How should an adviser quantify life insurance needs for a client with dependents?",
    ["Simple rough estimate without detailed analysis — an alternative choice", "Calculate income replacement for dependents' lives, outstanding liabilities (mortgage, debts),", "Assume insurance is not needed if the client has savings — an alternative choice", "Recommend standard policy amounts regardless of circumstances — an alternative choice"], 1,
    "Proper needs analysis sums: years × income needed for dependents + outstanding liabilities + lump sum costs (funeral, education). This quantified approach justifies the recommended cover amount and ensures adequacy."
  ),
  q("fpa-ch2-protection-8", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "medium",
    "Why is protection planning often neglected by younger clients?",
    ["Psychological bias: young people often feel", "They do not need protection at young ages — an alternative choice", "Protection planning is only for retirees — an alternative choice", "Younger people cannot obtain insurance — an alternative choice"], 0,
    "Young people are often in peak earning years with dependents most vulnerable to income loss. However, they underestimate risk probability and may resist discussing illness/death. Advisers must make protection emotionally relevant."
  ),
  q("fpa-ch2-protection-9", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "easy",
    "Which of the following is an example of self-insurance?",
    ["Obtaining group protection through an employer", "Buying critical illness cover", "Building emergency savings to cover unexpected costs", "Purchasing a life insurance policy"], 2,
    "Self-insurance means retaining risk through personal savings rather than transferring it via insurance policies. An adequate emergency fund is a form of self-insurance. This complements formal insurance coverage."
  ),
  q("fpa-ch2-protection-10", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "medium",
    "A business owner with key person dependency should purchase which type of protection?",
    ["Only property insurance for business assets — an alternative choice", "Key person insurance: life and critical illness cover", "Only life insurance for personal beneficiaries — an alternative choice", "No insurance; key person dependency cannot be insured — an alternative choice"], 1,
    "Key person insurance protects the business itself, not the individual's family. If a critical team member dies or becomes seriously ill, the business receives a payout to hire replacements, cover lost profits, or wind down operations orderly."
  ),
  q("fpa-ch2-protection-11", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "hard",
    "Why might someone with substantial savings still need life insurance?",
    ["Savings may be insufficient for dependents' long-term", "Insurance and savings serve identical purposes — an alternative choice", "Wealthy individuals should never purchase insurance — an alternative choice", "Savings eliminate the need for insurance — an alternative choice"], 0,
    "Even with savings, insurance advantages include: immediate payout (no probate delay), tax-free benefits outside the estate (preserving inheritance), and freeing savings to compound for beneficiaries' retirement rather than meeting immediate income needs."
  ),
  q("fpa-ch2-protection-12", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "medium",
    "What role does regular review play in protection planning?",
    ["Reviews should only occur when the client initiates contact — an alternative choice", "Protection needs never change — an alternative choice", "Reviews are unnecessary once protection is in place — an alternative choice", "Life circumstances change (marriage, children, job changes, debt reduction) requiring periodic"], 3,
    "Protection planning must evolve with life stages. Increases: children born, mortgage taken. Decreases: children mature, mortgage reduces. Regular reviews (annually or at major life events) ensure cover remains appropriate and affordable."
  ),
  q("fpa-ch2-protection-13", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "easy",
    "Which of the following is a benefit of protecting dependents through life insurance rather than relying solely on savings?",
    ["Insurance and savings have identical outcomes — an alternative choice", "Insurance has no advantages over savings — an alternative choice", "Insurance provides immediate", "Savings are always sufficient for all scenarios — an alternative choice"], 2,
    "Insurance ensures immediate cash availability on death (versus probate delays) and tax-free benefits. Savings remain available for beneficiaries' future needs rather than being consumed to replace lost income."
  ),
  q("fpa-ch2-protection-14", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "medium",
    "How might employment changes affect protection planning?",
    ["Loss of employer benefits (life insurance, health insurance) may", "Employment changes have no impact on protection needs — an alternative choice", "Changing jobs eliminates the need for protection — an alternative choice", "Self-employment creates identical protection as traditional employment — an alternative choice"], 0,
    "Transitioning from employed to self-employed requires replacing employer-provided group protection with individual policies. Income changes may require cover adjustments. Job loss creates temporary protection gaps."
  ),
  q("fpa-ch2-protection-15", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "hard",
    "Why is protection planning important for business continuity?",
    ["Only large corporations need protection planning — an alternative choice", "Businesses do not require protection planning — an alternative choice", "Insurance cannot address business continuity risks — an alternative choice", "Death or serious illness of key personnel can threaten"], 3,
    "Business continuity risks include: loss of key person (client loss, recruitment delay), inability to fulfill contracts, or cash flow disruption during transition. Life and critical illness insurance provide capital to manage these scenarios."
  ),
  q("fpa-ch2-lifeassurance-5", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "easy",
    "What is the fundamental principle of life insurance underwriting?",
    ["Underwriting is unnecessary for life insurance — an alternative choice", "Insurers must verify the proposer has an insurable interest and", "Underwriting applies only to critical illness insurance — an alternative choice", "All life insurance applicants are accepted without assessment — an alternative choice"], 1,
    "Insurable interest means the applicant would suffer financial loss on the insured person's death. Health underwriting protects insurers against adverse selection (sick people applying). Proposers must disclose all relevant health information."
  ),
  q("fpa-ch2-lifeassurance-6", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "medium",
    "What is the difference between term insurance and whole of life insurance?",
    ["Term covers a fixed period (e.g., 25 years) then expires", "Whole of life is always cheaper than term — an alternative choice", "Term is only for young people — an alternative choice", "They are identical products — an alternative choice"], 0,
    "Term life: affordable fixed premiums, expires at end of term (gap in protection post-term). Whole of life: guarantees payout whenever death occurs, higher premiums, lifetime protection. Choice depends on needs and affordability."
  ),
  q("fpa-ch2-lifeassurance-7", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "hard",
    "A 40-year-old client with a 20-year mortgage and children aged 8 and 10 should purchase which type of life insurance?",
    ["No insurance; they should wait until older — an alternative choice", "Term life to age 60 (covering working years): affordable and matches the period when dependents", "Investment-linked insurance only — an alternative choice", "Pure whole of life: most expensive and lifetime coverage — an alternative choice"], 1,
    "Term insurance matching liability duration (20-year mortgage, 8+ years until children are independent) balances cost and protection. At age 60, dependents are independent and early retirement is possible. Whole of life adds unnecessary cost for this scenario."
  ),
  q("fpa-ch2-lifeassurance-8", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "medium",
    "What is an endowment life insurance policy?",
    ["Traditional term insurance without investment component — an alternative choice", "No longer available in the modern market — an alternative choice", "A life insurance policy combined with a", "Pure investment product without insurance — an alternative choice"], 2,
    "Endowment policies integrate insurance with unit-linked or with-profits investment. They provide maturity bonuses if the insured survives to the endowment date. Historically popular for mortgages but expensive and complexity led to phase-out for new sales."
  ),
  q("fpa-ch2-lifeassurance-9", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "easy",
    "What is a decreasing term insurance policy?",
    ["A policy that terminates after 5 years — an alternative choice", "A policy where the death benefit", "A policy where the premium increases over time — an alternative choice", "Pure investment insurance — an alternative choice"], 1,
    "Decreasing term covers a decreasing liability (usually a mortgage): as the loan balance falls, the insurance benefit falls. This design reduces premium cost compared to level-term covering the full original amount."
  ),
  q("fpa-ch2-lifeassurance-10", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "medium",
    "Why might someone purchase a life insurance policy with a guaranteed period?",
    ["No modern policies include guaranteed periods — an alternative choice", "Guaranteed periods protect the insurer only — an alternative choice", "If the insured dies within the guaranteed period (typically 5-10 years), benefits", "Guaranteed periods add unnecessary cost — an alternative choice"], 2,
    "A guaranteed period ensures that if death occurs within a defined timeframe, benefits are paid regardless of policy status. This provides beneficiary protection and estate liquidity assurance during the early, highest-risk years."
  ),
  q("fpa-ch2-lifeassurance-11", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "hard",
    "How do medical underwriting practices affect life insurance suitability?",
    ["Applicants with medical history may face higher premiums or", "Medical underwriting has no impact on recommendations — an alternative choice", "Poor health applicants should be refused advice — an alternative choice", "All life insurance is underwritten identically — an alternative choice"], 0,
    "Medical underwriting creates differential premiums and exclusions. Advisers must discuss how these affect affordability and explore specialist providers for impaired lives. Solutions might include higher premiums or accepting benefit reductions."
  ),
  q("fpa-ch2-lifeassurance-12", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "medium",
    "What is a 'with-profits' life insurance policy?",
    ["Only available from mutual insurers — an alternative choice", "A policy sold exclusively to profitable clients — an alternative choice", "A policy with no guaranteed benefits — an alternative choice", "A policy where bonuses are added to the"], 3,
    "With-profits policies provide guaranteed minimum benefits plus annual and final bonuses from insurer profits/investment returns. Bonuses smooth investment volatility but are not guaranteed. These policies were popular but less common now due to declining profitability and transparency concerns."
  ),
  q("fpa-ch2-lifeassurance-13", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "easy",
    "What is written in trust? (life insurance context)",
    ["A policy type with no legal structure — an alternative choice", "Only available for whole of life policies — an alternative choice", "Irrelevant to modern insurance planning — an alternative choice", "A life insurance policy held on trust for named beneficiaries"], 3,
    "Policies written in trust bypass probate and are held outside the applicant's estate for inheritance tax purposes. Trustees manage benefits according to trust terms. This structure provides both efficiency and control over benefit distribution."
  ),
  q("fpa-ch2-lifeassurance-14", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "medium",
    "How might inflation affect life insurance adequacy over a long-term policy?",
    ["A £200,000 benefit in 30 years may be insufficient due to", "Advisers should ignore inflation in long-term planning — an economic condition", "Insurance benefits are immune to inflation — an economic condition", "Inflation has no impact on insurance purchasing power — an economic condition"], 0,
    "Insurance benefit adequacy erodes due to inflation. A £200,000 lump sum today may fund 20 years of dependents' needs; in 25 years it funds only 12 years due to inflation. Reviewable or escalating policies address this."
  ),
  q("fpa-ch2-lifeassurance-15", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "hard",
    "Why are life insurance policies sometimes owned by a separate entity rather than the applicant personally?",
    ["Ownership by a trust or company can provide", "Entity ownership always triggers additional tax — an alternative choice", "Only individuals can own life insurance — an alternative choice", "This structure has no advantages — an alternative choice"], 0,
    "Organizational ownership serves multiple purposes: trusts bypass probate, companies hold key person policies to benefit the business, and entities provide control over benefit distribution. However, this creates complexity requiring professional advice."
  ),
  q("fpa-ch2-criticalillness-5", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "easy",
    "What is critical illness insurance?",
    ["Life insurance policy — an alternative choice", "Insurance providing a lump sum on diagnosis of serious conditions (cancer,", "Disability income replacement only — an alternative choice", "Health insurance for routine medical care — an alternative choice"], 1,
    "Critical illness cover pays on diagnosis of defined serious conditions, providing capital for medical treatment, home modification, or income replacement while the insured recovers or transitions back to work."
  ),
  q("fpa-ch2-criticalillness-6", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "medium",
    "How does critical illness insurance differ from income protection insurance?",
    ["Only critical illness covers serious diseases — an alternative choice", "Income protection includes lump sum benefits — an alternative choice", "They are identical — an alternative choice", "Critical illness: lump sum on diagnosis of"], 3,
    "Critical illness provides capital on diagnosis of major illness. Income protection replaces lost earnings if someone cannot work due to illness/accident. Together they provide comprehensive incapacity protection; singly each addresses specific risks."
  ),
  q("fpa-ch2-criticalillness-7", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "hard",
    "A 45-year-old self-employed professional with substantial mortgage and no employer income protection should prioritize which protection?",
    ["Life insurance only — an alternative choice", "Critical illness without income protection — an alternative choice", "No protection needed as self-employed individuals are resilient — an alternative choice", "Income protection (replacing lost earnings) and critical illness cover to protect against inability to"], 3,
    "Self-employed professionals lack employer sick pay and depend entirely on their earning ability. Income protection directly replaces lost business income. Critical illness provides capital for recovery/modification costs. Both are essential for viability."
  ),
  q("fpa-ch2-criticalillness-8", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "medium",
    "What conditions are typically covered under critical illness insurance?",
    ["Routine infections and injuries — an alternative choice", "Conditions chosen randomly by insurers — an alternative choice", "Only minor illnesses — an alternative choice", "Serious conditions: cancer, myocardial infarction (heart attack), stroke,"], 3,
    "Standard definitions include major cancers, heart conditions, stroke, blindness, deafness, organ transplant, terminal illness, and similar serious conditions. Definitions vary by insurer; advisers should review the specific policy schedule."
  ),
  q("fpa-ch2-criticalillness-9", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "easy",
    "Why might someone with substantial savings still purchase critical illness cover?",
    ["Savings eliminate the need for critical illness cover — an alternative choice", "Savings may be insufficient for recovery costs and income", "Critical illness cover is unnecessary for wealthy individuals — an alternative choice", "Insurance and savings are interchangeable — an alternative choice"], 1,
    "Even with savings, critical illness cover provides immediate capital for medical treatments (often private), home modifications, and income replacement during recovery. This preserves savings for future retirement needs."
  ),
  q("fpa-ch2-criticalillness-10", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "medium",
    "How should critical illness cover be coordinated with employer benefits?",
    ["Do not discuss employer benefits in planning — an alternative choice", "Assume employer benefits are always sufficient — an alternative choice", "Identify gaps: employer cover may have short elimination periods or limited duration", "Ignore employer benefits and purchase separate cover — a financial measure"], 2,
    "Employer group critical illness often has limitations: 6-12 month duration, definition gaps, or covers only specific conditions. Individual policies extend coverage beyond employment duration and may include additional conditions."
  ),
  q("fpa-ch2-criticalillness-11", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "hard",
    "What is the significance of the 'definition of critical illness' in policy documents?",
    ["Advisers should not discuss definitions with clients — an alternative choice", "Definitions vary significantly by insurer; some cover", "All policies define critical illness identically — an alternative choice", "Definitions have no impact on claims — an alternative choice"], 1,
    "Critical illness definitions vary dramatically. One insurer may cover benign tumours while another does not. Some policies require survival periods (30-90 days) before paying out. Detailed understanding ensures the chosen policy addresses the intended risks."
  ),
  q("fpa-ch2-criticalillness-12", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "medium",
    "Should critical illness and life insurance be linked or separate policies?",
    ["Always link them into one policy — an alternative choice", "Policies must always be separate — a financial measure", "Depends: linked policies provide integrated cover and cost savings but may have limitations", "The question is irrelevant to protection planning — an alternative choice"], 2,
    "Linked policies simplify administration and often offer discounts. Separate policies allow independent adjustments: increasing life cover at mortgage increase without increasing critical illness cost. Adviser should discuss both structures with the client."
  ),
  q("fpa-ch2-criticalillness-13", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "easy",
    "What happens if a client recovers from a critical illness but the policy has already paid out?",
    ["Critical illness policies must pay ongoing benefits — an alternative choice", "The insurer can recover the payment if the client recovers — an alternative choice", "Once a lump sum is paid, the policy typically ends; it does not", "The policy continues indefinitely providing ongoing payments — an alternative choice"], 2,
    "Critical illness policies typically provide a one-time lump sum benefit. Once paid, the policy ends. This differs from income protection which replaces ongoing income. Clients should understand this in their financial planning."
  ),
  q("fpa-ch2-criticalillness-14", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "medium",
    "How might medical history affect critical illness insurance premiums?",
    ["All applicants pay identical premiums regardless of health — an alternative choice", "Applicants with pre-existing conditions may face higher premiums or policy exclusions (e.g.,", "Medical underwriting applies only to life insurance — an alternative choice", "Medical history never affects premiums — an alternative choice"], 1,
    "Critical illness underwriting is more stringent than life insurance: better health = lower risk of claims. Pre-existing conditions lead to premium increases or exclusions. Advisers must discuss medical effects on affordability and cover scope."
  ),
  q("fpa-ch2-criticalillness-15", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "hard",
    "Why is critical illness cover particularly important in mortgages secured by life insurance and critical illness protection?",
    ["Mortgage protection requires only life insurance — an alternative choice", "Critical illness has no relevance to mortgage protection — an alternative choice", "Critical illness cover ensures the mortgage can be", "Mortgages are automatically covered by banks — an alternative choice"], 2,
    "A mortgage is protected by life insurance if the borrower dies, but serious illness interrupts income and prevents repayment. Critical illness cover bridges this gap: if the borrower has a stroke or cancer, the policy pays a lump sum for mortgage continuation."
  ),
  q("fpa-ch2-incomeprotection-5", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "easy",
    "What is income protection insurance?",
    ["Insurance providing regular monthly payments", "Life insurance for dependents — an alternative choice", "Lump sum payment on diagnosis of serious illness — an alternative choice", "Coverage only during employment — an alternative choice"], 0,
    "Income protection (or permanent health insurance) replaces lost earned income if the insured is unable to work. Payments continue until retirement, death, or return to work (depending on policy terms)."
  ),
  q("fpa-ch2-incomeprotection-6", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "medium",
    "A salaried employee aged 35 has employer sickness benefits covering 6 months at full pay. What is the income protection planning implication?",
    ["Income protection cannot supplement employer benefits — an alternative choice", "Employer coverage extends only 6 months; individual income protection provides protection", "No additional income protection needed — an alternative choice", "Employer benefits are irrelevant to individual planning — an alternative choice"], 1,
    "Employer sick pay typically covers 6-12 months; after expiration, the insured relies on Statutory Sick Pay (£105/week) or disability benefits (often insufficient). Individual policies extend protection through remaining working years."
  ),
  q("fpa-ch2-incomeprotection-7", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "hard",
    "How should income protection be coordinated with state benefits (Employment and Support Allowance)?",
    ["Advisers should ignore state benefits in planning — an alternative choice", "State benefits make income protection unnecessary — an alternative choice", "State benefits are means-tested and typically provide £6,000-£7,000 annually", "Income protection and state benefits cannot work together — an alternative choice"], 2,
    "State benefits exist but are modest and means-tested (assets above £6,000 may disqualify applicants). Individual income protection provides replacement of actual lost income and continues regardless of other income. Combined they provide comprehensive protection."
  ),
  q("fpa-ch2-incomeprotection-8", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "medium",
    "What is an 'elimination period' or 'waiting period' in income protection insurance?",
    ["The initial period (typically 4, 8, 13, or 26 weeks) after becoming unable to work during which", "A policy feature with no significance — an alternative choice", "The maximum period the policy will pay benefits — an alternative choice", "A period when benefits are paid in full but increase later — an alternative choice"], 0,
    "The elimination period is the gap between becoming unable to work and benefits starting. Longer periods (26+ weeks) reduce premiums because the insured relies on savings/employer benefits initially. Shorter periods (4 weeks) cost more but provide faster benefit onset."
  ),
  q("fpa-ch2-incomeprotection-9", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "easy",
    "Until what age should income protection typically cover the insured?",
    ["Age 60, for all occupations — an alternative choice", "Age 65 (or the client's chosen retirement age), when earned income ceases and", "Age 30, when earning capacity peaks — a phase of the economic cycle", "Age 50, when most people transition to savings — an alternative choice"], 1,
    "Income protection should extend until retirement (typically 65 or client-chosen age). After retirement, pension income and other investments replace earned income. Policies covering only to age 50 or 55 leave a protection gap."
  ),
  q("fpa-ch2-incomeprotection-10", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "medium",
    "Why might someone choose a longer elimination period despite understanding the protection gap?",
    ["Reduced premiums: longer elimination (26 weeks vs. 4 weeks) may reduce premiums by 30-40%, making the policy", "Elimination periods have no premium effect — an alternative choice", "Longer periods provide better protection — an alternative choice", "Insurance advisers should always recommend short elimination periods — an alternative choice"], 0,
    "Longer elimination periods trade immediate protection for affordability. A client with 6-month emergency savings can accept 26-week waiting while premiums fall significantly. This balances cost and protection realistically."
  ),
  q("fpa-ch2-incomeprotection-11", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "hard",
    "How does the definition of 'disability' affect income protection suitability?",
    ["All insurers define disability identically — an alternative choice", "Disability definitions are irrelevant to insurance planning — an alternative choice", "Definitions vary: 'own occupation' means unable to do your", "Definitions have no practical effect on claims — an alternative choice"], 2,
    "Own occupation definitions are crucial for professionals: a surgeon unable to operate may still be able to teach, so benefits may not pay under 'any occupation'. Own occupation policies are more expensive but provide genuine protection for specialists."
  ),
  q("fpa-ch2-incomeprotection-12", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "medium",
    "What is the relationship between income protection and rehabilitation services?",
    ["Insurers do not provide vocational services — an alternative choice", "Rehabilitation makes income protection unnecessary — an alternative choice", "Modern policies often include rehabilitation benefits,", "Income protection policies do not address rehabilitation — an alternative choice"], 2,
    "Progressive insurers include vocational rehabilitation as a core benefit: assisting the insured to retrain, return to modified duties, or transition to new work. This reduces claim duration and costs while improving customer outcomes."
  ),
  q("fpa-ch2-incomeprotection-13", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "easy",
    "How is income protection benefit level determined?",
    ["No limit on benefit amount — an alternative choice", "Always 100% of prior income — an alternative choice", "Benefit levels are arbitrary — an alternative choice", "Typically 50-70% of pre-disability"], 3,
    "Income protection usually replaces 50-70% of income because full replacement would remove incentive to return to work. Higher percentages apply to lower incomes. Policies have maximum benefit limits (e.g., £5,000/month)."
  ),
  q("fpa-ch2-incomeprotection-14", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "medium",
    "Why might self-employed individuals find income protection insurance more expensive than salaried employees?",
    ["Income protection is not available to self-employed — an alternative choice", "Self-employed income is variable", "All occupations pay identical premiums — an alternative choice", "Self-employed face no additional cost — an alternative choice"], 1,
    "Self-employed applications require detailed business accounts and income verification. Claims experience shows self-employed have higher claim frequency (no employer sick pay backup). These factors raise premiums significantly."
  ),
  q("fpa-ch2-incomeprotection-15", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "hard",
    "How should income protection be coordinated with pension contributions during a disability claim?",
    ["Benefits should be used to maximize pension instead of living expenses — an alternative choice", "Income protection and pension planning are unrelated — an alternative choice", "Pension contributions stop entirely during disability claims — an alternative choice", "Some policies continue pension contributions at reduced levels to"], 3,
    "Disability can threaten retirement adequacy due to lost contribution years. Sophisticated policies maintain some pension contribution during claims. Otherwise, clients should consider using part of their benefit to maintain retirement savings."
  ),
  q("fpa-ch2-pmi-5", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "easy",
    "What is private medical insurance (PMI)?",
    ["Insurance covering costs of private medical treatment for acute", "Life insurance alternative — an alternative choice", "Coverage only for emergency room visits — an alternative choice", "Long-term care insurance — an alternative choice"], 0,
    "PMI provides access to private hospitals/consultants for acute conditions, bypassing NHS waiting lists. Exclusions typically include chronic disease management, pre-existing conditions, and cosmetic procedures."
  ),
  q("fpa-ch2-pmi-6", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "medium",
    "How does PMI differ from the NHS in terms of treatment timescales?",
    ["PMI typically provides faster access: consultant", "PMI only covers emergency treatment — an alternative choice", "No difference; NHS and private treatment take identical time — an alternative choice", "NHS is always faster than private providers — an alternative choice"], 0,
    "PMI value lies in speed: private consultants see patients in 1-2 weeks, NHS waits months. Private surgery scheduled quickly, NHS months. For acute conditions, this speed can improve outcomes and reduce time away from work."
  ),
  q("fpa-ch2-pmi-7", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "hard",
    "A 55-year-old with pre-existing hypertension applies for PMI. What should they expect?",
    ["Full cover including hypertension treatment — an alternative choice", "PMI not available to applicants with any pre-existing condition", "Coverage of acute conditions except hypertension-related claims (common pre-existing exclusion)", "Complete cover without medical underwriting — an alternative choice"], 2,
    "PMI medical underwriting leads to pre-existing condition exclusions (common for hypertension, diabetes, mental health). Applicants with history may have conditions excluded or face higher premiums. Full disclosure is essential."
  ),
  q("fpa-ch2-pmi-8", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "medium",
    "Why might an employer offer group PMI to employees?",
    ["No particular business benefit — an alternative choice", "PMI is only available individually — an alternative choice", "Group schemes reduce individual premium", "Employers have no interest in PMI offerings — an alternative choice"], 2,
    "Group PMI is cheaper due to negotiated rates and employer administration. Employers offer it to attract/retain talent. Some employers cover full costs, others require employee contribution. This makes private healthcare accessible to employees who might not purchase individually."
  ),
  q("fpa-ch2-pmi-9", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "easy",
    "What procedures are typically covered under PMI?",
    ["All medical and surgical procedures without limitation — an alternative choice", "Emergency room visits only — an alternative choice", "Only outpatient consultations — an alternative choice", "Acute conditions: surgery for appendicitis,"], 3,
    "PMI covers acute medical/surgical conditions (joint replacement, cataract removal, hernia repair) but typically excludes: ongoing diabetes/asthma management, physiotherapy, mental health counselling, and preventive care (screening)."
  ),
  q("fpa-ch2-pmi-10", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "medium",
    "How does the concept of 'waiting periods' apply to PMI?",
    ["PMI typically includes waiting periods: 13 weeks for non-emergency treatment; immediately for emergencies", "All claims are paid immediately regardless of when policy starts — an alternative choice", "Waiting periods apply only to life insurance — an alternative choice", "No waiting periods exist for PMI coverage — an alternative choice"], 0,
    "PMI waiting periods (typically 13 weeks) ensure coverage begins only after a reasonable observation period. Emergencies are covered immediately. This prevents applicants from purchasing coverage immediately before planned procedures."
  ),
  q("fpa-ch2-pmi-11", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "hard",
    "Why might PMI become less valuable as someone ages?",
    ["PMI improves with age — an alternative choice", "PMI premiums rise dramatically with age (often doubling between 40-60)", "PMI is most valuable to older clients — an alternative choice", "Age has no effect on PMI value — an alternative choice"], 1,
    "PMI becomes expensive at 50+: annual premiums may reach £3,000-£5,000+. Chronic conditions like diabetes require treatment exclusions. Older clients may find NHS acceptable given affordability of private care."
  ),
  q("fpa-ch2-pmi-12", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "medium",
    "Should PMI be recommended to all affluent clients regardless of NHS access?",
    ["All wealthy clients have PMI — an alternative choice", "PMI should be evaluated based on: NHS wait", "PMI is irrelevant to affluent clients — an alternative choice", "Always recommend PMI to wealthy clients — an alternative choice"], 1,
    "Not all affluent clients want PMI: some prefer NHS, others travel to private consultants directly (fee-for-service). Advisers should discuss relative value, speed preferences, and existing health issues rather than assuming wealth determines PMI appropriateness."
  ),
  q("fpa-ch2-pmi-13", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "easy",
    "What are the three types of PMI policy structures?",
    ["Term, investment, and hybrid", "Fully comprehensive, moratorium,", "Individual, family, and group", "Life, disability, and accident"], 1,
    "Fully comprehensive covers a wide range of conditions; moratorium excludes only conditions currently being treated (refreshes annually); hospital cash pays a daily amount during hospital admission. Each has different costs and coverage scope."
  ),
  q("fpa-ch2-pmi-14", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "medium",
    "How does the concept of 'excess' work in PMI?",
    ["Higher excess always means more expensive premiums — an alternative choice", "Excess applies only to hospital admissions — an alternative choice", "PMI has a designated excess (typically £50-£250 per claim) that the insured pays before", "All PMI policies have no excess — an alternative choice"], 2,
    "PMI excess (e.g., £100) means the insured pays the first £100 of each claim; the insurer covers costs above that. Higher excess = lower premium. Some policies have no excess for certain treatments (e.g., diagnostic tests)."
  ),
  q("fpa-ch2-pmi-15", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "hard",
    "Why might an adviser recommend PMI to a 40-year-old before premiums escalate significantly?",
    ["Age 40+ premiums rise sharply; waiting periods", "PMI premiums stabilize regardless of entry age — an alternative choice", "Age 40 has no significance for PMI — an alternative choice", "Late entry to PMI is always cheaper — an alternative choice"], 0,
    "PMI entry in 40s locks in rates before steep age-related increases. Early entry minimizes pre-existing exclusions (conditions developed after entry are typically covered). Age 50+ rates can be 2-3x age 40 rates."
  ),
  q("fpa-ch3-statepension-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "easy",
    "What is the New State Pension?",
    ["An optional supplement to occupational pensions — an alternative choice", "A simplified flat-rate state pension introduced April 2016 for those reaching State", "The pension system before 2016 — an alternative choice", "Only available to low-income retirees — an alternative choice"], 1,
    "The New State Pension (introduced April 2016) provides a single flat rate (£225.45/week in 2024-25) based on 35 qualifying years of National Insurance contributions. This replaces the old three-tier system (Basic, Additional, Graduated)."
  ),
  q("fpa-ch3-statepenageage-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "medium",
    "What is State Pension Age and how does it differ by gender?",
    ["All individuals reach SPA at 65 — an alternative choice", "SPA has increased beyond 65 and is", "SPA is determined by individual choice — an alternative choice", "Women always retire earlier than men — an alternative choice"], 1,
    "State Pension Age (SPA) has increased: born before 1951 = age 65, born 1951-60 = 66, born 1960-77 = 66-67, born after 1977 = 68. Gender differences (women 60, men 65) have been eliminated through gradual equalization (complete by 2020)."
  ),
  q("fpa-ch3-contrib-years-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "hard",
    "How many qualifying years are required to receive the New State Pension and what happens with fewer years?",
    ["35 qualifying years = full pension; fewer years receive reduced pension pro-rata", "Working longer always increases the pension amount — an alternative choice", "Only 20 years of contributions required — an alternative choice", "No qualifying years required — an alternative choice"], 0,
    "New State Pension requires 35 qualifying years for full amount. Pro-rata payments for 10-34 years (fraction of full amount). Fewer than 10 years = no pension. Gaps can be filled via voluntary contributions, but this costs significant sums (£170/week for missing year)."
  ),
  q("fpa-ch3-deferral-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "medium",
    "What incentive exists to defer claiming the New State Pension?",
    ["No incentive; claiming immediately is always optimal — an alternative choice", "Deferring reduces the pension amount — an alternative choice", "Deferring increases the weekly amount by 1% per nine weeks (5.8% per year) up to age 73", "Deferral only applies to men — an alternative choice"], 2,
    "New State Pension deferral (post-April 2016 claimants) increases the rate by 1% per 9 weeks of deferral. Someone deferring from 67 to 70 receives ~17.4% higher pension for life. Decision depends on health, life expectancy, and current income needs."
  ),
  q("fpa-ch3-working-longer-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "easy",
    "How does continued employment after State Pension Age affect entitlement?",
    ["Contributing to National Insurance while working allows filling gaps in contribution record", "Working stops pension accrual — an alternative choice", "Pensions cannot grow once SPA is reached — an alternative choice", "Further work has no impact on pension — an alternative choice"], 0,
    "Working past SPA allows additional National Insurance contributions. Someone with 33 qualifying years can complete 35 years through continued work, improving pension from 33/35 to 35/35 of the full rate."
  ),
  q("fpa-ch3-means-test-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "medium",
    "Is the New State Pension means-tested?",
    ["Means-tested only for high-income retirees — an alternative choice", "Not means-tested: all eligible pensioners receive", "Always means-tested regardless of other income — an alternative choice", "Means-testing applies only to basic pension — an alternative choice"], 1,
    "The New State Pension is not means-tested. Unlike some benefits, pension is paid to all eligible claimants with sufficient contribution records, regardless of other income or capital. This simplifies retirement planning for higher-income individuals."
  ),
  q("fpa-ch3-inflation-link-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "easy",
    "How is the New State Pension adjusted for inflation?",
    ["No inflation adjustment; amount remains fixed — an economic condition", "Indexed only to wages — an alternative choice", "Triple-lock: pension increases by highest of inflation (CPI), wage growth, or 2.5% minimum", "Adjusted annually by government discretion — an alternative choice"], 2,
    "The triple-lock (CPI, wage growth, or 2.5% minimum) ensures pension doesn't lose purchasing power. Since 2022, a temporary earnings cap has modified the lock. Retirees benefit from inflation protection through this mechanism."
  ),
  q("fpa-ch3-pension-credit-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "medium",
    "What is Pension Credit and how does it relate to State Pension?",
    ["Pension Credit is a means-tested benefit providing additional", "Pension Credit is not available to State Pension recipients — an alternative choice", "Pension Credit and State Pension cannot be received together — an alternative choice", "Pension Credit replaces State Pension — an alternative choice"], 0,
    "Pension Credit is means-tested and designed to ensure pensioners have minimum income (currently £218.15/week for single). Someone with small pension (e.g., £100/week) may qualify for top-up to the minimum. Savings above £10,000 are counted as income."
  ),
  q("fpa-ch3-married-widow-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "hard",
    "How do state pension rules work for married couples and widows?",
    ["Married couples receive one combined pension — an alternative choice", "New State Pension is fully individual; widow/widower can", "Widows always receive full spousal benefits — an alternative choice", "Each person receives pension independently based on own contributions — an alternative choice"], 1,
    "New State Pension is entirely individual: no spousal or widow benefits can be derived from a partner's record (unless the widow claimed old system pension before April 2016). This differs from old system where widows could claim on husband's record."
  ),
  q("fpa-ch3-ni-gaps-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "medium",
    "Can gaps in National Insurance record be filled to improve State Pension?",
    ["Filling gaps costs more than the pension value increases — an alternative choice", "Gaps up to 6 years can be filled through", "Gaps cannot be filled — an alternative choice", "Only recent gaps can be filled — an alternative choice"], 1,
    "Voluntary contributions can fill recent gaps (up to 6 years) at £170+/week. Cost to fill one year is ~£8,800. Filling gaps is worthwhile only if one year of contributions (~£4,200 annually) significantly improves pension, making it economical only for those very close to 35 years."
  ),
  q("fpa-ch3-abroad-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "easy",
    "Is State Pension payable if someone lives abroad in retirement?",
    ["All expatriates receive full increases — an alternative choice", "State Pension is paid to UK residents and", "Pension stops if you leave the UK — an alternative choice", "State Pension is only paid in the UK — an alternative choice"], 1,
    "State Pension is paid abroad, but increases (triple-lock) are frozen for residents in countries without reciprocal agreements (e.g., Australia, USA, Canada). They receive frozen pensions while UK residents receive increases."
  ),
  q("fpa-ch4-annuity-types-5", "cisi-fpa", "fpa-ch4", "4.1", "Annuity Types", "solutions", "easy",
    "What is a lifetime annuity?",
    ["Annuity lasting a fixed number of years — an alternative choice", "Annuity providing guaranteed income for", "Short-term income supplement — an alternative choice", "Annuity available only to high-income retirees — an alternative choice"], 1,
    "A lifetime annuity converts a lump sum into guaranteed income paid for life. Rates at purchase depend on age, health, and annuity type (level, escalating, joint-life). Buyer receives income regardless of how long they live."
  ),
  q("fpa-ch4-annuity-escalating-5", "cisi-fpa", "fpa-ch4", "4.1", "Annuity Types", "solutions", "medium",
    "How does an escalating annuity differ from a level annuity?",
    ["Escalating provides identical increases regardless of inflation — an economic condition", "Escalating is less expensive than level — an alternative choice", "Level: constant income each year; escalating: income increases annually (typically 3-5%) to address", "No difference; terms are interchangeable — an alternative choice"], 2,
    "Level annuity provides constant £10,000/year forever. Escalating annuity starts at £8,000/year but increases 3% annually (£8,240, £8,487, etc.). Escalating costs more upfront but protects purchasing power."
  ),
  q("fpa-ch4-longevity-5", "cisi-fpa", "fpa-ch4", "4.1", "Annuity Types", "solutions", "hard",
    "What are 'longevity swaps' and what role might they play in future retirement planning?",
    ["They have no role in modern finance — an alternative choice", "Financial instruments hedging against longevity risk (living longer than expected)", "Instruments that shorten life expectancy — an alternative choice", "Only available to wealthy individuals — an alternative choice"], 1,
    "Longevity swaps hedge against increasing life expectancies. A pension fund paying increasing numbers of very old pensioners can swap this risk with an insurer. This may eventually make lifetime annuities more viable by reducing insurer risk."
  ),
  q("fpa-ch4-flexi-drawdown-5", "cisi-fpa", "fpa-ch4", "4.1", "Flexi-Access Drawdown", "solutions", "easy",
    "What is flexi-access drawdown (FAD)?",
    ["Pension flexibility where the individual withdraws income as needed from an invested fund", "Annuity alternative where pension stays invested — an alternative choice", "Lump sum withdrawal of entire pension — an alternative choice", "Only available to those with very large pensions — an alternative choice"], 0,
    "FAD allows leaving pension invested while withdrawals are taken as needed. Income varies with withdrawal amount and investment performance. No annuity locked-in at purchase. Greater flexibility but requires discipline on withdrawals."
  ),
  q("fpa-ch4-small-pots-5", "cisi-fpa", "fpa-ch4", "4.1", "Small Pots", "solutions", "medium",
    "What is the small pots exemption?",
    ["All pensions under £10,000 are small pots — an alternative choice", "Personal pensions below £10,000 can be withdrawn as lump sum without using CAT (Charge, Availability, Term)", "Small pots cannot be accessed until retirement — an alternative choice", "Small pots exemption eliminates tax on withdrawal — an alternative choice"], 1,
    "Small pots exemption allows lump sum withdrawal of sub-£10,000 personal pensions without annuity requirement. Withdrawn amount is added to income for the year and taxed. Someone with £10,000 small pot and £45,000 income = £55,000 taxable income that year."
  ),
  q("fpa-ch4-trivial-commutation-5", "cisi-fpa", "fpa-ch4", "4.1", "Trivial Commutation", "solutions", "hard",
    "When can trivial commutation lump sum be taken from a DB pension?",
    ["Anytime without restriction — an alternative choice", "Trivial commutation only applies to DC pensions — an alternative choice", "When total pension benefits are below £30,000", "All DB pensions allow trivial commutation — an alternative choice"], 2,
    "DB trivial commutation permits lump sum withdrawal if total benefits (cash equivalent + death benefits) are <£30,000 and member <75 years old. Tax treatment: 25% (Pension Commencement Lump Sum equivalent) tax-free, 75% taxed as income."
  ),
  q("fpa-ch5-suitability-5", "cisi-fpa", "fpa-ch5", "5.1", "Suitability", "recommendations", "easy",
    "What must financial planners establish before making recommendations?",
    ["Client's preferred investment returns only — a financial measure", "Only client income matters — an alternative choice", "Client's circumstances, objectives, risk tolerance, capacity for loss, and any ethical/religious constraints", "All clients' recommendations are suitable regardless of circumstances — an alternative choice"], 2,
    "Suitability requires matching recommendations to client facts and preferences. An adviser recommends only products/strategies appropriate for that specific client given their circumstances, goals, risk profile, and timescale."
  ),
  q("fpa-ch5-suitability-6", "cisi-fpa", "fpa-ch5", "5.1", "Suitability", "recommendations", "medium",
    "A client says they want to invest all savings in emerging markets equities because recent returns were strong. What should the adviser do?",
    ["Recommend the same strategy regardless of analysis — a financial measure", "Discuss recent return bias, assess whether this allocation matches", "Assume the client's preference overrides suitability analysis — an alternative choice", "Implement the strategy immediately without question — a financial measure"], 1,
    "Strong recent returns trigger recency bias. Adviser should challenge this preference by discussing volatility, diversification needs, and goal-appropriate risk levels. Final recommendation matches client circumstances, not recent performance enthusiasm."
  ),
  q("fpa-ch5-recommend-process-5", "cisi-fpa", "fpa-ch5", "5.1", "Suitability", "recommendations", "hard",
    "How should an adviser handle a situation where no suitable product exists to meet a client objective?",
    ["Recommend the least unsuitable product available — an alternative choice", "Recommend an unsuitable product anyway to meet the client's preference", "Decline to make a recommendation and explain alternative courses", "Force the client to modify their objective — an alternative choice"], 2,
    "When no suitable product exists (e.g., no care insurance product available for a client's long-term care goal), advisers should explain this limitation and suggest alternatives: savings accumulation, equity release, or care cost funding via other investments."
  ),
  q("fpa-ch5-document-5", "cisi-fpa", "fpa-ch5", "5.1", "Suitability", "recommendations", "medium",
    "Why must advisers document their suitability analysis?",
    ["Only required for large transactions — an alternative choice", "Documentation is optional — an alternative choice", "Evidence of suitability analysis", "Verbal advice is sufficient — an alternative choice"], 2,
    "Regulators require written suitability reports explaining objectives, analysis, and recommendation justification. This protects clients (ensuring thought-through advice) and advisers (defending against later claims of unsuitable advice)."
  ),
  q("fpa-ch5-review-5", "cisi-fpa", "fpa-ch5", "5.1", "Suitability", "recommendations", "easy",
    "When should financial planning recommendations be reviewed?",
    ["Never; recommendations remain valid indefinitely — an alternative choice", "Regularly (typically annually) or when significant life changes occur", "Only at client request — an alternative choice", "Reviews are unnecessary if initial planning was thorough — an alternative choice"], 1,
    "Reviews ensure recommendations remain suitable as circumstances change: income increase, inheritance, health change, market conditions. Annual reviews are standard practice; additional reviews follow major life events."
  ),
  q("fpa-ch1-cashflow-11", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "hard",
    "A client's analysis reveals they can save £500 monthly, but they have three competing objectives: emergency fund, debt repayment, and pension contributions. How should priorities be set?",
    ["Maximize pension contributions immediately (£400), then emergency fund (£100) — an alternative choice", "Ignore emergency fund and allocate to investments — an alternative choice", "Divide £500 equally among all three — an alternative choice", "Emergency fund first (£150), then high-interest debt (£250), then pension (£100) to build foundation before growth"], 3,
    "Sequential prioritization: emergency fund provides financial security enabling other planning. High-interest debt reduction provides guaranteed 'return'. Pension follows once safety net exists. This order reflects financial hierarchy."
  ),
  q("fpa-ch1-cashflow-12", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "medium",
    "Why is it important to understand seasonal variations in a self-employed client's income?",
    ["Seasonal variations are irrelevant to planning — an alternative choice", "All income patterns are identical — an alternative choice", "Seasonal effects only matter for very large income — an alternative choice", "Seasonal income affects affordability of regular"], 3,
    "Self-employed seasonal income (e.g., tourism business peaks in summer) means some months have zero income. Advisers must ensure savings/buffers cover lean months, and insurance premiums/pension contributions remain affordable through the full cycle."
  ),
  q("fpa-ch1-objectives-11", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "hard",
    "A client aged 50 states they want to retire in 5 years with £50,000 annual income. Their current assets are £200,000 and annual savings are £10,000. Assuming 4% portfolio returns, will they meet this goal?",
    ["Goal is impossible regardless of circumstances — an alternative choice", "Likely shortfall: £200k → £245k (5 years @ 4%), plus £50k savings = £295k", "Yes, easily achievable with these parameters — an alternative choice", "Need more information to determine feasibility — an alternative choice"], 1,
    "Simple math reveals shortfall. At 4% withdrawal rate, £1.25m is needed for £50k annually. Client is on track to accumulate ~£295k. This £950k gap requires: higher returns, delayed retirement, or reduced target income."
  ),
  q("fpa-ch1-risk-11", "cisi-fpa", "fpa-ch1", "1.5", "Risk Profiling", "planning", "medium",
    "How should risk profiling be updated as a client ages?",
    ["All clients should shift to 100% bonds at age 50 — an alternative choice", "Risk profile never changes regardless of age — an alternative choice", "Regular reassessment is essential: time horizon shortens,", "Risk profiles should be reset yearly regardless of change — an alternative choice"], 2,
    "Risk profiling is dynamic. As someone ages 30→50→70, time to recovery from losses decreases (capacity reduction), even if attitude remains stable. Life events (inheritance, health diagnosis, job change) also trigger reassessment."
  ),
  q("fpa-ch1-risk-12", "cisi-fpa", "fpa-ch1", "1.5", "Risk Profiling", "planning", "hard",
    "What is the 'reverse sequence of returns risk' and why does it matter to near-retirees?",
    ["Irrelevant concept to investment planning — an alternative choice", "Risk that poor returns early in retirement (when", "Risk that returns happen in reverse of inflation order — an economic condition", "Only applies to bond portfolios — an alternative choice"], 1,
    "Sequence risk: a retiree experiencing -20% in year 1 of retirement has damaged future spending capacity (withdrawals crystallize losses). Someone 20 years into retirement absorbs same loss without withdrawal impact. This drives pre-retirement de-risking."
  ),
  q("fpa-ch1-behaviour-11", "cisi-fpa", "fpa-ch1", "1.7", "Behavioural Finance", "planning", "medium",
    "How can advisers help clients overcome the sunk cost fallacy in investment decisions?",
    ["Help clients focus on future prospects rather than past", "Encourage clients to hold losers until profits recover — an alternative choice", "Never mention past investment losses — an alternative choice", "Acknowledge sunk costs are irrelevant to forward decisions — an alternative choice"], 0,
    "Sunk cost fallacy: throwing good money after bad to recover past losses. Adviser should reframe: evaluate the investment on forward prospects only. If fundamentals are poor, sell regardless of past loss. If fundamentals are good, buy regardless of past gains."
  ),
  q("fpa-ch1-lifestage-11", "cisi-fpa", "fpa-ch1", "1.6", "Life Stages", "planning", "medium",
    "How should financial planning change when a client's dependent children become adults?",
    ["Life insurance needs decrease significantly (no income replacement for adults)", "Adult children create equal financial needs to young children — an alternative choice", "Dependents' age is irrelevant to planning — an alternative choice", "Objectives and priorities remain identical regardless of life stage — an alternative choice"], 0,
    "With adult children independent, insurance protecting them decreases. Education expenses cease. The client can redirect funds previously protecting dependents toward their own retirement, discretionary goals, or wealth building."
  ),
  q("fpa-ch1-planning-process-11", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "medium",
    "What role does financial coaching play in the financial planning process?",
    ["Coaching addresses behavior and discipline issues:", "Financial planning makes coaching unnecessary — an alternative choice", "Coaching is unrelated to financial planning — an alternative choice", "Coaching applies only to investment selection — an alternative choice"], 0,
    "Financial coaching helps clients execute plans despite behavioral biases. An adviser may recommend perfect portfolio allocation, but coaching ensures the client maintains it through volatility rather than panic-selling."
  ),
  q("fpa-ch1-objectives-12", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "hard",
    "A client has savings of £100k and annual surplus income of £15k. They have multiple objectives: home improvement (£20k), emergency fund (£15k), and retirement acceleration. How should the planner help prioritize?",
    ["Retirement acceleration exclusively — an alternative choice", "Emergency fund first (essential safety net), then home improvement from surplus income, then remaining income", "Home improvement first because it improves quality of life immediately — an alternative choice", "All objectives receive equal allocation — an alternative choice"], 1,
    "Financial stability foundations come first. Emergency fund ensures other goals aren't derailed by unexpected costs. Home improvement funded from annual surplus (£15k/year = £20k in ~18 months). Remainder accelerates retirement. This sequencing optimizes long-term security."
  ),
  q("fpa-ch2-protection-16", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "medium",
    "Why might a client with substantial investments still require life insurance?",
    ["Wealthy individuals should never purchase insurance — an alternative choice", "Investments make life insurance unnecessary — an alternative choice", "Investments may be illiquid or volatile; life insurance provides immediate tax-free capital", "Life insurance and investments serve identical purposes — an alternative choice"], 2,
    "Investments can provide long-term wealth but may be illiquid (property, unlisted shares). Life insurance provides immediate cash for: mortgage payoff, estate taxes, or interim income replacement while investments are managed."
  ),
  q("fpa-ch2-protection-17", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "hard",
    "How should protection planning address family changes such as marriage, divorce, or blended families?",
    ["Family changes trigger comprehensive reassessment: spouse coverage, beneficiary designations,", "Protection plans remain static regardless of family changes — an alternative choice", "Family circumstances are irrelevant to insurance needs — an alternative choice", "Protection planning applies only to unmarried individuals — an alternative choice"], 0,
    "Marriage increases protection needs (now two dependents); divorce may decrease it. Blended families create complexity: ensuring children from both relationships are provided for. Regular reviews following major life events are essential."
  ),
  q("fpa-ch2-lifeassurance-16", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "medium",
    "What is the relationship between life insurance and estate planning?",
    ["They are completely separate topics — a financial measure", "Estate planning makes life insurance unnecessary — an alternative choice", "Life insurance provides immediate liquidity for", "Life insurance applies only to individuals without estates — an alternative choice"], 2,
    "Life insurance complements estate planning. A £300k policy written in trust bypasses probate and provides liquidity. This ensures executors can pay estate taxes without forcing asset sales, preserving inheritance."
  ),
  q("fpa-ch2-criticalillness-16", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "medium",
    "How do medical underwriting standards for critical illness affect younger clients versus older clients?",
    ["Underwriting standards are identical at all ages — an alternative choice", "Younger applicants face less stringent underwriting and", "Underwriting occurs only for those over age 50 — an alternative choice", "Younger clients always face stricter underwriting — an alternative choice"], 1,
    "Medical underwriting becomes progressively stricter with age. A 30-year-old rarely encounters exclusions. A 55-year-old with hypertension history likely has that condition excluded. Younger clients benefit from entering cover while health is good."
  ),
  q("fpa-ch2-incomeprotection-16", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "hard",
    "For a self-employed professional, how should income protection benefit level be determined?",
    ["Self-employed cannot obtain income protection — an alternative choice", "Match last year's income regardless of volatility — an alternative choice", "Use 3-5 year average income to smooth volatility; account for tax-efficiency (benefits are taxable)", "Cover only current income (ignoring trend) — an alternative choice"], 2,
    "Self-employed income varies. A designer earning £60k one year, £45k next, £70k third should average to ~£58k for insurance purposes. Using last year (£70k) overestimates, while using current year underinsures. Averaging prevents gaps."
  ),
  q("fpa-ch2-pmi-16", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "medium",
    "Should PMI be viewed as a short-term or long-term protection product for most clients?",
    ["PMI is only valuable as permanent protection — an alternative choice", "PMI is often short-to-medium term (10-20 years during working life)", "PMI is equally affordable at all ages — an alternative choice", "PMI should be lifetime coverage without reassessment — an alternative choice"], 1,
    "PMI typically spans working years when private healthcare speed is valuable and premiums are moderate (age 30-55: £1,000-£2,500/year). At 60+, premiums become expensive (£3,500+/year) while NHS becomes more accessible; many clients lapse coverage."
  ),
  q("fpa-ch3-pension-analysis-5", "cisi-fpa", "fpa-ch3", "3.2", "Pension Analysis", "retirement", "medium",
    "A client aged 40 with £150k in pension savings wants to retire at 60. Assuming 5% growth and £100k additional contributions (£5k/year), what approximate fund value is projected at retirement?",
    ["£250k regardless of assumptions — an alternative choice", "£150k (unchanged) — an alternative choice", "£1 million (guaranteed) — an alternative choice", "£150k × (1.05^20) + contributions ≈ £150k × 2.65 + £125k ≈ £520k"], 3,
    "Compound growth: £150k grows to ~£400k @ 5% over 20 years. Additional £100k contributions (£5k × 20 years, also growing) adds ~£130k = total ~£530k. At 4% withdrawal rate = £21k annual income. This may shortfall a retirement goal of £40k."
  ),
  q("fpa-ch3-annual-allowance-5", "cisi-fpa", "fpa-ch3", "3.2", "Pension Taxation", "retirement", "hard",
    "Why is the £60,000 annual allowance (AA) significant for pension planning?",
    ["All clients can contribute unlimited sums — an alternative choice", "AA applies only to self-employed — an alternative choice", "It has no impact on planning — an alternative choice", "Contributions exceeding £60k in one year trigger AA tax charges (40% × excess)"], 3,
    "Annual allowance caps tax-relieved contributions. A high-earner receiving £30k employer contribution can only make £30k personal contribution (£60k total) without triggering charges. Those hitting limit must choose: accept tax charge or reduce contributions."
  ),
  q("fpa-ch3-carry-forward-5", "cisi-fpa", "fpa-ch3", "3.2", "Pension Taxation", "retirement", "medium",
    "What is pension carry-forward and how does it benefit clients with variable income?",
    ["Unused allowance expires each year — an alternative choice", "Carry-forward applies only to employees — an alternative choice", "Self-employed year earning £80k can use £60k + unused allowance from prior 3 years (potentially £180k+) to", "Carry-forward allows unused AA from previous 3 years to offset current year excess contributions"], 2,
    "Carry-forward is valuable for variable-income clients. A consultant with low income Year 1 (uses £40k of AA) carries forward £20k. Year 2 high income (£100k) can contribute £160k (£60k current + £40k carried forward) without tax charges."
  ),
  q("fpa-ch3-drawdown-strategy-5", "cisi-fpa", "fpa-ch3", "3.3", "Drawdown Strategy", "retirement", "hard",
    "What is the 'critical yield' in relation to capped drawdown?",
    ["Irrelevant to modern retirement planning — an alternative choice", "The investment return required for a", "The maximum withdrawal rate allowed — a financial measure", "The minimum returns guaranteed — a financial measure"], 1,
    "Capped drawdown required illustration of 'critical yield': if rates were 5%, an illustration showed what returns the fund needed to sustain the target withdrawal. High critical yields suggested risk of fund depletion if returns disappointed. FAD eliminated this requirement."
  ),
  q("fpa-ch3-longevity-assumption-5", "cisi-fpa", "fpa-ch3", "3.3", "Longevity Planning", "retirement", "medium",
    "Why is longevity assumption critical for sustainable withdrawal planning?",
    ["Everyone lives to exactly age 90 — an alternative choice", "Longevity has no impact on withdrawal strategy — a financial measure", "Longevity risk only affects annuities — an alternative choice", "Assuming 25-year retirement underestimates:"], 3,
    "A 65-year-old planning 25-year horizon (to 90) who lives to 95 faces deplenishment risk. Advisers should assume longer lifespans (35+ years) and plan conservatively. Life expectancy tables suggest 60+ year retirement possibilities for some."
  ),
  q("fpa-ch4-withdrawal-sequence-5", "cisi-fpa", "fpa-ch4", "4.2", "Withdrawal Strategy", "solutions", "hard",
    "What is 'sequence of returns risk' and how can it be mitigated in early retirement?",
    ["Risk that returns occur in random order — a financial measure", "Only affects bond portfolios — an alternative choice", "Risk that poor early returns combined with withdrawals create significant portfolio depletion", "Irrelevant concept — an alternative choice"], 2,
    "A retiree withdrawing £40k/year from £1m portfolio faces sequence risk if Year 1 = -30% loss. Portfolio drops to £670k while £40k withdrawn = £630k remaining (37% loss). Recovery is harder. Mitigations: keep 2-3 years cash, skip withdrawals in negative years, or maintain flexibility."
  ),
  q("fpa-ch4-annuity-guarantees-5", "cisi-fpa", "fpa-ch4", "4.2", "Annuity Features", "solutions", "medium",
    "What is a 'guaranteed period' in annuities and why might it matter?",
    ["Irrelevant feature — an alternative choice", "If annuitant dies within the guaranteed period (5-10 years), payments", "Guarantee that returns will be positive — a financial measure", "Only available on certain annuity types — an alternative choice"], 1,
    "A £200k annuity with 5% yield = £10k/year for life. With no guarantee, if annuitant dies Year 1, beneficiaries receive nothing. With 10-year guarantee, beneficiaries receive remaining payments. This is valuable protection for early deaths."
  ),
  q("fpa-ch5-conflicts-5", "cisi-fpa", "fpa-ch5", "5.1", "Conflicts", "recommendations", "medium",
    "How should advisers handle conflicts of interest in recommendations?",
    ["Ignore conflicts and proceed with recommendations — an alternative choice", "Avoid recommending higher-fee products to benefit the client — an alternative choice", "Conflicts are inevitable and clients understand them — an alternative choice", "Disclose conflicts clearly"], 3,
    "Adviser recommends Fund A (0.5% fee) and Fund B (0.75% fee). If Fund A is better for the client, recommend Fund A despite lower adviser revenue. Disclose that both funds are available. Transparency and client benefit override commission concerns."
  ),
  q("fpa-ch5-monitoring-5", "cisi-fpa", "fpa-ch5", "5.2", "Monitoring", "recommendations", "hard",
    "What metrics should advisers use to evaluate whether recommendations are achieving client objectives?",
    ["Only portfolio returns matter — a financial measure", "Multiple metrics: progress toward goals (savings targets on track?), performance vs", "Adviser gut feeling about performance — an alternative choice", "Client satisfaction alone determines success — an alternative choice"], 1,
    "Successful recommendations require multi-dimensional assessment. Client may earn 6% returns but fall short of 8% goal (negative). Alternatively, 5% returns may exceed conservative goal (positive). Progress and goal alignment matter more than raw returns."
  ),
  q("fpa-ch1-cashflow-13", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "medium",
    "A client's monthly income is £3,500 net. Mortgage £1,200, utilities £150, food £400, insurance £100, transport £200, other £300 = £2,350 expenses. How much can realistically be allocated to financial planning?",
    ["£0 (no surplus) — an alternative choice", "£700-£900 realistically: retain", "£1,150 (all surplus) — an alternative choice", "All surplus can be committed — an alternative choice"], 1,
    "With £1,150 surplus, allocating £700 to planning leaves £450 buffer. This prevents accumulating credit card debt if car repair (£500) occurs. Conservative approach balances planning progress with financial security."
  ),
  q("fpa-ch2-mortgageprotection-5", "cisi-fpa", "fpa-ch2", "2.2", "Mortgage Protection", "protection", "medium",
    "A couple with a £250k mortgage (25 years) both need protection. Should they purchase one joint life policy or two individual policies?",
    ["Two individual policies offer flexibility: each can increase cover independently,", "Joint policies are always cheaper — an alternative choice", "Joint policy always optimal — an alternative choice", "Insurance structure has no practical difference — an alternative choice"], 0,
    "Joint policy covers 'first death' (pays on whoever dies first, then ends). Two individual policies allow: one increases cover when child born, the other remains unchanged. Flexibility outweighs minor cost savings."
  ),
  q("fpa-ch2-lifeassurance-17", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "hard",
    "A client aged 45 is considering decreasing term insurance (matching mortgage reduction) vs. level term. Which is appropriate?",
    ["Both products are identical — an alternative choice", "Always recommend level term — an alternative choice", "Always recommend decreasing to match declining liability — an alternative choice", "Decreasing matches mortgage (good for mortgage-only cover)"], 3,
    "Mortgage-specific need? Decreasing term matches debt and is cheaper. Overall family protection (income replacement for 20+ years of child dependency)? Level term maintains coverage. Often both apply, requiring combination strategies."
  ),
  q("fpa-ch3-statepension-6", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "medium",
    "A client born in 1960 reaches State Pension Age at what age?",
    ["68 — an alternative choice", "65 — an alternative choice", "66 (born in 1960, SPA is 66)", "67 — an alternative choice"], 2,
    "State Pension Age for those born 1960-77 is between 66-67 (exact age depends on birth month). Someone born April 1960 reaches SPA at age 66 years 4 months. This represents the gradual increase from 65 to 68."
  ),
  q("fpa-ch3-workplace-pension-5", "cisi-fpa", "fpa-ch3", "3.2", "Workplace Pensions", "retirement", "medium",
    "What is 'auto-enrolment' and why was it introduced?",
    ["Employees always voluntarily enrol in pensions — an alternative choice", "Auto-enrolment has no specific purpose — an alternative choice", "Mandatory employer contribution into pension (minimum 3%) for eligible employees", "Auto-enrolment only applies to self-employed — an alternative choice"], 2,
    "Auto-enrolment addressed the fact that millions of workers had no occupational pension. Since 2012, employers must enrol eligible employees (age 22+, earning >£10.5k annually) into qualified pensions. Employees can opt out."
  ),
  q("fpa-ch3-pension-death-benefits-5", "cisi-fpa", "fpa-ch3", "3.2", "Pension Death Benefits", "retirement", "medium",
    "What happens to a personal pension if the member dies before retirement?",
    ["Only the spouse can inherit — an alternative choice", "Death benefits are always taxed — an alternative choice", "Pension is forfeited entirely — an alternative choice", "Death benefits are typically paid to"], 3,
    "Pension death benefits provide valuable inheritance for young savers. If someone dies at 40 with £100k pension, beneficiaries receive £100k (typically tax-free if under age 75). This makes pensions valuable for families with dependents."
  ),
  q("fpa-ch4-sustainable-withdrawal-5", "cisi-fpa", "fpa-ch4", "4.2", "Sustainable Withdrawals", "solutions", "hard",
    "What is the 4% rule and what are its limitations?",
    ["Only applies to stock portfolios — an alternative choice", "A guarantee that 4% withdrawal from any portfolio is always safe — an alternative choice", "Historically-derived guideline suggesting 4% annual", "A rule guaranteeing no portfolio depletion — an alternative choice"], 2,
    "The 4% rule emerged from Trinity University research on historical returns. It suggests £1m portfolio supports £40k/year indefinitely. However: market returns may differ, spending flexibility matters, and sequence risk remains. It's a guideline, not a guarantee."
  ),
  q("fpa-ch4-investment-pathways-5", "cisi-fpa", "fpa-ch4", "4.2", "Investment Pathways", "solutions", "medium",
    "What are the four investment pathways available to pension savers in decumulation?",
    ["Conservative, balanced, growth, cautious", "Four pathways don't exist — an alternative choice", "Invest, hold, sell, retire — an alternative choice", "Annuity, flexi-access drawdown, capped drawdown, small pots"], 3,
    "Investment pathways are: Conservative (to age 75 then annuity), Balanced (mix of growth/security), Growth (equity-heavy), and Enhanced income (income focus). These are default recommendations guiding those without adviser."
  ),
  q("fpa-ch5-prioritisation-5", "cisi-fpa", "fpa-ch5", "5.1", "Prioritisation", "recommendations", "hard",
    "A client has three recommendations: increase life insurance (£50/month), start pension (£200/month), pay down debt (£300/month available). How should the adviser prioritize?",
    ["Ignore debt, maximize pension contributions — an alternative choice", "All equally, allocating £100 to each — an alternative choice", "Prioritize: debt payoff (£300) if high-interest, then life insurance (£50", "Recommendations conflict, make none — an alternative choice"], 2,
    "Sequencing prioritizes financial stability foundations. Debts (especially high-interest) reduce future cash flow and increase risk. Life insurance protects dependents. Pension contributes once foundation is secure. This order makes sense for most clients."
  ),
  q("fpa-ch1-objectives-13", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "easy",
    "What is the difference between a goal and an objective in financial planning?",
    ["Goals are irrelevant to planning — an alternative choice", "They are interchangeable terms — an alternative choice", "Only objectives matter — an alternative choice", "Goal: general aspiration (retire comfortably)"], 3,
    "A client's goal to 'retire comfortably' is vague. An objective to 'retire at 65 with £40k annual inflation-adjusted income from pension and savings' is SMART. Objectives drive planning; goals require translation into objectives."
  ),
  q("fpa-ch2-underwriting-5", "cisi-fpa", "fpa-ch2", "2.2", "Underwriting", "protection", "medium",
    "What is the significance of 'insurable interest' in life insurance?",
    ["All life insurance has identical interest regardless of relationship — an alternative choice", "Insurable interest is only for business insurance — an alternative choice", "Proposer must suffer financial loss on insured person's death; prevents betting contracts and motivates", "Irrelevant concept — an alternative choice"], 2,
    "Insurable interest prevents someone from insuring a stranger and profiting from their death (moral hazard). A parent has insurable interest in a child, a spouse in their partner, but a stranger does not. This principle protects insurers."
  ),
  q("fpa-ch3-pension-sharing-5", "cisi-fpa", "fpa-ch3", "3.2", "Pension Sharing", "retirement", "medium",
    "How does pension sharing work on divorce?",
    ["All pensions are split 50-50 automatically — an alternative choice", "Pensions cannot be divided on divorce — an alternative choice", "Pension sharing only applies to DB pensions — an alternative choice", "Court orders may divide pension rights at divorce"], 3,
    "Pension sharing creates a separate pension right for the receiving spouse (e.g., 40% of accumulated value transferred). This differs from attachment (income goes to ex-spouse) or earmarking (used at retirement). The benefit is independence of each party's pension."
  ),
  q("fpa-ch4-flexibility-5", "cisi-fpa", "fpa-ch4", "4.2", "Flexibility", "solutions", "medium",
    "What retirement solution offers the most flexibility for a 65-year-old who is unsure about immediate income needs?",
    ["No flexible options exist — an alternative choice", "Annuity (most flexible) — an alternative choice", "Required to take all income at once — an alternative choice", "Flexi-access drawdown (can withdraw any amount any time, adjust as"], 3,
    "FAD allows flexibility: take £5k one month (daughter's wedding), skip next month, take £20k later for travel. Annuity locks in fixed income (no adjustment). For those uncertain of needs, FAD's flexibility is valuable."
  ),
  q("fpa-ch5-goals-alignment-5", "cisi-fpa", "fpa-ch5", "5.2", "Goals Alignment", "recommendations", "hard",
    "A client's portfolio returns 6% annually but original target was 8%. How should the adviser respond?",
    ["Assume the portfolio has failed — an alternative choice", "Assess whether the shortfall affects goal achievement; 6% may be sufficient if goals are on-track", "Performance is irrelevant if portfolio matches asset allocation — an alternative choice", "Immediately switch to higher-risk investments — an alternative choice"], 1,
    "Portfolio performance must be evaluated against goals, not arbitrary benchmarks. If target was £1m by age 65 and current trajectory reaches £950k by age 67, that's acceptable (slight delay, still sufficient). Conversely, if shortfall threatens adequacy, action is needed."
  ),
  q("fpa-ch1-income-analysis-5", "cisi-fpa", "fpa-ch1", "1.4", "Income Analysis", "planning", "medium",
    "Why should advisers distinguish between gross income and net disposable income in financial planning?",
    ["Gross and net are identical concepts — an alternative choice", "Only gross income matters — an alternative choice", "Gross masks actual spending", "Tax has no impact on planning — an alternative choice"], 2,
    "A client earning £60k gross has ~£45k net after tax. From £45k, mortgage (£15k) leaves £30k for living expenses and planning. Only £30k is available; planning based on £60k overstates capacity."
  ),
  q("fpa-ch2-frequency-review-5", "cisi-fpa", "fpa-ch2", "2.1", "Review Frequency", "protection", "medium",
    "How often should protection coverage be reviewed?",
    ["Reviews are unnecessary — an alternative choice", "Only when client initiates contact — an alternative choice", "Annually at minimum; additionally after major life changes (marriage,", "Never; protection plans are permanent — an alternative choice"], 2,
    "Annual reviews ensure cover is still adequate: child born (increase coverage), mortgage reduces (adjust decreasing term), job change affects income protection needs. Major life events trigger immediate reassessment."
  ),
  q("fpa-ch3-relief-at-source-5", "cisi-fpa", "fpa-ch3", "3.2", "Tax Relief", "retirement", "medium",
    "What is the difference between 'relief at source' and 'net pay' pension contributions?",
    ["Net pay provides greater tax relief — an alternative choice", "Relief at source: basic rate tax relief applied automatically (£80 contribution costs £60 to employee)", "No difference; tax relief mechanisms are identical — an alternative choice", "Only relief at source applies to personal pensions — an alternative choice"], 1,
    "Relief at source (standard for personal pensions): £80 cost = £64 employee contribution (basic rate 20% relief). Net pay (standard for occupational pensions): £80 cost = £64 for basic-rate, £48 for higher-rate (relief at point of contribution). Net pay is more tax-efficient for higher earners."
  ),
  q("fpa-ch4-timing-annuity-5", "cisi-fpa", "fpa-ch4", "4.2", "Annuity Purchase", "solutions", "hard",
    "Why might someone delay purchasing an annuity even if they want guaranteed income?",
    ["Annuity rates never change — a financial measure", "Annuity rates are driven by gilt yields;", "Delaying always worsens outcomes — an alternative choice", "No reason to delay — an alternative choice"], 1,
    "Annuity rate 3% on £500k = £15k/year. When rates rise to 5% = £25k/year. Rate timing matters significantly. However, delaying also means starting retirement with less certainty (FAD risk) and increasing longevity risk. Balance is needed."
  ),
  q("fpa-ch5-cost-benefit-5", "cisi-fpa", "fpa-ch5", "5.1", "Cost-Benefit", "recommendations", "medium",
    "How should advisers address recommendations where costs are significant but benefits are indirect or long-term?",
    ["Only recommend if benefits are immediate — an alternative choice", "Client preference determines cost-benefit analysis — an alternative choice", "Avoid recommending if costs aren't immediately visible — an alternative choice", "Quantify both costs and benefits; present expected"], 3,
    "Critical illness insurance costs £50/month (£600/year) but protects £500k pension pot from damage (employee cannot work 10 years). Cost-benefit is favorable, but requires adviser explanation since benefits are preventative, not immediate."
  ),
  q("fpa-ch1-ethics-5", "cisi-fpa", "fpa-ch1", "1.1", "Ethics", "planning", "medium",
    "Why is informed consent important in the fact-finding process?",
    ["Clients' consent is not required for fact-finding — an alternative choice", "Only required for financial transactions — an alternative choice", "Verbal acknowledgment is sufficient — an alternative choice", "Informed consent ensures clients understand what"], 3,
    "Advisers collect sensitive data: income, debts, health, family circumstances. Clients must understand this data is used for planning, shared with providers if needed, and stored securely. Written consent documents this understanding."
  ),
  q("fpa-ch2-affordability-5", "cisi-fpa", "fpa-ch2", "2.2", "Affordability", "protection", "hard",
    "A client needs £500k life insurance but can only afford £30/month premiums. What options exist?",
    ["Take on higher-premium policy despite affordability concerns — an alternative choice", "Prioritize: £250k term insurance (£20/month), defer £250k; or reduce sum (£300k at affordable premium)", "Forgo insurance entirely — an alternative choice", "None; unaffordable protection is impossible — an alternative choice"], 1,
    "Affordability drives suitability. Rather than recommending £500k at £50/month (unaffordable), recommend £250k at £20/month (affordable). This is better than nothing. Client can increase coverage later when income rises."
  ),
  q("fpa-ch3-contribution-limits-5", "cisi-fpa", "fpa-ch3", "3.2", "Contribution Limits", "retirement", "medium",
    "What is the Money Purchase Annual Allowance (MPAA) and how does it differ from the standard annual allowance?",
    ["MPAA and annual allowance are identical — an alternative choice", "MPAA is only for DB pensions — an alternative choice", "MPAA provides greater contribution allowance — an alternative choice", "MPAA applies to those accessing flexible benefits: caps future contributions at £10,000/year"], 3,
    "Someone accessing FAD at age 58 triggers MPAA: future pension contributions limited to £10k/year (vs. £60k normally). This prevents tax-arbitrage (accessing fund flexibly while continuing large contributions). It significantly constrains savings for those in drawdown."
  ),
  q("fpa-ch4-lump-sum-5", "cisi-fpa", "fpa-ch4", "4.2", "Lump Sum", "solutions", "medium",
    "Should a retiree take the pension commencement lump sum (PCLS) all at once or phase it?",
    ["Never take PCLS, leave in pension — an alternative choice", "Always take all PCLS immediately — an alternative choice", "Tax treatment is identical regardless of timing — an alternative choice", "Depends: immediate need for capital suggests full withdrawal"], 3,
    "PCLS is 25% of crystallized pot, tax-free. Taking £100k PCLS (25% of £400k pot) is tax-free. But if this causes total income to exceed higher-rate threshold (£50,270), it may trigger 20% tax on other income. Phasing PCLS over years can reduce tax."
  ),
  q("fpa-ch5-documentation-5", "cisi-fpa", "fpa-ch5", "5.1", "Documentation", "recommendations", "hard",
    "What should a suitability report contain at minimum?",
    ["Only the final recommendation — an alternative choice", "Client name and account number only — an alternative choice", "Verbal explanation is equivalent — an alternative choice", "Client circumstances, objectives, risk"], 3,
    "Suitability reports create accountability. They document advisers' analysis and recommendations, protecting both parties. FCA expects detailed reports especially for complex products. Reports should be clear enough that a third party could understand the advice rationale."
  ),
  q("fpa-ch1-family-planning-5", "cisi-fpa", "fpa-ch1", "1.3", "Family Planning", "planning", "medium",
    "How should financial planning change when a couple plans to have children?",
    ["Children have no financial planning impact — an alternative choice", "Objectives expand: education savings, protection (life insurance for income", "Planning becomes impossible with children — an alternative choice", "No changes required — an alternative choice"], 1,
    "Planning with children adds objectives: £100k+ for education, life insurance (income replacement until children are independent), may reduce working hours (lower income). Advisers must anticipate these changes proactively."
  ),
  q("fpa-ch2-occupational-schemes-5", "cisi-fpa", "fpa-ch2", "2.2", "Occupational Benefits", "protection", "medium",
    "How should individual life insurance be coordinated with employer group life benefits?",
    ["Employer group is always sufficient — an alternative choice", "Dual coverage is wasteful — an alternative choice", "Employer coverage makes individual policies unnecessary — an alternative choice", "Identify employer coverage scope and duration; individual policies fill gaps (coverage beyond"], 3,
    "Employer group life (e.g., 4x salary = £200k) may be insufficient for family needs (£500k required). Individual policy covers the £300k gap. On job change, group coverage ends; individual policy continues."
  ),
  q("fpa-ch3-deferral-implications-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension Deferral", "retirement", "medium",
    "A 68-year-old deferred state pension since age 67 (1 year deferral). What increase can they expect?",
    ["No increase for deferral less than 3 years — an alternative choice", "Increase of ~5.8% per year (approximately 5.8% for 1 year of deferral)", "Only women receive deferral increases — an alternative choice", "Increase is time-limited — an alternative choice"], 1,
    "One year deferral = ~5.8% increase. Someone with pension of £190/week at 67 receives £201/week at 68 (increase of £11/week × 52 weeks = £572/year additional). Over 20-year retirement, this adds significant value."
  ),
  q("fpa-ch4-capped-drawdown-legacy-5", "cisi-fpa", "fpa-ch4", "4.2", "Legacy Products", "solutions", "hard",
    "Why are capped drawdown pensions (legacy pre-April 2015) now less attractive despite being established?",
    ["Capped drawdown has no disadvantages — an alternative choice", "Capped drawdown: income frozen at", "They remain optimal for all retirees — an alternative choice", "All retirees prefer capped drawdown — an alternative choice"], 1,
    "Capped drawdown set income ceiling at purchase (e.g., £40k/year max). If client needs £50k, they cannot exceed limit. FAD has no such limit (though sustainable withdrawal concerns remain). For those in capped drawdown, FAD options should be reviewed at anniversary."
  ),
  q("fpa-ch5-suitability-reassess-5", "cisi-fpa", "fpa-ch5", "5.2", "Reassessment", "recommendations", "medium",
    "When major market decline occurs (e.g., 30%), should suitability assessments be automatically re-run?",
    ["Not automatically but reassess if", "Market performance never affects suitability — an alternative choice", "Never; suitability remains unchanged regardless of market — an alternative choice", "Always immediate reassessment required — an alternative choice"], 0,
    "Suitability is based on client circumstances and risk profile, not current market levels. A 30% market decline doesn't make equities unsuitable for a 30-year-old (long horizon permits recovery). However, it's opportunity to reassess client's actual comfort with volatility."
  ),
  q("fpa-ch1-business-planning-5", "cisi-fpa", "fpa-ch1", "1.6", "Business Planning", "planning", "medium",
    "How does financial planning differ for business owners versus employees?",
    ["Business owners face unique issues: business succession,", "Business owners cannot obtain financial planning — an alternative choice", "Only employees benefit from planning — an alternative choice", "No differences; all clients follow identical planning process — an alternative choice"], 0,
    "Business owners must plan business succession (who takes over?), protect business value through insurance, manage draw vs. salary (pension contribution implications), and plan exit strategy. Employees don't face these complexities."
  ),
  q("fpa-ch2-mortalitydata-5", "cisi-fpa", "fpa-ch2", "2.2", "Mortality Data", "protection", "hard",
    "Why do life insurance companies use mortality tables rather than treating all applicants identically?",
    ["All applicants have identical mortality risk — an alternative choice", "Mortality risk varies by age, health, occupation;", "Mortality tables are irrelevant to insurance — an alternative choice", "Mortality data only affects annuities — an alternative choice"], 1,
    "A 30-year-old smoker has higher mortality risk than a 30-year-old non-smoker. Mortality tables reflecting this protect insurers from adverse selection. Smokers pay higher premiums (reflecting actual risk) while non-smokers pay standard rates."
  ),
  q("fpa-ch3-integration-pensions-5", "cisi-fpa", "fpa-ch3", "3.2", "Integration", "retirement", "medium",
    "How should workplace and personal pensions be integrated in retirement planning?",
    ["Treat separately; combine in final plan only — a financial measure", "Only DB pensions matter — an alternative choice", "Integrate: workplace DB may provide fixed", "Personal pensions should be ignored if employer scheme exists — an alternative choice"], 2,
    "Complete retirement picture: State Pension £190/week + DB £300/week + DC drawdown £100/week + savings = total income. Adviser must model all sources together to assess sufficiency and identify any gaps."
  ),
  q("fpa-ch4-sequencing-withdrawal-5", "cisi-fpa", "fpa-ch4", "4.2", "Sequencing", "solutions", "medium",
    "In what sequence should different retirement income sources be accessed?",
    ["Sequence is irrelevant to tax outcomes — an alternative choice", "No specific sequence matters — an alternative choice", "Often: ISA/savings first (tax-free), then personal pension", "Pension first (largest amounts) — an alternative choice"], 2,
    "Optimal sequencing minimizes tax. ISA withdrawals are tax-free (no income tax, no TICS effects on benefits). Personal pension withdrawals fill personal allowance (then basic rate band). This order preserves state pension/benefit eligibility longest."
  ),
  q("fpa-ch5-implementation-5", "cisi-fpa", "fpa-ch5", "5.2", "Implementation", "recommendations", "hard",
    "What is the adviser's role in implementation after recommendations are agreed?",
    ["Client has no assistance; adviser role ends at recommendation — an alternative choice", "Implementation always occurs immediately — an alternative choice", "Recommendations are final; client implements independently — an alternative choice", "Adviser coordinates implementation"], 3,
    "Implementation requires active oversight. Adviser arranges provider applications, confirms receipt, chases if stalled, explains next steps. Clients often delay (procrastination) or forget. Active project management increases plan execution success."
  ),
  q("fpa-ch1-longevity-planning-5", "cisi-fpa", "fpa-ch1", "1.2", "Longevity Planning", "planning", "medium",
    "Why should advisers discuss longevity in fact-finding for retirement planning?",
    ["Discussing death is inappropriate — an alternative choice", "Everyone lives to identical age — an alternative choice", "Longevity is irrelevant to planning — an alternative choice", "Retirement fund size depends on"], 3,
    "A client with family history of longevity (parents alive at 95+) should assume longer retirement (to age 95+). This dramatically increases retirement funding needed. Conversely, health issues might suggest more conservative assumptions."
  ),
  q("fpa-ch2-employment-changes-5", "cisi-fpa", "fpa-ch2", "2.4", "Employment Changes", "protection", "medium",
    "A client changing from employment to self-employment loses access to employer income protection. What solutions exist?",
    ["No alternatives exist for self-employed — an alternative choice", "Self-employed have no protection options — an alternative choice", "State benefits replace employer coverage — an alternative choice", "Individual income protection policies (own-occupation, higher premiums due"], 3,
    "Self-employed can obtain individual income protection but premiums are 20-40% higher (higher claims, variable income). Building 6-12 month emergency reserves is also essential (vs. 3-6 months for employed). Combination approaches are best."
  ),
  q("fpa-ch3-pension-flexibility-5", "cisi-fpa", "fpa-ch3", "3.3", "Flexibility", "retirement", "hard",
    "Why might a younger saver with 25+ years to retirement benefit from understanding pension flexibility now?",
    ["Early understanding of options (FAD vs. annuity vs", "Flexibility is irrelevant for young savers — an alternative choice", "Flexibility decisions are made at retirement — an alternative choice", "Young savers should only consider accumulation — an alternative choice"], 0,
    "A 35-year-old planning to live modestly (low withdrawal rate, FAD) can accept lower returns. Someone planning annuity at 70 wants maximum growth. Strategy affects investment choices now, making early flexibility planning valuable."
  ),
  q("fpa-ch4-risk-management-5", "cisi-fpa", "fpa-ch4", "4.2", "Risk Management", "solutions", "medium",
    "What risks should be considered in retirement income planning?",
    ["Risk is irrelevant in retirement — an alternative choice", "No risks exist once retired — an alternative choice", "Investment risk only — an alternative choice", "Multiple: investment risk (market"], 3,
    "Retirement faces multiple simultaneous risks. A retiree in 1974-1979 faced stagflation (inflation + poor returns): disastrous combination. Modern planning must hedge multiple risks through diversification and flexibility."
  ),
  q("fpa-ch5-ongoing-cost-5", "cisi-fpa", "fpa-ch5", "5.2", "Costs", "recommendations", "medium",
    "Why should advisers discuss ongoing costs (adviser fees, fund charges) before recommendations are made?",
    ["High costs reduce long-term returns significantly;", "Adviser fees are fixed regardless of strategy — a financial measure", "Costs are irrelevant and shouldn't be discussed — an alternative choice", "Costs are always identical across providers — an alternative choice"], 0,
    "Cost example: £100k invested 30 years @ 6% net = £574k. At 0.5% costs (5.5% net return) = £517k. Cost difference = £57k (10% of final value). This justification explains why adviser recommendations emphasize cost-effective products."
  ),
  q("fpa-ch1-technology-5", "cisi-fpa", "fpa-ch1", "1.1", "Technology", "planning", "medium",
    "How is technology changing the financial planning process?",
    ["Tools enable better analysis (scenario modelling, retirement projections), improved", "Technology is irrelevant to planning — an alternative choice", "Technology only applies to investment management — an alternative choice", "Technology will replace human advisers — an alternative choice"], 0,
    "Technology enhances planning: modelling software shows 1,000 retirement scenarios instantly. Automated rebalancing removes emotion. Online dashboards keep clients engaged. But complex life situations, goal prioritization, and behavioral coaching still require human advisers."
  ),
  q("fpa-ch2-coverage-gaps-5", "cisi-fpa", "fpa-ch2", "2.1", "Coverage Gaps", "protection", "hard",
    "A client with employer group life (4x salary = £300k) and personal life policy (£200k) has total cover of £500k. Is this duplication wasteful?",
    ["No: group covers period of employment; personal policy continues after job change", "Should cancel personal policy — an alternative choice", "Yes, absolute duplication; should carry one policy — an alternative choice", "Coverage should be higher than £500k — an alternative choice"], 0,
    "Strategic layering: employer group covers immediate needs while employed (mortgage, dependents). Personal policy ensures protection persists if job is lost or changed. Combined = comprehensive protection with no gap periods."
  ),
  q("fpa-ch3-state-benefit-interaction-5", "cisi-fpa", "fpa-ch3", "3.2", "State Benefits", "retirement", "hard",
    "How do pension drawdowns affect means-tested state benefits in retirement?",
    ["No interaction; pensions don't affect means-testing — an alternative choice", "Pensions eliminate all state benefit eligibility — an alternative choice", "State benefits are only for those without pensions — an alternative choice", "Drawdown withdrawals are counted as income for Pension"], 3,
    "Someone with £300k pension in FAD and modest state pension might qualify for Pension Credit (top-up to £218/week minimum). But if they withdraw £300/week from FAD, income exceeds limit and loses benefit. Strategic low withdrawals preserve benefit; high withdrawals lose it."
  ),
  q("fpa-ch4-inflation-protection-5", "cisi-fpa", "fpa-ch4", "4.2", "Inflation", "solutions", "medium",
    "How does inflation protection differ between annuity types?",
    ["FAD automatically adjusts for inflation — an economic condition", "Level annuity: no inflation adjustment (purchasing power erodes)", "All annuities adjust equally for inflation — an economic condition", "Annuities are never affected by inflation — an economic condition"], 1,
    "Level annuity paying £10k/year becomes worth £7k in 10 years (3% inflation). Escalating annuity paying £10k year 1, £10.3k year 2, £10.6k year 3 maintains purchasing power. Cost difference is significant (escalating costs 20-30% more)."
  ),
  q("fpa-ch5-client-objectives-alignment-5", "cisi-fpa", "fpa-ch5", "5.2", "Objectives Alignment", "recommendations", "medium",
    "How should advisers handle situations where client preferences conflict with objective suitability analysis?",
    ["Discuss conflicts respectfully; explain", "Always defer to client preference — an alternative choice", "Make recommendations regardless of client input — an alternative choice", "Refuse to work with the client — an alternative choice"], 0,
    "Conflict example: client insists on 100% emerging markets (recency bias). Adviser should: explain suitability analysis, discuss risk/volatility, propose balanced alternative, accept if client insists despite advice, and document thoroughly."
  ),
  q("fpa-ch1-planning-process-11", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "easy",
    "What is the primary role of a financial adviser in the planning process?",
    ["To sell investment products — an alternative choice", "To manage client investments only — an alternative choice", "To gather facts, identify goals,", "To guarantee investment returns — a financial measure"], 2,
    "Financial advisers act as guides, analyzing client facts and objectives to develop comprehensive, suitable plans. They educate clients and help navigate complex financial decisions."
  ),
  q("fpa-ch1-planning-process-12", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "medium",
    "A 35-year-old client with £50k annual income wants to retire at 60 with £40k annual income. What planning step is most critical?",
    ["Immediately invest in growth funds — an alternative choice", "Ignore inflation in projections — an economic condition", "Model retirement projections, identify", "Reduce expenses to impossible levels — an alternative choice"], 2,
    "With 25 years to retirement, planners must assess if current savings rate bridges the gap. This involves cash flow analysis, investment growth assumptions, and inflation adjustments."
  ),
  q("fpa-ch1-planning-process-13", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "hard",
    "Why is ongoing monitoring and review central to financial planning?",
    ["Monitoring has no impact on outcomes — an alternative choice", "Life circumstances, markets, and", "Reviews are only needed annually — an alternative choice", "Advisers need to sell more products — an alternative choice"], 1,
    "Markets shift, client circumstances evolve (marriage, children, job changes), and tax laws change. Annual or bi-annual reviews allow advisers to adjust plans, rebalance portfolios, and ensure ongoing suitability."
  ),
  q("fpa-ch1-risk-profile-11", "cisi-fpa", "fpa-ch1", "1.4", "Risk Profiling", "planning", "easy",
    "Which factor is most important when assessing a client's capacity for loss?",
    ["Their time horizon, income, expenses, and emergency savings", "Their age alone — an alternative choice", "Their neighbor's investment returns", "Their investment knowledge — an alternative choice"], 0,
    "Capacity for loss (objective) is determined by: time to retirement, essential expenses, emergency fund, dependents, and debt obligations. It's independent of willingness to take risk."
  ),
  q("fpa-ch1-risk-profile-12", "cisi-fpa", "fpa-ch1", "1.4", "Risk Profiling", "planning", "medium",
    "A client aged 55 with £500k savings, £2k monthly pension in 10 years, and £1,200/month essential expenses. What is their capacity for loss likely to be?",
    ["Zero - older clients cannot take any risk — an alternative choice", "Very high - they have substantial savings — an alternative choice", "Unlimited - they can take any risk — an alternative choice", "Moderate to low - pension income will soon"], 3,
    "With 10 years to retirement and future reliance on fixed pension income, this client cannot easily replace investment losses. Their capacity is moderate-to-low despite current savings."
  ),
  q("fpa-ch1-risk-profile-13", "cisi-fpa", "fpa-ch1", "1.4", "Risk Profiling", "planning", "hard",
    "A high-income executive aged 40 states they're comfortable with 30% annual portfolio swings. Why must advisers verify this further?",
    ["All high-earners can handle high risk", "Stated preference is always accurate", "Willingness (emotional comfort) must be validated against capacity (financial ability); recency bias from bull markets can create false confidence; advisers test during downturns", "Risk tolerance cannot change"], 0,
    "A client expressing high risk tolerance in bull markets may panic-sell during downturns. Advisers must assess whether the client can genuinely afford losses and has experienced volatility before."
  ),
  q("fpa-ch1-fact-find-11", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "easy",
    "During fact-finding, a client mentions they 'want to be financially secure.' Is this a suitable objective?",
    ["No - it's vague and subjective; advisers must quantify it", "Yes if the client is happy — an alternative choice", "Yes, very clear — an alternative choice", "No, security is impossible — an alternative choice"], 0,
    "SMART objectives require specific, measurable goals. 'Secure' is subjective. Advisers must ask: How much income? By when? From what sources? This creates a measurable plan."
  ),
  q("fpa-ch1-fact-find-12", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "medium",
    "A client has £15k credit card debt at 20% interest but £50k in a savings account earning 2%. What should the adviser prioritize discussing?",
    ["Paying off high-interest debt first (guaranteed 20% return by", "Investing more aggressively — an alternative choice", "The savings strategy for retirement — a financial measure", "Ignoring the debt — an alternative choice"], 0,
    "High-interest unsecured debt is a priority. Paying £15k at 20% is mathematically superior to earning 2% on savings. Debt elimination is often the first planning step."
  ),
  q("fpa-ch1-fact-find-13", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "hard",
    "A client reveals they have significant tax issues from unreported income. What is the adviser's responsibility?",
    ["Ignore it and provide planning advice anyway — an alternative choice", "Report the client to authorities immediately — an alternative choice", "Continue planning without addressing it — an alternative choice", "Advise the client to seek tax advice and potentially"], 3,
    "Advisers must maintain professional integrity. Knowingly advising a client with unreported tax issues creates compliance and regulatory risks. Advisers should encourage proper disclosure."
  ),
  q("fpa-ch1-objectives-11", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "easy",
    "Which of the following is a well-defined financial objective?",
    ["Invest in good funds — an alternative choice", "Save more money — an alternative choice", "Make money — an alternative choice", "Accumulate £200k in ISAs within 10 years for a"], 3,
    "A clear objective has specific amount (£200k), timeline (10 years), and purpose (property). This allows advisers to build a measurable, trackable plan."
  ),
  q("fpa-ch1-objectives-12", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "medium",
    "A couple has conflicting goals: one wants to retire at 55, the other at 65. How should the adviser proceed?",
    ["Insist they choose the same age — an alternative choice", "Plan for age 65 only — an alternative choice", "Facilitate discussion to understand priorities, timescales, and income needs", "Plan for age 55 only — an alternative choice"], 2,
    "Couples often have different goals. Advisers help them discuss priorities, understand trade-offs, and develop solutions that work for both. This might include phased retirement."
  ),
  q("fpa-ch1-objectives-13", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "hard",
    "Why do objectives need to be reviewed and updated regularly?",
    ["Objectives are fixed at inception — an alternative choice", "Only rich clients need to review — an alternative choice", "Life events (promotion, inheritance, health), market conditions,", "They never change — an alternative choice"], 2,
    "A client who gets promoted, inherits money, or faces health issues will have new priorities. Annual reviews ensure objectives remain aligned with current circumstances."
  ),
  q("fpa-ch1-analysis-11", "cisi-fpa", "fpa-ch1", "1.5", "Financial Analysis", "planning", "easy",
    "Which piece of information is essential to understand a client's financial position?",
    ["Their favorite sports team — an alternative choice", "Their social media activity — an alternative choice", "Their age alone — an alternative choice", "Current income, expenses, assets,"], 3,
    "Financial position requires complete data: income sources, fixed/variable expenses, assets (savings, investments, property), debts, and emergency reserves."
  ),
  q("fpa-ch1-analysis-12", "cisi-fpa", "fpa-ch1", "1.5", "Financial Analysis", "planning", "medium",
    "A client's income is £60k, essential expenses £2,500/month, discretionary spending £800/month. What is their annual cash surplus for planning?",
    ["£39,600 (60k - (2,500+800) x 12)", "£30,000 — an alternative choice", "£60,000 — an alternative choice", "£0 — an alternative choice"], 0,
    "Annual income £60k; monthly expenses = (£2,500 + £800) = £3,300 = £39,600/year. Surplus = £60k - £39.6k = £20.4k available for savings/investments."
  ),
  q("fpa-ch1-analysis-13", "cisi-fpa", "fpa-ch1", "1.5", "Financial Analysis", "planning", "hard",
    "How do time value of money calculations help financial planning?",
    ["They show how current savings grow over", "All money is worth the same over time — an alternative choice", "They don't matter — an alternative choice", "Only for accountants — an alternative choice"], 0,
    "TVM shows that £1 today invested at 5% becomes £1.63 in 10 years. This helps advisers calculate: Will £20k/year savings reach a £500k retirement goal in 20 years?"
  ),
  q("fpa-ch1-recommendation-11", "cisi-fpa", "fpa-ch1", "1.6", "Recommendations", "planning", "easy",
    "What should a recommendation always address?",
    ["Only investment funds — an alternative choice", "Only the adviser's preferences — an alternative choice", "How the recommendation meets client", "Only tax efficiency — an alternative choice"], 2,
    "Recommendations must clearly link to client goals, explain suitability, disclose all costs, and outline the timeline for implementation and expected outcomes."
  ),
  q("fpa-ch1-recommendation-12", "cisi-fpa", "fpa-ch1", "1.6", "Recommendations", "planning", "medium",
    "A recommendation suggests moving a client into a higher-risk portfolio. What must be clearly documented?",
    ["Only the fund names — an alternative choice", "Nothing - if it's higher risk, move forward — an alternative choice", "Only positive historical returns — a financial measure", "Why the higher risk is suitable (e.g., longer time horizon), how it aligns with"], 3,
    "Higher risk recommendations need robust justification. Documentation should explain: client capacity, willingness, time horizon, objective alignment, and that client understands volatility."
  ),
  q("fpa-ch1-recommendation-13", "cisi-fpa", "fpa-ch1", "1.6", "Recommendations", "planning", "hard",
    "Why must advisers consider the total cost impact (fees + fund charges) in recommendations?",
    ["High total costs (>1.5% annually) can erode 20-30% of long-term", "Clients don't care about costs — an alternative choice", "Costs are irrelevant — an alternative choice", "Adviser fees are hidden — an alternative choice"], 0,
    "Example: £100k invested 30 years at 6% gross = £574k. At 0.5% costs = £517k. At 1.5% costs = £434k. Cost difference = £83k (14% of final value). Cost transparency is crucial."
  ),
  q("fpa-ch1-tax-11", "cisi-fpa", "fpa-ch1", "1.7", "Tax Efficiency", "planning", "easy",
    "What is the primary tax advantage of pension contributions?",
    ["Contributions receive income tax relief (20-45% depending", "Only the wealthy benefit — an alternative choice", "Pensions are heavily taxed — an alternative choice", "No advantage — an alternative choice"], 0,
    "A £10k pension contribution costs a basic rate taxpayer only £8k after tax relief. The fund then grows tax-free for decades, creating substantial long-term benefit."
  ),
  q("fpa-ch1-tax-12", "cisi-fpa", "fpa-ch1", "1.7", "Tax Efficiency", "planning", "medium",
    "A client has £50k in savings earning interest and £20k in a general account with capital gains. How can tax efficiency be improved?",
    ["Move everything to cash — an alternative choice", "Maximize ISA allowance (£20k/year) and use Personal", "No changes needed — an alternative choice", "Ignore tax entirely — an alternative choice"], 1,
    "Tax-efficient planning uses ISAs (tax-free), PSA (savings interest), and CGT exemptions. Couples can split assets to use both allowances, potentially saving thousands annually."
  ),
  q("fpa-ch1-tax-13", "cisi-fpa", "fpa-ch1", "1.7", "Tax Efficiency", "planning", "hard",
    "Why might a couple benefit from income shifting where one partner is significantly higher-earning?",
    ["If one partner earns £80k (40% tax) and the other earns £20k", "All income shifting is illegal — an alternative choice", "They shouldn't do this — an alternative choice", "Tax rates don't differ by income — a financial measure"], 0,
    "Marriage allowance, spousal transfers, and income splitting strategies can minimize household tax. Example: spouse earning £20k to £30k saves 20% tax on £10k (£2k savings)."
  ),
  q("fpa-ch2-protection-needs-11", "cisi-fpa", "fpa-ch2", "2.1", "Protection Needs", "protection", "easy",
    "What is the first step in protection planning?",
    ["Recommend insurance products immediately — an alternative choice", "Sell the most expensive policy — an alternative choice", "Assess family needs: dependents, income replacement, mortgage, essential", "Skip fact-finding — an alternative choice"], 2,
    "Protection planning begins with understanding: How many dependents? What income needs to be replaced? What debts exist? This drives coverage amounts."
  ),
  q("fpa-ch2-protection-needs-12", "cisi-fpa", "fpa-ch2", "2.1", "Protection Needs", "protection", "medium",
    "A 40-year-old earner with £50k income, 2 children, and £200k mortgage. Estimate their life cover need.",
    ["£50k — an alternative choice", "£300k-£400k (mortgage ~£200k + 10 years", "£0 — an alternative choice", "£1 million — an alternative choice"], 1,
    "Coverage = Mortgage + Income gap + Final expenses. In this case: £200k + (£50k x 5-7 yrs saved) + £10k costs = roughly £300-350k as a minimum."
  ),
  q("fpa-ch2-protection-needs-13", "cisi-fpa", "fpa-ch2", "2.1", "Protection Needs", "protection", "hard",
    "Why is life cover advice critical even for those without obvious dependents?",
    ["Life cover is only for families — an alternative choice", "Even single people may have aging", "It's not critical — an alternative choice", "Single people need no insurance — an alternative choice"], 1,
    "A single person with a £300k mortgage or helping aging parents might need £200-300k cover to ensure these obligations are met. Protection isn't only for those with children."
  ),
  q("fpa-ch2-life-assurance-11", "cisi-fpa", "fpa-ch2", "2.3", "Life Assurance Types", "protection", "easy",
    "What is term life assurance?",
    ["Insurance with no benefits — an alternative choice", "Coverage that never ends — an alternative choice", "Coverage for a fixed term (e.g., 20 years) that pays if death occurs during that period", "Insurance that lasts your whole life — an alternative choice"], 2,
    "Term insurance: cheapest, covers specific period, no surrender value. Good for mortgages and income replacement. Expires at end of term."
  ),
  q("fpa-ch2-life-assurance-12", "cisi-fpa", "fpa-ch2", "2.3", "Life Assurance Types", "protection", "medium",
    "When comparing term and whole-of-life assurance, what is the key difference?",
    ["Whole-of-life is always cheaper", "Term lasts longer", "No difference in cost", "Term is cheaper and covers a fixed period; whole-of-life is more expensive but covers entire lifetime and builds cash value"], 1,
    "Term: £200-300k for 20 years = ~£20/month. Whole-of-life: same cover = ~£150+/month but guaranteed payout whenever death occurs and cash value grows."
  ),
  q("fpa-ch2-life-assurance-13", "cisi-fpa", "fpa-ch2", "2.3", "Life Assurance Types", "protection", "hard",
    "Why might someone choose universal life over whole-of-life assurance?",
    ["UL is always cheaper — an alternative choice", "WOL is always superior — an alternative choice", "UL offers flexibility: adjustable", "They shouldn't — an alternative choice"], 2,
    "UL advantages: flexible premiums, adjustable benefit, lower initial costs. Drawbacks: premiums can increase if fund underperforms. Choice depends on client flexibility needs."
  ),
  q("fpa-ch2-income-protection-11", "cisi-fpa", "fpa-ch2", "2.5", "Income Protection", "protection", "easy",
    "What does income protection insurance do?",
    ["Covers home maintenance — an alternative choice", "Replaces income if unable to work due to", "Covers life insurance needs — an alternative choice", "Protects investments only — an alternative choice"], 1,
    "Income protection bridges the gap between sick pay and full salary if unable to work. Example: £2,000/month salary, policy pays £1,200/month if disabled."
  ),
  q("fpa-ch2-income-protection-12", "cisi-fpa", "fpa-ch2", "2.5", "Income Protection", "protection", "medium",
    "An employee with 6 months' sick pay from employer. Why might they still need income protection insurance?",
    ["Employer benefits last forever — an alternative choice", "IP is only for self-employed — an alternative choice", "They don't need it — an alternative choice", "After 6 months of sick pay"], 3,
    "Sick pay eventually ends. For disability lasting 12 months+, having IP covering 60% salary prevents forced asset sales or debt accumulation."
  ),
  q("fpa-ch2-income-protection-13", "cisi-fpa", "fpa-ch2", "2.5", "Income Protection", "protection", "hard",
    "How does deferred period affect income protection premiums?",
    ["Longer deferral increases premiums — an alternative choice", "Deferral doesn't affect cost — an alternative choice", "Longer deferral (e.g., 26 weeks vs. 13 weeks) reduces premiums since", "Deferred period has no impact — an alternative choice"], 2,
    "13-week deferral = higher premium but faster payout. 26-week deferral = lower premium but client must have 6-month reserves. Choice depends on financial resilience."
  ),
  q("fpa-ch2-critical-illness-11", "cisi-fpa", "fpa-ch2", "2.6", "Critical Illness", "protection", "easy",
    "What is critical illness cover?",
    ["Not important — an alternative choice", "Income protection only — an alternative choice", "Lump sum payment if diagnosed with", "Life insurance — an alternative choice"], 2,
    "CI cover pays lump sum on diagnosis of covered illness. Useful to pay off mortgage or fund care during recovery. Distinct from life insurance."
  ),
  q("fpa-ch2-critical-illness-12", "cisi-fpa", "fpa-ch2", "2.6", "Critical Illness", "protection", "medium",
    "A client with a £250k mortgage considers combining term life and critical illness cover. What is the advantage?",
    ["No advantage — an alternative choice", "Only one is needed — an alternative choice", "If critical illness occurs before death,", "They conflict with each other — an alternative choice"], 2,
    "Combined cover: If diagnosed with cancer, CI pays £250k to clear mortgage and fund recovery. If dies, life cover pays dependents. Cost-effective dual protection."
  ),
  q("fpa-ch2-critical-illness-13", "cisi-fpa", "fpa-ch2", "2.6", "Critical Illness", "protection", "hard",
    "Why are critical illness exclusions important to understand?",
    ["Policies exclude pre-existing conditions", "They don't matter — an alternative choice", "Exclusions are hidden — an alternative choice", "All illnesses are covered — an alternative choice"], 0,
    "CI policy may exclude: pre-existing cancer, genetic conditions, lifestyle-related illnesses. If client's main health risk isn't covered, CI has little value."
  ),
  q("fpa-ch2-mortgage-protection-11", "cisi-fpa", "fpa-ch2", "2.4", "Mortgage Protection", "protection", "easy",
    "What is mortgage protection insurance?",
    ["Protects savings — an alternative choice", "Decreasing term life assurance linked to mortgage", "Protects the lender — an alternative choice", "Not necessary — an alternative choice"], 1,
    "Mortgage protection: benefit = outstanding mortgage balance at any time. As mortgage reduces, so does benefit. Death triggers lump sum to clear debt."
  ),
  q("fpa-ch2-mortgage-protection-12", "cisi-fpa", "fpa-ch2", "2.4", "Mortgage Protection", "protection", "medium",
    "Compare level term life vs. mortgage protection for a £200k mortgage over 25 years.",
    ["Neither is adequate — an alternative choice", "Level term pays £200k regardless of mortgage balance (more flexible)", "Mortgage protection is always better — an alternative choice", "Same thing — an alternative choice"], 1,
    "Level term: £200k fixed for 25 years, can be used for income replacement or other debts. Mortgage protection: benefit decreases with loan, specifically designed for mortgage payoff."
  ),
  q("fpa-ch2-mortgage-protection-13", "cisi-fpa", "fpa-ch2", "2.4", "Mortgage Protection", "protection", "hard",
    "Why might level term be preferable to mortgage protection?",
    ["They're identical — an alternative choice", "It's not — an alternative choice", "Mortgage protection is always superior — an alternative choice", "Level term doesn't change if circumstances change (additional debt, downsizing)"], 3,
    "Scenario: Client takes £50k personal loan in year 5 but has mortgage protection. Benefit has decreased below £150k but £50k debt remains uncovered. Level term would maintain flexibility."
  ),
  q("fpa-ch2-business-protection-11", "cisi-fpa", "fpa-ch2", "2.2", "Business Protection", "protection", "easy",
    "What is key person insurance?",
    ["Not applicable to small firms — an alternative choice", "Insurance for everyone — an alternative choice", "Insurance for keys to the office — an alternative choice", "Life insurance on a critical"], 3,
    "Example: Sales manager generates £500k revenue. Death creates loss. £300k policy covers 12 months' lost profit while finding replacement."
  ),
  q("fpa-ch2-business-protection-12", "cisi-fpa", "fpa-ch2", "2.2", "Business Protection", "protection", "medium",
    "A partnership has two equal partners. Partner A earns £80k, Partner B earns £120k. What is the key person cover need?",
    ["£500k each — an alternative choice", "£0 — an alternative choice", "Partner B: ~£200-240k (2-3 years' lost profit)", "Not applicable — an alternative choice"], 2,
    "Higher-earning/more critical partner needs higher cover. Amount reflects: replacement cost, profit loss, training time. Regular review ensures cover matches current value."
  ),
  q("fpa-ch2-business-protection-13", "cisi-fpa", "fpa-ch2", "2.2", "Business Protection", "protection", "hard",
    "Why is shareholder protection insurance different from key person insurance?",
    ["Key person covers business loss;", "Shareholder protection is inferior — a party with defined rights", "Only one is needed — an alternative choice", "It's the same — an alternative choice"], 0,
    "Shareholder protection: If Partner A dies, their £500k business share passes to heirs. Partner B can't afford to buy heirs out. Insurance funds the buyout."
  ),
  q("fpa-ch2-pmi-11", "cisi-fpa", "fpa-ch2", "2.7", "Private Medical Insurance", "protection", "easy",
    "What does private medical insurance typically cover?",
    ["All medical costs forever — an alternative choice", "All dental work — an alternative choice", "Private hospital and specialist", "Completely unlimited — an alternative choice"], 2,
    "PMI covers: private hospital stays, specialists, diagnostics. Exclusions: pre-existing conditions, chronic disease management, routine dental/optical."
  ),
  q("fpa-ch2-pmi-12", "cisi-fpa", "fpa-ch2", "2.7", "Private Medical Insurance", "protection", "medium",
    "An employer offers group PMI. Why is this often better value than individual PMI?",
    ["Individual is always cheaper — an alternative choice", "Group is always more expensive — an alternative choice", "Group premiums are lower (employer contributes, better rates", "No difference — an alternative choice"], 2,
    "Group PMI: employer pays portion, lower administrative costs, easier enrollment. Individual PMI: full cost, stricter underwriting, higher premiums for same cover."
  ),
  q("fpa-ch2-pmi-13", "cisi-fpa", "fpa-ch2", "2.7", "Private Medical Insurance", "protection", "hard",
    "What is the relationship between NHS waiting lists and PMI demand?",
    ["NHS waiting lists don't affect PMI — an alternative choice", "PMI demand is constant — an alternative choice", "Long NHS waiting lists drive PMI demand", "No relationship — an alternative choice"], 2,
    "During NHS delays, PMI uptake increases (clients pay for faster access). During recessions, PMI lapses (affordability). This cyclical relationship shapes product design."
  ),
  q("fpa-ch2-ltc-11", "cisi-fpa", "fpa-ch2", "2.8", "Long-Term Care", "protection", "easy",
    "What is long-term care insurance?",
    ["Life insurance — an alternative choice", "Health insurance — an alternative choice", "Coverage for cost of care (nursing home, home care) if", "Only for wealthy people — an alternative choice"], 2,
    "LTC: pays for care costs if unable to bathe, dress, manage continence independently. £3k-5k/month for care is devastating without insurance."
  ),
  q("fpa-ch2-ltc-12", "cisi-fpa", "fpa-ch2", "2.8", "Long-Term Care", "protection", "medium",
    "A 60-year-old with £500k assets and £2k monthly income needs care costing £4k/month. What LTC need exists?",
    ["None - they have assets — an alternative choice", "No insurance possible — an alternative choice", "Significant need. £4k/month care costs", "Full coverage needed — an alternative choice"], 2,
    "Assets deplete within 10 years at £48k/year care costs. LTC insurance (£2-3k annual premium) protects remaining £300k+ for inheritance instead of care costs."
  ),
  q("fpa-ch2-ltc-13", "cisi-fpa", "fpa-ch2", "2.8", "Long-Term Care", "protection", "hard",
    "Why have LTC insurance sales been challenging in recent years?",
    ["High cost (~£2-4k annually), uncertain trigger events (people don't claim), and long-term premium commitment make LTC unpopular; alternatives like equity release or savings often preferred", "LTC is booming", "Everyone buys LTC", "No challenges exist"], 3,
    "LTC barriers: Clients hope they won't need care (denial). Insurers struggled with claim definitions. Equity release offers alternative for older people with property wealth."
  ),
  q("fpa-ch2-income-vs-asp-11", "cisi-fpa", "fpa-ch2", "2.5", "Income vs. ASU", "protection", "medium",
    "What is the key difference between income protection and accident, sickness, unemployment (ASU) insurance?",
    ["Both are the same product — an alternative choice", "ASU covers more conditions — an alternative choice", "Income protection covers", "They're identical — an alternative choice"], 2,
    "IP: covers ill health/injury, typically 60% salary. ASU: also covers unemployment but usually 50% salary, stricter underwriting, and higher excess for joblessness."
  ),
  q("fpa-ch2-income-vs-asp-12", "cisi-fpa", "fpa-ch2", "2.5", "Income vs. ASU", "protection", "hard",
    "A self-employed consultant earning £80k annually should prioritize which protection?",
    ["Income protection focused on illness/injury (most", "ASU only — an alternative choice", "ASU is sufficient — an alternative choice", "Neither is necessary — an alternative choice"], 0,
    "Self-employed risk is mainly illness/disability (no sick pay from employer). ASU unemployment benefit irrelevant. Focus on quality income protection covering illness/injury."
  ),
  q("fpa-ch2-trust-protection-11", "cisi-fpa", "fpa-ch2", "2.9", "Trusts for Protection", "protection", "medium",
    "Why might a life assurance policy be placed in trust?",
    ["Trusts are complex — a legal structure", "No reason — an alternative choice", "No tax benefit — an alternative choice", "Avoids probate delays, ensures proceeds"], 3,
    "Policy in trust: proceeds paid directly to beneficiaries within days, avoiding £200k+ probate delays. Also may avoid £325k IHT threshold if structured correctly."
  ),
  q("fpa-ch2-trust-protection-12", "cisi-fpa", "fpa-ch2", "2.9", "Trusts for Protection", "protection", "hard",
    "A parent wants £200k life insurance to go to minor children but not to the ex-spouse. How can this be achieved?",
    ["No way to prevent ex getting money — an alternative choice", "Put policy in ex's name — an alternative choice", "Withdraw the policy — an alternative choice", "Place policy in trust for minor children"], 3,
    "Trust structure: Policy in trust for named children with independent trustee. Ex-spouse excluded completely. Trustee manages funds for children's benefit until age 18+."
  ),
  q("fpa-ch3-state-pension-11", "cisi-fpa", "fpa-ch3", "3.2", "State Pension", "retirement", "easy",
    "What is the new State Pension eligibility requirement introduced in April 2016?",
    ["30 qualifying years — an alternative choice", "35 qualifying years of National", "20 qualifying years — an alternative choice", "No requirement — an alternative choice"], 1,
    "New SP (from April 2016): 35 qualifying years needed for full amount. Those reaching SPA before April 2016 have different rules (BSP/ASP)."
  ),
  q("fpa-ch3-state-pension-12", "cisi-fpa", "fpa-ch3", "3.2", "State Pension", "retirement", "medium",
    "A client has 30 qualifying years of NI. Under the new State Pension rules, what percentage of full pension will they receive?",
    ["50% — an alternative choice", "Approximately 86% (30/35 of full amount)", "0% - need all 35 years — an alternative choice", "100% — an alternative choice"], 1,
    "New SP is proportional. 30/35 years = 30÷35 = 85.7% of full pension. Deferring or paying voluntary contributions can improve this."
  ),
  q("fpa-ch3-state-pension-13", "cisi-fpa", "fpa-ch3", "3.2", "State Pension", "retirement", "hard",
    "How does deferring State Pension affect the amount received?",
    ["No impact - same amount whenever claimed — an alternative choice", "Deferral reduces the amount — an alternative choice", "Deferral has no financial benefit — an alternative choice", "Deferring increases payment by approximately 1% per 9 weeks (5.8% per year)"], 3,
    "Defer 3 years: receive ~17-18% more per month for life. For someone living to 90+, deferral is mathematically superior. Strategy depends on longevity assumptions."
  ),
  q("fpa-ch3-sp-age-11", "cisi-fpa", "fpa-ch3", "3.2", "State Pension Age", "retirement", "easy",
    "What is the current State Pension age (SPA)?",
    ["60 for men, 60 for women — an alternative choice", "66 for both men and women (rising to 67 by 2028)", "Varies by individual — an alternative choice", "65 for all — an alternative choice"], 1,
    "SPA is 66 (as of 2020). Further increases: 67 by 2028, 68 potentially by 2046. Regular reviews adjust SPA based on life expectancy."
  ),
  q("fpa-ch3-sp-age-12", "cisi-fpa", "fpa-ch3", "3.2", "State Pension Age", "retirement", "medium",
    "A woman born in January 1960 has what State Pension age?",
    ["62 — an alternative choice", "66 (all women born 1953-1977", "60 — an alternative choice", "65 — an alternative choice"], 1,
    "Women born 1953-1955: SPA 60-62. Born 1956-1960: SPA 62-66. Born 1961-1977: SPA 66. Men born 1951+: SPA 65+. Transition was phased."
  ),
  q("fpa-ch3-sp-age-13", "cisi-fpa", "fpa-ch3", "3.2", "State Pension Age", "retirement", "hard",
    "Why have State Pension age increases created planning challenges?",
    ["No challenges — an alternative choice", "SPA has no impact on planning — an alternative choice", "People planning to retire at 60-65 now", "SPA is static — an alternative choice"], 2,
    "Someone planning to retire at 60 but now SPA is 66 faces 6-year gap. Must bridge income via drawdown, flexible employment, or extended savings. Creates significant planning strain."
  ),
  q("fpa-ch3-auto-enrolment-11", "cisi-fpa", "fpa-ch3", "3.3", "Auto-Enrolment", "retirement", "easy",
    "What are the current auto-enrolment contribution rates?",
    ["15% minimum — an alternative choice", "10% minimum — an alternative choice", "0% — an alternative choice", "Employer 3% minimum (rising to 5%),"], 3,
    "Minimum staging: 2024 employer 3%+employee 5%=8%. 2025 rising to 5%+5%=10%. Expected to reach 3%+8%+1%(government) = 12% by 2026."
  ),
  q("fpa-ch3-auto-enrolment-12", "cisi-fpa", "fpa-ch3", "3.3", "Auto-Enrolment", "retirement", "medium",
    "An employer with 50 employees must auto-enrol those over age 22 earning >£10,000. What is the adviser's role?",
    ["Encourage everyone to opt out — an alternative choice", "No role - employer handles alone — an alternative choice", "Advise employees on contribution levels, investment options, and", "Force employees to maximize — an alternative choice"], 2,
    "Advisers help employees understand: minimum contributions may be inadequate for retirement. Increasing to 10-12% (still matched by employer) significantly improves outcomes."
  ),
  q("fpa-ch3-auto-enrolment-13", "cisi-fpa", "fpa-ch3", "3.3", "Auto-Enrolment", "retirement", "hard",
    "Why has auto-enrolment improved retirement savings despite modest initial rates?",
    ["It hasn't helped — an alternative choice", "Default enrollment removes opt-in friction", "Rates are too high — a financial measure", "Auto-enrolment reduces savings — an alternative choice"], 1,
    "Auto-enrolment advantage: 60% participation (default) vs. ~35% with voluntary pension. Staged increases (3%→5%→8%) feel gradual. Compound growth over 40+ years substantial."
  ),
  q("fpa-ch3-db-vs-dc-11", "cisi-fpa", "fpa-ch3", "3.4", "DB vs. DC Schemes", "retirement", "easy",
    "What is the main difference between DB and DC pension schemes?",
    ["DC guarantees income — an alternative choice", "Both are identical — an alternative choice", "No difference — an alternative choice", "DB: benefit determined by"], 3,
    "DB: £30k/year guaranteed at retirement. DC: £500k pot at retirement, uncertain income depending on withdrawals and investments."
  ),
  q("fpa-ch3-db-vs-dc-12", "cisi-fpa", "fpa-ch3", "3.4", "DB vs. DC Schemes", "retirement", "medium",
    "An employee offered a choice between DB and DC schemes. What is the key advantage of DB?",
    ["No advantage — an alternative choice", "DC is better — an alternative choice", "DB provides income certainty (guaranteed pension", "DC is more secure — an alternative choice"], 2,
    "DB advantage: certainty. If promised £20k/year pension, that's guaranteed for life even if markets crash. Employee doesn't worry about investment performance."
  ),
  q("fpa-ch3-db-vs-dc-13", "cisi-fpa", "fpa-ch3", "3.4", "DB vs. DC Schemes", "retirement", "hard",
    "Why have many employers closed DB schemes and moved to DC?",
    ["DB creates unfunded liabilities (promises exceed contributions)", "DB is cheaper — an alternative choice", "No reason to switch — an alternative choice", "DB is superior — an alternative choice"], 0,
    "DB issue: £1m scheme deficit requires employer funding. With longer life expectancy, deficits grow. DC avoids this: contribution is set, no shortfall risk."
  ),
  q("fpa-ch3-annual-allowance-11", "cisi-fpa", "fpa-ch3", "3.5", "Annual Allowance", "retirement", "easy",
    "What is the pension annual allowance?",
    ["£50,000 — an alternative choice", "£200,000 — an alternative choice", "£100,000 — an alternative choice", "£60,000 - the maximum tax-free pension"], 3,
    "Annual allowance: £60,000/year. Exceed it and 40% tax on excess is charged in that tax year. Must monitor especially if DC + DB + personal pensions."
  ),
  q("fpa-ch3-annual-allowance-12", "cisi-fpa", "fpa-ch3", "3.5", "Annual Allowance", "retirement", "medium",
    "A client receives £80k DB pension contribution + £20k employer DC contribution in one year. What is the tax consequence?",
    ["No charge possible — an alternative choice", "Full contribution allowed — an alternative choice", "No issue — an alternative choice", "Total £100k exceeds £60k AA. £40k excess"], 3,
    "AA applied to DB value (as pension input value) + DC contributions. £80k + £20k = £100k, exceeding £60k by £40k. 40% charge = £16k tax on excess."
  ),
  q("fpa-ch3-annual-allowance-13", "cisi-fpa", "fpa-ch3", "3.5", "Annual Allowance", "retirement", "hard",
    "How does the Tapered Annual Allowance (TAA) affect high earners?",
    ["Only affects low earners — an alternative choice", "For earnings >£260k, AA tapers down from £60k to £10k", "No impact — an alternative choice", "TAA increases AA — an alternative choice"], 1,
    "Example: Earning £300k means AA is approx £30k (£60k - (£300k-£260k)/2). £50k pension contribution triggers £16k charge. Creates complex planning for senior executives."
  ),
  q("fpa-ch3-mpaa-11", "cisi-fpa", "fpa-ch3", "3.5", "MPAA", "retirement", "easy",
    "What is the Minimum Pension Allowance (MPA)?",
    ["Same as annual allowance — an alternative choice", "£60,000 — an alternative choice", "The MPA (£10,000) allows small amounts of pension", "There is no MPA — an alternative choice"], 2,
    "MPAA: £10,000 floor. If pension input <£10k in a year, no contribution to AA. Protects those with variable income or taking breaks from saving."
  ),
  q("fpa-ch3-mpaa-12", "cisi-fpa", "fpa-ch3", "3.5", "MPAA", "retirement", "medium",
    "A self-employed person has variable income. In Year 1, contributions £8k; Year 2, contributions £65k. How does MPAA apply?",
    ["Both years exceed — an alternative choice", "No allowance applied — an alternative choice", "£65k triggers £5k charge — an alternative choice", "Year 1: £8k input <£10k MPAA floor, no AA used"], 3,
    "MPAA allows small-contribution years to use £10k without touching AA. This carries forward. Self-employed with variable income can contribute modestly in down years penalty-free."
  ),
  q("fpa-ch3-mpaa-13", "cisi-fpa", "fpa-ch3", "3.5", "MPAA", "retirement", "hard",
    "How does AA carry-forward help high-earning employees?",
    ["Carry-forward increases tax — an alternative choice", "Unused AA from past 3 years carries", "No carry-forward exists — an alternative choice", "Only available to self-employed — an alternative choice"], 1,
    "Example: Year 1 (contribution £30k, AA unused £30k), Year 2 (contribution £100k but £60k AA + £30k carry-forward = £90k allowable). Carry-forward prevents £10k charge."
  ),
  q("fpa-ch3-lta-11", "cisi-fpa", "fpa-ch3", "3.5", "Lifetime Allowance", "retirement", "medium",
    "What happened to the Lifetime Allowance in April 2023?",
    ["LTA reduced — an alternative choice", "No change — an alternative choice", "LTA was abolished; previously limited total", "LTA increased — an alternative choice"], 2,
    "LTA abolished April 2023. Previously, £1m pension pot at retirement triggered 55% tax on excess. Removal benefits high savers dramatically, especially executives."
  ),
  q("fpa-ch3-lta-12", "cisi-fpa", "fpa-ch3", "3.5", "Lifetime Allowance", "retirement", "hard",
    "How did LTA abolition change planning for executive pensions?",
    ["LTA still limits people — an alternative choice", "Made planning harder — an alternative choice", "Executives previously hitting LTA (£1m+) now can save unlimited amounts", "No impact — an alternative choice"], 2,
    "Executive aged 55 with £2m pension would previously hit LTA at £1m (£1m taxed at 55% = £550k loss). LTA abolition removes penalty, allows continued accumulation."
  ),
  q("fpa-ch3-tax-relief-11", "cisi-fpa", "fpa-ch3", "3.6", "Tax Relief", "retirement", "easy",
    "How does pension tax relief work for a basic rate taxpayer?",
    ["20% bonus — an alternative choice", "No relief available — an alternative choice", "Basic rate (20%) tax relief: £8,000 contribution", "40% relief — an alternative choice"], 2,
    "Basic relief: £10k gross contribution, taxpayer pays £8k, government adds £2k. Net result: £10k pension, £8k cost."
  ),
  q("fpa-ch3-tax-relief-12", "cisi-fpa", "fpa-ch3", "3.6", "Tax Relief", "retirement", "medium",
    "How does higher rate tax relief differ between basic and higher rate taxpayers?",
    ["Higher rate gets less — a financial measure", "Basic rate: 20% relief (government adds 25%)", "Higher rate automatic — a financial measure", "Same relief — an alternative choice"], 1,
    "Basic: £8k contribution = £10k pension (net relief 20%). Higher rate (40%): £8k contribution = £10k pension + extra £2k relief claimed on tax return = total 40% relief."
  ),
  q("fpa-ch3-tax-relief-13", "cisi-fpa", "fpa-ch3", "3.6", "Tax Relief", "retirement", "hard",
    "Why do some high earners struggle to get full tax relief on pension contributions?",
    ["They can always claim relief — an alternative choice", "No restrictions exist — an alternative choice", "Relief is unlimited — an alternative choice", "High earners may be restricted by AA (£60k or tapered to £10k)"], 3,
    "High earner earning £300k: AA ~£30k. Contributing £50k triggers £8k charge. Can't claim relief on £20k excess. This creates 'relief restriction' for wealthy savers."
  ),
  q("fpa-ch3-pension-death-11", "cisi-fpa", "fpa-ch3", "3.7", "Pension Death Benefits", "retirement", "easy",
    "What happens to a pension pot if the member dies before age 75?",
    ["Pot is lost — an alternative choice", "Pot is tax-free if paid within 2 years", "Government keeps it — an alternative choice", "Full tax charged — an alternative choice"], 1,
    "Death before 75: TAX-FREE death benefits. Pass £500k to heirs tax-free. After 75: benefits taxed at member's marginal rate (40% for higher rate)."
  ),
  q("fpa-ch3-pension-death-12", "cisi-fpa", "fpa-ch3", "3.7", "Pension Death Benefits", "retirement", "medium",
    "A member aged 60 with £400k pension dies. What's the tax treatment for beneficiaries?",
    ["Partially taxed — an alternative choice", "Tax-free if paid within 2 years of death", "Taxed as income — an alternative choice", "Taxed at 40% — an alternative choice"], 1,
    "Before 75 death: tax-free. £400k to family/beneficiaries with no income tax, no IHT. This makes pensions powerful inheritance tool."
  ),
  q("fpa-ch3-pension-death-13", "cisi-fpa", "fpa-ch3", "3.7", "Pension Death Benefits", "retirement", "hard",
    "Why is death before 75 such a tax-efficient outcome compared to death after 75?",
    ["Age irrelevant — an alternative choice", "No difference — an alternative choice", "Before 75: benefits tax-free (£1m inheritance", "After 75 better — an alternative choice"], 2,
    "Death age 74: £1m pension = £1m tax-free to family. Death age 76: same £1m = £600k (after 40% tax) to family. £400k difference."
  ),
  q("fpa-ch3-pension-sharing-11", "cisi-fpa", "fpa-ch3", "3.8", "Pension Sharing Divorce", "retirement", "medium",
    "What is pension sharing on divorce?",
    ["Court order transfers percentage of pension between spouses", "Pension unaffected by divorce — an alternative choice", "One spouse loses pension — an alternative choice", "Equal split always — an alternative choice"], 0,
    "Example: Wife has £600k pension. Divorce court orders 50% sharing (£300k) to husband. Husband gets separate QDRO to manage own £300k fund independently."
  ),
  q("fpa-ch3-pension-sharing-12", "cisi-fpa", "fpa-ch3", "3.8", "Pension Sharing Divorce", "retirement", "hard",
    "How does pension sharing differ from pension attachment (earmarking)?",
    ["Sharing: pension divided, other spouse gets independent fund", "Both are current — an alternative choice", "Earmarking is better — an alternative choice", "Same thing — an alternative choice"], 0,
    "Sharing is modern (post-2000). Earmarking was older system (pre-2000) where fund stayed with original owner and portion paid to ex at retirement. Sharing preferred as cleaner split."
  ),
  q("fpa-ch3-auto-enrol-opt-out-11", "cisi-fpa", "fpa-ch3", "3.3", "Auto-Enrolment Opt-Out", "retirement", "hard",
    "Can an employee opt out of auto-enrolment pension contributions, and what happens?",
    ["No opt-out possible — an alternative choice", "Opt-out is permanent — an alternative choice", "No re-enrolment required — an alternative choice", "Yes, but opt-out triggers"], 3,
    "Opt-out is allowed but temporary. 3 years later, employer re-enrolls automatically. This 'sticky default' increases long-term pension coverage even among reluctant savers."
  ),
  q("fpa-ch3-pension-income-11", "cisi-fpa", "fpa-ch3", "3.9", "Pension Income Strategy", "retirement", "medium",
    "A retiree has £500k DC pension, £150k state pension value. What income options exist?",
    ["Annuity only — an alternative choice", "Drawdown only — an alternative choice", "No options — an alternative choice", "Annuity (converts to guaranteed income),"], 3,
    "Annuity: £500k buys ~£15-17k/year guaranteed for life (age 65, current rates). Drawdown: flexible, keep capital invested, withdraw as needed but investment risk remains."
  ),
  q("fpa-ch3-pension-income-12", "cisi-fpa", "fpa-ch3", "3.9", "Pension Income Strategy", "retirement", "hard",
    "Why might a retiree aged 65 with £600k pension choose drawdown over annuity?",
    ["Annuity always better — an alternative choice", "Drawdown guarantees income — an alternative choice", "Annuity more flexible — an alternative choice", "Drawdown: keep capital invested (growth potential),"], 3,
    "Drawdown advantages: If die at 75, heirs inherit remaining pot (tax-free). Annuity: if die at 70, heirs get nothing (insurance principle). Drawdown suits those wanting flexibility/inheritance."
  ),
  q("fpa-ch4-annuity-types-11", "cisi-fpa", "fpa-ch4", "4.1", "Annuity Types", "solutions", "easy",
    "What is a level annuity?",
    ["Variable income — an alternative choice", "Increases annually — an alternative choice", "Fixed income payment for life, same amount each year", "No income — an alternative choice"], 2,
    "Level annuity: £500k buys £15k/year forever (same amount). In 20 years, £15k worth much less (inflation). No adjustment."
  ),
  q("fpa-ch4-annuity-types-12", "cisi-fpa", "fpa-ch4", "4.1", "Annuity Types", "solutions", "medium",
    "Compare level annuity (£15k/year) vs. escalating annuity (£12k year 1, +3% annually) over 20 years.",
    ["Both the same — an alternative choice", "Escalating: Year 1 £12k, Year 20 £19.3k =", "Level is better — an alternative choice", "Escalating worse — an alternative choice"], 1,
    "£15k level doesn't grow; at 3% inflation, year 20 value = £7.8k in today's money. Escalating maintains purchasing power but lower starting income."
  ),
  q("fpa-ch4-annuity-types-13", "cisi-fpa", "fpa-ch4", "4.1", "Annuity Types", "solutions", "hard",
    "Why have annuity rates declined significantly since 2008?",
    ["Falling interest rates (base rate dropped from 5%", "Rates only increase — a financial measure", "Rates always decline — a financial measure", "Unrelated factors — an alternative choice"], 0,
    "2008: gilt yield 4%, annuity £500k = £20k/year. 2020: gilt yield 0.3%, same pot = £12k/year. Lower rates + longevity = 40% lower annuity income."
  ),
  q("fpa-ch4-joint-annuity-11", "cisi-fpa", "fpa-ch4", "4.1", "Joint Annuity", "solutions", "medium",
    "What is a joint-life, last-survivor annuity?",
    ["Income stops at first death — an alternative choice", "Only one spouse gets payment — an alternative choice", "Income continues to survivor after first", "Both receive separately — a financial measure"], 2,
    "Couple: £500k buys joint annuity £12k/year. If husband dies, wife receives £12k/year (or £6k at 50% level) for life. Original £12k stops."
  ),
  q("fpa-ch4-joint-annuity-12", "cisi-fpa", "fpa-ch4", "4.1", "Joint Annuity", "solutions", "hard",
    "A married couple with £500k pension must choose: joint-life annuity (£10k/year) or individual annuity for husband only (£13k/year). What's the trade-off?",
    ["Individual: higher income (£13k) but stops at husband's", "Identical outcomes — an alternative choice", "Individual is always better — an alternative choice", "Joint always better — an alternative choice"], 0,
    "Individual advantage: £3k more per year (~£60k over 20 years). Disadvantage: wife is vulnerable if husband dies. Joint protects her but costs income. Depends on wife's other assets/income."
  ),
  q("fpa-ch4-guaranteed-period-11", "cisi-fpa", "fpa-ch4", "4.1", "Guaranteed Period", "solutions", "medium",
    "What is a guaranteed period annuity?",
    ["No guarantee — an alternative choice", "Annuity guarantees payments for fixed period (e.g., 5, 10 years)", "Guarantee covers everything — an alternative choice", "Always 10 years — an alternative choice"], 1,
    "Guaranteed 10-year annuity: If die at year 7, remaining 3 years' payments (£36k) paid to heirs. After year 10, income continues for life if alive."
  ),
  q("fpa-ch4-guaranteed-period-12", "cisi-fpa", "fpa-ch4", "4.1", "Guaranteed Period", "solutions", "hard",
    "Why might someone choose a longer guaranteed period (10 years) over shorter (5 years)?",
    ["Shorter is always better — an alternative choice", "Longer period ensures more goes to estate if die early", "Same cost — an alternative choice", "No difference in income — an alternative choice"], 1,
    "10-year guaranteed period: if die at year 3, heirs get 7 years' remaining income. 5-year: heirs get only 2 years'. Longer security for dependents."
  ),
  q("fpa-ch4-drawdown-11", "cisi-fpa", "fpa-ch4", "4.2", "Drawdown", "solutions", "easy",
    "What is flexible access drawdown (FAD)?",
    ["Annuity replacement — an alternative choice", "No flexibility — an alternative choice", "Fixed annuity-like product — an alternative choice", "Withdrawal of money from pension pot without annuity"], 3,
    "FAD: £500k pot, withdraw £20k year 1, £15k year 2, as needed. Remaining £465k invested, continues growing. Flexibility to adjust withdrawals."
  ),
  q("fpa-ch4-drawdown-12", "cisi-fpa", "fpa-ch4", "4.2", "Drawdown", "solutions", "medium",
    "A client aged 65 with £400k in drawdown withdraws £30k annually. What are the key risks?",
    ["Sequencing risk (early market crash can deplete", "No risks — an alternative choice", "Markets irrelevant — an alternative choice", "Guaranteed income — an alternative choice"], 0,
    "Scenario: Withdraw £30k/year from £400k. Market crash reduces pot to £300k. Now £30k is 10% of remaining pot (unsustainable). Capital depletes fast."
  ),
  q("fpa-ch4-drawdown-13", "cisi-fpa", "fpa-ch4", "4.2", "Drawdown", "solutions", "hard",
    "How does the 4% rule help guide sustainable drawdown withdrawals?",
    ["No limits on withdrawal — an alternative choice", "5% always safe — an alternative choice", "Withdraw ~4% of starting pot annually (adjusted for inflation)", "No 4% rule — an alternative choice"], 2,
    "4% rule: £400k × 4% = £16k sustainable. £20k withdrawal (5%) risks capital depletion. £12k (3%) very conservative. Rule balances income with capital preservation."
  ),
  q("fpa-ch4-ufpls-11", "cisi-fpa", "fpa-ch4", "4.3", "UFPLS", "solutions", "easy",
    "What is an Uncrystallized Funds Pension Lump Sum (UFPLS)?",
    ["Fully taxed — an alternative choice", "Withdrawal of portion from pot without annuity", "Only for annuities — an alternative choice", "Already crystallized pension — an alternative choice"], 1,
    "UFPLS £40k withdrawal: £10k tax-free (25%), £30k taxed at income tax rate (20-45% depending on band). Useful alternative to drawdown."
  ),
  q("fpa-ch4-ufpls-12", "cisi-fpa", "fpa-ch4", "4.3", "UFPLS", "solutions", "medium",
    "A basic rate taxpayer withdraws £50k via UFPLS from their pension. What's the tax charge?",
    ["Full £50k taxed — an alternative choice", "£25k tax — an alternative choice", "£12.5k tax-free (25%), £37.5k taxed at 20% =", "£50k tax-free — an alternative choice"], 2,
    "UFPLS math: £50k withdrawal = £12.5k tax-free + £37.5k taxable. At 20% rate: £37.5k × 20% = £7.5k tax. Net = £42.5k."
  ),
  q("fpa-ch4-ufpls-13", "cisi-fpa", "fpa-ch4", "4.3", "UFPLS", "solutions", "hard",
    "Why might a higher rate taxpayer (40% rate) avoid large UFPLS withdrawals?",
    ["No issue — an alternative choice", "Large UFPLS can push income into 40% band", "Higher rate should maximize — a financial measure", "No difference in tax — an alternative choice"], 1,
    "Higher rate taxpayer earning £70k (£20k above threshold): Taking £50k UFPLS means £37.5k taxable at 40% on some amounts. Drawdown allows spreading over years, keeping most in 20% band."
  ),
  q("fpa-ch4-small-pots-11", "cisi-fpa", "fpa-ch4", "4.4", "Small Pots", "solutions", "easy",
    "What is a small pot exemption in pension rules?",
    ["Unlimited amounts — an alternative choice", "Exemption allows withdrawal of", "Applies to all pensions — an alternative choice", "No such exemption — an alternative choice"], 1,
    "Small pot: <£10k total pot from scheme. Withdraw once = £2.5k tax-free, £7.5k taxed. Clean exit."
  ),
  q("fpa-ch4-small-pots-12", "cisi-fpa", "fpa-ch4", "4.4", "Small Pots", "solutions", "medium",
    "A client has four old employer pensions, each £8k (total £32k). How do small pot rules apply?",
    ["Can withdraw all as small pots — an alternative choice", "No small pots apply — an alternative choice", "Must treat as one — an alternative choice", "Each pension is separate; can treat each <£10k as small pot if done in isolation"], 3,
    "Small pot rules: apply per scheme. If four different schemes, each can be small pot (if separately <£10k). If same scheme, combined £32k = NOT small pot."
  ),
  q("fpa-ch4-small-pots-13", "cisi-fpa", "fpa-ch4", "4.4", "Small Pots", "solutions", "hard",
    "Why are small pot limits important for financial planning?",
    ["Limits don't matter — an alternative choice", "No importance — an alternative choice", "Clients with many old pensions (e.g., job changes) can have several small pots", "Small pots always beneficial — an alternative choice"], 2,
    "Scenario: Employee has 10 old pensions, average £6k each. Can withdraw all as small pots (25% tax-free) but loses investment efficiency (paying multiple fund charges). May be better to consolidate to one provider."
  ),
  q("fpa-ch4-trivial-commutation-11", "cisi-fpa", "fpa-ch4", "4.5", "Trivial Commutation", "solutions", "easy",
    "What is trivial commutation?",
    ["Annuity alternative — an alternative choice", "Annuity purchase — an alternative choice", "No commutation — an alternative choice", "Commutation of entire pension pot"], 3,
    "Trivial commutation: Whole pot <£30k withdrawn as lump sum once only in lifetime. Clean exit option."
  ),
  q("fpa-ch4-trivial-commutation-12", "cisi-fpa", "fpa-ch4", "4.5", "Trivial Commutation", "solutions", "medium",
    "A client aged 60 with total pensions of £28k wants to use trivial commutation. What's the tax position?",
    ["No tax charged — an alternative choice", "£28k commutation = £7k tax-free (25%), £21k", "Full tax at 40% — an alternative choice", "£28k tax-free — an alternative choice"], 1,
    "Trivial commutation: £28k × 25% = £7k tax-free. £21k × 20% (assuming basic rate) = £4.2k tax. Net: £23.8k received."
  ),
  q("fpa-ch4-trivial-commutation-13", "cisi-fpa", "fpa-ch4", "4.5", "Trivial Commutation", "solutions", "hard",
    "Why is trivial commutation less commonly used than drawdown?",
    ["Trivial has no drawbacks — an alternative choice", "Drawdown unavailable — an alternative choice", "Trivial commits entire pot to lump sum (no ongoing income flexibility)", "Trivial is always better — an alternative choice"], 2,
    "Trivial limitation: One-time, all-or-nothing. If £30k pot and basic rate, £22.5k taxable might push into 40% band = higher tax. Drawdown spreads withdrawals, managing tax better."
  ),
  q("fpa-ch4-phased-retirement-11", "cisi-fpa", "fpa-ch4", "4.6", "Phased Retirement", "solutions", "medium",
    "What is phased retirement?",
    ["Immediate full retirement — an alternative choice", "Only full retirement — an alternative choice", "No partial retirement — an alternative choice", "Gradual transition: reduce work"], 3,
    "Phased: Age 60, reduce work to 20 hours/week, withdraw £5k/year from pension, earn £40k salary. Reduces income shock at retirement."
  ),
  q("fpa-ch4-phased-retirement-12", "cisi-fpa", "fpa-ch4", "4.6", "Phased Retirement", "solutions", "hard",
    "Why might phased retirement improve retirement readiness?",
    ["No benefits — an alternative choice", "Allows testing retirement spending levels before full retirement", "No advantage — an alternative choice", "Complicates retirement — an alternative choice"], 1,
    "Benefit: Work 2 days/week at 60, earn £20k, withdraw £8k pension = £28k total. Test this income level against retirement needs. Full retirement at 65 easier after 5-year trial."
  ),
  q("fpa-ch4-sustainable-withdrawal-11", "cisi-fpa", "fpa-ch4", "4.2", "Sustainable Withdrawal Rate", "solutions", "medium",
    "What is the sustainable withdrawal rate (SWR) concept?",
    ["Annual withdrawal amount that avoids capital depletion", "No planning needed — an alternative choice", "5% always safe — an alternative choice", "No limits on withdrawals — an alternative choice"], 0,
    "SWR: How much to withdraw annually? 4% rule: £500k pot = £20k/year (inflation-adjusted) sustainable for 30+ years with equity portfolio."
  ),
  q("fpa-ch4-sustainable-withdrawal-12", "cisi-fpa", "fpa-ch4", "4.2", "Sustainable Withdrawal Rate", "solutions", "hard",
    "How do market conditions affect sustainable withdrawal rates?",
    ["Unknown impact — an alternative choice", "No impact — an alternative choice", "Bear markets: sequence of returns risk", "Always 4% — an alternative choice"], 2,
    "Scenario: Retire in 2020 (bull market), withdraw 4% = fine. Retire in 2008 (bear), withdraw 4% on falling pot = capital depleted by 2030. Dynamic adjustment needed."
  ),
  q("fpa-ch4-sequencing-risk-11", "cisi-fpa", "fpa-ch4", "4.7", "Sequencing Risk", "solutions", "medium",
    "What is sequencing of returns risk?",
    ["Average returns only matter — a financial measure", "No such risk — an alternative choice", "Risk that poor market returns early in", "Markets don't affect withdrawals — an alternative choice"], 2,
    "Example: Pot earns average 6% over 30 years. Sequence matters: -20%, -10%, +8%, +8%... early losses at high capital = disaster. vs. +8%, +8%, +8%, -20%... early gains offset later loss."
  ),
  q("fpa-ch4-sequencing-risk-12", "cisi-fpa", "fpa-ch4", "4.7", "Sequencing Risk", "solutions", "hard",
    "How can retirees reduce sequencing risk?",
    ["No mitigation possible — an alternative choice", "Stay fully invested — an alternative choice", "Only annuities work — an alternative choice", "Reduce equity exposure early retirement (bonds"], 3,
    "Mitigation: In 2008 crash, retiree with 50% stocks + 50% bonds had stable capital. Pure stocks fell 50%. 2-year cash reserve allows avoiding stock sales during crash."
  ),
  q("fpa-ch4-investment-pathways-11", "cisi-fpa", "fpa-ch4", "4.8", "Investment Pathways", "solutions", "medium",
    "What are FCA investment pathways for pension drawdown?",
    ["Mandatory pathways — an alternative choice", "Pathways for annuities only — an alternative choice", "Default investment strategies for drawdown: 0% stocks", "No regulated pathways — an alternative choice"], 2,
    "Pathways introduced 2023: non-advised retirees can select Cautious/Balanced/Growth/Adventurous based on needs. Avoids poor default choices."
  ),
  q("fpa-ch4-investment-pathways-12", "cisi-fpa", "fpa-ch4", "4.8", "Investment Pathways", "solutions", "hard",
    "Why were investment pathways created?",
    ["No benefit — an alternative choice", "Additional regulation burden only — an alternative choice", "Many drawdown customers made poor investment choices (all cash", "No reason — an alternative choice"], 2,
    "Issue: Customer takes £300k pension, leaves in cash at 0.5% = £1,500/year (can't live on it). Or puts in 100% growth = volatility unsuitable for retiree. Pathways solve this."
  ),
  q("fpa-ch5-suitability-11", "cisi-fpa", "fpa-ch5", "5.1", "Suitability", "recommendations", "easy",
    "What is suitability in financial advice?",
    ["All recommendations equally suitable — an alternative choice", "Any product the adviser likes — an alternative choice", "Suitability irrelevant — an alternative choice", "Recommendation must match client's"], 3,
    "Suitability: recommendation must fit client profile. Proposing emerging market fund to 70-year-old needing income = unsuitable."
  ),
  q("fpa-ch5-suitability-12", "cisi-fpa", "fpa-ch5", "5.1", "Suitability", "recommendations", "medium",
    "An adviser recommends 100% equities to a 55-year-old with £300k pension, £1m mortage, and £2.5k monthly essential expenses. What is the suitability issue?",
    ["Limited capacity for loss (mortgage + essential expenses", "No issue — an alternative choice", "No documentation needed — an alternative choice", "Equities always suitable — an alternative choice"], 0,
    "Suitability problem: Client has limited capacity for loss (mortgage, fixed expenses). Market crash could force liquidating stocks to pay bills. 100% equities exceeds capacity."
  ),
  q("fpa-ch5-suitability-13", "cisi-fpa", "fpa-ch5", "5.1", "Suitability", "recommendations", "hard",
    "How should advisers document suitability for complex recommendations?",
    ["Verbal explanation only — an alternative choice", "Suitability report should: explain client facts (income,", "One-line email sufficient — an alternative choice", "No documentation needed — an alternative choice"], 1,
    "Suitability documentation: 'Client aged 45, salary £60k, £100k savings, wants £30k annual retirement income at 60. Recommended 70% equities + 30% bonds to achieve target within risk tolerance. Annual fees 0.75%.' Clear link between facts and recommendation."
  ),
  q("fpa-ch5-ongoing-review-11", "cisi-fpa", "fpa-ch5", "5.2", "Ongoing Review", "recommendations", "easy",
    "Why are ongoing reviews essential?",
    ["Reviews waste time — an alternative choice", "One-time advice sufficient — an alternative choice", "Life circumstances change (promotion, inheritance, health),", "Reviews are unnecessary — an alternative choice"], 2,
    "Review topics: Has income changed? New dependents? Inheritance received? Have markets moved portfolio away from target? Do costs need review?"
  ),
  q("fpa-ch5-ongoing-review-12", "cisi-fpa", "fpa-ch5", "5.2", "Ongoing Review", "recommendations", "medium",
    "A client's portfolio was 60% stocks/40% bonds in 2021. In 2023, due to market movements, it's now 70% stocks/30% bonds. What review action is needed?",
    ["Do nothing — an alternative choice", "Accept new allocation — an alternative choice", "Rebalance back to 60/40 to restore", "Increase to 80% — an alternative choice"], 2,
    "Rebalancing: Stocks outperformed 2021-2023, portfolio drifted. Rebalancing sells overweighted stocks, buys underweighted bonds, restores target allocation."
  ),
  q("fpa-ch5-ongoing-review-13", "cisi-fpa", "fpa-ch5", "5.2", "Ongoing Review", "recommendations", "hard",
    "How should advisers handle client inaction on review recommendations?",
    ["Force changes — an alternative choice", "Change without permission — an alternative choice", "Ignore client wishes — an alternative choice", "Document recommendation and client's"], 3,
    "Example: Adviser recommends increasing pension contributions, client declines due to cash flow. Document discussion, risks (inadequate retirement savings), and client's informed choice. Follow up next review."
  ),
  q("fpa-ch5-rebalancing-11", "cisi-fpa", "fpa-ch5", "5.3", "Rebalancing", "recommendations", "easy",
    "What is portfolio rebalancing?",
    ["Periodically adjusting asset allocation back to target (e.g.,", "One-time adjustment — an alternative choice", "Changing the entire portfolio — an alternative choice", "No need to adjust — an alternative choice"], 0,
    "Rebalancing: Target 60/40. Market makes it 70/30. Sell 10% stocks, buy 10% bonds = back to 60/40."
  ),
  q("fpa-ch5-rebalancing-12", "cisi-fpa", "fpa-ch5", "5.3", "Rebalancing", "recommendations", "medium",
    "How often should portfolios be rebalanced?",
    ["Continuously — an alternative choice", "Monthly — an alternative choice", "Never — an alternative choice", "Quarterly to annually depending on tolerance for drift"], 3,
    "Rebalancing frequency: Annual is standard. If target 60/40 and now 65/35, consider rebalancing. If 61/39 (minor drift), wait until annual review."
  ),
  q("fpa-ch5-rebalancing-13", "cisi-fpa", "fpa-ch5", "5.3", "Rebalancing", "recommendations", "hard",
    "What is the behavioral advantage of disciplined rebalancing?",
    ["No behavioral impact — an alternative choice", "Forces 'sell high' (reduce overweighted equities after", "Rebalancing underperforms — an alternative choice", "No advantage — an alternative choice"], 1,
    "Behavioral benefit: In 2008 crash, disciplined rebalancers sold bonds (down), bought stocks (crashed). Counterintuitive but historically profitable as stocks recovered."
  ),
  q("fpa-ch5-cost-impact-11", "cisi-fpa", "fpa-ch5", "5.4", "Cost Impact", "recommendations", "easy",
    "How do ongoing adviser fees affect long-term returns?",
    ["Fees irrelevant — an alternative choice", "No impact — an alternative choice", "Higher fees = better returns — a financial measure", "Annual fees (e.g., 0.75%) compound over decades"], 3,
    "Cost impact: 0.75% fee on £100k over 30 years = ~£80k lower final value compared to 0.25% fee portfolio. Costs matter significantly."
  ),
  q("fpa-ch5-cost-impact-12", "cisi-fpa", "fpa-ch5", "5.4", "Cost Impact", "recommendations", "medium",
    "An adviser recommends Portfolio A (0.5% total cost) vs. Portfolio B (1.5% total cost), same expected returns. Which is preferable?",
    ["B is better value — an alternative choice", "B due to higher cost — an alternative choice", "A. Same expected returns, lower costs = higher net return to client", "Same outcome — an alternative choice"], 2,
    "1% cost difference: £300k over 30 years. Same gross 6% return: net 5.5% (Portfolio A) vs. 4.5% (Portfolio B). Portfolio A ends 20%+ higher due to cost efficiency."
  ),
  q("fpa-ch5-cost-impact-13", "cisi-fpa", "fpa-ch5", "5.4", "Cost Impact", "recommendations", "hard",
    "Why must advisers disclose total costs (adviser fees + fund charges) transparently?",
    ["Clients don't care — an alternative choice", "Clients need full picture of annual 'drag' (e.g., 1.5%", "No disclosure needed — an alternative choice", "Costs should be hidden — an alternative choice"], 1,
    "Example: Adviser says '0.5% fee' but funds charge 1.2% = 1.7% total. Over 20 years, £200k pot becomes £120k lower than 0.5% portfolio. Transparency essential."
  ),
  q("fpa-ch5-measuring-objectives-11", "cisi-fpa", "fpa-ch5", "5.5", "Measuring Objectives", "recommendations", "medium",
    "How should advisers measure whether plans are on track to achieve client objectives?",
    ["No benchmarking needed — an alternative choice", "No measurement possible — an alternative choice", "Measure once only — an alternative choice", "Compare actual fund value/income against"], 3,
    "Tracking: Goal is £500k by age 60. Current age 45 with £200k. Projected growth at 6% = £424k (shortfall £76k). Recommend increasing contributions or adjusting target."
  ),
  q("fpa-ch5-measuring-objectives-12", "cisi-fpa", "fpa-ch5", "5.5", "Measuring Objectives", "recommendations", "hard",
    "What should advisers do if client is off-track to achieve retirement objective?",
    ["Review and propose options: increase contributions, extend working", "Ignore the problem — an alternative choice", "Accept shortfall — an alternative choice", "Change investment without asking — an alternative choice"], 0,
    "Off-track example: Target £30k annual retirement income, but projections show £22k achievable. Options: Work 5 more years, save £5k/year more, accept lower income, or increase risk slightly."
  ),
  q("fpa-ch5-life-events-11", "cisi-fpa", "fpa-ch5", "5.6", "Life Events", "recommendations", "medium",
    "How should marriage affect financial planning reviews?",
    ["Marriage triggers review: combine finances,", "No impact — an alternative choice", "Rare to need changes — an alternative choice", "Plan unchanged — an alternative choice"], 0,
    "Marriage review: New dependents (future children)? Combine assets? Increase mortgage? Update wills (marriage revokes previous wills). Review all protection and tax efficiency."
  ),
  q("fpa-ch5-life-events-12", "cisi-fpa", "fpa-ch5", "5.6", "Life Events", "recommendations", "medium",
    "A client receives £200k inheritance. How should the adviser respond?",
    ["Spend it all — an alternative choice", "Recommend investing immediately — an alternative choice", "Comprehensive review: update net worth, reassess risk profile", "No advice needed — an alternative choice"], 2,
    "Inheritance impact: Client may feel pressured to 'invest quickly.' Prudent approach: assess goals, emergency fund adequacy, debt repayment, then strategic investment over time."
  ),
  q("fpa-ch5-life-events-13", "cisi-fpa", "fpa-ch5", "5.6", "Life Events", "recommendations", "hard",
    "A client is made redundant with £50k redundancy package. What's the adviser's priority?",
    ["First: ensure emergency fund (3-6 months expenses) before investing", "Invest everything — an alternative choice", "Immediately invest the money — an alternative choice", "No action needed — an alternative choice"], 0,
    "Redundancy approach: £50k package depletes if unemployment extends. Build 6-month emergency fund first, then plan strategic use for deficit repayment, savings, or structured job search support."
  ),
  q("fpa-ch5-regulatory-requirements-11", "cisi-fpa", "fpa-ch5", "5.7", "Regulatory Requirements", "recommendations", "easy",
    "What must a financial adviser include in a suitability report?",
    ["No documentation required — an alternative choice", "Recommendation only — an alternative choice", "Client facts/circumstances, objectives, analysis,", "Just the recommendation — an alternative choice"], 2,
    "Suitability report elements: WHO (client), WHAT (goal), WHY (recommendation), HOW (strategy), COSTS (all fees), RISKS (what could go wrong)."
  ),
  q("fpa-ch5-regulatory-requirements-12", "cisi-fpa", "fpa-ch5", "5.7", "Regulatory Requirements", "recommendations", "medium",
    "What is an Attitude to Risk (AtR) statement?",
    ["Optional questionnaire — an alternative choice", "Document signed by client confirming their risk", "Not important — an alternative choice", "No requirement — an alternative choice"], 1,
    "AtR statement: Client confirms 'I'm aware a 60% equity portfolio can fall 20%+ in bad years and I'm comfortable with this.' Protects both parties."
  ),
  q("fpa-ch5-regulatory-requirements-13", "cisi-fpa", "fpa-ch5", "5.7", "Regulatory Requirements", "recommendations", "hard",
    "Why are detailed records important when recommendations are challenged?",
    ["Records don't matter — an alternative choice", "Records not legally required — an alternative choice", "Verbal advice sufficient — an alternative choice", "If client disputes suitability (after a loss), evidence of"], 3,
    "Scenario: Client sues adviser over loss. Adviser's file shows: detailed fact-find, risk questionnaire (signed), suitability analysis, client meeting notes documenting discussion. Adviser likely wins dispute."
  ),
  q("fpa-ch5-conflict-of-interest-11", "cisi-fpa", "fpa-ch5", "5.8", "Conflict of Interest", "recommendations", "medium",
    "What is a conflict of interest in financial advice?",
    ["Advisers have no incentives — an alternative choice", "No conflicts exist — an alternative choice", "Situation where adviser's financial incentive conflicts with", "All advisers have conflicts — an alternative choice"], 2,
    "Conflict example: Adviser earns 3% commission on Funds A (suitable, 1% commission). Recommends Fund A (best choice) not A (profitable choice). Conflict managed."
  ),
  q("fpa-ch1-planning-process-14", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "medium",
    "Why should financial plans be written and documented?",
    ["Verbal plans sufficient — an alternative choice", "Written plan creates accountability,", "Only investors need written plans — an alternative choice", "Documentation is unnecessary — an alternative choice"], 1,
    "Written documentation: client can verify understanding, adviser has record of recommendations and rationale, helps with annual reviews by tracking original assumptions."
  ),
  q("fpa-ch1-planning-process-15", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "hard",
    "How do external factors (interest rates, inflation, tax changes) affect financial planning?",
    ["Only markets matter — an alternative choice", "Changes in rates/inflation/tax alter plan viability", "External factors don't apply — an alternative choice", "No external impact — an alternative choice"], 1,
    "Example: Plan assumes 2% inflation. If inflation rises to 4%, retirement savings goal increases ~20%. Plan needs updating to reflect new assumptions."
  ),
  q("fpa-ch1-planning-process-16", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "easy",
    "What is a financial planning scenario?",
    ["Only one plan needed — an alternative choice", "Scenarios aren't important — an alternative choice", "Alternative 'what-if' projection (e.g., retire at 60 vs", "All scenarios identical — an alternative choice"], 2,
    "Scenarios help clients understand: If markets average 5% (base case), I achieve £500k. If 7% (optimistic), £600k. If 3% (pessimistic), £400k. Helps realistic planning."
  ),
  q("fpa-ch1-planning-process-17", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "medium",
    "How does goal prioritization help when financial resources are limited?",
    ["All goals equally important — an alternative choice", "When saving capacity is limited,", "Ignore priorities — an alternative choice", "Goals shouldn't be prioritized — an alternative choice"], 1,
    "Prioritization: Client wants to save £5k/year for 3 goals. Rank by importance: mortgage overpayment (saves interest), then pension (tax relief), then ISA (flexibility)."
  ),
  q("fpa-ch2-gaps-analysis-11", "cisi-fpa", "fpa-ch2", "2.10", "Protection Gaps", "protection", "medium",
    "What is a protection gaps analysis?",
    ["Comparison of protection need vs. actual coverage to identify shortfalls", "Gaps aren't important — an alternative choice", "All gaps are acceptable — an alternative choice", "No gaps exist in insurance — an alternative choice"], 0,
    "Gap analysis: Mortgage £300k + family income £200k = £500k need. Existing policy £250k = £250k gap. Gap means death leaves family vulnerable."
  ),
  q("fpa-ch2-protection-underinsurance-11", "cisi-fpa", "fpa-ch2", "2.10", "Protection Gaps", "protection", "hard",
    "Why do many people remain significantly underinsured despite protection needs?",
    ["Denial/optimism bias ('won't happen to me'), affordability constraints,", "Insurance is always accessible — an alternative choice", "All protection products are affordable — an alternative choice", "Everyone has adequate cover — an alternative choice"], 0,
    "Underinsurance pattern: 70% have <£100k life cover; 40% have zero income protection. Causes: cost perception, lack of trust in insurers, overconfidence in health."
  ),
  q("fpa-ch3-sp-claiming-strategy-11", "cisi-fpa", "fpa-ch3", "3.2", "State Pension Claiming", "retirement", "medium",
    "What is the key trade-off in claiming State Pension early vs. deferring?",
    ["Early claiming: receive lower annual", "Deferral always better — an alternative choice", "No trade-off exists — an alternative choice", "Claim immediately, always — an alternative choice"], 0,
    "Breakeven: Claim at 66 vs. defer 3 years. If live to 80, claiming at 66 pays more cumulatively. If live to 95, deferring pays more. Depends on health/longevity."
  ),
  q("fpa-ch3-sp-claiming-strategy-12", "cisi-fpa", "fpa-ch3", "3.2", "State Pension Claiming", "retirement", "hard",
    "How does flexible working affect State Pension age planning?",
    ["Can't combine income and SP — an alternative choice", "Flexible work irrelevant — an alternative choice", "No impact on SP age — an alternative choice", "Flexible working (part-time) allows income + State Pension bridge"], 3,
    "Strategy: Claim SP at 66 (£11k/year), work part-time (£15k salary) = £26k total. Full retirement at 68. Smoother transition than cliff-edge full retirement."
  ),
  q("fpa-ch3-pensions-brought-forward-11", "cisi-fpa", "fpa-ch3", "3.5", "Pensions Brought Forward", "retirement", "medium",
    "What is the MPA carry-forward rule?",
    ["Can only use current year — an alternative choice", "Carry-forward is unlimited — an alternative choice", "MPAA (£10k floor) allows unused allowance from current + 3", "No carry-forward exists — an alternative choice"], 2,
    "Carry-forward example: Year 1 contribution £10k (full MPAA, no AA used). Year 2 contribution £100k. £60k AA + £10k carry-forward = £70k allowable. £30k excess taxed."
  ),
  q("fpa-ch3-pension-death-before-75-11", "cisi-fpa", "fpa-ch3", "3.7", "Death Before 75", "retirement", "easy",
    "What is the inheritance tax treatment of pension death benefits before age 75?",
    ["Subject to 40% IHT — an alternative choice", "Partially taxed — an alternative choice", "Tax-free; death benefits paid", "Subject to 20% income tax — an alternative choice"], 2,
    "Before 75 advantage: £1m pension pot inherited = £1m tax-free to beneficiaries (no income tax, no IHT). Unique compared to most investments."
  ),
  q("fpa-ch3-pension-death-after-75-11", "cisi-fpa", "fpa-ch3", "3.7", "Death After 75", "retirement", "medium",
    "What tax is charged on pension death benefits after age 75?",
    ["Income tax at beneficiary's marginal rate", "40% flat rate — a financial measure", "No tax due — an alternative choice", "No tax charged — an alternative choice"], 0,
    "After 75 death: £500k pot = £500k × 40% marginal rate (if higher rate) = £200k tax = £300k to heirs. Significant reduction vs. before-75 death (tax-free)."
  ),
  q("fpa-ch3-pension-death-timing-11", "cisi-fpa", "fpa-ch3", "3.7", "Death Timing", "retirement", "hard",
    "How can death benefit planning improve retirement outcomes?",
    ["All death benefits identical — an alternative choice", "Death benefits are irrelevant — an alternative choice", "Strategically using tax-free death benefits (before 75) to", "Can't plan for death — an alternative choice"], 2,
    "Advanced planning: Client age 70 with £300k pension, £600k stocks, £1m property. Pension death before 75 = tax-free £300k to heirs. Keeping pension intact and living off stocks/SP = better inheritance outcome."
  ),
  q("fpa-ch3-divorce-sharing-11", "cisi-fpa", "fpa-ch3", "3.8", "Divorce Sharing", "retirement", "medium",
    "What happens to pension contributions made during marriage in a divorce settlement?",
    ["Family court typically orders sharing of", "All contributions belong to pension owner — an alternative choice", "All pensions shared equally — an alternative choice", "Spouse gets nothing — an alternative choice"], 0,
    "Pension sharing logic: Couple married 20 years, both contributed to growth. Court often orders 50% of growth during marriage shared, not all contributions."
  ),
  q("fpa-ch3-tax-free-lump-sum-11", "cisi-fpa", "fpa-ch3", "3.9", "Tax-Free Lump Sum", "retirement", "easy",
    "What is the tax-free lump sum (TFLS) in pension rules?",
    ["No tax at all — an alternative choice", "25% of pension pot can be withdrawn tax-free at", "50% is tax-free — an alternative choice", "No lump sum available — an alternative choice"], 1,
    "TFLS: £400k pension = £100k tax-free, £300k taxable. Common use: pay off mortgage (£200k) using TFLS (£100k) + drawdown (£100k)."
  ),
  q("fpa-ch3-tax-free-lump-sum-12", "cisi-fpa", "fpa-ch3", "3.9", "Tax-Free Lump Sum", "retirement", "medium",
    "Should a retiree always take the full TFLS at retirement?",
    ["Not necessarily; if no immediate need, keeping", "TFLS doesn't help — an alternative choice", "Yes, always — an alternative choice", "Never take TFLS — an alternative choice"], 0,
    "Strategy: Retire age 65, State Pension £12k/year (basic rate band). Taking £100k TFLS = £12k + £100k = £112k (in 40% band on £100k). Better to defer TFLS, take drawdown as needed in lower band."
  ),
  q("fpa-ch3-tax-free-lump-sum-13", "cisi-fpa", "fpa-ch3", "3.9", "Tax-Free Lump Sum", "retirement", "hard",
    "How can deferring the TFLS benefit higher-rate retirees?",
    ["Deferral always costs tax — an alternative choice", "No impact on tax — an alternative choice", "If taking TFLS + other income", "No benefit to deferring — an alternative choice"], 2,
    "Example: Retiree earning £80k salary (at 40% threshold). Taking £100k TFLS immediately triggers 40% tax on overlap. Strategy: work 1 more year, then retire and take TFLS in lower-income year."
  ),
  q("fpa-ch3-sbp-bsp-comparison-11", "cisi-fpa", "fpa-ch3", "3.2", "Basic vs. New SP", "retirement", "medium",
    "What is the key difference between Basic State Pension (BSP) and New State Pension (NSP)?",
    ["No differences — an alternative choice", "Same requirements — an alternative choice", "BSP: linked to National Insurance, has", "Identical benefits — an alternative choice"], 2,
    "BSP vs. NSP: BSP complex, earnings-related. NSP simpler, flat amount, but needs 35 years vs. 30 for BSP. Roughly equivalent value."
  ),
  q("fpa-ch3-nics-credits-11", "cisi-fpa", "fpa-ch3", "3.2", "NI Credits", "retirement", "medium",
    "How do National Insurance credits help build State Pension entitlement?",
    ["Credits reduce SP — an alternative choice", "Only paid contributions count — an alternative choice", "Credits don't help — an alternative choice", "Credits (for unemployment, carers, child benefit years) count"], 3,
    "Credits example: Care 5 years (child benefit age 0-5) = 5 qualifying years credited. Unemployed 2 years = 2 credited years. Total contribution record improved without payments."
  ),
  q("fpa-ch3-nics-contribution-11", "cisi-fpa", "fpa-ch3", "3.2", "NI Contributions", "retirement", "medium",
    "What are the employee and employer National Insurance contributions for 2025-26?",
    ["Employee: 8% on earnings £12,570-£50,270", "Fixed rate 10% — a financial measure", "No contributions required — an alternative choice", "Rates unknown — a financial measure"], 0,
    "NI rate example: £40k salary = £40k - £12,570 = £27,430 × 8% = £2,194 employee NI + employer NI ~£3,700. Funds state benefits."
  ),
  q("fpa-ch3-pension-projections-11", "cisi-fpa", "fpa-ch3", "3.1", "Pension Projections", "retirement", "medium",
    "How accurate are retirement projections?",
    ["Projections are estimates based on assumptions", "Predictions certain — an alternative choice", "Projections useless — an alternative choice", "Perfectly accurate — a financial measure"], 0,
    "Projection caveat: Assumes 5% returns but actual could be 2% or 8%. Useful for comparison ('if save £500/month, likely reach £400k') not precision."
  ),
  q("fpa-ch3-pension-statements-11", "cisi-fpa", "fpa-ch3", "3.1", "Annual Statements", "retirement", "medium",
    "What information should an annual pension statement provide?",
    ["Can be minimal — an alternative choice", "No information needed — an alternative choice", "Only fund value — an alternative choice", "Current fund value, contributions paid, fund growth,"], 3,
    "Statement should show: £300k fund, 5% growth = £15k gain this year, projected £600k at 65. Helps client track progress toward goals."
  ),
  q("fpa-ch4-annuity-purchase-timing-11", "cisi-fpa", "fpa-ch4", "4.1", "Annuity Timing", "solutions", "medium",
    "When is the best time to purchase an annuity?",
    ["Age 60 is always best — an alternative choice", "All times equivalent — an alternative choice", "Rates vary with interest rates (gilt yields)", "Timing doesn't matter — an alternative choice"], 2,
    "Rate environment: 2008 rates high (£500k = £20k). 2020 rates low (£500k = £12k). Same age/health, 40% income difference. Timing matters significantly."
  ),
  q("fpa-ch4-annuity-medical-impairment-11", "cisi-fpa", "fpa-ch4", "4.1", "Impaired Life Annuity", "solutions", "medium",
    "What is an impaired life annuity?",
    ["Annuity offering higher income if applicant has medical condition", "Medical conditions reduce income — an alternative choice", "Impairment doesn't affect annuities — an alternative choice", "Standard annuity for all — an alternative choice"], 0,
    "Impaired life: Standard annuity £500k = £15k/year (life exp. 85). Diabetic client (reduced life exp. 78) = £18k/year on same pot. Higher income due to shorter expected payout."
  ),
  q("fpa-ch4-income-needs-analysis-11", "cisi-fpa", "fpa-ch4", "4.2", "Income Needs", "solutions", "medium",
    "How should advisers determine the retirement income requirement?",
    ["Guess — an alternative choice", "No analysis needed — an alternative choice", "Review current spending, identify fixed expenses vs", "Use fixed percentage — an alternative choice"], 2,
    "Income analysis: Current spend £60k/year. Retirement adjust: minus £5k commute/clothes, plus £8k travel = £63k needed. Over 30 years, with inflation = higher absolute numbers."
  ),
  q("fpa-ch4-pension-commencement-lump-sum-11", "cisi-fpa", "fpa-ch4", "4.3", "Pension Commencement Lump Sum", "solutions", "medium",
    "What is Pension Commencement Lump Sum (PCLS)?",
    ["One-time drawdown — an alternative choice", "Annuity payment — an alternative choice", "Annual income — an alternative choice", "Lump sum taken at retirement from pension pot"], 3,
    "PCLS usage: £400k pot = £100k PCLS (tax-free). Use to pay mortgage (£100k), then drawdown funds income. Common strategy."
  ),
  q("fpa-ch4-annuity-escalation-rate-11", "cisi-fpa", "fpa-ch4", "4.1", "Escalation Rate", "solutions", "hard",
    "How does choosing an escalation rate (e.g., 2%, 3%, 5% annual increases) affect annuity cost?",
    ["All rates identical — a financial measure", "Higher escalation rates reduce starting income", "No cost difference — an alternative choice", "Escalation is free — an alternative choice"], 1,
    "Comparison: £500k buys level annuity £15k/year. With 3% escalation, starts at £12k (lower immediately) but rises to £18k by year 10. Cost difference ~15%."
  ),
  q("fpa-ch4-drawdown-vs-annuity-11", "cisi-fpa", "fpa-ch4", "4.2", "Drawdown vs Annuity", "solutions", "hard",
    "What are the main advantages and disadvantages of drawdown vs. annuity?",
    ["Drawdown always better — an alternative choice", "Drawdown: flexibility, inheritance,", "Annuity always better — an alternative choice", "Both identical — an alternative choice"], 1,
    "Drawdown pros: flexibility, keep £400k invested (potential growth), inheritance tax-free. Cons: investment risk, market timing, decisions needed. Annuity pros: certainty. Cons: less income, no inflation typically, no flexibility."
  ),
  q("fpa-ch4-defined-ambition-11", "cisi-fpa", "fpa-ch4", "4.9", "Defined Ambition", "solutions", "hard",
    "What is Defined Ambition (DA) scheme?",
    ["Similar to DC schemes — an alternative choice", "Pure DB approach — an alternative choice", "DA hybrid: employee and employer contribute (like", "Rare in UK — an alternative choice"], 2,
    "DA advantage: Employer contributes to reach target benefit (e.g., £20k/year), but if investments underperform, benefit may adjust rather than employer funding shortfall. Shares risk."
  ),
  q("fpa-ch5-advisory-vs-execution-only-11", "cisi-fpa", "fpa-ch5", "5.1", "Service Types", "recommendations", "easy",
    "What is the difference between advisory and execution-only services?",
    ["Advisory: adviser recommends specific products based on analysis", "Both require suitability — an alternative choice", "Identical service — an alternative choice", "No difference — an alternative choice"], 0,
    "Advisory: 'Based on analysis, recommend Fund A.' Execution-only: 'Buy Fund A' (client decides, adviser executes). Different responsibility levels."
  ),
  q("fpa-ch5-fact-finding-quality-11", "cisi-fpa", "fpa-ch5", "5.1", "Fact-Finding", "recommendations", "medium",
    "How does quality of fact-finding impact recommendation suitability?",
    ["All fact-finding equal — an alternative choice", "Fact-finding quality irrelevant — an alternative choice", "Poor fact-finding leads to unsuitable recommendations (wrong risk", "Recommendations independent of facts — an alternative choice"], 2,
    "Poor fact-finding: Adviser doesn't ask about mortgage, just sees £50k savings and recommends high-risk fund. If client has £40k mortgage, recommendation unsuitable due to low capacity."
  ),
  q("fpa-ch5-annual-review-process-11", "cisi-fpa", "fpa-ch5", "5.2", "Annual Review", "recommendations", "medium",
    "What should a comprehensive annual review include?",
    ["Portfolio performance review", "Update fund prices only — an alternative choice", "Same as last year — an alternative choice", "No documentation needed — an alternative choice"], 0,
    "Review agenda: Fund value now vs. target. Promotion received? Child born? Market moved portfolio away from target? Any costs changed? Adjustments needed?"
  ),
  q("fpa-ch5-performance-benchmarking-11", "cisi-fpa", "fpa-ch5", "5.5", "Benchmarking", "recommendations", "medium",
    "Why is benchmarking portfolio performance important?",
    ["All investments perform same — an alternative choice", "Benchmarks don't matter — an alternative choice", "Absolute returns only — a financial measure", "Comparing against relevant index (e.g., 60/40 portfolio vs"], 3,
    "Benchmarking: 60/40 portfolio returned 5% but benchmark returned 6% = underperformance = investigate (fees too high? fund manager underperforming? rebalance needed?)."
  ),
  q("fpa-ch5-tax-loss-harvesting-11", "cisi-fpa", "fpa-ch5", "5.4", "Tax Loss Harvesting", "recommendations", "hard",
    "What is tax loss harvesting and how can it improve after-tax returns?",
    ["Only for wealthy — an alternative choice", "Creates additional tax — an alternative choice", "Selling investments with losses to offset gains", "No such strategy — a financial measure"], 2,
    "Example: Gain £10k in Fund A, lose £5k in Fund B. Selling B realizes loss, offsets gain = net £5k gain (save £1k tax vs. £10k taxed). Reinvest in similar sector."
  ),
  q("fpa-ch5-fees-transparency-11", "cisi-fpa", "fpa-ch5", "5.4", "Fee Transparency", "recommendations", "medium",
    "Why must advisers clearly communicate all costs to clients?",
    ["Clients don't care — an alternative choice", "Costs are private — an alternative choice", "Costs should be unclear — an alternative choice", "Clients deserve to know total drag (adviser fees + fund"], 3,
    "Transparency example: Adviser says 0.5% fee but funds charge 1.2% = 1.7% total. Over 30 years, £200k becomes £120k instead of £180k (difference = £60k from cost!)."
  ),
  q("fpa-ch5-contingency-planning-11", "cisi-fpa", "fpa-ch5", "5.6", "Contingency Planning", "recommendations", "hard",
    "What contingency plans should be in place for major life disruptions?",
    ["Only for emergencies — an alternative choice", "Plans aren't necessary — an alternative choice", "Can't plan for disruption — an alternative choice", "Job loss plan (emergency fund 6 months), health crisis"], 3,
    "Contingency example: Client loses job. Emergency fund (6 months) covers living expenses while job hunting. Income protection covers shortfall. Plan allows recovery without asset liquidation."
  ),
  q("fpa-ch5-client-communication-11", "cisi-fpa", "fpa-ch5", "5.7", "Communication", "recommendations", "medium",
    "How should advisers communicate during market downturns?",
    ["Let clients decide alone — an alternative choice", "Avoid communication — an alternative choice", "Only contact during ups — an alternative choice", "Proactive contact: explain market"], 3,
    "Downturn communication: '2008-style crash feels scary, but your 60/40 portfolio historically recovers within 3-4 years. Selling now locks losses. Stay the course.' Prevents emotional decisions."
  ),
  q("fpa-ch5-portfolio-drift-monitoring-11", "cisi-fpa", "fpa-ch5", "5.3", "Portfolio Drift", "recommendations", "medium",
    "What percentage of portfolio drift should trigger rebalancing?",
    ["Typically when allocation drifts 5% from target", "No drift acceptable — an alternative choice", "10% acceptable — an alternative choice", "No monitoring needed — an alternative choice"], 0,
    "Drift example: Target 60 equities/40 bonds. Market rally makes it 65/35. Rebalance to 60/40. Drift >5% usually triggers action."
  ),
  q("fpa-ch1-asset-allocation-11", "cisi-fpa", "fpa-ch1", "1.5", "Asset Allocation", "planning", "medium",
    "Why is asset allocation more important than individual stock picking?",
    ["Stock picking dominant — an alternative choice", "Stock picking is everything — an alternative choice", "Allocation doesn't matter — an alternative choice", "Historical data shows 80-90% of portfolio return comes from"], 3,
    "Academic research: A 60/40 portfolio beats 90% of active managers trying to pick 'best' stocks because allocation drives returns far more than manager skill."
  ),
  q("fpa-ch1-financial-resilience-11", "cisi-fpa", "fpa-ch1", "1.2", "Financial Resilience", "planning", "medium",
    "What constitutes a financially resilient client?",
    ["Emergency fund (3-6 months expenses), manageable debt,", "No specific requirements — an alternative choice", "High income only — an alternative choice", "Wealth alone — an alternative choice"], 0,
    "Resilient profile: £50k salary with 6-month emergency fund, income protection, mortgage protection, and flexible side income = can handle job loss/illness. Non-resilient: same salary, no reserves, no insurance."
  ),
  q("fpa-ch2-family-income-benefit-11", "cisi-fpa", "fpa-ch2", "2.4", "Family Income Benefit", "protection", "medium",
    "What is family income benefit insurance?",
    ["Lump sum payment — an alternative choice", "Provides monthly income to family until specified age", "No income element — an alternative choice", "Life insurance alternative — an alternative choice"], 1,
    "Family income benefit: £1,500/month until age 21 for £2k lump sum. More affordable than £500k life insurance for families with young children."
  ),
  q("fpa-ch3-auto-enrol-age-limits-11", "cisi-fpa", "fpa-ch3", "3.3", "Auto-Enrolment Age", "retirement", "easy",
    "Who is eligible for auto-enrolment?",
    ["All employees — an alternative choice", "All ages — an alternative choice", "Income irrelevant — an alternative choice", "Employees aged 22+ earning >£10,600 (2025-26)"], 3,
    "Auto-enrolment target: 19-year-old at £12k salary = auto-enrolled. 65-year-old = excluded (past SPA). £8k earner = excluded (below threshold)."
  ),
  q("fpa-ch4-drawdown-income-flexibility-11", "cisi-fpa", "fpa-ch4", "4.2", "Drawdown Income", "solutions", "medium",
    "How flexible are income withdrawals in pension drawdown?",
    ["All same withdrawal — an alternative choice", "No flexibility — an alternative choice", "Fixed amount only — an alternative choice", "Highly flexible: can withdraw £0 one year, £50k next year"], 3,
    "Flexibility example: Withdrawn £10k year 1, £0 year 2 (not working), £30k year 3. No restriction on pattern or amount. Ideal for variable needs."
  ),
  q("fpa-ch5-client-needs-documentation-11", "cisi-fpa", "fpa-ch5", "5.1", "Needs Documentation", "recommendations", "easy",
    "Why document client needs in writing?",
    ["Documentation irrelevant — an alternative choice", "Verbal agreement sufficient — an alternative choice", "Documentation unnecessary — an alternative choice", "Written record prevents disputes ('client said want growth' vs"], 3,
    "Written needs: 'Client wants retirement at 60 with £40k annual income, has £2k/month expenses.' Creates objective record. Without this, claims become 'he said/she said'."
  ),
  q("fpa-ch3-pension-annual-allowance-50", "cisi-fpa", "fpa-ch3", "3.2", "Pension Annual Allowance", "retirement", "medium",
    "What is the current pension annual allowance for 2025-26?",
    ["£10,000", "£40,000", "£60,000", "£50,000"], 2,
    "The annual allowance is the maximum amount that can be contributed to a pension in a tax year. For 2025-26 it is £60,000. Exceeding this triggers a tax charge on the excess."
  ),
  q("fpa-ch3-carry-forward-allowance-51", "cisi-fpa", "fpa-ch3", "3.2", "Carry Forward Allowance", "retirement", "medium",
    "How many previous years can unused annual allowance be carried forward?",
    ["10 years", "5 years", "1 year", "3 years"], 1,
    "Unused annual allowance can be carried forward for 3 years. If £60k allowance unused in 2022-23, 2023-24, 2024-25, client can contribute £60k + £60k + £60k + £60k in 2025-26 (total £240k)."
  ),
  q("fpa-ch3-mpaa-definition-52", "cisi-fpa", "fpa-ch3", "3.2", "Money Purchase Annual Allowance", "retirement", "medium",
    "What does MPAA (Money Purchase Annual Allowance) restrict?",
    ["Total pension contributions to £20,000 where drawer access has been taken", "Auto-enrolment contributions — an alternative choice", "State pension deferral — an alternative choice", "Lifetime allowance withdrawals — an alternative choice"], 0,
    "MPAA applies after taking flexible access (drawdown/UFPLS/annuity purchase). Once triggered, contributions to DC pensions limited to £10,000 p.a. (not £60k). Essential for planning."
  ),
  q("fpa-ch3-tax-relief-at-source-53", "cisi-fpa", "fpa-ch3", "3.2", "Tax Relief at Source", "retirement", "easy",
    "Under tax relief at source (TAS), who obtains the 20% relief?",
    ["Employee must claim relief — an alternative choice", "Pension provider automatically receives 20% relief from HMRC", "Employer must give relief — an alternative choice", "Relief is not available — an alternative choice"], 1,
    "TAS: Employee contributes £80, provider receives £20 from HMRC = £100 invested. Automatic and immediate. Higher-rate taxpayers must reclaim additional 20% relief themselves."
  ),
  q("fpa-ch3-net-pay-tax-relief-54", "cisi-fpa", "fpa-ch3", "3.2", "Net Pay Arrangement", "retirement", "medium",
    "What is the advantage of net pay arrangement (NPA) for higher-rate taxpayers?",
    ["Relief is deferred — an alternative choice", "Relief obtained at source through payroll", "Higher relief available — an alternative choice", "Same relief as TAS — an alternative choice"], 1,
    "NPA: Contribution via payroll before tax calculated. £80 net cost = £100 invested (20% relief), but PAYE adjusted for full £100 salary = additional 20% relief automatic. Best for 40%+ taxpayers."
  ),
  q("fpa-ch3-death-benefits-pension-55", "cisi-fpa", "fpa-ch3", "3.4", "Death Benefits", "retirement", "medium",
    "What is the tax treatment of lump sum death benefits from a registered pension scheme?",
    ["Always tax-free to beneficiaries", "Subject to 50% inheritance tax", "Fully taxable as income", "Tax-free if paid within 2 years of death"], 0,
    "Lump sum death benefits from registered pensions are tax-free to beneficiaries (spouse, children, etc). Exception: if member had accessed flexible benefits (drawdown), lump sums may be taxable after 2 years of death."
  ),
  q("fpa-ch3-pension-sharing-on-divorce-56", "cisi-fpa", "fpa-ch3", "3.3", "Pension Sharing", "retirement", "medium",
    "What is pension sharing on divorce?",
    ["Court can order member to share percentage of pension fund value", "Only annuity can be shared — an alternative choice", "Ex-spouse keeps pension in original scheme — an alternative choice", "Pension stops on divorce — an alternative choice"], 0,
    "Pension sharing: Court order allocates % of fund (e.g., 40%) to ex-spouse. Creates separate pension credit. Each party has independent pension. Common in divorce settlements post-2000."
  ),
  q("fpa-ch3-auto-enrolment-contribution-rates-57", "cisi-fpa", "fpa-ch3", "3.3", "Auto-Enrolment Rates", "retirement", "easy",
    "What is the minimum total contribution rate for auto-enrolment in 2025-26?",
    ["12%", "10%", "5%", "8%"], 3,
    "Minimum total: 8% of qualifying earnings. Employer minimum 3%, employee minimum 5%. Employers can increase both. Earnings band: £10,600-£50,270 (2025-26). Contributions only on earnings in band."
  ),
  q("fpa-ch3-auto-enrolment-staging-date-58", "cisi-fpa", "fpa-ch3", "3.3", "Auto-Enrolment Staging", "retirement", "medium",
    "What is auto-enrolment staging date?",
    ["Fixed date for all employers — an alternative choice", "Employer-specific date determined by", "Date pension scheme established — an alternative choice", "Completion date only — an alternative choice"], 1,
    "Staging date: 3-8 years after business registration. Example: Start Jan 2020 > Staging June 2023 > must auto-enrol by June 2023. Non-compliance attracts penalties."
  ),
  q("fpa-ch3-state-pension-deferral-incentive-59", "cisi-fpa", "fpa-ch3", "3.1", "State Pension Deferral", "retirement", "medium",
    "What is the deferral incentive for state pension reached after 6 April 2016?",
    ["1% extra per month (12% per year)", "Fixed 10% increase — an alternative choice", "2% extra per month — an alternative choice", "1% extra per 9 weeks (5.8% per year)"], 3,
    "New state pension deferral (post-6 April 2016): 1% increase per 9 weeks = 5.8% per 12 months. Example: defer 12 months = 5.8% higher pension. Less generous than pre-April 2016 (10.4%)."
  ),
  q("fpa-ch3-state-pension-deferral-death-60", "cisi-fpa", "fpa-ch3", "3.1", "State Pension Death Deferral", "retirement", "medium",
    "If member dies during state pension deferral (post-April 2016), what happens to deferred benefits?",
    ["Deferred benefits lost; no entitlement to lump sum", "Spouse inherits full deferred benefits", "Deferred benefits pass to spouse", "Deferred pension claimed as lump sum"], 0,
    "Post-April 2016: If death during deferral, deferred benefits are lost (no lump sum or inheritance option). Spouse can claim up to 3 months arrears only. Different from pre-April 2016 rules."
  ),
  q("fpa-ch3-state-pension-age-61", "cisi-fpa", "fpa-ch3", "3.1", "State Pension Age", "retirement", "easy",
    "What is the current state pension age for men and women born after 6 April 1978?",
    ["65", "68", "66", "67"], 3,
    "Current SPA is 66 for both. By 2028, SPA for both will be 67. By 2039, it will be 68. SPA continues to increase due to longevity. Regular reviews every 5 years."
  ),
  q("fpa-ch3-class-1-nic-employee-62", "cisi-fpa", "fpa-ch3", "3.2", "National Insurance Class 1", "retirement", "easy",
    "What is the main source of state pension entitlement for employed individuals?",
    ["Capital gains contributions — an alternative choice", "Voluntary contributions only — an alternative choice", "Class 2 NI (self-employed) — an alternative choice", "Class 1 NI (employees); contributions by employed person and"], 3,
    "Class 1 NI: Employees and employers pay. For 2025-26: employee 8% on earnings £12,570-£50,270. State pension requires 35 qualifying years (10 for some entitlement)."
  ),
  q("fpa-ch3-lifetime-allowance-abolished-63", "cisi-fpa", "fpa-ch3", "3.2", "Lifetime Allowance", "retirement", "easy",
    "What happened to the lifetime allowance for pensions?",
    ["Abolished from 6 April 2023; no upper limit on", "Reduced to £500k — an alternative choice", "Increased to £2m — an alternative choice", "Frozen at £1m — an alternative choice"], 0,
    "LTA abolished April 2023. Previously limited total pension savings to £1,073,100 (2023). Now unlimited pension saving. Removes penalty for large pots. Simplifies tax planning."
  ),
  q("fpa-ch3-pension-contributions-relief-cessation-64", "cisi-fpa", "fpa-ch3", "3.2", "Contributions After Age Limit", "retirement", "medium",
    "Can pension contributions continue after state pension age?",
    ["Yes, contributions can continue; no upper age limit for contributions", "Only employer contributions allowed — an alternative choice", "Only TAS contributions allowed — an alternative choice", "No, must stop at SPA — an alternative choice"], 0,
    "No age limit for contributions. Person aged 70 can contribute to pension (subject to AA/MPAA). Employer can contribute regardless of age. Useful for working past SPA."
  ),
  q("fpa-ch3-small-pots-lump-sum-65", "cisi-fpa", "fpa-ch3", "3.4", "Small Pots Lump Sum", "retirement", "medium",
    "What is the maximum value of a small pots lump sum?",
    ["£1,000", "£2,000", "£10,000", "£5,000"], 2,
    "Small pots lump sum: up to £10,000 per pot. Can withdraw up to 3 pots in lifetime without LTA testing or UFPLS rules. Must have reached minimum pension age. Tax treatment: 75% taxable, 25% tax-free."
  ),
  q("fpa-ch3-trivial-commutation-lump-sum-66", "cisi-fpa", "fpa-ch3", "3.4", "Trivial Commutation", "retirement", "medium",
    "What is the maximum value for a trivial commutation lump sum?",
    ["£2,000", "£50,000", "£10,000", "£30,000"], 3,
    "Trivial commutation: total pension value must be <£30,000 (DB scheme or in-house scheme pension). Criteria: member age 55+, scheme rules allow, totally extinguish benefits. Tax: 25% free, 75% taxable."
  ),
  q("fpa-ch3-uncrystallised-funds-pension-lump-sum-67", "cisi-fpa", "fpa-ch3", "3.4", "UFPLS", "retirement", "medium",
    "What is an Uncrystallised Funds Pension Lump Sum (UFPLS)?",
    ["Lump sum from uncrystallised DC pension fund", "Fixed pension income for life — an alternative choice", "State pension deferral — an alternative choice", "Annuity purchase — an alternative choice"], 0,
    "UFPLS: Member can take lump sum from uncrystallised DC pot without accessing remaining funds. 25% automatic tax relief (PCLS equivalent), 75% taxed as income. Useful pre-annuity/drawdown."
  ),
  q("fpa-ch3-serious-ill-health-lump-sum-68", "cisi-fpa", "fpa-ch3", "3.4", "Serious Ill-Health Lump Sum", "retirement", "medium",
    "What is the tax treatment of a serious ill-health lump sum?",
    ["Subject to income tax only — an alternative choice", "Fully taxable — an alternative choice", "Fully tax-free if member diagnosed with <12 months to live", "50% tax-free — an alternative choice"], 2,
    "Serious ill-health: Fully tax-free if member aged <75 with medical diagnosis of <12 months to live. Age 75+: taxed as normal income. Rare but valuable relief for terminal diagnosis."
  ),
  q("fpa-ch3-winding-up-lump-sum-69", "cisi-fpa", "fpa-ch3", "3.4", "Winding-Up Lump Sum", "retirement", "medium",
    "What is a winding-up lump sum?",
    ["Trivial commutation — an alternative choice", "Drawdown pension payment — an alternative choice", "UFPLS payment — an alternative choice", "Payment when DB occupational scheme"], 3,
    "Winding-up: Available when occupational scheme (usually DB) closes. <£18k: normal tax treatment. ≥£18k: commutation rules apply. Member must consent and benefits extinguished."
  ),
  q("fpa-ch3-pension-commencement-lump-sum-70", "cisi-fpa", "fpa-ch3", "3.4", "PCLS", "retirement", "easy",
    "What is the maximum PCLS (Pension Commencement Lump Sum)?",
    ["25% of pension value at crystallisation", "No limit — an alternative choice", "Full value if under £30,000", "50% of pension value"], 0,
    "PCLS: 25% of fund value at crystallisation is tax-free. Remaining 75% taken as income (taxable) or invested (drawdown). Standard option when accessing pension from 55."
  ),
  q("fpa-ch3-pension-flexibility-age-55-71", "cisi-fpa", "fpa-ch3", "3.2", "Pension Flexibility Age", "retirement", "easy",
    "From what age can pension flexibility (drawdown, UFPLS, annuity) be accessed?",
    ["50", "65", "60", "55"], 3,
    "Age 55: Minimum pension access age (rising to 57 from 6 April 2028). Member can access DC pension via drawdown, UFPLS, annuity, or PCLS from age 55. DB schemes follow their own rules (often later)."
  ),
  q("fpa-ch3-pension-freedoms-2015-72", "cisi-fpa", "fpa-ch3", "3.2", "Pension Freedoms", "retirement", "medium",
    "What major change was introduced by pension freedoms in 2015?",
    ["Removed requirement to buy annuity;", "DB schemes replaced with DC — an alternative choice", "Auto-enrolment introduced — an alternative choice", "State pension raised to £10k per year — an alternative choice"], 0,
    "Pension freedoms (6 April 2015): Removed annuity requirement. Introduced drawdown, UFPLS, flexible withdrawals. Member choice paramount. Changed retirement planning significantly."
  ),
  q("fpa-ch3-defined-benefit-transfer-scams-73", "cisi-fpa", "fpa-ch3", "3.3", "DB Transfer Risk", "retirement", "hard",
    "What is a key risk when advising on defined benefit pension transfers?",
    ["State pension reduction — an alternative choice", "Employer contribution increase — an alternative choice", "Fixed contribution rates — a financial measure", "Loss of guaranteed income (DB pension provides certainty"], 3,
    "DB transfer risk: Member losing guaranteed income (e.g., £20k p.a. for life) to access lump sum. Investment risk, inflation risk, longevity risk now on member. Scams target elderly via free pension reviews (cold calls)."
  ),
  q("fpa-ch3-pension-sharing-court-order-74", "cisi-fpa", "fpa-ch3", "3.3", "Pension Sharing Court Order", "retirement", "medium",
    "What is required for pension sharing on divorce?",
    ["Both parties' written consent — an alternative choice", "Pension provider agreement — an alternative choice", "Court order implementing Matrimonial", "Mutual agreement only — an alternative choice"], 2,
    "Pension sharing: Requires Matrimonial Causes Act court order (not just agreement). Order specifies %, fund value, scheme details. Ex-spouse receives pension credit. Binding on pension provider."
  ),
  q("fpa-ch3-pension-offsetting-divorce-75", "cisi-fpa", "fpa-ch3", "3.3", "Pension Offsetting", "retirement", "medium",
    "What is pension offsetting in divorce settlements?",
    ["Pension value split equally — an alternative choice", "Member keeps pension; ex-spouse receives lump sum from other", "Pension written off — an alternative choice", "Pension transferred entirely — an alternative choice"], 1,
    "Offsetting: Alternative to pension sharing. Example: Pension worth £400k, house worth £500k. Member keeps pension, ex-spouse gets £400k from house sale (offset against pension value). Simpler but ex-spouse loses pension's growth."
  ),
  q("fpa-ch3-occupational-pension-transfer-76", "cisi-fpa", "fpa-ch3", "3.3", "Occupational Pension Transfer", "retirement", "hard",
    "What is a transfer value in an occupational pension scheme?",
    ["Investment return — a financial measure", "Employer contribution rate — a financial measure", "Cash equivalent of pension benefits member can transfer", "Annual benefit amount — an alternative choice"], 2,
    "Transfer value: Cash amount scheme will pay if member transfers out. DB scheme calculates based on accrued benefits, age, life expectancy. Contractedly-out: protected rights portion must transfer separately."
  ),
  q("fpa-ch3-contracted-out-history-77", "cisi-fpa", "fpa-ch3", "3.1", "Contracted Out", "retirement", "medium",
    "What is contracted-out status and why is it relevant?",
    ["Historical: pre-2016 members could", "Current arrangement — an alternative choice", "Auto-enrolment alternative — an alternative choice", "Benefit reduction mechanism — an alternative choice"], 0,
    "Contracted-out (ended 6 April 2016): Members in DB/COMP could opt out of additional state pension. Scheme liability for contracted-out rights. Now obsolete but many pensions still have contracted-out liabilities."
  ),
  q("fpa-ch3-earmarking-pension-divorce-78", "cisi-fpa", "fpa-ch3", "3.3", "Earmarking", "retirement", "medium",
    "What is earmarking in the context of pensions and divorce?",
    ["Pension offsetting — an alternative choice", "Transfer value locking — an alternative choice", "Historic method (pre-2000): court could earmark portion", "Automatic pension sharing — an alternative choice"], 2,
    "Earmarking (pre-Welfare Reform Act 1999): Court could earmark %, but ex-spouse had no independent right; revoked on member's death. Replaced by pension sharing (post-2000). Still exists for pre-2000 orders."
  ),
  q("fpa-ch3-pension-income-splitting-79", "cisi-fpa", "fpa-ch3", "3.4", "Income Splitting", "retirement", "medium",
    "Can pension income be split between spouses for tax planning?",
    ["Income attributed to recipient/member only; no income splitting for tax", "Income attributed entirely to pension holder — an alternative choice", "Voluntary split option — an alternative choice", "Mandatory equal split — an alternative choice"], 0,
    "No income splitting: Pension income taxed on member receiving it. Spouses have separate personal allowances. Spouse A's £12,570 allowance separate from Spouse B's. Any gift between spouses non-taxable."
  ),
  q("fpa-ch3-flexible-drawdown-mpaa-trigger-80", "cisi-fpa", "fpa-ch3", "3.4", "MPAA Trigger", "retirement", "hard",
    "When is MPAA triggered and what is the limit after trigger?",
    ["Triggered at age 55 — an alternative choice", "Triggered at death — an alternative choice", "Triggered on retirement — an alternative choice", "Triggered when member takes flexible access"], 3,
    "MPAA trigger: Any flexible income withdrawal (drawdown payment, UFPLS, annuity purchase) triggers MPAA. Post-trigger: max £10k p.a. to DC schemes. Applies immediately. No opt-out. Affects retirement planning."
  ),
  q("fpa-ch3-investment-pathways-rules-81", "cisi-fpa", "fpa-ch3", "3.4", "Investment Pathways", "retirement", "medium",
    "What are investment pathways in drawdown?",
    ["Mandatory allocations — an alternative choice", "Fixed investment allocation — an alternative choice", "4 risk-based pathways (Cautious, Balanced, Growth, Adventurous)", "Pension provider portfolios only — an alternative choice"], 2,
    "Investment pathways: 4 default glidepaths for inactive members in drawdown. Cautious (bonds), Balanced (60/40), Growth (equities), Adventurous (high equity). FCA requirement pre-Sept 2023. Members can opt out or transfer."
  ),
  q("fpa-ch3-pension-protection-fund-82", "cisi-fpa", "fpa-ch3", "3.3", "Pension Protection Fund", "retirement", "medium",
    "What is the role of the Pension Protection Fund (PPF)?",
    ["Safety net: pays benefits if occupational DB scheme fails", "Manages state pension — an alternative choice", "Authorises pension schemes — an alternative choice", "Promotes occupational pensions — an alternative choice"], 0,
    "PPF: Covers ~160 occupational DB schemes in deficit. Pays members/pensioners up to 90% of accrued benefit if employer insolvent. Funded by residual assets + levy on schemes (0.29% max 2025-26)."
  ),
  q("fpa-ch3-defined-contribution-regulation-83", "cisi-fpa", "fpa-ch3", "3.3", "DC Regulation", "retirement", "easy",
    "Who regulates defined contribution pension schemes?",
    ["PensionsRegulator and FCA (dual regulation) — an alternative choice", "Employers only — an alternative choice", "PensionsRegulator oversees governance, funding, security", "Treasury only — an alternative choice"], 2,
    "Dual regulation: TPR (governance, admin, funding), FCA (product conduct, investment management). Master trust schemes (NEST, The People's Pension) face additional checks. Enhanced regulation post-2015."
  ),
  q("fpa-ch3-fiduciary-duty-pension-84", "cisi-fpa", "fpa-ch3", "3.1", "Fiduciary Duty", "retirement", "medium",
    "What is the primary fiduciary duty of pension trustees?",
    ["Minimize employer contributions — an alternative choice", "Equal treatment of all members — an alternative choice", "Maximize investment returns — a financial measure", "Act in best interests of beneficiaries;"], 3,
    "Trustee duty: Act for beneficiaries' best interests, not employers'. Manage assets prudently. Follow trust deed. Comply with law. If breach, trustee liable for losses. DC trustees appoint administrator for day-to-day."
  ),
  q("fpa-ch3-master-trust-scheme-85", "cisi-fpa", "fpa-ch3", "3.3", "Master Trust Schemes", "retirement", "medium",
    "What is a master trust pension scheme?",
    ["Self-invested pension — an alternative choice", "Multi-employer scheme run by", "Single employer scheme — an alternative choice", "Occupational scheme — an alternative choice"], 1,
    "Master trust: Single trustee, multiple employers (unrelated), typically DC auto-enrolment. Professional trustee, low costs. Must be TPR-authorised (from 2018). Failure risk covered by PPF successor."
  ),
  q("fpa-ch3-pension-charges-monitoring-86", "cisi-fpa", "fpa-ch3", "3.4", "Pension Charges", "retirement", "medium",
    "What annual management charge (AMC) should financial advisers monitor for DC pensions?",
    ["No charges allowed — an alternative choice", "Unlimited charges — an alternative choice", "FCA guidance: default funds typically", "Capped at 0.1% — an alternative choice"], 2,
    "Charge monitoring: Over 30 years, 1% AMC vs 0.5% AMC = significant difference. £100k invested: 1% = £60k cost over time. FCA expects fair value; excessive charges undermine returns."
  ),
  q("fpa-ch3-pension-value-transfer-87", "cisi-fpa", "fpa-ch3", "3.3", "Transfer Value", "retirement", "hard",
    "What factors affect a pension transfer value?",
    ["Investment performance only — an alternative choice", "Member age alone — an alternative choice", "Member age, scheme funding level,", "Scheme type only — an alternative choice"], 2,
    "Transfer value calculation: Actuarial. Affected by: member age, accrual rate, scheme assumptions, interest rates, health. Low interest rates = higher TVs. Member must take transfer advice if TV >£30k (since Jan 2021)."
  ),
  q("fpa-ch3-pension-death-benefits-inheritance-88", "cisi-fpa", "fpa-ch3", "3.4", "Death Benefit Nomination", "retirement", "medium",
    "How are pension death benefits distributed if no nomination form is completed?",
    ["To legal estate — an alternative choice", "Automatically to spouse — an alternative choice", "At discretion of trustees (subject to inheritance tax rules)", "Lost to scheme — an alternative choice"], 2,
    "No nomination: Trustees decide at discretion. Often spouse/children, but not guaranteed. Estate rules/intestacy don't apply (pension outside estate). Written nomination strongly advised; regular review essential."
  ),
  q("fpa-ch3-pension-recycling-rules-89", "cisi-fpa", "fpa-ch3", "3.2", "Pension Recycling", "retirement", "hard",
    "What is pension recycling and why is it restricted?",
    ["Converting pension withdrawal to new contribution", "Investment switching — an alternative choice", "Legal tax planning — an alternative choice", "Mandatory contribution restructure — an alternative choice"], 0,
    "Pension recycling: Withdraw UFPLS (25% tax-free), recontribute (20% relief). If HMRC identifies intentional pattern, recontribution treated as unauthorised payment. Penalties apply. Not outright ban but high-risk."
  ),
  q("fpa-ch3-pension-income-drawdown-sustainability-90", "cisi-fpa", "fpa-ch3", "3.4", "Sustainable Withdrawal Rate", "retirement", "hard",
    "What withdrawal rate is generally considered sustainable for a long-term drawdown pension?",
    ["10% per year — an alternative choice", "1% per year — an alternative choice", "4% rule (or lower); based on historical data", "No withdrawal safe — an alternative choice"], 2,
    "4% rule (Bengen): Historical data suggests 4% annual withdrawal sustainable over 30 years with 60/40 portfolio. Lower rates safer. FCA concerned 8%+ rates unsustainable. Depends on asset allocation, longevity."
  ),
  q("fpa-ch3-pension-lump-sum-commutation-frequency-91", "cisi-fpa", "fpa-ch3", "3.4", "Lump Sum Limits", "retirement", "medium",
    "How often can a small pots lump sum be withdrawn from the same scheme?",
    ["Multiple times per pot — an alternative choice", "Once only — an alternative choice", "Annually without limit — an alternative choice", "Once per pot (up to 3 pots lifetime total)"], 3,
    "Small pots: Up to 3 separate pots (max £10k each). Once all 3 withdrawn, member must access remaining funds via drawdown/annuity. Designed for members with multiple small pensions (job changers)."
  ),
  q("fpa-ch3-pension-death-tax-relief-92", "cisi-fpa", "fpa-ch3", "3.4", "Death Tax Relief", "retirement", "medium",
    "If a pension member dies before reaching state pension age, what is the IHT treatment?",
    ["Lump sum death benefits tax-free for IHT purposes (outside estate)", "Fully taxable — an alternative choice", "50% taxable — an alternative choice", "Subject to 40% inheritance tax — an alternative choice"], 0,
    "Death pre-SPA: Lump sum benefits outside taxable estate (not subject to IHT). Spouse exemption may apply. Income drawdown remaining: tax-free on death if member hadn't accessed (or within 2 years of death)."
  ),
  q("fpa-ch3-pension-scheme-administration-93", "cisi-fpa", "fpa-ch3", "3.1", "Pension Administration", "retirement", "easy",
    "What is the primary responsibility of a pension scheme administrator?",
    ["Regulatory approval — an alternative choice", "Day-to-day operations: process contributions, pay", "Scheme governance — an alternative choice", "Investment management — an alternative choice"], 1,
    "Administrator role: Non-trustee; operational. Receives employer/employee contributions, applies scheme rules, pays benefits, sends statements, maintains records. TPR oversees compliance."
  ),
  q("fpa-ch3-pension-contributions-employment-cessation-94", "cisi-fpa", "fpa-ch3", "3.3", "Contributions After Cessation", "retirement", "medium",
    "Can an employee continue making pension contributions after leaving employment?",
    ["Yes, can continue via transfers (to personal pension) or direct", "Contributions become automatic — an alternative choice", "No, contributions must cease — an alternative choice", "Only employer can contribute — an alternative choice"], 0,
    "Post-employment: Can transfer to personal pension and continue. Can pay direct to new personal pension. Self-employed can contribute to own pension. No forced stoppage; flexibility available."
  ),
  q("fpa-ch3-pension-benefits-inheritance-spouse-95", "cisi-fpa", "fpa-ch3", "3.4", "Spouse Survivor Benefits", "retirement", "medium",
    "What survivor benefits are typically available to a spouse if member dies in drawdown?",
    ["Nominated beneficiary (spouse) can inherit remaining fund", "Fixed annuity continues — an alternative choice", "Pension stops entirely — an alternative choice", "Benefits pass to state — an alternative choice"], 0,
    "Spouse inheritance: Remaining drawdown fund passes to nominated beneficiary (typically spouse). Death age <75: normally tax-free lump sum. Age 75+: taxed as income. Alternatively, spouse can continue drawdown."
  ),
  q("fpa-ch3-pension-annual-statement-96", "cisi-fpa", "fpa-ch3", "3.1", "Annual Pension Statement", "retirement", "easy",
    "What must an annual pension statement include?",
    ["Investment options only — an alternative choice", "No regulatory requirement — an alternative choice", "Fund value, projected retirement income at", "Fund value, projected retirement income, member details, AUM charges — an alternative choice"], 2,
    "Statutory statement: Fund value, growth estimate, projected income, charges breakdown, contact details. FCA rules: COBS 7R.1. Sent by scheme/provider. Post-April 2020: contains KID summary."
  ),
  q("fpa-ch3-pension-provider-insolvency-97", "cisi-fpa", "fpa-ch3", "3.3", "Provider Insolvency", "retirement", "medium",
    "What protection exists if a personal pension provider becomes insolvent?",
    ["FSCS (Financial Services Compensation Scheme) covers up to £85,000 per customer", "No protection available — an alternative choice", "Full refund guaranteed — an alternative choice", "Assets transferred automatically — an alternative choice"], 0,
    "FSCS protection: Up to £85k per person per provider. If provider insolvent, FSCS pays out. Essential for advisers to check provider authorisation/FSCS status. Not all providers covered (e.g., unregulated)."
  ),
  q("fpa-ch3-pension-loss-claim-time-98", "cisi-fpa", "fpa-ch3", "3.1", "Pension Loss Time Limit", "retirement", "medium",
    "How long do clients have to claim for unsuitable pension advice?",
    ["No time limit — an alternative choice", "6 years from loss discovery (if concealed)", "3 years only — an alternative choice", "1 year — an alternative choice"], 1,
    "Time limit: Typically 6 years (Limitation Act 1980) from loss discovery. If provider/adviser concealed facts, extended. DB transfer advice claims often 6+ years due to delayed harm discovery."
  ),
  q("fpa-ch3-pension-dashboard-requirements-99", "cisi-fpa", "fpa-ch3", "3.1", "Pension Dashboard", "retirement", "easy",
    "What is the Pension Dashboard and what is its purpose?",
    ["Investment fund selector — an alternative choice", "Stock market tracker — an alternative choice", "Tax calculator only — an alternative choice", "Central repository to view all pensions (state,"], 3,
    "Pension Dashboard: Government initiative. Members view all pension pots online. Encourages consolidation decisions. Addresses 'lost pensions' issue (estimated £20bn). Mandatory for providers (phased from 2024)."
  ),
  q("fpa-ch3-pension-charge-cap-default-100", "cisi-fpa", "fpa-ch3", "3.4", "Default Fund Charge Cap", "retirement", "medium",
    "What charge cap applies to workplace pension default funds?",
    ["0.75% p.a. (maximum AMC + all charges)", "1.5% p.a. — an alternative choice", "0.1% per annum — an alternative choice", "No cap — an alternative choice"], 0,
    "Charge cap: 0.75% max for auto-enrolment defaults (post-2012). Protects members from excessive charges eroding returns. Master trusts average 0.4-0.6%. High-charge schemes non-compliant with FCA expectations."
  ),
  q("fpa-ch4-annuity-certainty-101", "cisi-fpa", "fpa-ch4", "4.2", "Annuity Features", "solutions", "easy",
    "What is the key advantage of a lifetime annuity?",
    ["High initial income — an alternative choice", "Guaranteed income for life; eliminates", "Bequeathability — an alternative choice", "Investment flexibility — an alternative choice"], 1,
    "Annuity advantage: Guaranteed income (e.g., £10k p.a. age 65-death). Member cannot outlive income. Insurance company bears longevity risk. Useful for members risk-averse or low life expectancy."
  ),
  q("fpa-ch4-annuity-rates-purchase-age-102", "cisi-fpa", "fpa-ch4", "4.2", "Annuity Rate Factors", "solutions", "medium",
    "What factors affect annuity rates at purchase?",
    ["Member age (older = higher rate), gender (if pre-April 2015),", "Investment returns only — a financial measure", "Inflation only — an economic condition", "Life expectancy uniformly applied — an alternative choice"], 0,
    "Annuity rate determinants: Age (65 vs 60 = 20%+ rate difference), health (impaired = higher rate), interest rates (higher rates = higher annuity rate), fund size (larger = better rate)."
  ),
  q("fpa-ch4-joint-annuity-survivor-103", "cisi-fpa", "fpa-ch4", "4.2", "Joint Annuity", "solutions", "medium",
    "What is a joint annuity and how does survivor benefit work?",
    ["Guaranteed period only — an alternative choice", "Single life annuity — an alternative choice", "Income continues to surviving spouse at specified %", "Life annuity only — an alternative choice"], 2,
    "Joint annuity: Income age 65 (£10k) reduces after member's death (e.g., 75% joint = £7.5k to spouse for life). Couples can choose % continuation. Initial rate lower than single life."
  ),
  q("fpa-ch4-escalating-annuity-inflation-104", "cisi-fpa", "fpa-ch4", "4.2", "Escalating Annuity", "solutions", "medium",
    "How does an escalating annuity protect against inflation?",
    ["Lump sum adjustment — an alternative choice", "Fixed payment every year — an alternative choice", "No inflation protection — an economic condition", "Income increases annually (fixed % or RPI)"], 3,
    "Escalating annuity example: Start £8k (escalating 3% p.a.) vs £10k (flat). After 10 years: escalating = £10.4k, flat = £10k. Trade-off: lower initial income but protected long-term."
  ),
  q("fpa-ch4-guaranteed-period-annuity-105", "cisi-fpa", "fpa-ch4", "4.2", "Guaranteed Period", "solutions", "easy",
    "What is a guaranteed period in an annuity contract?",
    ["Investment guarantee", "Lifetime guarantee", "Fixed contract term", "Minimum payment period (e.g., 5/10 years); if member dies before period end, remaining payments continue to beneficiary (not lost)"], 2,
    "Guaranteed period: Death age 68 with 10-year guarantee means beneficiary receives remaining 7 years of payments. Without guarantee, all payments cease at death. Costs slightly more but provides security."
  ),
  q("fpa-ch4-with-profits-annuity-106", "cisi-fpa", "fpa-ch4", "4.2", "With-Profits Annuity", "solutions", "medium",
    "What are with-profits annuities and how do they differ from conventional annuities?",
    ["Conventional rate guaranteed", "Unit-linked returns — a financial measure", "No investment element — an alternative choice", "Fixed rate guarantee — a financial measure"], 0,
    "With-profits: Guaranteed base rate + annual bonuses from fund surplus (smoothed). Example: £10k guaranteed + 0.5% bonus = £10.05k (depends on fund performance). More complex than conventional."
  ),
  q("fpa-ch4-unit-linked-annuity-107", "cisi-fpa", "fpa-ch4", "4.2", "Unit-Linked Annuity", "solutions", "hard",
    "What is a unit-linked annuity and what risk does it involve?",
    ["Fixed income annuity — an alternative choice", "Guaranteed return — a financial measure", "Income linked to investment fund performance (varies monthly)", "No investment link — an alternative choice"], 2,
    "Unit-linked: Income varies with fund. Market boom = higher payment. Market crash = lower payment. Riskier than conventional but potential for growth-linked income. Requires risk tolerance."
  ),
  q("fpa-ch4-short-term-annuity-108", "cisi-fpa", "fpa-ch4", "4.2", "Short-Term Annuity", "solutions", "medium",
    "What is a short-term annuity and when is it useful?",
    ["Fixed-term income (e.g., 5 years); then fund remaining", "Stopgap arrangement — an alternative choice", "Temporary insurance — an alternative choice", "Fixed for less than 5 years — an alternative choice"], 0,
    "Short-term annuity: Age 60 with small pot (£50k) = £10k p.a. for 5 years, then reassess. Useful bridge to SPA (age 67). Allows interest rate timing (buy annuity later if rates rise)."
  ),
  q("fpa-ch4-flexible-annuity-mpaa-109", "cisi-fpa", "fpa-ch4", "4.2", "Flexible Annuity", "solutions", "hard",
    "What is a flexible annuity and why does it trigger MPAA?",
    ["Standard annuity option — an alternative choice", "Annuity allowing income reduction (not typical", "Income escalation only — an alternative choice", "Investment flexibility — an alternative choice"], 1,
    "Flexible annuity: Can decrease income (not typical). Once purchased, MPAA triggered = no more £60k AA contributions allowed (only £10k p.a. to DC). Very rare; usually conventional/with-profits/unit-linked."
  ),
  q("fpa-ch4-impaired-life-annuity-110", "cisi-fpa", "fpa-ch4", "4.2", "Impaired Life Annuity", "solutions", "medium",
    "What is an impaired life annuity?",
    ["Annuity for poor savers — an alternative choice", "Standard annuity for all — an alternative choice", "Underwriting failure — an alternative choice", "Enhanced annuity available to members with health"], 3,
    "Impaired life: Member with serious health (smoking, cancer history, obesity) qualifies for higher rate. Example: Standard £10k, impaired £12k. Requires medical evidence. Underwriting stringent."
  ),
  q("fpa-ch4-enhanced-annuity-lifestyle-factors-111", "cisi-fpa", "fpa-ch4", "4.2", "Enhanced Annuity", "solutions", "medium",
    "What lifestyle factors can trigger an enhanced annuity?",
    ["Only health conditions — an alternative choice", "None; no lifestyle factors apply — an alternative choice", "Smoking (major factor), occupation, postcode, alcohol consumption, family history", "Only occupation — an alternative choice"], 2,
    "Enhanced factors: Smoker add 15-20% to rate. Heavy alcohol use. Certain postcodes (health deprivation linked). Family history of early death. All accepted risk factors for insurers."
  ),
  q("fpa-ch4-pension-drawdown-mechanics-112", "cisi-fpa", "fpa-ch4", "4.3", "Drawdown Basics", "solutions", "easy",
    "How does pension drawdown work?",
    ["All withdrawals tax-free — an alternative choice", "Annuity alternative — an alternative choice", "Fixed pension payment — an alternative choice", "Member receives 25% PCLS tax-free, remaining fund invested"], 3,
    "Drawdown: Age 55, fund £100k. Take £25k tax-free, invest £75k. Withdraw £10k = taxed as income. Remaining £65k invested in portfolio (can grow/fall). Full flexibility."
  ),
  q("fpa-ch4-drawdown-investment-sequencing-risk-113", "cisi-fpa", "fpa-ch4", "4.3", "Sequencing Risk", "solutions", "hard",
    "What is sequencing risk in pension drawdown?",
    ["Investment selection risk — an alternative choice", "Risk that poor investment returns early in retirement (market", "Market recovery timing — a phase of the economic cycle", "Contribution timing risk — an alternative choice"], 1,
    "Sequencing risk example: Market crash age 60 (£100k becomes £70k). Withdraw £5k = £65k remains. Never recovers fully. vs Crash age 75 (portfolio smaller) = less impact. Early crashes worse."
  ),
  q("fpa-ch4-critical-yield-concept-114", "cisi-fpa", "fpa-ch4", "4.3", "Critical Yield", "solutions", "hard",
    "What is critical yield in pension drawdown comparison?",
    ["Minimum return needed — a financial measure", "Return rate drawdown portfolio must", "Benchmark return — a financial measure", "Target rate of return — a financial measure"], 1,
    "Critical yield: Annuity £10k p.a. for life (guaranteed). Drawdown £100k fund. Critical yield = annual return needed for £100k to sustain £10k withdrawals for 30 years (~4%). If market returns <4%, annuity superior."
  ),
  q("fpa-ch4-ufpls-uncrystallised-funds-115", "cisi-fpa", "fpa-ch4", "4.3", "UFPLS Overview", "solutions", "easy",
    "What does UFPLS allow that other options restrict?",
    ["Lump sum withdrawal from uncrystallised DC fund; 25% tax-free, 75% taxable; doesn't trigger MPAA; funds remain invested", "Fixed income", "State pension access", "Annuity purchase"], 1,
    "UFPLS: Member draws £50k from £200k fund. Get £12.5k tax-free, £37.5k taxable. Remaining £150k invested. No MPAA trigger (unlike drawdown/annuity purchase). Useful for ad-hoc lump sums."
  ),
  q("fpa-ch4-capped-drawdown-critical-yield-116", "cisi-fpa", "fpa-ch4", "4.3", "Capped Drawdown", "solutions", "hard",
    "What is capped drawdown and how does critical yield apply?",
    ["Unlimited withdrawals — an alternative choice", "Withdrawals limited to % of fund (capped based on", "Fixed pension income — an alternative choice", "Annuity alternative — an alternative choice"], 1,
    "Capped drawdown (pre-April 2015): FCA set cap based on 2.5% real return assumption. Critical yield 2.5% = drawdown cap (e.g., max 8% p.a. from £100k). Now largely replaced by Flexi-access."
  ),
  q("fpa-ch4-flexi-access-drawdown-117", "cisi-fpa", "fpa-ch4", "4.3", "Flexi-Access Drawdown", "solutions", "medium",
    "What is flexi-access drawdown (FAD) and how does it differ from capped drawdown?",
    ["Capped withdrawals — an alternative choice", "Same as capped drawdown — an alternative choice", "Unlimited withdrawals from crystallised DC fund (no cap)", "Annuity equivalent — an alternative choice"], 2,
    "FAD (from April 2015): No cap on withdrawals. Member can take £50k (25% = £12.5k tax-free, £37.5k taxable) from £100k fund. Full flexibility. Replaces capped drawdown."
  ),
  q("fpa-ch4-cash-buffer-sequencing-mitigation-118", "cisi-fpa", "fpa-ch4", "4.3", "Cash Buffer Strategy", "solutions", "medium",
    "How does a cash buffer mitigate sequencing risk?",
    ["Eliminates risk entirely — an alternative choice", "Reduces market volatility — an alternative choice", "Doesn't help sequencing risk — an alternative choice", "Hold 2-3 years expenses in cash/bonds"], 3,
    "Cash buffer: Age 60, portfolio £500k. Hold £30k (3 years expenses) in cash. Market crashes 40%. Withdraw from cash, equities recover. Without buffer, forced to sell equities at loss."
  ),
  q("fpa-ch4-dynamic-spending-strategy-119", "cisi-fpa", "fpa-ch4", "4.3", "Dynamic Spending", "solutions", "medium",
    "What is a dynamic spending strategy in drawdown?",
    ["Annual rebalancing — an alternative choice", "Fixed withdrawal plan — an alternative choice", "Spending varies with portfolio", "Tax planning tool — an alternative choice"], 2,
    "Dynamic spending: £100k fund, 4% = £4k target. Market up 20% = increase to £4.8k. Market down 20% = reduce to £3.2k. Protects capital while allowing flexibility. Requires discipline."
  ),
  q("fpa-ch4-sustainable-withdrawal-4-percent-120", "cisi-fpa", "fpa-ch4", "4.3", "4% Rule", "solutions", "medium",
    "What does the 4% withdrawal rule suggest about portfolio sustainability?",
    ["5% annual withdrawal sustainable — an alternative choice", "10% achievable — an alternative choice", "4% annual withdrawal from invested portfolio sustainable for 30+", "2% only sustainable — an alternative choice"], 2,
    "4% rule (Bengen research): Withdraw 4% of portfolio in year 1 (adjust for inflation). 94% succeeded in sustaining 30-year retirement (1926-1976 data). Modern criticism: 8% withdrawal unsustainable."
  ),
  q("fpa-ch4-post-retirement-asset-allocation-121", "cisi-fpa", "fpa-ch4", "4.4", "De-Risking in Retirement", "solutions", "medium",
    "How should asset allocation typically change in retirement via drawdown?",
    ["Gradual de-risking (glide path); shift from growth", "More equity exposure — an alternative choice", "100% cash allocation — an alternative choice", "Full equity to bonds shift — an alternative choice"], 0,
    "De-risking example: Pre-retirement 80/20 (equities/bonds). Age 70: 50/50. Age 80: 30/70. Maintains capital preservation while accepting inflation risk. Prevents sequence-of-return disaster."
  ),
  q("fpa-ch4-horizon-planning-investment-pathways-122", "cisi-fpa", "fpa-ch4", "4.4", "Horizon Planning", "solutions", "hard",
    "What is horizon planning in retirement and how does it relate to investment pathways?",
    ["Segregate portfolio by timescale (1-2 years cash/bonds, 3-10 years", "Time-weighted returns — a financial measure", "Duration matching — an alternative choice", "Single investment strategy throughout — a financial measure"], 0,
    "Horizon planning (bucketing): Year 1-2 expenses in bonds (low risk). Years 3-10 in balanced (medium risk). Years 10+ in equity (growth). Reduces timing pressure, improves sustainability."
  ),
  q("fpa-ch4-dividend-income-strategy-123", "cisi-fpa", "fpa-ch4", "4.3", "Natural Income Strategy", "solutions", "medium",
    "What is a natural income strategy in drawdown?",
    ["Capital withdrawal only — an alternative choice", "Portfolio positioned for dividend/bond income", "Fixed withdrawal rate — a financial measure", "Active trading approach — an alternative choice"], 1,
    "Natural income: £500k portfolio, 4% yield = £20k income. Withdraw £20k (don't touch capital). Capital grows tax-free (in pension). Psychological comfort but may miss growth needed for inflation."
  ),
  q("fpa-ch4-phased-retirement-annuity-purchase-124", "cisi-fpa", "fpa-ch4", "4.2", "Phased Annuity Purchase", "solutions", "medium",
    "What is phased retirement using annuities?",
    ["Deferral strategy — a financial measure", "Retiring gradually — an alternative choice", "Purchase annuities incrementally (e.g., age 60, 65, 70)", "Full retirement only — an alternative choice"], 2,
    "Phased annuity: Age 60 buy £50k annuity (£5k p.a.). Age 70 buy £100k annuity (£15k p.a.). Rates may improve over time. If rates stay low, early purchase better. Mixed approach reduces timing risk."
  ),
  q("fpa-ch4-hybrid-retirement-solution-125", "cisi-fpa", "fpa-ch4", "4.2", "Hybrid Solutions", "solutions", "hard",
    "What is a hybrid retirement solution combining annuity and drawdown?",
    ["Neither approach — an alternative choice", "Allocate portion to annuity (secure base", "Annuity only — an alternative choice", "Drawdown only — an alternative choice"], 1,
    "Hybrid example: £500k fund. Buy £150k annuity = £12k p.a. guaranteed. Keep £350k in drawdown = flexibility for gifts, travel, emergencies. Best of both worlds for many retirees."
  ),
  q("fpa-ch5-suitability-report-minimum-content-126", "cisi-fpa", "fpa-ch5", "5.1", "Suitability Report Content", "recommendations", "easy",
    "What are the minimum components of a suitability report (per FCA rules)?",
    ["No specific requirement — an alternative choice", "Specified client demands/needs, reason transaction is", "Investment name only — an alternative choice", "Fund performance only — an alternative choice"], 1,
    "FCA requirement (COBS 1R.2.1R): Suitability report must specify: client demands/needs, why recommendation suitable, possible disadvantages. Protects client and adviser by documenting rationale."
  ),
  q("fpa-ch5-cashflow-modelling-inflation-127", "cisi-fpa", "fpa-ch5", "5.1", "Cashflow Modelling", "recommendations", "medium",
    "Why is inflation assumption critical in cashflow modelling?",
    ["Same as investment return — a financial measure", "Not important — an alternative choice", "Determines long-term purchasing", "Not modelled — an alternative choice"], 2,
    "Cashflow inflation: Assume £40k annual spending. 2% inflation = £60k by age 85. 4% inflation = £84k. Portfolio must generate inflation-adjusted amounts. Longevity + inflation = major planning risk."
  ),
  q("fpa-ch5-recommendation-review-frequency-128", "cisi-fpa", "fpa-ch5", "5.2", "Review Frequency", "recommendations", "medium",
    "How often should financial plans be formally reviewed?",
    ["Only on request", "Never required", "Minimum annually (per FCA MiFID II rules); more frequent if major changes (job loss, inheritance, marriage)", "Every 5 years"], 1,
    "Review requirement: COBS 6.1.5R: At least annual review. Ad-hoc reviews if material changes (£50k inheritance, redundancy, health diagnosis). Documentation essential."
  ),
  q("fpa-ch5-attitude-to-risk-questionnaire-129", "cisi-fpa", "fpa-ch5", "5.1", "ATR Documentation", "recommendations", "easy",
    "Why must attitude to risk (ATR) be formally documented?",
    ["Not necessary — an alternative choice", "Prevents disputes (written record of client's risk appetite, capacity for loss)", "Informal assessment sufficient — an alternative choice", "Verbal confirmation adequate — an alternative choice"], 1,
    "ATR documentation: Written questionnaire captures risk profile. Example: 'Client states 'medium' risk tolerance, can afford 15% annual volatility, time horizon 15 years.' Creates objective record for suitability evidence."
  ),
  q("fpa-ch5-capacity-for-loss-definition-130", "cisi-fpa", "fpa-ch5", "5.1", "Capacity for Loss", "recommendations", "medium",
    "How is capacity for loss assessed?",
    ["Risk questionnaire score — an alternative choice", "Client's willingness only — an alternative choice", "Attitude to risk only — an alternative choice", "Hard facts: income, expenses,"], 3,
    "Capacity assessment: Client £50k salary, £30k essential expenses = £20k surplus. Can afford to lose £5k (25% of surplus) without essential impact. This is capacity, distinct from willingness."
  ),
  q("fpa-ch5-cashflow-projection-longevity-132", "cisi-fpa", "fpa-ch5", "5.1", "Longevity Assumption", "recommendations", "medium",
    "What longevity assumption is appropriate for cashflow modelling?",
    ["Average life expectancy only — an alternative choice", "Plan to age 95-100 (for couples, consider longer-lived spouse)", "100% certainty — an alternative choice", "Fixed age 80 — an alternative choice"], 1,
    "Longevity planning: Age 65 male life expectancy = 84. But 25% chance reaching 95+. Model to 95-100 to avoid outliving capital. Couples should model to age 100+ (longer-lived spouse)."
  ),
  q("fpa-ch5-cost-benefit-analysis-recommendation-133", "cisi-fpa", "fpa-ch5", "5.1", "Cost-Benefit Analysis", "recommendations", "medium",
    "How should costs impact recommendation selection?",
    ["Lower cost = net benefit; 1% p.a. higher fee over 30", "Highest fee recommended — an alternative choice", "Fee comparison only — an alternative choice", "Costs irrelevant — an alternative choice"], 0,
    "Cost impact: Option A (annuity 0.75% cost), Option B (drawdown 1.5% cost). Over 30 years, Option B costs 0.75% more = £20k+ difference. Must justify cost by tangible benefit."
  ),
  q("fpa-ch5-alternative-courses-of-action-134", "cisi-fpa", "fpa-ch5", "5.1", "Alternative Recommendations", "recommendations", "hard",
    "What should be documented when no suitable product exists?",
    ["Recommend unsuitable — an alternative choice", "If no suitable product available, document alternative courses", "Abandon planning — an alternative choice", "Recommendation must be forced — an alternative choice"], 1,
    "No suitable product: Client wants £60k p.a. with £100k fund. No sustainable drawdown available. Document alternatives: work longer, reduce spending expectations, use phased approach. Do not force unsuitable recommendation."
  ),
  q("fpa-ch5-suitability-report-timing-135", "cisi-fpa", "fpa-ch5", "5.1", "Suitability Report Delivery", "recommendations", "easy",
    "When must suitability report be provided to client?",
    ["Not always required", "30 days after", "Before transaction conclusion; gives client time to review and ask questions; improves decision quality", "After transaction completion"], 3,
    "FCA timing: Before transaction (initial advice). Post-conclusion (execution-only). Documentation maintains good practice. Client signs acknowledging receipt and understanding (or declines transaction)."
  ),
  q("fpa-ch5-portfolio-rebalancing-trigger-136", "cisi-fpa", "fpa-ch5", "5.2", "Rebalancing Decisions", "recommendations", "medium",
    "What should trigger portfolio rebalancing during reviews?",
    ["Drift from target (e.g., 60/40 target becomes 55/45 or 65/35 = 5% drift)", "Annual rebalancing mandatory — an alternative choice", "Never rebalance — an alternative choice", "No trigger needed — an alternative choice"], 0,
    "Rebalancing trigger: If 60/40 target drifts 5% = 55/45 or 65/35. Typical guidance: monitor quarterly, rebalance if drift >5% or annually. Prevents over-concentration from winner stocks."
  ),
  q("fpa-ch5-risk-profile-reassessment-review-137", "cisi-fpa", "fpa-ch5", "5.2", "Risk Profile Changes", "recommendations", "medium",
    "Why should risk profile be reassessed during reviews?",
    ["Fixed at advice — an alternative choice", "Circumstances change (health diagnosis, job loss, inheritance)", "Only if client requests — an alternative choice", "Set once, never changes — an alternative choice"], 1,
    "Risk reassessment: Client age 45, medium risk, portfolio 70/30. At age 55, inheritance arrives = capacity increases. Market decline = willingness may decrease. Re-assess ATR, adjust if needed."
  ),
  q("fpa-ch5-performance-review-benchmark-comparison-138", "cisi-fpa", "fpa-ch5", "5.2", "Performance Monitoring", "recommendations", "medium",
    "What benchmark should be used to assess portfolio performance?",
    ["Relevant benchmark (e.g., 60% MSCI World + 40% Bloomberg", "Absolute return target only — a financial measure", "S&P 500 always — an alternative choice", "No benchmark needed — an alternative choice"], 0,
    "Benchmark example: 60/40 portfolio returned 5%, benchmark 6% = underperformance. Investigate: excessive fees? Underperforming manager? Rebalance overdue? Adjust allocation if persistent."
  ),
  q("fpa-ch5-life-circumstance-update-review-139", "cisi-fpa", "fpa-ch5", "5.2", "Circumstance Changes", "recommendations", "easy",
    "What life circumstances should trigger an ad-hoc review?",
    ["Only annual review — an alternative choice", "No trigger — an alternative choice", "Client never changes — an alternative choice", "Marriage/divorce, birth of child, job"], 3,
    "Life triggers: Divorce (pension sharing needed), inheritance (asset allocation change), redundancy (emergency fund depletion), health diagnosis (life expectancy reassessment). Reviews essential."
  ),
  q("fpa-ch5-recommendation-implementation-monitoring-140", "cisi-fpa", "fpa-ch5", "5.2", "Implementation Tracking", "recommendations", "medium",
    "How should adviser monitor implementation of recommendations?",
    ["No monitoring — an alternative choice", "Assume completion — an alternative choice", "Confirm each action completed; track timelines", "Client responsibility only — an alternative choice"], 2,
    "Implementation example: Action list includes 'Open ISA by March 2026'. Adviser checks in February to confirm status, helps if obstacles arise, documents completion. Accountability throughout."
  ),
  q("fpa-ch5-documentation-and-evidence-suitability-141", "cisi-fpa", "fpa-ch5", "5.1", "Suitability Evidence", "recommendations", "hard",
    "What documentation provides evidence of suitability for advice given?",
    ["Verbal discussion notes — an alternative choice", "Written fact-find (ATR/capacity documented), suitability", "Sales brochure only — an alternative choice", "No specific evidence needed — an alternative choice"], 1,
    "Suitability evidence file: Fact-find (signed), ATR questionnaire, cashflow model, suitability report, product docs, client email acceptance. FCA expects complete audit trail proving recommendation suitable."
  ),
  q("fpa-ch5-ongoing-advice-annual-review-scope-142", "cisi-fpa", "fpa-ch5", "5.2", "Annual Review Scope", "recommendations", "medium",
    "What should comprehensive annual review cover?",
    ["Fund prices only — an alternative choice", "Fund value, performance vs benchmark, life changes, goal", "No specific scope — an alternative choice", "Client satisfaction only — an alternative choice"], 1,
    "Comprehensive review: Check portfolio value (up/down?), compare performance to benchmark, ask about job/health/family changes, recalculate retirement projections with new inputs, adjust if drifted significantly."
  ),
  q("fpa-ch5-switching-funds-suitability-documentation-143", "cisi-fpa", "fpa-ch5", "5.1", "Fund Switch Suitability", "recommendations", "medium",
    "What documentation is required when switching funds during a review?",
    ["Manager approval only — an alternative choice", "Sales confirmation only — an alternative choice", "No documentation needed — an alternative choice", "Suitability report explaining reason for switch, costs"], 3,
    "Switch documentation: Current fund underperforming (5% return vs 7% benchmark). New fund matches benchmark better, same costs, compatible ATR. Suitability report justifies switch cost-benefit."
  ),
  q("fpa-ch5-tax-efficient-planning-withdrawal-strategy-144", "cisi-fpa", "fpa-ch5", "5.1", "Tax Efficiency Strategy", "recommendations", "hard",
    "How should advisers optimize tax efficiency in recommendations?",
    ["Tax optimization secondary — an alternative choice", "CG tax only — an alternative choice", "Coordinate drawdown sequencing (ISA > pension > taxable),", "Ignore tax implications — an alternative choice"], 2,
    "Tax strategy: Spouse has unused allowance. Shift income to lower-tax spouse if possible. Use ISA allowance (tax-free growth). Time CGT crystallization (£3k annual exemption). Coordinate retirement income timing."
  ),
  q("fpa-ch5-adviser-conflict-of-interest-disclosure-145", "cisi-fpa", "fpa-ch5", "5.1", "Conflict Disclosure", "recommendations", "easy",
    "How must advisers handle potential conflicts of interest?",
    ["Identify conflicts (e.g., adviser commission on Product", "Not disclosed — an alternative choice", "Verbal disclosure — an alternative choice", "Client approval assumed — an alternative choice"], 0,
    "Conflict example: Adviser receives 1% commission for Fund A but 0.5% for Fund B. Must disclose that A is more profitable for adviser. Client then decides freely (informed consent). Document."
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

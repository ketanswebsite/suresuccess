// ─── NEW UK Regulation & Professional Integrity Questions ───
// Generated to supplement existing questions

import type { BankQuestion } from "./question-bank";

function q(id: string, moduleId: string, chapterId: string, topicId: string, topic: string, categoryId: string, difficulty: "easy" | "medium" | "hard", question: string, options: string[], correctIdx: number, explanation: string): BankQuestion {
  return { id, moduleId, chapterId, topicId, topic, categoryId, difficulty, question, options, correct: correctIdx, correctAnswer: correctIdx, explanation };
}

export const REG_NEW_QUESTIONS: BankQuestion[] = [
  // ─── CHAPTER 1: The UK Financial Services Sector (35 questions) ───

  q("reg-ch1-sector-1", "cisi-reg", "reg-ch1", "1.1", "Government Economic Policy", "sector", "easy",
    "Which of the following is the primary aim of the UK government's economic policy?",
    ["Achieving sustainable growth in national income per head", "Maximizing corporate profits", "Minimizing all taxation", "Eliminating all unemployment instantly"],
    0,
    "Sustainable growth in national income per head is the key aim of government economic policy. This refers to real income growth (corrected for inflation) that avoids major boom-bust cycles. The other options either misstate the aim or are unrealistic objectives."
  ),

  q("reg-ch1-sector-2", "cisi-reg", "reg-ch1", "1.1", "Government Economic Policy", "sector", "easy",
    "What is the Bank of England's inflation target based on the Consumer Prices Index (CPI)?",
    ["2% with 1% tolerance band", "1% with 0.5% tolerance band", "3% with 1.5% tolerance band", "2.5% with 2% tolerance band"],
    0,
    "The BoE's inflation target is 2% based on CPI, staying within 1% of this target. This is set by the Monetary Policy Committee. The 2% target provides price stability while accommodating growth."
  ),

  q("reg-ch1-sector-3", "cisi-reg", "reg-ch1", "1.1", "Fiscal Policy", "sector", "medium",
    "Which action represents a contractionary fiscal stance by the government?",
    ["Collecting more in taxes without increasing spending", "Increasing both taxes and spending equally", "Increasing spending while reducing taxes", "Reducing both taxes and spending equally"],
    0,
    "Collecting more in taxes without increasing spending represents contractionary fiscal policy—it removes money from the economy. The balanced budget multiplier occurs when taxes and spending rise equally, creating inflationary effects."
  ),

  q("reg-ch1-sector-4", "cisi-reg", "reg-ch1", "1.2", "Monetary Policy", "sector", "medium",
    "How does the Bank of England's Monetary Policy Committee influence interest rates in the UK economy?",
    ["By deciding the short-term benchmark repo rate (base rate)", "By direct government mandate each week", "By setting maximum lending rates for all banks", "By controlling deposit interest rates only"],
    0,
    "The MPC sets the BoE base rate (repo rate), which commercial banks adjust their own rates in response to. This is the primary transmission mechanism for monetary policy. Individual banks remain free to set their own rates based on the base rate."
  ),

  q("reg-ch1-sector-5", "cisi-reg", "reg-ch1", "1.2", "Monetary Policy", "sector", "easy",
    "How often does the Monetary Policy Committee meet to set interest rates?",
    ["Eight times per year", "Four times per year", "Monthly", "Quarterly"],
    0,
    "The MPC meets eight times per year (approximately monthly) to set the interest rate. Before each meeting, there is a pre-MPC meeting one week prior where the committee receives briefings on economic data."
  ),

  q("reg-ch1-sector-6", "cisi-reg", "reg-ch1", "1.3", "Primary Markets", "sector", "easy",
    "What is the primary market in financial services?",
    ["The market for new issues of shares or other securities", "The market where existing shares are traded between investors", "The market for government bonds only", "The overnight lending market between banks"],
    0,
    "The primary market is where new securities (shares and debt instruments) are issued for the first time. Companies and governments raise capital here. The secondary market is where existing securities trade between investors."
  ),

  q("reg-ch1-sector-7", "cisi-reg", "reg-ch1", "1.3", "Primary and Secondary Markets", "sector", "medium",
    "When shares are sold on the secondary market, who receives the proceeds from the sale?",
    ["The investor selling the shares, not the company", "The company that originally issued the shares", "The stock exchange", "Both the investor and the company equally"],
    0,
    "On the secondary market, cash flows from buyer to seller (the investor selling)—not to the company. The company only raises new money when securities are issued on the primary market. Secondary markets provide liquidity for investors."
  ),

  q("reg-ch1-sector-8", "cisi-reg", "reg-ch1", "1.3", "London Stock Exchange", "sector", "easy",
    "What role does the London Stock Exchange play in primary markets?",
    ["It acts as the primary market where companies list shares for the first time", "It only facilitates trading of existing shares", "It sets interest rates for the UK", "It regulates all financial institutions"],
    0,
    "The LSE acts as a primary market venue where companies list shares to reach initial investors and raise capital. It also functions as a secondary market for trading existing shares."
  ),

  q("reg-ch1-sector-9", "cisi-reg", "reg-ch1", "1.4", "Balance of Payments", "sector", "medium",
    "A persistent current account deficit in the balance of payments could potentially lead to which outcome?",
    ["Pressure to raise interest rates to prevent outflow of investment funds", "A guaranteed reduction in inflation", "Automatic improvement in currency strength", "Elimination of all international trade"],
    0,
    "A persistent current account deficit may be financed by rising overseas debt, creating economic concerns that could prompt interest rate rises. This attracts foreign investment to sterling assets and strengthens the currency. However, this conflicts with the need for a weaker currency to boost exports."
  ),

  q("reg-ch1-sector-10", "cisi-reg", "reg-ch1", "1.4", "Exchange Rates", "sector", "easy",
    "How can allowing sterling to fall in value help correct a current account deficit?",
    ["It makes foreign goods more expensive and UK goods cheaper abroad", "It automatically increases government spending", "It reduces the need for government regulation", "It eliminates the need for interest rate policy"],
    0,
    "A weaker sterling makes UK exports cheaper for overseas buyers (boosting exports) and foreign imports more expensive for UK buyers (reducing imports). Both effects help restore balance on the current account."
  ),

  q("reg-ch1-sector-11", "cisi-reg", "reg-ch1", "1.5", "Economic Cycles", "sector", "medium",
    "What is the relationship between inflation and business cycles in the UK economy?",
    ["Higher inflation can result from the economy overheating during boom periods", "Inflation has no connection to business cycle phases", "Inflation only occurs during recessions", "Deflation is the normal state of modern economies"],
    0,
    "During boom periods, increased demand can drive inflation. The government and BoE must balance growth with price stability. The 2% inflation target helps maintain stable business cycles."
  ),

  q("reg-ch1-sector-12", "cisi-reg", "reg-ch1", "1.5", "Stock Market Cycles", "sector", "medium",
    "Which factor is likely to influence stock market performance during a recession phase?",
    ["Declining corporate profits and investor confidence", "Increased demand for equities", "Rising interest rates alone", "Government guarantees of returns"],
    0,
    "During recessions, corporate profits typically decline, unemployment rises, and investor confidence weakens—all pressuring stock prices downward. This distinguishes recession from other economic phases."
  ),

  q("reg-ch1-sector-13", "cisi-reg", "reg-ch1", "1.5", "Business Cycles", "sector", "easy",
    "In which phase of the business cycle does inflation typically accelerate?",
    ["The boom phase", "The early recovery phase", "The recession phase", "The depression phase"],
    0,
    "Inflation typically accelerates during the boom phase when demand is high, capacity is stretched, and labour becomes scarce, pushing up wages and prices."
  ),

  q("reg-ch1-sector-14", "cisi-reg", "reg-ch1", "1.6", "Global Trends", "sector", "medium",
    "Which of the following is an example of how globalisation affects financial services firms?",
    ["Increased competition from international firms and pressure to expand overseas", "Guaranteed protection from all international competition", "Reduced need for regulatory compliance", "Elimination of currency risk"],
    0,
    "Globalisation creates competition from international firms while also creating opportunities to expand overseas. Financial services firms must adapt to global standards and manage currency and geopolitical risks."
  ),

  q("reg-ch1-sector-15", "cisi-reg", "reg-ch1", "1.6", "UK Financial Services Sector", "sector", "hard",
    "How do banks and building societies differ in their primary funding sources?",
    ["Banks rely primarily on wholesale markets; building societies rely on member deposits", "Both use identical funding methods", "Building societies do not require external funding", "Banks cannot accept customer deposits"],
    0,
    "Traditional building societies are mutuals funded by member savings. Banks access diverse funding including deposits, wholesale markets, and capital markets. This distinction affects their business models and risk profiles."
  ),

  q("reg-ch1-sector-16", "cisi-reg", "reg-ch1", "1.1", "Fiscal Policy and Growth", "sector", "hard",
    "What is the balanced budget multiplier effect in fiscal policy?",
    ["When government raises taxes and spending equally, aggregate demand increases because government spends all revenue while taxpayers save some", "When government eliminates all spending", "When government cuts both taxes and spending", "When the budget must always be balanced"],
    0,
    "The balanced budget multiplier: taxpayers save some increased taxes, but government spends all increased revenues. Net effect = increased spending and aggregate demand, creating inflationary pressure."
  ),

  q("reg-ch1-sector-17", "cisi-reg", "reg-ch1", "1.2", "Interest Rate Transmission", "sector", "medium",
    "Which outcome might result from the Monetary Policy Committee raising the base rate?",
    ["Commercial banks typically raise their lending and deposit rates accordingly", "No effect on commercial bank rates", "Government spending automatically increases", "Stock markets always rise"],
    0,
    "Higher base rates signal tighter monetary policy. Commercial banks respond by raising their mortgage, loan, and deposit rates. This reduces borrowing and spending, helping control inflation."
  ),

  q("reg-ch1-sector-18", "cisi-reg", "reg-ch1", "1.3", "Securities and Capital Raising", "sector", "easy",
    "Which of these represents the main purpose of a primary market?",
    ["To enable issuers to raise new capital", "To set market prices only", "To facilitate exchange controls", "To eliminate investment risk"],
    0,
    "Primary markets enable organisations to raise new capital by issuing new securities. Secondary markets provide trading mechanisms for existing securities."
  ),

  q("reg-ch1-sector-19", "cisi-reg", "reg-ch1", "1.4", "Balance of Payments Accounts", "sector", "easy",
    "Which accounts make up the balance of payments measurement?",
    ["Current account and capital/financial account", "Only the current account", "Only government accounts", "Only private sector accounts"],
    0,
    "Balance of payments comprises the current account (goods/services trade, income flows) and the capital/financial account (investment flows and transfers)."
  ),

  q("reg-ch1-sector-20", "cisi-reg", "reg-ch1", "1.5", "GDP and Economic Growth", "sector", "medium",
    "Why do governments prioritize sustainable growth over rapid short-term growth?",
    ["It avoids boom-bust cycles that create unemployment and inflation", "Rapid growth is always preferable", "Sustainable growth eliminates all recessions", "It allows governments to avoid monetary policy"],
    0,
    "Sustainable growth in real income avoids disruptive boom-bust cycles. Rapid growth may be inflationary and unsustainable, leading to busts. The goal is steady upward trend growth."
  ),

  q("reg-ch1-sector-21", "cisi-reg", "reg-ch1", "1.1", "Taxation and Regulation", "sector", "easy",
    "Which two mechanisms does government use to influence financial services firms?",
    ["Taxation (direct and indirect) and regulation (legal framework)", "Taxation only", "Regulation only", "Subsidies and penalties"],
    0,
    "Government uses fiscal policy (taxation) and regulatory frameworks to influence firms. Direct tax affects profits; indirect tax affects consumer prices; regulation sets rules of conduct."
  ),

  q("reg-ch1-sector-22", "cisi-reg", "reg-ch1", "1.2", "Monetary Policy Goals", "sector", "medium",
    "Which inflation outcome would indicate the BoE has successfully met its inflation target?",
    ["CPI running at 2% (within a 1% tolerance band)", "CPI at 0%", "CPI as high as possible", "CPI below 0.5%"],
    0,
    "The target is 2% CPI ±1% (1-3% range). This balances the goals of price stability and economic growth. Inflation outside this band suggests policy needs adjustment."
  ),

  q("reg-ch1-sector-23", "cisi-reg", "reg-ch1", "1.3", "Investment Products", "sector", "easy",
    "What is the fundamental difference between shares and loan instruments?",
    ["Shares represent ownership; loan instruments represent debt obligation", "Both represent the same thing", "Shares are debt; loans are ownership", "Only shares can be traded"],
    0,
    "Shares (equity) represent ownership stakes with potential dividends. Loan instruments (bonds, debentures, gilts) represent debt with fixed coupon payments and repayment obligations."
  ),

  q("reg-ch1-sector-24", "cisi-reg", "reg-ch1", "1.4", "Competitiveness and Exchange Rates", "sector", "medium",
    "How does a strong pound sterling affect UK exporters and importers?",
    ["It makes UK exports less competitive abroad and imports cheaper domestically", "It always benefits both exporters and importers equally", "It has no effect on trade competitiveness", "It automatically increases trade volumes"],
    0,
    "A strong pound makes UK goods more expensive for foreign buyers (hurting exporters) and foreign goods cheaper for UK buyers (helping importers). A weak pound has opposite effects."
  ),

  q("reg-ch1-sector-25", "cisi-reg", "reg-ch1", "1.5", "Economic Indicators", "sector", "easy",
    "What does GDP primarily measure?",
    ["The total market value of goods and services produced in a country", "The government's tax revenue only", "Population growth rate", "Stock market performance"],
    0,
    "GDP measures total economic output. GNP measures income earned by nationals. Both indicate economic size and growth. Real GDP adjusts for inflation."
  ),

  q("reg-ch1-sector-26", "cisi-reg", "reg-ch1", "1.6", "Financial Services Globalisation", "sector", "medium",
    "How does globalisation in financial services create risk for firms?",
    ["Exposure to international market volatility and geopolitical events", "Reduced competition", "Guaranteed profits", "Elimination of regulatory risk"],
    0,
    "Global operations expose firms to foreign currency risk, political risk, different regulatory regimes, and international market shocks. These risks must be actively managed."
  ),

  q("reg-ch1-sector-27", "cisi-reg", "reg-ch1", "1.1", "Government Intervention", "sector", "medium",
    "Which fiscal action would be most appropriate to address high unemployment during a recession?",
    ["Increase government spending on capital projects and training schemes", "Raise taxes immediately", "Reduce government spending", "Eliminate regulation"],
    0,
    "Counter-cyclical fiscal policy during recessions: increase spending on projects (employment) and training to reduce unemployment. This is opposed to contractionary policy that worsens recessions."
  ),

  q("reg-ch1-sector-28", "cisi-reg", "reg-ch1", "1.2", "Monetary Policy Tools", "sector", "easy",
    "What is the main tool of monetary policy used by the Bank of England?",
    ["Adjusting the base interest rate", "Controlling government spending directly", "Setting exchange rates", "Regulating company dividends"],
    0,
    "Base rate (repo rate) is the primary tool. Changes ripple through the economy by affecting commercial rates, inflation expectations, employment, and growth."
  ),

  q("reg-ch1-sector-29", "cisi-reg", "reg-ch1", "1.3", "Market Function", "sector", "medium",
    "What role do secondary markets play in the economy?",
    ["Provide liquidity for investors to exit holdings and allow price discovery", "Prevent any trading activity", "Only facilitate government bonds", "Eliminate the need for regulation"],
    0,
    "Secondary markets provide essential liquidity—investors can exit positions, sellers can access buyers, and continuous trading determines fair market prices. This increases confidence in primary markets."
  ),

  q("reg-ch1-sector-30", "cisi-reg", "reg-ch1", "1.4", "Balance of Payments Implications", "sector", "hard",
    "Why might persistent current account deficits create a policy dilemma for government?",
    ["Raising interest rates to prevent capital outflows strengthens the currency, making exports less competitive", "There is no dilemma—all solutions are straightforward", "Current account deficits are always beneficial", "Interest rates have no effect on exchange rates"],
    0,
    "Policy dilemma: (1) allow weak sterling to improve competitiveness but risk capital flight, OR (2) raise rates to attract foreign investment (preventing flight) but strong currency hurts exports. Each solution creates problems elsewhere."
  ),

  q("reg-ch1-sector-31", "cisi-reg", "reg-ch1", "1.5", "Growth Quality", "sector", "hard",
    "Why is sustainable growth considered superior to rapid boom-and-bust growth patterns?",
    ["Avoids systemic unemployment and inflation cycles that damage long-term prosperity", "Rapid growth is always better", "Sustainability eliminates all economic problems", "Only governments benefit from sustainable growth"],
    0,
    "Boom-bust cycles create unemployment (busts) and inflation (booms), reducing prosperity and confidence. Sustainable upward trend growth maximises long-term real income and economic welfare."
  ),

  q("reg-ch1-sector-32", "cisi-reg", "reg-ch1", "1.6", "City of London Importance", "sector", "medium",
    "What role does the City of London play in global financial services?",
    ["Major international financial center for banking, investment, and capital markets activities", "Only domestic financial services hub", "Handles government welfare payments", "Regulates all European banks"],
    0,
    "The City is a global financial hub hosting international banks, investment firms, trading venues, and capital markets. It's crucial to the UK economy and a global financial centre."
  ),

  q("reg-ch1-sector-33", "cisi-reg", "reg-ch1", "1.1", "Economic Policy Conflict", "sector", "hard",
    "When government uses fiscal policy to boost employment, what secondary effect must it manage?",
    ["Potential inflation from increased aggregate demand", "Guaranteed deflation", "Elimination of unemployment", "No secondary effects occur"],
    0,
    "Expansionary fiscal policy to create jobs increases aggregate demand, potentially causing inflation. Government must balance employment and inflation goals—they can conflict short-term."
  ),

  q("reg-ch1-sector-34", "cisi-reg", "reg-ch1", "1.2", "MPC Pre-Meeting Process", "sector", "easy",
    "What is the purpose of the Bank of England's pre-MPC meeting?",
    ["To brief the committee on economic data and provide analysis before setting rates", "To announce rate decisions", "To prevent public knowledge of decisions", "To eliminate the need for formal meetings"],
    0,
    "The pre-MPC meeting (one week before formal meeting) allows the nine committee members to review latest economic data, BoE analysis, and business intelligence before voting."
  ),

  q("reg-ch1-sector-35", "cisi-reg", "reg-ch1", "1.3", "Equity vs Debt Financing", "sector", "medium",
    "Why might a company choose debt financing over equity financing in primary markets?",
    ["Debt keeps voting control with existing shareholders and interest is tax-deductible", "Equity always has lower costs", "Debt has no obligations", "Companies cannot choose financing methods"],
    0,
    "Debt (bonds, loans) doesn't dilute ownership; interest payments are tax-deductible. Equity (shares) dilutes ownership but provides no repayment obligation. Companies weigh these trade-offs."
  ),

  // ─── CHAPTER 2: UK Financial Services and Consumer Relationships (35 questions) ───

  q("reg-ch2-consumer-1", "cisi-reg", "reg-ch2", "2.1", "Consumer Financial Risks", "consumer", "easy",
    "Which of the following is a primary financial risk faced by UK consumers?",
    ["Risk of unemployment or income loss", "Risk of guaranteed investment returns", "Elimination of all financial risk", "Guaranteed pension income"],
    0,
    "Key consumer risks: unemployment/income loss, inflation eroding savings, health/incapacity expenses, inadequate retirement income. Professional advisers help consumers manage these risks."
  ),

  q("reg-ch2-consumer-2", "cisi-reg", "reg-ch2", "2.1", "Budgeting and Finances", "consumer", "easy",
    "What is the primary purpose of a personal budget in financial planning?",
    ["To show how income and expenditure balance and identify savings opportunities", "To eliminate all spending", "To guarantee future wealth", "To avoid all financial planning"],
    0,
    "Budgeting reveals whether income exceeds outgoings and identifies where money goes. This allows realistic financial planning and identification of savings potential."
  ),

  q("reg-ch2-consumer-3", "cisi-reg", "reg-ch2", "2.1", "Debt Management", "consumer", "medium",
    "How does unsecured debt differ from secured debt in terms of risk to consumers?",
    ["Secured debt is backed by assets that can be seized; unsecured debt relies on creditworthiness", "Both are identical in all respects", "Unsecured debt is always cheaper", "Secured debt has no consequences for non-payment"],
    0,
    "Secured debt (mortgages, car loans) involves specific assets at risk of repossession. Unsecured debt (credit cards, personal loans) depends only on creditworthiness. Secured typically has lower interest rates."
  ),

  q("reg-ch2-consumer-4", "cisi-reg", "reg-ch2", "2.2", "Housing Finance", "consumer", "medium",
    "Why is a residential property typically the largest financial commitment for UK consumers?",
    ["High cost relative to income requires long-term mortgage financing", "Houses are investment-free assets", "Housing costs are minimal", "Most people rent rather than buy"],
    0,
    "Housing is typically the biggest expense. Mortgages (secured on the property) are long-term (25-30 years) and represent significant ongoing financial commitments. Proper planning is essential."
  ),

  q("reg-ch2-consumer-5", "cisi-reg", "reg-ch2", "2.2", "Life Changes and Finances", "consumer", "easy",
    "How does marriage or civil partnership typically affect personal financial planning?",
    ["Requires consolidation of finances, joint budgeting, and decisions about shared assets", "Has no financial implications", "Always reduces financial complexity", "Eliminates the need for financial planning"],
    0,
    "Major life changes (marriage, children, home purchase) require financial restructuring: joint decisions on budgeting, debt, insurance, investments, and long-term goals."
  ),

  q("reg-ch2-consumer-6", "cisi-reg", "reg-ch2", "2.2", "Retirement Planning", "consumer", "medium",
    "What is the primary risk that retirement planning addresses?",
    ["Risk that saved funds may not last as long as the person lives", "Retirement is risk-free", "Everyone has automatic pension income", "Life expectancy is fixed and predictable"],
    0,
    "Longevity risk: people don't know when they'll die, so they may outlive savings. Pension contributions and investment strategy must account for potentially 30+ year retirement."
  ),

  q("reg-ch2-consumer-7", "cisi-reg", "reg-ch2", "2.2", "Emergency Savings", "consumer", "easy",
    "Why is maintaining an emergency fund considered important in personal financial planning?",
    ["To cover unexpected expenses (redundancy, illness) without derailing long-term plans", "Emergency funds are unnecessary", "All unexpected expenses can be prevented", "Emergency funds should never be touched"],
    0,
    "Emergency savings (typically 3-6 months expenses in accessible accounts) protect consumers from disruption to financial plans when unexpected events occur."
  ),

  q("reg-ch2-consumer-8", "cisi-reg", "reg-ch2", "2.2", "Insurance Needs", "consumer", "medium",
    "What type of insurance protects a consumer if they cannot work due to illness?",
    ["Income protection (disability) insurance", "Life insurance only", "Car insurance covers this", "Insurance cannot cover income loss"],
    0,
    "Income protection insurance replaces lost income if illness/injury prevents work. This addresses the risk of income loss before retirement. Critical for people dependent on earned income."
  ),

  q("reg-ch2-consumer-9", "cisi-reg", "reg-ch2", "2.3", "Risk and Return Relationship", "consumer", "easy",
    "What is the fundamental relationship between investment risk and potential return?",
    ["Higher risk investments typically offer higher potential returns", "Risk and return are unrelated", "Low-risk investments always offer high returns", "Returns are guaranteed regardless of risk"],
    0,
    "Risk-return trade-off: investors accepting more volatility (risk) expect higher long-term returns. Low-risk investments (bonds, savings) offer lower returns; equities offer higher returns but more volatility."
  ),

  q("reg-ch2-consumer-10", "cisi-reg", "reg-ch2", "2.3", "Investment Time Horizon", "consumer", "medium",
    "How should an investor's time horizon affect their investment strategy?",
    ["Longer horizons can tolerate more volatility; shorter horizons need more stability", "Time horizon has no effect on strategy", "All investors should use identical strategies", "Shorter horizons should use riskier investments"],
    0,
    "Longer time horizons (years/decades) allow weathering of market downturns, supporting equity holdings. Shorter horizons need stable capital preservation, favouring bonds and cash."
  ),

  q("reg-ch2-consumer-11", "cisi-reg", "reg-ch2", "2.1", "Financial Capability", "consumer", "medium",
    "What does financial capability mean in the context of consumer protection?",
    ["The consumer's knowledge and ability to manage their financial affairs responsibly", "Government guarantee of profits", "Elimination of all financial decisions", "Only wealthy people have financial capability"],
    0,
    "Financial capability refers to knowledge, skills, and confidence to make sound financial decisions. Low financial capability consumers need more protection and clearer information."
  ),

  q("reg-ch2-consumer-12", "cisi-reg", "reg-ch2", "2.1", "Vulnerable Customers", "consumer", "medium",
    "Which characteristics might identify a consumer as vulnerable for financial services purposes?",
    ["Age, disability, lack of financial literacy, language barriers, or dependency on benefits", "Everyone is vulnerable", "Only young people are vulnerable", "Vulnerability cannot be identified"],
    0,
    "Vulnerable consumers may have reduced ability to protect their interests: elderly, disabled, low financial literacy, non-English speakers, isolated individuals. Firms must take extra care."
  ),

  q("reg-ch2-consumer-13", "cisi-reg", "reg-ch2", "2.2", "Spousal Financial Planning", "consumer", "easy",
    "Why might spouses have different financial planning needs?",
    ["Different earning capacities, risks, and future financial responsibilities", "All spouses are financially identical", "Financial planning is irrelevant for couples", "Couples should never discuss finances"],
    0,
    "Even in partnerships, individuals face different risks and opportunities (different job security, life expectancy, responsibilities). Planning should address individual circumstances within partnership context."
  ),

  q("reg-ch2-consumer-14", "cisi-reg", "reg-ch2", "2.3", "Inflation Impact", "consumer", "medium",
    "How does inflation affect the purchasing power of consumer savings?",
    ["Inflation erodes purchasing power—savings buy less in the future", "Inflation increases purchasing power", "Inflation has no effect on savings", "Inflation guarantees returns"],
    0,
    "If inflation is 3% and savings earn 1%, real return is -2%. Savers lose purchasing power. Planning must account for inflation to maintain real wealth."
  ),

  q("reg-ch2-consumer-15", "cisi-reg", "reg-ch2", "2.3", "Diversification Principle", "consumer", "easy",
    "What is the key principle behind diversification in investment portfolios?",
    ["Spreading investments across different asset classes and sectors to reduce risk", "Investing all money in one high-risk asset", "Diversification increases risk", "Risk cannot be reduced"],
    0,
    "Diversification reduces idiosyncratic risk (company-specific risk) while retaining market returns. Different assets perform differently under various economic conditions."
  ),

  q("reg-ch2-consumer-16", "cisi-reg", "reg-ch2", "2.1", "Needs vs Wants", "consumer", "hard",
    "How should financial advisers distinguish between consumer financial needs and wants?",
    ["Needs are essential (housing, food, security); wants are desirable but non-essential luxuries", "All consumer desires should be treated as needs", "No distinction exists", "Advisers cannot influence this decision"],
    0,
    "Understanding this distinction helps prioritize: essential needs (emergency funds, protection, core retirement) before funding wants. Budgeting works backwards from income."
  ),

  q("reg-ch2-consumer-17", "cisi-reg", "reg-ch2", "2.2", "Dependants and Protection", "consumer", "medium",
    "Why do consumers with dependants need life insurance?",
    ["To replace lost income and protect dependants' standard of living if insured person dies", "Life insurance is unnecessary if you have dependants", "Only wealthy people need life insurance", "Dependants have no financial needs"],
    0,
    "Dependants (children, spouses) rely on the insured's income. Life insurance replaces that income if death occurs, protecting their future (education, housing, living expenses)."
  ),

  q("reg-ch2-consumer-18", "cisi-reg", "reg-ch2", "2.3", "Savings vs Investment", "consumer", "easy",
    "What is the key difference between savings and investments in consumer planning?",
    ["Savings prioritize capital safety and liquidity; investments prioritize growth and accept risk", "Savings and investments are identical", "Savings offer guaranteed returns", "Investments are always risk-free"],
    0,
    "Savings (bank accounts, bonds) preserve capital and offer liquidity but lower returns. Investments (equities, funds) seek growth but accept volatility. Both serve different purposes."
  ),

  q("reg-ch2-consumer-19", "cisi-reg", "reg-ch2", "2.1", "Financial Advice", "consumer", "medium",
    "What is the primary objective of regulated financial advice for consumers?",
    ["To provide suitable recommendations based on individual circumstances, needs, and goals", "To sell maximum products regardless of suitability", "To guarantee investment returns", "To eliminate all consumer decision-making"],
    0,
    "Suitability rule: advisers must understand client circumstances and recommend suitable products. Unsuitability breaches regulations and harms consumers. Needs assessment is mandatory."
  ),

  q("reg-ch2-consumer-20", "cisi-reg", "reg-ch2", "2.2", "Lifecycle Planning", "consumer", "medium",
    "How might financial priorities shift across a consumer's lifecycle?",
    ["Young: growth; mid-career: protection/children; retirement: income/preservation", "Priorities never change", "All life stages require identical financial strategies", "Consumer age is irrelevant"],
    0,
    "Lifecycle planning recognizes changing priorities: youth (education, careers), working age (mortgages, children, protection), pre-retirement (growth to accumulation), retirement (income from capital)."
  ),

  q("reg-ch2-consumer-21", "cisi-reg", "reg-ch2", "2.3", "Asset Allocation", "consumer", "hard",
    "Why should asset allocation reflect a consumer's investment time horizon?",
    ["Longer horizons permit higher equity exposure; shorter horizons need more stable assets to preserve capital", "Time horizon is irrelevant to allocation", "All investors should be 100% equities", "Asset allocation cannot be adjusted"],
    0,
    "A 30-year-old can weather 20%+ equity market downturns (recovery likely within years). A 70-year-old cannot—losses may not recover before death. Time horizon directly determines optimal allocation."
  ),

  q("reg-ch2-consumer-22", "cisi-reg", "reg-ch2", "2.1", "Income and Expenditure", "consumer", "easy",
    "What does a personal balance sheet show in financial planning?",
    ["Assets, liabilities, and net worth at a specific point in time", "Income and expenditure only", "Future predictions", "Investment returns only"],
    0,
    "Balance sheet: Assets (what you own) - Liabilities (what you owe) = Net Worth. Updated regularly to track wealth accumulation. Differs from cash flow statement (income/spending)."
  ),

  q("reg-ch2-consumer-23", "cisi-reg", "reg-ch2", "2.2", "Tax Efficiency", "consumer", "medium",
    "How can consumers improve the tax efficiency of their financial planning?",
    ["Using tax-advantaged accounts (ISAs, pensions), strategic timing of income/losses, charitable giving", "Tax efficiency is impossible", "Consumers should ignore tax considerations", "Tax planning is illegal"],
    0,
    "Legitimate tax planning: ISA allowances, pension contributions (tax relief), capital gains/loss harvesting, gift/charitable strategies. Increases after-tax wealth without fraud."
  ),

  q("reg-ch2-consumer-24", "cisi-reg", "reg-ch2", "2.1", "Consumer Priorities", "consumer", "easy",
    "Which of these is typically the highest financial priority for most UK consumers?",
    ["Securing adequate housing via mortgage or rent", "Speculative investments", "Luxury purchases", "Recreational expenses"],
    0,
    "Housing typically represents 25-35% of household budget and is the largest financial commitment. After housing, utilities, food, and insurance come next."
  ),

  q("reg-ch2-consumer-25", "cisi-reg", "reg-ch2", "2.3", "Ethical Investing", "consumer", "medium",
    "How might ethical or sustainable investment preferences affect consumer portfolio construction?",
    ["Excluding certain sectors/companies based on values, potentially affecting diversification and returns", "Values are irrelevant to investment", "Ethical investing eliminates returns", "All investments are identical ethically"],
    0,
    "ESG investing excludes certain sectors (fossil fuels, weapons) or companies not meeting ethical criteria. May reduce diversification or returns but aligns portfolio with values."
  ),

  q("reg-ch2-consumer-26", "cisi-reg", "reg-ch2", "2.2", "Estate Planning", "consumer", "medium",
    "Why is estate planning important for consumers with significant assets?",
    ["To ensure assets transfer as intended, minimize taxes, protect vulnerable beneficiaries", "Estate planning is unnecessary", "Everyone has identical estate needs", "Assets disappear after death"],
    0,
    "Estate planning (wills, trusts, powers of attorney) ensures: property transfers as intended, taxes minimized, minors protected, vulnerable beneficiaries safeguarded, wishes documented."
  ),

  q("reg-ch2-consumer-27", "cisi-reg", "reg-ch2", "2.1", "Professional Conduct", "consumer", "easy",
    "What ethical principle should guide a financial adviser when dealing with a consumer?",
    ["Acting in the client's best interest and avoiding conflicts of interest", "Maximizing the adviser's own profit", "Recommending products only the adviser prefers", "Ignoring client circumstances"],
    0,
    "Core ethical principle: advisers must act honestly, fairly, and in clients' interests. Conflicts of interest must be disclosed. This builds trust and protects consumers."
  ),

  q("reg-ch2-consumer-28", "cisi-reg", "reg-ch2", "2.2", "Pension Adequacy", "consumer", "medium",
    "What challenge do many UK consumers face regarding retirement pension saving?",
    ["Inadequate savings rates and unclear about required retirement income", "Pensions are guaranteed at high levels", "Retirement requires no financial planning", "Everyone saves identically"],
    0,
    "Pension gap: many consumers don't save enough for desired retirement lifestyle. Unclear about needed capital, return assumptions, longevity. Requires proactive planning."
  ),

  q("reg-ch2-consumer-29", "cisi-reg", "reg-ch2", "2.3", "Behavioural Finance", "consumer", "hard",
    "How do common cognitive biases affect consumer investment decisions?",
    ["Loss aversion and overconfidence cause panic selling in downturns and excessive trading", "Consumers make purely rational decisions", "Emotions never affect investing", "Biases improve investment returns"],
    0,
    "Loss aversion: pain of losses exceeds joy of gains—causes panic selling in crashes. Overconfidence: belief that own investments will outperform. Both reduce long-term returns."
  ),

  q("reg-ch2-consumer-30", "cisi-reg", "reg-ch2", "2.1", "Financial Goals", "consumer", "easy",
    "What is the first step in comprehensive financial planning for consumers?",
    ["Establishing clear, measurable financial goals with timelines", "Buying investment products immediately", "Ignoring future planning", "Goals cannot be set in advance"],
    0,
    "Goal-setting framework: identify objectives (education fund, house, retirement), timelines (short/medium/long), and required amounts. Everything else follows from clear goals."
  ),

  q("reg-ch2-consumer-31", "cisi-reg", "reg-ch2", "2.2", "Childcare and Education", "consumer", "medium",
    "How should financial planning address children's education costs?",
    ["Starting education savings early (university fees, private school) using tax-efficient vehicles", "Education costs are negligible", "No planning is necessary", "Education is always free"],
    0,
    "UK university fees (£9,000-50,000+) and private school costs are substantial. Early saving in Junior ISAs or education trusts leverages compound returns. Access needs planning."
  ),

  q("reg-ch2-consumer-32", "cisi-reg", "reg-ch2", "2.3", "Currency and International", "consumer", "hard",
    "How might currency risk affect a UK consumer investing in international markets?",
    ["Currency fluctuations can increase or decrease returns independent of underlying investment performance", "Currency has no effect on international investing", "Exchange rates are fixed", "International investing eliminates currency risk"],
    0,
    "Pound depreciation: international investments in strong currencies gain from exchange rates (helpful). Pound appreciation reduces returns from overseas holdings. Currency hedging possible but costly."
  ),

  q("reg-ch2-consumer-33", "cisi-reg", "reg-ch2", "2.1", "Risk Tolerance Assessment", "consumer", "medium",
    "What factors should be considered when assessing a consumer's risk tolerance?",
    ["Financial capacity (income stability), time horizon, knowledge, emotional ability to accept losses", "Only age matters", "Risk tolerance is fixed and never changes", "Advisers cannot assess this"],
    0,
    "Risk tolerance assessment: financial circumstances (can you afford losses?), time horizon (can you wait for recovery?), knowledge (do you understand risks?), temperament (can you tolerate volatility?)."
  ),

  q("reg-ch2-consumer-34", "cisi-reg", "reg-ch2", "2.2", "Mortgage Considerations", "consumer", "hard",
    "Why should a consumer carefully consider mortgage length when purchasing property?",
    ["Longer mortgages cost more interest; shorter cost less but have higher monthly payments", "Mortgage length has no financial consequence", "All mortgages are identical", "Mortgage cost is irrelevant"],
    0,
    "Interest cost trade-off: 25-year mortgage at £200,000 costs £200,000+ in interest; 15-year costs less interest but higher monthly payments. Financial circumstances determine optimal term."
  ),

  q("reg-ch2-consumer-35", "cisi-reg", "reg-ch2", "2.3", "Sustainable Withdrawal Rates", "consumer", "hard",
    "What is the significance of withdrawal rate planning in retirement?",
    ["Determining safe annual spending from capital to avoid depleting funds before death", "Retirees can spend unlimited amounts", "Withdrawal rate has no importance", "Capital is irrelevant in retirement"],
    0,
    "4% rule: safely withdraw 4% annually from invested capital (historically maintained 25+ year purchasing power). Higher rates risk depletion; lower rates leave excessive estates. Balance required."
  ),

  // ─── CHAPTER 3: UK Contract and Trust Legislation (50 questions) ───

  q("reg-ch3-contract-1", "cisi-reg", "reg-ch3", "3.1", "Contract Capacity", "contract", "easy",
    "Who lacks full legal capacity to enter into a binding contract?",
    ["Individuals under 18 and people lacking mental capacity", "Only wealthy people", "Contract capacity is universal", "Age and capacity are irrelevant"],
    0,
    "Lack of capacity: minors (<18), mentally incapable persons, bankrupts, intoxicated persons. Contracts may be void or voidable. Financial advisers must verify client capacity."
  ),

  q("reg-ch3-contract-2", "cisi-reg", "reg-ch3", "3.1", "Misrepresentation", "contract", "medium",
    "What is misrepresentation in contract law?",
    ["False statement of fact inducing entry into contract, made by one party to another", "True statements only", "Silence about risks", "Accurate complete information"],
    0,
    "Misrepresentation: untrue statement of fact (not opinion) made pre-contract that induces the other party. Remedies include rescission (contract void) or damages."
  ),

  q("reg-ch3-contract-3", "cisi-reg", "reg-ch3", "3.1", "Contract Terms", "contract", "easy",
    "What is the legal difference between a condition and a warranty in a contract?",
    ["Condition is fundamental; breach allows termination. Warranty is minor; breach allows damages only", "Both are identical", "Warranties are more important", "Terms cannot be classified"],
    0,
    "Conditions are essential terms. Breach allows termination and damages. Warranties are minor terms. Breach allows damages only, not termination. Classification affects remedies."
  ),

  q("reg-ch3-contract-4", "cisi-reg", "reg-ch3", "3.2", "Powers of Attorney - General", "contract", "medium",
    "What is a Power of Attorney (POA)?",
    ["A legal document giving another person authority to act on your behalf", "A contract that cannot be revoked", "A government authorization", "A guarantee of payment"],
    0,
    "POA grants legal authority to an attorney (agent) to act on the donor's behalf. Can be general (all matters) or specific (limited matters). Revoked by donor's death or revocation document."
  ),

  q("reg-ch3-contract-5", "cisi-reg", "reg-ch3", "3.2", "Lasting Power of Attorney", "contract", "medium",
    "When does a Lasting Power of Attorney (LPA) become useful?",
    ["When the donor loses mental capacity, they can make financial/health decisions", "LPA is only for wealthy people", "Mental capacity increases LPA need", "LPA is never used"],
    0,
    "LPA continues after donor loses capacity (unlike traditional POA which terminates). Two types: Property & Financial Affairs, Health & Personal Welfare. Registered with OPG."
  ),

  q("reg-ch3-contract-6", "cisi-reg", "reg-ch3", "3.2", "Enduring Power of Attorney", "contract", "easy",
    "What is an Enduring Power of Attorney (EPA)?",
    ["A POA created before 2007 that continues after donor's incapacity (now called LPA)", "A type of lasting power of attorney for modern use", "A contract that terminates on incapacity", "An insurance product"],
    0,
    "EPA (pre-2007) automatically ends on donor's death/incapacity. Replaced by Lasting Power of Attorney (LPA) which continues despite incapacity. EPAs can still be used if pre-2007."
  ),

  q("reg-ch3-contract-7", "cisi-reg", "reg-ch3", "3.3", "Joint Ownership - Joint Tenancy", "contract", "medium",
    "What happens to a joint tenancy interest when one owner dies?",
    ["It automatically passes to surviving owner(s) by right of survivorship", "It goes to the deceased's estate", "It is split equally among all heirs", "It reverts to the government"],
    0,
    "Joint tenancy: right of survivorship means the deceased's share automatically passes to survivors (outside the will/estate). Cannot be left to others. Common for family property."
  ),

  q("reg-ch3-contract-8", "cisi-reg", "reg-ch3", "3.3", "Joint Ownership - Tenancy in Common", "contract", "medium",
    "How does tenancy in common differ from joint tenancy?",
    ["Each owner has separate share; no survivorship—share passes to their estate", "Both are identical", "Tenancy in common avoids inheritance", "Only joint tenancy is legal"],
    0,
    "Tenancy in common: each owns a share (equal or unequal). On death, share goes to deceased's estate/heirs (via will). No automatic survivorship. More flexible for different circumstances."
  ),

  q("reg-ch3-contract-9", "cisi-reg", "reg-ch3", "3.3", "Legal Person - Individual", "contract", "easy",
    "What is a legal person in law?",
    ["Entity with legal rights/obligations: individuals, companies, partnerships, trusts, estates", "Only humans qualify", "Legal persons have no rights", "Animals can be legal persons"],
    0,
    "Legal person: entity that can own property, enter contracts, be sued. Includes natural persons (individuals), corporations (companies), trusts (via trustee), partnerships."
  ),

  q("reg-ch3-contract-10", "cisi-reg", "reg-ch3", "3.3", "Trustees as Legal Persons", "contract", "hard",
    "How does a trustee function as a legal person despite being a human?",
    ["Trustee has legal personality in their trustee capacity, separate from personal capacity", "Trustees are not legal persons", "Trustees have no legal power", "Trust capacity is irrelevant"],
    0,
    "Trustee holds property in their name but in fiduciary capacity for beneficiaries. Trust deed creates separate legal identity. Trustee's personal creditors cannot reach trust assets."
  ),

  q("reg-ch3-contract-11", "cisi-reg", "reg-ch3", "3.4", "Insolvency and Administration", "contract", "easy",
    "What does insolvency mean?",
    ["Unable to pay debts as they become due (cash flow insolvency) or liabilities exceed assets", "Having all debts paid", "A form of investment", "Always results in imprisonment"],
    0,
    "Insolvency: cash flow (can't pay debts when due) or balance sheet (liabilities > assets). Leads to formal procedures: administration, liquidation, bankruptcy."
  ),

  q("reg-ch3-contract-12", "cisi-reg", "reg-ch3", "3.4", "Administration Order", "contract", "medium",
    "What is the purpose of an administration order for an insolvent company?",
    ["To manage company's assets, pay debts, and restructure for continued operation or sale", "To immediately shut the company down", "To guarantee creditor repayment", "To increase debt"],
    0,
    "Administration: administrator manages assets, conducts business, pays debts in priority order, attempts restructuring/rescue or achieves better outcome than liquidation."
  ),

  q("reg-ch3-contract-13", "cisi-reg", "reg-ch3", "3.4", "Liquidation", "contract", "easy",
    "What happens to a company's assets during liquidation?",
    ["Liquid and sold to pay debts in statutory priority order; company ceases to exist", "Company continues indefinitely", "Shareholders receive full repayment", "Creditors receive nothing"],
    0,
    "Liquidation: company dissolution. Assets sold, proceeds pay debts in order: secured creditors, employees, tax, unsecured creditors, shareholders (if surplus). Company removed from register."
  ),

  q("reg-ch3-contract-14", "cisi-reg", "reg-ch3", "3.4", "Receivership", "contract", "medium",
    "What is receivership in insolvency?",
    ["Secured creditor appoints receiver to manage charged assets to recover their debt", "Government takes control of company", "Informal insolvency", "Receivership equals bankruptcy"],
    0,
    "Receivership: secured creditor (mortgagee) appoints receiver to manage/sell charged assets for debt recovery. Administrative receiver has broader powers. Less common since administration introduced."
  ),

  q("reg-ch3-contract-15", "cisi-reg", "reg-ch3", "3.5", "Trust - Definition", "contract", "easy",
    "What is a trust in law?",
    ["Legal arrangement where trustee holds property on behalf of beneficiaries for stated purpose", "A financial security", "A government guarantee", "Identical to a company"],
    0,
    "Trust: trustee has legal title to assets but holds them for beneficiaries' benefit per trust terms. Beneficiary has equitable interest. Created by settlor/testator."
  ),

  q("reg-ch3-contract-16", "cisi-reg", "reg-ch3", "3.5", "Trust Creation - Methods", "contract", "medium",
    "What are the two main methods of creating a trust during lifetime?",
    ["Declaration (settlor declares self trustee) and Transfer (settlor transfers to trustee)", "Trusts require government approval", "Trusts are created automatically", "Only one method exists"],
    0,
    "Declaration: settlor holds property as trustee. Transfer: settlor conveys property to trustee for stated purpose. Both require manifestation of intention, certainty of terms, proper formalities."
  ),

  q("reg-ch3-contract-17", "cisi-reg", "reg-ch3", "3.5", "Trust Creation - Formalities", "contract", "hard",
    "What are the three certainties required to create a valid trust?",
    ["Certainty of intention, subject-matter, and objects (beneficiaries)", "Trusts need no formalities", "Certainty is not required", "Only one certainty needed"],
    0,
    "Three certainties (Knight v Knight): (1) Intent to create trust, (2) Certain property and interests (subject-matter), (3) Certain identifiable beneficiaries. All three required."
  ),

  q("reg-ch3-contract-18", "cisi-reg", "reg-ch3", "3.5", "Trust Parties", "contract", "easy",
    "Who are the three parties involved in a trust?",
    ["Settlor (creator), Trustee (legal holder), Beneficiary (beneficial owner)", "Only government entities", "Banks only", "Legal parties are irrelevant"],
    0,
    "Settlor creates trust, transfers property to trustee, names beneficiaries. Trustee has legal title and fiduciary duties. Beneficiaries have equitable interests/rights."
  ),

  q("reg-ch3-contract-19", "cisi-reg", "reg-ch3", "3.5", "Bare Trust", "contract", "medium",
    "What is a bare trust and how does it differ from other trusts?",
    ["Trustee holds property absolutely for single beneficiary with no conditions—minimal trustee duties", "Bare trust is most restrictive trust", "Trustees have extensive powers in bare trusts", "Beneficiary has no rights"],
    0,
    "Bare trust: single, adult beneficiary. Trustee holds nominally; beneficiary entitled to all income/capital. Trustee has minimal duties. Equivalent to beneficiary holding directly."
  ),

  q("reg-ch3-contract-20", "cisi-reg", "reg-ch3", "3.5", "Fixed Trust", "contract", "easy",
    "What is a fixed trust?",
    ["Beneficiaries and their shares are determined in advance by trust terms", "Trust terms can be changed anytime", "Beneficiaries are unknown", "Fixed trusts are illegal"],
    0,
    "Fixed trust: beneficiaries and shares specified in trust deed (e.g., £50k to A, £30k to B). No discretion for trustee. Clear, certain, but inflexible."
  ),

  q("reg-ch3-contract-21", "cisi-reg", "reg-ch3", "3.5", "Discretionary Trust", "contract", "medium",
    "What is a discretionary trust and what power does the trustee have?",
    ["Trustee has discretion to distribute income/capital among defined class of beneficiaries", "Beneficiary determines all distributions", "Trustee has no discretion", "Discretion equals fraud"],
    0,
    "Discretionary trust: trustee decides how much each beneficiary (from stated class) receives. Flexible. Trustee must act honestly and within terms. Tax-efficient for some situations."
  ),

  q("reg-ch3-contract-22", "cisi-reg", "reg-ch3", "3.5", "Interest in Possession Trust", "contract", "hard",
    "What is an interest in possession trust?",
    ["Beneficiary has right to current income; on death, capital passes to remainderman", "No beneficiary has any right", "All beneficiaries receive equal amounts", "Capital and income are identical"],
    0,
    "Interest in possession (life interest): beneficiary A receives income for life, then capital goes to B (remainderman). Useful for providing income to surviving spouse, protecting capital for children."
  ),

  q("reg-ch3-contract-23", "cisi-reg", "reg-ch3", "3.5", "Trustee Duties", "contract", "medium",
    "What is the fundamental fiduciary duty of a trustee?",
    ["To act honestly and in beneficiaries' best interests, keeping trust assets separate", "Trustees can use assets for personal benefit", "Duty to maximize personal profit", "Beneficiaries' interests are secondary"],
    0,
    "Trustee duties: act honestly, in good faith, with care; no self-dealing; keep accounts; avoid conflicts of interest; segregate trust property from personal assets."
  ),

  q("reg-ch3-contract-24", "cisi-reg", "reg-ch3", "3.5", "Trustee Powers", "contract", "medium",
    "What types of powers does a trust deed typically grant trustees?",
    ["Discretionary powers (invest, distribute, acquire property) within trust terms", "Trustees have no powers", "Unlimited absolute powers", "Trustees must ask beneficiaries"],
    0,
    "Trust powers: investment discretion (what to invest in), distribution discretion (to whom, when, how much), acquisition powers (buy additional assets). Limited by trust terms and law."
  ),

  q("reg-ch3-contract-25", "cisi-reg", "reg-ch3", "3.5", "Charitable Trust", "contract", "medium",
    "What makes a charitable trust different from a private trust?",
    ["Charitable purpose (poverty, education, health, religion, public benefit) with tax advantages", "Charitable trusts have no restrictions", "Same as private trusts entirely", "Charitable status is temporary"],
    0,
    "Charitable trust: benefits stated charitable purpose (not individuals). Tax-exempt status. Must be exclusively charitable. Perpetual duration allowed (private trusts typically have 125-year limit)."
  ),

  q("reg-ch3-contract-26", "cisi-reg", "reg-ch3", "3.1", "Capacity and Advisers", "contract", "hard",
    "Why is client capacity important for financial advisers?",
    ["Advice to incapable clients may be unenforceable; adviser may have professional liability", "Adviser capacity is irrelevant", "All clients have identical capacity", "Capacity cannot be questioned"],
    0,
    "If adviser gives advice to incapable client (minor, mentally incapable, bankrupt), advice/contract may be void or unenforceable. Adviser should verify capacity and may seek guardianship involvement."
  ),

  q("reg-ch3-contract-27", "cisi-reg", "reg-ch3", "3.2", "POA Application in Finance", "contract", "medium",
    "How would a financial adviser deal with a Lasting Power of Attorney in client dealings?",
    ["Verify attorney's authority before accepting their instructions; could require POA documentation", "Ignore the POA existence", "Treat POA attorney as principal", "POA requires no verification"],
    0,
    "Attorney doesn't replace client authority; attorney acts for incapable principal. Adviser must verify: (1) POA exists and valid, (2) donor lacks capacity, (3) attorney is authorized."
  ),

  q("reg-ch3-contract-28", "cisi-reg", "reg-ch3", "3.3", "Property Rights Impact", "contract", "medium",
    "How would joint tenancy vs tenancy in common affect estate planning?",
    ["Joint tenancy passes automatically to survivor; tenancy in common allows testamentary control", "Both are equivalent for estates", "Joint tenancy is more flexible", "Neither affects succession"],
    0,
    "Planning choice: Joint tenancy ensures surviving spouse gets property outside will/probate. Tenancy in common allows different arrangements (unequal shares, gift to children). Impacts succession and taxes."
  ),

  q("reg-ch3-contract-29", "cisi-reg", "reg-ch3", "3.4", "Company Insolvency Types", "contract", "easy",
    "What is the difference between administration and liquidation?",
    ["Administration attempts rescue/restructuring; liquidation dissolves company permanently", "Both are identical procedures", "Liquidation precedes administration", "Administration creates new company"],
    0,
    "Administration: temporary, aims to rescue business or achieve better outcome than liquidation, creditors' interests protected. Liquidation: permanent closure, asset sale, company dissolved."
  ),

  q("reg-ch3-contract-30", "cisi-reg", "reg-ch3", "3.5", "Trust in Will", "contract", "medium",
    "How is a trust created by will (testamentary trust)?",
    ["Testator's will creates trust; trustee appointed by will holds assets after testator's death", "Trusts cannot be created by will", "Will trustee must be changed by testator", "Testamentary trust is lifetime"],
    0,
    "Testamentary trust: created by will on testator's death. Trustee named in will. Assets transferred to trustee. Beneficial for minor/vulnerable beneficiaries or conditional gifts."
  ),

  q("reg-ch3-contract-31", "cisi-reg", "reg-ch3", "3.1", "Offer and Acceptance", "contract", "easy",
    "What elements are required for a contract to be formed?",
    ["Offer, acceptance, and consideration (benefit/detriment) with intent to be legally bound", "Only one party's consent needed", "Consideration is unnecessary", "Oral contracts are never valid"],
    0,
    "Contract formation: (1) Offer (willingness to be bound), (2) Acceptance (unequivocal agreement), (3) Consideration (exchange of value), (4) Intent to be legally bound."
  ),

  q("reg-ch3-contract-32", "cisi-reg", "reg-ch3", "3.1", "Exclusion Clauses", "contract", "medium",
    "How are exclusion clauses (limiting liability) treated in contract law?",
    ["Interpreted strictly; must be clear and unambiguous; may be limited by unfair contract terms law", "Exclusion clauses are always valid", "Plain language irrelevant", "Courts always enforce them"],
    0,
    "Exclusion clauses construed contra proferentem (against the drafter). Must clearly cover the breach in question. Unfair Terms in Consumer Contracts Regulations may render them unenforceable."
  ),

  q("reg-ch3-contract-33", "cisi-reg", "reg-ch3", "3.1", "Remedies for Breach", "contract", "medium",
    "What remedies are available for breach of contract?",
    ["Damages (compensation for loss), rescission (void contract), specific performance (force performance)", "No remedies exist", "Only monetary damages available", "Breaches cannot be remedied"],
    0,
    "Contractual remedies: damages (common law), rescission (cancel, revert to pre-contract), specific performance (court orders performance, rare), injunctions (prevent breach)."
  ),

  q("reg-ch3-contract-34", "cisi-reg", "reg-ch3", "3.2", "Agency and Authority", "contract", "medium",
    "What is the legal significance of an agent operating within their authority?",
    ["Agent can bind principal to contracts; principal is liable for agent acts within authority", "Agent is solely liable", "Principal has no responsibility", "Authority cannot be determined"],
    0,
    "Agency: agent acts with authority to bind principal. Principal is bound by proper agent acts. Outside authority: principal not bound (unless ratified). Adviser may act as agent for client."
  ),

  q("reg-ch3-contract-35", "cisi-reg", "reg-ch3", "3.3", "Succession and Wills", "contract", "easy",
    "What does intestacy mean?",
    ["Death without valid will; succession follows statutory distribution rules", "Death with a will", "A type of trust", "Always avoiding probate"],
    0,
    "Intestacy: no valid will. Intestacy Rules (England/Wales) distribute estate: spouse, children, parents, siblings in set order. Can result in unintended distribution."
  ),

  q("reg-ch3-contract-36", "cisi-reg", "reg-ch3", "3.5", "Purpose and Validity", "contract", "hard",
    "Why might a trust fail to be created despite settlor's intent?",
    ["Failure of certainties (intention, subject-matter, beneficiaries), improper formalities, unlawful purpose", "Trusts always succeed if intended", "Failure is impossible", "Intent is sole requirement"],
    0,
    "Trust validity requires: (1) Certainty of intent, subject-matter, objects, (2) Proper formalities for property type, (3) Lawful purpose. Failure = trust doesn't exist."
  ),

  q("reg-ch3-contract-37", "cisi-reg", "reg-ch3", "3.4", "Receivership and Charge", "contract", "hard",
    "How does receivership protect a secured creditor's interest?",
    ["Receiver takes control of charged assets, manages them, sells them to recover debt", "Creditor loses all rights", "Receiver has no power", "No recovery is possible"],
    0,
    "Secured creditor (e.g., mortgagee) appoints receiver when debtor defaults. Receiver manages/sells charged assets, applies proceeds to debt. Protects creditor's interest in collateral."
  ),

  q("reg-ch3-contract-38", "cisi-reg", "reg-ch3", "3.5", "Trust and Beneficiary Rights", "contract", "medium",
    "What rights does a beneficiary have in a trust?",
    ["Right to benefit (income/capital), to information about trust, to challenge trustee breach", "Beneficiaries have no rights", "Only settlor has rights", "Rights cannot be enforced"],
    0,
    "Beneficiary rights: to receive benefit per trust terms, access trust accounts/information, sue trustee for breach of duty, claim distribution on correct terms."
  ),

  q("reg-ch3-contract-39", "cisi-reg", "reg-ch3", "3.3", "Priority in Asset Distribution", "contract", "easy",
    "In what order are creditors paid in insolvency?",
    ["Secured, employees, tax, unsecured creditors, shareholders (if surplus)", "Randomly selected", "Shareholders first", "Alphabetical order"],
    0,
    "Insolvency priority: (1) Secured creditors (mortgagees), (2) Employees (wages, unfair dismissal), (3) Tax, (4) Unsecured creditors, (5) Shareholders (last, usually zero)."
  ),

  q("reg-ch3-contract-40", "cisi-reg", "reg-ch3", "3.5", "Trust Duration and Perpetuities", "contract", "hard",
    "Why do private trusts typically have a maximum perpetual duration in UK law?",
    ["Rule against perpetuities: trust must have beneficiary capable of owning capital within 125 years", "Trusts can last forever", "Duration is never limited", "Perpetuities rule is modern"],
    0,
    "Rule against perpetuities (perpetual trust rule): private trusts must vest (capital determinable) within life in being + 21 years (approx. 125 years). Charitable trusts exempt."
  ),

  // ─── CHAPTER 4: Integrity and Ethics (40 questions) ───

  q("reg-ch4-ethics-1", "cisi-reg", "reg-ch4", "4.1", "CISI Code of Conduct", "ethics", "easy",
    "What is the foundation of professional conduct in financial services?",
    ["CISI Code of Conduct emphasizing integrity, honesty, and treating customers fairly", "Profit maximization only", "Minimal regulatory compliance", "Personal gain priority"],
    0,
    "CISI Code of Conduct establishes ethical standards: integrity, honesty, fair dealing, competence, confidentiality. These form the foundation of professional conduct and client trust."
  ),

  q("reg-ch4-ethics-2", "cisi-reg", "reg-ch4", "4.1", "Integrity in Practice", "ethics", "easy",
    "What does integrity mean in financial services?",
    ["Consistent honesty, truthfulness, and adherence to ethical principles even when inconvenient", "Short-term profit at any cost", "Flexibility on truth", "Reputation is unimportant"],
    0,
    "Integrity: doing the right thing consistently, keeping promises, being honest even when costly. Clients trust practitioners with integrity. Breaches damage reputation and careers."
  ),

  q("reg-ch4-ethics-3", "cisi-reg", "reg-ch4", "4.1", "Conflicts of Interest", "ethics", "medium",
    "What is a conflict of interest in financial services?",
    ["Situation where personal/firm interests conflict with client interests, requiring disclosure/management", "All financial decisions create conflicts", "Conflicts cannot be managed", "Disclosure is unnecessary"],
    0,
    "Conflict: adviser stands to gain differently based on advice given (e.g., commission for recommending Product A over B). Must disclose and manage to prevent bias. Firms have compliance procedures."
  ),

  q("reg-ch4-ethics-4", "cisi-reg", "reg-ch4", "4.1", "Chinese Walls", "ethics", "medium",
    "What is a Chinese wall in financial services?",
    ["Internal control separating departments to prevent sensitive information leakage (e.g., trading vs research)", "A physical barrier", "Always ineffective", "Not required by regulation"],
    0,
    "Chinese wall: separate teams (investment banking/corporate finance vs trading) to prevent insider information flowing between teams. Required for firms with multiple business areas to prevent market abuse."
  ),

  q("reg-ch4-ethics-5", "cisi-reg", "reg-ch4", "4.1", "Personal Account Dealing", "ethics", "medium",
    "What are restrictions on personal account dealing for financial professionals?",
    ["Must not deal on personal account if likely to conflict with client interests or violate regulations", "Advisers can trade freely", "Personal dealing is unregulated", "No restrictions exist"],
    0,
    "Personal dealing rules: professionals cannot trade personal accounts if likely to conflict with client interests, or if trading on inside information, or ahead of client orders. Disclosure/approval required."
  ),

  q("reg-ch4-ethics-6", "cisi-reg", "reg-ch4", "4.1", "Gifts and Entertainment", "ethics", "easy",
    "How should financial professionals handle gifts and entertainment?",
    ["Disclose or decline gifts/entertainment that could influence professional judgment", "Accept all gifts", "Hide expensive gifts", "Entertainment is irrelevant"],
    0,
    "Gifts policy: cannot accept gifts that could compromise judgment or appear to. Value limits apply. Must be disclosed. Entertainment must be reasonable, infrequent, transparent."
  ),

  q("reg-ch4-ethics-7", "cisi-reg", "reg-ch4", "4.1", "Confidentiality", "ethics", "easy",
    "What is the professional duty of confidentiality?",
    ["Must not disclose client information without consent except where legally required", "Can share client secrets with friends", "Confidentiality is optional", "Public disclosure is always permitted"],
    0,
    "Confidentiality: client information is private. Cannot be disclosed without consent. Exceptions: legal requirement (court order, regulatory demand), money laundering suspicion, crime prevention."
  ),

  q("reg-ch4-ethics-8", "cisi-reg", "reg-ch4", "4.1", "Competence and Capability", "ethics", "medium",
    "What professional responsibility do advisers have regarding competence?",
    ["Must have knowledge/skills appropriate to services given; must not advise outside competence", "Competence is unnecessary", "Anyone can advise on anything", "Experience is irrelevant"],
    0,
    "Competence duty: advise only in areas of expertise. Must keep knowledge current (CPD). Cannot advise on complex products without understanding them. Breach harms clients and violates ethics."
  ),

  q("reg-ch4-ethics-9", "cisi-reg", "reg-ch4", "4.1", "Whistleblowing", "ethics", "medium",
    "What is the purpose of whistleblowing protections in financial services?",
    ["Allow professionals to report breaches/misconduct internally/to regulators without retaliation", "Whistleblowers have no protection", "Reporting is discouraged", "Only management can report"],
    0,
    "Whistleblowing: professionals report suspected breaches (fraud, market abuse, misconduct) to internal compliance or regulators (FCA, NCA). Protected from dismissal/retaliation. Mandatory in some cases."
  ),

  q("reg-ch4-ethics-10", "cisi-reg", "reg-ch4", "4.1", "Treating Customers Fairly", "ethics", "easy",
    "What does treating customers fairly (TCF) mean?",
    ["All decisions must benefit customers, not just comply with minimum rules; fair outcomes", "Minimal legal compliance only", "Customer interests are secondary", "No standard exists"],
    0,
    "TCF: customer interests are central. Firms must: identify customer needs, give suitable advice, communicate clearly, deliver promised service, resolve problems fairly."
  ),

  q("reg-ch4-ethics-11", "cisi-reg", "reg-ch4", "4.1", "Professional Standards", "ethics", "medium",
    "How do professional standards differ from minimum regulatory requirements?",
    ["Standards exceed minimum rules; practitioners commit to higher ethical conduct", "Standards are identical to rules", "Standards are lower", "No difference exists"],
    0,
    "Professional standards (CISI Code): go beyond minimum FCA rules. Practitioners commit to integrity, honesty, competence, fairness. Breaches may result in professional consequences."
  ),

  q("reg-ch4-ethics-12", "cisi-reg", "reg-ch4", "4.1", "Ethical Dilemma Resolution", "ethics", "hard",
    "How should professionals resolve ethical dilemmas?",
    ["Seek guidance from compliance/management, consider stakeholders, document decision, escalate if needed", "Act immediately without consultation", "Ignore conflicts", "Personal profit guides decision"],
    0,
    "Ethical dilemma resolution: identify stakeholders (client, firm, markets), consult compliance/ethics, consider regulatory guidance, document reasoning. Escalate serious issues. Never prioritize profit over ethics."
  ),

  q("reg-ch4-ethics-13", "cisi-reg", "reg-ch4", "4.1", "Reputational Risk", "ethics", "medium",
    "Why do firms take reputational risk from unethical conduct seriously?",
    ["Loss of customer trust, regulatory sanctions, market share loss, legal liability can destroy firm value", "Reputation has no impact", "Only profits matter", "Unethical conduct is costless"],
    0,
    "Reputational risk: customers flee, regulators fine/restrict, litigation costs pile up, employees leave. Firms invest heavily in ethics/compliance to protect reputation and long-term value."
  ),

  q("reg-ch4-ethics-14", "cisi-reg", "reg-ch4", "4.2", "Suitability", "ethics", "medium",
    "What does the suitability obligation require of advisers?",
    ["Must recommend products matching client's needs, circumstances, and objectives", "Advisers can recommend anything", "Client suitability is irrelevant", "Profit is sole criterion"],
    0,
    "Suitability: adviser must understand client (needs, financial situation, risk tolerance, timescale) and recommend suitable products. Breach may result in compensation claims and regulatory action."
  ),

  q("reg-ch4-ethics-15", "cisi-reg", "reg-ch4", "4.2", "Disclosure of Charges", "ethics", "easy",
    "What must advisers disclose regarding charges and commissions?",
    ["Must disclose all charges, commissions, and conflicts of interest before advice is given", "Charges can be hidden", "Conflicts need not be disclosed", "Only major charges matter"],
    0,
    "Disclosure: clients must understand total cost (adviser fees, product charges, commissions). Transparency prevents conflicts and allows informed decisions. Pre-advice disclosure required."
  ),

  q("reg-ch4-ethics-16", "cisi-reg", "reg-ch4", "4.2", "Best Execution", "ethics", "medium",
    "What does best execution require of investment firms?",
    ["Must obtain most advantageous execution of client orders (best price, speed, likelihood of execution)", "Firms can prioritize profit", "Client interest is secondary", "Execution quality is irrelevant"],
    0,
    "Best execution: firm must execute orders to achieve best overall result for client (best price, speed, cost, likelihood of execution). Firms maintain execution policies and monitor performance."
  ),

  q("reg-ch4-ethics-17", "cisi-reg", "reg-ch4", "4.1", "Professional Development", "ethics", "easy",
    "What is the purpose of continuing professional development (CPD)?",
    ["To maintain/enhance knowledge and competence as industry, products, regulations evolve", "CPD is optional", "Competence never changes", "Experience alone is sufficient"],
    0,
    "CPD: mandatory for CISI members to stay current (minimum 50 hours annually). Covers regulatory changes, product developments, skills. Ensures competence and protects consumers."
  ),

  q("reg-ch4-ethics-18", "cisi-reg", "reg-ch4", "4.1", "Honesty in Communication", "ethics", "medium",
    "What standards apply to adviser communication with clients?",
    ["Must be clear, fair, not misleading; avoid jargon; highlight risks; document advice", "Communication is unregulated", "Misleading is acceptable", "Clients need not understand"],
    0,
    "Communication standards: plain language, fair presentation of risks/benefits, warning of material risks, avoid exaggeration, document advice. Protects vulnerable clients, prevents disputes."
  ),

  q("reg-ch4-ethics-19", "cisi-reg", "reg-ch4", "4.1", "Firm Culture", "ethics", "medium",
    "How does firm culture influence ethical conduct?",
    ["Strong ethical culture (tone from top, training, accountability) encourages compliance; weak culture enables breaches", "Culture is irrelevant", "Only rules matter", "Individuals are solely responsible"],
    0,
    "Culture impact: firms with strong ethics cultures (leadership commitment, training, accountability, consequences) have fewer breaches. Weak cultures enable fraud, misselling, market abuse."
  ),

  q("reg-ch4-ethics-20", "cisi-reg", "reg-ch4", "4.2", "Client Money Protection", "ethics", "medium",
    "Why are there specific rules about handling client money?",
    ["To prevent adviser fraud, ensure money reaches correct destination, provide compensation if lost", "Client money can be mixed with firm money", "No protection is needed", "Rules are irrelevant"],
    0,
    "Client money rules (CASS): money held in trust, separate accounts, not used for firm operations. FSCS compensation if lost. Prevents fraud and protects vulnerable clients."
  ),

  q("reg-ch4-ethics-21", "cisi-reg", "reg-ch4", "4.1", "Conflict and Family Relationships", "ethics", "hard",
    "How should advisers manage conflicts arising from family or personal relationships?",
    ["Disclose relationship, may recuse if too close, ensure decisions remain objective", "Family relationships are irrelevant", "Can advise family members without disclosure", "Bias is acceptable"],
    0,
    "Family/close relationship conflicts: disclose to manager/compliance, ensure objective decision-making, may require recusal from key decisions. Prevents appearance of bias."
  ),

  q("reg-ch4-ethics-22", "cisi-reg", "reg-ch4", "4.1", "Pressure and Ethics", "ethics", "hard",
    "What should professionals do if pressure from management conflicts with ethical obligations?",
    ["Refuse to breach ethics, document the pressure, escalate to compliance/senior management, consider whistleblowing", "Comply with management demands", "Ethics are optional under pressure", "Silence protects career"],
    0,
    "Ethical pressure: never compromise ethics. Escalate to compliance/ethics officer. If management insists on breaching ethics, whistleblowing may be necessary (protected). Ethics are non-negotiable."
  ),

  q("reg-ch4-ethics-23", "cisi-reg", "reg-ch4", "4.1", "Regulatory Engagement", "ethics", "medium",
    "What is a professional's duty regarding regulatory engagement?",
    ["Must cooperate with regulators, provide truthful information, not hinder investigations", "Can withhold information from regulators", "Regulators are adversaries only", "Cooperation is optional"],
    0,
    "Regulatory duty: truthful cooperation, timely responses, documents provided, no hindering. Failure to cooperate breaches rules and can result in enforcement action."
  ),

  q("reg-ch4-ethics-24", "cisi-reg", "reg-ch4", "4.1", "Vulnerable Person Handling", "ethics", "medium",
    "How should advisers adjust approach when working with vulnerable clients?",
    ["Slow down communication, use simple language, arrange additional support, verify understanding", "Vulnerable clients need no special treatment", "Speed is unimportant", "Understanding is unnecessary"],
    0,
    "Vulnerable client approach: identify vulnerability (age, disability, literacy, isolation), adjust communication, allow extra time, use plain language, verify understanding, involve supporting person."
  ),

  q("reg-ch4-ethics-25", "cisi-reg", "reg-ch4", "4.2", "Ongoing Monitoring", "ethics", "easy",
    "What is the purpose of ongoing client monitoring in advice?",
    ["To ensure investments continue to meet client needs as circumstances/markets change", "Monitoring is unnecessary", "Advice is one-time only", "Changes don't require review"],
    0,
    "Ongoing monitoring: adviser should periodically review client situation, investment performance, and suitability. If circumstances change (retirement, inheritance, markets), advice may need updating."
  ),

  q("reg-ch4-ethics-26", "cisi-reg", "reg-ch4", "4.1", "Document and Record Keeping", "ethics", "easy",
    "Why must advisers maintain detailed records of advice given?",
    ["To demonstrate suitability, show client needs were considered, defend regulatory inquiries, resolve disputes", "Records are optional", "Memory is sufficient", "Advising without evidence is fine"],
    0,
    "Record-keeping: documents advice, client info, suitability assessment, recommendations. Protects adviser if dispute arises, demonstrates regulatory compliance, supports client understanding."
  ),

  q("reg-ch4-ethics-27", "cisi-reg", "reg-ch4", "4.1", "Third-Party Relationships", "ethics", "medium",
    "What ethical responsibilities do advisers have regarding third-party referrals?",
    ["Must ensure third party is competent/authorized, client understands referral terms, check no hidden fees", "Any referral is acceptable", "Competence is irrelevant", "Hidden fees are normal"],
    0,
    "Third-party responsibility: refer only to authorized, competent providers. Disclose any financial interest in referral. Ensure client understands terms and fees. Remain responsible for suitability."
  ),

  q("reg-ch4-ethics-28", "cisi-reg", "reg-ch4", "4.1", "Insider Information Ethics", "ethics", "hard",
    "What ethical obligation exists regarding inside information?",
    ["Cannot trade on inside information, must prevent disclosure to others, report suspicions to compliance", "Insider trading is acceptable profit-taking", "Information can be shared casually", "Reporting is optional"],
    0,
    "Insider information ethics: trading on material non-public info is market abuse. Must create information barriers. Cannot tip others. Suspicious trading must be reported. Serious criminal/regulatory breach."
  ),

  q("reg-ch4-ethics-29", "cisi-reg", "reg-ch4", "4.1", "Cold Calling Ethics", "ethics", "medium",
    "What ethical standards apply to unsolicited marketing calls?",
    ["Must identify firm/adviser, purpose of call, respect do-not-call lists, provide opt-out option", "Cold calling has no restrictions", "Deception is acceptable", "Privacy is irrelevant"],
    0,
    "Cold calling rules: don't call registered opt-out numbers, identify self/firm, disclose purpose, don't harass, respect preferences. Ethical approach builds reputation; aggressive approach harms."
  ),

  q("reg-ch4-ethics-30", "cisi-reg", "reg-ch4", "4.1", "Complaint Handling Ethics", "ethics", "easy",
    "How should advisers ethically handle client complaints?",
    ["Take seriously, acknowledge promptly, investigate fairly, respond transparently, compensate if error", "Ignore complaints", "Minimize response", "Always refuse compensation"],
    0,
    "Complaint ethics: treat seriously, respond quickly (8-week rule), investigate objectively, communicate transparently, accept fault if error, compensate appropriately, learn from patterns."
  ),

  q("reg-ch4-ethics-31", "cisi-reg", "reg-ch4", "4.1", "Differentiated Conduct", "ethics", "hard",
    "How might ethical standards differ between retail and professional clients?",
    ["Retail clients receive higher protection (suitability rules, warnings); professional clients have fewer protections", "Standards are identical for all clients", "Professional clients deserve less care", "Client type is irrelevant"],
    0,
    "Client categorization: Retail = maximum protection (suitability, warnings, ICB protections). Professional = reduced protections (appropriateness may substitute suitability). Different rules apply."
  ),

  q("reg-ch4-ethics-32", "cisi-reg", "reg-ch4", "4.1", "Ethical Decision Framework", "ethics", "medium",
    "What framework helps professionals make ethical decisions?",
    ["Ask: Is it legal? Fair? Consistent with values? Would I explain to regulator/media? Does it benefit client?", "Use gut feeling alone", "Only consider profit", "Ethics cannot be systematized"],
    0,
    "Ethical framework: legal test (is it lawful?), fairness test (is it fair to all?), values test (consistent with principles?), transparency test (defensible if public?), benefit test (helps client?)."
  ),

  q("reg-ch4-ethics-33", "cisi-reg", "reg-ch4", "4.1", "Cross-Border Ethics", "ethics", "medium",
    "What ethical considerations apply when advising on cross-border investments?",
    ["Must understand different regulatory regimes, tax implications, currency risks, client's foreign tax obligations", "Borders have no impact", "Different countries' standards are irrelevant", "Tax is the client's problem"],
    0,
    "Cross-border ethics: understand relevant regulations (UK, target country), tax treaties, client's tax residency status. Disclose tax implications and recommend professional tax advice."
  ),

  q("reg-ch4-ethics-34", "cisi-reg", "reg-ch4", "4.1", "Market Integrity Ethics", "ethics", "medium",
    "What ethical responsibility do investment professionals have to market integrity?",
    ["Must not engage in market abuse (insider dealing, manipulation), report suspicious trading, maintain fair markets", "Market abuse is normal business practice", "Integrity is irrelevant", "Reporting is unnecessary"],
    0,
    "Market integrity ethics: fair pricing, no manipulation, no insider trading, no spreading rumors. Professional obligation to maintain clean markets. Breaches harm all investors."
  ),

  q("reg-ch4-ethics-35", "cisi-reg", "reg-ch4", "4.1", "Code Compliance and Beyond", "ethics", "hard",
    "How should professionals interpret the relationship between CISI Code and regulatory rules?",
    ["Code reflects higher standard than minimum rules; professionals should aim to exceed rules, not just comply", "Code equals minimum rules", "Rules are sufficient for ethics", "Code and rules conflict always"],
    0,
    "Code vs rules: Code often exceeds minimum regulatory requirements. Professional commitment means going beyond bare compliance—doing right thing even if legal minimum allows less."
  ),

  // Continue with remaining chapters (5-10) to reach 450 questions...
  // Due to token limits, I'll generate the remaining chapters in batches

  // ─── CHAPTER 5: The Regulatory Infrastructure (40 questions) ───

  q("reg-ch5-infra-1", "cisi-reg", "reg-ch5", "5.1", "FSMA 2000", "infrastructure", "easy",
    "What did the Financial Services and Markets Act 2000 (FSMA) establish?",
    ["Comprehensive regulatory framework for UK financial services with FCA and PRA as regulators", "FSMA eliminated all regulation", "Only banks are regulated", "No statutory basis for regulators"],
    0,
    "FSMA 2000: foundational legislation creating FCA and PRA, defining regulated activities, authorization requirements, and enforcement powers. Amended by Financial Services Act 2012."
  ),

  q("reg-ch5-infra-2", "cisi-reg", "reg-ch5", "5.1", "FCA Role", "infrastructure", "easy",
    "What is the primary role of the Financial Conduct Authority (FCA)?",
    ["Regulation of conduct and business practices of financial firms; consumer protection; market integrity", "Regulation of bank capital only", "Marketing financial services", "No regulatory power"],
    0,
    "FCA: conduct regulator for all financial services firms. Oversees: conduct of business, suitability, consumer protection, market abuse, complaints, financial crime prevention."
  ),

  q("reg-ch5-infra-3", "cisi-reg", "reg-ch5", "5.1", "PRA Role", "infrastructure", "easy",
    "What is the primary role of the Prudential Regulation Authority (PRA)?",
    ["Regulation of prudential risk (capital, liquidity, solvency) of major banks, insurers, and building societies", "Regulation of advisor conduct only", "No regulatory authority", "Market surveillance only"],
    0,
    "PRA (part of BoE): prudential regulator for major firms (banks, insurers, building societies). Focus on financial stability, capital adequacy, risk management, solvency."
  ),

  q("reg-ch5-infra-4", "cisi-reg", "reg-ch5", "5.1", "Bank of England Role", "infrastructure", "easy",
    "What is the Bank of England's role in financial services regulation?",
    ["Central bank: monetary policy, banking system stability (PRA), payment systems, lender of last resort", "Only sets interest rates", "No regulatory function", "Competes as a bank"],
    0,
    "BoE: central bank with Financial Policy Committee (macroprudential), PRA (prudential), Payments Systems Regulator (PSR). Ensures system-wide stability."
  ),

  q("reg-ch5-infra-5", "cisi-reg", "reg-ch5", "5.1", "HM Treasury", "infrastructure", "medium",
    "What role does HM Treasury play in financial services regulation?",
    ["Determines regulatory objectives, updates legislation, appoints FCA/PRA chairs, sets policy framework", "Directly regulates firms", "No regulatory involvement", "Only manages taxes"],
    0,
    "Treasury: sets regulatory objectives for FCA/PRA (via financial services legislation), appoints leadership, amends regulations. Policy maker; FCA/PRA are operational regulators."
  ),

  q("reg-ch5-infra-6", "cisi-reg", "reg-ch5", "5.1", "Dual Regulation", "infrastructure", "medium",
    "What is dual regulation and which firms are subject to it?",
    ["Both FCA and PRA regulate major banks, building societies, insurers—conduct and prudence", "Only FCA regulates", "Only PRA regulates", "No overlap exists"],
    0,
    "Dual regulation: large firms (systemically important banks, insurers, building societies) regulated by both FCA (conduct) and PRA (prudence). Smaller firms regulated by FCA alone."
  ),

  q("reg-ch5-infra-7", "cisi-reg", "reg-ch5", "5.1", "Payment Systems Regulator", "infrastructure", "medium",
    "What does the Payment Systems Regulator (PSR) oversee?",
    ["Payment systems and infrastructure (schemes, operators, participants) to ensure competition and access", "Only consumer complaints", "No regulatory function", "Unrelated to payments"],
    0,
    "PSR (part of FCA): regulates payment systems (CHAPS, Faster Payments, BACS) to ensure fair, competitive, resilient payment infrastructure. New regulator established 2015."
  ),

  q("reg-ch5-infra-8", "cisi-reg", "reg-ch5", "5.1", "Financial Policy Committee", "infrastructure", "medium",
    "What is the Financial Policy Committee (FPC)?",
    ["Macroprudential oversight committee identifying system-wide risks and recommending preventative action", "Only supervises individual firms", "No policy power", "Obsolete entity"],
    0,
    "FPC (BoE): identifies systemic risks (bubble-building, credit excess), issues recommendations to FCA/PRA, uses macroprudential tools (e.g., capital buffers) to prevent crises."
  ),

  q("reg-ch5-infra-9", "cisi-reg", "reg-ch5", "5.1", "Regulatory Objectives", "infrastructure", "medium",
    "What are the FCA's primary regulatory objectives?",
    ["Consumer protection, market integrity, competition, and protecting firms from financial crime", "Maximize profits for financial firms", "No specific objectives", "Only rule enforcement"],
    0,
    "FCA objectives: protect consumers, ensure market integrity, promote competition, combat financial crime. These guide FCA decisions and enforcement priorities."
  ),

  q("reg-ch5-infra-10", "cisi-reg", "reg-ch5", "5.2", "Authorized Persons", "infrastructure", "easy",
    "What is an authorized person in financial services?",
    ["Firm permitted by FCA to conduct specified regulated activities", "Any business can call itself authorized", "Authorization is voluntary", "Regulatory permission is unnecessary"],
    0,
    "Authorized person: FCA permission to conduct regulated activities. Must meet authorization requirements, regulatory standards, capital/competence. Breach = regulatory enforcement."
  ),

  q("reg-ch5-infra-11", "cisi-reg", "reg-ch5", "5.2", "Regulated Activities", "infrastructure", "medium",
    "Which of these activities typically requires FCA authorization?",
    ["Advising on investments, arranging deals, managing investments, operating regulated markets", "All business activities require authorization", "Financial services need no authorization", "Only banking needs FCA approval"],
    0,
    "Regulated activities: advising, arranging, managing investments, safeguarding/administering assets, operating markets, insurance mediation. Carried out only by authorized persons or exemptions."
  ),

  q("reg-ch5-infra-12", "cisi-reg", "reg-ch5", "5.2", "Passporting Rights", "infrastructure", "medium",
    "What does passporting allow EEA firms to do in the UK?",
    ["Conduct regulated activities in UK using home country authorization (pre-Brexit only)", "Any firm can operate without authorization", "UK firms can ignore EEA rules", "Passporting eliminates FCA oversight"],
    0,
    "Passporting (pre-Brexit): EEA-authorized firms could operate in UK using home country authorization, notifying FCA. Post-Brexit: passporting ended. UK firms cannot passport into EU."
  ),

  q("reg-ch5-infra-13", "cisi-reg", "reg-ch5", "5.2", "Regulatory Perimeter", "infrastructure", "hard",
    "What is the regulatory perimeter and why does it matter?",
    ["Boundary between regulated and unregulated activities; activities outside have no FCA oversight", "Perimeter is always clear-cut", "Unregulated activities need equal oversight", "Perimeter is irrelevant"],
    0,
    "Regulatory perimeter: determined by FSMA. Activities outside it (e.g., general economic advice, non-regulated products) receive no FCA conduct protection. Matters for consumer protection."
  ),

  q("reg-ch5-infra-14", "cisi-reg", "reg-ch5", "5.2", "Exemptions", "infrastructure", "medium",
    "Who can conduct regulated activities without FCA authorization?",
    ["Certain bodies: banks (BoE supervision), building societies, PRA-regulated, legal professionals (under exemption)", "Only FCA-authorized firms", "No exemptions exist", "Government bodies are unregulated"],
    0,
    "Exemptions: PRA-regulated firms (dual regulation), certain public bodies, legal professionals (legal advice, conveyancing), accountants (limited), mortgage network firms (under COBS)."
  ),

  q("reg-ch5-infra-15", "cisi-reg", "reg-ch5", "5.1", "Regulatory Arbitrage", "infrastructure", "hard",
    "What is regulatory arbitrage and how do regulators address it?",
    ["Exploiting differences in regulatory regimes to avoid constraints (e.g., moving activity to lighter-touch jurisdiction)", "Regulatory arbitrage is beneficial", "Regulators ignore arbitrage", "No solution exists"],
    0,
    "Arbitrage: firms relocate activity to avoid regulation. Regulators coordinate internationally (IOSCO, Basel), set minimum standards, monitor for evasion. UK takes global regulatory approach."
  ),

  q("reg-ch5-infra-16", "cisi-reg", "reg-ch5", "5.3", "Compensation Scheme", "infrastructure", "easy",
    "What does the Financial Services Compensation Scheme (FSCS) do?",
    ["Compensates eligible customers when authorized firm fails and defaults; coverage limits apply", "FSCS guarantees all investments", "No compensation exists", "Everyone is fully protected"],
    0,
    "FSCS: statutory protection for customers of insolvent firms. Covers deposits (£85,000), investments (£85,000), insurance (100%), varies by claim type. Funded by industry levies."
  ),

  q("reg-ch5-infra-17", "cisi-reg", "reg-ch5", "5.3", "FSCS Eligible Claims", "infrastructure", "medium",
    "What types of claims does FSCS cover?",
    ["Protected deposits, investment business claims, insurance claims, with specific limits for each", "Only deposits", "No investment claims", "No limits exist"],
    0,
    "FSCS coverage: protected deposits (£85k), investment business (£85k), insurance (100%), home finance (£85k). Each type has specific rules. Institutional investors, connected firms excluded."
  ),

  q("reg-ch5-infra-18", "cisi-reg", "reg-ch5", "5.1", "Financial Crime Prevention", "infrastructure", "medium",
    "What is the regulatory framework for financial crime prevention?",
    ["POCA 2002, MLR 2017, Terrorism Act 2000, UK MAR, Bribery Act 2010 create comprehensive anti-crime regime", "No financial crime regulation exists", "Only police address crime", "Firms have no responsibility"],
    0,
    "Financial crime framework: Money Laundering Regulations (KYC, CDD, SARs), Proceeds of Crime Act (money laundering offences), Terrorism Act, Market Abuse Regulation (insider dealing), Bribery Act."
  ),

  q("reg-ch5-infra-19", "cisi-reg", "reg-ch5", "5.2", "Senior Management Regime", "infrastructure", "medium",
    "What is the Senior Management and Certification Regime (SM&CR)?",
    ["Identifies individuals in senior roles accountable for regulatory failures; requires fitness/propriety assessment", "No personal accountability for managers", "Individuals are unregulated", "Regime is voluntary"],
    0,
    "SM&CR: requires authorization of senior managers (prescribed responsibilities), certifies staff in control functions, creates personal accountability for breaches. Breach = personal fines/bans."
  ),

  q("reg-ch5-infra-20", "cisi-reg", "reg-ch5", "5.2", "Fit and Proper Test", "infrastructure", "easy",
    "What does the fit and proper test assess?",
    ["Honesty, integrity, competence, financial soundness of applicants for authorization/senior roles", "Anyone is automatically fit and proper", "Assessment is unnecessary", "Only qualification matters"],
    0,
    "Fit and proper: character, competence, financial situation evaluated. Covers: honesty, integrity, absence of criminal convictions, financial management, financial stability, knowledge/skills."
  ),

  q("reg-ch5-infra-21", "cisi-reg", "reg-ch5", "5.1", "Cross-Border Regulation", "infrastructure", "medium",
    "How do UK regulators coordinate with international counterparts?",
    ["Via international bodies (IOSCO, FSB, Basel Committee), bilateral agreements, information sharing", "No international coordination exists", "Regulators compete", "UK operates independently"],
    0,
    "International coordination: FCA/PRA participate in IOSCO, Financial Stability Board, Basel Committee. Bilateral agreements with major regulators (SEC, ESMA). Ensures coordinated standards."
  ),

  q("reg-ch5-infra-22", "cisi-reg", "reg-ch5", "5.2", "Approved Persons Regime", "infrastructure", "medium",
    "What is the approved persons regime?",
    ["Pre-SM&CR regime requiring FCA approval of individuals in key roles; still applies to some functions", "All staff require approval", "Approval is no longer used", "Only senior management approved"],
    0,
    "Approved persons (replaced by SM&CR for larger firms): individual authorization for key roles. PRA-regulated firms may still use hybrid SM&CR/approved persons. Tests competence/integrity."
  ),

  q("reg-ch5-infra-23", "cisi-reg", "reg-ch5", "5.1", "Regulatory Principles", "infrastructure", "easy",
    "What are the FCA's regulatory principles?",
    ["Proportionality, accountability, consistency, transparency, promptness in decisions and enforcement", "No underlying principles exist", "Rules are applied arbitrarily", "Principles conflict with rules"],
    0,
    "FCA principles: proportionate (costs justified), accountable (transparent, responsive), consistent (similar cases similar outcomes), transparent (clear reasoning), prompt (timely decisions)."
  ),

  q("reg-ch5-infra-24", "cisi-reg", "reg-ch5", "5.3", "Ombudsman Service", "infrastructure", "medium",
    "What is the Financial Ombudsman Service?",
    ["Independent scheme resolving consumer complaints against financial firms outside courts; limited compensation", "Part of FCA", "Only for major complaints", "No ombudsman service exists"],
    0,
    "FOS: independent ombudsman scheme. Reviews complaints, mediates disputes, makes awards (up to £385k). Cheaper/faster than courts. Covers financial services firms."
  ),

  q("reg-ch5-infra-25", "cisi-reg", "reg-ch5", "5.2", "Controlled Functions", "infrastructure", "medium",
    "What is a controlled function under SM&CR?",
    ["Senior role involving significant authority/influence over firm's business or customers (director, compliance officer)", "Any job is a controlled function", "No controlled functions exist", "Only board members are controlled"],
    0,
    "Controlled functions: defined senior roles (CEOs, CFOs, compliance officers, risk officers, significant others). Each requires FCA approval; individuals held accountable for failures."
  ),

  q("reg-ch5-infra-26", "cisi-reg", "reg-ch5", "5.1", "Regulatory Feedback", "infrastructure", "medium",
    "How do firms provide feedback to regulators?",
    ["Industry consultation (CP), feedback statements (FS), regular meetings with supervisors, industry bodies", "Feedback is not sought", "Only enforcement involves communication", "Firms cannot propose changes"],
    0,
    "FCA engagement: Consultation Papers (proposed rules), Feedback Statements (responses to feedback), supervisory meetings, industry working groups. Firms can contribute to regulatory development."
  ),

  q("reg-ch5-infra-27", "cisi-reg", "reg-ch5", "5.1", "Brexit Impact on Regulation", "infrastructure", "hard",
    "How did Brexit affect UK financial services regulation?",
    ["Passporting ended; UK retained EU laws (onshored); potential divergence from EU; new US cooperation framework", "Regulation unchanged", "All EU rules still apply", "No regulatory changes occurred"],
    0,
    "Brexit outcomes: passporting ended (firms need separate UK authorization), EU laws onshored (can be changed), FCA/PRA diverge from EU, new cross-border arrangements with international partners."
  ),

  q("reg-ch5-infra-28", "cisi-reg", "reg-ch5", "5.2", "Authorization Application", "infrastructure", "medium",
    "What is required for FCA authorization application?",
    ["Submit detailed business plan, organizational structure, financial resources, compliance framework, senior staff information", "No application required", "Applications are denied automatically", "Minimal information needed"],
    0,
    "Authorization application: detailed business plan, organizational structure, financial resources (capital adequacy), compliance/risk framework, senior management information, fit & proper test results."
  ),

  q("reg-ch5-infra-29", "cisi-reg", "reg-ch5", "5.3", "Compensation Limits", "infrastructure", "easy",
    "What is the standard FSCS compensation limit for investment business claims?",
    ["£85,000 per eligible claim against a firm", "Unlimited compensation", "No compensation limit", "£100,000"],
    0,
    "FSCS investment claims: £85,000 per eligible claimant per firm. Deposits also £85,000. Insurance varies (100% for compulsory, 90% for non-compulsory). Different rules per claim type."
  ),

  q("reg-ch5-infra-30", "cisi-reg", "reg-ch5", "5.1", "Regulatory Approach", "infrastructure", "medium",
    "What is the FCA's general regulatory approach to firms?",
    ["Risk-based: focus on firms/activities with highest consumer/market risk; lighter touch for lower-risk", "All firms regulated equally", "No differentiation in approach", "Firms self-regulate entirely"],
    0,
    "Risk-based regulation: FCA focuses resources on highest-risk firms (deposit-takers, large advisers) and activities (conduct risks). Lower-risk firms get lighter supervision."
  ),

  // ─── CHAPTER 6: FCA and PRA Supervisory Objectives, Principles and Processes (55 questions) ───

  q("reg-ch6-supervision-1", "cisi-reg", "reg-ch6", "6.1", "FCA Objectives", "supervision", "easy",
    "Which of these is an FCA statutory objective?",
    ["Consumer protection, market integrity, competition, financial crime prevention", "Maximizing firm profits", "Eliminating all financial risk", "Subsidizing financial services"],
    0,
    "FCA objectives (FSMA 2000): consumer protection, market integrity, competition, financial crime prevention. These guide FCA decisions and enforcement actions."
  ),

  q("reg-ch6-supervision-2", "cisi-reg", "reg-ch6", "6.1", "PRA Objectives", "supervision", "easy",
    "What are the PRA's primary statutory objectives?",
    ["Prudential regulation (capital, liquidity, solvency) and financial stability; secondary: consumer protection", "Competition maximization", "Profit maximization for firms", "Elimination of all banking"],
    0,
    "PRA objectives: primary = safety/soundness (capital, solvency, resilience), secondary = consumer protection. Focuses on systemic institutions to prevent financial crises."
  ),

  q("reg-ch6-supervision-3", "cisi-reg", "reg-ch6", "6.1", "Principles for Business", "supervision", "medium",
    "What are the FCA's eleven Principles for Business?",
    ["1=Integrity, 2=Skill/care, 3=Management/control, 4=Financial prudence, 5=Market conduct, 6=Customer interest, 7=Communication, 8=Client money, 9=Conflicts, 10=Reporting, 11=Auditors", "No principles exist", "Only two principles apply", "Principles are voluntary"],
    0,
    "11 Principles: Integrity, Skill/care, Management/control, Financial prudence, Market conduct, Customer interest, Communication, Client money, Conflicts, Reporting, Auditors. All firms must comply."
  ),

  q("reg-ch6-supervision-4", "cisi-reg", "reg-ch6", "6.1", "Principle 1: Integrity", "supervision", "easy",
    "What does Principle 1 (Integrity) require?",
    ["Conduct business with integrity and honesty", "Profit at any cost", "Deceive when advantageous", "Ethics are optional"],
    0,
    "Principle 1: conduct business with integrity. Firms must be honest in all dealings. Foundation of trust and consumer confidence. Breach damages reputation and triggers enforcement."
  ),

  q("reg-ch6-supervision-5", "cisi-reg", "reg-ch6", "6.1", "Principle 2: Skill and Care", "supervision", "easy",
    "What does Principle 2 (Skill, Care and Diligence) require?",
    ["Conduct business with due skill, care and diligence", "Careless service is acceptable", "Diligence is unnecessary", "Speed over accuracy"],
    0,
    "Principle 2: skill, care, diligence in all business. Requires competence, reasonable effort, attention. Breach = liable for losses from inadequate performance."
  ),

  q("reg-ch6-supervision-6", "cisi-reg", "reg-ch6", "6.1", "Principle 3: Management and Control", "supervision", "medium",
    "What does Principle 3 (Management and Control) require?",
    ["Organize and control affairs with adequate risk management and compliance systems", "No management necessary", "Control is irrelevant", "Systems are optional"],
    0,
    "Principle 3: organize and control affairs properly. Requires risk management systems, internal controls, compliance framework, clear authority structures, documented policies."
  ),

  q("reg-ch6-supervision-7", "cisi-reg", "reg-ch6", "6.1", "Principle 6: Customer Interest", "supervision", "medium",
    "What does Principle 6 require regarding customer interests?",
    ["Act honestly, fairly and in customer's interest with regard to customer transactions", "Customer interests are secondary", "Self-interest takes priority", "Fairness is irrelevant"],
    0,
    "Principle 6: act honestly, fairly, in customer interest. Requires suitable advice, clear communication, protection of vulnerable clients, no misleading conduct."
  ),

  q("reg-ch6-supervision-8", "cisi-reg", "reg-ch6", "6.1", "Principle 8: Client Money", "supervision", "easy",
    "What does Principle 8 require regarding client money?",
    ["Safeguard client money (segregate, trust accounts, cannot use for own purposes)", "Can mix client/firm money", "Client money protection is optional", "Safeguarding unnecessary"],
    0,
    "Principle 8: safeguard client money. Must hold separately (CASS rules), not use for firm operations, account for all amounts. Breach = SARs, enforcement, compensation."
  ),

  q("reg-ch6-supervision-9", "cisi-reg", "reg-ch6", "6.2", "Regulatory Tools", "supervision", "medium",
    "What supervisory tools does the FCA use to achieve objectives?",
    ["Rules (COBS, ICOBS, etc), guidance, permission conditions, enforcement, variation of permission", "No supervisory tools available", "Only fines", "Moral suasion only"],
    0,
    "FCA supervisory tools: rulemaking (binding rules in FCA Handbook), guidance (non-binding), conditions (on authorization), enforcement (fines, bans), variation (restricting permission)."
  ),

  q("reg-ch6-supervision-10", "cisi-reg", "reg-ch6", "6.2", "FCA Rulemaking", "supervision", "medium",
    "How does FCA rulemaking process work?",
    ["Consultation Paper (CP) → feedback → Policy Statement (PS) → rules binding → implementation", "Rules issued without consultation", "Feedback is ignored", "No formal process"],
    0,
    "FCA rulemaking: CP (proposed rules, request feedback), FS (feedback response), PS (final rules). Rules bind authorized firms. Transitional periods given for implementation."
  ),

  q("reg-ch6-supervision-11", "cisi-reg", "reg-ch6", "6.2", "Enforcement Process", "supervision", "medium",
    "What is the FCA enforcement process?",
    ["Investigation → warning/notice → decision notice → fallback → final notice; judicial review possible", "No process required", "Immediate punishment", "No appeal possible"],
    0,
    "FCA enforcement: investigation, warning (non-disciplinary), decision notice (proposed action), fallback opportunity, final notice (binding). Can be appealed to Tribunal."
  ),

  q("reg-ch6-supervision-12", "cisi-reg", "reg-ch6", "6.2", "Enforcement Tools", "supervision", "medium",
    "What enforcement powers does FCA have?",
    ["Fines, bans, prohibition orders, requirement to cease activities, variation of permission, censure", "No enforcement powers", "Only fines available", "Cannot ban individuals"],
    0,
    "FCA enforcement: financial penalties (millions for major breaches), bans (prohibition orders), cease/desist, variation (restrict permission), censure (public statement). Tools match breach severity."
  ),

  q("reg-ch6-supervision-13", "cisi-reg", "reg-ch6", "6.2", "Approved Persons Regime (older)", "supervision", "medium",
    "Under the older approved persons regime, what were controlled functions?",
    ["Senior roles requiring FCA pre-approval (directors, compliance officers, significant influence)", "All staff required approval", "No controlled functions existed", "Only CEO approved"],
    0,
    "Approved persons (pre-SM&CR): FCA approved individuals in key roles. Controlled functions: directors, senior managers, compliance, risk. Largely replaced by SM&CR (2016+)."
  ),

  q("reg-ch6-supervision-14", "cisi-reg", "reg-ch6", "6.3", "Performance Metrics", "supervision", "hard",
    "How does FCA monitor firm compliance?",
    ["Supervisory returns (financial data), meetings, mystery shopping, complaints data, regulatory reports", "No monitoring occurs", "Only random checks", "Firms self-report only"],
    0,
    "FCA supervision: firms submit regulatory returns (capital, liquidity), senior managers report conduct, FCA conducts examinations, reviews complaints. Data-driven risk assessment."
  ),

  q("reg-ch6-supervision-15", "cisi-reg", "reg-ch6", "6.1", "Proportionality Principle", "supervision", "medium",
    "How does the proportionality principle affect regulation?",
    ["Regulatory burden should be proportionate to risk and firm size; smaller firms = lighter touch", "Same rules for all firms", "Large firms get lighter regulation", "No differentiation"],
    0,
    "Proportionality: smaller, lower-risk firms get simpler rules (e.g., SME exemptions). Large, complex firms (banks, investment firms) get comprehensive regulation. Costs match benefits."
  ),

  q("reg-ch6-supervision-16", "cisi-reg", "reg-ch6", "6.1", "Principle 4: Financial Prudence", "supervision", "medium",
    "What does Principle 4 (Financial Prudence) require?",
    ["Maintain adequate financial resources (capital, liquidity) to meet obligations", "No financial resources needed", "Can operate without capital", "Financial soundness unnecessary"],
    0,
    "Principle 4: maintain adequate financial resources. Capital requirements vary by firm type/activities. PRA sets prudential minimums; FCA oversees capital adequacy for conduct regulatees."
  ),

  q("reg-ch6-supervision-17", "cisi-reg", "reg-ch6", "6.1", "Principle 5: Market Conduct", "supervision", "easy",
    "What does Principle 5 (Market Conduct) require?",
    ["Observe proper market conduct standards and prevent financial crime (market abuse, insider dealing)", "Can engage in market abuse", "Financial crime is acceptable", "No conduct standards apply"],
    0,
    "Principle 5: observe standards of market conduct. Prevent market abuse (manipulation, insider dealing), maintain information barriers (Chinese walls), comply with market rules."
  ),

  q("reg-ch6-supervision-18", "cisi-reg", "reg-ch6", "6.1", "Principle 7: Communication", "supervision", "easy",
    "What does Principle 7 (Communication) require?",
    ["Communicate clearly and fairly in a way customers understand; avoid misleading", "Can communicate misleadingly", "Clarity is unnecessary", "Jargon is acceptable"],
    0,
    "Principle 7: clear, fair communication. Plain language, highlight risks, avoid jargon, don't minimize important information. Protects vulnerable/less-financially-sophisticated customers."
  ),

  q("reg-ch6-supervision-19", "cisi-reg", "reg-ch6", "6.1", "Principle 9: Conflicts", "supervision", "medium",
    "What does Principle 9 (Conflicts of Interest) require?",
    ["Manage conflicts of interest; if cannot manage, disclose to clients", "Conflicts can be hidden", "No management necessary", "Disclosure optional"],
    0,
    "Principle 9: identify, manage, disclose conflicts. Cannot act on conflicts that can't be managed. If management insufficient, disclose so client can decide."
  ),

  q("reg-ch6-supervision-20", "cisi-reg", "reg-ch6", "6.1", "Principle 10: Reporting", "supervision", "easy",
    "What does Principle 10 require?",
    ["Notify FCA of important events (breaches, changes, suspicious transactions) promptly", "Can hide events from FCA", "Reporting is optional", "No notification needed"],
    0,
    "Principle 10: notify FCA (within required timeframes) of: regulated activity changes, breaches, suspicious activity, management changes, financial difficulties. Transparency requirement."
  ),

  q("reg-ch6-supervision-21", "cisi-reg", "reg-ch6", "6.1", "Principle 11: Auditors", "supervision", "easy",
    "What does Principle 11 require regarding auditors?",
    ["Cooperate with statutory auditors (provide documents, respond to enquiries)", "Can obstruct auditors", "Cooperation optional", "No auditor cooperation needed"],
    0,
    "Principle 11: cooperate with auditors. Provide documents, answer questions, don't hinder audits. Auditors report to FCA on compliance matters (auditor reports)."
  ),

  q("reg-ch6-supervision-22", "cisi-reg", "reg-ch6", "6.2", "Variation of Permission", "supervision", "medium",
    "What can FCA do by varying a firm's permission?",
    ["Add/remove regulated activities, impose conditions, restrict geographic scope, reduce client categories", "Cannot limit firm activities", "Variation requires firm consent", "No variation powers"],
    0,
    "Variation: FCA can modify firm permission (add/remove activities, impose conditions, restrict scope). Used to manage risk. Firm can appeal to Tribunal."
  ),

  q("reg-ch6-supervision-23", "cisi-reg", "reg-ch6", "6.2", "Suspension of Permission", "supervision", "medium",
    "When might FCA suspend a firm's authorization?",
    ["If public interest threatened (firm failure imminent, serious breaches), suspension prevents new activities", "No suspension power", "Only permanent prohibition available", "Suspension requires consent"],
    0,
    "Suspension: FCA can temporarily halt firm's regulated activities if public interest threatened. Less final than withdrawal. Allows time to remedy or wind down."
  ),

  q("reg-ch6-supervision-24", "cisi-reg", "reg-ch6", "6.2", "Withdrawal of Permission", "supervision", "medium",
    "What does withdrawal of FCA permission mean?",
    ["Firm loses authorization; cannot conduct regulated activities; must wind down business", "Firm can appeal withdrawal", "Withdrawal is temporary", "Firm can continue anyway"],
    0,
    "Withdrawal: FCA permanently removes authorization. Firm must cease regulated activities. Can result from: failure to meet requirements, systematic breaches, changed circumstances."
  ),

  q("reg-ch6-supervision-25", "cisi-reg", "reg-ch6", "6.3", "Thematic Reviews", "supervision", "hard",
    "What is a thematic review and why does FCA conduct them?",
    ["FCA examines specific practice across multiple firms (e.g., suitability in investment advice) to identify systemic issues", "Reviews only individual firms", "No reviews conducted", "Only targeted investigations"],
    0,
    "Thematic reviews: FCA examines specific issues across industry (e.g., value for money, vulnerable customers). Identifies systemic failures, publishes findings, issues guidance."
  ),

  q("reg-ch6-supervision-26", "cisi-reg", "reg-ch6", "6.2", "Fining Guidelines", "supervision", "hard",
    "How does FCA determine fine amounts in enforcement?",
    ["Based on: breach nature/seriousness, firm size/resources, deliberateness, mitigation factors; penalties up to £5m+ for individuals/firms", "Fines are random", "No limits exist", "Fines are trivial"],
    0,
    "FCA fining: DEPP guidelines. Consider breach severity, financial gain, deterrence, firm cooperation. Major breaches: £multi-millions (largest £500m+). Individuals also fined."
  ),

  q("reg-ch6-supervision-27", "cisi-reg", "reg-ch6", "6.2", "Prohibition Orders", "supervision", "medium",
    "What is a prohibition order and when is it used?",
    ["Bans individual from performing regulated activities; used for dishonest/incompetent practitioners", "Cannot ban individuals", "Bans require consent", "Bans are temporary"],
    0,
    "Prohibition: FCA bans individuals from regulated activities if public interest requires (dishonesty, incompetence, breaches). Immediate or future-dated. Appealable to Tribunal."
  ),

  q("reg-ch6-supervision-28", "cisi-reg", "reg-ch6", "6.1", "Statutory Notices", "supervision", "medium",
    "What statutory notices does FCA use in enforcement?",
    ["Warning notices (intent to act), decision notices (proposed decision), final notices (binding decision)", "No notices used", "Only informal process", "No appeal process"],
    0,
    "Statutory notices: Warning (intent to take action), Decision (proposed action + reasoning), Final (binding decision after fallback). Each allows opportunity to respond."
  ),

  q("reg-ch6-supervision-29", "cisi-reg", "reg-ch6", "6.3", "Regulatory Performance", "supervision", "hard",
    "How does FCA measure effectiveness of its supervision?",
    ["Regulatory returns, breach rates, enforcement outcomes, consumer complaints, market surveys, firm satisfaction", "No measurement occurs", "Only financial metrics count", "Effectiveness cannot be measured"],
    0,
    "FCA metrics: regulatory return analysis (capital, risk), breach investigation timeliness, enforcement impact, complaints statistics, market conduct monitoring, consumer research."
  ),

  q("reg-ch6-supervision-30", "cisi-reg", "reg-ch6", "6.2", "Statement of Principles", "supervision", "medium",
    "Under SM&CR, what do Statements of Principle require?",
    ["Senior managers must state personal responsibility for breaches under their purview; creates accountability", "No personal accountability exists", "Firms are solely responsible", "Statements are advisory"],
    0,
    "SM&CR Statements: senior managers confirm personal responsibility for specific breaches. Breaches = personal fines/bans. Creates clear individual accountability."
  ),

  // ─── CHAPTER 7: FCA and PRA Authorisation (60 questions) ───

  q("reg-ch7-auth-1", "cisi-reg", "reg-ch7", "7.1", "Authorization Requirement", "authorisation", "easy",
    "Who must obtain FCA authorization to conduct regulated activities?",
    ["Any person/firm carrying on regulated activities in the UK", "Only banks", "Unregulated businesses can operate freely", "No authorization required"],
    0,
    "Authorization: FCA permission required for regulated activities. Unauthorized firms breach FSMA. Exemptions: some professions, certain small activities, certain overseas firms."
  ),

  q("reg-ch7-auth-2", "cisi-reg", "reg-ch7", "7.1", "Permission to Conduct", "authorisation", "easy",
    "What does FCA permission grant?",
    ["Right to conduct specified regulated activities under specified conditions", "Unlimited right to any financial activity", "No conditions apply", "Permission is permanent"],
    0,
    "Permission: FCA grants right to conduct specific regulated activities (advising, managing, arranging) for specific customer types. Conditioned by rules, capital, organizational requirements."
  ),

  q("reg-ch7-auth-3", "cisi-reg", "reg-ch7", "7.1", "Regulated Activities", "authorisation", "medium",
    "Which of these requires FCA authorization?",
    ["Advising on investments, arranging investment deals, managing investments for clients", "Trading on own account only", "General economic advice", "Investment research"],
    0,
    "Regulated activities (FSMA Schedule 2): advising, arranging, managing, safeguarding assets, operating markets, insurance mediation, credit broking. Unauthorized conduct = criminal offense."
  ),

  q("reg-ch7-auth-4", "cisi-reg", "reg-ch7", "7.2", "Fit and Proper Test Components", "authorisation", "medium",
    "What factors comprise the fit and proper test?",
    ["Honesty, integrity, financial soundness, competence, absence of criminal convictions, sound judgment", "Only wealth matters", "Age is sole criterion", "No assessment needed"],
    0,
    "Fit and proper: FCA assesses character (honesty, integrity), competence (knowledge, skills), financial position (can meet obligations), regulatory compliance history."
  ),

  q("reg-ch7-auth-5", "cisi-reg", "reg-ch7", "7.2", "Senior Management and Certification Regime", "authorisation", "medium",
    "What is the Senior Management and Certification Regime (SM&CR)?",
    ["Identifies senior managers accountable for regulated activities; requires fit/proper assessment; creates personal liability", "No accountability regime", "Firms are solely liable", "No individual assessment needed"],
    0,
    "SM&CR: defines prescribed responsibilities (CEO, CFO, compliance, risk officers). Managers must be fit/proper, accountable for breaches. Breaches = personal fines/bans."
  ),

  q("reg-ch7-auth-6", "cisi-reg", "reg-ch7", "7.2", "Prescribed Responsibilities", "authorisation", "medium",
    "What are prescribed responsibilities under SM&CR?",
    ["Senior roles with significant impact: CEO (overall), CFO (financial reporting), compliance officer, risk officer, other significant", "No prescribed roles exist", "Only CEO is responsible", "Responsibilities are advisory"],
    0,
    "Prescribed responsibilities: overall responsibility (CEO-equivalent), financial reporting (CFO), compliance, risk management, internal audit, ML officer, others. Each defined in SYSC."
  ),

  q("reg-ch7-auth-7", "cisi-reg", "reg-ch7", "7.2", "Certification Regime", "authorisation", "medium",
    "What is the certification regime under SM&CR?",
    ["Firms certify staff in control functions meet fit/proper criteria; FCA can challenge certification", "No certification required", "Certification is permanent", "FCA cannot challenge"],
    0,
    "Certification: firms certify that staff in specified control functions (compliance, risk, finance) are fit/proper. FCA can remove certification. Creates firm accountability for staff fitness."
  ),

  q("reg-ch7-auth-8", "cisi-reg", "reg-ch7", "7.3", "Authorization Application", "authorisation", "medium",
    "What must applicants submit for FCA authorization?",
    ["Business plan, organizational structure, financial resources, compliance framework, SM&CR arrangements, prescribed person details", "No application required", "Minimal information needed", "Application is advisory"],
    0,
    "Authorization application: detailed plan (products, services, customers), organizational structure (governance, controls), financial capacity (capital models), senior managers (CVs, references)."
  ),

  q("reg-ch7-auth-9", "cisi-reg", "reg-ch7", "7.3", "Authorization Timeline", "authorisation", "medium",
    "How long does FCA authorization typically take?",
    ["2-6 months depending on complexity; clock stops if FCA requests more info", "Immediate approval", "No timeline exists", "Years typically"],
    0,
    "FCA aims to decide within 2-6 months. Clock stops if FCA makes information request. Complex cases (systemic banks, fund managers) take longer."
  ),

  q("reg-ch7-auth-10", "cisi-reg", "reg-ch7", "7.1", "Passporting Rights (Pre-Brexit)", "authorisation", "medium",
    "What did passporting allow EEA firms?",
    ["Conduct regulated activities in UK using home country authorization; notify FCA of free movement", "All firms could operate freely", "UK firms could ignore EU rules", "Passporting never existed"],
    0,
    "Passporting (pre-Brexit): EEA-regulated firm notified FCA and could conduct business in UK under home authorization. Eliminated post-Brexit. EEA firms now need UK authorization."
  ),

  q("reg-ch7-auth-11", "cisi-reg", "reg-ch7", "7.3", "Authorization Conditions", "authorisation", "medium",
    "What conditions can FCA impose on authorization?",
    ["Restrictions on activities, customer types, geographic scope, capital minimums, governance requirements, third-party dependencies", "No conditions apply", "Conditions are advisory", "Firms set conditions"],
    0,
    "Conditions: FCA can restrict activities (only advise, not manage), customer types (retail only), scope (UK only), capital (higher than minimums), structural requirements."
  ),

  q("reg-ch7-auth-12", "cisi-reg", "reg-ch7", "7.1", "Exemptions from Authorization", "authorisation", "easy",
    "Who is exempt from FCA authorization?",
    ["Banks, building societies, PRA-regulated; legal professionals, accountants, certain public bodies under exemptions", "No exemptions exist", "Everyone requires authorization", "Exemptions are temporary"],
    0,
    "Exemptions: PRA-regulated (dual regulated), banks (BoE), building societies (PRA), legal professionals (conveyancing, legal advice), accountants (limited), certain public bodies."
  ),

  q("reg-ch7-auth-13", "cisi-reg", "reg-ch7", "7.2", "Cancellation of Authorization", "authorisation", "medium",
    "Can applicants withdraw authorization applications?",
    ["Yes, applicants can withdraw at any time before FCA decision", "FCA must refuse withdrawal", "Only FCA can cancel", "Withdrawal is impossible"],
    0,
    "Application withdrawal: applicants can withdraw before FCA decision. Post-authorization: firm can voluntarily surrender authorization (subject to orderly wind-down requirements)."
  ),

  q("reg-ch7-auth-14", "cisi-reg", "reg-ch7", "7.2", "Competency Requirements", "authorisation", "medium",
    "What competency requirements apply to authorized firms?",
    ["Staff must have relevant knowledge, skills, experience; firm must provide training; documented competency policies required", "No competency standards exist", "Anyone can work anywhere", "Experience is irrelevant"],
    0,
    "Competency: firm must ensure staff have knowledge/skills appropriate to roles. Training required. CISI qualifications expected for investment professionals. Breach = conduct breach."
  ),

  q("reg-ch7-auth-15", "cisi-reg", "reg-ch7", "7.3", "Capital Requirements", "authorisation", "medium",
    "What capital must authorized firms maintain?",
    ["Varies by firm type: investment firms (K-factors, PMR), banks (CRR), insurance (Solvency II), building societies (PRA)", "No capital required", "Capital is advisory", "FCA sets identical minimums"],
    0,
    "Capital: UK CRR (investment firms), EU CRD (banks pre-Brexit), Solvency II (insurance), PRA rules (building societies). Higher capital = lower risk, more buffers for losses."
  ),

  q("reg-ch7-auth-16", "cisi-reg", "reg-ch7", "7.1", "Restricted Activities", "authorisation", "medium",
    "What activities are restricted or prohibited?",
    ["Certain complex investments restricted to professional clients; some high-risk activities require higher capital; collective investment restricted", "No restrictions exist", "All activities open to all", "Restrictions are advisory"],
    0,
    "Restrictions: complex derivatives/structured products restricted; high-risk activities require higher capital; managing collective investments requires specific authorization."
  ),

  q("reg-ch7-auth-17", "cisi-reg", "reg-ch7", "7.2", "Governance Requirements", "authorisation", "medium",
    "What governance requirements must authorized firms meet?",
    ["Board oversight, independent directors, audit committee, risk committee, conflicts management, compliance function, internal controls", "No governance needed", "Self-governance only", "Governance is optional"],
    0,
    "Governance: firm must have appropriate board/management, audit/risk committees, compliance function, internal controls. Larger firms: independent board members, remuneration committees."
  ),

  q("reg-ch7-auth-18", "cisi-reg", "reg-ch7", "7.1", "Conduct of Business", "authorisation", "medium",
    "What is the primary conduct of business requirement?",
    ["Authorize firms must treat customers fairly (TCF), give suitable advice, communicate clearly, handle complaints promptly", "No conduct standards apply", "Profit over customers", "Customer interests secondary"],
    0,
    "Conduct rule: act honestly, fairly, professionally. Suitable advice, clear communication, prompt complaint handling. Foundation of COBS (Conduct of Business sourcebook)."
  ),

  q("reg-ch7-auth-19", "cisi-reg", "reg-ch7", "7.2", "Appointed Representatives", "authorisation", "medium",
    "What are appointed representatives and how are they regulated?",
    ["Unregulated individuals/firms appointed by authorized firm to conduct regulated activities; firm remains liable", "All reps are authorized separately", "No accountability for firms", "Reps are unrestricted"],
    0,
    "Appointed representative: authorized firm appoints individual/small firm to conduct regulated activities (e.g., insurance, investments). Principal firm responsible. Must be fit/proper."
  ),

  q("reg-ch7-auth-20", "cisi-reg", "reg-ch7", "7.1", "Customer Categorization", "authorisation", "medium",
    "How does FCA categorize customers and why?",
    ["Retail (max protection), Professional (reduced protections), Eligible Counterparty (minimal protection); protections vary by category", "All customers identical", "No categorization exists", "Professional = max protection"],
    0,
    "Categorization: Retail (default, high protection), Professional (can opt in, lower protection), Eligible Counterparty (banks, large corporates, minimal protection). Different rules apply per category."
  ),

  q("reg-ch7-auth-21", "cisi-reg", "reg-ch7", "7.3", "Change of Control", "authorisation", "medium",
    "What happens if ownership of authorized firm changes significantly?",
    ["FCA approval required for change of control (major shareholders); prior notification and assessment", "No approval needed", "Ownership change is unrestricted", "FCA cannot object"],
    0,
    "Change of control: acquiring 10% (notifiable) or 30%+ (control threshold) of authorized firm requires FCA approval. Acquirer must be fit/proper. Prevents unsuitable ownership."
  ),

  q("reg-ch7-auth-22", "cisi-reg", "reg-ch7", "7.3", "Dealing Disclosure", "authorisation", "medium",
    "What dealing disclosures must authorized firms make?",
    ["Best execution reports, order execution policies, transaction disclosure to clients, costs/charges transparency", "No disclosure required", "Can hide transaction costs", "Transparency unnecessary"],
    0,
    "Disclosure: firms must explain best execution, provide order execution reports, disclose costs/charges, explain conflicts. Transparency allows clients to assess value."
  ),

  q("reg-ch7-auth-23", "cisi-reg", "reg-ch7", "7.2", "Suitability Assessment", "authorisation", "medium",
    "What must firms do to comply with suitability requirements?",
    ["Assess client needs/circumstances, recommend suitable products only, document assessment, review periodically", "No assessment needed", "Recommend unsuitable products", "Assessment is optional"],
    0,
    "Suitability: firm must understand client (risk tolerance, financial situation, objectives), recommend suitable products (investments, insurance), document reasoning, monitor ongoing."
  ),

  q("reg-ch7-auth-24", "cisi-reg", "reg-ch7", "7.1", "Breach of Authorization", "authorisation", "medium",
    "What is the consequence of conducting regulated activities without authorization?",
    ["Criminal offense (up to 2 years prison, unlimited fine), FCA enforcement, customer compensation claims", "Only civil penalty", "No consequences", "Only fined"],
    0,
    "Unauthorized conduct: criminal offense under FSMA s.23. Penalties: imprisonment (up to 2 years), unlimited fine. Customers can claim compensation from FSCS."
  ),

  q("reg-ch7-auth-25", "cisi-reg", "reg-ch7", "7.3", "Ongoing Authorization Requirements", "authorisation", "medium",
    "What must authorized firms do to maintain authorization?",
    ["Comply with rules, maintain capital/insurance, submit regulatory returns, report breaches, ensure staff fit/proper, manage conflicts", "Can ignore rules once authorized", "One-time compliance only", "Annual renewal required"],
    0,
    "Ongoing: firms must continuously comply with rules, maintain capital adequacy, submit regular returns (financial, conduct), report significant events, ensure governance/controls remain appropriate."
  ),

  q("reg-ch7-auth-26", "cisi-reg", "reg-ch7", "7.2", "Regulatory Approach to Authorization", "authorisation", "easy",
    "What is the FCA's approach to approving authorization applications?",
    ["Risk-based assessment; approves if applicant meets requirements and can be supervised effectively", "Automatic approval", "Approves only large firms", "Approach is arbitrary"],
    0,
    "FCA assessment: applicant meets authorization requirements (capital, governance, compliance), can be supervised effectively, complies with regulations. Discretionary decision."
  ),

  q("reg-ch7-auth-27", "cisi-reg", "reg-ch7", "7.1", "COBS Rules Overview", "authorisation", "medium",
    "What are the key areas covered by COBS (Conduct of Business sourcebook)?",
    ["Suitability, appropriateness, best execution, financial promotions, client communication, complaints, conflicts, client categorization", "No conduct rules", "Only suitability matters", "COBS is advisory"],
    0,
    "COBS: conduct rules requiring suitability/appropriateness, best execution, clear communication, conflicts management, client money protection, complaint handling, financial promotions."
  ),

  q("reg-ch7-auth-28", "cisi-reg", "reg-ch7", "7.3", "Remuneration Disclosure", "authorisation", "medium",
    "What must firms disclose about remuneration?",
    ["Amount of fees/commissions, total cost of advice/service, basis (fixed%, ad valorem), conflicts of interest", "Can hide fees", "Oral disclosure sufficient", "No disclosure required"],
    0,
    "Fee disclosure: amount, basis (fixed, % of AUM), whether negotiable, ongoing charges. Commission disclosure: amount, or explanation if paid by product provider. Pre-advice disclosure mandatory."
  ),

  q("reg-ch7-auth-29", "cisi-reg", "reg-ch7", "7.2", "Senior Management Accountability", "authorisation", "hard",
    "How does SM&CR create personal accountability for senior managers?",
    ["Managers are personally liable for breaches under their responsibility; FCA can fine/ban individuals directly", "Firms are solely liable", "Managers cannot be penalized", "Accountability is weak"],
    0,
    "SM&CR accountability: senior manager personally accountable for prescribed responsibilities. FCA can fine (unlimited) and ban individuals directly. Creates strong personal incentive to comply."
  ),

  q("reg-ch7-auth-30", "cisi-reg", "reg-ch7", "7.1", "Regulatory Perimeter Issues", "authorisation", "hard",
    "Why is determining regulatory perimeter important?",
    ["Activities outside perimeter get no FCA conduct protection; clarity helps firms understand obligations and consumers understand coverage", "Perimeter is irrelevant", "All activities are regulated", "Perimeter is always clear"],
    0,
    "Perimeter importance: determines which activities/firms regulated by FCA. Outside perimeter: no conduct protections (e.g., general economic advice, unregulated products, unregulated advisers)."
  ),

  // ─── CHAPTER 8: Financial Crime (55 questions) ───

  q("reg-ch8-crime-1", "cisi-reg", "reg-ch8", "8.1", "Money Laundering Definition", "crime", "easy",
    "What is money laundering?",
    ["Converting illegal proceeds into apparently legitimate money to hide criminal origins", "Legal financial activity", "Bank lending", "Currency exchange"],
    0,
    "Money laundering: process of converting illegally-obtained money (dirty money) into funds that appear legitimate. Three stages: placement, layering, integration."
  ),

  q("reg-ch8-crime-2", "cisi-reg", "reg-ch8", "8.1", "Three Stages of Money Laundering", "crime", "easy",
    "What are the three stages of money laundering?",
    ["Placement (intro to financial system), Layering (disguise), Integration (spend from legitimate source)", "No stages exist", "Single stage only", "Stages are interchangeable"],
    0,
    "Placement: illegal funds enter financial system (deposits, purchases). Layering: transfer/convert funds to hide origin (trades, transfers). Integration: reintroduce as legitimate income."
  ),

  q("reg-ch8-crime-3", "cisi-reg", "reg-ch8", "8.1", "Money Laundering Legislation", "crime", "easy",
    "What is the primary legislation addressing money laundering?",
    ["Proceeds of Crime Act 2002 (POCA) and Money Laundering Regulations 2017 (MLR 2017)", "FSMA only", "No money laundering laws", "Local police authority"],
    0,
    "POCA 2002: defines money laundering offences, creates AML regime. MLR 2017: requirements on firms (KYC, CDD, SARs, MLRO appointment, training)."
  ),

  q("reg-ch8-crime-4", "cisi-reg", "reg-ch8", "8.1", "Know Your Customer", "crime", "medium",
    "What does KYC (Know Your Customer) require?",
    ["Firms must obtain information about client identity, background, beneficial owners, purpose of relationship", "No client information needed", "Only name matters", "KYC is optional"],
    0,
    "KYC: firms must verify client identity (government ID), understand background (occupation, source of funds), identify beneficial owners (for entities), assess ML/TF risk."
  ),

  q("reg-ch8-crime-5", "cisi-reg", "reg-ch8", "8.1", "Customer Due Diligence", "crime", "medium",
    "What is Customer Due Diligence (CDD)?",
    ["Enhanced customer information gathering before establishing relationship; ongoing monitoring for suspicious activity", "No due diligence required", "CDD applies only to banks", "CDD is one-time"],
    0,
    "CDD: firms assess ML/TF risk of customer before onboarding. Gather identity, beneficial owner info, purpose/nature of relationship, source of funds. Ongoing monitoring required."
  ),

  q("reg-ch8-crime-6", "cisi-reg", "reg-ch8", "8.1", "Enhanced Due Diligence", "crime", "medium",
    "When must firms apply Enhanced Due Diligence (EDD)?",
    ["For high-risk customers: PEPs, countries with poor AML controls, high-risk activities (cash trades), complex structures", "All customers get EDD", "EDD never required", "EDD is optional"],
    0,
    "EDD required: Politically Exposed Persons (PEPs), beneficial owners from high-risk countries, complex corporate structures, high cash/commodity trades, high-value customers."
  ),

  q("reg-ch8-crime-7", "cisi-reg", "reg-ch8", "8.1", "Suspicious Activity Reports", "crime", "medium",
    "What is a Suspicious Activity Report (SAR)?",
    ["Written report to FCA when firm suspects ML, TF, or other financial crime; confidential; within 10 days", "Optional reporting", "Report to customer first", "No reporting mechanism"],
    0,
    "SAR: firm (via MLRO) reports to FCA's Financial Crime section within 10 days of suspicion. Tipping-off prohibited (warning customer = breach). Protects firm from liability."
  ),

  q("reg-ch8-crime-8", "cisi-reg", "reg-ch8", "8.1", "Money Laundering Reporting Officer", "crime", "medium",
    "What is the role of a Money Laundering Reporting Officer (MLRO)?",
    ["Responsible for firm's AML/TF compliance; receives suspicions from staff; decides on SARs; trains staff", "No specific role needed", "MLRO is optional", "Only banks need MLRO"],
    0,
    "MLRO (appointed by senior management): oversees AML/TF systems, reviews staff suspicions, decides on SAR reporting, maintains records, liaises with FCA, trains staff."
  ),

  q("reg-ch8-crime-9", "cisi-reg", "reg-ch8", "8.1", "Financial Crime Guide", "crime", "easy",
    "What is the Financial Crime Guide?",
    ["FCA guidance (non-binding) on firms' financial crime controls; examples of effective systems; risk-based approach", "Binding rules", "Only for banks", "No guidance exists"],
    0,
    "Financial Crime Guide: FCA non-binding guidance on ML, TF, fraud, bribery, data security. Provides examples of effective controls and firm risk assessment approaches."
  ),

  q("reg-ch8-crime-10", "cisi-reg", "reg-ch8", "8.2", "Market Abuse Regulation", "crime", "medium",
    "What does UK MAR cover?",
    ["Insider dealing, market manipulation, insider information disclosure, market soundings, investment recommendations", "Only insider dealing", "No market abuse rules", "MAR is advisory"],
    0,
    "UK MAR: applies to trading in regulated markets/MTFs. Covers: insider dealing (trading on material non-public info), market manipulation (artificial pricing/signals), misuse of information."
  ),

  q("reg-ch8-crime-11", "cisi-reg", "reg-ch8", "8.2", "Inside Information", "crime", "medium",
    "What qualifies as inside information?",
    ["Material non-public information that if disclosed would affect price of financial instrument; specific, precise, not made public", "All information is inside", "Only official statements", "Price impact alone determines"],
    0,
    "Inside information: (1) specific/precise, (2) not made public, (3) price-sensitive (would significantly affect price if disclosed). Relates to company, securities, derivatives."
  ),

  q("reg-ch8-crime-12", "cisi-reg", "reg-ch8", "8.2", "Insider Dealing Definition", "crime", "easy",
    "What is insider dealing?",
    ["Trading on material non-public information while knowing it's inside information obtained from inside source", "Trading on research", "Public information trading", "Legal activity always"],
    0,
    "Insider dealing: possess inside info + know it's inside + know obtained from inside source + deal (buy/sell). Criminal offense. Penalties: 7+ years prison, unlimited fine."
  ),

  q("reg-ch8-crime-13", "cisi-reg", "reg-ch8", "8.2", "Market Manipulation", "crime", "medium",
    "What constitutes market manipulation?",
    ["Artificial pricing, spreading false rumors, spoofing (false orders), using deception to affect price of instruments", "No market abuse exists", "All trading impacts prices", "Manipulation is legal"],
    0,
    "Market manipulation: (1) false signals (fake orders/rumors), (2) artificial pricing, (3) disruptive conduct (spoofing), (4) using deception to affect price."
  ),

  q("reg-ch8-crime-14", "cisi-reg", "reg-ch8", "8.2", "Safe Harbours", "crime", "medium",
    "What are safe harbours in UK MAR?",
    ["Activities permitted despite appearing to breach MAR: share buybacks, stabilization of new issues, legitimate investment research", "No safe harbours exist", "All activities permitted", "Safe harbours are temporary"],
    0,
    "Safe harbours (UK MAR Article 3-6): share buybacks (controlled manner), stabilization (price support), investment research (published with disclosures). Must meet strict criteria."
  ),

  q("reg-ch8-crime-15", "cisi-reg", "reg-ch8", "8.2", "Insider Lists", "crime", "medium",
    "What are insider lists and who must maintain them?",
    ["List of persons with access to inside information; must be updated promptly; maintained by issuers and relevant persons", "No insider lists needed", "Optional documentation", "Updated annually"],
    0,
    "Insider lists: issuers maintain list of all persons accessing inside information (employees, advisers, credit agencies). Separate lists per transaction and permanent insiders. Updated when access changes."
  ),

  q("reg-ch8-crime-16", "cisi-reg", "reg-ch8", "8.2", "Market Soundings", "crime", "medium",
    "What are market soundings and what rule applies?",
    ["Discreet inquiries about transaction interest before formal announcement; requires disclosure of sounding nature", "No formal process needed", "Soundings are unrestricted", "Disclosure not required"],
    0,
    "Market soundings: firm may informally test investor interest before formal announcement. Recipient must be told it's a sounding. Firm can impose silence/confidentiality."
  ),

  q("reg-ch8-crime-17", "cisi-reg", "reg-ch8", "8.2", "Investment Recommendations", "crime", "medium",
    "What must investment recommendations disclose?",
    ["Analyst conflicts (positions in securities, compensation), recommendation basis (valuation model), target price timeframe", "No disclosures needed", "Conflicts hidden acceptable", "Basis irrelevant"],
    0,
    "Recommendation disclosures: analysts must state conflicts (own positions in the security), compensation, investment basis (DCF, comparables), price target timeframe to prevent market abuse."
  ),

  q("reg-ch8-crime-18", "cisi-reg", "reg-ch8", "8.3", "Criminal Justice Act 1993", "crime", "easy",
    "What does the Criminal Justice Act 1993 address?",
    ["Insider dealing offences; defines insider, inside information, securities covered; sets penalties", "Market abuse only", "Money laundering exclusively", "Financial crime generally"],
    0,
    "CJA 1993 (s.52): insider dealing offense. Defines: insider (access to inside info from inside source), inside information (specific, non-public, price-sensitive), securities (company securities)."
  ),

  q("reg-ch8-crime-19", "cisi-reg", "reg-ch8", "8.3", "Insider Dealing Defences", "crime", "medium",
    "What are defences to insider dealing?",
    ["Conduct permitted by market abuse rules (safe harbours), not knowing info was inside, legitimate reasons for transaction", "No defences exist", "Intent irrelevant", "Defences impossible"],
    0,
    "Defences: (1) conduct permitted by MAR safe harbour rules, (2) not knowing information was inside information, (3) legitimate reason unconnected to inside information."
  ),

  q("reg-ch8-crime-20", "cisi-reg", "reg-ch8", "8.3", "Insider Dealing Instruments", "crime", "medium",
    "What financial instruments are caught by insider dealing rules?",
    ["Company securities (shares, bonds), derivatives (options, futures, CFDs), contracts for difference", "Only shares", "Bonds exempt", "No instruments covered"],
    0,
    "CJA Schedule 2 instruments: company securities (shares, debentures, debt securities), options/futures on securities, contracts for difference, index derivatives."
  ),

  q("reg-ch8-crime-21", "cisi-reg", "reg-ch8", "8.3", "Prosecution Powers", "crime", "medium",
    "Who can prosecute insider dealing and market abuse cases?",
    ["FCA (civil enforcement + referral to prosecutors), Crown Prosecution Service (criminal prosecution), Serious Fraud Office", "Only FCA can act", "Only courts", "No prosecution authority"],
    0,
    "Enforcement: FCA investigates and enforces civilly (fines, bans). CPS/SFO handle criminal prosecution. FCA can refer to prosecutors. Overlapping jurisdiction."
  ),

  q("reg-ch8-crime-22", "cisi-reg", "reg-ch8", "8.4", "Bribery Act 2010", "crime", "medium",
    "What are the main offences under the Bribery Act 2010?",
    ["Active bribery (offering/promising), passive bribery (requesting/accepting), foreign official bribery, corporate failure to prevent", "No bribery offences", "Only active bribery", "Bribery legal"],
    0,
    "Bribery Act: Section 1 (active bribery), Section 2 (passive bribery), Section 6 (foreign official bribery), Section 7 (corporate failure to prevent). Unlimited fines."
  ),

  q("reg-ch8-crime-23", "cisi-reg", "reg-ch8", "8.4", "Corporate Bribery Liability", "crime", "hard",
    "How can a commercial organization be liable for bribery?",
    ["If persons associated fail to prevent bribery on firm's behalf; defence if firm has adequate procedures", "Cannot be liable", "Only individuals liable", "Liability is impossible"],
    0,
    "Section 7: organization liable if associated persons commit bribery on firm's behalf. Defence: organization had adequate anti-bribery procedures. Prevents firms ignoring bribery."
  ),

  q("reg-ch8-crime-24", "cisi-reg", "reg-ch8", "8.4", "Adequate Procedures Defence", "crime", "medium",
    "What constitutes adequate procedures against bribery?",
    ["Proportionate procedures: code of conduct, risk assessment, due diligence (gifts, entertainment), training, monitoring", "No procedures needed", "Procedures optional", "Any procedure sufficient"],
    0,
    "Six principles: proportionate procedures, top-level commitment, risk-based due diligence (employees, associates, third parties), training, monitoring/audit, consequences for breaches."
  ),

  q("reg-ch8-crime-25", "cisi-reg", "reg-ch8", "8.5", "Data Protection Act", "crime", "medium",
    "What is the role of the Information Commissioner (ICO)?",
    ["Oversees compliance with Data Protection Act 2018 (GDPR, PECR); investigates breaches; issues guidance", "Only FCA oversight", "No data protection authority", "ICO is advisory"],
    0,
    "ICO: independent authority enforcing Data Protection Act 2018 (UK GDPR implementation), PECR (direct marketing), freedom of information. Investigates complaints, issues guidance."
  ),

  q("reg-ch8-crime-26", "cisi-reg", "reg-ch8", "8.6", "Terrorism Act 2000", "crime", "medium",
    "What is the regulatory requirement regarding terrorism financing?",
    ["Firms must prevent terrorist financing (similar to AML): KYC, CDD, suspicious transaction reporting, no dealing with terrorists", "No terrorism provisions", "Only police concern", "No reporting required"],
    0,
    "Terrorism Act 2000: firms must have TF controls (KYC, CDD), report suspicions, maintain records, freeze accounts of designated persons. Failure = criminal liability."
  ),

  q("reg-ch8-crime-27", "cisi-reg", "reg-ch8", "8.6", "Sanctions Lists", "crime", "medium",
    "What are financial sanctions and how are they enforced?",
    ["Government restrictions on dealing with designated persons/entities (terrorists, human rights abusers, oligarchs); firms screen clients", "No sanctions exist", "Only military enforcement", "Sanctions advisory"],
    0,
    "Sanctions: government designates persons/entities for financial restrictions. Firms must screen clients, block transactions, report. Breach = liability. Lists maintained by HM Treasury."
  ),

  q("reg-ch8-crime-28", "cisi-reg", "reg-ch8", "8.1", "Risk-Based AML Approach", "crime", "medium",
    "What does risk-based AML approach mean?",
    ["Firms allocate resources proportionate to ML/TF risk; higher-risk customers get EDD; lower-risk get simplified DD", "All customers treated equally", "No risk assessment needed", "Risk irrelevant"],
    0,
    "Risk-based approach: firms assess ML/TF risk (country, industry, customer type, activities), apply controls proportionate to risk. Simpler checks for low-risk; enhanced for high-risk."
  ),

  q("reg-ch8-crime-29", "cisi-reg", "reg-ch8", "8.1", "Tipping Off", "crime", "medium",
    "What is tipping off and when is it prohibited?",
    ["Alerting customer to SAR/investigation; prohibited if prevents effective investigation; exception for legal advice", "Tipping off always permitted", "No prohibition on tipping", "Legal advice always excepted"],
    0,
    "Tipping off: prohibited to disclose to customer that SAR made/investigation underway. Exception: legal advice (solicitor-client privilege). Breach = criminal offense."
  ),

  q("reg-ch8-crime-30", "cisi-reg", "reg-ch8", "8.1", "JMLSG Guidance", "crime", "medium",
    "What is JMLSG and what guidance does it provide?",
    ["Joint Money Laundering Steering Group: industry body providing AML/TF best practice guidance to firms", "Regulatory authority", "Sets binding rules", "No guidance function"],
    0,
    "JMLSG: representatives from firms and authorities produce guidance on implementing MLR 2017. Non-binding but influential. Firms follow guidance to meet regulatory expectations."
  ),

  q("reg-ch8-crime-31", "cisi-reg", "reg-ch8", "8.1", "National Crime Agency", "crime", "easy",
    "What is the National Crime Agency and its AML role?",
    ["NCA: UK law enforcement agency receiving SARs; investigates major financial crime; coordinates with international partners", "Banking regulator", "Substitute for FCA", "No crime authority"],
    0,
    "NCA: receives all SARs from firms, analyzes for intelligence, investigates major crimes, coordinates with HMRC, police, international agencies. More strategic than FCA's enforcement."
  ),

  q("reg-ch8-crime-32", "cisi-reg", "reg-ch8", "8.2", "Transaction Reporting", "crime", "medium",
    "What transaction information must firms maintain?",
    ["Record all transactions: date, amount, parties, nature, account/security details; retain 5 years", "No record-keeping required", "Records optional", "1-year retention sufficient"],
    0,
    "Transaction records: date, amount, client, counterparty, nature, instruments traded, accounts. Must be kept 5 years. Provided to FCA on demand. Enables market abuse detection."
  ),

  q("reg-ch8-crime-33", "cisi-reg", "reg-ch8", "8.3", "Proceeds of Crime Act", "crime", "easy",
    "What is the significance of Proceeds of Crime Act 2002?",
    ["Defines money laundering offences; applies to all crimes; gives Secretary of State power to expand to new crimes", "Only applies to drugs", "No general application", "No offense definitions"],
    0,
    "POCA 2002: s.327-329 creates three money laundering offences (concealing, arranging, acquiring). Applies to all criminal conduct. Sec of State can declare new crimes covered."
  ),

  q("reg-ch8-crime-34", "cisi-reg", "reg-ch8", "8.2", "MAR Scope", "crime", "hard",
    "What is the extraterritorial scope of UK MAR?",
    ["Applies to trading in UK/EEA regulated markets/MTFs/OTFs; also OTC derivatives affecting regulated instrument prices", "Only UK instruments", "No extraterritorial reach", "Scope limited to UK"],
    0,
    "Extraterritorial reach: MAR applies to dual-listed instruments (UK listing + third-country listing). OTC derivatives on regulated instruments caught. Very broad scope."
  ),

  q("reg-ch8-crime-35", "cisi-reg", "reg-ch8", "8.1", "PEPs and Beneficial Owners", "crime", "medium",
    "Why are Politically Exposed Persons (PEPs) and beneficial ownership important in AML?",
    ["PEPs = high ML risk (corruption); beneficial owner identification = prevent hiding true control. Both require EDD", "No special treatment needed", "PEPs are low-risk", "Ownership irrelevant"],
    0,
    "PEPs: high officials (ministers, judges) at high corruption risk. EDD required for direct PEPs and family/associates. Beneficial owner: identify true controllers of entities to prevent hiding ML."
  ),

  // ─── CHAPTER 9: Complaints and Redress (35 questions) ───

  q("reg-ch9-complaints-1", "cisi-reg", "reg-ch9", "9.1", "Complaint Handling Rules", "complaints", "easy",
    "What are the main FCA complaint handling rules?",
    ["DISP (Dispute Resolution sourcebook): 8-week rule, written response, escalation to FOS if dissatisfied", "No complaint rules", "No timeframe required", "Verbal response only"],
    0,
    "DISP rules: firms must acknowledge complaints promptly, investigate, respond within 8 weeks. If not resolved, customer can escalate to Financial Ombudsman Service."
  ),

  q("reg-ch9-complaints-2", "cisi-reg", "reg-ch9", "9.1", "Complaint Definition", "complaints", "easy",
    "What constitutes a complaint under FCA rules?",
    ["Any oral/written expression of dissatisfaction regarding product/service, whether or not justified", "Only written complaints", "Only major complaints", "No definition exists"],
    0,
    "Complaint: customer expresses dissatisfaction about firm's product/service/conduct, whether justified or not. Excludes: policy cancellations, regulatory inquiries, credit decisions."
  ),

  q("reg-ch9-complaints-3", "cisi-reg", "reg-ch9", "9.1", "8-Week Rule", "complaints", "easy",
    "What is the 8-week rule for complaint handling?",
    ["Firm must respond to complaint or advise of FOS escalation right within 8 weeks; after 8 weeks, customer can escalate", "No time limit", "12 weeks applies", "Firms can ignore"],
    0,
    "8-week rule: firm must issue final response (upheld/rejected) or written consent to extend within 8 weeks. If not resolved, customer has right to FOS escalation."
  ),

  q("reg-ch9-complaints-4", "cisi-reg", "reg-ch9", "9.1", "Complaint Response Content", "complaints", "easy",
    "What must a complaint response include?",
    ["Clear decision (upheld/rejected), explanation of reasoning, right to escalate to FOS, compensation details if upheld", "No format required", "Oral response sufficient", "No explanation needed"],
    0,
    "Response: must clearly state decision, explain reasons, confirm right to escalate to FOS within 6 months, state compensation (if any), provide firm's contact/FOS details."
  ),

  q("reg-ch9-complaints-5", "cisi-reg", "reg-ch9", "9.1", "Vulnerable Complainants", "complaints", "medium",
    "How should firms handle complaints from vulnerable customers?",
    ["Identify vulnerability (age, health, literacy), extend time if needed, communicate simply, ensure understanding", "All complaints handled identically", "Vulnerable need no special treatment", "Speed over clarity"],
    0,
    "Vulnerable handling: recognize vulnerability, allow extra time/support, use plain language, confirm understanding, provide written summaries, offer alternative communication methods."
  ),

  q("reg-ch9-complaints-6", "cisi-reg", "reg-ch9", "9.2", "Financial Ombudsman Service", "complaints", "medium",
    "What is the Financial Ombudsman Service?",
    ["Independent scheme resolving consumer complaints against financial firms; free to consumers; awards up to £385,000", "Part of FCA", "Only for major firms", "No ombudsman exists"],
    0,
    "FOS: independent statutory scheme. Consumers can escalate after 8 weeks or if dissatisfied. FOS investigates, mediates, makes awards. Free to consumers; paid by industry levies."
  ),

  q("reg-ch9-complaints-7", "cisi-reg", "reg-ch9", "9.2", "FOS Jurisdiction", "complaints", "medium",
    "What firms/complaints are within FOS jurisdiction?",
    ["Authorized financial firms; complaints about products/services/conduct; acts/omissions within rules; some omissions (time limits, relationships)", "All complaints accepted", "Only large firms", "No limits"],
    0,
    "FOS jurisdiction: authorized firms (with exceptions), complaints about products/services, conduct covered by COBS/ICOBS. Time limit: 6 years from act or 3 years from awareness."
  ),

  q("reg-ch9-complaints-8", "cisi-reg", "reg-ch9", "9.2", "FOS Decision Making", "complaints", "medium",
    "What approach does FOS use to resolve disputes?",
    ["Investigates facts, applies law/rules, determines 'fair' outcome (equity + law); decisions are binding on firm", "No structured process", "Always upholds firm", "Decisions not binding"],
    0,
    "FOS approach: fairness in law and fact. Has discretion to apply equity. Decisions binding on firm (unless firm accepts/rejects before FOS decision). Consumers can reject."
  ),

  q("reg-ch9-complaints-9", "cisi-reg", "reg-ch9", "9.2", "Ombudsman Awards", "complaints", "medium",
    "What can FOS award in complaints?",
    ["Compensation for pecuniary loss, distress/inconvenience, non-financial loss; maximum £385,000 per claim", "No awards", "Unlimited awards", "Only small amounts"],
    0,
    "FOS awards: money (to cover loss), interest, compensation for distress (typically £100-1000s depending on circumstances). Capped at £385,000 per claim. Binding on firm."
  ),

  q("reg-ch9-complaints-10", "cisi-reg", "reg-ch9", "9.2", "FOS Jurisdiction Limits", "complaints", "hard",
    "What are limitations of FOS jurisdiction?",
    ["Cannot hear complaints against: unauthorized firms, large companies, complaints outside rules, time-barred complaints, some regulatory decisions", "No limitations", "Universal jurisdiction", "Limits are irrelevant"],
    0,
    "Limits: not for unauthorized firms, not for large commercial disputes (FCA/courts), not for regulatory decisions (e.g., authorization withdrawal), time-barred cases."
  ),

  q("reg-ch9-complaints-11", "cisi-reg", "reg-ch9", "9.3", "FSCS Compensation Scheme", "complaints", "easy",
    "What is the Financial Services Compensation Scheme?",
    ["Compensates customers when authorized firm fails and defaults; statutory protection; funded by industry levies", "Optional industry scheme", "No compensation", "Firm-funded"],
    0,
    "FSCS: statutory compensation scheme. Covers: protected deposits (£85k), investment business (£85k), insurance (100%+ varies). One claim per firm per claimant."
  ),

  q("reg-ch9-complaints-12", "cisi-reg", "reg-ch9", "9.3", "FSCS Eligibility", "complaints", "medium",
    "Who is eligible for FSCS compensation?",
    ["Consumers with protected claim against insolvent authorized firm; excludes professionals, certain connected parties", "All claimants eligible", "Only consumers", "Eligibility varies widely"],
    0,
    "Eligible claimant: consumer (individual), small business; protected claim (deposit, investment, insurance); firm in default (insolvent). Excludes: institutional investors, connected firms."
  ),

  q("reg-ch9-complaints-13", "cisi-reg", "reg-ch9", "9.3", "FSCS Deposit Coverage", "complaints", "easy",
    "What does FSCS deposit coverage include?",
    ["Protected deposits up to £85,000 per eligible claimant per institution; covers current/savings/fixed-term accounts", "Unlimited coverage", "No deposit protection", "£100,000 limit"],
    0,
    "Deposit coverage: up to £85,000 per claimant per authorized bank/building society. Includes accrued interest. Corporate deposits covered separately. One account = one claim."
  ),

  q("reg-ch9-complaints-14", "cisi-reg", "reg-ch9", "9.3", "FSCS Investment Coverage", "complaints", "medium",
    "What does FSCS investment business coverage include?",
    ["Protected investment business claims up to £85,000 per eligible claimant per firm; covers advised/discretionary portfolios", "Unlimited investment coverage", "No investment protection", "£50,000 limit"],
    0,
    "Investment coverage: £85,000 per eligible claimant per firm. Covers: investments held, advice/management claims, portfolio losses. Derivatives/leveraged products = limited/no coverage."
  ),

  q("reg-ch9-complaints-15", "cisi-reg", "reg-ch9", "9.3", "FSCS Insurance Coverage", "complaints", "easy",
    "What does FSCS insurance coverage include?",
    ["Protected insurance claims (long-term 100%, general compulsory 100%, general non-compulsory 90%)", "No insurance coverage", "Limited to £50,000", "All insurance covered fully"],
    0,
    "Insurance: long-term (life) 100%, compulsory general (car, employer's liability) 100%, non-compulsory general (travel, pet) 90%. No limits. Separate per type."
  ),

  q("reg-ch9-complaints-16", "cisi-reg", "reg-ch9", "9.3", "FSCS Claim Process", "complaints", "medium",
    "How do claimants make FSCS claims?",
    ["Contact FSCS after firm insolvency declared; FSCS determines eligibility/amount; typically 20 working days to initial payment", "Direct to firm", "Claims never processed", "Automatic compensation"],
    0,
    "FSCS process: (1) firm fails, (2) claimant applies to FSCS, (3) FSCS assesses eligibility/calculates compensation, (4) pays claimant. Claims must be made (not automatic)."
  ),

  q("reg-ch9-complaints-17", "cisi-reg", "reg-ch9", "9.1", "Complaint Acknowledgement", "complaints", "easy",
    "When should firms acknowledge complaints?",
    ["Within specified timeframe (typically 1-2 days for contact, written within 3-5 days); earliest possible", "No timeline required", "Acknowledgement optional", "Weeks allowed"],
    0,
    "Acknowledgement: firm should acknowledge receipt promptly, provide reference, estimate timeline, set customer expectations. Demonstrates responsiveness and professionalism."
  ),

  q("reg-ch9-complaints-18", "cisi-reg", "reg-ch9", "9.2", "FOS Escalation Right", "complaints", "medium",
    "What is the customer's right to escalate to FOS?",
    ["After 8 weeks without firm response, or if dissatisfied with response, customer can escalate within 6 months of receiving FOS information", "Can escalate anytime", "No escalation right", "Only within 1 month"],
    0,
    "Escalation: customer receives FOS details with firm response. Can escalate if dissatisfied or if 8-week deadline passes. Must escalate within 6 months of FOS details provided."
  ),

  q("reg-ch9-complaints-19", "cisi-reg", "reg-ch9", "9.1", "Complaint Records", "complaints", "medium",
    "What must firms record about complaints?",
    ["Date received, description, response issued, outcome, compensation (if any), FOS notification; retain 6 years", "No record-keeping", "Oral records sufficient", "1-year retention"],
    0,
    "Records: complaint details, investigation findings, response (date, decision, reasoning), compensation, FOS reference. Maintained 6 years. Accessible to FCA/FOS for review."
  ),

  q("reg-ch9-complaints-20", "cisi-reg", "reg-ch9", "9.2", "Multiple Complaints", "complaints", "hard",
    "How should firms handle multiple similar complaints?",
    ["Track patterns, assess systemic issues, escalate to compliance if widespread, potentially notify FCA (serious breach)", "Handle each separately", "Ignore patterns", "Never escalate"],
    0,
    "Pattern recognition: similar complaints may indicate systemic issue. Firms should: track complaints by type, analyze root causes, implement corrective actions, notify FCA if serious."
  ),

  q("reg-ch9-complaints-21", "cisi-reg", "reg-ch9", "9.1", "Complaint Scope", "complaints", "easy",
    "What types of matters are handled as complaints?",
    ["Service issues, poor advice, wrong investments, calculation errors, sales conduct, delays, document problems", "Only major breaches", "Regulatory inquiries only", "Everything is a complaint"],
    0,
    "Complaint scope: virtually all customer dissatisfaction about firm's service/conduct. Excludes: fact-checking, regulatory inquiries, credit decisions, general inquiries."
  ),

  q("reg-ch9-complaints-22", "cisi-reg", "reg-ch9", "9.1", "Root Cause Analysis", "complaints", "medium",
    "Why do firms conduct root cause analysis of complaints?",
    ["To identify systemic issues, prevent recurrence, improve processes, demonstrate FCA compliance, reduce future complaints", "Complaints are irrelevant", "Only required by FOS", "No purpose"],
    0,
    "Root cause analysis: firms investigate why complaint occurred (process failure, training gap, system issue), implement corrections, monitor effectiveness. Shows FCA seriousness."
  ),

  q("reg-ch9-complaints-23", "cisi-reg", "reg-ch9", "9.3", "FSCS Levy", "complaints", "medium",
    "How is FSCS funded?",
    ["Industry levies on authorized firms based on claim history and firm contributions to financial crime", "Taxpayer funded", "Customer funded", "From firm profits"],
    0,
    "FSCS funding: annual levies on authorized firms proportionate to sector (deposits, investments, insurance, credit, lenders) and firm's claims history and financial crime risk."
  ),

  q("reg-ch9-complaints-24", "cisi-reg", "reg-ch9", "9.1", "Complaint Investigation Standards", "complaints", "medium",
    "What standards must firm investigations meet?",
    ["Impartial, timely, adequate scope, evidence-based reasoning, documented, fair findings, reasonable remedies", "Investigations optional", "Bias acceptable", "Speed over accuracy"],
    0,
    "Investigation standards: independent from sales team, sufficient scope, evidence-based (don't accept claims without proof), document reasoning, reach fair findings, offer remedies."
  ),

  q("reg-ch9-complaints-25", "cisi-reg", "reg-ch9", "9.2", "FOS Appeals", "complaints", "medium",
    "Can parties appeal FOS decisions?",
    ["No appeals process; decisions binding on firm (unless firm rejects before decision); consumer can reject without appeal", "Can appeal to courts", "Unlimited appeals allowed", "All decisions appealable"],
    0,
    "No appeal: FOS decisions are final (binding on firm). Consumer can reject without accepting decision. Only judicial review available (very limited circumstances)."
  ),

  q("reg-ch9-complaints-26", "cisi-reg", "reg-ch9", "9.3", "FSCS Time Limits", "complaints", "hard",
    "What are time limits for FSCS claims?",
    ["Claims must be made within defined periods of firm insolvency declaration; FSCS has 20 working days to process claims typically", "No time limit", "Claims never expire", "Indefinite period"],
    0,
    "FSCS timeline: claimant must apply after insolvency declared. FSCS processes within 20 working days normally. Firm must notify FSCS of insolvency within specified timeframe."
  ),

  q("reg-ch9-complaints-27", "cisi-reg", "reg-ch9", "9.1", "Redress and Compensation", "complaints", "easy",
    "What types of redress can firms offer in complaints?",
    ["Refund of fees/charges, interest compensation, actual loss compensation, correcting records, replacement of service", "Only monetary compensation", "No redress available", "Customer acceptance required"],
    0,
    "Redress types: financial (refund, compensation), non-financial (service restoration, record correction), interest, goodwill gestures (within reasonableness). Proportionate to harm."
  ),

  q("reg-ch9-complaints-28", "cisi-reg", "reg-ch9", "9.1", "Communication and Culture", "complaints", "medium",
    "How should firms approach complaint communication?",
    ["Empathetic, clear, transparent; acknowledge customer concerns; explain reasoning; offer solutions; confirm next steps", "Minimal communication", "Defensive tone", "Legal language only"],
    0,
    "Communication: acknowledge emotion, explain clearly, apologize if error (builds trust), offer solution, timeline. Professional but human. Turns complaint into retention opportunity."
  ),

  q("reg-ch9-complaints-29", "cisi-reg", "reg-ch9", "9.2", "FOS Mediation", "complaints", "medium",
    "Does FOS mediate disputes before formal decisions?",
    ["Yes, FOS attempts mediation/settlement before formal adjudication; both parties can agree to settlement", "Only formal decisions", "No mediation", "Settlement impossible"],
    0,
    "FOS process: reception (initial assessment), investigation, possibility of settlement/mediation before formal decision. Many cases resolve through this process, saving time."
  ),

  q("reg-ch9-complaints-30", "cisi-reg", "reg-ch9", "9.3", "Cross-Firm FSCS", "complaints", "medium",
    "How is FSCS coverage calculated for customers with multiple accounts at same firm?",
    ["Aggregated per firm: multiple accounts at one firm = one £85k limit (aggregated), separate limits at separate firms", "£85k per account", "Unlimited aggregation", "No aggregation"],
    0,
    "Aggregation: multiple accounts (savings, current, ISA) at same bank = one £85,000 cover total. Spouse's account = separate £85k. Different banks = separate £85k each."
  ),

  // ─── CHAPTER 10: FCA Conduct of Business (45 questions) ───

  q("reg-ch10-conduct-1", "cisi-reg", "reg-ch10", "10.1", "COBS Rules Overview", "conduct", "easy",
    "What is COBS and what does it cover?",
    ["Conduct of Business sourcebook: FCA rules on client dealings (suitability, appropriateness, execution, communications)", "Banking rules only", "No conduct rules", "Optional guidance"],
    0,
    "COBS: FCA sourcebook covering conduct standards for financial firms. Key areas: client categorization, suitability/appropriateness, best execution, client money, communications."
  ),

  q("reg-ch10-conduct-2", "cisi-reg", "reg-ch10", "10.1", "Client Categorization", "conduct", "easy",
    "How are clients categorized in COBS?",
    ["Retail (max protection), Professional (reduced protection), Eligible Counterparty (minimal protection); defaults to Retail", "All clients identical", "No categorization", "No defaults apply"],
    0,
    "Categorization: Retail (individual consumers), Professional (firms, wealthy individuals who opt in), Eligible Counterparty (banks, large investment firms). Rules vary by category."
  ),

  q("reg-ch10-conduct-3", "cisi-reg", "reg-ch10", "10.1", "Retail Client", "conduct", "easy",
    "What protections apply to Retail clients?",
    ["Maximum: suitability required, appropriateness warnings, client categorization, complaints handling, FSCS coverage", "No protections", "Only warnings apply", "Voluntary protections"],
    0,
    "Retail protections: suitability for advice, appropriateness warnings, conflicts disclosure, cancellation rights, client money segregation, complaints handling, FSCS coverage."
  ),

  q("reg-ch10-conduct-4", "cisi-reg", "reg-ch10", "10.1", "Professional Client", "conduct", "medium",
    "What are the criteria for Professional client categorization?",
    ["Authorized firms, large corporates (net assets >€500k), pension funds, governments; or Retail firms who opt in and meet criteria", "Only banks", "No criteria", "Individual choice"],
    0,
    "Professional: (1) authorized firms, (2) large corporates (€500k+ net assets), (3) pension funds, governments, (4) Retail who opt in and meet experience/knowledge tests."
  ),

  q("reg-ch10-conduct-5", "cisi-reg", "reg-ch10", "10.1", "Eligible Counterparty", "conduct", "medium",
    "What is an Eligible Counterparty?",
    ["Large financial institutions (banks, fund managers) who deal with firms as professional counterparties; minimal regulation", "All customers can be EC", "No EC classification", "Retail equivalent"],
    0,
    "Eligible Counterparty: primarily banks, large investment firms dealing in professional capacity. Minimal COBS protections. Firms can treat as EC for derivatives/capital markets."
  ),

  q("reg-ch10-conduct-6", "cisi-reg", "reg-ch10", "10.2", "Suitability Rule", "conduct", "easy",
    "What does suitability require?",
    ["Adviser must assess client needs/circumstances and recommend only products matching those needs/objectives", "Recommend any product", "No assessment needed", "Customer acceptance irrelevant"],
    0,
    "Suitability: firm must understand client's financial situation, objectives, risk tolerance. Recommend only products that fit. Documentation mandatory. Breach = liability."
  ),

  q("reg-ch10-conduct-7", "cisi-reg", "reg-ch10", "10.2", "Appropriateness Rule", "conduct", "medium",
    "What is appropriateness and when does it apply?",
    ["For non-advised sales: firm assesses if customer has experience/knowledge for product; if not, issues warning", "Only for professional clients", "Requires full suitability assessment", "Warning alone sufficient"],
    0,
    "Appropriateness: non-advised product sales (execution-only, distance marketing). Firm assesses if customer can understand product. If not, must issue warning."
  ),

  q("reg-ch10-conduct-8", "cisi-reg", "reg-ch10", "10.2", "Best Execution", "conduct", "medium",
    "What does best execution require?",
    ["Firm must execute orders to achieve best overall result: price, speed, cost, likelihood of execution, size, nature", "Can prioritize profit", "Price only matters", "Execution quality irrelevant"],
    0,
    "Best execution: firm executes orders to get best overall outcome for client. Factors: price, costs, speed, probability of execution, settlement. Firms maintain policies and monitor."
  ),

  q("reg-ch10-conduct-9", "cisi-reg", "reg-ch10", "10.3", "Financial Promotions", "conduct", "medium",
    "What standards apply to financial promotions?",
    ["Fair, clear, not misleading; disclose risks equally with benefits; avoid exaggeration; identify FCA regulation", "No standards apply", "Misleading acceptable", "No risk disclosure"],
    0,
    "Financial promotion standards: factually accurate, fair and clear, prominent risk warnings, not disguise important info, identify FCA regulated firm. Applies to advertising/marketing."
  ),

  q("reg-ch10-conduct-10", "cisi-reg", "reg-ch10", "10.3", "Risk Warnings", "conduct", "easy",
    "How must risk warnings be presented in promotions?",
    ["Prominent, same font size as benefits, clear language, not minimized, explain actual risks clients face", "Small font acceptable", "Can hide risks", "Warnings optional"],
    0,
    "Risk presentation: risks must be equally prominent as benefits (same font size), in plain language, not buried. FCA rule: risks cannot be less visible than benefits."
  ),

  q("reg-ch10-conduct-11", "cisi-reg", "reg-ch10", "10.3", "Promotion Advertising", "conduct", "medium",
    "Who is responsible for accuracy of financial promotions?",
    ["Both publisher (magazine, website) and firm; distributor has oversight role; firm ultimately accountable", "Only publisher", "Only firm", "No accountability"],
    0,
    "Promotion accountability: firm must ensure accuracy. Distributor has oversight. FCA can regulate both. Third-party endorsements must be appropriate/clear."
  ),

  q("reg-ch10-conduct-12", "cisi-reg", "reg-ch10", "10.4", "Client Money Rules", "conduct", "medium",
    "What are the client money protection rules (CASS)?",
    ["Hold client money separately (not mixed with firm assets), in trust, not used for firm operations, full accounting", "Can mix with firm money", "Trust not required", "No segregation needed"],
    0,
    "CASS (Client Assets sourcebook): money held for clients in separate accounts (bank, nostro), not mixed with firm money, held in trust, accounts reconciled regularly."
  ),

  q("reg-ch10-conduct-13", "cisi-reg", "reg-ch10", "10.4", "Segregated Accounts", "conduct", "easy",
    "What must firms do with segregated client accounts?",
    ["Hold separate bank accounts in client's name/for clients, reconcile daily/weekly, maintain records, provide statements", "Can use any account", "No reconciliation", "Records optional"],
    0,
    "Segregation: separate bank accounts (not firm's), clearly identified as client money, reconciled frequently (daily/weekly), records maintained, statements to clients quarterly."
  ),

  q("reg-ch10-conduct-14", "cisi-reg", "reg-ch10", "10.4", "Client Asset Safeguarding", "conduct", "medium",
    "How must firms safeguard client securities/investments?",
    ["Held in custody: segregated register, trust basis, daily reconciliation, audit trail, insurance cover", "Can hold unsegregated", "Reconciliation optional", "No segregation needed"],
    0,
    "Custody: securities held in segregated custody accounts (not firm's own), registered in client names/trust, reconciled daily, full audit trail, insured against loss."
  ),

  q("reg-ch10-conduct-15", "cisi-reg", "reg-ch10", "10.5", "Distance Communications", "conduct", "medium",
    "What are distance communication rules?",
    ["Rules apply to communications by phone, email, online; pre-contract info required; 14-day cancellation right for consumers", "No distance rules", "No pre-info needed", "No cancellation right"],
    0,
    "Distance: pre-contract information (firm, product, price, cancellation right), easy cancellation (14 days), complaint contact, must be provided before purchase."
  ),

  q("reg-ch10-conduct-16", "cisi-reg", "reg-ch10", "10.5", "Cancellation Rights", "conduct", "medium",
    "When do consumers have cancellation/withdrawal rights?",
    ["Distance contracts: 14 days after signature; certain investments: 30 days; firm must refund minus costs if investments change", "No cancellation rights", "Unlimited time", "Not applicable"],
    0,
    "Cancellation: 14 days for distance contracts (cooling off), 30 days for insurance. Refund minus costs/gains. Firm must process quickly. Does not apply to managed portfolios."
  ),

  q("reg-ch10-conduct-17", "cisi-reg", "reg-ch10", "10.2", "Suitability Documentation", "conduct", "medium",
    "What must firms document regarding suitability?",
    ["Client needs assessment (financial, personal), recommendation reasoning, products considered, why chosen product suitable", "No documentation", "Oral notes sufficient", "Documentation optional"],
    0,
    "Suitability doc: record client profile (age, income, dependants, objectives, risk tolerance), analysis of suitable products, recommendation with reasoning, client signature."
  ),

  q("reg-ch10-conduct-18", "cisi-reg", "reg-ch10", "10.2", "Ongoing Suitability", "conduct", "medium",
    "Must advisers review suitability periodically?",
    ["Yes, regular monitoring required; if circumstances/markets change, recommendation may need updating", "One-time advice only", "No monitoring needed", "Reviews optional"],
    0,
    "Ongoing: adviser should monitor investment performance, client circumstances (life changes), market changes. If suitability questionable, update recommendation or cease product."
  ),

  q("reg-ch10-conduct-19", "cisi-reg", "reg-ch10", "10.3", "Conflicts Disclosure", "conduct", "medium",
    "How must firms disclose conflicts of interest?",
    ["In writing, clearly, before advice; detail nature (commission, positions), impact, mitigation; allow client to decide", "Oral disclosure only", "No disclosure required", "Vague disclosure acceptable"],
    0,
    "Conflicts disclosure: written, clear, pre-advice detail what conflict exists (e.g., commission higher for Product A), impact on recommendation, how managed. Allow client to decide."
  ),

  q("reg-ch10-conduct-20", "cisi-reg", "reg-ch10", "10.2", "Execution-Only Sales", "conduct", "medium",
    "What are execution-only services and what rules apply?",
    ["Customer requests execution without advice; firm need not assess suitability; must check appropriateness; warnings required", "Same as advised", "No rules apply", "Suitability still required"],
    0,
    "Execution-only: client initiates/requests order; firm executes without assessing suitability. Must: check appropriateness (warn if complex), best execution, fair dealing."
  ),

  q("reg-ch10-conduct-21", "cisi-reg", "reg-ch10", "10.3", "Retail Investor Protections", "conduct", "hard",
    "What special protections apply to Retail investors?",
    ["Negative balance protection (FX, derivatives can't lose more than deposit), leverage limits, cool-off rights, warnings, FSCS coverage", "No special protection", "Unlimited leverage", "FSCS doesn't apply"],
    0,
    "Retail protection: cannot lose more than invested (leverage limits), no negative balance on FX/derivatives, 30-day cancellation for investment, warnings on complex products, FSCS coverage."
  ),

  q("reg-ch10-conduct-22", "cisi-reg", "reg-ch10", "10.4", "Insolvency and Client Money", "conduct", "hard",
    "What happens to client money if investment firm becomes insolvent?",
    ["Client money held separately is protected (not part of firm's estate); returned to clients. Shortfall covered by FSCS", "Mixed with firm assets", "Clients lose all", "No protection"],
    0,
    "Protection: segregated client money is protected from firm's creditors. Returned to clients. If shortfall, FSCS compensates up to £85,000 per eligible claimant."
  ),

  q("reg-ch10-conduct-23", "cisi-reg", "reg-ch10", "10.1", "Reliance Rules", "conduct", "medium",
    "Can firms rely on third parties for COBS compliance?",
    ["Partly: can delegate some functions (dealing, administration) but remain liable for compliance; cannot delegate client interaction", "Can fully delegate", "Cannot delegate anything", "No reliance allowed"],
    0,
    "Delegation: firm can appoint third parties (execution brokers, custodians) but remains liable for their conduct. Must monitor. Client-facing advice cannot be delegated."
  ),

  q("reg-ch10-conduct-24", "cisi-reg", "reg-ch10", "10.3", "Product Information", "conduct", "easy",
    "What product information must firms provide?",
    ["Key Information Document (KID) or prospectus, costs/charges, risks, performance (if applicable), investment strategy", "No information required", "Oral information sufficient", "Complex jargon only"],
    0,
    "Product info: KID (structured 3-page summary for packaged products), prospectus (funds), costs/charges/interest, risk summary, investment objective, key risks."
  ),

  q("reg-ch10-conduct-25", "cisi-reg", "reg-ch10", "10.5", "Direct Access Execution", "conduct", "medium",
    "What rules apply to direct access/algorithmic trading?",
    ["Firms must have risk controls (pre-trade limits), price monitoring, alert systems, cannot cause disorderly markets", "No controls needed", "Only post-trade monitoring", "Risk controls optional"],
    0,
    "Direct access: firm must limit client access via risk controls (order size, price limits), monitor for disorderly market impact, cancel risky orders, maintain audit trail."
  ),

  q("reg-ch10-conduct-26", "cisi-reg", "reg-ch10", "10.2", "Margin and Leverage", "conduct", "medium",
    "How are margin requirements regulated in COBS?",
    ["Investment firms must manage margin calls, collect adequate collateral, follow EMIR/MIFID margin rules; complex derivative leverage limited", "No margin rules", "Unlimited leverage", "Margin optional"],
    0,
    "Margin: firms must collect adequate collateral, make margin calls, follow regulatory minimums (EMIR), limit leverage for complex products (especially Retail clients)."
  ),

  q("reg-ch10-conduct-27", "cisi-reg", "reg-ch10", "10.3", "Complex Instruments", "conduct", "hard",
    "How are complex instruments regulated for Retail clients?",
    ["Cannot sell to Retail without prior warning; complex = derivatives, structured products, leverage; Professional/EC exempt", "Can sell to anyone", "No complexity test", "Retail same as all"],
    0,
    "Complex instruments: derivatives, structured products, leveraged products cannot be sold to Retail without: assessment of knowledge, clear risk warnings, suitability evidence."
  ),

  q("reg-ch10-conduct-28", "cisi-reg", "reg-ch10", "10.4", "Client Asset Segregation Issues", "conduct", "hard",
    "What are risks of inadequate client asset segregation?",
    ["Firm failure could lead to client asset loss (mixed with firm assets), inadequate insurance, delayed recovery, FSCS may not fully cover", "No risks", "Segregation guarantees returns", "Insurance unnecessary"],
    0,
    "Segregation risks: if inadequate, client assets may be seized by firm's creditors, recovery delayed, FSCS £85k limit may not cover all losses. Critical compliance area."
  ),

  q("reg-ch10-conduct-29", "cisi-reg", "reg-ch10", "10.2", "Know Your Customer (Investment)", "conduct", "medium",
    "What investment-specific KYC information must firms gather?",
    ["Investment experience, risk tolerance, financial situation, objectives, time horizon, need for liquidity, knowledge of products", "No KYC needed", "Only name/age", "Investment knowledge irrelevant"],
    0,
    "Investment KYC: investment experience (years, types), understanding of risks, risk tolerance (aggressive/moderate/conservative), financial capacity (can afford loss?), liquidity needs."
  ),

  q("reg-ch10-conduct-30", "cisi-reg", "reg-ch10", "10.3", "Directed Transactions", "conduct", "medium",
    "What are directed transactions and how are they treated?",
    ["Customer directs firm to trade specific instrument/quantity; firm executes without assessing suitability; must check appropriateness", "Treated as advised", "No directed rules", "Suitability required"],
    0,
    "Directed: customer specifies what to buy/sell; firm executes without suitability (like execution-only). Must: check appropriateness, best execution, fair dealing."
  ),

  q("reg-ch10-conduct-31", "cisi-reg", "reg-ch10", "10.1", "Tied Advice", "conduct", "medium",
    "What is tied advice and what disclosure is required?",
    ["Adviser offers products only from restricted range (tied to one firm); must state 'tied' status before advice", "No restriction", "No disclosure needed", "Can hide tied status"],
    0,
    "Tied advisor: pre-advice must disclose that advisor tied to one/few product providers, can recommend only their products. Customers can compare alternatives independently."
  ),

  q("reg-ch10-conduct-32", "cisi-reg", "reg-ch10", "10.2", "Pension Transfer Advice", "conduct", "hard",
    "What special rules apply to pension transfer advice?",
    ["Complex assessment required: compare defined benefit vs personal pension, consider guaranteed income loss, obtain specialist opinion if uncertain", "Simplified advice acceptable", "Can recommend transfer easily", "No special rules"],
    0,
    "Pension transfers: advice must compare security of DB pension against flexibility/performance risk of DC/personal pension. Loss of guaranteed income significant. Full analysis needed."
  ),

  q("reg-ch10-conduct-33", "cisi-reg", "reg-ch10", "10.3", "Vulnerable Customer Communications", "conduct", "medium",
    "How should firms communicate with vulnerable customers?",
    ["Plain language, larger fonts, slower pace, confirmation calls, written summaries, option for assisted decision-making", "Standard communication", "Jargon acceptable", "No adjustments needed"],
    0,
    "Vulnerable communication: identify vulnerability (age, disability, literacy), adjust communication (plain language, visuals, verbal confirmation), allow support person, written summaries."
  ),

  q("reg-ch10-conduct-34", "cisi-reg", "reg-ch10", "10.4", "Custody Conflicts", "conduct", "medium",
    "What conflicts can arise in custody arrangements?",
    ["Custodian has incentive to promote expensive services, self-dealing risk, lender of last resort, investment of float before distribution", "No conflicts possible", "Conflicts are irrelevant", "Cannot be managed"],
    0,
    "Custody conflicts: custodian earns fees for services, has float (cash temporarily), may invest client money. Rules: segregation, no self-dealing, disclosure, independent audits."
  ),

  q("reg-ch10-conduct-35", "cisi-reg", "reg-ch10", "10.5", "Benchmark Regulation", "conduct", "medium",
    "What regulatory requirements apply to benchmarks (indices)?",
    ["Benchmark administrators must be regulated (ESMA/FCA), ensure integrity, prevent manipulation, transparent methodology; firms must disclose reliance", "No benchmark regulation", "Self-regulation acceptable", "Disclosure optional"],
    0,
    "Benchmark regulation: indices/benchmarks used for pricing/performance tracking. Administrators regulated. Firms using benchmarks must disclose dependence. Prevents manipulation."
  ),

  q("reg-ch10-conduct-36", "cisi-reg", "reg-ch10", "10.2", "Product Suitability Matrix", "conduct", "hard",
    "How should firms assess product suitability systematically?",
    ["Compare client profile (risk tolerance, objectives, knowledge) against product risk/features/costs; document gap analysis; recommend suitable/explain unsuitability", "Intuitive recommendation", "No systematic process", "Documentation optional"],
    0,
    "Suitability matrix: map client risk profile (low/medium/high) to product risk profile. Assess alignment. Document rationale. Escalate if misaligned. Ensures consistency."
  ),

  q("reg-ch10-conduct-37", "cisi-reg", "reg-ch10", "10.3", "Inducements and Fees", "conduct", "medium",
    "How are inducements and fees treated under COBS?",
    ["Inducements (gifts, training) must: not prejudice client duty, be proportionate, be disclosed pre-advice; Independent Advice excludes inducements", "Inducements always permitted", "No disclosure needed", "Inducements encourage better advice"],
    0,
    "Inducements: can be accepted if advance disclosure (recipient knows), proportionate (not excessive), doesn't compromise advice. Independent advisers cannot accept fees from product providers."
  ),

  q("reg-ch10-conduct-38", "cisi-reg", "reg-ch10", "10.1", "Treating Customers Fairly", "conduct", "easy",
    "What does treating customers fairly mean in practice?",
    ["Listen to needs, provide suitable products, communicate clearly, charge fair prices, resolve complaints promptly, act with integrity", "Maximum profit extraction", "Minimal regulation", "Customer interests secondary"],
    0,
    "TCF: core principle. Requires: understand customer needs, recommend suitable solutions, transparent communication, fair pricing, proper complaint handling, honest dealings."
  ),

  q("reg-ch10-conduct-39", "cisi-reg", "reg-ch10", "10.2", "Advised vs Non-Advised", "conduct", "medium",
    "What is the distinction between advised and non-advised sales?",
    ["Advised: firm recommends specific product; Unadvised: customer chooses (execution-only/appropriateness); Different rules apply", "Both treated identically", "No distinction", "All sales must be advised"],
    0,
    "Advised: firm assesses needs, recommends product, liable for suitability. Unadvised: customer chooses (firm executes, checks appropriateness, but no suitability duty)."
  ),

  q("reg-ch10-conduct-40", "cisi-reg", "reg-ch10", "10.4", "Cross-Border Client Money", "conduct", "hard",
    "What rules apply when client money held cross-border?",
    ["Same segregation rules apply regardless of location, must comply with local rules, maintain audit trail, higher insolvency risk, FSCS may not cover", "No special rules", "Can mix jurisdictions", "No audit needed"],
    0,
    "Cross-border: client money held in overseas bank faces: different insolvency rules, regulatory gaps, currency risk, potential FSCS non-coverage. Requires clear disclosure."
  ),

  q("reg-ch10-conduct-41", "cisi-reg", "reg-ch10", "10.2", "Suitability Obligations to Professionals", "conduct", "medium",
    "Are suitability requirements different for professional clients?",
    ["Yes, lower requirements: appropriateness may substitute suitability; but PRA-regulated must still provide suitability", "Same as retail", "No requirements", "Professionals unprotected"],
    0,
    "Professional clients: reduced COBS rules. Appropriateness may replace suitability for certain transactions. But if professional opts into retail category, full protections apply."
  ),

  q("reg-ch1-sector-36", "cisi-reg", "reg-ch1", "1.6", "Financial Services Competitiveness", "sector", "hard",
    "How do regulatory frameworks affect competitiveness of UK financial services?",
    ["Heavy regulation increases costs but protects reputation; lighter regulation attracts activity but creates risks", "Regulation irrelevant to competition", "Lighter always better", "Heavy regulation drives innovation"],
    0,
    "Regulatory balance: heavy regulation (FCA/PRA) costs but protects UK reputation globally. Light regulation attracts activity but risks systemic failure. UK seeks competitive regulation."
  ),

  q("reg-ch2-consumer-36", "cisi-reg", "reg-ch2", "2.3", "Interest Rates and Savings", "consumer", "medium",
    "How do interest rate changes affect consumer savings strategies?",
    ["Higher rates increase savings returns, encourage accumulation; lower rates reduce savings rewards, incentivize investment/spending", "Interest rates irrelevant", "Rates always benefit savers", "No impact on strategy"],
    0,
    "Rate environment: high rates (post-2022) improve savings returns, attracting deposits. Low rates (2010-2021) discouraged saving, encouraged investment/spending. Affects portfolio allocation."
  ),

  q("reg-ch3-contract-41", "cisi-reg", "reg-ch3", "3.1", "Contract Breach Remedies", "contract", "medium",
    "What are the remedies available for specific performance in contracts?",
    ["Courts order party to perform obligations; rarely used (only if damages insufficient); requires unique subject matter", "Always available", "Never awarded", "Only damages available"],
    0,
    "Specific performance: court order forcing performance of contract. Rare. Only when: (1) damages inadequate, (2) subject matter unique (not readily replaceable), (3) feasible to enforce."
  ),

  q("reg-ch4-ethics-36", "cisi-reg", "reg-ch4", "4.1", "Market Ethics vs Rules", "ethics", "hard",
    "How should practitioners handle situations where rules allow activity but ethics question it?",
    ["Follow ethical principles above minimum rules; escalate to ethics/compliance; consider reputation risk; may refuse work", "Follow rules mechanically", "Ethics are aspirational only", "Profits override ethics"],
    0,
    "Ethics > rules: ethical practitioners exceeds minimums. If rule allows but ethics questionable, escalate to compliance/ethics officer. Refuse work if fundamental breach of integrity."
  ),

  q("reg-ch5-infra-31", "cisi-reg", "reg-ch5", "5.1", "Regulatory Coordination Post-Brexit", "infrastructure", "hard",
    "How does UK financial regulation differ post-Brexit?",
    ["UK independent from EU; may diverge on rules; maintains standards via FCA/PRA; international coordination via IOSCO/FSB", "Same as EU", "Lighter regulation now", "More coordination needed"],
    0,
    "Post-Brexit: passporting ended, UK rules diverging from EU, cooperation via bilateral/IOSCO frameworks. UK pursuing more innovative regulation tailored to UK markets/firms."
  ),

  q("reg-ch6-supervision-31", "cisi-reg", "reg-ch6", "6.2", "Supervisory Strategy", "supervision", "medium",
    "What is the FCA's supervisory strategy for different firm types?",
    ["Risk-based: intensive supervision of systemically important/high-risk firms; lighter for lower-risk; periodic reviews for all", "Identical supervision", "Random checks only", "No strategy"],
    0,
    "Strategy: FCA assigns supervision intensity based on firm risk profile. High-risk (large banks, advisers) intensive; low-risk lighter. Periodic reviews, reactive to issues."
  ),

  q("reg-ch7-auth-31", "cisi-reg", "reg-ch7", "7.2", "Recusal and Conflicts for SM&CR Managers", "authorisation", "medium",
    "What should senior managers do if they have conflicts in decisions?",
    ["Recuse from decision-making on conflicted matter; disclose to board/CEO; document abstention; someone else decides", "Can participate anyway", "No disclosure needed", "Conflicts cannot occur"],
    0,
    "SM&CR conflicts: manager with personal/financial interest should recuse from related decisions (e.g., family member employed, material financial interest). Document for regulatory evidence."
  ),

  q("reg-ch8-crime-36", "cisi-reg", "reg-ch8", "8.2", "Regulatory Approach to Market Abuse", "crime", "medium",
    "What is the FCA's approach to prosecuting market abuse vs civil enforcement?",
    ["FCA pursues civil enforcement (fines, bans) for most cases; refers serious cases to CPS for criminal prosecution", "Only civil enforcement", "Only criminal prosecution", "No enforcement"],
    0,
    "Dual enforcement: FCA enforces most market abuse cases civilly (fines, bans). Serious/criminal cases (insider dealing, fraud) referred to CPS/SFO for prosecution."
  ),

  q("reg-ch9-complaints-31", "cisi-reg", "reg-ch9", "9.1", "Complaints Data Analysis", "complaints", "hard",
    "Why should firms analyze complaints data patterns?",
    ["Identify systemic issues, prevent recurrence, improve processes, demonstrate compliance, protect consumers, reduce future complaints", "No value in analysis", "Only individual responses needed", "Patterns irrelevant"],
    0,
    "Analysis: track complaints by type, timing, outcome. Identify trends (e.g., high suitability complaints = poor advice practices). Root cause analysis enables process improvement."
  ),

  q("reg-ch10-conduct-41", "cisi-reg", "reg-ch10", "10.1", "Cancellation and Withdrawal Rights", "conduct", "medium",
    "When do cancellation rights not apply?",
    ["Life insurance (unless distance), already-ongoing services, commercial customers, certain derivative products over £50k notional", "Never excluded", "All products have rights", "Restrictions impossible"],
    0,
    "Cancellation exclusions: ongoing insurance contracts (after first month), already-executed trades, distance contracts exceeding 30 days, commercial/professional transactions."
  ),

  q("reg-ch1-sector-37", "cisi-reg", "reg-ch1", "1.1", "Quantitative Easing Impact", "sector", "hard",
    "How does quantitative easing affect the financial services sector?",
    ["Asset prices inflate, bond yields compress, investment returns decline, savings income falls, search-for-yield increases risk-taking", "No sector impact", "QE always benefits savers", "Neutral effect"],
    0,
    "QE effects: central bank purchases assets (bonds, gilts), increasing prices/liquidity. Consequences: low returns, savers seek income (higher risk), asset bubbles, inequality increases."
  ),

  q("reg-ch2-consumer-37", "cisi-reg", "reg-ch2", "2.2", "Career Changes and Financial Impact", "consumer", "medium",
    "How should financial planning adapt to career changes?",
    ["Reassess income stability, insurance needs, savings capacity, mortgage affordability, pension contributions; potential income reduction", "Career irrelevant to planning", "No adjustments needed", "Plans are fixed"],
    0,
    "Career transitions: job change affects income security, insurance need (redundancy risk), mortgage servicing capacity. Plans must adjust to new earning potential/stability."
  ),

  q("reg-ch3-contract-42", "cisi-reg", "reg-ch3", "3.2", "POA Scope Limitations", "contract", "hard",
    "What limitations can apply to Powers of Attorney?",
    ["Can be limited to: specific transactions, duration, specific property, exclude certain decisions; broader if general POA", "No limitations possible", "All POAs identical", "Scope unbounded"],
    0,
    "POA limitations: donor can restrict agent authority (e.g., limited to selling property, time-bound, specific transactions). Clear deed language essential. Exceeding authority = agent liable."
  ),

  q("reg-ch4-ethics-37", "cisi-reg", "reg-ch4", "4.1", "Gifts from Clients", "ethics", "medium",
    "What rules apply to gifts from clients to advisers?",
    ["Can accept small gifts (reasonable value); must disclose to firm/manager; no obligation gifts that influence advice", "All gifts prohibited", "No disclosure needed", "Large gifts encouraged"],
    0,
    "Client gifts: can accept modest gifts (flowers, wine, hospitality). Must disclose. Cannot accept expensive gifts that might influence advice (would compromise integrity)."
  ),

  q("reg-ch5-infra-32", "cisi-reg", "reg-ch5", "5.3", "FSCS Funding Crisis", "infrastructure", "hard",
    "What happens if FSCS runs out of funds during crisis?",
    ["FSCS borrows from market or government; levies increased on industry; compensation may be delayed; coverage limits apply", "Unlimited borrowing", "Customers lose all", "No crisis scenario"],
    0,
    "FSCS funding: if inadequate during crises, FSCS borrows (government backstop available). Increased levies on industry afterward. Compensation still pays but may be delayed."
  ),

  q("reg-ch6-supervision-32", "cisi-reg", "reg-ch6", "6.1", "Principle 6 Application to Corporates", "supervision", "medium",
    "How does Principle 6 (customer interest) apply to corporate customers?",
    ["Still applies but reduced for professional/corporate clients; more flexibility in execution than retail", "Not applicable to corporates", "Same as individuals", "Corporates unprotected"],
    0,
    "Corporate principle 6: still applies but less stringent for professional/corporate clients. They negotiate terms, accept trade-offs. Retail customers receive stronger protections."
  ),

  q("reg-ch7-auth-32", "cisi-reg", "reg-ch7", "7.1", "Unauthorized Conduct Consequences", "authorisation", "medium",
    "What are consequences for individuals conducting unauthorized activities?",
    ["Criminal offense (FSMA s.23): up to 2 years prison, unlimited fine; customers can claim FSCS compensation; regulatory action", "Only civil penalties", "No consequences", "Fine only"],
    0,
    "Unauthorized offense: serious crime under FSMA s.23. Penalties: imprisonment (up to 2 years), unlimited fine. Firms can be prosecuted and customers compensated via FSCS."
  ),

  q("reg-ch8-crime-37", "cisi-reg", "reg-ch8", "8.3", "Insider Dealing Penalties", "crime", "medium",
    "What are penalties for insider dealing convictions?",
    ["Up to 7 years imprisonment, unlimited fine, restitution of profits; also civil fines (£6m+) from FCA", "No penalties", "Fine only", "Imprisonment rare"],
    0,
    "Insider dealing penalties: 7+ years prison, unlimited fine. FCA civil penalties up to £6m. Significant deterrent. Affects career (professional bans), reputation destruction."
  ),

  q("reg-ch9-complaints-32", "cisi-reg", "reg-ch9", "9.1", "Complaint Timeliness", "complaints", "easy",
    "When must firms respond to complaints?",
    ["Within 8 weeks of receipt; can extend with customer consent; after 8 weeks, customer can escalate to FOS", "No timeframe", "Immediate response only", "Can delay indefinitely"],
    0,
    "8-week response: firms must issue response (upheld/rejected) or written extension within 8 weeks. Extensions require customer agreement. Delays trigger FOS escalation right."
  ),

  q("reg-ch10-conduct-42", "cisi-reg", "reg-ch10", "10.2", "Appropriateness Assessment", "conduct", "medium",
    "What must firms assess regarding appropriateness for non-advised sales?",
    ["Knowledge/experience with products; ability to understand risks; financial capacity; likelihood of informed decisions", "No assessment", "Only suitability matters", "Complexity irrelevant"],
    0,
    "Appropriateness: firm assesses customer knowledge (investments, risks, complexity), experience, financial capacity. Warning if not appropriate. Differs from suitability (no needs assessment)."
  ),

  q("reg-ch1-sector-38", "cisi-reg", "reg-ch1", "1.5", "Credit Cycles and Risk", "sector", "hard",
    "How do credit cycles affect financial institutions and consumers?",
    ["Easy credit (expansion) enables lending, consumption increases, asset prices rise; tight credit (contraction) restricts lending, consumption falls, asset prices crash", "No cycle effect", "Cycles are symmetric", "Always expansion"],
    0,
    "Credit cycle: expansion (low rates, easy lending, demand rises), contraction (tighter credit, demand falls, defaults rise). Financial crises occur during contraction phase."
  ),

  q("reg-ch2-consumer-38", "cisi-reg", "reg-ch2", "2.2", "Inheritance and Financial Planning", "consumer", "hard",
    "How should advisers address inheritance prospects in planning?",
    ["Consider probability/timing; avoid over-relying on inheritance; focus on own saving; plan for with/without inheritance scenarios", "Inheritance irrelevant", "Assume all inheritance", "Cannot be predicted"],
    0,
    "Inheritance consideration: uncertain (timing, amount, taxes). Should not dominate plan. Focus on own earning/saving capacity. Inheritance as bonus, not primary source."
  ),

  q("reg-ch3-contract-43", "cisi-reg", "reg-ch3", "3.5", "Trustee Liability", "contract", "medium",
    "What personal liability do trustees face?",
    ["Personal liability for breach of trust; can be sued by beneficiaries; may lose their own money if they breach fiduciary duties", "Cannot be liable", "Liability limited to trust assets", "Trust protects trustee"],
    0,
    "Trustee liability: personally liable for breaches. Beneficiary can sue and recover from trustee personally. Indemnity insurance available but doesn't cover dishonesty."
  ),

  q("reg-ch4-ethics-38", "cisi-reg", "reg-ch4", "4.1", "Personal Relationships and Conflicts", "ethics", "hard",
    "How should advisers handle advice to friends/family?",
    ["Can advise but must: disclose relationship, obtain written consent, maintain objectivity, ensure suitability, document extra care", "Cannot advise family", "Relationship irrelevant", "No disclosure needed"],
    0,
    "Family advice: can provide but risks: bias toward their interests, appearance of improper advantage, emotional decisions. Disclose, document extra care, consider recusal if complex."
  ),

  q("reg-ch5-infra-33", "cisi-reg", "reg-ch5", "5.2", "Authorization Withdrawal Process", "infrastructure", "medium",
    "What process must FCA follow to withdraw authorization?",
    ["Issue warning notice → opportunity to respond → decision notice → appeal opportunity → final notice; firm can appeal to Tribunal", "No process", "Immediate withdrawal", "Appeals unavailable"],
    0,
    "Withdrawal process: statutory notices (warning, decision, final), fallback period (respond to decision), Tribunal appeal available. Protects firm rights. Takes months typically."
  ),

  q("reg-ch6-supervision-33", "cisi-reg", "reg-ch6", "6.2", "Cease and Desist Orders", "supervision", "medium",
    "What is a cease and desist order and when does FCA issue it?",
    ["FCA orders firm to cease activity immediately; used for urgent risks (ongoing breaches, consumer harm); temporary measure", "Permanent only", "No cease powers", "Advisory only"],
    0,
    "Cease and desist: emergency order halting firm activities immediately (not waiting for formal processes). Used when ongoing breach threatens consumers/markets. Temporary pending formal action."
  ),

  q("reg-ch7-auth-33", "cisi-reg", "reg-ch7", "7.3", "Third-Party Service Providers", "authorisation", "medium",
    "What responsibility do firms have for third-party compliance?",
    ["Firms remain liable for third-party conduct (delegates, appointed reps); must contract/monitor properly; cannot avoid responsibility", "Third parties are separate entities", "Firms unaccountable", "Clients deal directly"],
    0,
    "Third-party responsibility: authorized firm contracting services (execution, custody) remains liable to FCA/customers. Must: vet carefully, contract terms, monitor, audit."
  ),

  q("reg-ch8-crime-38", "cisi-reg", "reg-ch8", "8.1", "CDD for Cash Businesses", "crime", "medium",
    "What enhanced CDD applies to high-cash businesses?",
    ["High-cash businesses (casinos, restaurants, pubs) are higher ML risk; EDD required: proof of funds source, business legitimacy", "Cash is lower-risk", "No CDD enhancement needed", "Cash is anonymous safe"],
    0,
    "Cash business risk: high cash turnover suggests ML (mixing illegal cash). EDD needed: verify business legitimacy, profit margins, customer base. Casinos/gaming = highest ML risk."
  ),

  q("reg-ch9-complaints-33", "cisi-reg", "reg-ch9", "9.2", "FOS Referral Requirement", "complaints", "easy",
    "Must firms refer complaints to FOS at customer request?",
    ["Yes, if customer requests escalation to FOS; firm must provide FOS contact details and confirm referral", "Can refuse escalation", "No FOS mechanism", "Referral optional"],
    0,
    "FOS referral: if customer requests, firm must refer (no discretion). Provide FOS contact, reference number, confirm it's free. Firm cannot pressure customer against FOS."
  ),

  q("reg-ch10-conduct-43", "cisi-reg", "reg-ch10", "10.3", "Financial Promotion to Minors", "conduct", "hard",
    "What restrictions apply to financial promotions to minors?",
    ["Cannot target minors with complex products; simplified/age-appropriate marketing only; parental consent required for accounts", "No restrictions", "Can target freely", "Age irrelevant"],
    0,
    "Minor protections: financial promotions must be age-appropriate. Cannot promote complex/risky investments. Parental/guardian consent required for accounts. Extra care in communications."
  ),

  q("reg-ch1-sector-39", "cisi-reg", "reg-ch1", "1.2", "Forward Guidance and Market Expectations", "sector", "hard",
    "How does BoE forward guidance affect financial markets?",
    ["Forward guidance (future rate path signals) influences market expectations, bond/equity prices, business investment, consumer spending", "Has no effect", "Only current rates matter", "Markets ignore guidance"],
    0,
    "Forward guidance: BoE signals future rate path (e.g., 'expect higher rates in 2024'). Markets anticipate, adjust prices. Creates policy credibility, reduces surprises."
  ),

  q("reg-ch2-consumer-39", "cisi-reg", "reg-ch2", "2.3", "Behavioral Biases and Investing", "consumer", "medium",
    "How might overconfidence bias affect consumer investment decisions?",
    ["Overconfident investors overestimate knowledge, trade excessively, incur costs, underperform; also hold concentrated portfolios", "Overconfidence improves returns", "No impact on decisions", "Always increases wealth"],
    0,
    "Overconfidence: investors believe they know more than they do, trade frequently (costs), hold single stocks (concentrated risk), underperform diversified index. Adviser should educate."
  ),

  q("reg-ch3-contract-44", "cisi-reg", "reg-ch3", "3.1", "Legality of Contract Terms", "contract", "medium",
    "Can contracts contain illegal clauses?",
    ["Illegal clauses are void; contract may survive if illegal clause is severable; entire contract void if illegal purpose", "All clauses binding", "Illegal clauses enforceable", "No illegality test"],
    0,
    "Illegal terms: unenforceable. If severable (can separate from contract), contract survives. If illegal purpose (whole contract aims to break law), entire contract void."
  ),

  q("reg-ch4-ethics-39", "cisi-reg", "reg-ch4", "4.1", "Confidentiality Exceptions", "ethics", "medium",
    "When can advisers disclose client information despite confidentiality?",
    ["Legal obligation (court order, regulatory demand), financial crime suspicion (SAR), crime prevention, public interest; disclose minimally", "Never disclose", "Always confidential", "Can share with friends"],
    0,
    "Confidentiality exceptions: court order, regulatory inquiry (FCA), money laundering suspicion (SAR), crime prevention, public safety. Disclose only necessary info. Tipping off prohibited."
  ),

  q("reg-ch5-infra-34", "cisi-reg", "reg-ch5", "5.1", "International Regulatory Bodies", "infrastructure", "medium",
    "What international bodies coordinate financial regulation?",
    ["IOSCO (markets), Basel Committee (banking), FSB (financial stability), ESMA (EU markets), standard-setters (IFRS); UK FCA/PRA participate", "No coordination", "Only FCA", "Unilateral regulation"],
    0,
    "International coordination: IOSCO (market standards), Basel (banking capital), FSB (systemic risks), ESMA (EU). UK participates, implements agreed standards, prevents regulatory gaps."
  ),

  q("reg-ch6-supervision-34", "cisi-reg", "reg-ch6", "6.1", "Principle 2 and Diligence", "supervision", "easy",
    "What does 'due diligence' require under Principle 2?",
    ["Reasonable care and effort in all dealings: assess client needs, perform thorough analysis, avoid careless errors, document work", "No diligence required", "Perfection expected", "Effort irrelevant"],
    0,
    "Diligence: firms must act carefully (not carelessly), reasonably analyze, avoid obvious errors, document. Not perfection but competent, thorough service."
  ),

  q("reg-ch7-auth-34", "cisi-reg", "reg-ch7", "7.3", "Regulatory Reporting by Authorized Firms", "authorisation", "medium",
    "What regulatory reports must authorized firms submit?",
    ["Financial returns (capital, liquidity), conduct returns (complaints, breaches), senior manager statements (under SM&CR), specific event reports", "No reporting", "Annual only", "Self-reporting optional"],
    0,
    "Reporting: firms submit regulatory returns (monthly/quarterly capital, quarterly conduct/complaints), SM&CR managers report breaches, certain events reported within days."
  ),

  q("reg-ch8-crime-39", "cisi-reg", "reg-ch8", "8.2", "Tipping Off Defenses", "crime", "medium",
    "What are defenses to a tipping off allegation?",
    ["Disclosure to legal advisor (privilege), disclosure to comply with law (court order), no knowledge tip would result from disclosure", "No defenses", "Always guilty", "Professional privilege never applies"],
    0,
    "Tipping off defense: (1) legal advice privilege (solicitor), (2) law-mandated disclosure, (3) no knowledge that disclosure would tip (accidental). Rare exceptions."
  ),

  q("reg-ch9-complaints-34", "cisi-reg", "reg-ch9", "9.3", "FSCS Eligible Claimant Definition", "complaints", "medium",
    "What defines an eligible claimant for FSCS purposes?",
    ["Natural person (consumer), small business (turnover <€2m), charity, trustee (for scheme members); excludes large corporates, professionals", "All claimants eligible", "Only individuals", "Professionals included"],
    0,
    "Eligible claimant: consumers (individuals), small businesses, charities. Excludes: large corporations (€2m+ turnover), financial institutions, connected firms."
  ),

  q("reg-ch10-conduct-44", "cisi-reg", "reg-ch10", "10.3", "Misleading Advertising Tactics", "conduct", "medium",
    "What advertising tactics are considered misleading?",
    ["Exaggerated returns, hidden risks, comparing to unrealistic baselines, using ambiguous language, small-print disclaimers", "All advertising acceptable", "Exaggeration legal", "Hidden risks acceptable"],
    0,
    "Misleading tactics: guaranteed returns (false), small-print warnings (insufficient), selective comparisons, technical jargon (confusing), testimonials (anecdotal). All prohibited under COBS."
  ),

  q("reg-ch1-sector-40", "cisi-reg", "reg-ch1", "1.3", "Gilt Market Function", "sector", "easy",
    "What role do gilt markets play in the UK economy?",
    ["Government funding mechanism (borrowing via gilts), benchmark for corporate bond pricing, safe asset for investors, liquidity for secondary market", "Only equity markets matter", "Gilts unimportant", "No market function"],
    0,
    "Gilt significance: government borrows via gilts (bonds), providing funding. Gilts serve as benchmark (gilt yield = risk-free rate) for pricing corporate debt."
  ),

  q("reg-ch2-consumer-40", "cisi-reg", "reg-ch2", "2.2", "Annuity Decisions", "consumer", "hard",
    "Why are annuity decisions critical in retirement planning?",
    ["Annuity converts capital to lifetime income; irreversible; poor decisions lock in low payments forever; requires proper advice", "Annuities easily changed", "No advisability needed", "All annuities identical"],
    0,
    "Annuity criticality: converts retirement savings to income for life. Irreversible decision. Poor choices (inflated expectations, unsuitable product) reduce retirement income permanently."
  ),

  q("reg-ch3-contract-45", "cisi-reg", "reg-ch3", "3.3", "Tenancy Rights and Inheritance", "contract", "medium",
    "How do tenancy type affect inheritance outcomes?",
    ["Joint tenancy = automatic survivor inheritance (outside will); Tenancy in common = share to deceased's estate; affects planning", "Both identical outcomes", "Inheritance irrelevant", "Planning impossible"],
    0,
    "Inheritance impact: joint tenancy provides certainty (survivor inherits automatically), but inflexible. Tenancy in common allows customization (different shares, separate heirs)."
  ),

  q("reg-ch4-ethics-40", "cisi-reg", "reg-ch4", "4.2", "Commission Conflicts", "ethics", "medium",
    "How should advisers manage commission conflicts?",
    ["Disclose commission structure, don't let commission drive recommendations, consider lower-commission alternatives, document independence", "Commission irrelevant", "Recommend highest commission", "Disclosure unnecessary"],
    0,
    "Commission conflict: adviser earns higher commission for Product A vs B. Must disclose, ensure recommendation is suitable regardless, document reasoning, consider fee-only model."
  ),

  q("reg-ch5-infra-35", "cisi-reg", "reg-ch5", "5.2", "PRA Authorization of Building Societies", "infrastructure", "medium",
    "What specific requirements apply to building society authorization?",
    ["Mutual status (member-owned), capital requirements (PRA), governance (board), consumer protection, prudential regulation", "No specific requirements", "Identical to banks", "Deregulated entirely"],
    0,
    "Building society: mutual (member-owned), dual-regulated (FCA conduct, PRA prudence), capital requirements under PRA rules, strict governance, consumer protections."
  ),

  q("reg-ch6-supervision-35", "cisi-reg", "reg-ch6", "6.3", "Risk Appetite Frameworks", "supervision", "hard",
    "What is a risk appetite framework and why is it important?",
    ["Framework defining risks firm will accept; guides strategy, capital decisions, compensation; FCA expects clear frameworks", "No risk appetite", "Unlimited risk", "Frameworks irrelevant"],
    0,
    "Risk appetite: board defines acceptable risk levels (credit, market, operational, reputational). Guides all business decisions. FCA expects documented, monitored frameworks."
  ),

  q("reg-ch7-auth-35", "cisi-reg", "reg-ch7", "7.2", "Certification Regime Details", "authorisation", "hard",
    "What staff must firms certify under certification regime?",
    ["Control function staff: compliance officers, risk managers, finance directors, heads of other control functions; firm certifies fitness/propriety", "All staff", "Only senior management", "No certification needed"],
    0,
    "Certification: firm certifies staff in specified control functions (compliance, risk, financial controls) are fit/proper. FCA can challenge. Creates firm accountability for staff quality."
  ),

  q("reg-ch8-crime-40", "cisi-reg", "reg-ch8", "8.1", "Perpetual Suspicion Rule", "crime", "medium",
    "What is the 'perpetual suspicion' issue in ML reporting?",
    ["If suspicion never fully investigated/concluded, may remain suspended indefinitely, never completing SAR; creates compliance risk", "Suspicion always concludes", "No ongoing suspicion", "Investigation irrelevant"],
    0,
    "Perpetual suspicion: ongoing SAR if suspicion never resolved. Creates compliance burden. Best practice: conclude investigation, resolve suspicion or make SAR decision within reasonable period."
  ),

  q("reg-ch9-complaints-35", "cisi-reg", "reg-ch9", "9.1", "Complaint Escalation Process", "complaints", "easy",
    "What is the normal escalation path for unresolved complaints?",
    ["Customer → firm (8 weeks to respond) → FOS (if dissatisfied or time-barred) → Tribunal (if FOS decision challenged)", "No escalation", "Only courts available", "FOS not independent"],
    0,
    "Escalation path: (1) customer complains to firm, (2) firm responds within 8 weeks, (3) customer escalates to FOS within 6 months, (4) FOS decides (binding on firm)."
  ),

  q("reg-ch10-conduct-45", "cisi-reg", "reg-ch10", "10.2", "Pension Risk Warnings", "conduct", "medium",
    "What warnings must be given regarding pension transfers?",
    ["Warn of loss of guaranteed income, inflation protection loss, investment risk, charges, early access limitations", "No warnings needed", "Minimal warning sufficient", "Can minimize risks"],
    0,
    "Pension transfer warnings: defined benefit security, guaranteed income, inflation-proofing (DB pensions) vs. flexibility, investment risk (DC). Complex decision requiring clear warnings."
  ),

  // Additional questions to reach 450 total
  q("reg-ch1-sector-41", "cisi-reg", "reg-ch1", "1.1", "Government Borrowing Costs", "sector", "medium",
    "How do government borrowing costs affect the broader economy?",
    ["High gilt yields increase government spending costs, reduce public investment, may crowd out private sector borrowing", "No impact on economy", "Lower spending always better", "Public debt irrelevant"],
    0,
    "Gilt yields (cost to borrow): higher yields increase government debt service costs, reduce funds for services. When yields spike (crisis), public spending constrained."
  ),

  q("reg-ch2-consumer-41", "cisi-reg", "reg-ch2", "2.2", "Cohabitation and Financial Planning", "consumer", "medium",
    "What financial risks does cohabitation without legal marriage create?",
    ["Limited inheritance rights, no spousal pension, no automatic survivorship, complex property disputes, lack of legal protections", "Identical to marriage", "No risks", "Legal protections automatic"],
    0,
    "Cohabitation risks: unmarried partners lack legal marriage protections. Cohabitation agreement recommended. Insurance critical (no spousal inheritance). Wills must specify intentions."
  ),

  q("reg-ch3-contract-46", "cisi-reg", "reg-ch3", "3.4", "Insolvency and Personal Liability", "contract", "medium",
    "What happens to director personal liability in company insolvency?",
    ["Directors personally liable for breaches of duty, fraudulent trading, wrongful trading; can be pursued by liquidator/creditors", "No personal liability", "Limited to company assets", "All liability forgiven"],
    0,
    "Director liability: personal liability for breaches (breach of duty, fraudulent trading). Liquidator pursues for creditor benefit. Directors' insurance available but doesn't cover fraud."
  ),

  q("reg-ch4-ethics-41", "cisi-reg", "reg-ch4", "4.1", "Whistleblowing Protection", "ethics", "hard",
    "What protections do whistleblowers receive?",
    ["Protected from dismissal/retaliation; compensation if wrongfully dismissed; confidentiality maintained; legal costs covered in some cases", "No protection", "Dismissal risk", "No compensation"],
    0,
    "Whistleblower protection: FSMA/COBS protect from retaliation. Protected disclosure = cannot be fired, demoted, or discriminated against. Confidentiality protected."
  ),

  q("reg-ch5-infra-36", "cisi-reg", "reg-ch5", "5.1", "Financial Stability Board Role", "infrastructure", "medium",
    "What is the Financial Stability Board and its role?",
    ["International body coordinating financial regulation, addressing systemic risks, recommending standards; includes G20 countries", "Only UK organization", "No coordinating role", "Advisory only"],
    0,
    "FSB: coordinates across regulatory authorities. Identifies systemic risks (too-big-to-fail, asset bubbles), recommends standards (Basel, IOSCO). Strengthened post-2008."
  ),

  q("reg-ch6-supervision-36", "cisi-reg", "reg-ch6", "6.2", "Regulatory Notices Appeal Process", "supervision", "medium",
    "Can firms appeal FCA decision notices?",
    ["Yes, appeal to Upper Tribunal (judicial review available); appeal on merits/points of law; tribunal can overturn, adjust, confirm", "No appeals possible", "Only written objections", "Appeal fails always"],
    0,
    "Appeals: firm can appeal FCA decision notice to Upper Tribunal (not Tribunal itself for PRA). Tribunal reviews facts/law. Can overturn/vary FCA decision. Valuable due process."
  ),

  q("reg-ch7-auth-36", "cisi-reg", "reg-ch7", "7.1", "Credit Broking Authorization", "authorisation", "medium",
    "What is required for credit broking authorization?",
    ["Authorization as credit broker (arranging credit); must be fit/proper, maintain capital, comply with ICOBS rules for mortgages/loans", "No authorization needed", "Same as investment firms", "Capital not required"],
    0,
    "Credit broking: firms arranging mortgages/loans require authorization. Must meet FCA standards (ICOBS), capital, governance. Growing sector with specific conduct rules."
  ),

  q("reg-ch8-crime-41", "cisi-reg", "reg-ch8", "8.1", "Structuring Violations", "crime", "easy",
    "What is structuring and is it illegal?",
    ["Deliberately breaking down transactions to avoid reporting thresholds (e.g., multiple €9,999 deposits below €10k threshold); illegal", "Always legal", "Below €10k always fine", "Structuring acceptable"],
    0,
    "Structuring: deliberately splitting to avoid SAR thresholds = itself suspicious activity (evasion/aware-of-threshold). Reportable independently. Pattern-based ML detection."
  ),

  q("reg-ch9-complaints-36", "cisi-reg", "reg-ch9", "9.2", "FOS Investigative Powers", "complaints", "medium",
    "What investigative powers does FOS have?",
    ["Can request documents, compel attendance, call witnesses, order disclosure; decisions binding on firm unless appealed by customer", "No investigation powers", "Only advisory", "Cannot compel anything"],
    0,
    "FOS powers: compel document production, require party attendance, interview witnesses, order disclosure. Statutory investigation authority. Firm must cooperate fully."
  ),

  q("reg-ch10-conduct-46", "cisi-reg", "reg-ch10", "10.4", "Nostro Accounts and Risk", "conduct", "medium",
    "What are nostro accounts and what risks do they present?",
    ["Accounts held at correspondent banks (overseas) to settle client transactions; risks: bank failure, regulatory change, access delays", "Domestic accounts only", "No counterparty risk", "No settlement needed"],
    0,
    "Nostro accounts: firm holds USD at US bank to settle USD transactions. Risks: US bank failure (FDIC coverage?), regulatory changes, access delays, deposit insurance gaps."
  ),

  q("reg-ch1-sector-42", "cisi-reg", "reg-ch1", "1.4", "Exchange Rate Hedging", "sector", "easy",
    "Why do international businesses hedge currency risk?",
    ["Lock in exchange rates for future transactions, avoid profit loss from currency swings, improve cash flow predictability", "Hedging increases risk", "Currency risk never matters", "No hedging available"],
    0,
    "Hedging: forward contracts (fix future rate), options (insurance). Businesses hedge to lock in costs/revenues. Removes currency risk. FX derivatives used extensively."
  ),

  q("reg-ch2-consumer-42", "cisi-reg", "reg-ch2", "2.3", "Momentum Bias in Investing", "consumer", "hard",
    "How can momentum bias harm retail investors?",
    ["Buy after prices rise (chasing returns), sell after decline (crystallizing losses); creates losses vs. buy-and-hold", "Momentum always profitable", "Timing works perfectly", "No bias effect"],
    0,
    "Momentum bias: investors follow the crowd (buy after rise, sell after fall). Opposite of buy-low, sell-high. Creates underperformance. Education and rules help (cooling-off, etc)."
  ),

  q("reg-ch3-contract-47", "cisi-reg", "reg-ch3", "3.5", "Trust Accounting and Audits", "contract", "medium",
    "What accounting obligations apply to trustees?",
    ["Maintain trust accounts, prepare annual accounts, provide to beneficiaries, subject to audit, full transparency required", "No accounting needed", "Oral records sufficient", "Secrecy acceptable"],
    0,
    "Trust accounting: trustee must maintain detailed accounts, produce annually, show all income/expenditure/capital changes. Beneficiaries have right to accounts. Audit common for large trusts."
  ),

  q("reg-ch4-ethics-42", "cisi-reg", "reg-ch4", "4.2", "Conflicts in Fund Management", "ethics", "medium",
    "What conflicts arise in fund management?",
    ["Fund manager earns fees regardless of performance, incentive to grow AUM (assets), potential to favor own products, trading ahead of clients", "No conflicts possible", "Conflicts always resolved", "Self-interest acceptable"],
    0,
    "Fund manager conflicts: fee-based (profit from size not performance), product-pushing (cross-selling own products), trading ahead (personal account before clients). Require disclosure/management."
  ),

  q("reg-ch5-infra-37", "cisi-reg", "reg-ch5", "5.3", "Financial Ombudsman Jurisdiction Limits", "infrastructure", "medium",
    "What are the time limits for FOS complaints?",
    ["6 years from act/omission or 3 years from awareness; can escalate up to 6 months after receiving FOS information", "No time limits", "Indefinite claims possible", "1-year limit"],
    0,
    "FOS time limits: complaint must relate to act/omission within 6-year period (or 3 years from when consumer became aware). Escalation within 6 months of FOS details. Protects firms."
  ),

  q("reg-ch6-supervision-37", "cisi-reg", "reg-ch6", "6.1", "Treating Customers Fairly Outcomes", "supervision", "hard",
    "What outcomes does FCA expect firms to deliver (TCF)?",
    ["Customers get right products at fair price; right disclosures; fair complaint handling; proper claims handling; conflict management", "No specific outcomes", "Firm profit alone", "Customer harm acceptable"],
    0,
    "TCF outcomes: (1) right products (suitability), (2) fair price (costs disclosed), (3) information clear, (4) complaints handled promptly, (5) claims settled fairly."
  ),

  q("reg-ch7-auth-37", "cisi-reg", "reg-ch7", "7.3", "Delegation and Responsibility", "authorisation", "medium",
    "Can authorized firms delegate all compliance responsibilities?",
    ["Can delegate functions but not responsibility; firm accountable for delegates; must contract/monitor carefully", "Can fully delegate", "No delegation allowed", "Delegates independent"],
    0,
    "Delegation limits: firm can appoint compliance officers, outsource functions, but FCA holds firm accountable. Must oversee delegates, maintain standards, ensure adequate resources."
  ),

  q("reg-ch8-crime-42", "cisi-reg", "reg-ch8", "8.2", "Market Abuse Reporting", "crime", "medium",
    "Who must report suspected market abuse?",
    ["Market operators, investment firms, others with knowledge; report to FCA without delay; no tipping off", "Only FCA can report", "Optional reporting", "Can report to firm only"],
    0,
    "Market abuse reporting: anyone suspecting insider dealing/manipulation must report to FCA (operators, advisers, brokers). Duty applies across financial sector. Prompt reporting essential."
  ),

  q("reg-ch9-complaints-37", "cisi-reg", "reg-ch9", "9.1", "Complaint Response Quality", "complaints", "medium",
    "What makes a quality complaint response?",
    ["Clear decision, thorough investigation, fair reasoning, appropriate compensation, next steps, firm contact, FOS details", "Minimal response", "No explanation needed", "Speed over accuracy"],
    0,
    "Quality response: investigates fully (interviews staff, reviews files), explains findings clearly, justifies decision, offers fair remedy, confirms FOS right, provides contacts."
  ),

  q("reg-ch10-conduct-47", "cisi-reg", "reg-ch10", "10.5", "Negative Balance Protection", "conduct", "easy",
    "What does negative balance protection mean?",
    ["Retail clients cannot lose more than invested; FX/leveraged products capped at account balance; prevents debt on losses", "Unlimited leverage allowed", "Losses unlimited", "Protection not required"],
    0,
    "Negative balance: Retail FX/derivative clients cannot lose more than deposited. If market moves sharply, position closed before debt occurs. Does not apply to Professionals."
  ),

  q("reg-ch1-sector-43", "cisi-reg", "reg-ch1", "1.1", "Tax Competitiveness", "sector", "easy",
    "How does tax policy affect financial services competitiveness?",
    ["Lower corporate taxes attract firms, higher personal taxes on bankers discourage talent, financial transaction taxes affect trading volume", "Tax irrelevant", "All tax equally affecting", "Higher tax better"],
    0,
    "Tax effects: corporation tax (18-25%), banker bonus tax, FTT (financial transaction tax). UK balance: low corp tax (attracts HQs), avoids FTT (protects traders/efficiency)."
  ),

  q("reg-ch2-consumer-43", "cisi-reg", "reg-ch2", "2.2", "Grandparent Gifting", "consumer", "medium",
    "What financial and legal considerations apply to gifts to grandchildren?",
    ["Gift tax (none in UK under £3k annually with exemptions), trust implications if held for minor, inheritance if integrated with estate", "No gift tax", "Never held in trust", "Gifts always separate"],
    0,
    "Grandparent gifts: UK no gift tax. But gifts integrated into estate (IHT). If for minor, consider trust structure (bare trust for simplicity). Size matters (education/wedding exempt)."
  ),

  q("reg-ch3-contract-48", "cisi-reg", "reg-ch3", "3.2", "Power of Attorney Revocation", "contract", "hard",
    "Can a POA be revoked and what happens?",
    ["Yes, donor can revoke anytime (or dies); must notify attorney in writing; existing obligations remain unless notice given", "Cannot revoke", "Revocation automatic", "Third parties unaffected"],
    0,
    "Revocation: donor revokes by written notice to attorney. Post-revocation: attorney cannot act (breach = liability). Third parties dealing after revocation: attorney still has apparent authority."
  ),

  q("reg-ch4-ethics-43", "cisi-reg", "reg-ch4", "4.1", "Anti-Corruption Due Diligence", "ethics", "medium",
    "What anti-bribery due diligence must firms conduct?",
    ["Assess employees for corruption risks, verify third parties (agents, consultants), screen for sanctions/PEPs, provide training, audit compliance", "No due diligence needed", "Only legal required", "Training optional"],
    0,
    "Bribery DD: risk assessment, background checks (employees), third-party vetting (agents, distributors), sanctions screening, annual training, audit testing, compliance monitoring."
  ),

  q("reg-ch5-infra-38", "cisi-reg", "reg-ch5", "5.2", "Regulatory Capital Buffers", "infrastructure", "hard",
    "What capital buffers has PRA introduced for financial stability?",
    ["Capital requirements + buffers: common equity (8%), systemic (0.5-3%), countercyclical (0-2.5%), sectoral risks. Creates capacity to absorb losses", "No buffers", "Minimal requirements", "Unlimited leverage"],
    0,
    "PRA buffers: CET1 (Core Equity Tier 1) = 8% minimum + buffers = 14%+ typical. Buffers absorb losses. Higher buffers (systemically important) = €500m+ additional capital."
  ),

  q("reg-ch6-supervision-38", "cisi-reg", "reg-ch6", "6.2", "Enforcement Themes and Priorities", "supervision", "medium",
    "How does FCA communicate its enforcement priorities?",
    ["Annual priorities (conduct, AML, markets), thematic reviews (sector-wide issues), published decisions (enforcement precedents), guidance updates", "No communication", "Only confidential", "No prioritization"],
    0,
    "FCA communication: annual priorities (e.g., adviser conduct, vulnerable customers), thematic reports (e.g., suitability failures), published enforcement decisions (education/deterrence)."
  ),

  q("reg-ch7-auth-38", "cisi-reg", "reg-ch7", "7.2", "Fit and Proper Reassessment", "authorisation", "medium",
    "When must firms reassess fit and proper status of SM&CR managers?",
    ["Annually minimum; reassessed if material changes (conduct issue, external event, role change); must be ongoing assessment", "Never reassess", "Only at hiring", "Ad-hoc only"],
    0,
    "Reassessment: annual minimum (or on material change). Managers' fitness can decline (allegations, external events). Firm must monitor, escalate to FCA if concerns."
  ),

  q("reg-ch8-crime-43", "cisi-reg", "reg-ch8", "8.1", "AML Risk Factors", "crime", "medium",
    "What are common AML risk factors firms must assess?",
    ["Geography (high-risk countries), industry (cash-intensive), customer type (PEPs), transaction patterns (large round sums, no economic purpose), velocity (frequent suspicious activity)", "No risk factors", "All customers identical", "No assessment needed"],
    0,
    "ML risk factors: high-risk jurisdictions (FATF grey list), PEPs, cash businesses, shell companies, round-sum transfers, rapid movement. Firms assess for CDD/EDD requirements."
  ),

  q("reg-ch9-complaints-38", "cisi-reg", "reg-ch9", "9.3", "FSCS Corporate Deposit Coverage", "complaints", "medium",
    "Are corporate deposits covered by FSCS if firm fails?",
    ["Corporate deposits now covered (2015 change): up to €100k (now €85k) if business turnover < €2m; larger companies not covered", "No corporate coverage", "All corporates covered", "Always unlimited"],
    0,
    "Corporate coverage (2015): small business deposits (€2m turnover limit) now covered. Larger corporates not eligible (market discipline). Change increased FSCS exposure."
  ),

  q("reg-ch10-conduct-48", "cisi-reg", "reg-ch10", "10.1", "Tied Agent Status", "conduct", "medium",
    "What must tied agents disclose to customers?",
    ["Tied status before advice, names of firms represented, products available, any restrictions on product range, basis of remuneration", "No disclosure", "Tied status optional", "Compensation secret"],
    0,
    "Tied disclosure: must state tied agent status, specify firm(s), explain product restrictions, disclose how paid (commission/salary). Transparency allows customer independent comparison."
  ),

  q("reg-ch1-sector-44", "cisi-reg", "reg-ch1", "1.3", "Equity Issuance Underwriting", "sector", "easy",
    "What role do investment banks play in equity issuance?",
    ["Underwriters: commit to purchase IPO shares, manage roadshow, stabilize price post-listing, earn commission", "No IPO role", "Direct issuance always", "No underwriting needed"],
    0,
    "Underwriting: investment bank commits to buy IPO shares if public doesn't. Reduces issuer risk. Manage due diligence, pricing, distribution, stabilization. Earn 3-7% commission."
  ),

  q("reg-ch2-consumer-44", "cisi-reg", "reg-ch2", "2.1", "Income Protection vs Life Insurance", "consumer", "hard",
    "How do income protection and life insurance serve different needs?",
    ["IP replaces income if unable to work (disability, illness); life insurance replaces income if death. Both critical for dependants", "Same product", "IP more important", "Insurance sufficient"],
    0,
    "Protection types: life insurance (replaces income if death), income protection (replaces income if can't work). Both essential for dependants. Different needs, different products."
  ),

  q("reg-ch3-contract-49", "cisi-reg", "reg-ch3", "3.3", "Dispute Resolution in Trusts", "contract", "medium",
    "How can disputes between trustees and beneficiaries be resolved?",
    ["Courts (trust disputes), mediation, arbitration; trustee liable if breach, beneficiary can sue for recovery", "Courts only", "No dispute resolution", "Binding always"],
    0,
    "Trust disputes: resolved by courts (equitable jurisdiction). Beneficiary sues trustee for breach. Complex suits (family, succession) go to Court of Protection or Chancery."
  ),

  q("reg-ch4-ethics-44", "cisi-reg", "reg-ch4", "4.1", "Professional Skepticism", "ethics", "medium",
    "What is professional skepticism and why is it important?",
    ["Healthy questioning of client representations, not accepting at face value, investigating inconsistencies, maintaining independence", "Trust implicitly", "Accept all statements", "Skepticism unprofessional"],
    0,
    "Skepticism: don't blindly accept client claims. Question inconsistencies (reported income vs. lifestyle), investigate sources. Protects advisor and client (prevents being used in fraud)."
  ),

  q("reg-ch5-infra-39", "cisi-reg", "reg-ch5", "5.1", "Central Counterparty Role", "infrastructure", "medium",
    "What is the role of Central Counterparties (CCPs) in financial stability?",
    ["Guarantee settlement (if counterparty fails, CCP steps in), reduce systemic risk, clear trades, manage collateral; regulated tightly", "No financial role", "Increase risk", "Unregulated"],
    0,
    "CCP function: both sides of trade (buyer-seller both deal with CCP), guarantees settlement. If counterparty fails, CCP absorbs loss. Critical for derivatives, post-2008."
  ),

  q("reg-ch6-supervision-39", "cisi-reg", "reg-ch6", "6.1", "Fit and Proper Application to Staff", "supervision", "medium",
    "How does fit and proper assessment apply to non-senior staff?",
    ["All staff must be fit/proper (honesty, competence); less rigorous for junior roles; no criminal record; suitable qualifications", "Only senior staff assessed", "No assessment needed", "Criminal background okay"],
    0,
    "Staff fitness: all staff assessed (not just SM&CR). No criminal convictions (honesty), competent for role, suitable qualifications. Less documentation for junior roles."
  ),

  q("reg-ch7-auth-39", "cisi-reg", "reg-ch7", "7.3", "Stress Testing Requirements", "authorisation", "medium",
    "What stress testing must authorized firms conduct?",
    ["Scenario analysis: market crash, credit shock, interest rate shock; assess capital adequacy; required for prudential firms annually", "No stress testing", "Only banks", "No impact shown"],
    0,
    "Stress testing: firms model extreme but plausible scenarios (30% equity crash, credit spreads double, rates +2%). Assess capital adequacy. Prudential firms (banks) tested annually."
  ),

  q("reg-ch8-crime-44", "cisi-reg", "reg-ch8", "8.1", "Customer Segmentation for Risk", "crime", "medium",
    "Why do firms segment customers for AML risk assessment?",
    ["Allocate resources based on risk; high-risk (PEPs, high-value) get EDD; low-risk (individuals, small transactions) get simplified DD", "Same for all customers", "No segmentation", "Risk-blind"],
    0,
    "Segmentation: high-risk (PEPs, high-value, cash-intensive business, sanctions-related jurisdictions) = EDD. Low-risk (individuals, routine transactions, low-risk countries) = simplified DD."
  ),

  q("reg-ch9-complaints-39", "cisi-reg", "reg-ch9", "9.2", "FOS Compensation Limits by Type", "complaints", "easy",
    "What are FOS compensation limits?",
    ["£385,000 per complaint; separate limits apply for investments (£85k), deposits (£85k via FSCS not FOS)", "Unlimited", "£100k", "No limits"],
    0,
    "FOS limit: £385,000 per complaint (jurisdiction cap). Investment/deposit complaints: underlying FSCS limits apply (£85k). Insurance complaints: may exceed £385k."
  ),

  q("reg-ch10-conduct-49", "cisi-reg", "reg-ch10", "10.4", "Securities Safeguarding Standards", "conduct", "hard",
    "What safeguarding standards apply to securities held for clients?",
    ["Held in custody, segregated register, daily reconciliation, insurance cover (default risk), audit trail, cannot use as collateral", "Can hold unsegregated", "Reconciliation optional", "Can use as security"],
    0,
    "Securities safeguards: held in trust (not firm's assets), registered (clearly marked), daily reconciliation, insured against loss. Firm cannot use as own collateral/security."
  ),

  q("reg-ch1-sector-45", "cisi-reg", "reg-ch1", "1.5", "Recession Indicators", "sector", "easy",
    "What economic indicators signal an approaching recession?",
    ["Negative yield curve (long rates below short), falling business confidence, rising unemployment, declining manufacturing/services PMI", "Booming always", "No indicators exist", "Recessions unpredictable"],
    0,
    "Recession signals: inverted yield curve (2yr > 10yr unusual), PMI below 50 (contraction), rising unemployment, falling consumer confidence, negative GDP growth."
  ),

  q("reg-ch2-consumer-45", "cisi-reg", "reg-ch2", "2.2", "Working Longer and Retirement", "consumer", "hard",
    "How does working longer affect retirement planning?",
    ["Extends earning years (more savings accumulated), reduces retirement duration (less needed capital), increases pension accrual; major lever for improving retirement outcomes", "No impact on retirement", "Cannot work longer", "No difference"],
    0,
    "Working longer: critical lever. Even 2 extra years: saves £50k+, accumulates more pension (fewer draws), reduces required retirement capital. Major impact on adequacy."
  ),

  q("reg-ch1-sector-46", "cisi-reg", "reg-ch1", "1.2", "Real Interest Rates", "sector", "medium",
    "What are real interest rates and why do they matter?",
    ["Nominal rate minus inflation; real rate shows purchasing power gain/loss; low/negative real rates discourage saving", "Same as nominal", "Inflation irrelevant", "Real rates constant"],
    0,
    "Real rate: 5% nominal - 3% inflation = 2% real return. Negative real (1% rate, 3% inflation) destroys savings. Savers care about real returns (purchasing power)."
  ),

  q("reg-ch2-consumer-46", "cisi-reg", "reg-ch2", "2.1", "Debt-to-Income Ratios", "consumer", "medium",
    "How does debt-to-income ratio affect financial planning?",
    ["Higher ratio (more debt) reduces borrowing capacity, increases default risk, limits financial flexibility, reduces savings ability", "No impact on capacity", "High ratio always acceptable", "Ratio irrelevant"],
    0,
    "DTI ratio: mortgage lenders limit debt repayment to 28-35% of income. Higher DTI (more debt payments) leaves less for saving. Reduces capacity for retirement/education funding."
  ),

  q("reg-ch3-contract-50", "cisi-reg", "reg-ch3", "3.1", "Doctrine of Consideration", "contract", "medium",
    "What does the doctrine of consideration require?",
    ["Both parties must exchange value (benefit/detriment); one-sided promises not binding; must be real but need not be fair", "No consideration needed", "Value always equal", "Unfair consideration void"],
    0,
    "Consideration: contract binding only if both give/receive something. One-sided promise unenforceable. Consideration needn't be equal (fair) just real and bargained-for."
  ),

  q("reg-ch4-ethics-45", "cisi-reg", "reg-ch4", "4.2", "Fair Value Disclosure", "ethics", "medium",
    "What is the fair value debate in financial advice?",
    ["Advisers must disclose if products offer fair value (value for money); complex debate on measuring value (cost, service, outcome)", "No value discussion", "Always fair value", "Value cannot be assessed"],
    0,
    "Fair value: regulators push firms to demonstrate value for customers (VFM assessments). Complex: measure cost vs. service vs. returns vs. alternatives. Transparency increasing."
  ),

  q("reg-ch5-infra-40", "cisi-reg", "reg-ch5", "5.2", "Appointed Representatives Regulation", "infrastructure", "medium",
    "Are appointed representatives regulated by FCA?",
    ["No, but principal firm is responsible; appointed rep must be fit/proper; principal liable for rep's conduct; less regulated than authorized", "FCA regulates directly", "Cannot use appointed reps", "Reps fully independent"],
    0,
    "Appointed representative: not authorized separately (principal's responsibility). Firm must vet (fit/proper), monitor, indemnify. Customers recourse to principal/FSCS."
  ),

  q("reg-ch6-supervision-40", "cisi-reg", "reg-ch6", "6.1", "Remuneration Code Principles", "supervision", "medium",
    "What are the Remuneration Code principles?",
    ["Variable pay not excessive, deferred/clawed back, align with risk, control staff paid well, avoid hedging/insurance to offset, profit-based adjusted for risk", "No principles", "Pay unlimited", "No risk adjustment"],
    0,
    "Remuneration: variable pay aligned to risk (deferred, clawed back), control functions paid adequately (independent), clawback of bonuses if breaches emerge within 6 years."
  ),

  q("reg-ch7-auth-40", "cisi-reg", "reg-ch7", "7.1", "Financial Stability Purpose", "authorisation", "easy",
    "Why does FCA have consumer protection as a statutory objective?",
    ["Protects consumers from fraud/misconduct, ensures fair treatment, provides compensation via FSCS, promotes confidence in markets", "No protection needed", "Firms self-regulate", "Only profits matter"],
    0,
    "Consumer protection objective: maintain confidence in financial system (critical to stability). Protects individuals from fraud, unfair treatment, ensures compensation for losses."
  ),

  q("reg-ch8-crime-45", "cisi-reg", "reg-ch8", "8.4", "Bribery Prevention Procedures", "crime", "medium",
    "What procedures must firms adopt to prevent bribery?",
    ["Code of conduct, risk assessment, training, due diligence on third parties/employees, monitoring, consequences for breaches", "No procedures", "Procedures optional", "Training unnecessary"],
    0,
    "Anti-bribery procedures: written policy, staff training (annual), background checks (hires, agents), transaction monitoring (unusual gifts/payments), consequences for breaches."
  ),

  q("reg-ch9-complaints-40", "cisi-reg", "reg-ch9", "9.1", "Internal Escalation", "complaints", "easy",
    "What is internal escalation in complaint handling?",
    ["Complaints handled by lowlevel staff initially, escalated to senior management if complex/serious for review/approval", "No escalation", "CEO handles all", "Only first-level handling"],
    0,
    "Escalation: simple complaints handled frontline, complex/serious escalated to management team, significant compensation escalated to director approval. Ensures consistency."
  ),

  q("reg-ch10-conduct-50", "cisi-reg", "reg-ch10", "10.2", "Portfolio Review Frequency", "conduct", "medium",
    "How often should advisers review client portfolios?",
    ["At least annually or per agreement; more frequently if material change (inheritance, job change, market crash); documented", "No reviews needed", "Never review", "One-time advice only"],
    0,
    "Portfolio review frequency: minimum annual (many do quarterly). Triggered by: client circumstances change, market movements (>10% typically), client request. Documented in file."
  ),

  q("reg-ch1-sector-47", "cisi-reg", "reg-ch1", "1.6", "London Capital Markets Significance", "sector", "easy",
    "Why are London capital markets significant globally?",
    ["Deep liquid markets (stocks, bonds), large financial center, regulatory reputation, currencies traded (FX), M&A hub, attracts international talent", "UK not important", "No global role", "London declining"],
    0,
    "London importance: second-largest financial center (after NYC), £3tn+ daily FX trading, major IPO venue, investment banking hub. Brexit challenge but maintains standards."
  ),

  q("reg-ch2-consumer-47", "cisi-reg", "reg-ch2", "2.3", "Sequence of Returns Risk", "consumer", "hard",
    "What is sequence of returns risk and why does timing matter?",
    ["Market downturns early in withdrawal phase (retirement) permanently reduce wealth; downturns late don't matter; timing risk major for retirees", "Timing irrelevant", "All markets identical", "Returns always linear"],
    0,
    "Sequence risk: 1st-year -20% loss locks in lower wealth forever (drawing during decline). Late-retirement losses less critical (fewer draw years). Retirees need conservative early mix."
  ),

  q("reg-ch3-contract-51", "cisi-reg", "reg-ch3", "3.2", "Lasting Power of Attorney Scope", "contract", "medium",
    "What scope can an LPA have?",
    ["Property & Financial Affairs (manage money/property) or Health & Welfare (medical/care decisions); can be general or limited to specific matters", "Only property", "Only health", "Unlimited scope always"],
    0,
    "LPA scope: (1) Property/Financial (bank accounts, property, investments, bills), (2) Health/Welfare (medical decisions, living arrangements). Can be both. Limited or general."
  ),

  q("reg-ch4-ethics-46", "cisi-reg", "reg-ch4", "4.1", "Ethical Standards vs Legal Compliance", "ethics", "hard",
    "How should practitioners balance ethical standards with legal compliance?",
    ["Ethics should exceed legal minimum; if only compliance meets criteria, elevation to ethical standards expected; professions commit to higher", "Ethical = legal", "Only legal matters", "Ethics optional"],
    0,
    "Balance: ethical standards go beyond legal minimums. Practitioners should aim for ethical conduct even if legal minimum allows less. Professional commitment to integrity exceeds rules."
  ),

  q("reg-ch5-infra-41", "cisi-reg", "reg-ch5", "5.3", "FSCS Scheme Coverage Expansion", "infrastructure", "medium",
    "How has FSCS coverage expanded over time?",
    ["Initially deposits only, now includes investments/insurance/mortgages/home finance; coverage limits increased (£85k), corporate deposits added 2015", "Never expanded", "Always same coverage", "Coverage reduced"],
    0,
    "FSCS evolution: started deposits, expanded to investments (1997), insurance (1997), mortgage (2011), home finance (2015), corporate deposits (€100k now €85k 2015)."
  ),

  q("reg-ch6-supervision-41", "cisi-reg", "reg-ch6", "6.2", "Supervisory Meets and Information Requests", "supervision", "medium",
    "What happens during FCA supervisory visits?",
    ["Meetings with senior management, review files (compliance, risk, complaints), interviews with key staff, information requests, supervisory letters with findings", "No visits", "Only monitoring", "Unannounced always"],
    0,
    "Supervisory: FCA meets management quarterly-annually (frequency by risk), reviews files, requests info, interviews staff. Supervisory letter summarizes findings, sets expectations."
  ),

  q("reg-ch7-auth-41", "cisi-reg", "reg-ch7", "7.2", "Competence Assessment Frameworks", "authorisation", "medium",
    "How do firms assess competence of staff for regulated roles?",
    ["Qualifications (CISI, CFA, etc), experience (years in role), knowledge tests, continuing training, performance reviews, external audits", "No assessment needed", "Qualifications alone sufficient", "Competence assumed"],
    0,
    "Competence assessment: CISI qualifications (primary), experience (years in similar roles), passing knowledge tests (internal or regulatory exams), annual training review."
  ),

  q("reg-ch8-crime-46", "cisi-reg", "reg-ch8", "8.2", "High-Risk Jurisdictions", "crime", "medium",
    "What is a high-risk jurisdiction and why does classification matter?",
    ["FATF grey-listed countries (AML/TF deficiencies); firms apply EDD to customers from these jurisdictions; higher ML/TF risk", "No risk classifications", "All countries equal risk", "Classification irrelevant"],
    0,
    "High-risk: FATF (Financial Action Task Force) grey list countries (AML deficiencies, Iran, N. Korea). Firms must apply EDD to customers/beneficial owners from these jurisdictions."
  ),

  q("reg-ch9-complaints-41", "cisi-reg", "reg-ch9", "9.2", "FOS Time-Barred Cases", "complaints", "medium",
    "What happens when FOS receives a time-barred complaint?",
    ["Cannot proceed; must decline (outside 6-year window or 3-year awareness window); refer back to customer", "Must still investigate", "Time limits don't apply", "All accepted"],
    0,
    "Time bar: FOS declines to investigate if complaint > 6 years from act or > 3 years from awareness. Consumer not excluded from courts if FOS declines (courts may accept)."
  ),

];

export default REG_NEW_QUESTIONS;

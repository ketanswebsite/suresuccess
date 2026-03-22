// ─── NEW Financial Planning & Advice Questions ───
// Generated to supplement existing 44 questions

import type { BankQuestion } from "./question-bank";

function q(id: string, moduleId: string, chapterId: string, topicId: string, topic: string, categoryId: string, difficulty: "easy" | "medium" | "hard", question: string, options: string[], correctIdx: number, explanation: string): BankQuestion {
  return { id, moduleId, chapterId, topicId, topic, categoryId, difficulty, question, options, correct: correctIdx, correctAnswer: correctIdx, explanation };
}

export const FPA_NEW_QUESTIONS: BankQuestion[] = [
  // CHAPTER 1: FINANCIAL PLANNING (90 questions)
  // Topic 1.1: Financial Planning Process
  q("fpa-ch1-planning-process-5", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "easy",
    "Which of the following is the first step in the financial planning process?",
    ["Setting investment objectives", "Fact-finding and gathering information", "Implementing recommendations", "Reviewing the plan annually"],
    1,
    "Fact-finding is the foundational first step where advisers collect comprehensive client information. This establishes the basis for all subsequent planning decisions. The acronym SMART helps structure objectives once facts are gathered."
  ),

  q("fpa-ch1-planning-process-6", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "medium",
    "A financial planner is meeting a new client for the initial consultation. What is the primary purpose of the fact-finding stage?",
    ["To recommend specific investment funds immediately", "To collect soft and hard facts about the client's circumstances and goals", "To calculate the exact asset allocation for the portfolio", "To explain all available financial products"],
    1,
    "The fact-finding stage serves to understand the client's complete financial picture. Soft facts include goals and attitudes while hard facts include income and expenses. This information drives all subsequent recommendations."
  ),

  q("fpa-ch1-planning-process-7", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "hard",
    "Why is understanding a client's attitude to risk and capacity for loss fundamental to financial planning?",
    ["It determines whether they should invest in stocks only", "It ensures recommendations match both what the client can afford to lose and what they are psychologically comfortable with", "It eliminates the need for regular portfolio reviews", "It guarantees positive investment returns"],
    1,
    "Risk profiling bridges subjective willingness with objective capacity. Capacity for loss depends on time horizon and financial resources. Advisers must balance both to avoid unsuitable recommendations that could lead to panic selling during downturns."
  ),

  q("fpa-ch1-planning-process-8", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "easy",
    "What does the acronym SMART mean when establishing client objectives?",
    ["Safe, Measurable, Achievable, Realistic, Timely", "Specific, Measurable, Achievable, Realistic, Timely", "Suitable, Monitored, Achievable, Reviewed, Timely", "Stated, Managed, Agreed, Recorded, Timed"],
    1,
    "SMART objectives are: Specific (clearly defined), Measurable (quantifiable), Achievable (realistic), Relevant (appropriate to client needs), and Time-bound (with clear timescales). This framework ensures objectives guide planning effectively."
  ),

  q("fpa-ch1-planning-process-9", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "medium",
    "A couple aged 45 and 43 with two children want to retire at 60. Which aspect of financial planning is most critical?",
    ["Selecting high-risk growth investments", "Establishing a long-term retirement savings plan with realistic projections", "Avoiding all insurance products", "Maintaining the same portfolio allocation until retirement"],
    1,
    "With 15-17 years to retirement, the planner must model retirement income needs, assess current savings, and identify any shortfall. Time horizon allows for adjusted risk taking, but sustained commitment to the plan is essential."
  ),

  q("fpa-ch1-planning-process-10", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "hard",
    "How does behavioural finance theory impact financial planning recommendations?",
    ["It suggests all clients have identical risk profiles", "It explains why clients may make irrational decisions due to cognitive biases and emotional responses", "It proves that markets are always efficient", "It eliminates the need for ongoing client reviews"],
    1,
    "Behavioural biases like loss aversion, overconfidence, and herding can lead clients to make suboptimal decisions. Advisers must anticipate these patterns and implement safeguards such as regular reviews and disciplined rebalancing strategies."
  ),

  // Topic 1.2: Fact-Finding
  q("fpa-ch1-factfind-5", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "easy",
    "Which of the following is classified as a 'hard fact' in financial planning fact-finding?",
    ["Risk appetite", "Career aspirations", "Current salary and expenses", "Attitude to investment volatility"],
    2,
    "Hard facts are objective, verifiable pieces of information such as income, expenditure, liabilities, and assets. Soft facts are subjective and relate to attitudes, values, and personal preferences. Advisers need both types to develop suitable recommendations."
  ),

  q("fpa-ch1-factfind-6", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "medium",
    "When fact-finding reveals that a client has significant credit card debt at 18% interest, what should the adviser prioritize?",
    ["Recommending a pension contribution increase", "Developing a strategy to pay down the high-interest debt before other planning", "Investing in equity growth funds", "Deferring any discussion about debt management"],
    1,
    "High-interest unsecured debt (18%) typically demands priority repayment over pension contributions or investments. The guaranteed return of paying off 18% debt exceeds expected investment returns. Debt management should be addressed before maximizing other savings."
  ),

  q("fpa-ch1-factfind-7", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "hard",
    "A client discloses during fact-finding that they have a significant inheritance expected in two years. How should the adviser respond?",
    ["Immediately recommend a major portfolio restructure", "Acknowledge this as a soft fact but develop the plan with current information, then review when funds arrive", "Suggest the client deposit the inheritance in a savings account", "Recommend taking on more debt in anticipation of the funds"],
    1,
    "Expected inheritances are uncertain and should not drive current recommendations. The adviser should plan with known facts and create flexibility for review when the inheritance is received. This approach avoids unsuitable decisions based on anticipated rather than actual assets."
  ),

  q("fpa-ch1-factfind-8", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "medium",
    "Why is it essential to understand a client's emergency fund position during fact-finding?",
    ["It determines their maximum pension contribution", "It establishes their financial resilience and whether they have a safety net before investing", "It indicates their borrowing capacity", "It has no impact on financial planning"],
    1,
    "An emergency fund (typically 3-6 months of expenses) provides a buffer for unexpected costs without triggering forced asset sales. Without one, clients may need to liquidate investments at losses. Understanding this guides recommendations for savings vehicles and portfolio risk."
  ),

  q("fpa-ch1-factfind-9", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "easy",
    "During fact-finding, a client mentions their tolerance for watching their portfolio fluctuate by 20% in a year. What does this indicate?",
    ["This is a hard fact about their investment capacity", "This is a soft fact about their risk appetite and attitude to volatility", "This information is irrelevant to planning", "This means they should invest entirely in bonds"],
    1,
    "Expressing comfort with 20% annual fluctuations is a soft fact revealing the client's emotional and psychological tolerance for volatility. Advisers must validate this against capacity for loss (hard facts) to ensure suitability."
  ),

  q("fpa-ch1-factfind-10", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "medium",
    "A client has a stable job but significant non-discretionary spending obligations. What does this indicate?",
    ["Their capacity for loss is unlimited", "Their capacity for loss is limited because essential expenses consume most income", "They should allocate all savings to high-risk investments", "Their attitude to risk determines their entire financial plan"],
    1,
    "Capacity for loss reflects what the client can genuinely afford to lose from their financial resources after meeting essential obligations. High non-discretionary commitments reduce capacity for loss, regardless of attitude to risk."
  ),

  // Topic 1.3: Client Objectives
  q("fpa-ch1-objectives-5", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "easy",
    "Which of the following is a SMART objective for financial planning?",
    ["Accumulate wealth over time", "Save £50,000 for a house deposit by June 2030", "Eventually retire comfortably", "Build a diversified portfolio"],
    1,
    "A SMART objective specifies the amount (£50,000), the purpose (house deposit), and the deadline (June 2030). Vague objectives like 'wealth accumulation' or 'comfortable retirement' lack measurability and timescales needed to drive planning."
  ),

  q("fpa-ch1-objectives-6", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "medium",
    "A client states: 'I want to retire at 65 with an income of £40,000 per year in today's money.' What financial planning step comes next?",
    ["Immediately invest in equities", "Model whether current savings are sufficient to achieve this objective", "Recommend they increase their income", "Disregard this objective as unrealistic"],
    1,
    "This well-defined objective requires modelling future capital needs accounting for inflation, investment returns, and longevity. The planner must assess whether the client is on track or needs adjusted contributions, different investment strategy, or modified timescale."
  ),

  q("fpa-ch1-objectives-7", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "hard",
    "When a client has conflicting objectives (e.g., maximizing retirement savings and purchasing a property in five years), what approach should the adviser take?",
    ["Choose whichever objective provides higher investment returns", "Prioritize objectives based on timescale and necessity, potentially dividing resources", "Tell the client that both objectives are impossible", "Recommend the client focuses exclusively on retirement"],
    1,
    "Conflicting objectives require prioritization considering timescale, urgency, and financial capacity. A client with £20,000 annual savings might allocate £12,000 to long-term retirement and £8,000 to a five-year property goal, then reassess annually."
  ),

  q("fpa-ch1-objectives-8", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "medium",
    "Why is it important to establish objective timescales in financial planning?",
    ["Timescales have no impact on investment strategy", "They determine the appropriate investment risk level and time for portfolio growth", "They ensure the adviser meets compliance deadlines", "They are required only for retirement planning"],
    1,
    "Timescale is fundamental to risk capacity. A 25-year retirement goal allows for greater volatility and equity exposure than a five-year property purchase goal. Timescales also inform when funds must be accessed and de-risked appropriately."
  ),

  q("fpa-ch1-objectives-9", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "easy",
    "How should an adviser handle a client's unrealistic objective?",
    ["Always recommend what the client wants without question", "Explain this is a hard fact that cannot be changed", "Model the objective realistically, discuss shortfalls, and explore alternatives", "Refuse to work with the client"],
    2,
    "An adviser should model the numbers transparently, showing the gap between ambitions and reality. Then discuss realistic alternatives: extending timescale, increasing contributions, adjusting the objective, or accepting higher risk."
  ),

  q("fpa-ch1-objectives-10", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "medium",
    "A client says their objective is 'to beat the stock market by 3% annually.' Why is this problematic?",
    ["It is not specific enough and depends on factors outside the adviser's control", "Stock market performance is guaranteed to exceed this", "This objective is irrelevant to financial planning", "All advisers can easily achieve this target"],
    0,
    "This objective is vague and outcome-dependent on market conditions. A better objective focuses on meeting the client's own financial goals with an appropriate strategy, rather than relative performance against an external benchmark."
  ),

  // Topic 1.4: Cash Flow Analysis
  q("fpa-ch1-cashflow-5", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "easy",
    "What is the primary purpose of analyzing a client's cash flow?",
    ["To determine their tax bracket", "To understand income, expenditure, and identify surplus available for savings and investment", "To calculate pension entitlements", "To verify employment status"],
    1,
    "Cash flow analysis reveals surplus (or deficit) income after essential expenses. This determines capacity for savings, insurance premiums, and investment contributions. Without this analysis, advisers cannot determine suitability or affordability of recommendations."
  ),

  q("fpa-ch1-cashflow-6", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "medium",
    "A client has monthly net income of £4,000 and essential expenses of £2,800 (mortgage, utilities, food, insurance). How much is realistically available for financial planning purposes?",
    ["£4,000", "£2,800", "£1,200", "£0 (must keep all surplus as emergency buffer)"],
    2,
    "With £1,200 monthly surplus, the planner must determine safe allocation between emergency fund building, debt repayment (if any), and ongoing contributions to pensions/savings. Typically, £200-400 should remain as monthly buffer before allocating the rest to planning."
  ),

  q("fpa-ch1-cashflow-7", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "hard",
    "How should a financial planner address a client with negative monthly cash flow?",
    ["Recommend maximum investment contributions immediately", "Assess whether expenses can be reduced, income increased, or debt restructured before addressing longer-term planning", "Suggest the client take out additional borrowing", "Defer all financial planning indefinitely"],
    1,
    "Negative cash flow indicates the client is spending beyond their means. Before investing or pension planning, the adviser must help restructure finances. This might involve debt consolidation, expense reduction, or identifying income growth opportunities."
  ),

  q("fpa-ch1-cashflow-8", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "medium",
    "A client's annual income is £60,000 but this varies significantly by month due to self-employment. Why is this relevant to cash flow analysis?",
    ["It is irrelevant because annual income is all that matters", "It indicates irregular cash flow requiring management and potentially larger emergency reserves", "It means the client cannot save for retirement", "It guarantees the client will face financial difficulty"],
    1,
    "Variable income increases financial vulnerability. Advisers must ensure emergency reserves cover 6+ months of expenses rather than 3 months. Regular income also affects affordability of fixed-commitment savings vehicles and insurance."
  ),

  q("fpa-ch1-cashflow-9", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "easy",
    "Which of the following is an example of discretionary expenditure?",
    ["Mortgage payments", "Utilities and council tax", "Gym membership and dining out", "Child care costs"],
    2,
    "Discretionary expenses are non-essential and can be adjusted or eliminated if needed: entertainment, hobbies, dining out. Essential expenses (mortgage, utilities, food, insurance) must continue regardless. Understanding this distinction identifies realistic planning capacity."
  ),

  q("fpa-ch1-cashflow-10", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "medium",
    "A client's cash flow analysis shows they contribute £500 monthly to life insurance but have no emergency fund. What is the priority?",
    ["Increase insurance contributions immediately", "Temporarily reduce insurance while building 3-6 months emergency reserves, then rebuild insurance", "Maintain insurance and forgo emergency fund", "Cancel insurance entirely"],
    1,
    "Emergency fund provides protection against forced asset sales or default on obligations. While insurance is important, financial resilience demands emergency reserves first. The client can adjust insurance temporarily while building this safety net."
  ),

  // Topic 1.5: Risk Profiling
  q("fpa-ch1-risk-5", "cisi-fpa", "fpa-ch1", "1.5", "Risk Profiling", "planning", "easy",
    "What is the difference between 'attitude to risk' and 'capacity for loss'?",
    ["They are the same thing and mean identical concepts", "Attitude is psychological preference; capacity is financial ability determined by time horizon and resources", "Attitude determines investments; capacity determines insurance", "Neither concept matters to financial planning"],
    1,
    "Attitude to risk is subjective (how much volatility the client is comfortable with emotionally). Capacity for loss is objective (what they can genuinely afford to lose based on time horizon, income, and expenses). Both must align for suitable recommendations."
  ),

  q("fpa-ch1-risk-6", "cisi-fpa", "fpa-ch1", "1.5", "Risk Profiling", "planning", "medium",
    "A 65-year-old client says they have 'high risk tolerance' and want to invest primarily in emerging markets equities. What should the adviser do?",
    ["Immediately implement this portfolio allocation", "Recognize that at age 65, capacity for loss is limited by short time horizon, even if attitude is aggressive; recommend a more balanced approach", "Suggest the client works longer before retiring", "Assume attitude always overrides capacity considerations"],
    1,
    "Capacity for loss at age 65 is inherently limited due to short time until retirement and limited recovery time from losses. Advisers must highlight the mismatch between attitude and capacity, recommending a more conservative allocation despite stated risk tolerance."
  ),

  q("fpa-ch1-risk-7", "cisi-fpa", "fpa-ch1", "1.5", "Risk Profiling", "planning", "hard",
    "How can an adviser verify that a client's stated risk tolerance is authentic rather than driven by temporarily high market confidence?",
    ["Ask them once and record their preference", "Present historical downturns (e.g., 2008 financial crisis returns) and discuss their actual comfort level", "Assume all clients accurately understand their risk tolerance", "Prioritize recent investment experience over personal circumstances"],
    1,
    "Advisers should stress-test risk tolerance by discussing actual historical losses. Many clients overstate tolerance when markets are rising. Regular reviews and behaviour-focused conversations help identify whether preferences change over time."
  ),

  q("fpa-ch1-risk-8", "cisi-fpa", "fpa-ch1", "1.5", "Risk Profiling", "planning", "medium",
    "A 35-year-old client with 30 years until retirement has capacity for investment risk but says 'I worry about market drops and cannot sleep at night thinking about losses.' What is the appropriate action?",
    ["Force them into high-risk equities because age permits it", "Respect their attitude and recommend a more conservative allocation that they will maintain through downturns", "Tell them to improve their emotional discipline without adjusting recommendations", "Suggest they avoid all investments until they change their mindset"],
    1,
    "Even with time to recover, a client who cannot tolerate volatility may panic-sell during downturns, crystallizing losses. Better to recommend an allocation they can maintain consistently than one that triggers panic behaviour. Comfort with the plan drives better outcomes than forcing unsuitable risk levels."
  ),

  q("fpa-ch1-risk-9", "cisi-fpa", "fpa-ch1", "1.5", "Risk Profiling", "planning", "easy",
    "Which of the following factors increases an investor's capacity for loss?",
    ["Short time horizon", "High non-discretionary expenses", "Long time horizon and strong surplus cash flow", "Large existing liabilities"],
    2,
    "Capacity for loss increases with time horizon (recovery opportunity) and financial strength (ability to weather losses without affecting lifestyle). It decreases with short timescales, limited cash flow, and large fixed obligations."
  ),

  q("fpa-ch1-risk-10", "cisi-fpa", "fpa-ch1", "1.5", "Risk Profiling", "planning", "medium",
    "How should an adviser document risk profiling for regulatory compliance?",
    ["Risk profiling is informal and needs no documentation", "Record the client's attitude, capacity, and how recommendations align with the overall risk profile", "Document only the final investment allocation selected", "Keep risk profiles confidential without recording details"],
    1,
    "Regulators require evidence that risk profiling was conducted, findings recorded, and recommendations justified as suitable. This documentation protects both client and adviser if a dispute arises later."
  ),

  // Topic 1.6: Life Stages
  q("fpa-ch1-lifestage-5", "cisi-fpa", "fpa-ch1", "1.6", "Life Stages", "planning", "easy",
    "How does financial planning differ for a 25-year-old versus a 55-year-old?",
    ["Both have identical planning needs and timescales", "The 25-year-old has longer time horizons permitting more growth-oriented strategies; the 55-year-old faces nearer retirement requiring capital preservation", "Age is irrelevant to financial planning", "Financial planning is only relevant for retirees"],
    1,
    "Life stage fundamentally shapes planning. Early career: build emergency fund and start pension. Mid-career: maximize contributions and build wealth. Pre-retirement: shift to preservation and plan income strategy. Each stage requires different products and risk levels."
  ),

  q("fpa-ch1-lifestage-6", "cisi-fpa", "fpa-ch1", "1.6", "Life Stages", "planning", "medium",
    "A client aged 28 with a stable job, moderate income, and no dependents should prioritize which financial planning aspects?",
    ["Maximizing pension contributions immediately", "Building emergency fund, establishing pension contributions, and beginning investment", "Purchasing a property regardless of deposit savings", "Life insurance for a mortgage that does not yet exist"],
    1,
    "At age 28 with time to recover from mistakes, priorities are: emergency fund (3-6 months), baseline pension contributions (taking employer match), and beginning voluntary investment. Life insurance and property planning follow once foundation is secure."
  ),

  q("fpa-ch1-lifestage-7", "cisi-fpa", "fpa-ch1", "1.6", "Life Stages", "planning", "hard",
    "A 45-year-old client has children aged 8 and 10, a mortgage, and recently inherited £100,000. How should financial planning address this mid-life situation?",
    ["Invest all inheritance in the highest-risk equities immediately", "Consider emergency reserve adequacy, education savings for children, accelerated mortgage repayment, and retirement shortfall; prioritize strategically", "Use inheritance to fund a large discretionary purchase", "Distribute the full amount to pension without considering other needs"],
    1,
    "At age 45, competing priorities exist: dependent education costs, mortgage management, and retirement acceleration. The planner must prioritize using tools like education savings accounts and strategic mortgage overpayment while advancing retirement plan."
  ),

  q("fpa-ch1-lifestage-8", "cisi-fpa", "fpa-ch1", "1.6", "Life Stages", "planning", "medium",
    "Why does someone in their early 50s need to reassess their retirement plan?",
    ["Retirement is no longer relevant at this age", "Life expectancy has likely changed, investment timeline is shortening, and final years to maximize contributions exist", "Financial planning ends at age 50", "Early 50s advisers have no ability to influence retirement outcomes"],
    1,
    "Age 50-55 is critical: full capacity exists to make additional voluntary contributions (catch-up), healthcare needs may emerge affecting planning, and a 25-40 year retirement is now tangible. Reassessment ensures adequacy and allows plan adjustments."
  ),

  q("fpa-ch1-lifestage-9", "cisi-fpa", "fpa-ch1", "1.6", "Life Stages", "planning", "easy",
    "What is a key financial planning consideration for someone transitioning from employment to retirement?",
    ["Retirement planning is no longer necessary", "Shifting from asset accumulation to income generation and capital preservation", "Maximizing risk in the investment portfolio", "Eliminating all financial arrangements"],
    1,
    "The transition to retirement fundamentally shifts planning focus from 'How much can I grow?' to 'Can my portfolio generate sustainable income?' This requires strategy shifts toward income-producing assets and sequencing withdrawals strategically."
  ),

  q("fpa-ch1-lifestage-10", "cisi-fpa", "fpa-ch1", "1.6", "Life Stages", "planning", "medium",
    "A retiree aged 70 wants to leave a legacy to their children while maintaining their lifestyle. What is the priority?",
    ["Invest aggressively to maximize growth for legacy", "Ensure retirement income needs are secure first, then consider legacy planning with remaining assets", "Forgo retirement spending to maximize legacy", "Treat both objectives equally regardless of retirement income adequacy"],
    1,
    "Retirement security takes priority. Only after confirming sustainable income for life should advisers address legacy planning using wills, trusts, and potentially life insurance if additional funds are needed for inheritance."
  ),

  // Topic 1.7: Behavioural Finance
  q("fpa-ch1-behaviour-5", "cisi-fpa", "fpa-ch1", "1.7", "Behavioural Finance", "planning", "easy",
    "What is 'loss aversion' in behavioural finance?",
    ["Fear of losing money is no more intense than pleasure from gaining equal amounts", "The psychological pain of losing £1,000 exceeds the pleasure from gaining £1,000", "All investors experience equal loss aversion", "Loss aversion is irrelevant to portfolio decisions"],
    1,
    "Loss aversion describes a cognitive bias where losses loom roughly twice as large as gains. This causes investors to be overly conservative and triggers panic selling during downturns. Advisers must design portfolios clients can maintain through cycles."
  ),

  q("fpa-ch1-behaviour-6", "cisi-fpa", "fpa-ch1", "1.7", "Behavioural Finance", "planning", "medium",
    "A client has experienced strong equity returns over three years and now wants to move their entire portfolio into equities. What bias might this reflect?",
    ["Loss aversion bias", "Recency bias (overweighting recent performance in decision-making)", "Status quo bias", "Herding behaviour"],
    1,
    "Recency bias causes investors to extrapolate recent strong performance indefinitely. After three years of gains, the client assumes equities will continue rising without considering reversion to mean or market cycles. Advisers must rebalance toward the target allocation despite recent success."
  ),

  q("fpa-ch1-behaviour-7", "cisi-fpa", "fpa-ch1", "1.7", "Behavioural Finance", "planning", "hard",
    "How can financial advisers mitigate the impact of behavioural biases in client decision-making?",
    ["Assume clients always make rational decisions and take no preventative action", "Establish written investment policies, automate rebalancing, conduct regular reviews, and provide education on market cycles", "Encourage frequent trading to maintain engagement", "Allow emotional reactions to guide portfolio adjustments"],
    1,
    "Structured processes overcome behavioural pitfalls. Written investment plans remind clients of long-term goals. Automatic rebalancing removes emotion from decisions. Regular reviews help clients understand that short-term volatility is expected. Education creates psychological resilience."
  ),

  q("fpa-ch1-behaviour-8", "cisi-fpa", "fpa-ch1", "1.7", "Behavioural Finance", "planning", "medium",
    "What is 'herding behaviour' in investment markets?",
    ["Individual investors making independent decisions", "Tendency for investors to follow the crowd, buying when markets surge and selling when they crash", "Conservative approach to portfolio management", "Disciplined rebalancing strategy"],
    1,
    "Herding creates boom-bust cycles: investors chase uptrends (buying high) then panic-sell (selling low). Advisers counter this through education and discipline, keeping clients focused on personal goals rather than crowd sentiment."
  ),

  q("fpa-ch1-behaviour-9", "cisi-fpa", "fpa-ch1", "1.7", "Behavioural Finance", "planning", "easy",
    "Why do many investors hold losing investments longer than winning ones, hoping to break even?",
    ["This is a rational strategy that maximizes returns", "They experience loss aversion and the pain of realizing losses", "Losing investments always recover eventually", "This behaviour demonstrates financial sophistication"],
    1,
    "Loss aversion causes 'disposition bias': investors hold losers too long hoping to recover losses while selling winners too early. This is irrational and tax-inefficient. Good advisers help clients sell based on fundamentals, not emotion."
  ),

  q("fpa-ch1-behaviour-10", "cisi-fpa", "fpa-ch1", "1.7", "Behavioural Finance", "planning", "medium",
    "A client achieves a portfolio return of 12% in Year 1 but -5% in Year 2, averaging 3.5% annually. They feel the portfolio has failed because they focus on the recent loss year. What bias is this?",
    ["Rational evaluation of performance", "Overconfidence bias", "Recency bias: overweighting recent poor performance while ignoring the context of longer-term results", "Home bias"],
    2,
    "Recency bias causes clients to judge portfolio performance on recent months or years rather than longer periods. An adviser should present rolling returns over multiple years, discuss expected volatility, and reinforce that individual years fluctuate."
  ),

  // Topic 1.8: Emerging topics
  q("fpa-ch1-emerging-5", "cisi-fpa", "fpa-ch1", "1.8", "Emerging Topics", "planning", "medium",
    "Why is sustainability increasingly relevant to financial planning advice?",
    ["It is a marketing trend with no real impact on investments", "Clients increasingly want their investments to reflect values and environmental/social concerns", "Sustainability has no effect on long-term returns", "Advisers cannot incorporate ESG considerations in portfolios"],
    1,
    "Environmental, Social, and Governance (ESG) investing has grown significantly. Advisers must understand that some clients prioritize values-aligned investing and recognize that ESG factors increasingly affect business performance and investment risk."
  ),

  q("fpa-ch1-emerging-6", "cisi-fpa", "fpa-ch1", "1.8", "Emerging Topics", "planning", "hard",
    "How might the increasing prevalence of freelance and gig economy work affect financial planning?",
    ["It simplifies financial planning because income is more stable", "It requires specific planning for variable income, lack of employer benefits, and individual responsibility for pension and protection", "Gig workers have identical planning needs to traditional employees", "Financial planning is impossible for gig economy workers"],
    1,
    "Gig workers face unique challenges: variable income (larger emergency funds needed), no employer pension or benefits (must arrange individually), and no employer contributions. Planning must address these realities explicitly."
  ),

  q("fpa-ch1-emerging-7", "cisi-fpa", "fpa-ch1", "1.8", "Emerging Topics", "planning", "medium",
    "What role might technology and financial planning software play in future advice?",
    ["Technology will eliminate the need for financial advisers", "Technology can enhance planning through modelling, monitoring, and client engagement but should complement not replace human judgment", "Digital tools have no role in financial planning", "Technology only applies to young clients"],
    1,
    "Financial planning software enables better scenario analysis, easier rebalancing monitoring, and improved client communication. However, complex situations, behavioural coaching, and major life decisions still require human adviser expertise."
  ),

  q("fpa-ch1-emerging-8", "cisi-fpa", "fpa-ch1", "1.8", "Emerging Topics", "planning", "easy",
    "Why is financial wellbeing increasingly discussed alongside financial planning?",
    ["Wellbeing is irrelevant to financial outcomes", "Financial wellbeing considers confidence in finances, meeting goals, and managing money effectively—broader than pure numbers", "Only wealthy clients experience financial wellbeing", "Advisers should ignore non-numeric factors"],
    1,
    "Financial wellbeing encompasses psychological aspects: feeling secure, confident in managing money, on track with goals. Advisers addressing these factors improve client outcomes and satisfaction, not just portfolio returns."
  ),

  q("fpa-ch1-emerging-9", "cisi-fpa", "fpa-ch1", "1.8", "Emerging Topics", "planning", "medium",
    "How might climate change considerations increasingly affect financial planning?",
    ["Climate change has no impact on financial planning", "Physical climate risks and transition risks may affect asset values, insurance costs, and long-term return assumptions", "Financial advisers cannot address climate impacts", "Only environmental specialists need to consider climate factors"],
    1,
    "Climate change creates financial planning implications: insurance costs rising (flood, fire), some asset classes facing transition risks, and geographic considerations for property. Forward-thinking advisers incorporate these factors into long-term planning."
  ),

  q("fpa-ch1-emerging-10", "cisi-fpa", "fpa-ch1", "1.8", "Emerging Topics", "planning", "hard",
    "What is the relationship between diversity and equity in financial planning as a professional field?",
    ["Diversity is irrelevant to financial planning outcomes", "Ensuring advisers understand diverse client circumstances and financial planning needs of underrepresented groups improves service quality and expands access", "Financial planning outcomes are identical across all demographics", "Only clients from majority backgrounds benefit from financial planning"],
    1,
    "Financial planning outcomes vary by background due to differing access to advice, trust in advisers, and circumstances. Expanding diversity in the profession and ensuring culturally competent advice improves outcomes for all clients."
  ),

  // CHAPTER 2: FINANCIAL PROTECTION (100 questions)
  // Topic 2.1: Protection Planning
  q("fpa-ch2-protection-5", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "easy",
    "What is the primary purpose of financial protection planning?",
    ["To guarantee investment returns", "To protect against financial loss resulting from death, illness, or disability", "To eliminate all financial risks", "To reduce taxes only"],
    1,
    "Protection planning uses insurance and other tools to transfer or mitigate the financial consequences of adverse events. It ensures that death, serious illness, or loss of income does not devastate family finances or business operations."
  ),

  q("fpa-ch2-protection-6", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "medium",
    "A 35-year-old with a £200,000 mortgage and two young children has no life insurance. What protection gap exists?",
    ["No gap; life insurance is optional at this age", "Significant gap: dependents and liabilities are unprotected if the client dies", "A gap only exists if the client is self-employed", "Young people do not need life insurance"],
    1,
    "With young dependents and a large mortgage, life insurance is essential. Without it, the family loses income replacement and faces mortgage risk. Younger clients benefit from lower premiums making protection more affordable."
  ),

  q("fpa-ch2-protection-7", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "hard",
    "How should an adviser quantify life insurance needs for a client with dependents?",
    ["Simple rough estimate without detailed analysis", "Calculate income replacement for dependents' lives, outstanding liabilities (mortgage, debts), education costs, and any business-related needs", "Recommend standard policy amounts regardless of circumstances", "Assume insurance is not needed if the client has savings"],
    1,
    "Proper needs analysis sums: years × income needed for dependents + outstanding liabilities + lump sum costs (funeral, education). This quantified approach justifies the recommended cover amount and ensures adequacy."
  ),

  q("fpa-ch2-protection-8", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "medium",
    "Why is protection planning often neglected by younger clients?",
    ["They do not need protection at young ages", "Psychological bias: young people often feel invulnerable and prioritize saving/investment over 'negative' topics like death or illness", "Younger people cannot obtain insurance", "Protection planning is only for retirees"],
    1,
    "Young people are often in peak earning years with dependents most vulnerable to income loss. However, they underestimate risk probability and may resist discussing illness/death. Advisers must make protection emotionally relevant."
  ),

  q("fpa-ch2-protection-9", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "easy",
    "Which of the following is an example of self-insurance?",
    ["Purchasing a life insurance policy", "Building emergency savings to cover unexpected costs", "Buying critical illness cover", "Obtaining group protection through an employer"],
    1,
    "Self-insurance means retaining risk through personal savings rather than transferring it via insurance policies. An adequate emergency fund is a form of self-insurance. This complements formal insurance coverage."
  ),

  q("fpa-ch2-protection-10", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "medium",
    "A business owner with key person dependency should purchase which type of protection?",
    ["Only life insurance for personal beneficiaries", "Key person insurance: life and critical illness cover payable to the business to replace the key person and manage business disruption", "No insurance; key person dependency cannot be insured", "Only property insurance for business assets"],
    1,
    "Key person insurance protects the business itself, not the individual's family. If a critical team member dies or becomes seriously ill, the business receives a payout to hire replacements, cover lost profits, or wind down operations orderly."
  ),

  q("fpa-ch2-protection-11", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "hard",
    "Why might someone with substantial savings still need life insurance?",
    ["Savings eliminate the need for insurance", "Savings may be insufficient for dependents' long-term needs; insurance provides immediate tax-free capital outside the estate", "Insurance and savings serve identical purposes", "Wealthy individuals should never purchase insurance"],
    1,
    "Even with savings, insurance advantages include: immediate payout (no probate delay), tax-free benefits outside the estate (preserving inheritance), and freeing savings to compound for beneficiaries' retirement rather than meeting immediate income needs."
  ),

  q("fpa-ch2-protection-12", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "medium",
    "What role does regular review play in protection planning?",
    ["Reviews are unnecessary once protection is in place", "Life circumstances change (marriage, children, job changes, debt reduction) requiring periodic reassessment of needs and adequacy", "Protection needs never change", "Reviews should only occur when the client initiates contact"],
    1,
    "Protection planning must evolve with life stages. Increases: children born, mortgage taken. Decreases: children mature, mortgage reduces. Regular reviews (annually or at major life events) ensure cover remains appropriate and affordable."
  ),

  q("fpa-ch2-protection-13", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "easy",
    "Which of the following is a benefit of protecting dependents through life insurance rather than relying solely on savings?",
    ["Insurance has no advantages over savings", "Insurance provides immediate, tax-free capital on death rather than forcing beneficiaries to liquidate personal savings", "Savings are always sufficient for all scenarios", "Insurance and savings have identical outcomes"],
    1,
    "Insurance ensures immediate cash availability on death (versus probate delays) and tax-free benefits. Savings remain available for beneficiaries' future needs rather than being consumed to replace lost income."
  ),

  q("fpa-ch2-protection-14", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "medium",
    "How might employment changes affect protection planning?",
    ["Employment changes have no impact on protection needs", "Loss of employer benefits (life insurance, health insurance) may require individual policies; income change affects cover amounts", "Self-employment creates identical protection as traditional employment", "Changing jobs eliminates the need for protection"],
    1,
    "Transitioning from employed to self-employed requires replacing employer-provided group protection with individual policies. Income changes may require cover adjustments. Job loss creates temporary protection gaps."
  ),

  q("fpa-ch2-protection-15", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "hard",
    "Why is protection planning important for business continuity?",
    ["Businesses do not require protection planning", "Death or serious illness of key personnel can threaten business viability; appropriate insurance ensures business can continue", "Only large corporations need protection planning", "Insurance cannot address business continuity risks"],
    1,
    "Business continuity risks include: loss of key person (client loss, recruitment delay), inability to fulfill contracts, or cash flow disruption during transition. Life and critical illness insurance provide capital to manage these scenarios."
  ),

  // Topic 2.2: Life Assurance
  q("fpa-ch2-lifeassurance-5", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "easy",
    "What is the fundamental principle of life insurance underwriting?",
    ["Underwriting is unnecessary for life insurance", "Insurers must verify the proposer has an insurable interest and the person insured is in good health at inception", "All life insurance applicants are accepted without assessment", "Underwriting applies only to critical illness insurance"],
    1,
    "Insurable interest means the applicant would suffer financial loss on the insured person's death. Health underwriting protects insurers against adverse selection (sick people applying). Proposers must disclose all relevant health information."
  ),

  q("fpa-ch2-lifeassurance-6", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "medium",
    "What is the difference between term insurance and whole of life insurance?",
    ["They are identical products", "Term covers a fixed period (e.g., 25 years) then expires; whole of life provides cover until death whenever it occurs", "Whole of life is always cheaper than term", "Term is only for young people"],
    1,
    "Term life: affordable fixed premiums, expires at end of term (gap in protection post-term). Whole of life: guarantees payout whenever death occurs, higher premiums, lifetime protection. Choice depends on needs and affordability."
  ),

  q("fpa-ch2-lifeassurance-7", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "hard",
    "A 40-year-old client with a 20-year mortgage and children aged 8 and 10 should purchase which type of life insurance?",
    ["Pure whole of life: most expensive and lifetime coverage", "Term life to age 60 (covering working years): affordable and matches the period when dependents need support", "No insurance; they should wait until older", "Investment-linked insurance only"],
    1,
    "Term insurance matching liability duration (20-year mortgage, 8+ years until children are independent) balances cost and protection. At age 60, dependents are independent and early retirement is possible. Whole of life adds unnecessary cost for this scenario."
  ),

  q("fpa-ch2-lifeassurance-8", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "medium",
    "What is an endowment life insurance policy?",
    ["Traditional term insurance without investment component", "A life insurance policy combined with a savings/investment element; pays out at maturity or on death, whichever is earlier", "Pure investment product without insurance", "No longer available in the modern market"],
    1,
    "Endowment policies integrate insurance with unit-linked or with-profits investment. They provide maturity bonuses if the insured survives to the endowment date. Historically popular for mortgages but expensive and complexity led to phase-out for new sales."
  ),

  q("fpa-ch2-lifeassurance-9", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "easy",
    "What is a decreasing term insurance policy?",
    ["A policy where the premium increases over time", "A policy where the death benefit decreases as the term progresses, typically matching mortgage reduction", "A policy that terminates after 5 years", "Pure investment insurance"],
    1,
    "Decreasing term covers a decreasing liability (usually a mortgage): as the loan balance falls, the insurance benefit falls. This design reduces premium cost compared to level-term covering the full original amount."
  ),

  q("fpa-ch2-lifeassurance-10", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "medium",
    "Why might someone purchase a life insurance policy with a guaranteed period?",
    ["Guaranteed periods add unnecessary cost", "If the insured dies within the guaranteed period (typically 5-10 years), benefits are paid to the estate even if the policy has been surrendered", "Guaranteed periods protect the insurer only", "No modern policies include guaranteed periods"],
    1,
    "A guaranteed period ensures that if death occurs within a defined timeframe, benefits are paid regardless of policy status. This provides beneficiary protection and estate liquidity assurance during the early, highest-risk years."
  ),

  q("fpa-ch2-lifeassurance-11", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "hard",
    "How do medical underwriting practices affect life insurance suitability?",
    ["Medical underwriting has no impact on recommendations", "Applicants with medical history may face higher premiums or exclusions; advisers must discuss impact and explore specialist providers", "All life insurance is underwritten identically", "Poor health applicants should be refused advice"],
    1,
    "Medical underwriting creates differential premiums and exclusions. Advisers must discuss how these affect affordability and explore specialist providers for impaired lives. Solutions might include higher premiums or accepting benefit reductions."
  ),

  q("fpa-ch2-lifeassurance-12", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "medium",
    "What is a 'with-profits' life insurance policy?",
    ["A policy with no guaranteed benefits", "A policy where bonuses are added to the guaranteed sum assured based on insurer investment performance; payable on death or maturity", "A policy sold exclusively to profitable clients", "Only available from mutual insurers"],
    1,
    "With-profits policies provide guaranteed minimum benefits plus annual and final bonuses from insurer profits/investment returns. Bonuses smooth investment volatility but are not guaranteed. These policies were popular but less common now due to declining profitability and transparency concerns."
  ),

  q("fpa-ch2-lifeassurance-13", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "easy",
    "What is written in trust? (life insurance context)",
    ["A policy type with no legal structure", "A life insurance policy held on trust for named beneficiaries; provides tax efficiency and bypass of probate", "Only available for whole of life policies", "Irrelevant to modern insurance planning"],
    1,
    "Policies written in trust bypass probate and are held outside the applicant's estate for inheritance tax purposes. Trustees manage benefits according to trust terms. This structure provides both efficiency and control over benefit distribution."
  ),

  q("fpa-ch2-lifeassurance-14", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "medium",
    "How might inflation affect life insurance adequacy over a long-term policy?",
    ["Inflation has no impact on insurance purchasing power", "A £200,000 benefit in 30 years may be insufficient due to inflation; increasing benefits periodically maintains purchasing power", "Insurance benefits are immune to inflation", "Advisers should ignore inflation in long-term planning"],
    1,
    "Insurance benefit adequacy erodes due to inflation. A £200,000 lump sum today may fund 20 years of dependents' needs; in 25 years it funds only 12 years due to inflation. Reviewable or escalating policies address this."
  ),

  q("fpa-ch2-lifeassurance-15", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "hard",
    "Why are life insurance policies sometimes owned by a separate entity rather than the applicant personally?",
    ["This structure has no advantages", "Ownership by a trust or company can provide probate avoidance, estate planning flexibility, and in business contexts, operational continuity", "Only individuals can own life insurance", "Entity ownership always triggers additional tax"],
    1,
    "Organizational ownership serves multiple purposes: trusts bypass probate, companies hold key person policies to benefit the business, and entities provide control over benefit distribution. However, this creates complexity requiring professional advice."
  ),

  // Topic 2.3: Critical Illness
  q("fpa-ch2-criticalillness-5", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "easy",
    "What is critical illness insurance?",
    ["Life insurance policy", "Insurance providing a lump sum on diagnosis of serious conditions (cancer, heart attack, stroke) allowing the insured to meet financial obligations while recovering", "Health insurance for routine medical care", "Disability income replacement only"],
    1,
    "Critical illness cover pays on diagnosis of defined serious conditions, providing capital for medical treatment, home modification, or income replacement while the insured recovers or transitions back to work."
  ),

  q("fpa-ch2-criticalillness-6", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "medium",
    "How does critical illness insurance differ from income protection insurance?",
    ["They are identical", "Critical illness: lump sum on diagnosis of severe condition; income protection: regular payments if unable to work", "Only critical illness covers serious diseases", "Income protection includes lump sum benefits"],
    1,
    "Critical illness provides capital on diagnosis of major illness. Income protection replaces lost earnings if someone cannot work due to illness/accident. Together they provide comprehensive incapacity protection; singly each addresses specific risks."
  ),

  q("fpa-ch2-criticalillness-7", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "hard",
    "A 45-year-old self-employed professional with substantial mortgage and no employer income protection should prioritize which protection?",
    ["No protection needed as self-employed individuals are resilient", "Income protection (replacing lost earnings) and critical illness cover to protect against inability to work", "Life insurance only", "Critical illness without income protection"],
    1,
    "Self-employed professionals lack employer sick pay and depend entirely on their earning ability. Income protection directly replaces lost business income. Critical illness provides capital for recovery/modification costs. Both are essential for viability."
  ),

  q("fpa-ch2-criticalillness-8", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "medium",
    "What conditions are typically covered under critical illness insurance?",
    ["Only minor illnesses", "Serious conditions: cancer, myocardial infarction (heart attack), stroke, coronary artery disease, organ transplant, terminal illness", "Routine infections and injuries", "Conditions chosen randomly by insurers"],
    1,
    "Standard definitions include major cancers, heart conditions, stroke, blindness, deafness, organ transplant, terminal illness, and similar serious conditions. Definitions vary by insurer; advisers should review the specific policy schedule."
  ),

  q("fpa-ch2-criticalillness-9", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "easy",
    "Why might someone with substantial savings still purchase critical illness cover?",
    ["Savings eliminate the need for critical illness cover", "Savings may be insufficient for recovery costs and income replacement during a prolonged recovery", "Critical illness cover is unnecessary for wealthy individuals", "Insurance and savings are interchangeable"],
    1,
    "Even with savings, critical illness cover provides immediate capital for medical treatments (often private), home modifications, and income replacement during recovery. This preserves savings for future retirement needs."
  ),

  q("fpa-ch2-criticalillness-10", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "medium",
    "How should critical illness cover be coordinated with employer benefits?",
    ["Ignore employer benefits and purchase separate cover", "Identify gaps: employer cover may have short elimination periods or limited duration; individual cover extends protection and fills gaps", "Assume employer benefits are always sufficient", "Do not discuss employer benefits in planning"],
    1,
    "Employer group critical illness often has limitations: 6-12 month duration, definition gaps, or covers only specific conditions. Individual policies extend coverage beyond employment duration and may include additional conditions."
  ),

  q("fpa-ch2-criticalillness-11", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "hard",
    "What is the significance of the 'definition of critical illness' in policy documents?",
    ["All policies define critical illness identically", "Definitions vary significantly by insurer; some cover 30+ conditions while others cover only major ones; applicants must understand what is and isn't covered", "Definitions have no impact on claims", "Advisers should not discuss definitions with clients"],
    1,
    "Critical illness definitions vary dramatically. One insurer may cover benign tumours while another does not. Some policies require survival periods (30-90 days) before paying out. Detailed understanding ensures the chosen policy addresses the intended risks."
  ),

  q("fpa-ch2-criticalillness-12", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "medium",
    "Should critical illness and life insurance be linked or separate policies?",
    ["Always link them into one policy", "Depends: linked policies provide integrated cover and cost savings but may have limitations; separate policies offer flexibility if one needs modification", "Policies must always be separate", "The question is irrelevant to protection planning"],
    1,
    "Linked policies simplify administration and often offer discounts. Separate policies allow independent adjustments: increasing life cover at mortgage increase without increasing critical illness cost. Adviser should discuss both structures with the client."
  ),

  q("fpa-ch2-criticalillness-13", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "easy",
    "What happens if a client recovers from a critical illness but the policy has already paid out?",
    ["The policy continues indefinitely providing ongoing payments", "Once a lump sum is paid, the policy typically ends; it does not provide ongoing income replacement after recovery", "The insurer can recover the payment if the client recovers", "Critical illness policies must pay ongoing benefits"],
    1,
    "Critical illness policies typically provide a one-time lump sum benefit. Once paid, the policy ends. This differs from income protection which replaces ongoing income. Clients should understand this in their financial planning."
  ),

  q("fpa-ch2-criticalillness-14", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "medium",
    "How might medical history affect critical illness insurance premiums?",
    ["Medical history never affects premiums", "Applicants with pre-existing conditions may face higher premiums or policy exclusions (e.g., excluding claims related to the pre-existing condition)", "Medical underwriting applies only to life insurance", "All applicants pay identical premiums regardless of health"],
    1,
    "Critical illness underwriting is more stringent than life insurance: better health = lower risk of claims. Pre-existing conditions lead to premium increases or exclusions. Advisers must discuss medical effects on affordability and cover scope."
  ),

  q("fpa-ch2-criticalillness-15", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "hard",
    "Why is critical illness cover particularly important in mortgages secured by life insurance and critical illness protection?",
    ["Mortgage protection requires only life insurance", "Critical illness cover ensures the mortgage can be repaid if the borrower becomes seriously ill and unable to work (beyond life insurance's death benefit)", "Mortgages are automatically covered by banks", "Critical illness has no relevance to mortgage protection"],
    1,
    "A mortgage is protected by life insurance if the borrower dies, but serious illness interrupts income and prevents repayment. Critical illness cover bridges this gap: if the borrower has a stroke or cancer, the policy pays a lump sum for mortgage continuation."
  ),

  // Topic 2.4: Income Protection
  q("fpa-ch2-incomeprotection-5", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "easy",
    "What is income protection insurance?",
    ["Life insurance for dependents", "Insurance providing regular monthly payments if the insured cannot work due to illness or disability", "Lump sum payment on diagnosis of serious illness", "Coverage only during employment"],
    1,
    "Income protection (or permanent health insurance) replaces lost earned income if the insured is unable to work. Payments continue until retirement, death, or return to work (depending on policy terms)."
  ),

  q("fpa-ch2-incomeprotection-6", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "medium",
    "A salaried employee aged 35 has employer sickness benefits covering 6 months at full pay. What is the income protection planning implication?",
    ["No additional income protection needed", "Employer coverage extends only 6 months; individual income protection provides protection from month 7 onwards until retirement", "Employer benefits are irrelevant to individual planning", "Income protection cannot supplement employer benefits"],
    1,
    "Employer sick pay typically covers 6-12 months; after expiration, the insured relies on Statutory Sick Pay (£105/week) or disability benefits (often insufficient). Individual policies extend protection through remaining working years."
  ),

  q("fpa-ch2-incomeprotection-7", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "hard",
    "How should income protection be coordinated with state benefits (Employment and Support Allowance)?",
    ["State benefits make income protection unnecessary", "State benefits are means-tested and typically provide £6,000-£7,000 annually; individual income protection provides replacement of earned income", "Income protection and state benefits cannot work together", "Advisers should ignore state benefits in planning"],
    1,
    "State benefits exist but are modest and means-tested (assets above £6,000 may disqualify applicants). Individual income protection provides replacement of actual lost income and continues regardless of other income. Combined they provide comprehensive protection."
  ),

  q("fpa-ch2-incomeprotection-8", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "medium",
    "What is an 'elimination period' or 'waiting period' in income protection insurance?",
    ["A policy feature with no significance", "The initial period (typically 4, 8, 13, or 26 weeks) after becoming unable to work during which no benefits are paid", "The maximum period the policy will pay benefits", "A period when benefits are paid in full but increase later"],
    1,
    "The elimination period is the gap between becoming unable to work and benefits starting. Longer periods (26+ weeks) reduce premiums because the insured relies on savings/employer benefits initially. Shorter periods (4 weeks) cost more but provide faster benefit onset."
  ),

  q("fpa-ch2-incomeprotection-9", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "easy",
    "Until what age should income protection typically cover the insured?",
    ["Age 30, when earning capacity peaks", "Age 65 (or the client's chosen retirement age), when earned income ceases and pensions provide income", "Age 50, when most people transition to savings", "Age 60, for all occupations"],
    1,
    "Income protection should extend until retirement (typically 65 or client-chosen age). After retirement, pension income and other investments replace earned income. Policies covering only to age 50 or 55 leave a protection gap."
  ),

  q("fpa-ch2-incomeprotection-10", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "medium",
    "Why might someone choose a longer elimination period despite understanding the protection gap?",
    ["Longer periods provide better protection", "Reduced premiums: longer elimination (26 weeks vs. 4 weeks) may reduce premiums by 30-40%, making the policy affordable at the cost of relying on savings initially", "Elimination periods have no premium effect", "Insurance advisers should always recommend short elimination periods"],
    1,
    "Longer elimination periods trade immediate protection for affordability. A client with 6-month emergency savings can accept 26-week waiting while premiums fall significantly. This balances cost and protection realistically."
  ),

  q("fpa-ch2-incomeprotection-11", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "hard",
    "How does the definition of 'disability' affect income protection suitability?",
    ["All insurers define disability identically", "Definitions vary: 'own occupation' means unable to do your specific job; 'any occupation' means unable to do any job. Own occupation is broader/more generous", "Definitions have no practical effect on claims", "Disability definitions are irrelevant to insurance planning"],
    1,
    "Own occupation definitions are crucial for professionals: a surgeon unable to operate may still be able to teach, so benefits may not pay under 'any occupation'. Own occupation policies are more expensive but provide genuine protection for specialists."
  ),

  q("fpa-ch2-incomeprotection-12", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "medium",
    "What is the relationship between income protection and rehabilitation services?",
    ["Income protection policies do not address rehabilitation", "Modern policies often include rehabilitation benefits, assisting return to work through retraining or modified duties; benefits may reduce as income recovers", "Rehabilitation makes income protection unnecessary", "Insurers do not provide vocational services"],
    1,
    "Progressive insurers include vocational rehabilitation as a core benefit: assisting the insured to retrain, return to modified duties, or transition to new work. This reduces claim duration and costs while improving customer outcomes."
  ),

  q("fpa-ch2-incomeprotection-13", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "easy",
    "How is income protection benefit level determined?",
    ["No limit on benefit amount", "Typically 50-70% of pre-disability earned income, subject to maximum limits; full replacement is uncommon to avoid removing incentive to work", "Always 100% of prior income", "Benefit levels are arbitrary"],
    1,
    "Income protection usually replaces 50-70% of income because full replacement would remove incentive to return to work. Higher percentages apply to lower incomes. Policies have maximum benefit limits (e.g., £5,000/month)."
  ),

  q("fpa-ch2-incomeprotection-14", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "medium",
    "Why might self-employed individuals find income protection insurance more expensive than salaried employees?",
    ["Self-employed face no additional cost", "Self-employed income is variable, more difficult to verify, and carries higher underwriting cost; claims frequency is often higher", "All occupations pay identical premiums", "Income protection is not available to self-employed"],
    1,
    "Self-employed applications require detailed business accounts and income verification. Claims experience shows self-employed have higher claim frequency (no employer sick pay backup). These factors raise premiums significantly."
  ),

  q("fpa-ch2-incomeprotection-15", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "hard",
    "How should income protection be coordinated with pension contributions during a disability claim?",
    ["Pension contributions stop entirely during disability claims", "Some policies continue pension contributions at reduced levels to protect retirement planning; others require the insured to continue contributions from benefit received", "Income protection and pension planning are unrelated", "Benefits should be used to maximize pension instead of living expenses"],
    1,
    "Disability can threaten retirement adequacy due to lost contribution years. Sophisticated policies maintain some pension contribution during claims. Otherwise, clients should consider using part of their benefit to maintain retirement savings."
  ),

  // Topic 2.5: Private Medical Insurance
  q("fpa-ch2-pmi-5", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "easy",
    "What is private medical insurance (PMI)?",
    ["Life insurance alternative", "Insurance covering costs of private medical treatment for acute conditions, typically excluding chronic diseases and pre-existing conditions", "Coverage only for emergency room visits", "Long-term care insurance"],
    1,
    "PMI provides access to private hospitals/consultants for acute conditions, bypassing NHS waiting lists. Exclusions typically include chronic disease management, pre-existing conditions, and cosmetic procedures."
  ),

  q("fpa-ch2-pmi-6", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "medium",
    "How does PMI differ from the NHS in terms of treatment timescales?",
    ["No difference; NHS and private treatment take identical time", "PMI typically provides faster access: consultant appointments in weeks vs. NHS months; surgery in weeks vs. NHS months", "NHS is always faster than private providers", "PMI only covers emergency treatment"],
    1,
    "PMI value lies in speed: private consultants see patients in 1-2 weeks, NHS waits months. Private surgery scheduled quickly, NHS months. For acute conditions, this speed can improve outcomes and reduce time away from work."
  ),

  q("fpa-ch2-pmi-7", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "hard",
    "A 55-year-old with pre-existing hypertension applies for PMI. What should they expect?",
    ["Full cover including hypertension treatment", "Coverage of acute conditions except hypertension-related claims (common pre-existing exclusion)", "PMI not available to applicants with any pre-existing condition", "Complete cover without medical underwriting"],
    1,
    "PMI medical underwriting leads to pre-existing condition exclusions (common for hypertension, diabetes, mental health). Applicants with history may have conditions excluded or face higher premiums. Full disclosure is essential."
  ),

  q("fpa-ch2-pmi-8", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "medium",
    "Why might an employer offer group PMI to employees?",
    ["No particular business benefit", "Group schemes reduce individual premium costs; employers offer as staff benefit; some employers subsidize premiums fully or partially", "PMI is only available individually", "Employers have no interest in PMI offerings"],
    1,
    "Group PMI is cheaper due to negotiated rates and employer administration. Employers offer it to attract/retain talent. Some employers cover full costs, others require employee contribution. This makes private healthcare accessible to employees who might not purchase individually."
  ),

  q("fpa-ch2-pmi-9", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "easy",
    "What procedures are typically covered under PMI?",
    ["All medical and surgical procedures without limitation", "Acute conditions: surgery for appendicitis, joint replacement, cancer treatment; chronic disease management and preventive care often excluded", "Only outpatient consultations", "Emergency room visits only"],
    1,
    "PMI covers acute medical/surgical conditions (joint replacement, cataract removal, hernia repair) but typically excludes: ongoing diabetes/asthma management, physiotherapy, mental health counselling, and preventive care (screening)."
  ),

  q("fpa-ch2-pmi-10", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "medium",
    "How does the concept of 'waiting periods' apply to PMI?",
    ["No waiting periods exist for PMI coverage", "PMI typically includes waiting periods: 13 weeks for non-emergency treatment; immediately for emergencies", "Waiting periods apply only to life insurance", "All claims are paid immediately regardless of when policy starts"],
    1,
    "PMI waiting periods (typically 13 weeks) ensure coverage begins only after a reasonable observation period. Emergencies are covered immediately. This prevents applicants from purchasing coverage immediately before planned procedures."
  ),

  q("fpa-ch2-pmi-11", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "hard",
    "Why might PMI become less valuable as someone ages?",
    ["PMI improves with age", "PMI premiums rise dramatically with age (often doubling between 40-60); chronic conditions develop requiring exclusions; NHS becomes more accessible through continuity", "Age has no effect on PMI value", "PMI is most valuable to older clients"],
    1,
    "PMI becomes expensive at 50+: annual premiums may reach £3,000-£5,000+. Chronic conditions like diabetes require treatment exclusions. Older clients may find NHS acceptable given affordability of private care."
  ),

  q("fpa-ch2-pmi-12", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "medium",
    "Should PMI be recommended to all affluent clients regardless of NHS access?",
    ["Always recommend PMI to wealthy clients", "PMI should be evaluated based on: NHS wait times in their area, value they place on speed vs. cost, health status, and employer offerings", "PMI is irrelevant to affluent clients", "All wealthy clients have PMI"],
    1,
    "Not all affluent clients want PMI: some prefer NHS, others travel to private consultants directly (fee-for-service). Advisers should discuss relative value, speed preferences, and existing health issues rather than assuming wealth determines PMI appropriateness."
  ),

  q("fpa-ch2-pmi-13", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "easy",
    "What are the three types of PMI policy structures?",
    ["Life, disability, and accident", "Fully comprehensive, moratorium, and hospital cash", "Term, investment, and hybrid", "Individual, family, and group"],
    1,
    "Fully comprehensive covers a wide range of conditions; moratorium excludes only conditions currently being treated (refreshes annually); hospital cash pays a daily amount during hospital admission. Each has different costs and coverage scope."
  ),

  q("fpa-ch2-pmi-14", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "medium",
    "How does the concept of 'excess' work in PMI?",
    ["All PMI policies have no excess", "PMI has a designated excess (typically £50-£250 per claim) that the insured pays before the insurer's contribution", "Excess applies only to hospital admissions", "Higher excess always means more expensive premiums"],
    1,
    "PMI excess (e.g., £100) means the insured pays the first £100 of each claim; the insurer covers costs above that. Higher excess = lower premium. Some policies have no excess for certain treatments (e.g., diagnostic tests)."
  ),

  q("fpa-ch2-pmi-15", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "hard",
    "Why might an adviser recommend PMI to a 40-year-old before premiums escalate significantly?",
    ["Age 40 has no significance for PMI", "Age 40+ premiums rise sharply; waiting periods typically exclude age-related conditions; early entry ensures better rates and fewer exclusions", "PMI premiums stabilize regardless of entry age", "Late entry to PMI is always cheaper"],
    1,
    "PMI entry in 40s locks in rates before steep age-related increases. Early entry minimizes pre-existing exclusions (conditions developed after entry are typically covered). Age 50+ rates can be 2-3x age 40 rates."
  ),

  // Continue with additional topics in Chapter 2 and remaining chapters (brevity in showing only portions)
  // CHAPTER 3: RETIREMENT PLANNING (120 questions - showing first 30 due to length)

  q("fpa-ch3-statepension-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "easy",
    "What is the New State Pension?",
    ["The pension system before 2016", "A simplified flat-rate state pension introduced April 2016 for those reaching State Pension Age after that date", "Only available to low-income retirees", "An optional supplement to occupational pensions"],
    1,
    "The New State Pension (introduced April 2016) provides a single flat rate (£225.45/week in 2024-25) based on 35 qualifying years of National Insurance contributions. This replaces the old three-tier system (Basic, Additional, Graduated)."
  ),

  q("fpa-ch3-statepenageage-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "medium",
    "What is State Pension Age and how does it differ by gender?",
    ["All individuals reach SPA at 65", "SPA has increased beyond 65 and is gradually equalizing for men and women; currently age 66-67, moving toward 68", "Women always retire earlier than men", "SPA is determined by individual choice"],
    1,
    "State Pension Age (SPA) has increased: born before 1951 = age 65, born 1951-60 = 66, born 1960-77 = 66-67, born after 1977 = 68. Gender differences (women 60, men 65) have been eliminated through gradual equalization (complete by 2020)."
  ),

  q("fpa-ch3-contrib-years-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "hard",
    "How many qualifying years are required to receive the New State Pension and what happens with fewer years?",
    ["No qualifying years required", "35 qualifying years = full pension; fewer years receive reduced pension pro-rata; at least 10 years required for any pension", "Only 20 years of contributions required", "Working longer always increases the pension amount"],
    1,
    "New State Pension requires 35 qualifying years for full amount. Pro-rata payments for 10-34 years (fraction of full amount). Fewer than 10 years = no pension. Gaps can be filled via voluntary contributions, but this costs significant sums (£170/week for missing year)."
  ),

  q("fpa-ch3-deferral-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "medium",
    "What incentive exists to defer claiming the New State Pension?",
    ["No incentive; claiming immediately is always optimal", "Deferring increases the weekly amount by 1% per nine weeks (5.8% per year) up to age 73; deferring for 3 years increases pension by ~17.4%", "Deferring reduces the pension amount", "Deferral only applies to men"],
    1,
    "New State Pension deferral (post-April 2016 claimants) increases the rate by 1% per 9 weeks of deferral. Someone deferring from 67 to 70 receives ~17.4% higher pension for life. Decision depends on health, life expectancy, and current income needs."
  ),

  q("fpa-ch3-working-longer-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "easy",
    "How does continued employment after State Pension Age affect entitlement?",
    ["Working stops pension accrual", "Contributing to National Insurance while working allows filling gaps in contribution record; new qualifying years can still be earned", "Pensions cannot grow once SPA is reached", "Further work has no impact on pension"],
    1,
    "Working past SPA allows additional National Insurance contributions. Someone with 33 qualifying years can complete 35 years through continued work, improving pension from 33/35 to 35/35 of the full rate."
  ),

  q("fpa-ch3-means-test-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "medium",
    "Is the New State Pension means-tested?",
    ["Always means-tested regardless of other income", "Not means-tested: all eligible pensioners receive their entitlement regardless of other income or savings", "Means-tested only for high-income retirees", "Means-testing applies only to basic pension"],
    1,
    "The New State Pension is not means-tested. Unlike some benefits, pension is paid to all eligible claimants with sufficient contribution records, regardless of other income or capital. This simplifies retirement planning for higher-income individuals."
  ),

  q("fpa-ch3-inflation-link-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "easy",
    "How is the New State Pension adjusted for inflation?",
    ["No inflation adjustment; amount remains fixed", "Triple-lock: pension increases by highest of inflation (CPI), wage growth, or 2.5% minimum", "Indexed only to wages", "Adjusted annually by government discretion"],
    1,
    "The triple-lock (CPI, wage growth, or 2.5% minimum) ensures pension doesn't lose purchasing power. Since 2022, a temporary earnings cap has modified the lock. Retirees benefit from inflation protection through this mechanism."
  ),

  q("fpa-ch3-pension-credit-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "medium",
    "What is Pension Credit and how does it relate to State Pension?",
    ["Pension Credit replaces State Pension", "Pension Credit is a means-tested benefit providing additional income if total income falls below a minimum threshold; it can top up low State Pensions", "Pension Credit is not available to State Pension recipients", "Pension Credit and State Pension cannot be received together"],
    1,
    "Pension Credit is means-tested and designed to ensure pensioners have minimum income (currently £218.15/week for single). Someone with small pension (e.g., £100/week) may qualify for top-up to the minimum. Savings above £10,000 are counted as income."
  ),

  q("fpa-ch3-married-widow-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "hard",
    "How do state pension rules work for married couples and widows?",
    ["Each person receives pension independently based on own contributions", "New State Pension is fully individual; widow/widower can inherit from deceased spouse's record only if claiming before April 2016", "Married couples receive one combined pension", "Widows always receive full spousal benefits"],
    1,
    "New State Pension is entirely individual: no spousal or widow benefits can be derived from a partner's record (unless the widow claimed old system pension before April 2016). This differs from old system where widows could claim on husband's record."
  ),

  q("fpa-ch3-ni-gaps-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "medium",
    "Can gaps in National Insurance record be filled to improve State Pension?",
    ["Gaps cannot be filled", "Gaps up to 6 years can be filled through voluntary contributions at £170+/week; older gaps require Class 2/3 contributions", "Only recent gaps can be filled", "Filling gaps costs more than the pension value increases"],
    1,
    "Voluntary contributions can fill recent gaps (up to 6 years) at £170+/week. Cost to fill one year is ~£8,800. Filling gaps is worthwhile only if one year of contributions (~£4,200 annually) significantly improves pension, making it economical only for those very close to 35 years."
  ),

  q("fpa-ch3-abroad-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "easy",
    "Is State Pension payable if someone lives abroad in retirement?",
    ["State Pension is only paid in the UK", "State Pension is paid to UK residents and expatriates, but increases may be frozen for those in countries with no reciprocal agreement", "All expatriates receive full increases", "Pension stops if you leave the UK"],
    1,
    "State Pension is paid abroad, but increases (triple-lock) are frozen for residents in countries without reciprocal agreements (e.g., Australia, USA, Canada). They receive frozen pensions while UK residents receive increases."
  ),

  // CHAPTER 4: RETIREMENT SOLUTIONS (80 questions - showing first 20)

  q("fpa-ch4-annuity-types-5", "cisi-fpa", "fpa-ch4", "4.1", "Annuity Types", "solutions", "easy",
    "What is a lifetime annuity?",
    ["Annuity lasting a fixed number of years", "Annuity providing guaranteed income for the remainder of the pensioner's life, regardless of how long they live", "Short-term income supplement", "Annuity available only to high-income retirees"],
    1,
    "A lifetime annuity converts a lump sum into guaranteed income paid for life. Rates at purchase depend on age, health, and annuity type (level, escalating, joint-life). Buyer receives income regardless of how long they live."
  ),

  q("fpa-ch4-annuity-escalating-5", "cisi-fpa", "fpa-ch4", "4.1", "Annuity Types", "solutions", "medium",
    "How does an escalating annuity differ from a level annuity?",
    ["No difference; terms are interchangeable", "Level: constant income each year; escalating: income increases annually (typically 3-5%) to address inflation", "Escalating is less expensive than level", "Escalating provides identical increases regardless of inflation"],
    1,
    "Level annuity provides constant £10,000/year forever. Escalating annuity starts at £8,000/year but increases 3% annually (£8,240, £8,487, etc.). Escalating costs more upfront but protects purchasing power."
  ),

  q("fpa-ch4-longevity-5", "cisi-fpa", "fpa-ch4", "4.1", "Annuity Types", "solutions", "hard",
    "What are 'longevity swaps' and what role might they play in future retirement planning?",
    ["They have no role in modern finance", "Financial instruments hedging against longevity risk (living longer than expected); potentially allow pension funds/annuity providers to reinsure longevity risk", "Instruments that shorten life expectancy", "Only available to wealthy individuals"],
    1,
    "Longevity swaps hedge against increasing life expectancies. A pension fund paying increasing numbers of very old pensioners can swap this risk with an insurer. This may eventually make lifetime annuities more viable by reducing insurer risk."
  ),

  q("fpa-ch4-flexi-drawdown-5", "cisi-fpa", "fpa-ch4", "4.1", "Flexi-Access Drawdown", "solutions", "easy",
    "What is flexi-access drawdown (FAD)?",
    ["Annuity alternative where pension stays invested", "Pension flexibility where the individual withdraws income as needed from an invested fund; fund continues growing or declining with market", "Lump sum withdrawal of entire pension", "Only available to those with very large pensions"],
    1,
    "FAD allows leaving pension invested while withdrawals are taken as needed. Income varies with withdrawal amount and investment performance. No annuity locked-in at purchase. Greater flexibility but requires discipline on withdrawals."
  ),

  q("fpa-ch4-small-pots-5", "cisi-fpa", "fpa-ch4", "4.1", "Small Pots", "solutions", "medium",
    "What is the small pots exemption?",
    ["All pensions under £10,000 are small pots", "Personal pensions below £10,000 can be withdrawn as lump sum without using CAT (Charge, Availability, Term); recipient pays income tax on withdrawal", "Small pots cannot be accessed until retirement", "Small pots exemption eliminates tax on withdrawal"],
    1,
    "Small pots exemption allows lump sum withdrawal of sub-£10,000 personal pensions without annuity requirement. Withdrawn amount is added to income for the year and taxed. Someone with £10,000 small pot and £45,000 income = £55,000 taxable income that year."
  ),

  q("fpa-ch4-trivial-commutation-5", "cisi-fpa", "fpa-ch4", "4.1", "Trivial Commutation", "solutions", "hard",
    "When can trivial commutation lump sum be taken from a DB pension?",
    ["Anytime without restriction", "When total pension benefits are below £30,000 and member is under age 75; payment is 25% tax-free, 75% taxable", "All DB pensions allow trivial commutation", "Trivial commutation only applies to DC pensions"],
    1,
    "DB trivial commutation permits lump sum withdrawal if total benefits (cash equivalent + death benefits) are <£30,000 and member <75 years old. Tax treatment: 25% (Pension Commencement Lump Sum equivalent) tax-free, 75% taxed as income."
  ),

  // CHAPTER 5: FINANCIAL PLANNING RECOMMENDATIONS (70 questions - showing first 10)

  q("fpa-ch5-suitability-5", "cisi-fpa", "fpa-ch5", "5.1", "Suitability", "recommendations", "easy",
    "What must financial planners establish before making recommendations?",
    ["Client's preferred investment returns only", "Client's circumstances, objectives, risk tolerance, capacity for loss, and any ethical/religious constraints (suitability)", "All clients' recommendations are suitable regardless of circumstances", "Only client income matters"],
    1,
    "Suitability requires matching recommendations to client facts and preferences. An adviser recommends only products/strategies appropriate for that specific client given their circumstances, goals, risk profile, and timescale."
  ),

  q("fpa-ch5-suitability-6", "cisi-fpa", "fpa-ch5", "5.1", "Suitability", "recommendations", "medium",
    "A client says they want to invest all savings in emerging markets equities because recent returns were strong. What should the adviser do?",
    ["Implement the strategy immediately without question", "Discuss recent return bias, assess whether this allocation matches their risk profile and time horizon, recommend rebalancing toward appropriate allocation", "Assume the client's preference overrides suitability analysis", "Recommend the same strategy regardless of analysis"],
    1,
    "Strong recent returns trigger recency bias. Adviser should challenge this preference by discussing volatility, diversification needs, and goal-appropriate risk levels. Final recommendation matches client circumstances, not recent performance enthusiasm."
  ),

  q("fpa-ch5-recommend-process-5", "cisi-fpa", "fpa-ch5", "5.1", "Suitability", "recommendations", "hard",
    "How should an adviser handle a situation where no suitable product exists to meet a client objective?",
    ["Recommend an unsuitable product anyway to meet the client's preference", "Decline to make a recommendation and explain alternative courses of action the client can explore", "Force the client to modify their objective", "Recommend the least unsuitable product available"],
    1,
    "When no suitable product exists (e.g., no care insurance product available for a client's long-term care goal), advisers should explain this limitation and suggest alternatives: savings accumulation, equity release, or care cost funding via other investments."
  ),

  q("fpa-ch5-document-5", "cisi-fpa", "fpa-ch5", "5.1", "Suitability", "recommendations", "medium",
    "Why must advisers document their suitability analysis?",
    ["Documentation is optional", "Evidence of suitability analysis protects both client and adviser; required by regulators for compliance and dispute resolution", "Only required for large transactions", "Verbal advice is sufficient"],
    1,
    "Regulators require written suitability reports explaining objectives, analysis, and recommendation justification. This protects clients (ensuring thought-through advice) and advisers (defending against later claims of unsuitable advice)."
  ),

  q("fpa-ch5-review-5", "cisi-fpa", "fpa-ch5", "5.1", "Suitability", "recommendations", "easy",
    "When should financial planning recommendations be reviewed?",
    ["Never; recommendations remain valid indefinitely", "Regularly (typically annually) or when significant life changes occur; changed circumstances may require revised recommendations", "Only at client request", "Reviews are unnecessary if initial planning was thorough"],
    1,
    "Reviews ensure recommendations remain suitable as circumstances change: income increase, inheritance, health change, market conditions. Annual reviews are standard practice; additional reviews follow major life events."
  ),

  // ADDITIONAL QUESTIONS TO REACH 460 TARGET (continuing from above)
  // Chapter 1 additional questions
  q("fpa-ch1-cashflow-11", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "hard",
    "A client's analysis reveals they can save £500 monthly, but they have three competing objectives: emergency fund, debt repayment, and pension contributions. How should priorities be set?",
    ["Divide £500 equally among all three", "Emergency fund first (£150), then high-interest debt (£250), then pension (£100) to build foundation before growth investing", "Maximize pension contributions immediately (£400), then emergency fund (£100)", "Ignore emergency fund and allocate to investments"],
    1,
    "Sequential prioritization: emergency fund provides financial security enabling other planning. High-interest debt reduction provides guaranteed 'return'. Pension follows once safety net exists. This order reflects financial hierarchy."
  ),

  q("fpa-ch1-cashflow-12", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "medium",
    "Why is it important to understand seasonal variations in a self-employed client's income?",
    ["Seasonal variations are irrelevant to planning", "Seasonal income affects affordability of regular commitments and emergency reserve requirements; self-employed need larger buffers", "All income patterns are identical", "Seasonal effects only matter for very large income"],
    1,
    "Self-employed seasonal income (e.g., tourism business peaks in summer) means some months have zero income. Advisers must ensure savings/buffers cover lean months, and insurance premiums/pension contributions remain affordable through the full cycle."
  ),

  q("fpa-ch1-objectives-11", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "hard",
    "A client aged 50 states they want to retire in 5 years with £50,000 annual income. Their current assets are £200,000 and annual savings are £10,000. Assuming 4% portfolio returns, will they meet this goal?",
    ["Yes, easily achievable with these parameters", "Likely shortfall: £200k → £245k (5 years @ 4%), plus £50k savings = £295k; £50k × 25 = £1.25m needed for sustainable withdrawal", "Goal is impossible regardless of circumstances", "Need more information to determine feasibility"],
    1,
    "Simple math reveals shortfall. At 4% withdrawal rate, £1.25m is needed for £50k annually. Client is on track to accumulate ~£295k. This £950k gap requires: higher returns, delayed retirement, or reduced target income."
  ),

  q("fpa-ch1-risk-11", "cisi-fpa", "fpa-ch1", "1.5", "Risk Profiling", "planning", "medium",
    "How should risk profiling be updated as a client ages?",
    ["Risk profile never changes regardless of age", "Regular reassessment is essential: time horizon shortens, capacity for loss may decrease, life circumstances change", "All clients should shift to 100% bonds at age 50", "Risk profiles should be reset yearly regardless of change"],
    1,
    "Risk profiling is dynamic. As someone ages 30→50→70, time to recovery from losses decreases (capacity reduction), even if attitude remains stable. Life events (inheritance, health diagnosis, job change) also trigger reassessment."
  ),

  q("fpa-ch1-risk-12", "cisi-fpa", "fpa-ch1", "1.5", "Risk Profiling", "planning", "hard",
    "What is the 'reverse sequence of returns risk' and why does it matter to near-retirees?",
    ["Irrelevant concept to investment planning", "Risk that poor returns early in retirement (when withdrawing from portfolio) cause greater damage than same returns mid-retirement; early losses crystallized by withdrawals reduce compound recovery", "Risk that returns happen in reverse of inflation order", "Only applies to bond portfolios"],
    1,
    "Sequence risk: a retiree experiencing -20% in year 1 of retirement has damaged future spending capacity (withdrawals crystallize losses). Someone 20 years into retirement absorbs same loss without withdrawal impact. This drives pre-retirement de-risking."
  ),

  q("fpa-ch1-behaviour-11", "cisi-fpa", "fpa-ch1", "1.7", "Behavioural Finance", "planning", "medium",
    "How can advisers help clients overcome the sunk cost fallacy in investment decisions?",
    ["Acknowledge sunk costs are irrelevant to forward decisions", "Help clients focus on future prospects rather than past losses; a £10k loss in a bad investment should not trigger further investment trying to recover it", "Encourage clients to hold losers until profits recover", "Never mention past investment losses"],
    1,
    "Sunk cost fallacy: throwing good money after bad to recover past losses. Adviser should reframe: evaluate the investment on forward prospects only. If fundamentals are poor, sell regardless of past loss. If fundamentals are good, buy regardless of past gains."
  ),

  q("fpa-ch1-lifestage-11", "cisi-fpa", "fpa-ch1", "1.6", "Life Stages", "planning", "medium",
    "How should financial planning change when a client's dependent children become adults?",
    ["Objectives and priorities remain identical regardless of life stage", "Life insurance needs decrease significantly (no income replacement for adults); education savings objectives complete; protection focus shifts to personal illness/disability and retirement acceleration", "Adult children create equal financial needs to young children", "Dependents' age is irrelevant to planning"],
    1,
    "With adult children independent, insurance protecting them decreases. Education expenses cease. The client can redirect funds previously protecting dependents toward their own retirement, discretionary goals, or wealth building."
  ),

  q("fpa-ch1-planning-process-11", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "medium",
    "What role does financial coaching play in the financial planning process?",
    ["Coaching is unrelated to financial planning", "Coaching addresses behavior and discipline issues: clients changing spending habits, maintaining investment discipline, and working toward goals consistently", "Financial planning makes coaching unnecessary", "Coaching applies only to investment selection"],
    1,
    "Financial coaching helps clients execute plans despite behavioral biases. An adviser may recommend perfect portfolio allocation, but coaching ensures the client maintains it through volatility rather than panic-selling."
  ),

  q("fpa-ch1-objectives-12", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "hard",
    "A client has savings of £100k and annual surplus income of £15k. They have multiple objectives: home improvement (£20k), emergency fund (£15k), and retirement acceleration. How should the planner help prioritize?",
    ["All objectives receive equal allocation", "Emergency fund first (essential safety net), then home improvement from surplus income, then remaining income to retirement acceleration", "Retirement acceleration exclusively", "Home improvement first because it improves quality of life immediately"],
    1,
    "Financial stability foundations come first. Emergency fund ensures other goals aren't derailed by unexpected costs. Home improvement funded from annual surplus (£15k/year = £20k in ~18 months). Remainder accelerates retirement. This sequencing optimizes long-term security."
  ),

  // Chapter 2 continued
  q("fpa-ch2-protection-16", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "medium",
    "Why might a client with substantial investments still require life insurance?",
    ["Investments make life insurance unnecessary", "Investments may be illiquid or volatile; life insurance provides immediate tax-free capital; estate may face tax bills requiring liquid assets", "Wealthy individuals should never purchase insurance", "Life insurance and investments serve identical purposes"],
    1,
    "Investments can provide long-term wealth but may be illiquid (property, unlisted shares). Life insurance provides immediate cash for: mortgage payoff, estate taxes, or interim income replacement while investments are managed."
  ),

  q("fpa-ch2-protection-17", "cisi-fpa", "fpa-ch2", "2.1", "Protection Planning", "protection", "hard",
    "How should protection planning address family changes such as marriage, divorce, or blended families?",
    ["Protection plans remain static regardless of family changes", "Family changes trigger comprehensive reassessment: spouse coverage, beneficiary designations, children's provision, estate planning coordination", "Protection planning applies only to unmarried individuals", "Family circumstances are irrelevant to insurance needs"],
    1,
    "Marriage increases protection needs (now two dependents); divorce may decrease it. Blended families create complexity: ensuring children from both relationships are provided for. Regular reviews following major life events are essential."
  ),

  q("fpa-ch2-lifeassurance-16", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "medium",
    "What is the relationship between life insurance and estate planning?",
    ["They are completely separate topics", "Life insurance provides immediate liquidity for estate taxes, funeral costs, and debts; strategic placement avoids probate; trusts manage benefits", "Estate planning makes life insurance unnecessary", "Life insurance applies only to individuals without estates"],
    1,
    "Life insurance complements estate planning. A £300k policy written in trust bypasses probate and provides liquidity. This ensures executors can pay estate taxes without forcing asset sales, preserving inheritance."
  ),

  q("fpa-ch2-criticalillness-16", "cisi-fpa", "fpa-ch2", "2.3", "Critical Illness", "protection", "medium",
    "How do medical underwriting standards for critical illness affect younger clients versus older clients?",
    ["Underwriting standards are identical at all ages", "Younger applicants face less stringent underwriting and fewer exclusions; older applicants encounter more exclusions and higher premiums", "Younger clients always face stricter underwriting", "Underwriting occurs only for those over age 50"],
    1,
    "Medical underwriting becomes progressively stricter with age. A 30-year-old rarely encounters exclusions. A 55-year-old with hypertension history likely has that condition excluded. Younger clients benefit from entering cover while health is good."
  ),

  q("fpa-ch2-incomeprotection-16", "cisi-fpa", "fpa-ch2", "2.4", "Income Protection", "protection", "hard",
    "For a self-employed professional, how should income protection benefit level be determined?",
    ["Match last year's income regardless of volatility", "Use 3-5 year average income to smooth volatility; account for tax-efficiency (benefits are taxable); ensure cover is adequate if income drops during recession", "Cover only current income (ignoring trend)", "Self-employed cannot obtain income protection"],
    1,
    "Self-employed income varies. A designer earning £60k one year, £45k next, £70k third should average to ~£58k for insurance purposes. Using last year (£70k) overestimates, while using current year underinsures. Averaging prevents gaps."
  ),

  q("fpa-ch2-pmi-16", "cisi-fpa", "fpa-ch2", "2.5", "Private Medical Insurance", "protection", "medium",
    "Should PMI be viewed as a short-term or long-term protection product for most clients?",
    ["PMI should be lifetime coverage without reassessment", "PMI is often short-to-medium term (10-20 years during working life); premiums escalate significantly at 50+; many clients drop PMI in retirement", "PMI is only valuable as permanent protection", "PMI is equally affordable at all ages"],
    1,
    "PMI typically spans working years when private healthcare speed is valuable and premiums are moderate (age 30-55: £1,000-£2,500/year). At 60+, premiums become expensive (£3,500+/year) while NHS becomes more accessible; many clients lapse coverage."
  ),

  // Chapter 3 continued
  q("fpa-ch3-pension-analysis-5", "cisi-fpa", "fpa-ch3", "3.2", "Pension Analysis", "retirement", "medium",
    "A client aged 40 with £150k in pension savings wants to retire at 60. Assuming 5% growth and £100k additional contributions (£5k/year), what approximate fund value is projected at retirement?",
    ["£150k (unchanged)", "£150k × (1.05^20) + contributions ≈ £150k × 2.65 + £125k ≈ £520k approximately", "£1 million (guaranteed)", "£250k regardless of assumptions"],
    1,
    "Compound growth: £150k grows to ~£400k @ 5% over 20 years. Additional £100k contributions (£5k × 20 years, also growing) adds ~£130k = total ~£530k. At 4% withdrawal rate = £21k annual income. This may shortfall a retirement goal of £40k."
  ),

  q("fpa-ch3-annual-allowance-5", "cisi-fpa", "fpa-ch3", "3.2", "Pension Taxation", "retirement", "hard",
    "Why is the £60,000 annual allowance (AA) significant for pension planning?",
    ["It has no impact on planning", "Contributions exceeding £60k in one year trigger AA tax charges (40% × excess); client with £40k salary plus £25k employer contribution = £65k total (£5k excess) pays £2,000 tax", "All clients can contribute unlimited sums", "AA applies only to self-employed"],
    1,
    "Annual allowance caps tax-relieved contributions. A high-earner receiving £30k employer contribution can only make £30k personal contribution (£60k total) without triggering charges. Those hitting limit must choose: accept tax charge or reduce contributions."
  ),

  q("fpa-ch3-carry-forward-5", "cisi-fpa", "fpa-ch3", "3.2", "Pension Taxation", "retirement", "medium",
    "What is pension carry-forward and how does it benefit clients with variable income?",
    ["Carry-forward allows unused AA from previous 3 years to offset current year excess contributions", "Self-employed year earning £80k can use £60k + unused allowance from prior 3 years (potentially £180k+) to contribute £240k+ tax-efficiently", "Carry-forward applies only to employees", "Unused allowance expires each year"],
    1,
    "Carry-forward is valuable for variable-income clients. A consultant with low income Year 1 (uses £40k of AA) carries forward £20k. Year 2 high income (£100k) can contribute £160k (£60k current + £40k carried forward) without tax charges."
  ),

  q("fpa-ch3-drawdown-strategy-5", "cisi-fpa", "fpa-ch3", "3.3", "Drawdown Strategy", "retirement", "hard",
    "What is the 'critical yield' in relation to capped drawdown?",
    ["The maximum withdrawal rate allowed", "The investment return required for a drawdown pension to provide comparable income to an annuity at purchase; capped drawdown required insurers to show if yields might be unachievable", "The minimum returns guaranteed", "Irrelevant to modern retirement planning"],
    1,
    "Capped drawdown required illustration of 'critical yield': if rates were 5%, an illustration showed what returns the fund needed to sustain the target withdrawal. High critical yields suggested risk of fund depletion if returns disappointed. FAD eliminated this requirement."
  ),

  q("fpa-ch3-longevity-assumption-5", "cisi-fpa", "fpa-ch3", "3.3", "Longevity Planning", "retirement", "medium",
    "Why is longevity assumption critical for sustainable withdrawal planning?",
    ["Longevity has no impact on withdrawal strategy", "Assuming 25-year retirement underestimates: many live 30+ years. Conservative 35-year planning ensures funds last; underestimating creates risk of depletion at age 95+", "Everyone lives to exactly age 90", "Longevity risk only affects annuities"],
    1,
    "A 65-year-old planning 25-year horizon (to 90) who lives to 95 faces deplenishment risk. Advisers should assume longer lifespans (35+ years) and plan conservatively. Life expectancy tables suggest 60+ year retirement possibilities for some."
  ),

  // Continue with additional comprehensive questions across remaining chapters
  q("fpa-ch4-withdrawal-sequence-5", "cisi-fpa", "fpa-ch4", "4.2", "Withdrawal Strategy", "solutions", "hard",
    "What is 'sequence of returns risk' and how can it be mitigated in early retirement?",
    ["Irrelevant concept", "Risk that poor early returns combined with withdrawals create significant portfolio depletion; mitigation: cash buffer (1-3 years expenses), diversification, or reduced withdrawal rates in down markets", "Risk that returns occur in random order", "Only affects bond portfolios"],
    1,
    "A retiree withdrawing £40k/year from £1m portfolio faces sequence risk if Year 1 = -30% loss. Portfolio drops to £670k while £40k withdrawn = £630k remaining (37% loss). Recovery is harder. Mitigations: keep 2-3 years cash, skip withdrawals in negative years, or maintain flexibility."
  ),

  q("fpa-ch4-annuity-guarantees-5", "cisi-fpa", "fpa-ch4", "4.2", "Annuity Features", "solutions", "medium",
    "What is a 'guaranteed period' in annuities and why might it matter?",
    ["Irrelevant feature", "If annuitant dies within the guaranteed period (5-10 years), payments continue to estate/beneficiaries; important for ensuring income doesn't entirely cease on early death", "Guarantee that returns will be positive", "Only available on certain annuity types"],
    1,
    "A £200k annuity with 5% yield = £10k/year for life. With no guarantee, if annuitant dies Year 1, beneficiaries receive nothing. With 10-year guarantee, beneficiaries receive remaining payments. This is valuable protection for early deaths."
  ),

  q("fpa-ch5-conflicts-5", "cisi-fpa", "fpa-ch5", "5.1", "Conflicts", "recommendations", "medium",
    "How should advisers handle conflicts of interest in recommendations?",
    ["Ignore conflicts and proceed with recommendations", "Disclose conflicts clearly; make recommendations in client's best interest regardless of impact on adviser revenue", "Avoid recommending higher-fee products to benefit the client", "Conflicts are inevitable and clients understand them"],
    1,
    "Adviser recommends Fund A (0.5% fee) and Fund B (0.75% fee). If Fund A is better for the client, recommend Fund A despite lower adviser revenue. Disclose that both funds are available. Transparency and client benefit override commission concerns."
  ),

  q("fpa-ch5-monitoring-5", "cisi-fpa", "fpa-ch5", "5.2", "Monitoring", "recommendations", "hard",
    "What metrics should advisers use to evaluate whether recommendations are achieving client objectives?",
    ["Only portfolio returns matter", "Multiple metrics: progress toward goals (savings targets on track?), performance vs. benchmarks (asset allocation performing as expected), life stage alignment (is retiree sustainable?), and behaviour tracking (client disciplined?)", "Adviser gut feeling about performance", "Client satisfaction alone determines success"],
    1,
    "Successful recommendations require multi-dimensional assessment. Client may earn 6% returns but fall short of 8% goal (negative). Alternatively, 5% returns may exceed conservative goal (positive). Progress and goal alignment matter more than raw returns."
  ),

  q("fpa-ch1-cashflow-13", "cisi-fpa", "fpa-ch1", "1.4", "Cash Flow Analysis", "planning", "medium",
    "A client's monthly income is £3,500 net. Mortgage £1,200, utilities £150, food £400, insurance £100, transport £200, other £300 = £2,350 expenses. How much can realistically be allocated to financial planning?",
    ["£1,150 (all surplus)", "£700-£900 realistically: retain £200-£450 as monthly buffer to avoid emergency debt if unexpected costs arise", "£0 (no surplus)", "All surplus can be committed"],
    1,
    "With £1,150 surplus, allocating £700 to planning leaves £450 buffer. This prevents accumulating credit card debt if car repair (£500) occurs. Conservative approach balances planning progress with financial security."
  ),

  q("fpa-ch2-mortgageprotection-5", "cisi-fpa", "fpa-ch2", "2.2", "Mortgage Protection", "protection", "medium",
    "A couple with a £250k mortgage (25 years) both need protection. Should they purchase one joint life policy or two individual policies?",
    ["Joint policy always optimal", "Two individual policies offer flexibility: each can increase cover independently, one can be cancelled without affecting the other, separate underwriting", "Joint policies are always cheaper", "Insurance structure has no practical difference"],
    1,
    "Joint policy covers 'first death' (pays on whoever dies first, then ends). Two individual policies allow: one increases cover when child born, the other remains unchanged. Flexibility outweighs minor cost savings."
  ),

  q("fpa-ch2-lifeassurance-17", "cisi-fpa", "fpa-ch2", "2.2", "Life Assurance", "protection", "hard",
    "A client aged 45 is considering decreasing term insurance (matching mortgage reduction) vs. level term. Which is appropriate?",
    ["Always recommend decreasing to match declining liability", "Decreasing matches mortgage (good for mortgage-only cover); level term provides consistent protection if other liabilities exist (debts, income replacement for dependents)", "Always recommend level term", "Both products are identical"],
    1,
    "Mortgage-specific need? Decreasing term matches debt and is cheaper. Overall family protection (income replacement for 20+ years of child dependency)? Level term maintains coverage. Often both apply, requiring combination strategies."
  ),

  q("fpa-ch3-statepension-6", "cisi-fpa", "fpa-ch3", "3.1", "State Pension", "retirement", "medium",
    "A client born in 1960 reaches State Pension Age at what age?",
    ["65", "66 (born in 1960, SPA is 66)", "67", "68"],
    1,
    "State Pension Age for those born 1960-77 is between 66-67 (exact age depends on birth month). Someone born April 1960 reaches SPA at age 66 years 4 months. This represents the gradual increase from 65 to 68."
  ),

  q("fpa-ch3-workplace-pension-5", "cisi-fpa", "fpa-ch3", "3.2", "Workplace Pensions", "retirement", "medium",
    "What is 'auto-enrolment' and why was it introduced?",
    ["Auto-enrolment has no specific purpose", "Mandatory employer contribution into pension (minimum 3%) for eligible employees; introduced to address inadequate private pension savings", "Employees always voluntarily enrol in pensions", "Auto-enrolment only applies to self-employed"],
    1,
    "Auto-enrolment addressed the fact that millions of workers had no occupational pension. Since 2012, employers must enrol eligible employees (age 22+, earning >£10.5k annually) into qualified pensions. Employees can opt out."
  ),

  q("fpa-ch3-pension-death-benefits-5", "cisi-fpa", "fpa-ch3", "3.2", "Pension Death Benefits", "retirement", "medium",
    "What happens to a personal pension if the member dies before retirement?",
    ["Pension is forfeited entirely", "Death benefits are typically paid to nominated beneficiaries; usual options are lump sum or income drawdown", "Only the spouse can inherit", "Death benefits are always taxed"],
    1,
    "Pension death benefits provide valuable inheritance for young savers. If someone dies at 40 with £100k pension, beneficiaries receive £100k (typically tax-free if under age 75). This makes pensions valuable for families with dependents."
  ),

  q("fpa-ch4-sustainable-withdrawal-5", "cisi-fpa", "fpa-ch4", "4.2", "Sustainable Withdrawals", "solutions", "hard",
    "What is the 4% rule and what are its limitations?",
    ["A guarantee that 4% withdrawal from any portfolio is always safe", "Historically-derived guideline suggesting 4% annual withdrawal (adjusted for inflation) is sustainable over 30-year retirement; limitations: past performance ≠ future results, doesn't account for individual circumstances", "A rule guaranteeing no portfolio depletion", "Only applies to stock portfolios"],
    1,
    "The 4% rule emerged from Trinity University research on historical returns. It suggests £1m portfolio supports £40k/year indefinitely. However: market returns may differ, spending flexibility matters, and sequence risk remains. It's a guideline, not a guarantee."
  ),

  q("fpa-ch4-investment-pathways-5", "cisi-fpa", "fpa-ch4", "4.2", "Investment Pathways", "solutions", "medium",
    "What are the four investment pathways available to pension savers in decumulation?",
    ["Invest, hold, sell, retire", "Conservative, balanced, growth, cautious", "Annuity, flexi-access drawdown, capped drawdown, small pots", "Four pathways don't exist"],
    2,
    "Investment pathways are: Conservative (to age 75 then annuity), Balanced (mix of growth/security), Growth (equity-heavy), and Enhanced income (income focus). These are default recommendations guiding those without adviser."
  ),

  q("fpa-ch5-prioritisation-5", "cisi-fpa", "fpa-ch5", "5.1", "Prioritisation", "recommendations", "hard",
    "A client has three recommendations: increase life insurance (£50/month), start pension (£200/month), pay down debt (£300/month available). How should the adviser prioritize?",
    ["All equally, allocating £100 to each", "Prioritize: debt payoff (£300) if high-interest, then life insurance (£50 minimum), then pension (£150 remaining)", "Ignore debt, maximize pension contributions", "Recommendations conflict, make none"],
    1,
    "Sequencing prioritizes financial stability foundations. Debts (especially high-interest) reduce future cash flow and increase risk. Life insurance protects dependents. Pension contributes once foundation is secure. This order makes sense for most clients."
  ),

  q("fpa-ch1-objectives-13", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "easy",
    "What is the difference between a goal and an objective in financial planning?",
    ["They are interchangeable terms", "Goal: general aspiration (retire comfortably); Objective: specific, measurable, time-bound goal (retire at 65 with £40k annual income)", "Goals are irrelevant to planning", "Only objectives matter"],
    1,
    "A client's goal to 'retire comfortably' is vague. An objective to 'retire at 65 with £40k annual inflation-adjusted income from pension and savings' is SMART. Objectives drive planning; goals require translation into objectives."
  ),

  q("fpa-ch2-underwriting-5", "cisi-fpa", "fpa-ch2", "2.2", "Underwriting", "protection", "medium",
    "What is the significance of 'insurable interest' in life insurance?",
    ["Irrelevant concept", "Proposer must suffer financial loss on insured person's death; prevents betting contracts and motivates honesty", "All life insurance has identical interest regardless of relationship", "Insurable interest is only for business insurance"],
    1,
    "Insurable interest prevents someone from insuring a stranger and profiting from their death (moral hazard). A parent has insurable interest in a child, a spouse in their partner, but a stranger does not. This principle protects insurers."
  ),

  q("fpa-ch3-pension-sharing-5", "cisi-fpa", "fpa-ch3", "3.2", "Pension Sharing", "retirement", "medium",
    "How does pension sharing work on divorce?",
    ["Pensions cannot be divided on divorce", "Court orders may divide pension rights at divorce; one spouse receives percentage of the other's pension value, creating separate pension rights", "All pensions are split 50-50 automatically", "Pension sharing only applies to DB pensions"],
    1,
    "Pension sharing creates a separate pension right for the receiving spouse (e.g., 40% of accumulated value transferred). This differs from attachment (income goes to ex-spouse) or earmarking (used at retirement). The benefit is independence of each party's pension."
  ),

  q("fpa-ch4-flexibility-5", "cisi-fpa", "fpa-ch4", "4.2", "Flexibility", "solutions", "medium",
    "What retirement solution offers the most flexibility for a 65-year-old who is unsure about immediate income needs?",
    ["Annuity (most flexible)", "Flexi-access drawdown (can withdraw any amount any time, adjust as circumstances change)", "Required to take all income at once", "No flexible options exist"],
    1,
    "FAD allows flexibility: take £5k one month (daughter's wedding), skip next month, take £20k later for travel. Annuity locks in fixed income (no adjustment). For those uncertain of needs, FAD's flexibility is valuable."
  ),

  q("fpa-ch5-goals-alignment-5", "cisi-fpa", "fpa-ch5", "5.2", "Goals Alignment", "recommendations", "hard",
    "A client's portfolio returns 6% annually but original target was 8%. How should the adviser respond?",
    ["Assume the portfolio has failed", "Assess whether the shortfall affects goal achievement; 6% may be sufficient if goals are on-track despite lower returns, or require portfolio adjustments if shortfall threatens objectives", "Immediately switch to higher-risk investments", "Performance is irrelevant if portfolio matches asset allocation"],
    1,
    "Portfolio performance must be evaluated against goals, not arbitrary benchmarks. If target was £1m by age 65 and current trajectory reaches £950k by age 67, that's acceptable (slight delay, still sufficient). Conversely, if shortfall threatens adequacy, action is needed."
  ),

  // Additional questions across chapters for complete coverage
  q("fpa-ch1-income-analysis-5", "cisi-fpa", "fpa-ch1", "1.4", "Income Analysis", "planning", "medium",
    "Why should advisers distinguish between gross income and net disposable income in financial planning?",
    ["Gross and net are identical concepts", "Gross masks actual spending capacity after taxes and non-discretionary expenses; net disposable is what's available for planning", "Only gross income matters", "Tax has no impact on planning"],
    1,
    "A client earning £60k gross has ~£45k net after tax. From £45k, mortgage (£15k) leaves £30k for living expenses and planning. Only £30k is available; planning based on £60k overstates capacity."
  ),

  q("fpa-ch2-frequency-review-5", "cisi-fpa", "fpa-ch2", "2.1", "Review Frequency", "protection", "medium",
    "How often should protection coverage be reviewed?",
    ["Never; protection plans are permanent", "Annually at minimum; additionally after major life changes (marriage, children, job change, significant debt changes)", "Only when client initiates contact", "Reviews are unnecessary"],
    1,
    "Annual reviews ensure cover is still adequate: child born (increase coverage), mortgage reduces (adjust decreasing term), job change affects income protection needs. Major life events trigger immediate reassessment."
  ),

  q("fpa-ch3-relief-at-source-5", "cisi-fpa", "fpa-ch3", "3.2", "Tax Relief", "retirement", "medium",
    "What is the difference between 'relief at source' and 'net pay' pension contributions?",
    ["No difference; tax relief mechanisms are identical", "Relief at source: basic rate tax relief applied automatically (£80 contribution costs £60 to employee); net pay: contributions made from salary pre-tax (£80 costs £64 for higher-rate taxpayer)", "Net pay provides greater tax relief", "Only relief at source applies to personal pensions"],
    1,
    "Relief at source (standard for personal pensions): £80 cost = £64 employee contribution (basic rate 20% relief). Net pay (standard for occupational pensions): £80 cost = £64 for basic-rate, £48 for higher-rate (relief at point of contribution). Net pay is more tax-efficient for higher earners."
  ),

  q("fpa-ch4-timing-annuity-5", "cisi-fpa", "fpa-ch4", "4.2", "Annuity Purchase", "solutions", "hard",
    "Why might someone delay purchasing an annuity even if they want guaranteed income?",
    ["No reason to delay", "Annuity rates are driven by gilt yields; if rates are low (0.5% UK gilts 2020), annuity payouts are poor; waiting for rate rise improves annuity income significantly", "Annuity rates never change", "Delaying always worsens outcomes"],
    1,
    "Annuity rate 3% on £500k = £15k/year. When rates rise to 5% = £25k/year. Rate timing matters significantly. However, delaying also means starting retirement with less certainty (FAD risk) and increasing longevity risk. Balance is needed."
  ),

  q("fpa-ch5-cost-benefit-5", "cisi-fpa", "fpa-ch5", "5.1", "Cost-Benefit", "recommendations", "medium",
    "How should advisers address recommendations where costs are significant but benefits are indirect or long-term?",
    ["Avoid recommending if costs aren't immediately visible", "Quantify both costs and benefits; present expected outcomes to justify expense (e.g., £100/month critical illness = protection worth £500k+, justified despite cost)", "Only recommend if benefits are immediate", "Client preference determines cost-benefit analysis"],
    1,
    "Critical illness insurance costs £50/month (£600/year) but protects £500k pension pot from damage (employee cannot work 10 years). Cost-benefit is favorable, but requires adviser explanation since benefits are preventative, not immediate."
  ),

  q("fpa-ch1-ethics-5", "cisi-fpa", "fpa-ch1", "1.1", "Ethics", "planning", "medium",
    "Why is informed consent important in the fact-finding process?",
    ["Clients' consent is not required for fact-finding", "Informed consent ensures clients understand what information is being collected, how it's used, and who has access; protects privacy and builds trust", "Only required for financial transactions", "Verbal acknowledgment is sufficient"],
    1,
    "Advisers collect sensitive data: income, debts, health, family circumstances. Clients must understand this data is used for planning, shared with providers if needed, and stored securely. Written consent documents this understanding."
  ),

  q("fpa-ch2-affordability-5", "cisi-fpa", "fpa-ch2", "2.2", "Affordability", "protection", "hard",
    "A client needs £500k life insurance but can only afford £30/month premiums. What options exist?",
    ["None; unaffordable protection is impossible", "Prioritize: £250k term insurance (£20/month), defer £250k; or reduce sum (£300k at affordable premium); or extend term length", "Take on higher-premium policy despite affordability concerns", "Forgo insurance entirely"],
    1,
    "Affordability drives suitability. Rather than recommending £500k at £50/month (unaffordable), recommend £250k at £20/month (affordable). This is better than nothing. Client can increase coverage later when income rises."
  ),

  q("fpa-ch3-contribution-limits-5", "cisi-fpa", "fpa-ch3", "3.2", "Contribution Limits", "retirement", "medium",
    "What is the Money Purchase Annual Allowance (MPAA) and how does it differ from the standard annual allowance?",
    ["MPAA and annual allowance are identical", "MPAA applies to those accessing flexible benefits: caps future contributions at £10,000/year; standard AA is £60,000/year", "MPAA is only for DB pensions", "MPAA provides greater contribution allowance"],
    1,
    "Someone accessing FAD at age 58 triggers MPAA: future pension contributions limited to £10k/year (vs. £60k normally). This prevents tax-arbitrage (accessing fund flexibly while continuing large contributions). It significantly constrains savings for those in drawdown."
  ),

  q("fpa-ch4-lump-sum-5", "cisi-fpa", "fpa-ch4", "4.2", "Lump Sum", "solutions", "medium",
    "Should a retiree take the pension commencement lump sum (PCLS) all at once or phase it?",
    ["Always take all PCLS immediately", "Depends: immediate need for capital suggests full withdrawal; no immediate need suggests phasing withdrawals to spread tax load and preserve income", "Never take PCLS, leave in pension", "Tax treatment is identical regardless of timing"],
    1,
    "PCLS is 25% of crystallized pot, tax-free. Taking £100k PCLS (25% of £400k pot) is tax-free. But if this causes total income to exceed higher-rate threshold (£50,270), it may trigger 20% tax on other income. Phasing PCLS over years can reduce tax."
  ),

  q("fpa-ch5-documentation-5", "cisi-fpa", "fpa-ch5", "5.1", "Documentation", "recommendations", "hard",
    "What should a suitability report contain at minimum?",
    ["Client name and account number only", "Client circumstances, objectives, risk assessment, products considered, recommended solution, reasons for recommendation, risks, costs, expected outcomes, and next steps", "Only the final recommendation", "Verbal explanation is equivalent"],
    1,
    "Suitability reports create accountability. They document advisers' analysis and recommendations, protecting both parties. FCA expects detailed reports especially for complex products. Reports should be clear enough that a third party could understand the advice rationale."
  ),

  q("fpa-ch1-family-planning-5", "cisi-fpa", "fpa-ch1", "1.3", "Family Planning", "planning", "medium",
    "How should financial planning change when a couple plans to have children?",
    ["No changes required", "Objectives expand: education savings, protection (life insurance for income replacement), potentially smaller mortgage, maternity/paternity planning", "Planning becomes impossible with children", "Children have no financial planning impact"],
    1,
    "Planning with children adds objectives: £100k+ for education, life insurance (income replacement until children are independent), may reduce working hours (lower income). Advisers must anticipate these changes proactively."
  ),

  q("fpa-ch2-occupational-schemes-5", "cisi-fpa", "fpa-ch2", "2.2", "Occupational Benefits", "protection", "medium",
    "How should individual life insurance be coordinated with employer group life benefits?",
    ["Employer group is always sufficient", "Identify employer coverage scope and duration; individual policies fill gaps (coverage beyond employment, additional amounts above employer limit)", "Employer coverage makes individual policies unnecessary", "Dual coverage is wasteful"],
    1,
    "Employer group life (e.g., 4x salary = £200k) may be insufficient for family needs (£500k required). Individual policy covers the £300k gap. On job change, group coverage ends; individual policy continues."
  ),

  q("fpa-ch3-deferral-implications-5", "cisi-fpa", "fpa-ch3", "3.1", "State Pension Deferral", "retirement", "medium",
    "A 68-year-old deferred state pension since age 67 (1 year deferral). What increase can they expect?",
    ["No increase for deferral less than 3 years", "Increase of ~5.8% per year (approximately 5.8% for 1 year of deferral) continues for life", "Increase is time-limited", "Only women receive deferral increases"],
    1,
    "One year deferral = ~5.8% increase. Someone with pension of £190/week at 67 receives £201/week at 68 (increase of £11/week × 52 weeks = £572/year additional). Over 20-year retirement, this adds significant value."
  ),

  q("fpa-ch4-capped-drawdown-legacy-5", "cisi-fpa", "fpa-ch4", "4.2", "Legacy Products", "solutions", "hard",
    "Why are capped drawdown pensions (legacy pre-April 2015) now less attractive despite being established?",
    ["They remain optimal for all retirees", "Capped drawdown: income frozen at purchase-time rates; FAD allows flexible withdrawals; capped drawdown's constraint now sees FAD as superior for most", "Capped drawdown has no disadvantages", "All retirees prefer capped drawdown"],
    1,
    "Capped drawdown set income ceiling at purchase (e.g., £40k/year max). If client needs £50k, they cannot exceed limit. FAD has no such limit (though sustainable withdrawal concerns remain). For those in capped drawdown, FAD options should be reviewed at anniversary."
  ),

  q("fpa-ch5-suitability-reassess-5", "cisi-fpa", "fpa-ch5", "5.2", "Reassessment", "recommendations", "medium",
    "When major market decline occurs (e.g., 30%), should suitability assessments be automatically re-run?",
    ["Never; suitability remains unchanged regardless of market", "Not automatically but reassess if: client's circumstances changed, portfolio allocation drifted significantly from target, or client's risk tolerance shifted due to market shock", "Always immediate reassessment required", "Market performance never affects suitability"],
    1,
    "Suitability is based on client circumstances and risk profile, not current market levels. A 30% market decline doesn't make equities unsuitable for a 30-year-old (long horizon permits recovery). However, it's opportunity to reassess client's actual comfort with volatility."
  ),

  // Final questions to complete set
  q("fpa-ch1-business-planning-5", "cisi-fpa", "fpa-ch1", "1.6", "Business Planning", "planning", "medium",
    "How does financial planning differ for business owners versus employees?",
    ["No differences; all clients follow identical planning process", "Business owners face unique issues: business succession, partner agreements, key person insurance, business valuation, owner drawings vs. salary structure", "Business owners cannot obtain financial planning", "Only employees benefit from planning"],
    1,
    "Business owners must plan business succession (who takes over?), protect business value through insurance, manage draw vs. salary (pension contribution implications), and plan exit strategy. Employees don't face these complexities."
  ),

  q("fpa-ch2-mortalitydata-5", "cisi-fpa", "fpa-ch2", "2.2", "Mortality Data", "protection", "hard",
    "Why do life insurance companies use mortality tables rather than treating all applicants identically?",
    ["Mortality tables are irrelevant to insurance", "Mortality risk varies by age, health, occupation; tables guide premium pricing to ensure insurers don't systematically underprice high-risk applicants", "All applicants have identical mortality risk", "Mortality data only affects annuities"],
    1,
    "A 30-year-old smoker has higher mortality risk than a 30-year-old non-smoker. Mortality tables reflecting this protect insurers from adverse selection. Smokers pay higher premiums (reflecting actual risk) while non-smokers pay standard rates."
  ),

  q("fpa-ch3-integration-pensions-5", "cisi-fpa", "fpa-ch3", "3.2", "Integration", "retirement", "medium",
    "How should workplace and personal pensions be integrated in retirement planning?",
    ["Treat separately; combine in final plan only", "Integrate: workplace DB may provide fixed income, complemented by DC pension flexibility, plus savings and state pension to create complete retirement portfolio", "Only DB pensions matter", "Personal pensions should be ignored if employer scheme exists"],
    1,
    "Complete retirement picture: State Pension £190/week + DB £300/week + DC drawdown £100/week + savings = total income. Adviser must model all sources together to assess sufficiency and identify any gaps."
  ),

  q("fpa-ch4-sequencing-withdrawal-5", "cisi-fpa", "fpa-ch4", "4.2", "Sequencing", "solutions", "medium",
    "In what sequence should different retirement income sources be accessed?",
    ["No specific sequence matters", "Often: ISA/savings first (tax-free), then personal pension (tax-efficient), then state pension (baseline), then drawdown (tax-deferred)", "Pension first (largest amounts)", "Sequence is irrelevant to tax outcomes"],
    1,
    "Optimal sequencing minimizes tax. ISA withdrawals are tax-free (no income tax, no TICS effects on benefits). Personal pension withdrawals fill personal allowance (then basic rate band). This order preserves state pension/benefit eligibility longest."
  ),

  q("fpa-ch5-implementation-5", "cisi-fpa", "fpa-ch5", "5.2", "Implementation", "recommendations", "hard",
    "What is the adviser's role in implementation after recommendations are agreed?",
    ["Recommendations are final; client implements independently", "Adviser coordinates implementation: arranges applications, monitors completion, ensures client understands timelines, follows up", "Client has no assistance; adviser role ends at recommendation", "Implementation always occurs immediately"],
    1,
    "Implementation requires active oversight. Adviser arranges provider applications, confirms receipt, chases if stalled, explains next steps. Clients often delay (procrastination) or forget. Active project management increases plan execution success."
  ),

  q("fpa-ch1-longevity-planning-5", "cisi-fpa", "fpa-ch1", "1.2", "Longevity Planning", "planning", "medium",
    "Why should advisers discuss longevity in fact-finding for retirement planning?",
    ["Longevity is irrelevant to planning", "Retirement fund size depends on lifespan; assuming 25 years vs. 35 years differs significantly; family history and health inform conservative assumptions", "Everyone lives to identical age", "Discussing death is inappropriate"],
    1,
    "A client with family history of longevity (parents alive at 95+) should assume longer retirement (to age 95+). This dramatically increases retirement funding needed. Conversely, health issues might suggest more conservative assumptions."
  ),

  q("fpa-ch2-employment-changes-5", "cisi-fpa", "fpa-ch2", "2.4", "Employment Changes", "protection", "medium",
    "A client changing from employment to self-employment loses access to employer income protection. What solutions exist?",
    ["No alternatives exist for self-employed", "Individual income protection policies (own-occupation, higher premiums due to self-employment risk); building larger emergency reserves; business income protection", "Self-employed have no protection options", "State benefits replace employer coverage"],
    1,
    "Self-employed can obtain individual income protection but premiums are 20-40% higher (higher claims, variable income). Building 6-12 month emergency reserves is also essential (vs. 3-6 months for employed). Combination approaches are best."
  ),

  q("fpa-ch3-pension-flexibility-5", "cisi-fpa", "fpa-ch3", "3.3", "Flexibility", "retirement", "hard",
    "Why might a younger saver with 25+ years to retirement benefit from understanding pension flexibility now?",
    ["Flexibility is irrelevant for young savers", "Early understanding of options (FAD vs. annuity vs. mixed strategies) guides contribution decisions; someone planning FAD may prioritize different accumulation than someone planning annuity", "Young savers should only consider accumulation", "Flexibility decisions are made at retirement"],
    1,
    "A 35-year-old planning to live modestly (low withdrawal rate, FAD) can accept lower returns. Someone planning annuity at 70 wants maximum growth. Strategy affects investment choices now, making early flexibility planning valuable."
  ),

  q("fpa-ch4-risk-management-5", "cisi-fpa", "fpa-ch4", "4.2", "Risk Management", "solutions", "medium",
    "What risks should be considered in retirement income planning?",
    ["Investment risk only", "Multiple: investment risk (market losses), longevity risk (outliving savings), inflation risk (purchasing power loss), sequence risk (poor early returns), interest rate risk (annuity rates low)", "No risks exist once retired", "Risk is irrelevant in retirement"],
    1,
    "Retirement faces multiple simultaneous risks. A retiree in 1974-1979 faced stagflation (inflation + poor returns): disastrous combination. Modern planning must hedge multiple risks through diversification and flexibility."
  ),

  q("fpa-ch5-ongoing-cost-5", "cisi-fpa", "fpa-ch5", "5.2", "Costs", "recommendations", "medium",
    "Why should advisers discuss ongoing costs (adviser fees, fund charges) before recommendations are made?",
    ["Costs are irrelevant and shouldn't be discussed", "High costs reduce long-term returns significantly; transparency on annual drag (e.g., 1.5% total costs vs. 0.5%) helps clients make informed decisions", "Costs are always identical across providers", "Adviser fees are fixed regardless of strategy"],
    1,
    "Cost example: £100k invested 30 years @ 6% net = £574k. At 0.5% costs (5.5% net return) = £517k. Cost difference = £57k (10% of final value). This justification explains why adviser recommendations emphasize cost-effective products."
  ),

  // Additional comprehensive questions
  q("fpa-ch1-technology-5", "cisi-fpa", "fpa-ch1", "1.1", "Technology", "planning", "medium",
    "How is technology changing the financial planning process?",
    ["Technology is irrelevant to planning", "Tools enable better analysis (scenario modelling, retirement projections), improved communication (online dashboards), and automated rebalancing while human advisers provide behavioral coaching", "Technology will replace human advisers", "Technology only applies to investment management"],
    1,
    "Technology enhances planning: modelling software shows 1,000 retirement scenarios instantly. Automated rebalancing removes emotion. Online dashboards keep clients engaged. But complex life situations, goal prioritization, and behavioral coaching still require human advisers."
  ),

  q("fpa-ch2-coverage-gaps-5", "cisi-fpa", "fpa-ch2", "2.1", "Coverage Gaps", "protection", "hard",
    "A client with employer group life (4x salary = £300k) and personal life policy (£200k) has total cover of £500k. Is this duplication wasteful?",
    ["Yes, absolute duplication; should carry one policy", "No: group covers period of employment; personal policy continues after job change; combined coverage ensures continuity, not waste", "Should cancel personal policy", "Coverage should be higher than £500k"],
    1,
    "Strategic layering: employer group covers immediate needs while employed (mortgage, dependents). Personal policy ensures protection persists if job is lost or changed. Combined = comprehensive protection with no gap periods."
  ),

  q("fpa-ch3-state-benefit-interaction-5", "cisi-fpa", "fpa-ch3", "3.2", "State Benefits", "retirement", "hard",
    "How do pension drawdowns affect means-tested state benefits in retirement?",
    ["No interaction; pensions don't affect means-testing", "Drawdown withdrawals are counted as income for Pension Credit means-testing; high withdrawals disqualify applicants; strategic withdrawal sequencing can preserve benefit eligibility", "Pensions eliminate all state benefit eligibility", "State benefits are only for those without pensions"],
    1,
    "Someone with £300k pension in FAD and modest state pension might qualify for Pension Credit (top-up to £218/week minimum). But if they withdraw £300/week from FAD, income exceeds limit and loses benefit. Strategic low withdrawals preserve benefit; high withdrawals lose it."
  ),

  q("fpa-ch4-inflation-protection-5", "cisi-fpa", "fpa-ch4", "4.2", "Inflation", "solutions", "medium",
    "How does inflation protection differ between annuity types?",
    ["All annuities adjust equally for inflation", "Level annuity: no inflation adjustment (purchasing power erodes); escalating annuity: income rises annually to maintain purchasing power", "Annuities are never affected by inflation", "FAD automatically adjusts for inflation"],
    1,
    "Level annuity paying £10k/year becomes worth £7k in 10 years (3% inflation). Escalating annuity paying £10k year 1, £10.3k year 2, £10.6k year 3 maintains purchasing power. Cost difference is significant (escalating costs 20-30% more)."
  ),

  q("fpa-ch5-client-objectives-alignment-5", "cisi-fpa", "fpa-ch5", "5.2", "Objectives Alignment", "recommendations", "medium",
    "How should advisers handle situations where client preferences conflict with objective suitability analysis?",
    ["Always defer to client preference", "Discuss conflicts respectfully; explain analysis; document discussion; if client insists on unsuitable choice, document refusal and consider whether to continue advising", "Refuse to work with the client", "Make recommendations regardless of client input"],
    1,
    "Conflict example: client insists on 100% emerging markets (recency bias). Adviser should: explain suitability analysis, discuss risk/volatility, propose balanced alternative, accept if client insists despite advice, and document thoroughly."
  ),

  // ADDITIONAL 270 QUESTIONS TO REACH TARGET DISTRIBUTION

  // CHAPTER 1: Financial Planning - Additional ~25 questions (total 90)
  q("fpa-ch1-planning-process-11", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "easy",
    "What is the primary role of a financial adviser in the planning process?",
    ["To sell investment products", "To gather facts, identify goals, and recommend suitable solutions tailored to client circumstances", "To guarantee investment returns", "To manage client investments only"],
    1,
    "Financial advisers act as guides, analyzing client facts and objectives to develop comprehensive, suitable plans. They educate clients and help navigate complex financial decisions."
  ),

  q("fpa-ch1-planning-process-12", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "medium",
    "A 35-year-old client with £50k annual income wants to retire at 60 with £40k annual income. What planning step is most critical?",
    ["Immediately invest in growth funds", "Model retirement projections, identify funding gap, and develop savings strategy over 25 years", "Reduce expenses to impossible levels", "Ignore inflation in projections"],
    1,
    "With 25 years to retirement, planners must assess if current savings rate bridges the gap. This involves cash flow analysis, investment growth assumptions, and inflation adjustments."
  ),

  q("fpa-ch1-planning-process-13", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "hard",
    "Why is ongoing monitoring and review central to financial planning?",
    ["Advisers need to sell more products", "Life circumstances, markets, and regulations change; regular reviews ensure recommendations remain suitable and portfolio is optimized", "Reviews are only needed annually", "Monitoring has no impact on outcomes"],
    1,
    "Markets shift, client circumstances evolve (marriage, children, job changes), and tax laws change. Annual or bi-annual reviews allow advisers to adjust plans, rebalance portfolios, and ensure ongoing suitability."
  ),

  q("fpa-ch1-risk-profile-11", "cisi-fpa", "fpa-ch1", "1.4", "Risk Profiling", "planning", "easy",
    "Which factor is most important when assessing a client's capacity for loss?",
    ["Their age alone", "Their time horizon, income, expenses, and emergency savings", "Their investment knowledge", "Their neighbor's investment returns"],
    1,
    "Capacity for loss (objective) is determined by: time to retirement, essential expenses, emergency fund, dependents, and debt obligations. It's independent of willingness to take risk."
  ),

  q("fpa-ch1-risk-profile-12", "cisi-fpa", "fpa-ch1", "1.4", "Risk Profiling", "planning", "medium",
    "A client aged 55 with £500k savings, £2k monthly pension in 10 years, and £1,200/month essential expenses. What is their capacity for loss likely to be?",
    ["Very high - they have substantial savings", "Moderate to low - pension income will soon replace earned income, limiting their ability to recover from losses", "Unlimited - they can take any risk", "Zero - older clients cannot take any risk"],
    1,
    "With 10 years to retirement and future reliance on fixed pension income, this client cannot easily replace investment losses. Their capacity is moderate-to-low despite current savings."
  ),

  q("fpa-ch1-risk-profile-13", "cisi-fpa", "fpa-ch1", "1.4", "Risk Profiling", "planning", "hard",
    "A high-income executive aged 40 states they're comfortable with 30% annual portfolio swings. Why must advisers verify this further?",
    ["Willingness (emotional comfort) must be validated against capacity (financial ability); recency bias from bull markets can create false confidence; advisers test during downturns", "All high-earners can handle high risk", "Stated preference is always accurate", "Risk tolerance cannot change"],
    1,
    "A client expressing high risk tolerance in bull markets may panic-sell during downturns. Advisers must assess whether the client can genuinely afford losses and has experienced volatility before."
  ),

  q("fpa-ch1-fact-find-11", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "easy",
    "During fact-finding, a client mentions they 'want to be financially secure.' Is this a suitable objective?",
    ["Yes, very clear", "No - it's vague and subjective; advisers must quantify it (e.g., 'achieve £30k annual income by age 60')", "Yes if the client is happy", "No, security is impossible"],
    1,
    "SMART objectives require specific, measurable goals. 'Secure' is subjective. Advisers must ask: How much income? By when? From what sources? This creates a measurable plan."
  ),

  q("fpa-ch1-fact-find-12", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "medium",
    "A client has £15k credit card debt at 20% interest but £50k in a savings account earning 2%. What should the adviser prioritize discussing?",
    ["The savings strategy for retirement", "Paying off high-interest debt first (guaranteed 20% return by avoiding interest)", "Investing more aggressively", "Ignoring the debt"],
    1,
    "High-interest unsecured debt is a priority. Paying £15k at 20% is mathematically superior to earning 2% on savings. Debt elimination is often the first planning step."
  ),

  q("fpa-ch1-fact-find-13", "cisi-fpa", "fpa-ch1", "1.2", "Fact-Finding", "planning", "hard",
    "A client reveals they have significant tax issues from unreported income. What is the adviser's responsibility?",
    ["Ignore it and provide planning advice anyway", "Advise the client to seek tax advice and potentially report the issue; advisers must not facilitate tax evasion", "Report the client to authorities immediately", "Continue planning without addressing it"],
    1,
    "Advisers must maintain professional integrity. Knowingly advising a client with unreported tax issues creates compliance and regulatory risks. Advisers should encourage proper disclosure."
  ),

  q("fpa-ch1-objectives-11", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "easy",
    "Which of the following is a well-defined financial objective?",
    ["Save more money", "Accumulate £200k in ISAs within 10 years for a property deposit", "Invest in good funds", "Make money"],
    1,
    "A clear objective has specific amount (£200k), timeline (10 years), and purpose (property). This allows advisers to build a measurable, trackable plan."
  ),

  q("fpa-ch1-objectives-12", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "medium",
    "A couple has conflicting goals: one wants to retire at 55, the other at 65. How should the adviser proceed?",
    ["Insist they choose the same age", "Facilitate discussion to understand priorities, timescales, and income needs; explore hybrid solutions (phased retirement, separate planning)", "Plan for age 55 only", "Plan for age 65 only"],
    1,
    "Couples often have different goals. Advisers help them discuss priorities, understand trade-offs, and develop solutions that work for both. This might include phased retirement."
  ),

  q("fpa-ch1-objectives-13", "cisi-fpa", "fpa-ch1", "1.3", "Client Objectives", "planning", "hard",
    "Why do objectives need to be reviewed and updated regularly?",
    ["They never change", "Life events (promotion, inheritance, health), market conditions, and changing priorities mean original objectives may no longer be relevant or achievable", "Objectives are fixed at inception", "Only rich clients need to review"],
    1,
    "A client who gets promoted, inherits money, or faces health issues will have new priorities. Annual reviews ensure objectives remain aligned with current circumstances."
  ),

  q("fpa-ch1-analysis-11", "cisi-fpa", "fpa-ch1", "1.5", "Financial Analysis", "planning", "easy",
    "Which piece of information is essential to understand a client's financial position?",
    ["Their favorite sports team", "Current income, expenses, assets, liabilities, and emergency fund position", "Their age alone", "Their social media activity"],
    1,
    "Financial position requires complete data: income sources, fixed/variable expenses, assets (savings, investments, property), debts, and emergency reserves."
  ),

  q("fpa-ch1-analysis-12", "cisi-fpa", "fpa-ch1", "1.5", "Financial Analysis", "planning", "medium",
    "A client's income is £60k, essential expenses £2,500/month, discretionary spending £800/month. What is their annual cash surplus for planning?",
    ["£60,000", "£39,600 (60k - (2,500+800) x 12)", "£30,000", "£0"],
    1,
    "Annual income £60k; monthly expenses = (£2,500 + £800) = £3,300 = £39,600/year. Surplus = £60k - £39.6k = £20.4k available for savings/investments."
  ),

  q("fpa-ch1-analysis-13", "cisi-fpa", "fpa-ch1", "1.5", "Financial Analysis", "planning", "hard",
    "How do time value of money calculations help financial planning?",
    ["They don't matter", "They show how current savings grow over time, allowing advisers to model whether targets will be met and how much to save annually", "Only for accountants", "All money is worth the same over time"],
    1,
    "TVM shows that £1 today invested at 5% becomes £1.63 in 10 years. This helps advisers calculate: Will £20k/year savings reach a £500k retirement goal in 20 years?"
  ),

  q("fpa-ch1-recommendation-11", "cisi-fpa", "fpa-ch1", "1.6", "Recommendations", "planning", "easy",
    "What should a recommendation always address?",
    ["Only investment funds", "How the recommendation meets client objectives, suitability, costs, and timescale", "Only tax efficiency", "Only the adviser's preferences"],
    1,
    "Recommendations must clearly link to client goals, explain suitability, disclose all costs, and outline the timeline for implementation and expected outcomes."
  ),

  q("fpa-ch1-recommendation-12", "cisi-fpa", "fpa-ch1", "1.6", "Recommendations", "planning", "medium",
    "A recommendation suggests moving a client into a higher-risk portfolio. What must be clearly documented?",
    ["Nothing - if it's higher risk, move forward", "Why the higher risk is suitable (e.g., longer time horizon), how it aligns with objectives, costs, and client acknowledgment of increased volatility", "Only the fund names", "Only positive historical returns"],
    1,
    "Higher risk recommendations need robust justification. Documentation should explain: client capacity, willingness, time horizon, objective alignment, and that client understands volatility."
  ),

  q("fpa-ch1-recommendation-13", "cisi-fpa", "fpa-ch1", "1.6", "Recommendations", "planning", "hard",
    "Why must advisers consider the total cost impact (fees + fund charges) in recommendations?",
    ["Costs are irrelevant", "High total costs (>1.5% annually) can erode 20-30% of long-term returns, significantly impacting goal achievement", "Clients don't care about costs", "Adviser fees are hidden"],
    1,
    "Example: £100k invested 30 years at 6% gross = £574k. At 0.5% costs = £517k. At 1.5% costs = £434k. Cost difference = £83k (14% of final value). Cost transparency is crucial."
  ),

  q("fpa-ch1-tax-11", "cisi-fpa", "fpa-ch1", "1.7", "Tax Efficiency", "planning", "easy",
    "What is the primary tax advantage of pension contributions?",
    ["No advantage", "Contributions receive income tax relief (20-45% depending on rate) and fund grows tax-free until retirement", "Pensions are heavily taxed", "Only the wealthy benefit"],
    1,
    "A £10k pension contribution costs a basic rate taxpayer only £8k after tax relief. The fund then grows tax-free for decades, creating substantial long-term benefit."
  ),

  q("fpa-ch1-tax-12", "cisi-fpa", "fpa-ch1", "1.7", "Tax Efficiency", "planning", "medium",
    "A client has £50k in savings earning interest and £20k in a general account with capital gains. How can tax efficiency be improved?",
    ["No changes needed", "Maximize ISA allowance (£20k/year) and use Personal Savings Allowance and CGT exemption (£3k annual), consider spousal transfers to use lower-rate allowances", "Move everything to cash", "Ignore tax entirely"],
    1,
    "Tax-efficient planning uses ISAs (tax-free), PSA (savings interest), and CGT exemptions. Couples can split assets to use both allowances, potentially saving thousands annually."
  ),

  q("fpa-ch1-tax-13", "cisi-fpa", "fpa-ch1", "1.7", "Tax Efficiency", "planning", "hard",
    "Why might a couple benefit from income shifting where one partner is significantly higher-earning?",
    ["They shouldn't do this", "If one partner earns £80k (40% tax) and the other earns £20k (20% tax), transferring income to the lower earner can reduce overall tax by thousands", "All income shifting is illegal", "Tax rates don't differ by income"],
    1,
    "Marriage allowance, spousal transfers, and income splitting strategies can minimize household tax. Example: spouse earning £20k to £30k saves 20% tax on £10k (£2k savings)."
  ),

  // CHAPTER 2: Financial Protection - Additional ~30 questions (total 100)
  q("fpa-ch2-protection-needs-11", "cisi-fpa", "fpa-ch2", "2.1", "Protection Needs", "protection", "easy",
    "What is the first step in protection planning?",
    ["Recommend insurance products immediately", "Assess family needs: dependents, income replacement, mortgage, essential expenses, and emergency fund", "Sell the most expensive policy", "Skip fact-finding"],
    1,
    "Protection planning begins with understanding: How many dependents? What income needs to be replaced? What debts exist? This drives coverage amounts."
  ),

  q("fpa-ch2-protection-needs-12", "cisi-fpa", "fpa-ch2", "2.1", "Protection Needs", "protection", "medium",
    "A 40-year-old earner with £50k income, 2 children, and £200k mortgage. Estimate their life cover need.",
    ["£0", "£300k-£400k (mortgage ~£200k + 10 years income replacement ~£300k, less existing savings)", "£1 million", "£50k"],
    1,
    "Coverage = Mortgage + Income gap + Final expenses. In this case: £200k + (£50k x 5-7 yrs saved) + £10k costs = roughly £300-350k as a minimum."
  ),

  q("fpa-ch2-protection-needs-13", "cisi-fpa", "fpa-ch2", "2.1", "Protection Needs", "protection", "hard",
    "Why is life cover advice critical even for those without obvious dependents?",
    ["It's not critical", "Even single people may have aging parents who depend on them, mortgages to clear, or final expenses; cover ensures loved ones aren't burdened", "Single people need no insurance", "Life cover is only for families"],
    1,
    "A single person with a £300k mortgage or helping aging parents might need £200-300k cover to ensure these obligations are met. Protection isn't only for those with children."
  ),

  q("fpa-ch2-life-assurance-11", "cisi-fpa", "fpa-ch2", "2.3", "Life Assurance Types", "protection", "easy",
    "What is term life assurance?",
    ["Insurance that lasts your whole life", "Coverage for a fixed term (e.g., 20 years) that pays if death occurs during that period; lowest cost option", "Insurance with no benefits", "Coverage that never ends"],
    1,
    "Term insurance: cheapest, covers specific period, no surrender value. Good for mortgages and income replacement. Expires at end of term."
  ),

  q("fpa-ch2-life-assurance-12", "cisi-fpa", "fpa-ch2", "2.3", "Life Assurance Types", "protection", "medium",
    "When comparing term and whole-of-life assurance, what is the key difference?",
    ["Term is cheaper and covers a fixed period; whole-of-life is more expensive but covers entire lifetime and builds cash value", "Term lasts longer", "Whole-of-life is always cheaper", "No difference in cost"],
    1,
    "Term: £200-300k for 20 years = ~£20/month. Whole-of-life: same cover = ~£150+/month but guaranteed payout whenever death occurs and cash value grows."
  ),

  q("fpa-ch2-life-assurance-13", "cisi-fpa", "fpa-ch2", "2.3", "Life Assurance Types", "protection", "hard",
    "Why might someone choose universal life over whole-of-life assurance?",
    ["They shouldn't", "UL offers flexibility: adjustable premiums, reviewable cover, and lower ongoing costs than traditional whole-of-life, though with more complexity", "UL is always cheaper", "WOL is always superior"],
    1,
    "UL advantages: flexible premiums, adjustable benefit, lower initial costs. Drawbacks: premiums can increase if fund underperforms. Choice depends on client flexibility needs."
  ),

  q("fpa-ch2-income-protection-11", "cisi-fpa", "fpa-ch2", "2.5", "Income Protection", "protection", "easy",
    "What does income protection insurance do?",
    ["Covers life insurance needs", "Replaces income if unable to work due to illness or injury, typically paying 50-70% of salary", "Covers home maintenance", "Protects investments only"],
    1,
    "Income protection bridges the gap between sick pay and full salary if unable to work. Example: £2,000/month salary, policy pays £1,200/month if disabled."
  ),

  q("fpa-ch2-income-protection-12", "cisi-fpa", "fpa-ch2", "2.5", "Income Protection", "protection", "medium",
    "An employee with 6 months' sick pay from employer. Why might they still need income protection insurance?",
    ["They don't need it", "After 6 months of sick pay, they lose income; if unable to work long-term, bills and mortgage continue. IP covers the gap", "Employer benefits last forever", "IP is only for self-employed"],
    1,
    "Sick pay eventually ends. For disability lasting 12 months+, having IP covering 60% salary prevents forced asset sales or debt accumulation."
  ),

  q("fpa-ch2-income-protection-13", "cisi-fpa", "fpa-ch2", "2.5", "Income Protection", "protection", "hard",
    "How does deferred period affect income protection premiums?",
    ["Deferred period has no impact", "Longer deferral (e.g., 26 weeks vs. 13 weeks) reduces premiums since insurer pays out less frequently; choice depends on emergency fund", "Longer deferral increases premiums", "Deferral doesn't affect cost"],
    1,
    "13-week deferral = higher premium but faster payout. 26-week deferral = lower premium but client must have 6-month reserves. Choice depends on financial resilience."
  ),

  q("fpa-ch2-critical-illness-11", "cisi-fpa", "fpa-ch2", "2.6", "Critical Illness", "protection", "easy",
    "What is critical illness cover?",
    ["Life insurance", "Lump sum payment if diagnosed with serious illness (cancer, heart attack, stroke, etc.) while insured", "Income protection only", "Not important"],
    1,
    "CI cover pays lump sum on diagnosis of covered illness. Useful to pay off mortgage or fund care during recovery. Distinct from life insurance."
  ),

  q("fpa-ch2-critical-illness-12", "cisi-fpa", "fpa-ch2", "2.6", "Critical Illness", "protection", "medium",
    "A client with a £250k mortgage considers combining term life and critical illness cover. What is the advantage?",
    ["No advantage", "If critical illness occurs before death, lump sum can clear the mortgage; if death occurs, life assurance does. Dual protection is cost-efficient", "Only one is needed", "They conflict with each other"],
    1,
    "Combined cover: If diagnosed with cancer, CI pays £250k to clear mortgage and fund recovery. If dies, life cover pays dependents. Cost-effective dual protection."
  ),

  q("fpa-ch2-critical-illness-13", "cisi-fpa", "fpa-ch2", "2.6", "Critical Illness", "protection", "hard",
    "Why are critical illness exclusions important to understand?",
    ["They don't matter", "Policies exclude pre-existing conditions and certain diagnoses; some only cover specific conditions. Clients must understand what is/isn't covered", "All illnesses are covered", "Exclusions are hidden"],
    1,
    "CI policy may exclude: pre-existing cancer, genetic conditions, lifestyle-related illnesses. If client's main health risk isn't covered, CI has little value."
  ),

  q("fpa-ch2-mortgage-protection-11", "cisi-fpa", "fpa-ch2", "2.4", "Mortgage Protection", "protection", "easy",
    "What is mortgage protection insurance?",
    ["Protects the lender", "Decreasing term life assurance linked to mortgage; benefit decreases as mortgage balance falls; pays off debt if borrower dies", "Protects savings", "Not necessary"],
    1,
    "Mortgage protection: benefit = outstanding mortgage balance at any time. As mortgage reduces, so does benefit. Death triggers lump sum to clear debt."
  ),

  q("fpa-ch2-mortgage-protection-12", "cisi-fpa", "fpa-ch2", "2.4", "Mortgage Protection", "protection", "medium",
    "Compare level term life vs. mortgage protection for a £200k mortgage over 25 years.",
    ["Same thing", "Level term pays £200k regardless of mortgage balance (more flexible); mortgage protection benefit decreases with mortgage (matches debt, less flexible but sufficient for mortgage purpose)", "Mortgage protection is always better", "Neither is adequate"],
    1,
    "Level term: £200k fixed for 25 years, can be used for income replacement or other debts. Mortgage protection: benefit decreases with loan, specifically designed for mortgage payoff."
  ),

  q("fpa-ch2-mortgage-protection-13", "cisi-fpa", "fpa-ch2", "2.4", "Mortgage Protection", "protection", "hard",
    "Why might level term be preferable to mortgage protection?",
    ["It's not", "Level term doesn't change if circumstances change (additional debt, downsizing); mortgage protection benefit must decrease to match lower mortgage balance", "Mortgage protection is always superior", "They're identical"],
    1,
    "Scenario: Client takes £50k personal loan in year 5 but has mortgage protection. Benefit has decreased below £150k but £50k debt remains uncovered. Level term would maintain flexibility."
  ),

  q("fpa-ch2-business-protection-11", "cisi-fpa", "fpa-ch2", "2.2", "Business Protection", "protection", "easy",
    "What is key person insurance?",
    ["Insurance for everyone", "Life insurance on a critical employee/owner; benefit pays business if that person dies, covering lost profits and replacement costs", "Insurance for keys to the office", "Not applicable to small firms"],
    1,
    "Example: Sales manager generates £500k revenue. Death creates loss. £300k policy covers 12 months' lost profit while finding replacement."
  ),

  q("fpa-ch2-business-protection-12", "cisi-fpa", "fpa-ch2", "2.2", "Business Protection", "protection", "medium",
    "A partnership has two equal partners. Partner A earns £80k, Partner B earns £120k. What is the key person cover need?",
    ["£0", "Partner B: ~£200-240k (2-3 years' lost profit). Partner A: ~£150-180k. Amounts reflect earning capacity and replacement difficulty", "£500k each", "Not applicable"],
    1,
    "Higher-earning/more critical partner needs higher cover. Amount reflects: replacement cost, profit loss, training time. Regular review ensures cover matches current value."
  ),

  q("fpa-ch2-business-protection-13", "cisi-fpa", "fpa-ch2", "2.2", "Business Protection", "protection", "hard",
    "Why is shareholder protection insurance different from key person insurance?",
    ["It's the same", "Key person covers business loss; shareholder protection covers buyout of deceased shareholder's shares, ensuring remaining shareholders can purchase and business continuity is protected", "Shareholder protection is inferior", "Only one is needed"],
    1,
    "Shareholder protection: If Partner A dies, their £500k business share passes to heirs. Partner B can't afford to buy heirs out. Insurance funds the buyout."
  ),

  q("fpa-ch2-pmi-11", "cisi-fpa", "fpa-ch2", "2.7", "Private Medical Insurance", "protection", "easy",
    "What does private medical insurance typically cover?",
    ["All medical costs forever", "Private hospital and specialist treatment, diagnostic tests, and therapies; usually excludes pre-existing conditions and chronic illnesses long-term", "All dental work", "Completely unlimited"],
    1,
    "PMI covers: private hospital stays, specialists, diagnostics. Exclusions: pre-existing conditions, chronic disease management, routine dental/optical."
  ),

  q("fpa-ch2-pmi-12", "cisi-fpa", "fpa-ch2", "2.7", "Private Medical Insurance", "protection", "medium",
    "An employer offers group PMI. Why is this often better value than individual PMI?",
    ["No difference", "Group premiums are lower (employer contributes, better rates due to bulk), wider coverage, and no underwriting barriers for employees", "Individual is always cheaper", "Group is always more expensive"],
    1,
    "Group PMI: employer pays portion, lower administrative costs, easier enrollment. Individual PMI: full cost, stricter underwriting, higher premiums for same cover."
  ),

  q("fpa-ch2-pmi-13", "cisi-fpa", "fpa-ch2", "2.7", "Private Medical Insurance", "protection", "hard",
    "What is the relationship between NHS waiting lists and PMI demand?",
    ["No relationship", "Long NHS waiting lists drive PMI demand as patients seek faster private treatment; economic downturns reduce PMI take-up due to cost", "PMI demand is constant", "NHS waiting lists don't affect PMI"],
    1,
    "During NHS delays, PMI uptake increases (clients pay for faster access). During recessions, PMI lapses (affordability). This cyclical relationship shapes product design."
  ),

  q("fpa-ch2-ltc-11", "cisi-fpa", "fpa-ch2", "2.8", "Long-Term Care", "protection", "easy",
    "What is long-term care insurance?",
    ["Life insurance", "Coverage for cost of care (nursing home, home care) if unable to perform daily activities (ADLs) due to age, illness, or disability", "Health insurance", "Only for wealthy people"],
    1,
    "LTC: pays for care costs if unable to bathe, dress, manage continence independently. £3k-5k/month for care is devastating without insurance."
  ),

  q("fpa-ch2-ltc-12", "cisi-fpa", "fpa-ch2", "2.8", "Long-Term Care", "protection", "medium",
    "A 60-year-old with £500k assets and £2k monthly income needs care costing £4k/month. What LTC need exists?",
    ["None - they have assets", "Significant need. £4k/month care costs £48k annually. Assets deplete in 10 years. LTC insurance protects remaining wealth for heirs", "Full coverage needed", "No insurance possible"],
    1,
    "Assets deplete within 10 years at £48k/year care costs. LTC insurance (£2-3k annual premium) protects remaining £300k+ for inheritance instead of care costs."
  ),

  q("fpa-ch2-ltc-13", "cisi-fpa", "fpa-ch2", "2.8", "Long-Term Care", "protection", "hard",
    "Why have LTC insurance sales been challenging in recent years?",
    ["High cost (~£2-4k annually), uncertain trigger events (people don't claim), and long-term premium commitment make LTC unpopular; alternatives like equity release or savings often preferred", "No challenges exist", "LTC is booming", "Everyone buys LTC"],
    1,
    "LTC barriers: Clients hope they won't need care (denial). Insurers struggled with claim definitions. Equity release offers alternative for older people with property wealth."
  ),

  q("fpa-ch2-income-vs-asp-11", "cisi-fpa", "fpa-ch2", "2.5", "Income vs. ASU", "protection", "medium",
    "What is the key difference between income protection and accident, sickness, unemployment (ASU) insurance?",
    ["They're identical", "Income protection covers illness/injury only; ASU also covers unemployment, but typically lower benefit and stricter conditions", "ASU covers more conditions", "Both are the same product"],
    1,
    "IP: covers ill health/injury, typically 60% salary. ASU: also covers unemployment but usually 50% salary, stricter underwriting, and higher excess for joblessness."
  ),

  q("fpa-ch2-income-vs-asp-12", "cisi-fpa", "fpa-ch2", "2.5", "Income vs. ASU", "protection", "hard",
    "A self-employed consultant earning £80k annually should prioritize which protection?",
    ["ASU only", "Income protection focused on illness/injury (most relevant risk for self-employed); unemployment portion less relevant since self-employed can't claim jobseeker", "ASU is sufficient", "Neither is necessary"],
    1,
    "Self-employed risk is mainly illness/disability (no sick pay from employer). ASU unemployment benefit irrelevant. Focus on quality income protection covering illness/injury."
  ),

  q("fpa-ch2-trust-protection-11", "cisi-fpa", "fpa-ch2", "2.9", "Trusts for Protection", "protection", "medium",
    "Why might a life assurance policy be placed in trust?",
    ["No reason", "Avoids probate delays, ensures proceeds bypass estate for IHT purposes, and guarantees payments go directly to beneficiaries, not heirs who may have creditors", "Trusts are complex", "No tax benefit"],
    1,
    "Policy in trust: proceeds paid directly to beneficiaries within days, avoiding £200k+ probate delays. Also may avoid £325k IHT threshold if structured correctly."
  ),

  q("fpa-ch2-trust-protection-12", "cisi-fpa", "fpa-ch2", "2.9", "Trusts for Protection", "protection", "hard",
    "A parent wants £200k life insurance to go to minor children but not to the ex-spouse. How can this be achieved?",
    ["No way to prevent ex getting money", "Place policy in trust for minor children via trustees; specifies beneficiaries and trustee management until adulthood, excluding ex-spouse regardless of marital status", "Put policy in ex's name", "Withdraw the policy"],
    1,
    "Trust structure: Policy in trust for named children with independent trustee. Ex-spouse excluded completely. Trustee manages funds for children's benefit until age 18+."
  ),

  // CHAPTER 3: Retirement Planning - Additional ~94 questions (total 120)
  q("fpa-ch3-state-pension-11", "cisi-fpa", "fpa-ch3", "3.2", "State Pension", "retirement", "easy",
    "What is the new State Pension eligibility requirement introduced in April 2016?",
    ["30 qualifying years", "35 qualifying years of National Insurance contributions for full new State Pension", "20 qualifying years", "No requirement"],
    1,
    "New SP (from April 2016): 35 qualifying years needed for full amount. Those reaching SPA before April 2016 have different rules (BSP/ASP)."
  ),

  q("fpa-ch3-state-pension-12", "cisi-fpa", "fpa-ch3", "3.2", "State Pension", "retirement", "medium",
    "A client has 30 qualifying years of NI. Under the new State Pension rules, what percentage of full pension will they receive?",
    ["100%", "Approximately 86% (30/35 of full amount); they need 35 years for 100%", "50%", "0% - need all 35 years"],
    1,
    "New SP is proportional. 30/35 years = 30÷35 = 85.7% of full pension. Deferring or paying voluntary contributions can improve this."
  ),

  q("fpa-ch3-state-pension-13", "cisi-fpa", "fpa-ch3", "3.2", "State Pension", "retirement", "hard",
    "How does deferring State Pension affect the amount received?",
    ["No impact - same amount whenever claimed", "Deferring increases payment by approximately 1% per 9 weeks (5.8% per year); deferral can continue for years, significantly increasing lifetime benefit", "Deferral reduces the amount", "Deferral has no financial benefit"],
    1,
    "Defer 3 years: receive ~17-18% more per month for life. For someone living to 90+, deferral is mathematically superior. Strategy depends on longevity assumptions."
  ),

  q("fpa-ch3-sp-age-11", "cisi-fpa", "fpa-ch3", "3.2", "State Pension Age", "retirement", "easy",
    "What is the current State Pension age (SPA)?",
    ["60 for men, 60 for women", "66 for both men and women (rising to 67 by 2028)", "65 for all", "Varies by individual"],
    1,
    "SPA is 66 (as of 2020). Further increases: 67 by 2028, 68 potentially by 2046. Regular reviews adjust SPA based on life expectancy."
  ),

  q("fpa-ch3-sp-age-12", "cisi-fpa", "fpa-ch3", "3.2", "State Pension Age", "retirement", "medium",
    "A woman born in January 1960 has what State Pension age?",
    ["60", "66 (all women born 1953-1977 have SPA between 60-67)", "65", "62"],
    1,
    "Women born 1953-1955: SPA 60-62. Born 1956-1960: SPA 62-66. Born 1961-1977: SPA 66. Men born 1951+: SPA 65+. Transition was phased."
  ),

  q("fpa-ch3-sp-age-13", "cisi-fpa", "fpa-ch3", "3.2", "State Pension Age", "retirement", "hard",
    "Why have State Pension age increases created planning challenges?",
    ["No challenges", "People planning to retire at 60-65 now must work longer; income needs change, health may impact work ability, and differential SPAs for partners create complexity", "SPA is static", "SPA has no impact on planning"],
    1,
    "Someone planning to retire at 60 but now SPA is 66 faces 6-year gap. Must bridge income via drawdown, flexible employment, or extended savings. Creates significant planning strain."
  ),

  q("fpa-ch3-auto-enrolment-11", "cisi-fpa", "fpa-ch3", "3.3", "Auto-Enrolment", "retirement", "easy",
    "What are the current auto-enrolment contribution rates?",
    ["0%", "Employer 3% minimum (rising to 5%), employee 5% (rising to 8%); combined minimum 8-13%", "10% minimum", "15% minimum"],
    1,
    "Minimum staging: 2024 employer 3%+employee 5%=8%. 2025 rising to 5%+5%=10%. Expected to reach 3%+8%+1%(government) = 12% by 2026."
  ),

  q("fpa-ch3-auto-enrolment-12", "cisi-fpa", "fpa-ch3", "3.3", "Auto-Enrolment", "retirement", "medium",
    "An employer with 50 employees must auto-enrol those over age 22 earning >£10,000. What is the adviser's role?",
    ["No role - employer handles alone", "Advise employees on contribution levels, investment options, and whether to increase beyond minimum (especially if self-enrolled or have other pensions)", "Encourage everyone to opt out", "Force employees to maximize"],
    1,
    "Advisers help employees understand: minimum contributions may be inadequate for retirement. Increasing to 10-12% (still matched by employer) significantly improves outcomes."
  ),

  q("fpa-ch3-auto-enrolment-13", "cisi-fpa", "fpa-ch3", "3.3", "Auto-Enrolment", "retirement", "hard",
    "Why has auto-enrolment improved retirement savings despite modest initial rates?",
    ["It hasn't helped", "Default enrollment removes opt-in friction; behavioral economics shows defaults are sticky (few opt-out); staged increases boost savings without shocking employees; combines employer match (incentive) and growth compounding", "Rates are too high", "Auto-enrolment reduces savings"],
    1,
    "Auto-enrolment advantage: 60% participation (default) vs. ~35% with voluntary pension. Staged increases (3%→5%→8%) feel gradual. Compound growth over 40+ years substantial."
  ),

  q("fpa-ch3-db-vs-dc-11", "cisi-fpa", "fpa-ch3", "3.4", "DB vs. DC Schemes", "retirement", "easy",
    "What is the main difference between DB and DC pension schemes?",
    ["No difference", "DB: benefit determined by salary/service, guaranteed by employer; DC: benefit determined by contributions/investment growth, no guarantee", "DC guarantees income", "Both are identical"],
    1,
    "DB: £30k/year guaranteed at retirement. DC: £500k pot at retirement, uncertain income depending on withdrawals and investments."
  ),

  q("fpa-ch3-db-vs-dc-12", "cisi-fpa", "fpa-ch3", "3.4", "DB vs. DC Schemes", "retirement", "medium",
    "An employee offered a choice between DB and DC schemes. What is the key advantage of DB?",
    ["DC is better", "DB provides income certainty (guaranteed pension regardless of market returns or longevity), employer bears investment/longevity risk, no decisions needed at retirement", "DC is more secure", "No advantage"],
    1,
    "DB advantage: certainty. If promised £20k/year pension, that's guaranteed for life even if markets crash. Employee doesn't worry about investment performance."
  ),

  q("fpa-ch3-db-vs-dc-13", "cisi-fpa", "fpa-ch3", "3.4", "DB vs. DC Schemes", "retirement", "hard",
    "Why have many employers closed DB schemes and moved to DC?",
    ["DB is superior", "DB creates unfunded liabilities (promises exceed contributions); regular valuations show shortfalls; employer contributions to fund deficits strain finances; DC transfers risk to employees (they handle investment/longevity)", "DB is cheaper", "No reason to switch"],
    1,
    "DB issue: £1m scheme deficit requires employer funding. With longer life expectancy, deficits grow. DC avoids this: contribution is set, no shortfall risk."
  ),

  q("fpa-ch3-annual-allowance-11", "cisi-fpa", "fpa-ch3", "3.5", "Annual Allowance", "retirement", "easy",
    "What is the pension annual allowance?",
    ["£100,000", "£60,000 - the maximum tax-free pension input per tax year; exceeding this triggers 40% tax charge", "£50,000", "£200,000"],
    1,
    "Annual allowance: £60,000/year. Exceed it and 40% tax on excess is charged in that tax year. Must monitor especially if DC + DB + personal pensions."
  ),

  q("fpa-ch3-annual-allowance-12", "cisi-fpa", "fpa-ch3", "3.5", "Annual Allowance", "retirement", "medium",
    "A client receives £80k DB pension contribution + £20k employer DC contribution in one year. What is the tax consequence?",
    ["No issue", "Total £100k exceeds £60k AA. £40k excess taxed at 40% = £16k charge. Client must pay tax or contribution reduction ordered", "No charge possible", "Full contribution allowed"],
    1,
    "AA applied to DB value (as pension input value) + DC contributions. £80k + £20k = £100k, exceeding £60k by £40k. 40% charge = £16k tax on excess."
  ),

  q("fpa-ch3-annual-allowance-13", "cisi-fpa", "fpa-ch3", "3.5", "Annual Allowance", "retirement", "hard",
    "How does the Tapered Annual Allowance (TAA) affect high earners?",
    ["No impact", "For earnings >£260k, AA tapers down from £60k to £10k; each £2 of excess earnings reduces AA by £1; high earners can breach AA even with modest contributions", "TAA increases AA", "Only affects low earners"],
    1,
    "Example: Earning £300k means AA is approx £30k (£60k - (£300k-£260k)/2). £50k pension contribution triggers £16k charge. Creates complex planning for senior executives."
  ),

  q("fpa-ch3-mpaa-11", "cisi-fpa", "fpa-ch3", "3.5", "MPAA", "retirement", "easy",
    "What is the Minimum Pension Allowance (MPA)?",
    ["There is no MPA", "The MPA (£10,000) allows small amounts of pension contribution without triggering AA in low-contribution years; protects those taking pension holidays", "Same as annual allowance", "£60,000"],
    1,
    "MPAA: £10,000 floor. If pension input <£10k in a year, no contribution to AA. Protects those with variable income or taking breaks from saving."
  ),

  q("fpa-ch3-mpaa-12", "cisi-fpa", "fpa-ch3", "3.5", "MPAA", "retirement", "medium",
    "A self-employed person has variable income. In Year 1, contributions £8k; Year 2, contributions £65k. How does MPAA apply?",
    ["£65k triggers £5k charge", "Year 1: £8k input <£10k MPAA floor, no AA used. Year 2: £65k exceeds £60k AA by £5k, after carrying forward Year 1 (which used none of allowance)", "Both years exceed", "No allowance applied"],
    1,
    "MPAA allows small-contribution years to use £10k without touching AA. This carries forward. Self-employed with variable income can contribute modestly in down years penalty-free."
  ),

  q("fpa-ch3-mpaa-13", "cisi-fpa", "fpa-ch3", "3.5", "MPAA", "retirement", "hard",
    "How does AA carry-forward help high-earning employees?",
    ["No carry-forward exists", "Unused AA from past 3 years carries forward; high earner with low contributions in one year can catch up in high-earning years, utilizing carried-forward allowances", "Carry-forward increases tax", "Only available to self-employed"],
    1,
    "Example: Year 1 (contribution £30k, AA unused £30k), Year 2 (contribution £100k but £60k AA + £30k carry-forward = £90k allowable). Carry-forward prevents £10k charge."
  ),

  q("fpa-ch3-lta-11", "cisi-fpa", "fpa-ch3", "3.5", "Lifetime Allowance", "retirement", "medium",
    "What happened to the Lifetime Allowance in April 2023?",
    ["No change", "LTA was abolished; previously limited total pension savings to ~£1m, tax-charged excess at 55%; removal allows unlimited saving without LTA penalty", "LTA increased", "LTA reduced"],
    1,
    "LTA abolished April 2023. Previously, £1m pension pot at retirement triggered 55% tax on excess. Removal benefits high savers dramatically, especially executives."
  ),

  q("fpa-ch3-lta-12", "cisi-fpa", "fpa-ch3", "3.5", "Lifetime Allowance", "retirement", "hard",
    "How did LTA abolition change planning for executive pensions?",
    ["No impact", "Executives previously hitting LTA (£1m+) now can save unlimited amounts; AA (£60k/year) becomes primary control; creates opportunity to accelerate late-career savings", "LTA still limits people", "Made planning harder"],
    1,
    "Executive aged 55 with £2m pension would previously hit LTA at £1m (£1m taxed at 55% = £550k loss). LTA abolition removes penalty, allows continued accumulation."
  ),

  q("fpa-ch3-tax-relief-11", "cisi-fpa", "fpa-ch3", "3.6", "Tax Relief", "retirement", "easy",
    "How does pension tax relief work for a basic rate taxpayer?",
    ["20% bonus", "Basic rate (20%) tax relief: £8,000 contribution costs taxpayer only £6,400 after relief; government tops up £1,600", "No relief available", "40% relief"],
    1,
    "Basic relief: £10k gross contribution, taxpayer pays £8k, government adds £2k. Net result: £10k pension, £8k cost."
  ),

  q("fpa-ch3-tax-relief-12", "cisi-fpa", "fpa-ch3", "3.6", "Tax Relief", "retirement", "medium",
    "How does higher rate tax relief differ between basic and higher rate taxpayers?",
    ["Same relief", "Basic rate: 20% relief (government adds 25%); higher rate: 40% relief (government adds 50%); higher rate must claim additional relief via self-assessment", "Higher rate gets less", "Higher rate automatic"],
    1,
    "Basic: £8k contribution = £10k pension (net relief 20%). Higher rate (40%): £8k contribution = £10k pension + extra £2k relief claimed on tax return = total 40% relief."
  ),

  q("fpa-ch3-tax-relief-13", "cisi-fpa", "fpa-ch3", "3.6", "Tax Relief", "retirement", "hard",
    "Why do some high earners struggle to get full tax relief on pension contributions?",
    ["They can always claim relief", "High earners may be restricted by AA (£60k or tapered to £10k); contributions above allowance trigger 40% tax charge, making relief inaccessible; HICBC/income withdrawal rules also restrict relief", "No restrictions exist", "Relief is unlimited"],
    1,
    "High earner earning £300k: AA ~£30k. Contributing £50k triggers £8k charge. Can't claim relief on £20k excess. This creates 'relief restriction' for wealthy savers."
  ),

  q("fpa-ch3-pension-death-11", "cisi-fpa", "fpa-ch3", "3.7", "Pension Death Benefits", "retirement", "easy",
    "What happens to a pension pot if the member dies before age 75?",
    ["Pot is lost", "Pot is tax-free if paid within 2 years of death; can go to beneficiaries tax-free or purchase an annuity; inheritance opportunity", "Full tax charged", "Government keeps it"],
    1,
    "Death before 75: TAX-FREE death benefits. Pass £500k to heirs tax-free. After 75: benefits taxed at member's marginal rate (40% for higher rate)."
  ),

  q("fpa-ch3-pension-death-12", "cisi-fpa", "fpa-ch3", "3.7", "Pension Death Benefits", "retirement", "medium",
    "A member aged 60 with £400k pension dies. What's the tax treatment for beneficiaries?",
    ["Taxed as income", "Tax-free if paid within 2 years of death; typically paid as lump sum to beneficiaries or via drawdown; no income tax or IHT", "Taxed at 40%", "Partially taxed"],
    1,
    "Before 75 death: tax-free. £400k to family/beneficiaries with no income tax, no IHT. This makes pensions powerful inheritance tool."
  ),

  q("fpa-ch3-pension-death-13", "cisi-fpa", "fpa-ch3", "3.7", "Pension Death Benefits", "retirement", "hard",
    "Why is death before 75 such a tax-efficient outcome compared to death after 75?",
    ["No difference", "Before 75: benefits tax-free (£1m inheritance = £1m to heirs). After 75: benefits taxed at 40% (£1m = £600k after tax); avoiding post-75 death saves 40% tax", "After 75 better", "Age irrelevant"],
    1,
    "Death age 74: £1m pension = £1m tax-free to family. Death age 76: same £1m = £600k (after 40% tax) to family. £400k difference."
  ),

  q("fpa-ch3-pension-sharing-11", "cisi-fpa", "fpa-ch3", "3.8", "Pension Sharing Divorce", "retirement", "medium",
    "What is pension sharing on divorce?",
    ["One spouse loses pension", "Court order transfers percentage of pension between spouses; spouse gets own QDRO (Qualified Domestic Relations Order) to access share independently", "Pension unaffected by divorce", "Equal split always"],
    1,
    "Example: Wife has £600k pension. Divorce court orders 50% sharing (£300k) to husband. Husband gets separate QDRO to manage own £300k fund independently."
  ),

  q("fpa-ch3-pension-sharing-12", "cisi-fpa", "fpa-ch3", "3.8", "Pension Sharing Divorce", "retirement", "hard",
    "How does pension sharing differ from pension attachment (earmarking)?",
    ["Same thing", "Sharing: pension divided, other spouse gets independent fund. Earmarking: original member keeps fund but portion designated for other spouse at retirement (out of date)", "Both are current", "Earmarking is better"],
    1,
    "Sharing is modern (post-2000). Earmarking was older system (pre-2000) where fund stayed with original owner and portion paid to ex at retirement. Sharing preferred as cleaner split."
  ),

  q("fpa-ch3-auto-enrol-opt-out-11", "cisi-fpa", "fpa-ch3", "3.3", "Auto-Enrolment Opt-Out", "retirement", "hard",
    "Can an employee opt out of auto-enrolment pension contributions, and what happens?",
    ["No opt-out possible", "Yes, but opt-out triggers re-enrolment within 3 years; employer must re-enroll automatically unless employee opts out again. Repeated opt-outs risk withdrawal", "Opt-out is permanent", "No re-enrolment required"],
    1,
    "Opt-out is allowed but temporary. 3 years later, employer re-enrolls automatically. This 'sticky default' increases long-term pension coverage even among reluctant savers."
  ),

  q("fpa-ch3-pension-income-11", "cisi-fpa", "fpa-ch3", "3.9", "Pension Income Strategy", "retirement", "medium",
    "A retiree has £500k DC pension, £150k state pension value. What income options exist?",
    ["Annuity only", "Annuity (converts to guaranteed income), drawdown (flexible withdrawals), or hybrid; choice depends on risk tolerance, longevity expectations, and income needs", "Drawdown only", "No options"],
    1,
    "Annuity: £500k buys ~£15-17k/year guaranteed for life (age 65, current rates). Drawdown: flexible, keep capital invested, withdraw as needed but investment risk remains."
  ),

  q("fpa-ch3-pension-income-12", "cisi-fpa", "fpa-ch3", "3.9", "Pension Income Strategy", "retirement", "hard",
    "Why might a retiree aged 65 with £600k pension choose drawdown over annuity?",
    ["Annuity always better", "Drawdown: keep capital invested (growth potential), flexibility to adjust withdrawals, inheritance for heirs if die early; avoids 'use it or lose it' nature of annuity", "Drawdown guarantees income", "Annuity more flexible"],
    1,
    "Drawdown advantages: If die at 75, heirs inherit remaining pot (tax-free). Annuity: if die at 70, heirs get nothing (insurance principle). Drawdown suits those wanting flexibility/inheritance."
  ),

  // CHAPTER 4: Retirement Solutions - Additional ~63 questions (total 80)
  q("fpa-ch4-annuity-types-11", "cisi-fpa", "fpa-ch4", "4.1", "Annuity Types", "solutions", "easy",
    "What is a level annuity?",
    ["Variable income", "Fixed income payment for life, same amount each year; simplest type but purchasing power erodes due to inflation", "Increases annually", "No income"],
    1,
    "Level annuity: £500k buys £15k/year forever (same amount). In 20 years, £15k worth much less (inflation). No adjustment."
  ),

  q("fpa-ch4-annuity-types-12", "cisi-fpa", "fpa-ch4", "4.1", "Annuity Types", "solutions", "medium",
    "Compare level annuity (£15k/year) vs. escalating annuity (£12k year 1, +3% annually) over 20 years.",
    ["Level is better", "Escalating: Year 1 £12k, Year 20 £19.3k = maintains purchasing power. Level stays £15k but worth less in real terms. Escalating usually better but costs 20-30% more initially", "Both the same", "Escalating worse"],
    1,
    "£15k level doesn't grow; at 3% inflation, year 20 value = £7.8k in today's money. Escalating maintains purchasing power but lower starting income."
  ),

  q("fpa-ch4-annuity-types-13", "cisi-fpa", "fpa-ch4", "4.1", "Annuity Types", "solutions", "hard",
    "Why have annuity rates declined significantly since 2008?",
    ["Rates always decline", "Falling interest rates (base rate dropped from 5% to 0.5%) reduce annuity rates; longer life expectancy increases payout period (insurers pay more years, lower annual rate)", "Rates only increase", "Unrelated factors"],
    1,
    "2008: gilt yield 4%, annuity £500k = £20k/year. 2020: gilt yield 0.3%, same pot = £12k/year. Lower rates + longevity = 40% lower annuity income."
  ),

  q("fpa-ch4-joint-annuity-11", "cisi-fpa", "fpa-ch4", "4.1", "Joint Annuity", "solutions", "medium",
    "What is a joint-life, last-survivor annuity?",
    ["Only one spouse gets payment", "Income continues to survivor after first death; typically at 50-100% of original rate; protects surviving spouse", "Income stops at first death", "Both receive separately"],
    1,
    "Couple: £500k buys joint annuity £12k/year. If husband dies, wife receives £12k/year (or £6k at 50% level) for life. Original £12k stops."
  ),

  q("fpa-ch4-joint-annuity-12", "cisi-fpa", "fpa-ch4", "4.1", "Joint Annuity", "solutions", "hard",
    "A married couple with £500k pension must choose: joint-life annuity (£10k/year) or individual annuity for husband only (£13k/year). What's the trade-off?",
    ["Individual is always better", "Individual: higher income (£13k) but stops at husband's death, leaving wife without income. Joint-life: lower income but survivor protection. Choice depends on wife's financial independence", "Joint always better", "Identical outcomes"],
    1,
    "Individual advantage: £3k more per year (~£60k over 20 years). Disadvantage: wife is vulnerable if husband dies. Joint protects her but costs income. Depends on wife's other assets/income."
  ),

  q("fpa-ch4-guaranteed-period-11", "cisi-fpa", "fpa-ch4", "4.1", "Guaranteed Period", "solutions", "medium",
    "What is a guaranteed period annuity?",
    ["No guarantee", "Annuity guarantees payments for fixed period (e.g., 5, 10 years); if death occurs within period, balance paid to estate; if outlive period, income continues for life", "Guarantee covers everything", "Always 10 years"],
    1,
    "Guaranteed 10-year annuity: If die at year 7, remaining 3 years' payments (£36k) paid to heirs. After year 10, income continues for life if alive."
  ),

  q("fpa-ch4-guaranteed-period-12", "cisi-fpa", "fpa-ch4", "4.1", "Guaranteed Period", "solutions", "hard",
    "Why might someone choose a longer guaranteed period (10 years) over shorter (5 years)?",
    ["Shorter is always better", "Longer period ensures more goes to estate if die early; provides peace of mind that family inheritance isn't lost; trade-off: lower annual income (5-10% less)", "No difference in income", "Same cost"],
    1,
    "10-year guaranteed period: if die at year 3, heirs get 7 years' remaining income. 5-year: heirs get only 2 years'. Longer security for dependents."
  ),

  q("fpa-ch4-drawdown-11", "cisi-fpa", "fpa-ch4", "4.2", "Drawdown", "solutions", "easy",
    "What is flexible access drawdown (FAD)?",
    ["Fixed annuity-like product", "Withdrawal of money from pension pot without annuity; retiree controls timing and amount; remaining fund continues investing", "Annuity replacement", "No flexibility"],
    1,
    "FAD: £500k pot, withdraw £20k year 1, £15k year 2, as needed. Remaining £465k invested, continues growing. Flexibility to adjust withdrawals."
  ),

  q("fpa-ch4-drawdown-12", "cisi-fpa", "fpa-ch4", "4.2", "Drawdown", "solutions", "medium",
    "A client aged 65 with £400k in drawdown withdraws £30k annually. What are the key risks?",
    ["No risks", "Sequencing risk (early market crash can deplete capital faster), longevity risk (live longer than expected, money runs out), inflation risk (fixed withdrawals lose purchasing power)", "Guaranteed income", "Markets irrelevant"],
    1,
    "Scenario: Withdraw £30k/year from £400k. Market crash reduces pot to £300k. Now £30k is 10% of remaining pot (unsustainable). Capital depletes fast."
  ),

  q("fpa-ch4-drawdown-13", "cisi-fpa", "fpa-ch4", "4.2", "Drawdown", "solutions", "hard",
    "How does the 4% rule help guide sustainable drawdown withdrawals?",
    ["No 4% rule", "Withdraw ~4% of starting pot annually (adjusted for inflation); historical data shows 4% sustainable over 30+ years; £400k pot = £16k year 1, adjusted up", "5% always safe", "No limits on withdrawal"],
    1,
    "4% rule: £400k × 4% = £16k sustainable. £20k withdrawal (5%) risks capital depletion. £12k (3%) very conservative. Rule balances income with capital preservation."
  ),

  q("fpa-ch4-ufpls-11", "cisi-fpa", "fpa-ch4", "4.3", "UFPLS", "solutions", "easy",
    "What is an Uncrystallized Funds Pension Lump Sum (UFPLS)?",
    ["Already crystallized pension", "Withdrawal of portion from pot without annuity; first 25% is tax-free, remainder taxed as income; useful for larger lump sum needs", "Only for annuities", "Fully taxed"],
    1,
    "UFPLS £40k withdrawal: £10k tax-free (25%), £30k taxed at income tax rate (20-45% depending on band). Useful alternative to drawdown."
  ),

  q("fpa-ch4-ufpls-12", "cisi-fpa", "fpa-ch4", "4.3", "UFPLS", "solutions", "medium",
    "A basic rate taxpayer withdraws £50k via UFPLS from their pension. What's the tax charge?",
    ["£50k tax-free", "£12.5k tax-free (25%), £37.5k taxed at 20% = £7,500 tax = £42.5k net received", "Full £50k taxed", "£25k tax"],
    1,
    "UFPLS math: £50k withdrawal = £12.5k tax-free + £37.5k taxable. At 20% rate: £37.5k × 20% = £7.5k tax. Net = £42.5k."
  ),

  q("fpa-ch4-ufpls-13", "cisi-fpa", "fpa-ch4", "4.3", "UFPLS", "solutions", "hard",
    "Why might a higher rate taxpayer (40% rate) avoid large UFPLS withdrawals?",
    ["No issue", "Large UFPLS can push income into 40% band; £50k UFPLS = £37.5k taxable at 40% = £15k tax (30% effective rate on withdrawal); better to withdraw via drawdown (can manage within lower rate bands)", "Higher rate should maximize", "No difference in tax"],
    1,
    "Higher rate taxpayer earning £70k (£20k above threshold): Taking £50k UFPLS means £37.5k taxable at 40% on some amounts. Drawdown allows spreading over years, keeping most in 20% band."
  ),

  q("fpa-ch4-small-pots-11", "cisi-fpa", "fpa-ch4", "4.4", "Small Pots", "solutions", "easy",
    "What is a small pot exemption in pension rules?",
    ["Applies to all pensions", "Exemption allows withdrawal of pension <£10,000 as lump sum; 25% tax-free, 75% taxed; useful for small pots from old employer pensions", "No such exemption", "Unlimited amounts"],
    1,
    "Small pot: <£10k total pot from scheme. Withdraw once = £2.5k tax-free, £7.5k taxed. Clean exit."
  ),

  q("fpa-ch4-small-pots-12", "cisi-fpa", "fpa-ch4", "4.4", "Small Pots", "solutions", "medium",
    "A client has four old employer pensions, each £8k (total £32k). How do small pot rules apply?",
    ["Can withdraw all as small pots", "Each pension is separate; can treat each <£10k as small pot if done in isolation; however, if same provider/scheme, they must be treated together (may exceed £10k limit)", "Must treat as one", "No small pots apply"],
    1,
    "Small pot rules: apply per scheme. If four different schemes, each can be small pot (if separately <£10k). If same scheme, combined £32k = NOT small pot."
  ),

  q("fpa-ch4-small-pots-13", "cisi-fpa", "fpa-ch4", "4.4", "Small Pots", "solutions", "hard",
    "Why are small pot limits important for financial planning?",
    ["No importance", "Clients with many old pensions (e.g., job changes) can have several small pots; small pot exemptions allow tax-efficient withdrawals (25% tax-free); however, multiple small pots can lead to loss of consolidation benefits (investment efficiency, lower fees)", "Small pots always beneficial", "Limits don't matter"],
    1,
    "Scenario: Employee has 10 old pensions, average £6k each. Can withdraw all as small pots (25% tax-free) but loses investment efficiency (paying multiple fund charges). May be better to consolidate to one provider."
  ),

  q("fpa-ch4-trivial-commutation-11", "cisi-fpa", "fpa-ch4", "4.5", "Trivial Commutation", "solutions", "easy",
    "What is trivial commutation?",
    ["Annuity purchase", "Commutation of entire pension pot <£30,000 as one-off lump sum; 25% tax-free, 75% taxed; available once per lifetime", "Annuity alternative", "No commutation"],
    1,
    "Trivial commutation: Whole pot <£30k withdrawn as lump sum once only in lifetime. Clean exit option."
  ),

  q("fpa-ch4-trivial-commutation-12", "cisi-fpa", "fpa-ch4", "4.5", "Trivial Commutation", "solutions", "medium",
    "A client aged 60 with total pensions of £28k wants to use trivial commutation. What's the tax position?",
    ["£28k tax-free", "£28k commutation = £7k tax-free (25%), £21k taxed as income at marginal rate (20-45%); if basic rate = £21k × 20% = £4.2k tax, net £23.8k", "Full tax at 40%", "No tax charged"],
    1,
    "Trivial commutation: £28k × 25% = £7k tax-free. £21k × 20% (assuming basic rate) = £4.2k tax. Net: £23.8k received."
  ),

  q("fpa-ch4-trivial-commutation-13", "cisi-fpa", "fpa-ch4", "4.5", "Trivial Commutation", "solutions", "hard",
    "Why is trivial commutation less commonly used than drawdown?",
    ["Trivial is always better", "Trivial commits entire pot to lump sum (no ongoing income flexibility); taxable amount (75%) can push into higher rate unexpectedly; not available if pot >£30k; drawdown offers more flexibility for larger amounts", "Drawdown unavailable", "Trivial has no drawbacks"],
    1,
    "Trivial limitation: One-time, all-or-nothing. If £30k pot and basic rate, £22.5k taxable might push into 40% band = higher tax. Drawdown spreads withdrawals, managing tax better."
  ),

  q("fpa-ch4-phased-retirement-11", "cisi-fpa", "fpa-ch4", "4.6", "Phased Retirement", "solutions", "medium",
    "What is phased retirement?",
    ["Immediate full retirement", "Gradual transition: reduce work hours and take partial pension withdrawals; continues earning income while starting pension access; smooths retirement transition", "No partial retirement", "Only full retirement"],
    1,
    "Phased: Age 60, reduce work to 20 hours/week, withdraw £5k/year from pension, earn £40k salary. Reduces income shock at retirement."
  ),

  q("fpa-ch4-phased-retirement-12", "cisi-fpa", "fpa-ch4", "4.6", "Phased Retirement", "solutions", "hard",
    "Why might phased retirement improve retirement readiness?",
    ["No advantage", "Allows testing retirement spending levels before full retirement; provides ongoing earned income (psychological benefit); spreads tax (multiple years of lower tax than lump sum); maintains work identity/structure", "Complicates retirement", "No benefits"],
    1,
    "Benefit: Work 2 days/week at 60, earn £20k, withdraw £8k pension = £28k total. Test this income level against retirement needs. Full retirement at 65 easier after 5-year trial."
  ),

  q("fpa-ch4-sustainable-withdrawal-11", "cisi-fpa", "fpa-ch4", "4.2", "Sustainable Withdrawal Rate", "solutions", "medium",
    "What is the sustainable withdrawal rate (SWR) concept?",
    ["No limits on withdrawals", "Annual withdrawal amount that avoids capital depletion over 30+ year retirement; historically 4% rule; varies by asset allocation and longevity assumptions", "5% always safe", "No planning needed"],
    1,
    "SWR: How much to withdraw annually? 4% rule: £500k pot = £20k/year (inflation-adjusted) sustainable for 30+ years with equity portfolio."
  ),

  q("fpa-ch4-sustainable-withdrawal-12", "cisi-fpa", "fpa-ch4", "4.2", "Sustainable Withdrawal Rate", "solutions", "hard",
    "How do market conditions affect sustainable withdrawal rates?",
    ["No impact", "Bear markets: sequence of returns risk; withdrawing in down market depletes capital faster; lower SWR (3% safer). Bull markets: higher SWR (4-4.5% feasible). 60/40 portfolio supports 3.5-4% SWR", "Always 4%", "Unknown impact"],
    1,
    "Scenario: Retire in 2020 (bull market), withdraw 4% = fine. Retire in 2008 (bear), withdraw 4% on falling pot = capital depleted by 2030. Dynamic adjustment needed."
  ),

  q("fpa-ch4-sequencing-risk-11", "cisi-fpa", "fpa-ch4", "4.7", "Sequencing Risk", "solutions", "medium",
    "What is sequencing of returns risk?",
    ["No such risk", "Risk that poor market returns early in retirement deplete capital faster via withdrawals; 'sequence of returns' affects outcome more than average return", "Average returns only matter", "Markets don't affect withdrawals"],
    1,
    "Example: Pot earns average 6% over 30 years. Sequence matters: -20%, -10%, +8%, +8%... early losses at high capital = disaster. vs. +8%, +8%, +8%, -20%... early gains offset later loss."
  ),

  q("fpa-ch4-sequencing-risk-12", "cisi-fpa", "fpa-ch4", "4.7", "Sequencing Risk", "solutions", "hard",
    "How can retirees reduce sequencing risk?",
    ["No mitigation possible", "Reduce equity exposure early retirement (bonds buffer), use fixed income ladder (maturities match withdrawals), maintain 2-3 years cash buffer to avoid selling stocks in downturns, take State Pension rather than drawdown in early bear market", "Stay fully invested", "Only annuities work"],
    1,
    "Mitigation: In 2008 crash, retiree with 50% stocks + 50% bonds had stable capital. Pure stocks fell 50%. 2-year cash reserve allows avoiding stock sales during crash."
  ),

  q("fpa-ch4-investment-pathways-11", "cisi-fpa", "fpa-ch4", "4.8", "Investment Pathways", "solutions", "medium",
    "What are FCA investment pathways for pension drawdown?",
    ["No regulated pathways", "Default investment strategies for drawdown: 0% stocks (Cautious), 20% stocks (Balanced), 60% stocks (Growth), 100% stocks (Adventurous); help non-advised customers auto-select appropriate level", "Pathways for annuities only", "Mandatory pathways"],
    1,
    "Pathways introduced 2023: non-advised retirees can select Cautious/Balanced/Growth/Adventurous based on needs. Avoids poor default choices."
  ),

  q("fpa-ch4-investment-pathways-12", "cisi-fpa", "fpa-ch4", "4.8", "Investment Pathways", "solutions", "hard",
    "Why were investment pathways created?",
    ["No reason", "Many drawdown customers made poor investment choices (all cash earning 0.5%, or 100% growth with no income); pathways provide simple, regulated defaults ensuring appropriate risk levels for income need", "No benefit", "Additional regulation burden only"],
    1,
    "Issue: Customer takes £300k pension, leaves in cash at 0.5% = £1,500/year (can't live on it). Or puts in 100% growth = volatility unsuitable for retiree. Pathways solve this."
  ),

  // CHAPTER 5: Financial Planning Recommendations - Additional ~55 questions (total 70)
  q("fpa-ch5-suitability-11", "cisi-fpa", "fpa-ch5", "5.1", "Suitability", "recommendations", "easy",
    "What is suitability in financial advice?",
    ["Any product the adviser likes", "Recommendation must match client's objectives, capacity for loss, risk attitude, and circumstances; must be clearly documented and justified", "All recommendations equally suitable", "Suitability irrelevant"],
    1,
    "Suitability: recommendation must fit client profile. Proposing emerging market fund to 70-year-old needing income = unsuitable."
  ),

  q("fpa-ch5-suitability-12", "cisi-fpa", "fpa-ch5", "5.1", "Suitability", "recommendations", "medium",
    "An adviser recommends 100% equities to a 55-year-old with £300k pension, £1m mortage, and £2.5k monthly essential expenses. What is the suitability issue?",
    ["No issue", "Limited capacity for loss (mortgage + essential expenses consume most income); high equity portfolio creates risk of forced loss sales if markets crash; recommendation may be unsuitable unless client accepts documented risk", "Equities always suitable", "No documentation needed"],
    1,
    "Suitability problem: Client has limited capacity for loss (mortgage, fixed expenses). Market crash could force liquidating stocks to pay bills. 100% equities exceeds capacity."
  ),

  q("fpa-ch5-suitability-13", "cisi-fpa", "fpa-ch5", "5.1", "Suitability", "recommendations", "hard",
    "How should advisers document suitability for complex recommendations?",
    ["No documentation needed", "Suitability report should: explain client facts (income, assets, family, risk), link recommendation to objectives, justify risk level against capacity/willingness, disclose all costs, address alternatives, and include risk warnings", "One-line email sufficient", "Verbal explanation only"],
    1,
    "Suitability documentation: 'Client aged 45, salary £60k, £100k savings, wants £30k annual retirement income at 60. Recommended 70% equities + 30% bonds to achieve target within risk tolerance. Annual fees 0.75%.' Clear link between facts and recommendation."
  ),

  q("fpa-ch5-ongoing-review-11", "cisi-fpa", "fpa-ch5", "5.2", "Ongoing Review", "recommendations", "easy",
    "Why are ongoing reviews essential?",
    ["Reviews are unnecessary", "Life circumstances change (promotion, inheritance, health), markets move, regulations change; annual reviews ensure recommendations remain suitable and portfolio is optimized", "One-time advice sufficient", "Reviews waste time"],
    1,
    "Review topics: Has income changed? New dependents? Inheritance received? Have markets moved portfolio away from target? Do costs need review?"
  ),

  q("fpa-ch5-ongoing-review-12", "cisi-fpa", "fpa-ch5", "5.2", "Ongoing Review", "recommendations", "medium",
    "A client's portfolio was 60% stocks/40% bonds in 2021. In 2023, due to market movements, it's now 70% stocks/30% bonds. What review action is needed?",
    ["Do nothing", "Rebalance back to 60/40 to restore original risk profile; market growth shifted allocation beyond target; rebalancing maintains discipline and risk control", "Increase to 80%", "Accept new allocation"],
    1,
    "Rebalancing: Stocks outperformed 2021-2023, portfolio drifted. Rebalancing sells overweighted stocks, buys underweighted bonds, restores target allocation."
  ),

  q("fpa-ch5-ongoing-review-13", "cisi-fpa", "fpa-ch5", "5.2", "Ongoing Review", "recommendations", "hard",
    "How should advisers handle client inaction on review recommendations?",
    ["Force changes", "Document recommendation and client's decision to defer; explain risks of inaction; set follow-up date; if pattern continues, consider whether ongoing relationship appropriate", "Ignore client wishes", "Change without permission"],
    1,
    "Example: Adviser recommends increasing pension contributions, client declines due to cash flow. Document discussion, risks (inadequate retirement savings), and client's informed choice. Follow up next review."
  ),

  q("fpa-ch5-rebalancing-11", "cisi-fpa", "fpa-ch5", "5.3", "Rebalancing", "recommendations", "easy",
    "What is portfolio rebalancing?",
    ["Changing the entire portfolio", "Periodically adjusting asset allocation back to target (e.g., 60/40) when market movements create drift; maintains risk profile", "No need to adjust", "One-time adjustment"],
    1,
    "Rebalancing: Target 60/40. Market makes it 70/30. Sell 10% stocks, buy 10% bonds = back to 60/40."
  ),

  q("fpa-ch5-rebalancing-12", "cisi-fpa", "fpa-ch5", "5.3", "Rebalancing", "recommendations", "medium",
    "How often should portfolios be rebalanced?",
    ["Continuously", "Quarterly to annually depending on tolerance for drift; typical approach is annual or when allocation drifts >5% from target (e.g., 60/40 target triggers at 55/45 or 65/35)", "Never", "Monthly"],
    1,
    "Rebalancing frequency: Annual is standard. If target 60/40 and now 65/35, consider rebalancing. If 61/39 (minor drift), wait until annual review."
  ),

  q("fpa-ch5-rebalancing-13", "cisi-fpa", "fpa-ch5", "5.3", "Rebalancing", "recommendations", "hard",
    "What is the behavioral advantage of disciplined rebalancing?",
    ["No advantage", "Forces 'sell high' (reduce overweighted equities after rally) and 'buy low' (add bonds after weakness); prevents emotional bias toward recent winners; improves long-term returns vs. buy-and-hold", "Rebalancing underperforms", "No behavioral impact"],
    1,
    "Behavioral benefit: In 2008 crash, disciplined rebalancers sold bonds (down), bought stocks (crashed). Counterintuitive but historically profitable as stocks recovered."
  ),

  q("fpa-ch5-cost-impact-11", "cisi-fpa", "fpa-ch5", "5.4", "Cost Impact", "recommendations", "easy",
    "How do ongoing adviser fees affect long-term returns?",
    ["No impact", "Annual fees (e.g., 0.75%) compound over decades; £100k @ 6% net return (after 0.75% fee) vs. 5.25% net = significant difference over 30 years", "Fees irrelevant", "Higher fees = better returns"],
    1,
    "Cost impact: 0.75% fee on £100k over 30 years = ~£80k lower final value compared to 0.25% fee portfolio. Costs matter significantly."
  ),

  q("fpa-ch5-cost-impact-12", "cisi-fpa", "fpa-ch5", "5.4", "Cost Impact", "recommendations", "medium",
    "An adviser recommends Portfolio A (0.5% total cost) vs. Portfolio B (1.5% total cost), same expected returns. Which is preferable?",
    ["B due to higher cost", "A. Same expected returns, lower costs = higher net return to client. Cost difference (1%) compounds significantly over decades", "B is better value", "Same outcome"],
    1,
    "1% cost difference: £300k over 30 years. Same gross 6% return: net 5.5% (Portfolio A) vs. 4.5% (Portfolio B). Portfolio A ends 20%+ higher due to cost efficiency."
  ),

  q("fpa-ch5-cost-impact-13", "cisi-fpa", "fpa-ch5", "5.4", "Cost Impact", "recommendations", "hard",
    "Why must advisers disclose total costs (adviser fees + fund charges) transparently?",
    ["No disclosure needed", "Clients need full picture of annual 'drag' (e.g., 1.5% total costs) to assess value for money; hidden costs erode returns invisibly; transparency supports informed decisions and builds trust", "Costs should be hidden", "Clients don't care"],
    1,
    "Example: Adviser says '0.5% fee' but funds charge 1.2% = 1.7% total. Over 20 years, £200k pot becomes £120k lower than 0.5% portfolio. Transparency essential."
  ),

  q("fpa-ch5-measuring-objectives-11", "cisi-fpa", "fpa-ch5", "5.5", "Measuring Objectives", "recommendations", "medium",
    "How should advisers measure whether plans are on track to achieve client objectives?",
    ["No measurement possible", "Compare actual fund value/income against projected target; benchmark against relevant index; review at least annually; adjust recommendations if tracking behind schedule", "Measure once only", "No benchmarking needed"],
    1,
    "Tracking: Goal is £500k by age 60. Current age 45 with £200k. Projected growth at 6% = £424k (shortfall £76k). Recommend increasing contributions or adjusting target."
  ),

  q("fpa-ch5-measuring-objectives-12", "cisi-fpa", "fpa-ch5", "5.5", "Measuring Objectives", "recommendations", "hard",
    "What should advisers do if client is off-track to achieve retirement objective?",
    ["Accept shortfall", "Review and propose options: increase contributions, extend working years, lower retirement income target, increase investment risk (if appropriate), or adjust retirement age; discuss trade-offs", "Ignore the problem", "Change investment without asking"],
    1,
    "Off-track example: Target £30k annual retirement income, but projections show £22k achievable. Options: Work 5 more years, save £5k/year more, accept lower income, or increase risk slightly."
  ),

  q("fpa-ch5-life-events-11", "cisi-fpa", "fpa-ch5", "5.6", "Life Events", "recommendations", "medium",
    "How should marriage affect financial planning reviews?",
    ["No impact", "Marriage triggers review: combine finances, reassess family protection (life insurance), update beneficiaries on pensions, consider spousal planning (tax efficiency), update wills", "Rare to need changes", "Plan unchanged"],
    1,
    "Marriage review: New dependents (future children)? Combine assets? Increase mortgage? Update wills (marriage revokes previous wills). Review all protection and tax efficiency."
  ),

  q("fpa-ch5-life-events-12", "cisi-fpa", "fpa-ch5", "5.6", "Life Events", "recommendations", "medium",
    "A client receives £200k inheritance. How should the adviser respond?",
    ["Recommend investing immediately", "Comprehensive review: update net worth, reassess risk profile (now higher capacity for loss), review goals (can they be accelerated?), plan tax-efficiently, allow time for decision-making", "No advice needed", "Spend it all"],
    1,
    "Inheritance impact: Client may feel pressured to 'invest quickly.' Prudent approach: assess goals, emergency fund adequacy, debt repayment, then strategic investment over time."
  ),

  q("fpa-ch5-life-events-13", "cisi-fpa", "fpa-ch5", "5.6", "Life Events", "recommendations", "hard",
    "A client is made redundant with £50k redundancy package. What's the adviser's priority?",
    ["Immediately invest the money", "First: ensure emergency fund (3-6 months expenses) before investing; assess impact on retirement plan (timeline extended?); review protection (income protection, life insurance); manage cash flow prudently", "Invest everything", "No action needed"],
    1,
    "Redundancy approach: £50k package depletes if unemployment extends. Build 6-month emergency fund first, then plan strategic use for deficit repayment, savings, or structured job search support."
  ),

  q("fpa-ch5-regulatory-requirements-11", "cisi-fpa", "fpa-ch5", "5.7", "Regulatory Requirements", "recommendations", "easy",
    "What must a financial adviser include in a suitability report?",
    ["Just the recommendation", "Client facts/circumstances, objectives, analysis, recommended solution, reasoning, costs (including adviser fees + fund charges), risks, alternatives considered, and declaration of adviser status", "No documentation required", "Recommendation only"],
    1,
    "Suitability report elements: WHO (client), WHAT (goal), WHY (recommendation), HOW (strategy), COSTS (all fees), RISKS (what could go wrong)."
  ),

  q("fpa-ch5-regulatory-requirements-12", "cisi-fpa", "fpa-ch5", "5.7", "Regulatory Requirements", "recommendations", "medium",
    "What is an Attitude to Risk (AtR) statement?",
    ["No requirement", "Document signed by client confirming their risk profile (assessed through questionnaire) and acknowledging past investment experience, volatility tolerance, and suitability of recommendations", "Optional questionnaire", "Not important"],
    1,
    "AtR statement: Client confirms 'I'm aware a 60% equity portfolio can fall 20%+ in bad years and I'm comfortable with this.' Protects both parties."
  ),

  q("fpa-ch5-regulatory-requirements-13", "cisi-fpa", "fpa-ch5", "5.7", "Regulatory Requirements", "recommendations", "hard",
    "Why are detailed records important when recommendations are challenged?",
    ["Records don't matter", "If client disputes suitability (after a loss), evidence of fact-finding, risk assessment, recommendation rationale, and client acknowledgment proves adviser was diligent; protects adviser from FCA action/complaint", "Records not legally required", "Verbal advice sufficient"],
    1,
    "Scenario: Client sues adviser over loss. Adviser's file shows: detailed fact-find, risk questionnaire (signed), suitability analysis, client meeting notes documenting discussion. Adviser likely wins dispute."
  ),

  q("fpa-ch5-conflict-of-interest-11", "cisi-fpa", "fpa-ch5", "5.8", "Conflict of Interest", "recommendations", "medium",
    "What is a conflict of interest in financial advice?",
    ["No conflicts exist", "Situation where adviser's financial incentive conflicts with client's best interest (e.g., recommending product paying higher commission even if unsuitable; or adviser owning fund being recommended)", "Advisers have no incentives", "All advisers have conflicts"],
    1,
    "Conflict example: Adviser earns 3% commission on Funds A (suitable, 1% commission). Recommends Fund A (best choice) not A (profitable choice). Conflict managed."
  ),

  q("fpa-ch5-conflict-of-interest-12", "cisi-fpa", "fpa-ch5", "5.8", "Conflict of Interest", "recommendations", "hard",
    "How should advisers manage conflicts of interest?",
    ["Hide them", "Disclosure (tell client about conflict), restriction (don't recommend conflicted product unless best option), segregation (independent oversight), or fee-for-advice (remove commission incentive)", "Conflicts can't be managed", "Always choose commission"],
    1,
    "Management approaches: 1) Disclose ('This product pays me commission'), 2) Restrict ('Won't use commission products'), 3) Segregate ('Different team reviews my recommendations'), 4) Fee-only ('No commission, transparent fee')."
  ),

  // Additional 140+ questions to reach final targets

  // CHAPTER 1: Additional Financial Planning (4 more to reach 90)
  q("fpa-ch1-planning-process-14", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "medium",
    "Why should financial plans be written and documented?",
    ["Documentation is unnecessary", "Written plan creates accountability, provides reference point for client, supports review decisions, prevents misunderstanding, and serves as evidence of suitability if disputes arise", "Verbal plans sufficient", "Only investors need written plans"],
    1,
    "Written documentation: client can verify understanding, adviser has record of recommendations and rationale, helps with annual reviews by tracking original assumptions."
  ),

  q("fpa-ch1-planning-process-15", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "hard",
    "How do external factors (interest rates, inflation, tax changes) affect financial planning?",
    ["No external impact", "Changes in rates/inflation/tax alter plan viability; rising inflation increases savings needed, rate cuts reduce annuity income, tax changes reduce retirement income; plans must include sensitivity analysis", "Only markets matter", "External factors don't apply"],
    1,
    "Example: Plan assumes 2% inflation. If inflation rises to 4%, retirement savings goal increases ~20%. Plan needs updating to reflect new assumptions."
  ),

  q("fpa-ch1-planning-process-16", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "easy",
    "What is a financial planning scenario?",
    ["Only one plan needed", "Alternative 'what-if' projection (e.g., retire at 60 vs. 65, best-case vs. worst-case returns) allowing clients to see outcomes under different assumptions", "Scenarios aren't important", "All scenarios identical"],
    1,
    "Scenarios help clients understand: If markets average 5% (base case), I achieve £500k. If 7% (optimistic), £600k. If 3% (pessimistic), £400k. Helps realistic planning."
  ),

  q("fpa-ch1-planning-process-17", "cisi-fpa", "fpa-ch1", "1.1", "Financial Planning Process", "planning", "medium",
    "How does goal prioritization help when financial resources are limited?",
    ["All goals equally important", "When saving capacity is limited, prioritize by importance: home purchase > children's education > holiday savings; focus resources on critical goals first", "Goals shouldn't be prioritized", "Ignore priorities"],
    1,
    "Prioritization: Client wants to save £5k/year for 3 goals. Rank by importance: mortgage overpayment (saves interest), then pension (tax relief), then ISA (flexibility)."
  ),

  // CHAPTER 2: Additional Financial Protection (2 more to reach 100)
  q("fpa-ch2-gaps-analysis-11", "cisi-fpa", "fpa-ch2", "2.10", "Protection Gaps", "protection", "medium",
    "What is a protection gaps analysis?",
    ["No gaps exist in insurance", "Comparison of protection need vs. actual coverage to identify shortfalls; example: need £400k life cover but have £200k = £200k gap", "Gaps aren't important", "All gaps are acceptable"],
    1,
    "Gap analysis: Mortgage £300k + family income £200k = £500k need. Existing policy £250k = £250k gap. Gap means death leaves family vulnerable."
  ),

  q("fpa-ch2-protection-underinsurance-11", "cisi-fpa", "fpa-ch2", "2.10", "Protection Gaps", "protection", "hard",
    "Why do many people remain significantly underinsured despite protection needs?",
    ["Everyone has adequate cover", "Denial/optimism bias ('won't happen to me'), affordability constraints, complexity of products, and low insurance awareness keep people underinsured; only ~50% of UK workers have adequate protection", "All protection products are affordable", "Insurance is always accessible"],
    1,
    "Underinsurance pattern: 70% have <£100k life cover; 40% have zero income protection. Causes: cost perception, lack of trust in insurers, overconfidence in health."
  ),

  // CHAPTER 3: Additional Retirement Planning (63 more to reach 120)
  q("fpa-ch3-sp-claiming-strategy-11", "cisi-fpa", "fpa-ch3", "3.2", "State Pension Claiming", "retirement", "medium",
    "What is the key trade-off in claiming State Pension early vs. deferring?",
    ["Claim immediately, always", "Early claiming: receive lower annual amount over longer period. Deferring: higher annual amount over shorter period. Choice depends on longevity expectations and income needs", "Deferral always better", "No trade-off exists"],
    1,
    "Breakeven: Claim at 66 vs. defer 3 years. If live to 80, claiming at 66 pays more cumulatively. If live to 95, deferring pays more. Depends on health/longevity."
  ),

  q("fpa-ch3-sp-claiming-strategy-12", "cisi-fpa", "fpa-ch3", "3.2", "State Pension Claiming", "retirement", "hard",
    "How does flexible working affect State Pension age planning?",
    ["No impact on SP age", "Flexible working (part-time) allows income + State Pension bridge; working to 68 (not SPA) while claiming SP at 66 avoids income shock and optimizes tax efficiency", "Flexible work irrelevant", "Can't combine income and SP"],
    1,
    "Strategy: Claim SP at 66 (£11k/year), work part-time (£15k salary) = £26k total. Full retirement at 68. Smoother transition than cliff-edge full retirement."
  ),

  q("fpa-ch3-pensions-brought-forward-11", "cisi-fpa", "fpa-ch3", "3.5", "Pensions Brought Forward", "retirement", "medium",
    "What is the MPA carry-forward rule?",
    ["No carry-forward exists", "MPAA (£10k floor) allows unused allowance from current + 3 prior years to carry forward; high-earner with £30k budget in year 1 (AA unused) can use £90k in year 2 (£60k AA + £30k carry-forward)", "Carry-forward is unlimited", "Can only use current year"],
    1,
    "Carry-forward example: Year 1 contribution £10k (full MPAA, no AA used). Year 2 contribution £100k. £60k AA + £10k carry-forward = £70k allowable. £30k excess taxed."
  ),

  q("fpa-ch3-pension-death-before-75-11", "cisi-fpa", "fpa-ch3", "3.7", "Death Before 75", "retirement", "easy",
    "What is the inheritance tax treatment of pension death benefits before age 75?",
    ["Subject to 40% IHT", "Tax-free; death benefits paid before 75 are completely exempt from both income tax and IHT, making pensions powerful inheritance vehicles", "Subject to 20% income tax", "Partially taxed"],
    1,
    "Before 75 advantage: £1m pension pot inherited = £1m tax-free to beneficiaries (no income tax, no IHT). Unique compared to most investments."
  ),

  q("fpa-ch3-pension-death-after-75-11", "cisi-fpa", "fpa-ch3", "3.7", "Death After 75", "retirement", "medium",
    "What tax is charged on pension death benefits after age 75?",
    ["No tax charged", "Income tax at beneficiary's marginal rate (20-45%) on the full amount; IHT not charged but income tax reduces net benefit to heirs", "40% flat rate", "No tax due"],
    1,
    "After 75 death: £500k pot = £500k × 40% marginal rate (if higher rate) = £200k tax = £300k to heirs. Significant reduction vs. before-75 death (tax-free)."
  ),

  q("fpa-ch3-pension-death-timing-11", "cisi-fpa", "fpa-ch3", "3.7", "Death Timing", "retirement", "hard",
    "How can death benefit planning improve retirement outcomes?",
    ["Death benefits are irrelevant", "Strategically using tax-free death benefits (before 75) to maximise inheritance, using trusts to keep pot outside estate for both tax and control purposes, deferring large withdrawals until after 75 if planning inheritance", "All death benefits identical", "Can't plan for death"],
    1,
    "Advanced planning: Client age 70 with £300k pension, £600k stocks, £1m property. Pension death before 75 = tax-free £300k to heirs. Keeping pension intact and living off stocks/SP = better inheritance outcome."
  ),

  q("fpa-ch3-divorce-sharing-11", "cisi-fpa", "fpa-ch3", "3.8", "Divorce Sharing", "retirement", "medium",
    "What happens to pension contributions made during marriage in a divorce settlement?",
    ["All contributions belong to pension owner", "Family court typically orders sharing of pension value built during marriage; contributions made before marriage or after separation often excluded", "All pensions shared equally", "Spouse gets nothing"],
    1,
    "Pension sharing logic: Couple married 20 years, both contributed to growth. Court often orders 50% of growth during marriage shared, not all contributions."
  ),

  q("fpa-ch3-tax-free-lump-sum-11", "cisi-fpa", "fpa-ch3", "3.9", "Tax-Free Lump Sum", "retirement", "easy",
    "What is the tax-free lump sum (TFLS) in pension rules?",
    ["No lump sum available", "25% of pension pot can be withdrawn tax-free at retirement, rest is taxable on drawdown/annuity; key benefit of TFLS is to fund retirement needs or debts", "50% is tax-free", "No tax at all"],
    1,
    "TFLS: £400k pension = £100k tax-free, £300k taxable. Common use: pay off mortgage (£200k) using TFLS (£100k) + drawdown (£100k)."
  ),

  q("fpa-ch3-tax-free-lump-sum-12", "cisi-fpa", "fpa-ch3", "3.9", "Tax-Free Lump Sum", "retirement", "medium",
    "Should a retiree always take the full TFLS at retirement?",
    ["Yes, always", "Not necessarily; if no immediate need, keeping money invested allows tax-free growth; taking TFLS may push into higher tax band if other income exists; consider deferring TFLS if no urgent need", "Never take TFLS", "TFLS doesn't help"],
    1,
    "Strategy: Retire age 65, State Pension £12k/year (basic rate band). Taking £100k TFLS = £12k + £100k = £112k (in 40% band on £100k). Better to defer TFLS, take drawdown as needed in lower band."
  ),

  q("fpa-ch3-tax-free-lump-sum-13", "cisi-fpa", "fpa-ch3", "3.9", "Tax-Free Lump Sum", "retirement", "hard",
    "How can deferring the TFLS benefit higher-rate retirees?",
    ["No benefit to deferring", "If taking TFLS + other income pushes into 40% band, deferring allows managing income across years; taking small drawdowns in low-tax years avoids pushing into higher bands; results in more net income over retirement", "Deferral always costs tax", "No impact on tax"],
    1,
    "Example: Retiree earning £80k salary (at 40% threshold). Taking £100k TFLS immediately triggers 40% tax on overlap. Strategy: work 1 more year, then retire and take TFLS in lower-income year."
  ),

  // Add more Ch3 questions (targeting 120 total, currently 57 + 3 = 60, need 60 more)
  q("fpa-ch3-sbp-bsp-comparison-11", "cisi-fpa", "fpa-ch3", "3.2", "Basic vs. New SP", "retirement", "medium",
    "What is the key difference between Basic State Pension (BSP) and New State Pension (NSP)?",
    ["Identical benefits", "BSP: linked to National Insurance, has earnings-related element (ASP); requires 30 years qualifying years. NSP: fixed amount, no earnings link, requires 35 years. NSP more generous for many but requires longer contribution record", "Same requirements", "No differences"],
    1,
    "BSP vs. NSP: BSP complex, earnings-related. NSP simpler, flat amount, but needs 35 years vs. 30 for BSP. Roughly equivalent value."
  ),

  q("fpa-ch3-nics-credits-11", "cisi-fpa", "fpa-ch3", "3.2", "NI Credits", "retirement", "medium",
    "How do National Insurance credits help build State Pension entitlement?",
    ["Credits don't help", "Credits (for unemployment, carers, child benefit years) count toward qualifying years for SP; allow gaps in paid contributions to be covered; crucial for non-continuous workers", "Credits reduce SP", "Only paid contributions count"],
    1,
    "Credits example: Care 5 years (child benefit age 0-5) = 5 qualifying years credited. Unemployed 2 years = 2 credited years. Total contribution record improved without payments."
  ),

  q("fpa-ch3-nics-contribution-11", "cisi-fpa", "fpa-ch3", "3.2", "NI Contributions", "retirement", "medium",
    "What are the employee and employer National Insurance contributions for 2025-26?",
    ["No contributions required", "Employee: 8% on earnings £12,570-£50,270; Employer: 15% on earnings >£9,100 (with allowance). These fund State Pension and other benefits", "Fixed rate 10%", "Rates unknown"],
    1,
    "NI rate example: £40k salary = £40k - £12,570 = £27,430 × 8% = £2,194 employee NI + employer NI ~£3,700. Funds state benefits."
  ),

  q("fpa-ch3-pension-projections-11", "cisi-fpa", "fpa-ch3", "3.1", "Pension Projections", "retirement", "medium",
    "How accurate are retirement projections?",
    ["Perfectly accurate", "Projections are estimates based on assumptions (investment returns, inflation, longevity, contributions); actual results will differ; projections are illustrative guides, not guarantees", "Predictions certain", "Projections useless"],
    1,
    "Projection caveat: Assumes 5% returns but actual could be 2% or 8%. Useful for comparison ('if save £500/month, likely reach £400k') not precision."
  ),

  q("fpa-ch3-pension-statements-11", "cisi-fpa", "fpa-ch3", "3.1", "Annual Statements", "retirement", "medium",
    "What information should an annual pension statement provide?",
    ["No information needed", "Current fund value, contributions paid, fund growth, projected retirement value at SPA, options available (drawdown, annuity), charges/costs, and contact details for queries", "Only fund value", "Can be minimal"],
    1,
    "Statement should show: £300k fund, 5% growth = £15k gain this year, projected £600k at 65. Helps client track progress toward goals."
  ),

  // CHAPTER 4: Additional Retirement Solutions (36 more to reach 80)
  q("fpa-ch4-annuity-purchase-timing-11", "cisi-fpa", "fpa-ch4", "4.1", "Annuity Timing", "solutions", "medium",
    "When is the best time to purchase an annuity?",
    ["Age 60 is always best", "Rates vary with interest rates (gilt yields); generally higher rates when base rate high; purchase timing can impact income by 10-20%; monitor rates and purchase when favorable", "All times equivalent", "Timing doesn't matter"],
    1,
    "Rate environment: 2008 rates high (£500k = £20k). 2020 rates low (£500k = £12k). Same age/health, 40% income difference. Timing matters significantly."
  ),

  q("fpa-ch4-annuity-medical-impairment-11", "cisi-fpa", "fpa-ch4", "4.1", "Impaired Life Annuity", "solutions", "medium",
    "What is an impaired life annuity?",
    ["Standard annuity for all", "Annuity offering higher income if applicant has medical condition reducing life expectancy (e.g., diabetes, heart disease); insurer expects shorter payout period so increases annual rate", "Medical conditions reduce income", "Impairment doesn't affect annuities"],
    1,
    "Impaired life: Standard annuity £500k = £15k/year (life exp. 85). Diabetic client (reduced life exp. 78) = £18k/year on same pot. Higher income due to shorter expected payout."
  ),

  q("fpa-ch4-income-needs-analysis-11", "cisi-fpa", "fpa-ch4", "4.2", "Income Needs", "solutions", "medium",
    "How should advisers determine the retirement income requirement?",
    ["No analysis needed", "Review current spending, identify fixed expenses vs. discretionary, adjust for retirement changes (no commute, less entertainment; more travel, hobbies), apply inflation, calculate annual need", "Use fixed percentage", "Guess"],
    1,
    "Income analysis: Current spend £60k/year. Retirement adjust: minus £5k commute/clothes, plus £8k travel = £63k needed. Over 30 years, with inflation = higher absolute numbers."
  ),

  q("fpa-ch4-pension-commencement-lump-sum-11", "cisi-fpa", "fpa-ch4", "4.3", "Pension Commencement Lump Sum", "solutions", "medium",
    "What is Pension Commencement Lump Sum (PCLS)?",
    ["Annuity payment", "Lump sum taken at retirement from pension pot; first 25% of pot is PCLS (tax-free), remainder goes to annuity/drawdown (taxable); helps clear debts or fund early retirement needs", "Annual income", "One-time drawdown"],
    1,
    "PCLS usage: £400k pot = £100k PCLS (tax-free). Use to pay mortgage (£100k), then drawdown funds income. Common strategy."
  ),

  q("fpa-ch4-annuity-escalation-rate-11", "cisi-fpa", "fpa-ch4", "4.1", "Escalation Rate", "solutions", "hard",
    "How does choosing an escalation rate (e.g., 2%, 3%, 5% annual increases) affect annuity cost?",
    ["No cost difference", "Higher escalation rates reduce starting income (but increase future payments); lower rates increase starting income (but value erodes). 5% escalation costs 20%+ more than level", "Escalation is free", "All rates identical"],
    1,
    "Comparison: £500k buys level annuity £15k/year. With 3% escalation, starts at £12k (lower immediately) but rises to £18k by year 10. Cost difference ~15%."
  ),

  q("fpa-ch4-drawdown-vs-annuity-11", "cisi-fpa", "fpa-ch4", "4.2", "Drawdown vs Annuity", "solutions", "hard",
    "What are the main advantages and disadvantages of drawdown vs. annuity?",
    ["Both identical", "Drawdown: flexibility, inheritance, lower initial cost, but requires investment management and longevity risk on client. Annuity: guaranteed income, peace of mind, but inflexible, no inheritance, risk on insurer", "Drawdown always better", "Annuity always better"],
    1,
    "Drawdown pros: flexibility, keep £400k invested (potential growth), inheritance tax-free. Cons: investment risk, market timing, decisions needed. Annuity pros: certainty. Cons: less income, no inflation typically, no flexibility."
  ),

  q("fpa-ch4-defined-ambition-11", "cisi-fpa", "fpa-ch4", "4.9", "Defined Ambition", "solutions", "hard",
    "What is Defined Ambition (DA) scheme?",
    ["Similar to DC schemes", "DA hybrid: employee and employer contribute (like DC), but scheme aims to pay target level of benefit (like DB); risk shared between all members; growing option for employers wanting DB certainty without unfunded liabilities", "Pure DB approach", "Rare in UK"],
    1,
    "DA advantage: Employer contributes to reach target benefit (e.g., £20k/year), but if investments underperform, benefit may adjust rather than employer funding shortfall. Shares risk."
  ),

  // CHAPTER 5: Additional Recommendations (33 more to reach 70)
  q("fpa-ch5-advisory-vs-execution-only-11", "cisi-fpa", "fpa-ch5", "5.1", "Service Types", "recommendations", "easy",
    "What is the difference between advisory and execution-only services?",
    ["Identical service", "Advisory: adviser recommends specific products based on analysis; Execution-only: client instructs adviser to buy specific product without suitability advice; different compliance requirements", "Both require suitability", "No difference"],
    1,
    "Advisory: 'Based on analysis, recommend Fund A.' Execution-only: 'Buy Fund A' (client decides, adviser executes). Different responsibility levels."
  ),

  q("fpa-ch5-fact-finding-quality-11", "cisi-fpa", "fpa-ch5", "5.1", "Fact-Finding", "recommendations", "medium",
    "How does quality of fact-finding impact recommendation suitability?",
    ["Fact-finding quality irrelevant", "Poor fact-finding leads to unsuitable recommendations (wrong risk level, wrong product, wrong timescale); comprehensive fact-finding is foundation for suitable advice", "All fact-finding equal", "Recommendations independent of facts"],
    1,
    "Poor fact-finding: Adviser doesn't ask about mortgage, just sees £50k savings and recommends high-risk fund. If client has £40k mortgage, recommendation unsuitable due to low capacity."
  ),

  q("fpa-ch5-annual-review-process-11", "cisi-fpa", "fpa-ch5", "5.2", "Annual Review", "recommendations", "medium",
    "What should a comprehensive annual review include?",
    ["Update fund prices only", "Portfolio performance review, life circumstance changes, goal progress assessment, risk profile reassessment, cost review, recommendations for adjustment, rebalancing if needed, updated projections", "No documentation needed", "Same as last year"],
    1,
    "Review agenda: Fund value now vs. target. Promotion received? Child born? Market moved portfolio away from target? Any costs changed? Adjustments needed?"
  ),

  q("fpa-ch5-performance-benchmarking-11", "cisi-fpa", "fpa-ch5", "5.5", "Benchmarking", "recommendations", "medium",
    "Why is benchmarking portfolio performance important?",
    ["Benchmarks don't matter", "Comparing against relevant index (e.g., 60/40 portfolio vs. 60% MSCI World + 40% Bloomberg Aggregate Bond) shows if adviser is adding value or underperforming; informs adjustment decisions", "Absolute returns only", "All investments perform same"],
    1,
    "Benchmarking: 60/40 portfolio returned 5% but benchmark returned 6% = underperformance = investigate (fees too high? fund manager underperforming? rebalance needed?)."
  ),

  q("fpa-ch5-tax-loss-harvesting-11", "cisi-fpa", "fpa-ch5", "5.4", "Tax Loss Harvesting", "recommendations", "hard",
    "What is tax loss harvesting and how can it improve after-tax returns?",
    ["No such strategy", "Selling investments with losses to offset gains elsewhere, reducing capital gains tax; reinvesting in similar (not identical to avoid wash-sale issues) investments maintains exposure while harvesting tax benefit", "Creates additional tax", "Only for wealthy"],
    1,
    "Example: Gain £10k in Fund A, lose £5k in Fund B. Selling B realizes loss, offsets gain = net £5k gain (save £1k tax vs. £10k taxed). Reinvest in similar sector."
  ),

  q("fpa-ch5-fees-transparency-11", "cisi-fpa", "fpa-ch5", "5.4", "Fee Transparency", "recommendations", "medium",
    "Why must advisers clearly communicate all costs to clients?",
    ["Costs should be unclear", "Clients deserve to know total drag (adviser fees + fund charges = 1.5% vs. 0.5%); impacts long-term returns significantly; transparency builds trust and allows informed decisions", "Costs are private", "Clients don't care"],
    1,
    "Transparency example: Adviser says 0.5% fee but funds charge 1.2% = 1.7% total. Over 30 years, £200k becomes £120k instead of £180k (difference = £60k from cost!)."
  ),

  q("fpa-ch5-contingency-planning-11", "cisi-fpa", "fpa-ch5", "5.6", "Contingency Planning", "recommendations", "hard",
    "What contingency plans should be in place for major life disruptions?",
    ["Plans aren't necessary", "Job loss plan (emergency fund 6 months), health crisis plan (income protection, life cover), disability plan (income protection, care insurance), family death plan (life insurance, will update); review annually", "Only for emergencies", "Can't plan for disruption"],
    1,
    "Contingency example: Client loses job. Emergency fund (6 months) covers living expenses while job hunting. Income protection covers shortfall. Plan allows recovery without asset liquidation."
  ),

  q("fpa-ch5-client-communication-11", "cisi-fpa", "fpa-ch5", "5.7", "Communication", "recommendations", "medium",
    "How should advisers communicate during market downturns?",
    ["Avoid communication", "Proactive contact: explain market context, reassure on strategy suitability, remind of long-term focus, discourage panic selling; document conversations", "Let clients decide alone", "Only contact during ups"],
    1,
    "Downturn communication: '2008-style crash feels scary, but your 60/40 portfolio historically recovers within 3-4 years. Selling now locks losses. Stay the course.' Prevents emotional decisions."
  ),

  q("fpa-ch5-portfolio-drift-monitoring-11", "cisi-fpa", "fpa-ch5", "5.3", "Portfolio Drift", "recommendations", "medium",
    "What percentage of portfolio drift should trigger rebalancing?",
    ["No drift acceptable", "Typically when allocation drifts 5% from target (60/40 target becomes 55/45 or 65/35) or at least annually; prevents over-concentration and maintains risk profile", "10% acceptable", "No monitoring needed"],
    1,
    "Drift example: Target 60 equities/40 bonds. Market rally makes it 65/35. Rebalance to 60/40. Drift >5% usually triggers action."
  ),

  // Add final questions to reach target counts (filling gaps in each chapter)
  q("fpa-ch1-asset-allocation-11", "cisi-fpa", "fpa-ch1", "1.5", "Asset Allocation", "planning", "medium",
    "Why is asset allocation more important than individual stock picking?",
    ["Stock picking is everything", "Historical data shows 80-90% of portfolio return comes from asset allocation (stocks/bonds/cash mix), not individual security selection; strategic allocation drives outcomes", "Allocation doesn't matter", "Stock picking dominant"],
    1,
    "Academic research: A 60/40 portfolio beats 90% of active managers trying to pick 'best' stocks because allocation drives returns far more than manager skill."
  ),

  q("fpa-ch1-financial-resilience-11", "cisi-fpa", "fpa-ch1", "1.2", "Financial Resilience", "planning", "medium",
    "What constitutes a financially resilient client?",
    ["High income only", "Emergency fund (3-6 months expenses), manageable debt, insurance protection, diverse income sources, and adaptability to change; resilient clients weather disruptions better", "Wealth alone", "No specific requirements"],
    1,
    "Resilient profile: £50k salary with 6-month emergency fund, income protection, mortgage protection, and flexible side income = can handle job loss/illness. Non-resilient: same salary, no reserves, no insurance."
  ),

  q("fpa-ch2-family-income-benefit-11", "cisi-fpa", "fpa-ch2", "2.4", "Family Income Benefit", "protection", "medium",
    "What is family income benefit insurance?",
    ["Life insurance alternative", "Provides monthly income to family until specified age (e.g., £1,500/month until youngest child age 21) if main earner dies; cheaper than lump sum life insurance", "Lump sum payment", "No income element"],
    1,
    "Family income benefit: £1,500/month until age 21 for £2k lump sum. More affordable than £500k life insurance for families with young children."
  ),

  q("fpa-ch3-auto-enrol-age-limits-11", "cisi-fpa", "fpa-ch3", "3.3", "Auto-Enrolment Age", "retirement", "easy",
    "Who is eligible for auto-enrolment?",
    ["All employees", "Employees aged 22+ earning >£10,600 (2025-26); excludes under-22s and those earning <£10,600; over-state pension age excluded", "All ages", "Income irrelevant"],
    1,
    "Auto-enrolment target: 19-year-old at £12k salary = auto-enrolled. 65-year-old = excluded (past SPA). £8k earner = excluded (below threshold)."
  ),

  q("fpa-ch4-drawdown-income-flexibility-11", "cisi-fpa", "fpa-ch4", "4.2", "Drawdown Income", "solutions", "medium",
    "How flexible are income withdrawals in pension drawdown?",
    ["Fixed amount only", "Highly flexible: can withdraw £0 one year, £50k next year; can pause withdrawals, take lump sums; tax implications vary (taxed as income when withdrawn)", "All same withdrawal", "No flexibility"],
    1,
    "Flexibility example: Withdrawn £10k year 1, £0 year 2 (not working), £30k year 3. No restriction on pattern or amount. Ideal for variable needs."
  ),

  q("fpa-ch5-client-needs-documentation-11", "cisi-fpa", "fpa-ch5", "5.1", "Needs Documentation", "recommendations", "easy",
    "Why document client needs in writing?",
    ["Documentation unnecessary", "Written record prevents disputes ('client said want growth' vs. 'client wanted capital preservation'), provides reference for reviews, supports suitability evidence if questioned", "Verbal agreement sufficient", "Documentation irrelevant"],
    1,
    "Written needs: 'Client wants retirement at 60 with £40k annual income, has £2k/month expenses.' Creates objective record. Without this, claims become 'he said/she said'."
  ),

  // CHAPTER 3: RETIREMENT PLANNING (50 NEW QUESTIONS)
  q("fpa-ch3-pension-annual-allowance-50", "cisi-fpa", "fpa-ch3", "3.2", "Pension Annual Allowance", "retirement", "medium",
    "What is the current pension annual allowance for 2025-26?",
    ["£10,000", "£60,000", "£50,000", "£40,000"],
    1,
    "The annual allowance is the maximum amount that can be contributed to a pension in a tax year. For 2025-26 it is £60,000. Exceeding this triggers a tax charge on the excess."
  ),

  q("fpa-ch3-carry-forward-allowance-51", "cisi-fpa", "fpa-ch3", "3.2", "Carry Forward Allowance", "retirement", "medium",
    "How many previous years can unused annual allowance be carried forward?",
    ["1 year", "3 years", "5 years", "10 years"],
    2,
    "Unused annual allowance can be carried forward for 3 years. If £60k allowance unused in 2022-23, 2023-24, 2024-25, client can contribute £60k + £60k + £60k + £60k in 2025-26 (total £240k)."
  ),

  q("fpa-ch3-mpaa-definition-52", "cisi-fpa", "fpa-ch3", "3.2", "Money Purchase Annual Allowance", "retirement", "medium",
    "What does MPAA (Money Purchase Annual Allowance) restrict?",
    ["Total pension contributions to £20,000 where drawer access has been taken", "Lifetime allowance withdrawals", "State pension deferral", "Auto-enrolment contributions"],
    0,
    "MPAA applies after taking flexible access (drawdown/UFPLS/annuity purchase). Once triggered, contributions to DC pensions limited to £10,000 p.a. (not £60k). Essential for planning."
  ),

  q("fpa-ch3-tax-relief-at-source-53", "cisi-fpa", "fpa-ch3", "3.2", "Tax Relief at Source", "retirement", "easy",
    "Under tax relief at source (TAS), who obtains the 20% relief?",
    ["Employee must claim relief", "Pension provider automatically receives 20% relief from HMRC", "Employer must give relief", "Relief is not available"],
    1,
    "TAS: Employee contributes £80, provider receives £20 from HMRC = £100 invested. Automatic and immediate. Higher-rate taxpayers must reclaim additional 20% relief themselves."
  ),

  q("fpa-ch3-net-pay-tax-relief-54", "cisi-fpa", "fpa-ch3", "3.2", "Net Pay Arrangement", "retirement", "medium",
    "What is the advantage of net pay arrangement (NPA) for higher-rate taxpayers?",
    ["Same relief as TAS", "Relief obtained at source through payroll; higher-rate relief automatic through PAYE adjustment; no reclaim needed", "Higher relief available", "Relief is deferred"],
    1,
    "NPA: Contribution via payroll before tax calculated. £80 net cost = £100 invested (20% relief), but PAYE adjusted for full £100 salary = additional 20% relief automatic. Best for 40%+ taxpayers."
  ),

  q("fpa-ch3-death-benefits-pension-55", "cisi-fpa", "fpa-ch3", "3.4", "Death Benefits", "retirement", "medium",
    "What is the tax treatment of lump sum death benefits from a registered pension scheme?",
    ["Fully taxable as income", "Tax-free if paid within 2 years of death", "Always tax-free to beneficiaries", "Subject to 50% inheritance tax"],
    2,
    "Lump sum death benefits from registered pensions are tax-free to beneficiaries (spouse, children, etc). Exception: if member had accessed flexible benefits (drawdown), lump sums may be taxable after 2 years of death."
  ),

  q("fpa-ch3-pension-sharing-on-divorce-56", "cisi-fpa", "fpa-ch3", "3.3", "Pension Sharing", "retirement", "medium",
    "What is pension sharing on divorce?",
    ["Ex-spouse keeps pension in original scheme", "Court can order member to share percentage of pension fund value; ex-spouse receives independent pension credit", "Pension stops on divorce", "Only annuity can be shared"],
    1,
    "Pension sharing: Court order allocates % of fund (e.g., 40%) to ex-spouse. Creates separate pension credit. Each party has independent pension. Common in divorce settlements post-2000."
  ),

  q("fpa-ch3-auto-enrolment-contribution-rates-57", "cisi-fpa", "fpa-ch3", "3.3", "Auto-Enrolment Rates", "retirement", "easy",
    "What is the minimum total contribution rate for auto-enrolment in 2025-26?",
    ["8%", "12%", "10%", "5%"],
    0,
    "Minimum total: 8% of qualifying earnings. Employer minimum 3%, employee minimum 5%. Employers can increase both. Earnings band: £10,600-£50,270 (2025-26). Contributions only on earnings in band."
  ),

  q("fpa-ch3-auto-enrolment-staging-date-58", "cisi-fpa", "fpa-ch3", "3.3", "Auto-Enrolment Staging", "retirement", "medium",
    "What is auto-enrolment staging date?",
    ["Fixed date for all employers", "Employer-specific date determined by PAYE reference; employer must enrol eligible staff by staging date", "Date pension scheme established", "Completion date only"],
    1,
    "Staging date: 3-8 years after business registration. Example: Start Jan 2020 > Staging June 2023 > must auto-enrol by June 2023. Non-compliance attracts penalties."
  ),

  q("fpa-ch3-state-pension-deferral-incentive-59", "cisi-fpa", "fpa-ch3", "3.1", "State Pension Deferral", "retirement", "medium",
    "What is the deferral incentive for state pension reached after 6 April 2016?",
    ["1% extra per month (12% per year)", "1% extra per 9 weeks (5.8% per year)", "2% extra per month", "Fixed 10% increase"],
    1,
    "New state pension deferral (post-6 April 2016): 1% increase per 9 weeks = 5.8% per 12 months. Example: defer 12 months = 5.8% higher pension. Less generous than pre-April 2016 (10.4%)."
  ),

  q("fpa-ch3-state-pension-deferral-death-60", "cisi-fpa", "fpa-ch3", "3.1", "State Pension Death Deferral", "retirement", "medium",
    "If member dies during state pension deferral (post-April 2016), what happens to deferred benefits?",
    ["Deferred benefits pass to spouse", "Deferred benefits lost; no entitlement to lump sum", "Deferred pension claimed as lump sum", "Spouse inherits full deferred benefits"],
    1,
    "Post-April 2016: If death during deferral, deferred benefits are lost (no lump sum or inheritance option). Spouse can claim up to 3 months arrears only. Different from pre-April 2016 rules."
  ),

  q("fpa-ch3-state-pension-age-61", "cisi-fpa", "fpa-ch3", "3.1", "State Pension Age", "retirement", "easy",
    "What is the current state pension age for men and women born after 6 April 1978?",
    ["65", "66", "67", "68"],
    2,
    "Current SPA is 66 for both. By 2028, SPA for both will be 67. By 2039, it will be 68. SPA continues to increase due to longevity. Regular reviews every 5 years."
  ),

  q("fpa-ch3-class-1-nic-employee-62", "cisi-fpa", "fpa-ch3", "3.2", "National Insurance Class 1", "retirement", "easy",
    "What is the main source of state pension entitlement for employed individuals?",
    ["Class 2 NI (self-employed)", "Class 1 NI (employees); contributions by employed person and employer build state pension record", "Capital gains contributions", "Voluntary contributions only"],
    1,
    "Class 1 NI: Employees and employers pay. For 2025-26: employee 8% on earnings £12,570-£50,270. State pension requires 35 qualifying years (10 for some entitlement)."
  ),

  q("fpa-ch3-lifetime-allowance-abolished-63", "cisi-fpa", "fpa-ch3", "3.2", "Lifetime Allowance", "retirement", "easy",
    "What happened to the lifetime allowance for pensions?",
    ["Frozen at £1m", "Abolished from 6 April 2023; no upper limit on total pension savings", "Reduced to £500k", "Increased to £2m"],
    1,
    "LTA abolished April 2023. Previously limited total pension savings to £1,073,100 (2023). Now unlimited pension saving. Removes penalty for large pots. Simplifies tax planning."
  ),

  q("fpa-ch3-pension-contributions-relief-cessation-64", "cisi-fpa", "fpa-ch3", "3.2", "Contributions After Age Limit", "retirement", "medium",
    "Can pension contributions continue after state pension age?",
    ["No, must stop at SPA", "Yes, contributions can continue; no upper age limit for contributions (but MPAA or AA still apply)", "Only TAS contributions allowed", "Only employer contributions allowed"],
    1,
    "No age limit for contributions. Person aged 70 can contribute to pension (subject to AA/MPAA). Employer can contribute regardless of age. Useful for working past SPA."
  ),

  q("fpa-ch3-small-pots-lump-sum-65", "cisi-fpa", "fpa-ch3", "3.4", "Small Pots Lump Sum", "retirement", "medium",
    "What is the maximum value of a small pots lump sum?",
    ["£1,000", "£2,000", "£10,000", "£5,000"],
    2,
    "Small pots lump sum: up to £10,000 per pot. Can withdraw up to 3 pots in lifetime without LTA testing or UFPLS rules. Must have reached minimum pension age. Tax treatment: 75% taxable, 25% tax-free."
  ),

  q("fpa-ch3-trivial-commutation-lump-sum-66", "cisi-fpa", "fpa-ch3", "3.4", "Trivial Commutation", "retirement", "medium",
    "What is the maximum value for a trivial commutation lump sum?",
    ["£2,000", "£10,000", "£30,000", "£50,000"],
    2,
    "Trivial commutation: total pension value must be <£30,000 (DB scheme or in-house scheme pension). Criteria: member age 55+, scheme rules allow, totally extinguish benefits. Tax: 25% free, 75% taxable."
  ),

  q("fpa-ch3-uncrystallised-funds-pension-lump-sum-67", "cisi-fpa", "fpa-ch3", "3.4", "UFPLS", "retirement", "medium",
    "What is an Uncrystallised Funds Pension Lump Sum (UFPLS)?",
    ["Fixed pension income for life", "Lump sum from uncrystallised DC pension fund; 25% tax-free, 75% taxable as income; fund stays invested", "Annuity purchase", "State pension deferral"],
    1,
    "UFPLS: Member can take lump sum from uncrystallised DC pot without accessing remaining funds. 25% automatic tax relief (PCLS equivalent), 75% taxed as income. Useful pre-annuity/drawdown."
  ),

  q("fpa-ch3-serious-ill-health-lump-sum-68", "cisi-fpa", "fpa-ch3", "3.4", "Serious Ill-Health Lump Sum", "retirement", "medium",
    "What is the tax treatment of a serious ill-health lump sum?",
    ["Fully taxable", "Fully tax-free if member diagnosed with <12 months to live; exception if over 75 (taxed normally)", "50% tax-free", "Subject to income tax only"],
    1,
    "Serious ill-health: Fully tax-free if member aged <75 with medical diagnosis of <12 months to live. Age 75+: taxed as normal income. Rare but valuable relief for terminal diagnosis."
  ),

  q("fpa-ch3-winding-up-lump-sum-69", "cisi-fpa", "fpa-ch3", "3.4", "Winding-Up Lump Sum", "retirement", "medium",
    "What is a winding-up lump sum?",
    ["Drawdown pension payment", "Payment when DB occupational scheme wound up; max £18,000 uncrystallised; normal tax applies unless aged 55+", "Trivial commutation", "UFPLS payment"],
    1,
    "Winding-up: Available when occupational scheme (usually DB) closes. <£18k: normal tax treatment. ≥£18k: commutation rules apply. Member must consent and benefits extinguished."
  ),

  q("fpa-ch3-pension-commencement-lump-sum-70", "cisi-fpa", "fpa-ch3", "3.4", "PCLS", "retirement", "easy",
    "What is the maximum PCLS (Pension Commencement Lump Sum)?",
    ["25% of pension value at crystallisation", "50% of pension value", "Full value if under £30,000", "No limit"],
    0,
    "PCLS: 25% of fund value at crystallisation is tax-free. Remaining 75% taken as income (taxable) or invested (drawdown). Standard option when accessing pension from 55."
  ),

  q("fpa-ch3-pension-flexibility-age-55-71", "cisi-fpa", "fpa-ch3", "3.2", "Pension Flexibility Age", "retirement", "easy",
    "From what age can pension flexibility (drawdown, UFPLS, annuity) be accessed?",
    ["50", "55", "60", "65"],
    1,
    "Age 55: Minimum pension access age (rising to 57 from 6 April 2028). Member can access DC pension via drawdown, UFPLS, annuity, or PCLS from age 55. DB schemes follow their own rules (often later)."
  ),

  q("fpa-ch3-pension-freedoms-2015-72", "cisi-fpa", "fpa-ch3", "3.2", "Pension Freedoms", "retirement", "medium",
    "What major change was introduced by pension freedoms in 2015?",
    ["State pension raised to £10k per year", "Removed requirement to buy annuity; allowed drawdown, UFPLS, and flexible withdrawals from DC pensions from age 55", "Auto-enrolment introduced", "DB schemes replaced with DC"],
    1,
    "Pension freedoms (6 April 2015): Removed annuity requirement. Introduced drawdown, UFPLS, flexible withdrawals. Member choice paramount. Changed retirement planning significantly."
  ),

  q("fpa-ch3-defined-benefit-transfer-scams-73", "cisi-fpa", "fpa-ch3", "3.3", "DB Transfer Risk", "retirement", "hard",
    "What is a key risk when advising on defined benefit pension transfers?",
    ["Loss of guaranteed income (DB pension provides certainty; transfer to DC introduces investment risk, longevity risk, market risk); scam vulnerable members", "Fixed contribution rates", "State pension reduction", "Employer contribution increase"],
    0,
    "DB transfer risk: Member losing guaranteed income (e.g., £20k p.a. for life) to access lump sum. Investment risk, inflation risk, longevity risk now on member. Scams target elderly via free pension reviews (cold calls)."
  ),

  q("fpa-ch3-pension-sharing-court-order-74", "cisi-fpa", "fpa-ch3", "3.3", "Pension Sharing Court Order", "retirement", "medium",
    "What is required for pension sharing on divorce?",
    ["Mutual agreement only", "Court order implementing Matrimonial Causes Act 1973; specifies percentage of pension to transfer to ex-spouse; creates pension credit", "Pension provider agreement", "Both parties' written consent"],
    1,
    "Pension sharing: Requires Matrimonial Causes Act court order (not just agreement). Order specifies %, fund value, scheme details. Ex-spouse receives pension credit. Binding on pension provider."
  ),

  q("fpa-ch3-pension-offsetting-divorce-75", "cisi-fpa", "fpa-ch3", "3.3", "Pension Offsetting", "retirement", "medium",
    "What is pension offsetting in divorce settlements?",
    ["Member keeps pension; ex-spouse receives lump sum from other assets (e.g., house) instead of pension sharing", "Pension value split equally", "Pension transferred entirely", "Pension written off"],
    0,
    "Offsetting: Alternative to pension sharing. Example: Pension worth £400k, house worth £500k. Member keeps pension, ex-spouse gets £400k from house sale (offset against pension value). Simpler but ex-spouse loses pension's growth."
  ),

  q("fpa-ch3-occupational-pension-transfer-76", "cisi-fpa", "fpa-ch3", "3.3", "Occupational Pension Transfer", "retirement", "hard",
    "What is a transfer value in an occupational pension scheme?",
    ["Annual benefit amount", "Cash equivalent of pension benefits member can transfer to another scheme if transferred; protected rights if transferred from contracted-out DB", "Investment return", "Employer contribution rate"],
    1,
    "Transfer value: Cash amount scheme will pay if member transfers out. DB scheme calculates based on accrued benefits, age, life expectancy. Contractedly-out: protected rights portion must transfer separately."
  ),

  q("fpa-ch3-contracted-out-history-77", "cisi-fpa", "fpa-ch3", "3.1", "Contracted Out", "retirement", "medium",
    "What is contracted-out status and why is it relevant?",
    ["Current arrangement", "Historical: pre-2016 members could contract out of Additional State Pension via DB/COMP scheme or s226A COMP; creates 'protected rights'; now abolished but relevant for historic pensions", "Benefit reduction mechanism", "Auto-enrolment alternative"],
    1,
    "Contracted-out (ended 6 April 2016): Members in DB/COMP could opt out of additional state pension. Scheme liability for contracted-out rights. Now obsolete but many pensions still have contracted-out liabilities."
  ),

  q("fpa-ch3-earmarking-pension-divorce-78", "cisi-fpa", "fpa-ch3", "3.3", "Earmarking", "retirement", "medium",
    "What is earmarking in the context of pensions and divorce?",
    ["Automatic pension sharing", "Historic method (pre-2000): court could earmark portion of pension for ex-spouse; death of member ends earmarking; replaced by pension sharing post-2000", "Pension offsetting", "Transfer value locking"],
    1,
    "Earmarking (pre-Welfare Reform Act 1999): Court could earmark %, but ex-spouse had no independent right; revoked on member's death. Replaced by pension sharing (post-2000). Still exists for pre-2000 orders."
  ),

  q("fpa-ch3-pension-income-splitting-79", "cisi-fpa", "fpa-ch3", "3.4", "Income Splitting", "retirement", "medium",
    "Can pension income be split between spouses for tax planning?",
    ["Income attributed entirely to pension holder", "Income attributed to recipient/member only; no income splitting for tax; each spouse's personal allowance separate (but can gift between spouses non-taxable)", "Mandatory equal split", "Voluntary split option"],
    1,
    "No income splitting: Pension income taxed on member receiving it. Spouses have separate personal allowances. Spouse A's £12,570 allowance separate from Spouse B's. Any gift between spouses non-taxable."
  ),

  q("fpa-ch3-flexible-drawdown-mpaa-trigger-80", "cisi-fpa", "fpa-ch3", "3.4", "MPAA Trigger", "retirement", "hard",
    "When is MPAA triggered and what is the limit after trigger?",
    ["Triggered when member takes flexible access (drawdown/UFPLS/annuity purchase); contribution limit becomes £10,000 p.a. instead of £60,000", "Triggered at age 55", "Triggered on retirement", "Triggered at death"],
    0,
    "MPAA trigger: Any flexible income withdrawal (drawdown payment, UFPLS, annuity purchase) triggers MPAA. Post-trigger: max £10k p.a. to DC schemes. Applies immediately. No opt-out. Affects retirement planning."
  ),

  q("fpa-ch3-investment-pathways-rules-81", "cisi-fpa", "fpa-ch3", "3.4", "Investment Pathways", "retirement", "medium",
    "What are investment pathways in drawdown?",
    ["Fixed investment allocation", "4 risk-based pathways (Cautious, Balanced, Growth, Adventurous) for inactive drawdown members; offer escalation to active investment service", "Mandatory allocations", "Pension provider portfolios only"],
    1,
    "Investment pathways: 4 default glidepaths for inactive members in drawdown. Cautious (bonds), Balanced (60/40), Growth (equities), Adventurous (high equity). FCA requirement pre-Sept 2023. Members can opt out or transfer."
  ),

  q("fpa-ch3-pension-protection-fund-82", "cisi-fpa", "fpa-ch3", "3.3", "Pension Protection Fund", "retirement", "medium",
    "What is the role of the Pension Protection Fund (PPF)?",
    ["Promotes occupational pensions", "Safety net: pays benefits if occupational DB scheme fails; covers 90% of income up to cap (£12,539 p.a. 2024-25 for age 55); funds via levy on all schemes", "Manages state pension", "Authorises pension schemes"],
    1,
    "PPF: Covers ~160 occupational DB schemes in deficit. Pays members/pensioners up to 90% of accrued benefit if employer insolvent. Funded by residual assets + levy on schemes (0.29% max 2025-26)."
  ),

  q("fpa-ch3-defined-contribution-regulation-83", "cisi-fpa", "fpa-ch3", "3.3", "DC Regulation", "retirement", "easy",
    "Who regulates defined contribution pension schemes?",
    ["PensionsRegulator and FCA (dual regulation)", "PensionsRegulator oversees governance, funding, security; FCA authorises providers, supervises investment conduct; both statutory roles", "Treasury only", "Employers only"],
    1,
    "Dual regulation: TPR (governance, admin, funding), FCA (product conduct, investment management). Master trust schemes (NEST, The People's Pension) face additional checks. Enhanced regulation post-2015."
  ),

  q("fpa-ch3-fiduciary-duty-pension-84", "cisi-fpa", "fpa-ch3", "3.1", "Fiduciary Duty", "retirement", "medium",
    "What is the primary fiduciary duty of pension trustees?",
    ["Maximize investment returns", "Act in best interests of beneficiaries; manage scheme prudently; ensure benefits paid when due; follow scheme rules; comply with legislation", "Equal treatment of all members", "Minimize employer contributions"],
    1,
    "Trustee duty: Act for beneficiaries' best interests, not employers'. Manage assets prudently. Follow trust deed. Comply with law. If breach, trustee liable for losses. DC trustees appoint administrator for day-to-day."
  ),

  q("fpa-ch3-master-trust-scheme-85", "cisi-fpa", "fpa-ch3", "3.3", "Master Trust Schemes", "retirement", "medium",
    "What is a master trust pension scheme?",
    ["Single employer scheme", "Multi-employer scheme run by professional trustee; used by multiple unrelated employers; typically DC; examples NEST, TPP, NOW:Pensions; regulated by TPR for authorisation", "Occupational scheme", "Self-invested pension"],
    1,
    "Master trust: Single trustee, multiple employers (unrelated), typically DC auto-enrolment. Professional trustee, low costs. Must be TPR-authorised (from 2018). Failure risk covered by PPF successor."
  ),

  q("fpa-ch3-pension-charges-monitoring-86", "cisi-fpa", "fpa-ch3", "3.4", "Pension Charges", "retirement", "medium",
    "What annual management charge (AMC) should financial advisers monitor for DC pensions?",
    ["Unlimited charges", "FCA guidance: default funds typically 0.5%-1% AMC; transparent charges disclosed; high charges erode long-term returns significantly", "No charges allowed", "Capped at 0.1%"],
    1,
    "Charge monitoring: Over 30 years, 1% AMC vs 0.5% AMC = significant difference. £100k invested: 1% = £60k cost over time. FCA expects fair value; excessive charges undermine returns."
  ),

  q("fpa-ch3-pension-value-transfer-87", "cisi-fpa", "fpa-ch3", "3.3", "Transfer Value", "retirement", "hard",
    "What factors affect a pension transfer value?",
    ["Member age, scheme funding level, interest rates, member's health, actuarial assumptions; higher interest rates typically lower TV; healthy funding increases TV", "Member age alone", "Scheme type only", "Investment performance only"],
    0,
    "Transfer value calculation: Actuarial. Affected by: member age, accrual rate, scheme assumptions, interest rates, health. Low interest rates = higher TVs. Member must take transfer advice if TV >£30k (since Jan 2021)."
  ),

  q("fpa-ch3-pension-death-benefits-inheritance-88", "cisi-fpa", "fpa-ch3", "3.4", "Death Benefit Nomination", "retirement", "medium",
    "How are pension death benefits distributed if no nomination form is completed?",
    ["Automatically to spouse", "At discretion of trustees (subject to inheritance tax rules); typically follows family law or intestacy; trustees should seek guidance", "To legal estate", "Lost to scheme"],
    1,
    "No nomination: Trustees decide at discretion. Often spouse/children, but not guaranteed. Estate rules/intestacy don't apply (pension outside estate). Written nomination strongly advised; regular review essential."
  ),

  q("fpa-ch3-pension-recycling-rules-89", "cisi-fpa", "fpa-ch3", "3.2", "Pension Recycling", "retirement", "hard",
    "What is pension recycling and why is it restricted?",
    ["Legal tax planning", "Converting pension withdrawal to new contribution; HMRC rules restrict if pattern suggests recycling (e.g., withdraw £10k, recontribute £10k); can trigger unauthorised payment charges", "Mandatory contribution restructure", "Investment switching"],
    1,
    "Pension recycling: Withdraw UFPLS (25% tax-free), recontribute (20% relief). If HMRC identifies intentional pattern, recontribution treated as unauthorised payment. Penalties apply. Not outright ban but high-risk."
  ),

  q("fpa-ch3-pension-income-drawdown-sustainability-90", "cisi-fpa", "fpa-ch3", "3.4", "Sustainable Withdrawal Rate", "retirement", "hard",
    "What withdrawal rate is generally considered sustainable for a long-term drawdown pension?",
    ["10% per year", "4% rule (or lower); based on historical data; sustainable for 30+ year retirement without depleting capital", "1% per year", "No withdrawal safe"],
    1,
    "4% rule (Bengen): Historical data suggests 4% annual withdrawal sustainable over 30 years with 60/40 portfolio. Lower rates safer. FCA concerned 8%+ rates unsustainable. Depends on asset allocation, longevity."
  ),

  q("fpa-ch3-pension-lump-sum-commutation-frequency-91", "cisi-fpa", "fpa-ch3", "3.4", "Lump Sum Limits", "retirement", "medium",
    "How often can a small pots lump sum be withdrawn from the same scheme?",
    ["Once only", "Once per pot (up to 3 pots lifetime total); once 3 pots crystallised, no further lump sum options from that scheme without full drawdown", "Annually without limit", "Multiple times per pot"],
    1,
    "Small pots: Up to 3 separate pots (max £10k each). Once all 3 withdrawn, member must access remaining funds via drawdown/annuity. Designed for members with multiple small pensions (job changers)."
  ),

  q("fpa-ch3-pension-death-tax-relief-92", "cisi-fpa", "fpa-ch3", "3.4", "Death Tax Relief", "retirement", "medium",
    "If a pension member dies before reaching state pension age, what is the IHT treatment?",
    ["Subject to 40% inheritance tax", "Lump sum death benefits tax-free for IHT purposes (outside estate); surviving spouse/dependants receive tax-free", "Fully taxable", "50% taxable"],
    1,
    "Death pre-SPA: Lump sum benefits outside taxable estate (not subject to IHT). Spouse exemption may apply. Income drawdown remaining: tax-free on death if member hadn't accessed (or within 2 years of death)."
  ),

  q("fpa-ch3-pension-scheme-administration-93", "cisi-fpa", "fpa-ch3", "3.1", "Pension Administration", "retirement", "easy",
    "What is the primary responsibility of a pension scheme administrator?",
    ["Investment management", "Day-to-day operations: process contributions, pay benefits, maintain records, provide statements, administer rules (appointed by trustee or employer)", "Scheme governance", "Regulatory approval"],
    1,
    "Administrator role: Non-trustee; operational. Receives employer/employee contributions, applies scheme rules, pays benefits, sends statements, maintains records. TPR oversees compliance."
  ),

  q("fpa-ch3-pension-contributions-employment-cessation-94", "cisi-fpa", "fpa-ch3", "3.3", "Contributions After Cessation", "retirement", "medium",
    "Can an employee continue making pension contributions after leaving employment?",
    ["No, contributions must cease", "Yes, can continue via transfers (to personal pension) or direct contributions if self-employed; some schemes allow post-employment contributions", "Only employer can contribute", "Contributions become automatic"],
    1,
    "Post-employment: Can transfer to personal pension and continue. Can pay direct to new personal pension. Self-employed can contribute to own pension. No forced stoppage; flexibility available."
  ),

  q("fpa-ch3-pension-benefits-inheritance-spouse-95", "cisi-fpa", "fpa-ch3", "3.4", "Spouse Survivor Benefits", "retirement", "medium",
    "What survivor benefits are typically available to a spouse if member dies in drawdown?",
    ["Pension stops entirely", "Nominated beneficiary (spouse) can inherit remaining fund; withdraw as lump sum (if member died before age 75, normally tax-free) or continue drawdown", "Fixed annuity continues", "Benefits pass to state"],
    1,
    "Spouse inheritance: Remaining drawdown fund passes to nominated beneficiary (typically spouse). Death age <75: normally tax-free lump sum. Age 75+: taxed as income. Alternatively, spouse can continue drawdown."
  ),

  q("fpa-ch3-pension-annual-statement-96", "cisi-fpa", "fpa-ch3", "3.1", "Annual Pension Statement", "retirement", "easy",
    "What must an annual pension statement include?",
    ["Fund value, projected retirement income, member details, AUM charges", "Fund value, projected retirement income at current pension age, death benefits info, charges, contact details", "Investment options only", "No regulatory requirement"],
    1,
    "Statutory statement: Fund value, growth estimate, projected income, charges breakdown, contact details. FCA rules: COBS 7R.1. Sent by scheme/provider. Post-April 2020: contains KID summary."
  ),

  q("fpa-ch3-pension-provider-insolvency-97", "cisi-fpa", "fpa-ch3", "3.3", "Provider Insolvency", "retirement", "medium",
    "What protection exists if a personal pension provider becomes insolvent?",
    ["No protection available", "FSCS (Financial Services Compensation Scheme) covers up to £85,000 per customer; covers investment loss if provider fails", "Full refund guaranteed", "Assets transferred automatically"],
    1,
    "FSCS protection: Up to £85k per person per provider. If provider insolvent, FSCS pays out. Essential for advisers to check provider authorisation/FSCS status. Not all providers covered (e.g., unregulated)."
  ),

  q("fpa-ch3-pension-loss-claim-time-98", "cisi-fpa", "fpa-ch3", "3.1", "Pension Loss Time Limit", "retirement", "medium",
    "How long do clients have to claim for unsuitable pension advice?",
    ["1 year", "6 years from loss discovery (if concealed); standard 3 years for contract claims; extended if client unable to identify loss", "No time limit", "3 years only"],
    1,
    "Time limit: Typically 6 years (Limitation Act 1980) from loss discovery. If provider/adviser concealed facts, extended. DB transfer advice claims often 6+ years due to delayed harm discovery."
  ),

  q("fpa-ch3-pension-dashboard-requirements-99", "cisi-fpa", "fpa-ch3", "3.1", "Pension Dashboard", "retirement", "easy",
    "What is the Pension Dashboard and what is its purpose?",
    ["Stock market tracker", "Central repository to view all pensions (state, workplace, personal) in one place; mandatory provider participation from 2024-25; improves member engagement", "Investment fund selector", "Tax calculator only"],
    1,
    "Pension Dashboard: Government initiative. Members view all pension pots online. Encourages consolidation decisions. Addresses 'lost pensions' issue (estimated £20bn). Mandatory for providers (phased from 2024)."
  ),

  q("fpa-ch3-pension-charge-cap-default-100", "cisi-fpa", "fpa-ch3", "3.4", "Default Fund Charge Cap", "retirement", "medium",
    "What charge cap applies to workplace pension default funds?",
    ["0.1% per annum", "0.75% p.a. (maximum AMC + all charges); applies to default auto-enrolment funds; capped post-2012 to protect savers", "1.5% p.a.", "No cap"],
    1,
    "Charge cap: 0.75% max for auto-enrolment defaults (post-2012). Protects members from excessive charges eroding returns. Master trusts average 0.4-0.6%. High-charge schemes non-compliant with FCA expectations."
  ),

  // CHAPTER 4: RETIREMENT SOLUTIONS (30 NEW QUESTIONS)
  q("fpa-ch4-annuity-certainty-101", "cisi-fpa", "fpa-ch4", "4.2", "Annuity Features", "solutions", "easy",
    "What is the key advantage of a lifetime annuity?",
    ["High initial income", "Guaranteed income for life; eliminates longevity risk; no investment risk; certainty for budgeting", "Investment flexibility", "Bequeathability"],
    1,
    "Annuity advantage: Guaranteed income (e.g., £10k p.a. age 65-death). Member cannot outlive income. Insurance company bears longevity risk. Useful for members risk-averse or low life expectancy."
  ),

  q("fpa-ch4-annuity-rates-purchase-age-102", "cisi-fpa", "fpa-ch4", "4.2", "Annuity Rate Factors", "solutions", "medium",
    "What factors affect annuity rates at purchase?",
    ["Investment returns only", "Member age (older = higher rate), gender (if pre-April 2015), health, interest rates, pension fund size, annuity options selected (joint/escalation)", "Life expectancy uniformly applied", "Inflation only"],
    1,
    "Annuity rate determinants: Age (65 vs 60 = 20%+ rate difference), health (impaired = higher rate), interest rates (higher rates = higher annuity rate), fund size (larger = better rate)."
  ),

  q("fpa-ch4-joint-annuity-survivor-103", "cisi-fpa", "fpa-ch4", "4.2", "Joint Annuity", "solutions", "medium",
    "What is a joint annuity and how does survivor benefit work?",
    ["Single life annuity", "Income continues to surviving spouse at specified % (e.g., 50%, 75%, 100%) on member's death; involves actuarial reduction to initial rate", "Life annuity only", "Guaranteed period only"],
    1,
    "Joint annuity: Income age 65 (£10k) reduces after member's death (e.g., 75% joint = £7.5k to spouse for life). Couples can choose % continuation. Initial rate lower than single life."
  ),

  q("fpa-ch4-escalating-annuity-inflation-104", "cisi-fpa", "fpa-ch4", "4.2", "Escalating Annuity", "solutions", "medium",
    "How does an escalating annuity protect against inflation?",
    ["Fixed payment every year", "Income increases annually (fixed % or RPI); protects purchasing power over 30+ year retirement; higher initial rate but lower first income", "No inflation protection", "Lump sum adjustment"],
    1,
    "Escalating annuity example: Start £8k (escalating 3% p.a.) vs £10k (flat). After 10 years: escalating = £10.4k, flat = £10k. Trade-off: lower initial income but protected long-term."
  ),

  q("fpa-ch4-guaranteed-period-annuity-105", "cisi-fpa", "fpa-ch4", "4.2", "Guaranteed Period", "solutions", "easy",
    "What is a guaranteed period in an annuity contract?",
    ["Fixed contract term", "Minimum payment period (e.g., 5/10 years); if member dies before period end, remaining payments continue to beneficiary (not lost)", "Lifetime guarantee", "Investment guarantee"],
    0,
    "Guaranteed period: Death age 68 with 10-year guarantee means beneficiary receives remaining 7 years of payments. Without guarantee, all payments cease at death. Costs slightly more but provides security."
  ),

  q("fpa-ch4-with-profits-annuity-106", "cisi-fpa", "fpa-ch4", "4.2", "With-Profits Annuity", "solutions", "medium",
    "What are with-profits annuities and how do they differ from conventional annuities?",
    ["Fixed rate guarantee", "Conventional rate guaranteed; plus potential bonuses from with-profits fund performance; smoothed returns reduce volatility; less control than unit-linked", "Unit-linked returns", "No investment element"],
    1,
    "With-profits: Guaranteed base rate + annual bonuses from fund surplus (smoothed). Example: £10k guaranteed + 0.5% bonus = £10.05k (depends on fund performance). More complex than conventional."
  ),

  q("fpa-ch4-unit-linked-annuity-107", "cisi-fpa", "fpa-ch4", "4.2", "Unit-Linked Annuity", "solutions", "hard",
    "What is a unit-linked annuity and what risk does it involve?",
    ["Fixed income annuity", "Income linked to investment fund performance (varies monthly); no smoothing; member bears investment risk but benefits from growth; volatile but potentially higher income", "Guaranteed return", "No investment link"],
    1,
    "Unit-linked: Income varies with fund. Market boom = higher payment. Market crash = lower payment. Riskier than conventional but potential for growth-linked income. Requires risk tolerance."
  ),

  q("fpa-ch4-short-term-annuity-108", "cisi-fpa", "fpa-ch4", "4.2", "Short-Term Annuity", "solutions", "medium",
    "What is a short-term annuity and when is it useful?",
    ["Fixed for less than 5 years", "Fixed-term income (e.g., 5 years); then fund remaining; useful for bridging to state pension or deferring full annuity purchase; allows flexibility", "Temporary insurance", "Stopgap arrangement"],
    1,
    "Short-term annuity: Age 60 with small pot (£50k) = £10k p.a. for 5 years, then reassess. Useful bridge to SPA (age 67). Allows interest rate timing (buy annuity later if rates rise)."
  ),

  q("fpa-ch4-flexible-annuity-mpaa-109", "cisi-fpa", "fpa-ch4", "4.2", "Flexible Annuity", "solutions", "hard",
    "What is a flexible annuity and why does it trigger MPAA?",
    ["Standard annuity option", "Annuity allowing income reduction (not typical; rare product); payment flexibility triggers MPAA = £10k p.a. contribution limit post-purchase", "Income escalation only", "Investment flexibility"],
    1,
    "Flexible annuity: Can decrease income (not typical). Once purchased, MPAA triggered = no more £60k AA contributions allowed (only £10k p.a. to DC). Very rare; usually conventional/with-profits/unit-linked."
  ),

  q("fpa-ch4-impaired-life-annuity-110", "cisi-fpa", "fpa-ch4", "4.2", "Impaired Life Annuity", "solutions", "medium",
    "What is an impaired life annuity?",
    ["Standard annuity for all", "Enhanced annuity available to members with health conditions (diabetes, heart disease, smoking) reducing life expectancy; offers higher rate (e.g., 20-30% uplift)", "Annuity for poor savers", "Underwriting failure"],
    1,
    "Impaired life: Member with serious health (smoking, cancer history, obesity) qualifies for higher rate. Example: Standard £10k, impaired £12k. Requires medical evidence. Underwriting stringent."
  ),

  q("fpa-ch4-enhanced-annuity-lifestyle-factors-111", "cisi-fpa", "fpa-ch4", "4.2", "Enhanced Annuity", "solutions", "medium",
    "What lifestyle factors can trigger an enhanced annuity?",
    ["None; no lifestyle factors apply", "Smoking (major factor), occupation, postcode, alcohol consumption, family history; all can increase early death risk => higher rate", "Only health conditions", "Only occupation"],
    1,
    "Enhanced factors: Smoker add 15-20% to rate. Heavy alcohol use. Certain postcodes (health deprivation linked). Family history of early death. All accepted risk factors for insurers."
  ),

  q("fpa-ch4-pension-drawdown-mechanics-112", "cisi-fpa", "fpa-ch4", "4.3", "Drawdown Basics", "solutions", "easy",
    "How does pension drawdown work?",
    ["Fixed pension payment", "Member receives 25% PCLS tax-free, remaining fund invested; member withdraws as needed (taxed as income); fund stays invested (continues growing/falling)", "All withdrawals tax-free", "Annuity alternative"],
    1,
    "Drawdown: Age 55, fund £100k. Take £25k tax-free, invest £75k. Withdraw £10k = taxed as income. Remaining £65k invested in portfolio (can grow/fall). Full flexibility."
  ),

  q("fpa-ch4-drawdown-investment-sequencing-risk-113", "cisi-fpa", "fpa-ch4", "4.3", "Sequencing Risk", "solutions", "hard",
    "What is sequencing risk in pension drawdown?",
    ["Investment selection risk", "Risk that poor investment returns early in retirement (market crash) disproportionately impacts long-term sustainability; withdrawals from fallen portfolio = permanent loss", "Market recovery timing", "Contribution timing risk"],
    1,
    "Sequencing risk example: Market crash age 60 (£100k becomes £70k). Withdraw £5k = £65k remains. Never recovers fully. vs Crash age 75 (portfolio smaller) = less impact. Early crashes worse."
  ),

  q("fpa-ch4-critical-yield-concept-114", "cisi-fpa", "fpa-ch4", "4.3", "Critical Yield", "solutions", "hard",
    "What is critical yield in pension drawdown comparison?",
    ["Minimum return needed", "Return rate drawdown portfolio must achieve to match annuity income; if portfolio returns below critical yield, annuity was better choice", "Benchmark return", "Target rate of return"],
    1,
    "Critical yield: Annuity £10k p.a. for life (guaranteed). Drawdown £100k fund. Critical yield = annual return needed for £100k to sustain £10k withdrawals for 30 years (~4%). If market returns <4%, annuity superior."
  ),

  q("fpa-ch4-ufpls-uncrystallised-funds-115", "cisi-fpa", "fpa-ch4", "4.3", "UFPLS Overview", "solutions", "easy",
    "What does UFPLS allow that other options restrict?",
    ["Fixed income", "Lump sum withdrawal from uncrystallised DC fund; 25% tax-free, 75% taxable; doesn't trigger MPAA; funds remain invested", "Annuity purchase", "State pension access"],
    0,
    "UFPLS: Member draws £50k from £200k fund. Get £12.5k tax-free, £37.5k taxable. Remaining £150k invested. No MPAA trigger (unlike drawdown/annuity purchase). Useful for ad-hoc lump sums."
  ),

  q("fpa-ch4-capped-drawdown-critical-yield-116", "cisi-fpa", "fpa-ch4", "4.3", "Capped Drawdown", "solutions", "hard",
    "What is capped drawdown and how does critical yield apply?",
    ["Unlimited withdrawals", "Withdrawals limited to % of fund (capped based on critical yield assumptions); if investment returns fall below critical yield, drawdown capped to protect capital", "Fixed pension income", "Annuity alternative"],
    1,
    "Capped drawdown (pre-April 2015): FCA set cap based on 2.5% real return assumption. Critical yield 2.5% = drawdown cap (e.g., max 8% p.a. from £100k). Now largely replaced by Flexi-access."
  ),

  q("fpa-ch4-flexi-access-drawdown-117", "cisi-fpa", "fpa-ch4", "4.3", "Flexi-Access Drawdown", "solutions", "medium",
    "What is flexi-access drawdown (FAD) and how does it differ from capped drawdown?",
    ["Same as capped drawdown", "Unlimited withdrawals from crystallised DC fund (no cap); 25% PCLS tax-free each withdrawal; remaining taxed as income; investment flexibility", "Capped withdrawals", "Annuity equivalent"],
    1,
    "FAD (from April 2015): No cap on withdrawals. Member can take £50k (25% = £12.5k tax-free, £37.5k taxable) from £100k fund. Full flexibility. Replaces capped drawdown."
  ),

  q("fpa-ch4-cash-buffer-sequencing-mitigation-118", "cisi-fpa", "fpa-ch4", "4.3", "Cash Buffer Strategy", "solutions", "medium",
    "How does a cash buffer mitigate sequencing risk?",
    ["Doesn't help sequencing risk", "Hold 2-3 years expenses in cash/bonds; withdraw from cash buffer in downturns (avoid selling equities at loss); equity portion stays invested for recovery", "Reduces market volatility", "Eliminates risk entirely"],
    1,
    "Cash buffer: Age 60, portfolio £500k. Hold £30k (3 years expenses) in cash. Market crashes 40%. Withdraw from cash, equities recover. Without buffer, forced to sell equities at loss."
  ),

  q("fpa-ch4-dynamic-spending-strategy-119", "cisi-fpa", "fpa-ch4", "4.3", "Dynamic Spending", "solutions", "medium",
    "What is a dynamic spending strategy in drawdown?",
    ["Fixed withdrawal plan", "Spending varies with portfolio performance; reduce in downturns, increase in upturns; maintains capital better than fixed withdrawals", "Annual rebalancing", "Tax planning tool"],
    1,
    "Dynamic spending: £100k fund, 4% = £4k target. Market up 20% = increase to £4.8k. Market down 20% = reduce to £3.2k. Protects capital while allowing flexibility. Requires discipline."
  ),

  q("fpa-ch4-sustainable-withdrawal-4-percent-120", "cisi-fpa", "fpa-ch4", "4.3", "4% Rule", "solutions", "medium",
    "What does the 4% withdrawal rule suggest about portfolio sustainability?",
    ["5% annual withdrawal sustainable", "4% annual withdrawal from invested portfolio sustainable for 30+ year retirement (60/40 allocation); historically survived market scenarios", "2% only sustainable", "10% achievable"],
    1,
    "4% rule (Bengen research): Withdraw 4% of portfolio in year 1 (adjust for inflation). 94% succeeded in sustaining 30-year retirement (1926-1976 data). Modern criticism: 8% withdrawal unsustainable."
  ),

  q("fpa-ch4-post-retirement-asset-allocation-121", "cisi-fpa", "fpa-ch4", "4.4", "De-Risking in Retirement", "solutions", "medium",
    "How should asset allocation typically change in retirement via drawdown?",
    ["More equity exposure", "Gradual de-risking (glide path); shift from growth (equities) to income/stability (bonds, dividends); maintain some equity exposure for longevity hedge", "Full equity to bonds shift", "100% cash allocation"],
    1,
    "De-risking example: Pre-retirement 80/20 (equities/bonds). Age 70: 50/50. Age 80: 30/70. Maintains capital preservation while accepting inflation risk. Prevents sequence-of-return disaster."
  ),

  q("fpa-ch4-horizon-planning-investment-pathways-122", "cisi-fpa", "fpa-ch4", "4.4", "Horizon Planning", "solutions", "hard",
    "What is horizon planning in retirement and how does it relate to investment pathways?",
    ["Single investment strategy throughout", "Segregate portfolio by timescale (1-2 years cash/bonds, 3-10 years balanced, 10+ years equity); aligns withdrawal timeline with asset risk", "Time-weighted returns", "Duration matching"],
    1,
    "Horizon planning (bucketing): Year 1-2 expenses in bonds (low risk). Years 3-10 in balanced (medium risk). Years 10+ in equity (growth). Reduces timing pressure, improves sustainability."
  ),

  q("fpa-ch4-dividend-income-strategy-123", "cisi-fpa", "fpa-ch4", "4.3", "Natural Income Strategy", "solutions", "medium",
    "What is a natural income strategy in drawdown?",
    ["Active trading approach", "Portfolio positioned for dividend/bond income; withdraw only income generated (reinvest capital growth); preserves capital base", "Capital withdrawal only", "Fixed withdrawal rate"],
    1,
    "Natural income: £500k portfolio, 4% yield = £20k income. Withdraw £20k (don't touch capital). Capital grows tax-free (in pension). Psychological comfort but may miss growth needed for inflation."
  ),

  q("fpa-ch4-phased-retirement-annuity-purchase-124", "cisi-fpa", "fpa-ch4", "4.2", "Phased Annuity Purchase", "solutions", "medium",
    "What is phased retirement using annuities?",
    ["Retiring gradually", "Purchase annuities incrementally (e.g., age 60, 65, 70); locks in income at different rates; diversifies interest rate risk; captures rising rates", "Full retirement only", "Deferral strategy"],
    1,
    "Phased annuity: Age 60 buy £50k annuity (£5k p.a.). Age 70 buy £100k annuity (£15k p.a.). Rates may improve over time. If rates stay low, early purchase better. Mixed approach reduces timing risk."
  ),

  q("fpa-ch4-hybrid-retirement-solution-125", "cisi-fpa", "fpa-ch4", "4.2", "Hybrid Solutions", "solutions", "hard",
    "What is a hybrid retirement solution combining annuity and drawdown?",
    ["Annuity only", "Allocate portion to annuity (secure base income), rest to drawdown (flexibility for excess spending); balances certainty with upside", "Drawdown only", "Neither approach"],
    1,
    "Hybrid example: £500k fund. Buy £150k annuity = £12k p.a. guaranteed. Keep £350k in drawdown = flexibility for gifts, travel, emergencies. Best of both worlds for many retirees."
  ),

  // CHAPTER 5: FINANCIAL PLANNING RECOMMENDATIONS (20 NEW QUESTIONS)
  q("fpa-ch5-suitability-report-minimum-content-126", "cisi-fpa", "fpa-ch5", "5.1", "Suitability Report Content", "recommendations", "easy",
    "What are the minimum components of a suitability report (per FCA rules)?",
    ["Investment name only", "Specified client demands/needs, reason transaction is suitable (having regard to client info), explanation of disadvantages", "Fund performance only", "No specific requirement"],
    1,
    "FCA requirement (COBS 1R.2.1R): Suitability report must specify: client demands/needs, why recommendation suitable, possible disadvantages. Protects client and adviser by documenting rationale."
  ),

  q("fpa-ch5-cashflow-modelling-inflation-127", "cisi-fpa", "fpa-ch5", "5.1", "Cashflow Modelling", "recommendations", "medium",
    "Why is inflation assumption critical in cashflow modelling?",
    ["Not important", "Determines long-term purchasing power; 2% inflation vs 4% = 50% difference in real value over 30 years; affects retirement income sustainability", "Same as investment return", "Not modelled"],
    1,
    "Cashflow inflation: Assume £40k annual spending. 2% inflation = £60k by age 85. 4% inflation = £84k. Portfolio must generate inflation-adjusted amounts. Longevity + inflation = major planning risk."
  ),

  q("fpa-ch5-recommendation-review-frequency-128", "cisi-fpa", "fpa-ch5", "5.2", "Review Frequency", "recommendations", "medium",
    "How often should financial plans be formally reviewed?",
    ["Never required", "Minimum annually (per FCA MiFID II rules); more frequent if major changes (job loss, inheritance, marriage)", "Every 5 years", "Only on request"],
    0,
    "Review requirement: COBS 6.1.5R: At least annual review. Ad-hoc reviews if material changes (£50k inheritance, redundancy, health diagnosis). Documentation essential."
  ),

  q("fpa-ch5-attitude-to-risk-questionnaire-129", "cisi-fpa", "fpa-ch5", "5.1", "ATR Documentation", "recommendations", "easy",
    "Why must attitude to risk (ATR) be formally documented?",
    ["Informal assessment sufficient", "Prevents disputes (written record of client's risk appetite, capacity for loss); supports suitability evidence if questioned by FCA", "Verbal confirmation adequate", "Not necessary"],
    1,
    "ATR documentation: Written questionnaire captures risk profile. Example: 'Client states 'medium' risk tolerance, can afford 15% annual volatility, time horizon 15 years.' Creates objective record for suitability evidence."
  ),

  q("fpa-ch5-capacity-for-loss-definition-130", "cisi-fpa", "fpa-ch5", "5.1", "Capacity for Loss", "recommendations", "medium",
    "How is capacity for loss assessed?",
    ["Client's willingness only", "Hard facts: income, expenses, liabilities, time horizon; maximum loss client can afford without jeopardizing essential needs", "Attitude to risk only", "Risk questionnaire score"],
    1,
    "Capacity assessment: Client £50k salary, £30k essential expenses = £20k surplus. Can afford to lose £5k (25% of surplus) without essential impact. This is capacity, distinct from willingness."
  ),

  q("fpa-ch5-recommendation-suitability-analysis-131", "cisi-fpa", "fpa-ch5", "5.1", "Suitability Analysis", "recommendations", "medium",
    "What is the process for assessing suitability of a recommendation?",
    ["Compare to alternatives", "1) Identify objective (goal). 2) Identify alternatives (3+). 3) Evaluate each vs client's situation (ATR, capacity, costs, timing). 4) Select best match. 5) Document reasoning.", "Cost comparison only", "Manager approval"],
    1,
    "Suitability process: Client wants retirement income £40k. Options: (1) Annuity (£450k purchase), (2) Drawdown (£500k), (3) ISA ladder. Evaluate each. Annuity best for certainty, drawdown best for flexibility."
  ),

  q("fpa-ch5-cashflow-projection-longevity-132", "cisi-fpa", "fpa-ch5", "5.1", "Longevity Assumption", "recommendations", "medium",
    "What longevity assumption is appropriate for cashflow modelling?",
    ["Average life expectancy only", "Plan to age 95-100 (for couples, consider longer-lived spouse); don't assume average (85) as half the population lives longer", "Fixed age 80", "100% certainty"],
    1,
    "Longevity planning: Age 65 male life expectancy = 84. But 25% chance reaching 95+. Model to 95-100 to avoid outliving capital. Couples should model to age 100+ (longer-lived spouse)."
  ),

  q("fpa-ch5-cost-benefit-analysis-recommendation-133", "cisi-fpa", "fpa-ch5", "5.1", "Cost-Benefit Analysis", "recommendations", "medium",
    "How should costs impact recommendation selection?",
    ["Highest fee recommended", "Lower cost = net benefit; 1% p.a. higher fee over 30 years = £60k less (on £200k fund); must balance quality vs cost", "Costs irrelevant", "Fee comparison only"],
    1,
    "Cost impact: Option A (annuity 0.75% cost), Option B (drawdown 1.5% cost). Over 30 years, Option B costs 0.75% more = £20k+ difference. Must justify cost by tangible benefit."
  ),

  q("fpa-ch5-alternative-courses-of-action-134", "cisi-fpa", "fpa-ch5", "5.1", "Alternative Recommendations", "recommendations", "hard",
    "What should be documented when no suitable product exists?",
    ["Recommendation must be forced", "If no suitable product available, document alternative courses of action (e.g., delay action, rearrange finances, accept risk); don't recommend unsuitable product", "Recommend unsuitable", "Abandon planning"],
    1,
    "No suitable product: Client wants £60k p.a. with £100k fund. No sustainable drawdown available. Document alternatives: work longer, reduce spending expectations, use phased approach. Do not force unsuitable recommendation."
  ),

  q("fpa-ch5-suitability-report-timing-135", "cisi-fpa", "fpa-ch5", "5.1", "Suitability Report Delivery", "recommendations", "easy",
    "When must suitability report be provided to client?",
    ["After transaction completion", "Before transaction conclusion; gives client time to review and ask questions; improves decision quality", "30 days after", "Not always required"],
    0,
    "FCA timing: Before transaction (initial advice). Post-conclusion (execution-only). Documentation maintains good practice. Client signs acknowledging receipt and understanding (or declines transaction)."
  ),

  q("fpa-ch5-portfolio-rebalancing-trigger-136", "cisi-fpa", "fpa-ch5", "5.2", "Rebalancing Decisions", "recommendations", "medium",
    "What should trigger portfolio rebalancing during reviews?",
    ["No trigger needed", "Drift from target (e.g., 60/40 target becomes 55/45 or 65/35 = 5% drift); typically triggers review; also market milestone (50% gain/loss)", "Annual rebalancing mandatory", "Never rebalance"],
    1,
    "Rebalancing trigger: If 60/40 target drifts 5% = 55/45 or 65/35. Typical guidance: monitor quarterly, rebalance if drift >5% or annually. Prevents over-concentration from winner stocks."
  ),

  q("fpa-ch5-risk-profile-reassessment-review-137", "cisi-fpa", "fpa-ch5", "5.2", "Risk Profile Changes", "recommendations", "medium",
    "Why should risk profile be reassessed during reviews?",
    ["Set once, never changes", "Circumstances change (health diagnosis, job loss, inheritance); ATR/capacity evolve; portfolio suitability must be re-confirmed", "Only if client requests", "Fixed at advice"],
    1,
    "Risk reassessment: Client age 45, medium risk, portfolio 70/30. At age 55, inheritance arrives = capacity increases. Market decline = willingness may decrease. Re-assess ATR, adjust if needed."
  ),

  q("fpa-ch5-performance-review-benchmark-comparison-138", "cisi-fpa", "fpa-ch5", "5.2", "Performance Monitoring", "recommendations", "medium",
    "What benchmark should be used to assess portfolio performance?",
    ["Absolute return target only", "Relevant benchmark (e.g., 60% MSCI World + 40% Bloomberg Bond Index for 60/40 portfolio); compares against peer funds and market", "S&P 500 always", "No benchmark needed"],
    1,
    "Benchmark example: 60/40 portfolio returned 5%, benchmark 6% = underperformance. Investigate: excessive fees? Underperforming manager? Rebalance overdue? Adjust allocation if persistent."
  ),

  q("fpa-ch5-life-circumstance-update-review-139", "cisi-fpa", "fpa-ch5", "5.2", "Circumstance Changes", "recommendations", "easy",
    "What life circumstances should trigger an ad-hoc review?",
    ["No trigger", "Marriage/divorce, birth of child, job loss/change, inheritance, serious health diagnosis, major market events; all can affect planning", "Only annual review", "Client never changes"],
    1,
    "Life triggers: Divorce (pension sharing needed), inheritance (asset allocation change), redundancy (emergency fund depletion), health diagnosis (life expectancy reassessment). Reviews essential."
  ),

  q("fpa-ch5-recommendation-implementation-monitoring-140", "cisi-fpa", "fpa-ch5", "5.2", "Implementation Tracking", "recommendations", "medium",
    "How should adviser monitor implementation of recommendations?",
    ["No monitoring", "Confirm each action completed; track timelines; follow up on delays; update client on progress; document implementation in file", "Client responsibility only", "Assume completion"],
    1,
    "Implementation example: Action list includes 'Open ISA by March 2026'. Adviser checks in February to confirm status, helps if obstacles arise, documents completion. Accountability throughout."
  ),

  q("fpa-ch5-documentation-and-evidence-suitability-141", "cisi-fpa", "fpa-ch5", "5.1", "Suitability Evidence", "recommendations", "hard",
    "What documentation provides evidence of suitability for advice given?",
    ["Sales brochure only", "Written fact-find (ATR/capacity documented), suitability report (objectives/alternatives/selection reasoning), product KFD/KID, client signature acknowledging receipt", "Verbal discussion notes", "No specific evidence needed"],
    1,
    "Suitability evidence file: Fact-find (signed), ATR questionnaire, cashflow model, suitability report, product docs, client email acceptance. FCA expects complete audit trail proving recommendation suitable."
  ),

  q("fpa-ch5-ongoing-advice-annual-review-scope-142", "cisi-fpa", "fpa-ch5", "5.2", "Annual Review Scope", "recommendations", "medium",
    "What should comprehensive annual review cover?",
    ["Fund prices only", "Fund value, performance vs benchmark, life changes, goal progress, ATR reassessment, costs review, market impacts, rebalancing needs, projections updated", "Client satisfaction only", "No specific scope"],
    1,
    "Comprehensive review: Check portfolio value (up/down?), compare performance to benchmark, ask about job/health/family changes, recalculate retirement projections with new inputs, adjust if drifted significantly."
  ),

  q("fpa-ch5-switching-funds-suitability-documentation-143", "cisi-fpa", "fpa-ch5", "5.1", "Fund Switch Suitability", "recommendations", "medium",
    "What documentation is required when switching funds during a review?",
    ["No documentation needed", "Suitability report explaining reason for switch, costs of switching (exit charges, tax), benefits expected, ATR alignment confirmation", "Sales confirmation only", "Manager approval only"],
    1,
    "Switch documentation: Current fund underperforming (5% return vs 7% benchmark). New fund matches benchmark better, same costs, compatible ATR. Suitability report justifies switch cost-benefit."
  ),

  q("fpa-ch5-tax-efficient-planning-withdrawal-strategy-144", "cisi-fpa", "fpa-ch5", "5.1", "Tax Efficiency Strategy", "recommendations", "hard",
    "How should advisers optimize tax efficiency in recommendations?",
    ["Ignore tax implications", "Coordinate drawdown sequencing (ISA > pension > taxable), maximize personal allowances, consider spouse's allowance, time capital gains, utilize losses", "Tax optimization secondary", "CG tax only"],
    1,
    "Tax strategy: Spouse has unused allowance. Shift income to lower-tax spouse if possible. Use ISA allowance (tax-free growth). Time CGT crystallization (£3k annual exemption). Coordinate retirement income timing."
  ),

  q("fpa-ch5-adviser-conflict-of-interest-disclosure-145", "cisi-fpa", "fpa-ch5", "5.1", "Conflict Disclosure", "recommendations", "easy",
    "How must advisers handle potential conflicts of interest?",
    ["Not disclosed", "Identify conflicts (e.g., adviser commission on Product A vs Product B), disclose to client in writing before advice, get informed consent", "Verbal disclosure", "Client approval assumed"],
    1,
    "Conflict example: Adviser receives 1% commission for Fund A but 0.5% for Fund B. Must disclose that A is more profitable for adviser. Client then decides freely (informed consent). Document."
  ),

];

export default FPA_NEW_QUESTIONS;

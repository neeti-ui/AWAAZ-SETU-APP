// api/brief.js - Awaaz Setu Gemini Policy Brief Generator
// Generates actionable 100-150 word formal government memos for ranked projects

const SCHEME_MAPPING = {
  "Water": {
    scheme: "Jal Jeevan Mission (Har Ghar Jal) & AMRUT 2.0",
    ministry: "Ministry of Jal Shakti, Government of India",
    interventions: "emergency solar desalination units, deep aquifer recharge, and tail-end piped water supply networks"
  },
  "Roads": {
    scheme: "Pradhan Mantri Gram Sadak Yojana (PMGSY-IV) & CRIF",
    ministry: "Ministry of Rural Development & MoRTH",
    interventions: "climate-resilient high-level bridges, flood embankment stabilization, and all-weather blacktopped road links"
  },
  "Health": {
    scheme: "National Health Mission (NHM) & PM-ABHIM",
    ministry: "Ministry of Health & Family Welfare",
    interventions: "upgradation of Primary Health Centers, 24x7 solar power backups, cold-chain refrigeration, and tele-ICU linkages"
  },
  "Education": {
    scheme: "Samagra Shiksha Abhiyan & PM SHRI Schools",
    ministry: "Ministry of Education, Government of India",
    interventions: "winterized modular classrooms, smart science & digital labs, and dedicated functional sanitary complexes"
  },
  "Electricity": {
    scheme: "Revamped Distribution Sector Scheme (RDSS) & PM-KUSUM",
    ministry: "Ministry of Power & MNRE",
    interventions: "transformer capacity augmentation, dedicated feeder separation, and decentralized solar microgrid installations"
  },
  "Sanitation": {
    scheme: "Swachh Bharat Mission (Grameen) Phase-II",
    ministry: "Department of Drinking Water and Sanitation",
    interventions: "elevated flood-resilient community sanitary complexes, greywater treatment soak pits, and solid-waste recovery centers"
  }
};

/**
 * Generate a formal government memo offline citing exact metrics
 */
function generateOfflinePolicyBrief(data) {
  const {
    district = "Barmer",
    state = "Rajasthan",
    category = "Water",
    score = 87.4,
    rank = 1,
    requestCount = 149,
    infraIndex = 22,
    plannedInvestment = 12.5,
    underinvestmentGap = 15.5,
    clusterTitle = "Saline Groundwater & Defunct Deep Borewells",
    urgency = "High"
  } = data;

  const schemeInfo = SCHEME_MAPPING[category] || SCHEME_MAPPING["Water"];
  const gapPct = 100 - Number(infraIndex);
  const totalNeed = (Number(plannedInvestment) + Number(underinvestmentGap)).toFixed(1);
  const memoDate = new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
  const memoRef = `DPC/${state.substring(0, 3).toUpperCase()}/${district.substring(0, 3).toUpperCase()}/${new Date().getFullYear()}/PR-${rank}`;

  const text = `GOVERNMENT OF ${state.toUpperCase()}
OFFICE OF THE DISTRICT PLANNING COMMITTEE — ${district.toUpperCase()}
MEMORANDUM FOR SPECIAL CAPITAL ALLOCATION

MEMO REF: ${memoRef}
DATE: ${memoDate}
TO: Principal Secretary, ${schemeInfo.ministry} & District Collector, ${district}
SUBJECT: Emergency Capital Reallocation for ${category.toUpperCase()} Infrastructure (Priority Index: ${score}/100 | Rank #${rank})

1. CITIZEN DEMAND & VULNERABILITY CONTEXT:
Decentralized demand aggregation on the Awaaz Setu platform has registered ${requestCount} verified citizen requests in ${district}, clustered around "${clusterTitle}". The district infrastructure index stands at a critical ${infraIndex}/100, representing a severe ${gapPct}% systemic deficit that disproportionately impacts vulnerable populations.

2. FISCAL DEFICIT ASSESSMENT:
While current FY planned expenditure is capped at ₹${plannedInvestment} Crore, the empirical capital requirement benchmark stands at ₹${totalNeed} Crore, resulting in an unallocated funding deficit of ₹${underinvestmentGap} Crore.

3. ACTIONABLE DIRECTIVE:
Recommend immediate invocation of contingency funding under ${schemeInfo.scheme} to mobilize an urgent tranche of ₹${underinvestmentGap} Crore. Interventions must prioritize ${schemeInfo.interventions}. Real-time telemetry via Awaaz Setu will benchmark project delivery against citizen satisfaction metrics.

[APPROVED FOR DISPATCH]
Adviser (Infrastructure & Digital Public Goods)
State Development Council, ${state}`;

  return text;
}

/**
 * Call Gemini API for generating dynamic policy brief
 */
async function callGeminiBrief(apiKey, model, data) {
  const {
    district = "Barmer",
    state = "Rajasthan",
    category = "Water",
    score = 87.4,
    rank = 1,
    requestCount = 149,
    infraIndex = 22,
    plannedInvestment = 12.5,
    underinvestmentGap = 15.5,
    clusterTitle = "Saline Groundwater Deficit",
    urgency = "High",
    population = "2.6 Million"
  } = data;

  const schemeInfo = SCHEME_MAPPING[category] || SCHEME_MAPPING["Water"];

  const prompt = `You are a Senior IAS Officer and Chief Economic Adviser to the State Planning Board in India.
Write a formal, concise, and actionable 100-150 word Government Memorandum / Policy Action Brief based on the following verified data from Awaaz Setu (India's Citizen Demand Digital Public Infrastructure):

DATA POINTS TO CITE EXPLICITLY:
- Target District & State: ${district}, ${state} (Population: ~${population})
- Infrastructure Sector: ${category} (Priority Score: ${score}/100, Priority Rank #${rank})
- Citizen Demand Volume: ${requestCount} verified citizen requests clustered under "${clusterTitle}"
- Infrastructure Readiness Index: ${infraIndex}/100 (indicating a ${100 - infraIndex}% gap)
- Current Budget Allocation: ₹${plannedInvestment} Crore
- Capital Under-Investment Deficit: ₹${underinvestmentGap} Crore
- Relevant National Mission: ${schemeInfo.scheme} (${schemeInfo.ministry})
- Urgency: ${urgency}

REQUIREMENTS:
1. Tone: Authoritative, formal Indian bureaucratic government memorandum (IAS/Chief Secretary tone).
2. Word count: 110-150 words.
3. Structure:
   - Header: MEMORANDUM FOR CAPITAL ALLOCATION, Ref No., To, Subject
   - Section 1: Empirical Demand & Ground Vulnerability (cite the ${requestCount} citizen requests and ${infraIndex}/100 index)
   - Section 2: Fiscal Gap & Budget Deficit (cite the ₹${plannedInvestment} Cr allocation vs ₹${underinvestmentGap} Cr deficit)
   - Section 3: Actionable Directive & Scheme Invocation (recommend specific sanction under ${schemeInfo.scheme})
   - Closing: Sign-off block
4. Do NOT use placeholder brackets like "[Insert Date]"; fill in realistic dates and references. Citing the exact numbers is mandatory.`;

  const primaryModel = model || process.env.GEMINI_MODEL || "gemini-2.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${primaryModel}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 500
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API HTTP ${response.status}: ${errorText}`);
  }

  const json = await response.json();
  const generatedText = json?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!generatedText) {
    throw new Error("No brief content returned from Gemini API");
  }

  return generatedText.trim();
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS, GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {
    return res.status(200).json({
      service: "Awaaz Setu Policy Brief Generator",
      status: "operational",
      geminiKeyConfigured: Boolean(process.env.GEMINI_API_KEY)
    });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    let body = req.body;
    if (typeof body === "string") {
      try { body = JSON.parse(body); } catch (e) { /* ignore */ }
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";

    if (apiKey && apiKey.trim() !== "") {
      try {
        const briefText = await callGeminiBrief(apiKey, model, body || {});
        return res.status(200).json({
          success: true,
          aiProvider: model,
          policyBrief: briefText,
          meta: {
            district: body?.district,
            category: body?.category,
            score: body?.score,
            generatedAt: new Date().toISOString()
          }
        });
      } catch (geminiErr) {
        console.warn("Gemini policy brief failed, using high-fidelity fallback:", geminiErr.message);
        const fallbackText = generateOfflinePolicyBrief(body || {});
        return res.status(200).json({
          success: true,
          aiProvider: "offline-rule-engine",
          warning: "Gemini API unavailable; executed policy brief engine in offline fallback mode.",
          policyBrief: fallbackText,
          meta: {
            district: body?.district,
            category: body?.category,
            score: body?.score,
            generatedAt: new Date().toISOString()
          }
        });
      }
    } else {
      const fallbackText = generateOfflinePolicyBrief(body || {});
      return res.status(200).json({
        success: true,
        aiProvider: "offline-rule-engine",
        notice: "Operating in deterministic offline fallback mode (GEMINI_API_KEY not set).",
        policyBrief: fallbackText,
        meta: {
          district: body?.district,
          category: body?.category,
          score: body?.score,
          generatedAt: new Date().toISOString()
        }
      });
    }
  } catch (err) {
    console.error("Error in /api/brief:", err);
    return res.status(500).json({
      error: "Internal server error generating brief",
      details: err.message
    });
  }
};

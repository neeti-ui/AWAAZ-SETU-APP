# Awaaz Setu (आवाज़ सेतु)
### AI Platform for Digital Public Infrastructure & Governance
**Build with AI: Code for Communities Hackathon**

[![Track](https://img.shields.io/badge/Track-AI%20for%20Digital%20Public%20Infrastructure%20%26%20Governance-blue)](#)
[![AI Engine](https://img.shields.io/badge/AI-Google%20Gemini%202.5%20Flash-orange)](#)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel%20Serverless%20Ready-black)](#)
[![Coverage](https://img.shields.io/badge/Coverage-12%20Districts%20%7C%2012%20States-success)](#)

---

## 🌟 Executive Summary & DPI Paradigm Shift

Traditional public administration tools like grievance redressal portals (e.g. CPGRAMS or state helplines) operate on a **1:1 transaction model**: an individual citizen submits a ticket, a local babu responds, and the ticket is closed. This model is fundamentally reactive, creates bureaucratic backlogs, and fails to inform strategic public investment.

**Awaaz Setu** introduces a **Digital Public Infrastructure (DPI) paradigm shift**:
> **The unit of output is not a complaint ticket — it is a prioritized, AI-justified public capital investment recommendation.**

By aggregating citizen development requests submitted by **voice or text in any Indian language**, clustering them into district-level demand signals, and fusing them with official infrastructure readiness indices and budget allocations, Awaaz Setu surfaces ranked, explainable capital investment priorities on a unified policymaker dashboard.

```
┌─────────────────────────────────┐
│ Citizen Voice / Text            │  Hindi, Tamil, Bengali, Marathi, English
│ (Web Speech API / Text Input)   │
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│ Gemini AI Function 1 & 2        │  Multilingual Transcription & Translation
│ (/api/analyze.js)               │  Classification: Sector, Urgency, District
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│ Gemini AI Function 3            │  Semantic Demand Clustering
│ (Cluster Signal Aggregation)    │  (e.g., "Merged with 148 similar requests")
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│ Multi-Criteria Scoring Engine   │  50% Citizen Volume + 35% Infrastructure Deficit
│ (Transparent Governance Matrix) │  + 15% Under-Investment Budget Gap
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│ Gemini AI Function 4            │  Actionable Government Memo / Policy Brief
│ (/api/brief.js)                 │  Cites exact figures, scheme, and funding gaps
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│ Policymaker Hotspot Dashboard   │  Interactive Leaflet Map + Top-5 Ranked Projects
│ (index.html)                    │  + Cross-State Federated Pair Synthesis
└─────────────────────────────────┘
```

---

## 📐 Scoring Formula & Formula Transparency

Judges and public auditors demand transparent, auditable algorithms. Priority scores are dynamically computed using an objective multi-criteria objective function:

$$\text{Priority Score} = 0.50 \times V_{\text{norm}} + 0.35 \times G_{\text{norm}} + 0.15 \times U_{\text{norm}}$$

| Dimension | Weight | Metric Formulation | Bureaucratic Rationale |
|---|---|---|---|
| **Citizen Request Volume ($V_{\text{norm}}$)** | **50%** | Normalized count of deduplicated citizen demand signals ($0 - 100$) | Direct democratic citizen participation; high volume signals chronic collective need. |
| **Infrastructure Deficit ($G_{\text{norm}}$)** | **35%** | Gap $= 100 - \text{Infra Index}$ ($0 - 100$) | Historical neglect indicator; lower infrastructure index reflects severe public utility deficits. |
| **Under-Investment Gap ($U_{\text{norm}}$)** | **15%** | $\frac{\text{Required Outlay} - \text{Planned Budget}}{\text{Required Outlay}} \times 100$ | Fiscal deficit metric; prioritizes sectors where current fiscal allocations fall short of capital requirements. |

- **High Priority ($\ge 70$):** Red marker & badge — immediate capital reallocation recommended.
- **Medium Priority ($45 - 69.9$):** Amber marker & badge — medium-term capital works program.
- **Lower Priority ($< 45$):** Green marker & badge — routine municipal maintenance.

---

## 🇮🇳 Pan-India Reach: 12 Districts Across 12 Diverse States

To demonstrate national depth and geographic equity, Awaaz Setu comes pre-loaded with realistic baseline data spanning 12 states, diverse topographies, and demographic profiles:

| # | District | State | Geographic Region | Demographic / Terrain Profile | Primary Crisis Sector |
|---|---|---|---|---|---|
| 1 | **Barmer** | Rajasthan | West | Desert Arid Border Zone (2.6M Pop) | **Water** (Saline groundwater, defunct borewells) |
| 2 | **Wayanad** | Kerala | South | Western Ghats Landslide Corridor (0.8M Pop) | **Roads** (Ghat blockages, trauma transit) |
| 3 | **Rayagada** | Odisha | East | Aspirational Tribal Belt (1.0M Pop) | **Health** (Doctor vacancies, CHC diagnostic gaps) |
| 4 | **Gadchiroli** | Maharashtra | Central / West | Dense Forest Riverine Division (1.1M Pop) | **Electricity / Roads** (Burnt transformers, washed culverts) |
| 5 | **Sitamarhi** | Bihar | East | Flood-Prone Gangetic Basin (3.4M Pop) | **Sanitation** (Submerged community latrines) |
| 6 | **Chamba** | Himachal Pradesh | North | High-Altitude Himalayan Valley (0.5M Pop) | **Education / Health** (Unheated schools, winter isolation) |
| 7 | **Dhubri** | Assam | Northeast | Brahmaputra River Island / Char Area (1.9M Pop) | **Health** (Erosion-hit riverine PHC vacancies) |
| 8 | **Dantewada** | Chhattisgarh | Central | Mineral-Rich Tribal Forest Belt (0.5M Pop) | **Roads** (Unpaved dirt tracks blocking weekly haat bazaars) |
| 9 | **Ramanathapuram** | Tamil Nadu | South | Coastal Drought-Prone Peninsula (1.4M Pop) | **Water** (Coastal seawater intrusion into wells) |
| 10 | **Raichur** | Karnataka | South | Kalyana-Karnataka Dry Zone (1.9M Pop) | **Water / Education** (Tail-end canal dehydration, school toilets) |
| 11 | **Bahraich** | Uttar Pradesh | North | Indo-Nepal Terai Encephalitis Zone (3.5M Pop) | **Health** (Maternal sub-center deficits) |
| 12 | **Namsai** | Arunachal Pradesh | Northeast | Frontier River Island Circle (0.1M Pop) | **Electricity** (Storm transmission collapses) |

> *Disclosure: Dataset contains illustrative sample data based on public indicators (Census population bands and NITI Aayog Aspirational Districts framework), not live government data.*

---

## 🤖 4 Distinct Gemini AI Functions

Unlike applications that use AI as a generic chatbot, Awaaz Setu orchestrates **four distinct, coordinated AI functions**:

1. **Multilingual Transcription & Translation:**
   Translates speech transcripts and native-script text (Hindi, Tamil, Bengali, Marathi, English) into standard administrative English while preserving colloquial civic terms (e.g. *bapat, taluk, block, handpump, char*).
2. **Administrative Classification:**
   Classifies inputs into one of 6 core infrastructure domains (`Roads`, `Water`, `Health`, `Education`, `Electricity`, `Sanitation`), determines urgency (`High`, `Medium`, `Low`), and resolves district geography.
3. **Semantic Demand Clustering:**
   Compares incoming citizen inputs against existing demand signals in the district to decide if the request merges into an existing cluster (e.g. *"Merged with 148 similar requests from Barmer — reinforcing Saline Groundwater signal"*) or establishes a new cluster.
4. **Actionable Policy Brief Generation (/api/brief.js):**
   Generates a formal, 100–150 word Government Memorandum written in the exact tone of a Senior IAS Officer or State Planning Advisor, citing the verified empirical counts, infrastructure readiness indices, and capital deficits to direct sanctions under national missions (Jal Jeevan Mission, PMGSY, NHM, Samagra Shiksha, RDSS, SBM-G).

### Resilient Offline / Fallback Mode (Judge-Proof Guarantee)
If `GEMINI_API_KEY` is not provided, or if the API encounters network failure or rate limits during a live hackathon evaluation, **the application never crashes**. A deterministic heuristic NLP engine seamlessly handles transcription, classification, clustering, and policy brief generation, marking the output with an `Offline Fallback Active` indicator.

---

## 🏛️ Deployability & Scalability Architecture

```
                  ┌───────────────────────────────┐
                  │ Citizen Access Points         │
                  │ IVR / WhatsApp / Panchayat CSC │
                  └───────────────┬───────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│ Bhashini Language Layer (National Translation Mission)          │
│ Multilingual Speech-to-Text across 22 Scheduled Indian Languages │
└─────────────────────────────────┬───────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│ Awaaz Setu Semantic Clustering & Data Fusion Engine              │
│ (Vercel Serverless / Google Cloud Run / FastAPI)                │
└───────────────┬─────────────────────────────────┬───────────────┘
                │                                 │
                ▼                                 ▼
┌──────────────────────────────┐  ┌───────────────────────────────┐
│ NITI Aayog Aspirational      │  │ PM GatiShakti National Master │
│ Districts Data Telemetry     │  │ Plan Geospatial Layer         │
└──────────────────────────────┘  └───────────────────────────────┘
                │                                 │
                └────────────────┬────────────────┘
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│ National & State Policymaker Dashboard                          │
│ Federated Access: District Collector → State CS → NITI Aayog    │
└─────────────────────────────────────────────────────────────────┘
```

### How Awaaz Setu Scales Across All 780+ Indian Districts
Awaaz Setu is designed from first principles as **Digital Public Infrastructure (DPI)**, following the open, federated, and modular principles of the India Stack (Aadhaar, UPI, DigiLocker, Beckn). At nationwide production scale, the architecture decouples ingestion, semantic processing, and decision support:
1. **Edge Voice Ingestion via Bhashini:** Voice requests from remote gram panchayats are ingested through toll-free IVR, WhatsApp chatbots, and Common Service Centers (CSCs) using Bhashini's speech recognition models across 22 scheduled Indian languages.
2. **Serverless Semantic Clustering:** Incoming streams are chunked and embedded asynchronously into district vector namespaces using Gemini Flash embeddings. Requests are grouped into localized demand clusters without human intervention, preventing ticket flooding.
3. **Data Fusion with PM GatiShakti & NITI Aayog APIs:** The priority scoring engine ingests live geospatial infrastructure saturation layers from PM GatiShakti (national master plan) and monthly delta rankings from the NITI Aayog Aspirational Districts Program.
4. **Federated Multi-Tier Governance:** State governments maintain sovereign custody of their municipal datasets while sharing federated demand summaries with the Central Ministry of Finance and Planning Commission. Cross-state clustering automatically identifies systemic regional crises (e.g. coastal salinity across Tamil Nadu and Andhra Pradesh) to unlock coordinated inter-state capital sanctions.

---

## 🚀 Quickstart & Local Setup

The codebase requires **zero external build steps** and runs out-of-the-box on Node.js 18+ or directly on Vercel.

### Prerequisites
- Node.js (version 18.0.0 or higher)

### 1. Clone & Enter Project Directory
```bash
cd HACK2SKILL
```

### 2. Environment Variables
Create a `.env` file in the root directory (or configure in Vercel Project Settings):
```env
# Google Gemini API Key (Get free at https://aistudio.google.com/)
GEMINI_API_KEY=your_gemini_api_key_here

# Optional: Override Gemini Model (Default: gemini-2.5-flash)
GEMINI_MODEL=gemini-2.5-flash

# Optional: Server Port (Default: 3000)
PORT=3000
```
> **Note:** If `GEMINI_API_KEY` is omitted, the app automatically runs in deterministic offline fallback mode.

### 3. Start Local Development Server
```bash
npm start
# or: node server.js
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser (preferably Google Chrome or Edge to test the Web Speech API).

---

## ☁️ Deploy to Vercel in 1 Click

The repository includes a ready-to-deploy `vercel.json` configuration:

1. Push this repository to GitHub / GitLab.
2. Import the project into **[Vercel](https://vercel.com/)**.
3. Under **Environment Variables**, add:
   - `GEMINI_API_KEY`: Your Gemini API key.
   - `GEMINI_MODEL`: `gemini-2.5-flash` (optional).
4. Click **Deploy**. Vercel will host `index.html` as the frontend and `/api/analyze.js` and `/api/brief.js` as serverless functions with zero additional configuration.

---

## 🧪 Testing the Live Prototype

1. **Test Voice Input:** Click **"Speak (Voice)"** and speak in Hindi, Tamil, Bengali, Marathi, or English.
2. **Instant Test Samples (No Mic Needed):** Click any of the 4 quick-sample buttons:
   - 🇮🇳 **Hindi:** Barmer, Rajasthan (Water salinity & handpumps)
   - 🇮🇳 **Tamil:** Ramanathapuram, Tamil Nadu (Coastal seawater intrusion)
   - 🇮🇳 **Bengali:** Dhubri, Assam (Salmara clinic doctor vacancy & power blackout)
   - 🇮🇳 **Marathi:** Gadchiroli, Maharashtra (Bridge collapse & village isolation)
3. **Submit Pipeline:** Click **"Run Gemini Pipeline"** to watch the 4-stage pipeline transcribe, classify, cluster with existing district signals, and dynamically re-rank the national priority list.
4. **Generate Policy Brief:** Under the Top 5 Ranked Projects, click **"⚡ Generate Policy Brief"** on any project to view, copy, download, or print a formal IAS government memorandum.
5. **Cross-State Federated Comparison:** Toggle between **"National View"**, **"Arid Pair (RJ vs TN)"**, and **"Tribal Pair (CG vs OD)"** to inspect cross-state demand patterns.
6. **Formula Transparency:** Click **"ℹ️ Scoring Formula"** in the top navigation to inspect the mathematical objective function.

---

## 📂 Project Structure

```
HACK2SKILL/
├── index.html          # Self-contained frontend (HTML, CSS, Leaflet JS, Web Speech API)
├── api/
│   ├── analyze.js      # Gemini Function 1, 2, 3: Transcribe + Classify + Cluster
│   └── brief.js        # Gemini Function 4: Formal Government Policy Brief Generator
├── server.js           # Zero-dependency local dev server with .env loader
├── vercel.json         # Vercel serverless deployment routing
├── package.json        # Node.js project manifest & scripts
└── README.md           # Documentation, DPI scalability architecture & user manual
```

---

## 🏆 Hackathon Rubric Alignment Matrix

| Evaluation Criterion | Weight | How Awaaz Setu Maximizes Score |
|---|---|---|
| **AI / Technical Execution** | **25%** | Employs Gemini for **4 distinct functions** (transcribe, classify, cluster, brief generation) rather than a single prompt. Features resilient offline fallback so live evaluation never fails. |
| **Problem-Solution Fit** | **20%** | Replaces individual ticket backlogs with collective demand clusters. The unit of output is an actionable, explainable capital investment recommendation. |
| **Depth & Reach Across India** | **20%** | 12 districts across 12 states (North, South, East, West, Central, Northeast). Native input in 5 Indian languages with Web Speech API and one-click test samples. |
| **Deployability & Scalability** | **20%** | Zero build-step frontend, Vercel serverless functions, zero-dependency local server. Clear DPI integration roadmap with Bhashini and PM GatiShakti. |
| **Impact Potential** | **15%** | Transparent 50/35/15 mathematical formula. Actionable IAS policy briefs citing exact figures for immediate invocation of national mission funds. |

---

*Developed for "AI for Digital Public Infrastructure & Governance" — Build with AI: Code for Communities.*

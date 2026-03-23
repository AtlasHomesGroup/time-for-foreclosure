// ============================================================
// Game Data extracted from "How to Use Your Time for Foreclosure Deals"
// by Michael Franke (Niche Playbook)
// ============================================================

// --- FLASHCARDS ---
export interface Flashcard {
  id: number;
  category: string;
  front: string;
  back: string;
}

export const flashcards: Flashcard[] = [
  // Outreach Points & Scoreboard
  { id: 1, category: "Outreach Points", front: "How many Outreach Points is one call attempt worth?", back: "1 point per call attempt to a real seller on your Niche data." },
  { id: 2, category: "Outreach Points", front: "How many Outreach Points is one door knock worth?", back: "10 points per door knock on a Gold or Silver property." },
  { id: 3, category: "Outreach Points", front: "What is the daily Outreach Points target for a 1-hour lane?", back: "20 Outreach Points per day." },
  { id: 4, category: "Outreach Points", front: "What is the daily Outreach Points target for a 2-hour lane?", back: "40 Outreach Points per day." },
  { id: 5, category: "Outreach Points", front: "What is the daily Outreach Points target for a 4-hour lane?", back: "60–80 Outreach Points per day." },
  { id: 6, category: "Outreach Points", front: "What is the daily Outreach Points target for a full-time (8+ hour) lane?", back: "100 Outreach Points per day." },
  { id: 7, category: "Outreach Points", front: "When is your day 'done' in this system?", back: "When you've run at least one Outreach block (Desk or Field), hit your lane's Points target, and logged it." },
  { id: 8, category: "Outreach Points", front: "What is the core formula: more points leads to what?", back: "More points → more conversations → more appointments and offers → more contracts." },

  // 50/30/20 Split
  { id: 9, category: "Time Management", front: "What is the 50/30/20 time split for Niche workdays?", back: "~50% Outreach, ~30% Training & Practice, ~20% Admin, Tracking & Community." },
  { id: 10, category: "Time Management", front: "What must ALWAYS come first in your Niche day?", back: "Outreach. Training and admin come after. You don't earn the right to learn more until you've done the work." },
  { id: 11, category: "Time Management", front: "What is 'Money Time'?", back: "The hours when your brain is sharpest and energy is highest. That's when Outreach must live — not meetings, Slack, or content." },
  { id: 12, category: "Time Management", front: "How long should you commit to a lane before changing it?", back: "At least 4 weeks before you change your lane." },

  // Modes
  { id: 13, category: "Modes", front: "What are the two modes of Outreach?", back: "Desk Mode (phone, CRM, calls) and Field Mode (car, doors, knocking)." },
  { id: 14, category: "Modes", front: "What do you do in Desk Mode?", back: "Talk to sellers on the phone, work follow-ups, book appointments, move deals forward through the pipeline." },
  { id: 15, category: "Modes", front: "What do you do in Field Mode?", back: "Knock on Gold and Silver doors, see houses with your own eyes, talk to neighbors, leave marketing pieces." },
  { id: 16, category: "Modes", front: "What is the biggest productivity leak for most investors?", back: "Context switching — half-dialing between errands, half-knocking between tasks, never building momentum in either channel." },
  { id: 17, category: "Modes", front: "What is Hybrid Mode?", back: "Running Desk Mode and Field Mode in separate blocks inside the same day or week — never mixing them in the same hour." },
  { id: 18, category: "Modes", front: "What is the simple rule for Hybrid?", back: "One block, one mode, one job. Decide in advance when you'll be at the desk and when you'll be in the field." },

  // Four Money Windows
  { id: 19, category: "Money Windows", front: "What is Zone 1 — the Shock Window?", back: "The first 10 days after NOD (Notice of Default) is filed. Owners can't rest and want to solve the problem fast." },
  { id: 20, category: "Money Windows", front: "What is Zone 2 — the Panic Window?", back: "The first couple of days after NOTS (Notice of Trustee's Sale) posts, when the sale is still more than 10 days out." },
  { id: 21, category: "Money Windows", front: "What is Zone 3 — the Deadline Window?", back: "The last 10 days before the sale date. Other options are failing and sellers are finally ready to choose." },
  { id: 22, category: "Money Windows", front: "What is Zone 4 — the Second Chance Window?", back: "Sales that were canceled or expired. Many loan mods and bankruptcy plans fail, and these sellers often return to foreclosure within 12 months." },
  { id: 23, category: "Money Windows", front: "What is the 'Middle Window'?", back: "Everything between Zones 1–4: NODs in day 20–70, NOTS far from sale, files with no new events. Lower priority — use to top off points." },
  { id: 24, category: "Money Windows", front: "Why is Zone 4 (expired/canceled) valuable?", back: "A huge percentage of loan modifications don't hold long-term, and many bankruptcy repayment plans aren't sustainable. These sellers end up back in foreclosure within 12 months." },

  // Gold / Silver / Bronze
  { id: 25, category: "Lead Quality", front: "What are Gold, Silver, and Bronze?", back: "Quality buckets for leads. Gold = best shots, Silver = good opportunities, Bronze = everything else." },
  { id: 26, category: "Lead Quality", front: "Which quality levels get door knocks?", back: "Only Gold and Silver. Bronze lives in phone and automated follow-up only." },
  { id: 27, category: "Lead Quality", front: "In what order do you work quality buckets?", back: "Gold first, then Silver, then Bronze." },

  // Desk Mode Call Ladder
  { id: 28, category: "Desk Mode", front: "What is the Desk Mode call order (Step 1)?", back: "Live Deals First: appointments today, offers out, promised callbacks. Highest-leverage dials." },
  { id: 29, category: "Desk Mode", front: "What is the Desk Mode call order (Step 2)?", back: "Follow-ups in the Money Windows: people you've already spoken to in Zones 1–4, Gold then Silver." },
  { id: 30, category: "Desk Mode", front: "What is the Desk Mode call order (Step 3)?", back: "New Outreach in the Money Windows: sellers you haven't spoken to yet in Zones 1–4, Gold then Silver." },
  { id: 31, category: "Desk Mode", front: "What is the Desk Mode call order (Step 4)?", back: "The Middle Window: everyone not in Zones 1–4. Gold then Silver. Used to top off your score, not replace earlier steps." },
  { id: 32, category: "Desk Mode", front: "What should Desk Mode feel like?", back: "Almost boring. Sit down, open lists in order, call until the scoreboard says you're done. Not a creative session." },

  // Field Mode / Knock Plan
  { id: 33, category: "Field Mode", front: "What is the ideal knock plan per Gold/Silver property?", back: "2 knocks in first 10 days after NOD, 1 knock when NOTS hits (sale >10 days out), 2 knocks in last 10 days before sale = 5 total touches." },
  { id: 34, category: "Field Mode", front: "How many total well-timed touches per property?", back: "Five: not five visits in one week, but five well-timed touches over the life of the foreclosure." },
  { id: 35, category: "Field Mode", front: "When should you build your route?", back: "BEFORE your Field block, not during it. Planning in the car during your knocking block is hiding, not working." },
  { id: 36, category: "Field Mode", front: "What 3 questions determine today's field route?", back: "1) Who has a sale in next 10 days without both last-10 knocks? 2) Who got a NOD in last 10 days without both early knocks? 3) Who just got a NOTS without their early knock?" },

  // Funnel & KPIs
  { id: 37, category: "Funnel & KPIs", front: "What are the 6 stages of the Niche Funnel?", back: "1. Prospects → 2. Contacted → 3. Quality Conversations → 4. Appointments → 5. Contracts → 6. Closed Deals." },
  { id: 38, category: "Funnel & KPIs", front: "What is the cold call benchmark for 100 dials?", back: "~10 contacts → ~5 quality conversations → ~2 appointments." },
  { id: 39, category: "Funnel & KPIs", front: "What percentage of cold calls connect to a human?", back: "About 10% of dials connect to a human." },
  { id: 40, category: "Funnel & KPIs", front: "What percentage of door knocks get answered?", back: "About 30% of doors will be answered." },
  { id: 41, category: "Funnel & KPIs", front: "What is the door knock benchmark for 10 knocks?", back: "~3 contacts → ~1–2 quality conversations → ~0.5–1 appointments." },
  { id: 42, category: "Funnel & KPIs", front: "What percentage of quality conversations should become appointments?", back: "About 40% of quality conversations should turn into an appointment (for both calls and doors)." },

  // Diagnosing Problems
  { id: 43, category: "Funnel & KPIs", front: "If Points are low, what's the problem?", back: "A volume problem — you need more at-bats." },
  { id: 44, category: "Funnel & KPIs", front: "If Points are fine but Contacts are low, what's the problem?", back: "A data/contact problem — your lists, contact data, or call times need work." },
  { id: 45, category: "Funnel & KPIs", front: "If Contacts are fine but Quality Conversations are low, what's the problem?", back: "A first-ten-seconds problem — your opening and rapport need work." },
  { id: 46, category: "Funnel & KPIs", front: "If Quality Conversations are fine but Appointments are low, what's the problem?", back: "An ask/positioning problem — you're not converting conversations into commitments." },
  { id: 47, category: "Funnel & KPIs", front: "If Appointments are fine but Contracts are low, what's the problem?", back: "A closing and follow-through problem." },

  // System & Mindset
  { id: 48, category: "System & Mindset", front: "What is the playbook's core mantra?", back: "You don't rise to the level of your goals. You fall to the level of your daily behavior." },
  { id: 49, category: "System & Mindset", front: "What are the 3 questions to ask at the start of every day?", back: "1) How many hours do I actually have today? 2) What is my Outreach Points target? 3) Am I in Desk Mode or Field Mode right now?" },
  { id: 50, category: "System & Mindset", front: "What are the 4 questions on the Daily Checklist?", back: "1) Did I choose my mode for each block? 2) Did I run the right play? 3) Did I hit my Points target? 4) Did I log what I did?" },
  { id: 51, category: "System & Mindset", front: "What should you do when you feel stuck?", back: "Don't start over. Run the checklist: check your calendar, check your Points for last 2 weeks, check your funnel stages." },
  { id: 52, category: "System & Mindset", front: "How many variables should you change at a time?", back: "Only one major variable at a time. Don't simultaneously change market, lists, pitch, and schedule." },
  { id: 53, category: "System & Mindset", front: "What's the W-2 hybrid weekly pattern?", back: "Weeknights: Desk Mode (phone from home). Weekends: one Field block (Saturday for door knocking)." },
  { id: 54, category: "System & Mindset", front: "What does a full-time hybrid day look like?", back: "Morning: Desk Mode (live deals & follow-ups). Midday: Field Mode (door routes). Late afternoon: Desk Mode again (finish points, training, admin)." },
];

// --- NUMBER CRUNCH SCENARIOS ---
export interface NumberCrunchScenario {
  id: number;
  question: string;
  inputs: Record<string, number>;
  correctAnswer: number;
  unit: string;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

export const numberCrunchScenarios: NumberCrunchScenario[] = [
  {
    id: 1,
    question: "You made 60 call attempts today and knocked on 4 Gold doors. How many Outreach Points did you earn?",
    inputs: { "Call attempts": 60, "Door knocks": 4 },
    correctAnswer: 100,
    unit: "points",
    explanation: "60 calls × 1 point = 60 points. 4 door knocks × 10 points = 40 points. Total = 60 + 40 = 100 Outreach Points.",
    difficulty: "easy",
  },
  {
    id: 2,
    question: "You're in the 2-hour lane (40 pts/day) and only have time for Desk Mode tonight. How many calls do you need to make to hit your daily target?",
    inputs: { "Daily target": 40, "Points per call": 1 },
    correctAnswer: 40,
    unit: "calls",
    explanation: "Each call attempt = 1 point. To reach 40 points with calls only: 40 ÷ 1 = 40 calls.",
    difficulty: "easy",
  },
  {
    id: 3,
    question: "A full-time operator makes 50 calls and knocks 3 doors. They need 100 points/day. How many more calls are needed?",
    inputs: { "Calls made": 50, "Doors knocked": 3, "Daily target": 100 },
    correctAnswer: 20,
    unit: "calls",
    explanation: "50 calls = 50 pts. 3 knocks × 10 = 30 pts. Total so far = 80. Need 100 − 80 = 20 more calls.",
    difficulty: "easy",
  },
  {
    id: 4,
    question: "Using the benchmark, if you make 200 cold calls in a week, how many appointments should you expect?",
    inputs: { "Weekly calls": 200, "Contact rate": 10, "QC rate": 50, "Appt rate": 40 },
    correctAnswer: 4,
    unit: "appointments",
    explanation: "200 calls × 10% contact = 20 contacts. 20 × 50% quality = 10 QCs. 10 × 40% appointment = 4 appointments.",
    difficulty: "medium",
  },
  {
    id: 5,
    question: "You knock 10 Gold/Silver doors. Using the benchmarks, how many quality conversations should you expect?",
    inputs: { "Doors knocked": 10, "Answer rate": 30, "Quality rate": 50 },
    correctAnswer: 1.5,
    unit: "quality conversations",
    explanation: "10 knocks × 30% answered = 3 contacts. 3 × 50% quality = 1.5 quality conversations.",
    difficulty: "easy",
  },
  {
    id: 6,
    question: "A W-2 investor works 5 weeknights at 30 points/night plus one Saturday field block with 6 door knocks. What are their weekly total Outreach Points?",
    inputs: { "Weeknight points": 30, "Weeknights": 5, "Saturday knocks": 6 },
    correctAnswer: 210,
    unit: "points/week",
    explanation: "Weeknights: 5 × 30 = 150 points. Saturday: 6 knocks × 10 = 60 points. Total = 150 + 60 = 210 points/week.",
    difficulty: "medium",
  },
  {
    id: 7,
    question: "A full-time operator hits 100 points/day, 5 days/week. Using call benchmarks (all points from calls), how many appointments per week?",
    inputs: { "Daily points": 100, "Work days": 5, "Contact rate %": 10, "QC rate %": 50, "Appt rate %": 40 },
    correctAnswer: 10,
    unit: "appointments/week",
    explanation: "500 calls/week. 500 × 10% = 50 contacts. 50 × 50% = 25 QCs. 25 × 40% = 10 appointments.",
    difficulty: "medium",
  },
  {
    id: 8,
    question: "You have 2 hours for Niche today. Using the 50/30/20 split, how many minutes should go to Outreach?",
    inputs: { "Total minutes": 120, "Outreach %": 50 },
    correctAnswer: 60,
    unit: "minutes",
    explanation: "2 hours = 120 minutes. 50% for Outreach = 120 × 0.50 = 60 minutes.",
    difficulty: "easy",
  },
  {
    id: 9,
    question: "In one week, a caller gets 50 contacts from 500 dials, but only 8 quality conversations. What is their quality conversation rate from contacts?",
    inputs: { "Contacts": 50, "Quality Conversations": 8 },
    correctAnswer: 16,
    unit: "%",
    explanation: "8 ÷ 50 = 0.16 = 16%. The benchmark is 50%, so this caller has a first-ten-seconds problem.",
    difficulty: "medium",
  },
  {
    id: 10,
    question: "A property got its NOD on Day 1. You need 2 knocks in the Shock Window and 2 in the Deadline Window. The sale is Day 120. How many total planned knocks for this property (including 1 NOTS knock)?",
    inputs: { "Shock knocks": 2, "NOTS knock": 1, "Deadline knocks": 2 },
    correctAnswer: 5,
    unit: "knocks",
    explanation: "Knock plan: 2 in first 10 days (Shock) + 1 at NOTS + 2 in last 10 days (Deadline) = 5 total well-timed touches.",
    difficulty: "easy",
  },
  {
    id: 11,
    question: "You knocked 8 doors on Saturday (10 pts each) and made 25 calls Sunday night (1 pt each). You're in the 40-pt/day lane. By how many points did you exceed your 2-day target?",
    inputs: { "Saturday knocks": 8, "Sunday calls": 25, "Daily target": 40, "Days": 2 },
    correctAnswer: 25,
    unit: "points",
    explanation: "Saturday: 8 × 10 = 80 pts. Sunday: 25 × 1 = 25 pts. Total = 105 pts. Target: 40 × 2 = 80. Exceeded by 105 − 80 = 25 points.",
    difficulty: "medium",
  },
  {
    id: 12,
    question: "A team of 3 callers each averages 80 calls/day for 5 days. Using benchmarks, how many total appointments should the team produce per week?",
    inputs: { "Callers": 3, "Calls/day each": 80, "Days": 5 },
    correctAnswer: 24,
    unit: "appointments",
    explanation: "Total calls: 3 × 80 × 5 = 1,200. Contacts: 1,200 × 10% = 120. QCs: 120 × 50% = 60. Appointments: 60 × 40% = 24.",
    difficulty: "hard",
  },
  {
    id: 13,
    question: "You have 8 hours for Niche today. Using the 50/30/20 split, how many hours should go to Training & Practice?",
    inputs: { "Total hours": 8, "Training %": 30 },
    correctAnswer: 2.4,
    unit: "hours",
    explanation: "8 hours × 30% = 2.4 hours (about 2 hours 24 minutes) for Training & Practice.",
    difficulty: "easy",
  },
  {
    id: 14,
    question: "You need 100 points today. You plan to knock 5 Gold doors and do the rest by phone. How many calls must you make?",
    inputs: { "Target": 100, "Knocks planned": 5, "Points per knock": 10 },
    correctAnswer: 50,
    unit: "calls",
    explanation: "5 knocks × 10 = 50 points from doors. Remaining: 100 − 50 = 50 points needed = 50 calls.",
    difficulty: "easy",
  },
  {
    id: 15,
    question: "A W-2 investor hits 35 points/day, 4 days out of 7 this week. What percentage of their 7-day lane target did they actually hit? (Lane = 40 pts/day, 7 days)",
    inputs: { "Points per active day": 35, "Active days": 4, "Lane target/day": 40, "Total days": 7 },
    correctAnswer: 50,
    unit: "%",
    explanation: "Earned: 35 × 4 = 140. Lane target: 40 × 7 = 280. Percentage: 140 ÷ 280 = 50%.",
    difficulty: "hard",
  },
];

// --- DIAGNOSIS SCENARIOS (Funnel Doctor) ---
export interface DiagnosisScenario {
  id: number;
  story: string;
  data: Record<string, number>;
  rates: Record<string, number>;
  bottleneck: string;
  bottleneckKey: string;
  fix: string;
}

export const baselines: Record<string, number> = {
  "Contact Rate": 10,
  "Quality Conversation Rate": 50,
  "Appointment Rate": 40,
  "Contract Rate": 25,
  "Points Hit Rate": 80,
  "Door Answer Rate": 30,
};

export const diagnosisScenarios: DiagnosisScenario[] = [
  {
    id: 1,
    story: "Marcus is a full-time operator. He's been at it for 3 weeks and hasn't signed a single contract. He says 'the market is dead.' Let's look at his numbers.",
    data: { "Avg Daily Points": 42, "Weekly Contacts": 15, "Weekly QCs": 7, "Weekly Appointments": 3, "Weekly Contracts": 0 },
    rates: { "Points Hit Rate": 42, "Contact Rate": 7, "Quality Conversation Rate": 47, "Appointment Rate": 43, "Contract Rate": 0 },
    bottleneck: "Volume Problem — Marcus is only hitting 42 points/day in a 100-point lane. He's doing less than half the work needed. The market isn't dead; his at-bats are.",
    bottleneckKey: "Points Hit Rate",
    fix: "Protect your Outreach blocks. Hit 100 points/day for 4 straight weeks before changing anything else. You can't judge the system on half the required volume.",
  },
  {
    id: 2,
    story: "Alicia is a W-2 investor hitting 40 points every night for 4 weeks. She's had plenty of calls but almost no real conversations. She's frustrated and considering new lists.",
    data: { "Weekly Points": 200, "Weekly Contacts": 20, "Weekly QCs": 3, "Weekly Appointments": 1, "Contracts (4 weeks)": 0 },
    rates: { "Points Hit Rate": 100, "Contact Rate": 10, "Quality Conversation Rate": 15, "Appointment Rate": 33, "Contract Rate": 0 },
    bottleneck: "First-Ten-Seconds Problem — Alicia is reaching people (10% contact rate is healthy) but only 15% become quality conversations vs. the 50% benchmark. She's losing them in the opening.",
    bottleneckKey: "Quality Conversation Rate",
    fix: "Don't change lists. Work on your opening: how you introduce yourself, your tone, and your first question. Practice the first 10 seconds of the call until it feels natural. Review recordings of your calls.",
  },
  {
    id: 3,
    story: "Derek has been crushing it on volume — 120 points/day, 5 days a week. He's having great conversations. But his pipeline is empty. Almost no appointments despite good rapport.",
    data: { "Weekly Points": 600, "Weekly Contacts": 60, "Weekly QCs": 30, "Weekly Appointments": 4, "Weekly Contracts": 1 },
    rates: { "Points Hit Rate": 120, "Contact Rate": 10, "Quality Conversation Rate": 50, "Appointment Rate": 13, "Contract Rate": 25 },
    bottleneck: "Ask/Positioning Problem — Derek's contact and quality conversation rates are healthy, but only 13% of QCs become appointments (benchmark: 40%). He's having good chats but not converting them into commitments.",
    bottleneckKey: "Appointment Rate",
    fix: "Tighten your transition from conversation to appointment. You're building rapport but not making the ask. Practice: 'Based on what you've told me, would it make sense to sit down this week and look at your options together?'",
  },
  {
    id: 4,
    story: "Sophia's team has 2 callers and 1 knocker. Appointments are flowing in weekly, but contracts are barely trickling. The team is burning out.",
    data: { "Weekly Points": 800, "Weekly Contacts": 70, "Weekly QCs": 35, "Weekly Appointments": 14, "Weekly Contracts": 1 },
    rates: { "Points Hit Rate": 100, "Contact Rate": 9, "Quality Conversation Rate": 50, "Appointment Rate": 40, "Contract Rate": 7 },
    bottleneck: "Closing & Follow-Through Problem — Every stage is healthy until contracts. Only 7% of appointments convert to contracts (benchmark: ~25%). The team books meetings but can't close.",
    bottleneckKey: "Contract Rate",
    fix: "Focus on the appointment itself: are you presenting a real offer? Are you following up within 24 hours? Are you handling objections or just 'checking in'? The problem isn't getting in front of sellers — it's what happens when you're there.",
  },
  {
    id: 5,
    story: "Jake is a door knocker. He drives 2 hours every Saturday and knocks 15 Gold/Silver doors. But he barely talks to anyone. He's thinking about quitting field work.",
    data: { "Doors Knocked": 15, "Doors Answered": 2, "Quality Conversations": 1, "Appointments": 0, "Points Earned": 150 },
    rates: { "Points Hit Rate": 100, "Door Answer Rate": 13, "Quality Conversation Rate": 50, "Appointment Rate": 0, "Contract Rate": 0 },
    bottleneck: "Contact/Timing Problem — Jake's answer rate is only 13% vs. the 30% benchmark. He's likely knocking at the wrong times or on houses where nobody is home. His timing within the Money Windows may be off.",
    bottleneckKey: "Door Answer Rate",
    fix: "Check your knock timing: are you going at times when people are actually home? Are you hitting the right Money Windows (Zone 1 and Zone 3)? Also verify your Gold/Silver categorization — if the houses are vacant or owners moved out, they won't answer.",
  },
  {
    id: 6,
    story: "Rachel is a part-time caller (4-hour lane). She consistently hits her points and gets contacts, but she spends most of her Desk Mode time on middle-window leads. Her pipeline feels stale.",
    data: { "Daily Points": 70, "Weekly Contacts": 35, "Zone 1-4 Contacts": 5, "Middle Window Contacts": 30, "Weekly Appointments": 2 },
    rates: { "Points Hit Rate": 88, "Contact Rate": 10, "Zone 1-4 Focus": 14, "Appointment Rate": 6, "Contract Rate": 0 },
    bottleneck: "Targeting Problem — Only 14% of Rachel's contacts are in Zones 1–4 (the money windows). She's spending the bulk of her time on middle-window leads where decisions rarely happen. Her calls aren't low quality — they're low priority.",
    bottleneckKey: "Zone 1-4 Focus",
    fix: "Follow the Desk Mode call ladder strictly: Live Deals → Follow-ups in Zones 1–4 → New outreach in Zones 1–4 → Middle Window LAST. Your middle-window contacts should be the minority, not the majority.",
  },
  {
    id: 7,
    story: "Trent is full-time with a team. His callers hit their points and his knocker does solid field work. But the whole team's numbers are off — lots of activity, mediocre results across the board.",
    data: { "Team Weekly Points": 1500, "Team Contacts": 120, "Team QCs": 40, "Team Appointments": 12, "Team Contracts": 2 },
    rates: { "Points Hit Rate": 100, "Contact Rate": 8, "Quality Conversation Rate": 33, "Appointment Rate": 30, "Contract Rate": 17 },
    bottleneck: "Data/Contact Problem — The team's contact rate is 8% (below 10% benchmark) and QC rate is 33% (below 50%). They're dialing the right volume but reaching fewer people and converting fewer into real conversations. The data quality or call timing needs attention.",
    bottleneckKey: "Contact Rate",
    fix: "Audit your lists: are phone numbers current? Are you calling at times when people answer? Are you hitting the right records in the right windows? Don't change your volume — fix the inputs. Better data + same effort = dramatically better results.",
  },
  {
    id: 8,
    story: "Nina is a W-2 investor, 6 weeks in. She hits 30 points 3 nights a week. She says she's been 'consistent' but has zero appointments. Her coach says she needs more training.",
    data: { "Weekly Points": 90, "Target Weekly Points": 200, "Weekly Contacts": 9, "Weekly QCs": 4, "Weekly Appointments": 0 },
    rates: { "Points Hit Rate": 45, "Contact Rate": 10, "Quality Conversation Rate": 44, "Appointment Rate": 0, "Contract Rate": 0 },
    bottleneck: "Volume Problem — Nina is only hitting 45% of her lane target (90 of 200 weekly points). At this volume, she doesn't have enough data to diagnose anything else. She needs to hit her points 4+ days/week before judging the system.",
    bottleneckKey: "Points Hit Rate",
    fix: "Before adding more training, hit your points target at least 4 days this week. You can't know if your skills need work when you're barely taking at-bats. Protect your Outreach block, hit the number, and then see what the funnel says.",
  },
];

// --- QUIZ QUESTIONS ---
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  chapter: string;
}

export const quizQuestions: QuizQuestion[] = [
  // Chapter 1: Why You're Overwhelmed
  {
    id: 1,
    question: "According to Michael Franke, what was the real problem causing him to sit in the car doing nothing?",
    options: [
      "He didn't have good enough lists",
      "He needed more hours in the day",
      "He lacked a simple operating system that told him what to do first, second, and when he was done",
      "The market was too competitive",
    ],
    correctIndex: 2,
    explanation: "Franke had good data, enough time, and knew how to talk to sellers. What he lacked was a simple operating system with clear order and a finish line.",
    chapter: "Ch 1: Why You're Overwhelmed",
  },
  {
    id: 2,
    question: "What three things did Franke's operating system need to do?",
    options: [
      "Generate leads, close deals, and manage paperwork",
      "Give a daily score, tell him who to talk to next, and force best energy onto highest-value work",
      "Create marketing, schedule appointments, and track expenses",
      "Analyze the market, build routes, and automate follow-ups",
    ],
    correctIndex: 1,
    explanation: "The system needed to: give a daily score he couldn't argue with, tell him who to talk to next, and force his best energy onto highest-value work.",
    chapter: "Ch 1: Why You're Overwhelmed",
  },

  // Chapter 2: The Scoreboard
  {
    id: 3,
    question: "Why are Outreach Points based on attempts rather than results?",
    options: [
      "Because results are harder to track",
      "Because you control attempts but can't control when a seller signs, what the bank does, or the economy",
      "Because results don't matter in real estate",
      "Because attempts are more impressive to report",
    ],
    correctIndex: 1,
    explanation: "You control at-bats with the right people in the right windows. You don't control seller decisions, banks, title, probate, or the economy.",
    chapter: "Ch 2: The Scoreboard",
  },
  {
    id: 4,
    question: "When is your Niche day NOT done?",
    options: [
      "When you've hit your Outreach Points target",
      "When you've watched enough trainings and answered all your texts",
      "When you've run an Outreach block and logged your results",
      "When you've completed your Desk or Field block and hit your point target",
    ],
    correctIndex: 1,
    explanation: "Your day is NOT done when you've watched trainings, answered texts, cleaned the CRM, or 'felt productive.' It's done when you hit your Points and logged it.",
    chapter: "Ch 2: The Scoreboard",
  },

  // Chapter 3: Time Management
  {
    id: 5,
    question: "What percentage of your Niche time should go to Outreach?",
    options: ["About 20%", "About 30%", "About 50%", "About 80%"],
    correctIndex: 2,
    explanation: "The 50/30/20 split: roughly half your time is Outreach, about 30% Training & Practice, and 20% Admin, Tracking & Community.",
    chapter: "Ch 3: Time Management",
  },
  {
    id: 6,
    question: "What is the rule about when Outreach happens?",
    options: [
      "It should happen whenever you feel most creative",
      "It gets the first and best hours, not the leftovers",
      "It should come after you've finished all admin tasks",
      "It should be split equally across the entire day",
    ],
    correctIndex: 1,
    explanation: "Outreach gets your 'Money Time' — the hours when your brain is sharpest. Training and admin come AFTER the work that creates money.",
    chapter: "Ch 3: Time Management",
  },

  // Chapter 4: Modes
  {
    id: 7,
    question: "What is the simple rule for Hybrid days?",
    options: [
      "Call and knock simultaneously to maximize efficiency",
      "Do whichever feels right in the moment",
      "One block, one mode, one job — never mix modes in the same hour",
      "Always do Field Mode first, then Desk Mode",
    ],
    correctIndex: 2,
    explanation: "Hybrid means running Desk and Field in separate blocks. You never try to be in both modes at the same time. One hour, one mode, one job.",
    chapter: "Ch 4: Modes",
  },
  {
    id: 8,
    question: "What should you NOT do during a Desk Mode block?",
    options: [
      "Open your CRM and work down the call list",
      "Drive around looking at properties and checking email between houses",
      "Book appointments with sellers",
      "Follow up on live deals",
    ],
    correctIndex: 1,
    explanation: "In Desk Mode you are NOT driving around, fixing admin problems, or bouncing between tabs. You live in conversations, not configuration.",
    chapter: "Ch 4: Modes",
  },

  // Chapter 5: Money Windows
  {
    id: 9,
    question: "What triggers Zone 1 (the Shock Window)?",
    options: [
      "The sale date being canceled",
      "A Notice of Default (NOD) being filed",
      "The Notice of Trustee's Sale being posted",
      "The property becoming vacant",
    ],
    correctIndex: 1,
    explanation: "Zone 1 is the first 10 days after the NOD is filed. The owner is in shock and some decide to sell fast before the shame calcifies.",
    chapter: "Ch 5: Money Windows",
  },
  {
    id: 10,
    question: "What makes Zone 3 (the Deadline Window) so powerful?",
    options: [
      "Sellers have the most equity in this window",
      "Other options (loan mods, bankruptcy, family help) are finally failing, and sellers are ready to choose",
      "There are fewer investors competing in this window",
      "Sellers get financial bonuses for selling before the deadline",
    ],
    correctIndex: 1,
    explanation: "In the last 10 days, loan mods get denied, bankruptcy plans fail, and family can't deliver the funds. Sellers finally realize selling may be the only option left.",
    chapter: "Ch 5: Money Windows",
  },
  {
    id: 11,
    question: "Why do most investors make a mistake by ignoring Zone 4 (expired/canceled sales)?",
    options: [
      "Because canceled sales mean the property has no equity",
      "Because a huge percentage of loan modifications and bankruptcy plans don't hold long-term",
      "Because expired sales can't be re-listed",
      "Because the county blocks re-filing after a cancellation",
    ],
    correctIndex: 1,
    explanation: "Many loan mods don't hold and bankruptcy plans aren't sustainable. These owners often end up back in foreclosure within 12 months — more tired, more skeptical, and more open to selling.",
    chapter: "Ch 5: Money Windows",
  },

  // Chapter 6: Desk Mode
  {
    id: 12,
    question: "What is the FIRST thing you do in any Desk Mode block?",
    options: [
      "Call new prospects in Zone 1",
      "Check your email and respond to messages",
      "Scan for live deals: today's appointments, offers out, and promised callbacks",
      "Build your route for tomorrow's Field Mode",
    ],
    correctIndex: 2,
    explanation: "Step 1 is always Live Deals First — appointments today, offers out, promised callbacks. These are your highest-leverage dials.",
    chapter: "Ch 6: Desk Mode",
  },
  {
    id: 13,
    question: "In Desk Mode Step 2 (Follow-ups in Money Windows), what order do you call sellers?",
    options: [
      "Alphabetical order by last name",
      "Last 10 days before sale → First 10 days after NOD → Early NOTS → Recently canceled, Gold before Silver",
      "Bronze first to get easy wins, then Silver, then Gold",
      "Random order to keep things interesting",
    ],
    correctIndex: 1,
    explanation: "You call by urgency: closest sale first (Zone 3), then newest NOD (Zone 1), then early NOTS (Zone 2), then expired (Zone 4). Gold before Silver in each.",
    chapter: "Ch 6: Desk Mode",
  },
  {
    id: 14,
    question: "When do you work the Middle Window leads?",
    options: [
      "First thing in the morning when you're freshest",
      "Only after you've worked Live Deals, Follow-ups in Zones 1–4, and New Outreach in Zones 1–4",
      "Before follow-ups because they're easier",
      "You should never work Middle Window leads",
    ],
    correctIndex: 1,
    explanation: "The Middle Window is Step 4 — the last step. Used to top off your score after all higher-priority work is done, not to replace earlier steps.",
    chapter: "Ch 6: Desk Mode",
  },

  // Chapter 7: Field Mode
  {
    id: 15,
    question: "Which leads should you NEVER spend gas and time door-knocking?",
    options: ["Gold leads", "Silver leads", "Bronze leads", "Zone 1 leads"],
    correctIndex: 2,
    explanation: "First rule of Field Mode: you only knock Gold and Silver. Bronze gets calls and automated follow-up. It does not get gas, drive time, and your physical presence.",
    chapter: "Ch 7: Field Mode",
  },
  {
    id: 16,
    question: "How many total well-timed knocks does the knock plan call for per Gold/Silver property?",
    options: ["2 total", "3 total", "5 total", "As many as possible"],
    correctIndex: 2,
    explanation: "2 knocks in first 10 days after NOD + 1 knock at NOTS + 2 knocks in last 10 days = 5 well-timed touches over the life of the foreclosure.",
    chapter: "Ch 7: Field Mode",
  },
  {
    id: 17,
    question: "What is a sign you're NOT actually in Field Mode?",
    options: [
      "You're knocking every door on your planned route",
      "You're sitting in the car for 30 minutes 'planning' during your knocking block",
      "You're logging each knock as you go",
      "You're talking to neighbors between knocks",
    ],
    correctIndex: 1,
    explanation: "If you're sitting in the car 'planning' your route during the time blocked for knocking, you're not in Field Mode — you're hiding from it.",
    chapter: "Ch 7: Field Mode",
  },

  // Chapter 8: Hybrid Days
  {
    id: 18,
    question: "What does a realistic W-2 hybrid week look like?",
    options: [
      "Mix calls and doors every night",
      "Weeknights on the phone from home, one longer Field block on Saturdays",
      "Only field work on weekends, skip weeknight work entirely",
      "Full-time mode Monday through Friday",
    ],
    correctIndex: 1,
    explanation: "W-2 hybrid: weeknights = Desk Mode (phone from home), weekends = one Field block (Saturday for door knocking). Calls keep the flywheel spinning; doors give bursts of points.",
    chapter: "Ch 8: Hybrid Days",
  },

  // Chapter 9: KPIs
  {
    id: 19,
    question: "According to the benchmarks, what percentage of cold call dials connect to a human?",
    options: ["About 5%", "About 10%", "About 25%", "About 50%"],
    correctIndex: 1,
    explanation: "About 10% of dials connect to a human. From there, roughly half are quality conversations, and about 40% of those become appointments.",
    chapter: "Ch 9: KPIs",
  },
  {
    id: 20,
    question: "If your Points are fine but your Contacts are low, what's the diagnosis?",
    options: [
      "A volume problem",
      "A first-ten-seconds problem",
      "A data/contact problem — your lists, contact data, or call times need work",
      "A closing problem",
    ],
    correctIndex: 2,
    explanation: "Points fine + Contacts low = data/contact problem. Your dials are going out but not connecting. Check phone number quality and call timing.",
    chapter: "Ch 9: KPIs",
  },
  {
    id: 21,
    question: "What is the door knock benchmark for contacts per 10 knocks?",
    options: ["About 1 contact", "About 3 contacts", "About 5 contacts", "About 8 contacts"],
    correctIndex: 1,
    explanation: "About 30% of doors are answered, so 10 knocks → ~3 contacts at the door.",
    chapter: "Ch 9: KPIs",
  },

  // Chapter 10: System
  {
    id: 22,
    question: "How many major variables should you change at a time when adjusting your system?",
    options: ["As many as needed", "One at a time", "Two or three", "None — never change anything"],
    correctIndex: 1,
    explanation: "Only adjust one major variable at a time. Don't simultaneously change market, lists, pitch, and schedule and expect to learn anything useful.",
    chapter: "Ch 10: Turning Into a System",
  },
  {
    id: 23,
    question: "What's the minimum time to commit to a lane before changing it?",
    options: ["1 week", "2 weeks", "4 weeks", "3 months"],
    correctIndex: 2,
    explanation: "Commit to a lane for at least 4 weeks before you change it. You can't know what your true funnel looks like off 3 days of effort.",
    chapter: "Ch 10: Turning Into a System",
  },
  {
    id: 24,
    question: "What 3 questions should a solo operator ask in their weekly review?",
    options: [
      "What new lists should I buy? What scripts should I learn? What markets should I enter?",
      "Did I hit Points 4+ days? Do my numbers match Chapter 9 math? What's the single biggest weak link?",
      "How many hours did I bill? How much revenue did I earn? What did competitors do?",
      "How many trainings did I complete? How many community posts did I make? How many tools did I try?",
    ],
    correctIndex: 1,
    explanation: "Weekly review: Did I hit Points at least 4 days? Do my contact/appointment numbers match the math? What's the single biggest funnel weak link?",
    chapter: "Ch 10: Turning Into a System",
  },

  // Chapter 11: Quick-Start
  {
    id: 25,
    question: "For a W-2 investor, what is the win condition for the week?",
    options: [
      "Closing at least one deal",
      "Hitting Outreach Points target at least 4 days out of 7",
      "Completing all trainings in the community",
      "Knocking 50 doors on the weekend",
    ],
    correctIndex: 1,
    explanation: "The W-2 win condition: did you hit your Points target at least 4 days out of 7? Consistency beats heroic single-day efforts.",
    chapter: "Ch 11: Quick-Start",
  },
  {
    id: 26,
    question: "What is a full-time operator's biggest risk?",
    options: [
      "Not having enough leads",
      "Distraction — filling 8 hours with 'real estate work' that doesn't pay",
      "Working too many hours",
      "Not having a team",
    ],
    correctIndex: 1,
    explanation: "Full-timers risk filling 8 hours with busy work instead of points-earning Outreach. The risk isn't time — it's distraction.",
    chapter: "Ch 11: Quick-Start",
  },

  // Chapter 12: Mindset
  {
    id: 27,
    question: "What is the book's core philosophy about success?",
    options: [
      "You rise to the level of your goals",
      "Success comes from finding the perfect strategy",
      "You fall to the level of your daily behavior",
      "The market determines your results",
    ],
    correctIndex: 2,
    explanation: "\"You don't rise to the level of your goals. You fall to the level of your daily behavior.\" The operating system IS the daily behavior.",
    chapter: "Ch 12: This Is The Game",
  },
  {
    id: 28,
    question: "When you feel stuck, what's the first thing you should do?",
    options: [
      "Start a completely new strategy",
      "Change your market or niche",
      "Run the checklist: check calendar, check Points for last 2 weeks, check funnel stages",
      "Take a week off to reset",
    ],
    correctIndex: 2,
    explanation: "Don't start over — run the checklist. Check if you're protecting blocks, hitting Points consistently, and where your funnel is thin compared to benchmarks.",
    chapter: "Ch 12: This Is The Game",
  },
  {
    id: 29,
    question: "What should you do when you have a perfect execution day but nothing obvious happens?",
    options: [
      "Change your strategy immediately",
      "Recognize you 'bought more lottery tickets in a game where the odds are stacked in your favor'",
      "Conclude the system doesn't work",
      "Double your daily target tomorrow to make up for it",
    ],
    correctIndex: 1,
    explanation: "Good days with no results are normal. You didn't lose — you bought more tickets in a game with favorable odds. The math catches up if you keep showing up.",
    chapter: "Ch 12: This Is The Game",
  },
  {
    id: 30,
    question: "What are the three guardrails against sabotaging your own system?",
    options: [
      "Change lanes weekly, adjust multiple variables, trust your feelings over data",
      "Don't change too often, don't change too many things at once, don't change strategy instead of fixing skill or volume",
      "Never change anything, ignore your numbers, just grind harder",
      "Follow what other investors do, copy their scripts, use their lists",
    ],
    correctIndex: 1,
    explanation: "Three guardrails: 1) Give any change a few weeks, 2) Only adjust one variable at a time, 3) Fix skill or volume before changing strategy.",
    chapter: "Ch 12: This Is The Game",
  },
];

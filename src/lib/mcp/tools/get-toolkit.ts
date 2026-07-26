import { defineTool } from "@lovable.dev/mcp-js";

const TOOLKIT = [
  {
    id: "dealforge",
    name: "DealForge",
    tagline: "Find profitable deals in seconds",
    price: "$29/mo",
    description:
      "Chrome extension that analyzes any rental arbitrage deal using Derek's proprietary scoring algorithm. Instant profit projections, market risk scoring, and comp data while browsing Zillow, Apartments.com, or Craigslist.",
  },
  {
    id: "foundry",
    name: "The Foundry",
    tagline: "Launch units 10x faster",
    price: "$197 one-time",
    description:
      "AI website builder that generates a direct booking site in minutes. Includes Stripe payments, guest CRM, SEO pages, and business setup templates (LLC, operating agreement, banking).",
  },
  {
    id: "negotiator",
    name: "The Negotiator",
    tagline: "AI cold calls landlords for you",
    price: "$97/mo + $0.50/call",
    description:
      "Upload a landlord list; AI runs voice + SMS outreach, schedules tours, and generates counter-offers from Derek's 240-unit playbook. Follow-up automation until you get a response.",
  },
  {
    id: "jarvis",
    name: "Jarvis",
    tagline: "Your AI operating partner",
    price: "Included in full toolkit",
    description:
      "Always-on agent that monitors your STR business. Learns your expense allocation, tracks per-unit P&L, monitors reviews, and automates guest communication with anomaly detection.",
  },
];

export default defineTool({
  name: "get_toolkit",
  title: "Get AI toolkit",
  description:
    "Return the four AI tools STR Forge offers to support portfolio owners (DealForge, The Foundry, The Negotiator, Jarvis) with pricing and descriptions.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(TOOLKIT, null, 2) }],
    structuredContent: { tools: TOOLKIT },
  }),
});
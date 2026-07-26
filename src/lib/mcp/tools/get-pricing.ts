import { defineTool } from "@lovable.dev/mcp-js";

const PRICING = {
  software: {
    name: "Software (DIY)",
    description: "Self-serve access to STR Forge's AI toolkit for portfolio owners who want to run pieces themselves.",
    tiers: [
      { name: "DealForge", price: "$29/mo", includes: "Deal analysis Chrome extension + pipeline" },
      { name: "The Foundry", price: "$197 one-time", includes: "AI direct-booking site builder + business setup templates" },
      { name: "The Negotiator", price: "$97/mo + $0.50/call", includes: "AI landlord outreach, tour scheduling, negotiation" },
      { name: "Full Toolkit", price: "$297/mo", includes: "All tools bundled + Jarvis AI operating partner" },
    ],
  },
  services: {
    name: "Services (Done-With-You)",
    description: "Hands-on execution partnership with Derek Cheung's team — sourcing, management, and buildout across arbitrage and purchase deals.",
    tiers: [
      { name: "Launch Sprint", price: "Contact for quote", includes: "We help you launch your first units end-to-end" },
      { name: "Scale Partner", price: "Contact for quote", includes: "Ongoing hands-on operations for 10-50 unit portfolios" },
    ],
  },
};

export default defineTool({
  name: "get_pricing",
  title: "Get pricing",
  description: "Return STR Forge pricing across the Software (DIY) and Services (Done-With-You) tiers.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(PRICING, null, 2) }],
    structuredContent: PRICING,
  }),
});
import { defineTool } from "@lovable.dev/mcp-js";

const FOUNDER = {
  name: "Derek Cheung",
  role: "Founder, STR Forge",
  background:
    "Built and operated a 240-unit Airbnb portfolio combining arbitrage and purchase deals. STR Forge productizes his sourcing, negotiation, management, and buildout playbooks so investors and busy professionals can forge their own portfolio without assembling the machine from scratch.",
  positioning:
    "STR Forge is a founder-led, one-stop Airbnb portfolio platform. The flow is Find BNB → Build BNB → Manage BNB → Scale BNB: arbitrage deals for scale, purchase deals for equity and tax savings, with buildout and management handled end to end.",
  audience: "Investors and busy professionals who want a real Airbnb portfolio without operating it day to day.",
};

export default defineTool({
  name: "get_founder_info",
  title: "Get founder info",
  description: "Return background on STR Forge founder Derek Cheung and how the product is positioned.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(FOUNDER, null, 2) }],
    structuredContent: FOUNDER,
  }),
});
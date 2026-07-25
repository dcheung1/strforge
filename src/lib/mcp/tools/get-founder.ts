import { defineTool } from "@lovable.dev/mcp-js";

const FOUNDER = {
  name: "Derek Cheung",
  role: "Founder, STR Forge",
  background:
    "Built and operated a 240-unit rental arbitrage portfolio. STR Forge productizes the playbooks, negotiation frameworks, and operating systems he used to scale.",
  positioning:
    "STR Forge is Derek Cheung's brain, productized: AI tools for rental arbitrage operators running 1-50 units.",
  audience: "Rental arbitrage operators managing 1 to 50 units.",
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
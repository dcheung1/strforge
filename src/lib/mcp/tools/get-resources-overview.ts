import { defineTool } from "@lovable.dev/mcp-js";

const OVERVIEW = {
  name: "Client Resource Vault",
  access: "Password-protected. Existing clients have the password; this tool only describes what's inside.",
  contents: [
    "Landlord outreach scripts and negotiation frameworks from Derek's 240-unit playbook",
    "LLC formation, banking, and credit-strategy templates",
    "Direct-booking site templates and SEO checklists",
    "Guest communication templates and review-response playbooks",
    "Per-unit P&L spreadsheets and expense-allocation guides",
  ],
  url: "https://www.thestrforge.com/resources",
};

export default defineTool({
  name: "get_resources_overview",
  title: "Get resource vault overview",
  description: "Describe what lives in the STR Forge client Resource Vault (does not expose the password or protected files).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(OVERVIEW, null, 2) }],
    structuredContent: OVERVIEW,
  }),
});
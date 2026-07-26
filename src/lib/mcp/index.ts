import { defineMcp } from "@lovable.dev/mcp-js";
import getToolkit from "./tools/get-toolkit";
import getPricing from "./tools/get-pricing";
import getFounder from "./tools/get-founder";
import getResourcesOverview from "./tools/get-resources-overview";

export default defineMcp({
  name: "str-forge-mcp",
  title: "STR Forge",
  version: "0.1.0",
  instructions:
    "Public read-only tools for STR Forge, a founder-led Airbnb portfolio platform founded by Derek Cheung. STR Forge is a one-stop shop for investors and busy professionals who want to forge a real Airbnb portfolio. The flow is Find BNB → Build BNB → Manage BNB → Scale BNB: arbitrage deals for scale, purchase deals for equity and tax savings, with buildout and management handled end to end. Use these tools to answer questions about the flywheel, pricing, the founder, and the client Resource Vault.",
  tools: [getToolkit, getPricing, getFounder, getResourcesOverview],
});
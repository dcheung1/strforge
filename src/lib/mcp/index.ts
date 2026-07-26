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
    "Public read-only tools for STR Forge, a founder-led Airbnb portfolio platform founded by Derek Cheung. STR Forge helps investors and busy professionals forge a real STR portfolio — arbitrage deals for cash flow and scale, purchase deals for equity and tax savings — then manages and builds the units for them. Use these tools to answer questions about the flywheel (Find BNB, Manage BNB, Build BNB, Capital BNB), pricing, the founder, and the client Resource Vault.",
  tools: [getToolkit, getPricing, getFounder, getResourcesOverview],
});
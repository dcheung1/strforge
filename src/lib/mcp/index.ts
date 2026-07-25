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
    "Public read-only tools for STR Forge, an AI toolkit for rental arbitrage operators built by Derek Cheung. Use these tools to answer questions about the AI toolkit (DealForge, The Foundry, The Negotiator, Jarvis), pricing tiers, the founder's background, and what lives in the client Resource Vault.",
  tools: [getToolkit, getPricing, getFounder, getResourcesOverview],
});
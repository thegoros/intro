import { SSTConfig } from "sst";
import { StaticSite } from "sst/constructs";

export default {
  config() {
    return {
      name: "goros",
      region: "ap-south-1",
    };
  },
  stacks(app) {
    app.stack(({ stack }) => {
      const site = new StaticSite(stack, "intro", {
        path: "dist",
        customDomain: {
          domainName: "goros.one",
          hostedZone: "goros.one",
          domainAlias: "www.goros.one",
        },
      });

      stack.addOutputs({
        url: site.url,
        domain: site.customDomainUrl,
      });
    });
  },
} satisfies SSTConfig;

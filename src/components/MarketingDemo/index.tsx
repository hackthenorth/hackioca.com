import * as React from "react";
import copy from "src/copy";

const MarketingDemo: React.FC = () => (
  <div style={{textAlign: "center"}}>
    <h1>{copy.marketing.michal}</h1>
    <h1>{copy.marketing.chris}</h1>
    <h1>{copy.marketing.katherine}</h1>
    <h1>{copy.marketing.kristine}</h1>
  </div>
);

export default MarketingDemo;

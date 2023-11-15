const routeRules = {
  '/': { prerender: true },
  // '/about': { prerender: true },
  // '/car/**': { swr: 3600 }, // generated on-demand, revalidates in background (stale-while-revalidate)
  // '/cars': { isr: true }, // B generated on-demand once until next deploy
};
// const routeRules = {};
export default routeRules;

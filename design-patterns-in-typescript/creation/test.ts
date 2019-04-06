import { StatsTracker } from "./stats-tracker";

export function test() {
    let tracker = StatsTracker.instance;
    console.log(`widget views: ${tracker.widgetViews}`);
    console.log(`twitter shares: ${tracker.twitterShares}`);
}
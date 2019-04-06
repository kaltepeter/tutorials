import { StatsTracker } from "./stats-tracker";
import { test } from './test';

let tracker = StatsTracker.instance;
tracker.widgetViews = 90;
tracker.buttonClicks = 64;
tracker.facebookShares = 20;
tracker.twitterShares = 30;

console.log("TCL: tracker.widgetViews", tracker.widgetViews);
console.log("TCL: tracker.buttonClicks", tracker.buttonClicks);
console.log("TCL: tracker.facebookShares", tracker.facebookShares);
console.log("TCL: tracker.twitterShares", tracker.twitterShares);

tracker.widgetViews++;
tracker.twitterShares += 2;

test();

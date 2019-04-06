export class StatsTracker {
    buttonClicks: number = 0;
    facebookShares: number = 0;
    twitterShares: number = 0;
    widgetViews: number = 0;

    constructor() {
        if (StatsTracker._instance) {
            throw new Error('Cannot initialize singleton using new.')
        }
        StatsTracker._instance = this;
    }

    private static _instance: StatsTracker = new StatsTracker();

    public static get instance(): StatsTracker {
        return StatsTracker._instance;
    }
}
export class Car {
    private _currentSpeed: number = 0;
    private _maxSpeed: number;
    private _currentSpeedObservers: Function[] = [];

    constructor(maxSpeed: number) {
        this._maxSpeed = maxSpeed;
    }

    get maxSpeed(): number {
        return this._maxSpeed;
    }

    get currentSpeed(): number {
        return this._currentSpeed;
    }

    set currentSpeed(value: number) {
        if(this._currentSpeed < 0) {
            throw new Error('Invalid negative speed.');
        }
        if(this._currentSpeed > this._maxSpeed) {
            throw new Error('Engine broke.');
        }
        if(this._currentSpeed != value) {
            let oldValue = this._currentSpeed;
            this._currentSpeed = value;       
            this.triggerCurrentSpeedObservers(value, oldValue);     
        }
    }

    registerCurrentSpeedObserver(observer: Function) {
        if(!this._currentSpeedObservers.find(o => o == observer)) {
            this._currentSpeedObservers.push(observer);
        }
    }

    triggerCurrentSpeedObservers(newValue: number, oldValue: number) {
        this._currentSpeedObservers
            .forEach(observer => observer(newValue, oldValue));
    }
}
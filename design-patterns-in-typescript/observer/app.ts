import { Car } from "./car";

testObservers();

async function sleep(duration: number): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}

async function testObservers(): Promise<any> {
    let car = new Car(200);
    car.registerCurrentSpeedObserver(reportCurrentSpeed);
    car.registerCurrentSpeedObserver(checkSpeedLimit);

    while(car.currentSpeed <= car.maxSpeed) {
        car.currentSpeed += 10;
        await sleep(1000);
    }
}

function reportCurrentSpeed(newValue: number, oldValue: number) {
    console.log(`Car running at ${newValue} km/h`);
}

function checkSpeedLimit(newValue: number, oldValue: number) {
    const speedLimit = 100;
    if(newValue < speedLimit && newValue > (speedLimit - 30)) {
        console.log(`Approaching speed limit!!!`);
    } else if(newValue == speedLimit) {
        console.log(`Running at speed limit!!!`);
    } else if(newValue > speedLimit) {
        console.log(`You have exceeded the speed limit!!!`)
    }
    
}
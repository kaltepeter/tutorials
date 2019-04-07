class Computer {
    boot(): void {
        console.log('Computer is booting');
    }

    shutDown(): void {
        console.log('Computer is shutting down');
    }

    display(): void {
        console.log('Displaying content in one screen');
    }

    print(): void {
        console.log('No printer found.')
    }

    renderVideo(): void {
        console.log('Cannot render video without a dedicated graphics card.');;
    }
}

class ComputerComponentDecorator extends Computer {
    constructor(private _computer: Computer) {
        super()
    }

    boot() {
        this._computer.boot();
    }

    shutDown() {
        this._computer.shutDown();
    }

    display() {
        this._computer.display();
    }

    print() {
        this._computer.print();
    }

    renderVideo() {
        this._computer.renderVideo();
    }
}

class ServerComputer extends Computer {
    boot() {
        console.log('Booting error...');
    }

    shutDown() {
        console.log('Server is shutting down...');
    }
}

class ComputerWithPrinterDecorator extends ComputerComponentDecorator {
    constructor(computer: Computer) {
        super(computer);
    }

    print(): void {
        console.log('Printing...');
    }
}

class ComputerWithDedicatedGPU extends ComputerComponentDecorator {
    constructor(computer: Computer) {
        super(computer);
    }

    renderVideo(): void {
        console.log('Rendering video with dedicated GPU');
    }
}

let server = new ServerComputer();
let serverWithPrinter = new ComputerWithPrinterDecorator(server);
let serverWithPrinterAndDedicatedGPU = new ComputerWithDedicatedGPU(serverWithPrinter);

serverWithPrinterAndDedicatedGPU.print();
serverWithPrinterAndDedicatedGPU.renderVideo();
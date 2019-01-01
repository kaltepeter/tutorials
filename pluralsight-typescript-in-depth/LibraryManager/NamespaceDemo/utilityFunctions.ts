namespace Utility {
    export namespace Fees {
        export const CalculateLateFee = (daysLate: number): number => {
            return daysLate * .25;
        }
    }

    export const MaxBooksAllowed = (age: number): number => {
        if (age < 12) {
            return 3;
        } else {
            return 10;
        }
    }

    const privateFunc = (): void => {
        console.log('this is a private function.')
    }
}
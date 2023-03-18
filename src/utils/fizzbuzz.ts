export type Divisor = {
    divisor: number,
    label: string,
}

export function fizzBuzzUpTo(n: number, divisors: Divisor[]): string[] {
    const results = [];
    for (let i = 1n; i <= n; i++) {
        results.push(fizzBuzz(i, divisors));
    }
    return results;
}

export function fizzBuzz(n: bigint, divisors: Divisor[]): string {
    let result = "";
    for (const { divisor, label } of divisors) {
        if (n % BigInt(divisor) === 0n) {
            result += label;
        }
    }
    if (result == "") {
        result = n.toString();
    }
    return result;
}

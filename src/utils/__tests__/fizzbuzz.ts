import {defaultDivisors} from "@/ui/FizzBuzzControls";
import {fizzBuzz} from "@/utils/fizzbuzz";

describe("Fibonacci Tests", () => {
    test("First 5 numbers", () => {
        expect(fizzBuzz(1n, defaultDivisors)).toBe("1");
        expect(fizzBuzz(3n, defaultDivisors)).toBe("Fizz");
        expect(fizzBuzz(5n, defaultDivisors)).toBe("Buzz");
        expect(fizzBuzz(15n, defaultDivisors)).toBe("FizzBuzz");
        expect(fizzBuzz(17n, defaultDivisors)).toBe("17");
    });
});
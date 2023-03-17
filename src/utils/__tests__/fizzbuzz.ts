import {fizzBuzz} from "@/utils/fizzbuzz";
import {defaultDivisors} from "@/ui/FizzBuzzControls";

describe("Fibonacci Tests", () => {
    test("First 5 numbers", () => {
        expect(fizzBuzz(1, defaultDivisors)).toBe("1");
        expect(fizzBuzz(3, defaultDivisors)).toBe("Fizz");
        expect(fizzBuzz(5, defaultDivisors)).toBe("Buzz");
        expect(fizzBuzz(15, defaultDivisors)).toBe("FizzBuzz");
    });
});
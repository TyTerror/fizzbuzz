import {fibonacci} from "@/utils/fibonacci";

describe("Fibonacci Tests", () => {
    test("First 5 numbers", () => {
        const answer = Array.of(
            BigInt(1),
            BigInt(1),
            BigInt(2),
            BigInt(3),
            BigInt(5),
            BigInt(8),
            BigInt(13),
        );
        expect(fibonacci(7)).toEqual(answer);
    });
});
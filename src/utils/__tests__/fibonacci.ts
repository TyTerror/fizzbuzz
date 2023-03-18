import {fibonacci} from "@/utils/fibonacci";

describe("Fibonacci Tests", () => {
    test("First 5 numbers", () => {
        const answer = Array.of(
            1n,
            1n,
            2n,
            3n,
            5n,
            8n,
            13n
        );
        expect(fibonacci(7)).toEqual(answer);
    });
});
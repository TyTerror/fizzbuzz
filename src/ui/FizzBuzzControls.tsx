"use client";

import {FormEvent} from "react";
import {Divisor} from "@/utils/fizzbuzz";

export const defaultDivisors: [Divisor, Divisor] = [{
    divisor: 3,
    label: "Fizz"
}, {
    divisor: 5,
    label: "Buzz"
}];

/**
 * Sets up the UI that allows a user to change the divisors for fizzbuzz (example: 3 and 5) and the labels that are
 * printed (example: "Fizz" and "Buzz").
 */
export function FizzBuzzControls() {
    return <div className="flex flex-col gap-5">
        {defaultDivisors.map((divisor, i) =>
            <div key={i} className="flex border-2 p-2 gap-10 w-fit">
                <label className="flex gap-3">Select divisor
                    <input type="number" required min={1} max={100} defaultValue={divisor.divisor}
                           name={`divisor${i}`}/>
                </label>

                <label className="flex gap-3">Select Label
                    <input type="text" required defaultValue={divisor.label} name={`label${i}`} className="max-w-xs"/>
                </label>
            </div>
        )}
    </div>;
}

export function getFizzBuzzParametersFromUser(e: FormEvent<HTMLFormElement>): [Divisor, Divisor] {
    const data = new FormData(e.target as HTMLFormElement);
    return [{
        divisor: parseInt(data.get("divisor0") as string),
        label: data.get("label0") as string
    }, {
        divisor: parseInt(data.get("divisor1") as string),
        label: data.get("label1") as string
    }];
}
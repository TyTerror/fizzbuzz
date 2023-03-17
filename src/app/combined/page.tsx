"use client";

import React, {FormEvent, useState} from "react";
import {FibonacciControls, getFibonacciParametersFromUser} from "@/ui/FibonacciControls";
import {defaultDivisors, FizzBuzzControls, getFizzBuzzParametersFromUser} from "@/ui/FizzBuzzControls";
import {List} from "@/ui/List";
import {getRangeFromUser, SubmitForm} from "@/ui/SubmitForm";
import {fibonacci} from "@/utils/fibonacci";
import {Divisor, fizzBuzz} from "@/utils/fizzbuzz";

export default function Combined() {
    const [range, setRange] = useState(10);
    const [fibonacciParameters, setFibonacciParameters] = useState({y: 1, z: 2});
    const [divisors, setDivisors] = useState<[Divisor, Divisor]>(defaultDivisors);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const fizzBuzzParameters = getFizzBuzzParametersFromUser(e);
        const fibonacciParameters = getFibonacciParametersFromUser(e);
        const range = getRangeFromUser(e);

        setDivisors(fizzBuzzParameters);
        setFibonacciParameters(fibonacciParameters);
        setRange(range);
    };

    const {y, z} = fibonacciParameters;
    const numbers = fibonacci(range, y, z).map(x => fizzBuzz(Number(x), divisors));
    return (
        <main className="p-5">
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <FizzBuzzControls/>
                <FibonacciControls/>
                <SubmitForm/>
            </form>

            <List items={numbers}/>
        </main>
    );
}
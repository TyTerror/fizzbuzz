"use client";

import {FormEvent, useState} from "react";
import {defaultDivisors, FizzBuzzControls, getFizzBuzzParametersFromUser} from "@/ui/FizzBuzzControls";
import {List} from "@/ui/List";
import {getRangeFromUser, SubmitForm} from "@/ui/SubmitForm";
import {Divisor, fizzBuzzUpTo} from "@/utils/fizzbuzz";

export default function FizzBuzz() {
    const [divisors, setDivisors] = useState<[Divisor, Divisor]>(defaultDivisors);
    const [range, setRange] = useState(10);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const divisors = getFizzBuzzParametersFromUser(e);
        const range = getRangeFromUser(e);

        setDivisors(divisors);
        setRange(range);
    };

    const numbers = fizzBuzzUpTo(range, divisors);
    return (
        <main className="px-5">
            <form className="flex flex-col gap-5" onSubmit={onSubmit}>
                <FizzBuzzControls/>
                <SubmitForm/>

                <List items={numbers}/>
            </form>
        </main>
    );
}
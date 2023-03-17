"use client";

import {FormEvent, useState} from "react";
import {fibonacci} from "@/fibonacci";
import {FibonacciControls, getFibonacciParametersFromUser} from "@/ui/FibonacciControls";
import {List} from "@/ui/List";
import {getRangeFromUser, SubmitForm} from "@/ui/SubmitForm";

export default function Fibonacci() {
    const [fibonacciParams, setFibonacciParams] = useState({
        range: 10,
        y: 1,
        z: 2
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const range = getRangeFromUser(e);
        const {y, z} = getFibonacciParametersFromUser(e);
        setFibonacciParams({range, y, z});
    };

    const {range, y, z} = fibonacciParams;
    const numbers = fibonacci(range, y, z).map(x => x.toString());
    return (
        <main className="p-5">
            <form className="flex flex-col gap-10" onSubmit={onSubmit}>
                <FibonacciControls/>
                <SubmitForm/>

                <List items={numbers}/>
            </form>
        </main>
    );
}

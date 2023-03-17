"use client"

import {ChangeEvent, FormEvent, useState} from "react";

type Divisor = {
    divisor: number,
    label: string,
}

export default function FizzBuzz() {
    const defaultDivisors = [{
        divisor: 3,
        label: "Fizz"
    }, {
        divisor: 5,
        label: "Buzz"
    }];

    const [options, setOptions] = useState<Divisor[]>(defaultDivisors);
    const [fizzBuzzNumber, setFizzBuzzNumber] = useState(10);

    const handle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);

        const options = [{
            divisor: parseInt(data.get("divisor0") as string),
            label: data.get("label0") as string
        }, {
            divisor: parseInt(data.get("divisor1") as string),
            label: data.get("label1") as string
        }]

        setOptions(options);

        const n = parseInt(data.get("fizzBuzzNumber") as string)
        setFizzBuzzNumber(n);
    }

    return (
        <main className="p-5">
            <form className="flex flex-col gap-10" onSubmit={handle}>
                <DivisorControls divisors={defaultDivisors}/>

                <div className="flex gap-5">
                    <input name="fizzBuzzNumber" type="number" min={1} max={10000} defaultValue={10} required className="w-20"/>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset form</button>
                </div>

                <ul>
                    { fizzBuzz(fizzBuzzNumber, options).map((result, index) => <li key={index + 1}>{result}</li>) }
                </ul>
            </form>
        </main>
    );
}

function fizzBuzz(n: number, divisors: Divisor[]): string[] {
    const allResults = [];
    for (let i = 1; i <= n; i++) {
        let result = "";
        for (const divisor of divisors) {
            if (i % divisor.divisor === 0) {
                result += divisor.label
            }
        }
        if (result == "") {
            result = i.toString();
        }
        allResults.push(result);
    }
    return allResults;
}

function DivisorControls(props: { divisors: Divisor[] }) {
    return <div className="flex flex-col gap-5">
        {props.divisors.map((divisor, i) =>
            <div key={i} className="flex border-2 p-2 gap-10 w-fit">
                <label className="flex gap-3">Select divisor
                    <input type="number" required min={1} max={100} defaultValue={divisor.divisor} name={`divisor${i}`}/>
                </label>

                <label className="flex gap-3">Select Label
                    <input type="text" required defaultValue={divisor.label} name={`label${i}`} className="max-w-xs"/>
                </label>
            </div>
        )}
    </div>
}

"use client"

import {FormEvent, useState} from "react";

export default function Fibonacci() {
    const [n, setN] = useState(10);
    const [y, setY] = useState(1);
    const [z, setZ] = useState(2);

    const handle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);

        const n = parseInt(data.get("fibonacciNumber") as string)
        const y = parseInt(data.get("Y") as string);
        const z = parseInt(data.get("Z") as string);

        setN(n);
        setY(y);
        setZ(z);
    }

    return (
        <main className="p-5">
            <form className="flex flex-col gap-10" onSubmit={handle}>
                <FibonacciControls/>

                <div className="flex gap-5">
                    <input name="fibonacciNumber" type="number" min={1} max={10000} defaultValue={10} required className="w-20"/>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset form</button>
                </div>

                <ul className="list-disc break-words">
                    { fibonacci(n, y, z).map((result, index) => <li key={index + 1}>{result.toString()}</li>) }
                </ul>
            </form>
        </main>
    );
}

function fibonacci(n: number, y: number, z: number): BigInt[] {
    const f: bigint[] = [];
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            f.push(BigInt(1));
        } else {
            const f1 = (i - y) > 0 ? f[i - y] : BigInt(1);
            const f2 = (i - z) > 0 ? f[i - z] : BigInt(1);
            f.push(f1 + f2);
        }
    }
    return f;
}

function FibonacciControls() {
    const control = (name: string, defaultValue: number) => (
        <label className="flex gap-3 border p-2">Select {name}
            <input type="number" required min={1} max={100} defaultValue={defaultValue} name={name}/>
        </label>
    );

    return <div className="flex flex-col gap-5 w-fit">
        {[
            control("Y", 1),
            control("Z", 2)
        ]}
    </div>
}

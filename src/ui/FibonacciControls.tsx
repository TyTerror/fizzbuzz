import {FormEvent} from "react";

export function FibonacciControls() {
    const Control = (props: { name: string, defaultValue: number }) => (
        <label className="flex gap-3 border p-2">Select {props.name}
            <input type="number" required min={1} max={100} defaultValue={props.defaultValue} name={props.name}/>
        </label>
    );

    return <div className="flex flex-col gap-5 w-fit">
        <Control name="Y" defaultValue={1}/>
        <Control name="Z" defaultValue={2}/>
    </div>;
}

export function getFibonacciParametersFromUser(e: FormEvent<HTMLFormElement>) {
    const data = new FormData(e.target as HTMLFormElement);

    const y = parseInt(data.get("Y") as string);
    const z = parseInt(data.get("Z") as string);

    return {y, z};
}
"use client";

import {FormEvent} from "react";

export function SubmitForm() {
    return (
        <div className="flex gap-5">
            <input name="range" type="number" min={1} max={10000} defaultValue={10} required className="w-20"/>
            <button type="submit">Submit</button>
            <button type="reset">Reset form</button>
        </div>
    );
}

export function getRangeFromUser(e: FormEvent<HTMLFormElement>) {
    const data = new FormData(e.target as HTMLFormElement);
    return parseInt(data.get("range") as string);
}
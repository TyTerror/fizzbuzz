import {fizzBuzzUpTo} from "@/fizzbuzz";

export function List(props: { items: string[] }) {
    return (
        <ul className="list-disc p-5">
            { props.items.map((item, index) => <li key={index}>{item}</li>) }
        </ul>
    );
}
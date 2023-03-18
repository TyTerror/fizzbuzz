export function List(props: { items: string[] }) {
    return (
        <ul className="list-disc p-5 break-words">
            {props.items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    );
}
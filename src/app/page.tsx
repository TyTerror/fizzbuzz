import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex justify-center">
            <div className="flex flex-col gap-2 basis-5 w-fit">
                <Card title="FizzBuzz" description="Run Fizz Buzz program" href="/fizzbuzz"/>
                <Card title="Fibonacci" description="Run Fibonacci program" href="/fibonacci"/>
                <Card title="Combined" description="Run both FizzBuzz and Fibonacci" href="/combined"/>
            </div>
        </main>
    );
}

function Card(props: { title: string, description: string, href: string }) {
    return (
        <Link href={props.href} className="border border-black p-2 text-center">
            {props.title}
        </Link>
    );
}

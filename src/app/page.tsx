import {Inter} from 'next/font/google';
import Link from 'next/link';

const inter = Inter({subsets: ['latin']});

export default function Home() {
    return (
        <main>
            <div>
                <Card title="FizzBuzz" description="Run Fizz Buzz program" href="/fizzbuzz"/>
                <Card title="Fibonacci" description="Run Fibonacci program" href="/fibonacci"/>
                <Card title="Combined" description="Run both FizzBuzz and Fibonacci" href="/combined"/>
            </div>
        </main>
    );
}

function Card(props: { title: string, description: string, href: string }) {
    return (
        <Link href={props.href}>
            <h2 className={inter.className}>
                {props.title} <span>-&gt;</span>
            </h2>
        </Link>
    );
}

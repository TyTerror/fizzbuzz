import Link from 'next/link';
import {Inter} from 'next/font/google';
import styles from './styles.module.css';

const inter = Inter({subsets: ['latin']});

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.grid}>
                <Card title="FizzBuzz" description="Run Fizz Buzz program"/>
                <Card title="Fibonacci" description="Run Fibonacci program"/>
                <Card title="Combined" description="Run both FizzBuzz and Fibonacci"/>
            </div>
        </main>
    );
}

function Card(props: { title: string, description: string }) {
    return (
        <Link href="/fizzbuzz" className={styles.card}>
            <h2 className={inter.className}>
                {props.title} <span>-&gt;</span>
            </h2>
        </Link>
    );
}

export function fibonacci(n: number, y: number = 1, z: number = 2): BigInt[] {
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
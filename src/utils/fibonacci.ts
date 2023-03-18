export function fibonacci(n: number, y = 1, z = 2): bigint[] {
    const f: bigint[] = [];
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            f.push(1n);
        } else {
            const f1 = (i - y) > 0 ? f[i - y] : 1n;
            const f2 = (i - z) > 0 ? f[i - z] : 1n;
            f.push(f1 + f2);
        }
    }
    return f;
}
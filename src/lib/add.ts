export default function add(a: number, b: number): number {
    return a + b
}

if (import.meta.vitest) {
    const { it, expect } =  import.meta.vitest
    
    it('adds two numbers', () => {
        expect(add(1, 2)).toBe(3)
    })
}
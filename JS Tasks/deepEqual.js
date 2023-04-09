function deepEqual(a, b) {
    if (a === b) {
        return true;
    }

    if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) {
        return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (const key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }

    return true;
}

const obj1 = {
    a: 1,
    b: {
        c: 3,
        d: {
            e: 'e',
            f: 6
        }
    }
};

const obj2 = {
    a: 1,
    b: {
        c: 3,
        d: {
            e: 'e',
            f: 6
        }
    }
};

console.log(deepEqual(obj1, obj2));

async function foo(): Promise<any> {
    const someOptionalCache = undefined;
    const value = await new Promise((resolve) => {
        if (!someOptionalCache) {
            resolve(null);
        }

        resolve(someOptionalCache.fetch("some-key"));
    });
}

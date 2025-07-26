export function initializeApp(duration = 3000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(false);
        }, duration);
    })
}
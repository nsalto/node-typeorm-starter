export default function sleep(ms: any) {
    return new Promise((resolve: any) => {
        setTimeout(resolve, ms);
    });
}

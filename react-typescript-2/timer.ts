const delay = (ms: number) => new Promise((res, rej) => { 
    setTimeout(() => {
        res(ms/1000 + '초');
    }, ms);
});


async function timer(s: number) {
    const ms = await delay(s*1000);
    console.log(ms);
}

timer(3);
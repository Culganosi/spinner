const spinnerTwo = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];

let delay = 0;
for (let i = 0; i < spinnerTwo.length; i++) {
setTimeout(() => process.stdout.write(spinnerTwo[i]), delay);
delay += 100;
};
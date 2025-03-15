const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString();
};

console.log(`The current time is: ${getCurrentTime()}`);
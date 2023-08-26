export const getDaysForUrl = () => {
    const timeElapsed = Date.now();
    console.log(timeElapsed, "timeElapsed")
    const today = new Date(timeElapsed);
    console.log(today, "today")

    const msPerDay = 1000 * 60 * 60 * 24;
    const tomorrow = new Date(timeElapsed + msPerDay);
    return {
        today: today.toISOString().split('T')[0],
        tomorrow: tomorrow.toISOString().split('T')[0],
    };
};

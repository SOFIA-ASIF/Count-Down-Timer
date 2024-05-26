"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CountdownTimer {
    endDate;
    intervalId;
    constructor(endDate) {
        this.endDate = endDate;
    }
    calculateTimeRemaining() {
        const now = new Date().getTime();
        const distance = this.endDate.getTime() - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return { days, hours, minutes, seconds, distance };
    }
    start() {
        this.intervalId = setInterval(() => {
            const { days, hours, minutes, seconds, distance } = this.calculateTimeRemaining();
            if (distance < 0) {
                clearInterval(this.intervalId);
                console.log("Countdown finished");
            }
            else {
                console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);
    }
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}
// Example usage
const endDate = new Date("2024-05-25T04:24:03");
const countdownTimer = new CountdownTimer(endDate);
countdownTimer.start();

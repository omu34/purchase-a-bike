class CountDownTimer extends HTMLElement {
    constructor() {
        super();
        // console.log("CountdownTimer Created!");

        // Grab required elements
        this.countDownText = this.querySelector('.countdown-text');
        this.daysContainer = this.querySelector('.days');
        this.hoursContainer = this.querySelector('.hours');
        this.minutesContainer = this.querySelector('.minutes');
        this.secondsContainer = this.querySelector('.seconds');

        // Basic check to ensure all containers are found
        if (!this.countDownText || !this.daysContainer || !this.hoursContainer || !this.minutesContainer || !this.secondsContainer) {
            console.error("CountdownTimer: One or more display elements not found. Make sure your HTML has elements with classes like .countdown-text, .days, etc.");
            return; // Stop execution if essential elements are missing
        }

        // console.log('Elements Found:', {
        //   countDownText: this.countDownText,
        //   daysContainer: this.daysContainer,
        //   hoursContainer: this.hoursContainer,
        //   minutesContainer: this.minutesContainer,
        //   secondsContainer: this.secondsContainer
        // });

        // Set Date
        this.timerContainer = this.querySelector(".countdown-timer");

        // Ensure the timer container is found and has a dataset
        if (!this.timerContainer || !this.timerContainer.dataset) {
            console.error("CountdownTimer: '.countdown-timer' element or its dataset not found. Ensure your HTML has an element like <div class='countdown-timer' data-end-date='YOUR_DATE_STRING'></div>");
            this.countDownText.innerHTML = "Error: Timer not configured!";
            return; // Stop execution
        }

        this.endDateString = this.timerContainer.dataset.endDate;

        // console.log("End Date String from data-attribute:", this.endDateString);

        // Corrected: Use this.endDateString to create the Date object
        this.endDate = new Date(this.endDateString).getTime();

        // Validate if the parsed date is valid
        if (isNaN(this.endDate)) {
            console.error(`CountdownTimer: Invalid end date provided: "${this.endDateString}". Please use a valid date format (e.g., "May 25, 2026 16:37:52 EST" or "2026-05-25T16:37:52").`);
            this.countDownText.innerHTML = "Error: Invalid End Date!";
            return; // Stop execution if the date is invalid
        }

        // Initial tick to display the timer immediately
        this.handleTick();

        // Start timer
        // Bind 'this' to the handleTick function to ensure it refers to the class instance
        this.interval = setInterval(this.handleTick.bind(this), 1000);
    }

    handleTick() {
        let now = new Date().getTime();
        let timeleft = this.endDate - now;

        // If the countdown is finished
        if (timeleft < 0) {
            this.countDownText.innerHTML = "This sale has ended!";
            // console.log("Countdown finished. Stopping timer.");
            clearInterval(this.interval); // Stop the interval
            return; // Exit the function
        }

        // Calculate time units
        const msInDay = 1000 * 60 * 60 * 24;
        const msInHour = 1000 * 60 * 60;
        const msInMinute = 1000 * 60;

        const days = Math.floor(timeleft / msInDay);
        const hours = Math.floor((timeleft % msInDay) / msInHour);
        const minutes = Math.floor((timeleft % msInHour) / msInMinute);
        const seconds = Math.floor((timeleft % msInMinute) / 1000);

        // Update the DOM elements
        // Using padStart for consistent two-digit display for hours, minutes, seconds
        this.daysContainer.innerHTML = `${days}d `;
        this.hoursContainer.innerHTML = `${String(hours).padStart(2, '0')}h `;
        this.minutesContainer.innerHTML = `${String(minutes).padStart(2, '0')}m `;
        this.secondsContainer.innerHTML = `${String(seconds).padStart(2, '0')}s`;
    }

    // Optional: lifecycle callback when the element is removed from the DOM
    disconnectedCallback() {
        // console.log("CountdownTimer removed from DOM. Clearing interval.");
        clearInterval(this.interval);
    }
}

// Define the custom element
customElements.define("countdown-timer", CountDownTimer);
export default function countDown(){
    let $daysEl = $('.js-timerDays');
    let $hoursEl = $('.js-timerHours');
    let $minutesEl = $('.js-timerMinutes');
    let $secondsEl = $('.js-timerSeconds');
    // Set the date we're counting down to
    let countDownDate = new Date("Sep 20, 2018 10:00:00").getTime();

    class Timer {
        constructor ($days, $hours, $minutes, $seconds, myCountDownDate) {
            this.$days = $days;
            this.$hours = $hours;
            this.$minutes = $minutes;
            this.$seconds = $seconds;
            this.countDownDate = myCountDownDate;
        }
        startCountDown() {
            let counter = setInterval(() => {

                this.currentDate = new Date().getTime();

                this.distance = this.countDownDate - this.currentDate;

                let days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

                this.$days.html(days);
                this.$hours.html(hours);
                this.$minutes.html(minutes);
                this.$seconds.html(seconds);

            }, 1000);

            if (this.distance < 0) {
                clearInterval(counter);
            }
        }
    }

    let myCountDownTimer = new Timer($daysEl, $hoursEl, $minutesEl, $secondsEl, countDownDate);
    myCountDownTimer.startCountDown();


};

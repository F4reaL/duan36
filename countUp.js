class CountUp {
    constructor(elements, endVals, options = {}) {
        this.elements = Array.isArray(elements) ? elements : [elements];
        this.endVals = Array.isArray(endVals) ? endVals : [endVals];
        this.startVal = options.startVal || 0;
        this.duration = options.duration || 2; // Thời gian đếm (giây)
        this.useEasing = options.useEasing !== undefined ? options.useEasing : true;
        this.useGrouping = options.useGrouping !== undefined ? options.useGrouping : true;
        this.separator = options.separator || ',';
        this.decimal = options.decimal || '.';
        this.startTimes = new Array(this.elements.length).fill(null);
        this.isCounting = new Array(this.elements.length).fill(false);
    }

    start() {
        this.elements.forEach((element, index) => {
            if (!this.isCounting[index]) {
                this.startTimes[index] = null;
                this.animate(element, this.endVals[index], index);
                this.isCounting[index] = true;
            }
        });
    }

    animate(element, endVal, index) {
        const step = (timestamp) => {
            if (!this.startTimes[index]) this.startTimes[index] = timestamp;
            const progress = Math.min((timestamp - this.startTimes[index]) / (this.duration * 1000), 1);
            const currentVal = this.easeOutQuart(progress) * (endVal - this.startVal) + this.startVal;
            element.textContent = this.formatNumber(currentVal);

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                this.isCounting[index] = false; // Đánh dấu đã hoàn thành đếm
            }
        };

        requestAnimationFrame(step);
    }

    easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }

    formatNumber(num) {
        num = num.toFixed(0); // Làm tròn đến số nguyên gần nhất
        const parts = num.split('.');
        let integerPart = parts[0];
        const decimalPart = parts.length > 1 ? this.decimal + parts[1] : '';

        if (this.useGrouping) {
            integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, this.separator);
        }

        return integerPart + decimalPart;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.count-up');
    const endValues = Array.from(elements).map(el => parseInt(el.getAttribute('data-end')));

    const countUp = new CountUp(elements, endValues, {
        duration: 2, // Thời gian đếm (giây)
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.'
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp.start();
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

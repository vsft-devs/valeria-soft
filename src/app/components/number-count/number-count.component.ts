import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-count',
  templateUrl: './number-count.component.html',
  styleUrl: './number-count.component.scss'
})
export class NumberCountComponent {
  animatedNumber = 0;
  @Input() targetNumber = 0;
  @Input() text = "";

  ngOnInit() {
    this.animateNumber();
  }

  animateNumber(): void {

    let currentNumber = 0;
    const step = this.targetNumber / 100; // Step size for each animation frame

    const interval = setInterval(() => {
      currentNumber += step;
      this.animatedNumber = Math.floor(currentNumber);

      // Stop when the target number is reached
      if (currentNumber >= this.targetNumber) {
        clearInterval(interval);
        this.animatedNumber = this.targetNumber; // Ensure it finishes at the target value
      }
    }, 20); // Adjust the interval for smoother or faster animations
  }
}

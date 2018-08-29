import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() playPressed = new EventEmitter<{increments: number[]}>()
  @Output() stopPressed = new EventEmitter()
  oneSecondRepeater
  listOfNums: number[] = []

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.oneSecondRepeater = 
      setInterval(() => {
        this.listOfNums.push(this.listOfNums.length + 1)
        this.playPressed.emit({increments: this.listOfNums})
      }, 1000)
  }

  onStop() {
    clearInterval(this.oneSecondRepeater)
    this.stopPressed.emit()
  }

}

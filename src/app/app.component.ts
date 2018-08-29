import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds: number[]
  evens: number[]

  onGameStarted(gameData: {increments: number[]}) {
    this.odds = gameData.increments.filter(x => x % 2 == 1)
    this.evens = gameData.increments.filter(x => x % 2 == 0)
    console.log('This is app.component: ' + gameData.increments[gameData.increments.length - 1])
  }

  onGameStopped() {
    console.log('Game stopped in the app.component')
  }
}

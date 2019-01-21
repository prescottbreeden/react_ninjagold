import React, { Component } from 'react';
import './App.css';
import Gold from './components/Gold'
import Farm from './components/locations/Farm';
import Cave from './components/locations/Cave';
import House from './components/locations/House';
import Casino from './components/locations/Casino';
import ActivityLog from './components/ActivityLog';

class App extends Component {
  state = {
    gold: 0,
    activityLog: [],
  }

  countGold(gold, location) {
    const newEvent = {
      location: location,
      gold: gold,
      timestamp: new Date(Date.now())
    }
    const newTotal = this.state.gold + gold;
    const newActivity = [newEvent, ...this.state.activityLog];
    this.setState({
      gold: newTotal,
      activityLog: newActivity
    })
  }

  caveGold = () => {
    const gold = Math.round(Math.random()*5) + 5;
    this.countGold(gold, 'cave');
  }
  
  farmGold = () => {
    const gold = Math.round(Math.random()*10) + 10;
    this.countGold(gold, 'farm');
  }
  
  houseGold = () => {
    const gold = Math.round(Math.random()*3) + 2;
    this.countGold(gold, 'house');
  }
  
  casinoGold = () => {
    const winBool = Math.round(Math.random());
    if (!winBool) {
      const gold = Math.round(Math.random()*50) * -1;
      this.countGold(gold, 'casino');
    } else {
      const gold = Math.round(Math.random()*50);
      this.countGold(gold, 'casino');
    }
  }
  
  render() {
    return (
      <div className="App">
        <Gold gold={this.state.gold} />
        <div className="location__container">
          <Farm findGold={this.farmGold}/>
          <Cave findGold={this.caveGold}/>
          <House findGold={this.houseGold}/>
          <Casino findGold={this.casinoGold}/>
        </div>
        <ActivityLog log={this.state.activityLog} />
      </div>
    );
  }
}

export default App;

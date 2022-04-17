import { Component, OnInit } from '@angular/core';
import { Attributes, Status } from './../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public status: Status;
  public name: string;
  public attributes: Attributes;
  public backgroundColour: string;
  public textColour: string;

  constructor() {
    this.name = 'Niall';
    this.status = 'ALIVE';
    this.attributes = { health: 5, defence: 9, attack: 3 };
    this.backgroundColour = this.getBackgroundColour(this.name);
    this.textColour = this.getTextColour(this.backgroundColour);
  }

  ngOnInit(): void {}

  public inflictDamage(incomingDamage: number) {
    if (this.attributes.defence <= 0) {
      this.attributes.health = this.attributes.health - incomingDamage;
      this.checkHealth();
    } else {
      this.attributes.defence = this.attributes.defence - incomingDamage;
      this.checkHealth();
      if (this.attributes.defence <= 0) {
        this.inflictDamage(this.attributes.defence * -1);
        this.attributes.defence = 0;
        this.checkHealth();
      }
    }
    this.checkHealth();
  }

  private checkHealth() {
    this.attributes.health <= 0 ? this.setStatus('DEAD') : '';
  }

  public getStatus() {
    return this.status;
  }

  private setStatus(status: Status) {
    this.status = status;
  }

  public getBackgroundColour(str: string) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xff;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }

  public getTextColour(hexcolor: string) {
    hexcolor = hexcolor.replace('#', '');
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  }
}

export interface Card {
    name: string;
    attributes: Attributes;
}

export interface Attributes {
    maxHealth?: number;
    health: number;
    defence: number;
    attack: number;
}

export type Status = "ALIVE" | "NEAR DEATH" | "DEAD";

// export class Card implements Card{
//     protected status: Status;
//     constructor(
//         public name: string,
//         public attributes: Attributes,
//     ){
//         this.status = "ALIVE";
//         this.attributes.maxHealth = this.attributes.health;
//         this.checkHealth();
//     }

//     public inflictDamage(incomingDamage: number){
//         if(this.attributes.defence <= 0){
//             this.attributes.health = this.attributes.health - incomingDamage;
//         } else {
//             this.attributes.defence = this.attributes.defence - incomingDamage;
//             if(this.attributes.defence <= 0){
//                 this.inflictDamage(this.attributes.defence  * -1);
//                 this.attributes.defence = 0;
//             }
//         }
//         this.checkHealth();
//     }

//     private checkHealth(){
//         this.attributes.health < 0 ? this.setStatus('DEAD') : '';
//     }

//     private setStatus(status: Status){
//         this.status =  status;
//     }
// }


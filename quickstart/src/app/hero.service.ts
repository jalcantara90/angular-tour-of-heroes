import { Injectable } from '@angular/core';

import { Hero } from './hero'; // insertamos la clase Hero
import { HEROES } from './mock-heroes'; //insertamos el array HEROES

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> { // metodo getHeroes, que devolvera los heroes definidos en mock-heroes
        return Promise.resolve(HEROES);
    };
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
                    .then(heroes => heroes.find(hero => hero.id === id));
    }

}
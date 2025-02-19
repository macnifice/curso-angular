import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9000
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character: Character): void {
    // debugger;
    const newCharacter: Character = { ...character, id: uuid() }
    this.characters.push(newCharacter);
  }

  deleteById(id: string): void {
    // this.characters.splice(index, 1)
    this.characters = this.characters.filter(c => c.id !== id)
  }
}

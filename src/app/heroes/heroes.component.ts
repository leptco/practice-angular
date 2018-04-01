import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
	heroes: Hero[];

	selectedHero: Hero;

	heroImageUrl = 'https://i-vnexpress.vnecdn.net/2018/03/26/nganhang2-3659-1522046715_500x300.jpg';

	number1 = 1;
	number2 = 2;

	actionName = 'as';

	isDisable = true;
	constructor(private heroService: HeroService) {}

	ngOnInit() {
		//this.setCurrentStyles();
		this.getHeroes();
	}

	getHeroes(): void {
		this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
	}

	currentStyles: {};
	setCurrentStyles() {
		// CSS styles: set per current state of component properties
		this.currentStyles = {
			'font-style': this.isDisable ? 'italic' : 'normal',
			'font-weight': !this.isDisable ? 'bold' : 'normal',
			'font-size': this.isDisable ? '24px' : '12px',
		};
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	add(name: string): void {
		name = name.trim();
		if (!name) {
			return;
		}
		this.heroService.addHero({ name } as Hero).subscribe(hero => {
			this.heroes.push(hero);
		});
	}

	delete(hero: Hero): void {
		this.heroes = this.heroes.filter(h => h !== hero);
		this.heroService.deleteHero(hero).subscribe();
	}
}

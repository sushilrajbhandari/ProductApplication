import { Component, OnChanges, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';


@Component ({
    //attribute
    selector : 'app-star',
    templateUrl: './star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges, OnInit, OnDestroy {
    starWidth: number;
    @Input () rating: number;
    @Output () ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    constructor(){
        console.log ('constructor ');
    }

    ngOnChanges() : void{
        console.log ('on Changes lifecycle hooks');
        this.starWidth = this.rating * 86 / 5 ;
    }

    ngOnInit() : void{
        console.log ('on init  lifecycle hooks');
    }

    ngOnDestroy() : void{
        console.log ('on destroy  lifecycle hooks');
    }

    onStar(): void{
        this.ratingClicked.emit (`This star rating is ${this.rating}`);
        localStorage.setItem('ratevalue', 'My Rate Value 1');
    }

}
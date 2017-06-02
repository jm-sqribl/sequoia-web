import { 
    Component, OnChanges, Input, 
    trigger, state, animate, transition, style,keyframes 
} from '@angular/core';


@Component({
  selector : 'form-status',
  templateUrl: '/form-status.component.html',
  animations: [
        /*
        trigger('toggleState', [
            state('active', style({
                opacity: 1
            })),
            state('inactive', style({
                opacity: 0
            })),
            transition('active => inactive', animate('700ms ease-out')),
            //transition('* => active', animate('700ms ease-out'))
        ])*/
        
        trigger('toggleState', [
            state('active', style({opacity: 0})),
            transition('* => active', animate('3000ms 2s',  
                keyframes([
                    style({opacity: 1}),
                    style({opacity: 0, offset: 1})
                ])
            )),
        ])
  ],
  styles: ['#content { opacity: 0; }']
})
export class FormStatusComponent  {
    
    @Input() animatestate: string = 'inactive';
    
}
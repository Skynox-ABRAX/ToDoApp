import { animate, animation, keyframes, query, sequence, stagger, state, style, transition, trigger, useAnimation } from "@angular/animations";

export const showTodoAnimation = [
  trigger('showTilesTodo', [
    transition('* => *', [ // each time the binding value changes
      query(':leave', [
        stagger(100, [
          animate('0.5s', style({ opacity: 0 }))
        ])
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 }),
        stagger(100, [
          animate('0.5s', style({ opacity: 1 }))
        ])
      ], { optional: true })
    ])
  ])
];

export const showTopButton = [
  trigger('showTopButton', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', animate('300ms ease-out')),
      transition(':leave', animate('300ms ease-in')),
    ])
 ];



export const showListAnimation = [
  trigger('showList', [
    transition('* => *', [ // each time the binding value changes
      query(':leave', [
        stagger(100, [
          animate('0.5s', style({ opacity: 0 }))
        ])
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 }),
        stagger(100, [
          animate('0.5s', style({ opacity: 1 }))
        ])
      ], { optional: true })
    ])
  ])
];  





    
export const showMenuAnimation = [
  trigger('showMenu', [
    transition(':enter', [
      // the provided offset values
      animate("0.8s", keyframes([
        style({ transform: 'translateX(-300px)', opacity: 0, offset: 0 }),
        style({ transform: 'translateX(0)', opacity: 1, offset: 1 })
      ]))
    ])
  ])];

export const showContentAnimation = [
  trigger('showContent', [
    transition(':enter', [
      // the provided offset values
      animate("0.8s", keyframes([
        style({ transform: 'translateY(50%)', opacity: 0, offset: 0 }),
        style({ transform: 'translateY(0%)', opacity: 1, offset: 1 })
      ]))

    ]),
    transition(':leave', [
      // the provided offset values
      animate("0.8s", keyframes([
        style({ transform: 'translateY(0%)', opacity: 1, offset: 0 }),
        style({ transform: 'translateY(60%)', opacity: 0, offset: 1 })
      ]))

    ])
  ])
]; 

export const showAsideAnimation = [
  trigger('showAside', [
    transition(':enter', [
      // the provided offset values
      animate("0.8s", keyframes([
        style({ transform: 'translateX(100%)', opacity: 0, offset: 0 }),
        style({ transform: 'translateX(0px)', opacity: 1, offset: 1 })
      ]))
    ]),
    transition(':leave', [
      // the provided offset values
      animate("0.4s", keyframes([
        style({ transform: 'translateX(0%)', opacity: 1, offset: 0 }),
        style({ transform: 'translateX(100%)', opacity: 0, offset: 1 })
      ]))

    ])
  ])];

  export const showEditAnimation = [
    trigger('showEdit', [
      transition(':enter', [
         // the provided offset values
        animate("0.3s", keyframes([
          style({ transform: 'scale(0)', opacity: 0, offset: 0 }),
          style({ transform: 'scale(1)', opacity: 1, offset: 1 })
        ]))
      ]),
      transition(':leave', [
        // the provided offset values
       animate("0.3s", keyframes([
         style({ transform: 'scale(1)', opacity: 1, offset: 0 }),
         style({ transform: 'scale(0)', opacity: 0, offset: 1 })
       ]))
      ])
  ])]  
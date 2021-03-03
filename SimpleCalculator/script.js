class Calculator {
   constructor( prevOperTextEl, currOperTextEl ) {
      this.prevOperTextEl = prevOperTextEl;
      this.currOperTextEl = currOperTextEl;
      this.clear();
   }
   
   clear() {
      this.currOper = '';
      this.prevOper = '';
      this.operation = undefined;
      this.lastOperation = '';
   }
   
   delete() {
      this.currOper = this.currOper.toString().slice( 0, -1 );
   }
   
   appendNumber( number ) {
      if ( number === '.' && this.currOper.includes( '.' ) ) return;
      if ( this.lastOperation ) {
         this.currOper = number.toString();
         this.lastOperation = '';
      } else {
         this.currOper = this.currOper.toString() + number.toString();
      }
   }
   
   chooseOperation( operation ) {
      if ( this.currOper === '' ) return;
      if ( this.prevOper !== '' ) {
         this.compute();
      }
      this.operation = operation;
      this.prevOper = this.currOper;
      this.currOper = '';
   }
   
   compute() {
      let computation;
      
      const prev = parseFloat( this.prevOper );
      const curr = parseFloat( this.currOper );
      if ( isNaN( prev ) || isNaN( curr ) ) return;
      switch ( this.operation ) {
         case '+':
            computation = prev + curr;
            break;
         case '-':
            computation = prev - curr;
            break;
         case '×':
            computation = prev * curr;
            break;
         case '÷':
            computation = prev / curr;
            break;
         default:
            return;
      }
      this.lastOperation = this.operation;
      this.currOper = computation;
      this.operation = undefined;
      this.prevOper = '';
   }
   
   getDisplayNumber( number ) {
      const stringNumber = number.toString();
      const integerDigits = parseFloat( stringNumber.split( '.' )[0] );
      const decimalDigits = stringNumber.split( '.' )[1];
      
      let integerDisplay;
      if ( isNaN( integerDigits ) ) {
         integerDisplay = '';
      } else {
         integerDisplay = integerDigits.toLocaleString( 'en', {
            maximumFractionDigits : 0
         } );
      }
      if ( decimalDigits != null ) {
         return `${integerDisplay}.${decimalDigits}`;
      } else {
         return integerDisplay;
      }
   }
   
   updateDisplay() {
      this.currOperTextEl.innerText = this.getDisplayNumber( this.currOper );
      if ( this.operation != null ) {
         this.prevOperTextEl.innerText = `${this.getDisplayNumber(
            this.prevOper
         )} ${this.operation}`;
      } else {
         this.prevOperTextEl.innerText = '';
      }
   }
}

const numberButtons = document.querySelectorAll( '[data-number]' ),
   operationButtons = document.querySelectorAll( '[data-operation]' ),
   equalsButton = document.querySelector( '[data-equals]' ),
   deleteButton = document.querySelector( '[data-delete]' ),
   allClearButton = document.querySelector( '[data-all-clear]' ),
   prevOperTextEl = document.querySelector( '[data-prev-oper]' ),
   currOperTextEl = document.querySelector( '[data-curr-oper]' );

const calc = new Calculator( prevOperTextEl, currOperTextEl );

numberButtons.forEach( ( btn ) =>
   btn.addEventListener( 'click', () => {
      calc.appendNumber( btn.innerText );
      calc.updateDisplay();
   } )
);

operationButtons.forEach( ( btn ) =>
   btn.addEventListener( 'click', () => {
      calc.chooseOperation( btn.innerText );
      calc.updateDisplay();
   } )
);

equalsButton.addEventListener( 'click', () => {
   calc.compute();
   calc.updateDisplay();
   //   calc.clear();
} );

allClearButton.addEventListener( 'click', () => {
   calc.clear();
   calc.updateDisplay();
} );

deleteButton.addEventListener( 'click', () => {
   calc.delete();
   calc.updateDisplay();
} );

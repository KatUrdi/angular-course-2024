import { afterNextRender, afterRender, Component } from '@angular/core';
@Component({
  selector: 'counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  sum:number=0
  appBackground:string='red'
  constructor(){
    afterRender({
      /*earlyRead: () => {
        console.log("INTO EARLY READ")
        const currentAppColor = this.appBackground
        return 'From earlyRead: '+currentAppColor
      },*/
      write: () => {
        console.log("INTO WRITE")
        document.body.style.backgroundColor = this.appBackground
        const currentAppColor = this.appBackground
        if(currentAppColor.includes('red')){
          this.appBackground='blue'
        }else{
          this.appBackground='red'
        }
        return 'From write: '+this.appBackground
      },
      /*mixedReadWrite: (props) => {
        console.log("INTO MIXED READ WRITE", props)
        if(props.indexOf('red') > -1){
          this.appBackground='green'
        }else{
          this.appBackground='red'
        }
        return 'From mixedReadWrite: '+this.appBackground
      },*/
      read: (props) => {
        console.log("INTO READ ",props)
        const newBackground = this.appBackground
      } 
    })
    afterNextRender(() =>{
      console.log("counter after next render: ",this.sum)
    })
  }
}

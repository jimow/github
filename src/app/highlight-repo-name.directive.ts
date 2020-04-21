import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightRepoName]'
})
export class HighlightRepoNameDirective {

  constructor(private elem:ElementRef){}

  @HostListener("click") onClik() {
    this.textDeco("green")
  }

  @HostListener("dblclick") onDoubleClick(){
    this.textDeco("yellow")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.backgroundColor=action;

  }

}



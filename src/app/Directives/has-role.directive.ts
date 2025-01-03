import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHasRole]',
})
export class HasRoleDirective {

  private hasRole:boolean=false;

  constructor(private templateRef:TemplateRef<any>,private viewContainer:ViewContainerRef) { }

  @Input('appHasRole') set hasRoleVisibility(condition:boolean){
    console.log('Conditon: ',condition);
    console.log('hasRole',this.hasRole);
    if(condition && !this.hasRole){
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasRole=true;
    }
    else if(!condition && this.hasRole){
      this.viewContainer.clear();
      this.hasRole=false;
    }
  }

}

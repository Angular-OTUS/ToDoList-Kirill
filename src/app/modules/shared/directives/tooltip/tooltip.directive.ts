import {
  ApplicationRef,
  ComponentRef,
  Directive,
  ElementRef, HostListener, Inject,
  Input, ViewContainerRef,
} from '@angular/core';
import {TooltipComponent} from "src/app/modules/shared/components/tooltip/tooltip.component";
import {DOCUMENT} from "@angular/common";

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective{

  @Input() tooltip = ''

  private tooltipComponent?: ComponentRef<TooltipComponent>;

  constructor(
      private viewContainerRef: ViewContainerRef,
      @Inject(DOCUMENT) private document: Document,
      private elementRef: ElementRef,
      private appRef: ApplicationRef) {
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.tooltipComponent) return
    this.tooltipComponent = this.viewContainerRef.createComponent(TooltipComponent)
    this.document.body.appendChild(this.tooltipComponent.location.nativeElement)
    this.setToolTipComponentProperties()
    this.tooltipComponent.hostView.detectChanges()
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (!this.tooltipComponent) return
    this.appRef.detachView(this.tooltipComponent.hostView)
    this.tooltipComponent.destroy()
    this.tooltipComponent = undefined
  }
  private setToolTipComponentProperties() {
    if (!this.tooltipComponent) return
    this.tooltipComponent.instance.tooltip = this.tooltip
    const {left, right, bottom, top} = this.elementRef.nativeElement.lastChild.getBoundingClientRect()
    this.tooltipComponent.instance.left = (right - left) / 2 + left;
    this.tooltipComponent.instance.top = (top - bottom) / 1.5 + top;
  }
}


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconService } from 'src/app/Services/icon.service';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FABComponent implements OnInit {
  @Input() iconName: string = 'Plus';
  @Input() menuItems: string[] = [];
  @Input() size: number = 50;
  @Input() fontSize?: number;
  @Input() pageFab: boolean = true;
  @Input() title?: string;
  @Output() fabClick: EventEmitter<string> = new EventEmitter();
  icon?: IconDefinition;

  click(event: Event) {
    const elmnt: HTMLElement = event.target as HTMLDivElement;
    console.log(elmnt.dataset);
    this.fabClick.emit(elmnt.dataset.fabvalue);
  }
  constructor(private icons: IconService) {
    icons.getIconByName('Plus');
  }

  ngOnInit(): void {
    this.icon = this.icons.getIconByName(this.iconName);
    console.log(this.icon);
    if (!this.fontSize) this.fontSize = this.size * .6;
  }

}

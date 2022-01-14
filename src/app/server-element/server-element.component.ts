import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{
  @Input('serverElement') element: {type: string, name: string, content: string} // définir l'objet anonyme sur le tas

  constructor() {
    console.log('constructor called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

}

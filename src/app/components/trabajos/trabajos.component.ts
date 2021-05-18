import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  domino: string[] = ['https://i.imgur.com/I51A8f7.png'];
  jstorage: string[] = ['https://i.ibb.co/gdFMX0M/Screenshot-20210518-130813.png', 'https://i.ibb.co/VM291rq/Screenshot-20210518-130246.png', 'https://i.ibb.co/hZM1JD4/Screenshot-20210518-131009.png']
  task: string[] = ['https://i.ibb.co/6WnZrd7/Screenshot-20210518-132315.png', 'https://i.ibb.co/K9qYRXD/Screenshot-20210518-132417.png', 'https://i.ibb.co/Sm6gF14/Screenshot-20210518-132448.png', 'https://i.ibb.co/g9CW2DL/Screenshot-20210518-132527.png']
  constructor() { }

  ngOnInit(): void {
  }

}

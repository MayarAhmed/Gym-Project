import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.scss']
})
export class FitnessComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal) { }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  ngOnInit() {
  }

}

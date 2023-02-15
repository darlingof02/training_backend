import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillLevel } from 'src/app/shared/interfaces/simpleInterfaces';
import { SkillLevelService } from 'src/app/shared/services/skill-level.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  constructor(private modalService: NgbModal, private skillLevelService: SkillLevelService, public activeModal: NgbActiveModal) { }


  addNewSkill(skillLevel: SkillLevel): void {
    this.skillLevelService.addNewSkillLevel(skillLevel)
    .subscribe((res) => {
      location.reload();
    })
  }
}

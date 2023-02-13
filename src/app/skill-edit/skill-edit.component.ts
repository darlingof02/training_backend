import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillLevel } from '../shared/interfaces/simpleInterfaces';
import { SkillLevelService } from '../shared/services/skill-level.service';
import { SkillComponent } from './skill/skill.component';

@Component({
  selector: 'app-skill-edit',
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.css']
})
export class SkillEditComponent implements OnInit {

  skills: SkillLevel[] = [];
  constructor(private skillService: SkillLevelService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.skillService.getAllSkillLevel()
    .subscribe(
      (res) => {
        this.skills = res;
      }
    )
  }

  open(skill: SkillLevel|null): void {
    const modalRef = this.modalService.open(SkillComponent);
    
  }
}

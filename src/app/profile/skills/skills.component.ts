import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../../auth/profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'] // Use styleUrls instead of styleUrl
})
export class SkillsComponent implements OnInit {
  skills: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.skills = this.profileService.getSkills(); 
  }
  
}

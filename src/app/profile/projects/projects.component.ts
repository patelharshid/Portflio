import { Component } from '@angular/core';
import { ProfileService } from '../../../../auth/profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    projects: any =[];
  
    constructor(private profileService:ProfileService) { }
  
    ngOnInit() {
      this.projects = this.profileService.getProjects(); 
    }
}

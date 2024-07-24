import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'frontend and backend in Angular and ASP.NET',
      desc: '',
      livedemo: '',
      githurl: '',
      imgUrl: 'assets/project1.png',
      tech: 'Angular , ASP.NET'
    },

    {
      id: 2,
      title: 'eLEARNING frontend in bootstrap',
      desc: '',
      livedemo: 'https://patelharshid.github.io/DE_Project5/',
      githurl: 'https://github.com/patelharshid/DE_Project5',
      imgUrl: 'assets/Project2.png',
      tech: 'BOOTSTRAP'
    },


    // {
    //   id: 3,
    //   title: 'CRUD operation using MEAN stack',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
    //   githurl: 'https://github.com/mehulk05/Blog-using-mean',
    //   imgUrl: 'assets/images/z27.png',
    //   tech: 'Angular 10, Node, MongoDB, Express'
    // },

  

  ]
  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/1WODFuhIzQw2AXPsjt6f3rs-EDWhdhT8s89fOTrGRh70/edit?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'HTML && CSS ',
      'progress': '80%'
    },
    {
      'id': '2',
      'skill': 'JAVASCRIPT',
      'progress': '60%'
    },
    {
      'id': '3',
      'skill': 'Angular',
      'progress': '60%'
    },
    {
      'id': '4',
      'skill': 'SQL ,Postgresql',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'ASP .NET',
      'progress': '55%'
    },
    {
      'id': '6',
      'skill': 'BOOTSTRAP',
      'progress': '70%'
    }
  ];




  getSkills() {
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    return this.projects;
  }

}

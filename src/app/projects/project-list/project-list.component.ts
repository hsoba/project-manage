import { Component, Input } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  @Input()
  projects: Project[] = [];
  editingProject: Project | null = null;

  onEdit(event: any) {
    this.editingProject = event.editingProject;
    console.log(this.editingProject);
  }
}

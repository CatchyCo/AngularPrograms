import { Component, OnInit } from '@angular/core';
import { FormData } from '../../../assets/Data/FormData';

@Component({
  selector: 'app-template-drive-form-validation',
  templateUrl: './template-drive-form-validation.component.html',
  styleUrls: ['./template-drive-form-validation.component.css']
})
export class TemplateDriveFormValidationComponent implements OnInit {

  constructor() { }
  skills = ['COM', 'IT', 'Electronics', 'AI', 'DS'];
  coutries = ['INDIA', 'CHINA', 'S. KOREA', 'N. KOREA', 'NEPAL', 'BHUTAN'];
  formData = new FormData('sss', '', 0, '', '', []);
  ngOnInit(): void {
  }
  addSkill(skill) {
    if (!this.formData.skills.includes(skill)) {
      this.formData.skills.push(skill);
    } else {
      this.formData.skills.splice(this.formData.skills.indexOf(skill), 1)
    }
  }
}

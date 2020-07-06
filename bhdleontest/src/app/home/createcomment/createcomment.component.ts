import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-createcomment',
  templateUrl: './createcomment.component.html',
  styleUrls: ['./createcomment.component.scss'],
})
export class CreatecommentComponent implements OnInit {
  comment = {
    nombre: '',
    email: '',
    website: '',
    comment: '',
  };

  commentForm = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.maxLength(35)]],
    email: ['', [Validators.required]],
    website: ['', [Validators.required]],
    comment: ['', [Validators.required]],
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}
}

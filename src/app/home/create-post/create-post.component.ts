import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreatePostService } from './create-post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private createPostService: CreatePostService
  ) {
    this.form = this.formBuilder.group({
      content: ['', [Validators.required]],
      imageUrl: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.createPostService.createPost(
      this.form.controls['content'].value,
      this.form.controls['imageUrl'].value
    ).subscribe()
    alert('Post criado com sucesso!')
    location.reload()
  }
}

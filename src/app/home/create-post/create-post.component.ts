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
  imageLocation!: string;

  constructor(
    private formBuilder: FormBuilder,
    private createPostService: CreatePostService
  ) {
    this.form = this.formBuilder.group({
      content: ['', [Validators.required]],
      image: [''],
      imageUrl: [''],
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    if (this.form.controls['imageUrl'].value) {
      let formData = new FormData();
      formData.append('file', this.form.controls['imageUrl'].value);
      this.createPostService.uploadImage(formData).subscribe((res) => {
        let body = {
          content: this.form.controls['content'].value,
          imageUrl: res,
        };
        this.createPostService.createPost(body).subscribe({
          complete: () => {
            alert('Post criado com sucesso!');
            location.reload();
          },
          error: () => alert('Ocorreu um erro ao criar o post!'),
        });
      });
    }
  }

  get f() {
    return this.form.controls;
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        imageUrl: file,
      });
    }
  }
}

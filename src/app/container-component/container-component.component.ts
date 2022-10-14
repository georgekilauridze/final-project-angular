import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../Validators/forbidden-name.validators';


@Component({
  selector: 'app-container-component',
  templateUrl: './container-component.component.html',
  styleUrls: ['./container-component.component.scss']
})

export class ContainerComponentComponent implements OnInit {
  useForm!: FormGroup;


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.useForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(6), forbiddenNameValidator(/bob/i)]],
    lastName: ['', [Validators.required]],
    nationality: ['', [Validators.required]],
    citizen: ['', [Validators.required]],
    passportNumber: ['', [Validators.required, Validators.maxLength(8)]],
    age: ['', Validators.min(21)],
    addresses: this.fb.group({
      city: ['', Validators.maxLength(20)],
      country:[''],
      zip: ['']
    }),
    aliases: this.fb.array ([
      this.fb.control('')
    ])
  })
}
  get aliases(){
      return this.useForm.get('aliases') as FormArray;
    };

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  removeAlias(index: number ){
    this.aliases.removeAt(index)
  }

  onSubmit(){
    console.log( this.useForm.status);
    
  }

}

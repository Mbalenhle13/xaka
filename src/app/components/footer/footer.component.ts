import {Component} from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(50)],
      updateOn: 'blur',
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur'
    }),
    message: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(300)],
      updateOn: 'blur'
    })
  });

  public sendEmail() {
    let templateParams: any = {
      from_mail: this.contactForm.controls['email'].value,
      from_name: this.contactForm.controls['name'].value,
      message: this.contactForm.controls['message'].value
    }
    emailjs.send('service_jyjgvlr', 'template_alsvk0k', templateParams, 'WU-amvWNJFrgfKIka')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.error(error.text);
      });
  }


}

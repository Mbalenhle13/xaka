import {Component, HostListener} from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  public isCtrl = false;

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(50)],
      updateOn: 'blur',
    }),
    phone: new FormControl('', {
      validators: [Validators.required,Validators.minLength(10), Validators.maxLength(10)],
      updateOn: 'blur'
    }),
    message: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(300)],
      updateOn: 'blur'
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur'
    }),
    subject: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur'
    })
  });

  @HostListener('paste', ['$event']) blockPaste(event: ClipboardEvent) {
    if(this.contactForm.controls['phone'].value && !this.#isNumber(event.clipboardData!.getData('text')))
    {
      return false
    }
    else {
      return true
    }
  }

  sendEmail() {
    let templateParams: any = {
      from_mail: this.contactForm.controls['email'].value,
      from_name: this.contactForm.controls['name'].value,
      message: this.contactForm.controls['message'].value,
      phone: this.contactForm.controls['phone'].value,
      subject: this.contactForm.controls['subject'].value
    }
    emailjs.send('service_jyjgvlr', 'template_alsvk0k', templateParams, 'WU-amvWNJFrgfKIka')
      .then((result: EmailJSResponseStatus) => {}, (error) => {
        console.error(error.text);
      });
  }


  numberOnly(event: any): boolean {
    const regex = new RegExp(/^\+27[0-9]{9}$/);
    const charCode = (event.which) ? event.which : event.keyCode;

    if (!regex){
      console.log('Regex result: ', regex);
      return false;
    }

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  #isNumber(value: string | number): boolean {
    return value != null && value !== '' && !isNaN(Number(value.toString()));
  }


}

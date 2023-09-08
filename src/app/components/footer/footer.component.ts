import {Component, HostListener, OnInit} from '@angular/core';
import emailjs from 'emailjs-com';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  contactForm!: FormGroup;
  showSuccessToast: boolean = false;
  showFailureToast: boolean = false;
  ngOnInit() {
     this.contactForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(50)],
        updateOn: 'blur',
      }),
      phone: new FormControl('', {
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern(/^[0-9]*$/)],
        updateOn: 'blur'
      }),
      message: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(300)],
        updateOn: 'blur'
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
        updateOn: 'blur'
      }),
      subject: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur'
      })
    });
  }

  @HostListener('paste', ['$event']) blockPaste(event: ClipboardEvent) {
    return !(this.contactForm.controls['phone'].value && !this.#isNumber(event.clipboardData!.getData('text')));
  }

  sendEmail() {
    let templateParams: any = {
      from_mail: this.contactForm.controls['email'].value,
      from_name: this.contactForm.controls['name'].value,
      message: this.contactForm.controls['message'].value,
      phone: this.contactForm.controls['phone'].value,
      subject: this.contactForm.controls['subject'].value
    }
    if(this.contactForm.controls['email'].valid && this.contactForm.controls['name'].valid &&
      this.contactForm.controls['message'].valid && this.contactForm.controls['phone'].valid &&
      this.contactForm.controls['subject'].valid) {
      emailjs.send('service_jyjgvlr', 'template_alsvk0k', templateParams, 'WU-amvWNJFrgfKIka')
        .then(() => {
        this.showFailureToast = false;
        this.showSuccessToast = true;
      }, () => {
        this.showFailureToast = true;
        this.showSuccessToast = false;
      });
    } else {
      this.showFailureToast = true;
      this.showSuccessToast = false;
    }
    return;
  }


  numberOnly(event: any): boolean {
    const regex = new RegExp(/^\+27[0-9]{9}$/);
    const charCode = (event.which) ? event.which : event.keyCode;

    if (!regex){
      return false;
    }

    return !(charCode > 31 && (charCode < 48 || charCode > 57));

  }

  #isNumber(value: string | number): boolean {
    return value != null && value !== '' && !isNaN(Number(value.toString()));
  }

  hideAlerts() {
    this.showFailureToast = false;
    this.showSuccessToast = false;
  }

}

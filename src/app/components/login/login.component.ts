import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


//'@' signifie decorateur
//qui décore la classe component
 // @ mis avant une classe
@Component({                     
  selector: 'app-login',    //nom de l'élément
  standalone: false,            //Composant accessible via un module seulement
  templateUrl: './login.component.html',          
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{
    // point exclamation pour pouvoir initialiser la variable ultérieurement
  loginForm! : FormGroup;
  router: any;
  //j'utilise l'injection automatique de angular pour recuperer
  //un objet form builder qui va construire le formulaire

  //private avant formBuilder pour pouvoir acceder a la variable 
  // en dehors du constructeur

  constructor(private formBuilder : FormBuilder) {

  }
  
  
  
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
//
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],

    });
  
 }

 onSubmit() {
  if(this.loginForm.valid){
  console.log(this.loginForm.value);
 }

 if (this.loginForm.value.username == 'admin@test.com' && this.loginForm.value.password == 'admin')
    

 {
  sessionStorage.setItem('isLoggedIn', 'true'); 
  this.router.navigateByUrl('');
 }

}


}
import { Component, h } from '@stencil/core';

@Component({
    tag:'home-h',
    styleUrl:'home-h.css',
    shadow:true,
})
export class Home{
    render(){
        return(
            <div >
                <body>
                <div class="row">
 
 <a href="/">Home</a>
 <a href="about.html">About</a>
 <a href="/reg" >Register</a>
 <a href="/EmpForgottenPass">Contact</a>
 <a href="">suggestion</a>
 
<a href="/login">login</a>
 </div>
  <h1 class="home">Welcome To Amiti Technologies</h1>
  </body>
            </div>
        );
    }
}
import { Component,h, State } from "@stencil/core";
import ErrorMsg from "../InterFace/ErrorMsg";
import ApplicanteData from "../InterFace/ErrorMsg";
@Component({
tag:'register-reg',
styleUrl:'register-reg.scss',
shadow:true
})
export class Register{
  @State() applicanteData:ApplicanteData;
@State() name:string;
@State() mobileNum:string;
@State() email:string;
@State() dob:string;
@State() gender:string;
@State() qualification:string="";
@State() selectValue:string;
@State() password:string;
@State() confpassword:string;
@State() address:string;
@State() male:string;
@State() female:string;
@State() frontEnd:string;
@State() javaDeveloper:string;
@State() executiveAccountan:string;
@State() front:boolean;
@State() executive:boolean;
@State() java:boolean;
@State() ErrorMsg:ErrorMsg;
@State() file:any;

@State() m:string;
@State() mL:string;
@State() e:string;
@State() eL:string;
@State() p:string;
@State() pL:string;
@State() cp:string;
@State() cpL:string;

handlefile(e:any){
  this.file=e.target.value;
  console.log(this.file)
  console.log(document.querySelector('.file'));
}


async OnSubmit(e:any){
  e.preventDefault()
  console.log(this.qualification);
   if(this.male=="male"){
    
    this.gender=this.male;
   }
   else if(this.male=="female"){
    this.gender=this.female;
   }
   else{
    this.gender="";
   }
   
  const data={
    name:this.name,
    mobile_Number:this.mobileNum,
    email:this.email,
    gander:this.gender,
    dob:this.dob,
    gender:this.gender,
    qualification:this.qualification,
    country:this.selectValue,
    password:this.password,
    confpassword:this.confpassword,
    address:this.address,
   
  };
  
  if(this.name==undefined||this.mobileNum==undefined||this.email==undefined||this.gender==undefined||
    this.dob==undefined||this.qualification==undefined||this.selectValue=="select"||
    this.password==undefined||this.confpassword==undefined){
      this.handleMobileNum
      this.handleEmail
      this.handleConfPass
      this.handlePass
    alert(" madatory fill are required to filled");

  }
  else{
  try{
    let result=await fetch('http://localhost:1111/Registeration/get/'+this.email)
   let r=await result.json();
   this.applicanteData=r;
   this.ErrorMsg=r; 
    if(this.ErrorMsg.statusText!=null){
      const response=await fetch("http://localhost:1111/Registeration/addApplicate",{
        method: "POST",
        body:JSON.stringify(data),
        headers:{
          "Content-Type":"application/json"
        }
      }
        );
       
        if(response.status==202){
          alert("Name length should not exceed 15 characters and Address length should not exceed to 20 characters")
       }
       else{
        alert("sucessfully Registered")
        window.location.href="/"
       }
    }
    else{
      alert("Already Registered")
      window.location.href="/login"
    }
    

}
    catch(err){
      console.log(err);
    }

}
}
handleName(e:any){
  e.preventDefault();
  this.name=e.target.value;
}
handleMobileNum(e:any){

  this.mobileNum=e.target.value;
  let regexp:any = /^[6-9]\d{9}$/

   if(regexp.test(this.mobileNum)){
 this.mL='valid'
  this.m='green';
  }
  else{
    this.mL='Invalid'
    this.m='red';
  }



  
}
handleEmail(e:any){
  this.email=e.target.value;
  let r = /^([a-zA-Z0-9]+)@([a-z A-z]+)\.([a-z A-Z]{2,5})$/
 if(r.test(this.email)){
  this.e="green";
  this.eL="valid"
 }
 else{
  this.e="red";
  this.eL="Invalid"
 }
}
handleDob(e:any){
  this.dob=e.target.value;
}
handleGender(e:any){
  this.gender=e.target.value;
}

handleSelectValue(e:any){
  this.selectValue=e.target.value;
}
handlePass(e:any){
  this.password=e.target.value;
  let regExp:any = /^[A-Z](?=.*[!\@\#\$\%\^\&])(?=.*[a-z])(?=.*[0-9]).{7,}$/;
  if(regExp.test(this.password)){
    this.p="green"
    this.pL="valid"
  }
  else{
    this.p="red"
    this.pL="First character should be captial.Password should contain min 8 character.special character,numeric digit should be contain"
  }
}
handleConfPass(e:any){
  this.confpassword=e.target.value;
  if(this.confpassword!=this.password){
    this.cp="red";
    this.cpL="Password and confirm should be same"
  }
  else{
    this.cp="green";
    this.cpL="valid"
  }
}
handleAddress(e:any){
  this.address=e.target.value;
}
handleMale(){
  this.female="off";
  this.male="male";
}
handleFeMale(){
  this.male="off";
  this.female="female";
}

handlefrontend(){
   this.front=!this.front
   if(this.front==true){
    this.frontEnd="frontend devloper";
    this.qualification=this.frontEnd;
   }else{
    this.frontEnd="";
    this.qualification=this.frontEnd;
   }
  console.log(this.frontEnd)
   

}

handleJavaDeveloper(){
  this.java=!this.java;
 
  if(this.java==true){
    this.javaDeveloper="java devloper";
    this.qualification+=" "+this.javaDeveloper;
  }
  else{
    this.javaDeveloper="";
    this.qualification+=" "+this.javaDeveloper;
  }
console.log(this.javaDeveloper)

}

handleExecutiveAccountant(){
  this.executive=!this.executive;
  if(this.executive==true){
    this.executiveAccountan="Executive Accountant"
    this.qualification+=" "+this.executiveAccountan
  }
  else{
    this.executiveAccountan="";
    this.qualification+=" "+this.executiveAccountan
  }

console.log(this.executiveAccountan);
}
render(){
  
    return(
        <div>                   
<fieldset>
<h1>Register</h1>
<form onSubmit={(e)=>this.OnSubmit(e)}>
<table class="center">
<tr>
<td>
Name:
</td>
<td>
<input type="text" value={this.name}  onInput={(e)=>this.handleName(e)} placeholder="Name" id="name"/><label class="star">*</label>

</td>
</tr>
<tr>
<td>
Mobile Number:
</td>
<td>
<input type="text"   value={this.mobileNum} onInput={(e)=>this.handleMobileNum(e)} placeholder="Mobile Number" id="MobileNum"/><label class="star">*</label><br/>
<label style={{color:this.m}} >{this.mL}</label>  
</td>
</tr>

<tr>
<td>
Email:
</td>
<td>
<input type="text" value={this.email} onInput={(e)=>this.handleEmail(e)} placeholder="email" id="email"/><br/>
<label style={{color:this.e}} >{this.eL}</label>
</td>
</tr>

<tr>
<td>
Date of Birth:
</td>
<td>
<input type="date" value={this.dob} onInput={(e)=>this.handleDob(e)} id="dob"/>  &emsp; &nbsp;&nbsp; &emsp;<label class="star">*</label>
</td>
</tr>
<tr>
<td>
Gender:
</td>
<td>
<input type="radio" value={this.male} name="gender" id="male" onInput={()=>this.handleMale()}/>male
<input type="radio" name="gender" value={this.female} id="female" onInput={()=>this.handleFeMale()}/>female  &emsp; &nbsp; &emsp;<label class="star">*</label>
</td>
</tr>


<tr>
<td>
Designation:
</td>
<td>
<input type="checkbox" class="qualification"  value={this.frontEnd} onInput={()=>this.handlefrontend()} id="frontend devloper" />frontend devloper
<input type="checkbox" class="qualification" id="java devloper" onInput={()=>this.handleJavaDeveloper()} value={this.javaDeveloper} />java devloper
<input type="checkbox" class="qualification" id="Executive Accountant" onInput={()=>this.handleExecutiveAccountant()} value={this.executiveAccountan} />Executive Accountant &nbsp; &emsp;<label class="star">*</label>
</td>
</tr>
<tr>
<td>
Country:
</td>
<td>
<select id="country" onInput={(e)=>this.handleSelectValue(e)}>
<option value="select" selected={this.selectValue==='select'}>select</option>
<option value="India" selected={this.selectValue==='India'}>India</option>
<option value="Us" selected={this.selectValue==='Us'}>Us</option>
<option value="Cannada" selected={this.selectValue==='Cannada'}>Cannada</option>
<option value="Uk" selected={this.selectValue==='Uk'}>Uk</option>
<option value="Austrila" selected={this.selectValue==='Austrila'}>Austrila</option>
<option value="Germany" selected={this.selectValue==='Germany'}>Germany</option>
<option value="fernch" selected={this.selectValue==='Fernch'}>Fernch</option>
</select> &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;<label class="star">*</label>
</td>
</tr>
<tr>
<td>
Create Password:
</td>
<td>
<input type="text" id="password" onInput={(e)=>this.handlePass(e)}/><label class="star">*</label><br/>
<label style={{color:this.p}}>{this.pL}</label>

</td>
</tr>

<tr>
<td>
Confirm Password:
</td>
<td>
<input type="text" id="confpassword" onInput={(e)=>this.handleConfPass(e)}/><label class="star">*</label><br/>
<label style={{color:this.cp}} >{this.cpL}</label>

</td>
</tr>

<tr>
<td>
Address:</td>
<td>
<textarea name="add" onInput={(e)=>this.handleAddress(e)}></textarea>

</td>
</tr>

<tr>
<td colSpan={2}>

<input type="submit"  class="regButton" value="Register"/><br/>

<a href="welcome.html" >back</a>
&nbsp;
<small >if already registered</small><br/> &emsp; &emsp; &emsp;

<a href="loginForm.html"  target="_self">Log In</a>


</td></tr>

</table>
</form>
</fieldset> 
       </div>

  );
}
}
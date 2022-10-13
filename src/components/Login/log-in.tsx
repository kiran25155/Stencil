import { Component,h, State,Prop } from "@stencil/core";
import ApplicanteData from "../InterFace/ErrorMsg";

@Component({
    tag:'log-in',
    styleUrl:'log-in.scss',
    shadow:true,
})
export class LogIn{
    @Prop({reflect:true}) empId:string;
    @State() empPass:string;
    @State() userId:string;
    @State() userPass:string;
    @State() applicante:ApplicanteData;

    handleEmpid(e:any){
        this.empId=e.target.value;
    }
    
    handleEmpPass(e:any){
        this.empPass=e.target.value;
    }
    
    handleuserId(e:any){
        this.userId=e.target.value;
    }

    handleUserPass(e:any){
        this.userPass=e.target.value;
    }
   
    async userLogin(e:any){
        e.preventDefault();
        localStorage.setItem('email',this.userId);
        let request=await fetch('http://localhost:1111/Registeration/get/'+this.userId)
        this.applicante=await request.json();
        if(this.userId==this.applicante.email&&this.userPass==this.applicante.password){
             alert("Sucessfully Login");
             window.location.href="/user";
        }
        else{
            alert("your details not match with your records");
        }
    }


    async loginEmp(e:any){
        e.preventDefault();
        console.log(this.empId=="Emp1234");
        if(this.empId=="Emp1234"&&this.empPass=="Kiran@1234"){
            alert('Sucessfully login');
            localStorage.setItem("EmpId",this.empId);
            window.location.href="/emp";
        }
        else{
            alert('please check your Id and password once');
        }
    }

    home(e:any){
        e.preventDefault();
            window.location.href="/";    
    }
    render(){
        return(
            <div>
                
<div id="log">
<form>
 
  <div class="column">
      
<fieldset class="f1" style={{width:"100px"}}>
        <h3>Employee Login</h3>
<table class="t1">
<tr>
<td>Emp Id:</td>
<td><input type="text"  placeholder="Em****"  value={this.empId} onInput={(e)=>this.handleEmpid(e)}/><br/>
<label v-if="empid"  ></label></td></tr>
<tr>
<td>Password:<br/>
 </td>
<td><input type="password"  value={this.empPass} onInput={(e)=>this.handleEmpPass(e)}/><br/>
<label   ></label></td></tr>
<tr><td><button onClick={(e)=>this.home(e)}>Back</button></td>
<td><button  onClick={(e)=>this.loginEmp(e)}>login</button></td></tr>
<tr>
<td></td>
<td >forgotten Password</td>
</tr>
</table>
</fieldset>

    </div>
    
    <div class="column">
<fieldset>
    <h3>User Login</h3>
<table>
<tr>
<td>Email:</td>
<td><input type="text"  value={this.userId} onInput={(e)=>this.handleuserId(e)} /><br/>
<label></label></td></tr>
<tr>
<td>Password:<br/>
  </td>

<td><input type="password" value={this.userPass} onInput={(e)=>this.handleUserPass(e)} /><br/>
<label   ></label></td></tr>
<tr><td><button onClick={(e)=>this.home(e)} >Back</button></td>
<td><button onClick={(e)=>this.userLogin(e)}>login</button></td></tr>
<tr>
<td> </td>
<td >forgotten Password</td>
</tr>
</table>
</fieldset>
</div>
</form>
</div>
            </div>
        )
    }
}
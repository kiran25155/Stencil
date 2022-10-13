import { Component,h, State,Listen } from "@stencil/core";
import ApplicanteData from "../InterFace/ErrorMsg";
import ErrorMsg from "../InterFace/ErrorMsg";
import AppStatus from "../InterFace/ErrorMsg";
import PostDetails from "../InterFace/ErrorMsg";

@Component({
    tag:'user-u',
    styleUrl:'user-u.scss',
    shadow:true
})
export class User{
    @State() userData:ApplicanteData;
    @State() errMsg:ErrorMsg;
    @State() notification:boolean;
    @State() trackMyApp:boolean;
    @State() c:number;
    @State() appliStatus:AppStatus;
    @State() errorMsg:ErrorMsg;
    @State() ApplicateStatus:[]
    @State() getpostdetails:PostDetails;
    @State() getPosts:any[];
    @State() countNotification:number=0;
    callRecord(){
        this.notification=false;
        this.trackMyApp=true;
    }
    callNotifiaction(){
        this.notification=true;
        this.trackMyApp=false;
    }
   
    logOut(){
        localStorage.setItem('email',"error");
        window.location.href="/login"
    }


async counter(){
    this.countNotification=0;
    let totalCount=0;
    let email:string=localStorage.getItem('email');
    let response=await fetch("http://localhost:1111/Post/getAllPosts");
    console.log(response)
    this.getPosts=await response.json(); 

    let request:any=await fetch('http://localhost:1111/AppliacteStatus/get/'+email);
    let req:any=await request.json()
    this.ApplicateStatus=req;
    this.errorMsg=req;
 
    for(let jobs of this.getPosts){
        this.getpostdetails=jobs;
        ++totalCount;
         if(this.errorMsg.statusText==null){
          
            for (let appStatus of this.ApplicateStatus){
                this.appliStatus=appStatus;
                console.log(this.appliStatus.title+" "+this.getpostdetails.title)
                if(this.appliStatus.title==this.getpostdetails.title){
                  
                    ++this.countNotification
                  
                }
            }
        }
        
    
    }
    if(this.errorMsg.statusText==null){
        console.log(totalCount+" " +this.countNotification)
        this.countNotification=totalCount-this.countNotification;
        this.c=this.countNotification
        
           
    }
    else{ 
        this.c=totalCount
    }    
   
}

   async  componentWillLoad(){
        this.c=0;
        let email:string=localStorage.getItem('email');
        console.log("hi"+email+"hi")
       let result=await fetch('http://localhost:1111/Registeration/get/'+email)
       let r=await result.json();
       this.userData=r;
       this.errMsg=r;
       console.log(this.userData.email)
      
         if(this.errMsg.statusText!=null){
            window.location.href="/p"
        }
        else{ 
            this.counter();
        }
       
     
     }

 
@Listen('count',{target:'body'})
listen(event:CustomEvent<number>){
    this.c=event.detail;
}
    render(){
        return(
          <div>
    <body>               
<div class="row">
    <a onClick={()=>this.callRecord()}>Track My Application</a>
   
   <a onClick={()=>this.callNotifiaction()}>Notifications
    
   {/* <button class="button"  >
    <span class="material-symbols-outlined">
circle_notifications
</span>
<span class="count" v-if="alert"></span >
 
</button> */}
{this.c==0?null:
<span class="count" >{this.c}</span >
}

</a>
    <a onClick={this.logOut}>Log Out</a>
</div>

{this.notification?<notification-n><h1>Notifications</h1></notification-n>:null}
{this.trackMyApp?<trackmy-application><h1>Track My Application</h1></trackmy-application>:null}


</body> 

</div>
     
        )
    }
}
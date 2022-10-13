import { Component,h, State,Event,EventEmitter, Method } from "@stencil/core";
import PostDetails from "../../InterFace/ErrorMsg";
import ApplicanteData from "../../InterFace/ErrorMsg";
import AppStatus from "../../InterFace/ErrorMsg";
import ErrorMsg from "../../InterFace/ErrorMsg";
@Component({
    tag:'notification-n',
    styleUrl:'notification-n.scss',
    shadow:true
})
export class Notification{
    @State() getpostdetails:PostDetails;
    @State() getPosts:any[];
    @State() ApplicateStatus:any[];
    @State() applicante:ApplicanteData;
    @State() appliStatus:AppStatus;
    @State() errorMsg:ErrorMsg;
    @State() countNotification:number
    @State() backgroundColor:boolean
    @State() tableData:boolean 
    @Event({bubbles:true,composed:true}) count:EventEmitter<number>; 
    

    
async Counter(){
    this.countNotification=0;
    let response=await fetch("http://localhost:1111/Post/getAllPosts");
   console.log(response)
   this.getPosts=await response.json();

   let email=localStorage.getItem('email');
   let result:any=await fetch('http://localhost:1111/AppliacteStatus/get/'+email);
   let r=await result.json()
   this.ApplicateStatus=r;
   this.errorMsg=r;
    console.log(this.ApplicateStatus)
    let c1:number=0;
   for(let jobs of this.getPosts){
       this.getpostdetails=jobs;
        c1++;
      
        if(this.errorMsg.statusText==null){
           for (let appStatus of this.ApplicateStatus){
              
               this.appliStatus=appStatus;
               console.log(this.getpostdetails.title+" "+this.appliStatus.title)
               if(this.appliStatus.title==this.getpostdetails.title){
                console.log(this.getpostdetails.title+" "+this.appliStatus.title)
                   ++this.countNotification
              
               }
           
           }
          

       }
     
   }
   if(this.errorMsg.statusText==null){
       this.countNotification=c1-this.countNotification
       
   }
   else{
       this.countNotification=c1
   }
   
   this.tableData=true;
   console.log(this.countNotification)
   this.count.emit(this.countNotification);
}
    @Method()
async ApplyPost(sNo:number){
    let msg:string="";
    let request=await fetch('http://localhost:1111/Post/get/'+sNo)
     this.getpostdetails=await request.json();

     let email=localStorage.getItem('email');
     let req=await fetch('http://localhost:1111/Registeration/get/'+email);
     this.applicante=await req.json();
     console.log(this.applicante);

     let req2=await fetch('http://localhost:1111/AppliacteStatus/get/'+email);
     let result:any=await req2.json()
     this.ApplicateStatus=result;
     this.errorMsg=result;

     console.log(this.ApplicateStatus)
     let appStatus:any
     if(this.errorMsg.statusText!=null){
        const data={
            email:this.applicante.email,
            name:this.applicante.name,
            mobileNumber:this.applicante.mobile_Number,
            degree:this.applicante.qualification,
            gender:this.applicante.gender,
            title:this.getpostdetails.title,
            status:" "
        }
        let response=await fetch('http://localhost:1111/AppliacteStatus/newAppliacteStatus',{
         method:'POST',
         body:JSON.stringify(data),
         headers:{
            "Content-Type":"application/json"
         }
    
        })
        this.Counter()
      
        alert("sucessfully Applied");
        this.componentWillLoad();  
    
        this.render()
        
     }
     else{
        for(appStatus of this.ApplicateStatus){
            this.appliStatus=appStatus;
            if(this.appliStatus.title==this.getpostdetails.title){
                msg="you are already applied";
                   break;
            }
            
         }
     }
     
     if(msg=="you are already applied"){
        alert(this.applicante.qualification)
        alert(msg);

     }
     else if(this.errorMsg.statusText==null){
          const data={
        email:this.applicante.email,
        name:this.applicante.name,
        mobileNumber:this.applicante.mobile_Number,
        degree:this.applicante.qualification,
        gender:this.applicante.gender,
        title:this.getpostdetails.title,
        status:" "
    }
    let response=await fetch('http://localhost:1111/AppliacteStatus/newAppliacteStatus',{
     method:'POST',
     body:JSON.stringify(data),
     headers:{
        "Content-Type":"application/json"
     }

    })
    if(this.errorMsg.statusText==null){
        this.backgroundColor=false
    }
 
   
    alert("sucessfully Applied");
    this.Counter()
    this.componentWillLoad();  
    
    this.render()
    
     }
   
}

@Method()
async hello(){
    alert("hello")
}

     @Method()
    async componentWillLoad()
{
  console.log("hel")
    this.tableData=false;
    this.Counter()
       
}   

    render(){
        return(
            <div>
                <slot></slot>
                 {this.tableData?<table  id="tNotification" >
    <thead >
     <th >SNo</th>
     <th >Job Title</th>
     <th >Description</th>
     <th >Action</th>
    </thead>
    <tbody >
       
       {this.getPosts.map((JobPost)=>
       <tr class="post" key="{JobPost.sNo}"
       style={
           (()=>{
            // this.backgroundColor=false
            if(this.errorMsg.statusText==null){
                for(let applicante of this.ApplicateStatus){
                    this.appliStatus=applicante;
                        if(this.appliStatus.title==JobPost.title){
                            this.backgroundColor=false
                           break;
                        }
                        else{
                            this.backgroundColor=true;
                          
                        }
                       
                  }
            }
            else{
                this.backgroundColor=true;
            }
       
       return this.backgroundColor})()?{background:"yellow"}:null
      } >
         <td>{JobPost.sNo}</td> 
                 <td >{JobPost.title}</td>
                 <td >{JobPost.description}</td> 
                <td ><a style={{color:'blue'}} onClick={()=>this.ApplyPost(JobPost.sNo)}>Apply</a></td>
        </tr>)}
        </tbody>
        </table>:null}
            </div>
        )
    }
}
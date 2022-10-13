import { Component,h, Host,Listen, State } from "@stencil/core";
import AppStatus from "../InterFace/ErrorMsg";
import ErrorMsg from "../InterFace/ErrorMsg";
@Component({
    tag:'emp-e',
    styleUrl:'emp-e.scss',
    shadow:true,
})
export class Emp{
    @State() updateAppStatus:boolean;
    @State() getpost:boolean;
    @State() visible:boolean;
    @State() count:number;
    @State() error:ErrorMsg
    @State() getAllAppStatus:any[]
    @State() getAppStatus:AppStatus;
    createPost(){
      
        this.updateAppStatus=false;
        this.getpost=false;
      this.visible=true;
      
     }
     updateApplicante(){
      
        this.updateAppStatus=true;
        this.getpost=false;
        this.visible=false;
     }
     getPosts(){
        this.updateAppStatus=false;
        this.getpost=true;
        this.visible=false; 
        
     }
     logOut(){
      localStorage.setItem('EmpId',"");
      window.location.href="/login"
  }
    async componentWillLoad(){
      
      let id=localStorage.getItem("EmpId");
      console.log(id)
     if(id==""){
      window.location.href="/p"
     }
     else{
      this.count=0;
      let request=await fetch('http://localhost:1111/AppliacteStatus/getAllAppStatus')
      let r=await request.json();
        this.getAllAppStatus=r;
        this.error=r;
       if(this.error.statusText==null){
     
        for(let applicante of this.getAllAppStatus){
          this.getAppStatus=applicante;
          console.log(this.getAppStatus.status)     
             if(this.getAppStatus.status==null||this.getAppStatus.status==" "){
          this.count++;
          console.log(this.count)
         }
         
       }
      }
       
     }
 
     }

      
@Listen('Eventcount',{target:'body'})
listen(event:CustomEvent<number>){
    this.count=event.detail;
}
    render(){
        return(
            <Host>
         
     
    
                  <div class="row1">
          <a class="create" onClick={()=>this.createPost()}>Send Post</a>
          <a onClick={()=>this.updateApplicante()}>Update Applicate Status
          {this.count==0?null:<span>{this.count}</span>}
          </a>
          <a class="get" onClick={()=>this.getPosts()}>Update Post</a>
      <a onClick={this.logOut}>Log Out</a>
      </div> 
      {this.visible?<create-post >
        <h1>Create Post</h1>
      </create-post>:null}
      {this.getpost?<get-posts>
        <h1 slot="updatePostForm">Update Post</h1>
        <h1 slot="updatePost">List of Posts</h1>
      </get-posts>:null}
      {this.updateAppStatus?<update-appstatus >
        <h1>Update Applicante Status
          
        </h1>
      </update-appstatus >:null}
     
    
      </Host>
            
        );
    }
}


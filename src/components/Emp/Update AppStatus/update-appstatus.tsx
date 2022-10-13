import { Component,Element,Event,h,EventEmitter ,Method,  State } from "@stencil/core";
import AppStatus from "../../InterFace/ErrorMsg";

import ErrorMsg from "../../InterFace/ErrorMsg";
@Component({
    tag:'update-appstatus',
    styleUrl:'update-appstatus.scss',
    shadow:true
})
export class UpdateApplicate{
    @Element() el:HTMLElement;
    @State() getAllAppStatus:any[]
    @State() getAppStatus:AppStatus;
    @State() updateForm:boolean;
    @State() sNo:number;
    @State() error:ErrorMsg
    @State() ApplicateStatus:AppStatus;
    @State() TableData:boolean;
    // @Prop({mutable:true,reflect:true}) count:number;
    @State() count:number
    @Event({bubbles:true,composed:true}) Eventcount:EventEmitter<number>
    @State()  backGround:string;
    color:any;
     
    handleStatus(e:any){
        this.getAppStatus.status=e.target.value;
    }
    @Method()
    async EditStatus(sNo:number){
        
     let result=await fetch('http://localhost:1111/AppliacteStatus/getById/'+sNo)
    this.getAppStatus=await result.json();
    console.log( this.getAppStatus)
    console.log( this.getAppStatus.status)
    this.updateForm=true;
    this.sNo=sNo;
    }

 async UpdateStatus(e:any){
    e.preventDefault();
   
    const data={
        sNo:this.getAppStatus.sNo,
		email:this.getAppStatus.email,
		name :this.getAppStatus.name,
		mobileNumber :this.getAppStatus.mobileNumber,
		degree :this.getAppStatus.degree,
		gender :this.getAppStatus.gender,
		title :this.getAppStatus.title,
        status:this.getAppStatus.status
    }
    try{
        let result=await fetch('http://localhost:1111/AppliacteStatus/update/'+this.sNo,{
                  method:'PUT',
                    body:JSON.stringify(data),
                    headers:{
                        'Content-type':'application/json',
                    }
                   
    })
    let request=await fetch('http://localhost:1111/AppliacteStatus/getAllAppStatus')
    let r=await request.json();
    this.getAllAppStatus=r;
    this.error=r;
    if(this.error.statusText!=null){
      alert("hi")
      alert(this.error.statusText)
    }
    else{

      alert("sucessfully updated")
      this.updateForm=false
    }
   this.componentWillLoad()
    }    
    catch(err){
        console.log(err)
    }
 }


    async componentWillLoad(){
      this.color='red';
      this.TableData=false
      this.count=0;
        this.updateForm=false;
        let request=await fetch('http://localhost:1111/AppliacteStatus/getAllAppStatus')
          
          let r=await request.json();
          this.getAllAppStatus=r;
          this.error=r;
          if(this.error.statusText==null){
            this.TableData=true
            for(let applicante of this.getAllAppStatus){
              this.getAppStatus=applicante;
              if(this.getAppStatus.status==null||this.getAppStatus.status==" "){
                this.count++;
             
              }
            }
            this.Eventcount.emit(this.count);
     
          }
          else{
            alert(this.error.statusText)
          }
         
       }
    render(){
        return(
            <div>
              {this.TableData?<slot></slot>:null}
                <form>
                    {this.updateForm?<fieldset  class="update" >
    <h3>Update Status</h3>
    <table class="update" >
      <tr>
        <td>Update Status</td>
        <td><input type='text' value={this.getAppStatus.status} onInput={(e)=>this.handleStatus(e)}/></td>
      </tr>
      <tr>
        <td></td>
        <td><button onClick={(e)=>this.UpdateStatus(e)}>Update</button></td>
      </tr>
    </table>
  </fieldset>:null}

  </form>

{this.TableData?<table id="tupdate" >
    <thead >
              <tr  >
                <th >Applicant Name</th>
                <th>Email</th>
                <th >Mobile Number</th>
                <th>Degree</th>
                <th >Gender</th>
                <th >Job Role</th>
                <th >Status</th>
                <th >Action</th>
              </tr>
            </thead>
            <tbody >
              {
              
              this.getAllAppStatus.map((ApplicateStatus)=><tr style={(ApplicateStatus.status==null||ApplicateStatus.status==" ")?{background:'yellow'}:null} key="{ApplicationStatus.sNo}"  >
               
              <td>{ApplicateStatus.name}</td>
              <td  >{ApplicateStatus.email}</td>
              <td >{ApplicateStatus.mobileNumber}</td>
              <td >{ApplicateStatus.degree}</td> 
              <td >{ApplicateStatus.gender}</td>
              
              <td >{ApplicateStatus.title}</td>
             
              {<td style={ApplicateStatus.status!='Reject'?ApplicateStatus.status!='offer letter'?ApplicateStatus.status!='onhold'?ApplicateStatus.status!='Accept'?{color:'black'}:{color:'blue'}:{color:'orange'}:{color:'green'}:{color:'red'} }>{ApplicateStatus.status}</td>}
              <td ><button onClick={()=>this.EditStatus(ApplicateStatus.sNo)} >Update</button></td>
              </tr>)
             
              }

            </tbody>
    <tbody> 

    </tbody>
</table>:null}
            </div>
        )
    }
}
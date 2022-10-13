import { Component, h,Host,State } from "@stencil/core";
import ErrorMsg from "../../InterFace/ErrorMsg";
@Component({
tag:'trackmy-application',
styleUrl:'trackmy-application.scss',
shadow:true
})
export class TrackApp{
    @State() trackApp:boolean
    @State() errMg:ErrorMsg
    @State() ApplicateRecords:any[]
    async loadData(){
      let email=localStorage.getItem('email');
        let result=await fetch('http://localhost:1111/AppliacteStatus/get/'+email)
        let req=await result.json();
        this.errMg=req;
        this.ApplicateRecords=req;
        this.trackApp=true;
        if(this.errMg.statusText!=null){
          this.trackApp=false;
          alert(this.errMg.statusText);
        }
    }
    async componentWillLoad(){
        this.trackApp=false;
       this.loadData();

       

    }

  async  WithDraw(sNo:any){
    let r=await fetch('http://localhost:1111/AppliacteStatus/delete/'+sNo,{
      method:'DELETE'
    });
    alert("Deleted Successfully")
    let email=localStorage.getItem('email');
    let result=await fetch('http://localhost:1111/AppliacteStatus/get/'+email)
    let req=await result.json();
   this.loadData()
  }
    render(){
      
        return(
            <Host>
                <slot></slot>
        {this.trackApp?<table id="AppStatus" >
            <thead >
              <tr >
                <th >Applicant Name</th>
                <th >Email</th>
                <th >Mobile Number</th>
                <th >Degree</th>
                <th >Gender</th>
                <th >Job Role</th>
                <th >Status</th>
                <th > Action</th>
              </tr>
            </thead>
            <tbody>
              {this.ApplicateRecords.map((ApplicateStatus)=><tr class="AppStatus" key="ApplicateStatus.sNo" >
              <td >{ApplicateStatus.name}</td>
              <td >{ApplicateStatus.email}</td>
              <td >{ApplicateStatus.mobileNumber}</td>
              <td >{ApplicateStatus.degree}</td>
              <td >{ApplicateStatus.gender}</td>
              <td >{ApplicateStatus.title}</td>
              <td  >{ApplicateStatus.status}</td>
              <td ><button onClick={()=>this.WithDraw(ApplicateStatus.sNo)}>Withdraw</button></td>
              </tr>)}

            </tbody>
        </table>:null}
            </Host>
        )
    }

}
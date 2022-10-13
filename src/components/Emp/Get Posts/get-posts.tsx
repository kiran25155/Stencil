import { Component,h,State  } from "@stencil/core";
import PostDetails from "../../InterFace/ErrorMsg";

@Component({
 tag:'get-posts',
 styleUrl:'get-posts.scss',
 shadow:true 
})
export class GetPosts{
    @State() getPosts:any[]
    @State() getpostdetails:PostDetails;
    @State() sNo:number;
    @State() originalTitle:string;
    @State() updateForm:boolean;
    hanldeTitleInput(e:any){
        this.getpostdetails.title=e.target.value;
    }

    hanldeDescriptionInput(e:any){
        this.getpostdetails.description=e.target.value;
    }
   
    async UpdatePost(e:any){
        e.preventDefault();
        const data:any={
            title:this.getpostdetails.title,
            description:this.getpostdetails.description
        }
        if(this.getpostdetails.title==null||this.getpostdetails.description==null){
            alert("mandatory to fill the fileds")
        }
        else if(this.originalTitle!=this.getpostdetails.title){
           alert("sorry you cann't change title here")
        }
        else{
            try{
                let update=await fetch('http://localhost:1111/Post/updatePost/'+this.sNo,{
                    method:'PUT',
                    body:JSON.stringify(data),
                    headers:{
                        'Content-type':'application/json',
                    }
                })
                alert("Updated Successfully");
                this.getAllPosts();
                this.updateForm=false;
            }
            catch(err){
                alert(err);
            }
       
    }
    }
async deletePost(sNo:any){
    try{
        this.updateForm=false;
        let res=await fetch('http://localhost:1111/Post/delete/'+sNo ,{
            method:'DELETE'
        })
        alert("Deleted Succefully")
    }
    catch(err){
        alert(err);
    }    
}

async EditPost(sNo:any){
   
    try{
        this.sNo=sNo;
        let request=await fetch('http://localhost:1111/Post/get/'+sNo)
          this.getpostdetails=await request.json();
          this.originalTitle=this.getpostdetails.title;
          this.updateForm=true;
    }
    catch(err){
        alert(err);
    }
} 
async getAllPosts(){
    let response=await fetch("http://localhost:1111/Post/getAllPosts");
    console.log(response)
    this.getPosts=await response.json();
  

   
}
async componentWillLoad()
{
    this.updateForm=false;
    let response=await fetch("http://localhost:1111/Post/getAllPosts");
    console.log(response)
    this.getPosts=await response.json();
    
}
    render(){
        return(
             <div>
        
{this.updateForm?
<fieldset class="postJob"  id="getposts"> 
        <h2 class="postTitile" >Update Post</h2>
        <form onSubmit={(e)=>this.UpdatePost(e)}> 
<table id="postJob">
    <tr >
        <td>
            <h4>Job Title:</h4>
        </td>
        <td >
           <input type="text" value={this.getpostdetails.title} onInput={(e)=>this.hanldeTitleInput(e)}/>
        </td>
    </tr>
    <tr>
       <td ><h4>Description:</h4></td> 
       <td>
        <textarea value={this.getpostdetails.description}  onInput={(e)=>this.hanldeDescriptionInput(e)}></textarea>
       </td>
    </tr>
    <tr>
        <td ></td>
        <td><input type="submit"   id="update" value="update"/></td>
    </tr>
</table>
 
</form>
</fieldset>:null}


                 <slot name="updatePost"></slot>
                 <table id="updatePost" style={{border:"1px solid black"}}>
            
            <thead style={{height:"50px",background:"green",color:'white'}}>
                <tr>
            <th style={{width:"80px"}}>SNo</th>
            <th >Job Title</th>
            <th style={{width:"400px"}}>Description</th>
            <th >Action</th>
        </tr>
            </thead>
            <tbody >
                {this.getPosts.map((JobPost)=>
                    
              
                <tr class="post" key="{JobPost.sNo}" style={{border:"1px solid black"}} >
                 <td >{JobPost.sNo}</td> 
                 <td >{JobPost.title}</td>
                 <td >{JobPost.description}</td> 
                <td >
                    
                    <button onClick={()=>this.EditPost(JobPost.sNo)} style={{background:"khaki",}}>Update</button>&nbsp;
                <button onClick={()=>this.deletePost(JobPost.sNo)} style={{background:"red",color:"white"}}>Delete</button></td>
                </tr> 
                  )}
            
            </tbody>
            
        </table>
             </div>
        );
    }
}
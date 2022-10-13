import { Component,h, State } from "@stencil/core";
import PostDetails from "../../InterFace/ErrorMsg";

@Component({
    tag:'create-post',
    styleUrl:'create-post.scss',
    shadow:true,
})
export class Create{
    @State() title:string;
    @State() description:string;
    @State() getPost:PostDetails;  
    @State() getPosts:string[];
    @State() c:string;
hanldeTitleInput(e:any){
this.title=e.target.value;
this.c="green";
}

hanldeDescriptionInput(e:any){
   this.c="red";
    this.description=e.target.value;
}

async Submit(e:any){
    e.preventDefault();
    let msg:string="";
   
    const data:any={
        title:this.title,
        description:this.description
    }
    if(this.title==undefined||this.description==undefined){
        alert("mandatory to fill all field");
    }
    else{
    try{
        const request=await fetch("http://localhost:1111/Post/getAllPosts")
        this.getPosts=await request.json();
        let post:any;
       for(post of this.getPosts){
        this.getPost=post
        if(this.getPost.title==this.title){
           msg="This post Aleady created"
            break;
        }
       }

       if(msg=="This post Aleady created"){
        alert(msg);
       }
       else{
        const response=await fetch("http://localhost:1111/Post/createPost",{
            method: "POST",
            body:JSON.stringify(data),
            headers:{
              "Content-Type":"application/json"
            }
          })
           alert("Sucessfully created")
       }
   
}
    catch(err){
        console.log(err)
    };
    }
}
    render(){
        return(
             <div>
                <slot></slot>
             <fieldset class="postJob"  id="posts"> 
        <h2 class="postTitile" >Create Post</h2>
        <form onSubmit={(e)=>this.Submit(e)}> 
<table id="postJob">
    <tr >
        <td>
            <h4>Job Title:</h4>
        </td>
        <td >
           <input type="text" value={this.title} onInput={(e)=>this.hanldeTitleInput(e)}/>
        </td>
    </tr>
    <tr>
       <td ><h4>Description:</h4></td> 
       <td>
        <textarea value={this.description} style={{color:this.c}} onInput={(e)=>this.hanldeDescriptionInput(e)}></textarea>
       </td>
    </tr>
    <tr>
        <td ></td>
        <td><input type="submit"   id="post" value="post"/></td>
    </tr>
</table>
 
</form>
</fieldset>
             </div>
           );
           

        
    }
}
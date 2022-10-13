import { Component,h, State } from "@stencil/core";
@Component({
    tag:'file-f',
   
})
export class File{
    @State() Uname:string
    @State() mobile:string
    @State() data:any
    handleUname(e:any){
        this.Uname=e.target.value;
    }
    handleMobile(e:any){
        this.mobile=e.target.value;
    }
    handleFile(e:any){
        this.data=e.target.value;
    }

   async Submit(e:any){
        e.preventDefault();
        alert("hi")
        console.log(this.data)
        let formData=new FormData();
        formData.append("file",this.data);
       
        
        let result=await fetch('http://localhost:1111/file/post',{
            method:'POST',
            body:formData,
            headers: {
                "Content-Type": "multipart/form-data",
              }
    }
        )
        alert("hi")
    }
    render(){
        return(
           <div>
            <form onSubmit={(e)=>this.Submit(e)} enctype="multipart/form-data" >
            {/* <input type='text' value={this.Uname} onInput={(e)=>this.handleUname(e)}/>
            <input type='text' value={this.mobile} onInput={(e)=>this.handleMobile(e)}/> */}
            <input type='file' name="file"  id="file" value={this.data} onInput={(e)=>this.handleFile(e)}/>
            <input type="submit" value="submit"/>
            </form>
           </div>
        );
    }
}
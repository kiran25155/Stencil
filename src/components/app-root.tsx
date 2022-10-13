import { Component,h } from "@stencil/core";
import { Router } from "./RouterConfig/routers";
import { Route } from "stencil-router-v2";

@Component({
    tag:'app-root',
    styleUrl:'app-root.scss'
})
export class Root{
    render(){
        return(
             <div>
                <Router.Switch>
                    
                    <Route path="/">
                        <home-h></home-h>
                    </Route>

                    <Route path="/home">
                        <home-h></home-h>
                    </Route>

                    <Route path="/reg">
                        <register-reg></register-reg>
                    </Route>
                      
                    <Route path="/emp">
                        <emp-e></emp-e>
                    </Route>  
                    
                    <Route path="/emp/create">
                    <create-post></create-post>
                    </Route>

                    <Route path="/user">
                    <user-u></user-u>
                    </Route>
                      
                    <Route path="/p">
                    <page-notfound></page-notfound>
                    </Route>  

                    <Route path="/login">
                    <log-in></log-in>
                    </Route> 

                    <Route path="/file">
                   <file-f></file-f>
                    </Route> 
                </Router.Switch>
             </div>
        );
    }
}
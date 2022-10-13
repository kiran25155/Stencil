import { Component,h, Host } from "@stencil/core";
@Component({
    tag:'page-notfound',
    styleUrl:'page-notfound.scss',
    shadow:true
})
export class PageNotFound{
    render(){
        return(
            <Host>
                <div>
                <h1>Page Not Found</h1>
                </div>
            </Host>
        );
    }
}
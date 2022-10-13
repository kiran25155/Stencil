/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface CreatePost {
    }
    interface EmpE {
    }
    interface FileF {
    }
    interface GetPosts {
    }
    interface HomeH {
    }
    interface LogIn {
        "empId": string;
    }
    interface NotificationN {
        "ApplyPost": (sNo: number) => Promise<void>;
        "componentWillLoad": () => Promise<void>;
        "hello": () => Promise<void>;
    }
    interface PageNotfound {
    }
    interface RegisterReg {
    }
    interface TrackmyApplication {
    }
    interface UpdateAppstatus {
        "EditStatus": (sNo: number) => Promise<void>;
    }
    interface UserU {
    }
}
export interface NotificationNCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNotificationNElement;
}
export interface UpdateAppstatusCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLUpdateAppstatusElement;
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLCreatePostElement extends Components.CreatePost, HTMLStencilElement {
    }
    var HTMLCreatePostElement: {
        prototype: HTMLCreatePostElement;
        new (): HTMLCreatePostElement;
    };
    interface HTMLEmpEElement extends Components.EmpE, HTMLStencilElement {
    }
    var HTMLEmpEElement: {
        prototype: HTMLEmpEElement;
        new (): HTMLEmpEElement;
    };
    interface HTMLFileFElement extends Components.FileF, HTMLStencilElement {
    }
    var HTMLFileFElement: {
        prototype: HTMLFileFElement;
        new (): HTMLFileFElement;
    };
    interface HTMLGetPostsElement extends Components.GetPosts, HTMLStencilElement {
    }
    var HTMLGetPostsElement: {
        prototype: HTMLGetPostsElement;
        new (): HTMLGetPostsElement;
    };
    interface HTMLHomeHElement extends Components.HomeH, HTMLStencilElement {
    }
    var HTMLHomeHElement: {
        prototype: HTMLHomeHElement;
        new (): HTMLHomeHElement;
    };
    interface HTMLLogInElement extends Components.LogIn, HTMLStencilElement {
    }
    var HTMLLogInElement: {
        prototype: HTMLLogInElement;
        new (): HTMLLogInElement;
    };
    interface HTMLNotificationNElement extends Components.NotificationN, HTMLStencilElement {
    }
    var HTMLNotificationNElement: {
        prototype: HTMLNotificationNElement;
        new (): HTMLNotificationNElement;
    };
    interface HTMLPageNotfoundElement extends Components.PageNotfound, HTMLStencilElement {
    }
    var HTMLPageNotfoundElement: {
        prototype: HTMLPageNotfoundElement;
        new (): HTMLPageNotfoundElement;
    };
    interface HTMLRegisterRegElement extends Components.RegisterReg, HTMLStencilElement {
    }
    var HTMLRegisterRegElement: {
        prototype: HTMLRegisterRegElement;
        new (): HTMLRegisterRegElement;
    };
    interface HTMLTrackmyApplicationElement extends Components.TrackmyApplication, HTMLStencilElement {
    }
    var HTMLTrackmyApplicationElement: {
        prototype: HTMLTrackmyApplicationElement;
        new (): HTMLTrackmyApplicationElement;
    };
    interface HTMLUpdateAppstatusElement extends Components.UpdateAppstatus, HTMLStencilElement {
    }
    var HTMLUpdateAppstatusElement: {
        prototype: HTMLUpdateAppstatusElement;
        new (): HTMLUpdateAppstatusElement;
    };
    interface HTMLUserUElement extends Components.UserU, HTMLStencilElement {
    }
    var HTMLUserUElement: {
        prototype: HTMLUserUElement;
        new (): HTMLUserUElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "create-post": HTMLCreatePostElement;
        "emp-e": HTMLEmpEElement;
        "file-f": HTMLFileFElement;
        "get-posts": HTMLGetPostsElement;
        "home-h": HTMLHomeHElement;
        "log-in": HTMLLogInElement;
        "notification-n": HTMLNotificationNElement;
        "page-notfound": HTMLPageNotfoundElement;
        "register-reg": HTMLRegisterRegElement;
        "trackmy-application": HTMLTrackmyApplicationElement;
        "update-appstatus": HTMLUpdateAppstatusElement;
        "user-u": HTMLUserUElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface CreatePost {
    }
    interface EmpE {
    }
    interface FileF {
    }
    interface GetPosts {
    }
    interface HomeH {
    }
    interface LogIn {
        "empId"?: string;
    }
    interface NotificationN {
        "onCount"?: (event: NotificationNCustomEvent<number>) => void;
    }
    interface PageNotfound {
    }
    interface RegisterReg {
    }
    interface TrackmyApplication {
    }
    interface UpdateAppstatus {
        "onEventcount"?: (event: UpdateAppstatusCustomEvent<number>) => void;
    }
    interface UserU {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "create-post": CreatePost;
        "emp-e": EmpE;
        "file-f": FileF;
        "get-posts": GetPosts;
        "home-h": HomeH;
        "log-in": LogIn;
        "notification-n": NotificationN;
        "page-notfound": PageNotfound;
        "register-reg": RegisterReg;
        "trackmy-application": TrackmyApplication;
        "update-appstatus": UpdateAppstatus;
        "user-u": UserU;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "create-post": LocalJSX.CreatePost & JSXBase.HTMLAttributes<HTMLCreatePostElement>;
            "emp-e": LocalJSX.EmpE & JSXBase.HTMLAttributes<HTMLEmpEElement>;
            "file-f": LocalJSX.FileF & JSXBase.HTMLAttributes<HTMLFileFElement>;
            "get-posts": LocalJSX.GetPosts & JSXBase.HTMLAttributes<HTMLGetPostsElement>;
            "home-h": LocalJSX.HomeH & JSXBase.HTMLAttributes<HTMLHomeHElement>;
            "log-in": LocalJSX.LogIn & JSXBase.HTMLAttributes<HTMLLogInElement>;
            "notification-n": LocalJSX.NotificationN & JSXBase.HTMLAttributes<HTMLNotificationNElement>;
            "page-notfound": LocalJSX.PageNotfound & JSXBase.HTMLAttributes<HTMLPageNotfoundElement>;
            "register-reg": LocalJSX.RegisterReg & JSXBase.HTMLAttributes<HTMLRegisterRegElement>;
            "trackmy-application": LocalJSX.TrackmyApplication & JSXBase.HTMLAttributes<HTMLTrackmyApplicationElement>;
            "update-appstatus": LocalJSX.UpdateAppstatus & JSXBase.HTMLAttributes<HTMLUpdateAppstatusElement>;
            "user-u": LocalJSX.UserU & JSXBase.HTMLAttributes<HTMLUserUElement>;
        }
    }
}



export default interface PostDetails{
    sNo:number,
    title:string,
    description:string;
}

export default interface ApplicanteData{
    name:string,
    mobile_Number:string,
    email:string,
    dob:string,
    gender:string,
    qualification:string,
    country:string,
    password:string,
    confpassword:string,
    address:string
}

export default interface AppStatus{
        sNo:number,
		email:string,
		name :string,
		mobileNumber :string,
		degree :string,
		gender :string,
		title :string,
		status :string
}
export default interface ErrorMsg{
    statusCode: number,
statusText: string,
timestamp: any
}
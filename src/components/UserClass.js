import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name: "XXXXXXXX",
        }
    }
    render(){
        const {location} = this.props
        const {name} = this.state;
        return(
            <div className='border border-black  border-solid m-1 p-3'>
                <div className="flex">   
                <h3 className="bg-gray-200 p-2">{name}</h3>
                <button className="px-4 py-1 mx-2 font-semibold bg-green-100 rounded-md hover:bg-green-300" onClick={()=>{
                    this.setState({
                        name:"Ronald Kenneth 🔥"
                    })
                }}>RevealTheDeveloper</button>
                </div>
                <h4 className="my-5 font-semibold">Location: {location}</h4>
                <p className="mt-5 font-semibold">Contact Me : @ronald</p>
            </div>
        );
    }
}

export default UserClass;
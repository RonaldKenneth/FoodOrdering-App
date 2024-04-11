const UserFn =(props)=>{
    return (
        <div className='border border-black  border-solid m-1 p-3'>
            <h3 className=" p-2">{props.name}</h3>
            <p className="p-2 font-semibold">Contact Me @{props.name}</p>
        </div>
    );
}

export default UserFn;
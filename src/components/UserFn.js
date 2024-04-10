const UserFn =(props)=>{
    return (
        <div className='border border-black  border-solid m-1 p-3'>
            <h3 className=" p-2">{props.name}</h3>
            <h4  className="p-2 font-semibold">{props.location}</h4>
            <p className="p-2 font-semibold">Conact Me @kevin</p>
        </div>
    );
}

export default UserFn;
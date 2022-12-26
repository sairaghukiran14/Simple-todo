import React from 'react';


const TodoList= ({todolist,deletehandler,writehandler})=>{

    return(
        <div className='dis'>
                {todolist.map((todo,index)=> 
                        <div key={index} className="fields">
                            {todo} &nbsp;
                            <div>
                            <button className='update' onClick={()=>writehandler()}>Update</button><button onClick={()=>deletehandler(index)}>Delete</button>
                            </div>
                            </div> ) }
        </div>
        )
}


export default TodoList;
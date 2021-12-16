import React from "react";

const PersonForm = ({submission, changeHandler, name, number}) => {
    return (<form onSubmit={submission}>
        <div>
            name: <input name={'name'} value={name} onChange={changeHandler}/>
        </div>
        <div>
            number: <input name={'number'} value={number} onChange={changeHandler}/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>)
}

export default PersonForm
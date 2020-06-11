import React from 'react';

function Date(props) {
    return (
        <form>
            <input type="date" value={props.date} onChange={props.handleChange} />
            <button type="submit" value="Submit" onSubmit={props.handleSubmit}>Submit</button>
        </form>
    )
}

export default Date;
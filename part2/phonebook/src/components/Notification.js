import React from "react";

const Notification = ({message}) => {
  if (message === null) {
      return null
  }
    if(message.includes('server')){
        return (
            <div className='error' style={styleSheet.fail}>
                {message}
            </div>
        )
    }
        return (
            <div className='error' style={styleSheet.success}>
                {message}
            </div>
        )

}

const styleSheet = {
    success:{
        color: 'green',
        background: 'lightgrey',
        fontSize: '22px',
        padding: '10px',
        marginBottom: '10px',
    },
    fail: {
        color: 'red',
        background: 'lightgrey',
        fontSize: '22px',
        padding: '10px',
        marginBottom: '10px',
    }

}

export default Notification
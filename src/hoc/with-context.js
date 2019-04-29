import React from 'react';

const withContext = ( toProps, Context ) => ( Wrapped ) => {
    return (props) => {
        return <Context>
                    {
                          (value)=>{

                            const data = toProps(value);
    
                            return <Wrapped {...data} {...props}/>
                        }
                    }
               </Context>
    }
}

export default withContext;
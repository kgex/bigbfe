import React, { createContext } from 'react';

const AlertContext = createContext({
    open: false,
    setOpen: () => { },
});

export default AlertContext;
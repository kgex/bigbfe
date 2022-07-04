import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export default function ShowHidePassword() {
    const [showPassword, setShowPassword] = useState(false);

    if (showPassword) {
        return <VisibilityOffIcon onClick={() => setShowPassword(false)} />;
    } else {
        return <VisibilityIcon onClick={() => setShowPassword(true)} />;
    }
};


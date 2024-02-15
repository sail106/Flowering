import React from 'react';
import OpenViduVideoComponent from './OvVideo';

import { Box, styled, Typography } from '@mui/material'
// import { CUSTOMER, CONSULTANT } from 'api/CustomConst'


const UserVideoComponent = ({ streamManager }) => {

    console.log('streamManager'+ streamManager)  
    const subRole = JSON.parse(streamManager.stream.connection.data).clientRole;

    const getNicknameTag = () => {
        return JSON.parse(streamManager.stream.connection.data).clientData;
    }

    return (
        <div>
            {streamManager !== undefined ? (
                <>
                    {subRole === "CONSULTANT" &&
                        <ConsultantStream>
                            <OpenViduVideoComponent streamManager={streamManager} />
                            <CustomTypography>{ getNicknameTag()} 방장</CustomTypography>

                        </ConsultantStream>
                    }

                    {subRole === "USER" &&
                        <CustomerStream>
                            <div style={{ position: 'relative', }}>
                                <OpenViduVideoComponent streamManager={streamManager} />
                            </div>
                            <CustomTypography>{getNicknameTag()} 님</CustomTypography>
                        </CustomerStream>
                    }
                </>
            ) : null}
        </div>
    );
}

export default UserVideoComponent

const ConsultantStream = styled(Box)({
    width: '100%',
    // overflow: "hidden",
    border: '2px solid #5A4D4D99',
    borderRadius: '15px',
    video: {
        width: '100%',
    }
})

const CustomerStream = styled(Box)({
    width: '100%',
    overflow: "hidden",
    border: '2px solid #5A4D4D80',
    borderRadius: '15px',

    video: {
        width: '100%',
    }
})

const CustomTypography = styled(Typography)({
    color: "#5A4D4D",
    fontSize: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
})
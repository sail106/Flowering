import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { saveToken, deleteToken } from '../api/JWToken'
import { OK, CUSTOMER, CONSULTANT } from '../api/CustomConst'
import axios from 'axios';
// import Axios from '../api/Axios';

// state
const initialState = {
    // signup info state
    userInfo: {
        email: '',
        password: '',
        nickname: '',
        name: '',
        birth: '',
        contact: '',
        role: '',
        licenseId: '',
        licenseNumber: '',
        id: '',
    },
    data: '',

    // login state
    logonUser: {
        name: '',
        nickname: '',
        birth: '',
        contact: '',
        email: '',
        imageUrl: '',
        introduction: '',
        consultingFile: '',
        role: '',
        isMic: 'false',
        isCam: 'false',
        access_token: '',
        id:'', //pk
        // refresh_token: '',
    },
    selectedid: '',

    isLoading: false,
    isAuthenticated: false, // todo 로그인 가드

    // common info state -> 사용자 기본정보
    isModal: false, // sample modal

    // server status
    status: 'idle' // 'idle' | 'loading' | 'succeeded' | 'failed',
    
}

// actions
// signup actions
// export const signUpMember = createAsyncThunk(
//     'auth/signup',
//     async (userInfo, { rejectWithValue }) => {
//         try {
//             let response

//             if (userInfo.role === CUSTOMER) {
//                 response = await Axios.post('customers', userInfo);
//             } else if (userInfo.role === CONSULTANT) {
//                 response = await Axios.post('consultants', userInfo);
//             }
//             return response.status;
//         } catch (err) {
//             let errRes = 400;
//             if (err.status < 500) {
//                 errRes = 400;
//             } else if (err.status < 600) {
//                 errRes = 500;
//             }
//             return errRes;
//         }
//     }
// )


// login actions
export const UserInfo = createAsyncThunk(
    'auth/UserInfo',
    async ({ info }, { rejectWithValue,getState }) => { 
        try {
            const state = getState(); // 전체 Redux 상태를 얻습니다.
            const config = {
                headers: {
                    'Authorization': `Bearer ${state.auth.logonUser.access_token}`,
                    'Content-Type': 'application/json'
                    // 다른 필요한 헤더도 추가할 수 있습니다.
                }
            };
            // const response = await axios.get(`http://i10c106.p.ssafy.io:8080/v1/users/info?role=${role}`,config);
            const response = await axios.get(`http://i10c106.p.ssafy.io:8080/v1/users/info`, config);
            const res = response.data.data_body

            // saveToken(token);

            return res;

        } catch (err) {
            // 에러 자체를 반환해서 jsx에서 처리하는 방법
            return rejectWithValue(err);
            // return rejectWithValue(err.response);
        }
    }
);

// login actions
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ Email, Password }, { rejectWithValue }) => {

        const loginrequest = {
            email: Email,
            password: Password,
        }

        try {
            // start
            const response = await axios.post('http://i10c106.p.ssafy.io:8080/v1/auth/login', loginrequest);
            const token = response.data.data_body
            // saveToken(token);
            return token;

        } catch (err) {
            // 에러 자체를 반환해서 jsx에서 처리하는 방법
            alert("이메일 또는 비밀번호가 잘못되었습니다!");
            return rejectWithValue(err);
            // return rejectWithValue(err.response);
        }
    }
);

export const signOut = createAsyncThunk(
    'auth/signout',
    async (isAuthenticated, { rejectWithValue }) => {
        try {
            isAuthenticated = false
            return isAuthenticated;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

// 비밀번호 찾기
export const searchPasswordFetch = createAsyncThunk(
    'members/email/3?email=member@ssafy.com',
    async (email, { rejectWithValue }) => {
        try {
            const response = await Axios.get(`members/email/3?email=${email}`);
            if (response.status === OK) {
                return true;
            }
        } catch (err) {
            return false
        }
    }
)


// userSlice actions
export const loadMember = createAsyncThunk(
    'auth/loadmember',
    async (role, { rejectWithValue }) => {
        try {
            if (role === CUSTOMER) {
                const response = await Axios.get('customers/4');
                response.data.role = role
                response.data.imageUrl = response.data.imageUrl ? response.data.imageUrl : '/images/default/avatar20.png'
                return { data: response.data }
            } else if (role === CONSULTANT) {
                const response = await Axios.get('consultants/3');
                response.data.role = role
                response.data.imageUrl = response.data.imageUrl ? response.data.imageUrl : '/images/default/avatar20.png'
                return { data: response.data }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)

export const modifyMember = createAsyncThunk(
    'auth/modifymember',
    async (payload, { rejectWithValue }) => {
        try {
            let response;
            if (payload.role === CUSTOMER) {
                const modi = {
                    nickname: payload.nickname,
                    contact: payload.contact,
                    imageUrl: payload.imageUrl
                } // 고객 수정정보
                response = await Axios.patch('customers', modi);
            } else if (payload.role === CONSULTANT) {
                const modi = {
                    nickname: payload.nickname,
                    contact: payload.contact,
                    imageUrl: payload.imageUrl,
                    introduction: payload.introduction,
                    cost: payload.cost
                } // 컨설턴트 수정정보
                response = await Axios.patch('consultants', modi);
            }
            const token = response.headers["authorization"]; // 헤더로 받을 때   
            saveToken(token);
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const modifyPass = createAsyncThunk(
    'auth/modifypass',
    async (payload, { rejectWithValue }) => {
        try {
            let response;
            const data = {
                beforePassword: payload.beforePassword,
                afterPassword: payload.afterPassword
            }
            if (payload.role === CUSTOMER) {
                response = await Axios.patch('customers/password', data);
            } else if (payload.role === CONSULTANT) {
                response = await Axios.patch('consultants/password', data);
            }
            return response;
        } catch (err) {
            alert('비밀번호를 잘못 입력하셨습니다.')
            return rejectWithValue(err);
        }
    }
);


export const selectAccessToken = (state) => state.logonUser.access_token;

// createSlice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // login reducers
        logoutUser: (state) => {
            state.logonUser = {
                nickname: '',
                role: '',
                imageUrl: '/images/default/avatar01.png',
            }
            console.log('isauthentictedddd')
            state.isAuthenticated = false;
            deleteToken();
        },
        // modify reducers
        modalOn: (state) => {
            state.isModal = true;
        },
        modalOff: (state) => {
            state.isModal = false;
        },

        setRole: (state, { payload }) => {
            console.log('settrolll'+payload)
            state.logonUser.role = payload
        },
        setSelectedId: (state, { payload }) => {
            console.log('settt  ')
            state.selectedid = payload;
          },
        setname: (state, { payload }) => {
            state.logonUser.name = payload
        },

    },


    extraReducers: (builder) => {
        // signup extra reducers 통신 상태에 따른 실행 함수
        builder
            // signup extra reducers 통신 상태에 따른 실행 함수
            // .addCase(signUpMember.pending, (state) => {
            //     state.status = 'loading';
            // })
            // .addCase(signUpMember.fulfilled, (state, action) => {
            //     state.status = 'succeeded';
            //     state.data = action.payload;
            // })
            // .addCase(signUpMember.rejected, (state) => {
            //     state.status = 'failed';
            // })
            // login extra reducers 로그인 처리에 따른 실행 함수
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log('fullllll'+action.payload.access_token)
                state.logonUser = {
                    // nickname: action.payload.data.nickname,
                    // role: action.payload.data
                    // imageUrl: (action.payload.data.imageUrl ? action.payload.data.imageUrl : '/images/default/avatar01.png'),
                    access_token: action.payload.access_token,
                    // refresh_token : action.payload.refresh_token

                };
                state.isAuthenticated = true;
            })

            .addCase(loginUser.rejected, (state) => {
                state.isAuthenticated = false;
            })
            // modify extra reducers
            .addCase(loadMember.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadMember.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.logonUser = action.payload.data;
            })

            .addCase(loadMember.rejected, (state) => {
                state.status = 'failed';
            })

            .addCase(UserInfo.fulfilled, (state, action) => {
                console.log('userinfofulll', JSON.stringify(action.payload));


                 state.logonUser.role = action.payload.role;
                 state.logonUser.id = action.payload.id;
                 state.logonUser.email = action.payload.email;
                 state.logonUser.name = action.payload.name;
                 state.logonUser.nickname = action.payload.nickname;

                // role: action.payload.data
            })

            .addCase(UserInfo.rejected, (state) => {
                state.status = 'failed';
            });
    }

})


export const { logoutUser, modifyLogonUser, setRole, setname,setSelectedId } = authSlice.actions;
export const { modalOn, modalOff } = authSlice.actions;

export default authSlice.reducer
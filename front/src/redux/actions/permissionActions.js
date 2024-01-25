
// 액션 타입 정의
export const SET_AUDIO_PERMISSION = 'SET_AUDIO_PERMISSION';
export const SET_VIDEO_PERMISSION = 'SET_VIDEO_PERMISSION';


// 액션 생성자 함수
export const setAudioPermission = (permission) => ({
  type: SET_AUDIO_PERMISSION,
  payload: permission,
});

export const setVideoPermission = (permission) => ({
  type: SET_VIDEO_PERMISSION,
  payload: permission,
});

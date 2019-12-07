import store from '../src/store/index.js';
import cookieManager from './cookie-manager.js';

/**
 * object data를 Vuex에 저장
 * @param {string} dataName
 * @param {object} data
 */
const saveDataVuex = (dataName, data) => {
  // console.log("?"+data+dataName)
  store.commit(dataName, data);
  // console.log('(data-manager.js)쿠키저장값:'+cookieManager.getCookie('id'))
  // console.log('(data-manager.js)store.commit함수 dataName: '+dataName+", id:"+data)
};

export default {
  /**
   * @param {string} dataName
   * @param {object} data
   */
  saveData: (dataName, data) => {
    saveDataVuex(dataName, data);
    let exdate = new Date();
    // 쿠키 저장시간을 1일로 설정
    exdate.setDate(exdate.getDate() + 1);
    if (dataName == 'studylist') {
      // console.log("dm-"+data)
      cookieManager.setCookieArray(dataName,
        data, exdate.toUTCString());
    }
    else {
      cookieManager.setCookieObj(dataName,
        data, exdate.toUTCString());
    }

  },
  /**
   * object data를 쿠키로부터 가져온 뒤 Json 파싱하여
   * Vuex에 저장
   */
  loadDataFromCookie: () => {
    // string 으로 받아서 json파싱
    const userId = JSON.parse(cookieManager.getCookie('id'));
    const token = JSON.parse(cookieManager.getCookie('token'));
    const idx = JSON.parse(cookieManager.getCookie('idx'));
    // const studylist = JSON.parse(cookieManager.getCookie('studylist'));
    // const studylist = JSON.parse(cookieManager.getCookie('studylist'));

    // 쿠키에 데이터가 있었는지 확인 후 vuex에 저장
    if (userId != null) {
      saveDataVuex('id', userId);
      saveDataVuex('token', token);
      saveDataVuex('idx', idx);
      // saveDataVuex('studylist', studylist);

    }
  },
  /**
   * tabStack을 로컬 저장소(Cookie, Vuex)에서 제거
   */
  clearData: () => {
    // Vuex에서 tabStack들을 삭제
    store.commit('id', []);
    store.commit('token', []);
    store.commit('idx', []);
    // store.commit('studylist', []);


    // Cookie에서 tabStack들을 삭제
    cookieManager.deleteCookie('id');
    cookieManager.deleteCookie('token');
    cookieManager.deleteCookie('idx');
    // cookieManager.deleteCookie('studylist');

  },
};

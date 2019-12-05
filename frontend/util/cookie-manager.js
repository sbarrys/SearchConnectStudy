export default {
  /**
   * 쿠키를 저장합니다.
   * value가 string타입일때 사용합니다.
    * @param {string} name 쿠키의 이름입니다.
    * @param {string} value 쿠키의 값 입니다.
    * @param {number} lifeDate 쿠키의 유효기간 입니다.
    */
  setCookie: (name, value, lifeDate) => {
    // 외국 컴퓨터에서 사용하거나, 타임존을 이상하게 설정한 사람을 대비
    const date = new Date();
    const lifeDateLocal = lifeDate - (540 * 60 * 1000) - ((new Date).getTimezoneOffset() * 60 * 1000);
    date.setTime(lifeDateLocal);
    document.cookie = name + '=' + value + '; ' +
      'expires=' + date.toUTCString() + ';path=/';
  },

  /**
   * 쿠키를 저장합니다.
   * value가 object타입일때 사용합니다.
    * @param {string} name 쿠키의 이름입니다.
    * @param {object} value 쿠키의 값 입니다.
    * @param {number} lifeDate 쿠키의 유효기간 입니다.
    */
   setCookieObj: (name, value, lifeDate) => {
    // 외국 컴퓨터에서 사용하거나, 타임존을 이상하게 설정한 사람을 대비
    const date = new Date();
    const lifeDateLocal = lifeDate - (540 * 60 * 1000) - ((new Date).getTimezoneOffset() * 60 * 1000);
    date.setTime(lifeDateLocal);
    document.cookie = name + '=' + JSON.stringify(value) + '; ' +
      'expires=' + date.toUTCString() + ';path=/';
  },

  /**
    * 쿠키를 조회합니다.
    * @param {string} name 조회할 쿠키의 이름
    * @return {object} 조회된 쿠키 결과값(쿠키가 없다면 null을 반환)
    */
  getCookie: (name) => {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
  },

  /**
   * 쿠키를 삭제합니다.
    * @param {string} name 삭제할 쿠키의 이름
    */
  deleteCookie: (name) => {
    const date = new Date();
    document.cookie = name + '= ' + ';' +
      ' expires=' + date.toUTCString() + '; path=/';
  },
};

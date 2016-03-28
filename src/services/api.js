import localforage from 'localforage';

var Api = (function(){

  var isSync = false;

  var qssc = {
    fajr : '06:30 AM',
    dhuhr : '01:45 PM',
    asr : '05:45 PM',
    maghrib : '07:30 PM',
    isha : '09:00 PM',
    Jumuah : '01:30 PM'
  };

  var ad = {
    content : ''
  };

  function setUpData(){
    return localforage.setItem( getKey(), qssc )
                      .then(() => localforage.setItem( getKey('qssc-ad'), ad ));
  }

  function getKey(key='qssc'){
    return key;
  }

  function store(){

    if( isSync ){
      return;
    }
    setUpData().then(() => {
      isSync = true;
    });
  }

  function getItem(key='qssc'){
    return localforage.getItem(key);
  }

  function setItem(value, key='qssc'){
    console.log('api setItem ', value);
    return localforage.setItem(key, value);
  }

  return {getItem, setItem, store, getKey};

})();

export default Api;

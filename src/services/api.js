import localforage from 'localforage';

var Api = (function(){

  var isSync = false;

  var qssc = {
    fajr : '06:30AM',
    dhuhr : '01:45PM',
    asr : '05:45PM',
    maghrib : '07:30PM',
    isha : '09:00PM'
  };

  var ad = {
    title : '',
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

  function getItem(key){
    return localforage.getItem(key);
  }

  function setItem(key, value){
    return localforage.getItem(key);
  }

  return {getItem, setItem, store, getKey};

})();

export default Api;

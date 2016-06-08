angular.module('fo.services', ['ngResource'])

  .factory('UserSer', ['$resource','$rootScope',function ($resource,$rootScope) {
    var uid=localStorage.getItem('uid');
    var MobileApp=$rootScope.serUrl;
  return $resource(MobileApp+'User/:fun', {}, {
    //denglu
    login: {method: 'GET',params:{fun:'login'},isArray: false},
    //验证手机
    vmobile: {method: 'GET',params:{fun:'vmobile'},isArray: false},
    //设置密码
    setpwd: {method: 'GET',params:{fun:'setpwd'},isArray: false},
    //发送短信
    sendsms: {method: 'GET',params:{fun:'sendsms'},isArray: false},
    //微信登陆
    ssologin: {method: 'GET',params:{fun:'ssologin'},isArray: false},
    //用户信息
    uinfo:{method: 'GET',params:{fun:'uinfo'},isArray: false},
    //愿望列表
    Ylist:{method: 'GET',params:{fun:'Ylist'},isArray: false},
    //还愿
    Hyuan:{method: 'GET',params:{fun:'Hyuan'},isArray: false},
    //祈愿墙
    allyuan:{method: 'GET',params:{fun:'allyuan'},isArray: false},
    //签到
    qiandao:{method: 'GET',params:{fun:'qiandao'},isArray: false},
    //上传头像:
    upulogo:{method: 'POST',params:{fun:'upulogo'},isArray: false},
    //修改用户名:
    upuname:{method: 'GET',params:{fun:'upuname'},isArray: false},
  })
}])

  //藏经阁
  .factory('YuanSer', ['$resource','$rootScope',function ($resource,$rootScope) {

    var uid=localStorage.getItem('uid');
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'Yuan/:fun', {}, {

      allyuan: {method: 'GET',params:{fun:'allyuan'},isArray: false},
      //denglu
      qiyuan:{method: 'POST',params:{fun:'qiyuan'},isArray: false},
      //验证手机
      Ylist:{method: 'GET',params:{fun:'myuan'},isArray: false},
      //设置密码
      addview: {method: 'GET',params:{fun:'addview'},isArray: false},
      //还愿
      changeStatus: {method: 'GET',params:{fun:'changeStatus'},isArray: false},
      //得到愿望
      getyuan: {method: 'GET',params:{fun:'getyuan'},isArray: false},
      //得到介绍
      getdesc:{method: 'GET',params:{fun:'getdesc'},isArray: false},

    })
  }])
//藏经阁
  .factory('BookSer', ['$resource','$rootScope',function ($resource,$rootScope) {

    var uid=localStorage.getItem('uid');
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'Book/:fun', {}, {
      //注册
      navlist: {method: 'GET',params:{fun:'navlist'},isArray: true},
      //denglu
      booklist: {method: 'GET',params:{fun:'booklist'},isArray: false},
      //验证手机
      bookinfo: {method: 'GET',params:{fun:'foinfo'},isArray: false},
      //设置密码
      addView: {method: 'GET',params:{fun:'addView'},isArray: false},

    })
  }])
  .factory('NewsSer', ['$resource','$rootScope',function ($resource,$rootScope) {

    var uid=localStorage.getItem('uid');
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'News/:fun', {}, {
      //注册
      navlist: {method: 'GET',params:{fun:'navlist'},isArray: false},
      //denglu
      newslist: {method: 'GET',params:{fun:'newslist'},isArray: false},
      //验证手机
      newsinfo: {method: 'GET',params:{fun:'newinfo'},isArray: false},

      addView: {method: 'GET',params:{fun:'addView'},isArray: false},
    })
  }])
    .factory('ChatSer', ['$resource','$rootScope',function ($resource,$rootScope) {

    var uid=localStorage.getItem('uid');
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'Issue/:fun', {}, {
      //注册
      navlist: {method: 'GET',params:{fun:'navlist'},isArray: true},
      //denglu
      chatslist: {method: 'GET',params:{fun:'chatslist'},isArray: false},
      //验证手机
      chatinfo: {method: 'GET',params:{fun:'chatinfo'},isArray: false},
      //
      addView: {method: 'GET',params:{fun:'addView'},isArray: false},
    })
  }])
    .factory('ToolSer', ['$resource','$rootScope',function ($resource,$rootScope) {

    var uid=localStorage.getItem('uid');
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'Tool/:fun', {}, {
      //denglu
      qiantitle: {method: 'GET',params:{fun:'qiantitle'},isArray: false},
        //祈愿
      qiyuan:{method: 'POST',params:{fun:'qiyuan',uid:uid},isArray: false},
      //义工招募
      setWork:{method: 'POST',params:{fun:'setWork',uid:uid},isArray: false},
      //反馈建议
      setAdvice:{method: 'POST',params:{fun:'setAdvice',uid:uid},isArray: false},
    })
  }])
  .factory('MusicSer', ['$resource','$rootScope',function ($resource,$rootScope) {

    var uid=localStorage.getItem('uid');
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'music/:fun', {}, {
      typeList: {method: 'GET',params:{fun:'typeList'},isArray: false},
      musicList:{method: 'GET',params:{fun:'musicList'},isArray: false},
      setHot:{method: 'GET',params:{fun:'setHot'},isArray: false}
    })
  }])
  .factory('PaySer', ['$resource','$rootScope',function ($resource,$rootScope) {

    var uid=localStorage.getItem('uid');
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'Pay/:fun', {}, {
      getCharge: {method: 'GET',params:{fun:'getCharge'},isArray: false},
      getInte: {method: 'GET',params:{fun:'getInte'},isArray: false},
      changeStatus: {method: 'POST',params:{fun:'changeStatus'},isArray: false},
      isMoney:{method: 'GET',params:{fun:'isMoney'},isArray: false},
      payList:{method: 'GET',params:{fun:'payList'},isArray: true}
    })
  }])
  .factory('ShopSer', ['$resource','$rootScope',function ($resource,$rootScope) {
    var uid=localStorage.getItem('uid');

    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'Shop/:fun', {}, {
      bmfList: {method: 'GET',params:{fun:'bmfList'},isArray: true},
      bmfInfo: {method: 'GET',params:{fun:'bmfInfo'},isArray: false},
      address: {method: 'GET',params:{fun:'address'},isArray: false},
      goodsinfo: {method: 'GET',params:{fun:'goodsinfo'},isArray: false},
      cardinfo: {method: 'GET',params:{fun:'cardinfo'},isArray: false},
      orderInfo: {method: 'POST',params:{fun:'orderInfo'},isArray: false},
    })
  }])
  .factory('IntefoSer', ['$resource','$rootScope',function ($resource,$rootScope) {
    var uid=localStorage.getItem('uid');
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'Intefo/:fun', {}, {
      incScore: {method: 'GET',params:{fun:'incscore'},isArray: false},
      getInfo: {method: 'GET',params:{fun:'getinfo'},isArray: false},
    })
  }])
  .factory('ConfigSer', ['$resource','$rootScope',function ($resource,$rootScope) {
    var uid=localStorage.getItem('uid');
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'Test/:fun', {}, {
      configRes: {method: 'GET',params:{fun:'configRes'},isArray: false},
    })
  }])
  .factory('ParSer', ['$resource','$rootScope',function ($resource,$rootScope) {
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'Pra/:fun', {}, {
      dengji: {method: 'POST',params:{fun:'dengji'},isArray: false},
      getTree:{method: 'GET',params:{fun:'getTree'},isArray: false},
      tongjiday:{method: 'GET',params:{fun:'tongjiday'},isArray: false},
      getAllcate:{method: 'GET',params:{fun:'getAllcate'},isArray: false},
      setmycate:{method: 'POST',params:{fun:'setmycate'},isArray: false},
      getop:{method: 'GET',params:{fun:'getop'},isArray: false},
      getopnav:{method: 'GET',params:{fun:'getopnav'},isArray: true},
      monthlog:{method: 'GET',params:{fun:'tongjimonth'},isArray: false},
      paihang:{method: 'GET',params:{fun:'kkpar'},isArray: false},
      baohao:{method: 'POST',params:{fun:'baohao'},isArray: false},
      baotimer:{method: 'POST',params:{fun:'baoxiu'},isArray: false},
      timerList:{method: 'GET',params:{fun:'timerList'},isArray: false},
      nianfoList:{method: 'GET',params:{fun:'nianfoList'},isArray: false},
    })
  }])
  .factory('Player',['$rootScope','$interval','Audio','DataBinding','$ionicLoading', function ($rootScope,$interval,Audio,DataBinding,$ionicLoading) {
    var player = {
       //musicLen: length,
      controllPlay: function(item) {
          player.play(),
          DataBinding.dataBindFunc(item)
      },
      playerSrc: function(item) {
        var url = item.songUrl;
        Audio.src = url
      },
      play: function() {
        $rootScope.isPlay && player.stop(),
          Audio.play(),
          $rootScope.isPlay = true
      },
      stop: function() {
        $rootScope.isPlay && Audio.pause(),
        $rootScope.isPlay = false
      },
      prev: function() {
        console.log("prev:" + $rootScope.playindex),
          0 == $rootScope.playindex  ? $rootScope.playindex  = $rootScope.munum - 1 : $rootScope.playindex  -= 1,
          player.controllPlay($rootScope.musicitems[$rootScope.playindex])
      },
      next: function() {
        console.log("next:" + $rootScope.playindex),
          $rootScope.playindex  == $rootScope.munum - 1 ? $rootScope.playindex  = 0 : $rootScope.playindex  += 1,
          console.log($rootScope.playindex);
          player.controllPlay($rootScope.musicitems[$rootScope.playindex])
      }
    };
    return player
  }])
.factory("DataBinding", ["$rootScope", function($rootScope) {
    var dataObj = {
      dataBindFunc: function(item) {
          $rootScope.xzimg = item.img,
          $rootScope.song = item.name,
          $rootScope.count = item.count
      }
    };
    return dataObj
  }])
.factory("Audio", ["$document",
  function($document) {
    var audio = $document[0].createElement("audio");
    return audio
  }])

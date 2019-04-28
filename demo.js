window.onload = function() {

  //1.  根据openid获取是否订阅了
  let isSubscribe = getIsSubscribe()
  //2.  是否订阅
  if(isSubscribe){
    let isFirst = getIsFirst()
    if(isFirst){
      //显示弹层
      //是否点击了订阅
      if(flag){
        //判断是否关注了联想服务
        let isFocusOn = getIsFocusOn()
        if(isFocusOn){
          // 修改 悬浮球 >>>>> 已订阅
        }else{
          // 打开关注联想服务弹窗
        }
      }else {
        // 修改 悬浮球 >>>>> 订阅
      }
    }else{
      // 修改 悬浮球 >>>>> 订阅
    }
  }else{
    // 修改 悬浮球 >>>>> 已订阅
  }

  function getIsSubscribe(){
    //ajax()
    return true
  }
  function getIsFirst(){
    //ajax()
    return true
  }
  function getIsFocusOn(){
     //ajax()
     return true
  }
}
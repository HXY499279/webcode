/**
         * 1.用户名不能为空
         * 2.用户名必须在6-14位之间
         * 3.用户名只能由数字和字母组成，不能含有其他符号（正则表达式)
         * 4.密码和确认密码一致，邮箱地址合法
         * 5.同意失去焦点验证
         * 6.错误提示信息统一在span标签中提示，并且要求12号，红色
         * 7.文本框再次获得焦点后，清空错误提示信息信息
         */
        //1.用户名不能为空
        window.onload=function () {
            //获取username的span标签对象
            var usernameErrorSpan=document.getElementById("usernameError");
            //获取用户名标签对象
            var nameEle=document.getElementById("username");
            nameEle.onblur=function () {
                //获取用户名
                var name=nameEle.value;
                //去除用户名的前后空格
                name=name.trim();
                if(name===""){
                    usernameErrorSpan.innerText="用户名不能为空";
                }
                else{
                    //2.长度不同
                    if(name.length<6||name.length>14) {
                        usernameErrorSpan.innerText="用户名不合法:用户名长度应在6到14之间";
                    }
                    else{
                        //长度合法,继续判断用户名是否有非法字符
                        var fff=/^[A-Za-z0-9]+$/;
                        var ok=fff.test(name);
                        if(ok){
                            //用户名最终合法
                        }
                        else{
                            //用户名有非法字符
                            usernameErrorSpan.innerText="用户名只能由数字和字母组成";
                        }
                    }
                }
            }
            //给username这个文本框绑定获得焦点事件
            nameEle.onfocus=function () {
                //清空非法value
                if(usernameErrorSpan.innerText!=""){
                    nameEle.value="";
                }
                //清空span里的错误提示信息
                usernameErrorSpan.innerText="";
            }
        //获取密码框对象
        var passcode1Ele=document.getElementById("passcode1");
        //获取确认密码框对象
        var passcode2Ele=document.getElementById("passcode2")
        //获取确认密码框提示sapn对象
        var passcode2ErorrSpan=document.getElementById("passcode2Error");
            //给第二个密码框绑定blur事件
            passcode2Ele.onblur=function () {
                //获取密码
                var passcode1=passcode1Ele.value;
                //获取确认密码
                var passcode2=passcode2Ele.value;
                if(passcode1!=passcode2){
                    passcode2ErorrSpan.innerText="前后密码输入不一致！"
                }
                else{
                    //密码一致
                }
            }
            //给密码框绑定focus事件，用来，当前后密码不一致时清空密码
            passcode2Ele.onfocus=function () {
                if(passcode2ErorrSpan.innerText!=""){
                    passcode2Ele.value="";
                   passcode1Ele.value="";
                }
                passcode2ErorrSpan.innerText="";
            }
            //邮箱，获取eamil标签对象
        var emialEle=document.getElementById("email");
            //获取email的span对象
        var emailErrorSpan=document.getElementById("emailError");
        //给email标签绑定onblur事件
        emialEle.onblur=function () {
            //获取email
            var email=emialEle.value;
            //获取email的正则
            var fff=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
            var ok=fff.test(email);
            if(ok){
            }
            else{
                emailErrorSpan.innerText="邮箱地址不合法！";
            }
        }
        //给email绑定focus
        emialEle.onfocus=function () {
            if(emailErrorSpan.innerText!=""){
                emialEle.value="";
            }
            emailErrorSpan.innerText="";
        }
        //给提交按钮绑定鼠标单击事件
        //获取提交按钮对象
        var submitEle=document.getElementById("submit1");
        submitEle.onclick=function () {
            //触发username的blur,passcode的blur
            //不需要人工操作
            nameEle.focus();
            nameEle.blur()
            passcode2Ele.focus();
            passcode2Ele.blur();
            emialEle.focus();
            emialEle.blur();
            //当所有表单都合法时
            if(usernameErrorSpan.innerText==""&&passcode2ErorrSpan.innerText==""&&emailErrorSpan.innerText==""){
                var userFormEle=document.getElementById("userForm");
                userFormEle.submit();
            }
        }
    }
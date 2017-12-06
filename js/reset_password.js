// JavaScript Document
var labelValueObj = jq(".default_value , .default_value_code"); //label浠ｆ浛鏄剧ず鏂囨湰妗嗙殑value鍊�
var input_textObj = jq("input[type='password'] , input[type='text']"); //鏂囨湰妗嗗拰瀵嗙爜妗�
var accountNmObj = jq("input[name='username']");//璐﹀彿
var questionCodeObj = jq("input[name='yzm']");//闂楠岃瘉
var mobileCodeObj = jq("input[name='dxyzm']");//鎵嬫満楠岃瘉鐮�
var passWordObj = jq("input[name='password1']");//鏂板瘑鐮�
var repeatPassWordObj = jq("input[name='password2']");//纭瀵嗙爜
var mobileNmObj = jq("input[name='mobileNumber']");//鎵嬫満鍙�
var emailObj = jq("input[name='email']");//閭

//label浠ｆ浛input鐨剉alue

labelValueObj.click(function(){
    jq(this).hide().next().focus();

});

input_textObj.focus(function(){
    jq(this).siblings('label.default_value').hide();
    jq(this).siblings('label.default_value_code').hide();
    jq(this).css("border","1px #00b34b solid").nextAll(".message").removeClass(".msg_error , .msg_success ").hide();  //榛樿鏂囨湰(瀵嗙爜)妗嗚幏寰楃劍鐐规椂杈规鍙樼豢鑹�
    if (jq(this).attr('name') === 'password1' && jq(this).parents(".user_input").siblings().find("input[type='password']").attr('name') === 'password2' )
    {
        repeatPassWordObj.nextAll(".message").hide();
        repeatPassWordObj.css("border","1px #ccc solid");
    }
})
    .blur(function(){

        jq(this).css("border","1px #ccc solid");	//澶卞幓鐒︾偣鍙樹负榛樿鐨勭伆鑹�
        //鏂囨湰妗嗗け鍘荤劍鐐规椂鑻ユ棤鍐呭鍒欐樉绀烘彁绀轰俊鎭�
        var value = jq(this).val();
        if(value !== "")
        {

            jq(this).prevAll("label.default_value , label.default_value_code").hide();
        }
        else
        {
            jq(this).prevAll("label.default_value , label.default_value_code").show();
        }
    });
//鐢ㄦ埛璐﹀彿
function check_accountNm(obj){

    if(obj.length <= 0){return true;}//涓嶅瓨鍦ㄧ殑鑺傜偣鐩存帴杩斿洖true
    var value = jq.trim(obj.val());
    var errorObj = obj.nextAll(".message");

    if(value == "")
    {
        var infoMsg = "璇疯緭鍏ラ偖绠�/鎵嬫満鍙风爜";
        showMsg(errorObj,infoMsg,1);
        return false;
    }

    else if(/^1[34578]\d{9}$/.test(value)
        || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value))
    {
        var infoMsg = "鎵€濉俊鎭纭�";
        showMsg(errorObj,infoMsg,2);
        return true;
    }
    else
    {
        var infoMsg = "璐︽埛閿欒锛岃閲嶆柊杈撳叆";
        showMsg(errorObj,infoMsg,1);
        return false;
    }

}

//闂楠岃瘉
function check_question_code(obj){

    if(obj.length <= 0){return true;}//涓嶅瓨鍦ㄧ殑鑺傜偣鐩存帴杩斿洖true
    var value = jq.trim(obj.val());
    var errorObj = obj.nextAll(".message");

    if(value == "")
    {

        var infoMsg = "璇疯緭鍏ラ獙璇佺爜";
        showMsg(errorObj,infoMsg,1);
        return false;
    }
    else if(/^[A-Za-z0-9]+$/.test(value)) {
        var infoMsg = "鎵€濉俊鎭纭�";
        showMsg(errorObj, infoMsg, 2);
        return true;
    }
    else
    {
        var infoMsg = "楠岃瘉鐮侀敊璇�";
        showMsg(errorObj,infoMsg,1);
        return false;
    }

}

//閭
function check_email(obj){

    if(obj.length <= 0){return true;}//涓嶅瓨鍦ㄧ殑鑺傜偣鐩存帴杩斿洖true
    var value = jq.trim(obj.val());
    var errorObj = obj.nextAll(".message");

    if(value == "")
    {

        var infoMsg = "閭涓嶈兘涓虹┖";
        showMsg(errorObj,infoMsg,1);
        return false;
    }
    else if(/^([a-zA-Z0-9-_.]){1,}@([a-zA-Z0-9-.]){1,}\.(?:com|cn)$/.test(value))
    {
        var infoMsg = "鎵€濉俊鎭纭�";
        showMsg(errorObj,infoMsg,2);
        return true;
    }
    else
    {
        var infoMsg = "閭閿欒锛岃閲嶆柊杈撳叆";
        showMsg(errorObj,infoMsg,1);
        return false;
    }

}

//鎵嬫満鍙�
function check_mobile(obj){

    if(obj.length <= 0){return true;}//涓嶅瓨鍦ㄧ殑鑺傜偣鐩存帴杩斿洖true
    var value = jq.trim(obj.val());
    var errorObj = obj.nextAll(".message");

    if(value == "")
    {

        var infoMsg = "鎵嬫満鍙风爜涓嶈兘涓虹┖";
        showMsg(errorObj,infoMsg,1);
        return false;
    }
    else
    {
        if(/^1[34578]\d{9}$/.test(value))
        {

            if(value.length!=11)
            {
                var infoMsg = "璇疯緭鍏ユ纭殑11浣嶆墜鏈哄彿鐮�";
                showMsg(errorObj,infoMsg,1);
                return false;
            }
            else
            {
                var infoMsg = "鎵€濉俊鎭纭�";
                showMsg(errorObj,infoMsg,2);
                return true;
            }
        }
    }

}

//鎵嬫満楠岃瘉鐮�
function check_mobile_code(obj){
    if(obj.length <= 0){return true;}//涓嶅瓨鍦ㄧ殑鑺傜偣鐩存帴杩斿洖true
    var value = jq.trim(obj.val());
    var errorObj = obj.nextAll(".message");

    if(value == "")
    {

        var infoMsg = "璇疯緭鍏ョ煭淇￠獙璇佺爜";
        showMsg(errorObj,infoMsg,1);
        return false;
    }
    else if(/^[0-9]+$/.test(value))
    {
        var infoMsg = "鎵€濉俊鎭纭�";
        showMsg(errorObj,infoMsg,2);
        return true;
    }
    else
    {
        var infoMsg = "楠岃瘉鐮侀敊璇紝璇烽噸鏂拌緭鍏�";
        showMsg(errorObj,infoMsg,1);
        return false;
    }

}


//楠岃瘉瀵嗙爜
function check_passwd(obj){
    if(obj.length <= 0){return true;}//涓嶅瓨鍦ㄧ殑鑺傜偣鐩存帴杩斿洖true
    var value = jq.trim(obj.val());
    var newPass = jq.trim(passWordObj.val());
    var errorObj = obj.nextAll(".message");
    var rule1 = /^\w{6,16}$/;
    var rule2 = /^\d{6,8}$/;
    var useNum = String(newPass);
    var useFirst = useNum.substring(0,1);
    var usearr = useNum.split(useFirst);
    var usrStrNum = usearr.length-1;
    if(value == "")
    {
        var infoMsg = "璇峰～鍐欏瘑鐮�";
        showMsg(errorObj,infoMsg,1);
        return false;
    }
    else if(!rule1.test(newPass))
    {
        var infoMsg = "瀵嗙爜闀垮害闇€鍦�6鍒�16浣嶉棿锛屽彧鍚暟瀛� 瀛楁瘝 _";
        showMsg(errorObj,infoMsg,1);
        return false;
    }
    else if(rule2.test(newPass))
    {
        var infoMsg = "瀵嗙爜涓嶈兘涓�9浣嶄互涓嬬函鏁板瓧";
        showMsg(errorObj,infoMsg,1);
        return false;
    }else if(useNum.length == usrStrNum){
        var infoMsg = "瀵嗙爜瀛楃涓嶈兘瀹屽叏涓€鑷�";
        showMsg(errorObj,infoMsg,1);
        return false;
    }
    else
    {
        if (obj.attr('name') === 'password2')
        {
            if (value != jq.trim(passWordObj.val()))
            {
                var infoMsg = "瀵嗙爜涓嶄竴鑷达紝璇烽噸鏂拌緭鍏�";
                showMsg(errorObj, infoMsg, 1);
                return false;
            }
            else
            {
                var infoMsg = "鎵€濉俊鎭纭�";
                showMsg(errorObj, infoMsg, 2);
                return true;
            }
        }
        else
        {
            var infoMsg = "鎵€濉俊鎭纭�";
            showMsg(errorObj, infoMsg, 2);
            return true;
        }
    }

}



function check_account()
{
    if(check_accountNm(accountNmObj) && check_question_code(questionCodeObj)){
        return true;
    }
    else
    {
        return false;
    }
}
function check_mobileCode()
{
    if(check_mobile_code(mobileCodeObj)){
        return true;
    }
    else
    {
        return false;
    }
}
function check_passWord()
{
    if(check_passwd(passWordObj) && check_passwd(repeatPassWordObj)){
        return true;
    }
    else
    {
        return false;
    }

}
jq(document).keydown(function(event){
    if(event.keyCode==13){
        jq("form").submit();
    }
});
//榛樿鐨勪俊鎭�
function showMsg(obj,msg,error){
    var c = 'msg_info';

    switch(error){

        //姝ｇ‘娑堟伅
        case 0:
            c = 'msg_success';
            obj.html("<span></span>"+msg).removeClass("msg_error");
            break;

        //閿欒娑堟伅
        case 1:
            c = 'msg_error';
            obj.prevAll("input[type='text'],input[type='password']").css("border","1px #FF6769 solid");
            obj.html("<span></span>"+msg).show().removeClass("msg_success");
            break;

        //娓呯┖娑堟伅浣�
        case 2:
            c = 'msg_error';
            obj.addClass("msg_success").removeClass("msg_error").css('display','none'); //鏍煎紡楠岃瘉姝ｇ‘闅愯棌娑堟伅浣�
            break;

        //榛樿鏄櫘閫氭秷鎭�
        default:
            c = 'msg_info';
            break;
    }

    obj.html("<span></span>"+msg).addClass(c);
}

jq(".reset_content_email .repeat_post label").mouseover(function(){

    jq(this).css("color","#E7691E");
}).mouseout(function(){

    jq(this).css("color","#00b34b");

});
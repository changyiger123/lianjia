$(function(){
    $('.nowBind').click(function(){
        alert(1);
    })
})

// 点击左侧列表进行切换
$('.leftList').on('click','dd',function(){
    console.log($(this).parent('dl'));
    $(this).addClass('checkColor').siblings().removeClass('checkColor').parent('dl').siblings().children().removeClass('checkColor');
    var index=$(this).attr('data-id');
    $('.rightContent li').eq(index-1).show().siblings().hide();
})

// 点击上传头像并预览
var imgUrl="http://img.to8to.com/headphoto/734.jpg?1511859873";

//console.log(imgUrl);
function uploadevent(rs){
    //if(rs)
    var status = rs.status;
    var filename = rs.filename;///user/30/headphoto_6930.jpg
    switch(status){
        case 1:
            alert('头像保存成功！请及时联系客服为您审核头像，审核过后才可使用新头像哦!');
            if(filename){
                var hm='<label>当前头像：</label><img src="'+filename+'" id="p_view_img_1"  width="75" height="75"/>';
                document.getElementById("this_head").innerHTML =hm;
            }
            break;
        default:
            if(typeof(status) == 'undefined' || status == 'undefined'){
                alert(  '仅支持JPG,PNG,GIF类型的图片，且文件小于5MB' );
            } else {
                alert(  status );
            }

            break;

    }
}
function make_tip(obj,eventype){
    var tip='请输入详细地址';
    var val=obj.value.trim();
    if(eventype=='focus'){
        obj.value=(val!=tip)?obj.value:'';
    }else if(eventype=='blur'){
        $('#address').removeClass('address');
        obj.value=val?obj.value:tip;
    }
}

var imgUrl="http://img.to8to.com/headphoto/796.jpg?1511923391";

//console.log(imgUrl);
var flashvars = {
    "jsfunc":"uploadevent",
    "imgUrl":imgUrl,
    "pid":"75642723",
    "uploadSrc":true,
    "showBrow":true,
    "showCame":true,
    "uploadUrl":'/my/yz_administration_self.php?act=uploadImage'
};

var params = {
    menu: "false",
    scale: "noScale",
    allowFullscreen: "true",
    allowScriptAccess: "always",
    wmode:"transparent",
    bgcolor: "#FFFFFF"
};

var attributes = {
    id:"upload_headphoto_user"
};

swfobject.embedSWF("http://img.to8to.com//swf/upload_headphoto.swf", "altContent", "900", "500", "9.0.0", "", flashvars, params, attributes);
function uploadevent(rs){
    //if(rs)
    var status = rs.status;
    var filename = rs.filename;///user/30/headphoto_6930.jpg
    switch(status){
        case 1:
            alert('头像保存成功！请及时联系客服为您审核头像，审核过后才可使用新头像哦!');
            if(filename){
                var hm='<label>当前头像：</label><img src="'+filename+'" id="p_view_img_1"  width="75" height="75"/>';
                document.getElementById("this_head").innerHTML =hm;
            }
            break;
        default:
            if(typeof(status) == 'undefined' || status == 'undefined'){
                alert(  '仅支持JPG,PNG,GIF类型的图片，且文件小于5MB' );
            } else {
                alert(  status );
            }

            break;

    }
}
// 点击产生随机验证码
$(function(){
    $(".huan").on("click",createCode)
    $(".button").on("click",validation)
    createCode()//一打开页面就先加载一张验证码出来
})

var code;//定义一个全局验证码
var flag =true;
function createCode(){
    var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//所有候选组成验证码的字符，也可以用中文的
    code = '';
    var codeLength=4;
    var codeContent = $(".code");
    for(var i=0;i<codeLength;i++){
        var charIndex =Math.floor(Math.random()*selectChar.length);//随机数
        //alert(charIndex)
        code +=selectChar[charIndex];//一张验证码有五个字符组成
        codeContent.html(code);//显示验证码
    }
}
//验证码校验
function validation(){
    var Code = $("#code").val();
    //Code.replace(/[\W]/g,'');
    if(Code.length <=0){
        $(".change").show().html("验证码为空");
    }else if(Code !=code && Code.length >0){
        $(".change").show().html("验证码有误");
        createCode()//如果输入的验证码有误就刷新验证码
    }
    else{
        $(".change").html("验证码正确");
    }
}
// 邮箱绑定
function bdemail() {
    // window.location.href = './yz_administration_self.php?act=4&bd=1&display=1';
    $('.emailbtn').css('display', 'none');
    $('.comPlaint').removeClass('none');
}

function checkE() {
    if ($('email').value == '') {
        $('#email').next('.message').addClass('msg_error');
        $('#email').next('.message').css('display', 'block');
        $('#email').next('.message').css('style', 'border: 1px solid rgb(255, 103, 105)');
        $('#email').next('.message').html('邮箱不能为空');
        return false;
    }else{
        var val = $('#email').val();
        if(!val.match(/^([a-zA-Z0-9-_.]){1,}@([a-zA-Z0-9-.]){1,}\.(?:com|cn)$/))
        {
            $('#email').next('.message').addClass('msg_error');
            $('#email').next('.message').css('display', 'block');
            $('#email').next('.message').css('style', 'border: 1px solid rgb(255, 103, 105)');
            $('#email').next('.message').html('邮箱格式不正确，请重新填写');
            return false;
        }

        // var ret = '';
        // $.ajax({
        //     type:'post',
        //     url:'./yz_administration_self.php',
        //     data:{'yzm_int':$('#email').val(),'status':'yzemail'},
        //     async:false,
        //     success:function(message){
        //         if(message ==1){
        //             $('#email_info').addClass('msg_error');
        //             $('#email_info').css('display', 'block');
        //             $('#email_info').html('邮箱已存在');
        //
        //             return false;
        //         }else if(message ==2){
        //             ret = 2;
        //         }
        //     }
        // });//console.log(ret);
        // if(ret != 2){
        //     return false;
        // } else {
        //     return true;
        // }
    }
}
$(".nextOne").on("click",createCode)
$(".next_bit").on("click",validation,function(){
    // alert(1)
    $('.reset_line>div').find('p').eq(1).addClass('cur');
    $('.reset_line>div').find('p').eq(0).addClass('highLight');
    $('.secondStep').show();
    $('.reset_content').html($('.secondStep'));
})
createCode()//一打开页面就先加载一张验证码出来

$('.reset_content').on('click','.checkEmail',function(){
    //进行后台发送邮箱验证码跳转
    $('.reset_line>div').find('p').addClass('cur highLight');
    $('.reset_content').html('<dl class="comValidate">\n' +
        '<dt>\n' +
        '<img src="img/mailmdcg.png" alt="">\n' +
        '</dt>\n' +
        '<dd>\n' +
        '恭喜您,成功绑定邮箱！\n' +
        '</dd>\n' +
        '</dl>');
})
$('.reset_content').on('click','.checkEmailBox',function(){
    //进行后台发送邮箱验证码跳转
    $('.reset_line>div').find('p').addClass('cur highLight');
    $('.reset_content').html('<dl class="comValidate">\n' +
        '<dt>\n' +
        '<img src="img/mailmdcg.png" alt="">\n' +
        '</dt>\n' +
        '<dd>\n' +
        '恭喜您,成功绑定邮箱！\n' +
        '</dd>\n' +
        '</dl>');
})
$('.reset_contents').on('click','.checkEmailBox',function(){
    //进行后台发送邮箱验证码跳转
    $('.reset_line>div').find('p').addClass('cur highLight');
    $('.reset_contents').html('<dl class="comValidate">\n' +
        '<dt>\n' +
        '<img src="img/mailmdcg.png" alt="">\n' +
        '</dt>\n' +
        '<dd>\n' +
        '恭喜您,修改成功！\n' +
        '</dd>\n' +
        '</dl>');
})
//邮箱修改
function changeEmail(){
    $('.changeEmail').css('background-color','#cccccc');
    $('.bottomChangeEmail').addClass('block');
}
var clickCount=0;
$(".next_bits").on("click",validation,function(){
    $('.reset_lines>div').find('p').eq(1).addClass('cur');
    $('.reset_lines>div').find('p').eq(0).addClass('highLight');
    clickCount++;
    console.log(clickCount);
    if(clickCount==1){
        $('.nextOne').trigger("click");
        $('.dl1').addClass('none');
        $('.dl2').removeClass('none');
    }else if(clickCount==2){
        $('.reset_contents').html('<div style="width:432px;font-size: 14px;color:#666666;margin-left:-35px;class="thirdStep">\n' +
            '<p>已发送验证邮件至 <span style="color: #f8a62a;">1605034***@qq.com</span>,请立即完成验证</p>\n' +
            '<p style="color: #999999;margin-top: 20px">验证邮件24小时内有效,请尽快登录您的邮箱点击验证链接完成验证。</p>\n' +
            '<button style="width:164px;height:38px;border:none;background: #f8a62a;display:block;margin-left:80px;color:#fff;margin-top:40px;" class="checkEmailBox">立即去邮箱验证</button>\n' +
            '</div>')
    }

})


//点击分页进行

//测试数据
var data = [
    '北京',
    '上海',
    '广州',
    '深圳',
    '杭州',
    '长沙',
    '合肥',
    '宁夏',
    '成都',
    '西安',
    '南昌',
    '上饶',
    '沈阳',
    '济南',
    '厦门',
    '福州',
    '九江',
    '宜春',
    '赣州',
    '宁波',
    '绍兴',
    '无锡',
    '苏州',
    '徐州',
    '东莞',
    '佛山',
    '中山',
    '成都',
    '武汉',
    '青岛',
    '天津',
    '重庆',
    '南京',
    '九江',
    '香港',
    '澳门',
    '台北'
];
var nums = 3; //每页出现的数量
var pages = Math.ceil(data.length/nums); //得到总页数

var thisDate = function(curr){
    //此处只是演示，实际场景通常是返回已经当前页已经分组好的数据
    var str = '', last = curr*nums - 1;
    last = last >= data.length ? (data.length-1) : last;
    for(var i = (curr*nums - nums); i <= last; i++){
        // str += '<div>'+ data[i] +'</div>';
        str+='<div id="biuuu_city" class="caseList">\n' +
            '                    <div class="caseImg left">\n' +
            '                        <img src="img/anli.png" alt="">\n' +
            '                    </div>\n' +
            '                    <div class="caseWord left">\n' +
            '                        <p>于女士的家</p>\n' +
            '                        <p><span>简约/一居/60㎡</span></p>\n' +
            '                        <p><span>设计师&nbsp;:&nbsp;'+data[i]+'恋家</span></p>\n' +
            '                    </div>\n' +
            '                    <div class="delete right">删除</div>\n' +
            '                </div>'
    }
    return str;
};

//调用分页
laypage({
    cont: 'biuuu_city',
    pages: pages,
    jump: function(obj){
        document.getElementById('biuuu_city_list').innerHTML = thisDate(obj.curr);
    }
})
//通过审核删除按钮 需要往后台发送数据
$('#biuuu_city_list').on('click','.delete',function () {
    var that=$(this).parent('.caseList');
    console.log(that);
    $(that).remove();
})

// 待审核项目删除按钮 需要后台或者不发送数据返回请求
$('.personalData>.caseList>.delete').click(function(){
    var that=$(this).parent('.caseList');
    $(that).remove();
})

//下面用于多图片上传预览功能
//下面用于多图片上传预览功能

function setImagePreviews(doc,avalue) {

    var docObj = document.getElementById(doc);


    // var dd = docObj.nextElementSibling;

    var dd = docObj.parentNode;
    // var dd = docObj.parentNode;
    dd.innerHTML = "";

    var fileList = docObj.files;

    for (var i = 0; i < fileList.length; i++) {



        dd.innerHTML += " <img id='img" + i + "'  />";

        var imgObjPreview =dd.children[i] ;

//            var imgObjPreview = document.getElementById("img"+i);

        if (docObj.files && docObj.files[i]) {

            //火狐下，直接设img属性

            imgObjPreview.style.display = 'block';

            imgObjPreview.style.width = '117px';

            imgObjPreview.style.height = '117px';

            //imgObjPreview.src = docObj.files[0].getAsDataURL();

            //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式

            imgObjPreview.src = window.URL.createObjectURL(docObj.files[i]);

        }

        else {

            //IE下，使用滤镜

            docObj.select();

            var imgSrc = document.selection.createRange().text;

            alert(imgSrc)

            var localImagId = document.getElementById("img" + i);

            //必须设置初始大小

            localImagId.style.width = "117px";

            localImagId.style.height = "117px";

            //图片异常的捕捉，防止用户修改后缀来伪造图片

            try {

                localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";

                localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;

            }

            catch (e) {

                alert("您上传的图片格式不正确，请重新选择!");

                return false;

            }

            imgObjPreview.style.display = 'none';

            document.selection.empty();

        }

    }



    return true;

}

function del4margin(x) {
    var ObjLi=document.getElementById("dlList").getElementsByTagName("dl");
    for (var i = 1; i < ObjLi.length; i++) {
        if (i % x == 0 && i !== 0) {
            ObjLi[i-1].style.marginRight = "0";
        }
    }
}
window.onload = del4margin(4);


// $('.dlList').html(tdlist);
function setImagePreviewss(avalue) {

    var docObj = document.getElementById("docimgs");

    var dd = document.getElementById("ddimgs");

    dd.innerHTML = "";

    var fileList = docObj.files;

    for (var i = 0; i < fileList.length; i++) {



        dd.innerHTML += "<div style='float:left;' > <img id='imgss" + i + "'  /> </div>";

        var imgObjPreview = document.getElementById("imgss"+i);

        if (docObj.files && docObj.files[i]) {

            //火狐下，直接设img属性

            imgObjPreview.style.display = 'block';

            imgObjPreview.style.width = '136px';

            imgObjPreview.style.height = '136px';

            //imgObjPreview.src = docObj.files[0].getAsDataURL();

            //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式

            imgObjPreview.src = window.URL.createObjectURL(docObj.files[i]);

        }

        else {

            //IE下，使用滤镜

            docObj.select();

            var imgSrc = document.selection.createRange().text;

            alert(imgSrc)

            var localImagId = document.getElementById("imgss" + i);

            //必须设置初始大小

            localImagId.style.width = "136px";

            localImagId.style.height = "136px";

            //图片异常的捕捉，防止用户修改后缀来伪造图片

            try {

                localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";

                localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;

            }

            catch (e) {

                alert("您上传的图片格式不正确，请重新选择!");

                return false;

            }

            imgObjPreview.style.display = 'none';

            document.selection.empty();

        }

    }



    return true;

}






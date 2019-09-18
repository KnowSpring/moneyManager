/**
 *
 * Created by gcc-pc on 2019/6/9.
 */
$(function(){
    //动态设置ul的宽度
    setWidth();
    //触屏轮播功能
    banner();
    $('.carousel').carousel({
        interval:2000
    });

    //动态设置ul的宽度
    function setWidth(){
        var width = 0;
        $('.wjs-products .products-tab li').each(function(i,e){
            console.log(i);
            console.log(e);
            width += $(this).outerWidth(true);
        });
        $('.wjs-products .products-tab').width(width);
    }

    //触屏轮播功能
    function banner(){
        // 给banner绑定touch
        //触屏开始： 清定时器  记录起始坐标
        //触屏移动: 记录移动距离 算距离差
        //触屏结束： 判断滑动方向，让轮播图切换
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;

        $('.wjs-banner').on('touchstart',function(e){
            $('.carousel').carousel('pause');
            startX = e.originalEvent.targetTouches[0].clientX;

        });
        $('.wjs-banner').on('touchmove',function(e){
            moveX = e.originalEvent.targetTouches[0].clientX;
            distanceX = moveX - startX;
        });
        $('.wjs-banner').on('touchend',function(e){
            if(distanceX >0){
                $('.carousel').carousel('prev');
            }
            if(distanceX<0){
                $('.carousel').carousel('next');
            }
            $('.carousel').carousel('cycle');
            //数据重置
            startX = 0;
            moveX = 0;
            distanceX = 0;

        })


    }
});
<template>
  <ul class="contact-container">
    <li>
        <a href="https://github.com/appharos">
            <div class="icon">
                <Icon type="github"/>
            </div>
            <span>appharos</span>
        </a>
        <div class="pop">
            <img src="https://img2.baidu.com/it/u=2488766635,3414942616&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1709658000&t=dd9d2abce28f038d61502671cf1bb73b" alt="">
        </div>
    </li>

    <li>
        <a href="mailto:appharos@gmail.com">
            <div class="icon">
                <Icon type="mail"/>
            </div>
            <span>appharos@gmail.com</span>
        </a>
        <div class="pop">
            <img src="https://img2.baidu.com/it/u=2488766635,3414942616&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1709658000&t=dd9d2abce28f038d61502671cf1bb73b" alt="">
        </div>
    </li>

    <li>
        <a href="#">
            <div class="icon">
                <Icon type="qq"/>
            </div>
            <span>1406634498</span>
        </a>
        <div class="pop">
            <img src="https://img2.baidu.com/it/u=2488766635,3414942616&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1709658000&t=dd9d2abce28f038d61502671cf1bb73b" alt="">
        </div>
    </li>

    <li>
        <a href="#">
            <div class="icon">
                <Icon type="wechat"/>
            </div>
            <span>微信：铮子</span>
        </a>
        <div class="pop">
            <img src="https://img2.baidu.com/it/u=2488766635,3414942616&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1709658000&t=dd9d2abce28f038d61502671cf1bb73b" alt="">
        </div>
    </li>
  </ul>
</template>

<script>
import Icon from '@/components/Icon';     // script标签定位到./src目录
export default {
    components: {
        Icon,
    }
}
</script>

<style lang="less" scoped>
@import url('~@/styles/var.less');      // style标签中less语法下路径 ~@自动定位到./src目录
.contact-container {
    list-style: none;
    padding: 20px;
    margin: 0;
    color: @gray;
    @itemHeight:30px ;   
    li {
        height: @itemHeight ;
        line-height: 30px;
        margin: 14px 0;
        position: relative;
        &:hover{
            .pop{
                transform: scaleY(1);
            }
        }
    }

    a {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        cursor: pointer;
    }

    .icon{
        font-size: 20px;
        width: 36px;
    }
    .pop{
        position: absolute;
        left: 0;
        bottom: @itemHeight + 5px;
        background-color: #fff;
        padding: 10px 15px;
        border-radius: 5px;
        transform: scaleY(0);
        transform-origin: center bottom;
        transition: 0.3s;

        img{
            width: 150px;
            height: 150px;
            object-fit: cover;
        }

        &::after{
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%) rotate(45deg);
            width: 8px;
            height: 8px;
            background-color: #fff;
            bottom: -4px;
        }
    }
}
</style>
! function () {
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('.styleTag')
        let n = 0
        let id = setInterval(() => {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = 10000
            if (n >= code.length) {
                clearInterval(id)
                fn && fn()
            }
        }, 10)
    }
    let code = `.preview{
    height: 100%;
    border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FEE433;
    }
    .wrapper{
        width: 100%;
        height: 165px;
        position: relative;
    }
    .nose{
        width: 0px;
        height: 0px;
        border: 11px solid red;
        border-color: black transparent transparent transparent;
        border-radius: 11px;
        position: absolute;
        left: 50%;
        top: 28px;
        transform: translateX(-50%);
    }
    .eye{
        width: 49px;
        height: 49px;
        background-color: #2e2e2e;
        position: absolute;
        border-radius: 50%;
        border: 1px solid #000000;
    }
    .eye::before{
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        border-radius: 50%;
        position: absolute;
        left: 6px;
        top: 1px;
        border: 2px solid #000;
    }
    .eye.left{
        right: 50%;
        margin-right: 90px;
    }
    .eye.right{
        left: 50%;
        margin-left: 90px;
    }
    .face{
        width: 68px;
        height: 68px;
        background-color: #FC0D1C;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        top: 85px;
    }
    .face.left{
        right: 50%;
        margin-right: 116px;
    }
    .face.right{
        left: 50%;
        margin-left: 116px;
    }
    .upperLip{
        height: 25px;
        width: 80px;
        border: 2px solid black;
        position: absolute;
        top: 52px;
        background: #FDE348;
    }
    .upperLip.left{
        right: 50%;
        border-bottom-left-radius: 40px 25px;
        border-top: none;
        border-right:none;
        transform: rotate(-20deg)
    }
    .upperLip.right{
        left: 50%;
        border-bottom-right-radius: 40px 25px;
        border-top: none;
        border-left:none;
        transform: rotate(20deg)
    }
    .lowerLip-wrapper{
        height: 152px; 
        width: 300px;
        bottom: -50px;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        /* z-index: -1; */
        overflow: hidden;
    }
    .lowerLip{
        height: 3500px;
        width: 300px;
        border: 2px solid black;
        background: #990513;
        border-radius: 200px/2000px;
        position: absolute;
        bottom: 0px;
        overflow: hidden;
    }
    .lowerLip::after{
        content:'';
        position: absolute;
        bottom: 0px;
        width: 130px;
        height: 130px;
        background: #FC4A62;
        left: 50%;
        margin-left: -65px;
        border-radius: 50%;
    }
`
    writeCode('', code)

}()
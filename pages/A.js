import Link from 'next/link';
import { useState } from 'react';

const A = () => {
    const [color, changeColor] = useState('blue')
    function onchange() {
        changeColor(color=='blue'?'red':'blue')
    }
    return (
        <>
            <div>我是A页面 <br/></div>

            <button onClick={onchange}>改变颜色</button> <br/><br/>

            <Link href='/'><a>返回首页</a></Link>

            <style jsx>
                {`
                    div{color:${color}}
                    button{background:red}
                `}
            </style>

        </>
    )
}
export default A
import Head from '../components/myheader'
import '../static/test.css'
import {Button} from 'antd'

function Header () {
    return (
        <>
            <br/>
            <Button>我是按钮</Button>
            <div>Elements 下面可以看到 head中出现 title 啦</div> 
            <Head />
        </>
    )
}

export default Header;
import Buttons from '../components/buttons'
import Link from 'next/link'
import Router from 'next/router'


function gotoA () {
    Router.push('/A')
}

function sendB () {
    // Router.push('/B?name=哈哈蛤')
    Router.push({
        pathname: '/B',
        query: {name: '哈哈哈哈哈哈'}
    })
}

function HomePage() {
    return (
        <>
            <Buttons>从父组件传来的值</Buttons>

            <div>这是首页</div> <br/><br/>

            <Link href='/A'><a>去A页面看看</a></Link> <br/><br/>

            <button onClick={sendB}>发送消息去B页面看看</button> <br/><br/>

            <button onClick={gotoA}>去A页面看看</button>
        </>
    )
  }
  
  export default HomePage
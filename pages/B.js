import Link from 'next/link'
import { withRouter } from 'next/router'
import axios from 'axios'

const B = ({router,list}) => {
    return (
        <>
            <div>我是B页面</div>
            <div><span style={{color:'red'}}>路由传值为</span> {router.query.name}</div>
            <div><span style={{color:'red'}}>从服务端获取的数据</span> {list}</div>
            <Link href='/'><a>返回首页</a></Link> <br/>
        </>
    )
}
 
B.getInitialProps = async ()=> {
    const promise = new Promise((resolv)=>{
        axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(res=>{
            resolv(res.data.data)
        })
    })
    return await promise
}

 export default withRouter(B)
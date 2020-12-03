import React, {useState} from 'react'
import dynamic from 'next/dynamic'

// 使用懒加载 导入自己组件
const One = dynamic(import('../components/one'))

function Time () {
    const [nowTime, formatting] = useState(Date.now())
    const onchangeTime = async () => {
        // 使用懒加载 导入外部插件
        const moment = await import('moment')
        formatting(moment.default(Date.now()).format())
    }
    return (
        <>
            <One />
            <div>现在时间{nowTime}</div>
            <button onClick={onchangeTime}>格式化时间</button>
        </>
    )
}

export default Time

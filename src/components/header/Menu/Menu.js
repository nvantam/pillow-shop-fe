import { memo, useState, useEffect } from 'react'
import { Link, useHref } from 'react-router-dom'
const menu = [{ title: 'Trang Chủ', to: '/HomePage' },
{ title: 'Sản Phẩm', to: '/Product' }, { title: 'Giới Thiệu', to: '/GioiThieu' }]

function Menu() {
    const href = useHref();
    const [selectedMenu, setSelectedMenu] = useState("/HomePage");

    useEffect(()=>{
        setSelectedMenu(href);
    },[href])
    return <>{
        menu.map((item, index) =>
            <Link key={index} to={item.to} className={`menu_header ${item.to === selectedMenu && 'selectedmenu'}`}>{item.title}</Link>
        )}</>
}
export default memo(Menu);
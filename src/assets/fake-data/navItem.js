import home_icon from '../icon/home.png'
import best_seller_icon from '../icon/best-seller.png'
import booking_icon from '../icon/restaurant.png'
import contact_icon from '../icon/contacting.png'
import menu_icon from '../icon/menu.png'
import right_arrow from '../icon/right-arrow.png'
import lobby_icon from '../icon/lobby.png'

export const navItem = [
    {
        id: 1,
        name: "Giới thiệu",
        icon: home_icon,
        href: "#gioi-thieu",
        alt: "home"
    },
    {
        id: 2,
        name: "Món bán chạy",
        icon: best_seller_icon,
        href: "#mon-ban-chay",
        alt: "best-seller"
    },
    {
        id: 3,
        name: "Thực đơn",
        icon: menu_icon,
        href: "#thuc-don",
        alt: "menu"
    },
    {
        id: 4,
        name: "Sảnh tiệc",
        icon: lobby_icon,
        href: "#sanh-tiec",
        alt: "lobby"
    },
    {
        id: 5,
        name: "Đặt bàn",
        icon: booking_icon,
        href: "#dat-ban",
        alt: "booking"
    },
    {
        id: 6,
        name: "Liên hệ",
        icon: contact_icon,
        href: "#lien-he",
        alt: "contact"
    }
]

export const dropdownNavbar = [
    {
        id: 1,
        title: "Sảnh 1",
        // img: sanh_1,
        icon: right_arrow
    },
    {
        id: 2,
        title: "Sảnh 2",
        icon: right_arrow
    },
    {
        id: 3,
        title: "Sảnh 3",
        icon: right_arrow
    }
]
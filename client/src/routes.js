import {
    ADMIN_ROUTE,
    BALL_PAGE_ROUTE,
    BALLS_ROUTE,
    BASKET_ROUTE,
    CONTACTS_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/Consts";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Balls from "./pages/Balls";
import Auth from "./pages/Auth";
import BallPage from "./pages/BallPage";
import Contacts from "./pages/Contacts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: Admin
    },
    {
        path: BASKET_ROUTE,
        component: Basket
    }
]

export const publicRoutes = [
    {
        path: BALLS_ROUTE,
        component: Balls
    },
    {
        path: LOGIN_ROUTE,
        component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        component: Auth
    },
    {
        path: `${BALL_PAGE_ROUTE}/:id`,
        component: BallPage
    },
    {
        path:CONTACTS_ROUTE,
        component: Contacts
    }
]
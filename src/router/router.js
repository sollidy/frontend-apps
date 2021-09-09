import { createRouter, createWebHistory } from "vue-router"
import Main from '@/pages/Main';
import PostPage from '@/pages/PostPage';
import About from '@/pages/About';
import SinglePostPage from '@/pages/SinglePostPage';
import PostPageWithStore from '@/pages/PostPageWithStore';
import PostPageWithComposition from '@/pages/PostPageWithComposition';


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: SinglePostPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/composition',
        component: PostPageWithComposition
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
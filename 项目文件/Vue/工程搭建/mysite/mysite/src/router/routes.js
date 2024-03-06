import Home from '@/views/Home';
import Message from '@/views/Message';
import Blog from '@/views/Blog';
import About from '@/views/About';


export default [
    //路由规则
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/blog', component: Blog },
    { path: '/message', component: Message },
];
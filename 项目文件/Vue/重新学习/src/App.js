//vue的根组件
import Mybutton from './components/Mybutton.js'

const template = `
<div>
<h1>App组件</h1>
<Mybutton />
</div>
`;

export default {
    template,
    components: {
        Mybutton,
    }
}
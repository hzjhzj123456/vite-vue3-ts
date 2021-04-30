import {createApp} from "vue";
import App from './App.vue';
import { Button,Checkbox, CheckboxGroup,Field,Cell,CellGroup,List,Swipe, SwipeItem,Grid,GridItem} from 'vant';
const app = createApp(App);
app.use(Button)
.use(Checkbox)
.use(CheckboxGroup)
.use(Field)
.use(Cell)
.use(CellGroup)
.use(List)
.use(Swipe)
.use(SwipeItem)
.use(Grid)
.use(GridItem)
export default app;


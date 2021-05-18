import { Button,Cell, CellGroup,Toast,NoticeBar,NavBar,ActionBar, ActionBarIcon, ActionBarButton  } from 'vant';
function useVant(app){
    app.use(Button);
    app.use(Cell);
    app.use(CellGroup);
    app.use(Toast);
    app.use(NoticeBar);
    app.use(NavBar);
    app.use(ActionBar);
    app.use(ActionBarIcon);
    app.use(ActionBarButton);    
}
export {useVant}
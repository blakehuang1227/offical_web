import Vue from 'vue';

export default ({ route, redirect }) => {
    // console.log(route)

    let eventCategory = route.fullPath;

    switch (route.fullPath) {
        case "/":
            eventCategory = "首頁";
            break;
        case "/store":
            eventCategory = "店鋪中心";
            break;
        case "/about":
            eventCategory = "關於我們";
            break;
        default:

    }

    // Vue.gtm.trackEvent({
    //     event: null, // Event type [default = 'interaction'] (Optional)
    //     category: eventCategory,
    //     action: '進入頁面',
    //     label: '',
    //     value: 0,
    //     noninteraction: false // Optional
    // });
    // Vue.gtm.trackView("666", "666");

    // Vue.$ga.event(eventCategory, "進入頁面", "", 0); //eventCategory, eventAction, eventLabel, eventValue(int)
    if (route.meta[0].requiresAuth) {
        console.log('需要驗證');
        //API 驗證登入狀態等等動作)
        // const authStates = false; // 改為 true 就可以進入了
        // if (!authStates) { // 若沒有登入就使用返回登入頁面
        //     return redirect('/auth/login')
        // }
    }

    // if (!store.state.authenticated) {
    //     return redirect('/login')
    // }
}
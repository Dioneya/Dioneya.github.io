var app = new Vue({
    el:'#main-info',
    data:{
        slideActive: 1
    },
    methods: {
        changeSlide(index){
            app.slideActive = index;
        }
    }
})



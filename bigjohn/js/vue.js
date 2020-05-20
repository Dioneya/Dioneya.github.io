var app = new Vue({
    el:'#main-info',
    data:{
        //Пиццы, список
        pizzas: [
            {img: 'img/construcotor-items/pizzas/adreatikojpg.jpg',name: 'Андриатико', price: 299},
            
            {img: 'img/construcotor-items/pizzas/adreatikojpg.jpg',name: 'Андриатико', price: 299},
            
            {img: 'img/construcotor-items/pizzas/adreatikojpg.jpg',name: 'Андриатико', price: 299},
        ],
        //Домашняя кухня, список
        homeCooking: [
            {img: 'img/construcotor-items/salade/salade1.jpg',name: 'Домашняя кухня', price: 299},
            
            {img: 'img/construcotor-items/salade/salade1.jpg',name: 'Домашняя кухня', price: 299},
            
            {img: 'img/construcotor-items/salade/salade1.jpg',name: 'Домашняя кухня', price: 299},
            
            {img: 'img/construcotor-items/salade/salade1.jpg',name: 'Домашняя кухня', price: 299},
            
            {img: 'img/construcotor-items/salade/salade1.jpg',name: 'Домашняя кухня', price: 299},
        ],
        
        //Салаты, список 
        salads: [
            {img: 'img/construcotor-items/salade/salade1.jpg',name: 'Салат', price: 299},
            
        ],
        
        //Закуски, список
        snacks: [
            {img: 'img/construcotor-items/salade/salade1.jpg',name: 'Закуски', price: 299},
        ],
        
        //Десерты, список 
        
        desserts: [
            {img: 'img/construcotor-items/salade/salade1.jpg',name: 'Десерт', price: 299},
        ],
        
        //Барная карта, список
        
        drinks:[
            {img: 'img/construcotor-items/salade/salade1.jpg',name: 'Напиток', price: 299},
        ]
        
    },
    methods: {
        set_active(index){
            mySwiper.slideTo(index-1);
        }
    }
})



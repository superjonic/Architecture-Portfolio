import geo1 from './details/geometra.jpg'
import geo2 from './details/proporcion.gif'
import geo3 from './details/proporcion2.png'
import texture1 from './details/texture.jpg'
import texture2 from './details/texture2.jpg'
import image1 from './images/casacountry.jpg'
import image2 from './images/interior.jpg';
import image3 from './images/render.jpg';
import image4 from './images/render2.jpg';
import structure1 from './images/steelfram.jpg'
import plan1 from './plans/plano.png';
import plan2 from './plans/plano2.png';
import plan3 from './plans/plano3.png';
import detail1 from './plans/plano4.jpg';




export var content = { 
    text: {

    },

    geometry: [
        geo1,
        geo2,
        geo3,
    ],
    plans: [
        plan1,
        plan2,
        plan3
    ],
    plandetail:[
        detail1,
    ],
    houses: [
        image1,
        image2,
    ],
    render: [
        image3,
        image4,
    ],
    textures: [
        texture1,
        texture2,
    ],
    structures: [
        structure1
    ]

    
}

export var images = [
    // {
    //     img: geo1,
    //     title: "",
    //     rows: 2,
    //     cols: 2
    // },
    // {
    //     img: geo2,
    //     title: "",
    //     rows: 3,
    //     cols: 2
    // },
    // {
    //     img: geo3,
    //     title: "",
    //     rows: 3 
    // },
    {
        img: image1,
        title: "",
        cols: 2,
        rows: 2
        
    },
    {
        img: image2,
        title: "",
        cols: 4,
        rows: 4
    },
    {
        img: image3,
        title: "",
        cols: 2,
        rows: 1
    },
    {
        img: image4, 
        title: "",
        cols: 2,
        rows: 2
    },
    {
        img:  structure1, 
        title: "",
        cols: 2,
        rows: 2
    },
    {
        img:  plan1, 
        title: "",
        cols: 2        
    },
    {
        img:  plan2, 
        title: "",
        cols: 2,
        
    },
    {
        img:  plan3, 
        title: "",
        cols: 2,
        rows: 2
        
    },
    {
        img:  detail1, 
        title: "",
        cols: 4,
        rows: 2
        
    },
]


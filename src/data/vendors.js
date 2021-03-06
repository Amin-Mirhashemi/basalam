import minoo from '../assets/Ellipse 4.png'
import maryam from '../assets/Ellipse 5.png'
import sosis from '../assets/paniri.png'
import kalbas from '../assets/peste.png'
import roghan from '../assets/roghan.jpg'

export default([
    {
        "id": 1,
        "vendorname": "مزه های خاتون",
        "location": "سعادت شهر",
        "products": [
            {
                "id": 1,
                "name": "کالباس پسته",
                "price": 75000,
                "primarayPrice": 80000,
                "amount": 3,
                "photo": sosis
            },
            {
                "id": 2,
                "name": "سوسیس آلمانی",
                "price": 65000,
                "primarayPrice": 75000,
                "amount": 2,
                "photo": kalbas
            }
        ],
        "ownername": "مینو همگام",
        "ownerphoto": minoo,
        "havecopon": true
    },
    {
        "id": 2,
        "vendorname": "محصولات غذایی ولیک",
        "location": "بوشهر",
        "products": [
            {
                "id": 3,
                "name": "روغن زیتون",
                "price": 45000,
                "primarayPrice": 53000,
                "amount": 1,
                "photo": roghan
            }
        ],        
        "ownername": "مریم خوشدل",
        "ownerphoto": maryam,
        "havecopon": false        
    }  
  
])

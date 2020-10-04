import { Request, Response, NextFunction } from 'express';

import Product from '../models/product';

import db from '../database/connection'
        
     

export  = {
    async store(req: Request, res: Response ){      
        const { description, price, quant, street, building, lvl, apto } = req.body;       
          

        let p1: Product = {
            description: description,
            price: price,
            quant: quant, 
            id: "",
            
            street: street,
            building: building,
            lvl: lvl,
            apto: apto,
        };
        
        console.log(p1)

        try {
            await db.collection('products').doc().set(p1);   
            res.status(201).json({
                message: "Product added!",
                ProductAdded: {
                    id: p1.id, //the product id

                    description: p1.description,
                    price: p1.price,
                    quant: p1.quant,

                    street: p1.street,
                    building: p1.building,
                    lvl: p1.lvl,  
                    apto: p1.apto,                     
                }
            })
        } catch(err){
            console.log(err),
                    res.status(500).json({
                        error: err
                    });
        }     
    }
}
"use client"
import React, { useEffect, useState } from 'react'
import HomeTabBar from './HomeTabBar';
import { productType } from '@/constants/data';
import { Loader2 } from 'lucide-react';

const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");
    
    // getting data here from sanity.
      // logic not added .. later will be added ..since not learing sanity as of now.

      useEffect(()=>{
        setLoading(true);
        try{
          const fetchData = async () => {}
        }catch(error){

        }finally{
            setLoading(false);
        }
      },[selectedTab])
  return (
    <div>
      <HomeTabBar selectedTab ={selectedTab}  onTabSelect={setSelectedTab}/>
      {!loading ? (
             <div>
                <Loader2/>
               product is loading.
             </div>
      ):(
        <>products </>
      )}
    </div>
  )
}

export default ProductGrid

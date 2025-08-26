import { TagIcon } from "lucide-react";
import { defineField, defineType } from "sanity";


export const brandType = defineType({
    name : "brand",
    title :"Brand",
    type :"document",
    icon : TagIcon,
    fields:[
       defineField({
         name :"string",
         type :"string"
       }),
       defineField({
          name:"string",
          type : "slug",
          options:{
            source : "title"
          }
       }),
       defineField({
         name :"description",
         type :"text",
       }),
       defineField({
         name :"image",
         title :"Brand Image",
         type :"image",
         options:{
            hotspot : true,
         }
       })
    ],
    preview :{
        select : {
            title : "title",
            subtitle : "description",
            media :"image",
        }
    }
})
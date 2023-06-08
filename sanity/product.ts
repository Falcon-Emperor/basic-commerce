import { defineType, defineField } from "sanity";

export const product = defineType ({
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Product Description'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Product Price'
        },
        
        {
            name: 'image',
            type: 'image',
            title: 'Product Image'
        },
            defineField({
                name: 'category',
                title: 'Product Category',
                type: 'reference',
                to: [
                    {
                        type: "category"
                    }
                ]

            })
    ]
})
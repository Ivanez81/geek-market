<template>
    <div id="table">
        <figure class="product-list">
            <a href="#">
                <img v-bind:src=products.imagePath alt="">
                <p>{{products.category.title}}</p>
                <figcaption>
                    <p>{{products.title}}</p>
                    <p>{{products.shortDescription}}</p>
                    <p class="price">Цена: {{products.price}}</p>
                </figcaption>
            </a>
            <a href="#" class="buy">Купить</a>
        </figure>
    </div>
</template>

<script>
    export default {
        props: ['product'],
    }
</script>
<template>
    <div>
        <div>
            <h2>{{house.title}}</h2>

            <p>{{house.price}}</p>
            <p>{{house.img}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HouseDetails',
    props: {
        house: Object
      }
}
</script>
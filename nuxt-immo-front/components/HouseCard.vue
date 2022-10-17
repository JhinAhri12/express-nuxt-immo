<template>
    <div>
        <div>
            <h2>{{house.title}}</h2>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HouseCard',
    props: {
        house: Object
      }
}
</script>
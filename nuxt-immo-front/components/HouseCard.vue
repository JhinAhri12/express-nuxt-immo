<template>
    <div>
        <div>
            <h2>{{house.title}}</h2>
            <nuxt-link class="btn btn-switch-wine" :to="'/house/' + house._id">Voir les détails</nuxt-link>
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
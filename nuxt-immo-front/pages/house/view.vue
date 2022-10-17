<template>
    <div>
        <HouseCard 
          v-for="(house,id) in houses"
          :key="id"
          :house="house"
          :data-index="id"
        />
    </div>
    
</template>
<script>
import HouseCard from '@/components/HouseCard.vue'
export default {
    data(){
        return {
            houses: ''
        }
    },
      async asyncData({ $axios, error }) {
        try {
          const { data } = await $axios.get(
            'http://localhost:3001/house/index'
                      )
          return {
            houses: data
          }
        } catch (e) {
          error({
            statusCode: 503,
            message: 'Unable to fetch house '
          })
        }
      },
}
</script>
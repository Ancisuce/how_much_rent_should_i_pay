export default {
  name: 'Home',
  data () {
    return {
      square: '',
      roomQuantity: null,
      rent: '',
      rooms: []
    }
  },
  watch: {
    roomQuantity (value) {
      const rooms = []
      for(let i=0; i<value; i++) {
        rooms.push({
          index: i + 1,
          square: 1
        })
      }
      
      this.rooms = rooms
    }
  },
  computed: {
    baseInfoFilled () {
      return this.square && this.roomQuantity && this.rent
    },

    roomsSquare () {
      if(!this.rooms.length) return

      let square = 0
      for(const e of this.rooms) {
        square += e.square
      }
      return square
    },

    basedOnRoomsOnly () {
      if(!this.rooms.length) return
      
      return this.rooms.map((e, i) => {
        return {
          index: i + 1,
          square: e.square,
          rent: ((e.square / this.roomsSquare) * this.rent).toFixed(2)
        }
      })

    },

    publicShared () {
      if(!this.rooms.length) return

      const avarageM2Rent = (this.rent / this.square).toFixed(2)

      let publicM2 = this.square
      for(let i=0;i<this.rooms.length;i++) {
        publicM2 -= this.rooms[i].square
      }

      return this.rooms.map((e, i) => {
        return {
          index: i + 1,
          square: e.square,
          rent: (e.square * avarageM2Rent + publicM2 * avarageM2Rent / 3).toFixed(2),
          privateRent: (e.square * avarageM2Rent).toFixed(2),
          publicRent: (publicM2 * avarageM2Rent / 3).toFixed(2)
        }
      })
    },

    reset () {
      window.reload()
    },
    
    saveData () {},
    
    loadData () {}
  }
}

export default function scrollPosition(propertyName){
    // console.log(window.scrollY)
    return{
        data(){
            return{
                [propertyName]: 0
            }
        },
        created(){
            if(!this.$isServer){
                this._scrollListener = () => {
                    this[propertyName] = Math.round(window.scrollY)
                }

                this._scrollListener()

                window.addEventListener('scroll', this._scrollListener)

                // console.log([propertyName])
            }
        },
        beforeDestroy(){
            window.removeEventListener('scroll', this._scrollListener)
        }
    }
}
class Items {
    constructor(itemType, itemPrice, itemName, itemAvailability){
    this.itemType = itemType
    this.itemPrice = itemPrice
    this.itemName = itemName
    this.itemAvailability = itemAvailability
    }
    get itemType(){
        return this.itemName
    }
    speak(){
        console.log(`this item is a ${this.itemType}`)
    }
}
class Sunglasses extends Items{
    constructor(itemType, itemPrice, itemName, itemAvailability){
        super(itemType)
    }
}
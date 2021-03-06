class Form {
constructor(){
    this.input = createInput("name")
    this.input.position(400,200)
    this.button = createButton("Play")
    this.button.position(470,270)
    this.greeting = createElement("h3")
}
display(){


    var title = createElement("H1")
title.html("Car Race")
title.position(450,120)





this.button.mousePressed(()=>{
this.input.hide()
this.button.hide()

player.name = this.input.value()
playercount = playercount+1
player.index = playercount
player.update()
player.updatecount(playercount)

this.greeting.html("Hi "+ name + " ! ")
this.greeting.position(200,200)
})
}
hide(){
this.input.hide()
this.button.hide()
this.greeting.hide()

}
}
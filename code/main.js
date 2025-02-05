import kaplay from "kaplay";

const k= kaplay({
    width:1250,height:660,
});
k.loadBean();
k.setGravity(2000);
const player=k.add([
   k.sprite("bean"),k.pos(k.center()),k.area(),k.body(),k.offscreen(),
])
player.onKeyPress("space",()=>{
    if(player.isGrounded()){
        player.jump();

    }
player.onExitScreen(()=>{
    k.go("gameover")
})
k.scene("gameover",()=>{
    k.add([k.text("Game over!"),k.pos([k.center()])])
    
})
let counter=0;
const counterUI=k.add([k.text("0")]);
k.loop(1,()=>{
    counter++;
    counterUI.text=counter;
    const speed=[100,300,800,1000,1200];
    const currentSpeed=speed[Math.floor( Math.random() *speed.length)];
    k.add([
        k.rect(50,50),
        k.pos(1000,500),
        k.area(),
        k.body(),
        k.outline(3),
        k.move(k.vec2(-1,0),currentSpeed),
    ])
})
})
k.add([
    k.rect(k.width(),300),
    k.pos(0,500),
    k.area(),
    k.outline(3),
    k.body({isStatic:true}),
])

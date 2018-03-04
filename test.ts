let 环境光强度 = 0
BH1750.设置地址(BH1750_ADDRESS.A35)
led.plotBarGraph(
100,
100
)
basic.forever(() => {
    环境光强度 = BH1750.获取环境光强度()
    led.setBrightness(20 + 环境光强度 / 512)
    basic.pause(500)
})

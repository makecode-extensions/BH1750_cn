/**
 * makecode BH1750 Digital Ambient Light Sensor Package.
 * From microbit/micropython Chinese community.
 * http://www.micropython.org.cn
 */

// BH1750's I2C address
enum BH1750_ADDRESS {
    //% block="35"
    A35,
    //% block="92"
    A92
}

let Address = 35

/**
 * BH1750 数字光强传感器软件包
 */
//% weight=100 color=#000011 icon="\uf185"
namespace BH1750 {
    /**
     * 设置 BH1750 传感器的地址，默认是 35
     * @param is I2C address, eg: 35
     */
    //% block
    export function 设置地址(to: BH1750_ADDRESS): void {
        if (to == BH1750_ADDRESS.A35)
            Address = 35
        else
            Address = 92
    }

    /**
     * 打开 BH1750，开始转换光强。
     */
    //% block
    export function 打开(): void {
        pins.i2cWriteNumber(Address, 0x10, NumberFormat.UInt8BE)
    }

    /**
     * 关闭 BH1750，省电模式。
     */
    //% block
    export function 关闭(): void {
        pins.i2cWriteNumber(Address, 0, NumberFormat.UInt8BE)
    }

    /**
     * 获取环境光强度 (lx)
     */
    //% block
    export function 获取环境光强度(): number {
        return pins.i2cReadNumber(Address, NumberFormat.UInt16BE) * 5 / 6
    }

    打开();
}

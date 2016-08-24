Please see also: https://github.com/club-wot/WebGPIO

## use settings

 1. setup

```

# settings
npm i -g bower

# polyfill install
bower install

```

 2. deployment to chirimen

 3. enjoy LPS25H (barometer sensor)

## How to construct circuit

Japanese

http://fabble.cc/chirimenedu/chirimeni2csensor




 MEMS pressure sensor: 260-1260 hPa absolute digital output barometer
 http://www.st.com/content/st_com/en/products/mems-and-sensors/pressure-sensors/lps25h.html

 http://akizukidenshi.com/catalog/g/gK-08338/

 LPS25      chirimen
 VDD    <-> VDD(3.3v)
 SCL    <-> 
 SDA    <-> 
 SDO    <-> GND
 CS     <-> VDD(3.3v) I2C mode
 GND    <-> GND


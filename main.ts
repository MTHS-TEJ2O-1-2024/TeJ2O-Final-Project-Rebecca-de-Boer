/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/

// Variables 


// Set up 
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// if button a is pressed move forward
 {input.onButtonPressed(Button.A, function() {
    basic.showIcon(IconNames.Heart)
        robotbit.StpCarMove(20, 66.4)
        })
 }

 // if button b is pressed move backwords
{basic.pause(1000)
    input.onButtonPressed(Button.B, function () {
        basic.showIcon(IconNames.Heart)
        robotbit.StpCarMove(-20, 66.4)
    })
}
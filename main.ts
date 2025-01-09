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
if (input.buttonIsPressed(Button.A)) {
    basic.showIcon(IconNames.Yes)
    robotbit.StpCarMove(10, 48)
}
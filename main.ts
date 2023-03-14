radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
        basic.pause(10000)
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor3)
    }
})
radio.onReceivedString(function (receivedString) {
	
})
radio.onReceivedValue(function (name, value) {
    if (name.compare("y") == 0) {
        forwardback = value
    }
    if (name.compare("x") == 0) {
        leftright = value
    }
})
let leftright = 0
let forwardback = 0
basic.showIcon(IconNames.Rollerskate)
radio.setGroup(2)
basic.forever(function () {
    if (forwardback > 100) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
    }
    if (forwardback < -100) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
    }
    if (leftright > 200) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor2)
    }
    if (leftright < -200) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    }
})

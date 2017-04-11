// game's disks
var disks = {        
    /*1*/turquoise : {  color: "#7fddad",
                        width: 42,
                        rodGap: 101,
                        isDragging: false,
                        changePlace: false,
                        x : 0,
                        y : 0 },
    
    /*2*/red : { color: "#e67b7d",
                    width: 66,
                    rodGap: 89,
                    isDragging: false,
                    changePlace: false,
                    x : 0,
                    y : 0 },
    
    /*3*/yellow : { color: "#e0e189",
                    width: 90,
                    rodGap: 77,
                    isDragging: false,
                    changePlace: false,
                    x : 0,
                    y : 0 },
    
    /*4*/blue   : { color: "#73cad4",
                    width: 114,
                    rodGap: 65,
                    isDragging: false,
                    changePlace: false,
                    x : 0,
                    y : 0},
    
    /*5*/purple : { color: "#9a73d4",
                    width: 138,
                    rodGap: 53,
                    isDragging: false,
                    changePlace: false,
                    x : 0,
                    y : 0 },
    
    /*6*/orange : { color: "#d4b173",
                    width: 162,
                    rodGap: 41,
                    isDragging: false,
                    changePlace: false,
                    x : 0,
                    y : 0 },
    
    /*7*/green  : { color: "#afe66e",
                    width: 186,
                    rodGap: 29,
                    isDragging: false,
                    changePlace: false,
                    x : 0,
                    y : 0 },
    
    /*8*/pink   : { color: "#ed82b7",
                    width: 210,
                    rodGap: 17,
                    isDragging: false,
                    changePlace: false,
                    x : 0,
                    y : 0 },
}


// game's levels
var levels = [
/*0*/{
        rod_1 : [],
        rod_2 : [],
        ros_3 : []
     },
/*1*/{
        rod_1 : [disks.pink, disks.green, disks.orange],
        rod_2 : [],
        ros_3 : []
     },
/*2*/{
        rod_1 : [disks.pink, disks.green, disks.orange, disks.purple],
        rod_2 : [],
        ros_3 : []
     },
/*3*/{
        rod_1 : [disks.pink, disks.green, disks.orange, disks.purple, disks.blue],
        rod_2 : [],
        ros_3 : []
     },
/*4*/{
        rod_1 : [disks.pink, disks.green, disks.orange, disks.purple, disks.blue, disks.yellow],
        rod_2 : [],
        ros_3 : []
     },
/*5*/{
        rod_1 : [disks.pink, disks.green, disks.orange, disks.purple, disks.blue, disks.yellow, disks.red],
        rod_2 : [],
        ros_3 : []
     },
/*6*/{
        rod_1 : [disks.pink, disks.green, disks.orange, disks.purple, disks.blue, disks.yellow, disks.red, disks.turquoise],
        rod_2 : [],
        ros_3 : []
     }
]
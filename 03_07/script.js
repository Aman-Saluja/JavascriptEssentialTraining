const dummy = {
    dummyStatus  :  true,
    dummyColor  :  "red",
    toggleDummyStatus : function(newStatus){
        this.dummyStatus = newStatus
    },
    changeDummyColor : function (newColor) {
        this.dummyColor = newColor;
    }
};